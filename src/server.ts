import * as express from 'express';
import * as http from 'http';
import * as process from 'process';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as path from 'path';
import * as errorHandler from 'errorhandler';   //import errorHandler = require('errorhandler');
import * as bodyParser from 'body-parser';
import * as socketIo from 'socket.io';
// import * as cookieParser from "cookie-parser";
// import methodOverride = require("method-override");

import Config, {ConfigKeysEnum} from './lib/Config';
import { IndexRoute } from "./controllers/index";
// import * as DB from './middlewares/DB';
import * as mongoose from 'mongoose';

class Server {
    public app: express.Application;
    private server: any;
    private io: any;

    public static bootstrap(): Server {
        return new Server();
    }

    private constructor() {
        //create expressjs application
        this.app = express();

        this.server = http.createServer(this.app);

        // Load environment variables from .env file, where API keys and passwords are configured.
        //dotenv.config({ path: ".env.example" });

        //configure application
        this.setConfig();

        //add routes
        this.setRoutes();
    }

    private setConfig() {
        if (!process.env.NODE_ENV) {
            process.env.NODE_ENV = 'local';
        }

        // configure the port
        this.app.set('port', process.env.PORT || Config.getConfig(ConfigKeysEnum.port));

        // mount static paths (we don't use this as we are not rendering anything)
        // this.app.use(express.static(path.join(__dirname, "public")));


        // mount logger
        this.app.use((process.env.NODE_ENV === 'local') ?morgan('dev') :morgan('combined'));

        // mount cors
        this.app.use(cors({
            exposedHeaders: Config.getConfig(ConfigKeysEnum.corsHeaders)
        }));

        // mount json form parser
        this.app.use(bodyParser.json({
            limit: Config.getConfig(ConfigKeysEnum.bodyLimit)
        }));

        // mount query string parser
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        // mount cookie parser
        // this.app.use(cookieParser("SECRET_GOES_HERE"));

        // socket.io
        this.io = socketIo(this.server);

        // catch 404 and forward to error handler
        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            err.status = 404;
            next(err);
        });

        //error handling
        this.app.use(errorHandler());

        // start the server
        this.server.listen(this.app.get('port'), () => {
            //console.log(("  App is running at http://localhost:%d in %s mode"), this.app.get('port'), this.app.get("env"));
            console.log(`  App is running at 'http://localhost:${this.app.get('port')}' in '${this.app.get('env')}' mode.`);
            console.log(`  Press CTRL-C to stop\n`);
        });

        this.setSocketIO();
    }

    private setRoutes() {
        let router: express.Router;

        router = express.Router();

        //IndexRoute
        new IndexRoute(router).createRoutes();

        //use router middleware
        this.app.use(router);
    }

    private setSocketIO(): void {
        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', this.app.get('port'));
            
            socket.on('currency', (message: {currency: string, rate: number}) => {
                // console.log('[server](message): %s', JSON.stringify(m));                
                this.io.emit('currency_update_rss', message);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });

        let count = 0;
        let rec = () => {
            setTimeout(() => {
                this.io.emit('currency_update_rss', this.getRandomCurreny());
                rec();
            }, 1000);
        }
        rec();
    }
    private getRandomCurreny(): {currency: string, rate: number} {
        enum CurrencyTypeEnums {
            USD,
            GBP,
            EUR,
            TRY,
            JPY
        };

        let random = Math.floor(Math.random() * 10000);

        return {
            currency: CurrencyTypeEnums[random % 5],
            rate: random
        };
    }
}

export default Server.bootstrap();

/**
 * Module dependencies.
 */
import * as express from 'express';
import * as process from 'process';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as path from 'path';
import * as errorHandler from 'errorhandler';   //import errorHandler = require('errorhandler');
import * as bodyParser from 'body-parser';
// import * as cookieParser from "cookie-parser";
// import methodOverride = require("method-override");

import Config, {ConfigKeysEnum} from './lib/Config';
import { IndexRoute } from "./controllers/index";

class Server {
    public app: express.Application;

    public static bootstrap(): Server {
        console.log(`NODE_ENV environment is: ${process.env.NODE_ENV}`);
        console.log(`Port is: ${process.env.port}`);
        
        return new Server();
    }

    private constructor() {
        //create expressjs application
        this.app = express();

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
        this.app.set('port', process.env.PORT || Config.instance.getConfig(ConfigKeysEnum.port));

        // mount static paths (we don't use this as we are not rendering anything)
        // this.app.use(express.static(path.join(__dirname, "public")));


        // mount logger
        if(process.env.NODE_ENV === 'local') {
            this.app.use(morgan('dev'));
        } else {
            this.app.use(morgan('combined'));
        }
        

        // mount cors
        this.app.use(cors({
            exposedHeaders: Config.instance.getConfig(ConfigKeysEnum.corsHeaders)
        }));

        // mount json form parser
        this.app.use(bodyParser.json({
            limit: Config.instance.getConfig(ConfigKeysEnum.bodyLimit)
        }));

        // mount query string parser
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        // mount cookie parser
        // this.app.use(cookieParser("SECRET_GOES_HERE"));

        // mount override?
        // this.app.use(methodOverride());

        // catch 404 and forward to error handler
        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });

        //error handling
        this.app.use(errorHandler());

        // start the server
        this.app.listen(this.app.get('port'), () => {
            //console.log(("  App is running at http://localhost:%d in %s mode"), this.app.get('port'), this.app.get("env"));
            console.log(`  App is running at 'http://localhost:${this.app.get('port')}' in '${this.app.get('env')}' mode.`);
            console.log(`  Press CTRL-C to stop\n`);
        });
    }

    private setRoutes() {
        let router: express.Router;

        router = express.Router();

        //IndexRoute
        new IndexRoute(router).createRoutes();

        //use router middleware
        this.app.use(router);
    }
}

export default Server.bootstrap();

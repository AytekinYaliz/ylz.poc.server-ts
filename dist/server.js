"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const process = require("process");
const morgan = require("morgan");
const cors = require("cors");
// import * as path from 'path';
const errorHandler = require("errorhandler"); //import errorHandler = require('errorhandler');
const bodyParser = require("body-parser");
const socketIo = require("socket.io");
// import * as db from './middlewares/db';
// import * as cookieParser from "cookie-parser";
// import methodOverride = require("method-override");
const Config_1 = require("./lib/Config");
const index_1 = require("./controllers/index");
// import * as DB from './middlewares/DB';
const mongoose = require("mongoose");
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
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
    setConfig() {
        if (!process.env.NODE_ENV) {
            process.env.NODE_ENV = 'local';
        }
        // configure the port
        this.app.set('port', process.env.PORT || Config_1.default.getConfig(Config_1.ConfigKeysEnum.port));
        // mount static paths (we don't use this as we are not rendering anything)
        // this.app.use(express.static(path.join(__dirname, "public")));
        // mount logger
        this.app.use((process.env.NODE_ENV === 'local') ? morgan('dev') : morgan('combined'));
        // mount cors
        this.app.use(cors({
            exposedHeaders: Config_1.default.getConfig(Config_1.ConfigKeysEnum.corsHeaders)
        }));
        // mount json form parser
        this.app.use(bodyParser.json({
            limit: Config_1.default.getConfig(Config_1.ConfigKeysEnum.bodyLimit)
        }));
        // mount query string parser
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        // mount cookie parser
        // this.app.use(cookieParser("SECRET_GOES_HERE"));
        // mongoDb
        this.setMongoDb();
        // socket.io
        this.setSocketIo();
        // catch 404 and forward to error handler
        this.app.use((err, req, res, next) => {
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
        process.on('exit', () => {
            console.log('EXIT', mongoose.connection.readyState);
            if (mongoose.connection.readyState === 1) {
                mongoose.connection.close(() => {
                    console.log('Mongoose default connection disconnected through app termination');
                });
            }
        });
        //catches ctrl+c event
        process.on('SIGINT', () => {
            console.log('SIGINT', mongoose.connection.readyState);
            if (mongoose.connection.readyState === 1) {
                mongoose.connection.close(() => {
                    console.log('Mongoose default connection disconnected through app termination');
                    process.exit(0);
                });
            }
        });
        // //catches uncaught exceptions
        // process.on('uncaughtException', (e: any) => {
        //     console.log('uncaughtException', mongoose.connection.readyState);
        //     if (mongoose.connection.readyState === 1) {
        //         mongoose.connection.close(() => {
        //             console.log('Mongoose default connection disconnected through app termination');
        //         });
        //     }
        // });
    }
    setRoutes() {
        let router;
        router = express.Router();
        //IndexRoute
        new index_1.IndexRoute(router).createRoutes();
        //use router middleware
        this.app.use(router);
    }
    setMongoDb() {
        const mongoUrl = Config_1.default.getConfig(Config_1.ConfigKeysEnum.mongoUrl);
        mongoose.connect(mongoUrl);
        // When successfully connected
        mongoose.connection.on('connected', () => {
            console.log('Mongoose default connection open to: ' + mongoUrl);
        });
        // If the connection throws an error
        mongoose.connection.on('error', () => {
            console.log("MongoDB connection error. Please make sure MongoDB is running.");
            //process.exit();
        });
        // When the connection is disconnected
        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose default connection disconnected from: ' + mongoUrl);
        });
    }
    setSocketIo() {
        this.io = socketIo(this.server);
        this.io.on('connect', (socket) => {
            console.log('Connected client on port %s.', this.app.get('port'));
            socket.on('currency', (message) => {
                // console.log('[server](message): %s', JSON.stringify(m));
                this.io.emit('currency_update_rss', message);
            });
            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
        let count = 0;
        const rec = () => {
            if (count > 10) {
                return;
            }
            setTimeout(() => {
                this.io.emit('currency_update_rss', this.getRandomCurreny());
                count++;
                rec();
            }, 1000);
        };
        rec();
    }
    getRandomCurreny() {
        let CurrencyTypeEnums;
        (function (CurrencyTypeEnums) {
            CurrencyTypeEnums[CurrencyTypeEnums["USD"] = 0] = "USD";
            CurrencyTypeEnums[CurrencyTypeEnums["GBP"] = 1] = "GBP";
            CurrencyTypeEnums[CurrencyTypeEnums["EUR"] = 2] = "EUR";
            CurrencyTypeEnums[CurrencyTypeEnums["TRY"] = 3] = "TRY";
            CurrencyTypeEnums[CurrencyTypeEnums["JPY"] = 4] = "JPY";
        })(CurrencyTypeEnums || (CurrencyTypeEnums = {}));
        const random = Math.floor(Math.random() * 10000);
        return {
            currency: CurrencyTypeEnums[random % 5],
            rate: random
        };
    }
}
exports.default = Server.bootstrap();
//# sourceMappingURL=server.js.map
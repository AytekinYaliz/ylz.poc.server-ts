"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
const express = require("express");
const process = require("process");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("errorhandler"); //import errorHandler = require('errorhandler');
const bodyParser = require("body-parser");
// import * as cookieParser from "cookie-parser";
// import methodOverride = require("method-override");
const Config_1 = require("./lib/Config");
const index_1 = require("./controllers/index");
class Server {
    static bootstrap() {
        console.log(`NODE_ENV environment is: ${process.env.NODE_ENV}`);
        console.log(`Port is:${process.env.port}`);
        
        return new Server();
    }
    constructor() {
        //create expressjs application
        this.app = express();
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
        this.app.set('port', process.env.PORT || Config_1.default.instance.getConfig(Config_1.ConfigKeysEnum.port));
        // mount static paths (we don't use this as we are not rendering anything)
        // this.app.use(express.static(path.join(__dirname, "public")));
        // mount logger
        if (process.env.NODE_ENV === 'local') {
            this.app.use(morgan('dev'));
        }
        else {
            this.app.use(morgan('combined'));
        }
        // mount cors
        this.app.use(cors({
            exposedHeaders: Config_1.default.instance.getConfig(Config_1.ConfigKeysEnum.corsHeaders)
        }));
        // mount json form parser
        this.app.use(bodyParser.json({
            limit: Config_1.default.instance.getConfig(Config_1.ConfigKeysEnum.bodyLimit)
        }));
        // mount query string parser
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        // mount cookie parker
        // this.app.use(cookieParser("SECRET_GOES_HERE"));
        // mount override?
        // this.app.use(methodOverride());
        // catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
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
    setRoutes() {
        let router;
        router = express.Router();
        //IndexRoute
        new index_1.IndexRoute(router).createRoutes();
        //use router middleware
        this.app.use(router);
    }
}
exports.default = Server.bootstrap();
//# sourceMappingURL=server.js.map

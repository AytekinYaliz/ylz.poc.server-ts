"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("./Utilities");
var ConfigKeysEnum;
(function (ConfigKeysEnum) {
    ConfigKeysEnum[ConfigKeysEnum["port"] = 0] = "port";
    ConfigKeysEnum[ConfigKeysEnum["bodyLimit"] = 1] = "bodyLimit";
    ConfigKeysEnum[ConfigKeysEnum["corsHeaders"] = 2] = "corsHeaders";
    ConfigKeysEnum[ConfigKeysEnum["mongoUrl"] = 3] = "mongoUrl";
})(ConfigKeysEnum = exports.ConfigKeysEnum || (exports.ConfigKeysEnum = {}));
var DeploymentTypesEnum;
(function (DeploymentTypesEnum) {
    DeploymentTypesEnum["test"] = "test";
    DeploymentTypesEnum["development"] = "development";
    DeploymentTypesEnum["production"] = "production";
})(DeploymentTypesEnum = exports.DeploymentTypesEnum || (exports.DeploymentTypesEnum = {}));
class Config {
    static getConfig(name) {
        if (!Config._config) {
            Config.loadConfig();
        }
        return Config._config[Utilities_1.default.getEnumString(ConfigKeysEnum, name)];
    }
    static loadConfig() {
        if (process.env.NODE_ENV === DeploymentTypesEnum.development) {
            Config._config = {
                port: '4001',
                'bodyLimit': '100kb',
                'corsHeaders': '["Link"]',
                // 'mongoUrl': 'mongodb://db_user1:lighthouse@ds161022.mlab.com:61022/lh_accountancy'
                'mongoUrl': 'mongodb://localhost:27017/lh_accountancy'
            };
            return;
        }
        else if (process.env.NODE_ENV === DeploymentTypesEnum.test) {
            Config._config = {
                port: '4002',
                bodyLimit: '',
                corsHeaders: '',
                mongoUrl: ''
            };
            return;
        }
        Config._config = JSON.parse(process.env.config);
    }
}
Config._config = null;
Object.seal(Config);
exports.default = Config;
/*
export default class Config {
    private static _instance: Config;
    private config: any = null;

    private constructor() { }

    public static get instance(): Config {
        return this._instance || (this._instance = new this());
    }

    public getConfig(name: ConfigKeysEnum): string {
        if (!this.config) {
            this.loadConfig();
        }

        return this.config[Utilities.getEnumString(ConfigKeysEnum, name)];
    }

    private loadConfig(): void {
        if (process.env.NODE_ENV === Utilities.getEnumString(DeploymentTypesEnum, DeploymentTypesEnum.local)) {
            this.config = {
                'port': '4001',
                'bodyLimit': '100kb',
                'corsHeaders': '["Link"]',
                'mongoUrl': 'mongodb://db_user1:lighthouse@ds161022.mlab.com:61022/lh_accountancy'
            };
            return;
        } else if (process.env.NODE_ENV === Utilities.getEnumString(DeploymentTypesEnum, DeploymentTypesEnum.test)) {
            this.config = {
                'port': '4002'
            };
            return;
        }

        this.config = JSON.parse(process.env.config);
    }
}
*/ 
//# sourceMappingURL=Config.js.map
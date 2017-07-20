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
    DeploymentTypesEnum[DeploymentTypesEnum["test"] = 0] = "test";
    DeploymentTypesEnum[DeploymentTypesEnum["local"] = 1] = "local";
    DeploymentTypesEnum[DeploymentTypesEnum["prod"] = 2] = "prod";
})(DeploymentTypesEnum = exports.DeploymentTypesEnum || (exports.DeploymentTypesEnum = {}));
class Config {
    constructor() {
        this.config = null;
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    getConfig(name) {
        if (!this.config) {
            this.loadConfig();
        }
        return this.config[Utilities_1.default.getEnumString(ConfigKeysEnum, name)];
    }
    loadConfig() {
        if (process.env.NODE_ENV === Utilities_1.default.getEnumString(DeploymentTypesEnum, DeploymentTypesEnum.local)) {
            this.config = {
                'port': '4001',
                'bodyLimit': '100kb',
                'corsHeaders': '["Link"]',
                'mongoUrl': 'mongodb://db_user1:lighthouse@ds161022.mlab.com:61022/lh_accountancy'
            };
            return;
        }
        else if (process.env.NODE_ENV === Utilities_1.default.getEnumString(DeploymentTypesEnum, DeploymentTypesEnum.test)) {
            this.config = {
                'port': '4002'
            };
            return;
        }
        this.config = {
            //'port': '4001',
            'bodyLimit': '100kb',
            'corsHeaders': '["Link"]'
        };
    }
}
exports.default = Config;
//# sourceMappingURL=Config.js.map
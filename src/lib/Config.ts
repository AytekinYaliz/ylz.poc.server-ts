import Utilities from './Utilities';


export enum ConfigKeysEnum {
    port,
    bodyLimit,
    corsHeaders,
    mongoUrl
}
export enum DeploymentTypesEnum {
    test = 'test',
    development = 'development',
    production = 'production'
}

type TConfig = {
    [key: string]: string;
    port: string;
    bodyLimit: string;
    corsHeaders: string;
    mongoUrl: string;
};

class Config {
    private static _config: TConfig = null;

    public static getConfig(name: ConfigKeysEnum): string {
        if (!Config._config) {
            Config.loadConfig();
        }

        return Config._config[Utilities.getEnumString(ConfigKeysEnum, name)];
    }

    private static loadConfig(): void {
        if (process.env.NODE_ENV === DeploymentTypesEnum.development) {
            Config._config = {
                port: '4001',
                'bodyLimit': '100kb',
                'corsHeaders': '["Link"]',
                // 'mongoUrl': 'mongodb://db_user1:lighthouse@ds161022.mlab.com:61022/lh_accountancy'
                'mongoUrl': 'mongodb://localhost:27017/lh_accountancy'
            };
            return;
        } else if (process.env.NODE_ENV === DeploymentTypesEnum.test) {
            Config._config = {
                port: '4002',
                bodyLimit: '',
                corsHeaders: '',
                mongoUrl: ''
            };
            return;
        }

        Config._config = JSON.parse((<any>process.env).config);
    }
}

Object.seal(Config);
export default Config;



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
/// <reference path="../index.d.ts"/>

export default class EnvironmentUtility {
    static isDevelopment(){
        return !this.isProduction();
    }

    static isProduction(){
        return process.env.NODE_ENV === 'production';
    }
}
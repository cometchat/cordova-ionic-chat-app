import { IonicConfig } from '../interface';
export declare class Config {
    private m;
    constructor(configObj: IonicConfig);
    get(key: keyof IonicConfig, fallback?: any): any;
    getBoolean(key: keyof IonicConfig, fallback?: boolean): boolean;
    getNumber(key: keyof IonicConfig, fallback?: number): number;
    set(key: keyof IonicConfig, value: any): void;
}
export declare function configFromSession(win: Window): any;
export declare function saveConfig(win: Window, config: any): void;
export declare function configFromURL(win: Window): any;

import { h } from '../ionic.core.js';

export { b as getPlatforms, a as isPlatform, c as setupPlatforms, d as testUserAgent, e as PLATFORMS_MAP } from './chunk-f54563a4.js';
export { b as LIFECYCLE_WILL_ENTER, c as LIFECYCLE_DID_ENTER, a as LIFECYCLE_WILL_LEAVE, d as LIFECYCLE_DID_LEAVE, e as LIFECYCLE_WILL_UNLOAD } from './chunk-90d954cd.js';

function setupConfig(config) {
    const win = window;
    const Ionic = win.Ionic;
    if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
        console.error('ionic config was already initialized');
        return;
    }
    win.Ionic = win.Ionic || {};
    win.Ionic.config = Object.assign({}, win.Ionic.config, config);
    return win.Ionic.config;
}

export { setupConfig };

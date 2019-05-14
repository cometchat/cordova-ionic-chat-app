"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dev_server_1 = require("@angular-devkit/build-angular/src/dev-server");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const cordova_build_1 = require("../cordova-build");
class CordovaServeBuilder {
    constructor(context) {
        this.context = context;
    }
    run(builderConfig) {
        const { options: cordovaServeOptions } = builderConfig;
        const { devServerTarget, port, host, ssl } = cordovaServeOptions;
        const [project, target, configuration] = devServerTarget.split(':');
        const devServerTargetSpec = { project, target, configuration, overrides: { port, host, ssl } };
        const devServerBuilderConfig = this.context.architect.getBuilderConfiguration(devServerTargetSpec);
        let devServerDescription;
        let cordovaBuildConfig;
        return rxjs_1.of(null).pipe(operators_1.concatMap(() => this.context.architect.getBuilderDescription(devServerBuilderConfig)), operators_1.tap(description => devServerDescription = description), operators_1.concatMap(() => this.context.architect.validateBuilderOptions(devServerBuilderConfig, devServerDescription)), operators_1.concatMap(() => this._getCordovaBuildConfig(cordovaServeOptions)), operators_1.tap(config => cordovaBuildConfig = config), operators_1.concatMap(() => rxjs_1.of(new CordovaDevServerBuilder(this.context, cordovaBuildConfig.options))), operators_1.concatMap(builder => builder.run(devServerBuilderConfig)));
    }
    _getCordovaBuildConfig(cordovaServeOptions) {
        const { platform, cordovaBasePath, cordovaAssets, cordovaMock } = cordovaServeOptions;
        const [project, target, configuration] = cordovaServeOptions.cordovaBuildTarget.split(':');
        const cordovaBuildTargetSpec = { project, target, configuration, overrides: { platform, cordovaBasePath, cordovaAssets, cordovaMock } };
        const cordovaBuildTargetConfig = this.context.architect.getBuilderConfiguration(cordovaBuildTargetSpec);
        return this.context.architect.getBuilderDescription(cordovaBuildTargetConfig).pipe(operators_1.concatMap(cordovaBuildDescription => this.context.architect.validateBuilderOptions(cordovaBuildTargetConfig, cordovaBuildDescription)));
    }
}
exports.CordovaServeBuilder = CordovaServeBuilder;
class CordovaDevServerBuilder extends dev_server_1.DevServerBuilder {
    constructor(context, cordovaBuildOptions) {
        super(context);
        this.cordovaBuildOptions = cordovaBuildOptions;
    }
    buildWebpackConfig(root, projectRoot, host, browserOptions) {
        const builder = new cordova_build_1.CordovaBuildBuilder(this.context);
        builder.validateBuilderConfig(this.cordovaBuildOptions);
        builder.prepareBrowserConfig(this.cordovaBuildOptions, browserOptions);
        return super.buildWebpackConfig(root, projectRoot, host, browserOptions);
    }
}
exports.default = CordovaServeBuilder;

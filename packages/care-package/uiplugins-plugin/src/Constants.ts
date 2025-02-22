export const DEFAULT_ENV_CONTENT = {
    production: false,
    branding: {
        headerTitle: 'VMware Cloud Director'
    }
};

export const DEFAULT_PROXY_CONTENT = {
    '/api/*': {
        target: 'https://<insert your VCD endpoint here>',
        secure: false,
        logLevel: 'debug',
        changeOrigin: true
    },
    '/cloudapi/*': {
        target: 'https://<insert your VCD endpoint here>',
        secure: false,
        logLevel: 'debug',
        changeOrigin: true
    }
};

export const emulatorDeps = {
    scripts: {
        'ng:serve': 'ng serve'
    },
    devDependencies: {
        '@types/jasmine': '2.8.8',
        '@types/jasminewd2': '2.0.3',
        '@vcd/ui-emulator': '0.0.6-alpha.1',
        '@angular-devkit/build-webpack': '0.803.6',
        '@angular-devkit/core': '8.3.19',
        '@angular-devkit/build-angular': '0.803.29',
        '@angular-devkit/schematics': '7.3.8',
        '@angular/cli': '9.1.12',
        '@angular/compiler-cli': '9.1.12',
        '@angular/language-service': '9.1.12',
        'ts-node': '7.0.0',
        tslib: '1.10.0',
        tslint: '5.11.0',
        typescript: '3.8.3',
        '@schematics/angular': '9.1.4',
        '@types/node': '8.9.4',
        codelyzer: '4.3.0',
        'jasmine-core': '2.99.1',
        'jasmine-spec-reporter': '4.2.1',
        karma: '3.0.0',
        'karma-chrome-launcher': '2.2.0',
        'karma-coverage-istanbul-reporter': '2.0.1',
        'karma-jasmine': '1.1.2',
        'karma-jasmine-html-reporter': '0.2.2',
        protractor: '5.4.0',
        'core-js': '2.5.4',
        rxjs: '6.2.0',
        'rxjs-compat': '6.2.0',
        systemjs: '0.20.19',
        'zone.js': '0.8.26',
        '@angular/animations': '9.1.12',
        '@angular/cdk': '8.2.1',
        '@angular/common': '9.1.12',
        '@angular/compiler': '9.1.12',
        '@angular/core': '9.1.12',
        '@angular/forms': '9.1.12',
        '@angular/http': '6.1.0',
        '@angular/platform-browser': '9.1.12',
        '@angular/platform-browser-dynamic': '9.1.12',
        '@angular/router': '9.1.12',
        '@clr/angular': '3.1.3',
        '@clr/icons': '3.1.3',
        '@clr/ui': '3.1.3',
        '@ngrx/store': '6.0.1',
        '@ngtools/webpack': '9.1.7',
        '@vcd/sdk': '0.12.2-alpha.1',
        '@vcd/i18n': '1.0.0-dev.1',
        '@vcd/bindings': '9.1.1',
        '@vcd/ui-components': '1.0.0-dev.46',
        '@webcomponents/custom-elements': '1.0.0'
    },
};

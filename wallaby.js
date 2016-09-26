process.env.NODE_ENV = 'test';

// eslint-disable-next-line func-names
module.exports = function (wallaby) {
    return {
        files: [
            { pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false },
            'src/**/*.js*',
            '!src/**/*.test.js*',
            '!src/**/*.fixture.js',

            { pattern: 'test/*.js', instrument: false },
        ],

        tests: [
            'src/**/*.test.js',
            'src/**/*.test.jsx',
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel(),
            '**/*.jsx': wallaby.compilers.babel(),
        },

        env: {
            type: 'node',
            runner: 'node',
            params: {
                runner: '--harmony',
            },
        },

        testFramework: 'jest',

        setup: function (wallaby) {
            wallaby.testFramework.configure({
                setupTestFrameworkScriptFile: '<rootDir>/test/setup-before-after.js',
                moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
                moduleNameMapper: {
                    '^.+\\.(css|scss|sass)$': '<rootDir>/test/styleMock.js',
                    '^.+\\.(gif|ttf|eot|svg)$': '<rootDir>/test/fileMock.js',
                },
                // testRegex: '/__tests__/.*|\\.(test|spec)\\.(js|jsx)$',
            });
        },
    };
};
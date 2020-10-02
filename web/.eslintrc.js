module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "eslint-plugin-import",
        "@typescript-eslint"
    ],
    "extends": [
        "react-app",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "settings": {
        "react": {
            "pragma"     : "React",
            "version"    : "detect",
        },
    },
    "globals": {
        "process": true
    },
    "rules": {
        // https://github.com/typescript-eslint/typescript-eslint/issues/2315
        // There is an outstanding issue for "import type" statements
        "no-duplicate-imports": "off",

        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-namespace": "error",
        // "@typescript-eslint/no-param-reassign": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/unified-signatures": "warn",
        "comma-dangle": "warn",
        "constructor-super": "error",
        "eqeqeq": [
            "warn",
            "always"
        ],
        "import/no-deprecated": "warn",
        "import/no-extraneous-dependencies": "error",
        "import/no-unassigned-import": "off",
        "no-cond-assign": "error",
        "no-duplicate-case": "error",
        "no-empty": [
            "error",
            {
                "allowEmptyCatch": true
            }
        ],
        "no-invalid-this": "error",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-sequences": "error",
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-throw-literal": "error",
        "no-unsafe-finally": "error",
        "no-unused-labels": "error",
        "no-var": "warn",
        "no-void": "error",
        "prefer-const": "warn"
    }
};

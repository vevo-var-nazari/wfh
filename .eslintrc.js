module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "indent": [2, 4, {"SwitchCase": 1}],
        "quotes": [0,"double"],
        "linebreak-style": [2,"unix"],
        "semi": [0,"never"],
        "no-console": [1],
        "prefer-arrow-callback": [1],
        "no-unused-vars": [1]
    }
};

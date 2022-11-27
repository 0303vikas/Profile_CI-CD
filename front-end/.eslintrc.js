module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
        'commonjs': true,
        'jest/globals': true,
        'cypress/globals': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        
    ],
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react', 'jest', 'cypress'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ]
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
}

const inquirer = require('inquirer');

module.exports = {
    askGithubCredentials: () => {
        const questions = [
            {
                name: 'CMPName',
                type: 'input',
                message: 'Enter your component name:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your component name.';
                    }
                }
            },
            {
                name: 'CMPType',
                type: 'input',
                message: 'Enter your component type: [fullstate = 0 || stateless = 1]',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your component type.';
                    }
                }
            },
            {
                name: 'MethodType',
                type: 'input',
                message: 'Enter your method type: [NULL = 0 || GET = 1 || POST = 2 || PUT = 3 || DELETE = 4]',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your method type.';
                    }
                }
            },
            {
                name: 'ContinuePath',
                type: 'input',
                message: 'Enter your continue path. start with: /',
                // validate: function (value) {
                //     if (value.length) {
                //         return true;
                //     } else {
                //         return 'Please enter your continue path.';
                //     }
                // }
            }
        ];
        return inquirer.prompt(questions);
    },
};
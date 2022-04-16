const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const inquirer = require('./lib/inquirer');
const _ = require('lodash');
const fs = require('fs');

const path = process.env.PWD;

clear();
// console.log(path);

// return;

// بررسی وجود یک دایرکتوری
// if (files.directoryExists('.git')) {


// console.log(chalk.red('Already a Git repository!'));

// دریافت لیست تمام فایل های یک دایرکتوری
// const filelist = _.without(fs.readdirSync('.'), '.git', '.gitignore');
// console.log(filelist);

// افزودن دایرکتوری
// fs.mkdirSync('./tmp/a', { recursive: true }, (err) => {
//     if (!_.isNull(err) && !_.isUndefined(err)) throw err;
// });

// حذف دایرکتوری
// fs.rmdirSync('./tmp');

// افزودن و نوشتن فایل    
// fs.appendFile(`./src/components/asd/a.js`, "test", 'utf8', (err) => {
//     if (!_.isNull(err) && !_.isUndefined(err)) throw err;
// });

// نوشتن روی فایل
// fs.writeFileSync('./aaa.js', "salam");

// حذف فایل
// fs.unlink('./aaa.js', (err) => {
//     if (!_.isNull(err) && !_.isUndefined(err)) throw err;
//     console.log('successfully deleted /tmp/hello');
// });

// تغییر نام فایل
// fs.rename('./aaa1.js', './aaa2.js', (err) => {
//     if (!_.isNull(err) && !_.isUndefined(err)) throw err;
//     console.log('renamed complete');
//     fs.stat('./aaa2.js', (err, stats) => {
//         if (!_.isNull(err) && !_.isUndefined(err)) throw err;
//         console.log(`stats: ${JSON.stringify(stats)}`);
//     });
// });

// process.exit();
// }

/**
 * اجرای برنامه
 */
const run = async () => {
    const credentials = await inquirer.askGithubCredentials();
    // console.log(credentials);

    // افزودن دایرکتوری
    addDirectory(credentials)
};

run();

/**
 * افزودن دایرکتوری
 * @param {*} credentials 
 */
const addDirectory = (credentials) => {

    fs.mkdir(`${path}/src/components${credentials.ContinuePath}/${toLowerCasePath(credentials.CMPName)}`, { recursive: true }, (err) => {
        if (!_.isNull(err) && !_.isUndefined(err)) throw err;

        // افزودن فایل
        addFile(credentials)
    });
}

/**
 * افزودن فایل
 * @param {*} param0 
 */
const addFile = async ({ CMPType, CMPName, MethodType, ContinuePath }) => {

    // دریافت محتوای فایل
    const data = await createData(CMPType, CMPName, MethodType);

    // افزودن و نوشتن فایل  
    fs.appendFile(`${path}/src/components${ContinuePath}/${toLowerCasePath(CMPName)}/${CMPName}.js`, data, 'utf8', (err) => {
        if (!_.isNull(err) && !_.isUndefined(err)) throw err;

        log("Success File")
    });

    // افزودن و نوشتن فایل 
    fs.appendFile(`${path}/src/components${ContinuePath}/${toLowerCasePath(CMPName)}/${CMPName}.scss`, `.${toLowerCasePath(CMPName)}{}`, 'utf8', (err) => {
        if (!_.isNull(err) && !_.isUndefined(err)) throw err;

        log("Success SCSS")
    });
}

/**
 * دریافت محتوای فایل
 * @param {*} CMPType 
 * @param {*} CMPName
 */
const createData = async (CMPType, CMPName, MethodType) => {
    console.log(CMPType, CMPName, MethodType);

    let type = "fullstate";
    switch (Number(CMPType)) {
        case 0:
            type = "fullstate";
            break;
        case 1:
            type = "stateless";
            break;
        default:
            type = "fullstate";
            break;
    }

    let methodType = "";
    switch (Number(MethodType)) {
        case 1:
            methodType = "GET";
            break;
        case 2:
            methodType = "POST";
            break;
        case 3:
            methodType = "PUT";
            break;
        case 4:
            methodType = "DELETE";
            break;

        default:
            methodType = "";
            break;
    }

    var re = new RegExp(type, "g");
    return fs.readFileSync(`${path}/node_modules/custom-cli/templates/${type}${methodType}.js`, 'utf8')
        .replace("baseClass", toLowerCasePath(CMPName))
        .replace(re, CMPName);
}

/**
 * درج لاگ زیبا تر
 * @param {*} text 
 * @param {*} type 
 */
const log = (text, type = "green") => {
    console.log(
        chalk[type](
            figlet.textSync(text, { horizontalLayout: 'full' })
        )
    );
}

/**
 * تبدیل نام کامپوننت به فرمت فایل
 * به این شکل که حروف بزرگ به حروف کوچک تبدیل میشود
 * و کلمات با دش از هم جدا میشوند
 * @param {*} path 
 */
const toLowerCasePath = (path) => {
    const re = new RegExp(/([A-Z])/, "g");
    return path.replace(re, "-$1").toLowerCase().substring(1, 100)
}
var validator = require('validator');

const chalk = require('chalk');



const getDataUser = (userName,email) => {
    if(validator.isEmail(email)) {
        return chalk.green(`selamat datang ${userName}.email kamu adalah ${email}`)
    }else{
        return chalk.red(`maaf email yang anda masukan slah `)
    }
    
}
module.exports = ({ 
    getDataUser 
})


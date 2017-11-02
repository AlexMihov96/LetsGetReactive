let loginValidation = (mail,
                       password) => {
    let validMail = (() => {
        let mailRegex = new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

        let testMail = mailRegex.test(mail)
        if ((testMail && mail) && (mail !== '')) {
            return true
        }
        return false
    })()

    let validPassword = (() => {
        if (
            password.length > 7 &&
            password !== ''
        ) {
            return true
        }
        return false
    })()

    return {
        validMail,
        validPassword
    }
}

export default loginValidation
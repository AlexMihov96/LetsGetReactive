let pokemonValidation = (name, image, info) => {
    let validName = (() => {
        if (name !== '') {
            return true
        }
        return false
    })()

    let validImage = (() => {
        if (image !== '') {
            return true
        }
        return false
    })()

    let validInfo = (() => {
        if (info.length > 6 && info.length < 50) {
            return true
        }
        return false
    })()

    return {
        validName,
        validImage,
        validInfo
    }
}

export default pokemonValidation
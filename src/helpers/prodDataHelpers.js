export const getProdElemByKey = (searchObj, key) => {
    let returnRef = null

    Object.keys(searchObj).forEach(function (elKey) {
        const element = searchObj[elKey];
        if (element.id === key) {
            returnRef = elKey
        }
    })
    
    return returnRef
}

export default {
    getProdElemByKey,
}

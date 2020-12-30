const createStringFromNodeAttributes = (props) => {
    if (typeof props !== 'object') {
        return '';
    }
    
    if (Object.keys(props).length === 0) {
        return '';
    }

    let sanitizedInputs = "{  "
    for ( let key in props) {
        sanitizedInputs =  sanitizedInputs + key + ": \"" + props[key] + "\", ";
    }

    sanitizedInputs = sanitizedInputs.slice(0, sanitizedInputs.length - 2) + " }";

    return sanitizedInputs;
};

module.exports = {
    createStringFromNodeAttributes
}
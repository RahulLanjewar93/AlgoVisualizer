const sleep = (miliseconds) => {
    return new Promise(resolve => setTimeout(resolve, miliseconds))
}

export default sleep
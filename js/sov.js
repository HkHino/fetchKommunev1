const sov = (ms) => {
    return new Promise(dummyFunction =>
        setTimeout(dummyFunction, ms))
}

async function doSomethingAsync(){
    console.log("I'm doing something async")
    await sov(2000)
    console.log("I'm done")
}

console.log("start 1")
doSomethingAsync()
console.log("slut 555")
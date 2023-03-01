console.log("jeg er i testpromise.js");

function returnpromise() {
    return new promise(function (resolve, reject) {
        resolve("start of new promise")
    })
}

function test() {
    return returnpromise().then((value) => {
        console.log("1st then, inside test()" + value)
        return "Hello"
    }).then((value) => {
        console.log("2nd then, inside test()" + value)
        return "World"
    })
}
test().then((value) => {
    console.log("test er færdig, vi fortsætter" + value)
})

console.log("slut med test")
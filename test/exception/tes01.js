function func1() {
    func2();
}


async function func2() {
    try {
        console.log(await func3())
    } catch (error) {
        console.log('error')
    }
}

async function func3() {
    await setTimeout(function () {
        console.log(666)
    })
}


func1();
console.log(66)
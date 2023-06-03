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
   return new Promise((resolve, reject) => {
       setTimeout(function () {
           const r = Math.random()
           if(r < 0.5) {
               reject('error async')
           }
       })
   })
}


func1();
console.log(66)
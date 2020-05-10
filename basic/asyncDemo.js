async function helloAsync(){
    return "helloAsync";
}

console.log(helloAsync())  // Promise {<resolved>: "helloAsync"}

helloAsync().then(v=>{
    console.log(v);         // helloAsync
})

function testAwait(){
    return new Promise((resolve) => {
        setTimeout(function(){
            console.log("testAwait");
            resolve();
        }, 1000);
    });
}
console.log("--------")

async function helloAsync2(){
    await testAwait();
    console.log("helloAsync");
}
helloAsync2();
// testAwait
// helloAsync

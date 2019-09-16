
setTimeout(() => console.log('bancame un rato'), 2000);
console.log('esto tiene que pasar primero');

let somePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('estoy lista'), 2000)
})

somePromise.then((res) => {
    console.log(res);
    console.log('vamos que se puede')
})

console.log(somePromise);

const asyncTest = async () => {
    try {
        let res = await somePromise;
        console.log(res);
    } catch (e) {
        console.log(e);
    } finally {
        console.log('no sé qué hace')
    }
};

asyncTest();
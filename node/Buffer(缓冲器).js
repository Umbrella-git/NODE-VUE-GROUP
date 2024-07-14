//1. alloc
let buf = Buffer.alloc(10);
// console.log(buf)

//2. allocunsafe
let buf_1 = Buffer.allocUnsafe(90000000);
// console.log(buf_1)

//3. from
let buf_2 = Buffer.from([105, 108, 111, 444, 555, 666]);
// console.log(buf_2);
let buf_3 = Buffer.from("home");

// console.log(buf_2.toString());
// console.log(buf_3[0].toString(2));

//4. [] 元素读取写入
console.log(buf_3);
buf_3[0] = 95;
console.log(buf_3);
console.log(buf_3.toString());

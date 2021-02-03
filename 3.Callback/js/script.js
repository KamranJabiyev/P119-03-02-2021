"use strict"
//CALLBACK FUNCTION
// function getSum(arr,callback){
//     let sum=0;
//     for (const num of arr) {
//         if(callback(num))
//             sum+=num
//     }
//     return sum
// }


// getSum([1,2,3,4,5,-1,-7],function(n){return n>0})

// console.log(getSum([1,2,3,4,5,-1,-7],n => n>0))


// function IsOdd(n){
//     return n%2!=0;
// }

// let IsOdd=function(n){
//     return n%2!=0;
// }

// let IsOdd=n=>n%2!=0;



// function IsEven(n){
//     return n%2==0;
// }

// function IsElder(n){
//     return n>3;
// }

//ANONIMOUS FUNCTION
// console.log(getSum([1,2,3,4,5],n=>n%2!=0))

// console.log(getSum([1,2,3,4,5],IsElder))
// console.log(getSum([1,2,3,4,5],IsEven))


// function customMap(arr,func){
//     let result=[];
//     for (const item of arr) {
//         result.push(func(item))
//     }
//     return result;
// }

// console.log(customMap([1,2,3],n=>n*2))
// console.log(customMap([1,2,3],n=>n+2))
// console.log(customMap([1,2,3],n=>n-2))

//ARRAY ITERATIONS

// let arr=[1,2,3,4,5]

// let result=arr.filter(n=>n>2)
// console.log(result)

// console.log(arr.find(n=>n==15))

// console.log(arr.reduce((n,total)=>total+=n))

// arr.forEach(n=>{

//     if(n%2==0)
//         console.log(n)
// })

// for (const item of arr) {
//     console.log(item)
// }

// let result=arr.map((n,i)=>n+i)

// console.log(result)

//ARRAY METHODS

let fruit=["Banana", "Orange", "Apple", "Mango"]
// console.log(fruit.join("-"))

// fruit.pop()
// fruit.pop()
// fruit.push('test')
// fruit.push('test1')
// fruit.shift()
// fruit.unshift("test")
// fruit.splice(2, 2, "Lemon", "Kiwi");
// let arr=fruit.slice(1)
let word="Hello"
console.log(word.charAt(0))




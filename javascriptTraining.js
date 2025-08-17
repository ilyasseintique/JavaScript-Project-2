//reversing strings
let reverseString =  string => string.split("").reverse().join("");
//test of function
console.log(reverseString("ilyasse")); //it return essayli hh try it !!

//number of characteres in a string
let numberofchar = string => string.length
console.log(numberofchar("ilyasse")); //it return 7

//function for capitalization of the first letter of each word (with the help of ai )
let capitalization = string =>  string.replace(/(^\w)|(?<=\s)\w/g,char => char.toUpperCase());
console.log(capitalization("holly war")); // Holly War as a return 

//fuction for finding the maximum and the minimum of an array 
let minMaxfct = arr => {
    let min=arr[0];
    let max=arr[0];
    for(let num of arr){
        if(min>num){
            min=num;
        }
        if(max<num){
            max=num;
        }
    }
    console.log(`the maximum is ${max} || the minimum is ${min}`);
}
minMaxfct([1,2,3,5,7,99]); // this will return the maximum is 99 || the minimum is 1

var arr=[0,2,5,6,5];

//sum of numbers in array
let sumOfNumbers = function (arr){
    return arr.reduce((x,y) => x+y);
}
console.log(sumOfNumbers(arr)) 

//filter an array
function filtering(arr){
    console.log((arr.filter(x=>x<5)));
}
filtering(arr);


//factorial of a num

function fact(n) {
    let p=1;
    for(let i=2;i<=n;i++){
        p*=i
    }
    return p;
}
console.log(fact(5));

//prime or not
let primeornot = (n) => {
    if(n==0 || n==1){return false}
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
console.log(primeornot(4));

let fibo = (n) => {
    if(n==0){return 0};
    if(n==1){return 1};
    let U0=0;
    let U1=0;
    let U2=1;
    for(let i=0;i<n-2;i++){
        U0=U2;
        U2+=U1;
        U1=U0;
    }
    return U2;
}
console.log(fibo(2))
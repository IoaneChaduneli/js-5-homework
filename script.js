// homework 1
let numbers=[5,25,89,120,36];
numbers.push('javascript', 'python');
console.log(numbers);
numbers.unshift('html','css');
console.log(numbers);
console.log(numbers.length);
let removenumbers=numbers.shift();
console.log(removenumbers);
let removenumbers1=numbers.pop();
console.log(removenumbers1);
console.log(numbers);

// homework2
let fruits=['orange','banana','pear'];
console.log(fruits.length);
fruits.push('apple','pineapple')
console.log(fruits);
fruits.unshift('watermelon')
console.log(fruits);
console.log(fruits.length);
fruits.splice(2,0,'mango')
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits.length);

// homework 3
let array=[12,25,3,6,8,14,7,23];
let newarray=array.map(function (item) {
    return item / 3
})
console.log(newarray);

// homework 4
let array2=['hello', 125, 'javascript','python','php'];
let newarr2=array2.filter(function(item){
     return typeof item=='number'   
})
console.log(newarr2);

// homework 5
let languages=['hrml', 'css', 'javascript', 'python', 'php'];
let lenaguage2=languages.filter(function(item){
     return typeof item.length > 3
})
console.log(languages);

// homework 6
let item=[12,'google',32,null,'yahoo',25];
let newitem=item.map(function(element){
    if (typeof element==='number') {
        console.log(element*element);
    } else if (typeof element==='string') {
        console.log(element.toUpperCase);
    }
})
console.log(newitem);

// homework 7
let words=['Madrid', 'Rome','Milan','Berlin'];
let Mmwords=words.filter(function (item) {
    if (typeof item==='string') {
       if (item.includes('m', 'M')) {
            console.log(item);
       }
            
        }
    })

    // homework 8
let arr1=[1,2];
let arr2=[3,4];
let arr3=[5,6];

let concatinate=arr1.concat(arr3,arr2);
console.log(concatinate);

// Homework 9
let arr=[1,2,3,4,5];
let sum=0;
arr.forEach(element => {
    sum+=element;
    return sum
});
console.log(sum);

// homework 10
let numb=[-2,5,10,-5,-1,1,3,4,-15]
let newnumb=numb.filter(function(item){
   if (item >0) {
    console.log(item);
   }
})

// homework 11
let range=[-1,-2,-3,4].some((element)=> element >0);
console.log(range);

// homework 12
let ar=[23,45,32,5,87,7,3,98];
let sortArray1=ar.sort((x,y)=> y-x)[ar.length-1];

console.log(sortArray1);

// homework 13
let range2=[1,2,3,4,5];
range2.splice(3,0,'a','b','c');
console.log(range2);



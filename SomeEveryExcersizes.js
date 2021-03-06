// hasOddNumber
// Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

const numArr = [1,2,2,2,2,2,4];

function hasOddNumber(arr){
    return arr.some(function(val){
        let i = val % 2;
        return i !== 0;
    })
}

// hasAZero
// Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

const bigNum = 3332123213112;

function hasAZero(num){
    let stringify = num.toString()
    let newArr = stringify.split('')
    return newArr.some(function(el){
        return el === '0';
})
}

// ddNumbers
// Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array

const oddNumArr = [1,3,5,7];
const fakeOddNumArr = [1,3,5,7,8,1];

function hasOnlyOddNumber(arr){
    return arr.every(function(val){
        let i = val % 2;
        return i !== 0;
    })
}


// hasNoDuplicates
// Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
}

// hasCertainKey
// Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

let exaObj = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

function hasCertainKey(obj, key){
    return obj.every(function(val){
        return key in val;
    })
}

// hasCertainValue
// Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

function hasCertainValue(arr, key, value){
    return arr.every(function(el){
        return el[key] === value;
    })
}
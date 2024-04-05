//  No1
//  Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  
//  and the last two added by 10. Return the array with the new values
numArray =[12,36,17,47,2,5,89,57,13]
newArray = []

function checkArray(numbers){
    for (let i =0; i< numbers.length; i++) {
        if (i<4){
            numbers[i] *= numbers[i];
        }
        if (i>=numbers.length-2){
            numbers[i] +=10;
        }
    }
    return numbers;
}

// No2
// Write a program that takes in the following array and use a while loop to iterate and break 
// when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1,2,3,4,5,6,7,8,9]

function indexFour(arrayNums){
    let arrSize = arrNum.length

    let i =0
    while (i < arrSize){
        if (arrayNums[i]== 3){
            break;
        }
        else{
            console.log(arrayNums[i]);
        }
        i++;
        
    }
}
indexFour(arrNum)


// No3
// Write a function that takes in a an array of strings and use a continue statement when the item 
// is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
let fruits= ['apple','plum','banana','strawberries','kiwi']
function indexTwo(strings){
    for (let i =0; i< strings.length; i++ ) {
        if (i ===2){
            continue;
        }
        else{
            console.log(strings[i])
        }
    }
    
}
indexTwo(fruits)


// NO4
// Write a function that accepts an array of strings and console.logs each element using a for loop.
let friends = ["Jane", "Renoi","Claat", "Grace", ""]
function wordArray(names){
    for (let i =0; i<names.length; i++){
        console.log(names[i]);
    }
}
wordArray(friends)



// No5
// Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.
function convertString(name){
    let word = true;
    while (word) {
        console.log(word.split("").reverse().join(''));
        break;

    }
    }
    convertString("January")

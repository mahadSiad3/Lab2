/*Part 1: Fizz Buzz
Accomplish the following:
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
*/
let fizzBuzz=[];
let fizz=[];
let buzz=[];
let number=[];
function fizzy(){
for(let i=1;i<=100;i++){
if(i%3==0 && i%5==0){
    fizzBuzz.push(i);
}
else if(i%3==0){
    fizz.push(i);
}
else if(i%5==0){
    buzz.push(i);
}
else{
    number.push(i);
}
}
console.log("numbers divisible by both 3 and 5: "+ fizzBuzz);
console.log("numbers divisible by 3: "+ fizz);
console.log("numbers divisible by 5: "+ buzz);
console.log("numbers divisible by neither 5 or 3: "+ number);
};
fizzy();

// without function
for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log(":(divisble by both 3 and 5: fizz buzz:"+i)
    }  
    else if(i%3==0 && i%5!==0){
        console.log(":(divisble by 3: fizz: "+i)
    }

    else if(i%3!==0 && i%5==0){
        console.log(":(divisble by 5: buzz: "+i)

    }
    else{
        console.log("neither divisible by 3 or 5: "+ i)

    }
    }


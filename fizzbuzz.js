// Part 2
function printFizzBuzz(n){
    if (n % 5 == 0 && n % 3 == 0){
        console.log("fizzbuzz");
    } else if (n % 5 == 0){
        console.log("buzz");
    } else if (n % 3 == 0){
        console.log("fizz");
    } else{
        console.log(n);
    }
}

for (let i = 1; i < 101; i++) {
    printFizzBuzz(i);
}
let var1 = 5;
let var2 = 3;

if (process.argv[2] == "+") {
    console.log(var1 + var2)
}
else if (process.argv[2] == "-") {
    console.log(var1 - var2)
}
else {
    console.log("Please enter + or - as an argument!")
}
#! /usr/bin/ env node
import inquirer from "inquirer"
let mybalance = 10000
const mypin = 2944111

let pin = await inquirer.prompt([
    {name: "pin", message: "Enter your pin number", type: "number"}])

    if(pin.pin == mypin){console.log("correct pin code");
    let operation = await inquirer.prompt([
    {name: "operation", message: "select your option", type: "list", 
    choices: ["withdraw", "check balance", "fastcash", "deposit"]}])
    
    
    if(operation.operation == "deposit"){
        let depositamountans = await inquirer.prompt([{
            name: "depositamount", message: "enter your amount", type: "number"}])    
        mybalance += depositamountans.depositamount,
        console.log("after depoit your remaining balance is:" + mybalance)}
    
    
    if(operation.operation == "withdraw"){
    let amountans = await inquirer.prompt([{
        name: "amount", message: "enter your amount", type: "number"}])    
    mybalance -= amountans.amount,
    console.log("after withdraw, your remaining balance is:" + mybalance)}
    
    
    if(operation.operation == "fastcash"){
        let fastcash = await inquirer.prompt([
            {name: "fastcash", message: "select amount", type: "list", choices: ["1000", "2000","3000", "4000", "5000"]}])
        mybalance -= fastcash.fastcash,
        console.log("after withdraw from fast cash, your remaining balance is:" + mybalance)}

else if(operation.operation == "check balance"){
    console.log("your remaining balance is:" + mybalance)}} 
    
else {console.log("pin number is not correct please try again with correct pin")}





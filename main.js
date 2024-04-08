#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(chalk.bgRedBright.bold("Wellcom to my todo EID's list"));
while (condition) {
    let addtask = await inquirer.prompt([{
            name: "list",
            message: chalk.blueBright("What do you want to add to todoes?"),
            type: "input"
        },
        {
            name: "addmore",
            type: "confirm",
            message: chalk.greenBright("Add more in list?"),
            default: true,
        }]);
    if (addtask.list !== "") {
        todos.push(addtask.list);
        console.log(chalk.bgBlue(todos));
        condition = addtask.addmore;
    }
    let addtask2 = await inquirer.prompt({
        name: "deleteany",
        type: "confirm",
        message: chalk.redBright("delete any from todo list?"),
        default: false
    });
    if (addtask2.deleteany === true) {
        let addtask3 = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "please select you want to delete from todo",
            choices: todos
        });
        if (addtask2.deleteany == true) {
            for (let i = 0; i < todos.length; i++) {
                if (addtask3.select == todos[i]) {
                    todos.splice(i, 1);
                }
            }
        }
    }
    console.log(chalk.bgBlackBright.bold("My Eid's todo list ready"));
    let count = 1;
    for (let val of todos) {
        console.log(chalk.green.bold(`list ${count}${val}`));
        count++;
    }
}

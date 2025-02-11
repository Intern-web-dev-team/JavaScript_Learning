# JavaScript_Learning

# Loops and iteration
1. While Loop
2. For in 
3. Switch Case
4. For each

## WHILE LOOP

Syntax: 

while (condition){
    statements
}

Here, if the condition is true the statements are executed. 
condition-check + statement-execution + condition-check = one complete iteration;
So, unless the conditions are true the statements inside the loop are executed, if not following statements to the loop get executed.
Avoid inifite loop like this example below:

while(true){
    statements
}

## FOR IN 

Syntax:

for (varible in object){
    statement
}

It is used to name a key or element or variable in an object.

for example:

let alien = {
    Name: 'Vishwesh',
    age: 23,
    role: 'fsd',
    company: remitbee
}

for (key in alien)
{
    console.log(key, alien[key]);
}
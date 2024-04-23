/*Create four methods: add(num1, num2), sub(num1, num2), mult(num1, num2), and div(num1, num2), which perform addition, subtraction, multiplication, 
and division, respectively in math.js. Utilize the lodash dependency for executing the aforementioned operations. Export all the above methods to
 make them accessible in any file.*/

 const _=require('lodash')
const add=(a,b)=>{
return _.add(a,b);
}

const sub=(num1,num2)=>{
    return _.subtract(num2,num1)
}

const mult=(num1,num2)=>{
    return _.multiply(num1,num2)
}
const div=(num1,num2)=>{
    return _.divide(num1,num2)
}

module.exports={add,sub,mult,div};
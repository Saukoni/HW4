let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 2000}]
    }
}

function sumOfSalary(obj) {
    if(Array.isArray(obj)) {
        return obj.reduce((sum, index) => sum += index.salary, 0);
    } else {
        let sum = 0;
        for(let key in obj) {
            sum += sumOfSalary(obj[key]);
        }
        return sum;
    }
}

console.log(sumOfSalary(company));
function createTable(num) {
    let body = document.querySelector('body');
    for(i = 1; i <= num; i++) {
        let column = document.createElement('div');
        for(j = 1; j <= 10; j++) {
            let row = document.createElement('div');
            row.textContent = `${i} * ${j} = ${i * j}`;
            column.appendChild(row);
        }
        let hr = document.createElement('hr');
        if(j = 10) {column.appendChild(hr);}
        body.appendChild(column);
    }
}

createTable(10);
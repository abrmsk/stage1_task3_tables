function DataTable(config, data) {
    // содержимое этой функции вам и нужно написать :)
    let table = document.createElement('TABLE')
    let fields = []

    // Create Table Head
    let thead = document.createElement('THEAD')
    let trHead = document.createElement('TR')

    // Create field for number if it is
    if (config.number) {
        let th = document.createElement('TH')
        th.appendChild(document.createTextNode(config.numberView))
        trHead.appendChild(th)
        fields.push(config.numberView)
    }

    // Create fields as config
    for (let i = 0; i < config.columns.length; i++) {
        let th = document.createElement('TH')
        th.appendChild(document.createTextNode(config.columns[i].title))
        trHead.appendChild(th)
        fields.push(config.columns[i].value)
    }

    thead.appendChild(trHead)
    table.appendChild(thead)

    // Create Table Body
    let tbody = document.createElement('TBODY')
    let number = 1;

    // Fill fields as within of array
    for (const user of data) {
        let tr = document.createElement('TR')

        // Fill column number if it is
        if (config.number) {
            let td = document.createElement('TD')
            td.appendChild(document.createTextNode(number++))
            tr.appendChild(td)
        }

        // Loop fill fields
        for (let i = config.number ? 1 : 0; i < fields.length; i++) {

            let td = document.createElement('TD')

            td.appendChild(document.createTextNode(
                user[fields[i]] ? user[fields[i]] : ''))

            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }
    table.appendChild(tbody)
    document.querySelector(config.parent).appendChild(table)

}

const config1 = {
    parent: '#usersTable',
    number: true,
    numberView: '№',
    columns: [
        {title: '#', value: 'id'},
        {title: 'Имя', value: 'name'},
        {title: 'Фамилия', value: 'surname'},
        {title: 'Возраст', value: 'age'},
        {title: 'Пометки', value: 'title'},
    ]
};

const users = [
    {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
    {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
    {name: 'Петя', surname: 'Васечкин', id: 30052, age: 32},
    {id: 30053, name: 'Коля', age: 45},
    {name: 'Степа', surname: 'Савелич', title: 'Описание'},
];

DataTable(config1, users);

var table = new Tabulator('#testing_table', {
    data: users,
    autoColumns: true,
})
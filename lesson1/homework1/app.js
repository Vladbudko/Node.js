// ДЗ:
//
//     Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user
// ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)

const path = require('path')
const fs = require('fs')

fs.mkdir(path.join(__dirname, 'main'), (err => {
    if (err) {
        console.log(err)
    }
}))

fs.mkdir(path.join(__dirname, 'main', 'online'), (err => {
    if (err) {
        console.log(err)
    }
}))

fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err => {
    if (err) {
        console.log(err)
    }
}))

const onlineUsers = [
    {name: "Andrii", age: 22, city: "Lviv"},
    {name: "Victor", age: 27, city: "Miami"}
]

const inPersonUsers = [
    {name: "Vlad", age: 21, city: "Miami"},
    {name: "Artem", age: 20, city: "Miami"}
]


fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'),
    `${onlineUsers.map(users => `\nName: ${users.name} \nAge: ${users.age} \nCity: ${users.city}`)}`,
    (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    })

fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
    `${inPersonUsers.map(users2 => `\nName: ${users2.name} \nAge: ${users2.age} \nCity: ${users2.city}`)}`,
    (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    })

fs.rename(path.join(__dirname, 'main', 'online', 'online.txt'),
    path.join(__dirname, 'main', 'inPerson', 'online.txt'),
    err => {
        if (err) {
            console.log(err);
            throw err;
        }
    }
)

fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
    path.join(__dirname, 'main', 'online', 'inPerson.txt'),
    err => {
        if (err) {
            console.log(err);
            throw err;
        }
    }
)




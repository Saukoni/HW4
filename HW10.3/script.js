let book = {
    contacts: [
        {
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            'phone': '1-770-736-8031'
        },
        {
            "name": "Ervin Howell",
            "email": "Sincere@april.biz",
            'phone': '1-213-736-8031'
        },
        {
            "name": "lementine Bauch",
            "email": "Sincere@april.biz",
            'phone': '1-770-213-8031'
        },
        {
            "name": "Patricia Lebsack",
            "email": "Sincere@april.biz",
            'phone': '1-770-345-8031'
        },
    ],
    findByName(name) {
        return this.contacts.find(item => {
            return item.name == name;
        })
    },
    addContact(name, email, phone) {
        let newContact = {
            name: name,
            email: email,
            phone: phone,
        }
        this.contacts.push(newContact);
    },
}
book.addContact('Anton', 'asdsakj@gmail.com', '12312312321')

console.log(book);
console.log(book.findByName('Patricia Lebsack'));
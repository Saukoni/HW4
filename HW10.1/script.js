let user = {
    name: 'John',
    code: 432,
    city: 'Odesa',
    showInfo() {
        console.log(this.name, this.code, this.city);
    }
};

user.showInfo();
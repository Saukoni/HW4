function Student(name, surname, dateOfBorn) {
    this.name = name;
    this.surname = surname;
    this.dateOfBorn = dateOfBorn;
    this.marks = [98, 90, 98, 87];
    this.absents = new Array(25);

    this.getYear = function() {
        return `${(new Date).getFullYear() - this.dateOfBorn}`
    };
    this.getMark = function() {
        return (this.marks.reduce((sum, curr) => {
            return (sum + curr);
        }, 0))/this.marks.length;
    };
    this.present = function() {
        for(let i = 0; i < this.absents.length; i++) {
            if(this.absents[i] == undefined) {
                this.absents[i] = true;
                break;
            }
        }
    };
    this.absent = function() {
        for(let i = 0; i < this.absents.length; i++) {
            if(this.absents[i] == undefined) {
                this.absents[i] = false;
                break;
            }
        }
    };
    this.summary = function() {
        let lessonsCounter = 0;
        let presentsCounter = 0;
        for(let i = 0; i < this.absents.length; i++) {
            if(this.absents[i] != undefined) {
                lessonsCounter++;
            }
            if(this.absents[i] == true) {
                presentsCounter++;
            }
        }
        let averageAttendance = presentsCounter / lessonsCounter;
        if(this.getMark() >= 90 && averageAttendance >= 0.9) {
            console.log('Молодец');
        } else if(this.getMark() >= 90 || averageAttendance >= 0.9) {
            console.log('Хорошо, но можно лучше');
        } else if(this.getMark() < 90 && averageAttendance < 0.9) {
            console.log('Редиска');
        }
    }
}

let roma = new Student('Roma', 'Alekseev', '2000');
roma.present();
roma.present();
roma.present();
roma.absent();
roma.present();
roma.present();
roma.present();
roma.present();
roma.present();
roma.present();
roma.present();

roma.summary();
console.log(roma.absents);

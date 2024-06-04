let ladder = {
    curr: 0,
    up: function() {
        this.curr++;
        return this;
    },
    down: function() {
        this.curr--;
        return this;
    },
    showStep: function() {
        console.log(this.curr);
    }
};

ladder.up().up().up().down().showStep();
const Person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    weight: 65,
    height: 172,
    weightIdeal: function() {
        const heightMinus100 = this.height - 100;
        return heightMinus100 - (heightMinus100 * 10) / 100
    },
    needDiet: function() {
        const weightIdeal = this.weightIdeal();
        if (weightIdeal - 5 > this.weight)
            return (
                "need protein, need more " + (weightIdeal - this.weight) + "Kg"
            );
        else if (weightIdeal + 5 < this.weight)
            return (
                "diet, reduce weight " +
                (this.weight - weightIdeal) +
                "Kg"
            );
            return "youre in good shape";
    }
};

console.log(Person.fullName());
console.log(Person.weightIdeal());
console.log(Person.needDiet());


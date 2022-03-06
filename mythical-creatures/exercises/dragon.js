class Dragon {
  constructor(name, rider, hungry) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.eats = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }

  eat() {
    this.eats++;
    if (this.eats < 3) {
      this.hungry;
    } else {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;

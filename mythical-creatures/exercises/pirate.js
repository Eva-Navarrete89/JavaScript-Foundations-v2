class Pirate {
  constructor(name, job, cursed, booty) {
    this.name = name;
    this.job = job || "scallywag";
    this.cursed = false;
    this.booty = 0;
  }

  robShip() {
    this.booty += 100;
    if (this.booty <= 400) {
      return "YAARRR!";
    } else {
      this.booty = 500;
      this.cursed = true;
      return "ARG! I've been cursed!";
    }
  }

  liftCurse() {
    // console.log(this.booty);

    if (this.cursed === true) {
      this.booty -= 300;
      this.cursed = false;
      return "Your curse has been lifted!";
    } else {
      return "You don't need to lift a curse!";
    }
  }
}

module.exports = Pirate;

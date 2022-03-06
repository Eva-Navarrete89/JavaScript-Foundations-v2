class Magician {
  constructor(performer) {
    this.name = `The Great ${performer.name}`;
    this.assistant = performer.assistant;
    this.favoriteAccessory = performer.clothing || "top hat";
    this.confidencePercentage = 10;
  }

  performIncantation(spell) {
    return `${spell.toUpperCase()}!`;
  }

  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === "top hat") {
      return "PULL RABBIT FROM TOP HAT";
    } else {
      return "PULL DOVE FROM SLEEVE";
    }
  }

  performShowStopper() {
    if (this.confidencePercentage < 100 || this.assistant === false) {
      return "Oh no, this trick is not ready!";
    } else {
      return "WOW! The magician totally just sawed that person in half!";
    }
  }
}

module.exports = Magician;

// Base class
class MusicalInstrument {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  play() {
    console.log(`Playing the ${this.name}... 🎶`);
  }
}

// Derived class for a specific instrument
class Guitar extends MusicalInstrument {
  constructor() {
    super("Guitar");
  }

  tune() {
    console.log("Tuning the guitar...");
  }
}

// Another derived class for a different instrument
class Piano extends MusicalInstrument {
  constructor() {
    super("Piano");
  }

  openLid() {
    console.log("Opening the piano lid...");
  }
}

// Using the classes
const myGuitar = new Guitar();
myGuitar.play(); // Playing the Guitar... 🎶
myGuitar.tune(); // Tuning the guitar...

const myPiano = new Piano();
myPiano.play(); // Playing the Piano... 🎶
myPiano.openLid(); // Opening the piano lid...

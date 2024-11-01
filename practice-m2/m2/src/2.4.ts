{
  // generic with interface
  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  type Samsung = {
    brand: string;
    model: string;
    display: string;
  };
  const poorDeveloper: Developer<Samsung> = {
    name: "Person",
    computer: {
      brand: "HP",
      model: "x-sires",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "samsung",
      model: "k6",
      display: "LED",
    },
  };
  interface Apple {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  const richDeveloper: Developer<Apple> = {
    name: "Person2",
    computer: {
      brand: "Apple",
      model: "x-sires",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "Apple",
      model: "k6",
      heartTrack: true,
      sleepTrack: true,
    },
  };

  //
}

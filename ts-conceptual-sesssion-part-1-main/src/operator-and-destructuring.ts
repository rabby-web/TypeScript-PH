{
    //
    const rolls: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const newRolls: number[] = [...rolls, 11, 12];

    type personType = {
        name: string;
        age: number | string;
        isActive: boolean;
        designation: string;
        company: string;
        salary?: number // nullable (optional)
    }

    const person1: personType = {
        name: "Shariful Islam",
        age: "21",
        isActive: true,
        designation: "Next Level Developer",
        company: "Programming Hero"
    }


    const newInfoOfPerson1: personType = {
        ...person1,
        salary: 1000000000
    }

    //console.log(newInfoOfPerson1)

    // rest opearator
    const [first, c, ...bakiElement] = [25, 45, 11, 69, 75, 80];
    console.log("First: ", first);
    // console.log("a: ", a);
    // console.log("b: ", b);
    console.log("c: ", c);
    console.log("Rest: ", bakiElement);

    //

}
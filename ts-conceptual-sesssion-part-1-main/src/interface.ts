{
    //
    // type
    type PersonType = {
        readonly name: string;
        readonly age: number | string;
        isActive: boolean;
        designation: string;
        company: string;
    }

    //interface
    interface IPerson {
        name: string;
        age: number | string;
        isActive: boolean;
        designation: string;
    }
    // +
    interface IPerson {
        company: string
    }
    // =
    interface IPerson {
        name: string;
        age: number | string;
        isActive: boolean;
        designation: string;
        company: string
    }

    const person: PersonType = {
        name: "Shariful Islam",
        age: "21",
        isActive: true,
        designation: "Next Level Developer",
        company: "Programming Hero"
    }

    //person.age = 21

    console.log(person)
    //
}
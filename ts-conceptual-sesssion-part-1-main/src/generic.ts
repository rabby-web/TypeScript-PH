{
    //
    type ArrayType<T> = Array<T>;

    const numArray: ArrayType<number> = [1, 2, 3, 4];
    const stringArray: ArrayType<string> = ["Raj", "SK", "Fardin", "Naem", "Taj"]
    const boolArray: ArrayType<boolean> = [true, false, false, true, true];

    // interface with generics
    interface IPerson<P, T, U> { // p = boolean, T = number, U = number
        name: string;
        age: U // number
        isActive: P; // boolean
        designation: string;
        id: T // string
    }

    const person: IPerson<boolean, string, number> = {
        name: "Shariful Islam",
        age: 32,
        isActive: true,
        designation: "Next Level Developer",
        id: "skdjdf"
    }

    // console.log(person)

    // function with generics
    const showMessage = <msgType1, msgType2, F>(
        message1: msgType1,
        message2: msgType2,
        personInfo: F
    ) => {
        return { message1, message2, personInfo };
    }

    console.log(showMessage<string, string, IPerson<boolean, string, number>>(
        "Next Level Web Development",
        "Hello World!",
        {
            name: "Shariful Islam",
            age: 32,
            isActive: true,
            designation: "Next Level Developer",
            id: "skdjdf"
        }
    ))


    //
}
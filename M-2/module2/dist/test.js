"use strict";
{
    // type assertion
    let anything;
    anything = "Next Level Wev Development";
    anything = 200;
    //   (anything as number)
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return convertedValue;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    console.log(result1);
}

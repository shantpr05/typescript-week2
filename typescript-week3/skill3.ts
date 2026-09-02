// Skill 3: Enums

// 1. Color Picker

enum Color {
    Red,
    Green,
    Blue
}

const showColor = (color: Color): string => {
    return `You choose ${Color[color]}.`;
};

console.log(showColor(Color.Red));
console.log(showColor(Color.Green));   
console.log(showColor(Color.Blue));

// 2. pizza order

enum PizzaSize {
    Small,
    Medium,
    Large
}

const orderPizza = (size: PizzaSize): string => {
    return `You have ordered a ${PizzaSize[size]} pizza.`;
}   

console.log(orderPizza(PizzaSize.Small));
console.log(orderPizza(PizzaSize.Medium));
console.log(orderPizza(PizzaSize.Large));   

//3. Challenge: Role-Based Access

enum Role {
    Admin,
    User,
    Guest
}

const printRole = (role: Role): string => {
    switch (role) {
        case Role.Admin:
            return "You have full access.";
        case Role.User:
            return "You have limited access.";
        case Role.Guest:
            return "You have guest access.";
    }
};

console.log(printRole(Role.Admin));
console.log(printRole(Role.User));
console.log(printRole(Role.Guest));
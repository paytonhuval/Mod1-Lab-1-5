const { add, subtract, multiply, divide } = require("mod1ex5.js");

test("Adding two numbers", () => {
    if (sum(4, 4) != 8) ({ throw: error });
    if (sum(-2, 8) != 6) ({ throw: error });
    if (sum(0, 5) != 5) ({ throw: error });
});

test("Subtracting two numbers", () => {
    if (difference(-1, 8) != -9) ({ throw: error });
    if (difference(3, 1) != 2) ({ throw: error });
    if (difference(5, 7) != -2) ({ throw: error });
});

test("Multiplying two numbers", () => {
    if (product(2, 6) != 12) ({ throw: error });
    if (product(-2, 0) != 0) ({ throw: error });
    if (product(3, 7) != 21) ({ throw: error });
});

test("Dividing two numbers", () => {
    if (quotient(8, 4) != 2) ({ throw: error });
    if (quotient(9, 3) != 3) ({ throw: error });
    if (quotient(-8, 2) != -4) ({ throw: error });
});

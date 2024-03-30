const book = {
    title: "City Under the Waves",
    description:
        "A science fiction adventure within the oceans of a foreign planet.",
    author: "Robert Capers III",
    pages: 385,
};

console.log("Title:", book.title);
console.log("Description:", book.description);
console.log("Author:", book.author);
console.log("Number of Pages:", book.pages);

book.description =
    "An action/adventure in the oceans of an unknown planet in a different galaxy.";

console.log("Updated Book Object:", book);

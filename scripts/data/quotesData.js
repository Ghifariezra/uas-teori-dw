export const quotesData = [
    {
        text: "A library is not a luxury but one of the necessities of life.",
        author: "Henry Ward Beecher"
    },
    {
        text: "The only thing you absolutely have to know is the location of the library.",
        author: "Albert Einstein"
    },
    {
        text: "Libraries store the energy that fuels the imagination.",
        author: "Sidney Sheldon"
    },
    {
        text: "Without libraries what have we? We have no past and no future.",
        author: "Ray Bradbury"
    },
    {
        text: "A library is a place where you can lose your innocence without losing your virginity.",
        author: "Germaine Greer"
    },
    {
        text: "When in doubt, go to the library.",
        author: "J.K. Rowling"
    },
    {
        text: "Libraries are the heart of our communities and our democracy.",
        author: "Michelle Obama"
    },
    {
        text: "A library is infinity under a roof.",
        author: "Gail Carson Levine"
    },
    {
        text: "The library is the temple of learning, and learning has liberated more people than all the wars in history.",
        author: "Carl T. Rowan"
    },
    {
        text: "I have always imagined that paradise will be a kind of library.",
        author: "Jorge Luis Borges"
    },
];

export function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    return quotesData[randomIndex];
}
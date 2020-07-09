// Object destructuring ES6
const book = {
    title: "Ego is the enemy",
    author: "Ryan Holiday",
    publisher: {
        name:"Penguin"
    }
};

const {name: publisherName="Self-Published"} = book.publisher;

// console.log(publisherName);

// Array destructuring ES6

const item = ['Coffee (iced)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
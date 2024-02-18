// Code your solutions in this file
function writeCards(guests, party) {
    const messages = [];
    for (let i = 0; i < guests.length; i++) {
        messages.push(`Thank you, ${guests[i]}, for the wonderful ${party} gift!`);
    }
    return messages;
}

const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(messages);

function countDown(startingNumber) {
    if (startingNumber < 0) {
        console.log("Please provide a positive integer.");
        return;
    }

    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}

countDown(10);

const heading = document.querySelector("h1");
console.log(heading);

// Find an element with the class value
const value = document.querySelector(".value");
console.log(value);

// Find a <button> element
const button = document.querySelector("button");
console.log(button);

// Find an element with the class area
const area = document.querySelector(".area-display");
console.log(area);

// Find a <div> that is a descendant of an element with the class stat
const divStat = document.querySelector("div .stat");
console.log(divStat);

// Find an element with the class hello. Take careful note of what is returned there.
const hello = document.querySelector(".hello");
console.log(hello); // Returns null because there is no class hello

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
    console.log(element);
}

/* Same as the iteration above
    for (let i =0; i < heading3List.length; i++) {
        const element = heading3List[i]
        console.log(element);
    }
*/

// Get a list of all the <div> elements containing ratings on the page. Log them to the console using the values() method.
const div = document.querySelectorAll("div");
// console.log(div);
for (const element of div.values()) {
    console.log(element);
}

// Get a list of all the <div> elements containing areas on the page. Log them to the console using a simple for loop.

for (let i = 0; i < div.length; i++) {
    console.log(div);
}

/* For older browsers and Internet Explorer who don't fully support the NodeList interface.

    // Get a list of descriptions
    const list = document.querySelectorAll(".description-display");

    // Log them to the console
    Array.prototype.forEach.call(list, function (element) {
        console.log(element);
    })
*/
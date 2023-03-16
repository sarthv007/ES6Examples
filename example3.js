// let html = "lorem ipsum text";
// html += "this is dummy text";
// console.log(html);

// const multilineString = ` lorem ipsum text
// some dummy text is here
// sarthak vaidya
// `;

// document.write(multilineString);

function add(a, b, c = 100) {
  console.log(a, b, c);
  return a + b + c;
}

document.write(`Result ${add(10, 200)}`);

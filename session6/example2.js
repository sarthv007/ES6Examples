function download(url, callback) {
  setTimeout(() => {
    console.log("dowloading :", url);
    callback(url);
  }, 5000);
}

function process(url) {
  console.log("Processing: ", url);
}

const url = "http://img21.jpg";
download(url, process);

// const callback = () => {
//   console.log("sarthak vaidya");
// };

// function getData() {
//   setTimeout(callback, 2000);
//   //setInterval(callback, 2000);
// }

// getData();

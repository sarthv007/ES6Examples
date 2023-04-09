function download(url, callback) {
  setTimeout(() => {
    console.log("dowloading :", url);
    callback(url);
  }, 2000);
}

const url1 = "http://img1.jpg";
const url2 = "http://img2.jpg";
const url3 = "http://img3.jpg";

download(url1, () => {
  console.log("Processing: ", url1);
  download(url2, () => {
    console.log("Processing: ", url2);
    download(url3, () => {
      console.log("Processing: ", url3);
      download(url3, () => {
        console.log("Processing: ", url3);
        download(url3, () => {
          console.log("Processing: ", url3);
          download(url3, () => {
            console.log("Processing: ", url3);
            download(url3, () => {
              console.log("Processing: ", url3);
            });
          });
        });
      });
    });
  });
});

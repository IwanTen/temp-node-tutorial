const { readFile, writeFile } = require("fs").promises;
const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

const firstPath = "./content/first.txt";
const secondPath = "./content/second.txt";

const start = async () => {
  try {
    const first = await readFile(firstPath, "utf-8");
    const second = await readFile(secondPath, "utf-8");
    await writeFile(
      "./content/result-mind-grenade",
      "THIS IS AWESOME: " + first + second
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// getText(myPath)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

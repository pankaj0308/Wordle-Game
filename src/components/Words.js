import glossary from "./glossary.txt";
export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let wordArr;
  let rightWord;
  await fetch(glossary)
    .then((response) => response.text())
    .then((results) => {
      wordArr = results.split(/\r?\n/);
      wordSet = new Set(wordArr);
      const index = Math.floor(Math.random() * wordArr.length);
      rightWord = wordArr[index].toUpperCase();
    });
  console.log(rightWord);
  return { wordSet, rightWord };
};

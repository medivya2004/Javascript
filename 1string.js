const name = "Divya"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Divya')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4,4)
console.log(anotherString);

const newStringOne = "  Divya  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "sakhredivya124@gmail.com"
console.log(url.replace('4', '3'));

console.log(url.includes('divya'));
console.log(url.includes('disha'));

console.log(gameName.split('-'));



const book = document.querySelectorAll(".book");
console.log(book);
//
//
//1
book[0].before(book[1]);
book[3].before(book[4]);
book[5].after(book[2]);
//
//
//2
const body = document.querySelector("body");
body.style.backgroundImage = " url(/image/adv.jpg) ";
//
//
//3
const head = document.getElementsByTagName("a");
head[2].textContent = "Книга 3. this и Прототипы Объектов";
//
//
//4
const advertising = document.querySelector(".adv");
advertising.remove();
//
//
//5
const theList = document.getElementsByTagName("ul");
//
const chapters = theList[1].getElementsByTagName("li");
//
chapters[10].before(chapters[2]);
chapters[3].before(chapters[5]);
chapters[4].before(chapters[7]);
//
//
const theList1 = document.getElementsByTagName("ul");
//
const chapters1 = theList1[4].getElementsByTagName("li");
//
chapters1[2].before(chapters1[9]);
chapters1[3].before(chapters1[4]);
chapters1[4].before(chapters1[5]);
chapters1[9].before(chapters1[6]);
//
//
//6
const theList2 = document.getElementsByTagName("ul");
console.log(theList2);
//
const chapters2 = theList2[5].getElementsByTagName("li");
//
const newList = document.createElement("li");
newList.textContent = "Глава 8: За пределами ES6";
chapters2[8].append(newList);

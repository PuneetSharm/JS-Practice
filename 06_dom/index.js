//getElementById()
// document.getElementById("title");
// document.getElementById('title').class;//gives undefined
// document.getElementById('title').className; //gives the elements class attribute name
// document.getElementById('title').getAttribute('id');
// document.getElementById('title').getAttribute('class');
// document.getElementById('title').setAttribute('class','test');
// document.getElementById('title').setAttribute('class','test heading');
const title = document.getElementById('title');
title.style.backgroundColor = 'green';
title.style.padding = '15px';
title.style.borderRadius= '15px';
title.textContent; //gives all the content present
title.innerHTML;// gives entirely including the tags
title.innerText;//will give the content but not the one which is hidden using CSS 
document.getElementsByClassName('heading');
document.querySelector('h1');
document.querySelector('#title');
document.querySelector('.heading');
document.querySelector('input[type="password"]');
document.querySelector('p:first-child');
const myul = document.querySelector('ul');
const colour = myul.querySelector('li');
colour.style.backgroundColor = 'green';
const myList = document.querySelectorAll('li');//gives you NodeList and we can't use map function on it
myList[0].style.color = "Blue";
const listItems = document.getElementsByClassName('list-item'); // gives HTMLCollection
//convert to array
const myConvertedArray = Array.from(listItems);
myConvertedArray.forEach((li) => {
    li.style.color = 'red';
});


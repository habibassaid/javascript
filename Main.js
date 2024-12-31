let names=['habiba','arwa','salma','radwa'];
let ages=['23 years','28 years','25 years','21 years'];
//let images=['images/img4.jpg','images/img2.jpg','images/img3.jpg','images/img1.jpg'];

let x= document.createElement('div');
document.body.appendChild(x);
x.style.textAlign='center';
function element(names,ages,images){


// elements
let card=document.createElement('div');
let title=document.createElement('h2');
let age=document.createElement('p');
let img=document.createElement('img');
//content

let head=document.createTextNode(names);
let Age= document.createTextNode(ages);

img.src="images/img4.jpg";
title.appendChild(head);
age.appendChild(Age);
//style
card.style.width='200px';
card.style.background='#';
card.style.color='green';
card.style.padding='10px';
card.style.margin='2px';
card.style.display='inline-block'
img.style.width='100%';




card.appendChild(title);
card.appendChild(age);
card.appendChild(img);

x.appendChild(card);


}
for(let i=0; i<4; i++){
     element(names[i],ages[i]);
}


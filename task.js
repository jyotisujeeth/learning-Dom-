// exmining the documentation
//alert('i will learn java code')
//console.dir(document);
//console.log(document.domain);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document);
// console.log(document.body);
// console.log(document.all);


// document.all[10].textContent = 'jyotipatil';// used to chANGE the text element but this not a standerd method to do so
//  by index id

// console.log(document.forms);// even we acess by index alos 
// console.log(document.links);

// console.log(document.images);
// for image infromation in document.images

// getelementby id

// console.log(document.getElementById('header-title'));
// var HeaderTitle = document.getElementById('header-title');
// var header=document.getElementById('main-header');
//console.log(HeaderTitle);
// HeaderTitle.textContent = 'jyotisujeethpatil';
// HeaderTitle.innerText= 'jyotipatil';
// console.log(HeaderTitle.innerText);
// HeaderTitle.innerHTML='<h3>hello</h3>';

// HeaderTitle.style.borderBottom = "solid 3px #000";

// GET ELEMENT BY CLASSS name
 
var items=document.getElementsByClassName('list-group-item');
//console.log( items);
// console.log( items[1]);
// items[0].textContent = 'sai';
// items[1].textContent = 'saikriti';
// items[2].textContent = 'saibaba';
// items[3].textContent = 'sairachith';

// items[1].style.fontWeight ='bold';
// items[1].style.backgroundColor ='yellow';


//this odr invdual acess  if we want to acsess for whloe from we do with for loop

// for (var i=0; i<items.length; i++){
// items[i].style.backgroundColor ='orange';
// }

// GET ELEMENT BY TAGNAME 

var li=document.getElementsByClassName('list-group-item');
console.log( li);
console.log( items[1]);
li[0].textContent = 'sai1';
li[1].textContent = 'saikriti2';
li[2].textContent = 'saibaba3';
li[3].textContent = 'sairachith4';

li[1].style.fontWeight ='bold';
li[1].style.backgroundColor ='green';


//this odr invdual acess  if we want to acsess for whloe from we do with for loop

// for (var i=0; i<items.length; i++){
// items[i].style.backgroundColor ='red';
// }

// Querysecleector//

// var header = document.querySelector('#main-header');
// header.style.borderBottom='sloid 4px #ccc';

// var input= document.querySelector('input');
// input.value='hello world'

// var submit= document.querySelector('input[type="submit"]');
// submit.value="send"

// var item=document.querySelector('.list-group-item');//selectinbasd on cleaass name
// item.style.color='red';

// var lastitem = document.querySelector
// ('.list-group-item:last-child');//selectinbasd on cleaass name
// lastitem.style.color='blue';

// var secondItem = document.querySelector('.list-group-item:nthchild(2)'); 
// secondItem.style.color = 'green';
// //selectinbasd on index of class


// querySelectorALl it simlarly work as get elemnt by tag name or  class name

var tiltes=document.querySelectorAll('.title');
console.log(tiltes);

tiltes[0].textContent='hello';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor ='pink';
    even[i].style.backgroundColor ='orange';
}

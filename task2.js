// query of child and sibling element
// the document are a classes which come under the div 
// div is the parent elemnt under which ceme those are the children and sibling node


// traversing the dom

var itemlist =document.querySelector('#items');// parent node method or property 
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = 'yellow';
// console.log(itemlist.parentNode.parentNode.parentNode);

// PARENT ELEMENT PARENT NODE AND PARENT ELEMNT BOTH ARE INTERCHANGLBE 
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = 'yellow';
// console.log(itemlist.parentElement.parentElement.parentElement);

// CHILD NODES
// console.log(itemlist.childNodes);
// difernance between childNodes and children is in node property it display the elemnt as well as the text infrmation while in here only items
// console.log(itemlist.children);

//even we can asees by the index also
// console.log(itemlist.children[0]);
// console.log(itemlist.children[1]);
// console.log(itemlist.children[2]);
// console.log(itemlist.children[3]);        

// we can edit those element by id or style console.log(itemlist.children[1]);attribute
itemlist.children[0].style.backgroundColor= 'orange';
// itemlist.children[1].style.backgroundColor= 'green';
itemlist.children[2].style.backgroundColor= 'green';
// itemlist.children[3].style.backgroundColor= 'green';

// //first child to get text node
// console.log(itemlist.firstChild);
// // to get elemnt in child
// console.log(itemlist.firstElementChild);

// //for editing the text 
//  itemlist.firstElementChild.textContent= 'sujeethpatil';


// //last child to get text node
// console.log(itemlist.lastChild);
// // to get elemnt in child
// console.log(itemlist.lastElementChild);

// //for editing the text 
// itemlist.lastElementChild.textContent= 'jyotisujeeth';

// NEXT SIbling Vue.config.ignoredElements 
   console.log(itemlist.nextSibling);
//nect elemnt sibling
// console.log(itemlist.nextElementSibling);

// previoussibling
// console.log(itemlist.previousSibling);
// console.log(itemlist.previousElementSibling);
// //even we can edit also
// itemlist.previousElementSibling.style.color='pink';

// jquery selector is not requre fro we do dom maipulatio uing this

// create Vue.config.ignoredElements = 
//  create new div elment

var newDiv = document.createElement('div');

//add class
    newDiv.className = 'hello-world';
// to add id 
newDiv.id="hello";
// add attr 
newDiv.setAttribute('title', 'helloDivTitle');
// add text to div
//  newDiv.appendchild(newDivText);
// to add the code or defineComponent 

var container = document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);
// we can captionSide: style the 
newDiv.style.fontSize="25px";
container.insertBefore(newDiv, container. h1);

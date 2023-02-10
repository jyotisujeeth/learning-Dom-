// learing mouse and keybord even listner


// var button=document.getElementById('button').addEventListener('click',function(){
//      console.log('myname is jyotisujeeth')
// });
// function buttonclick(){
//     //console.log('button click');
   
// }

// even we can axecss the change of text with this button clik
// var button=document.getElementById('button').addEventListener('click', buttonclick);
// function buttonclick(){
// document.getElementById('header-title').textContent = 'changed';
// document.querySelector('#main').style.backgroundColor = 'blue';
// }

// passing event paramiter element id postion pof mouse and every information

// var button=document.getElementById('button').addEventListener('click', buttonclick);
// function buttonclick(e){
//     console.log(e);
// }


//even it gives the whole thing of class elemnt
//event and objects
// var button=document.getElementById('button').addEventListener('click', buttonclick);
// function buttonclick(e){
    //actual elemnt which is clicked insted of button 
    // console.log(e.target);
    //even we can get the id 
    // console.log(e.target.id);
    //even it gives the whole thing of class elemnt name
    // console.log(e.target.className);
    // class list of dom token
    // console.log(e.target.classlist);

    // var output=document.getElementById('output');
    // output.innerHTML= '<h2>'+e.target.id+ '</h2>';

    // console.log(e.type);

    //postion of mouse in terms of x and y axicess
    // console.log(e.clientX);
    // console.log(e.clientY);
// ofsect in formation of mouse click
// console.log(e.offsetX);
// console.log(e.offsetY);
    
// we can test oabout holding of alt key, shift, or contral key
// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// we can y=use the if statment for checking the diffrent functionlity in our function  to check the Key pressed one
// }

// run element of mouse function
// var button=document.getElementById('button').addEventListener('click', runEvent);
// function runEvent(e){
//     console.log('Event Type: ' + e.type);
// }


//var button=document.getElementById('button');
// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
//button.addEventListener('mouseup',runEvent);
//button.addEventListener('mouseout',runEvent);

// box.addEventListener('click',runEvent);
// box.addEventListener('mousedown',runEvent);
// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseenter',runEvent);

box.addEventListener('mouseout',runEvent);
//function runEvent(e){
        //  console.log('Event Type: ' + e.type);
     
// MOUSE ENTER AND MOUSE OVER ARE DIFFERNT FUNCTION IN ENTER FOR IN WHILE MOUSE EVENT IS ONLY FOR THE TEXT OF THE DOCUMENTS

// even we can axesssthe mouse postion and offset postion form the any elemnt of the box or any documeny

// output.innerHtml='<h3>mouseX: ' + e.offsetX +' </h3><h3mouseY>' + e.offsetY
+'</h3>';
// chaniging the colur of the box based on the postion of mouse the colur value is set based on the rgb value
// box.style.backgroundColor="rgb("+e.offsetX+", "+e.offsetY+", 40)";
// 

// we can asxecss for the body of the app.config.globalProperties. = 
// document.body.style.backgroundColor="rgb("+e.offsetX+", "+e.offsetY+", 40)";

// }

// key bourd element that input value
var itemInput = document.querySelector('input[type="text"]');
var from=document.querySelector('form');
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keypress', runEvent);
` v`
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('input', runEvent);

itemInput.addEventListener('keyup',runEvent);
function runEvent(e){
    // console.log('Event Type: ' + e.type);
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML ='<h3>'+ e.target.value+'</h3>';
//the value pressed inthe box value input

}

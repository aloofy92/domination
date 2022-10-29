// in order to access argument create a variable and do document.querySelector.

/* created a function with the name addStrikeThrough. No Parameters! (Can name function whatever.)
Then created a variable that has a selector in it (document.querySelector), which
as the problem asks selects the first item in the <ul(unordered(non-numbered)) list(<li>).
which is this part let argumentItem1 = document.querySelector("li); After, use the variable to put a line through the text in the first <ul, <li>,
which is this part argumentItem1.style.textDecoration = "line-through";
Lastly, call the function in this case addStrikeThrough();. */

function addStrikeThrough(){
let argumentItem1 = document.querySelector("li");
argumentItem1.style.textDecoration = "line-through";
}
addStrikeThrough();






/* setImage function takes in the id of an image as well as the url (as parameters),
we create a selector for that image using document.querySelector and storing it in
the image variable (let image =, can name whatever i want), for the querySelector 
we want to make sure that we accounted for the fact that its an id by adding the # + id,
 then set the image doing (image.src = url;)...... The height and width are just optional 
 adjustments to the pictures on the webpage.*/


function setImage(id, url){
    let image = document.querySelector("#" + id); // or ('`#${id})
    image.src = url;
    image.style.height = "300px";
    image.style.width = "350px";
}
setImage('image-1', 'https://media.comicbook.com/2018/07/resident-evil-2-claire-1124117.jpeg');
setImage('image-2', 'https://www.evilresource.com/images/data/full/re5/chris-redfield.png');
setImage('image-3', 'https://pbs.twimg.com/media/FVKpE66XwAEdSOw?format=jpg&name=4096x4096' );






/* create function called removeArgument() with no parameters.
Then created a variable that has a selector in it (can name variable whatever i want)
 (document.querySelector), which as the problem asks selects the first item 
 in the <ul(unordered(non-numbered)) list(<li>). But this time we are removing the item from the list which is done with this
(itemToRemove.remove();. Call it twice(outside of the function of course!) by doing
removeArgument();, removeArgument(); which is shown below. */

function removeArgument(){
    let itemToRemove = document.querySelector('li');
    itemToRemove.remove();
}
removeArgument();
removeArgument();






/* created a function called twoStrings that takes in two strings (as paramaters),
one representing fontsize the other representing an id. we create a selector for that item  
using document.querySelector and storing it in the item variable (let itemId =, I
can name it whatever i want), Then we set the thing with the id to have the size for 
its text which is done by (itemId.style.fontSize = size;). Now I can use this
function to change the size of any text on the page.
 As u can see below (<h1 id="Lucky">Image Area</h1>) aka "Lucky" and
  (<div id="lorem">) "lorem" were px's were altered.  */

function twoStrings(size, id){
let itemId = document.querySelector(`#${id}`);
itemId.style.fontSize = size;
}
twoStrings('100px', 'Lucky');
twoStrings('50px', 'lorem');






/* create a function called addElementToList(). It takes in a parameter in this case
it is (element). We need to call the parent by creating a variable with querySelector
(let arguments = document.querySelector('#arguments)) make sure whatever is in doc.querySelector
is the same as what in the index.html page <ul id="arguments">.) To add whatever element
we pass in to the arguments list by doing (arguments.appendChild(element);.) 
Lastly, create an image element in javascript and pass it into the function
this is done by creating image element (let newImage = document.createElement('img');.)
then newImage.src = "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2020/12/remake.jpg?w=830&ssl=1";
which sets the url to it. addElementToList(newImage); this calls the function
and passes the image element to it...
 newImage.style.height = "300px"; and newImage.style.height = "300px" are optional; */

function addElementToList(element){
let arguments = document.querySelector('#arguments');
arguments.appendChild(element);
}
let newImage = document.createElement('img');
newImage.src = "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2020/12/remake.jpg?w=830&ssl=1";
newImage.style.height = "300px";
newImage.style.width = "350px";
addElementToList(newImage);





function addImage(element2){
    let image1 = document.querySelector("#images"); // or ('`#${id})
    image1.appendChild(element2);  
}
let disImage = document.createElement('img');
disImage.src = "https://residentevilpodcast.com/wp-content/uploads/2021/08/albertwesker.jpg";
disImage.style.height = "30px";
addImage(disImage);




function  makesInvisible(element3){
    let invElement = document.querySelector('#' + id);
    invElement.style.textDecoration = "invisible";
}
makesInvisible();




    
function addText(list){
    let listItem1= document.querySelector("#numbered-item"); // or ('`#${id})
    listItem1.appendChild(list);  
}
let disText = document.createElement('li');
disText.innerText = "kill the zombies!";
addText(disText);





function changeHeader(size2, text){
    let header = document.querySelector("#heading" + size2); // or ('`#${id})
header.appendChild = text;
}
changeHeader('20', 'some text');
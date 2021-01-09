//function to add new task in list
function addElement(){
    //creating list element
    var li = document.createElement("li");

    //creating delete button
    var delButton = document.createElement("button");
    delButton.innerText="Delete";
    delButton.onclick=delEelement;

    //storing input field value into variable 
    var inputValue = document.getElementById("input").value;

    //creating text node for adding to list element
    var text = document.createTextNode(inputValue);

    //list element appends text node value
    li.appendChild(text);
    //list element appends delete button
    li.appendChild(delButton);
    //adding list element in unordered list element
    document.getElementById("mylist").appendChild(li);
    //updating textfield value to none
    document.getElementById("input").value = "";
}

//function for deleting elements from unordered list
function delEelement(){
    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    ul.removeChild(listItem);
}
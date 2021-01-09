//function to add new task in list
function addElement(){
    //creating list element
    var li = document.createElement("li");
    //storing input field value into variable 
    var inputValue = document.getElementById("input").value;
    //creating text node for adding to list element
    var text = document.createTextNode(inputValue);

    //list element appends text node value
    li.appendChild(text);
    //adding list element in unordered list element
    document.getElementById("mylist").appendChild(li);
    //updating textfield value to none
    document.getElementById("input").value = "";


}
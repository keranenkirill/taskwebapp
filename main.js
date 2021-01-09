function addElement(){
    var li = document.createElement("li");
    var inputText = document.getElementById("input").value;
    var text = document.createTextNode(inputText);

    li.appendChild(text);
    document.getElementById("mylist").appendChild(li);
    document.getElementById("input").value = "";


}
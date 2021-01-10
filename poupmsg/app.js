  function openForm() {
    document.getElementById("popupForm").style.display = "block";
    var sendButton = document.getElementsByClassName("btn");
    sendButton.onclick=sendMessage;
  }
  
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    name.value = '';
    email.value = '';
    message.value = '';
  }



  function sendMessage(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    name = name.value;
    localStorage.setItem('name', name);

    email = email.value;
    localStorage.setItem('email', email);

    message = message.value;
    localStorage.setItem('message', message);
  }



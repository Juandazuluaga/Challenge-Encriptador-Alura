function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var encryptedText = "";
  
    for (var i = 0; i < inputText.length; i++) {
      var char = inputText[i];
  
      switch (char) {
        case "e":
          encryptedText += "enter";
          break;
        case "i":
          encryptedText += "imes";
          break;
        case "a":
          encryptedText += "ai";
          break;
        case "o":
          encryptedText += "ober";
          break;
        case "u":
          encryptedText += "ufat";
          break;
        default:
          encryptedText += char;
          break;
      }
    }
  
    document.getElementById("encryptedMessage").textContent = encryptedText;
    document.querySelector(".no_encotrado").style.display = "none";
  }
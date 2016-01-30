
/*global document*/


//operators
//"=" assigns values
//"+-" {concatenation assignment operator with string) adds to whatever the variables current has

//output variables to the console.

//If You *Can't* *Stand* the *heat* *get* *out* of the *kitchen*.

var static_words1 = "If you ";
var static_words2 = " the ";
var static_words3 = " out of the ";

var button = document.getElementById("submit");

button.addEventListener("click", onClick, false);

function onClick(evt)

{  
  evt.preventDefault(evt);  
        var element1 = document.getElementById("form1").elements.item(0).value;
        var element2 = document.getElementById("form1").elements.item(1).value;
        var element3 = document.getElementById("form1").elements.item(2).value;
        var element4 = document.getElementById("form1").elements.item(3).value;
        var element5 = document.getElementById("form1").elements.item(4).value;
  
  console.log(static_words1 + element1 + element2 + static_words2 + element3 + element4 + static_words3 + element5);
}

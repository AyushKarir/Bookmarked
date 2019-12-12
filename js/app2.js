var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
var regex = new RegExp(expression);
var inputLink1 = document.getElementById("link").value;
var url = document.createTextNode(inputLink1);
//el_up.innerHTML = "URL = '" + url + "'";

function gfg_Run() {
  var inputLink1 = document.getElementById("link").value;
  var url = document.createTextNode(inputLink1);
  var result = inputLink1.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  var res = "";
  if (result == null) {
    console.log("invalid URL");
    alert("Invalid URL Entered");
  } else {
    newElement();
  }
}
function newElement() {
  //INSERT REGEX CODE HERE
  //for title
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);

  li.appendChild(t);
  if (inputValue === "") {
    alert("please add something");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  //for link
  var inputLink = document.getElementById("link").value;
  var c = document.createTextNode(inputLink);
  var atag = document.createElement("a");
  atag.className = "link_test";
  $(atag).attr("href", "https://" + inputLink);
  atag.innerText = inputLink;
  li.appendChild(atag);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

//toggle
$(document).ready(function() {
  $(".darkmode-toggle").addClass("light-mode");
});

$(document).ready(function() {
  $(".darkmode-toggle").click(function() {
    $("hero-text").toggleClass("light-mode");
  });
});
$(document).ready(function() {
  $(".darkmode-layer--buttton").click(function() {
    $("hero-info").toggleClass("light-mode");
  });
});

//REGEX CODE
// var el_up = document.getElementById("GFG_UP");
// var el_down = document.getElementById("GFG_DOWN");

// var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
// var regex = new RegExp(expression);
// var inputLink1 = document.getElementById("link").value;
// var url = document.createTextNode(inputLink1);
// //el_up.innerHTML = "URL = '" + url + "'";

// function gfg_Run() {
//   var test;
//   var res = "";
//   if (url.match(regex)) {
//     test = 1;
//   } else {
//     test = 2;
//   }
//   console.log(test);
// }

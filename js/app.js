function newElement() {
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

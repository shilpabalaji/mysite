// lower menu buttons

function resumeclick() {
  console.log("resume clicked");
  window.location = "/resume.pdf";
}

function aboutclick() {
  console.log("about clicked");
  var text = document.getElementById("main_text");
  text.innerHTML = 
    "I just graduated from <a href = 'http://www.cmu.edu'>Carnegie Mellon University</a> with a degree in Computer Science. Pretty soon I'll be working as a Forward Deployed Engineer at <a href='http://www.palantir.com'>Palantir Technologies</a>. Until then, I'm spending a few months up in glorious Seward, Alaska."
}

function contactclick() {
  console.log("about clicked");
  var text = document.getElementById("main_text");
  text.innerHTML = 
    "<div><div id='facewrapper'> <img id='face' height=200 width=230 src='./imgs/face.jpg'></div><div id='contacttext'>shilpa@shilpabalaji.com<br>(925) 577-8184<br><br>" +
    "<a href='http://www.facebook.com/shilpabalaji'>facebook</a><br>" +
    "<a href='http://www.quora.com/Shilpa-Balaji'>quora</a><br>" +
    "<a href='https://twitter.com/shilpabalaji'>twitter</a><br>" +
    "<a href='http://www.linkedin.com/in/shilpabalaji'>linkedin</a><br>" +
    "<a href='https://github.com/shilpabalaji'>github</a>" +
    "</div></div>"
    ;

}

function homeclick() {
  console.log("home clicked");
  var text = document.getElementById("main_text");
  text.innerHTML = ""

}

// lower menu buttons

function resumeclick() {
  console.log("resume clicked");
  window.location = "/resume.pdf";
}

function aboutclick() {
  console.log("about clicked");
  var text = document.getElementById("main_text");
  text.innerHTML = 
    "I just graduated from <a target='_blank' href = 'http://www.cmu.edu'>Carnegie Mellon University</a> with a degree in Computer Science. Pretty soon I'll be working as a Forward Deployed Engineer at <a target='_blank' href='http://www.palantir.com'>Palantir Technologies</a>. Until then, I'm spending a few months up in the glorious little town of <a target='_blank' href='http://en.wikipedia.org/wiki/Seward,_Alaska'>Seward, Alaska</a>."
}

function contactclick() {
  console.log("contact clicked");
  var text = document.getElementById("main_text");
  text.innerHTML = 
    "<div id='facewrapper'> <img id='face' height=200 width=200 src='./imgs/circle_face.gif'></div><div id='contacttext'>shilpa@shilpabalaji.com<br>(925) 577-8184<br><br>" +
    "<a target='_blank' href='http://www.facebook.com/shilpabalaji'>facebook</a><br>" +
    "<a target='_blank' href='http://www.quora.com/Shilpa-Balaji'>quora</a><br>" +
    "<a target='_blank' href='https://twitter.com/shilpabalaji'>twitter</a><br>" +
    "<a target='_blank' href='http://www.linkedin.com/in/shilpabalaji'>linkedin</a><br>" +
    "<a target='_blank' href='https://github.com/shilpabalaji'>github</a>"
    ;
  console.log(text.innerHTML);

}

function homeclick() {
  console.log("home clicked");
  var text = document.getElementById("main_text");
  text.innerHTML = ""

}

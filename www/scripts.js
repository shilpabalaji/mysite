// lower menu buttons

function homeclick() {
  console.log("home clicked");
  var text = document.getElementById("main_text");
  text.innerHTML = 'shoot me an <a href="mailto:shilpa@shilpabalaji.com">email</a>, I\'d like that.';
}

function resumeclick() {
  console.log("resume clicked");
  window.location = "/resume.pdf";
}

function aboutclick() {
  console.log("about clicked");
  var text = document.getElementById("main_text");
  text.innerHTML = 
    "Well. I just graduated from <a href = 'http://www.cmu.edu'>Carnegie Mellon University</a> with a degree in Computer Science. Pretty soon I'll be working as a Forward Deployed Engineer at <a href='http://www.palantir.com'>Palantir Technologies</a>. Until then, I'm spending a few months up in the glorious Seward, Alaska.<br><br>I like to read, write, and paint (among other things) when I'm not computer sciencing. I also like meeting new people, so go ahead and drop me a line if you're so inclined.";
}

function contactclick() {
  console.log("about clicked");
  var text = document.getElementById("main_text");
  text.innerHTML = "I'm all over the place. Find me at:<br><br><center>" + 
    "<a href='https://www.facebook.com/shilpa.balaji'>facebook</a><br>" +
    "<a href='http://www.quora.com/Shilpa-Balaji'>quora</a><br>" +
    "<a href='http://www.linkedin.com/in/shilpabalaji'>linkedin</a><br>" +
    "<a href='https://github.com/shilpabalaji'>github</a><br>" + 
    "<a href='https://twitter.com/shilpabalaji'>twitter</a>"
     ;

}

const classes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']; 
const numClass = 11;

let length = 0;
let theDiv ='';

function intake(){
  let words = document.getElementById('para').value;
  words = words.split('');
  length = words.length;

  for (i=0; i<length; i++){
    words[i] = `<span>${words[i]}<span>`;
    words[i] = words[i].replace('<span>', `<span class=${classes[i%numClass]}>`);
  }
  
  words = words.join('');
  document.getElementById("output").innerHTML = words; 
};


// inspo: https://ommanyte.tumblr.com/post/186175659275/ommanyte-im-going-to-make-a-new-font-called

//https://stackoverflow.com/questions/41968593/assigning-javascript-array-elements-class-or-id-for-css-styling

/*

let theDiv = document.getElementById('thediv');
  theDiv.innerHTML = words;
  let theSpan = theDiv.querySelector("span"); 
  theSpan.classList.add('hoverRed');






document.getElementById("button").onclick = function() {myFunction()};
function myFunction() {
  alert("The form was submitted");
  const words = document.getElementsByName("para").value; 
  document.write(words);
}

/*for (let i = 0; i < words.length; i++) {
  document.elm.style.border = "3px solid #FF0000";
  document.getElementById("p2").style.color="blue";
} 

 $(document).ready(() => {
 $('p').each(() => {
      $(this).html($(this).html().replace(/(a)/g, '<span style="font-weight: 700; font-size:30px;">,</span>'));
  });
 });

 $('.menu-button').css({
      color: '#EFEFEF',
      backgroundColor: '#303030'
    })

 https://answers.squarespace.com/questions/130414/using-javascriptjquery-to-style-specific-character.html*/

 // this is cool https://codesandbox.io/s/yj6rz861mx?from-embed
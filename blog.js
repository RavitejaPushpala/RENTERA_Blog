const facebookBtn = document.querySelector(".fb");
const twitterBtn = document.querySelector(".twitter");
const linkedinBtn = document.querySelector(".linkedin");
const whatsappBtn = document.querySelector(".whatsapp");

function init() {

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi everyone, please check my blog: ");
  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=https://rentera.in/`
  );

  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=https://rentera.in/`
  );


  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=https://rentera.in/&title=Rentera`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=Rentera https://rentera.in/`
  );
}

init();

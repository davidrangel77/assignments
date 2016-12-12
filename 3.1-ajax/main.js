document.addEventListener("DOMContentLoaded", function(){
  // make VAR for the response
  var githubDataElement =  document.querySelector("[data-js='githubData']")
  // set the var xhr for a new http resquest
  var xhr = new XMLHttpRequest();
  // make the xhr open with GET to the http
  xhr.open("GET", "https://api.github.com/users/davidrangel77/repos")
  // add eventListener for loaded page
  xhr.addEventListener("load", function(e){
    var githubDataResponse = JSON.parse(this.response);
    console.log(githubDataResponse);
    // var add them to html with "innerHTML"
    var githubDataArticleHTML = "<article>";
      githubDataArticleHTML +=  "Archive url: " + githubDataResponse[0].archive_url;
      githubDataArticleHTML += "</article>";
      githubDataArticleHTML += "<article>";
      githubDataArticleHTML += "Rep Name: " + githubDataResponse[0].name;
      githubDataArticleHTML += "</article>";
      githubDataArticleHTML += "Has downloads? " + githubDataResponse[0].has_downloads;
      githubDataArticleHTML += "<article>";
      githubDataArticleHTML += "Default Branch: " + githubDataResponse[0].default_branch;
      githubDataArticleHTML += "</article>";
      githubDataArticleHTML += "Has Forks? " + githubDataResponse[0].fork;
      githubDataArticleHTML += "<article>";
      githubDataArticleHTML += "Github ID: " + githubDataResponse[0].id;
      githubDataArticleHTML += "</article>";
      console.log(githubDataArticleHTML);
      githubDataElement.innerHTML = githubDataArticleHTML;
  });
  // make xhr.send
  xhr.send();

});

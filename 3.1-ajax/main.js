document.addEventListener("DOMContentLoaded", function(){
  // make VAR for the response
  var githubDataElement =  document.querySelector("[data-js='githubData']")
  // set the var xhr for a new http resquest
  var xhr = new XMLHttpRequest();
  // make the xhr open with GET to the http
  xhr.open("GET", "https://api.github.com/users/davidrangel77")
  // add eventListener for loaded page
  xhr.addEventListener("load", function(e){
    var githubDataResponse = JSON.parse(this.response);
    // var add them to html with "innerHTML"
    var userDataElement = "<article>";
    userDataElement += "<img src='";
    userDataElement += githubDataResponse.avatar_url;
    userDataElement += "' class=userAvatar>";
    userDataElement += "<h2>";
    userDataElement += githubDataResponse.login;
    userDataElement += "</h2>";
    userDataElement += "<p>" + "joined ";
    userDataElement += githubDataResponse.created_at;
    userDataElement += "</p>";
    userDataElement += "<a href='";
    userDataElement += githubDataResponse.organizations_url;
    userDataElement += "'>";
    userDataElement += "organizations"
    userDataElement += "</a>"
    userDataElement += "</article>"
    githubDataElement.innerHTML = userDataElement;
  });
  // make xhr.send
  xhr.send();
  //
  var githubDataElementAside = document.querySelector("[data-js='githubDataAside']");
  var xhrAside = new XMLHttpRequest();
  xhrAside.open("GET", "https://api.github.com/users/davidrangel77");
  xhrAside.addEventListener("load", function(e){
    var githubDataResponseAside = JSON.parse(this.response);
    console.log(githubDataResponseAside);
    var userDataElementAside = "<article>";
    userDataElementAside += "<a href='";
    userDataElementAside += githubDataResponseAside.repos_url;
    userDataElementAside += "'>";
    userDataElementAside += "Repositories";
    userDataElementAside += "</a>";
    userDataElementAside += " ";
    userDataElementAside += "<p class='p'>"
    userDataElementAside += githubDataResponseAside.public_repos;
    userDataElementAside += "</p>" + "  ";
    userDataElementAside += "<a href='";
    userDataElementAside += githubDataResponseAside.starred_url;
    userDataElementAside += "'>";
    userDataElementAside += "Starred";
    userDataElementAside += "</a>";
    userDataElementAside += "  ";
    userDataElementAside += "<a href='";
    userDataElementAside += githubDataResponseAside.followers_url;
    userDataElementAside += "'>";
    userDataElementAside += "Followers";
    userDataElementAside += "</a>";
    userDataElementAside += "  ";
    userDataElementAside += "<p class='p'>"
    userDataElementAside += githubDataResponseAside.followers;
    userDataElementAside += "</p>" + "  ";
    userDataElementAside += "<a href='";
    userDataElementAside += githubDataResponseAside.following_url;
    userDataElementAside += "'>";
    userDataElementAside += "Following";
    userDataElementAside += "</a>" + "  ";
    userDataElementAside += "<p class='p'>";
    userDataElementAside += githubDataResponseAside.following;
    userDataElementAside += "</p>" + "  ";
    githubDataElementAside.innerHTML = userDataElementAside;
  });
  xhrAside.send();
});

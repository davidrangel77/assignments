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
    userDataElement += "<h2 class='userLogin'>";
    userDataElement += githubDataResponse.login;
    userDataElement += "</h2>";
    userDataElement += "</article>";
    userDataElement += "<article>";
    userDataElement += "<button class='largeEditProfileButton'";
    userDataElement += "type='button'";
    userDataElement += "name='button'";
    userDataElement += ">Edit Profile";
    userDataElement += "</button>";
    userDataElement += "<p class='joined'>";
    userDataElement += "<i class='fa fa-clock-o'";
    userDataElement += " aria-hidden='true' style='color:grey'></i>" + "  ";
    userDataElement += "Joined ";
    userDataElement += githubDataResponse.created_at;
    userDataElement += "</p>";
    userDataElement += "<a class='organizations' href='";
    userDataElement += githubDataResponse.organizations_url;
    userDataElement += "'>";
    userDataElement += "Organizations"
    userDataElement += "</a>";
    userDataElement += "</article>";
    githubDataElement.innerHTML = userDataElement;
    console.log(githubDataResponse);
  });
  // make xhr.send
  xhr.send();
  //
  var githubDataElementAside = document.querySelector("[data-js='githubDataAside']");
  var xhrAside = new XMLHttpRequest();
  xhrAside.open("GET", "https://api.github.com/users/davidrangel77");
  xhrAside.addEventListener("load", function(e){
    var githubDataResponseAside = JSON.parse(this.response);
    var userDataElementAside = "<article>";
    userDataElementAside += "<a class='javaDataLinks' style='color:grey' href='";
    userDataElementAside += githubDataResponseAside.repos_url;
    userDataElementAside += "'>";
    userDataElementAside += "Repositories";
    userDataElementAside += "</a>";
    userDataElementAside += " ";
    userDataElementAside += "<p class='p2'>"
    userDataElementAside += githubDataResponseAside.public_repos;
    userDataElementAside += "</p>" + "  ";
    userDataElementAside += "<a class='javaDataLinks' style='color:grey' href='";
    userDataElementAside += githubDataResponseAside.starred_url;
    userDataElementAside += "'>";
    userDataElementAside += "Starred";
    userDataElementAside += "</a>";
    userDataElementAside += "  ";
    userDataElementAside += "<a class='javaDataLinks' style='color:grey' href='";
    userDataElementAside += githubDataResponseAside.followers_url;
    userDataElementAside += "'>";
    userDataElementAside += "Followers";
    userDataElementAside += "</a>";
    userDataElementAside += "  ";
    userDataElementAside += "<p class='p2'>"
    userDataElementAside += githubDataResponseAside.followers;
    userDataElementAside += "</p>" + "  ";
    userDataElementAside += "<a class='javaDataLinks' style='color:grey' href='";
    userDataElementAside += githubDataResponseAside.following_url;
    userDataElementAside += "'>";
    userDataElementAside += "Following";
    userDataElementAside += "</a>" + "  ";
    userDataElementAside += "<p class='p2'>";
    userDataElementAside += githubDataResponseAside.following;
    userDataElementAside += "</p>" + "  ";
    githubDataElementAside.innerHTML = userDataElementAside;
  });
  xhrAside.send();

  var githubDataElementNav = document.querySelector("[data-js='githubDataNav']");
  var xhrNav = new XMLHttpRequest();
  xhrNav.open("GET", "https://api.github.com/users/davidrangel77");
  xhrNav.addEventListener("load", function(e){
    var githubDataResponseNav = JSON.parse(this.response);
    var userDataElementNav = "<img src='";
      userDataElementNav += githubDataResponseNav.avatar_url;
      userDataElementNav += "' class=rightCornerAvatar>";
      githubDataElementNav.innerHTML = userDataElementNav;
  });
  xhrNav.send();
});

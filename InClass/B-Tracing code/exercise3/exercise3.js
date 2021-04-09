const getRepos = function (repoName) {
  return fetch('https://api.github.com/users/' + repoName + '/repos')
    .then(data => data.json())
    .then(function (response) {
      var myElement = document.querySelector("#main");
      return response.map(function (rep) {
        console.log(rep.name);
        var paragraph = document.createElement("p");
        paragraph.innerText = rep.name;
        myElement.appendChild(paragraph);
        return rep.name;
      });
    });
};


const migracodeRepos = getRepos('migracode-barcelona');
console.log("Loading...");



//Task1. Fix the code
//Task2. Create a <p> for each repository
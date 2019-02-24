var request = new XMLHttpRequest()
var url = 'https://api.github.com/users/frekyll/repos?sort=updated'
var projects = document.getElementById('projects')

request.open('GET', url, true)

request.onload = function () {
  var repos = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    for (var i = 0; i < repos.length; i++) {
      if (i === 4) break
      var repo = repos[i]

      var project = document.createElement('div')
      project.setAttribute('class', 'mb3')

      var name = document.createElement('a')
      name.setAttribute('class', 'black db f3-m f4 fw6 mb2')
      name.textContent = repo.name
      name.href = repo.html_url

      var description = document.createElement('p')
      description.textContent = repo.description
      description.setAttribute('class', 'f5 ma0')

      projects.appendChild(project)
      project.appendChild(name)
      project.appendChild(description)
    }
  } else {
    console.log('Error')
  }
}

request.send()

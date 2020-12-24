/* eslint-env browser */

const request = new XMLHttpRequest()
const url = 'https://api.github.com/users/frekyll/repos?sort=updated'
const projects = document.getElementById('projects')

request.open('GET', url, true)

request.onload = function () {
  const repos = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    for (let i = 0; i < repos.length; i++) {
      if (i === 6) break

      const repo = repos[i]

      if (repo.fork !== true) {
        const project = document.createElement('div')
        project.setAttribute('class', 'repo-list-project')

        const name = document.createElement('a')
        name.setAttribute('class', 'link link-muted repo-list-name')
        name.textContent = repo.name
        name.href = repo.html_url

        const description = document.createElement('p')
        description.textContent = repo.description
        description.setAttribute('class', 'repo-list-description')

        projects.appendChild(project)
        project.appendChild(name)
        project.appendChild(description)
      }
    }
  } else {
    console.log('Error')
  }
}

request.send()

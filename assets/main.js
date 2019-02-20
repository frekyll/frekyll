var container = document.querySelector('.js-repo')
var request = new XMLHttpRequest()

request.open('GET', 'https://api.github.com/users/frekyll/repos', true)

request.onload = function () {
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(function (repo) {
      var card = document.createElement('div')
      card.setAttribute('class', 'card')

      var name = document.createElement('h3')
      name.textContent = repo.name

      var language = document.createElement('span')
      language.textContent = repo.language

      var description = document.createElement('p')
      description.textContent = repo.description

      container.appendChild(card)
      card.appendChild(name)
      card.appendChild(language)
      card.appendChild(description)
    })
  } else {
    console.log('Error')
  }
}

request.send()

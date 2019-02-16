---
---

var projects = document.querySelectorAll('.js-project')
var tags = document.querySelectorAll('.js-project .tag')
var url = window.location.href

for (var i = 0; i < projects.length; i++) {
  var project = projects[i]
  project.style.display = 'none'
}

for (var i = 0; i < tags.length; i++) {
  var tag = tags[i]
  var project = tag.parentNode.parentNode.parentNode

  if (url.indexOf(tag) > -1) {
    project.style.display = 'block'
  } else if (url.indexOf('?') === -1) {
    project.style.display = 'block'
  }
}

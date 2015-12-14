window.addEventListener('popstate', event => {
  console.log(event)
  route()
})

// Because it blocks all link action, if you got links to external pages, you need to allow them
document.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    event.preventDefault()
    console.log(event)
    window.history.pushState(null, '', event.target.attributes.href.value)
    route()
  }
})

function route () {
  Array.from(document.querySelectorAll('section'))
    .forEach(section =>
    section.style.display = 'none'
)
  switch (window.location.pathname) {
    case '/about':
      document.title = 'About Us'
      document.querySelector('#about')
        .style.display = 'block'
      break
    case '/shop':
      document.title = 'Products'
      document.querySelector('#shop')
        .style.display = 'block'
      break
    case '/':
      document.title = 'Home'
      document.querySelector('#landing')
        .style.display = 'block'
  }
}

route()

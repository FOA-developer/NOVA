const pages = document.querySelectorAll('.pages') ;

const removeClass = () => {
  pages.forEach((page) => {
    page.classList.remove('active');
  })
}


pages.forEach((page) => {
  page.addEventListener( 'click', () => {
    console.log('working')
    page.classList.add('active');
    console.log('working')
    removeClass();
  })
})


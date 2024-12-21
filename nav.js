document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.add('active');
  });
  
  document.querySelector('.close-menu').addEventListener('click', () => {
    document.querySelector('nav').classList.remove('active');
  });
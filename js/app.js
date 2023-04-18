document.addEventListener('DOMContentLoaded', () => {
    buildNav();
  
    window.addEventListener('scroll', () => {
      setActiveSection();
    });
  });
  
  function buildNav() {
    const navList = document.getElementById('navbar__list');
    const sections = document.querySelectorAll('section');
  
    sections.forEach((section) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
  
      link.textContent = section.getAttribute('data-nav');
      link.href = `#${section.id}`;
      link.classList.add('menu__link');
      listItem.appendChild(link);
      navList.appendChild(listItem);
  
      link.addEventListener('click', (event) => {
        event.preventDefault();
        section.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
  
  function setActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu__link');
    const scrollPos = window.pageYOffset;
  
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      if (scrollPos >= (sectionTop - sectionHeight / 2) && scrollPos < (sectionTop + sectionHeight / 2)) {
        section.classList.add('your-active-class');
        navLinks[index].classList.add('menu__link--active');
      } else {
        section.classList.remove('your-active-class');
        navLinks[index].classList.remove('menu__link--active');
      }
    });
  }
  
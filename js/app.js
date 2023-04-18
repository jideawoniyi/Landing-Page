const navbarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const scrollTopBtn = document.querySelector('#scrollToTopButton');

function isInViewport(section) {
  const rect = section.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function buildNavigation() {
  for (let section of sections) {
    const newListItem = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.classList.add('menu__link');
    newLink.setAttribute('href', `#${section.getAttribute('id')}`);
    newLink.innerText = section.dataset.nav;
    newListItem.appendChild(newLink);
    navbarList.appendChild(newListItem);
  }
}

function setActive() {
  for (let section of sections) {
    if (isInViewport(section)) {
      section.classList.add('your-active-class');
      for (let link of navbarList.children) {
        if (link.firstChild.getAttribute('href') === `#${section.getAttribute('id')}`) {
          link.firstChild.classList.add('active-link');
        } else {
          link.firstChild.classList.remove('active-link');
        }
      }
    } else {
      section.classList.remove('your-active-class');
    }
  }
}

function scrollToSection() {
  const links = document.querySelectorAll('.menu__link');
  for (let link of links) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const section = document.querySelector(link.hash);
      section.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

function scrollTopButton() {
    const lastSection = sections[sections.length - 1];
    window.addEventListener('scroll', () => {
      if (isInViewport(lastSection)) {
        scrollTopBtn.classList.add('show-scroll-top');
      } else {
        scrollTopBtn.classList.remove('show-scroll-top');
      }
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  

buildNavigation();
document.addEventListener('scroll', setActive);
scrollToSection();
scrollTopButton();

// Code for navigation and scrolling functionality

// ... Previous code ...

function showScrollTopButton() {
    const scrollTopButton = document.getElementById('scrollToTopButton');
    const lastSection = document.getElementById('section4');
    const lastSectionTop = lastSection.offsetTop;
    const lastSectionBottom = lastSectionTop + lastSection.offsetHeight;
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > lastSectionTop && window.scrollY < lastSectionBottom) {
        scrollTopButton.classList.add('show-scroll-top');
      } else {
        scrollTopButton.classList.remove('show-scroll-top');
      }
    });
  }
  
  showScrollTopButton();
  

  const currentYear = new Date().getFullYear();
  const footerText = document.getElementById('footer-text');
  footerText.textContent = `© Udacity ${currentYear}.`;
  
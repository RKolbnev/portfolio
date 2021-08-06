import data from '../dataBase';

const openProject = (className = 'project') => {
  const parent = document.querySelector('.projects__wrap');
  parent.addEventListener('click', (e) => {
    if (e.target.closest(`.${className}`)) {
      const elem = e.target.closest(`.${className}`);
      const project = data[elem.getAttribute("id")];
      createModal(project);
    }
  })
};


function createModal(project) {
  if (document.querySelector('.modal')) return;
  const modal = document.createElement("div");
  modal.classList.add("modal__bg");
  modal.innerHTML = `
    <div class="modal">
      <div class="slider">
        <button class="arrow prev"></button>
        <ul class="images"></ul>
        <button class="arrow next"></button>
      </div>
      <div class="modal__info">
        <div class="info__used">
          <span>Используемые технологии:</span>
          <span> ${project.details.used_technologies.join(' - ')}</span>
        </div>
        <div class="info__link">
          <a href="${project.github}"><img src="./img/github_logo2.png" alt="github"></a>
          <a href="${project.firebase}"><img src="./img/firebase__logo.png" alt="firebase"></a>
        </div>
      </div>
    </div>
  `;

  const images = project.details.images
  for (let i = 0; i < images.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="./img/${images[i]}.png" alt="Картинка${i+1}">
    `;
    modal.querySelector('.images').append(li);
  }

  document.querySelector('body').append(modal);
  modalHandler(modal);
}

function modalHandler(modal) {
  const next = modal.querySelector('.next');
  const prev = modal.querySelector('.prev');

  modal.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target === modal) modal.remove()
  });

  const images = modal.querySelector('.images');
  const width = +window.getComputedStyle(modal.querySelector("LI")).width.replace('px', '');
  let step = 0;
  let current = 0;
  next.addEventListener('click', () => {
    if (current < images.children.length - 1) {
      step -= width;
      current += 1;
    } else {
      step = 0;
      current = 0;
    }
    images.style.marginLeft = `${step}px`;
  })
  prev.addEventListener('click', () => {
    if (current === 0) {
      current = images.children.length - 1;
      step = -(current * width);
    } else {
      current -= 1;
      step += width;
    }
    images.style.marginLeft = `${step}px`
  })
}

export default openProject;
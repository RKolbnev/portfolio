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

  function createModal(project) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = ``;

  }
};

export default openProject;
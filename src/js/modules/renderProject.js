const renderProject = (data, key) => {

  const project = document.createElement('div');
  project.classList.add('project');
  project.setAttribute('id', key);
  project.innerHTML = `
    <div class="project__img">
      <img src="./img/${data.main_img}.png" alt="${data.title}">
    </div>
    <div class="project__desc">
      ${data.title}
    </div>
    <div class="project__link">
      <a href="${data.github}"><img src="./img/github_logo2.png" alt="github"></a>
      <a href="${data.firebase}"><img src="./img/firebase__logo.png" alt=""></a>
    </div>
  `;
  document.querySelector('.projects__wrap').append(project);

};

export default renderProject;
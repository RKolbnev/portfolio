const renderProject = (data, key) => {

  const wrap = document.querySelector(".projects__wrap");
  const number = wrap.childElementCount >= 10 ? wrap.childElementCount + 1 : `0${wrap.childElementCount + 1}`;

  const project = document.createElement('div');
  project.classList.add('project');
  project.setAttribute('id', key);
  project.innerHTML = `
    <div class="project__img">
      <ul></ul>
    </div>
    <div class="project__info">
      <div class="number">${number}</div>
      <span class="desc">${data.title}</span>
      <div class="project__link">
        <a href="${data.github}">View code</a>
        <a href="${data.firebase}">View project</a>
      </div>
    </div>
  `;

  const imgWrap = project.querySelector('.project__img > UL');

  for (let i of data.details.images) {
    const img = document.createElement('li');
    img.innerHTML = `<img src="./img/${i}.png" alt="Картинка${i + 1}">`;
    imgWrap.append(img);
  }

  wrap.append(project);
  autoslider(imgWrap);
};

export default renderProject;


function autoslider(wrap) {
  setInterval(() => {
    const currentMargin = +wrap.style.marginLeft.replace('px', '');
    const step = +window.getComputedStyle(wrap.children[0]).width.replace('px', '');
    const count = wrap.childElementCount;
    if (Math.abs(currentMargin) < (step * (count - 1))) {
      wrap.style.marginLeft = +wrap.style.marginLeft.replace('px', '') - step + "px";
    } else {
      wrap.style.marginLeft = 0 + "px";
    }
  }, 5000);
}
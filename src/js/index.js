import data from './dataBase';
import renderProject from './modules/renderProject';
import openProject from './modules/openProject';


window.addEventListener("DOMContentLoaded", () => {
  for (let key in data) {
    renderProject(data[key], key);
  }
  openProject();
});
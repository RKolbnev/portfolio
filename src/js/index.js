import data from './dataBase';
import renderProject from './modules/renderProject';

window.addEventListener("DOMContentLoaded", () => {
  for (let key in data) {
    renderProject(data[key], key);
  }
});
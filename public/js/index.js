import { Home, Diary1, Diary2, Diary3, NotFound } from "./components.js";

const $root = document.getElementById("root");
const $navigation = document.getElementById("navigation");

const routes = [
  { path: "/", component: Home },
  { path: "/diary1", component: Diary1 },
  { path: "/diary2", component: Diary2 },
  { path: "/diary3", component: Diary3 },
];

const render = async (path) => {
  const _path = path ?? window.location.pathname; //a가 클릭되면 href가 path로 전달??

  try {
    const component =
      routes.find((route) => route.path === _path)?.component || NotFound;
    console.log(component());
    $root.replaceChildren(await component());
  } catch (err) {
    console.error(err);
  }
};

$navigation.addEventListener("click", (e) => {
  if (!e.target.matches(".nav-link")) return;

  e.preventDefault();

  const path = e.target.getAttribute("href");

  if (window.location.pathname === path) return;

  window.history.pushState({}, "", path);
  render(path);
});

window.addEventListener("popstate", () => {
  render();
});

window.addEventListener("DOMContentLoaded", () => {
  render();
});

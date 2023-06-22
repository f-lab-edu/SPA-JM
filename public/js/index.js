import {
  Home,
  Diary1,
  Diary2,
  Diary3,
  Diary4,
  NotFound,
} from "./components.js";

const $root = document.getElementById("root");

const routes = [
  { path: "/", component: Home },
  { path: "/diary1", component: Diary1 },
  { path: "/diary2", component: Diary2 },
  { path: "/diary3", component: Diary3 },
  { path: "/diary4", component: Diary4 },
];

const render = async (path) => {
  const _path = path ?? window.location.pathname; //a가 클릭되면 href가 path로 전달??

  try {
    const component =
      routes.find((route) => route.path === _path)?.component || NotFound;
    $root.replaceChildren(await component());
  } catch (err) {
    console.error(err);
  }
};

$root.addEventListener("click", (e) => {
  const target = e.target.closest(".nav-link");
  if (!target) return;

  e.preventDefault();

  const path = target.getAttribute("href");

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

/*const home = () => {
  document.getElementById("app").textContent = "Home Page";
};

const diary1 = () => {
  document.getElementById("app").textContent = "Diary 1 Page";
};

const diary2 = () => {
  document.getElementById("app").textContent = "Diary 2 Page";
};

const diary3 = () => {
  document.getElementById("app").textContent = "Diary 3 Page";
};

document.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("a.nav-link")) {
    return;
  }
  event.preventDefault();
  route(event);
});

const routes = {
  "/": home,
  "/diary1": diary1,
  "/diary2": diary2,
  "/diary3": diary3,
};

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  urlLocationHandler();
};

const urlLocationHandler = () => {
  const path = window.location.pathname;

  if (routes.hasOwnProperty(path)) {
    routes[path]();
  } else {
    console.log("wrong path");
  }
};

window.addEventListener("popstate", urlLocationHandler);
window.addEventListener("load", urlLocationHandler); */

import { Diary1, Diary2, Diary3, NotFound } from "./components.js";

const $root = document.getElementById("root");
const $navigation = document.getElementById("navigation");

const routes = [
  { path: "/diary1", component: Diary1 },
  { path: "/diary2", component: Diary2 },
  { path: "/diary3", component: Diary3 },
];

const render = async (path) => {
  const _path = path ?? window.location.pathname;

  try {
    const component =
      routes.find((route) => route.path === _path)?.component || NotFound;
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

  window.history.pushState(null, null, path);
  render(path);
});

window.addEventListener("popstate", () => {
  render();
});

window.addEventListener("DOMContentLoaded", () => {
  render();
});

const createElement = (domString) => {
  const $temp = document.createElement("template");
  $temp.innerHTML = domString;
  return $temp.content;
};

const fetchData = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export const Home = async () => {
  const { title, content } = await fetchData("/data/Home.json");
  return createElement(`<h1>${title}</h1><p>${content}</p>`);
};

export const Diary1 = async () => {
  const { title, content } = await fetchData("/data/Diary1.json");
  return createElement(`<h1>${title}</h1><p>${content}</p>`);
};

export const Diary2 = async () => {
  const { title, content } = await fetchData("/data/Diary2.json");
  return createElement(`<h1>${title}</h1><p>${content}</p>`);
};

export const Diary3 = async () => {
  const { title, content } = await fetchData("/data/Diary3.json");
  return createElement(`<h1>${title}</h1><p>${content}</p>`);
};

export const NotFound = () => createElement("<h1>404 NotFound</h1>");

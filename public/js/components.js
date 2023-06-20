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
  const { title, diaryList } = await fetchData("/data/Home.json");

  const $diary = createElement(`
    <div class="diary">
      <header>${title}</header>
      ${diaryList
        .map(
          (diary) => `
        <div class="diary-item">
          <img src="img/2.jpg" alt="${title}" />
          <h1>${diary.content}</h1>
          <p>${diary.detail}</p>
        </div>
      `
        )
        .join("")}
    </div>

  `);
  $diary.addEventListener("click", () => {
    window.location.href = "/";
  });

  return $diary;
};

export const Diary1 = async () => {
  const { title, content, detail } = await fetchData("/data/Diary1.json");

  const $diary = createElement(`
    <div class="diary">
      <header>${title}</header>
      <img src="img/2.jpg" alt="${title}" />
      <h1>${content}</h1>
      <p>${detail}</p>
    </div>
  `);

  $diary.addEventListener("click", () => {
    window.location.href = "/diary1";
  });

  return $diary;
};

export const Diary2 = async () => {
  const { title, content } = await fetchData("/data/Diary2.json");
  return createElement(`<h1>${title}</h1>`);
};

export const Diary3 = async () => {
  const { title, content } = await fetchData("/data/Diary3.json");
  return createElement(`<h1>${title}</h1><p>${content}</p>`);
};

export const NotFound = () => createElement("<h1>404 NotFound</h1>");

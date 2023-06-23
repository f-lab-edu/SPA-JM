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
          <nav id="navigation">
            <a href="${diary.path}" class="nav-link">
              <img class="diary-left" src="img/${diary.id}.jpg" alt="${diary.title}" />
              <div class="diary-right">
                <h1>${diary.title}</h1>
                <p>${diary.content}</p>
              </div>
            </a>
          </nav>
        `
        )
        .join("")}
    </div>
  `);

  return $diary;
};

export const Diary1 = async () => {
  const { title, content, detail } = await fetchData("/data/Diary1.json");

  const $diary = createElement(`
    <div class="diary">
      <header>${title}</header>
      <img src="img/1.jpg" alt="${title}" />
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
  const { title, content, detail } = await fetchData("/data/Diary2.json");

  const $diary = createElement(`
    <div class="diary">
      <header>${title}</header>
      <img src="img/2.jpg" alt="${title}" />
      <h1>${content}</h1>
      <p>${detail}</p>
    </div>
  `);

  $diary.addEventListener("click", () => {
    window.location.href = "/diary2";
  });

  return $diary;
};

export const Diary3 = async () => {
  const { title, content, detail } = await fetchData("/data/Diary1.json");

  const $diary = createElement(`
    <div class="diary">
      <header>${title}</header>
      <img src="img/3.jpg" alt="${title}" />
      <h1>${content}</h1>
      <p>${detail}</p>
    </div>
  `);

  $diary.addEventListener("click", () => {
    window.location.href = "/diary3";
  });

  return $diary;
};

export const Diary4 = async () => {
  const { title, content, detail } = await fetchData("/data/Diary4.json");

  const $diary = createElement(`
    <div class="diary">
      <header>${title}</header>
      <img src="img/4.jpg" alt="${title}" />
      <h1>${content}</h1>
      <p>${detail}</p>
    </div>
  `);

  $diary.addEventListener("click", () => {
    window.location.href = "/diary4";
  });

  return $diary;
};

export const NotFound = () => createElement("<h1>404 NotFound</h1>");

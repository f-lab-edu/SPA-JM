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

export const Diary1 = async () => {
  const { title, content, imageUrl } = await fetchData("/data/Diary1.json");
  const $diary = createElement(`
    <div class="diary">
      <img src="img/2.jpg" alt="${title}" />
      <h1>${title}</h1>
      <p>${content}</p>
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

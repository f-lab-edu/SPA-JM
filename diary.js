document.addEventListener("click", (event) => {
    const { target } = event;
    if (!target.matches("nav a")) {
      return;
    }
    event.preventDefault();
    route(event);
  });
  
  const routes = {
    '/': home,
    '/diary1': diary1,
    '/diary2': diary2,
    '/diary3': diary3
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
      console.log('wrong path');
    }
  };
  
  const home = () => {
    document.getElementById('app').textContent = 'Home Page';
  };
  
  const diary1 = () => {
    document.getElementById('app').textContent = 'Diary 1 Page';
  };
  
  const diary2 = () => {
    document.getElementById('app').textContent = 'Diary 2 Page';
  };
  
  const diary3 = () => {
    document.getElementById('app').textContent = 'Diary 3 Page';
  };
  
  window.addEventListener('popstate', urlLocationHandler);
  window.addEventListener('load', urlLocationHandler);

let currentPage = 'boot';
let menuIndex = 0;
const menuItems = ['about', 'projects', 'resume', 'contact'];

// NAVIGATION
function showPage(page) {
  // Flash effect
  const flash = document.getElementById('screenFlash');
  flash.classList.add('flash');
  setTimeout(() => flash.classList.remove('flash'), 100);

  document.querySelectorAll('.screen-page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    currentPage = page;
  }
}

function pressStart() {
  animateButton('ss-btn', 0);
  if (currentPage === 'boot') {
    showPage('menu');
  } else if (currentPage === 'menu') {
    goToSelected();
  }
}

function pressA() {
  animateButton('btn-a');
  if (currentPage === 'boot') { showPage('menu'); return; }
  if (currentPage === 'menu') { goToSelected(); return; }
}

function pressB() {
  animateButton('btn-b');
  if (currentPage !== 'boot' && currentPage !== 'menu') {
    showPage('menu');
  } else if (currentPage === 'menu') {
    showPage('boot');
  }
}

function pressSelect() {
  animateButton('ss-btn', 1);
  showToast('SELECT');
}

function goToSelected() {
  if (menuItems[menuIndex] === 'resume') {
    window.open('brianseo_resume.pdf', '_blank');
    showToast('OPENING RESUME...');
    return;
  }
  showPage(menuItems[menuIndex]);
}

function dpadAction(dir) {
  animateDpad(dir);
  if (currentPage === 'menu') {
    if (dir === 'up') {
      menuIndex = (menuIndex - 1 + menuItems.length) % menuItems.length;
    } else if (dir === 'down') {
      menuIndex = (menuIndex + 1) % menuItems.length;
    } else if (dir === 'right') {
      goToSelected();
    }
    updateMenuSelection();
  }
}

function selectMenu(index) {
  menuIndex = index;
  updateMenuSelection();
}

function updateMenuSelection() {
  document.querySelectorAll('.menu-item').forEach((item, i) => {
    item.classList.toggle('selected', i === menuIndex);
  });
}

// BUTTON ANIMATIONS
function animateDpad(dir) {
  const map = { up: 'dpad-up', down: 'dpad-down', left: 'dpad-left', right: 'dpad-right' };
  const btn = document.getElementById(map[dir]);
  if (btn) {
    btn.classList.add('pressed');
    setTimeout(() => btn.classList.remove('pressed'), 150);
  }
}

function animateButton(cls, index) {
  const btns = document.querySelectorAll('.' + cls);
  const btn = index !== undefined ? btns[index] : btns[0];
  if (btn) {
    btn.classList.add('pressed');
    setTimeout(() => btn.classList.remove('pressed'), 150);
  }
}

// KEYBOARD SUPPORT
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':    e.preventDefault(); dpadAction('up');    break;
    case 'ArrowDown':  e.preventDefault(); dpadAction('down');  break;
    case 'ArrowLeft':  e.preventDefault(); dpadAction('left');  break;
    case 'ArrowRight': e.preventDefault(); dpadAction('right'); break;
    case 'Enter': case 'z': case 'Z': pressA(); break;
    case 'x': case 'X': pressB(); break;
    case ' ': e.preventDefault(); pressStart(); break;
  }
});

// TOAST
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2000);
}

// CONTACT UTILS
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => showToast('COPIED!'));
}

function openLink(url) {
  window.open(url, '_blank');
  showToast('OPENING...');
}

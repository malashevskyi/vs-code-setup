function copyToClipboard(text) {
  const dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}

window.addEventListener('DOMContentLoaded', (e) => {
  const items = document.querySelectorAll('.shortcuts--item');
  const success = document.querySelector('.success');
  let timeout;

  items.forEach((item) => {
    const attrId = item.getAttribute('data-id');
    if (!attrId) {
      success.innerHTML = `<span>To use this command <br> install vim extension</span>`;

      item.addEventListener('click', () => {
        setTimeout(() => {
          success.classList.add('is-active');
        });
        timeout = setTimeout(() => {
          success.classList.remove('is-active');
        }, 5000);
      });
      return;
    }

    item.addEventListener('click', () => {
      copyToClipboard(attrId);
      success.innerHTML = `<span>Copied!</span> ${attrId}`;

      setTimeout(() => {
        success.classList.add('is-active');
      });

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        success.classList.remove('is-active');
      }, 5000);
    });
  });

  // tabs
  const tabNavLinks = document.querySelectorAll('.button-tab');
  const tabCont = document.querySelectorAll('.tab');
  const tabLength = tabNavLinks.length;
  let activeIdx = 0;

  for (let i = 0; i < tabLength; i++) {
    let link = tabNavLinks[i];
    handleClick(link, i);
  }

  function handleClick(link, index) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      goToTab(index);
    });
  }

  function goToTab(index) {
    if (index !== activeIdx && index >= 0 && index <= tabNavLinks.length) {
      tabNavLinks[activeIdx].classList.remove('is-active');
      tabNavLinks[index].classList.add('is-active');
      tabCont[activeIdx].classList.remove('is-active');
      tabCont[index].classList.add('is-active');
      activeIdx = index;
    }
  }
});

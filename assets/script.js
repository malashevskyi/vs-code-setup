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
});

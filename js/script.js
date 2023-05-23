const folders = document.querySelectorAll('.folder');

folders.forEach(folder => {
  const folderContent = folder.nextElementSibling;
  const folderName = folder.textContent.trim();
  
  const isOpen = localStorage.getItem(folderName) === 'true';
  
  if (isOpen) {
    folderContent.classList.add('folder-content-show');
  }
  
  folder.addEventListener('click', () => {
    folderContent.classList.toggle('folder-content-show');

    const isOpen = folderContent.classList.contains('folder-content-show');
    localStorage.setItem(folderName, isOpen ? 'true' : 'false');
  });
});





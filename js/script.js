const folders = document.querySelectorAll('.folder');

folders.forEach(folder => {
    folder.addEventListener('click', () => {
        const folderContent = folder.nextElementSibling;
        folderContent.classList.toggle('folder-content-show');
    });
});

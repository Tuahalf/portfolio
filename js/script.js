document.getElementById('toggleProject').addEventListener('click', function() {
  var projectList = document.getElementById('projectList');
  if (projectList.style.display === 'none') {
      projectList.style.display = 'block';
  } else {
      projectList.style.display = 'none';
  }
});





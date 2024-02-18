console.log('Hello, World!');

document.querySelectorAll('.link').forEach((link) => {
  link.addEventListener('mouseover', function () {
    var colorName = this.textContent.replace('Test ', '').toLowerCase();
    document.body.className = colorName + '-theme-in';
  });

  link.addEventListener('mouseout', function () {
    var colorName = this.textContent.replace('Test ', '').toLowerCase();
    document.body.className = colorName + '-theme-out';
  });
});

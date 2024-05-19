$(document).ready(function(){

  $(".twitter-share-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));
    var text = encodeURIComponent(self.data("text"));

    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank").focus();
  });

  $(".linkedin-share-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));
    // var text = encodeURIComponent(self.data("text"));

    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank").focus();
  });

  $(".facebook-share-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));
    // var text = encodeURIComponent(self.data("text"));

    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank").focus();
  });

  $(".telegram-share-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));
    var text = encodeURIComponent(self.data("text"));

    window.open(`https://t.me/share/url?url=${url}&text=${text}`, "_blank").focus();
  });

  $(".pinterest-share-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));
    var text = encodeURIComponent(self.data("text"));

    window.open(`https://pinterest.com/pin/create/button/?url=${url}&media=&description=${text}`, "_blank").focus();
  });

  $("#sidebar-wrap-toggle").click(function(e) {
    e.preventDefault();
    const containerStyle = document.querySelector('#sidebar-container').style;
    const children = document.querySelectorAll('#sidebar-container div');
    const toggle = document.querySelector('.sidebar-wrap-toggle-icon').style;
    var totalHeight = 0;
    children.forEach(child => {
      totalHeight += parseInt(child.offsetHeight) + 20; // 20 is the margin-bottom
    });
    if (containerStyle.height === '0px' || containerStyle.height === '') {
        containerStyle.height = `${totalHeight}px`;
        toggle.transform = 'rotate(180deg)';
    } else {
      containerStyle.height = '0px';
      toggle.transform = 'rotate(0deg)';
    }
  });

});

window.addEventListener('resize', function() {
  if (this.document.querySelector('#sidebar-container') === null) return;
  const containerStyle = document.querySelector('#sidebar-container').style;
  const children = document.querySelectorAll('#sidebar-container div');
  var totalHeight = 0;
  children.forEach(child => {
    totalHeight += parseInt(child.offsetHeight) + 20; // 20 is the margin-bottom
  });
  if (containerStyle.height !== '0px' && containerStyle.height !== '') {
    containerStyle.height = `${totalHeight}px`;
  }
});

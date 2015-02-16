$(document).ready(function(){
  $('li').each(function() {
    var li = $(this);
    li.wrapInner("<a href='"+li.text()+"></a>");
  });
});


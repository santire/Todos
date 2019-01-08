var saved = localStorage.getItem('todoItems');
var ul = document.querySelector("ul");

if (saved) {
	ul.innerHTML = saved;
}

$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
  save();
});

$("ul").on("click", ".delete", function(event) {
  $(this).parent().fadeOut("fast", () => {
    $(this).remove();
    save();
  });
  event.stopPropagation();
  
});
$("input[type='text']").on("keypress",function(event) {
  if(event.which === 13){
    $("ul").append("<li><span class='delete'><i class='fa fa-trash' aria-hidden='true'></i> </span>"+$(this).val()+"</li>");
    $(this).val("");
    save();
  }
});
$("#toggle-form").on("click", () => {
  $("input[type='text']").fadeToggle();
})

function save() {
  localStorage.setItem('todoItems', ul.innerHTML);
}
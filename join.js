document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('joinForm');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      alert('申請已提交\n\n感謝你加入熱音俱樂部，我們會盡快與你聯絡！');

      form.reset();
    });
  }
});
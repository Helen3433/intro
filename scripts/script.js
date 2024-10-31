document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表单刷新页面
    alert('感谢您的留言，我们会尽快与您联系！');
});

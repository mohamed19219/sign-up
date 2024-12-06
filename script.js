// إضافة أحداث التفاعل مع الحقول
document.getElementById('username').addEventListener('input', checkProgress);
document.getElementById('password').addEventListener('input', checkProgress);

function checkProgress() {
    let progressBar = document.getElementById('progress');
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let progress = 0;
    if (username.length > 0) progress += 40;
    if (password.length > 0) progress += 60;

    document.querySelector('.progress-bar').style.display = 'block';
    progressBar.style.width = progress + '%';
}

// التحقق من المدخلات عند إرسال النموذج
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if (username !== "correctUsername" || password !== "correctPassword") {
        document.getElementById('error-message').classList.add('show');
        document.getElementById('welcome-message').classList.remove('show');
    } else {
        document.getElementById('welcome-message').classList.add('show');
        document.getElementById('error-message').classList.remove('show');
        document.querySelector('.login-container').style.display = 'none'; // إخفاء النموذج بعد الدخول بنجاح
    }
});

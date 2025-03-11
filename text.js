document.getElementById("emailForm").addEventListener("submit", function(e) {
e.preventDefault(); 

const from = document.getElementById("from").value.trim();
const title = document.getElementById("title").value.trim();
const content = document.getElementById("content").value.trim();
const result = document.getElementById("result");

if (from === "" || title === "" || content === "") {
    result.style.color = "red";
    result.textContent = "Vui lòng nhập đầy đủ thông tin.";
    return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(from)) {
    result.style.color = "red";
    result.textContent = "Vui lòng nhập địa chỉ email hợp lệ";
    return;
}

result.style.color = "green";
result.textContent = "Đã gửi mail thành công!";

document.getElementById("emailForm").reset();
});

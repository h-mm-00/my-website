document.addEventListener("DOMContentLoaded", function () {
    fetch("contents.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("content-container");

            data.forEach(item => {
                const post = document.createElement("div");
                post.classList.add("content"); // CSS 애니메이션 효과 적용
                post.innerHTML = `<p>${item.text.replace(/\n/g, "<br>")}</p>`;
                container.appendChild(post);

                // 애니메이션 효과를 주기 위해 약간의 딜레이 후 클래스 추가
                setTimeout(() => {
                    post.classList.add("show");
                }, 100);
            });
        })
        .catch(error => console.error("데이터 로드 실패:", error));
});

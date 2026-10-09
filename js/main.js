// スマホ用メニューの開閉
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

function setMenu(open) {
  toggle.classList.toggle("is-open", open);
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
}

toggle.addEventListener("click", () => {
  setMenu(!nav.classList.contains("is-open"));
});

// メニュー内のリンクを押したら閉じる
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// フッターの年を自動更新
document.getElementById("year").textContent = new Date().getFullYear();

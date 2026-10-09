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

// メールアドレスの表示（迷惑メール対策）
// HTMLにはアドレスを逆順に分けて持たせ、表示時に組み立てる
const reverse = (str) => str.split("").reverse().join("");
document.querySelectorAll("[data-mail-u]").forEach((el) => {
  const address = `${reverse(el.dataset.mailU)}@${reverse(el.dataset.mailD)}`;
  if (el.tagName === "A") el.href = `mailto:${address}`;
  if (el.hasAttribute("data-mail-text")) el.textContent = address;
});

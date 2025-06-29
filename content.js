window.addEventListener('load', () => {
  const loginButton = document.getElementById('loginbtn');
  const form = document.querySelector('form');

  if (!loginButton || !form) {
    console.warn("loginbtnまたはformが見つかりません");
    return;
  }

  loginButton.addEventListener('click', async (e) => {
    e.preventDefault();
    loginButton.disabled = true;

    try {
      console.log("最新のトークンを取得しています...");
      const response = await fetch(window.location.href, {
        credentials: "include"
      });
      const html = await response.text();
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      const newToken = tempDiv.querySelector("input[name=logintoken]")?.value;

      if (newToken) {
        const realTokenInput = document.querySelector("input[name=logintoken]");
        if (realTokenInput) {
          realTokenInput.value = newToken;
          console.log("トークンが更新されました");
        }
      }
    } catch (err) {
      console.error("トークン更新に失敗:", err);
    } finally {
      console.log("ログインします...");
      form.submit();
      loginButton.disabled = false;
    }
  });
});

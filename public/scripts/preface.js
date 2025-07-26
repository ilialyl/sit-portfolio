export function toggleLanguage(buttonId, jpId, enId) {
  const button = document.getElementById(buttonId);
  const japanese = document.getElementById(jpId);
  const english = document.getElementById(enId);
  const Language = {
    EN: 0,
    JP: 1,
  };

  let currentLang = Language.EN;

  if (
    button instanceof HTMLElement &&
    japanese instanceof HTMLElement &&
    english instanceof HTMLElement
  )
    button.addEventListener("click", () => {
      if (currentLang == Language.EN) {
        english.classList.add("hidden");
        japanese.classList.remove("hidden");
        currentLang = Language.JP;
      } else {
        japanese.classList.add("hidden");
        english.classList.remove("hidden");
        currentLang = Language.EN;
      }
    });
}

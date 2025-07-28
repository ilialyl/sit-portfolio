export function toggleLanguage(buttonId, jpClass, enClass) {
  const button = document.getElementById(buttonId);
  const japanese = document.getElementsByClassName(jpClass);
  const english = document.getElementsByClassName(enClass);
  const Language = {
    EN: 0,
    JP: 1,
  };

  let currentLang = Language.EN;

  if (button instanceof HTMLElement)
    button.addEventListener("click", () => {
      if (currentLang == Language.EN) {
        for (const element of english) {
          element.classList.add("hidden");
        }
        for (const element of japanese) {
          element.classList.remove("hidden");
        }
        button.textContent = "English";
        currentLang = Language.JP;
      } else {
        for (const element of english) {
          element.classList.remove("hidden");
        }
        for (const element of japanese) {
          element.classList.add("hidden");
        }
        button.textContent = "日本語";
        currentLang = Language.EN;
      }
    });
}

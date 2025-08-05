export function toggleLanguage(buttonClass, jpClass, enClass) {
  const button = document.getElementsByClassName(buttonClass);
  const japanese = document.getElementsByClassName(jpClass);
  const english = document.getElementsByClassName(enClass);
  const Language = {
    EN: 0,
    JP: 1,
  };

  let currentLang = Language.EN;

  for (const instance of button) {
    instance.addEventListener("click", () => {
      if (currentLang == Language.EN) {
        for (const element of english) {
          element.classList.add("hidden");
        }
        for (const element of japanese) {
          element.classList.remove("hidden");
        }
        for (const element of button) {
          element.textContent = "EN";
        }
        currentLang = Language.JP;
      } else {
        for (const element of english) {
          element.classList.remove("hidden");
        }
        for (const element of japanese) {
          element.classList.add("hidden");
        }
        for (const element of button) {
          element.textContent = "JP";
        }
        currentLang = Language.EN;
      }
    });
  }
}

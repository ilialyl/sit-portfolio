export function swiper(container, next, prev, card_id) {
  if (
    container instanceof HTMLElement &&
    next instanceof HTMLElement &&
    prev instanceof HTMLElement
  ) {
    // Get a sample of project card
    const card = container.querySelector(card_id);
    // If project card exists and is an HTML element
    if (card instanceof HTMLElement) {
      // Get CSS styles applied to project card
      const cardStyle = getComputedStyle(card);
      // Get card width
      let cardWidth = card.offsetWidth + parseInt(cardStyle.marginRight || "0");

      function updateButtons() {
        if (container.scrollLeft <= 30 + cardWidth) {
          prev.classList.remove("!opacity-100");
          prev.classList.add("!opacity-0");
        } else {
          prev.classList.remove("!opacity-0");
          prev.classList.add("!opacity-100");
        }
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - (100 + cardWidth)
        ) {
          next.classList.remove("!opacity-100");
          next.classList.add("!opacity-0");
        } else {
          next.classList.remove("!opacity-0");
          next.classList.add("!opacity-100");
        }
      }

      function scrollNext() {
        container?.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }

      function scrollPrev() {
        container?.scrollBy({
          left: -cardWidth,
          behavior: "smooth",
        });
      }

      next.addEventListener("click", scrollNext);
      prev.addEventListener("click", scrollPrev);
      updateButtons();
      container.addEventListener("scroll", updateButtons);

      window.addEventListener("resize", () => {
        cardWidth = card.offsetWidth + parseInt(cardStyle.marginRight || "0");
      });
    }
  }
}

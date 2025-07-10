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
      const cardWidth =
        card.offsetWidth + parseInt(cardStyle.marginRight || "0");

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
    }
  }
}

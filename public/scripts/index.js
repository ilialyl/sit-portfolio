export function toggleSnap(buttonId, containerId) {
  const button = document.getElementById(buttonId);
  const container = document.getElementById(containerId);
  let snapEnabled = true;

  if (button instanceof HTMLElement && container instanceof HTMLElement)
    button.addEventListener("click", () => {
      if (snapEnabled) {
        container.classList.remove("snap-y", "snap-mandatory");
        button.textContent = "Snap Disabled";
      } else {
        container.classList.add("snap-y", "snap-mandatory");
        button.textContent = "Snap Enabled";
      }
      snapEnabled = !snapEnabled;
    });
}

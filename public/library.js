let libraryType = "all";
const librarySearch = document.querySelector("#library-search");
const libraryLevel = document.querySelector("#library-level");
const librarySubject = document.querySelector("#library-subject");

function filterLibrary() {
  const terms = librarySearch.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  let visible = 0;
  document.querySelectorAll("[data-resource]").forEach((card) => {
    const matches =
      libraryLevel.value !== "al" &&
      ["all", "mathematics"].includes(librarySubject.value) &&
      (libraryType === "all" || libraryType === card.dataset.resource) &&
      terms.every((term) => card.dataset.keywords.includes(term));
    card.hidden = !matches;
    if (matches) visible++;
  });
  document.querySelector("#library-empty").hidden = visible !== 0;
  document.querySelector("#library-count").textContent =
    visible + (visible === 1 ? " placeholder resource" : " placeholder resources");
  document.querySelectorAll("[data-resource-type]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.resourceType === libraryType));
  });
}

document.querySelectorAll("[data-resource-type]").forEach((button) => {
  button.addEventListener("click", () => {
    libraryType = button.dataset.resourceType;
    filterLibrary();
  });
});
librarySearch.addEventListener("input", filterLibrary);
libraryLevel.addEventListener("change", filterLibrary);
librarySubject.addEventListener("change", filterLibrary);
document.querySelector("#library-reset").addEventListener("click", () => {
  libraryType = "all";
  librarySearch.value = "";
  libraryLevel.value = "all";
  librarySubject.value = "all";
  filterLibrary();
});

const paperDialog = document.querySelector("#paper-dialog");
document.querySelector("#paper-access").addEventListener("click", () => paperDialog.showModal());
["close-paper", "dismiss-paper", "dialog-free-note"].forEach((id) => {
  document.getElementById(id).addEventListener("click", () => paperDialog.close());
});
window.addEventListener("hashchange", () => {
  if (paperDialog.open) paperDialog.close();
});

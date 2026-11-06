console.log("[AKH] content script loaded");

document.addEventListener(
  "keydown",
  (event) => {
    console.log(
      "[AKH] key:", event.key,
      "| ctrl:", event.ctrlKey,
      "| shift:", event.shiftKey,
      "| alt:", event.altKey,
      "| trusted:", event.isTrusted
    );
  },
  true
);
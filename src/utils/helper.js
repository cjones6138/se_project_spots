export function setButtonText(
  btn,
  isLoading,
  defaultText = "Save",
  loadingText = "Saving..."
) {
  if (isLoading) {
    console.log(loadingText);
    btn.textContent = loadingText;
  } else {
    console.log(defaultText);
    btn.textContent = defaultText;
  }
}

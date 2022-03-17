export const error = () => {
  const container = document.querySelector(".container")

  container.innerHTML = ""
  container.insertAdjacentHTML(
    "afterbegin",
    `<h4>Er is een fout opgetreden, probeer het later opnieuw.</h4>`
  )
}

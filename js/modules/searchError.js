export const searchError = (data) => {
  const input = document.querySelector("input[type='text']")
  const container = document.querySelector(".container")

  let inputValue = input.value

  if (data.results.length === 0) {
    container.innerHTML = ""
    container.insertAdjacentHTML(
      "afterbegin",
      `<h4>Er zijn geen resultaten gevonden met <i><u>${inputValue}</u></i>, probeer een andere zoekopdracht!</h4>`
    )
  }
}

import { getData } from "./getData.js"
const input = document.querySelector("input")
const h3 = document.querySelector("h3")
const button = document.querySelector("#search")

export const search = () => {
  h3.innerHTML = input.value ? "Resultaten voor: " + input.value : "Suggesties"

  getData()
}

button.addEventListener("click", () => search())

input.addEventListener("keydown", (e) => {
  // ONLY SEARCHING IF ENTER IS PRESSED
  if (e.code === "Enter") {
    search()
  }
})

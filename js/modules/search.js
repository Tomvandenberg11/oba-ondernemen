import { getData } from "./getData.js"
const input = document.querySelector("input")

export const search = () => {
  let searchTerm = input.value ? input.value + " cursus" : "ondernemen"

  const cors = "https://cors-anywhere.herokuapp.com/"
  const endpoint = "https://zoeken.oba.nl/api/v1/search/?q="
  const key = "8854ebaac6d5b76ab5a25a372d249680"
  const detail = "Default"

  let url = `${cors}${endpoint}${searchTerm}&authorization=${key}&detaillevel=${detail}&output=json`
  getData(url)
}

input.addEventListener("keydown", (e) => {
  // ONLY SEARCHING IF ENTER IS PRESSED
  if (e.code === "Enter") {
    search()
  }
})

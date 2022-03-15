import { render } from "./render.js"
import "../modules/search.js"
const input = document.querySelector("input")

export const getData = (id) => {
  let searchTerm = input.value ? input.value : "ondernemen"

  const cors = "https://cors-anywhere.herokuapp.com/"
  const endpoint = "https://zoeken.oba.nl/api/v1/search/?q="
  const key = "8854ebaac6d5b76ab5a25a372d249680"
  const detail = "Default"

  let url = `${cors}${endpoint}${searchTerm}&authorization=${key}&detaillevel=${detail}&output=json`

  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      render(data, id)
    })
    .catch((err) => {
      console.log(err)
    })
}

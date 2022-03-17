import { render } from "./render.js"
import "../modules/search.js"
import { error } from "./error.js"
const input = document.querySelector("input")
const article = document.querySelector("article")

export const getData = (id) => {
  let searchTerm = input.value

  const cors = "https://cors-anywhere.herokuapp.com/"
  const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=ondernemen%20"
  const key = "8854ebaac6d5b76ab5a25a372d249680"
  const detail = "Default"

  // sort ascrending down voor nieuwste boeken

  let url = `${cors}${endpoint}${searchTerm}&authorization=${key}&detaillevel=${detail}&output=json`
  let url2 = `${cors}http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=${searchTerm}+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=a57b7bbd1cde2f6fb7ce5b3f2d1d96e0&output=json`

  fetch(url),
    fetch(url2)
      .then((response) => {
        article.classList.add("loading")
        return response.json()
      })
      .then((data) => {
        article.classList.remove("loading")
        render(data, id)
      })
      .catch((err) => {
        error()
        console.log(err)
      })
      .finally(() => console.log("loaded!"))
}

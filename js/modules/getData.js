import { render } from "./render.js"
import "../modules/search.js"
import { error } from "./error.js"
const input = document.querySelector("input[type='text']")
const article = document.querySelector("article")

export const getData = (id) => {
  let searchTerm = input.value ? input.value : "ondernemen"

  const cors = "https://cors-anywhere.herokuapp.com/"
  const endpoint = "https://zoeken.oba.nl/api/v1/search/?q="
  const key = "8854ebaac6d5b76ab5a25a372d249680"
  const detail = "Default"

  let url = `${cors}${endpoint}${searchTerm}&authorization=${key}&detaillevel=${detail}&output=json`
  // let url2 = `${cors}http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=${searchTerm}+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=${key}&output=json`

  Promise.all([
    fetch(url)
      .then((response) => response.json())
      // fetch(url2)
      //   .then((response) => response.json())
      .then((data) => {
        render(data, id)
      })
      .catch((err) => {
        error()
        console.log(err)
      })
      .finally(() => {
        article.classList.remove("loading")
        console.log("Data is loaded!")
      }),
  ])
}

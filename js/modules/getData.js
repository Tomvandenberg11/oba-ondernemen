import { render } from "./render.js"
import "../modules/search.js"

export const getData = (url) => {
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      render(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

import "../vendor/routie.js"
import { getData } from "./getData.js"

// CHECKING THE HASH
export const handleRoutes = () => {
  routie({
    "": () => {
      getData()
    },
    "boek/:id": (id) => {
      getData(id)
    },
  })
}

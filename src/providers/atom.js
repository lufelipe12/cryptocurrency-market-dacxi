import api from "../services/index.js"

function getCosmos() {
  const cosmos = api
    .get("/coins/cosmos")
    .then((res) => res.data)
    .catch((error) => console.log(error))

  return cosmos
}
export default getCosmos

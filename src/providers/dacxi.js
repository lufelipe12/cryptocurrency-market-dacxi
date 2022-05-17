import api from "../services/index.js"

function getDacxi() {
  const dacxi = api
    .get("/coins/dacxi")
    .then((res) => res.data)
    .catch((error) => console.log(error))

  return dacxi
}
export default getDacxi

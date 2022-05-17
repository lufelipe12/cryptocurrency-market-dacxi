import api from "../services/index.js"

function getBitcoin() {
  const bitcoin = api
    .get("/coins/bitcoin")
    .then((res) => res.data)
    .catch((error) => console.log(error))

  return bitcoin
}
export default getBitcoin

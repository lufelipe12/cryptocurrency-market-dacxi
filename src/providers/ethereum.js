import api from "../services/index.js"

function getEthereum() {
  const ethereum = api
    .get("/coins/ethereum")
    .then((res) => res.data)
    .catch((error) => console.log(error))

  return ethereum
}
export const ethereumInfos = await getEthereum()

const ethereum = {
  name: ethereumInfos.name,
  description: ethereumInfos.description.en,
  price: ethereumInfos.market_data.current_price.usd,
  marketCap: ethereumInfos.market_data.market_cap.usd,
  image: ethereumInfos.image.small,
}
export default ethereum

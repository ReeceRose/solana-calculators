type Props = {
  token: string;
  currency: string;
};

const getCryptoPrice = async ({ token, currency }: Props) => {
  try {
    const result = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=${currency}`,
      { method: 'GET' }
    );
    const res = JSON.parse(await result.text());
    const data = res[Object.keys(res)[0]];
    const price = data[Object.keys(data)[0]];
    return price;
  } catch (_) {
    return -1;
  }
};

export default getCryptoPrice;

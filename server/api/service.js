export default defineEventHandler(async (event) => {
  /*   //handle query params
  const { name } = getQuery(event);

  //handle post data
  const { age } = await readBody(event);
 */
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_62XDXEsip5VeiUuVjYZctJZb5FzIk951fLatqlYL&currencies=EUR%2CUSD%2CCAD"
  );
  return data;
});

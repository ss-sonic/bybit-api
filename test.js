const { RestClient } = require('./index');

const API_KEY = '8NVmPQmi6nPZXu7OEW';
const PRIVATE_KEY = 'YgorfdE2K815HCswTCNpovIFr5E5kzSf4U8C';

const client = new RestClient(API_KEY, PRIVATE_KEY);


// client.getPosition({symbol: 'BTCUSDT'})
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.error(err);
//   });
// client.getActiveOrder({order_id: "26551c8b-939b-49be-9734-d68b5a057d69", symbol: "BTCUSDT"})
// .then(result => {
//   console.log(result.result.data);
// })
// .catch(err => { 
//   console.error(err); 
// });


const func = async () => {
  try {    
    // const temp1 = await client.getPosition({ symbol: 'BTCUSDT' })
    const temp2 = await client.placeActiveOrder(
      {
        side: "Sell",
        symbol: "BTCUSDT",
        order_type: "Limit",
        time_in_force: "FillOrKill",
        price: 12000,
        qty: 2,
        reduce_only: false,
        close_on_trigger: false
      }
    )
    // const temp3 = await client.getActiveOrder({ order_id: "26551c8b-939b-49be-9734-d68b5a057d69", symbol: "BTCUSDT" })
    console.log(temp2);

    
  } catch (error) {
    console.log(error)
  }
}

func()
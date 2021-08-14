
require('dotenv').config();
const EasyPost = require('@easypost/api');
API_KEY="EZTKfe8bcb14604840fb905d7ae52ded029bcEkaXLixcRlOcZSsNAP0Fg";
const api = new EasyPost(API_KEY);

const shipment = new api.Shipment({
  to_address: {
    street1: '345 California St',
    street2: '',
    city: 'San Francisco',
    state: 'CA',
    zip: '94104',
    phone: '+1 415-528-7555'
  },
  from_address: {
    street1: '345 California St',
    street2: '',
    city: 'San Francisco',
    state: 'CA',
    zip: '94104',
    phone: '+1 415-528-7555'
  },
  parcel: {
    length: 8,
    width: 5,
    height: 5,
    weight: 5
  }
});


shipment.save().then(s => s.buy(shipment.lowestRate(['USPS'], ['First'])).then(s => console.log(s.postage_label.label_url)).catch(console.log))
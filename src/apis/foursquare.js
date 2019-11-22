import axios from 'axios';
const CLIENT_ID = 'IBAJGIZV5TF3J5YOWAP1KAGZIVOSY4D12BUAMQZIKYT3SCJQ';
const CLIENT_SECRET = 'ZM0ERPT4VID5V4W30M2MRAZOZ0BR2UGND2VN4UMBJRUU0VAO';

export default axios.create({
	baseURL: 'https://api.foursquare.com/v2/venues/',
	params: {
    client_id: CLIENT_ID,
		client_secret: CLIENT_SECRET,
		v: 20180323,
		limit: 25,
	}
});
import axios from 'axios';
export const config = {
	CLIENT_ID: 'IBAJGIZV5TF3J5YOWAP1KAGZIVOSY4D12BUAMQZIKYT3SCJQ',
	CLIENT_SECRET: 'ZM0ERPT4VID5V4W30M2MRAZOZ0BR2UGND2VN4UMBJRUU0VAO'
}
export default axios.create({
	baseURL: 'https://api.foursquare.com/v2/venues/',
	params: {
    client_id: config.CLIENT_ID,
		client_secret: config.CLIENT_SECRET,
		v: 20180323,	
	}
});
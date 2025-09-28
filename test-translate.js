const axios = require('axios');
const CryptoJS = require('crypto-js');

async function testBaiduTranslate() {
  const appId = "20250924002463041";
  const appKey = "LDJzP0SvkzpH53yaFjgT";
  const text = "Hello World";
  const salt = Date.now().toString();
  const sign = CryptoJS.MD5(`${appId}${text}${salt}${appKey}`).toString();
  
  const params = {
    q: text,
    from: 'en',
    to: 'zh',
    appid: appId,
    salt: salt,
    sign: sign
  };

  try {
    console.log('Testing Baidu Translate API...');
    console.log('Text to translate:', text);
    console.log('Sign:', sign);
    
    const response = await axios.post('https://fanyi-api.baidu.com/api/trans/vip/translate', null, { params });
    
    console.log('Response:', response.data);
    
    if (response.data.error_code) {
      console.error('API Error:', response.data.error_msg);
    } else {
      console.log('Translation result:', response.data.trans_result[0].dst);
    }
  } catch (error) {
    console.error('Request failed:', error.message);
  }
}

testBaiduTranslate();

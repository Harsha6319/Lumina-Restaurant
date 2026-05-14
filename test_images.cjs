const https = require('https');

const urls = [
  'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg',
  'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
  'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
  'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
  'https://images.pexels.com/photos/2373507/pexels-photo-2373507.jpeg',
  'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg',
  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
  'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
  'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg',
  'https://images.pexels.com/photos/1321730/pexels-photo-1321730.jpeg',
  'https://images.pexels.com/photos/613037/pexels-photo-613037.jpeg',
  'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
  'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg',
  'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
  'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${res.statusCode}: ${url}`);
  }).on('error', (e) => {
    console.error(`Error: ${url}`);
  });
});

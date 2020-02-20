const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	    {
        name: 'Refrain',
        artist: 'Anan Ryoko',
        url: 'http://music.163.com/song/media/outer/url?id=22712173.mp3',
        cover: 'http://p1.music.126.net/HpNhvHFZXTLwrVXMT7WP8g==/109951163028848374.jpg',
      },
      {
        name: '镇命歌 -しずめうた-',
        artist: '瀧沢一留',
        url: 'http://music.163.com/song/media/outer/url?id=4956877.mp3',
        cover: 'http://p1.music.126.net/Li-XsFdYi7D00meK_2YCXQ==/5798824325014681.jpg',
      }
    ]
});


//
//
// const ap = new APlayer({
//     container: document.getElementById('player'),
//     mini: false,
//     autoplay: false,
//     theme: '#FADFA3',
//     loop: 'all',
//     order: 'random',
//     preload: 'auto',
//     volume: 0.7,
//     mutex: true,
//     listFolded: false,
//     listMaxHeight: 90,
//     lrcType: 3,
//     audio: [
//         {
//             name: 'name1',
//             artist: 'artist1',
//             url: 'url1.mp3',
//             cover: 'img/love3.jpg',
//             lrc: '',
//             theme: '#ebd0c2'
//         },
//         {
//             name: 'name2',
//             artist: 'artist2',
//             url: 'url2.mp3',
//             cover: 'cover2.jpg',
//             lrc: 'lrc2.lrc',
//             theme: '#46718b'
//         }
//     ]
// });
// ap.on('ended', function () {
//     console.log('player ended');
// });
//
//
// const ap = new APlayer({
//     container: document.getElementById('aplayer'),
//     fixed: true,
//     autoplay: true, //自动播放
//     audio: [
//         {
//             name: "浴室",
//             artist: 'deca joins',
//             url: 'https://m704.music.126.net/20211212133437/6298f876daf4b3a20b984659f71f8968/jdyyaac/000c/560b/5153/7f43625368aa52c4fbb0f968fa2007d2.m4a?authSecret=0000017dad0be60506550aa4681408a0',
//             cover: 'https://p1.music.126.net/byjfkEIOWI_RmxSKEWTPyw==/18910500486297525.jpg?param=200y200',
//         },
//     ]
// });

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: '碧い瞳のエリス',
        artist: '安全地帯',
        url: 'https://doge.ottoli.cn/安全地帯 - 碧い瞳のエリス.mp3',
        cover: 'https://doge.ottoli.cn/aqdd.jpg'
    }]
});
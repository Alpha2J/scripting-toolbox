/**
 * @author: Jeb.Wang
 * @date: 2023/6/3 13:07
 */
const {httpRequest} = require('@hellooo-stack/halo-commons');

async function getMovieDetail(movieId) {
    const headers = {
        'accept': 'application/json, text/plain, */*',
        'sec-fetch-site': 'same-site',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh-Hans;q=0.9',
        'sec-fetch-mode': 'cors',
        'origin': 'https://reading.baicizhan.com',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.37(0x1800252d) NetType/WIFI Language/zh_CN',
        'referer': 'https://reading.baicizhan.com/',
        'sec-fetch-dest': 'empty'
    }

    const url = `https://rdmint.baicizhan.com/weixin/movie_detail?id=${movieId}&wxapp=mint_danni_ear`;
    const response = await httpRequest.getWithHeader(url, headers);
    return response.data;
}

(async () => {
//    http://reading.baicizhan.com/h5/listen-movie.html?id=3320&wxapp=mint_danni_ear#/home
//    https://reading.baicizhan.com/h5/listen-movie.html?id=3168&wxapp=mint_danni_ear#/home
//    http://reading.baicizhan.com/h5/listen-movie.html?id=3317&wxapp=mint_danni_ear#/home
//    https://reading.baicizhan.com/h5/listen-movie.html?id=3323&wxapp=mint_danni_ear#/home
    const detail = await getMovieDetail(3323);
    console.log(detail);
    const detailJSON = JSON.stringify(detail);
    console.log(detailJSON);

    const videoURL = detail.data.video.url;
    const downloadResult = await httpRequest.downloadAndPipeTo(videoURL, 'video4.mp4');
    console.log('download result: ', downloadResult);
})();


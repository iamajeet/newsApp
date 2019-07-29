import { getApiData } from '../helper/axiosHelper';

export function getHeadLinesNews(url) {
    return getApiData(url);
}

export function text_truncate(str, length, ending) {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
};



export function createCarouselData(data) {
    let carouselArray = data;
    let crouselDataArray = [];
    for (var i = 0; i <= carouselArray.length - 1; i++) {
        let data = {};
        if (i === 0) {
            data = {
                article: carouselArray[i],
                active: true
            }
            crouselDataArray.push(data);
        } else {
            data = {
                article: carouselArray[i],
                active: false
            }
            crouselDataArray.push(data);
        }
    }

    return crouselDataArray;
}

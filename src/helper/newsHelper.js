import { getApiData } from '../helper/axiosHelper';

export function getHeadLinesNews(url) {
    return getApiData(url);
}
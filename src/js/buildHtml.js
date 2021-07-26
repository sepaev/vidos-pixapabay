import Notiflix from "notiflix";
import imgGrid from '../templates/imgGrid.hbs';

export const buildHtml = (response, page, target) => {
    const total = response.totalHits
    if (total === 0) {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        writeInnerHTML(target, '');
    } else {
        if (page === 1) Notiflix.Notify.success(`Hooray! We found ${total} images.`);
        if (response.hits.length > 0) {
            writeInnerHTML(target, createTextHTML(response.hits));
        }
    }
    return response;
}

const createTextHTML = (obj) => {
    return obj.map(video => imgGrid({
        pageURL: video.pageURL,
        picture_id: video.picture_id,
        videos: video.videos.large.url,
        likes: video.likes,
        views: video.views,
        comments: video.comments,
        downloads: video.downloads,
    })).join('')
}

export const writeInnerHTML = (obj, html) => {
    if (html) {
        obj.innerHTML += html;
    } else {
        obj.innerHTML = html
    }
}

export const createUrlForRequest = (text) => {
    const textArray = text.trim().split(' ');
    let joinedText = '';

    textArray.map(word => {
        if (word) joinedText += word.toLowerCase() + '+';
    });

    return joinedText.slice(0, -1);
}

        // const a = {"id":33194,
        // "pageURL": "https://pixabay.com/videos/id-33194/",
        // "type": "film",
        // "tags": "sea, iceland, ocean",
        // "duration": 40,
        // "picture_id": "862586427",
        // "videos": {
        // "large": {
        // "url":
        // "https://player.vimeo.com/external/396036988.hd.mp4?s=d409153a1984fc0bd388cdc8d0a3a94eed888de3&profile_id=172",
        // "width": 3840,
        // "height": 2160,
        // "size": 122627669
        // },
        // "medium": {
        // "url":
        // "https://player.vimeo.com/external/396036988.hd.mp4?s=d409153a1984fc0bd388cdc8d0a3a94eed888de3&profile_id=170",
        // "width": 2560,
        // "height": 1440,
        // "size": 66482249
        // },
        // "small": {
        // "url":
        // "https://player.vimeo.com/external/396036988.hd.mp4?s=d409153a1984fc0bd388cdc8d0a3a94eed888de3&profile_id=175",
        // "width": 1920,
        // "height": 1080,
        // "size": 27581075
        // }, "tiny":
        // {
        // "url":
        // "https://player.vimeo.com/external/396036988.hd.mp4?s=d409153a1984fc0bd388cdc8d0a3a94eed888de3&profile_id=174",
        // "width": 1280,
        // "height": 720,
        // "size": 13893333
        // }
        // }, "views": 570117,
        // "downloads": 271376,
        // "likes": 1441,
        // "comments": 749,
        // "user_id": 2122248,
        // "user": "RobertoMyLife",
        // "userImageURL": ""
        // },
import { HOME_PAGE, HTML_FONT_SIZE_IN_PX, GITHUB_FILE_UPLOAD_URL, githubConfig } from './constants';
import Http from './http';
import LocalStorage from './localStorage';

export const canUseDOM = () => typeof window === "object" && typeof window.document === "object";

export const getActivePage = () => canUseDOM() ? LocalStorage.get('activePage') : HOME_PAGE;

export const getPxFromRem = (remUnit = 0) => {
    let pixels;

    if (remUnit)
        pixels = remUnit * HTML_FONT_SIZE_IN_PX;
    else
        pixels = canUseDOM() ? window.innerWidth : 1500;

    return `${pixels}px`;
};

export const uploadImage = (image) => {
    return new Promise((resolve, reject) => {
        try {
            const imageName = image?.filename;

            if (imageName) {
                const url = `${GITHUB_FILE_UPLOAD_URL}/${imageName}.txt`;
                const reader = new FileReader();
                reader.readAsDataURL(image);

                reader.onloadend = () => {
                    const imageBlob = reader.result?.replace('data:', '').replace(/^.+,/, '');
                    const response = Http.post(url, { message: imageName, content: imageBlob }, githubConfig);
                    resolve(response);
                };
                reader.onerror = () => reject('');
            }
        }
        catch (error) {
            console.error('Something went wrong while uploading the image : ', error.message);
        }
    });
};

export const uploadImages = (images) => {
    return new Promise((resolve, reject) => {
        try {
            if(images?.length) {
                const promises = images.map(image => uploadImage(image));
                Promise.allSettled(promises).then(responses => {
                    console.log('uploadImages_response', responses);
                });
            }
        }
        catch (error) {
            console.error('Something went wrong while uploading the images : ', error.message);
        }
    });
};
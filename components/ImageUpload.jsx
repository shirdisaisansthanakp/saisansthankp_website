import { uploadImages } from '../utils';

export default function ImageUpload() {
    const onFileChange = (event) => {
        console.log('_onFileChange', event.target.files) ;
        uploadImages(event.target.files);
    };

    return (
        <input type="file" onChange={onFileChange} multiple />
    )
};
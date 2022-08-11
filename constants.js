export const HTML_FONT_SIZE_IN_PX = 15;

export const GITHUB_FILE_UPLOAD_URL = 'https://api.github.com/repos/shirdisaisansthanakp/saisansthankp_website/contents/public/images/gallery/';

export const githubConfig = {
    headers: {
        Authorization: `Bearer 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`,
        'Content-Type': 'application/json'
    },
};

export const HOME_PAGE = '#home';

export const GALLERY_PAGE = '#gallery';

export const ABOUT_US_PAGE = '#aboutus';

export const CONTACT_US_PAGE = '#contactus';

export const NAV_LINKS = [
    {id: HOME_PAGE, title: 'home'},
    {id: GALLERY_PAGE, title: 'gallery'},
    {id: ABOUT_US_PAGE, title: 'about us'},
    {id: CONTACT_US_PAGE, title: 'contact us'}
];
export default {
    selector: 'textarea#full-featured', // change this value according to your HTML
    language_url: "http://127.0.0.1:8081/langs/zh_CN.js",
    language: "zh_CN",
    directionality: "http://www.baidu.com",
    branding: false,
    contextmenu: "link image imagetools table spellchecker",
    menubar: 'file edit insert view format table tools help',
    height: 600,
    // menu: {
    //     file: {
    //         title: 'File',
    //         items: 'newdocument | preview | print'
    //     },
    //     edit: {
    //         title: 'Edit',
    //         items: 'undo redo | cut copy paste pastetext | selectall | searchreplace'
    //     },
    //     insert: {
    //         title: 'Insert',
    //         items: 'image link media | template hr codesample'
    //     },
    //     view: {
    //         title: 'View',
    //         items: 'visualaid visualblocks visualchars'
    //     },
    //     format: {
    //         title: 'Format',
    //         items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'
    //     },
    //     table: {
    //         title: 'Table',
    //         items: 'inserttable tableprops deletetable | cell row column'
    //     },
    //     tools: {
    //         title: 'Tools',
    //         items: 'spellchecker code'
    //     }
    // },
    plugins: 'print preview save fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help',
    toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat fullscreen',
    image_advtab: true,
    content_css: [
        '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
        '//www.tiny.cloud/css/codepen.min.css'
    ],
    link_list: [{
            title: 'My page 1',
            value: 'http://www.tinymce.com'
        },
        {
            title: 'My page 2',
            value: 'http://www.moxiecode.com'
        }
    ],
    image_list: [{
            title: 'My page 1',
            value: 'http://www.tinymce.com'
        },
        {
            title: 'My page 2',
            value: 'http://www.moxiecode.com'
        }
    ],
    image_class_list: [{
            title: 'None',
            value: ''
        },
        {
            title: 'Some class',
            value: 'class-name'
        }
    ],
    importcss_append: true,
    file_picker_callback: function (callback, value, meta) {
        /* Provide file and text for the link dialog */
        if (meta.filetype === 'file') {
            callback('https://www.google.com/logos/google.jpg', {
                text: 'My text'
            });
        }

        /* Provide image and alt text for the image dialog */
        if (meta.filetype === 'image') {
            callback('https://www.google.com/logos/google.jpg', {
                alt: 'My alt text'
            });
        }

        /* Provide alternative source and posted for the media dialog */
        if (meta.filetype === 'media') {
            callback('movie.mp4', {
                source2: 'alt.ogg',
                poster: 'https://www.google.com/logos/google.jpg'
            });
        }
    },
    templates: [{
            title: 'Some title 1',
            description: 'Some desc 1',
            content: 'My content'
        },
        {
            title: 'Some title 2',
            description: 'Some desc 2',
            content: '<div class="mceTmpl"><span class="cdate">cdate</span><span class="mdate">mdate</span>My content2</div>'
        }
    ],
    template_cdate_format: '[CDATE: %m/%d/%Y : %H:%M:%S]',
    template_mdate_format: '[MDATE: %m/%d/%Y : %H:%M:%S]',
    image_caption: true,

    spellchecker_dialog: true,
    spellchecker_whitelist: ['Ephox', 'Moxiecode']
}
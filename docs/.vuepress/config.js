module.exports = {
    title: '前端开发规范',
    description: 'Just playing around',
    dest: './dist/',
    themeConfig: {
        lastUpdated: '最后更新',
        // nav: [
        //     { text: 'Home', link: '/' },
        //     { text: 'Guide', link: '/guide/' },
        //     { text: 'External', link: 'https://google.com' },
        //     {
        //         text: 'Languages',
        //         items: [
        //             { text: 'Chinese', link: '/language/chinese' },
        //             { text: 'Japanese', link: '/language/japanese' },
        //         ]
        //     },
        // ],
        sidebar: [
            {
                title: 'HTML',
                path: '/html',
            },
            {
                title: 'CSS',
                path: '/css',
            },
            {
                title: 'Javascript',
                path: '/javascript',
            },
            {
                title: 'Typescript',
                path: '/typescript',
            },
            {
                title: 'Vue',
                path: '/vue',
                sidebarDepth: 2,
            },
            {
                title: 'React',
                path: '/react',
            },
            {
                title: 'Git',
                path: '/git',
            },
        ],
        // displayAllHeaders: true,
        // collapsable: true,
        // sidebar: 'auto',
    },
}
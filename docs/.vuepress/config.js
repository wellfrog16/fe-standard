module.exports = {
    title: '前端开发规范',
    description: 'Just playing around',
    dest: './dist/',
    themeConfig: {
        lastUpdated: 'Last Updated',
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
                title: 'CSS',
                path: '/css',
            },
            {
                title: 'Group 2',   // 必要的
                path: '/mine',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                sidebarDepth: 2,    // 可选的, 默认值是 1
            },
        ],
        // displayAllHeaders: true,
        // collapsable: true,
        // sidebar: 'auto',
    },
}
module.exports = {
    title: '夏虫的博客',
    description: '分享技术心得，日常经历与感想',
    base: '/boke-vuepress/',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '夏虫 JavaScript 博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                    { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/bookone',
              collapsable: false, // 不折叠
              children: [
                { title: "测试一", path: "/handbook/bookone" },
              ],
            }
          ]
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    

}
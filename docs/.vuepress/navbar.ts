/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import {defineNavbarConfig} from 'vuepress-theme-plume'

export default defineNavbarConfig([
    {
        text: '首页',
        icon: 'icon-park-outline:guide-board',
        link: '/'
    },
    {
        text: '博客',
        link: '/blog/',
        icon: 'material-symbols:article-outline'
    },
    {
        text: '笔记',
        items: [
            { text: 'ubuntu', link: '/notes/ubuntu/README.md' },
            { text: 'docker', link: '/notes/docker/README.md' },
        ]
    },
])

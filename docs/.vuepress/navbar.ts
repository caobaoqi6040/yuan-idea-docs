/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */
import type {ThemeNavItem} from 'vuepress-theme-plume'
import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar: ThemeNavItem[] = defineNavbarConfig([
    {text: '首页', link: '/'},
    {text: '动态', link: '/blog/'},
    {text: '标签', link: '/blog/tags/'},
    {text: '归档', link: '/blog/archives/'},
    {text: 'notes', link: '/notes/'},
])

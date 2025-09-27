/**
 * @see https://theme-plume.vuejs.press/guide/document/ 查看文档了解配置详情。
 *
 * Notes 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Notes，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Notes，然后在与 Note 相关的 Markdown 文件中，自动生成 permalink。
 *
 * 如果你发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 note 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `note.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineNoteConfig` 是用于定义单个 note 配置的帮助函数
 * - `defineNotesConfig` 是用于定义 notes 集合的帮助函数
 *
 * 通过 `defineNoteConfig` 定义的 note 配置，应该填入 `defineNotesConfig` 的 notes 数组中
 */
import {defineNoteConfig, defineNotesConfig, type ThemeNoteListOptions} from 'vuepress-theme-plume'

const dockerNote = defineNoteConfig({
    dir: 'docker',
    // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
    // 如果 前缀不一致，则无法生成侧边栏。
    // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
    link: '/docker/',
    // 手动配置侧边栏结构
    sidebar: [
        {text: "docker-01", link: "docker-01.md", icon: "ant-design:aliyun-outlined"},
        {text: "docker-02", link: "docker-02.md", icon: "streamline-ultimate-color:wechat-logo"},
    ],
    // 根据文件结构自动生成侧边栏
    // sidebar: 'auto',
})

const javaNote = defineNoteConfig({
    dir: 'java',
    // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
    // 如果 前缀不一致，则无法生成侧边栏。
    // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
    link: '/java/',
    // 手动配置侧边栏结构
    sidebar: [
        {text: "java-01", link: "java-01.md", icon: "ri:bowl-line"},
        {text: "java-02", link: "java-02.md", icon: "ri:brain-line"},
    ],
    // 根据文件结构自动生成侧边栏
    // sidebar: 'auto',
})

/**
 * 导出所有的 note
 * 每一个 note 都应该填入到 `notes.notes` 数组中
 * （DemoNote 为参考示例，如果不需要它，请删除）
 */
export const notes: ThemeNoteListOptions = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [dockerNote, javaNote],
})

import { defineClientConfig } from 'vuepress/client'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'

import Contributors from './theme/components/Contributors.vue'

// import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    app.component('RepoCard', RepoCard)
    app.component('NpmBadge', NpmBadge)
    app.component('NpmBadgeGroup', NpmBadgeGroup)

    // your custom components
    app.component('Contributors', Contributors)
  },
})

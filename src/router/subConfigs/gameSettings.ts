import { RouteRecordRaw } from 'vue-router'

export const gameSettingsRoutes: RouteRecordRaw[] =
    [
        {
            path: '/gameSettings/keyBindSettings',
            component: () => import('../../forms/gameSettings/keyBindSettings.vue')
        },
        {
            path: '/gameSettings/VideoSettings',
            component: () => import('../../forms/gameSettings/VideoSettings.vue')
        }
    ]
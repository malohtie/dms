/**
 * User Router Links
 */
export default [
    {
        path: '/user',
        redirect: '/campaigns',
        component: () => import(/* webpackChunkName: "layout" */"@/layouts/variations/BackendStarter"),
        meta: {
            auth: true,
        },
        children: [
            {
                path: '/campaigns',
                name: 'Campaigns',
                component: () => import(/* webpackChunkName: "campaigns" */"@/views/dms-user/campaign/Campaigns"),
                meta: {
                    title: 'Campaigns'
                }
            }
        ]
    }
]

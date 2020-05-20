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
                component: () => import(/* webpackChunkName: "campaigns" */"@/views/starter/Dashboard"),
                meta: {
                    title: 'Campaigns'
                }
            }
        ]
    }
]

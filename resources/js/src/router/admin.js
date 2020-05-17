/**
 * Admin Router Links
 */
export default [
    {
        path: '/admin',
        redirect: '/admin/dashboard',
        component: () => import(/* webpackChunkName: "layoutBackend" */"@/layouts/variations/BackendStarter"),
        meta: {
            adminOnly: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */"@/views/starter/Dashboard")
            }
        ]
    }
]

/**
 * Admin Router Links
 */
export default [
    {
        path: '/backend',
        redirect: '/backend/dashboard',
        component: () => import("@/layouts/variations/BackendStarter"),
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import("@/views/starter/Dashboard")
            }
        ]
    }
]

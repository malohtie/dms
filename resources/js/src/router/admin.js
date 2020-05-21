/**
 * Admin Router Links
 */
export default [
    {
        path: '/admin',
        redirect: '/admin/dashboard',
        component: () => import(/* webpackChunkName: "Admin" */"@/layouts/variations/Admin"),
        meta: {
            adminOnly: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */"@/views/dms-admin/dashboard/Dashboard"),
                meta: {
                    title: 'Dashboard'
                }
            }
        ]
    }
]

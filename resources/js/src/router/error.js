/**
 * Error Pages
 */
export default [
    {
        path: '',
        component: () => import("@/layouts/variations/Empty"),
        children: [
            {
                path: '/maintenance',
                name: 'Maintenance',
                component: () => import(/* webpackChunkName: "maintenance" */"@/views/dms-errors/Maintenance")
            },
            {
                path: '/400',
                name: '400',
                component: () => import(/* webpackChunkName: "400" */"@/views/dms-errors/400")
            },
            {
                path: '/401',
                name: '401',
                component: () => import(/* webpackChunkName: "401" */"@/views/dms-errors/401")
            },
            {
                path: '/403',
                name: '403',
                component: () => import(/* webpackChunkName: "403" */"@/views/dms-errors/403")
            },
            {
                path: '/404',
                name: '404',
                component: () => import(/* webpackChunkName: "404" */"@/views/dms-errors/404")
            },
        ]
    },
    {
        // Redirect to 404 page, if no match found
        path: '*',
        redirect: '/404'
    }
]

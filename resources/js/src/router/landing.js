/**
 * Landing Router Links
 */
export default [
    {
        path: '/',
        redirect: '/home',
        component: () => import("@/layouts/variations/Empty"),
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import(/* webpackChunkName: "home" */"@/views/dms-landing/Landing"),
                meta: {
                    title: 'Home'
                }
            }
        ]
    }
]

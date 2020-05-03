/**
 * Landing Router Links
 */
export default [
    {
        path: '/',
        redirect: '/landing',
        component: () => import("@/layouts/variations/Simple"),
        children: [
            {
                path: '/landing',
                name: 'Landing',
                component: () => import("@/views/starter/Landing.vue")
            }
        ]
    }
]

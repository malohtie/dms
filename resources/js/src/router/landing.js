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
                component: () => import("@/views/dms-landing/Landing")
            }
        ]
    }
]

/**
 * Auth Router Links
 */
export default [
    {
        path: '',
        component: () => import(/* webpackChunkName: "layoutEmpty" */"@/layouts/variations/Empty"),
        children: [
            {
                path: '/login',
                name: 'Login',
                component: () => import(/* webpackChunkName: "login" */"@/views/dms-auth/Login")
            }
        ]
    }
]

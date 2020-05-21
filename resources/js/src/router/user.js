/**
 * User Router Links
 */
export default [
    {
        path: '/user',
        redirect: '/campaigns',
        component: () => import(/* webpackChunkName: "User" */"@/layouts/variations/User"),
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

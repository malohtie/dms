<template>
    <base-layout :layout-classes="layoutClasses" :menu="menu"></base-layout>
</template>

<script>
    import BaseLayout from '../BaseLayout'
    import menuAdmin from "@/data/menuUser";

    export default {
        name: 'User',
        components: {
            BaseLayout
        },
        data() {
            return {
                // Override and set custom CSS classes to the container of each base layout element
                layoutClasses: {
                    sidebar: '',
                    header: '',
                    footer: ''
                },
                menu: menuAdmin
            }
        },
        created() {
            // Set default elements for this layout
            this.$store.commit('setLayout', {
                header: true,
                sidebar: true,
                footer: true
            })

            // Set various template options
            this.$store.commit('headerStyle', {mode: 'light'})
            this.$store.commit('mainContent', {mode: 'full'})
        }
    }
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
// Main Stylesheet
@import '~@sass/main';

// Bootstrap Vue Stylesheet
@import '~bootstrap-vue/src/index';

// All color themes are included and available by default
// Feel free to comment out any of them if you won't use them in your project
@import '~@sass/dms/themes/amethyst';
@import '~@sass/dms/themes/city';
@import '~@sass/dms/themes/flat';
@import '~@sass/dms/themes/modern';
@import '~@sass/dms/themes/smooth';
</style>

<script>
export default {
  name: 'App'
}
</script>

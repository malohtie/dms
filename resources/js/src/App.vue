<template>
  <router-view></router-view>
</template>

<style lang="scss">
// Main Stylesheet
@import './resources/sass/main';

// Bootstrap Vue Stylesheet
@import '~bootstrap-vue/src/index';

// All color themes are included and available by default
// Feel free to comment out any of them if you won't use them in your project
@import './resources/sass/oneui/themes/amethyst';
@import './resources/sass/oneui/themes/city';
@import './resources/sass/oneui/themes/flat';
@import './resources/sass/oneui/themes/modern';
@import './resources/sass/oneui/themes/smooth';
</style>

<script>
export default {
  name: 'App'
}
</script>

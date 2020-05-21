import Vue from 'vue'

Vue.filter('truncate', function (text, length) {
    if(text && text.length > 0) {
        return text.substring(0, length) + '...'
    }
    return ''
})

Vue.filter('cap', function (text) {
    if(text && text.length > 0) {
        return text.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        }).join(' ');
    }
    return ''
})

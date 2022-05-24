function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

import IndexField from './components/IndexField.vue';
import DetailField from './components/DetailField.vue';
import FormField from './components/FormField.vue';
import LanguageSelector from './components/LanguageSelector.vue';

Nova.booting((Vue) => {

    Nova.inertia('NovaLanguageTool', require('./components/Tool').default);
    
    Vue.component('index-multilingual-nova', require('./components/IndexField').default);
    Vue.component('detail-multilingual-nova', require('./components/DetailField').default);
    Vue.component('form-multilingual-nova', require('./components/FormField').default);

    Vue.component('language-selector', require('./components/LanguageSelector').default);
    
    let lang = getParameterByName('lang');
    if (lang) {
        Nova.request().defaults.headers['lang'] = lang;
    }
})

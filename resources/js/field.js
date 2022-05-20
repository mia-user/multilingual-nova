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
import Tool from './components/Tool.vue';

Nova.booting((Vue) => {
    
    Vue.component('index-multilingual-nova', IndexField);
    Vue.component('detail-multilingual-nova', DetailField);
    Vue.component('form-multilingual-nova', FormField);

    Vue.component('language-selector', LanguageSelector);

    Nova.inertia('NovaLanguageTool', Tool);
    
    let lang = getParameterByName('lang');
    if (lang) {
        Nova.request().defaults.headers['lang'] = lang;
    }
})

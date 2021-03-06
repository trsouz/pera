// Project requirejs configuration file
//
// For more options and documentation visit:
// https://github.com/jrburke/r.js/blob/master/build/example.build.js
var config = {

    // Define where dependencies have been installed to so they can be refered
    // to in define() and require() calls by their package name rather than
    // their overly verbose path
    paths   : {
	    components        : "components",
	    plugins           : "components/plugins",
	    libs              : "components/libs",

	    //maps
	    "common.app"   : "scripts/app",

	    // Libraries
	    lodash          : "components/libs/lodash",
	    select2         : "components/select2/select2_locale_pt-BR",
	    moment          : "components/moment/min/lang/pt-br",
	    //carouFredSel    : "components/carouFredSel-5.6.1/jquery.carouFredSel-5.6.1-packed",
	    "underscore"    : "components/underscore/underscore",
	    "text"          : "components/requirejs-text/text",
	    "backbone"      : "components/backbone/backbone",
	    "backbone.localstorage"  : "components/backbone.localStorage/backbone.localStorage",

	    //angular libs
	    angular                                 : "components/angular/angular.min",
	    "angular.cookies"                       : "components/angular-cookies/angular-cookies",
	    "angular.mocks"                         : "components/angular-mocks/angular-mocks",
	    "angular.resource"                      : "components/angular-resource/angular-resource",
	    "angular.sanitize"                      : "components/angular-sanitize/angular-sanitize",
	    "angular.module.localStorage"           : "components/plugins/angular.module.localStorage",

	    "angular.ui"                            : "components/angular-ui/build/angular-ui",
	    "angular.ui.common"                     : "components/angular-ui/common/module",
	    "angular.ui.directives.animate"         : "components/angular-ui/modules/directives/animate/animate",
	    "angular.ui.directives.calendar"        : "components/angular-ui/modules/directives/calendar/calendar",
	    "angular.ui.directives.codemirror"      : "components/angular-ui/modules/directives/codemirror/codemirror",
	    "angular.ui.directives.currency"        : "components/angular-ui/modules/directives/currency/currency",
	    "angular.ui.directives.date"            : "components/angular-ui/modules/directives/date/date",
	    "angular.ui.directives.event"           : "components/angular-ui/modules/directives/event/event",
	    "angular.ui.directives.if"              : "components/angular-ui/modules/directives/if/if",
	    "angular.ui.directives.jq"              : "components/angular-ui/modules/directives/jq/jq",
	    "angular.ui.directives.keypress"        : "components/angular-ui/modules/directives/keypress/keypress",
	    "angular.ui.directives.map"             : "components/angular-ui/modules/directives/map/map",
	    "angular.ui.directives.mask"            : "components/angular-ui/modules/directives/mask/mask",
	    "angular.ui.directives.reset"           : "components/angular-ui/modules/directives/reset/reset",
	    "angular.ui.directives.route"           : "components/angular-ui/modules/directives/route/route",
	    "angular.ui.directives.scrollfix"       : "components/angular-ui/modules/directives/scrollfix/scrollfix",
	    "angular.ui.directives.select2"         : "components/angular-ui/modules/directives/select2/select2",
	    "angular.ui.directives.showhide"        : "components/angular-ui/modules/directives/showhide/showhide",
	    "angular.ui.directives.sortable"        : "components/angular-ui/modules/directives/sortable/sortable",
	    "angular.ui.directives.tinymce"         : "components/angular-ui/modules/directives/tinymce/tinymce",
	    "angular.ui.directives.validate"        : "components/angular-ui/modules/directives/validate/validate",
	    "angular.ui.filters.format"             : "components/angular-ui/modules/filters/format/format",
	    "angular.ui.filters.highlight"          : "components/angular-ui/modules/filters/highlight/highlight",
	    "angular.ui.filters.inflector"          : "components/angular-ui/modules/filters/inflector/inflector",
	    "angular.ui.filters.unique"             : "components/angular-ui/modules/filters/unique/unique",

	    jquery                          : "components/jquery/jquery",
	    "jquery.maskedinput"            : "components/plugins/jquery.maskedinput",
	    "jquery.fancybox"               : 'components/fancybox/source/jquery.fancybox.pack',
	    "jquery.ui"                     : 'components/jquery-ui/ui/minified/i18n/jquery.ui.datepicker-pt-BR.min',
	    "jquery.ui.accordion"           : 'components/jquery-ui/ui/minified/jquery.ui.accordion.min',
	    "jquery.ui.autocomplete"        : 'components/jquery-ui/ui/minified/jquery.ui.autocomplete.min',
	    "jquery.ui.button"              : 'components/jquery-ui/ui/minified/jquery.ui.button.min',
	    "jquery.ui.core"                : 'components/jquery-ui/ui/minified/jquery.ui.core.min',
	    "jquery.ui.datepicker"          : 'components/jquery-ui/ui/minified/i18n/jquery.ui.datepicker-pt-BR.min',
	    "jquery.ui.dialog"              : 'components/jquery-ui/ui/minified/jquery.ui.dialog.min',
	    "jquery.ui.draggable"           : 'components/jquery-ui/ui/minified/jquery.ui.draggable.min',
	    "jquery.ui.droppable"           : 'components/jquery-ui/ui/minified/jquery.ui.droppable.min',
	    "jquery.ui.effect"              : 'components/jquery-ui/ui/minified/jquery.ui.effect.min',
	    "jquery.ui.effect.blind"        : 'components/jquery-ui/ui/minified/jquery.ui.effect-blind.min',
	    "jquery.ui.effect.bounce"       : 'components/jquery-ui/ui/minified/jquery.ui.effect-bounce.min',
	    "jquery.ui.effect.clip"         : 'components/jquery-ui/ui/minified/jquery.ui.effect-clip.min',
	    "jquery.ui.effect.drop"         : 'components/jquery-ui/ui/minified/jquery.ui.effect-drop.min',
	    "jquery.ui.effect.explode"      : 'components/jquery-ui/ui/minified/jquery.ui.effect-explode.min',
	    "jquery.ui.effect.fade"         : 'components/jquery-ui/ui/minified/jquery.ui.effect-fade.min',
	    "jquery.ui.effect.fold"         : 'components/jquery-ui/ui/minified/jquery.ui.effect-fold.min',
	    "jquery.ui.effect.highlight"    : 'components/jquery-ui/ui/minified/jquery.ui.effect-highlight.min',
	    "jquery.ui.effect.pulsate"      : 'components/jquery-ui/ui/minified/jquery.ui.effect-pulsate.min',
	    "jquery.ui.effect.scale"        : 'components/jquery-ui/ui/minified/jquery.ui.effect-scale.min',
	    "jquery.ui.effect.shake"        : 'components/jquery-ui/ui/minified/jquery.ui.effect-shake.min',
	    "jquery.ui.effect.slide"        : 'components/jquery-ui/ui/minified/jquery.ui.effect-slide.min',
	    "jquery.ui.effect.transfer"     : 'components/jquery-ui/ui/minified/jquery.ui.effect-transfer.min',
	    "jquery.ui.menu"                : 'components/jquery-ui/ui/minified/jquery.ui.menu.min',
	    "jquery.ui.mouse"               : 'components/jquery-ui/ui/minified/jquery.ui.mouse.min',
	    "jquery.ui.position"            : 'components/jquery-ui/ui/minified/jquery.ui.position.min',
	    "jquery.ui.progressbar"         : 'components/jquery-ui/ui/minified/jquery.ui.progressbar.min',
	    "jquery.ui.resizable"           : 'components/jquery-ui/ui/minified/jquery.ui.resizable.min',
	    "jquery.ui.selectable"          : 'components/jquery-ui/ui/minified/jquery.ui.selectable.min',
	    "jquery.ui.slider"              : 'components/jquery-ui/ui/minified/jquery.ui.slider.min',
	    "jquery.ui.sortable"            : 'components/jquery-ui/ui/minified/jquery.ui.sortable.min',
	    "jquery.ui.spinner"             : 'components/jquery-ui/ui/minified/jquery.ui.spinner.min',
	    "jquery.ui.tabs"                : 'components/jquery-ui/ui/minified/jquery.ui.tabs.min',
	    "jquery.ui.tooltip"             : 'components/jquery-ui/ui/minified/jquery.ui.tooltip.min',
	    "jquery.ui.widget"              : 'components/jquery-ui/ui/minified/jquery.ui.widget.min',

	    bootstrap                   : "components/bootstrap/js/bootstrap",
	    "bootstrap.affix"           : 'components/bootstrap/js/bootstrap-affix',
	    "bootstrap.alert"           : 'components/bootstrap/js/bootstrap-alert',
	    "bootstrap.button"          : 'components/bootstrap/js/bootstrap-button',
	    "bootstrap.carousel"        : 'components/bootstrap/js/bootstrap-carousel',
	    "bootstrap.collapse"        : 'components/bootstrap/js/bootstrap-collapse',
	    "bootstrap.dropdown"        : 'components/bootstrap/js/bootstrap-dropdown',
	    "bootstrap.modal"           : 'components/bootstrap/js/bootstrap-modal',
	    "bootstrap.popover"         : 'components/bootstrap/js/bootstrap-popover',
	    "bootstrap.scrollspy"       : 'components/bootstrap/js/bootstrap-scrollspy',
	    "bootstrap.tab"             : 'components/bootstrap/js/bootstrap-tab',
	    "bootstrap.tooltip"         : 'components/bootstrap/js/bootstrap-tooltip',
	    "bootstrap.transition"      : 'components/bootstrap/js/bootstrap-transition',
	    "bootstrap.typeahead"       : 'components/bootstrap/js/bootstrap-typeahead'
    },

    shim : {
      underscore: {
          exports: '_'
      },
	    jquery : {
		    exports : 'jQuery'
	    },
      backbone : {
          deps: ['underscore'],
          exports: 'Backbone'
      },
      "backbone.localstorage": {
          deps: ['backbone']
      },
	    lodash : {
		    exports : '_'
	    },
	    angular : {
		    deps: ["jquery"],
		    exports : 'angular'
	    },
	    moment : {
		    deps: ["components/moment/min/moment.min"],
		    exports : 'moment'
	    },
	    carouFredSel    : ["jquery"],
	    "components/select2/select2"         : ["jquery"],
	    select2         : ["jquery","components/select2/select2"],

	    "angular.cookies"               : ["angular"],
	    "angular.mocks"                 : ["angular"],
	    "angular.resource"              : ["angular"],
	    "angular.sanitize"              : ["angular"],

	    "angular.module.localStorage"   : ["angular"],
	    "angular.ui"                    : ["angular", "jquery.ui"],
	    "angular.ui.common"             : ["angular"],

	    "angular.ui.directives.animate"         : ["angular", "angular.ui.common"],
	    "angular.ui.directives.calendar"        : ["angular", "angular.ui.common"],
	    "angular.ui.directives.codemirror"      : ["angular", "angular.ui.common", "plugins/codemirror"],
	    "angular.ui.directives.currency"        : ["angular", "angular.ui.common"],
	    "angular.ui.directives.date"            : ["angular", "angular.ui.common", "jquery.ui.datepicker"],
	    "angular.ui.directives.event"           : ["angular", "angular.ui.common"],
	    "angular.ui.directives.if"              : ["angular", "angular.ui.common"],
	    "angular.ui.directives.jq"              : ["angular", "angular.ui.common"],
	    "angular.ui.directives.keypress"        : ["angular", "angular.ui.common"],
	    "angular.ui.directives.map"             : ["angular", "angular.ui.common"],
	    "angular.ui.directives.mask"            : ["angular", "angular.ui.common", "jquery.maskedinput"],
	    "angular.ui.directives.reset"           : ["angular", "angular.ui.common"],
	    "angular.ui.directives.route"           : ["angular", "angular.ui.common"],
	    "angular.ui.directives.scrollfix"       : ["angular", "angular.ui.common"],
	    "angular.ui.directives.select2"         : ["angular", "angular.ui.common", "select2"],
	    "angular.ui.directives.showhide"        : ["angular", "angular.ui.common"],
	    "angular.ui.directives.sortable"        : ["angular", "angular.ui.common"],
	    "angular.ui.directives.tinymce"         : ["angular", "angular.ui.common"],
	    "angular.ui.directives.validate"        : ["angular", "angular.ui.common"],
	    "angular.ui.filters.format"             : ["angular", "angular.ui.common"],
	    "angular.ui.filters.highlight"          : ["angular", "angular.ui.common"],
	    "angular.ui.filters.inflector"          : ["angular", "angular.ui.common"],
	    "angular.ui.filters.unique"             : ["angular", "angular.ui.common"],

	    "jquery.fancybox"               : ['jquery'],
	    "jquery.maskedinput"            : ['jquery'],
	    "components/jquery-ui/ui/minified/jquery-ui.custom.min"      : ['jquery'],
	    "components/jquery-ui/ui/minified/jquery.ui.datepicker.min"  : ['jquery', 'jquery.ui.core'],
	    "jquery.ui"                     : ["components/jquery-ui/ui/minified/jquery-ui.custom.min"],
	    "jquery.ui.core"                : ['jquery'],
	    "jquery.ui.accordion"           : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.autocomplete"        : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.button"              : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.datepicker"          : ['jquery', "components/jquery-ui/ui/minified/jquery.ui.datepicker.min"],
	    "jquery.ui.dialog"              : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.draggable"           : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.droppable"           : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.effect"              : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.effect.blind"        : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.effect.bounce"       : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.effect.clip"         : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.effect.drop"         : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.effect.explode"      : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.effect.fade"         : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.effect.fold"         : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.effect.highlight"    : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.effect.pulsate"      : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.effect.scale"        : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.effect.shake"        : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.effect.slide"        : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.effect.transfer"     : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.menu"                : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.mouse"               : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.position"            : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.progressbar"         : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.resizable"           : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.selectable"          : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.slider"              : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.sortable"            : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.spinner"             : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.tabs"                : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.tooltip"             : ['jquery', 'jquery.ui.core'],
	    "jquery.ui.widget"              : ['jquery', 'jquery.ui.core'],

	    'bootstrap.affix'         : ['jquery'],
	    'bootstrap.alert'         : ['jquery'],
	    'bootstrap.button'        : ['jquery'],
	    'bootstrap.carousel'      : ['jquery'],
	    'bootstrap.collapse'      : ['jquery'],
	    'bootstrap.dropdown'      : ['jquery'],
	    'bootstrap.modal'         : ['jquery'],
	    'bootstrap.popover'       : ['jquery', 'bootstrap.tooltip'],
	    'bootstrap.scrollspy'     : ['jquery'],
	    'bootstrap.tab'           : ['jquery'],
	    'bootstrap.tooltip'       : ['jquery'],
	    'bootstrap.transition'    : ['jquery'],
	    'bootstrap.typeahead'     : ['jquery']
    },

    // Application scripts to include in optimzation.
    modules : [
        { name: 'main' },
	    {
		    name: "todomvc",
		    include: ["foo/bar/bee"]
	    }
    ],

    // Directory where our optimized files will be compiled to:
    // {{STATIC_URL}}/compiled/js/
    dir     : "./static/compiled/js/",

    // This prevents unwanted file in the baseUrl from being copied to the
    // compiled/ folder before optimization. Currently there's no way to tell
    // requirejs to only copy javascript files
    fileExclusionRegExp: /(^\.|.*test.*|compiled|css)(?!\.js$)/,

    // Tell requirejs not to optimize CSS. We're using django-pipeline for that
    optimizeCss: 'none'
};

if (typeof exports === 'object') {
    // If this file is loaded from node, export the config variable.
    module.exports = config;
} else if (typeof define === 'function' && define.amd) {
    // If this file is being loaded in the browser, load the config
    define([], function() {
        requirejs.config(config);
    });
}

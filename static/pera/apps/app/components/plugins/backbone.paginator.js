/*! backbone.paginator - v0.1.54 - 8/18/2012
* http://github.com/addyosmani/backbone.paginator
* Copyright (c) 2012 Addy Osmani; Licensed MIT */
Backbone.Paginator=function(a,b,c){"use strict";var d={};return d.version="0.15",d.clientPager=a.Collection.extend({initialize:function(){this.useDiacriticsPlugin=!0,this.useLevenshteinPlugin=!0,this.sortColumn="",this.sortDirection="desc",this.lastSortColumn="",this.fieldFilterRules=[],this.lastFieldFilterRules=[],this.filterFields="",this.filterExpression="",this.lastFilterExpression=""},sync:function(a,d,e){var f=this;b.defaults(f.paginator_ui,{firstPage:0,currentPage:1,perPage:5,totalPages:10}),b.each(f.paginator_ui,function(a,c){b.isUndefined(f[c])&&(f[c]=f.paginator_ui[c])});var g={};b.each(f.server_api,function(a,c){b.isFunction(a)&&(a=b.bind(a,f),a=a()),g[c]=a});var h=b.clone(f.paginator_core);return b.each(h,function(a,c){b.isFunction(a)&&(a=b.bind(a,f),a=a()),h[c]=a}),h=b.defaults(h,{timeout:25e3,cache:!1,type:"GET",dataType:"jsonp"}),h=b.extend(h,{jsonpCallback:"callback",data:decodeURIComponent(c.param(g)),processData:!1,url:b.result(h,"url")},e),c.ajax(h)},nextPage:function(){this.currentPage=++this.currentPage,this.pager()},previousPage:function(){this.currentPage=--this.currentPage||1,this.pager()},goTo:function(a){a!==undefined&&(this.currentPage=parseInt(a,10),this.pager())},howManyPer:function(a){if(a!==undefined){var b=this.perPage;this.perPage=parseInt(a,10),this.currentPage=Math.ceil((b*(this.currentPage-1)+1)/a),this.pager()}},setSort:function(a,b){a!==undefined&&b!==undefined&&(this.lastSortColumn=this.sortColumn,this.sortColumn=a,this.sortDirection=b,this.pager(),this.info())},setFieldFilter:function(a){b.isEmpty(a)||(this.lastFieldFilterRules=this.fieldFilterRules,this.fieldFilterRules=a,this.pager(),this.info())},doFakeFieldFilter:function(a){if(!b.isEmpty(a)){var c=this.lastFieldFilterRules,d=this.fieldFilterRules;this.lastFieldFilterRules=this.fieldFilterRules,this.fieldFilterRules=a,this.pager(),this.info();var e=this.models.length;return this.lastFieldFilterRules=c,this.fieldFilterRules=d,this.pager(),this.info(),e}},setFilter:function(a,b){a!==undefined&&b!==undefined&&(this.filterFields=a,this.lastFilterExpression=this.filterExpression,this.filterExpression=b,this.pager(),this.info())},doFakeFilter:function(a,b){if(a!==undefined&&b!==undefined){var c=this.filterFields,d=this.lastFilterExpression,e=this.filterExpression;this.filterFields=a,this.lastFilterExpression=this.filterExpression,this.filterExpression=b,this.pager(),this.info();var f=this.models.length;return this.filterFields=c,this.lastFilterExpression=d,this.filterExpression=e,this.pager(),this.info(),f}},pager:function(){var a=this,c=this.perPage,d=(a.currentPage-1)*c,e=d+c;a.origModels===undefined&&(a.origModels=a.models),a.models=a.origModels,this.sortColumn!==""&&(a.models=a._sort(a.models,this.sortColumn,this.sortDirection)),b.isEmpty(this.fieldFilterRules)||(a.models=a._fieldFilter(a.models,this.fieldFilterRules)),this.filterExpression!==""&&(a.models=a._filter(a.models,this.filterFields,this.filterExpression));if(this.lastSortColumn!==this.sortColumn||this.lastFilterExpression!==this.filterExpression||!b.isEqual(this.fieldFilterRules,this.lastFieldFilterRules))d=0,e=d+c,a.currentPage=1,this.lastSortColumn=this.sortColumn,this.lastFieldFilterRules=this.fieldFilterRules,this.lastFilterExpression=this.filterExpression;a.sortedAndFilteredModels=a.models,a.reset(a.models.slice(d,e))},_sort:function(a,b,c){return a=a.sort(function(a,d){var e=a.get(b),f=d.get(b);if(!e||!f)return 0;e=e.toString().toLowerCase(),f=f.toString().toLowerCase();if(c==="desc")if(!e.match(/[^\d\.]/)&&e.match(/[\d\.]*/)&&!f.match(/[^\d\.]/)&&f.match(/[\d\.]*/)){if(e-0<f-0)return 1;if(e-0>f-0)return-1}else{if(e<f)return 1;if(e>f)return-1}else if(!e.match(/[^\d\.]/)&&e.match(/[\d\.]*/)&&!f.match(/[^\d\.]/)&&f.match(/[\d\.]*/)){if(e-0<f-0)return-1;if(e-0>f-0)return 1}else{if(e<f)return-1;if(e>f)return 1}return 0}),a},_fieldFilter:function(a,c){if(b.isEmpty(c))return a;var d=[];return b.each(a,function(a){var e=!0;b.each(c,function(c){if(!e)return!1;e=!1;if(c.type==="function"){var d=b.wrap(c.value,function(b){return b(a.get(c.field))});d()&&(e=!0)}else c.type==="required"?b.isEmpty(a.get(c.field).toString())||(e=!0):c.type==="min"?!b.isNaN(Number(a.get(c.field)))&&!b.isNaN(Number(c.value))&&Number(a.get(c.field))>=Number(c.value)&&(e=!0):c.type==="max"?!b.isNaN(Number(a.get(c.field)))&&!b.isNaN(Number(c.value))&&Number(a.get(c.field))<=Number(c.value)&&(e=!0):c.type==="range"?!b.isNaN(Number(a.get(c.field)))&&b.isObject(c.value)&&!b.isNaN(Number(c.value.min))&&!b.isNaN(Number(c.value.max))&&Number(a.get(c.field))>=Number(c.value.min)&&Number(a.get(c.field))<=Number(c.value.max)&&(e=!0):c.type==="minLength"?a.get(c.field).toString().length>=c.value&&(e=!0):c.type==="maxLength"?a.get(c.field).toString().length<=c.value&&(e=!0):c.type==="rangeLength"?b.isObject(c.value)&&!b.isNaN(Number(c.value.min))&&!b.isNaN(Number(c.value.max))&&a.get(c.field).toString().length>=c.value.min&&a.get(c.field).toString().length<=c.value.max&&(e=!0):c.type==="oneOf"?b.isArray(c.value)&&b.include(c.value,a.get(c.field))&&(e=!0):c.type==="equalTo"?c.value===a.get(c.field)&&(e=!0):c.type==="pattern"?a.get(c.field).toString().match(c.value)&&(e=!0):e=!1}),e&&d.push(a)}),d},_filter:function(c,d,e){var f=this,g={};b.isString(d)?g[d]={cmp_method:"regexp"}:b.isArray(d)?b.each(d,function(a){g[a]={cmp_method:"regexp"}}):b.each(d,function(a,c){g[c]=b.defaults(a,{cmp_method:"regexp"})}),d=g,b.has(a.Paginator,"removeDiacritics")&&f.useDiacriticsPlugin&&(e=a.Paginator.removeDiacritics(e));if(e===""||!b.isString(e))return c;var h=e.match(/\w+/ig),i="("+b.uniq(h).join("|")+")",j=new RegExp(i,"igm"),k=[];return b.each(c,function(c){var g=[];b.each(d,function(d,i){var k=c.get(i);if(k){var l=[];b.has(a.Paginator,"removeDiacritics")&&f.useDiacriticsPlugin?k=a.Paginator.removeDiacritics(k.toString()):k=k.toString();if(d.cmp_method==="levenshtein"&&b.has(a.Paginator,"levenshtein")&&f.useLevenshteinPlugin){var m=a.Paginator.levenshtein(k,e);b.defaults(d,{max_distance:0}),m<=d.max_distance&&(l=b.uniq(h))}else l=k.match(j);l=b.map(l,function(a){return a.toString().toLowerCase()}),b.each(l,function(a){g.push(a)})}}),g=b.uniq(b.without(g,"")),b.isEmpty(b.difference(h,g))&&k.push(c)}),k},info:function(){var a=this,b={},c=a.sortedAndFilteredModels?a.sortedAndFilteredModels.length:a.length,d=Math.ceil(c/a.perPage);return b={totalUnfilteredRecords:a.origModels.length,totalRecords:c,currentPage:a.currentPage,perPage:this.perPage,totalPages:d,lastPage:d,previous:!1,next:!1,startRecord:c===0?0:(a.currentPage-1)*this.perPage+1,endRecord:Math.min(c,a.currentPage*this.perPage)},a.currentPage>1&&(b.previous=a.currentPage-1),a.currentPage<b.totalPages&&(b.next=a.currentPage+1),b.pageSet=a.setPagination(b),a.information=b,b},setPagination:function(a){var b=[],c=0,d=0,e=3,f=e*2,g=Math.ceil(a.totalRecords/a.perPage),h=-1;if(g>1)if(g<7+f)for(c=1,d=g;c<=d;c++)b.push(c);else if(g>5+f)if(a.currentPage<1+f)for(c=1,d=4+f;c<d;c++)b.push(c);else if(g-f>a.currentPage&&a.currentPage>f)for(c=a.currentPage-e;c<=a.currentPage+e;c++)b.push(c);else for(c=g-(2+f);c<=g;c++)b.push(c);return b}}),d.requestPager=a.Collection.extend({sync:function(a,d,e){var f=this;b.defaults(f.paginator_ui,{firstPage:0,currentPage:1,perPage:5,totalPages:10}),b.each(f.paginator_ui,function(a,c){b.isUndefined(f[c])&&(f[c]=f.paginator_ui[c])});var g={};b.each(f.server_api,function(a,c){b.isFunction(a)&&(a=b.bind(a,f),a=a()),g[c]=a});var h=b.clone(f.paginator_core);return b.each(h,function(a,c){b.isFunction(a)&&(a=b.bind(a,f),a=a()),h[c]=a}),h=b.defaults(h,{timeout:25e3,cache:!1,type:"GET",dataType:"jsonp"}),e.data?e.data=decodeURIComponent(c.param(b.extend(g,e.data))):e.data=decodeURIComponent(c.param(g)),h=b.extend(h,{jsonpCallback:"callback",processData:!1,url:b.result(h,"url")},e),c.ajax(h)},requestNextPage:function(a){if(this.currentPage!==undefined)return this.currentPage+=1,this.pager(a);var b=new c.Deferred;return b.reject(),b.promise()},requestPreviousPage:function(a){if(this.currentPage!==undefined)return this.currentPage-=1,this.pager(a);var b=new c.Deferred;return b.reject(),b.promise()},updateOrder:function(a){a!==undefined&&(this.sortField=a,this.pager())},goTo:function(a,b){if(a!==undefined)return this.currentPage=parseInt(a,10),this.pager(b);var d=new c.Deferred;return d.reject(),d.promise()},howManyPer:function(a){a!==undefined&&(this.currentPage=this.firstPage,this.perPage=a,this.pager())},sort:function(){},info:function(){var a={totalRecords:this.totalRecords||0,currentPage:this.currentPage,firstPage:this.firstPage,totalPages:this.totalPages,lastPage:this.totalPages,perPage:this.perPage};return this.information=a,a},pager:function(a){return b.isObject(a)||(a={}),this.fetch(a)}}),d}(Backbone,_,jQuery);
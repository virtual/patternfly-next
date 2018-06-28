webpackJsonp([0x76019ccddc60],{512:function(t,e){t.exports="<h2 id=overview>Overview</h2> <p>The title component applies top and bottom margins, font-weight, font-size, and line-height to titles.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-title</code></td> <td><code>&lt;h1&gt;</code>,<code>&lt;h2&gt;</code>,<code>&lt;h3&gt;</code>,<code>&lt;h4&gt;</code>,<code>&lt;h5&gt;</code>,<code>&lt;h6&gt;</code></td> <td>Initiates a title. Always use it with a modifier class.</td> </tr> <tr> <td><code>.pf-m-4xl</code></td> <td><code>.pf-c-title</code></td> <td>Modifies for 4xl font-size, font-weight, and line-height</td> </tr> <tr> <td><code>.pf-m-3xl</code></td> <td><code>.pf-c-title</code></td> <td>Modifies for 3xl font-size, font-weight, and line-height</td> </tr> <tr> <td><code>.pf-m-2xl</code></td> <td><code>.pf-c-title</code></td> <td>Modifies for 2xl font-size, font-weight, and line-height</td> </tr> <tr> <td><code>.pf-m-xl</code></td> <td><code>.pf-c-title</code></td> <td>Modifies for xl font-size, font-weight, and line-height</td> </tr> <tr> <td><code>.pf-m-lg</code></td> <td><code>.pf-c-title</code></td> <td>Modifies for lg font-size, font-weight, and line-height</td> </tr> <tr> <td><code>.pf-m-md</code></td> <td><code>.pf-c-title</code></td> <td>Modifies for md font-size, font-weight, and line-height</td> </tr> <tr> <td><code>.pf-m-margin</code></td> <td><code>.pf-c-title</code></td> <td>adds top and bottom margins, always use with a title size modifier</td> </tr> </tbody> </table> "},204:function(t,e,i){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.Docs=void 0;var o=i(4),a=l(o),d=i(11),n=l(d),r=i(12),c=l(r),f=i(456),p=l(f),s=i(512),h=l(s);i(606);var u=e.Docs=h.default;e.default=function(){var t=(0,p.default)();return a.default.createElement(n.default,{docs:u},a.default.createElement(c.default,{heading:"Title Types"},t))}},456:function(t,e,i){var l=i(1);t.exports=(l.default||l).template({1:function(t,e,i,l,o){return"    4xl title\n"},3:function(t,e,i,l,o){return"    3xl title\n"},5:function(t,e,i,l,o){return"    2xl title\n"},7:function(t,e,i,l,o){return"    xl title\n"},9:function(t,e,i,l,o){return"    lg title\n"},11:function(t,e,i,l,o){return"    md title\n"},compiler:[7,">= 4.0.0"],main:function(t,e,l,o,a){var d;return"\n"+(null!=(d=t.invokePartial(i(17),e,{name:"title",hash:{"pf-c-title--Modifier":"pf-m-4xl pf-m-margin",titleType:"h1"},fn:t.program(1,a,0),inverse:t.noop,data:a,helpers:l,partials:o,decorators:t.decorators}))?d:"")+(null!=(d=t.invokePartial(i(17),e,{name:"title",hash:{"pf-c-title--Modifier":"pf-m-3xl pf-m-margin",titleType:"h1"},fn:t.program(3,a,0),inverse:t.noop,data:a,helpers:l,partials:o,decorators:t.decorators}))?d:"")+(null!=(d=t.invokePartial(i(17),e,{name:"title",hash:{"pf-c-title--Modifier":"pf-m-2xl pf-m-margin",titleType:"h1"},fn:t.program(5,a,0),inverse:t.noop,data:a,helpers:l,partials:o,decorators:t.decorators}))?d:"")+(null!=(d=t.invokePartial(i(17),e,{name:"title",hash:{"pf-c-title--Modifier":"pf-m-xl pf-m-margin",titleType:"h1"},fn:t.program(7,a,0),inverse:t.noop,data:a,helpers:l,partials:o,decorators:t.decorators}))?d:"")+(null!=(d=t.invokePartial(i(17),e,{name:"title",hash:{"pf-c-title--Modifier":"pf-m-lg pf-m-margin",titleType:"h1"},fn:t.program(9,a,0),inverse:t.noop,data:a,helpers:l,partials:o,decorators:t.decorators}))?d:"")+(null!=(d=t.invokePartial(i(17),e,{name:"title",hash:{"pf-c-title--Modifier":"pf-m-md pf-m-margin",titleType:"h1"},fn:t.program(11,a,0),inverse:t.noop,data:a,helpers:l,partials:o,decorators:t.decorators}))?d:"")},usePartial:!0,useData:!0})},606:function(t,e){},17:function(t,e,i){var l=i(1);t.exports=(l.default||l).template({1:function(t,e,i,l,o){var a;return' id="'+t.escapeExpression((a=null!=(a=i["pf-c-title--ID"]||(null!=e?e["pf-c-title--ID"]:e))?a:i.helperMissing,"function"==typeof a?a.call(null!=e?e:t.nullContext||{},{name:"pf-c-title--ID",hash:{},data:o}):a))+'" '},compiler:[7,">= 4.0.0"],main:function(t,e,i,l,o){var a,d,n=null!=e?e:t.nullContext||{},r=i.helperMissing,c="function",f=t.escapeExpression;return"<"+f((d=null!=(d=i.titleType||(null!=e?e.titleType:e))?d:r,typeof d===c?d.call(n,{name:"titleType",hash:{},data:o}):d))+' class="pf-c-title '+f((d=null!=(d=i["pf-c-title--Modifier"]||(null!=e?e["pf-c-title--Modifier"]:e))?d:r,typeof d===c?d.call(n,{name:"pf-c-title--Modifier",hash:{},data:o}):d))+'" '+(null!=(a=i.if.call(n,null!=e?e["pf-c-title--ID"]:e,{name:"if",hash:{},fn:t.program(1,o,0),inverse:t.noop,data:o}))?a:"")+">\n"+(null!=(a=t.invokePartial(l["@partial-block"],e,{name:"@partial-block",data:o,indent:"    ",helpers:i,partials:l,decorators:t.decorators}))?a:"")+"</"+f((d=null!=(d=i.titleType||(null!=e?e.titleType:e))?d:r,typeof d===c?d.call(n,{name:"titleType",hash:{},data:o}):d))+"> \n"},usePartial:!0,useData:!0})}});
//# sourceMappingURL=component---src-patternfly-components-title-examples-index-js-38092f94463480e5da7c.js.map
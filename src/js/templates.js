this["MediumInsert"] = this["MediumInsert"] || {};
this["MediumInsert"]["Templates"] = this["MediumInsert"]["Templates"] || {};

this["MediumInsert"]["Templates"]["src/js/templates/core-buttons.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "            <li><a data-addon=\""
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" data-action=\"add\" class=\"medium-insert-action\">"
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"medium-insert-buttons\" contenteditable=\"false\" style=\"display: none\">\n    <a class=\"medium-insert-buttons-show\">+</a>\n    <ul class=\"medium-insert-buttons-addons\" style=\"display: none\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.addons : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>\n";
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/core-caption.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<figcaption contenteditable=\"true\" class=\"medium-insert-caption-placeholder\" data-placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\"></figcaption>";
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/core-empty-line.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p><br></p>\n";
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/embeds-toolbar.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"medium-insert-embeds-toolbar medium-editor-toolbar medium-toolbar-arrow-under medium-editor-toolbar-active\">\n        <ul class=\"medium-editor-toolbar-actions clearfix\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.styles : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "                    <li>\n                        <button class=\"medium-editor-action\" data-action=\""
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\n                    </li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"medium-insert-embeds-toolbar2 medium-editor-toolbar medium-editor-toolbar-active\">\n        <ul class=\"medium-editor-toolbar-actions clearfix\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.actions : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.styles : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.actions : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/embeds-wrapper.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda;

  return ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.oembed : stack1)) != null ? stack1.html : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.title_image : stack1)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <figcaption contenteditable=\"false\">\n          <h4 class=\"medium-insert-embed-title\" contenteditable=\"true\">"
    + container.escapeExpression(alias2(((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h4>\n          <p class=\"medium-insert-embed-description\" contenteditable=\"true\">"
    + ((stack1 = alias2(((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.source : stack1)) != null ? stack1.network : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </figcaption>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "          "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.oembed : stack1)) != null ? stack1.html : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "          <div class=\"px-spotlight-lead-image\" data-width=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.title_image : stack1)) != null ? stack1.width : stack1), depth0))
    + "\" data-height=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.title_image : stack1)) != null ? stack1.height : stack1), depth0))
    + "\" data-src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.title_image : stack1)) != null ? stack1.url : stack1), depth0))
    + "\">\n            <div class=\"px-background-image px-image-ready\" data-original-src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.title_image : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" style=\"background-image: url('http://imgry.pressly.com/xx3/fetch?url="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.title_image : stack1)) != null ? stack1.url : stack1), depth0))
    + "&size=960x585&op=cover'); background-size: cover;\"></div>\n          </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"px-byline\" contenteditable=\"false\">\n              <span class=\"px-byline-network\" contenteditable=\"true\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.source : stack1)) != null ? stack1.network : stack1), depth0))
    + "</span>\n              "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.author : stack1)) != null ? stack1.name : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"px-byline-author\" contenteditable=\"true\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.author : stack1)) != null ? stack1.name : stack1), depth0))
    + "</span>";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        "
    + ((stack1 = ((helper = (helper = helpers.html || (depth0 != null ? depth0.html : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"html","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"medium-insert-embeds\" contenteditable=\"false\">\n	<figure>\n		<div class=\"medium-insert-embed\" data-type=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.type : stack1), depth0))
    + "\" data-src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.source : stack1)) != null ? stack1.url : stack1), depth0))
    + "\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.html : depth0)) != null ? stack1.type : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "		</div>\n	</figure>\n	<div class=\"medium-insert-embeds-overlay\"></div>\n</div>\n";
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/images-fileupload.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input type=\"file\" multiple>";
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/images-image.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"medium-insert-images-progress\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<figure contenteditable=\"false\">\n    <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" />\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.progress : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</figure>\n";
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/images-progressbar.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<progress min=\"0\" max=\"100\" value=\"0\">0</progress>";
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/images-toolbar.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "                <li>\n                    <button class=\"medium-editor-action\" data-action=\""
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\n                </li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"medium-insert-images-toolbar2 medium-editor-toolbar medium-editor-toolbar-active\">\n		<ul class=\"medium-editor-toolbar-actions clearfix\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.actions : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    	</ul>\n    </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "        	        <li>\n        	            <button class=\"medium-editor-action\" data-action=\""
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\n        	        </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"medium-insert-images-toolbar medium-editor-toolbar medium-toolbar-arrow-under medium-editor-toolbar-active\">\n    <ul class=\"medium-editor-toolbar-actions clearfix\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.styles : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.actions : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
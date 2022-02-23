var e=require("stimulus");require("@simonwep/pickr/dist/themes/monolith.min.css");var t=require("@simonwep/pickr");require("daterangepicker");var i=require("intl-tel-input"),r=require("jquery"),n=require("select2"),a=require("tributejs");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=o(t),s=o(i),u=o(r),c=o(n),d=o(a);function h(e){var t=(e.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/)||[])[1];if(t)return t.replace(/_/g,"-").replace(/\//g,"--")}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,g(e,t)}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}var f=function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.clickShadowField=function(e){e.preventDefault(),this.shadowFieldTarget.click()},t}(e.Controller);f.targets=["shadowField"];var m=function(e){function t(){return e.apply(this,arguments)||this}p(t,e);var i=t.prototype;return i.pickImageAndUpload=function(e){e.preventDefault();var t=["local","url","camera"];this.hasGoogleApiKeyValue&&t.push("image_search");var i={cloud_name:this.cloudNameValue,apiKey:this.apiKeyValue,upload_preset:this.uploadPresetValue,upload_signature:this.getCloudinarySignature.bind(this),multiple:!1,sources:this.hasSourcesValue?this.sourcesValue.split(","):t,search_by_rights:!this.hasSearchByRightsValue||!1!==this.searchByRightsValue};this.hasGoogleApiKeyValue&&(i.google_api_key=this.googleApiKeyValue),cloudinary.openUploadWidget(i,this.handleWidgetResponse.bind(this))},i.clearImage=function(e){e.preventDefault(),this.hiddenFieldTarget.value=null,this.removeThumbnail()},i.getCloudinarySignature=function(e,t){$.ajax({url:this.signaturesUrlValue,type:"GET",dataType:"text",data:{data:t},complete:function(){console.log("complete")},success:function(t,i,r){e(t)},error:function(e,t,i){console.log(e,t,i)}})},i.handleWidgetResponse=function(e,t){if(!e&&t&&"success"===t.event){var i=t.info;this.hiddenFieldTarget.value=i.public_id,this.removeThumbnail(),this.addThumbnail(this.urlFormatValue.replace("CLOUDINARY_ID",i.public_id))}},i.addThumbnail=function(e){var t=$('<img src="'+e+'" width="'+this.widthValue+'" height="'+this.heightValue+'" data-'+this.identifier+'-target="thumbnail" />');$(this.uploadButtonTarget).prepend(t),this.uploadButtonTarget.classList.add(this.thumbnailShownClass)},i.removeThumbnail=function(){this.hasThumbnailTarget&&(this.uploadButtonTarget.removeChild(this.thumbnailTarget),this.uploadButtonTarget.classList.remove(this.thumbnailShownClass))},t}(e.Controller);m.targets=["uploadButton","hiddenField","thumbnail"],m.values={signaturesUrl:String,height:Number,width:Number,cloudName:String,apiKey:String,googleApiKey:String,urlFormat:String,sources:String,searchByRights:Boolean},m.classes=["thumbnailShown"];var v=function(e){function t(){return e.apply(this,arguments)||this}p(t,e);var i=t.prototype;return i.connect=function(){this.initPluginInstance(),this.colorOptions=$(this.colorOptionsTarget).find("button").map(function(e,t){return $(t).attr("data-color")}).get()},i.disconnect=function(){this.teardownPluginInstance()},i.pickColor=function(e){e.preventDefault();var t=e.target,i=t.dataset.color;$(this.colorInputTarget).val(i),$(this.colorPickerValueTarget).val(i),$(this.userSelectedColorTarget).data("color",i),$(".button-color").removeClass("ring-2 ring-offset-2"),this.pickr.setColor(i),t.classList.add("ring-2","ring-offset-2")},i.pickRandomColor=function(e){e.preventDefault();var t=Math.floor(256*Math.random()),i=Math.floor(256*Math.random()),r=Math.floor(256*Math.random());this.pickr.setColor("rgb "+t+" "+i+" "+r);var n=this.pickr.getColor().toHEXA().toString();this.pickr.setColor(n),this.showUserSelectedColor(n)},i.showUserSelectedColor=function(e){$(this.colorInputTarget).val(e),$(this.colorPickerValueTarget).val(e),$(".button-color").removeClass("ring-2 ring-offset-2"),$(this.userSelectedColorTarget).addClass("ring-2").addClass("ring-offset-2").css("background-color",e).css("--tw-ring-color",e).attr("data-color",e).show()},i.unpickColor=function(e){e.preventDefault(),$(this.colorPickerValueTarget).val(""),$(this.colorInputTarget).val(""),$(this.userSelectedColorTarget).hide(),$(".button-color").removeClass("ring-2 ring-offset-2")},i.togglePickr=function(e){e.preventDefault()},i.initPluginInstance=function(){var e=this;this.pickr=l.default.create({el:".btn-pickr",theme:"monolith",useAsButton:!0,default:this.initialColorValue||"#1E90FF",components:{preview:!0,hue:!0,interaction:{input:!0,save:!0}}}),this.pickr.on("save",function(t,i){var r=t.toHEXA().toString();e.colorOptions.includes(r)||e.showUserSelectedColor(r),e.pickr.hide()});var t=this;$('input[type="text"].pcr-result').on("keydown",function(e){"Enter"===e.key&&t.pickr.applyColor(!1)})},i.teardownPluginInstance=function(){this.pickr.destroy()},t}(e.Controller);v.targets=["colorPickerValue","colorField","colorInput","userSelectedColor","colorOptions"],v.values={initialColor:String},require("daterangepicker/daterangepicker.css");var T=function(e){function t(){return e.apply(this,arguments)||this}p(t,e);var i=t.prototype;return i.connect=function(){this.initPluginInstance()},i.disconnect=function(){this.teardownPluginInstance()},i.clearDate=function(e){e.preventDefault(),$(this.fieldTarget).val("")},i.applyDateToField=function(e,t){var i=this.includeTimeValue?"MM/DD/YYYY h:mm A":"MM/DD/YYYY";$(this.fieldTarget).val(t.startDate.format(i))},i.showTimeZoneButtons=function(e){e.preventDefault(),$(this.currentTimeZoneWrapperTarget).toggleClass("hidden"),$(this.timeZoneButtonsTarget).toggleClass("hidden")},i.showTimeZoneSelectWrapper=function(e){e.preventDefault(),$(this.timeZoneButtonsTarget).toggleClass("hidden"),this.hasTimeZoneSelectWrapperTarget&&$(this.timeZoneSelectWrapperTarget).toggleClass("hidden")},i.resetTimeZoneUI=function(e){e&&e.preventDefault(),$(this.currentTimeZoneWrapperTarget).removeClass("hidden"),$(this.timeZoneButtonsTarget).addClass("hidden"),this.hasTimeZoneSelectWrapperTarget&&$(this.timeZoneSelectWrapperTarget).addClass("hidden")},i.setTimeZone=function(e){e.preventDefault();var t=this.currentTimeZoneWrapperTarget.querySelector("a"),i=e.target.dataset.value;$(this.timeZoneFieldTarget).val(i),$(t).text(i),$(".time-zone-button").removeClass("button").addClass("button-alternative"),$(e.target).removeClass("button-alternative").addClass("button"),this.resetTimeZoneUI()},i.initPluginInstance=function(){if($(this.fieldTarget).daterangepicker({singleDatePicker:!0,timePicker:this.includeTimeValue,timePickerIncrement:5,autoUpdateInput:!1,locale:{cancelLabel:this.hasCancelButtonLabelValue?this.cancelButtonLabelValue:"cancel",applyLabel:this.hasApplyButtonLabelValue?this.applyButtonLabelValue:"apply",format:this.includeTimeValue?"MM/DD/YYYY h:mm A":"MM/DD/YYYY"}}),$(this.fieldTarget).on("apply.daterangepicker",this.applyDateToField.bind(this)),$(this.fieldTarget).on("cancel.daterangepicker",this.clearDate.bind(this)),this.pluginMainEl=this.fieldTarget,this.plugin=$(this.pluginMainEl).data("daterangepicker"),this.includeTimeValue&&this.hasTimeZoneSelectWrapperTarget){this.timeZoneSelect=this.timeZoneSelectWrapperTarget.querySelector("select.select2"),$(this.timeZoneSelect).select2({width:"style"});var e=this;$(this.timeZoneSelect).on("change.select2",function(t){var i=e.currentTimeZoneWrapperTarget.querySelector("a"),r=t.target.value;$(e.timeZoneFieldTarget).val(r),$(i).text(r);var n=$(".selected-option-time-zone-button");e.defaultTimeZonesValue.includes(r)?($(".time-zone-button").removeClass("button").addClass("button-alternative"),n.addClass("hidden").attr("hidden",!0),$('a[data-value="'+r+'"').removeClass("button-alternative").addClass("button")):($(".time-zone-button").removeClass("button").addClass("button-alternative"),n.text(r),n.attr("data-value",r).removeAttr("hidden"),n.removeClass(["hidden","button-alternative"]).addClass("button")),e.resetTimeZoneUI()})}},i.teardownPluginInstance=function(){void 0!==this.plugin&&($(this.pluginMainEl).off("apply.daterangepicker"),$(this.pluginMainEl).off("cancel.daterangepicker"),this.plugin.remove(),this.includeTimeValue&&$(this.timeZoneSelect).select2("destroy"))},t}(e.Controller);T.targets=["field","clearButton","currentTimeZoneWrapper","timeZoneButtons","timeZoneSelectWrapper","timeZoneField"],T.values={includeTime:Boolean,defaultTimeZones:Array,cancelButtonLabel:String,applyButtonLabel:String};var y=function(e){function t(){return e.apply(this,arguments)||this}p(t,e);var i=t.prototype;return i.connect=function(){var e=this,t=document.addEventListener("direct-upload:initialize",function(t){e.selectFileButtonTarget.classList.add("hidden"),e.progressBarTarget.innerText="0%",e.progressBarTarget.style.width="0%",e.progressBarTarget.setAttribute("aria-valuenow",0),e.progressBarTarget.parentNode.classList.remove("hidden")}),i=document.addEventListener("direct-upload:progress",function(t){var i=t.detail.progress,r=i.toFixed(1)+"%";e.progressBarTarget.innerText=r,e.progressBarTarget.setAttribute("aria-valuenow",i),e.progressBarTarget.style.width=r}),r=document.addEventListener("direct-upload:error",function(t){t.preventDefault(),e.progressBarTarget.innerText=t.detail.error});this.uploadListeners={"direct-upload:initialize":t,"direct-upload:progress":i,"direct-upload:error":r}},i.disconnect=function(){for(var e in this.uploadListeners)document.removeEventListener(e,this.uploadListeners[e])},i.uploadFile=function(){this.fileFieldTarget.click()},i.removeFile=function(){this.hasDownloadFileButtonTarget&&this.downloadFileButtonTarget.classList.add("hidden"),this.removeFileButtonTarget.classList.add("hidden"),this.removeFileFlagTarget.value=!0},i.handleFileSelected=function(){var e=this.selectFileButtonTarget.querySelector("span"),t=this.selectFileButtonTarget.querySelector("i");this.hasDownloadFileButtonTarget&&this.downloadFileButtonTarget.remove(),e.innerText="Select Another File",t.classList.remove("ti-upload"),t.classList.add("ti-check")},t}(e.Controller);y.targets=["fileField","removeFileFlag","downloadFileButton","removeFileButton","selectFileButton","progressBar"],require("intl-tel-input/build/css/intlTelInput.css");var b=function(e){function t(){return e.apply(this,arguments)||this}p(t,e);var i=t.prototype;return i.connect=function(){this.initPluginInstance()},i.disconnect=function(){this.teardownPluginInstance()},i.initPluginInstance=function(){var e,t={hiddenInput:this.fieldTarget.dataset.method,customContainer:"w-full"},i=(e=document.head.querySelector('meta[name="intl_tel_input_utils_path"]'))&&e.content;i&&(t.utilsScript=i),this.plugin=s.default(this.fieldTarget,t)},i.teardownPluginInstance=function(){void 0!==this.plugin&&this.plugin.destroy()},t}(e.Controller);b.targets=["field"],require("select2/dist/css/select2.min.css"),c.default(u.default),void 0!==window.$&&void 0===window.$.select2&&(window.$.fn.select2=u.default.select2);var C=function(e){function t(){return e.apply(this,arguments)||this}p(t,e);var i=t.prototype;return i.connect=function(){this.initPluginInstance()},i.disconnect=function(){this.teardownPluginInstance()},i.cleanupBeforeInit=function(){u.default(this.element).find(".select2-container--default").remove()},i.initPluginInstance=function(){var e={};this.enableSearchValue||(e.minimumResultsForSearch=-1),e.tags=this.acceptsNewValue,this.searchUrlValue&&(e.ajax={url:this.searchUrlValue,dataType:"json",data:function(e){return{search:e.term,page:e.page||1}}}),e.templateResult=this.formatState,e.templateSelection=this.formatState,e.width="style",this.cleanupBeforeInit(),this.pluginMainEl=this.selectTarget,u.default(this.pluginMainEl).select2(e)},i.teardownPluginInstance=function(){void 0!==this.pluginMainEl&&u.default(this.pluginMainEl).select2("destroy")},i.formatState=function(e){var t=u.default(e.element).attr("data-image"),i="";return t&&(i='<img src="'+t+'" /> '),u.default("<span>"+i+e.text+"</span>")},t}(e.Controller);C.targets=["select"],C.values={acceptsNew:Boolean,enableSearch:Boolean,searchUrl:String};var S=[[f,"fields/button_toggle_controller.js"],[m,"fields/cloudinary_image_controller.js"],[v,"fields/color_picker_controller.js"],[T,"fields/date_controller.js"],[y,"fields/file_field_controller.js"],[b,"fields/phone_controller.js"],[C,"fields/super_select_controller.js"]].map(function(e){var t=e[0];return{identifier:h(e[1]),controllerConstructor:t}});function w(){document.querySelectorAll("trix-editor").forEach(function(e,t){var i=e.toolbarElement;e==document.activeElement?i.classList.add("visible"):i.contains(document.activeElement)||i.classList.remove("visible")})}require("trix/dist/trix.css"),require("trix"),require("@rails/actiontext"),exports.ButtonToggleController=f,exports.CloudinaryImageController=m,exports.ColorPickerController=v,exports.DateController=T,exports.FileFieldController=y,exports.PhoneController=b,exports.SuperSelectController=C,exports.controllerDefinitions=S,exports.trixEditor=function(){document.addEventListener("trix-initialize",function(){addEventListener("trix-focus",w),addEventListener("trix-blur",w),w(),document.querySelectorAll("trix-editor").forEach(function(e,t){var i=e.editor,r={trigger:"@",values:JSON.parse(i.element.dataset.mentions),selectTemplate:function(e){return'<a href="'+(e=e.original).protocol+"://"+e.model+"/"+e.id+'">'+e.label+"</a>"},menuItemTemplate:function(e){return'<img src="'+e.original.photo+'" /> '+e.string},requireLeadingSpace:!0,replaceTextSuffix:""},n={trigger:"#",values:JSON.parse(i.element.dataset.topics),selectTemplate:function(e){return'<a href="'+(e=e.original).protocol+"://"+e.model+"/"+e.id+'">'+e.label+"</a>"},menuItemTemplate:function(e){return'<img src="'+e.original.photo+'" /> '+e.string},requireLeadingSpace:!0,replaceTextSuffix:""};new d.default({collection:[n,r]}).attach(e)})})};
//# sourceMappingURL=fields.js.map

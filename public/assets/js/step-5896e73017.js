!function(e){var t=e("#signup-form");t.validate({errorPlacement:function(e,t){t.before(e)},rules:{email:{email:!0}},onfocusout:function(t){e(t).valid()}}),t.children("div").steps({headerTag:"h3",bodyTag:"fieldset",transitionEffect:"fade",stepsOrientation:"vertical",titleTemplate:'<div class="title"><span class="step-number">#index#</span><span class="step-text">#title#</span></div>',labels:{previous:"Previous",next:"Next",finish:"Finish",current:""},onStepChanging:function(e,n,a){return 0===n&&t.parent().parent().parent().append('<div class="footer footer-'+n+'"></div>'),1===n&&t.parent().parent().parent().find(".footer").removeClass("footer-0").addClass("footer-"+n),2===n&&t.parent().parent().parent().find(".footer").removeClass("footer-1").addClass("footer-"+n),3===n&&t.parent().parent().parent().find(".footer").removeClass("footer-2").addClass("footer-"+n),t.validate().settings.ignore=":disabled,:hidden",t.valid()},onFinishing:function(e,n){return t.validate().settings.ignore=":disabled",t.valid()},onFinished:function(e,t){alert("Submited")},onStepChanged:function(e,t,n){return!0}}),jQuery.extend(jQuery.validator.messages,{required:"",remote:"",email:"",url:"",date:"",dateISO:"",number:"",digits:"",creditcard:"",equalTo:""}),e.dobPicker({daySelector:"#birth_date",monthSelector:"#birth_month",yearSelector:"#birth_year",dayDefault:"",monthDefault:"",yearDefault:"",minimumAge:0,maximumAge:120});var n=document.getElementById("slider-margin");if(null!=n){noUiSlider.create(n,{start:[1100],step:100,connect:[!0,!1],tooltips:[!0],range:{min:100,max:2e3},pips:{mode:"values",values:[100,2e3],density:4},format:wNumb({decimals:0,thousand:"",prefix:"$ "})});var a=document.getElementById("value-lower"),r=document.getElementById("value-upper");n.noUiSlider.on("update",(function(e,t){t?r.innerHTML=e[t]:a.innerHTML=e[t]}))}}(jQuery);
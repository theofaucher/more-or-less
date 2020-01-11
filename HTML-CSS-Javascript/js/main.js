function selectText(containerid){window.getSelection().selectAllChildren(document.getElementById(containerid));}
$(document).ready(function(){rotate=0;executed=false;var windowWidth=$(window).width();var windowHeight=$(window).height();$('.bg').css({'width':windowWidth,'height':windowHeight});$('.wrap').css({'width':windowWidth,'height':windowHeight});$('.wrap-outer').css({'width':windowWidth,'height':windowHeight});function getDocHeight(){var D=document;return Math.max(D.body.scrollHeight,D.documentElement.scrollHeight,D.body.offsetHeight,D.documentElement.offsetHeight,D.body.clientHeight,D.documentElement.clientHeight);}
if($(".color-palette").length){scrollAmount=$(".color-palette").outerHeight();setTimeout(function(){$("html, body").animate({scrollTop:(scrollAmount)},500);},500);}
$(window).scroll(function(){var qW=$(window).height()/ 4;var dH=getDocHeight();var hT=$('.main').offset().top,hH=$('.main').outerHeight(),wH=$(window).height(),wS=$(this).scrollTop();$(".bgnew").css("opacity",1-wS / qW);if(wS+wH>dH-wH+600){var amount=1-(((dH-wH)-wS)/ qW);$(".bgnew").css("opacity",0+amount);}
if(wS>(hT+hH-wH)&&(hT>wS)&&(wS+wH>hT+hH)){$('.toggle-box-right').hide(500);if($(window).width()>820){$('.mobile-box').hide(500);}}else{$('.toggle-box-right').show(500);$('.mobile-box').show(500);return;}});if($(window).width()<1000){if(rotate==0){MyToggleFunction();}}
$(window).on('resize',function(){var windowWidth=$(window).width();var windowHeight=$(window).height();$('.bg').css({'width':windowWidth,'height':windowHeight});$('.wrap').css({'width':windowWidth,'height':windowHeight});$('.wrap-outer').css({'width':windowWidth,'height':windowHeight});if($(window).width()<1000){if(rotate==0&&executed==false){executed=true;MyToggleFunction();}}});function MyToggleFunction(){if($('.color-input-right').is(':animated'))return;$('.color-input-right').toggle('slow','swing',function(){if($('.color-input-right').is(":visible")){if(rotate==45){rotate=0;$('.close-box i').css({'transform':'rotate('+rotate+'deg)'});}}else{if(rotate==0){rotate=45;$('.close-box i').css({'transform':'rotate('+rotate+'deg)'});}}});}
$('.close-box').on('click',function(){MyToggleFunction();});$('.close').on('click',function(){$('.msg-box').css({'display':'none'});});$('.color-picker').colorPicker(input={customBG:'#F4EFE1',margin:'4px -2px 0',doRender:'div div',opacity:false,buildCallback:function($elm){var colorInstance=this.color,colorPicker=this;$elm.prepend('<div class="cp-panel">'+'<div class="col-val">R</div> <input type="text" class="cp-r" /><br>'+'<div class="col-val">G</div> <input type="text" class="cp-g" /><br>'+'<div class="col-val">B</div> <input type="text" class="cp-b" /><hr>'+'<div class="col-val">#</div> <input type="text" class="cp-HEX" />'+'</div>').on('change','input',function(e){var value=this.value,className=this.className,type=className.split('-')[1],color={};color[type]=value;if(type=='HEX'){color[type]=color[type].replace(/^#/,'');var regExpHex=new RegExp(/^[0-9A-F]{1,6}$/i);if(!regExpHex.test(color[type])){color[type]='000000';value='000000';}}else if(type=='r'||type=='g'||type=='b'){if(isNaN(color[type])){color[type]='0';}}else{}
colorInstance.setColor(type==='HEX'?value:color,type==='HEX'?'HEX':/(?:r|g|b)/.test(type)?'rgb':'hsv');colorPicker.render();this.blur();});},positionCallback:function($elm){var _$UI=this.$UI,position=$elm.offset(),$window=$(window),gap=this.color.options.gap;topAmount=162;uiMargin=20;leftAmount=$elm.outerWidth()-45;if($elm[0].id=='color2'){topAmount=0;leftAmount=-310;leftAmount-=uiMargin;this.$UI[0].classList.add('cp2');}else if(this.$UI[0].classList.contains('cp2')){this.$UI[0].classList.remove('cp2');}
return{'left':(_$UI._left=position.left+leftAmount)-((_$UI._left+=_$UI._width-($window.scrollLeft()+$window.width()))+gap>0?_$UI._left+gap:0),'top':(_$UI._top=position.top-topAmount)-((_$UI._top+=_$UI._height-($window.scrollTop()+$window.height()))+gap>0?_$UI._top+gap:0)}},cssAddon:'.cp-color-picker{box-sizing:border-box; width:310px;background-color:#323E3E;overflow:visible;z-index:999;border:0px solid #ccc;padding:12px 14px 8px;border-radius:5px;box-shadow: 14px 14px 14px 1px rgba(00,00,00,0.3);}'+'.cp-color-picker .cp-panel {line-height: 30px; float:right;'+'padding:0px; margin-top:-1px; overflow:visible}'+'.cp-xy-slider:active {cursor:none;}'+'.cp-panel, .cp-panel input {color:#fbfbfb; font-size:14px;}'+'.cp-panel input {width:80px; height:30px; padding:0;margin-bottom:5px;'+'text-align:center; line-height:12px; background:transparent;'+'border:1px solid rgba(255,255,255,0.2);border-radius:0px}'+'.cp-panel .cp-HEX {width:80px; margin:5px 0px 0 0px;}'+'.col-val {display:inline-block;width:12px;margin-right:3px}'+'.cp-z-slider {height:138px;float:left;margin-left:0;margin-right:10px}'+'.cp-xy-slider {height:138px;width:138px;margin-right:6px;border:0px solid #ccc}'+'.cp-alpha {display:none}',forceAlpha:false,renderCallback:function($elm,toggled){var colors=this.color.colors.RND,modes={r:colors.rgb.r,g:colors.rgb.g,b:colors.rgb.b,HEX:this.color.colors.HEX};$('input','.cp-panel').each(function(){this.value=modes[this.className.substr(3)];});}});$('.mobile-button').on('click',function(){if($('.mobile-menu').is(':animated'))return;if($('.toggle-box-right').is(':animated'))return;var menuHeight=$('.mobile-menu').height()-50;if($(window).height()>600){if($('.mobile-menu').is(":visible")){$(".toggle-box-right").css({'top':'100px'});}else{$(".toggle-box-right").css({'top':'calc(100px + '+menuHeight+'px)'});}}
$(".mobile-menu").toggle('slow','swing',function(){});});$('.color-box').click(function(){$(this).find('.name').select();});window.sr=ScrollReveal({reset:false});sr.reveal('.js-sr-palette',{origin:'bottom',duration:250,scale:0.9,distance:'10%',rotate:{x:0,y:0,z:0},easing:'cubic-bezier(0.6, 0.2, 0.1, 1)',reset:false,mobile:false,});sr.reveal('.js-scroll-bottom',{origin:'bottom',duration:1000,scale:0.7,distance:'10%',rotate:{x:0,y:0,z:0},easing:'cubic-bezier(0.6, 0.2, 0.1, 1)',reset:false,mobile:false,});sr.reveal('.js-scroll-bottom-two',{origin:'bottom',duration:300,scale:1,distance:'50%',rotate:{x:0,y:0,z:0},easing:'cubic-bezier(0.6, 0.2, 0.1, 1)',reset:false,mobile:false,});sr.reveal('.js-scroll-bottom-slow',{origin:'bottom',duration:1000,scale:0.9,distance:'10%',rotate:{x:0,y:0,z:0},delay:100,easing:'cubic-bezier(0.6, 0.2, 0.1, 1)',reset:false,mobile:false,});sr.reveal('.js-scroll-left',{origin:'left',duration:500,scale:0.9,distance:'5%',rotate:{x:0,y:0,z:0},delay:100,easing:'cubic-bezier(0.6, 0.2, 0.1, 1)',reset:false,mobile:false,});sr.reveal('.js-scroll-right',{origin:'right',duration:500,scale:0.9,distance:'5%',rotate:{x:0,y:0,z:0},delay:100,easing:'cubic-bezier(0.6, 0.2, 0.1, 1)',reset:false,mobile:false,});sr.reveal('.js-scroll-bottom-slow-del',{origin:'bottom',duration:1000,scale:0.7,distance:'10%',rotate:{x:0,y:0,z:0},delay:150,easing:'cubic-bezier(0.6, 0.2, 0.1, 1)',reset:false,mobile:false,});$('.fade').css({'opacity':'1'});});
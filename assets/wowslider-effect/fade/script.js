// fade
// options.noCross - Do not use crossfade
function ws_fade(d,f,c){var b=jQuery,l=b(this);b(".ws_list",c);var e={position:"absolute",left:0,top:0,width:"100%",height:"100%",maxHeight:"none",maxWidth:"none",transform:"translate3d(0,0,0)"},g=b("<div>").addClass("ws_effect ws_fade").css(e).css("overflow","hidden").appendTo(c);this.go=function(c,m){var a=b(f.get(c)),h={width:a.width(),height:a.height()},a=a.clone().css(e).css(h).appendTo(g);if(!d.noCross){var k=b(f.get(m)).clone().css(e).css(h).appendTo(g);wowAnimate(k,{opacity:1},{opacity:0},
d.duration,function(){k.remove()})}wowAnimate(a,{opacity:0},{opacity:1},d.duration,function(){l.trigger("effectEnd");a.remove()})}};

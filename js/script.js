(function(a,b,c){function A(a){R=this,a=a||{};if(a.easing)for(var e in a.easing)z[e]=a.easing[e];V={beforerender:a.beforerender||d,render:a.render||d},W=a.forceHeight!==!1,W&&(Y=a.scale||1);var h=b.getElementsByTagName("*");for(var j=0;j<h.length;j++){var k=h[j],l=[];if(!k.attributes)continue;for(var m=0;m<k.attributes.length;m++){var o=k.attributes[m],p=o.name.match(n);if(p!==null){var q=(p[2]|0)*Y,r={frame:q,props:o.value};l.push(r),p[1]==="-end"&&(r.dataEnd=r.frame,U.push(r)),q>X&&(X=q)}}l.length&&(T.push({element:k,keyFrames:l}),K(k,i))}var s=function(){for(var a=0;a<U.length;a++){var b=U[a];b.frame=X-b.dataEnd}},t;if(W){var u=b.createElement("div"),v=u.style;v.width="1px",v.position="absolute",v.right=v.top=v.zIndex="0",g.appendChild(u),t=function(){v.height=X+f.clientHeight+"px",s()}}else t=function(){X=g.scrollHeight-f.clientHeight,s(),bb=!0};L("resize",t),t();for(var j=0;j<T.length;j++){var w=T[j];w.keyFrames.sort(Q),D(w),F(w)}return h=a=c,C(),R}"use strict";var d=function(){},e=Object.prototype.hasOwnProperty,f=b.documentElement,g=b.body,h="hidden",i="skrollable",j="linear",k=1e3,l=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(b){a.setTimeout(b,1e3/30)},m=/^\s*(.*)\s$/,n=/^data(-end)?-?(\d+)?$/,o=/:|;/g,p=/^([a-z\-]+)\[(\w+)\]$/,q=/-([a-z])/g,r=/(:?\+|-)?[\d.]+/g,s=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,t=/[a-z\-]+-gradient/g,u=/^O|Moz|webkit|ms/,v,w;if(a.getComputedStyle){var x=a.getComputedStyle(g,null);for(var y in x){v=y.match(u)||+y==y&&x[y].match(u);if(v)break}}v=(v||[""])[0],w="-"+v.toLowerCase()+"-",u=c;var z={begin:function(){return 0},end:function(){return 1},linear:function(a){return a},quadratic:function(a){return a*a},cubic:function(a){return a*a*a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5},bounce:function(a){var b;switch(!0){case a<=.5083:b=3;break;case a<=.8489:b=9;break;case a<=.96208:b=27;break;case a<=.99981:b=91;break;default:return 1}return 1-Math.abs(3*Math.cos(a*b*1.028)/b)}};A.prototype.animateTo=function(a,b){b=b||{};var e=P();ab={startTop:R.getScrollTop(),topDiff:a-R.getScrollTop(),targetTop:a,duration:b.duration||k,startTime:e,endTime:e+(b.duration||k),easing:z[b.easing||j],done:b.done||d},ab.topDiff||(ab.done.call(R),ab=c)},A.prototype.setScrollTop=function(b){a.scroll(0,b)},A.prototype.getScrollTop=function(b){return a.pageYOffset||f.scrollTop||g.scrollTop||0},A.prototype.on=function(a,b){V[a]=b||d},A.prototype.off=function(a){V[a]=d};var B=function(a,b){var c=a.keyFrames;if(b<c[0].frame)K(a.element,h);else if(b>=c[c.length-1].frame){M(a.element,h);var d=c[c.length-1],f;for(var g in d.props)e.call(d.props,g)&&(f=I(d.props[g].value),J(a.element,g,f))}else{M(a.element,h);for(var i=0;i<c.length-1;i++)if(b>=c[i].frame&&b<=c[i+1].frame){var j=c[i],k=c[i+1];for(var g in j.props)if(e.call(j.props,g)){var l=(b-j.frame)/(k.frame-j.frame);l=j.props[g].easing(l);var f=H(j.props[g].value,k.props[g].value,l);f=I(f),J(a.element,g,f)}break}}},C=function(){var a=d;if(ab){var b=P();if(b>=ab.endTime)R.setScrollTop(ab.targetTop),a=ab.done,ab=c;else{var e=ab.easing((b-ab.startTime)/ab.duration);R.setScrollTop(ab.startTop+e*ab.topDiff|0)}}_=R.getScrollTop(),_<0&&(_=0);if(bb||$!==_){Z=_>=$?"down":"up",bb=!1;var f={curTop:_,lastTop:$,maxTop:X,direction:Z},g=V.beforerender.call(R,f);if(g!==!1){for(var h=0;h<T.length;h++)B(T[h],_);$=_,V.render.call(R,f)}a.call(R)}l(function(){C()})},D=function(a){for(var b=0;b<a.keyFrames.length;b++){var c=a.keyFrames[b],d=c.props.split(o),e,f,g;c.props={};for(var h=0;h<d.length-1;h+=2)e=d[h],f=d[h+1],g=e.match(p),g!==null?(e=g[1],g=g[2]):g=j,f=f.indexOf("!")?E(f):[f.slice(1)],c.props[e]={value:f,easing:z[g]}}},E=function(a){var b=[];return s.lastIndex=0,a=a.replace(s,function(a){return a.replace(r,function(a){return a/255*100+"%"})}),t.lastIndex=0,a=a.replace(t,function(a){return w+a}),a=a.replace(r,function(a){return b.push(+a),"?"}),b.unshift(a),b},F=function(a){var b={};for(var c=0;c<a.keyFrames.length;c++)G(a.keyFrames[c],b);b={};for(var c=a.keyFrames.length-1;c>=0;c--)G(a.keyFrames[c],b)},G=function(a,b){for(var c in b)e.call(a.props,c)||(a.props[c]=b[c]);for(var c in a.props)b[c]=a.props[c]},H=function(a,b,c){if(a.length!==b.length)throw"Can't interpolate between \""+a[0]+'" and "'+b[0]+'"';var d=[a[0]];for(var e=1;e<a.length;e++)d[e]=a[e]+(b[e]-a[e])*c;return d},I=function(a){var b=1;return a[0].replace(/\?/g,function(){return a[b++]})},J=function(a,b,c){var d=a.style;b=b.replace(q,function(a,b){return b.toUpperCase()}).replace("-","");if(b==="zIndex")d[b]=""+(c|0);else try{d[v+b.slice(0,1).toUpperCase()+b.slice(1)]=c,d[b]=c}catch(e){}if(S.setStyle)for(var f=0;f<S.setStyle.length;f++)S.setStyle[0].call(this,a,b,c)},K=function(a,b){O(a.className).indexOf(O(b))===-1&&(a.className=N(a.className+" "+b))},L=function(b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)},M=function(a,b){a.className=N(O(a.className).replace(O(b)," "))},N=function(a){return a.replace(m,"$1")},O=function(a){return" "+a+" "},P=function(){return+(new Date)},Q=function(a,b){return a.frame-b.frame},R,S={},T=[],U=[],V,W,X=0,Y=1,Z="down",$=-1,_=0,ab,bb;a.skrollr={init:function(a){return R||new A(a)},plugin:function(a,b){S[a]?S[a].push(b):S[a]=[b]},VERSION:"0.3.11"}})(window,document);

$(function() {
	var $window = $(window),
		$body = $('body'),
		scale = 3;

	$(window).resize(function() {
		$('.page').each(function(i, e) {
			var $e = $(e),
				bg = $e.find('.background-image');

			var marginLeft = ($e.width() - bg.width()) / 2,
				marginTop = ($e.height() - bg.height()) / 2;
			$e.css({
				'margin-left': ((marginLeft > 0) ? marginLeft : 0) + 'px',
				'margin-top': ((marginTop > 0) ? marginTop : 0) + 'px'
			});

			var scaleSource = bg.width(),
				scaleFactor = 0.35,
				maxScale = 600,
				minScale = 30; //Tweak these values to taste

			var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:

			if (fontSize > maxScale) fontSize = maxScale;
			if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums

			$e.css('font-size', fontSize + '%');

			$e.find('.wide-as-bg').css('width', bg.width() + 'px');
			$e.find('.tall-as-bg').css('height', bg.height() + 'px');
		});
	}).resize();

	$('.background-image').load(function() {
		$(window).resize();
	});

	$('a').each(function(i, e) {
		var $e = $(e),
			href = $e.attr('href');

		if (href[0] == '#' && $(href).length > 0) {
			var offset = $(href).data('offset');
			$e.click(function(e) {
				e.preventDefault();
				skroll.animateTo(offset*3, {duration: 1000, easing: 'easeIn'});
				return false;
			});
		}
	});

	var skroll = skrollr.init({
		scale: scale,
		easing: {
			easeIn: function(r) { return 1-(1-r)*(1-r)*(1-r)*(1-r); }
		}
	});
});

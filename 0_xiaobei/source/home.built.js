require=(function e(h,j,l){function m(a,c){if(!j[a]){if(!h[a]){var d=typeof require=="function"&&require;
if(!c&&d){return d(a,!0)}if(i){return i(a,!0)}throw new Error("Cannot find module '"+a+"'")
}var b=j[a]={exports:{}};h[a][0].call(b.exports,function(g){var f=h[a][1][g];return m(f?f:g)
},b,b.exports,e,h,j,l)}return j[a].exports}var i=typeof require=="function"&&require;
for(var k=0;k<l.length;k++){m(l[k])}return m})({1:[function(n,m,i){var l=n("./ac-browser/BrowserData");
var j=/applewebkit/i;var k=n("./ac-browser/IE");var o=l.create();o.isWebKit=function(b){var a=b||window.navigator.userAgent;
return a?!!j.test(a):false};o.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(o.name==="IE"){o.IE={documentMode:k.getDocumentMode()}}m.exports=o},{"./ac-browser/BrowserData":2,"./ac-browser/IE":3}],2:[function(g,k,h){var j=g("./data");
function i(){}i.prototype={__getBrowserVersion:function(d,c){if(!d||!c){return}var a=j.browser.filter(function(m){return m.identity===c
})[0];var f=a.versionSearch||c;var b=d.indexOf(f);if(b>-1){return parseFloat(d.substring(b+f.length+1))
}},__getName:function(a){return this.__getIdentityStringFromArray(a)},__getIdentity:function(a){if(a.string){return this.__matchSubString(a)
}else{if(a.prop){return a.identity}}},__getIdentityStringFromArray:function(d){for(var a=0,c=d.length,b;
a<c;a++){b=this.__getIdentity(d[a]);if(b){return b}}},__getOS:function(a){return this.__getIdentityStringFromArray(a)
},__getOSVersion:function(d,a){if(!d||!a){return}var b=j.os.filter(function(l){return l.identity===a
})[0];var m=b.versionSearch||a;var c=new RegExp(m+" ([\\d_\\.]+)","i");var f=d.match(c);
if(f!==null){return f[1].replace(/_/g,".")}},__matchSubString:function(b){var c=b.subString;
if(c){var a=c.test?!!c.test(b.string):b.string.indexOf(c)>-1;if(a){return b.identity
}}}};i.create=function(){var b=new i();var a={};a.name=b.__getName(j.browser);a.version=b.__getBrowserVersion(j.versionString,a.name);
a.os=b.__getOS(j.os);a.osVersion=b.__getOSVersion(j.versionString,a.os);return a
};k.exports=i},{"./data":4}],3:[function(d,g,f){g.exports={getDocumentMode:function(){var a;
if(document.documentMode){a=parseInt(document.documentMode,10)}else{a=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){a=7
}}}return a}}},{}],4:[function(d,g,f){g.exports={browser:[{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],5:[function(d,g,f){g.exports.DOMEmitter=d("./ac-dom-emitter/DOMEmitter")},{"./ac-dom-emitter/DOMEmitter":6}],6:[function(h,m,i){var k;
var l=h("ac-event-emitter").EventEmitter;function j(a){if(a===null){return}this.el=a;
this._bindings={};this._eventEmitter=new l()}k=j.prototype;k._parseEventNames=function(a){if(!a){return[a]
}return a.split(" ")};k._onListenerEvent=function(a,b){this.trigger(a,b,false)};
k._setListener=function(a){this._bindings[a]=this._onListenerEvent.bind(this,a);
this._addEventListener(a,this._bindings[a])};k._removeListener=function(a){this._removeEventListener(a,this._bindings[a]);
delete this._bindings[a]};k._addEventListener=function(b,a,c){if(this.el.addEventListener){this.el.addEventListener(b,a,c)
}else{if(this.el.attachEvent){this.el.attachEvent("on"+b,a)}else{target["on"+b]=a
}}return this};k._removeEventListener=function(b,a,c){if(this.el.removeEventListener){this.el.removeEventListener(b,a,c)
}else{this.el.detachEvent("on"+b,a)}return this};k.on=function(c,a,b){c=this._parseEventNames(c);
c.forEach(function(d,f,g){if(!this.has(g)){this._setListener(g)}this._eventEmitter.on(g,d,f)
}.bind(this,a,b));return this};k.off=function(d,a,b){var c=Array.prototype.slice.call(arguments,0);
d=this._parseEventNames(d);d.forEach(function(q,r,f,g){if(f.length===0){this._eventEmitter.off();
var s;for(s in this._bindings){if(this._bindings.hasOwnProperty(s)){this._removeListener(s)
}}return}this._eventEmitter.off(g,q,r);if(!this.has(g)){this._removeListener(g)
}}.bind(this,a,b,c));return this};k.once=function(c,a,b){c=this._parseEventNames(c);
c.forEach(function(d,f,g){if(!this.has(g)){this._setListener(g)}this._eventEmitter.once.call(this,g,d,f)
}.bind(this,a,b));return this};k.has=function(a){if(this._eventEmitter&&this._eventEmitter.has(a)){return true
}return false};k.trigger=function(c,b,a){c=this._parseEventNames(c);c.forEach(function(f,d,g){this._eventEmitter.trigger(g,f,d)
}.bind(this,b,a));return this};k.destroy=function(){this.off();this.el=this._eventEmitter=this._bindings=null
};m.exports=j},{"ac-event-emitter":false}],7:[function(g,j,h){var k={};k.addEventListener=function(a,c,b,d){if(a.addEventListener){a.addEventListener(c,b,d)
}else{if(a.attachEvent){a.attachEvent("on"+c,b)}else{a["on"+c]=b}}return a};k.dispatchEvent=function(a,b){if(document.createEvent){a.dispatchEvent(new CustomEvent(b))
}else{a.fireEvent("on"+b,document.createEventObject())}return a};k.removeEventListener=function(a,c,b,d){if(a.removeEventListener){a.removeEventListener(c,b,d)
}else{a.detachEvent("on"+c,b)}return a};var i=/^(webkit|moz|ms|o)/i;k.addVendorPrefixEventListener=function(a,c,b,d){if(i.test(c)){c=c.replace(i,"")
}else{c=c.charAt(0).toUpperCase()+c.slice(1)}if(/WebKit/i.test(window.navigator.userAgent)){return k.addEventListener(a,"webkit"+c,b,d)
}else{if(/Opera/i.test(window.navigator.userAgent)){return k.addEventListener(a,"O"+c,b,d)
}else{if(/Gecko/i.test(window.navigator.userAgent)){return k.addEventListener(a,c.toLowerCase(),b,d)
}else{c=c.charAt(0).toLowerCase()+c.slice(1);return k.addEventListener(a,c,b,d)
}}}};k.removeVendorPrefixEventListener=function(a,c,b,d){if(i.test(c)){c=c.replace(i,"")
}else{c=c.charAt(0).toUpperCase()+c.slice(1)}k.removeEventListener(a,"webkit"+c,b,d);
k.removeEventListener(a,"O"+c,b,d);k.removeEventListener(a,c.toLowerCase(),b,d);
c=c.charAt(0).toLowerCase()+c.slice(1);return k.removeEventListener(a,c,b,d)};k.stop=function(a){if(!a){a=window.event
}if(a.stopPropagation){a.stopPropagation()}else{a.cancelBubble=true}if(a.preventDefault){a.preventDefault()
}a.stopped=true;a.returnValue=false};k.target=function(a){return(typeof a.target!=="undefined")?a.target:a.srcElement
};j.exports=k},{}],8:[function(d,g,f){f.Clock=d("./ac-animation-sequencer/Clock");
f.PlayerMonitor=d("./ac-animation-sequencer/PlayerMonitor");f.Timeline=d("./ac-animation-sequencer/Timeline");
f.Tween=d("./ac-animation-sequencer/Tween");f.BasicPlayer=d("./ac-animation-sequencer/player/BasicPlayer");
f.MediaPlayer=d("./ac-animation-sequencer/player/MediaPlayer");f.Pause=d("./ac-animation-sequencer/controllers/Pause");
f.MediaGroup=d("./ac-animation-sequencer/controllers/MediaGroup");f.BaseClip=d("./ac-animation-sequencer/clip/BaseClip");
f.CompositeClip=d("./ac-animation-sequencer/clip/CompositeClip");f.TimedClip=d("./ac-animation-sequencer/clip/TimedClip");
f.TweenClip=d("./ac-animation-sequencer/clip/TweenClip");f.ElementClip=d("./ac-animation-sequencer/clip/ElementClip");
f.VideoClip=d("./ac-animation-sequencer/clip/VideoClip");f.ReversibleVideo=d("./ac-animation-sequencer/adapters/ReversibleVideo")
},{"./ac-animation-sequencer/Clock":9,"./ac-animation-sequencer/PlayerMonitor":10,"./ac-animation-sequencer/Timeline":11,"./ac-animation-sequencer/Tween":12,"./ac-animation-sequencer/adapters/ReversibleVideo":15,"./ac-animation-sequencer/clip/BaseClip":16,"./ac-animation-sequencer/clip/CompositeClip":17,"./ac-animation-sequencer/clip/ElementClip":18,"./ac-animation-sequencer/clip/TimedClip":19,"./ac-animation-sequencer/clip/TweenClip":20,"./ac-animation-sequencer/clip/VideoClip":21,"./ac-animation-sequencer/controllers/MediaGroup":22,"./ac-animation-sequencer/controllers/Pause":23,"./ac-animation-sequencer/player/BasicPlayer":24,"./ac-animation-sequencer/player/MediaPlayer":25}],9:[function(g,k,h){function i(){this._currentTimeMS=0;
this._playbackRate=1;this._paused=true;this._resetStartTime()}var j=i.prototype;
j._updateCurrentTime=function(){var a,b=Date.now();if(this._paused){a=0}else{a=(b-this._startTime)
}this._currentTimeMS+=(a*this._playbackRate);this._startTime=b};j._resetStartTime=function(){this._startTime=Date.now()
};j.play=function(){this._resetStartTime();this._paused=false;return this};j.pause=function(){this._updateCurrentTime();
this._paused=true;return this};j.isPaused=function(){return this._paused};j.getCurrentTime=function(){this._updateCurrentTime();
return this._currentTimeMS/1000};j.setCurrentTime=function(a){if(isNaN(a)){return
}this._resetStartTime();this._currentTimeMS=a*1000};j.getPlaybackRate=function(){return this._playbackRate
};j.setPlaybackRate=function(a){if(isNaN(a)){return}this._playbackRate=a};k.exports=i
},{}],10:[function(o,m,j){var k=o("ac-event-emitter").EventEmitter;var i=o("./vendor/utils");
function n(b,a,c){c=(Array.isArray(a)?c:a)||{};a=(Array.isArray(a)?a:[]);this._player=b;
this._isMonitoring=true;this._times=[0];this._previous=0;this._currentTimeIndex=0;
this._options=i.defaults({active:true,readyEvent:"canplaythrough",autoInit:false},c);
if(this._options.autoInit){this.addPlayerListener(this._options.readyEvent,this._init.bind(this,a))
}}var l=n.prototype=new k();l.addPlayerListener=function(a,b){if(typeof this._player.addEventListener==="function"){this._player.addEventListener(a,b)
}else{if(typeof this._player.on==="function"){this._player.on(a,b)}}};l._init=function(a){if(this._initialized){return
}this.addTime(this._player.duration);if(a&&a.length){a.forEach(this.addTime.bind(this))
}this._resetNextTimes();this._attachEvents();if(this._options.active){this._listen()
}this.trigger("ready");this._initialized=true};l._attachEvents=function(){this.addPlayerListener("play",this._handlePlay.bind(this));
if(!this._options.active){this.addPlayerListener("timeupdate",this._listen.bind(this))
}this.addPlayerListener("seeking",this._handleSeek.bind(this));this.addPlayerListener("ratechange",this._handleRateChange.bind(this))
};l.addTime=function(b,a){b=parseFloat(b);if(isNaN(b)){throw new TypeError('Invalid time "'+b+'", expected Number"')
}if(this._times.indexOf(b)===-1){this._times.push(b);this._times.sort(function(c,d){return c-d
})}if(typeof a==="function"){this.on("time:"+b,a)}this._resetNextTimes()};l._handleSeek=function(){var a=this._player.currentTime;
var b=this._times.indexOf(a);this._currentTimeIndex=(b!==-1)?b:this._calcCurrentTimeIndex(a);
this._resetNextTimes()};l._handlePlay=function(){this._resetNextTimes();this._listen()
};l._handleRateChange=function(){var b=this._player.currentTime;var a=b===this._player.duration;
var c=this._times.indexOf(b)!==-1;this._currentTimeIndex=(a||c)?this._currentTimeIndex:this._calcCurrentTimeIndex(b);
this._resetNextTimes()};l._resetNextTimes=function(){var a=this._calcNextTimeIndex(this._currentTimeIndex);
if(i.isNum(a)){this._nextTimeIndex=a;this._nextTimePoint=this._times[a]}};l._calcCurrentTimeIndex=function(a){var d,b,c,f;
c=this._calcTimeIndices(a);b=c[0];d=c[1];f=(this._forwards())?b:d;return(this._validTimeIndex(f))?f:null
};l._validTimeIndex=function(a){return(0<=a&&a<=this._times.length-1)};l._calcNextTimeIndex=function(b){var a=b+((this._forwards())?1:-1);
return(this._validTimeIndex(a))?a:null};l._calcTimeIndices=function(a){var b=this._times.reduce(function(d,c,f){return(a>=this._times[d+1])?f:d
}.bind(this),0);return[b,b+1]};l._reachedNextTime=function(a){var b=this._forwards();
var d=this._nextTimePoint;var c=!this._player.paused||a===0||a===this._player.duration;
var g=b&&a>=d;var f=!b&&a<=d;return c&&(g||f)};l._forwards=function(){return this._player.playbackRate>0
};l._listen=function(){var b=this._player.currentTime;var c=this._previous;var a=this._reachedNextTime(b);
if(a){this._enterTimePoint(c)}this._previous=b;if(this._options.active&&!this._player.paused){window.requestAnimationFrame(this._listen.bind(this))
}};l._enterTimePoint=function(b){var c=this._calcNextTimeIndex(this._currentTimeIndex);
if(!i.isNum(c)){return}var a=this._times[c];this.trigger("time:"+a,{previous:b,next:this._player.currentTime,requested:a});
this._currentTimeIndex=c;this._resetNextTimes()};m.exports=n},{"./vendor/utils":28,"ac-event-emitter":false}],11:[function(j,q,k){var l=j("./clip/CompositeClip");
var m=j("./clip/TimedClip");var n="Invalid duration for the following clip; must be number greater than or equal to zero (0)";
var o='Invalid clip type: "';var p={clipTypes:{Tween:j("./clip/TweenClip"),Element:j("./clip/ElementClip")},create:function(a){if(this.validTimeline(a)){return this._buildTimeline(a)
}if(this.debug&&console&&typeof console.warn==="function"){console.warn("Timeline: invalid timeline data:",a)
}return null},validTimeline:function(a){return Array.isArray(a)&&a.every(this._validClip.bind(this))
},_getClipType:function(a){if(typeof a==="string"&&this.clipTypes[a]){a=this.clipTypes[a]
}if(this._isValidClipType(a)){return a}return false},_isValidClipType:function(a){return(a&&a.create)
},_validate:function(){return true},_buildTimeline:function(a){var b=a.map(this._createTimedClip.bind(this));
return new l(b)},_createTimedClip:function(a){var b=this._getClipType(a.clip);return new m(b.create(a),a)
},_validClip:function(a){var b;var d=this._getClipType(a.clip);var c=this._validDuration(a);
if(!d){throw new TypeError(o+a.clip+'"\n\n'+JSON.stringify(a))}b=d.validate||this._validate;
return c&&b(a)},_validDuration:function(b){var a=b.duration;var c=typeof a==="number"&&a>0;
if(!c){throw new TypeError(n+"\n\n"+JSON.stringify(b))}return c}};q.exports=p},{"./clip/CompositeClip":17,"./clip/ElementClip":18,"./clip/TimedClip":19,"./clip/TweenClip":20}],12:[function(t,u,r){var n=t("./vendor/KeySpline");
var p=t("./vendor/EasingFunctions");var l="Easing option must be one of: String, Array[Number:4], or Function. Given: ";
var s="KeySpline easing expected an array of exactly four (4) numbers, given: ";
var m=t("./vendor/utils");function o(a){a=a||{};m.defaultProps(this,o.defaults,a);
this._easingFunction=this._createEasing(this.easing)}o.defaults={from:0,to:1,duration:1,easing:"linear"};
var q=o.prototype;q._createEasing=function(b){var a;if(typeof b==="string"){a=this._createPredefinedEasing(b)
}else{if(Array.isArray(b)){a=this._createBezierEasing(b)}else{if(typeof b==="function"){a=b
}else{throw new TypeError(l+b)}}}return a};q._createBezierEasing=function(b){var d;
var c=b;var a=b.every(function(f){return(typeof f==="number")});if(b.length!==4||!a){throw new TypeError(s+b)
}d=new n(c[0],c[1],c[2],c[3]);return function(i,f,g,h){return f+d.get(i/h)*g}};
q._createPredefinedEasing=function(c){var a=p[c];var b="";if(!a){b+='Easing function "'+a;
b+='" not recognized among the following: ';b+=Object.keys(p).join(", ");throw new Error(b)
}return a};q._getInterpolatedValue=function(b,c,d,a){return this._easingFunction(b,c,d,a)
};q.valueAtLocation=function(a){if(a<0||a>1){return null}var b=this.duration*a;
return this.valueAtTime(b)};q.valueAtPercent=function(a){if(a<0||a>100){return null
}return this.valueAtLocation(a/100)};q.valueAtTime=function(a){if(a<0||a>this.duration){return null
}return this._getInterpolatedValue(a,this.from,this.to-this.from,this.duration)
};u.exports=o},{"./vendor/EasingFunctions":26,"./vendor/KeySpline":27,"./vendor/utils":28}],13:[function(k,j,g){function h(a){this._media=a
}var i=h.prototype;i.on=function(){this._media.addEventListener.apply(this._media,arguments)
};i.off=function(){this._media.removeEventListener.apply(this._media,arguments)
};i.getCurrentTime=function(){return this._media.currentTime};i.setCurrentTime=function(a){this._media.currentTime=a
};i.getDuration=function(){return this._media.duration};i.getPlaybackRate=function(){return this._media.playbackRate
};i.setPlaybackRate=function(a){this._media.playbackRate=a};j.exports=h},{}],14:[function(m,l,i){if(typeof Object.defineProperties!=="function"){return
}var j=m("ac-event-emitter").EventEmitter;function h(a){this._player=a}var k=h.prototype=new j();
k.addEventListener=function(){this._player.on.apply(this._player,arguments)};k.removeEventListener=function(){this._player.on.apply(this._player,arguments)
};k.play=function(){this._player.play.apply(this._player,arguments)};k.pause=function(){this._player.pause.apply(this._player,arguments)
};Object.defineProperties(h.prototype,{paused:{get:function(){return this._player.isPaused()
},set:function(a){this._player.setPaused(a)}},currentTime:{get:function(){return this._player.getCurrentTime()
},set:function(a){this._player.setCurrentTime(a)}},duration:{get:function(){return this._player.getDuration()
}},playbackRate:{get:function(){return this._player.getPlaybackRate()},set:function(a){this.trigger("ratechange",{rate:a});
this._player.setPlaybackRate(a)}}});l.exports=h},{"ac-event-emitter":false}],15:[function(h,m,i){if(typeof Object.defineProperties!=="function"){return
}var k=h("ac-event-emitter").EventEmitter;function j(a){this._media=a;this._lastTime=null;
j.passThroughEvents.forEach(this.passThroughEvent.bind(this));j.interceptedEvents.forEach(this.interceptEvent.bind(this))
}j.interceptedEvents=["seeking","play"];j.passThroughEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","playing","progress","ratechange","seeked","suspend","timeupdate","volumechange","waiting"];
var l=j.prototype=new k();l.addEventListener=function(b){var a=j.passThroughEvents;
if(a.indexOf(b)>-1){this._media.addEventListener.apply(this._media,arguments)}else{this.on.apply(this,arguments)
}};l.removeEventListener=function(b){var a=j.passThroughEvents;if(a.indexOf(b)>-1){this._media.removeEventListener.apply(this._media,arguments)
}else{this.off.apply(this,arguments)}};l.passThroughEvent=function(a){this._media.addEventListener(a,this._passThrough.bind(this))
};l.interceptEvent=function(b){var a=this["_on"+b];if(typeof a!=="undefined"){this._media.addEventListener(b,a.bind(this))
}};l._passThrough=function(a){this.trigger(a.type,a)};l._onseeking=function(){if(!this._playing){this.trigger("seeking")
}};l._onplay=function(){this.trigger("play")};l.play=function(){if(this.playbackRate<0){this._playing=true;
this._lastTime=null;window.requestAnimationFrame(this._update.bind(this));this.trigger("play")
}else{this._media.play()}};l.load=function(){this._media.load()};l._stop=function(a){a.preventDefault();
a.stopPropagation()};l._update=function(b){var a=b-(this._lastTime||b);var c=this._media.currentTime+((a*this.playbackRate)/1000);
if(c<=0){this._media.currentTime=0;this._playing=false;this.trigger("returned",{type:"returned"})
}else{this._media.currentTime=c;this.trigger("timeupdate",{type:"timeupdate"})}this._lastTime=b;
if(this._playing){window.requestAnimationFrame(this._update.bind(this))}};l.pause=function(){this._playing=false;
this._media.pause()};Object.defineProperties(j.prototype,{currentTime:{get:function(){return this._media.currentTime
},set:function(a){this._media.currentTime=a}},duration:{get:function(){return this._media.duration
}},buffered:{get:function(){return this._media.buffered}},playbackRate:{get:function(){return this._media.playbackRate
},set:function(a){this._media.playbackRate=a}},paused:{get:function(){return !this._playing&&this._media.paused
},set:function(a){this._media.paused=a}}});m.exports=j},{"ac-event-emitter":false}],16:[function(v,w,t){var q=v("../vendor/KeySpline");
var p=v("ac-style-renderer").LogRenderer;var r=v("../vendor/EasingFunctions");var m="Easing option must be one of: String, Array[Number:4], or Function. Given: ";
var u="KeySpline easing expected an array of exactly four (4) numbers, given: ";
var n=v("ac-event-emitter").EventEmitter;function o(b,a){this.options=a||{};this._renderer=this.options.renderer||p;
this._duration=b;this._currentTime=0;this._easingFunction=this._createEasing(this.options.easing||o.DEFAULT_EASING)
}o.DEFAULT_EASING="linear";var s=o.prototype=new n();s._createEasing=function(a){var b;
if(typeof a==="string"){b=this._createPredefinedEasing(a)}else{if(Array.isArray(a)){b=this._createBezierEasing(a)
}else{if(typeof a==="function"){b=a}else{throw new TypeError(m+a)}}}return b};s._createBezierEasing=function(a){var c;
var b=a;var d=a.every(function(f){return(typeof f==="number")});if(a.length!==4||!d){throw new TypeError(u+a)
}c=new q(b[0],b[1],b[2],b[3]);return function(i,f,g,h){return c.get(i/h)*g}};s._createPredefinedEasing=function(b){var c=r[b];
var a="";if(!c){a+='Easing function "'+c;a+='" not recognized among the following: ';
a+=Object.keys(r).join(", ");throw new Error(a)}return c};s._getInterpolatedValue=function(a,b,c,d){return this._easingFunction(a,b,c,d)
};s.getDuration=function(){return this._duration};s.getCurrentTime=function(){return this._currentTime
};s.setCurrentTime=function(a){this._currentTime=a;this.update()};s.getPlaybackRate=function(){return this._playbackRate
};s.setPlaybackRate=function(a){this._playbackRate=a};s.update=function(){};w.exports=o
},{"../vendor/EasingFunctions":26,"../vendor/KeySpline":27,"ac-event-emitter":false,"ac-style-renderer":56}],17:[function(h,m,i){var j=h("./TimedClip");
function k(a){if(a&&a.length){this._clips=a.map(this._ensureTimedClip);this._duration=this._calcDuration()
}}var l=k.prototype;l._calcDuration=function(b){b=b||this._clips;var a=b.reduce(function(d,c){var f=c.getStartDelay()+c.getDuration();
return(f>d)?f:d},0);return a};l._ensureTimedClip=function(a){if(!(a instanceof j)){a=new j(a)
}return a};l._getLocalTime=function(b,a){return a-b.getStartDelay()};l._getEligibleClips=function(){return this._clips
};l.addClip=function(a){a=this._ensureTimedClip(a);this._clips.push(a);this._duration=this._calcDuration()
};l.on=function(){var a=arguments;this._clips.forEach(function(b){b.on.apply(b,a)
})};l.off=function(){var a=arguments;this._clips.forEach(function(b){b.off.apply(b,a)
})};l.trigger=function(){var a=arguments;this._clips.forEach(function(b){b.trigger.apply(b,a)
})};l.setEasingDirection=function(a){this._clips.forEach(function(b){b.setEasingDirection(a)
})};l.getDuration=function(){return this._duration};l.getCurrentTime=function(){return this._currentTime
};l.setCurrentTime=function(a,b){var c=this._getEligibleClips();if(!c||!c.length){return
}c.forEach(function(f){var d=this._getLocalTime(f,a);f.setCurrentTime(d,b)}.bind(this))
};l.getPlaybackRate=function(){return this._playbackRate};l.setPlaybackRate=function(a){if(isNaN(a)){return
}this._playbackRate=a};m.exports=k},{"./TimedClip":19}],18:[function(s,u,r){var m=s("../vendor/utils");
var o=s("../Tween");var l=s("./BaseClip");var n=s("ac-style-renderer").InlineStyleRenderer;
var t="Invalid element or selector: ";function p(a){a=m.defaults(p.DEFAULTS,a);
this.props=a.props||[];if(a.selector||typeof a.element==="string"){this.el=document.querySelector(a.selector||a.element)
}else{this.el=a.element}if(!this.el||!this.el.nodeType||this.el.nodeType!==1){throw new TypeError(t+a.element)
}if(!a.renderer){this.renderer=n}l.call(this,a.duration,a);this._initProps()}p.DEFAULTS={props:[],selector:null,element:".default_selector",renderer:n,duration:1};
p.create=function(a){return new p(a)};p.validate=function(a){var b="selector" in a||"element" in a;
return b};var q=p.prototype=new l();q._initProps=function(){this.props.forEach(function(a){a.tween=this._createTween({easing:a.easing||l.DEFAULT_EASING,from:a.from,to:a.to,duration:this.getDuration()})
}.bind(this))};q._createTween=function(a){return new o(a)};q.update=function(a){if(this.props.length<1){return
}var b=this.props.map(function(c){var f=c.tween;var g=c.units;var d=f.valueAtTime(a);
d=(g?(d+g):d);return{prop:c.property,value:d}});this._renderer.render(this.el,b);
this.trigger("tween_update",{el:this.el,context:b})};q.getCurrentTime=function(){return this._currentTime
};q.setCurrentTime=function(a){if(a<0||a>this.getDuration()){return}this._currentTime=a;
this.update(this._currentTime)};u.exports=p},{"../Tween":12,"../vendor/utils":28,"./BaseClip":16,"ac-style-renderer":56}],19:[function(m,l,i){var h=m("../vendor/utils");
function j(a,b){b=h.defaults(j.DEFAULTS,(b||{}));this._clip=a;this._startDelay=b.startDelay||0;
this._loop=b.loop||false;this._fill=b.fill||"none"}j.DEFAULTS={fill:"none",loop:false,startDelay:0};
j.FILL_MODES=["none","forwards","backwards","both"];var k=j.prototype;k._show=function(){if(this._isHidden){this._isHidden=false;
this._clip.show()}};k._applyFill=function(o){if(this.getFill()==="none"){return
}var a=this.getDuration();var c=o>a;var d=this.getFill();var f=c&&d==="forwards";
var g=!c&&d==="backwards";var b=d==="both"||f||g;if(b){this._clip.setCurrentTime((c)?a:0)
}};k._hide=function(){if(!this._isHidden){this._isHidden=true;this._clip.hide()
}};k.setEasingDirection=function(a){return this._clip.setEasingDirection(a)};k.on=function(){this._clip.on.apply(this._clip,arguments)
};k.off=function(){this._clip.off.apply(this._clip,arguments)};k.trigger=function(){this._clip.trigger.apply(this._clip,arguments)
};k.getCurrentTime=function(){return this._currentTime};k.setCurrentTime=function(a,b){if(a<0||a>this.getDuration()){this._clip.inEffect=false;
this._applyFill(a)}else{this._clip.inEffect=true;this._clip.setCurrentTime(a,b)
}};k.getDuration=function(){return this._clip.getDuration()};k.getStartDelay=function(){return this._startDelay
};k.setStartDelay=function(a){if(h.isNum(a)){this._startDelay=a}};k.getLoop=function(){return this._loop
};k.setLoop=function(a){this._loop=!!a};k.getFill=function(){return this._fill};
k.setFill=function(a){var b=j.FILL_MODES;if(b.indexOf(a.toLowerCase())!==-1){this._fill=a
}};l.exports=j},{"../vendor/utils":28}],20:[function(m,l,h){var j=m("./BaseClip");
function i(a,b,c){if(typeof a==="object"){c=a;a=c.duration;b=c.props}j.call(this,a,c);
this.props=b||[];this._initializePropEasing();this._lastComputedTime=0;this._easingDirection=1
}i.create=function(a){return new i(a.duration,a.props)};i.validate=function(a){return(Array.isArray(a.props)&&a.props.length>0)
};i.DEFAULT_EASING="linear";var k=i.prototype=new j();k._initializePropEasing=function(){this.props.forEach(function(a){a.easing=this._createEasing(a.easing||j.DEFAULT_EASING)
}.bind(this))};k.setEasingDirection=function(a){this._easingDirection=a};k.update=function(a){var c=(this._easingDirection===-1);
if(this.options.reverseEase!==true){c=false}var b=this.getDuration(),d={};if(this.props.length<1){return
}this.props.forEach(function(o){var f;var g=o.property;if(c){f=o.easing(this.getDuration()-a,o.to,-(o.to-o.from),b)
}else{f=o.easing(a,o.from,(o.to-o.from),b)}d[g]=f}.bind(this));this.trigger("tween_update",d)
};k.getCurrentTime=function(){return this._currentTime};k.setCurrentTime=function(a){if(a<0){a=0
}if(a>this.getDuration()){a=this.getDuration()}if(a<0||a>this.getDuration()){return
}this._currentTime=a;this.update(this._currentTime)};l.exports=i},{"./BaseClip":16}],21:[function(k,j,g){var h=k("../adapters/MediaAsClip");
function i(a,b){if(console){console.warn("VideoClip deprecated, please use adapters/MediaAsClip.")
}return new h(a,b)}j.exports=i},{"../adapters/MediaAsClip":13}],22:[function(q,p,k){if(typeof Object.defineProperties!=="function"){return
}var m=q("ac-event-emitter").EventEmitter;var l=q("../Clock");var j=q("../vendor/utils");
function n(){var a=[].slice.call(arguments);this._mediaElements=a.filter(this._validateMediaElements);
this._clock=new l()}var o=n.prototype=new m();o.addEventListener=o.on;o.removeEventListener=o.off;
o._validateMediaElements=function(a){return(typeof a.play==="function")&&(typeof a.pause==="function")
};o._updateCurrentTime=function(a){this._lastTime=this._clock.currentTime;this._mediaElements.forEach(function(b){b.currentTime=a
})};o._isValidTime=function(a){return(0<=a)&&(a<=this.duration)};o.play=function(){this.paused=false;
this._clock.play();j.invoke(this._mediaElements,"play");this.trigger("play")};o.pause=function(){this.paused=true;
this._clock.pause();j.invoke(this._mediaElements,"pause");this.trigger("pause")
};Object.defineProperties(n.prototype,{paused:{get:function(){return this._paused
},set:function(a){this._paused=!!a}},currentTime:{get:function(){return this._clock.getCurrentTime()
},set:function(a){if(this._isValidTime(a)){this.trigger("seeking",{time:a});this._updateCurrentTime(a);
this.trigger("seeked",{time:a})}}},playbackRate:{get:function(){return this._clock.getPlaybackRate()
},set:function(a){if(!j.isNum(a)){return}this._clock.setPlaybackRate(a);this._mediaElements.forEach(function(b){b.playbackRate=a
});this.trigger("ratechange",{rate:a})}},duration:{get:function(){return this._duration
},set:function(a){this._duration=a}}});p.exports=n},{"../Clock":9,"../vendor/utils":28,"ac-event-emitter":false}],23:[function(i,n,j){var k=i("ac-event-emitter").EventEmitter;
var o=i("../PlayerMonitor");function m(a,c,b){b=b||{};this._player=a;this._monitor=new o(this._player,b);
this._monitor.on("ready",this._initPauses.bind(this,c));this._previousPauseIndex=0;
this._player.addEventListener("play",this._exitPause.bind(this),false)}var l=m.prototype=new k();
l._initPauses=function(a){this._pauses=this._processPauses(a);this._attachPauses(this._pauses)
};l._processPauses=function(a){a=a.filter(function(b){return(0<b)&&(b<this._player.duration)
}.bind(this));a=a.sort(function(b,c){return b-c});if(a[0]!==0){a.unshift(0)}if(a[a.length-1]!==this._player.duration){a.push(this._player.duration)
}return a};l._attachPauses=function(a){a.forEach(function(b){this._monitor.addTime(b,this._enterPause.bind(this))
}.bind(this))};l._enterPause=function(a){var c=a.requested;var d=this._previousPauseIndex;
var b=this._pauses.indexOf(c);if(d===b){return}this._atPausePoint=true;this._player.pause();
this._player.currentTime=c;this.trigger("pauseenter",{from:d,to:b});this._previousPauseIndex=b
};l._exitPause=function(){var b=this._player.currentTime;var c=this._forwards();
var a=c&&b===this._player.duration;var d=!c&&b===0;if(this._atPausePoint&&!(a||d)){this._atPausePoint=false;
this.trigger("pauseexit",{from:this._previousPauseIndex,to:this._calcNextPauseIndex()})
}};l._forwards=function(){return this._player.playbackRate>0};l._calcNextPauseIndex=function(){var b=this._previousPauseIndex;
var a=this._forwards();return b+((a)?1:-1)};n.exports=m},{"../PlayerMonitor":10,"ac-event-emitter":false}],24:[function(p,o,j){var m=p("ac-event-emitter").EventEmitter;
var l=p("../Clock");var q=p("../adapters/PlayerAsMedia");function k(a,b){b=b||{};
if(!a){throw new TypeError("BasicPlayer: Invalid clip provided",a)}this._clip=a;
this._paused=true;this.setClock(b.clock||new l());window.setTimeout(this._triggerStart.bind(this),0)
}var n=k.prototype=new m();n.addEventListener=n.on;n.removeEventListener=n.off;
n.play=function(){this._paused=false;this._clock.play();this._update();this.trigger("play")
};n.pause=function(){this.setPaused(true);this._clock.pause();this.trigger("pause")
};n._triggerStart=function(){this.trigger("canplay");this.trigger("canplaythrough")
};n._updateCurrentTime=function(a){this._clock.setCurrentTime(a);this._lastTime=this._clip.setCurrentTime(a)
};n._update=function(){var a=this._clock.getCurrentTime();var g=this.getDuration();
var b=this._clock.getPlaybackRate();var c=b>0;var f=c&&a>=g;var d=!c&&a<=0;if(f||d){a=(f)?g:0;
this.pause();this._updateCurrentTime(a)}this.trigger("timeupdate",{previous:this._lastTime,time:a});
if(f){this.trigger("ended")}if(d){this.trigger("returned")}if(!this.isPaused()){this._updateCurrentTime(a);
window.requestAnimationFrame(this._update.bind(this))}};n._isValidTime=function(a){return(0<=a)&&(a<=this.getDuration())
};n.asMedia=function(){return new q(this)};n.isPaused=function(){return this._paused
};n.setPaused=function(a){this._paused=!!a};n.getCurrentTime=function(){return this._clock.getCurrentTime()
};n.setCurrentTime=function(a){if(this._isValidTime(a)){this.trigger("seeking",{time:a});
this._updateCurrentTime(a);this.trigger("seeked",{time:a})}};n.getPlaybackRate=function(){return this._clock.getPlaybackRate()
};n.setPlaybackRate=function(a){this._clock.setPlaybackRate(a);this.trigger("ratechange",{rate:a})
};n.getDuration=function(){return this._clip.getDuration()};n.setClock=function(a){this._clock=a
};n.getClock=function(){return this._clock};o.exports=k},{"../Clock":9,"../adapters/PlayerAsMedia":14,"ac-event-emitter":false}],25:[function(j,i,k){var g=j("./BasicPlayer");
function h(b,c){var a=new g(b,c);if(console){console.warn("MediaPlayer module deprecated, please use adapters/PlayerAsMedia or #toMedia method on instances of BasicPlayer")
}return a.asMedia()}i.exports=h},{"./BasicPlayer":24}],26:[function(ac,ap,M){var Q={linear:function V(c,a,d,b){return d*c/b+a
},easeInQuad:function ag(c,a,d,b){return d*(c/=b)*c+a},easeOutQuad:function ar(c,a,d,b){return -d*(c/=b)*(c-2)+a
},easeInOutQuad:function O(c,a,d,b){if((c/=b/2)<1){return d/2*c*c+a}return -d/2*((--c)*(c-2)-1)+a
},easeInCubic:function W(c,a,d,b){return d*(c/=b)*c*c+a},easeOutCubic:function al(c,a,d,b){return d*((c=c/b-1)*c*c+1)+a
},easeInOutCubic:function am(c,a,d,b){if((c/=b/2)<1){return d/2*c*c*c+a}return d/2*((c-=2)*c*c+2)+a
},easeInQuart:function ak(c,a,d,b){return d*(c/=b)*c*c*c+a},easeOutQuart:function N(c,a,d,b){return -d*((c=c/b-1)*c*c*c-1)+a
},easeInOutQuart:function S(c,a,d,b){if((c/=b/2)<1){return d/2*c*c*c*c+a}return -d/2*((c-=2)*c*c*c-2)+a
},easeInQuint:function ah(c,a,d,b){return d*(c/=b)*c*c*c*c+a},easeOutQuint:function at(c,a,d,b){return d*((c=c/b-1)*c*c*c*c+1)+a
},easeInOutQuint:function P(c,a,d,b){if((c/=b/2)<1){return d/2*c*c*c*c*c+a}return d/2*((c-=2)*c*c*c*c+2)+a
},easeInSine:function aa(c,a,d,b){return -d*Math.cos(c/b*(Math.PI/2))+d+a},easeOutSine:function ao(c,a,d,b){return d*Math.sin(c/b*(Math.PI/2))+a
},easeInOutSine:function ae(c,a,d,b){return -d/2*(Math.cos(Math.PI*c/b)-1)+a},easeInExpo:function aq(c,a,d,b){return(c===0)?a:d*Math.pow(2,10*(c/b-1))+a
},easeOutExpo:function Y(c,a,d,b){return(c===b)?a+d:d*(-Math.pow(2,-10*c/b)+1)+a
},easeInOutExpo:function ad(c,a,d,b){if(c===0){return a}if(c===b){return a+d}if((c/=b/2)<1){return d/2*Math.pow(2,10*(c-1))+a
}return d/2*(-Math.pow(2,-10*--c)+2)+a},easeInCirc:function X(c,a,d,b){return -d*(Math.sqrt(1-(c/=b)*c)-1)+a
},easeOutCirc:function an(c,a,d,b){return d*Math.sqrt(1-(c=c/b-1)*c)+a},easeInOutCirc:function ab(c,a,d,b){if((c/=b/2)<1){return -d/2*(Math.sqrt(1-c*c)-1)+a
}return d/2*(Math.sqrt(1-(c-=2)*c)+1)+a},easeInElastic:function K(f,c,h,d){var a=1.70158;
var g=0;var b=h;if(f===0){return c}if((f/=d)===1){return c+h}if(!g){g=d*0.3}if(b<Math.abs(h)){b=h;
a=g/4}else{a=g/(2*Math.PI)*Math.asin(h/b)}return -(b*Math.pow(2,10*(f-=1))*Math.sin((f*d-a)*(2*Math.PI)/g))+c
},easeOutElastic:function L(f,c,h,d){var a=1.70158;var g=0;var b=h;if(f===0){return c
}if((f/=d)===1){return c+h}if(!g){g=d*0.3}if(b<Math.abs(h)){b=h;a=g/4}else{a=g/(2*Math.PI)*Math.asin(h/b)
}return b*Math.pow(2,-10*f)*Math.sin((f*d-a)*(2*Math.PI)/g)+h+c},easeInOutElastic:function Z(f,c,h,d){var a=1.70158;
var g=0;var b=h;if(f===0){return c}if((f/=d/2)===2){return c+h}if(!g){g=d*(0.3*1.5)
}if(b<Math.abs(h)){b=h;a=g/4}else{a=g/(2*Math.PI)*Math.asin(h/b)}if(f<1){return -0.5*(b*Math.pow(2,10*(f-=1))*Math.sin((f*d-a)*(2*Math.PI)/g))+c
}return b*Math.pow(2,-10*(f-=1))*Math.sin((f*d-a)*(2*Math.PI)/g)*0.5+h+c},easeInBack:function R(d,b,f,c,a){if(a===undefined){a=1.70158
}return f*(d/=c)*d*((a+1)*d-a)+b},easeOutBack:function ai(d,b,f,c,a){if(a===undefined){a=1.70158
}return f*((d=d/c-1)*d*((a+1)*d+a)+1)+b},easeInOutBack:function U(d,b,f,c,a){if(a===undefined){a=1.70158
}if((d/=c/2)<1){return f/2*(d*d*(((a*=(1.525))+1)*d-a))+b}return f/2*((d-=2)*d*(((a*=(1.525))+1)*d+a)+2)+b
},easeInBounce:function T(c,a,d,b){return d-Q.easeOutBounce(b-c,0,d,b)+a},easeOutBounce:function aj(c,a,d,b){if((c/=b)<(1/2.75)){return d*(7.5625*c*c)+a
}else{if(c<(2/2.75)){return d*(7.5625*(c-=(1.5/2.75))*c+0.75)+a}else{if(c<(2.5/2.75)){return d*(7.5625*(c-=(2.25/2.75))*c+0.9375)+a
}else{return d*(7.5625*(c-=(2.625/2.75))*c+0.984375)+a}}}},easeInOutBounce:function af(c,a,d,b){if(c<b/2){return Q.easeInBounce(c*2,0,d,b)*0.5+a
}return Q.easeOutBounce(c*2-b,0,d,b)*0.5+d*0.5+a}};ap.exports=Q},{}],27:[function(f,i,g){
/*! MIT License
 *
 * KeySpline - use bezier curve for transition easing function
 * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
function h(a,d,b,q){this.get=function(j){if(a===d&&b===q){return j
}return t(p(j),d,q)};function r(k,j){return 1-3*j+3*k}function s(k,j){return 3*j-6*k
}function u(j){return 3*j}function t(j,l,k){return((r(l,k)*j+s(l,k))*j+u(l))*j}function c(j,l,k){return 3*r(l,k)*j*j+2*s(l,k)*j+u(l)
}function p(k){var m=k;for(var l=0;l<4;++l){var j=c(m,a,b);if(j===0){return m}var n=t(m,a,b)-k;
m-=n/j}return m}}i.exports=h},{}],28:[function(d,g,f){g.exports={isNum:function(a){return typeof a==="number"
},isArray:function(a){var b=Object.prototype.toString;return b.call(a)==="[object Array]"
},addClass:function(b,a){b.classList.add(a)},removeClass:function(b,a){b.classList.remove(a)
},hasClass:function(b,a){return b.contains(a)},defaults:function(b,c){var i={};
c=c||{};for(var a in b){if(b.hasOwnProperty(a)){i[a]=(c[a]!=null)?c[a]:b[a]}}return i
},defaultProps:function(b,c,k){var j=this.defaults(c,k);for(var a in j){if(j.hasOwnProperty(a)){b[a]=j[a]
}}},invoke:function(a,c){var b=[].slice.call(arguments,2);if(!Array.isArray(a)){throw new Error("List is not an array")
}a.forEach(function(k){var j=k[c];if(j&&typeof j==="function"){j.apply(k,b)}})}}
},{}],29:[function(P,U,A){var F=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;
var V=typeof Array.prototype.indexOf==="function"?function(b,a){return b.indexOf(a)
}:function(b,c){for(var a=0;a<b.length;a++){if(b[a]===c){return a}}return -1};var N=Array.isArray||function(a){return F.call(a)=="[object Array]"
};var C=Object.keys||function(c){var b=[];for(var a in c){if(c.hasOwnProperty(a)){b.push(a)
}}return b};var D=typeof Array.prototype.forEach==="function"?function(b,a){return b.forEach(a)
}:function(b,c){for(var a=0;a<b.length;a++){c(b[a])}};var L=function(d,b,a){if(typeof d.reduce==="function"){return d.reduce(b,a)
}var c=a;for(var f=0;f<d.length;f++){c=b(c,d[f])}return c};var z=/^[0-9]+$/;function T(c,d){if(c[d].length==0){return c[d]={}
}var a={};for(var b in c[d]){if(M.call(c[d],b)){a[b]=c[d][b]}}c[d]=a;return a}function H(c,g,a,b){var f=c.shift();
if(M.call(Object.prototype,a)){return}if(!f){if(N(g[a])){g[a].push(b)}else{if("object"==typeof g[a]){g[a]=b
}else{if("undefined"==typeof g[a]){g[a]=b}else{g[a]=[g[a],b]}}}}else{var d=g[a]=g[a]||[];
if("]"==f){if(N(d)){if(""!=b){d.push(b)}}else{if("object"==typeof d){d[C(d).length]=b
}else{d=g[a]=[g[a],b]}}}else{if(~V(f,"]")){f=f.substr(0,f.length-1);if(!z.test(f)&&N(d)){d=T(g,a)
}H(c,d,f,b)}else{if(!z.test(f)&&N(d)){d=T(g,a)}H(c,d,f,b)}}}}function S(f,h,b){if(~V(h,"]")){var c=h.split("["),g=c.length,d=g-1;
H(c,f,"base",b)}else{if(!z.test(h)&&N(f.base)){var i={};for(var a in f.base){i[a]=f.base[a]
}f.base=i}K(f.base,h,b)}return f}function J(c){if("object"!=typeof c){return c}if(N(c)){var b=[];
for(var d in c){if(M.call(c,d)){b.push(c[d])}}return b}for(var a in c){c[a]=J(c[a])
}return c}function R(a){var b={base:{}};D(C(a),function(c){S(b,c,a[c])});return J(b.base)
}function Q(a){var b=L(String(a).split("&"),function(i,d){var c=V(d,"="),f=E(d),h=d.substr(0,f||c),g=d.substr(f||c,d.length),g=g.substr(V(g,"=")+1,g.length);
if(""==h){h=d,g=""}if(""==h){return i}return S(i,I(h),I(g))},{base:{}}).base;return J(b)
}A.parse=function(a){if(null==a||""==a){return{}}return"object"==typeof a?R(a):Q(a)
};var G=A.stringify=function(a,b){if(N(a)){return O(a,b)}else{if("[object Object]"==F.call(a)){return B(a,b)
}else{if("string"==typeof a){return W(a,b)}else{return b+"="+encodeURIComponent(String(a))
}}}};function W(a,b){if(!b){throw new TypeError("stringify expects an object")}return b+"="+encodeURIComponent(a)
}function O(c,b){var a=[];if(!b){throw new TypeError("stringify expects an object")
}for(var d=0;d<c.length;d++){a.push(G(c[d],b+"["+d+"]"))}return a.join("&")}function B(b,c){var a=[],d=C(b),g;
for(var h=0,f=d.length;h<f;++h){g=d[h];if(""==g){continue}if(null==b[g]){a.push(encodeURIComponent(g)+"=")
}else{a.push(G(b[g],c?c+"["+encodeURIComponent(g)+"]":encodeURIComponent(g)))}}return a.join("&")
}function K(d,a,c){var b=d[a];if(M.call(Object.prototype,a)){return}if(undefined===b){d[a]=c
}else{if(N(b)){b.push(c)}else{d[a]=[b,c]}}}function E(d){var c=d.length,f,b;for(var a=0;
a<c;++a){b=d[a];if("]"==b){f=false}if("["==b){f=true}if("="==b&&!f){return a}}}function I(a){try{return decodeURIComponent(a.replace(/\+/g," "))
}catch(b){return a}}},{}],30:[function(d,g,f){g.exports={clone:d("./ac-object/clone"),defaults:d("./ac-object/defaults"),extend:d("./ac-object/extend"),getPrototypeOf:d("./ac-object/getPrototypeOf"),isEmpty:d("./ac-object/isEmpty"),toQueryParameters:d("./ac-object/toQueryParameters")}
},{"./ac-object/clone":31,"./ac-object/defaults":32,"./ac-object/extend":33,"./ac-object/getPrototypeOf":34,"./ac-object/isEmpty":35,"./ac-object/toQueryParameters":36}],31:[function(g,k,h){var i=g("./extend");
k.exports=function j(a){return i({},a)}},{"./extend":33}],32:[function(g,k,h){var i=g("./extend");
k.exports=function j(a,b){if(typeof a!=="object"||typeof b!=="object"){throw new TypeError("defaults: must provide a defaults and options object")
}return i({},a,b)}},{"./extend":33}],33:[function(k,j,g){var h=Object.prototype.hasOwnProperty;
j.exports=function i(){var a;var b;if(arguments.length<2){a=[{},arguments[0]]}else{a=[].slice.call(arguments)
}b=a.shift();a.forEach(function(c){if(c!=null){for(var d in c){if(h.call(c,d)){b[d]=c[d]
}}}});return b}},{}],34:[function(k,j,g){var h=Object.prototype.hasOwnProperty;
j.exports=function i(a){if(Object.getPrototypeOf){return Object.getPrototypeOf(a)
}else{if(typeof a!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return a.__proto__}else{var c=a.constructor;
var b;if(h.call(a,"constructor")){b=c;if(!(delete a.constructor)){return null}c=a.constructor;
a.constructor=b}return c?c.prototype:null}}}}},{}],35:[function(k,j,g){var h=Object.prototype.hasOwnProperty;
j.exports=function i(b){var a;if(typeof b!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(a in b){if(h.call(b,a)){return false}}return true}},{}],36:[function(k,i,g){var h=k("qs");
i.exports=function j(a){if(typeof a!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return h.stringify(a)}},{qs:29}],37:[function(d,g,f){g.exports.WindowDelegate=d("./window-delegate/WindowDelegate");
g.exports.windowEmitter=d("./window-delegate/windowEmitter")},{"./window-delegate/WindowDelegate":38,"./window-delegate/windowEmitter":39}],38:[function(m,k,i){var j;
var h=m("./windowEmitter");function l(){this._emitter=h;this._setWindowDimensionValues();
this._setScrollValues();this.on("resize",this._setWindowDimensionValues.bind(this));
this.on("scroll",this._setScrollValues.bind(this));this.on("touchstart",this._touchScrollStart.bind(this));
this.on("touchend",this._setZoomValues.bind(this))}j=l.prototype;j.on=function(){this._emitter.on.apply(this._emitter,arguments);
return this};j.once=function(){this._emitter.once.apply(this._emitter,arguments);
return this};j.off=function(){this._emitter.off.apply(this._emitter,arguments);
return this};j.has=function(){return this._emitter.has.apply(this._emitter,arguments)
};j.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};j.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};j.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};j.isZoomed=function(){return this.clientWidth>this.innerWidth};j._setWindowDimensionValues=function(){this.clientWidth=document.documentElement.clientWidth;
this.clientHeight=document.documentElement.clientHeight;this.innerWidth=window.innerWidth||this.clientWidth;
this.innerHeight=window.innerHeight||this.clientHeight};j._setZoomValues=function(){var a=this.innerWidth;
this.innerWidth=window.innerWidth;if(a!==this.innerWidth){this.innerHeight=window.innerHeight;
this.trigger("zoom");if(a<this.innerWidth){this.trigger("zoomIn")}else{this.trigger("zoomOut")
}}else{setTimeout(this._setZoomValues.bind(this),500)}};j._updateScrollX=function(){this.scrollX=(window.pageXOffset!==undefined)?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft;
this.maxScrollX=document.body.scrollWidth-this.innerWidth;return this.scrollX};
j._updateScrollY=function(){this.scrollY=(window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;
this.maxScrollY=document.body.scrollHeight-this.innerHeight;return this.scrollY
};j._setScrollValues=function(){var a=this.scrollX,b=this.scrollY;this._updateScrollX();
this._updateScrollY();if(this.scrollX!==a){this.trigger("scrollX")}if(this.scrollY!==b){this.trigger("scrollY")
}this._scrollStop()};j._scrollStop=function(){if(typeof window.ontouchstart==="undefined"){if(this._scrollStopTimer){clearTimeout(this._scrollStopTimer)
}this._scrollStopTimer=setTimeout(function(){clearTimeout(this._scrollStopTimer);
this.trigger("scrollStop")}.bind(this),300)}};j._touchScrollStart=function(){this._updateScrollX();
this._updateScrollY();this.once("touchend",this._touchScrollStop.bind(this,this.scrollX,this.scrollY))
};j._touchScrollStop=function(b,c,a){this._updateScrollX();this._updateScrollY();
if(b!==this.scrollX||c!==this.scrollY){setTimeout(this._touchScrollStop.bind(this,this.scrollX,this.scrollY,true),300)
}else{if(a){this.trigger("scrollStop")}}};k.exports=new l()},{"./windowEmitter":39}],39:[function(f,i,g){var h=f("ac-dom-emitter").DOMEmitter;
i.exports=new h(window)},{"ac-dom-emitter":5}],40:[function(f,i,g){var h=f("./ac-element-tracker/ElementTracker");
i.exports=new h();i.exports.ElementTracker=h},{"./ac-element-tracker/ElementTracker":41}],41:[function(w,x,t){var s;
var u=w("ac-object");var r=w("ac-base").Element;var p=w("ac-base").Array;var n=w("window-delegate").WindowDelegate;
var q=w("./TrackedElement");var v={autoStart:false};function y(a,b){this.options=u.clone(v);
this.options=typeof b==="object"?u.extend(this.options,b):this.options;this.windowDelegate=n;
this.tracking=false;this.elements=[];if(a&&(Array.isArray(a)||this._isNodeList(a)||r.isElement(a))){this.addElements(a)
}if(this.options.autoStart===true){this.start()}}s=y.prototype;var o=/^\[object (HTMLCollection|NodeList|Object)\]$/;
s._isNodeList=function(a){if(!a){return false}if(typeof a.length!=="number"){return false
}if(typeof a[0]==="object"&&(!a[0]||!a[0].nodeType)){return false}return o.test(Object.prototype.toString.call(a))
};s._registerElements=function(a){a=[].concat(a);a.forEach(function(b){if(this._elementInDOM(b)){var c=new q(b);
c.offsetTop=c.element.offsetTop;this.elements.push(c)}},this)};s._registerTrackedElementObjects=function(a){var b=[].concat(a);
b.forEach(function(c){if(this._elementInDOM(c.element)){c.offsetTop=c.element.offsetTop;
this.elements.push(c)}},this)};s._elementInDOM=function(a){var b=false;var c=document.getElementsByTagName("body")[0];
if(r.isElement(a)&&c.contains(a)){b=true}return b};s._onScroll=function(){this.elements.forEach(function(a){this.refreshElementState(a)
},this)};s._onResize=function(){this.elements.forEach(function(a){this.refreshElementState(a)
},this)};s._elementPercentInView=function(a){return a.pixelsInView/a.height};s._elementPixelsInView=function(d){var a=0;
var b=d.top;var c=d.bottom;var f=this.windowDelegate.innerHeight;if(b<=0&&c>=f){a=f
}else{if(b>=0&&b<f&&c>f){a=f-b}else{if(b<0&&(c<f&&c>=0)){a=d.bottom}else{if(b>=0&&c<=f){a=d.height
}}}}return a};s._isElementOrObject=function(a){return a&&(r.isElement(a)||(typeof a==="object"&&!Array.isArray(a)&&!this._isNodeList(a)))
};s._ifInView=function(c,a,b){if(!a){c.trigger("enterview",c)}if(!b&&c.percentInView>c.inViewThreshold){c.inThreshold=true;
c.trigger("thresholdenter",c)}};s._ifAlreadyInView=function(b,a){if(!b.inView){b.trigger("exitview",b)
}if(a&&b.percentInView<b.inViewThreshold){b.inThreshold=false;b.trigger("thresholdexit",b)
}};s.addElements=function(a){a=this._isNodeList(a)?p.toArray(a):[].concat(a);a.forEach(function(b){this.addElement(b)
},this)};s.addElement=function(a){var b;if(this._isElementOrObject(a)){b=new q(a);
this._registerTrackedElementObjects(b)}else{throw new TypeError("ElementTracker.addElement: "+a+"must be a valid Element or Object")
}return b};s.removeElement=function(a){var b=[];var c;this.elements.forEach(function(f,d){if(f===a||f.element===a){b.push(d)
}});c=this.elements.filter(function(d,f){return b.indexOf(f)<0?true:false});this.elements=c
};s.stop=function(){if(this.tracking===true){this.tracking=false;this.windowDelegate.off("scroll",this._onScroll);
this.windowDelegate.off("resize",this._onResize)}};s.start=function(){if(this.tracking===false){this.tracking=true;
this.windowDelegate.on("scroll",this._onScroll,this);this.windowDelegate.on("resize",this._onResize,this);
this.refreshAllElementStates()}};s.refreshAllElementStates=function(){this.elements.forEach(function(a){this.refreshElementState(a)
},this)};s.refreshElementState=function(d){var b=r.getBoundingBox(d.element);var a=d.inView;
var c=d.inThreshold;d=u.extend(d,b);d.pixelsInView=this._elementPixelsInView(d);
d.percentInView=this._elementPercentInView(d);d.inView=d.pixelsInView>0;if(d.inView){this._ifInView(d,a,c)
}if(a){this._ifAlreadyInView(d,c)}return d};x.exports=y},{"./TrackedElement":42,"ac-base":false,"ac-object":30,"window-delegate":37}],42:[function(i,o,j){var n;
var k=i("ac-dom-emitter").DOMEmitter;var l={inViewThreshold:0.75};function m(b){var c={};
var a;if(b.nodeType&&b.nodeType>0){c.element=b}else{c=b}for(a in l){this[a]=l[a]
}for(a in c){this[a]=c[a]}this.inView=false;this.inThreshold=false;this.percentInView=0;
this.pixelsInView=0;this.offsetTop=0;this.top=0;this.right=0;this.bottom=0;this.left=0;
this.width=0;this.height=0;k.call(this,c.element)}n=m.prototype=new k(null);o.exports=m
},{"ac-dom-emitter":5}],43:[function(i,h,f){var g=i("./ac-keyboard/Keyboard");h.exports=new g();
h.exports.Keyboard=g;h.exports.keys=i("./ac-keyboard/keymap")},{"./ac-keyboard/Keyboard":45,"./ac-keyboard/keymap":46}],44:[function(l,k,h){var m=l("ac-base").Object;
var i=["keyLocation"];function j(b){this.originalEvent=b;for(var a in b){if(typeof b[a]!=="function"&&i.indexOf(a)===-1){this[a]=b[a]
}}this.location=(this.originalEvent.keyLocation===undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}j.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};k.exports=j},{"ac-base":false}],45:[function(w,y,u){var s=w("ac-base").Element;
var v=w("./KeyEvent");var o=w("ac-event-emitter").EventEmitter;var r=w("./keymap");
var q=0;var x=1;var A=2;var p=3;var t;function z(){this._keysDown=[];this._keyDownEmitter=new o();
this._keyUpEmitter=new o();s.addEventListener(document,"keydown",this._DOMKeyDown.bind(this),true);
s.addEventListener(document,"keyup",this._DOMKeyUp.bind(this),true);this._listening=[]
}t=z.prototype;t._castEventNameNumberToString=function(a){if(typeof a==="number"){return a.toString()
}return a};t._DOMKeyDown=function(b){var c=this._normalizeKeyboardEvent(b);var a=c.keyCode;
this._trackKeyDown(a);this._keyDownEmitter.trigger(a.toString(),c)};t._DOMKeyUp=function(b){var c=this._normalizeKeyboardEvent(b);
var a=c.keyCode;this._trackKeyUp(a);this._keyUpEmitter.trigger(a.toString(),c)};
t.addKeyDown=function(){var b=Array.prototype.slice.call(arguments);var a=b.shift();
if(a===undefined){throw new TypeError('Could not listen for keyup event on "'+a+'"')
}a=this._castEventNameNumberToString(a);return this._keyDownEmitter.on.apply(this._keyDownEmitter,[a].concat(b))
};t.addKeyUp=function(){var b=Array.prototype.slice.call(arguments);var a=b.shift();
if(a===undefined){throw new TypeError('Could not listen for keyup event on "'+a+'"')
}a=this._castEventNameNumberToString(a);return this._keyUpEmitter.on.apply(this._keyUpEmitter,[a].concat(b))
};t.removeKeyDown=function(){var b=Array.prototype.slice.call(arguments);var a=b.shift();
a=this._castEventNameNumberToString(a);return this._keyDownEmitter.off.apply(this._keyDownEmitter,[a].concat(b))
};t.removeKeyUp=function(){var b=Array.prototype.slice.call(arguments);var a=b.shift();
a=this._castEventNameNumberToString(a);return this._keyUpEmitter.off.apply(this._keyUpEmitter,[a].concat(b))
};t.isDown=function(a){return(this._keysDown.indexOf(a)!==-1)};t.isUp=function(a){return !this.isDown(a)
};t._trackKeyUp=function(a){var b=this._keysDown.indexOf(a);if(b!==-1){this._keysDown.splice(b,1)
}};t._trackKeyDown=function(a){if(this._keysDown.indexOf(a)===-1){this._keysDown.push(a)
}};t._normalizeKeyboardEvent=function(a){return new v(a)};y.exports=z},{"./KeyEvent":44,"./keymap":46,"ac-base":false,"ac-event-emitter":false}],46:[function(d,g,f){g.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],47:[function(d,g,f){f.ScrollView=d("./ac-scrollview/ScrollView");f.MouseWheel=d("./ac-scrollview/input/MouseWheel");
f.ScrollBounds=d("./ac-scrollview/ScrollBounds");f.Y_AXIS="y";f.X_AXIS="x"},{"./ac-scrollview/ScrollBounds":49,"./ac-scrollview/ScrollView":50,"./ac-scrollview/input/MouseWheel":53}],48:[function(k,j,h){var g=k("ac-base").Object;
function i(b,a){this._parent=b;this._axis=a;this._inputs=[];this._startTouchMove=null;
this._shouldTouchEnd=false;this._checkToPreventDefault=false}i.prototype={_calculateTouchAngles:function(){var q={x:0,y:0};
var f=this._inputs[this._inputs.length-1];var c=this._inputs[0];var p=f.x-c.x;var a=f.y-c.y;
var b=Math.sqrt(p*p+a*a);if(b===0){return false}var d=Math.asin(a/b);var o=Math.acos(p/b);
q.x=d*(180/Math.PI);q.y=o*(180/Math.PI);q.y-=90;return q},inputStart:function(d,a,c,b){this._inputs=[{x:d,y:a}];
this._startTouchMove={x:d,y:a,timeStamp:c,e:b};this._shouldTouchEnd=false;this._checkToPreventDefault=true
},inputMove:function(p,q,d,c){this._inputs[1]={x:p,y:q};var o=45;var f=-o;var a=this._calculateTouchAngles();
var b=a[this._axis];if(b<=o&&b>=f||this._checkToPreventDefault===false){this._shouldTouchEnd=true;
this._checkToPreventDefault=false;if(this._startTouchMove!==null){this._parent.inputStart(this._startTouchMove.x,this._startTouchMove.y,this._startTouchMove.timeStamp,this._startTouchMove.e);
this._startTouchMove=null}c.preventDefault();this._parent.inputMove.apply(this._parent,arguments)
}},inputEnd:function(b,a){if(this._shouldTouchEnd===true){this._checkToPreventDefault=true;
this._parent.inputEnd.apply(this._parent,arguments)}},on:function(){return this._parent.on.apply(this._parent,arguments)
},off:function(){return this._parent.off.apply(this._parent,arguments)},trigger:function(){return this._parent.trigger.apply(this._parent,arguments)
},once:function(){return this._parent.once.apply(this._parent,arguments)}};j.exports=i
},{"ac-base":false}],49:[function(j,i,g){var k=j("ac-base").Object;function h(a,b,d,f){var c={maxPerSwipe:1,axis:"x"};
this.options=k.extend(c,f||{});this._grid=d;this._scrollInertia=a;this._scrollView=this._scrollInertia.getScrollView();
this._runningIndex=b;this._axisString=(this.options.axis==="x")?"left":"top"}h.prototype={calculateTargetIndex:function(){var d=(this._axisString==="left")?this._scrollView.getTouchContainerWidth():this._scrollView.getTouchContainerHeight();
var b=Math.round(this._scrollInertia.calculateFinalInertiaPosition()[this._axisString]/d);
var c=this._runningIndex;var a=(b-c);if(a>0&&b>c+this.options.maxPerSwipe){b=c+this.options.maxPerSwipe
}else{if(a<0&&b<c-this.options.maxPerSwipe){b=c-this.options.maxPerSwipe}}if(a>0&&b>this._grid[this._axisString].length-1){b=this._grid[this._axisString].length-1
}else{if(a<0&&b<0){b=0}}return b},calculateFuturePositions:function(){var a=this.calculateTargetIndex();
return{left:a*this._scrollView.getTouchContainerWidth(),top:a*this._scrollView.getTouchContainerHeight()}
}};i.exports=h},{"ac-base":false}],50:[function(A,B,w){var z=A("ac-base").Object;
var t=A("ac-base").Element;var p=A("ac-event-emitter").EventEmitter;var q=A("./TouchInertia");
var r=A("./input/MouseWheel");var s=A("./input/Touch");var u=A("./input/Input");
var v=A("./InputPreventDefault");var C=A("./model/Scroll");var y={startBounceDistance:0,endBounceDistance:0,axis:"y",touch:true,mouseWheel:false,mouse:false,preventDefault:true};
function x(a,b){this.options=z.extend(z.clone(y),b||{});this._element=a;this._touchContainerWidth=(typeof this.options.containerWidth==="number")?this.options.containerWidth:a.offsetWidth;
this._touchContainerHeight=(this.options.containerHeight||a.offsetHeight);this._innerScrollWidth=(this.options.innerWidth||a.offsetWidth)+this.options.startBounceDistance+this.options.endBounceDistance;
this._innerScrollHeight=(this.options.innerHeight||a.offsetHeight)+this.options.startBounceDistance+this.options.endBounceDistance;
this._scroll=new C();this._scrollPositions=[];this._inputNormalize=new u(this._scroll);
this._inputNormalize=new v(this._inputNormalize,this.options.axis);this._inputNormalize.on("input_start",this.inputStart,this);
this._inputNormalize.on("input_move",this.inputMove,this);this._inputNormalize.on("input_end",this.inputEnd,this);
if(this.options.touch===true){this._touch=new s(this._inputNormalize,a);this._touch.bindDOMEvents()
}if(this.options.mouseWheel===true){this._mouseWheel=new r(this._inputNormalize,a);
this._mouseWheel.bindDOMEvents()}}x.prototype={};x.prototype.__playInertia=function(b){var c=b.calculateInertiaPositions();
var a=function(d){var f=c[d];if(f===undefined||this._down===true){return}this._scroll.scrollTo(f.left,f.top);
window.requestAnimationFrame(function(){a(d+1)})}.bind(this);a(0)};x.prototype.getTouchContainerHeight=function(){return this._touchContainerHeight
};x.prototype.getTouchContainerWidth=function(){return this._touchContainerWidth
};x.prototype.setInnerWidth=function(a){this._innerScrollWidth=a;return this};x.prototype.setInnerHeight=function(a){this._innerScrollHeight=a;
return this};x.prototype.getInnerScrollWidth=function(){return this._innerScrollWidth
};x.prototype.getInnerScrollHeight=function(){return this._innerScrollHeight};x.prototype.getScrollYDistance=function(){var a=this.getInnerScrollHeight()-this.getTouchContainerHeight()-(this.options.startBounceDistance+this.options.endBounceDistance);
if(a<0){a=0}return a};x.prototype.getScrollXDistance=function(){var a=this.getInnerScrollWidth()-this.getTouchContainerWidth()-(this.options.startBounceDistance+this.options.endBounceDistance);
if(a<0){a=0}return a};x.prototype.inputStart=function(d,a,b,c){this._down=true;
this.trigger("scrollStart",{originalEvent:c,timeStamp:b})};x.prototype.inputMove=function(b){var c=b.scrollLeft;
var a=b.scrollTop;if(b.originalEvent.type==="mousewheel"){if(a>this.getScrollYDistance()){a=this.getScrollYDistance()
}else{if(a<0){a=0}}if(c>this.getScrollXDistance()){c=this.getScrollXDistance()}else{if(c<0){c=0
}}}this._scrollPositions.push({left:c,top:a,timeStamp:b.timeStamp});this._scroll.scrollTo(c,a)
};x.prototype.inputEnd=function(g){var b=true;var h=this._scrollPositions;var a=[];
var d=this._scrollPositions[this._scrollPositions.length-1];var f=g.timeStamp;if(d===null){return
}for(var c=0;c<h.length;c+=1){a[a.length]=h[c].left;a[a.length]=h[c].top;a[a.length]=h[c].timeStamp
}var i=new q(this,{left:this._scroll.scrollLeft,top:this._scroll.scrollTop},a,d.timeStamp,f);
this._down=false;this.trigger("inertiaStart",{originalEvent:g,originalEventName:"touchend",inertia:i,position:{left:this._scroll.scrollLeft,top:this._scroll.scrollTop},velocity:i.calculateVelocity(),preventDefault:function(){b=false
}});if(b===true){this.__playInertia(i)}this._scrollPositions=[]};x.prototype.once=function(){return this._scroll.once.apply(this._scroll,arguments)
};x.prototype.on=function(){return this._scroll.on.apply(this._scroll,arguments)
};x.prototype.off=function(){return this._scroll.off.apply(this._scroll,arguments)
};x.prototype.trigger=function(){return this._scroll.trigger.apply(this._scroll,arguments)
};x.prototype.scrollTo=function(a,b){return this._scroll.scrollTo(a,b)};B.exports=x
},{"./InputPreventDefault":48,"./TouchInertia":51,"./input/Input":52,"./input/MouseWheel":53,"./input/Touch":54,"./model/Scroll":55,"ac-base":false,"ac-event-emitter":false}],51:[function(j,i,g){var k=j("ac-base").Object;
function h(f,b,o,c,n,d){var a={frictionCoefficient:0.95,minFrictionVelocity:0.1};
this.options=k.extend(a,d||{});this._scrollView=f;this._currentPosition=b;this.__scrollLeft=this._currentPosition.left;
this.__scrollTop=this._currentPosition.top;this._positions=o;this._lastTouchMove=c;
this._timeStamp=n;this._frameRate=(1000/60)}h.prototype={__stepThroughFriction:function(a,b){var q=a+this._frictionVelocityX;
var c=b+this._frictionVelocityY;if(Math.abs(this._frictionVelocityX)<=this.options.minFrictionVelocity){q=a
}if(Math.abs(this._frictionVelocityY)<=this.options.minFrictionVelocity){c=b}this._frictionVelocityX*=this.options.frictionCoefficient;
this._frictionVelocityY*=this.options.frictionCoefficient;var o=0;var p=0;var d=0.03;
var f=0.08;if(q<this._minScrollLeft){o=this._minScrollLeft-q}else{if(q>this._maxScrollLeft){o=this._maxScrollLeft-q
}}if(c<this._minScrollTop){p=this._minScrollTop-c}else{if(c>this._maxScrollTop){p=this._maxScrollTop-c
}}if(o!==0){if(o*this._frictionVelocityX<=0){this._frictionVelocityX+=o*d}else{this._frictionVelocityX=o*f
}}if(p!==0){if(p*this._frictionVelocityY<=0){this._frictionVelocityY+=p*d}else{this._frictionVelocityY=p*f
}}return{left:q,top:c}},getScrollView:function(){return this._scrollView},calculateInertiaDuration:function(){var a=this.calculateInertiaPositions();
return a.length*this._frameRate},calculateVelocity:function(){var d=this._positions;
var s=d.length-1;var c=s;for(var f=s;f>0&&d[f]>(this._lastTouchMove-100);f-=3){c=f
}var a=d[s]-d[c];var t=this.__scrollLeft-(d[c-2]);var b=this.__scrollTop-(d[c-1]);
var r=t/a*this._frameRate;var q=b/a*this._frameRate;if((this._timeStamp-this._lastTouchMove)>=100){r=0;
q=0}if(isNaN(r)){r=0}if(isNaN(q)){q=0}return{left:r,top:q}},calculateInertiaPositions:function(){this._minScrollLeft=0;
this._minScrollTop=0;this._maxScrollLeft=this._scrollView.getScrollXDistance();
this._maxScrollTop=this._scrollView.getScrollYDistance();var o=this._positions;
var a=[];var d=this.calculateVelocity();this._frictionVelocityX=d.left;this._frictionVelocityY=d.top;
var b=this.__scrollLeft;var c=this.__scrollTop;var n;var f=0;if(Math.abs(this._frictionVelocityX)<this.options.minFrictionVelocity&&Math.abs(this._frictionVelocityY)<this.options.minFrictionVelocity){n=this.__stepThroughFriction(b,c)
}while((Math.abs(this._frictionVelocityX)>=this.options.minFrictionVelocity||Math.abs(this._frictionVelocityY)>=this.options.minFrictionVelocity)){n=this.__stepThroughFriction(b,c);
b=n.left;c=n.top;a.push(n)}if(b<this._minScrollLeft){b=this._minScrollLeft}else{if(b>this._maxScrollLeft){b=this._maxScrollLeft
}}if(c<this._minScrollTop){c=this._minScrollTop}else{if(c>this._maxScrollTop){c=this._maxScrollTop
}}a[a.length-1]={left:b,top:c};return a},calculateFinalInertiaPosition:function(){var a=this.calculateInertiaPositions();
if(a.length===0){return{left:this.__scrollLeft,top:this.__scrollTop}}return a[a.length-1]
}};i.exports=h},{"ac-base":false}],52:[function(h,m,i){var k=h("ac-event-emitter").EventEmitter;
function j(a){this._startingInputPosition=null;this._lastInputPosition=null;this._inputPositions=[];
this._scroll=a}var l=j.prototype=new k();l.inputStart=function(f,a,c,d){var b={x:f,y:a,timeStamp:c};
this._inputPositions.push(b);this._startingInputPosition=b;this.trigger("input_start",{timeStamp:c,originalEvent:d})
};l.inputMove=function(g,a,c,f){var b={x:g,y:a,timeStamp:c};this._inputPositions.push(b);
this._lastInputPosition=b;var d=this.getScrollValues();this.trigger("input_move",{scrollLeft:d.x,scrollTop:d.y,timeStamp:c,originalEvent:f})
};l.inputEnd=function(a,b){this.trigger("input_end",{lastInputPosition:this._lastInputPosition,inputPositions:this._inputPositions.slice(),timeStamp:a,originalEvent:b});
this._inputPositions=[];this._lastInputPosition=null};l.getScrollValues=function(){var a=this._inputPositions[this._inputPositions.length-2];
var b=(a.x-this._lastInputPosition.x)+this._scroll.scrollLeft;var c=(a.y-this._lastInputPosition.y)+this._scroll.scrollTop;
return{x:b,y:c}};m.exports=j},{"ac-event-emitter":false}],53:[function(l,k,h){var j=l("ac-base").Element;
var m=l("ac-base").Object;function i(b,a){this._inputController=b;this._element=a;
this._scrollTop=0;this._scrollLeft=0;this._timeout=null;this._hasStarted=false;
this._boundMouseWheelComplete=this.mouseWheelComplete.bind(this);this._lastEvent=null;
this._velocities=[]}i.prototype={mouseWheelComplete:function(){this._scrollTop=0;
this._scrollLeft=0;this._hasStarted=false;this._inputController.inputEnd(new Date().getTime(),this._lastEvent);
this._lastEvent=null},onMouseWheel:function(a){var c;var d;var b;if(this._hasStarted===false){this._inputController.inputStart(this._scrollLeft,this._scrollTop,a.timeStamp,a);
this._hasStarted=true}c=this._scrollTop+a.wheelDeltaY;d=this._scrollLeft+a.wheelDeltaX;
this._lastEvent=m.clone(a);this._scrollTop=c;this._scrollLeft=d;this._inputController.inputMove(this._scrollLeft,this._scrollTop,a.timeStamp,a);
window.clearTimeout(this._timeout);this._timeout=window.setTimeout(this._boundMouseWheelComplete,100)
},bindDOMEvents:function(){j.addEventListener(this._element,"mousewheel",this.onMouseWheel.bind(this))
}};k.exports=i},{"ac-base":false}],54:[function(k,j,h){var i=k("ac-base").Element;
function g(b,a){this._input=b;this._element=a}g.prototype={bindDOMEvents:function(){var b=this._input;
var a=this._element;i.addEventListener(a,"touchstart",function(c){if(c.touches&&c.touches[0]&&c.touches[0].target&&c.touches[0].target.tagName.match(/input|textarea|select/i)){return
}b.inputStart(c.touches[0].pageX,c.touches[0].pageY,c.timeStamp,c)},false);i.addEventListener(a,"touchmove",function(c){b.inputMove(c.touches[0].pageX,c.touches[0].pageY,c.timeStamp,c)
},false);i.addEventListener(a,"touchend",function(c){b.inputEnd(c.timeStamp,c)},false);
i.addEventListener(a,"touchcancel",function(c){b.inputEnd(c.timeStamp,c)},false)
}};j.exports=g},{"ac-base":false}],55:[function(h,m,i){var k=h("ac-event-emitter").EventEmitter;
function j(){this.scrollLeft=0;this.scrollTop=0}var l=j.prototype=new k();l.scrollTo=function(a,b){if(a===this.scrollLeft&&b===this.scrollTop){return
}this.scrollLeft=a;this.scrollTop=b;this.trigger("scroll",{scrollTop:b,scrollLeft:a})
};m.exports=j},{"ac-event-emitter":false}],56:[function(d,g,f){g.exports.InlineStyleRenderer=d("./ac-style-renderer/InlineStyleRenderer");
g.exports.LogRenderer=d("./ac-style-renderer/LogRenderer")},{"./ac-style-renderer/InlineStyleRenderer":57,"./ac-style-renderer/LogRenderer":58}],57:[function(j,i,k){var h=(function(){var a,b;
if(h){return}b=document.createElement("div");a=["transform","webkitTransform","MozTransform","msTransform","oTransform"];
a.some(function(c){if(c in b.style){h=c;return true}});return h})();var g={transformFunctions:["none","matrix","translate","translateX","translateY","scale","scaleX","scaleY","rotate","skewX","skewY","matrix3d","translate3d","translateZ","scale3d","scaleZ","rotate3d","rotateX","rotateY","rotateZ","perspective"],render:function(a,c){var b=this._parseProps(c);
b.forEach(function(d){a.style[d.prop]=d.value})},_mergeTransformProps:function(b){var a=b.reduce(this._partialPropValue.bind(this),"");
return{prop:h,value:a}},_partialPropValue:function(c,b){var a=this._parseTransformFunction(b.prop);
var d=[c," ",a,"(",b.value,")"].join("");return d},_parseTransformFunction:function(a){return a.replace("transform-","")
},_isTransformFunction:function(a){return this.transformFunctions.indexOf(a)!==-1
},_parseProps:function(b){var c=[];var d=[];var r;var a;var q;for(var f=0,p=b.length;
f<p;f++){q=b[f];r=this._isTransformFunction(q.prop);[].push.call(r?d:c,q)}if(d.length){a=this._mergeTransformProps(d);
c.push(a)}return c}};i.exports=g},{}],58:[function(d,g,f){g.exports={render:function(a,b){var c=(arguments.length<2)?a:b;
console.log(c)}}},{}],59:[function(d,g,f){f.Gallery=d("./ac-gallery/Gallery");f.builder=d("./ac-gallery/builder");
f.Trigger=d("./ac-gallery/controller/Trigger");f.MediaSegue=d("./ac-gallery/segue/MediaSegue");
f.MediaRenderer=d("./ac-gallery/segue/media/MediaRenderer");f.AnimationSequenceSegue=d("./ac-gallery/segue/AnimationSequence");
f.CSSTransitionSegue=d("./ac-gallery/segue/CSSTransition");f.FadeInCSSTransition=d("./ac-gallery/segue/FadeInCSSTransition");
f.fadeInKeyframesGenerator=d("./ac-gallery/keyframe/fadeInKeyframesGenerator");
f.crossFadeKeyframesGenerator=d("./ac-gallery/keyframe/crossFadeKeyframesGenerator");
f.showHideKeyframesGenerator=d("./ac-gallery/keyframe/showHideKeyframesGenerator");
f.horizontalSliderKeyframesGenerator=d("./ac-gallery/keyframe/horizontalSliderKeyframesGenerator");
f.Touch=d("./ac-gallery/controller/Touch")},{"./ac-gallery/Gallery":60,"./ac-gallery/builder":61,"./ac-gallery/controller/Touch":62,"./ac-gallery/controller/Trigger":63,"./ac-gallery/keyframe/crossFadeKeyframesGenerator":71,"./ac-gallery/keyframe/fadeInKeyframesGenerator":72,"./ac-gallery/keyframe/horizontalSliderKeyframesGenerator":73,"./ac-gallery/keyframe/showHideKeyframesGenerator":74,"./ac-gallery/segue/AnimationSequence":78,"./ac-gallery/segue/CSSTransition":79,"./ac-gallery/segue/FadeInCSSTransition":80,"./ac-gallery/segue/MediaSegue":81,"./ac-gallery/segue/media/MediaRenderer":84}],60:[function(v,w,r){var o=v("ac-deferred").Deferred;
var m=v("ac-event-emitter").EventEmitter;var u=v("ac-base").Object;var s=v("./generator/Timeline");
var n=v("./segue/Segue");var t={transitionDuration:0.4,transitionEasing:"linear",locks:true,endless:false};
function p(b,a){var c;a=a||{};if(!b){throw new TypeError("Could not create gallery, no keyframes were specified")
}this._keyboard=null;c=u.clone(t);this.setOptions(u.extend(c,a),{replace:true});
if(this.options.keyboard){this.setKeyboard(this.options.keyboard)}this._keyframes=b;
this._selected=0;this._locked=false;var d=this.getTransitionDuration();var f=n.create({duration:0});
this._keyframes[0].draw()}var q=p.prototype=new m();q.setOptions=function(b,a){a=a||{};
if(a.replace===true){this.options=b}else{this.options=u.extend(this.options,b)}return this
};q.getSelectedKeyframe=function(){return this._keyframes[this._selected]};q.getSelected=function(){return this.getSelectedKeyframe.apply(this,arguments)
};q.getKeyframes=function(){return this._keyframes};q.getKeyframeIndex=function(a){return this._keyframes.indexOf(a)
};q.addKeyframe=function(b,a){a=a||{};if(typeof a.index!=="number"){this._keyframes.push(b)
}else{this._keyframes.splice(a.index,0,b)}this._trigger("keyframeAdd",{keyframe:b,index:this.getKeyframeIndex(b)},a);
return this};q.removeKeyframe=function(c,a){var b;a=a||{};if(this.getSelected()===c){throw new Error("Could not remove keyframe, it is the current selected Keyframe instance.")
}b=this.getKeyframeIndex(c);this._keyframes.splice(b,1);this._trigger("keyframeRemove",{keyframe:c,index:b},a);
return this};q.containsKeyframe=function(a){return(this._keyframes.indexOf(a)!==-1)
};q.numKeyframes=function(){return this._keyframes.length};q.eachKeyframe=function(b,a){this._keyframes.forEach(function(){b.apply(a,arguments)
});return this};q.getNext=function(){var a=this.getSelectedIndex()+1;var b;if(this.isEndless()===true&&a===this.numKeyframes()){a=0
}b=this._keyframes[a];if(b===undefined){b=null}return b};q.getPrevious=function(){var a=this.getSelectedIndex()-1;
var b;if(this.isEndless()===true&&a<0){a=this.numKeyframes()-1}b=this._keyframes[a];
if(b===undefined){b=null}return b};q.getSelectedIndex=function(){return this._selected
};q.showNext=function(a){var b=new o();var c=this.getNext();var d=b.promise();if(c!==null){d=this.show(c,a)
}else{b.reject()}return d};q.showPrevious=function(a){var b=new o();var d=this.getPrevious();
var c=b.promise();if(d!==null){c=this.show(d,a)}else{b.reject()}return c};q.showFirst=function(a){var b=this.getFirst();
return this.show(b,a)};q.showLast=function(a){return this.show(this.getLast(),a)
};q.getLastIndex=function(){return this._keyframes.length-1};q.getLast=function(){return this._keyframes[this.getLastIndex()]
};q._trigger=function(a,b,c){if(c.silent===true){return}b.target=this;this.trigger(a,b)
};q.getTransitionDuration=function(){return this.options.transitionDuration};q.setTransitionDuration=function(b,c){var a=this.options.transitionDuration;
this.options.transitionDuration=b;this._trigger("transition-duration-change",{previous:a,duration:b},c||{})
};q.setTransitionEasing=function(b,a){var c=this.options.transitionEasing;this.options.transitionEasing=b;
this._trigger("transition-easing-change",{previous:c,easing:b},a||{})};q.toTimeline=function(b,c){var a=new s(this,b,c);
return a.getTimeline()};q.getFirst=function(){return this._keyframes[0]};q.getLocked=function(){return this._locked
};q.isLocked=function(){return this.getLocked()};q.setLocked=function(a){this._locked=a;
return this._locked};q.getEngaged=function(){return this._engaged};q.setEngaged=function(a){this._engaged=a;
return this._engaged};q.isEndless=function(){return this.options.endless};q.show=function(f,h){var b=new o();
var i;var a;var g;var d=n.create({duration:this.options.transitionDuration,easing:this.options.transitionEasing});
var c=b.promise();h=h||{};if(this.options.locks===true&&this.isLocked()===true){b.reject();
return c}this._locked=true;i=this._keyframes[this._selected];if(typeof f==="number"){a=this._keyframes[f]
}else{if(typeof f==="string"){a=this._keyframes.filter(function(j){return(j.id===f)
})[0]}else{a=f}}if(a===null){throw new TypeError('Could not show Keyframe with supplied query. Query "'+f+'" returned no items.')
}else{if(a===i){b.resolve();this._locked=false;return c}}g=u.extend({outgoing:i,incoming:a},h);
this._trigger("willShow",g,h);if(h.useTransition===false){c=c.then(this._afterShow.bind(this,i,a,g,h));
b.resolve();return c}return d.play(i,a).then(this._afterShow.bind(this,i,a,g,h))
};q.hasKeyboard=function(){return this._keyboard!==null};q.getKeyboard=function(){return this._keyboard
};q.setKeyboard=function(a){if(this._keyboard!==null){this._keyboard.removeKeyDown();
this._keyboard.removeKeyUp()}this._keyboard=a;return this};q.keyboardAddKeyDown=function(){this._keyboard.addKeyDown.apply(this._keyboard,arguments);
return this};q.keyboardAddKeyUp=function(){this._keyboard.addKeyUp.apply(this._keyboard,arguments);
return this};q.keyboardRemoveKeyDown=function(){this._keyboard.removeKeyDown.apply(this._keyboard,arguments);
return this};q.keyboardRemoveKeyUp=function(){this._keyboard.removeKeyUp.apply(this._keyboard,arguments);
return this};q.showPrevious=function(a){var b=new o();var d=this.getPrevious();
var c=b.promise();if(d!==null){c=this.show(d,a)}else{b.reject()}return c};q._afterShow=function(c,a,b,d){this.eachKeyframe(function(f,g){if(f.id===a.id){this._selected=g
}},this);this._locked=false;return this._trigger("didShow",b,d)};w.exports=p},{"./generator/Timeline":64,"./segue/Segue":82,"ac-base":false,"ac-event-emitter":false}],61:[function(Q,X,B){var A=Q("ac-base").Object;
var C=Q("ac-base").Element;var O=Q("ac-base").Environment;var H=Q("ac-keyboard");
var T=Q("ac-keyframe").Keyframe;var P;try{P=Q("ac-analytics").observer.Gallery}catch(G){}var K=Q("./Gallery");
var V=Q("./controller/Trigger");var S=Q("./observer/TriggerPainter");var R=Q("./observer/PreviousNextTriggerPainter");
var Y=Q("./observer/ElementTracker");var D=Q("./keyboard/defaultMap");var I=Q("./keyframe/crossFadeKeyframesGenerator");
var N=Q("./keyframe/showHideKeyframesGenerator");var U=Q("./touch/builder");var W="Could not create gallery: there are both custom keyframes and keyframe elements specified";
var J="Could not create gallery: there are no keyframes or elements to generate keyframes from";
var L="Could not create gallery: there is no touch element, but requested touches to be turned on";
var E="Could not create gallery: triggerSelector should be a string";var F={locks:true,shouldUseKeyboard:true,keyboardMap:D};
X.exports=function M(h){h=h||{};h=A.extend(A.clone(F),h);var a=h.keyframes||[];
var k=h.keyframeElements||[];var f=h.shouldUseKeyboard||true;var m,g,b,d,j,c,i,l;
if(h.keyframes&&h.keyframeElements){throw new Error(W)}if(!a||a.length===0){if(k.length===0){throw new Error(J)
}else{k=Array.prototype.slice.call(k);if(O.Feature.cssPropertyAvailable("opacity")&&O.Feature.cssPropertyAvailable("transition")){a=I(k)
}else{a=N(k)}}}h.keyboard=h.keyboard||new H.Keyboard();if(h.shouldUseKeyboard!==true){h.keyboard=undefined
}g=new K(a,h);if(g.hasKeyboard()){g.keyboardAddKeyDown(h.keyboardMap,g)}if(C.isElement(h.engagementElement)){c=new Y(g,h.engagementElement)
}if(h.triggerSelector){if(typeof h.triggerSelector!=="string"){throw new Error(E)
}else{b=new V({gallery:g,el:h.triggerSelector});d=(h.activeTriggerClassname)?new S(g,h.triggerSelector,h.activeTriggerClassname):new S(g,h.triggerSelector);
g.on("willShow",d._paint,d);if(!g.isEndless()){j=new R(d);g.on("willShow",j._paint,j)
}}}if(h.touch){if(O.Feature.touchAvailable()&&h.touch!==false){if(!C.isElement(h.touchElement)){throw new Error(L)
}else{i=U(h.touchElement,g,h)}}}if(typeof P==="function"){l=new P(g,((typeof h.analytics==="object")?h.analytics:{}))
}m={gallery:g,elementTracker:c,trigger:b,triggerPainter:d,touchController:i,analytics:l};
return m}},{"./Gallery":60,"./controller/Trigger":63,"./keyboard/defaultMap":70,"./keyframe/crossFadeKeyframesGenerator":71,"./keyframe/showHideKeyframesGenerator":74,"./observer/ElementTracker":75,"./observer/PreviousNextTriggerPainter":76,"./observer/TriggerPainter":77,"./touch/builder":87,"ac-base":false,"ac-keyboard":43,"ac-keyframe":112}],62:[function(u,w,r){var t=u("ac-base").Object;
var s=u("ac-scrollview").ScrollView;var o=u("./../touch/TimelineRenderer");var y=u("ac-animation-sequencer").BasicPlayer;
var n=u("ac-animation-sequencer").TweenClip;var q=u("ac-base").EasingFunctions;
var p=u("ac-scrollview").ScrollBounds;var x=u("./../touch/GalleryGrid");function v(b,d,c){var a={axis:"x",scrollVelocity:1};
this._element=b;this.options=t.extend(a,c||{});this._gallery=d;this._axisString=(this.options.axis==="x")?"left":"top";
if(!this._gallery){throw new TypeError('Could not instantiate Touch Controller. "'+this._gallery+'" is not a valid gallery')
}this._player=this.options.player||new y(d.toTimeline(this.options.bounceOutKeyframe,this.options.bounceInKeyframe));
this._player.setCurrentTime(this._gallery.getTransitionDuration());this._inertiaPlayer=null;
this._enRoute=false;this._runningIndex=this._gallery.getSelectedIndex();this._scrollView=this.options.scrollView||this.__buildScrollView();
this._scrollRenderer=this.options.scrollRenderer||this.__buildScrollRenderer();
this._scrollRenderer.render(this._scrollView.scrollLeft);this._gallery.on("didShow",this.onDidShow,this);
this._scrollView.on("scrollStart",this.onScrollStart,this);this._scrollView.on("inertiaStart",this.onInertiaStart,this);
this._scrollView.on("scroll",this.onScroll,this)}v.prototype={__generateEasingFunction:function(a){return function(c,f,d,b){return q.easeOutBack(c,f,d,b,a)
}},__buildScrollView:function(){var a=this._element.offsetWidth/this.options.scrollVelocity;
var c=this._element.offsetHeight/this.options.scrollVelocity;var b=t.extend(t.clone(this.options),{innerWidth:a*this._gallery.numKeyframes(),innerHeight:c*this._gallery.numKeyframes(),startBounceDistance:a,endBounceDistance:a,touchContainerWidth:a,touchContainerHeight:c});
return new s(this._element,b)},__buildScrollRenderer:function(){var a=t.extend(t.clone(this.options),{bounceDuration:this._gallery.getTransitionDuration()});
return new o(this._player,this._scrollView,a)},getAxis:function(){return this.options.axis||"x"
},getScrollView:function(){return this._scrollView},onDidShow:function(){var a=this._gallery.getSelectedIndex();
this._runningIndex=a;this._scrollView.scrollTo(a*this._scrollView.getTouchContainerWidth(),a*this._scrollView.getTouchContainerHeight())
},onScrollStart:function(){if(this._inertiaPlayer&&typeof this._inertiaPlayer.pause==="function"){this._inertiaPlayer.pause()
}this._scrollStartTimeout=window.setTimeout(function(){this._gallery.trigger("touchStart")
}.bind(this),100)},onScroll:function(a){var b=a.scrollLeft;var c=a.scrollTop;this._scrollRenderer.render(b,c);
this._gallery.trigger("scroll",{scrollLeft:b,scrollTop:c})},onInertiaStart:function(l){l.preventDefault();
this._gallery.trigger("touchEnd");var m=l.inertia;var f=new x(this._gallery,this._scrollView);
var c=new p(m,this._runningIndex,f.getGrid(),this.options);var B=m.calculateFinalInertiaPosition();
var a=c.calculateTargetIndex();var j=0.4;var C=c.calculateFuturePositions().left;
var d=3;var g=Math.abs(c.calculateFuturePositions().left-l.position.left);if(g!==0){j*=(Math.abs(g)/this._scrollView.getTouchContainerWidth())
}if((a-this._runningIndex)!==0){j=j/Math.abs(a-this._runningIndex)}var h=(Math.abs(g)/this._scrollView.getTouchContainerWidth());
var b=0;if(j<0.32&&j>0.15){j+=0.2;b=1.4}else{if(j<=0.15){j+=0.3;b=1.7}}if(b<0){b=0
}else{if(b>d){b=d}}var k=Math.abs(l.velocity.top)-3;if(k<0){k=0}else{if(k>d){k=d
}}var i=new n(j,[{property:"scrollLeft",from:l.position.left,to:c.calculateFuturePositions().left,easing:this.__generateEasingFunction(b)},{property:"scrollTop",from:l.position.top,to:c.calculateFuturePositions().top,easing:this.__generateEasingFunction(k)}]);
if(this._inertiaPlayer){this._inertiaPlayer.off("ended")}this._inertiaPlayer=new y(i);
i.on("tween_update",function(z){this._scrollView.scrollTo(z.scrollLeft,z.scrollTop)
},this);this._inertiaPlayer.play();this._inertiaPlayer.on("ended",function(){this._enRoute=false;
this._gallery.show(a,{useTransition:false,interactionEvent:l.originalEvent})},this);
this._runningIndex=a;this._enRoute=true}};w.exports=v},{"./../touch/GalleryGrid":85,"./../touch/TimelineRenderer":86,"ac-animation-sequencer":8,"ac-base":false,"ac-scrollview":47}],63:[function(o,n,i){var m=o("ac-base").Element;
var k=o("ac-base").Event;function j(a){a=a||{};this._el=a.el||"";this._id=a.id||"href";
this._method=a.method||"data-method";this.setGallery(a.gallery)}var l=j.prototype;
l.setGallery=function(a){this._gallery=a;if(this._gallery!==undefined){this._addListener()
}};l.getGallery=function(){return this._gallery};l.setEl=function(a){this._el=a;
this._removeListener();if(this._gallery!==undefined){this._addListener()}};l.getEl=function(){return this._el
};l.destroy=function(){this._removeListener();this.func=function(){}};l._addListener=function(){if(this._el!==""){this.func=this._onClickTrigger.bind(this);
m.addEventDelegate(document,"click",this._el,this.func)}};l._removeListener=function(){if(this.func){m.removeEventDelegate(document,"click",this._el,this.func);
this.func=null}};l._onClickTrigger=function(a){k.stop(a.originalEvent);this._click(a.currentTarget,a.originalEvent)
};l._click=function(d,f){var b={interactionEvent:f};if(d.getAttribute(this._method)){var a=d.getAttribute(this._method);
if(typeof this._gallery[a]==="function"){this._gallery[a].call(this._gallery,b)
}else{throw new Error(a+" is not a valid method to call")}}else{if(d.getAttribute(this._id)){var c=d.getAttribute(this._id).split("#")[1];
if(c!==""){this._gallery.show(c,b)}else{throw new Error("Trigger has no ID or method")
}}else{throw new Error("Trigger has no ID or method")}}};n.exports=j},{"ac-base":false}],64:[function(q,r,n){var l=q("ac-animation-sequencer").Timeline;
var m=q("ac-keyframe").Interpolation;var k=q("./../segue/media/MediaClip");var o=q("ac-animation-sequencer").TimedClip;
var s=q("ac-animation-sequencer").CompositeClip;l.clipTypes.Media=k;function p(c,a,b){this._gallery=c;
this._bounceOutKeyframe=a;this._bounceInKeyframe=b}p.prototype={getGallery:function(){return this._gallery
},getTimeline:function(){var a;var c=[];var d=this._gallery.getKeyframes().slice(0);
if(this._bounceInKeyframe){d.unshift(this._bounceInKeyframe)}if(this._bounceOutKeyframe){d.push(this._bounceOutKeyframe)
}var f=new m();f.setDuration(this._gallery.getTransitionDuration());for(var b=1;
b<d.length;b+=1){f.setStartKeyframe(d[b-1]).setEndKeyframe(d[b]);a=f.getClip();
a=new o(a,{startDelay:(b-1)*this._gallery.getTransitionDuration(),fill:"none"});
c.push(a)}return new s(c)}};r.exports=p},{"./../segue/media/MediaClip":83,"ac-animation-sequencer":8,"ac-keyframe":112}],65:[function(m,l,o){var k=m("./../helper/isTransformProperty");
var i=m("./../helper/camelCaseToHyphen");var j=m("./../helper/canTransitionStyle");
var n={zIndex:true,display:true,visibility:true,position:true};l.exports=function(a,g,d,f){var b=[];
var s=false;var h=d;var c=g;f=(typeof f==="number")?" "+f+"s":"";var r=f;a.forEach(function(y){var x=y.property;
if(n[x]===true){return}var q=(typeof y.easing==="string")?y.easing:d;var p=(typeof y.duration==="number")?y.duration:g;
var w=(typeof y.delay==="number")?" "+y.delay+"s":f;if(!j(x)){return}if(!k(x)){b.push(i(x)+" "+p+"s "+q+w)
}else{c=p;h=q;r=w;s=true}});if(s===true){b.push("-webkit-transform "+g+"s "+h+r)
}return b.join(",")}},{"./../helper/camelCaseToHyphen":66,"./../helper/canTransitionStyle":67,"./../helper/isTransformProperty":68}],66:[function(d,g,f){g.exports=function(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],67:[function(f,i,g){var h=["display"];i.exports=function(a){return(h.indexOf(a)===-1)
}},{}],68:[function(f,h,g){var i=["matrix","translate","translateX","translateY","scale","scaleX","scaleY","rotate","skewX","skewY","matrix3d","translate3d","translateZ","scale3d","scaleZ","rotate3d","rotateX","rotateY","rotateZ","perspective"];
h.exports=function(a){return(i.indexOf(a)!==-1)}},{}],69:[function(o,n,k){var p=o("ac-deferred").Deferred;
var q=o("./buildTransitionString");var l=o("ac-style-renderer").InlineStyleRenderer;
var m=o("ac-base").Element;var j=o("ac-base").Object;n.exports=function(f,u,g,c,d){var t=new p();
var i=q(u,g,c,d);var b=[];var h;var a=function(r){if(r.target===f){m.removeVendorPrefixEventListener(f,"transitionEnd",a);
m.setVendorPrefixStyle(f,"transition","none");window.requestAnimationFrame(t.resolve.bind(t))
}};if(i!==""&&g!==0){m.addVendorPrefixEventListener(f,"transitionEnd",a);h=m.getVendorPrefixStyle(f,"transition")+",";
if(!/none/.test(h)&&h!==","){i=h+i}m.setVendorPrefixStyle(f,"transition",i)}else{window.requestAnimationFrame(t.resolve.bind(t))
}u.forEach(function(s){var r=j.clone(s);r.prop=r.property;if(r.units){r.value+=r.units
}b.push(r)});l.render(f,b);return t.promise()}},{"./buildTransitionString":65,"ac-base":false,"ac-style-renderer":56}],70:[function(g,k,h){var j=g("ac-keyboard").keys;
var i={};i[j.ARROW_LEFT]=function(a){a.preventDefault();if(this.getEngaged()){this.showPrevious({interactionEvent:a})
}};i[j.ARROW_RIGHT]=function(a){a.preventDefault();if(this.getEngaged()){this.showNext({interactionEvent:a})
}};k.exports=i},{"ac-keyboard":43}],71:[function(m,l,i){var k=m("ac-keyframe").Keyframe;
var h=m("ac-base").Object;var j={zIndex:1};l.exports=function(a,c){var b=[];c=h.extend(h.clone(j),c||{});
a.forEach(function(g,d){var f=[];a.forEach(function(q,p){f.push({element:q,props:[{property:"opacity",value:(p===d)?1:0},{property:"z-index",value:(p===d)?(c.zIndex+1):c.zIndex}]})
});b.push(new k(g.id,f))});return b}},{"ac-base":false,"ac-keyframe":112}],72:[function(q,p,k){var n=q("ac-keyframe").Keyframe;
var o=q("./../segue/FadeInCSSTransition");var m=q("./../segue/CSSTransition");var j=q("ac-base").Object;
var l={zIndex:1};p.exports=function(a,c){var b=[];c=j.extend(j.clone(l),c||{});
a.forEach(function(d,f){var g=[];a.forEach(function(i,h){g.push({SegueType:o,element:i,props:[{property:"opacity",value:(h===f)?"1":"0"},{property:"zIndex",value:(h===f)?(c.zIndex+1):c.zIndex}]})
});b.push(new n(d.id,g))});return b}},{"./../segue/CSSTransition":79,"./../segue/FadeInCSSTransition":80,"ac-base":false,"ac-keyframe":112}],73:[function(o,n,i){var k=o("ac-base").Environment.Feature;
var m=o("ac-keyframe").Keyframe;var l=o("./../segue/CSSTransition");var j=o("./../segue/AnimationSequence");
n.exports=function(g){var b=(k.cssPropertyAvailable("transform"))?"translateX":"left";
var a=(k.cssPropertyAvailable("transition"))?l:j;var d={keyframes:[],bounceInKeyframe:null,bounceOutKeyframe:null};
var h=g[0].offsetWidth;g.forEach(function(u,s){var t=[];g.forEach(function(q,p){t.push({element:q,SegueType:a,props:[{property:b,value:-(h*s),units:"px"}]})
});d.keyframes.push(new m(u.id,t))});var f=[];g.forEach(function(s,r){f.push({element:s,props:[{property:b,value:h,units:"px"}]})
});d.bounceInKeyframe=new m("bounceIn",f);var c=[];g.forEach(function(s,r){c.push({element:s,props:[{property:b,value:-(h*(g.length)),units:"px"}]})
});d.bounceOutKeyframe=new m("bounceOut",c);return d}},{"./../segue/AnimationSequence":78,"./../segue/CSSTransition":79,"ac-base":false,"ac-keyframe":112}],74:[function(r,s,p){var m=r("ac-keyframe").Keyframe;
var o=r("ac-animation-sequencer").ElementClip;var k=r("ac-animation-sequencer").BaseClip;
var n=r("ac-animation-sequencer").Timeline;var q=r("ac-base").Object;var l=function(){o.apply(this,arguments)
};l.prototype=new k();q.extend(l.prototype,o.prototype);l.prototype.update=function(a){if(this.props.length<1){return
}var b=this.props.map(function(d){var c=d.units;var f=d.to;f=(c?(f+c):f);return{prop:d.property,value:f}
});this._renderer.render(this.el,b)};l.create=function(a){return new l(a)};n.clipTypes.Gallery_ShowHide=l;
s.exports=function(a){var b=[];a.forEach(function(c,d){var f=[];a.forEach(function(h,g){f.push({element:h,clipType:"Gallery_ShowHide",props:[{property:"display",value:(g===d)?"block":"none"}]})
});b.push(new m(c.id,f))});return b}},{"ac-animation-sequencer":8,"ac-base":false,"ac-keyframe":112}],75:[function(h,m,i){var l=h("ac-base").Element;
var k=h("ac-element-tracker");function j(c,b){if(!l.isElement(b)){return}this._gallery=c;
this._elementTracker=k;var a=this._elementTracker.addElement({element:b,inViewThreshold:0.33});
this._gallery.setEngaged(false);a.on("thresholdenter",this._onEnterWithinThreshold,this);
a.on("thresholdexit",this._onExitWithinThreshold,this);this._elementTracker.start();
return this}j.prototype._onEnterWithinThreshold=function(a){this._gallery.setEngaged(true)
};j.prototype._onExitWithinThreshold=function(a){this._gallery.setEngaged(false)
};m.exports=j},{"ac-base":false,"ac-element-tracker":40}],76:[function(m,l,h){var k=m("ac-base").Element;
function i(b){if(b.getGallery()&&b.getGallery().isEndless()){return}this.triggerPainter=b;
var a={incoming:b.getGallery().getSelected()};this._paint(a)}var j=i.prototype;
j._paint=function(d){var a=d.incoming.id;var q=this.triggerPainter;var f=q.getGallery();
var p=q.getTriggerSelector();var b=k.selectAll(p+"[data-method]");var c=k.selectAll(p+'[data-method="showPrevious"]');
var g=k.selectAll(p+'[data-method="showNext"]');if(b){q._unpaintTriggers(b,"disabled");
if(a===f.getFirst().id){q._paintTriggers(c,"disabled")}else{if(a===f.getLast().id){q._paintTriggers(g,"disabled")
}}}};l.exports=i},{"ac-base":false}],77:[function(m,l,h){var k=m("ac-base").Element;
function i(c,b,a){this.setGallery(c);this.setTriggerSelector(b);a=a||"current";
this.setActiveTriggerClassname(a);var d={incoming:this._gallery.getSelected()};
this._paint(d)}var j=i.prototype;j.setGallery=function(a){this._gallery=a};j.getGallery=function(){return this._gallery
};j.setTriggerSelector=function(a){this._triggerSelector=a};j.getTriggerSelector=function(){return this._triggerSelector
};j.setActiveTriggerClassname=function(a){this._activeTriggerClassname=a};j.getActiveTriggerClassname=function(){return this._activeTriggerClassname
};j._paint=function(f){var c=f.incoming.id;var a=this.getTriggerSelector();var g=this.getActiveTriggerClassname();
var d=k.selectAll(a+"."+g);var b=k.selectAll(a+'[href="#'+c+'"]');this._unpaintTriggers(d,g);
this._paintTriggers(b,g)};j._paintTriggers=function(a,b){var c,f,d;for(c=0,f=a.length;
c<f;c+=1){d=a[c];k.addClassName(d,b)}};j._unpaintTriggers=function(a,b){var c,f,d;
for(c=0,f=a.length;c<f;c+=1){d=a[c];k.removeClassName(d,b)}};l.exports=i},{"ac-base":false}],78:[function(p,o,j){var m=p("ac-animation-sequencer").Timeline;
var k=p("ac-animation-sequencer").BasicPlayer;var q=p("ac-deferred").Deferred;var n=p("ac-keyframe").Interpolation;
function l(c,d,b,a){this._from=c;this._to=d;this._duration=b;this._easing=a}l.prototype={animate:function(){var a=new q();
var f=this._easing;var d=new n();d.setDuration(this._duration).setStartKeyframe(this._from).setEndKeyframe(this._to);
var b=d.getClip();var c=new k(b);c.once("ended",a.resolve,a);c.play();return a.promise()
}};l.create=function(a){return new l(a.from,a.to,a.duration,a.easing)};o.exports=l
},{"ac-animation-sequencer":8,"ac-keyframe":112}],79:[function(m,l,h){var j=m("./../helper/playCSSTransition");
var i=m("ac-deferred");function k(d,c,b,a){this._toKeyframe=d;this._fromKeyframe=c;
this._duration=b;this._easing=a}k.prototype={animate:function(){var b=this._duration;
var a=this._easing;var c=this._toKeyframe.getStyles().map(function(d){return j(d.element,d.props,b,a)
});return i.all(c)}};k.create=function(a){return new k(a.to,a.from,a.duration,a.easing)
};l.exports=k},{"./../helper/playCSSTransition":69}],80:[function(q,r,p){var m=q("./../helper/playCSSTransition");
var o=q("ac-deferred");var n=q("ac-keyframe").Keyframe;var s=q("ac-style-renderer").InlineStyleRenderer;
function l(a){var b={prop:a.property,value:a.value,units:a.units};return b}function k(c,b,a,d){this._toKeyframe=c;
this._fromKeyframe=b;this._duration=a;this._easing=d;this._beforeStyles=[];this._afterStyles=[]
}k.prototype={_renderBeforeStyles:function(){this._beforeStyles.forEach(function(a){s.render(a.element,a.props.map(l))
})},_renderAfterStyles:function(){this._afterStyles.forEach(function(a){s.render(a.element,a.props.map(l))
})},_processIncomingStyle:function(g){var a;var d=this._toKeyframe.findStyle(g.element,"zIndex");
var f=this._fromKeyframe;var h=this._beforeStyles;var c=this._afterStyles;var b={element:g.element,props:[]};
g.props.forEach(function(i){if(i.property==="opacity"){a=f.findStyle(g.element,i.property).value;
if(parseFloat(a)<parseFloat(i.value)){b.props.push(i);if(d){h.push({element:g.element,props:[d]})
}}else{c.push({element:g.element,props:[i]});if(d){c[c.length-1].props.push(d)}}}else{b.props.push(i)
}});return b},animate:function(){var a=this._duration;var d=this._easing;var f=this._fromKeyframe;
var g=this._toKeyframe;var b=this._toKeyframe.getStyles().map(this._processIncomingStyle.bind(this));
this._renderBeforeStyles();var c=b.map(function(h){return m(h.element,h.props,a,d)
});return o.all(c).then(this._renderAfterStyles.bind(this))}};k.create=function(a){return new k(a.to,a.from,a.duration,a.easing)
};r.exports=k},{"./../helper/playCSSTransition":69,"ac-keyframe":112,"ac-style-renderer":56}],81:[function(o,n,i){var j=o("ac-deferred");
var m=o("ac-animation-sequencer").Pause;var k=o("ac-animation-sequencer").ReversibleVideo;
function l(a,b,c){this._from=a;this._to=b;this._duration=c}l.prototype={animate:function(){var c=[];
var b=this._duration;var a=this._from;this._to.getStyles().forEach(function(d){d.props.forEach(function(g){var w;
var h;var f;var u;var v;var t;if(g.property==="time"){h=new j.Deferred();u=a.findStyle(d.element,g.property);
v=(u.value<g.value)?1:-1;w=new k(d.element);if(g.value!==0){f=new m(w,[0,g.value]);
f._monitor._init();f.once("pauseenter",function(){f=undefined;h.resolve()})}else{if(g.value===0){t=function(){if(d.element.currentTime===0){h.resolve()
}d.element.removeEventListener("timeupdate",t)};d.element.addEventListener("timeupdate",t)
}else{if(g.value===this.element.duration){t=function(){if(d.element.currentTime===this.element.duration){h.resolve()
}d.element.removeEventListener("timeupdate",t)};d.element.addEventListener("timeupdate",t)
}}}w.playbackRate=(Math.abs(u.value-g.value)/b)*v;w.play();c.push(h.promise())}})
});return j.all(c)}};l.create=function(a){return new l(a.from,a.to,a.duration,a.easing)
};n.exports=l},{"ac-animation-sequencer":8}],82:[function(s,t,r){var u=s("./CSSTransition");
var l=s("./AnimationSequence");var m=s("./../helper/playCSSTransition");var q=s("ac-deferred");
var o=q.Deferred;var p=s("ac-keyframe").Keyframe;function n(b,a){this._duration=b;
this._easing=a||"linear"}n.prototype={_determineSegueType:function(a){var b;if(a.SegueType!==undefined){b=a.SegueType
}else{if(typeof a.clipType!=="undefined"&&a.clipType!=="Element"){b=l}else{b=u}}return b
},_sortPropertiesBySegueType:function(a){var c=[];function b(f){for(var d=0;d<c.length;
d+=1){if(c[d].Type===f){return c[d]}}}a.getStyles().forEach(function(f){var d=this._determineSegueType(f);
var g=b(f.SegueType);if(!g){g={Type:d,properties:[]};c.push(g)}g.properties.push({clipType:f.clipType,element:f.element,props:f.props})
}.bind(this));return c},_transition:function(j,f){var c=[];var h;var g=this._duration;
var d=this._easing;if(this._duration===0){return f.draw()}var b=(g===0)?f.clone():j.diff(f);
var a=this._sortPropertiesBySegueType(b);var i=this._sortPropertiesBySegueType(f.diff(j));
a.forEach(function(z,B){var C=new p("to",z.properties);var k=new p("from",i[B].properties);
var A=z.Type.create({duration:g,easing:d,to:C,from:k});c.push(A.animate())});return q.all(c)
},getDuration:function(){return this._duration},setDuration:function(a){this._duration=a;
return this},getEasing:function(){return this._easing},setEasing:function(a){this._easing=a;
return this},play:function(a,b){return this._transition(a,b)}};n.create=function(a){return new n(a.duration,a.easing,a)
};t.exports=n},{"./../helper/playCSSTransition":69,"./AnimationSequence":78,"./CSSTransition":79,"ac-keyframe":112}],83:[function(o,n,q){var k=o("ac-animation-sequencer").TweenClip;
var l=o("./MediaRenderer");var p=o("ac-base").Object;function j(){k.apply(this,arguments)
}var m=j.prototype=new k();j.create=function(a){a=a||{};if(!a.element){throw new TypeError("MediaClip could not be created: "+a.element+" is not a valid element")
}a.renderer=new l(a.element);return new j(a)};n.exports=j},{"./MediaRenderer":84,"ac-animation-sequencer":8,"ac-base":false}],84:[function(g,k,h){function i(a){this._element=a
}var j=i.prototype;j.render=function(a,b){b.forEach(function(c){if(c.prop==="time"){if(a.currentTime!==c.value){a.currentTime=c.value
}}})};k.exports=i},{}],85:[function(i,h,f){function g(b,a){this._gallery=b;this._scrollView=a
}g.prototype={getGrid:function(){var a={left:[],top:[]};for(var b=0;b<this._gallery.numKeyframes();
b+=1){a.left.push(this._scrollView.getTouchContainerWidth()*b);a.top.push(this._scrollView.getTouchContainerHeight()*b)
}return a}};h.exports=g},{}],86:[function(m,k,i){var h=m("ac-base").Object;var j={axis:"x",bounceDuration:0};
function l(b,a,c){this.options=h.extend(j,c||{});this._player=b;this._touchScrollBounds=a
}l.prototype={_calculateScrollPercentage:function(a,b){return{left:a/this._touchScrollBounds.getScrollXDistance(),top:b/this._touchScrollBounds.getScrollYDistance()}
},calculateCurrentTime:function(b,c){var f=this._calculateScrollPercentage(b,c);
var a=(this.options.axis==="x")?"left":"top";var d=(this._player.getDuration()-(this.options.bounceDuration*2))*f[a];
return this.options.bounceDuration+d},render:function(a,b){this._player.setCurrentTime(this.calculateCurrentTime(a,b));
return this}};k.exports=l},{"ac-base":false}],87:[function(h,m,i){var l=h("ac-base").Element;
var k=h("./../controller/Touch");m.exports=function j(a,c,b){b=b||{};var d=new k(a,c,b);
return d}},{"./../controller/Touch":62,"ac-base":false}],88:[function(d,g,f){g.exports=d(8)
},{"./ac-animation-sequencer/Clock":89,"./ac-animation-sequencer/PlayerMonitor":90,"./ac-animation-sequencer/Timeline":91,"./ac-animation-sequencer/Tween":92,"./ac-animation-sequencer/adapters/ReversibleVideo":95,"./ac-animation-sequencer/clip/BaseClip":96,"./ac-animation-sequencer/clip/CompositeClip":97,"./ac-animation-sequencer/clip/ElementClip":98,"./ac-animation-sequencer/clip/TimedClip":99,"./ac-animation-sequencer/clip/TweenClip":100,"./ac-animation-sequencer/clip/VideoClip":101,"./ac-animation-sequencer/controllers/MediaGroup":102,"./ac-animation-sequencer/controllers/Pause":103,"./ac-animation-sequencer/player/BasicPlayer":104,"./ac-animation-sequencer/player/MediaPlayer":105}],89:[function(d,g,f){g.exports=d(9)
},{}],90:[function(d,g,f){g.exports=d(10)},{"./vendor/utils":108,"ac-event-emitter":false}],91:[function(d,g,f){g.exports=d(11)
},{"./clip/CompositeClip":97,"./clip/ElementClip":98,"./clip/TimedClip":99,"./clip/TweenClip":100}],92:[function(d,g,f){g.exports=d(12)
},{"./vendor/EasingFunctions":106,"./vendor/KeySpline":107,"./vendor/utils":108}],93:[function(d,g,f){g.exports=d(13)
},{}],94:[function(d,g,f){g.exports=d(14)},{"ac-event-emitter":false}],95:[function(d,g,f){g.exports=d(15)
},{"ac-event-emitter":false}],96:[function(d,g,f){g.exports=d(16)},{"../vendor/EasingFunctions":106,"../vendor/KeySpline":107,"ac-event-emitter":false,"ac-style-renderer":109}],97:[function(d,g,f){g.exports=d(17)
},{"./TimedClip":99}],98:[function(d,g,f){g.exports=d(18)},{"../Tween":92,"../vendor/utils":108,"./BaseClip":96,"ac-style-renderer":109}],99:[function(d,g,f){g.exports=d(19)
},{"../vendor/utils":108}],100:[function(d,g,f){g.exports=d(20)},{"./BaseClip":96}],101:[function(d,g,f){g.exports=d(21)
},{"../adapters/MediaAsClip":93}],102:[function(d,g,f){g.exports=d(22)},{"../Clock":89,"../vendor/utils":108,"ac-event-emitter":false}],103:[function(d,g,f){g.exports=d(23)
},{"../PlayerMonitor":90,"ac-event-emitter":false}],104:[function(d,g,f){g.exports=d(24)
},{"../Clock":89,"../adapters/PlayerAsMedia":94,"ac-event-emitter":false}],105:[function(d,g,f){g.exports=d(25)
},{"./BasicPlayer":104}],106:[function(d,g,f){g.exports=d(26)},{}],107:[function(d,g,f){g.exports=d(27)
},{}],108:[function(d,g,f){g.exports=d(28)},{}],109:[function(d,g,f){g.exports=d(56)
},{"./ac-style-renderer/InlineStyleRenderer":110,"./ac-style-renderer/LogRenderer":111}],110:[function(d,g,f){g.exports=d(57)
},{}],111:[function(d,g,f){g.exports=d(58)},{}],112:[function(d,g,f){f.Keyframe=d("./ac-keyframe/Keyframe");
f.Interpolation=d("./ac-keyframe/Interpolation")},{"./ac-keyframe/Interpolation":113,"./ac-keyframe/Keyframe":114}],113:[function(g,k,h){var i=g("ac-animation-sequencer").Timeline;
function j(){this._start=null;this._end=null;this._duration=null}j.prototype={_mergeToClip:function(){var b=this._start;
var a=this._end;var d=this._duration;var c=function(f){var m={element:f.element,clip:f.clipType||"Element",duration:d,props:[]};
f.props.forEach(function(p){var q={property:p.property,from:p.value,to:p.value,easing:p.easing||"linear"};
if(p.units){q.units=p.units}var l=b.findStyle(f.element,p.property);if(l){q.from=l.value
}m.props.push(q)});return m};return a.getStyles().map(c)},setStartKeyframe:function(a){this._start=a;
return this},setEndKeyframe:function(a){this._end=a;return this},setDuration:function(a){this._duration=a;
return this},getClip:function(){return i.create(this._mergeToClip())}};k.exports=j
},{"ac-animation-sequencer":88}],114:[function(r,s,o){var k=r("./helper/isTransformProperty");
var q=r("ac-base").Object;var n=r("ac-deferred");var m=r("ac-animation-sequencer").Timeline;
var p={};function l(d,a,b){var c=q.clone(p);this.id=d;this._styles=a;this.options=q.extend(c,b||{})
}l.prototype={clone:function(){return new l(this.id,this._styles,this.options)},findStyle:function(b,a){var c=null;
this._styles.forEach(function(d){if(d.element===b){d.props.forEach(function(f){if(f.property===a){c=f
}})}});return c},getStyles:function(){return this._styles},__rafDraw:function(b,a){window.requestAnimationFrame(function(){b.update(b.getDuration());
a.resolve()})},draw:function(){var a=[];this.getStyles().forEach(function(h){var b=h.clipType||"Element";
var c=m.clipTypes[b];var f=[];var d=new n.Deferred();h.props.forEach(function(i){var j=q.clone(i);
j.from=j.to=j.value;j.easing="linear";f.push(j)});var g=c.create({element:h.element,props:f});
this.__rafDraw(g,d);a.push(d.promise())}.bind(this));return n.all(a)},diff:function(b){var c=[];
var d;var g=this.getStyles();var a=b.getStyles();var f;g.forEach(function(i,z){var y=i.element;
var x=i.props;var h={};var j=false;for(var A in a[z]){if(a[z].hasOwnProperty(A)){h[A]=a[z][A]
}}h.props=[];x.forEach(function(u){var t=u.property;var v=b.findStyle(y,t);if(v===null){h.props.push(u)
}else{if(v.value!==u.value||(k(t)&&j===true)){h.props.push(v);if(k(t)){j=true}}}});
if(h.props.length>0){c.push(h)}});return new l("diff",c,this.options)}};s.exports=l
},{"./helper/isTransformProperty":115,"ac-animation-sequencer":88,"ac-base":false}],115:[function(f,h,g){var i=["skew","scale","rotate","translateX","translateY","translateZ"];
h.exports=function(a){return(i.indexOf(a)!==-1)}},{}],116:[function(d,g,f){g.exports.SlideShow=d("./ac-slideshow/SlideShow")
},{"./ac-slideshow/SlideShow":117}],117:[function(m,l,o){var n=m("ac-base").Object;
var i={autoplay:true,pauseOnUserInteraction:true,initialDelay:1000,delayBetweenSlides:3000};
var k;function j(c,b){this.gallery=c;this.animationTimeout=null;this.options=b||{};
this.currentTime=this.currentTime();this._playing=false;this._progress=0;var a;
a=n.clone(i);this.setOptions(n.extend(a,this.options),{replace:true});if(this.options.autoplay===true){setTimeout(function(){this.play()
}.bind(this),this.options.initialDelay)}if(this.options.pauseOnUserInteraction===true){this.gallery.on("willShow",function(d){if(d.interactionEvent!==this){this.pause()
}},this)}}k=j.prototype;k.setOptions=function(a,b){b=b||{};if(b.replace===true){this.options=a
}else{this.options=n.extend(this.options,a)}return this};k.play=function(){this.animationTimeout=setInterval(function(){this.gallery.showNext({interactionEvent:this});
this._progress+=1}.bind(this),this.options.delayBetweenSlides);this._playing=true
};k.pause=function(){clearTimeout(this.animationTimeout);this._playing=false};k.currentTime=function(){return this.options.initialDelay+(this._progress*(this.options.delayBetweenSlides+(this.options.transitionDuration*1000)))
};l.exports=j},{"ac-base":false}],sAbXaO:[function(require,module,exports){
/*! Dust - Asynchronous Templating - v2.3.3
* http://linkedin.github.io/dustjs/
* Copyright (c) 2014 Aleksander Williams; Released under the MIT License */
(function(root){var dust={},NONE="NONE",ERROR="ERROR",WARN="WARN",INFO="INFO",DEBUG="DEBUG",loggingLevels=[DEBUG,INFO,WARN,ERROR,NONE],EMPTY_FUNC=function(){},logger=EMPTY_FUNC,loggerContext=this;
dust.debugLevel=NONE;dust.silenceErrors=false;if(root&&root.console&&root.console.log){logger=root.console.log;
loggerContext=root.console}dust.log=function(message,type){if(dust.isDebug&&dust.debugLevel===NONE){logger.call(loggerContext,'[!!!DEPRECATION WARNING!!!]: dust.isDebug is deprecated.  Set dust.debugLevel instead to the level of logging you want ["debug","info","warn","error","none"]');
dust.debugLevel=INFO}type=type||INFO;if(loggingLevels.indexOf(type)>=loggingLevels.indexOf(dust.debugLevel)){if(!dust.logQueue){dust.logQueue=[]
}dust.logQueue.push({message:message,type:type});logger.call(loggerContext,"[DUST "+type+"]: "+message)
}if(!dust.silenceErrors&&type===ERROR){if(typeof message==="string"){throw new Error(message)
}else{throw message}}};dust.onError=function(error,chunk){logger.call(loggerContext,"[!!!DEPRECATION WARNING!!!]: dust.onError will no longer return a chunk object.");
dust.log(error.message||error,ERROR);if(!dust.silenceErrors){throw error}else{return chunk
}};dust.helpers={};dust.cache={};dust.register=function(name,tmpl){if(!name){return
}dust.cache[name]=tmpl};dust.render=function(name,context,callback){var chunk=new Stub(callback).head;
try{dust.load(name,chunk,Context.wrap(context,name)).end()}catch(err){dust.log(err,ERROR)
}};dust.stream=function(name,context){var stream=new Stream();dust.nextTick(function(){try{dust.load(name,stream.head,Context.wrap(context,name)).end()
}catch(err){dust.log(err,ERROR)}});return stream};dust.renderSource=function(source,context,callback){return dust.compileFn(source)(context,callback)
};dust.compileFn=function(source,name){name=name||null;var tmpl=dust.loadSource(dust.compile(source,name));
return function(context,callback){var master=callback?new Stub(callback):new Stream();
dust.nextTick(function(){if(typeof tmpl==="function"){tmpl(master.head,Context.wrap(context,name)).end()
}else{dust.log(new Error("Template ["+name+"] cannot be resolved to a Dust function"),ERROR)
}});return master}};dust.load=function(name,chunk,context){var tmpl=dust.cache[name];
if(tmpl){return tmpl(chunk,context)}else{if(dust.onLoad){return chunk.map(function(chunk){dust.onLoad(name,function(err,src){if(err){return chunk.setError(err)
}if(!dust.cache[name]){dust.loadSource(dust.compile(src,name))}dust.cache[name](chunk,context).end()
})})}return chunk.setError(new Error("Template Not Found: "+name))}};dust.loadSource=function(source,path){return eval(source)
};if(Array.isArray){dust.isArray=Array.isArray}else{dust.isArray=function(arr){return Object.prototype.toString.call(arr)==="[object Array]"
}}dust.nextTick=(function(){return function(callback){setTimeout(callback,0)}})();
dust.isEmpty=function(value){if(dust.isArray(value)&&!value.length){return true
}if(value===0){return false}return(!value)};dust.filter=function(string,auto,filters){if(filters){for(var i=0,len=filters.length;
i<len;i++){var name=filters[i];if(name==="s"){auto=null;dust.log("Using unescape filter on ["+string+"]",DEBUG)
}else{if(typeof dust.filters[name]==="function"){string=dust.filters[name](string)
}else{dust.log("Invalid filter ["+name+"]",WARN)}}}}if(auto){string=dust.filters[auto](string)
}return string};dust.filters={h:function(value){return dust.escapeHtml(value)},j:function(value){return dust.escapeJs(value)
},u:encodeURI,uc:encodeURIComponent,js:function(value){if(!JSON){dust.log("JSON is undefined.  JSON stringify has not been used on ["+value+"]",WARN);
return value}else{return JSON.stringify(value)}},jp:function(value){if(!JSON){dust.log("JSON is undefined.  JSON parse has not been used on ["+value+"]",WARN);
return value}else{return JSON.parse(value)}}};function Context(stack,global,blocks,templateName){this.stack=stack;
this.global=global;this.blocks=blocks;this.templateName=templateName}dust.makeBase=function(global){return new Context(new Stack(),global)
};Context.wrap=function(context,name){if(context instanceof Context){return context
}return new Context(new Stack(context),{},null,name)};Context.prototype.get=function(path,cur){if(typeof path==="string"){if(path[0]==="."){cur=true;
path=path.substr(1)}path=path.split(".")}return this._get(cur,path)};Context.prototype._get=function(cur,down){var ctx=this.stack,i=1,value,first,len,ctxThis;
dust.log("Searching for reference [{"+down.join(".")+"}] in template ["+this.getTemplateName()+"]",DEBUG);
first=down[0];len=down.length;if(cur&&len===0){ctxThis=ctx;ctx=ctx.head}else{if(!cur){while(ctx){if(ctx.isObject){ctxThis=ctx.head;
value=ctx.head[first];if(value!==undefined){break}}ctx=ctx.tail}if(value!==undefined){ctx=value
}else{ctx=this.global?this.global[first]:undefined}}else{ctx=ctx.head[first]}while(ctx&&i<len){ctxThis=ctx;
ctx=ctx[down[i]];i++}}if(typeof ctx==="function"){var fn=function(){try{return ctx.apply(ctxThis,arguments)
}catch(err){return dust.log(err,ERROR)}};fn.isFunction=true;return fn}else{if(ctx===undefined){dust.log("Cannot find the value for reference [{"+down.join(".")+"}] in template ["+this.getTemplateName()+"]")
}return ctx}};Context.prototype.getPath=function(cur,down){return this._get(cur,down)
};Context.prototype.push=function(head,idx,len){return new Context(new Stack(head,this.stack,idx,len),this.global,this.blocks,this.getTemplateName())
};Context.prototype.rebase=function(head){return new Context(new Stack(head),this.global,this.blocks,this.getTemplateName())
};Context.prototype.current=function(){return this.stack.head};Context.prototype.getBlock=function(key,chk,ctx){if(typeof key==="function"){var tempChk=new Chunk();
key=key(tempChk,this).data.join("")}var blocks=this.blocks;if(!blocks){dust.log("No blocks for context[{"+key+"}] in template ["+this.getTemplateName()+"]",DEBUG);
return}var len=blocks.length,fn;while(len--){fn=blocks[len][key];if(fn){return fn
}}};Context.prototype.shiftBlocks=function(locals){var blocks=this.blocks,newBlocks;
if(locals){if(!blocks){newBlocks=[locals]}else{newBlocks=blocks.concat([locals])
}return new Context(this.stack,this.global,newBlocks,this.getTemplateName())}return this
};Context.prototype.getTemplateName=function(){return this.templateName};function Stack(head,tail,idx,len){this.tail=tail;
this.isObject=head&&typeof head==="object";this.head=head;this.index=idx;this.of=len
}function Stub(callback){this.head=new Chunk(this);this.callback=callback;this.out=""
}Stub.prototype.flush=function(){var chunk=this.head;while(chunk){if(chunk.flushable){this.out+=chunk.data.join("")
}else{if(chunk.error){this.callback(chunk.error);dust.log("Chunk error ["+chunk.error+"] thrown. Ceasing to render this template.",WARN);
this.flush=EMPTY_FUNC;return}else{return}}chunk=chunk.next;this.head=chunk}this.callback(null,this.out)
};function Stream(){this.head=new Chunk(this)}Stream.prototype.flush=function(){var chunk=this.head;
while(chunk){if(chunk.flushable){this.emit("data",chunk.data.join(""))}else{if(chunk.error){this.emit("error",chunk.error);
dust.log("Chunk error ["+chunk.error+"] thrown. Ceasing to render this template.",WARN);
this.flush=EMPTY_FUNC;return}else{return}}chunk=chunk.next;this.head=chunk}this.emit("end")
};Stream.prototype.emit=function(type,data){if(!this.events){dust.log("No events to emit",INFO);
return false}var handler=this.events[type];if(!handler){dust.log("Event type ["+type+"] does not exist",WARN);
return false}if(typeof handler==="function"){handler(data)}else{if(dust.isArray(handler)){var listeners=handler.slice(0);
for(var i=0,l=listeners.length;i<l;i++){listeners[i](data)}}else{dust.log("Event Handler ["+handler+"] is not of a type that is handled by emit",WARN)
}}};Stream.prototype.on=function(type,callback){if(!this.events){this.events={}
}if(!this.events[type]){dust.log("Event type ["+type+"] does not exist. Using just the specified callback.",WARN);
if(callback){this.events[type]=callback}else{dust.log("Callback for type ["+type+"] does not exist. Listener not registered.",WARN)
}}else{if(typeof this.events[type]==="function"){this.events[type]=[this.events[type],callback]
}else{this.events[type].push(callback)}}return this};Stream.prototype.pipe=function(stream){this.on("data",function(data){try{stream.write(data,"utf8")
}catch(err){dust.log(err,ERROR)}}).on("end",function(){try{return stream.end()}catch(err){dust.log(err,ERROR)
}}).on("error",function(err){stream.error(err)});return this};function Chunk(root,next,taps){this.root=root;
this.next=next;this.data=[];this.flushable=false;this.taps=taps}Chunk.prototype.write=function(data){var taps=this.taps;
if(taps){data=taps.go(data)}this.data.push(data);return this};Chunk.prototype.end=function(data){if(data){this.write(data)
}this.flushable=true;this.root.flush();return this};Chunk.prototype.map=function(callback){var cursor=new Chunk(this.root,this.next,this.taps),branch=new Chunk(this.root,cursor,this.taps);
this.next=branch;this.flushable=true;callback(branch);return cursor};Chunk.prototype.tap=function(tap){var taps=this.taps;
if(taps){this.taps=taps.push(tap)}else{this.taps=new Tap(tap)}return this};Chunk.prototype.untap=function(){this.taps=this.taps.tail;
return this};Chunk.prototype.render=function(body,context){return body(this,context)
};Chunk.prototype.reference=function(elem,context,auto,filters){if(typeof elem==="function"){elem.isFunction=true;
elem=elem.apply(context.current(),[this,context,null,{auto:auto,filters:filters}]);
if(elem instanceof Chunk){return elem}}if(!dust.isEmpty(elem)){return this.write(dust.filter(elem,auto,filters))
}else{return this}};Chunk.prototype.section=function(elem,context,bodies,params){if(typeof elem==="function"){elem=elem.apply(context.current(),[this,context,bodies,params]);
if(elem instanceof Chunk){return elem}}var body=bodies.block,skip=bodies["else"];
if(params){context=context.push(params)}if(dust.isArray(elem)){if(body){var len=elem.length,chunk=this;
if(len>0){if(context.stack.head){context.stack.head["$len"]=len}for(var i=0;i<len;
i++){if(context.stack.head){context.stack.head["$idx"]=i}chunk=body(chunk,context.push(elem[i],i,len))
}if(context.stack.head){context.stack.head["$idx"]=undefined;context.stack.head["$len"]=undefined
}return chunk}else{if(skip){return skip(this,context)}}}}else{if(elem===true){if(body){return body(this,context)
}}else{if(elem||elem===0){if(body){return body(this,context.push(elem))}}else{if(skip){return skip(this,context)
}}}}dust.log("Not rendering section (#) block in template ["+context.getTemplateName()+"], because above key was not found",DEBUG);
return this};Chunk.prototype.exists=function(elem,context,bodies){var body=bodies.block,skip=bodies["else"];
if(!dust.isEmpty(elem)){if(body){return body(this,context)}}else{if(skip){return skip(this,context)
}}dust.log("Not rendering exists (?) block in template ["+context.getTemplateName()+"], because above key was not found",DEBUG);
return this};Chunk.prototype.notexists=function(elem,context,bodies){var body=bodies.block,skip=bodies["else"];
if(dust.isEmpty(elem)){if(body){return body(this,context)}}else{if(skip){return skip(this,context)
}}dust.log("Not rendering not exists (^) block check in template ["+context.getTemplateName()+"], because above key was found",DEBUG);
return this};Chunk.prototype.block=function(elem,context,bodies){var body=bodies.block;
if(elem){body=elem}if(body){return body(this,context)}return this};Chunk.prototype.partial=function(elem,context,params){var partialContext;
partialContext=dust.makeBase(context.global);partialContext.blocks=context.blocks;
if(context.stack&&context.stack.tail){partialContext.stack=context.stack.tail}if(params){partialContext=partialContext.push(params)
}if(typeof elem==="string"){partialContext.templateName=elem}partialContext=partialContext.push(context.stack.head);
var partialChunk;if(typeof elem==="function"){partialChunk=this.capture(elem,partialContext,function(name,chunk){partialContext.templateName=partialContext.templateName||name;
dust.load(name,chunk,partialContext).end()})}else{partialChunk=dust.load(elem,this,partialContext)
}return partialChunk};Chunk.prototype.helper=function(name,context,bodies,params){var chunk=this;
try{if(dust.helpers[name]){return dust.helpers[name](chunk,context,bodies,params)
}else{dust.log("Invalid helper ["+name+"]",WARN);return chunk}}catch(err){dust.log(err,ERROR);
return chunk}};Chunk.prototype.capture=function(body,context,callback){return this.map(function(chunk){var stub=new Stub(function(err,out){if(err){chunk.setError(err)
}else{callback(out,chunk)}});body(stub.head,context).end()})};Chunk.prototype.setError=function(err){this.error=err;
this.root.flush();return this};function Tap(head,tail){this.head=head;this.tail=tail
}Tap.prototype.push=function(tap){return new Tap(tap,this)};Tap.prototype.go=function(value){var tap=this;
while(tap){value=tap.head(value);tap=tap.tail}return value};var HCHARS=new RegExp(/[&<>\"\']/),AMP=/&/g,LT=/</g,GT=/>/g,QUOT=/\"/g,SQUOT=/\'/g;
dust.escapeHtml=function(s){if(typeof s==="string"){if(!HCHARS.test(s)){return s
}return s.replace(AMP,"&amp;").replace(LT,"&lt;").replace(GT,"&gt;").replace(QUOT,"&quot;").replace(SQUOT,"&#39;")
}return s};var BS=/\\/g,FS=/\//g,CR=/\r/g,LS=/\u2028/g,PS=/\u2029/g,NL=/\n/g,LF=/\f/g,SQ=/'/g,DQ=/"/g,TB=/\t/g;
dust.escapeJs=function(s){if(typeof s==="string"){return s.replace(BS,"\\\\").replace(FS,"\\/").replace(DQ,'\\"').replace(SQ,"\\'").replace(CR,"\\r").replace(LS,"\\u2028").replace(PS,"\\u2029").replace(NL,"\\n").replace(LF,"\\f").replace(TB,"\\t")
}return s};if(typeof exports==="object"){module.exports=dust}else{root.dust=dust
}})(this)},{}],"dust-runtime":[function(d,g,f){g.exports=d("sAbXaO")},{}],"ac-video-templates":[function(d,g,f){g.exports=d("OnUF3R")
},{}],OnUF3R:[function(d,g,f){g.exports=(function(){var a=d("./dust-runtime");(function(){a.register("controlBarDefault",b);
function b(h,k){return h.write('<div aria-label="Video playback" class="').reference(k._get(false,["values","controlbarskinning"]),k,"h").write(' acv-controller-disabled" role="toolbar"><div class="ac-video-controlbar-elements"><button aria-label="').reference(k._get(false,["values","localizedText","mutevolume"]),k,"h").write('" data-ac-video-element="minVolumeButton" class="acv-button acv-minvolume" tabindex="0"></button><div data-ac-video-element="volumeSlider" class="acv-button acv-volumeslider ac-media-volume-slider"><div class="acv-volumeslider-inputrange"></div></div><button aria-label="').reference(k._get(false,["values","localizedText","fullvolume"]),k,"h").write('" data-ac-video-element="maxVolumeButton" class="acv-button acv-maxvolume" tabindex="0"></button><button aria-label="').reference(k._get(false,["values","localizedText","play"]),k,"h").write('" data-ac-video-element="playPauseButton" class="acv-button acv-playpause" tabindex="0" role="button"></button>').notexists(k._get(false,["values","disablecaptionscontrol"]),k,{block:c},null).exists(k._get(false,["values","usesFullScreen"]),k,{block:i},null).write('<div data-ac-video-element="progressSlider" class="acv-button acv-progressslider"><span aria-label="').reference(k._get(false,["values","localizedText","elapsed"]),k,"h").write('" class="acv-text acv-text-first acv-currenttime" data-ac-video-element="currentTimeText" role="timer" tabindex="0"></span><div class="acv-progressslider-inputrange"></div><span aria-label="').reference(k._get(false,["values","localizedText","remaining"]),k,"h").write('" class="acv-text acv-text-last acv-remainingtime" data-ac-video-element="remainingTimeText" role="timer" tabindex="0"></span></div>').reference(k._get(false,["values","controlsTemplateString"]),k,"h",["s"]).write("</div></div>")
}function c(h,k){return h.write('<button aria-label="').reference(k._get(false,["values","localizedText","captionscontrol"]),k,"h").write('" data-ac-video-element="captionsButton" class="acv-button acv-captions" tabindex="0"></button>')
}function i(h,k){return h.write('<button aria-label="Enable Full Screen" data-ac-video-element="fullScreenButton" class="acv-button acv-fullscreen" tabindex="0"></button>')
}return b})();(function(){a.register("controlBarStream",b);function b(c,i){return c.write('<div aria-label="Video playback" class="').reference(i._get(false,["values","controlbarskinning"]),i,"h").write('" aria-role="toolbar"><div class="ac-video-controlbar-elements"><button aria-label="Min Volume" data-ac-video-element="minVolumeButton" class="acv-button acv-minvolume" tabindex="0"></button><div data-ac-video-element="volumeSlider" class="acv-button acv-volumeslider ac-media-volume-slider"><div class="acv-volumeslider-inputrange"></div></div><button aria-label="Max Volume" data-ac-video-element="maxVolumeButton" class="acv-button acv-maxvolume" tabindex="0"></button><button aria-label="Play" data-ac-video-element="playPauseButton" class="acv-button acv-playpause" tabindex="0" role="button"></button><button aria-label="Enable Captions" data-ac-video-element="captionsButton" class="acv-button acv-captions" tabindex="0"></button><button aria-label="Enable Full Screen" data-ac-video-element="fullScreenButton" class="acv-button acv-fullscreen" tabindex="0"></button><div class="acv-button acv-progressslider"><span aria-label="Elapsed" class="acv-text acv-text-first acv-currenttime" data-ac-video-element="currentTimeText" aria-role="timer" tabindex="0"></span></div>').reference(i._get(false,["values","controlsTemplateString"]),i,"h",["s"]).write("</div></div>")
}return b})();(function(){a.register("controlBarString",b);function b(c,i){return c.write('<div class="ac-video-controlbar" style="width:').reference(i._get(false,["values","width"]),i,"h").write('px;">').reference(i._get(false,["values","controlsTemplateString"]),i,"h",["s"]).write("</div>")
}return b})();(function(){a.register("elementEmbed",b);function b(h,i){return h.write('<embed src="').reference(i._get(false,["source"]),i,"h").write('" ').notexists(i._get(false,["responsive"]),i,{block:c},null).write(" ").notexists(i._get(false,["responsive"]),i,{block:j},null).write(' class="ac-video-media" id="').reference(i._get(false,["values","id"]),i,"h").write('" wmode="transparent" name="').reference(i._get(false,["values","id"]),i,"h").write('" type="').reference(i._get(false,["type"]),i,"h").write('" width="').reference(i._get(false,["values","width"]),i,"h").write('" height="').reference(i._get(false,["values","height"]),i,"h").write('" scale="tofit" enablejavascript="true" postdomevents="true" controller="false" ').exists(i._get(false,["values","autoplay"]),i,{block:k},null).write(' poster="').reference(i._get(false,["values","poster"]),i,"h").write('" bgcolor="').reference(i._get(false,["values","bgcolor"]),i,"h").write('" style="width:').reference(i._get(false,["values","width"]),i,"h").write("px; height:").reference(i._get(false,["values","height"]),i,"h").write('px;"  pluginspage="www.apple.com/quicktime/download">')
}function c(h,i){return h.write(' width="').reference(i._get(false,["values","width"]),i,"h").write('" height="').reference(i._get(false,["values","height"]),i,"h").write('"')
}function j(h,i){return h.write(' style="width:').reference(i._get(false,["values","width"]),i,"h").write("px; height:").reference(i._get(false,["values","height"]),i,"h").write('px;"')
}function k(h,i){return h.write("autoplay")}return b})();(function(){a.register("elementObject",b);
function b(h,i){return h.write('<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" wmode="transparent" codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0" id="').reference(i._get(false,["values","id"]),i,"h").write('" name="').reference(i._get(false,["values","id"]),i,"h").write('" class="ac-video-media movie-object" type="').reference(i._get(false,["type"]),i,"h").write('" style="behavior:url(#').reference(i._get(false,["values","eventId"]),i,"h").write("); ").notexists(i._get(false,["responsive"]),i,{block:c},null).write('" ').notexists(i._get(false,["responsive"]),i,{block:k},null).write(' bgcolor="').reference(i._get(false,["values","bgcolor"]),i,"h").write('" poster="').reference(i._get(false,["values","poster"]),i,"h").write('"><param name="enablejavascript" value="true" /><param name="postdomevents" value="true" />').exists(i._get(false,["values","autoplay"]),i,{block:l},null).notexists(i._get(false,["values","autoplay"]),i,{block:m},null).write('<param name="scale" value="tofit" /><param name="controller" value="false" /><param name="kioskmode" value="true" /><param name="src" value="').reference(i._get(false,["source"]),i,"h").write('" /><param name="pluginspace" value="http://www.apple.com/qtactivex/qtplugin.cab" /><param name="wmode" value="transparent"></object>')
}function c(h,i){return h.write("width:").reference(i._get(false,["values","width"]),i,"h").write("px; height:").reference(i._get(false,["values","height"]),i,"h").write("px;")
}function k(h,i){return h.write(' width="').reference(i._get(false,["values","width"]),i,"h").write('" height="').reference(i._get(false,["values","height"]),i,"h").write('" ')
}function l(h,i){return h.write('<param name="autoplay" value="true" />')}function m(h,i){return h.write('<param name="autoplay" value="false" />')
}return b})();(function(){a.register("elementObjectEvent",b);function b(c,i){return c.write('<object id="').reference(i._get(false,["values","eventId"]),i,"h").write('" wmode="transparent" classid="clsid:CB927D12-4FF7-4a9e-A169-56E4B8A75598" codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0"></object>')
}return b})();(function(){a.register("elementVideo",o);function o(h,i){return h.write('<video crossorigin="anonymous" class="ac-video-media" id="').reference(i._get(false,["values","id"]),i,"h").write('" poster="').reference(i._get(false,["values","poster"]),i,"h").write('" ').exists(i._get(false,["values","controls"]),i,{block:p},null).write(" ").exists(i._get(false,["values","autoplay"]),i,{block:q},null).write(" ").exists(i._get(false,["values","preload"]),i,{block:r},null).write(' x-webkit-airplay="').reference(i._get(false,["values","airplay"]),i,"h").write('" ').exists(i._get(false,["values","bgcolor"]),i,{block:s},null).write(" ").notexists(i._get(false,["responsive"]),i,{block:b},null).write(' style="').notexists(i._get(false,["responsive"]),i,{block:c},null).write('" ><source src="').reference(i._get(false,["source"]),i,"h").write('" type="').reference(i._get(false,["type"]),i,"h").write('" />').exists(i._get(false,["captionsTrack"]),i,{block:n},null).write("</video>")
}function p(h,i){return h.write("controls")}function q(h,i){return h.write("autoplay")
}function r(h,i){return h.write('preload="').reference(i._get(false,["values","preload"]),i,"h").write('"')
}function s(h,i){return h.write('bgcolor="').reference(i._get(false,["values","bgcolor"]),i,"h").write('"')
}function b(h,i){return h.write('width="').reference(i._get(false,["values","width"]),i,"h").write('" height="').reference(i._get(false,["values","height"]),i,"h").write('"')
}function c(h,i){return h.write("width:").reference(i._get(false,["values","width"]),i,"h").write("px; height:").reference(i._get(false,["values","height"]),i,"h").write("px;")
}function n(h,i){return h.write('<track src="').reference(i._get(false,["captionsTrack"]),i,"h").write('" kind="captions" srclang="en" label="English" default />')
}return o})();(function(){a.register("masterTemplate",b);function b(h,i){return h.write('<div class="ac-video-wrapper ').reference(i._get(false,["values","targetId"]),i,"h").write(" ac-video-template-").reference(i._get(false,["videoTemplate"]),i,"h").write(" ").exists(i._get(false,["values","usesFullScreen"]),i,{block:c},null).write('" id="').reference(i._get(false,["values","wrapperId"]),i,"h").write('" ').notexists(i._get(false,["responsive"]),i,{block:p},null).write('><div class="ac-video-event-blockade" ').notexists(i._get(false,["responsive"]),i,{block:q},null).write('>&nbsp; &nbsp; &nbsp; &nbsp;</div><button aria-label="Close Video" data-ac-video-element="closeButton" class="acv-button acv-close icon icon-before icon-closealt" tabindex="0"><label class="ac-element-label acv-text">Close</label></button>').exists(i._get(false,["values","poster"]),i,{block:r},null).exists(i._get(false,["values","endframe"]),i,{block:s},null).exists(i._get(false,["videoTemplate"]),i,{block:t},null).exists(i._get(false,["values","controlbar"]),i,{block:v},null).write("</div>")
}function c(h,i){return h.write("ac-video-has-fullscreen")}function p(h,i){return h.write('style="width:').reference(i._get(false,["values","width"]),i,"h").write("px;height:").reference(i._get(false,["values","height"]),i,"h").write('px"')
}function q(h,i){return h.write('style="width:').reference(i._get(false,["values","width"]),i,"h").write("px; height:").reference(i._get(false,["values","height"]),i,"h").write('px;"')
}function r(h,i){return h.write('<img width="').reference(i._get(false,["values","width"]),i,"h").write('px" height="').reference(i._get(false,["values","height"]),i,"h").write('px" src="').reference(i._get(false,["values","poster"]),i,"h").write('" class="ac-video-posterframe" data-ac-video-element="posterframe" alt="" />')
}function s(h,i){return h.write('<img width="').reference(i._get(false,["values","width"]),i,"h").write('px" height="').reference(i._get(false,["values","height"]),i,"h").write('px" src="').reference(i._get(false,["values","endframe"]),i,"h").write('" class="ac-video-endframe acv-hide" data-ac-video-element="endframe" alt="" />')
}function t(h,i){return h.partial(u,i,null)}function u(h,i){return h.reference(i._get(false,["videoTemplate"]),i,"h")
}function v(h,i){return h.partial(w,i,null)}function w(h,i){return h.reference(i._get(false,["values","controlbar"]),i,"h")
}return b})();(function(){a.register("native",b);function b(h,k){return h.write('<div class="ac-video-wrapper native-controlbar ').reference(k._get(false,["values","targetId"]),k,"h").write('" id="').reference(k._get(false,["values","wrapperId"]),k,"h").write('" style="width:').reference(k._get(false,["values","width"]),k,"h").write("px;height:").reference(k._get(false,["values","height"]),k,"h").write('px;"><button aria-label="Close Video" data-ac-video-element="closeButton" class="acv-button acv-close icon icon-before icon-closealt" tabindex="0"><label class="ac-element-label acv-text">Close</label></button><div class="acv-native-playbutton"></div>').exists(k._get(false,["videoTemplate"]),k,{block:c},null).write("</div>")
}function c(h,k){return h.partial(i,k,null)}function i(h,k){return h.reference(k._get(false,["videoTemplate"]),k,"h")
}return b})();(function(){a.register("noVideoSupport",b);function b(c,i){return c.write('<div class="ac-video-wrapper ').reference(i._get(false,["values","targetId"]),i,"h").write(' acv-no-video-support" id="').reference(i._get(false,["values","wrapperId"]),i,"h").write('" style="width:').reference(i._get(false,["values","width"]),i,"h").write("px;height:").reference(i._get(false,["values","height"]),i,"h").write('px;"><a onclick="s_objectID=&quot;http://www.apple.com/quicktime/download/_1&quot;;return this.s_oc?this.s_oc(e):true" href="').reference(i._get(false,["values","localizedText","downloadquicktimeurl"]),i,"h").write('" class="ac-video-quicktime-download"><span class="ac-video-quicktime-download-title">').reference(i._get(false,["values","localizedText","downloadquicktimetitle"]),i,"h").write('</span><span class="ac-video-quicktime-download-text">').reference(i._get(false,["values","localizedText","downloadquicktimetext"]),i,"h").write('</span><span class="ac-video-quicktime-download-button">').reference(i._get(false,["values","localizedText","downloadquicktimebutton"]),i,"h").write("</span></a></div>")
}return b})();(function(){a.register("steamVideoElement",b);function b(h,i){return h.write('<video crossorigin="anonymous" class="ac-video-media" id="').reference(i._get(false,["values","id"]),i,"h").write('" poster="').reference(i._get(false,["values","poster"]),i,"h").write('" ').exists(i._get(false,["values","controls"]),i,{block:c},null).write(" ").exists(i._get(false,["values","autoplay"]),i,{block:k},null).write(" ").exists(i._get(false,["values","preload"]),i,{block:l},null).write(' width="').reference(i._get(false,["values","width"]),i,"h").write('" height="').reference(i._get(false,["values","height"]),i,"h").write('" x-webkit-airplay="').reference(i._get(false,["values","airplay"]),i,"h").write('" bgcolor="').reference(i._get(false,["values","bgcolor"]),i,"h").write('" style="width:').reference(i._get(false,["values","width"]),i,"h").write("px; height:").reference(i._get(false,["values","height"]),i,"h").write('px;"><source src="').reference(i._get(false,["source"]),i,"h").write('" type="').reference(i._get(false,["type"]),i,"h").write('" />').exists(i._get(false,["captionsTrack"]),i,{block:m},null).write("</video>")
}function c(h,i){return h.write("controls")}function k(h,i){return h.write("autoplay")
}function l(h,i){return h.write('preload="').reference(i._get(false,["values","preload"]),i,"h").write('"')
}function m(h,i){return h.write('<track src="').reference(i._get(false,["captionsTrack"]),i,"h").write('" kind="captions" srclang="en" label="English" default />')
}return b})();return a})()},{"./dust-runtime":"sAbXaO"}],122:[function(d,g,f){g.exports=d(37)
},{"./window-delegate/WindowDelegate":123,"./window-delegate/windowEmitter":124}],123:[function(d,g,f){g.exports=d(38)
},{"./windowEmitter":124}],124:[function(d,g,f){g.exports=d(39)},{"ac-dom-emitter":5}],125:[function(r,s,p){var o=r("ac-base").Element;
var m=r("ac-browser");var l=r("../shared/galleryFactory");var n=r("ac-slideshow").SlideShow;
var q=r("./positionSlides");r("../shared/LocalNav").initialize();var k=(function(){return{initialize:function(){var a="hero-gallery";
if(o.hasClassName(o.select("html"),"touch")||m.IE){q(o.selectAll("#hero-gallery .gallery-content"),10);
var b=l.create(a,{slideshow:true,autoplay:true,pauseOnUserInteraction:true,initialDelay:8000,delayBetweenSlides:5000,endless:true})
}else{o.addClassName(a,"fade");var b=l.create(a,{galleryType:"fade",transitionEasing:"cubic-bezier(0.77, 0, 0.175, 1)",transitionDuration:1.5,initialDelay:8000,pauseOnUserInteraction:true,delayBetweenSlides:5000,slideshow:true,endless:true})
}return this}}}());if(!(m.IE&&m.IE.documentMode<9)){s.exports=k.initialize()}},{"../shared/LocalNav":127,"../shared/galleryFactory":128,"./positionSlides":126,"ac-base":false,"ac-browser":1,"ac-slideshow":116}],126:[function(i,n,j){var k=i("ac-base").Element;
var o=i("window-delegate").WindowDelegate;var m=function(a,f){var c;var b;var d=0;
if(a&&a.length){c=a.length;for(b=0;b<c;b++){a[b].style.left=d+"px";a[b].style.borderRightWidth=f+"px";
d+=k.getBoundingBox(a[b]).width}}};n.exports=function l(b,a){m(b,a);o.on("resize orientationchange",function(){m(b,a)
})}},{"ac-base":false,"window-delegate":122}],127:[function(q,r,o){var m=q("ac-dom-emitter").DOMEmitter;
var n=q("ac-base").Element;var k=q("window-delegate").WindowDelegate;var l=q("ac-analytics");
var s=q("ac-dom-events");var p=(function(){return{opened:false,closeThreshold:0,initialize:function(){this.globalheaderHeight=n.getElementById("globalheader").offsetHeight;
this.localNav=n.getElementById("localnav");this.menu=n.getElementById("menu");this.curtain=n.getElementById("curtain");
this.main=n.getElementById("main");this.footer=n.select(".footer-wrapper");var a=n.getElementById("explore-btn");
this.menuEmitter=new m(this.menu);k.on("scroll load",this.navTrackPosition.bind(this));
n.addEventListener(a,"click",this.toggle.bind(this));n.addEventListener(this.curtain,"click",this.onCurtainTouch.bind(this));
n.addEventListener(document,"touchstart",this.onDocumentTouch.bind(this));this.menuEmitter.on("transitionend webkitTransitionEnd oTransitionEnd",this.onTransitionEnd,this);
if(typeof l==="object"){new l.observer.Event(this.menuEmitter,{interactionEvents:["localnav-open"]})
}return this},onTransitionEnd:function(){n.removeClassName(this.menu,"translating");
n.addClassName(this.menu,"translate-ended")},translate:function(){n.removeClassName(this.menu,"translate-ended");
n.addClassName(this.menu,"translating")},open:function(){n.addClassName(this.localNav,"open");
n.addClassName(this.curtain,"open");this.translate();this.opened=true;this.openedAt=k.scrollY;
var a="";if(n.hasClassName(this.localNav,"lock")){a=" - locked";this.localNav.setAttribute("data-analytics-region","product nav locked");
if(typeof l==="object"){l.regions.refreshRegion(this.localNav)}}else{a=" - unlocked";
this.localNav.setAttribute("data-analytics-region","product nav");if(typeof l==="object"){l.regions.refreshRegion(this.localNav)
}}this.menuEmitter.trigger("localnav-open",{prop3:"{PAGE_NAME_NO_LOCALE} - explore"+a,title:"{PAGE_NAME_NO_LOCALE} - explore"+a})
},close:function(){n.removeClassName(this.localNav,"open");n.removeClassName(this.curtain,"open");
this.translate();this.opened=false},closeImmediately:function(){this.menuEmitter.off("transitionend webkitTransitionEnd oTransitionEnd",this.onTransitionEnd);
n.addClassName(this.localNav,"immediate-hide");window.requestAnimationFrame(function(){n.removeClassName(this.localNav,"open");
n.removeClassName(this.curtain,"open");n.removeClassName(this.menu,"translate-ended");
window.requestAnimationFrame(function(){n.removeClassName(this.localNav,"immediate-hide");
n.addClassName(this.menu,"translate-ended");this.menuEmitter.on("transitionend webkitTransitionEnd oTransitionEnd",this.onTransitionEnd,this)
}.bind(this))}.bind(this));this.opened=false},toggle:function(a){if(this.opened){this.close()
}else{this.open()}s.stop(a)},onDocumentTouch:function(a){if(this.opened&&!this.localNav.contains(a.srcElement)){this.closeImmediately()
}},onCurtainTouch:function(a){if(this.opened){this.close()}},withinThreshold:function(a){return(a>this.openedAt+this.closeThreshold)||(a<this.openedAt-this.closeThreshold)
},navTrackPosition:function(b){var a=k.scrollY;if(a>=this.globalheaderHeight){n.addClassName(this.localNav,"lock")
}else{n.removeClassName(this.localNav,"lock")}if(this.opened&&this.withinThreshold(a)){this.close()
}}}}());r.exports=p},{"ac-base":false,"ac-dom-emitter":5,"ac-dom-events":7,"window-delegate":122}],128:[function(X,ao,M){var Y=X("ac-base").Object;
var N=X("ac-base").Element;var ae=X("ac-base").Viewport;var af=X("ac-base").Environment.Browser;
var ag=X("ac-gallery");var K=X("ac-slideshow").SlideShow;var Q=X("window-delegate").WindowDelegate;
var S=ag.builder;var U=ag.horizontalSliderKeyframesGenerator;var aj=ag.fadeInKeyframesGenerator;
var aq="#";var O=".";var ai=".gallery-content";var ap="-trigger";var an="ease";
var L="fade";var ar="slide";var ad="large";var aa="medium";var ah="xsmall";var at={};
var W={galleryType:ar,contentClass:ai,triggerClass:ap,transitionEasing:an,transitionDuration:0.4,touch:true,keyboard:true,endless:false,slideshow:false,autoplay:true,pauseOnUserInteraction:false,initialDelay:1000,delayBetweenSlides:3000};
function V(c,b){b=Y.extend(Y.clone(W),b||{});b.galleryID=ac(c);b.wrapperID=aq+b.galleryID;
b.galleryElement=N.select(b.wrapperID);if(!b.galleryElement){return}if(at[b.galleryID]){return at[b.galleryID]
}b.triggerClass=T(b.triggerClass,b.galleryID);b.keyframeEls=ab(b.wrapperID,b.contentClass);
if(!b.keyframes){b.keyframes=Z(b.keyframeEls,b.galleryType)}if(af.IE){var a=ak(al,200,b,false);
window.addEventListener("resize",a,false);window.addEventListener("orientationchange",a,false)
}else{Q.on("resize orientationchange",al,b)}return at[b.galleryID]=P(b)}function P(a){var c,b;
if(!a.keyframes){return}switch(a.galleryType){case L:c={engagementElement:a.galleryElement,touchElement:a.galleryElement,triggerSelector:a.triggerClass,transitionDuration:a.transitionDuration,transitionEasing:a.transitionEasing,endless:a.endless,keyframes:a.keyframes};
break;default:c={engagementElement:a.galleryElement,touchElement:a.galleryElement,triggerSelector:a.triggerClass,transitionDuration:a.transitionDuration,transitionEasing:a.transitionEasing,endless:a.endless,keyframes:a.keyframes.keyframes,bounceInKeyframe:a.keyframes.bounceInKeyframe,bounceOutKeyframe:a.keyframes.bounceOutKeyframe,shouldUseKeyboard:a.keyboard,touch:a.touch};
break}c.analytics=a.analytics||{};b=S(c);if(a.slideshow){b.slideShow=new K(b.gallery,{autoplay:a.autoplay,pauseOnUserInteraction:a.pauseOnUserInteraction,initialDelay:a.initialDelay,delayBetweenSlides:a.delayBetweenSlides})
}return b}function ak(f,c,a,b){var d;return function(){var g=a,h=arguments;var i=function(){d=null;
if(!b){f.apply(g,h)}};var j=b&&!d;clearTimeout(d);d=setTimeout(i,c);if(j){f.apply(g,h)
}}}function al(d){var g,a,h,k,i,f,b=this,m=at[b.galleryID];if(am()===ah&&!N.hasClassName(N.select("html"),"touch")){return
}g=b.keyframes=Z(b.keyframeEls,b.galleryType);if(b.regenerateKeyframes){g=b.keyframes=b.regenerateKeyframes()
}if(!m){m=P(b);if(!m){return}}m.gallery.setEngaged(!!g);if(b.galleryType===ar&&!!g){k=m.gallery._keyframes.length;
i=g.keyframes.length;h=m.gallery.getSelectedIndex();f=Math.floor(h/(k/i));m.gallery._keyframes[m.gallery._selected].draw(0);
m.gallery._keyframes=g.keyframes;if(g[f]){g.keyframes[f].draw();m.triggerPainter._paint({incoming:g.keyframes[f]})
}if(m.touchController){var c=m.gallery.toTimeline(g.bounceOutKeyframe,g.bounceInKeyframe);
var l=b.galleryElement.offsetWidth/m.touchController.options.scrollVelocity;var j=b.galleryElement.offsetHeight/m.touchController.options.scrollVelocity;
m.touchController._scrollView._touchContainerWidth=l;m.touchController._scrollView._touchContainerHeight=j;
m.touchController._scrollView._innerScrollWidth=(l*m.gallery.numKeyframes())+(m.touchController._scrollView.options.startBounceDistance+m.touchController._scrollView.options.endBounceDistance);
m.touchController._scrollView._innerScrollHeight=(j*m.gallery.numKeyframes())+(m.touchController._scrollView.options.startBounceDistance+m.touchController._scrollView.options.endBounceDistance);
m.touchController._player=c;m.touchController._scrollRenderer._player=c;m.touchController.onDidShow()
}m.gallery.show(f,{useTransition:false})}}function ac(a){if(a){a=a.match(/^(#)?(\S+)$/);
if(a&&a.length===3){return a[2]}}return a}function R(a){if(a){a=a.match(/^(\.)?(\S+)$/);
if(a&&a.length===3){return O+a[2]}}return ai}function T(a,b){if(a&&a!==ap){a=a.match(/^(\.)?(\S+)$/);
if(a&&a.length===3){return O+a[2]}}return O+b+ap}function am(){var a=ae.dimensions().width;
if(a>=1024){return ad}else{if(a<=767){return ah}else{return aa}}}function Z(f,c){var a=am();
var b=f[a];var d=c===L?aj:U;if(!!b.length){return d(f[a])}else{return null}}function ab(f,a){a=R(a);
var c=f+" "+a+"-";var h=N.selectAll(c+ad);var b=N.selectAll(c+aa);var d=N.selectAll(c+ah);
var g=N.selectAll(f+" "+a);if(!h.length&&!!g.length){h=g}if(!b.length&&!!g.length){b=g
}if(!d.length&&!!g.length){d=g}return{large:h,medium:b,xsmall:d}}ao.exports={create:V,getSize:am,getKeyFrameElements:ab}
},{"ac-base":false,"ac-gallery":59,"ac-slideshow":116,"window-delegate":122}]},{},[125]);
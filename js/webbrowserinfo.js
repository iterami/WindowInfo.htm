function update_info(){
    document.getElementById('applicationCache').innerHTML = window.applicationCache;
    document.getElementById('closed').innerHTML = window.closed;
    document.getElementById('Components').innerHTML = window.Components;
    document.getElementById('console').innerHTML = window.console;
    document.getElementById('content').innerHTML = window.content;
    document.getElementById('controllers').innerHTML = window.controllers;
    document.getElementById('crypto').innerHTML = window.crypto;
    document.getElementById('document').innerHTML = window.document;
    document.getElementById('frameElement').innerHTML = window.frameElement;
    document.getElementById('frames').innerHTML = window.frames;
    document.getElementById('fullscreen').innerHTML = window.fullscreen;
    document.getElementById('history').innerHTML = window.history;
    document.getElementById('innerHeight').innerHTML = window.innerHeight;
    document.getElementById('innerWidth').innerHTML = window.innerWidth;
    document.getElementById('length').innerHTML = window.length;
    document.getElementById('location').innerHTML = window.location;
    document.getElementById('locationbar').innerHTML = window.locationbar;
    document.getElementById('localStorage').innerHTML = window.localStorage;
    document.getElementById('menubar').innerHTML = window.menubar;
    document.getElementById('messageManager').innerHTML = window.messageManager;
    document.getElementById('name').innerHTML = window.name;
    document.getElementById('navigator').innerHTML = window.navigator;
    document.getElementById('navigator.appCodeName').innerHTML = window.navigator.appCodeName;
    document.getElementById('navigator.appName').innerHTML = window.navigator.appName;
    document.getElementById('navigator.appVersion').innerHTML = window.navigator.appVersion;
    document.getElementById('navigator.platform').innerHTML = window.navigator.platform;
    document.getElementById('navigator.product').innerHTML = window.navigator.product;
    document.getElementById('navigator.userAgent').innerHTML = window.navigator.userAgent;
    document.getElementById('opener').innerHTML = window.opener;
    document.getElementById('outerHeight').innerHTML = window.outerHeight;
    document.getElementById('outerWidth').innerHTML = window.outerWidth;
    document.getElementById('parent').innerHTML = window.parent;
    document.getElementById('performance').innerHTML = window.performance;
    document.getElementById('personalbar').innerHTML = window.personalbar;
    document.getElementById('screen').innerHTML = window.screen;
    document.getElementById('screenX').innerHTML = window.screenX;
    document.getElementById('screenY').innerHTML = window.screenY;
    document.getElementById('scrollbars').innerHTML = window.scrollbars;
    document.getElementById('scrollMaxX').innerHTML = window.scrollMaxX;
    document.getElementById('scrollMaxY').innerHTML = window.scrollMaxY;
    document.getElementById('scrollX').innerHTML = window.scrollX;
    document.getElementById('scrollY').innerHTML = window.scrollY;
    document.getElementById('self').innerHTML = window.self;
    document.getElementById('sessionStorage').innerHTML = window.sessionStorage;
    document.getElementById('sidebar').innerHTML = window.sidebar;
    document.getElementById('status').innerHTML = window.status;
    document.getElementById('statusbar').innerHTML = window.statusbar;
    document.getElementById('toolbar').innerHTML = window.toolbar;
    document.getElementById('top').innerHTML = window.top;
    document.getElementById('window').innerHTML = window.window;
    document.getElementById('WebGLRenderingContext').innerHTML = window.WebGLRenderingContext;
}

window.onload = update_info;

window.onkeydown = function(e){
    var key = window.event ? event : e;
    key = key.charCode ? key.charCode : key.keyCode;
    if(key == 85){
        update_info();
    }
};

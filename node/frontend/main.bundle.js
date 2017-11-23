webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, h2, h3 {\n    margin-top: 0px; \n}\n#pro h3 {\n    margin: 20px auto;\n}\n#profile {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\nh1 {\n    text-align: center;\n}\n.a {\n    margin: 20px auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n#button {\n    text-align: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    margin-bottom: 20px;\n}\n.i {\n    background: none;\n    border: none;\n}\n#info {\n    margin-top: 10px;\n}\n#box {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin-bottom: 15px;\n}\n#binButtons {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    margin-bottom: 10px;\n}\n.btn {\n    margin-right: 10px;\n}\n.chargerDetails {\n    margin-left: 8px;\n}\n#pro {\n    margin: auto auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center\n}\n#propic {\n    height: 180px;\n    width: 180px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='profile' class='row'>\n\n  <div class='col-sm-4' id='info'>\n    \n    <div id='pro'>\n      <img *ngIf='!fbprofile' src=\"../../assets/GreenFace.png\" id='propic'>\n      <form *ngIf='!fbprofile && !profile' [formGroup]='personalForm' (ngSubmit)='form(personalForm)'>\n        <h3>Personal Data</h3>\n        <div class='form-group'>\n          <label>Name</label>\n          <input type=\"text\" class='formControl' name='name' formControlName='name'>\n        </div>\n        <input type=\"submit\" class='btn btn-success' value='submit' [disabled]='!personalForm.valid'>\n      </form>\n      <h3 *ngIf='profile'>{{profile}}</h3>\n\n    </div>\n\n    <div *ngIf='fbprofile' id='pro'>\n      <img src=\"{{fbprofile.photoUrl}}\" id='propic'>\n      <h3>{{fbprofile.name}}</h3>\n    </div>\n\n  </div>\n\n  <div class='col-sm-8' id='favorite'>\n    <div id='button'>\n      <button class='i' (click)='getNews()'><i class=\"fa fa-newspaper-o fa-4x\" aria-hidden=\"true\"></i></button>\n      <button class='i' (click)='getChargers()'><i class=\"fa fa-4x fa-battery-full\" aria-hidden=\"true\"></i></button>\n      <button class='i' (click)='getBins()'><i class=\"fa fa-4x fa-trash\" aria-hidden=\"true\"></i></button>\n    </div>\n\n    <div *ngIf='news' id='items'>\n      <div *ngFor='let new of news' id='box'>\n        <div><img src=\"{{new.urlToImage}}\" alt=\"News Image\" style='height: 210px; width: 300px;'></div>\n        <div class='chargerDetails'>\n          <h3>News Title:</h3>\n          <h5>{{new.title}} <button class='i' (click)=\"url(new)\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></button></h5>\n          <h3>News Description:</h3>\n          <h5>{{new.description}}</h5>\n          <h3>News Author:</h3>\n          <h5>{{new.author}}</h5>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf='chargers' id='items'>\n      <div *ngFor='let charger of chargers'>\n        <div class='binDetails'>\n          <h3>Parking: {{charger.location}}</h3>\n          <h3>Address: {{charger.address}}</h3>\n          <h3>Provider: {{charger.provider}}</h3>\n          <h3>Parking No.: {{charger.parkingNo}}</h3>\n          <div id='binButtons'>\n            <td><button class=\"btn btn-info\" (click)=\"loc(charger)\">Location</button></td>\n            <td><button class=\"btn btn-info\" (click)=\"view(charger)\">Street View</button></td>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf='bins' id='items'>\n      <div *ngFor='let bin of bins'>\n          <div class='binDetails'>\n            <h3>Location:</h3>\n            <h3>{{bin.location}}</h3>\n            <h3>Waste Type: {{bin.wasteType}}</h3>\n            <div id='binButtons'>\n              <td><button class=\"btn btn-info\" (click)=\"loc(bin)\">Location</button></td>\n              <td><button class=\"btn btn-info\" (click)=\"view(bin)\">Street View</button></td>\n            </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n</div>\n\n\n<div class='a'>\n  <a (click)='logout()' routerLink=\"/home\" class='btn btn-warning'>Log Out</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__facebook_service__ = __webpack_require__("../../../../../src/app/facebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountComponent = (function () {
    // tslint:disable-next-line:max-line-length
    function AccountComponent(serverService, router, authService, facebookService) {
        this.serverService = serverService;
        this.router = router;
        this.authService = authService;
        this.facebookService = facebookService;
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        this.personalForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required)
        });
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.authService.token);
        if (this.facebookService.user) {
            this.fbprofile = this.facebookService.user;
        }
        this.serverService.getName().subscribe(function (data) {
            if (JSON.parse(data['_body']) == undefined) {
                return false;
            }
            var ref = Object.values(JSON.parse(data['_body']));
            ref.forEach(function (name) {
                if (name.id === _this.authService.token) {
                    _this.profile = name.name;
                }
            });
        });
        this.news = [];
        navigator.geolocation.getCurrentPosition(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lng = pos.coords.longitude;
        }, this.error, this.options);
        this.serverService.getFavNews().subscribe(function (data) {
            if (JSON.parse(data['_body']) == undefined) {
                return false;
            }
            var ref = Object.values(JSON.parse(data['_body']));
            var ticket = _this.authService.token || _this.facebookService.user.id;
            ref.forEach(function (news) {
                if (news.id === ticket) {
                    _this.news.push(news);
                }
            });
        });
    };
    AccountComponent.prototype.error = function (err) {
        console.warn("ERROR(" + err.code + "): " + err.message);
        window.location.reload(true);
    };
    AccountComponent.prototype.getNews = function () {
        var _this = this;
        this.chargers = null;
        this.bins = null;
        this.news = [];
        this.serverService.getFavNews().subscribe(function (data) {
            if (JSON.parse(data['_body']) == undefined) {
                return false;
            }
            var ref = Object.values(JSON.parse(data['_body']));
            var ticket = _this.authService.token || _this.facebookService.user.id;
            ref.forEach(function (news) {
                if (news.id === ticket) {
                    _this.news.push(news);
                }
            });
        });
    };
    AccountComponent.prototype.url = function (input) {
        window.open(input.url, '', 'width=800,height=600');
    };
    AccountComponent.prototype.getChargers = function () {
        var _this = this;
        this.news = null;
        this.bins = null;
        this.chargers = [];
        this.serverService.getFavChargers().subscribe(function (data) {
            if (JSON.parse(data['_body']) == undefined) {
                return false;
            }
            var ref = Object.values(JSON.parse(data['_body']));
            var ticket = _this.authService.token || _this.facebookService.user.id;
            ref.forEach(function (charger) {
                if (charger.id === ticket) {
                    _this.chargers.push(charger);
                }
            });
        });
    };
    AccountComponent.prototype.getBins = function () {
        var _this = this;
        this.news = null;
        this.chargers = null;
        this.bins = [];
        this.serverService.getFavBins().subscribe(function (data) {
            if (JSON.parse(data['_body']) == undefined) {
                return false;
            }
            var ref = Object.values(JSON.parse(data['_body']));
            var ticket = _this.authService.token || _this.facebookService.user.id;
            ref.forEach(function (bin) {
                if (bin.id === ticket) {
                    _this.bins.push(bin);
                }
            });
        });
    };
    AccountComponent.prototype.loc = function (input) {
        window.open('https://www.google.com.hk/maps/dir/' + this.lat + ',' + this.lng + '/' + input.lat + ',' + input.lng);
    };
    AccountComponent.prototype.view = function (input) {
        this.router.navigate(['/street_view', {
                lat: input.lat,
                lng: input.lng,
                location: JSON.stringify(input)
            }]);
    };
    AccountComponent.prototype.logout = function () {
        this.authService.logOut();
        this.facebookService.signOut();
    };
    AccountComponent.prototype.form = function (form) {
        this.serverService.postName({ name: form.value.name, id: this.authService.token }).subscribe();
        this.profile = form.value.name;
        form.reset();
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__("../../../../../src/app/account/account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/account.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AUTHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AUTHService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__facebook_service__["a" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__facebook_service__["a" /* FacebookService */]) === "function" && _d || Object])
], AccountComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_info_component__ = __webpack_require__("../../../../../src/app/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__point_point_component__ = __webpack_require__("../../../../../src/app/point/point.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__recycle_recycle_component__ = __webpack_require__("../../../../../src/app/recycle/recycle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_8__account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'street_view', component: __WEBPACK_IMPORTED_MODULE_2__map_map_component__["a" /* MapComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'station_point', component: __WEBPACK_IMPORTED_MODULE_6__point_point_component__["a" /* PointComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'info', component: __WEBPACK_IMPORTED_MODULE_3__info_info_component__["a" /* InfoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'recycling_bin', component: __WEBPACK_IMPORTED_MODULE_10__recycle_recycle_component__["a" /* RecycleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);

// tslint:disable-next-line:max-line-length
var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__map_map_component__["a" /* MapComponent */], __WEBPACK_IMPORTED_MODULE_3__info_info_component__["a" /* InfoComponent */], __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_6__point_point_component__["a" /* PointComponent */], __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_8__account_account_component__["a" /* AccountComponent */], __WEBPACK_IMPORTED_MODULE_10__recycle_recycle_component__["a" /* RecycleComponent */]];
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#nav {\n    width: 98%;\n}\n.navbar-nav {\n    width: 100%;\n    text-align: center;\n} \n.navbar-nav li {\n    float: none;\n    display: inline-block;\n}\n.navbar-nav li a {\n    color: #057731;\n}\n.nav li a:hover {\n    background-color: white;\n}\n.nav li a:focus {\n    background-color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"nav\">\n<nav class=\"navbar\">\n  <ul class=\"nav navbar-nav navbar-right\">\n    <li>\n      <a class=\"page-scroll\" routerLink=\"/home\">Home</a>\n    </li>\n    <li>\n      <a class=\"page-scroll\" routerLink=\"/login\">Log In</a>\n    </li>\n    <li>\n      <a class=\"page-scroll\" routerLink=\"/account\">Account</a>\n    </li>\n    <li class='dropdown'>\n      <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"\">Chargers\n        <span class=\"caret\"></span>\n      </a>\n      <ul class=\"dropdown-menu\">\n        <li>\n          <a routerLink=\"/info\">HK Electirc Chargers</a>\n        </li>\n        <li>\n          <a routerLink=\"/station_point\">Electirc Chargers Nearby</a>\n        </li>\n      </ul>\n    </li>\n    <li>\n      <a class=\"page-scroll\" routerLink=\"/recycling_bin\">Recycling Bin</a>\n    </li>\n  </ul>\n</nav>\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(serverService) {
        this.serverService = serverService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__facebook_service__ = __webpack_require__("../../../../../src/app/facebook.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var config = new __WEBPACK_IMPORTED_MODULE_6_angular4_social_login__["AuthServiceConfig"]([
    {
        id: __WEBPACK_IMPORTED_MODULE_6_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_6_angular4_social_login__["FacebookLoginProvider"]('1936639086587896')
    }
]);
function provideConfig() {
    return config;
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["b" /* routingComponents */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyAdQiwN7LzuD1fXwJ7zQsxBp0-Os5f_q-g'
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular4_social_login__["SocialLoginModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_9__auth_service__["a" /* AUTHService */], __WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuardService */], {
                provide: __WEBPACK_IMPORTED_MODULE_6_angular4_social_login__["AuthServiceConfig"],
                useFactory: provideConfig
            }, __WEBPACK_IMPORTED_MODULE_11__facebook_service__["a" /* FacebookService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_service__ = __webpack_require__("../../../../../src/app/facebook.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = (function () {
    function AuthGuardService(authService, router, facebookService) {
        this.authService = authService;
        this.router = router;
        this.facebookService = facebookService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        console.log(this.authService.isAuthenicated());
        console.log(this.facebookService.isAuthenicated());
        console.log(this.authService.token);
        console.log(this.facebookService.user);
        if (this.authService.isAuthenicated() || this.facebookService.isAuthenicated()) {
            return true;
        }
        else {
            alert('Please log in first!');
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AUTHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AUTHService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__facebook_service__["a" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__facebook_service__["a" /* FacebookService */]) === "function" && _c || Object])
], AuthGuardService);

var _a, _b, _c;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AUTHService = (function () {
    function AUTHService(http, router) {
        this.http = http;
        this.router = router;
    }
    AUTHService.prototype.signUp = function (input) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].hostName + '/api/signUp', input).subscribe(function (res) {
            localStorage.setItem('token', res.json());
            _this.token = localStorage.getItem('token');
            console.log(_this.token);
            _this.router.navigate(['/account']);
        }, function (err) {
            alert(err);
        });
    };
    AUTHService.prototype.logIn = function (input) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].hostName + '/api/logIn', input).subscribe(function (res) {
            localStorage.setItem('token', res.json());
            _this.token = localStorage.getItem('token');
            _this.router.navigate(['/account']);
        }, function (err) {
            alert(err);
        });
    };
    AUTHService.prototype.isAuthenicated = function () {
        this.token = localStorage.getItem('token');
        return this.token != undefined;
    };
    AUTHService.prototype.logOut = function () {
        localStorage.removeItem('token');
        return this.token = null;
    };
    return AUTHService;
}());
AUTHService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AUTHService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/facebook.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FacebookService = (function () {
    // clicked = false;
    function FacebookService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    FacebookService.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('token'));
    };
    FacebookService.prototype.signInWithFB = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_1_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID);
        this.authService.authState.subscribe(function (user) {
            localStorage.setItem('token', JSON.stringify(user));
            _this.user = JSON.parse(localStorage.getItem('token'));
        });
        this.router.navigate(['/account']);
    };
    FacebookService.prototype.signOut = function () {
        localStorage.removeItem('token');
        this.user = null;
        this.authService.signOut();
    };
    FacebookService.prototype.isAuthenicated = function () {
        this.user = JSON.parse(localStorage.getItem('token'));
        return this.user != undefined;
    };
    return FacebookService;
}());
FacebookService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular4_social_login__["AuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular4_social_login__["AuthService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], FacebookService);

var _a, _b;
//# sourceMappingURL=facebook.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n    text-align: center;\n    margin-bottom: 40px;\n}\n\nform {\n    text-align: center;\n    width: 30%;\n    margin: 10px auto;\n}\n.row {\n    margin: 20px auto;\n}\n#img {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-align: center;\n}\nimg {\n    height: 300px;\n    width: 400px;\n}\n#content {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-align: center;\n}\n.title {\n    text-align: left;\n    margin: 10px auto; \n    line-height: 110%;\n}\n.description {\n    margin-top: 0px;\n    line-height: 130%;\n    text-align: left;\n}\n.link {\n    margin-top: 40px;\n    margin-left: 15px;\n    text-align: right;\n}\na {\n    text-decoration: none;\n    cursor: pointer;\n}\nh5 {\n    font-size: 20px;\n    color: rgb(1, 48, 16);\n}\na:hover {\n    text-decoration: none;\n}\n.star {\n    background: none;\n    border: none;\n    color: rgb(229,229,0);\n}\n.a {\n    margin: 20px auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Let's Have some News about our Environment</h1>\n\n\n<form [formGroup]='newsForm' (ngSubmit)='choice(newsForm)'>\n    <div class='form-group'>\n        <label>Source</label>\n        <select name=\"choice\" formControlName='choice' class='form-control'>\n            <option value='bbc-news'>BBC News</option>\n            <option value='bloomberg'>Bloomberg</option>\n            <option value='cnn'>CNN</option>\n            <option value='fox-news'>Fox News</option>\n            <option value='national-geographic'>National Geographic</option>\n            <option value='new-scientist'>New Scientist</option>\n            <option value='the-new-york-times'>The New York Times</option>\n        </select>\n    </div>\n    <button class=\"btn btn-success\" type='submit' [disabled]='!newsForm.valid'>Submit</button>\n</form>\n\n<div *ngFor='let new of news'>\n    <div class='row' id='content'>\n        <div id='img' class='col-sm-4'>\n            <img src=\"{{new.urlToImage}}\" alt=\"News Image\">\n        </div>\n        <div id='content' class='col-sm-8'>\n            <div>\n                <h2 class='title'>{{new.title}}</h2>\n            </div>\n            <br>\n            <h4 class='description'>{{new.description}}</h4>\n            <div class='link'>\n                <a (click)=\"url(new)\" target='_'><h5>{{new.source.name}}</h5></a>\n                <button *ngIf='token | async' class='star' (click)=\"favorite(new)\"><i class=\"fa fa-2x fa-star\" aria-hidden=\"true\"></i></button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class='a'>\n    <a *ngIf='token | async' (click)='logout()' routerLink=\"/home\" class='btn btn-warning'>Log Out</a>\n</div>\n      "

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__facebook_service__ = __webpack_require__("../../../../../src/app/facebook.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(serverService, authService, facebookService) {
        this.serverService = serverService;
        this.authService = authService;
        this.facebookService = facebookService;
        this.newsForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            choice: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required)
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            setInterval(function () {
                var ref = _this.authService.token || _this.facebookService.user;
                observer.next(ref);
            }, 500);
        });
        this.serverService.getNews().subscribe(function (data) {
            _this.news = data;
        });
    };
    HomeComponent.prototype.url = function (input) {
        window.open(input.url, '', 'width=800,height=600');
    };
    HomeComponent.prototype.choice = function (form) {
        var _this = this;
        this.serverService.getSelectedNews(form.value).subscribe(function (data) {
            _this.news = data;
        });
    };
    // success(pos) {
    //   const crd = pos.coords;
    //   console.log(crd);
    //   console.log('Your current position is:');
    //   console.log(`Latitude : ${crd.latitude}`);
    //   console.log(`Longitude: ${crd.longitude}`);
    //   console.log(`More or less ${crd.accuracy} meters.`);
    //   const lat = pos.coords.latitude;
    //   console.log(this.lat);
    // }
    HomeComponent.prototype.favorite = function (input) {
        // tslint:disable-next-line:prefer-const
        var ref = this.authService.token || this.facebookService.user.id;
        var obj = input;
        obj['id'] = ref;
        return this.serverService.postFavNews(input).subscribe();
    };
    HomeComponent.prototype.logout = function () {
        this.authService.logOut();
        this.facebookService.signOut();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AUTHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AUTHService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__facebook_service__["a" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__facebook_service__["a" /* FacebookService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/info/info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n    text-align: center;\n}\n#table {\n    width: 85%;\n    margin: 20px auto;\n    text-align: center;\n}\nth {\n    text-align: center;\n}\n#agm {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    text-align: center;\n    margin-top: 40px;\n}\n#map {\n    width: 90%;\n    height: 500px;\n}\nimg {\n    height: 200px;\n    width: 200px;\n    margin: 5px auto;\n}\n.a {\n    margin: 20px auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n.star {\n    background: none;\n    border: none;\n    color: rgb(229,229,0);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Charging Station in HK</h1>\n\n<div id='agm'>\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" id=\"map\">\n    <agm-marker *ngFor=\"let location of locations; let i = index\" (markerClick)=\"getPic(location)\" [latitude]='location.lat' [longitude]='location.lng'>\n      <agm-info-window  class='agm-info-window-content' [isOpen]='open'>\n        <h4>\n          <strong>{{location.location}}</strong>\n        </h4>\n        <br>\n        <img [src]=\"img\">\n        <br>\n        <button class='btn btn-danger' (click)=\"more(location)\">More</button>\n      </agm-info-window>\n    </agm-marker>\n  </agm-map>\n</div>\n\n<div *ngIf=\"address\">\n  <iframe width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" [src]=\"address\" allowfullscreen></iframe>\n</div>\n\n<div id=\"table\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Region</th>\n        <th scope=\"col\">Parking</th>\n        <th scope=\"col\">District</th>\n        <th scope=\"col\">Provider</th>\n        <th scope=\"col\">Parking Lot</th>\n        <th scope=\"col\">Location</th>\n        <th scope=\"col\">Favorite</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let station of stations\">\n        <th scope=\"row\">{{station.districtL}}</th>\n        <td>{{station.location}}</td>\n        <td>{{station.districtS}}</td>\n        <td>{{station.provider}}</td>\n        <td>{{station.parkingNo}}</td>\n        <td><button class=\"btn btn-info\" (click)=\"loc(station)\">Location</button></td>\n        <td><button class='star' (click)=\"favorite(station)\"><i class=\"fa fa-2x fa-star\" aria-hidden=\"true\"></i></button></td>\n      </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n<div class='a'>\n  <a (click)='logout()' routerLink=\"/home\" class='btn btn-warning'>Log Out</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__facebook_service__ = __webpack_require__("../../../../../src/app/facebook.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InfoComponent = (function () {
    // tslint:disable-next-line:max-line-length
    function InfoComponent(serverService, router, sanitizer, authService, facebookService) {
        this.serverService = serverService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.facebookService = facebookService;
        this.stations = [];
        this.infoWindowOpened = null;
        this.locations = [];
        this.lat = 22.28552;
        this.lng = 114.15769;
        this.zoom = 16;
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService.getInfo().subscribe(function (data) {
            data.forEach(function (element) {
                var obj = element;
                obj.lat = Number(element.lat);
                obj.lng = Number(element.lng);
                _this.locations.push(obj);
            });
            _this.stations = data.sort(_this.compareDistrict);
        });
    };
    InfoComponent.prototype.loc = function (input) {
        this.router.navigate(['/home']);
    };
    InfoComponent.prototype.getPic = function (input) {
        // tslint:disable-next-line:max-line-length
        var src = 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + input.lat + ',' + input.lng + '&fov=90&heading=235&pitch=10&key=AIzaSyB0mZ3F0BF84enpgYtrg7HxS-Ws49Kmyk8';
        this.img = this.sanitizer.bypassSecurityTrustResourceUrl(src);
    };
    InfoComponent.prototype.more = function (input) {
        this.router.navigate(['/street_view', {
                lat: input.lat,
                lng: input.lng,
                location: JSON.stringify(input)
            }]);
        // tslint:disable-next-line:max-line-length
        // const address = 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyAdQiwN7LzuD1fXwJ7zQsxBp0-Os5f_q-g&location=' + input.lat + ',' + input.lng + '&heading=210&pitch=10&fov=35';
        // this.address = this.sanitizer.bypassSecurityTrustResourceUrl(address);
    };
    InfoComponent.prototype.compareDistrict = function (a, b) {
        if (a.districtL[0] < b.districtL[0]) {
            return -1;
        }
        if (a.districtL[0] > b.districtL[0]) {
            return 1;
        }
        return 0;
    };
    InfoComponent.prototype.logout = function () {
        this.authService.logOut();
        this.facebookService.signOut();
    };
    InfoComponent.prototype.favorite = function (input) {
        // tslint:disable-next-line:prefer-const
        var ref = this.authService.token || this.facebookService.user.id;
        var obj = input;
        obj['id'] = ref;
        return this.serverService.postFavChargers(obj).subscribe();
    };
    return InfoComponent;
}());
InfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-info',
        template: __webpack_require__("../../../../../src/app/info/info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/info/info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AUTHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AUTHService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__facebook_service__["a" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__facebook_service__["a" /* FacebookService */]) === "function" && _e || Object])
], InfoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form, h1 {\n    text-align: center;\n}\nform {\n    padding: 20px 100px;\n}\n#fb {\n    text-align: center;\n    margin: 30px center;\n}\n#fb i {\n    cursor: pointer;\n    color: #3b5998;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Please Sign Up or Log in</h1>\n\n<div class='row'>\n  <form [formGroup]=\"signUpForm\" (ngSubmit)='signUp(signUpForm)' class='col-sm-6 col-xs-12'>\n    <h1>Sign Up</h1>\n    <div class='form-group'>\n      <label>Email</label>\n      <input type=\"text\" class='form-control' name='email' formControlName='email'>\n      <div *ngIf=\"(signUpForm.controls['email'].hasError('pattern') || signUpForm.controls['email'].hasError('required')) && (signUpForm.controls['email'].touched || signUpForm.controls['email'].dirty)\"\n        class=\"alert alert-info\">\n        Be aware to enter the correct pattern!\n      </div>\n    </div>\n    <div class='form-group'>\n      <label>Password</label>\n      <input type=\"password\" class='form-control' name='password' formControlName='password'>\n      <div *ngIf=\"signUpForm.controls['password'].hasError('pattern') && (signUpForm.controls['password'].dirty || signUpForm.controls['password'].touched)\"\n        class='alert alert-info'>\n        Password should consist of 8 digits or characters\n      </div>\n    </div>\n    <input type=\"submit\" class='btn btn-success' value='submit' [disabled]='!signUpForm.valid'>\n  </form>\n\n\n  <form [formGroup]=\"logInForm\" (ngSubmit)='logIn(logInForm)' class='col-sm-6 col-xs-12'>\n    <h1>Log In</h1>\n    <div class='form-group'>\n      <label>Email</label>\n      <input type=\"text\" class='form-control' name='email' formControlName='email'>\n    </div>\n    <div class='form-group'>\n      <label>Password</label>\n      <input type=\"password\" class='form-control' name='password' formControlName='password'>\n    </div>\n    <input type=\"submit\" class='btn btn-success' value='submit' [disabled]='!logInForm.valid'>\n  </form>\n</div>\n\n\n<div id=\"fb\">\n  <i (click)='signUpFacebook()' class=\"fa fa-facebook-official fa-5x\" aria-hidden=\"true\"></i>\n  <h3>You can use Facebook to log in as well!</h3>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_service__ = __webpack_require__("../../../../../src/app/facebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, facebookService, router) {
        this.authService = authService;
        this.facebookService = facebookService;
        this.router = router;
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('[a-zA-Z0-9]{6,}')])
        });
        this.logInForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.token || this.facebookService.user) {
            this.router.navigate(['/account']);
        }
        console.log(this.authService.token);
    };
    LoginComponent.prototype.signUp = function (form) {
        var obj = { email: form.value.email, password: form.value.password };
        this.authService.signUp(obj);
        form.reset();
    };
    LoginComponent.prototype.logIn = function (form) {
        var obj = { email: form.value.email, password: form.value.password };
        this.authService.logIn(obj);
        form.reset();
    };
    LoginComponent.prototype.signUpFacebook = function () {
        this.facebookService.signInWithFB();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AUTHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AUTHService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__facebook_service__["a" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__facebook_service__["a" /* FacebookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, h2 {\n    text-align: center;\n    margin-top: 10px; \n    margin-bottom: 30px; \n}\n#view {\n    margin-top: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.a {\n    margin: 20px auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Google Street View</h1>\n<h2>{{location.location}}</h2>\n\n\n<div id='view' *ngIf=\"address\">\n  <iframe width=\"80%\" height=\"600px\" frameborder=\"0\" style=\"border:0\" [src]=\"address\" allowfullscreen></iframe>\n</div>\n\n\n<div class='a'>\n  <a (click)='logout()' routerLink=\"/home\" class='btn btn-warning'>Log Out</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__facebook_service__ = __webpack_require__("../../../../../src/app/facebook.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapComponent = (function () {
    // address;
    // img;
    // infoWindowOpened = null;
    // locations: any[] = [];
    // datas: any[];
    // lat = 22.28552;
    // lng = 114.15769;
    // zoom = 16;
    // tslint:disable-next-line:max-line-length
    function MapComponent(serverService, sanitizer, route, router, authService, facebookService) {
        this.serverService = serverService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.facebookService = facebookService;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.lat = params['lat'];
            _this.lng = params['lng'];
            _this.location = JSON.parse(params['location']);
            // tslint:disable-next-line:max-line-length
            var address = 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyAdQiwN7LzuD1fXwJ7zQsxBp0-Os5f_q-g&location=' + _this.lat + ',' + _this.lng + '&heading=210&pitch=10&fov=35';
            _this.address = _this.sanitizer.bypassSecurityTrustResourceUrl(address);
            // this.ref.forEach((item, index) => {
            //   if (item.name === this.playerName) {
            //     this.playerAge = item.age;
            //     this.playerTeam = item.team;
            //   }
            // });
        });
        // this.serverService.getInfo().subscribe((data) => {
        //   data.forEach(element => {
        //     const obj = element;
        //     obj.lat = Number(element.lat);
        //     obj.lng = Number(element.lng);
        //     this.locations.push(obj);
        //   });
        // });
    };
    // getPic(input: any) {
    //   // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:max-line-length
    //   const src = 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + input.lat + ',' + input.lng + '&fov=90&heading=235&pitch=10&key=AIzaSyB0mZ3F0BF84enpgYtrg7HxS-Ws49Kmyk8';
    //   this.img = this.sanitizer.bypassSecurityTrustResourceUrl(src);
    // }
    // more(input: any) {
    //   // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:max-line-length
    //   const address = 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyAdQiwN7LzuD1fXwJ7zQsxBp0-Os5f_q-g&location=' + input.lat + ',' + input.lng + '&heading=210&pitch=10&fov=35';
    //   this.address = this.sanitizer.bypassSecurityTrustResourceUrl(address);
    // }
    MapComponent.prototype.logout = function () {
        this.authService.logOut();
        this.facebookService.signOut();
    };
    return MapComponent;
}());
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AUTHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AUTHService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__facebook_service__["a" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__facebook_service__["a" /* FacebookService */]) === "function" && _f || Object])
], MapComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>FYI mud 9 dou mo</h1>"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = (function () {
    function PageNotFoundComponent(serverService) {
        this.serverService = serverService;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _a || Object])
], PageNotFoundComponent);

var _a;
//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/point/point.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#button {\n    text-align: center;\n    margin: 20px auto;\n}\n#img {\n    text-align: center;\n    margin: 30px auto;\n}\n#header {\n    text-align: center;\n}\ntable {\n    text-align: center;\n}\nth {\n    text-align: center;\n}\n#table {\n    width: 80%;\n    margin: 20px auto;\n}\n.a {\n    margin: 20px auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n.star {\n    background: none;\n    border: none;\n    color: rgb(229,229,0);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/point/point.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <h1>Find your nearest Charging Station</h1>\n</div>\n\n<div id=\"img\">\n  <img src=\"../../assets/charginStation.JPG\" alt=\"Charging Station\">\n</div>\n\n<div id=\"button\">\n  <button class='btn btn-danger' [disabled]=\"!(lat && lng)\" (click)=\"getStation()\">Nearest Charging station</button>\n</div>\n\n<div id=\"table\" *ngIf=\"stations\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">District</th>\n        <th scope=\"col\">Parking</th>\n        <th scope=\"col\">Provider</th>\n        <th scope=\"col\">Parking Lot</th>\n        <th scope=\"col\">Location</th>\n        <th scope=\"col\">Distance (km)</th>\n        <th scope=\"col\">Direction</th>\n        <th scope=\"col\">Favorite</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let station of stations\">\n        <th scope=\"row\">{{station.districtS}}</th>\n        <td>{{station.name}}</td>\n        <td>{{station.provider}}</td>\n        <td>{{station.parkingNo || Unknown}}</td>\n        <td>{{station.address}}</td>\n        <td>{{station.distance}}</td>\n        <td><button class=\"btn btn-info\" (click)=\"loc(station)\">Let's Go</button></td>\n        <td><button class='star' (click)=\"favorite(station)\"><i class=\"fa fa-2x fa-star\" aria-hidden=\"true\"></i></button></td>\n      </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n<div class='a'>\n  <a (click)='logout()' routerLink=\"/home\" class='btn btn-warning'>Log Out</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/point/point.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_service__ = __webpack_require__("../../../../../src/app/facebook.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PointComponent = (function () {
    function PointComponent(serverService, authService, facebookService) {
        this.serverService = serverService;
        this.authService = authService;
        this.facebookService = facebookService;
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
    }
    PointComponent.prototype.ngOnInit = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lng = pos.coords.longitude;
        }, this.error, this.options);
        this.serverService.getInfo().subscribe(function (data) {
        });
    };
    PointComponent.prototype.error = function (err) {
        console.warn("ERROR(" + err.code + "): " + err.message);
        window.location.reload(true);
    };
    PointComponent.prototype.getStation = function () {
        var _this = this;
        this.serverService.getNearestStation({ lat: this.lat, lng: this.lng }).subscribe(function (data) {
            _this.stations = data.slice(0, 20);
        });
    };
    PointComponent.prototype.loc = function (input) {
        window.open('https://www.google.com.hk/maps/dir/' + this.lat + ',' + this.lng + '/' + input.lat + ',' + input.lng);
    };
    PointComponent.prototype.logout = function () {
        this.authService.logOut();
        this.facebookService.signOut();
    };
    PointComponent.prototype.favorite = function (input) {
        // tslint:disable-next-line:prefer-const
        var ref = this.authService.token || this.facebookService.user.id;
        var obj = input;
        obj['id'] = ref;
        return this.serverService.postFavChargers(obj).subscribe();
    };
    return PointComponent;
}());
PointComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-point',
        template: __webpack_require__("../../../../../src/app/point/point.component.html"),
        styles: [__webpack_require__("../../../../../src/app/point/point.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AUTHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AUTHService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__facebook_service__["a" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__facebook_service__["a" /* FacebookService */]) === "function" && _c || Object])
], PointComponent);

var _a, _b, _c;
//# sourceMappingURL=point.component.js.map

/***/ }),

/***/ "../../../../../src/app/recycle/recycle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#button {\n    text-align: center;\n    margin: 20px auto;\n}\n#img {\n    text-align: center;\n    margin: 30px auto;\n}\n#header {\n    text-align: center;\n}\ntable {\n    text-align: center;\n}\nth {\n    text-align: center;\n}\n#table {\n    width: 85%;\n    margin: 20px auto;\n}\n.a {\n    margin: 20px auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n.star {\n    background: none;\n    border: none;\n    color: rgb(229,229,0);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recycle/recycle.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n    <h1>Find your nearest Recycling Bin</h1>\n  </div>\n  \n  <div id=\"img\">\n    <img src=\"../../assets/recyclingBin.JPG\" alt=\"Recycling Bin\">\n  </div>\n  \n  <div id=\"button\">\n    <button class='btn btn-danger' [disabled]=\"!(lat && lng)\" (click)=\"getBin()\">Nearest Recycling Bin</button>\n  </div>\n  \n  <div id=\"table\" *ngIf=\"bins\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th scope=\"col\">District</th>\n          <th scope=\"col\">Place</th>\n          <th scope=\"col\">Waste Type</th>\n          <th scope=\"col\">Distance (km)</th>\n          <th scope=\"col\">Direction</th>\n          <th scope=\"col\">Street View</th>\n          <th scope=\"col\">Favorite</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let bin of bins\">\n          <th scope=\"row\">{{bin.district}}</th>\n          <td>{{bin.location}}</td>\n          <td>{{bin.wasteType}}</td>\n          <td>{{bin.distance}}</td>\n          <td><button class=\"btn btn-info\" (click)=\"loc(bin)\">Let's Go</button></td>\n          <td><button class=\"btn btn-info\" (click)=\"view(bin)\">Check</button></td>\n          <td><button class='star' (click)=\"favorite(bin)\"><i class=\"fa fa-2x fa-star\" aria-hidden=\"true\"></i></button></td>\n        </tr>\n      </tbody>\n    </table>\n  \n  </div>\n  \n  \n  <div class='a'>\n    <a (click)='logout()' routerLink=\"/home\" class='btn btn-warning'>Log Out</a>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/recycle/recycle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecycleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__facebook_service__ = __webpack_require__("../../../../../src/app/facebook.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecycleComponent = (function () {
    // tslint:disable-next-line:max-line-length
    function RecycleComponent(serverService, router, authService, facebookService) {
        this.serverService = serverService;
        this.router = router;
        this.authService = authService;
        this.facebookService = facebookService;
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
    }
    RecycleComponent.prototype.ngOnInit = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lng = pos.coords.longitude;
        }, this.error, this.options);
        this.serverService.getInfo().subscribe(function (data) {
        });
    };
    RecycleComponent.prototype.getBin = function () {
        var _this = this;
        this.serverService.getBin({ lat: this.lat, lng: this.lng }).subscribe(function (data) {
            _this.bins = data;
        });
    };
    RecycleComponent.prototype.error = function (err) {
        console.warn("ERROR(" + err.code + "): " + err.message);
        window.location.reload(true);
    };
    RecycleComponent.prototype.loc = function (input) {
        window.open('https://www.google.com.hk/maps/dir/' + this.lat + ',' + this.lng + '/' + input.lat + ',' + input.lng);
    };
    RecycleComponent.prototype.view = function (input) {
        this.router.navigate(['/street_view', {
                lat: input.lat,
                lng: input.lng,
                location: JSON.stringify(input)
            }]);
    };
    RecycleComponent.prototype.logout = function () {
        this.authService.logOut();
        this.facebookService.signOut();
    };
    RecycleComponent.prototype.favorite = function (input) {
        // tslint:disable-next-line:prefer-const
        var ref = this.authService.token || this.facebookService.user.id;
        var obj = input;
        obj['id'] = ref;
        return this.serverService.postFavBins(obj).subscribe();
    };
    return RecycleComponent;
}());
RecycleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-recycle',
        template: __webpack_require__("../../../../../src/app/recycle/recycle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recycle/recycle.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AUTHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AUTHService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__facebook_service__["a" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__facebook_service__["a" /* FacebookService */]) === "function" && _d || Object])
], RecycleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=recycle.component.js.map

/***/ }),

/***/ "../../../../../src/app/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServerService = (function () {
    function ServerService(http) {
        this.http = http;
    }
    ServerService.prototype.getInfo = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].hostName + '/api/station/location').map(function (res) { return res.json(); });
    };
    ServerService.prototype.getNearestStation = function (geo) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].hostName + '/api/station/closest', geo).map(function (res) { return res.json(); });
    };
    ServerService.prototype.getBin = function (geo) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].hostName + '/api/recyclingBin', geo).map(function (res) { return res.json(); });
    };
    ServerService.prototype.getNews = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].hostName + '/api/news').map(function (res) { return res.json(); });
    };
    ServerService.prototype.getSelectedNews = function (source) {
        console.log(source);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].hostName + '/api/selected_news', source).map(function (res) { return res.json(); });
    };
    ServerService.prototype.postFavChargers = function (chargers) {
        return this.http.post('https://finalprojectstations.firebaseio.com/.json', chargers);
    };
    ServerService.prototype.getFavChargers = function () {
        return this.http.get('https://finalprojectstations.firebaseio.com/.json');
    };
    ServerService.prototype.postFavBins = function (bins) {
        return this.http.post('https://finalproject-d3288.firebaseio.com/.json', bins);
    };
    ServerService.prototype.getFavBins = function () {
        return this.http.get('https://finalproject-d3288.firebaseio.com/.json');
    };
    ServerService.prototype.postFavNews = function (news) {
        return this.http.post('https://finalprojectnews.firebaseio.com/.json', news);
    };
    ServerService.prototype.getFavNews = function () {
        return this.http.get('https://finalprojectnews.firebaseio.com/.json');
    };
    ServerService.prototype.getName = function () {
        return this.http.get('https://finalprojectname.firebaseio.com/.json');
    };
    ServerService.prototype.postName = function (name) {
        return this.http.post('https://finalprojectname.firebaseio.com/.json', name);
    };
    return ServerService;
}());
ServerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ServerService);

var _a;
//# sourceMappingURL=server.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    hostName: 'https://moregreenhk.website'
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
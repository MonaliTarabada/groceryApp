function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _login_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/home/home.component */
    "./src/app/login/home/home.component.ts");
    /* harmony import */


    var _login_guard_authguard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/guard/authguard.guard */
    "./src/app/login/guard/authguard.guard.ts");
    /* harmony import */


    var _login_grlist_grlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/grlist/grlist.component */
    "./src/app/login/grlist/grlist.component.ts");

    var routes = [{
      path: '',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }, {
      path: 'home/:user',
      component: _login_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
      canActivate: [_login_guard_authguard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthguardGuard"]]
    }, {
      path: 'grlist/:listname',
      component: _login_grlist_grlist_component__WEBPACK_IMPORTED_MODULE_6__["GrlistComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'register';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.addEventListener("deviceready", function () {
            alert(device.platform);
          }, false);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _login_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/home/home.component */
    "./src/app/login/home/home.component.ts");
    /* harmony import */


    var _login_grlist_grlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/grlist/grlist.component */
    "./src/app/login/grlist/grlist.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _login_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _login_grlist_grlist_component__WEBPACK_IMPORTED_MODULE_8__["GrlistComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _login_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _login_grlist_grlist_component__WEBPACK_IMPORTED_MODULE_8__["GrlistComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/grlist/grlist.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/login/grlist/grlist.component.ts ***!
    \**************************************************/

  /*! exports provided: GrlistComponent */

  /***/
  function srcAppLoginGrlistGrlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GrlistComponent", function () {
      return GrlistComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GrlistComponent_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GrlistComponent_tr_13_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.deleteItem(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.quantity);
      }
    }

    var GrlistComponent = /*#__PURE__*/function () {
      function GrlistComponent(router, route) {
        _classCallCheck(this, GrlistComponent);

        this.router = router;
        this.route = route;
        this.items = [];
      }

      _createClass(GrlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (res) {
            return _this.listname = res.listname;
          });
          var list = localStorage.getItem(this.listname);
          console.log(list);

          if (list != null) {
            this.items = JSON.parse(list);
          }

          console.log(this.items);
          this.listData = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
          });
        }
      }, {
        key: "addItem",
        value: function addItem(name, quantity) {
          console.log("Inside method addItem of grlist" + name + quantity);

          if (name && quantity) {
            console.log("Inside if condition");
            var val = this.listname;
            this.items.push({
              name: name,
              quantity: quantity,
              val: val
            });
            console.log(this.items + " listname :  " + this.listname);
            console.log(name + quantity);
            this.listData.controls['name'].reset();
            this.listData.controls['quantity'].reset();
          }
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(i) {
          console.log("Inside method of deleteItem of grlist");
          this.items.splice(i, 1);
          var bookmarks = JSON.parse(localStorage.getItem(this.listname));
          bookmarks.splice(i, 1);
          console.log("local data" + i + bookmarks);
          localStorage.setItem(this.listname, JSON.stringify(bookmarks));
        }
      }, {
        key: "OnClickFinish",
        value: function OnClickFinish() {
          console.log("Inside method OnClickFinish of grlist");
          localStorage.setItem(this.listname, JSON.stringify(this.items));
          console.log("finish list:  " + this.items);
          this.listData.reset();
        }
      }, {
        key: "OnClickLogout",
        value: function OnClickLogout() {
          localStorage.removeItem("currentUser");
          console.log("hello logout");
          this.router.navigate(['']);
        }
      }]);

      return GrlistComponent;
    }();

    GrlistComponent.ɵfac = function GrlistComponent_Factory(t) {
      return new (t || GrlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    GrlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GrlistComponent,
      selectors: [["app-grlist"]],
      decls: 32,
      vars: 4,
      consts: [[1, "container-fluid", "ui"], [1, "row"], [1, "col"], [1, "logout"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "listUi"], [1, "header"], ["data-toggle", "modal", "data-target", "#ModalForm", 1, "btn", "headbtn", "header"], [1, "data"], [4, "ngFor", "ngForOf"], ["id", "ModalForm", 1, "modal", "fade", "modelui"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "m-5", "dataUi"], [1, "listItem"], ["type", "text", "formControlName", "name", "name", "name", "placeholder", "Item Name", 1, "rounded"], ["type", "text", "formControlName", "quantity", "name", "quantity", "placeholder", "Item Quantity", 1, "rounded"], ["type", "submit", 1, "btn", "btn-block", "btnd"], ["type", "submit", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-block", "btnd", "mt-2", 3, "click"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "cls", 3, "click"], ["aria-hidden", "true"]],
      template: function GrlistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GrlistComponent_Template_button_click_4_listener() {
            return ctx.OnClickLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LogOut");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " + ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GrlistComponent_tr_13_Template, 9, 2, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GrlistComponent_Template_form_ngSubmit_18_listener() {
            return ctx.addItem(ctx.listData.value.name, ctx.listData.value.quantity);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Add Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GrlistComponent_Template_button_click_30_listener() {
            return ctx.OnClickFinish();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Finish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.listname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.listData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.listname);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".ui[_ngcontent-%COMP%] {\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  color: #ffffff;\n  padding: 2em;\n  font-size: 20px;\n}\n\n.data[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: black;\n  border-radius: 10px;\n  margin-top: 1em;\n  table-layout: fixed;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n\n.listUi[_ngcontent-%COMP%] {\n  margin-top: 2em;\n  border-radius: 10px;\n  background-color: #d1332e;\n  text-align: center;\n}\n\n.listItem[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  border-radius: 10px;\n}\n\n.modelui[_ngcontent-%COMP%] {\n  margin-top: 5em;\n}\n\n.logout[_ngcontent-%COMP%] {\n  text-align: end;\n}\n\n.btnd[_ngcontent-%COMP%] {\n  background-color: #d1332e;\n  color: #ffffff;\n}\n\n.headbtn[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #d1332e;\n  font-weight: 500;\n}\n\n.dataUi[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1 1 auto;\n  color: #d1332e;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vZ3JsaXN0L0M6XFxVc2Vyc1xcU0FDSElOIEtPTElcXEFuZ3VsYXJBcHBcXEFuZ3VsYXJUb0Nvcm92YVxcUmVnaXN0ZXIvc3JjXFxhcHBcXGxvZ2luXFxncmxpc3RcXGdybGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vZ3JsaXN0L2dybGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0FDT0o7O0FETEE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNRSjs7QUROQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDU0Y7O0FEUEE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2dybGlzdC9ncmxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWl7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uZGF0YXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbn1cclxuLmxpc3RVaXtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkMTMzMmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxpc3RJdGVte1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ubW9kZWx1aXtcclxuICAgIG1hcmdpbi10b3A6IDVlbTtcclxufVxyXG4ubG9nb3V0e1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbi5idG5ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxMzMyZTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuLmhlYWRidG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBjb2xvcjogI2QxMzMyZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5kYXRhVWl7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIGNvbG9yOiAjZDEzMzJlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgICBcclxufSIsIi51aSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyZW07XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmRhdGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLmhlYWRlciB7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4ubGlzdFVpIHtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEzMzJlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5saXN0SXRlbSB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm1vZGVsdWkge1xuICBtYXJnaW4tdG9wOiA1ZW07XG59XG5cbi5sb2dvdXQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5idG5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxMzMyZTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5oZWFkYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6ICNkMTMzMmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5kYXRhVWkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBjb2xvcjogI2QxMzMyZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GrlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-grlist',
          templateUrl: './grlist.component.html',
          styleUrls: ['./grlist.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/guard/authguard.guard.ts":
  /*!************************************************!*\
    !*** ./src/app/login/guard/authguard.guard.ts ***!
    \************************************************/

  /*! exports provided: AuthguardGuard */

  /***/
  function srcAppLoginGuardAuthguardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function () {
      return AuthguardGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthguardGuard = /*#__PURE__*/function () {
      function AuthguardGuard(router) {
        _classCallCheck(this, AuthguardGuard);

        this.router = router;
      }

      _createClass(AuthguardGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          console.log("hello this is guard");

          if (localStorage.getItem("currentUser") != null && localStorage.getItem("currentUser") != '') {
            return true;
          } else {
            console.log("login failed");
            this.router.navigate(['']);
            return false;
          }

          return true;
        }
      }]);

      return AuthguardGuard;
    }();

    AuthguardGuard.ɵfac = function AuthguardGuard_Factory(t) {
      return new (t || AuthguardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AuthguardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthguardGuard,
      factory: AuthguardGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthguardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/login/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppLoginHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_my_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/my-service.service */
    "./src/app/my-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_tr_12_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var item_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onClickList(item_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_tr_12_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.deleteItem(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, service, route) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.service = service;
        this.route = route;
        this.items = [];
        this.tables = [];
        this.listArray = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          console.log("Inside ngOnInit() method");
          this.listData = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            listname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
          this.route.params.subscribe(function (res) {
            return _this2.user = res.user;
          });
          var list = window.localStorage.getItem(this.user);
          var listItem = JSON.parse(list);
          this.items = listItem.name;
          console.log(this.items);
        }
      }, {
        key: "OnClickLogout",
        value: function OnClickLogout() {
          window.localStorage.removeItem("currentUser");
          this.router.navigate(['']);
        }
      }, {
        key: "addNewList",
        value: function addNewList() {
          console.log("Inside the method addNewList");
          this.router.navigate(['grlist']);
        }
      }, {
        key: "addItem",
        value: function addItem(listname) {
          console.log("Inside method addItem- " + listname);
          var username = this.user;
          var data = JSON.parse(window.localStorage.getItem(this.user));

          if (data.name != null) {
            var _iterator = _createForOfIteratorHelper(data.name),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var i = _step.value;
                this.listArray.push(i);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          this.listArray.push(listname);
          console.log(this.listArray);

          if (listname) {
            var details = {
              user: username,
              pswd: data.pswd,
              name: this.listArray
            };
            this.myData = JSON.stringify(details);
            this.lname = listname;
            this.listData.controls['listname'].reset();
          }
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(i) {
          console.log("Inside method of deleteItem");
          this.items.splice(i, 1);
          var bookmarks = JSON.parse(window.localStorage.getItem(this.user));
          bookmarks.name.splice(i, 1);
          console.log("local data" + i + bookmarks.name);
          window.localStorage.setItem(this.user, JSON.stringify(bookmarks));
        }
      }, {
        key: "OnClickFinish",
        value: function OnClickFinish() {
          console.log("Inside method OnClickFinish");
          localStorage.setItem(this.user, this.myData);
          this.ngOnInit();
          this.listData.reset();
        }
      }, {
        key: "onClickList",
        value: function onClickList(listname) {
          console.log("Inside the method OnClickList");
          this.router.navigate(['/grlist', listname]);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_my_service_service__WEBPACK_IMPORTED_MODULE_3__["MyServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 29,
      vars: 2,
      consts: [[1, "container-fluid", "ui"], [1, "row", "listrow"], [1, "col"], [1, "logout"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "m-5"], ["data-toggle", "modal", "data-target", "#ModalForm", 1, "btn", "btnd", "btn-block"], [1, "data"], [4, "ngFor", "ngForOf"], ["id", "ModalForm", 1, "modal", "fade", "modelui"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "m-5", "listUi"], [1, "listItem"], ["type", "text", "formControlName", "listname", "name", "listname", "placeholder", "List Name", 1, "rounded"], ["type", "submit", 1, "btn", "btn-block", "btnd"], ["type", "submit", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-block", "btnd", "mt-2", 3, "click"], ["type", "button", 1, "btn", "btn-block", 3, "click"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "cls", 3, "click"], ["aria-hidden", "true"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_4_listener() {
            return ctx.OnClickLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LogOut");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Grocery List Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_tr_12_Template, 8, 1, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_17_listener() {
            return ctx.addItem(ctx.listData.value.listname);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Grocery List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_27_listener() {
            return ctx.OnClickFinish();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Finish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.listData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".ui[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  color: #ffffff;\n  min-height: 100%;\n  height: 100%;\n  min-width: 100%;\n  padding: 2em;\n  font-size: 20px;\n  overflow-y: scroll;\n}\n\n.data[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  display: block;\n  color: black;\n  border-radius: 10px;\n  justify-content: center;\n  text-align: center;\n  margin-left: 1em;\n  margin-right: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n\n.modelui[_ngcontent-%COMP%] {\n  margin-top: 5em;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n\n.listrow[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 2;\n}\n\n.listUi[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1 1 auto;\n  color: #d1332e;\n  font-weight: 700;\n}\n\n.listItem[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  border-radius: 10px;\n}\n\n.logout[_ngcontent-%COMP%] {\n  text-align: end;\n}\n\n.btnd[_ngcontent-%COMP%] {\n  background-color: #d1332e;\n  color: #ffffff;\n}\n\n.cls[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vaG9tZS9DOlxcVXNlcnNcXFNBQ0hJTiBLT0xJXFxBbmd1bGFyQXBwXFxBbmd1bGFyVG9Db3JvdmFcXFJlZ2lzdGVyL3NyY1xcYXBwXFxsb2dpblxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNBLGNBQUE7QUNJQTs7QURGQTtFQUNJLGFBQUE7RUFDQSxPQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtBQ1FKOztBRE5BO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDU0Y7O0FEUEE7RUFDSSxVQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4uZGF0YXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbn1cclxuLm1vZGVsdWl7XHJcbiAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbn1cclxuYTpob3ZlcntcclxuY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmxpc3Ryb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMjtcclxufVxyXG4ubGlzdFVpe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBjb2xvcjogI2QxMzMyZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmxpc3RJdGVte1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ubG9nb3V0e1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbi5idG5ke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTMzMmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmNsc3tcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuIiwiLnVpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyZW07XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uZGF0YSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xufVxuXG4ubW9kZWx1aSB7XG4gIG1hcmdpbi10b3A6IDVlbTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubGlzdHJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDI7XG59XG5cbi5saXN0VWkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBjb2xvcjogI2QxMzMyZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmxpc3RJdGVtIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubG9nb3V0IHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uYnRuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTMzMmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2xzIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_my_service_service__WEBPACK_IMPORTED_MODULE_3__["MyServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _my_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../my-service.service */
    "./src/app/my-service.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, service) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.service = service;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formDtls = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)])
          });
        }
      }, {
        key: "OnClickSubmit",
        value: function OnClickSubmit(data) {
          console.log("username:" + data.email + " Password:" + data.password);
          var user = this.service.authlogin(data.email, data.password);
          console.log(user);

          if (user) {
            this.router.navigate(['/home', data.email]);
          } else {
            this.msg = "Invalid Username Or Password";
          }
        }
      }, {
        key: "OnClickRegister",
        value: function OnClickRegister() {
          console.log("Inside method OnClickRegister()");
          this.router.navigate(['/register']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_my_service_service__WEBPACK_IMPORTED_MODULE_3__["MyServiceService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 30,
      vars: 2,
      consts: [[1, "container"], [1, "row"], [1, "col-sm-9", "col-lg-4"], [1, "col-sm-9", "col-sm-offset-1", "col-lg-4"], [3, "formGroup", "ngSubmit"], [1, "mt-3"], [1, "formData"], [1, "mb-4", "ml-3"], [1, "form-group", "input-group"], [1, "input-group-prepend", "pre"], [1, "input-class-text"], [1, "fa", "fa-user", "fa-lg"], ["type", "email", "placeholder", "Username", "formControlName", "email", "name", "email", 1, "form-control"], [1, "fa", "fa-key", "fa-lg"], ["type", "password", "placeholder", "Password", "formControlName", "password", "name", "password", 1, "form-control"], [1, "center"], ["type", "submit", 1, "btn", "btn-block", "mb-3", "btnd"], ["type", "button", 1, "btn", "btn-block", "btnd", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
            return ctx.OnClickSubmit(ctx.formDtls.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Groceries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login to Your Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "OR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_27_listener() {
            return ctx.OnClickRegister();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Register Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formDtls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".formData[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding-left: 3em;\n  padding-right: 3em;\n  margin-top: 3em;\n  text-align: center;\n  color: #d1332e;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #d1332e;\n}\n\n.pre[_ngcontent-%COMP%] {\n  background-color: #d1332e;\n  color: #ffffff;\n  width: 55px;\n  justify-content: center;\n  padding-top: 6px;\n  border-bottom-left-radius: 5px;\n  border-top-left-radius: 5px;\n}\n\np[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  color: #868585;\n  font-weight: 500;\n}\n\n.btnd[_ngcontent-%COMP%] {\n  background-color: #d1332e;\n  color: #ffffff;\n}\n\np[_ngcontent-%COMP%]:before, p[_ngcontent-%COMP%]:after {\n  content: \"\";\n  flex: 1 1;\n  border-bottom: 1px solid #868585;\n  margin: auto;\n}\n\np[_ngcontent-%COMP%]:before {\n  margin-right: 10px;\n}\n\np[_ngcontent-%COMP%]:after {\n  margin-left: 10px;\n}\n\n.ui[_ngcontent-%COMP%] {\n  margin-left: 5em;\n  height: 7em;\n  width: 7em;\n  margin-bottom: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxTQUNISU4gS09MSVxcQW5ndWxhckFwcFxcQW5ndWxhclRvQ29yb3ZhXFxSZWdpc3Rlci9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBREFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREhFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUNNSjs7QURKRTtFQUNFLGtCQUFBO0FDT0o7O0FETEU7RUFDRSxpQkFBQTtBQ1FKOztBRE5FO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDU04iLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtRGF0YXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcclxuICAgIG1hcmdpbi10b3A6IDNlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiNkMTMzMmU7XHJcbn1cclxuaDF7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgY29sb3I6I2QxMzMyZVxyXG59XHJcbi5wcmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkMTMzMmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbn1cclxucCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGNvbG9yOiAjODY4NTg1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLmJ0bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEzMzJlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIHA6YmVmb3JlLCBwOmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGZsZXg6IDEgMTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODY4NTg1O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBwOmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxuICB9XHJcbiAgcDphZnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweFxyXG4gIH1cclxuICAudWl7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1ZW07XHJcbiAgICAgIGhlaWdodDogN2VtO1xyXG4gICAgICB3aWR0aDogN2VtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgfSIsIi5mb3JtRGF0YSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogM2VtO1xuICBwYWRkaW5nLXJpZ2h0OiAzZW07XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2QxMzMyZTtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZDEzMzJlO1xufVxuXG4ucHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxMzMyZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA1NXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG59XG5cbnAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBjb2xvcjogIzg2ODU4NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJ0bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEzMzJlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxucDpiZWZvcmUsIHA6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBmbGV4OiAxIDE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODY4NTg1O1xuICBtYXJnaW46IGF1dG87XG59XG5cbnA6YmVmb3JlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5wOmFmdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi51aSB7XG4gIG1hcmdpbi1sZWZ0OiA1ZW07XG4gIGhlaWdodDogN2VtO1xuICB3aWR0aDogN2VtO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _my_service_service__WEBPACK_IMPORTED_MODULE_3__["MyServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/my-service.service.ts":
  /*!***************************************!*\
    !*** ./src/app/my-service.service.ts ***!
    \***************************************/

  /*! exports provided: MyServiceService */

  /***/
  function srcAppMyServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyServiceService", function () {
      return MyServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MyServiceService = /*#__PURE__*/function () {
      function MyServiceService() {
        _classCallCheck(this, MyServiceService);
      }

      _createClass(MyServiceService, [{
        key: "authlogin",
        value: function authlogin(username, password) {
          console.log("Inside authlogin method of myService");
          var pswd = JSON.parse(window.localStorage.getItem(username));
          console.log(" Localstorage password : " + pswd.user + pswd.name + pswd.pswd);

          if (pswd.pswd == password) {
            localStorage.setItem("currentUser", username);
            return true;
          } else return false;
        }
      }, {
        key: "register",
        value: function register(username, password) {
          console.log("Inside method register()");
          var details = {
            user: username,
            pswd: password,
            name: ''
          };
          var myData = JSON.stringify(details);
          localStorage.setItem(username, myData);
        }
      }]);

      return MyServiceService;
    }();

    MyServiceService.ɵfac = function MyServiceService_Factory(t) {
      return new (t || MyServiceService)();
    };

    MyServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MyServiceService,
      factory: MyServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _my_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../my-service.service */
    "./src/app/my-service.service.ts");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(router, service) {
        _classCallCheck(this, RegisterComponent);

        this.router = router;
        this.service = service;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formDtls = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]),
            cnfpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)])
          });
        }
      }, {
        key: "OnClickSubmit",
        value: function OnClickSubmit(data) {
          console.log("username:" + data.email + " Password:" + data.password);
          var user = this.service.register(data.email, data.password);
          this.formDtls.reset();
        }
      }, {
        key: "OnClickLogin",
        value: function OnClickLogin() {
          console.log("Inside method OnClickLogin()");
          this.router.navigate(['']);
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_my_service_service__WEBPACK_IMPORTED_MODULE_3__["MyServiceService"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 30,
      vars: 1,
      consts: [[1, "container"], [1, "row"], [1, "col-sm-9", "col-lg-4"], [1, "col-sm-9", "col-sm-offset-1", "col-lg-4"], [3, "formGroup", "ngSubmit"], [1, "mt-3"], [1, "formData"], [1, "mb-4", "ml-3"], [1, "form-group", "input-group"], [1, "input-group-prepend", "pre"], [1, "input-class-text"], [1, "fa", "fa-user", "fa-lg"], ["type", "email", "placeholder", "Username", "formControlName", "email", "name", "email", 1, "form-control"], [1, "fa", "fa-key", "fa-lg"], ["type", "password", "placeholder", "Password", "formControlName", "password", "name", "password", 1, "form-control"], ["type", "password", "placeholder", " Confirm Password", "formControlName", "cnfpassword", "name", "cnfpassword", 1, "form-control"], ["type", "submit", 1, "btn", "btn-block", "mb-3", "btnd"], ["type", "button", 1, "btn", "btn-block", "btnd", 3, "click"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() {
            return ctx.OnClickSubmit(ctx.formDtls.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Groceries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Register to Your Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_27_listener() {
            return ctx.OnClickLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Continue Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formDtls);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".formData[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding-left: 3em;\n  padding-right: 3em;\n  margin-top: 3em;\n  text-align: center;\n  color: #d1332e;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #d1332e;\n}\n\n.pre[_ngcontent-%COMP%] {\n  background-color: #d1332e;\n  color: #ffffff;\n  width: 55px;\n  justify-content: center;\n  padding-top: 6px;\n  border-bottom-left-radius: 5px;\n  border-top-left-radius: 5px;\n}\n\np[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  color: #868585;\n  font-weight: 500;\n}\n\n.btnd[_ngcontent-%COMP%] {\n  background-color: #d1332e;\n  color: #ffffff;\n}\n\np[_ngcontent-%COMP%]:before, p[_ngcontent-%COMP%]:after {\n  content: \"\";\n  flex: 1 1;\n  border-bottom: 1px solid #868585;\n  margin: auto;\n}\n\np[_ngcontent-%COMP%]:before {\n  margin-right: 10px;\n}\n\np[_ngcontent-%COMP%]:after {\n  margin-left: 10px;\n}\n\n.ui[_ngcontent-%COMP%] {\n  margin-left: 5em;\n  height: 7em;\n  width: 7em;\n  margin-bottom: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxTQUNISU4gS09MSVxcQW5ndWxhckFwcFxcQW5ndWxhclRvQ29yb3ZhXFxSZWdpc3Rlci9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBREFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREhFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUNNSjs7QURKRTtFQUNFLGtCQUFBO0FDT0o7O0FETEU7RUFDRSxpQkFBQTtBQ1FKOztBRE5FO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDU04iLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtRGF0YXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcclxuICAgIG1hcmdpbi10b3A6IDNlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiNkMTMzMmU7XHJcbn1cclxuaDF7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgY29sb3I6I2QxMzMyZVxyXG59XHJcbi5wcmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkMTMzMmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbn1cclxucCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGNvbG9yOiAjODY4NTg1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLmJ0bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEzMzJlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIHA6YmVmb3JlLCBwOmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGZsZXg6IDEgMTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODY4NTg1O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBwOmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxuICB9XHJcbiAgcDphZnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweFxyXG4gIH1cclxuICAudWl7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1ZW07XHJcbiAgICAgIGhlaWdodDogN2VtO1xyXG4gICAgICB3aWR0aDogN2VtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgfSIsIi5mb3JtRGF0YSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogM2VtO1xuICBwYWRkaW5nLXJpZ2h0OiAzZW07XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2QxMzMyZTtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZDEzMzJlO1xufVxuXG4ucHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxMzMyZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA1NXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG59XG5cbnAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBjb2xvcjogIzg2ODU4NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJ0bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEzMzJlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxucDpiZWZvcmUsIHA6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBmbGV4OiAxIDE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODY4NTg1O1xuICBtYXJnaW46IGF1dG87XG59XG5cbnA6YmVmb3JlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5wOmFmdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi51aSB7XG4gIG1hcmdpbi1sZWZ0OiA1ZW07XG4gIGhlaWdodDogN2VtO1xuICB3aWR0aDogN2VtO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _my_service_service__WEBPACK_IMPORTED_MODULE_3__["MyServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\SACHIN KOLI\AngularApp\AngularToCorova\Register\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
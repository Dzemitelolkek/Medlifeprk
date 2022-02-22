function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  "./src/app/actions/config.actions.ts":
  /*!*******************************************!*\
    !*** ./src/app/actions/config.actions.ts ***!
    \*******************************************/

  /*! exports provided: loadConfig */

  /***/
  function srcAppActionsConfigActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadConfig", function () {
      return loadConfig;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var loadConfig = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Config] Load Config', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/actions/init-app.actions.ts":
  /*!*********************************************!*\
    !*** ./src/app/actions/init-app.actions.ts ***!
    \*********************************************/

  /*! exports provided: initApp */

  /***/
  function srcAppActionsInitAppActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initApp", function () {
      return initApp;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var initApp = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[App] Init app');
    /***/
  },

  /***/
  "./src/app/actions/menu.actions.ts":
  /*!*****************************************!*\
    !*** ./src/app/actions/menu.actions.ts ***!
    \*****************************************/

  /*! exports provided: MenuActionTypes, setCurrent, loadElements, elementsLoaded */

  /***/
  function srcAppActionsMenuActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuActionTypes", function () {
      return MenuActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setCurrent", function () {
      return setCurrent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadElements", function () {
      return loadElements;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "elementsLoaded", function () {
      return elementsLoaded;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var MenuActionTypes;

    (function (MenuActionTypes) {
      MenuActionTypes["SetCurrent"] = "[Menu] Set currrent";
      MenuActionTypes["LoadElements"] = "[Menu] Load elements";
      MenuActionTypes["elementsLoaded"] = "[Menu] Elements loaded";
    })(MenuActionTypes || (MenuActionTypes = {}));

    var setCurrent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MenuActionTypes.SetCurrent, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadElements = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MenuActionTypes.LoadElements);
    var elementsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MenuActionTypes.elementsLoaded, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
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


    var _resolvers_config_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resolvers/config.resolver */
    "./src/app/resolvers/config.resolver.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/main-page/main-page.component */
    "./src/app/components/main-page/main-page.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_specialists_specialists_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/specialists/specialists.component */
    "./src/app/components/specialists/specialists.component.ts");
    /* harmony import */


    var _components_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/services/services.component */
    "./src/app/components/services/services.component.ts");
    /* harmony import */


    var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/contacts/contacts.component */
    "./src/app/components/contacts/contacts.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'main'
    }, {
      path: '',
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
      // canActivate: [
      //   AuthGuard
      // ],
      children: [{
        path: 'main',
        component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
        pathMatch: 'full',
        resolve: {
          config: _resolvers_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"]
        }
      }, {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        pathMatch: 'full',
        resolve: {
          config: _resolvers_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"]
        }
      }, {
        path: 'specialists',
        component: _components_specialists_specialists_component__WEBPACK_IMPORTED_MODULE_6__["SpecialistsComponent"],
        pathMatch: 'full',
        resolve: {
          config: _resolvers_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"]
        }
      }, {
        path: 'services',
        component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"],
        pathMatch: 'full',
        resolve: {
          config: _resolvers_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"]
        }
      }, {
        path: 'contacts',
        component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"],
        pathMatch: 'full',
        resolve: {
          config: _resolvers_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"]
        }
      }]
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

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

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
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"]
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var angular_svg_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-svg-icon */
    "./node_modules/angular-svg-icon/__ivy_ngcc__/fesm2015/angular-svg-icon.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _modules_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./modules/material.module */
    "./src/app/modules/material.module.ts");
    /* harmony import */


    var _actions_init_app_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./actions/init-app.actions */
    "./src/app/actions/init-app.actions.ts");
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./reducers */
    "./src/app/reducers/index.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _effects_config_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./effects/config.effects */
    "./src/app/effects/config.effects.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/main-page/main-page.component */
    "./src/app/components/main-page/main-page.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/contacts/contacts.component */
    "./src/app/components/contacts/contacts.component.ts");
    /* harmony import */


    var _components_services_services_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/services/services.component */
    "./src/app/components/services/services.component.ts");
    /* harmony import */


    var _components_specialists_specialists_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/specialists/specialists.component */
    "./src/app/components/specialists/specialists.component.ts");
    /* harmony import */


    var _components_carusel_carusel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/carusel/carusel.component */
    "./src/app/components/carusel/carusel.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _services_config_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/config.service */
    "./src/app/services/config.service.ts");
    /* harmony import */


    var _effects_menu_effects__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./effects/menu.effects */
    "./src/app/effects/menu.effects.ts");
    /* harmony import */


    var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ngmodule/material-carousel */
    "./node_modules/@ngmodule/material-carousel/__ivy_ngcc__/fesm2015/ngmodule-material-carousel.js");

    var AppModule = function AppModule(store) {
      _classCallCheck(this, AppModule);

      this.store = store;
      this.store.dispatch(Object(_actions_init_app_actions__WEBPACK_IMPORTED_MODULE_11__["initApp"])());
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
      },
      providers: [_services_config_service__WEBPACK_IMPORTED_MODULE_25__["ConfigService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
        useValue: 'ru-RU'
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_8__["AngularSvgIconModule"].forRoot(), _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_27__["MatCarouselModule"].forRoot(), _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_12__["reducers"], {
        metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_12__["metaReducers"],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([_effects_config_effects__WEBPACK_IMPORTED_MODULE_14__["ConfigEffects"], _effects_menu_effects__WEBPACK_IMPORTED_MODULE_26__["MenuEffects"]]), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_16__["MainComponent"], _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_17__["MainPageComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"], _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_19__["ContactsComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_20__["ServicesComponent"], _components_specialists_specialists_component__WEBPACK_IMPORTED_MODULE_21__["SpecialistsComponent"], _components_carusel_carusel_component__WEBPACK_IMPORTED_MODULE_22__["CaruselComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_8__["AngularSvgIconModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_27__["MatCarouselModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsRootModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_16__["MainComponent"], _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_17__["MainPageComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"], _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_19__["ContactsComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_20__["ServicesComponent"], _components_specialists_specialists_component__WEBPACK_IMPORTED_MODULE_21__["SpecialistsComponent"], _components_carusel_carusel_component__WEBPACK_IMPORTED_MODULE_22__["CaruselComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_8__["AngularSvgIconModule"].forRoot(), _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_27__["MatCarouselModule"].forRoot(), _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_12__["reducers"], {
            metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_12__["metaReducers"],
            runtimeChecks: {
              strictStateImmutability: true,
              strictActionImmutability: true
            }
          }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
          }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([_effects_config_effects__WEBPACK_IMPORTED_MODULE_14__["ConfigEffects"], _effects_menu_effects__WEBPACK_IMPORTED_MODULE_26__["MenuEffects"]]), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"]],
          providers: [_services_config_service__WEBPACK_IMPORTED_MODULE_25__["ConfigService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
            useValue: 'ru-RU'
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 53,
      vars: 6,
      consts: [[1, "flex-container"], [1, "first"], [1, "second"], [1, "licenses"], [1, "image"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C\u0438 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u044B\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438 (\u0414\u041C\u0421)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041E\u041E\u041E \u0421\u041A \"\u0421\u0414\u0421\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041E\u0410\u041E \"\u0410\u043B\u044C\u0444\u0430\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041E\u041E\u041E \u0421\u041A \"\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u041F\u0410\u041E \u0421\u041A \"\u0420\u043E\u0441\u0433\u043E\u0441\u0441\u0442\u0440\u0430\u0445\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u041D\u0435\u043C\u043D\u043E\u0433\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u041E\u041E\u041E \"\u041C\u0415\u0414\u041B\u0410\u0419\u0424\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0439 \u0446\u0435\u043D\u0442\u0440 \xAB\u041C\u0415\u0414\u041B\u0410\u0419\u0424\xBB \u0431\u044B\u043B \u043E\u0441\u043D\u043E\u0432\u0430\u043D \u0432 2011\u0433. \u0412 \u0442\u043E \u0432\u0440\u0435\u043C\u044F \u0432\u0435\u0441\u044C \u0446\u0435\u043D\u0442\u0440 \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u043B\u0441\u044F \u0432 2-\u0445 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0431\u044B\u043B\u0438 \u0432 \u0441\u043E\u0441\u0442\u0430\u0432\u0435 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u0446\u0435\u043D\u0442\u0440\u0430 (\u041C\u0426 \u041F\u0430\u043D\u0430\u0446\u0435\u044F). \u041F\u0440\u0438\u0435\u043C \u0432\u0435\u043B\u0438 \u0432\u0441\u0435\u0433\u043E 5 \u0432\u0440\u0430\u0447\u0435\u0439 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432: \u043E\u043D\u043A\u043E\u043B\u043E\u0433-\u043C\u0430\u043C\u043C\u043E\u043B\u043E\u0433, \u0430\u043A\u0443\u0448\u0435\u0440-\u0433\u0438\u043D\u0435\u043A\u043E\u043B\u043E\u0433, \u044D\u043D\u0434\u043E\u043A\u0440\u0438\u043D\u043E\u043B\u043E\u0433, \u043D\u0435\u0432\u0440\u043E\u043B\u043E\u0433, \u043A\u0430\u0440\u0434\u0438\u043E\u043B\u043E\u0433. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u0412 2015\u0433 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0439 \u0446\u0435\u043D\u0442\u0440 \xAB\u041C\u0415\u0414\u041B\u0410\u0419\u0424\xBB \u043F\u0435\u0440\u0435\u0435\u0445\u0430\u043B \u0432 \u043D\u043E\u0432\u043E\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0441 \u043F\u0440\u043E\u0441\u0442\u043E\u0440\u043D\u044B\u043C \u0441\u0432\u0435\u0442\u043B\u044B\u043C \u0445\u043E\u043B\u043B\u043E\u043C, \u0443\u0434\u043E\u0431\u043D\u044B\u043C\u0438 \u0434\u0438\u0432\u0430\u043D\u0430\u043C\u0438, \u043F\u0440\u0438\u044F\u0442\u043D\u043E\u0439 \u043C\u0443\u0437\u044B\u043A\u043E\u0439 \u0434\u043B\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u0441\u0432\u043E\u0435\u0439 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438. \u0421 \u044D\u0442\u043E\u0433\u043E \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u0432 \u043D\u0430\u0448\u0435\u043C \u0440\u0430\u0441\u043F\u043E\u0440\u044F\u0436\u0435\u043D\u0438\u0438 \u0441\u0442\u0430\u043B\u043E 7 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u043E\u0432 \u0434\u043B\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0435\u043C\u0430 \u0432\u0440\u0430\u0447\u0435\u0439 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u0438 \u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u0434\u043B\u044F \u043E\u0442\u0434\u044B\u0445\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u0423\u0432\u0435\u043B\u0438\u0447\u0438\u043B\u043E\u0441\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u0432\u0435\u0434\u0443\u0449\u0438\u0445 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u043F\u0440\u0438\u0435\u043C. \u041A \u0432\u044B\u0448\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C, \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u043B\u0438\u0441\u044C: \u0442\u0435\u0440\u0430\u043F\u0435\u0432\u0442, \u0434\u0435\u0440\u043C\u0430\u0442\u043E-\u0432\u0435\u043D\u0435\u0440\u043E\u043B\u043E\u0433, \u0445\u0438\u0440\u0443\u0440\u0433, \u0432\u0440\u0430\u0447 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438, \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0435\u0432\u0442. \u041F\u043E\u043F\u043E\u043B\u043D\u0438\u043B\u0441\u044F \u043F\u0430\u0440\u043A \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u044B: \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0441\u044F \u043D\u043E\u0432\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 \u0443\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u043E\u0439 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438 (\u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0442\u0430\u043A\u0438\u0445 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043E\u0432 \u0432 \u043D\u0430\u0448\u0435\u043C \u0446\u0435\u043D\u0442\u0440\u0435 3 \u0448\u0442), \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043A\u0430\u0440\u0434\u0438\u043E\u0433\u0440\u0430\u0444, \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u044B \u0434\u043B\u044F \u0441\u0443\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u042D\u041A\u0413 \u0438 \u0410\u0414. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u041F\u043E\u044F\u0432\u0438\u043B\u0441\u044F \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442, \u0433\u0434\u0435 \u0441\u0442\u0430\u043B\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u043C \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043B\u0435\u0447\u0435\u0431\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440 (\u0432/\u043C\u044B\u0448\u0435\u0447\u043D\u044B\u0445, \u0432/\u0432\u0435\u043D\u043D\u044B\u0445, \u043F\u043E\u0434\u043A\u043E\u0436\u043D\u044B\u0445 \u0438\u043D\u044A\u0435\u043A\u0446\u0438\u0439 \u0438 \u0438\u043D\u0444\u0443\u0437\u0438\u0439). \u0412 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u0441 \u043E\u0431\u0449\u0435\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0441\u0435\u0442\u044C\u044E \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0439 \u041A\u0414\u041B \u043F\u043E\u044F\u0432\u0438\u043B\u0430\u0441\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430\u0447\u0438\u043D\u0430\u044F \u043E\u0442 \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u043A\u0440\u043E\u0432\u0438 \u0438 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u044F \u0441\u043B\u043E\u0436\u043D\u044B\u043C\u0438 \u0433\u0435\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u043E\u0431\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u0412 2019 \u2013 2020 \u0433\u043E\u0434\u0430\u0445 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0439 \u0446\u0435\u043D\u0442\u0440 \xAB\u041C\u0415\u0414\u041B\u0410\u0419\u0424\xBB \u0441\u0434\u0435\u043B\u0430\u043B \u0435\u0449\u0451 \u043E\u0434\u0438\u043D \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0448\u0430\u0433 \u043A \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044E \u0446\u0435\u043B\u0438: \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u0446\u0435\u043D\u0442\u0440\u0430, \u0433\u0434\u0435 \u0432 \u043E\u0434\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0434\u0438\u0430\u0433\u043D\u043E\u0437\u0430, \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u0433\u043E \u043E\u0431\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043B\u0435\u0447\u0435\u043D\u0438\u044F. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u0443 \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u0431\u0435\u0433\u0430\u0442\u044C \u0438\u0437 \u0446\u0435\u043D\u0442\u0440\u0430 \u0432 \u0446\u0435\u043D\u0442\u0440, \u043E\u0442 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430 \u043A \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0443. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043C\u044B \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u043B\u0438 \u043F\u043B\u043E\u0449\u0430\u0434\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u043D\u0438\u0445 \u0441\u0430\u043C\u043E\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u043E\u0432\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u0422\u0435\u043F\u0435\u0440\u044C \u0432 \u043D\u0430\u0448\u0435\u043C \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u043C \u0446\u0435\u043D\u0442\u0440\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u0443\u0435\u0442: \u043E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438 \u0438 \u043B\u0435\u0447\u0435\u043D\u0438\u044F \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u0439 \u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0445 \u0436\u0435\u043B\u0435\u0437, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u043A \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0443\u0441\u043B\u0443\u0433\u0430\u043C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0435\u043C\u0430 \u043E\u043D\u043A\u043E\u043B\u043E\u0433\u0430-\u043C\u0430\u043C\u043C\u043E\u043B\u043E\u0433\u0430, \u0443\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u043E\u043C\u0443 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044E \u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0445 \u0436\u0435\u043B\u0435\u0437 \u043F\u0440\u0438\u0431\u0430\u0432\u0438\u043B\u0430\u0441\u044C \u043F\u0435\u0440\u0432\u0430\u044F \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 \u041F\u0440\u043E\u043A\u043E\u043F\u044C\u0435\u0432\u0441\u043A\u0435 \u0446\u0438\u0444\u0440\u043E\u0432\u0430\u044F \u0440\u0435\u043D\u0442\u0433\u0435\u043D\u043E\u0432\u0441\u043A\u0430\u044F \u043C\u0430\u043C\u043C\u043E\u0433\u0440\u0430\u0444\u0438\u044F. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0431\u044B\u043B \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D \u0441\u0430\u043C\u044B\u0439 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u0440\u0435\u043D\u0442\u0433\u0435\u043D\u043E\u0432\u0441\u043A\u0438\u0439 \u043C\u0430\u043C\u043C\u043E\u0433\u0440\u0430\u0444 \u0438\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u043E\u0439 \u0444\u0438\u0440\u043C\u044B GIOTTO 3D. \u0418 \u0442\u0435\u043F\u0435\u0440\u044C \u0432\u0440\u0430\u0447 \u043C\u0430\u043C\u043C\u043E\u043B\u043E\u0433, \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0441\u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u043E\u0434\u043E\u0437\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0443\u0447\u0430\u0441\u0442\u043E\u043A \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435 \u043F\u043E\u0434 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435\u043C, \u043F\u0440\u043E\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u0451 \u044D\u0442\u043E \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435 \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0430 \u0423\u0417 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0430. \u0414\u0430\u043B\u044C\u0448\u0435 \u0432\u0440\u0430\u0447 \u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u0431\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438\u0437 \u043E\u043F\u0443\u0445\u043E\u043B\u0438 \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0435\u0451 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438 \u043A \u0434\u043E\u0431\u0440\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0438\u043B\u0438 \u0437\u043B\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043F\u0440\u0438\u0440\u043E\u0434\u0435. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C, \u0434\u043E\u043A\u0442\u043E\u0440 \u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0441\u0435 \u044D\u0442\u043E \u043D\u0435 \u0432\u0441\u043B\u0435\u043F\u0443\u044E, \u0430 \u0447\u0435\u0442\u043A\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u044F \u0432\u0435\u0441\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435 \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0430, \u0447\u0442\u043E \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043E\u043C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430. \u0412\u0435\u0441\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0434\u0438\u0430\u0433\u043D\u043E\u0437\u0430 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 30-40 \u043C\u0438\u043D\u0443\u0442, \u043D\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0439 \u0446\u0435\u043D\u0442\u0440 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0432\u043E\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u0441\u0442\u043E\u043B\u044C \u0431\u044B\u0441\u0442\u0440\u044B\u0435, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0438 \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u0412\u0442\u043E\u0440\u044B\u043C \u043D\u043E\u0432\u043E\u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0435\u043C \u0441\u0442\u0430\u043B\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u043E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u0439 \u043F\u0438\u0449\u0435\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B. \u0414\u043B\u044F \u044D\u0442\u043E\u0439 \u0446\u0435\u043B\u0438 \u043D\u0430\u0447\u0430\u043B \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u044D\u043D\u0434\u043E\u0441\u043A\u043E\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442, \u0433\u0434\u0435 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u044D\u043D\u0434\u043E\u0441\u043A\u043E\u043F\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0438\u0449\u0435\u0432\u043E\u0434\u0430, \u0436\u0435\u043B\u0443\u0434\u043A\u0430, \u0434\u0432\u0435\u043D\u0430\u0434\u0446\u0430\u0442\u0438\u043F\u0435\u0440\u0441\u0442\u043D\u043E\u0439 \u043A\u0438\u0448\u043A\u0438 (\u0424\u0438\u0431\u0440\u043E\u0433\u0430\u0441\u0442\u0440\u043E\u0441\u043A\u043E\u043F\u0438\u044F) \u0438 \u0432\u0441\u0435\u0445 \u043E\u0442\u0434\u0435\u043B\u043E\u0432 \u0442\u043E\u043B\u0441\u0442\u043E\u0433\u043E \u043A\u0438\u0448\u0435\u0447\u043D\u0438\u043A\u0430 (\u0424\u0438\u0431\u0440\u043E\u043A\u043E\u043B\u043E\u043D\u043E\u0441\u043A\u043E\u043F\u0438\u044F). \u041E\u0431\u0430 \u043C\u0435\u0442\u043E\u0434\u0430 \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u0437\u0430\u0431\u043E\u0440\u043E\u043C \u0442\u043A\u0430\u043D\u0435\u0432\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0434\u043B\u044F \u0433\u0438\u0441\u0442\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u0435\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 (\u043A\u0430\u043A \u0434\u043E\u0431\u0440\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E, \u0442\u0430\u043A \u0438 \u0437\u043B\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E). \u0414\u043B\u044F \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0438 \u0438\u043D\u0442\u0435\u0440\u043F\u0440\u0435\u0442\u0430\u0446\u0438\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0445 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u043C\u044B \u043E\u0442\u043A\u0440\u044B\u043B\u0438 \u043F\u0440\u0438\u0451\u043C \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0432\u0440\u0430\u0447\u0430 \u0433\u0430\u0441\u0442\u0440\u043E\u044D\u043D\u0442\u0435\u0440\u043E\u043B\u043E\u0433\u0430. \u0412 \u043F\u043E\u043C\u043E\u0449\u044C \u043A \u0432\u044B\u0448\u0435\u043E\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u043C \u0443\u0441\u043B\u0443\u0433\u0430\u043C \u0443 \u043D\u0430\u0441 \u0443\u0436\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043B\u0435\u0442 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u0443\u0435\u0442 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 (\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u041A\u0414\u041B) \u0438 \u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043E\u0440\u0433\u0430\u043D\u043E\u0432 \u0431\u0440\u044E\u0448\u043D\u043E\u0439 \u043F\u043E\u043B\u043E\u0441\u0442\u0438. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0439 \u0446\u0435\u043D\u0442\u0440 \u041C\u0415\u0414\u041B\u0410\u0419\u0424 \u043D\u0430\u0446\u0435\u043B\u0435\u043D \u043D\u0430 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435, \u0447\u0442\u043E\u0431\u044B \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 \u043F\u043E\u043C\u043E\u0449\u0438 \u0431\u044B\u043B\u043E \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0430 \u0432\u044B\u0441\u043E\u043A\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435. \u041C\u044B \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0441\u0442\u0432\u0443\u0435\u043C\u0441\u044F \u0434\u043B\u044F \u0412\u0430\u0441 \u2013 \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043D\u0435\u0438\u0437\u043C\u0435\u043D\u043D\u044B\u043C \u0443\u044E\u0442\u043D\u0430\u044F \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430 \u0438 \u0434\u043E\u0431\u0440\u043E\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u043A \u0412\u0430\u043C. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(/assets/images/licenzia2020.jpg)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(/assets/images/licenzia2_2020.jpg)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(/assets/images/Prilojenie_licenzia2020.jpg)");
        }
      },
      styles: [".flex-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex-container[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {\n  flex-basis: 300px;\n  min-width: 300px;\n  color: #338b87;\n  padding: 32px;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 28px;\n}\n.flex-container[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14pt;\n  color: #3e8579;\n}\n.flex-container[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%] {\n  padding: 32px;\n  text-align: justify;\n}\n.flex-container[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .licenses[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.flex-container[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .licenses[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 320px;\n  background-size: 100% 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0FBQ1I7QUFDUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ1o7QUFFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFaO0FBRVk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FBQWhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5maXJzdCB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDMwMHB4O1xuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgICBjb2xvcjogcmdiKDUxLCAxMzksIDEzNSk7XG4gICAgICAgIHBhZGRpbmc6IDMycHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG5cbiAgICAgICAgcCBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNjIsIDEzMywgMTIxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2Vjb25kIHtcbiAgICAgICAgcGFkZGluZzogMzJweDtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcblxuICAgICAgICAubGljZW5zZXMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzIwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/carusel/carusel.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/carusel/carusel.component.ts ***!
    \*********************************************************/

  /*! exports provided: CaruselComponent */

  /***/
  function srcAppComponentsCaruselCaruselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaruselComponent", function () {
      return CaruselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngmodule/material-carousel */
    "./node_modules/@ngmodule/material-carousel/__ivy_ngcc__/fesm2015/ngmodule-material-carousel.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CaruselComponent_mat_carousel_slide_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-carousel-slide", 3, 4);
      }

      if (rf & 2) {
        var slide_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", slide_r1.image)("hideOverlay", false);
      }
    }

    var CaruselComponent = /*#__PURE__*/function () {
      function CaruselComponent() {
        _classCallCheck(this, CaruselComponent);

        this.slides = [{
          'image': '/assets/images/Oazis.jpg'
        }, {
          'image': '/assets/images/Kardiolog-terapevt.jpg'
        }, {
          'image': '/assets/images/MedSestra.jpg'
        }, {
          'image': '/assets/images/UZI_diagnostika.jpg'
        }, {
          'image': '/assets/images/Onkolog-mammolog.jpg'
        }];
      }

      _createClass(CaruselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CaruselComponent;
    }();

    CaruselComponent.ɵfac = function CaruselComponent_Factory(t) {
      return new (t || CaruselComponent)();
    };

    CaruselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CaruselComponent,
      selectors: [["app-carusel"]],
      decls: 3,
      vars: 8,
      consts: [["fxLayout", "", 1, "carusel"], ["timings", "250ms ease-in", "interval", "5000", "color", "primary", "maxWidth", "auto", "proportion", "35", "orientation", "ltr", 3, "autoplay", "slides", "loop", "hideArrows", "hideIndicators", "useKeyboard", "useMouseWheel"], ["overlayColor", "#00000040", 3, "image", "hideOverlay", 4, "ngFor", "ngForOf"], ["overlayColor", "#00000040", 3, "image", "hideOverlay"], ["matCarouselSlide", ""]],
      template: function CaruselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-carousel", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CaruselComponent_mat_carousel_slide_2_Template, 2, 2, "mat-carousel-slide", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("slides", ctx.slides.length)("loop", true)("hideArrows", false)("hideIndicators", false)("useKeyboard", true)("useMouseWheel", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_2__["MatCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_2__["MatCarouselSlideComponent"]],
      styles: ["[_nghost-%COMP%]   .carusel[_ngcontent-%COMP%]   mat-carousel[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ1c2VsL2NhcnVzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQURaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJ1c2VsL2NhcnVzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmNhcnVzZWwge1xuICAgICAgICBtYXQtY2Fyb3VzZWwge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaruselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-carusel',
          templateUrl: './carusel.component.html',
          styleUrls: ['./carusel.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/contacts/contacts.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/contacts/contacts.component.ts ***!
    \***********************************************************/

  /*! exports provided: ContactsComponent */

  /***/
  function srcAppComponentsContactsContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
      return ContactsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactsComponent = /*#__PURE__*/function () {
      function ContactsComponent() {
        _classCallCheck(this, ContactsComponent);
      }

      _createClass(ContactsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactsComponent;
    }();

    ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
      return new (t || ContactsComponent)();
    };

    ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactsComponent,
      selectors: [["app-contacts"]],
      decls: 51,
      vars: 0,
      consts: [[1, "intro"], [1, "intro_inner"], [1, "table_main"], [1, "rcolumn"], [1, "table"], ["href", "#"], ["src", "/assets/images/Oazis.jpg", "alt", "Oazis"]],
      template: function ContactsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0410\u0434\u0440\u0435\u0441:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u041A\u0435\u043C\u0435\u0440\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0433..\u041F\u0440\u043E\u043A\u043E\u043F\u044C\u0435\u0432\u0441\u043A\u201A \u0443\u043B. \u0413\u0430\u0439\u0434\u0430\u0440\u0430, \u0434\u043E\u043C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "50\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u041E\u0444\u0438\u0441: 303");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u043A\u043B\u0438\u043D\u0438\u043A\u0438:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u041F\u043D-\u041F\u0442: 9:00 - 18:00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0421\u0431: 09:00 - 13:00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0432\u0441\u043A: \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0417\u0430\u0431\u043E\u0440 \u0430\u043D\u0430\u043B\u0438\u0437\u043E\u0432:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u041F\u043D-\u041F\u0442: 8:00 - 12:00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0421\u0431: 09:00 - 12:00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " (3846) 652-652");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 8 -903-0-677-888");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "E-mail: medlife.prk@mail.ru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u043A\u043E\u043D\u0442\u0430\u043A\u0442 \u0446\u0435\u043D\u0442\u0440\u0430:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u041F\u043D-\u041F\u0442: 9:00 - 18:00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u0421\u0431: 09:00 - 13:00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".intro[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.about[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.about[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  margin: 0 1px;\n  list-style-type: none;\n  border-bottom: 1px solid #dfe0dc;\n  padding: 8px;\n  color: #1D85B3;\n}\n\n.about[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.table_main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 25% 75%;\n}\n\n.lcolumn[_ngcontent-%COMP%] {\n  font: 13px/122% Arial, Helvetica, sans-serif;\n  width: 225px;\n  color: #1D85B3;\n  font-size: 14px;\n  font-weight: bold;\n  text-decoration: none;\n  line-height: 122%;\n  border: 1px solid #dfe0dc;\n  border-radius: 5px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.rcolumn[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 100%;\n}\n\n.rcolumn[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: Arial, sans-serif;\n  font-size: 24px;\n  border-bottom: 2px solid #8bc015;\n}\n\n.rcolumn[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  padding: 25px 0 25px 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  color: #4d4d4d;\n  font: 13px/122% Arial, Helvetica, sans-serif;\n  line-height: 1.5;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFDQTtFQVlJLGFBQUE7RUFDQSxzQkFBQTtBQVRKOztBQUhJO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBS1I7O0FBSlE7RUFDSSxtQkFBQTtBQU1aOztBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBREE7RUFDSSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FBS0o7O0FBSkk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBTVI7O0FBSks7RUFDRyxzQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFNUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm8ge1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4uYWJvdXQge1xuICAgIGEgeyBcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBtYXJnaW46IDAgMXB4O1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZlMGRjO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGNvbG9yOiAjMUQ4NUIzO1xuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udGFibGVfbWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA3NSU7XG59XG4ubGNvbHVtbiB7XG4gICAgZm9udDogMTNweC8xMjIlIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6IDIyNXB4O1xuICAgIGNvbG9yOiAjMUQ4NUIzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDEyMiU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RmZTBkYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5yY29sdW1uIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoMSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOGJjMDE1O1xuICAgICB9XG4gICAgIC50YWJsZSB7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggMCAyNXB4IDA7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgY29sb3I6ICM0ZDRkNGQ7XG4gICAgICAgIGZvbnQ6IDEzcHgvMTIyJSBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiBcblxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contacts',
          templateUrl: './contacts.component.html',
          styleUrls: ['./contacts.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var FooterComponent = function FooterComponent() {
      _classCallCheck(this, FooterComponent);
    };

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 2,
      vars: 0,
      consts: [["fxLayout", "row", 1, "footer"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Footer works\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"]],
      styles: [".footer[_ngcontent-%COMP%] {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_reducers_config_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/reducers/config.reducer */
    "./src/app/reducers/config.reducer.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_reducers_menu_elements_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/reducers/menu-elements.reducer */
    "./src/app/reducers/menu-elements.reducer.ts");
    /* harmony import */


    var src_app_reducers_current_page_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/reducers/current-page.reducer */
    "./src/app/reducers/current-page.reducer.ts");
    /* harmony import */


    var src_app_actions_menu_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/actions/menu.actions */
    "./src/app/actions/menu.actions.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.config$).LOGO_IMG, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HeaderComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var phone_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](phone_r3);
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function HeaderComponent_li_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_18_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var index_r5 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.setCurrent(index_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r4 = ctx.$implicit;
        var index_r5 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx_r2.currentPage$) === index_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, element_r4.path));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r4.name);
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(store) {
        _classCallCheck(this, HeaderComponent);

        this.store = store;
        this.config$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_reducers_config_reducer__WEBPACK_IMPORTED_MODULE_2__["configFeatureKey"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (val) {
          return Boolean(val);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
        this.menuElements$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_reducers_menu_elements_reducer__WEBPACK_IMPORTED_MODULE_4__["menuElementsFeatureKey"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (val) {
          return Boolean(val);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
        this.currentPage$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_reducers_current_page_reducer__WEBPACK_IMPORTED_MODULE_5__["currentPageFeatureKey"]));
      }

      _createClass(HeaderComponent, [{
        key: "setCurrent",
        value: function setCurrent(tab) {
          this.store.dispatch(Object(src_app_actions_menu_actions__WEBPACK_IMPORTED_MODULE_6__["setCurrent"])({
            current: tab
          }));
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 20,
      vars: 12,
      consts: [["fxLayout", "row", 1, "header"], ["routerLink", "main", 1, "logo"], [3, "src", 4, "ngIf"], ["fxLayout", "column", 1, "content"], [1, "contacts"], ["fxLayoutAlign", "end", 1, "address"], ["fxLayout", "row", "fxLayoutAlign", "end"], ["class", "phone", 4, "ngFor", "ngForOf"], [1, "menu"], [3, "current", "routerLink", "click", 4, "ngFor", "ngForOf"], [3, "src"], [1, "phone"], [3, "routerLink", "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_img_2_Template, 2, 3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_div_11_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041E\u041E\u041E \"\u041C\u0415\u0414\u041B\u0410\u0419\u0424\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_li_18_Template, 4, 8, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tmp_0_0 = null;
          var currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.config$)) == null ? null : tmp_0_0.LOGO_IMG;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, ctx.config$).ADDRESS);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, ctx.config$).PHONES);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 10, ctx.menuElements$));
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
      styles: ["@media (max-width: 710px) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-basis: 87px;\n  border-bottom: 1px solid #3a3a3a;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 120px;\n}\n.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%] {\n  height: 45px;\n  font-size: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 120px;\n}\n.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 470px;\n}\n.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n}\n.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  flex-grow: 1;\n  display: flex;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n}\n.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: auto;\n  color: #3a3a3a;\n  font: normal 18px/34px Arial, Helvetica, sans-serif;\n  display: block;\n  text-decoration: none;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUk7SUFDRSxzQkFBQTtFQUFKO0VBRUU7SUFDRSxhQUFBO0VBQUo7QUFDRjtBQUlBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFGSjtBQUlJO0VBQ0UsZUFBQTtBQUZOO0FBSU07RUFDRSxhQUFBO0FBRlI7QUFNSTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtBQUpOO0FBTU07RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUpSO0FBTVE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUpWO0FBUVU7RUFDRSxZQUFBO0FBTlo7QUFVTTtFQUNFLGtCQUFBO0FBUlI7QUFVUTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBUlY7QUFVVTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFSWjtBQWNZO0VBQ0UsZUFBQTtBQVpkO0FBZVk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1EQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFiZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOjcxMHB4KSAge1xuICA6aG9zdCAuaGVhZGVyIC5jb250ZW50IHtcbiAgICAubWVudSB1bCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuY29udGFjdHMge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLmhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1iYXNpczogODdweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDU4LCA1OCwgNTgpO1xuICAgIFxuICAgIC5sb2dvIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIC5jb250YWN0cyB7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5waG9uZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGRyZXNzIHtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHdpZHRoOiA0NzBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5tZW51IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuY3VycmVudCB7XG4gICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig1OCwgNTgsIDU4KTtcbiAgICAgICAgICAgICAgZm9udDogbm9ybWFsIDE4cHgvMzRweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main-page/main-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/main-page/main-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppComponentsMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _carusel_carusel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../carusel/carusel.component */
    "./src/app/components/carusel/carusel.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MainPageComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
      }

      if (rf & 2) {
        var service_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + service_r1.backgroundImg + ")");
      }
    }

    var MainPageComponent = function MainPageComponent() {
      _classCallCheck(this, MainPageComponent);

      this.services = [{
        name: 'first',
        backgroundImg: '/assets/images/akusher-ginekolog.jpg'
      }, {
        name: 'second',
        backgroundImg: '/assets/images/Dermatolog.jpg'
      }, {
        name: 'third',
        backgroundImg: '/assets/images/Onkolog-mammolog.jpg'
      }, {
        name: 'fourth',
        backgroundImg: '/assets/images/bg_services.jpeg'
      }, {
        name: 'fifth',
        backgroundImg: '/assets/images/bg_services.jpeg'
      }, {
        name: 'sixth',
        backgroundImg: '/assets/images/bg_services.jpeg'
      }];
    };

    MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
      return new (t || MainPageComponent)();
    };

    MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainPageComponent,
      selectors: [["app-main-page"]],
      decls: 7,
      vars: 1,
      consts: [["fxLayout", "column", 1, "main-page-container"], ["fxLayout", "column", 1, "service-container"], ["fxLayout", "", "fxLayoutGap", "32px"], ["class", "service", 3, "background-image", 4, "ngFor", "ngForOf"], [1, "service"]],
      template: function MainPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carusel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MainPageComponent_div_6_Template, 1, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _carusel_carusel_component__WEBPACK_IMPORTED_MODULE_2__["CaruselComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".main-page-container[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n.main-page-container[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%] {\n  margin: 32px;\n  min-height: 300px;\n}\n.main-page-container[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 200px;\n}\n.main-page-container[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.main-page-container[_ngcontent-%COMP%]   .service-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%] {\n  min-width: 250px;\n  border-radius: 4px;\n  background-color: #adadad;\n  background-size: 100% 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFDUTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FBQ1o7QUFDWTtFQUNJLGFBQUE7QUFDaEI7QUFFWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBQWhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tcGFnZS1jb250YWluZXIge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG5cbiAgICAuc2VydmljZS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDMycHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIFxuICAgICAgICA+IGRpdiB7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuc2VydmljZSB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYWRhZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-page',
          templateUrl: './main-page.component.html',
          styleUrls: ['./main-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var MainComponent = function MainComponent() {
      _classCallCheck(this, MainComponent);
    };

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 5,
      vars: 0,
      consts: [["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "main-container"], [1, "content-container"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  overflow: auto;\n}\n[_nghost-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 100%;\n}\n[_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n[_nghost-%COMP%]   .data[_ngcontent-%COMP%] {\n  height: calc(100% - 87px);\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUhGO0FBS0U7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUFISjtBQUtJO0VBQ0UsZ0JBQUE7QUFITjtBQU9FO0VBQ0UseUJBQUE7RUFFQSxhQUFBO0FBTkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdGhlbWVcIjtcblxuJGFscGhhOiBtYXAtZ2V0KCR0aGVtZSwgYWxwaGEpO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLmRhdGEge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gODdweCk7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/services/services.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/services/services.component.ts ***!
    \***********************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppComponentsServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) {
      return new (t || ServicesComponent)();
    };

    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicesComponent,
      selectors: [["app-services"]],
      decls: 2,
      vars: 0,
      template: function ServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " services works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-services',
          templateUrl: './services.component.html',
          styleUrls: ['./services.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/specialists/specialists.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/specialists/specialists.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SpecialistsComponent */

  /***/
  function srcAppComponentsSpecialistsSpecialistsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpecialistsComponent", function () {
      return SpecialistsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SpecialistsComponent = /*#__PURE__*/function () {
      function SpecialistsComponent() {
        _classCallCheck(this, SpecialistsComponent);
      }

      _createClass(SpecialistsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SpecialistsComponent;
    }();

    SpecialistsComponent.ɵfac = function SpecialistsComponent_Factory(t) {
      return new (t || SpecialistsComponent)();
    };

    SpecialistsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SpecialistsComponent,
      selectors: [["app-specialists"]],
      decls: 2,
      vars: 0,
      template: function SpecialistsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " specialists works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3BlY2lhbGlzdHMvc3BlY2lhbGlzdHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecialistsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-specialists',
          templateUrl: './specialists.component.html',
          styleUrls: ['./specialists.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/effects/config.effects.ts":
  /*!*******************************************!*\
    !*** ./src/app/effects/config.effects.ts ***!
    \*******************************************/

  /*! exports provided: ConfigEffects */

  /***/
  function srcAppEffectsConfigEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigEffects", function () {
      return ConfigEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _actions_config_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/config.actions */
    "./src/app/actions/config.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/config.service */
    "./src/app/services/config.service.ts");

    var ConfigEffects = function ConfigEffects(_actions$, _store, configService) {
      var _this = this;

      _classCallCheck(this, ConfigEffects);

      this._actions$ = _actions$;
      this._store = _store;
      this.configService = configService;
      this.loadConfig$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])('[App] Init app'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMapTo"])(_this.configService.getConfig()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (config) {
          return Object(_actions_config_actions__WEBPACK_IMPORTED_MODULE_2__["loadConfig"])({
            config: config
          });
        }));
      });
    };

    ConfigEffects.ɵfac = function ConfigEffects_Factory(t) {
      return new (t || ConfigEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]));
    };

    ConfigEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConfigEffects,
      factory: ConfigEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/effects/menu.effects.ts":
  /*!*****************************************!*\
    !*** ./src/app/effects/menu.effects.ts ***!
    \*****************************************/

  /*! exports provided: MenuEffects */

  /***/
  function srcAppEffectsMenuEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuEffects", function () {
      return MenuEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _actions_menu_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/menu.actions */
    "./src/app/actions/menu.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var elements = [{
      name: 'Главная',
      path: 'main'
    }, {
      name: 'Услуги',
      path: 'services'
    }, {
      name: 'О клинике',
      path: 'about'
    }, {
      name: 'Специалисты',
      path: 'specialists'
    }, {
      name: 'Контакты',
      path: 'contacts'
    }];

    var MenuEffects = function MenuEffects(actions$, store) {
      var _this2 = this;

      _classCallCheck(this, MenuEffects);

      this.actions$ = actions$;
      this.store = store;
      this.startToLoadElements$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])('[App] Init app'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return Object(_actions_menu_actions__WEBPACK_IMPORTED_MODULE_2__["loadElements"])();
        }));
      });
      this.loadElements$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_menu_actions__WEBPACK_IMPORTED_MODULE_2__["MenuActionTypes"].LoadElements), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return Object(_actions_menu_actions__WEBPACK_IMPORTED_MODULE_2__["elementsLoaded"])({
            elements: elements
          });
        }));
      });
    };

    MenuEffects.ɵfac = function MenuEffects_Factory(t) {
      return new (t || MenuEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
    };

    MenuEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MenuEffects,
      factory: MenuEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/material.module.ts":
  /*!********************************************!*\
    !*** ./src/app/modules/material.module.ts ***!
    \********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppModulesMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/reducers/config.reducer.ts":
  /*!********************************************!*\
    !*** ./src/app/reducers/config.reducer.ts ***!
    \********************************************/

  /*! exports provided: configFeatureKey, initialState, reducer */

  /***/
  function srcAppReducersConfigReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "configFeatureKey", function () {
      return configFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions_config_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/config.actions */
    "./src/app/actions/config.actions.ts");

    var configFeatureKey = 'config';
    var initialState = null;
    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_config_actions__WEBPACK_IMPORTED_MODULE_1__["loadConfig"], function (state, action) {
      return action.config;
    }));
    /***/
  },

  /***/
  "./src/app/reducers/current-page.reducer.ts":
  /*!**************************************************!*\
    !*** ./src/app/reducers/current-page.reducer.ts ***!
    \**************************************************/

  /*! exports provided: currentPageFeatureKey, initialState, reducer */

  /***/
  function srcAppReducersCurrentPageReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "currentPageFeatureKey", function () {
      return currentPageFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions_menu_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/menu.actions */
    "./src/app/actions/menu.actions.ts");

    var currentPageFeatureKey = 'currentPage';
    var initialState = 0;
    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_menu_actions__WEBPACK_IMPORTED_MODULE_1__["setCurrent"], function (state, action) {
      return action.current;
    }));
    /***/
  },

  /***/
  "./src/app/reducers/index.ts":
  /*!***********************************!*\
    !*** ./src/app/reducers/index.ts ***!
    \***********************************/

  /*! exports provided: reducers, metaReducers */

  /***/
  function srcAppReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _reducers;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _config_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./config.reducer */
    "./src/app/reducers/config.reducer.ts");
    /* harmony import */


    var _menu_elements_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./menu-elements.reducer */
    "./src/app/reducers/menu-elements.reducer.ts");
    /* harmony import */


    var _current_page_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./current-page.reducer */
    "./src/app/reducers/current-page.reducer.ts");

    var reducers = (_reducers = {}, _defineProperty(_reducers, _config_reducer__WEBPACK_IMPORTED_MODULE_1__["configFeatureKey"], _config_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]), _defineProperty(_reducers, _menu_elements_reducer__WEBPACK_IMPORTED_MODULE_2__["menuElementsFeatureKey"], _menu_elements_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]), _defineProperty(_reducers, _current_page_reducer__WEBPACK_IMPORTED_MODULE_3__["currentPageFeatureKey"], _current_page_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]), _reducers);
    var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];
    /***/
  },

  /***/
  "./src/app/reducers/menu-elements.reducer.ts":
  /*!***************************************************!*\
    !*** ./src/app/reducers/menu-elements.reducer.ts ***!
    \***************************************************/

  /*! exports provided: menuElementsFeatureKey, initialState, reducer */

  /***/
  function srcAppReducersMenuElementsReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "menuElementsFeatureKey", function () {
      return menuElementsFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions_menu_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/menu.actions */
    "./src/app/actions/menu.actions.ts");

    var menuElementsFeatureKey = 'menuElements';
    var initialState = [];
    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_menu_actions__WEBPACK_IMPORTED_MODULE_1__["elementsLoaded"], function (state, action) {
      return action.elements;
    }));
    /***/
  },

  /***/
  "./src/app/resolvers/config.resolver.ts":
  /*!**********************************************!*\
    !*** ./src/app/resolvers/config.resolver.ts ***!
    \**********************************************/

  /*! exports provided: ConfigResolver */

  /***/
  function srcAppResolversConfigResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigResolver", function () {
      return ConfigResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _selectors_config_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../selectors/config.selector */
    "./src/app/selectors/config.selector.ts"); // import { ConfigService } from '../services/config.service';


    var ConfigResolver = /*#__PURE__*/function () {
      function ConfigResolver(store) {
        _classCallCheck(this, ConfigResolver);

        this.store = store;
      }

      _createClass(ConfigResolver, [{
        key: "resolve",
        value: function resolve() {
          return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors_config_selector__WEBPACK_IMPORTED_MODULE_3__["configSelector"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (val) {
            return Boolean(val);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
        }
      }]);

      return ConfigResolver;
    }();

    ConfigResolver.ɵfac = function ConfigResolver_Factory(t) {
      return new (t || ConfigResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    ConfigResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConfigResolver,
      factory: ConfigResolver.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/selectors/config.selector.ts":
  /*!**********************************************!*\
    !*** ./src/app/selectors/config.selector.ts ***!
    \**********************************************/

  /*! exports provided: configSelector */

  /***/
  function srcAppSelectorsConfigSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "configSelector", function () {
      return configSelector;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _root_state_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./root-state.selector */
    "./src/app/selectors/root-state.selector.ts");
    /* harmony import */


    var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ramda */
    "./node_modules/ramda/es/index.js");

    var configSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_root_state_selector__WEBPACK_IMPORTED_MODULE_1__["rootStateSelector"], function (state) {
      return Object(ramda__WEBPACK_IMPORTED_MODULE_2__["values"])(state.config);
    });
    /***/
  },

  /***/
  "./src/app/selectors/root-state.selector.ts":
  /*!**************************************************!*\
    !*** ./src/app/selectors/root-state.selector.ts ***!
    \**************************************************/

  /*! exports provided: rootStateSelector */

  /***/
  function srcAppSelectorsRootStateSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rootStateSelector", function () {
      return rootStateSelector;
    });

    var rootStateSelector = function rootStateSelector(state) {
      return state;
    };
    /***/

  },

  /***/
  "./src/app/services/config.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/config.service.ts ***!
    \********************************************/

  /*! exports provided: ConfigService */

  /***/
  function srcAppServicesConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return ConfigService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var ConfigService = /*#__PURE__*/function () {
      function ConfigService(_httpClient, document, store) {
        _classCallCheck(this, ConfigService);

        this._httpClient = _httpClient;
        this.document = document;
        this.store = store;
        this._cachedConfig = null;
      }

      _createClass(ConfigService, [{
        key: "getConfig",
        value: function getConfig() {
          var _this3 = this;

          if (this._cachedConfig) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
              observer.next(_this3._cachedConfig);
              observer.complete();
            });
          }

          var baseHref = this.document.getElementsByTagName('base')[0].href;

          if (baseHref[baseHref.length - 1] !== '/') {
            baseHref += '/';
          }

          if (!this._httpObservable) {
            this._httpObservable = this._httpClient.get("".concat(baseHref, "assets/config.json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (config) {
              _this3._httpObservable = null;
              _this3._cachedConfig = config;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              if (_this3._httpObservable) {
                _this3._httpObservable = null;
                console.log('Ошибка при загрузке конфигурации');
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }));
          }

          return this._httpObservable;
        }
      }]);

      return ConfigService;
    }();

    ConfigService.ɵfac = function ConfigService_Factory(t) {
      return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
    };

    ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConfigService,
      factory: ConfigService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
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
    /*! /Users/Roman_Nikolaev/Documents/hub/Medlifeprk/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
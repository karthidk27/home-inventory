function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

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
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/all-services.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/all-services.service.ts ***!
    \*****************************************/

  /*! exports provided: AllServicesService */

  /***/
  function srcAppAllServicesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllServicesService", function () {
      return AllServicesService;
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


    var _model_room_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./model/room.model */
    "./src/app/model/room.model.ts");
    /* harmony import */


    var _model_category_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./model/category.model */
    "./src/app/model/category.model.ts");
    /* harmony import */


    var _model_inventory_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./model/inventory.model */
    "./src/app/model/inventory.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AllServicesService = /*#__PURE__*/function () {
      function AllServicesService(router) {
        _classCallCheck(this, AllServicesService);

        this.router = router;
        this.isTextboxDisabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isTextboxDisabled$ = this.isTextboxDisabled.asObservable();
        this.roomNames = [new _model_room_model__WEBPACK_IMPORTED_MODULE_2__["Room"]('Living Room'), new _model_room_model__WEBPACK_IMPORTED_MODULE_2__["Room"]('Bed Room'), new _model_room_model__WEBPACK_IMPORTED_MODULE_2__["Room"]('Study Room'), new _model_room_model__WEBPACK_IMPORTED_MODULE_2__["Room"]('Utility Room')];
        this.categories = [new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["Category"]('Electronics'), new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["Category"]('Stationery'), new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["Category"]('Documents'), new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["Category"]('Books'), new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["Category"]('Others')];
        this.inventories = [new _model_inventory_model__WEBPACK_IMPORTED_MODULE_4__["Inventory"]('Sony TV', new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["Category"]('Electronics'), new _model_room_model__WEBPACK_IMPORTED_MODULE_2__["Room"]('Living Room'), 'Attached to South facing Wall', 'TV is 10 year old', false), new _model_inventory_model__WEBPACK_IMPORTED_MODULE_4__["Inventory"]('Pendrive', new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["Category"]('Electronics'), new _model_room_model__WEBPACK_IMPORTED_MODULE_2__["Room"]('Bed Room'), 'Entrance Cupboard', 'Storage Box', true), new _model_inventory_model__WEBPACK_IMPORTED_MODULE_4__["Inventory"]('Canon Printer', new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["Category"]('Electronics'), new _model_room_model__WEBPACK_IMPORTED_MODULE_2__["Room"]('Bed Room'), 'Computer Desk', 'Catridge needs filling', true), new _model_inventory_model__WEBPACK_IMPORTED_MODULE_4__["Inventory"]('Certificates', new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["Category"]('Documents'), new _model_room_model__WEBPACK_IMPORTED_MODULE_2__["Room"]('Study Room'), 'Books Cupboard', 'Certificates file', true), new _model_inventory_model__WEBPACK_IMPORTED_MODULE_4__["Inventory"]('Engineering Books', new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["Category"]('Books'), new _model_room_model__WEBPACK_IMPORTED_MODULE_2__["Room"]('Study Room'), 'Books Cupboard', 'Top Shelf', true), new _model_inventory_model__WEBPACK_IMPORTED_MODULE_4__["Inventory"]('Laundry Detergent', new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["Category"]('Others'), new _model_room_model__WEBPACK_IMPORTED_MODULE_2__["Room"]('Utility Room'), 'Cupboard', 'Bottom Shelf', true), new _model_inventory_model__WEBPACK_IMPORTED_MODULE_4__["Inventory"]('Marker', new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["Category"]('Stationery'), new _model_room_model__WEBPACK_IMPORTED_MODULE_2__["Room"]('Study Room'), 'Books Cupboard', 'Stationery Box', false)];
        this.inventoriesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.selectedInventory = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.selectedInventory$ = this.selectedInventory.asObservable();
        this.electronicsFilteredArray$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.stationeryFilteredArray$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.documentsFilteredArray$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.booksFilteredArray$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.othersFilteredArray$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.filterInventorySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.filterInventory$ = this.filterInventorySubject.asObservable();
        this.unReturnedInventory = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.count = 0;
        this.resetTextbox = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AllServicesService, [{
        key: "setFilteredInventory",
        value: function setFilteredInventory(filterInventory) {
          this.filteredInventory = filterInventory;
          this.filterInventorySubject.next(filterInventory);
        }
      }, {
        key: "calculateUnReturnedInventory",
        value: function calculateUnReturnedInventory() {
          var _this = this;

          this.count = 0;
          this.inventories.filter(function (inventory) {
            if (inventory.status === false) {
              _this.count++;
            }
          });
          this.unReturnedInventory.next(this.count);
          return this.count;
        }
      }, {
        key: "disableTextbox",
        value: function disableTextbox() {
          this.isTextboxDisabled.next(true);
        }
      }, {
        key: "enableTextbox",
        value: function enableTextbox() {
          this.isTextboxDisabled.next(false);
        }
      }, {
        key: "setRoomName",
        value: function setRoomName(roomNames) {
          this.roomNames.push(roomNames);
        }
      }, {
        key: "addCategory",
        value: function addCategory(categoryName) {
          this.categories.push(categoryName);
        }
      }, {
        key: "addInventory",
        value: function addInventory(newInventory) {
          this.inventories.push(newInventory);
          this.categoryCount();
          this.inventoriesChanged.next(this.inventories.slice());
        }
      }, {
        key: "onSelectedInventory",
        value: function onSelectedInventory(index) {
          if (this.filteredInventory) {
            this.selectedInventory.next(this.filteredInventory[index]);
          } else {
            this.selectedInventory.next(this.inventories[index]);
          }
        }
      }, {
        key: "getInventories",
        value: function getInventories() {
          return this.inventories.slice();
        }
      }, {
        key: "setInventory",
        value: function setInventory(id) {
          if (this.filteredInventory) {
            this.editInventory = this.filteredInventory[id];
          } else {
            this.editInventory = this.inventories[id];
          }

          this.editInventoryIndex = id; // this.router.navigate(['/EditInventory']);
        }
      }, {
        key: "getInvetory",
        value: function getInvetory() {
          return this.editInventory;
        }
      }, {
        key: "updateInventory",
        value: function updateInventory(_updateInventory) {
          this.inventories[this.editInventoryIndex].itemName = _updateInventory.itemName;
          this.inventories[this.editInventoryIndex].categories.names = _updateInventory.categories.names;
          this.inventories[this.editInventoryIndex].roomNames.names = _updateInventory.roomNames.names;
          this.inventories[this.editInventoryIndex].location = _updateInventory.location;
          this.inventories[this.editInventoryIndex].addInfo = _updateInventory.addInfo;
          this.inventoriesChanged.next(this.inventories.slice());
        }
      }, {
        key: "deleteInventory",
        value: function deleteInventory(id) {
          if (this.filteredInventory) {
            var itemName = this.filteredInventory[id].itemName;
            this.filteredInventory.splice(id, 1);
            this.inventories = this.inventories.filter(function (inventory) {
              return inventory.itemName !== itemName;
            });
            this.inventoriesChanged.next(this.inventories.slice());
            this.categoryCount();
          } else {
            this.inventories.splice(id, 1);
            this.inventoriesChanged.next(this.inventories.slice());
            this.categoryCount();
          }

          this.resetTextbox.next('');
        }
      }, {
        key: "statusChange",
        value: function statusChange(id) {
          if (this.filteredInventory) {
            this.filteredInventory[id].status = !this.filteredInventory[id].status;
            this.calculateUnReturnedInventory();
            this.inventoriesChanged.next(this.inventories.slice());
          } else {
            this.inventories[id].status = !this.inventories[id].status;
            this.calculateUnReturnedInventory();
            this.inventoriesChanged.next(this.inventories.slice());
          }
        }
      }, {
        key: "categoryCount",
        value: function categoryCount() {
          this.electronicsFilteredArray = this.inventories.filter(function (array) {
            if (array.categories.names === 'Electronics') {
              return array;
            }
          });
          this.electronicsFilteredArray$.next(this.inventories.filter(function (array) {
            if (array.categories.names === 'Electronics') {
              return array;
            }
          }));
          this.stationeryFilteredArray = this.inventories.filter(function (array) {
            if (array.categories.names === 'Stationery') {
              return array;
            }
          });
          this.stationeryFilteredArray$.next(this.inventories.filter(function (array) {
            if (array.categories.names === 'Stationery') {
              return array;
            }
          }));
          this.documentsFilteredArray = this.inventories.filter(function (array) {
            if (array.categories.names === 'Documents') {
              return array;
            }
          });
          this.documentsFilteredArray$.next(this.inventories.filter(function (array) {
            if (array.categories.names === 'Documents') {
              return array;
            }
          }));
          this.booksFilteredArray = this.inventories.filter(function (array) {
            if (array.categories.names === 'Books') {
              return array;
            }
          });
          this.booksFilteredArray$.next(this.inventories.filter(function (array) {
            if (array.categories.names === 'Books') {
              return array;
            }
          }));
          this.othersFilteredArray = this.inventories.filter(function (array) {
            if (array.categories.names === 'Others') {
              return array;
            }
          });
          this.othersFilteredArray$.next(this.inventories.filter(function (array) {
            if (array.categories.names === 'Others') {
              return array;
            }
          }));
        }
      }]);

      return AllServicesService;
    }();

    AllServicesService.ɵfac = function AllServicesService_Factory(t) {
      return new (t || AllServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    AllServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AllServicesService,
      factory: AllServicesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
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


    var _popover_forms_popover_forms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./popover-forms/popover-forms.component */
    "./src/app/popover-forms/popover-forms.component.ts");
    /* harmony import */


    var _inventory_create_new_create_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inventory/create-new/create-new.component */
    "./src/app/inventory/create-new/create-new.component.ts");
    /* harmony import */


    var _inventory_inventory_edit_inventory_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./inventory/inventory-edit/inventory-edit.component */
    "./src/app/inventory/inventory-edit/inventory-edit.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _inventory_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./inventory/not-found/not-found.component */
    "./src/app/inventory/not-found/not-found.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: '',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
      pathMatch: 'full',
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'add-room',
      component: _popover_forms_popover_forms_component__WEBPACK_IMPORTED_MODULE_2__["PopoverFormsComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'inventory',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'add-new-inventory',
      component: _inventory_create_new_create_new_component__WEBPACK_IMPORTED_MODULE_3__["CreateNewComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'edit-inventory',
      component: _inventory_inventory_edit_inventory_edit_component__WEBPACK_IMPORTED_MODULE_4__["InventoryEditComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: '**',
      component: _inventory_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

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


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'home-inventory';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./inventory/inventory.component */
    "./src/app/inventory/inventory.component.ts");
    /* harmony import */


    var _inventory_item_location_inventory_item_location_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./inventory-item-location/inventory-item-location.component */
    "./src/app/inventory-item-location/inventory-item-location.component.ts");
    /* harmony import */


    var _chart_representation_chart_representation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./chart-representation/chart-representation.component */
    "./src/app/chart-representation/chart-representation.component.ts");
    /* harmony import */


    var _popover_forms_popover_forms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./popover-forms/popover-forms.component */
    "./src/app/popover-forms/popover-forms.component.ts");
    /* harmony import */


    var _inventory_create_new_create_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./inventory/create-new/create-new.component */
    "./src/app/inventory/create-new/create-new.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/category/category.component.ts");
    /* harmony import */


    var _inventory_inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./inventory/inventory-item/inventory-item.component */
    "./src/app/inventory/inventory-item/inventory-item.component.ts");
    /* harmony import */


    var _inventory_inventory_edit_inventory_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./inventory/inventory-edit/inventory-edit.component */
    "./src/app/inventory/inventory-edit/inventory-edit.component.ts");
    /* harmony import */


    var _display_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./display-ellipsis.pipe */
    "./src/app/display-ellipsis.pipe.ts");
    /* harmony import */


    var _inventory_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./inventory/not-found/not-found.component */
    "./src/app/inventory/not-found/not-found.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__["InventoryComponent"], _inventory_item_location_inventory_item_location_component__WEBPACK_IMPORTED_MODULE_9__["InventoryItemLocationComponent"], _chart_representation_chart_representation_component__WEBPACK_IMPORTED_MODULE_10__["ChartRepresentationComponent"], _popover_forms_popover_forms_component__WEBPACK_IMPORTED_MODULE_11__["PopoverFormsComponent"], _inventory_create_new_create_new_component__WEBPACK_IMPORTED_MODULE_12__["CreateNewComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_14__["CategoryComponent"], _inventory_inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_15__["InventoryItemComponent"], _inventory_inventory_edit_inventory_edit_component__WEBPACK_IMPORTED_MODULE_16__["InventoryEditComponent"], _display_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_17__["DisplayEllipsisPipe"], _inventory_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__["InventoryComponent"], _inventory_item_location_inventory_item_location_component__WEBPACK_IMPORTED_MODULE_9__["InventoryItemLocationComponent"], _chart_representation_chart_representation_component__WEBPACK_IMPORTED_MODULE_10__["ChartRepresentationComponent"], _popover_forms_popover_forms_component__WEBPACK_IMPORTED_MODULE_11__["PopoverFormsComponent"], _inventory_create_new_create_new_component__WEBPACK_IMPORTED_MODULE_12__["CreateNewComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_14__["CategoryComponent"], _inventory_inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_15__["InventoryItemComponent"], _inventory_inventory_edit_inventory_edit_component__WEBPACK_IMPORTED_MODULE_16__["InventoryEditComponent"], _display_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_17__["DisplayEllipsisPipe"], _inventory_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authService.isLoggedIn()) {
            return true;
          }

          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.isAuthenticated = false;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(userName, password) {
          var _this2 = this;

          return this.http.get('https://home-inventory-d935e-default-rtdb.asia-southeast1.firebasedatabase.app/login.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            if (user.userName === userName && user.password === password) {
              _this2.isAuthenticated = true;
              return true;
            } else {
              _this2.isAuthenticated = false;
              return false;
            }
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.isAuthenticated = false;
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.isAuthenticated;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/category/category.component.ts":
  /*!************************************************!*\
    !*** ./src/app/category/category.component.ts ***!
    \************************************************/

  /*! exports provided: CategoryComponent */

  /***/
  function srcAppCategoryCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
      return CategoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/category.model */
    "./src/app/model/category.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _all_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../all-services.service */
    "./src/app/all-services.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["form"];

    var _c1 = function _c1(a0) {
      return {
        "close-width": a0
      };
    };

    var CategoryComponent = /*#__PURE__*/function () {
      function CategoryComponent(router, allService) {
        _classCallCheck(this, CategoryComponent);

        this.router = router;
        this.allService = allService;
      }

      _createClass(CategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.router.url === '/AddCategory') {
            this.allService.disableTextbox();
          }
        }
      }, {
        key: "closePopup",
        value: function closePopup() {
          this.widthCondition = true;
          this.allService.enableTextbox();
          this.router.navigate(['/']);
        }
      }, {
        key: "onAddCategory",
        value: function onAddCategory(form) {
          var _this3 = this;

          var categoryArr = form.value.enterCategory.split(",");
          categoryArr.forEach(function (arrayElement) {
            var newCategory = new _model_category_model__WEBPACK_IMPORTED_MODULE_1__["Category"](arrayElement);

            _this3.allService.addCategory(newCategory);
          });
        }
      }]);

      return CategoryComponent;
    }();

    CategoryComponent.ɵfac = function CategoryComponent_Factory(t) {
      return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_all_services_service__WEBPACK_IMPORTED_MODULE_3__["AllServicesService"]));
    };

    CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryComponent,
      selectors: [["app-category"]],
      viewQuery: function CategoryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.createRoomForm = _t.first);
        }
      },
      decls: 22,
      vars: 3,
      consts: [[3, "ngSubmit"], ["form", "ngForm"], [1, "overlay", "shadow-lg", 3, "ngClass"], [1, "row"], [1, "col"], [2, "text-align", "center"], [1, "col", "form-group"], ["type", "text", "name", "enterCategory", "ngModel", "", "required", "", 1, "form-control"], [1, "row", "mt-2"], [1, "col", "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-danger", "ms-2", 3, "click"], [1, "row", "mt-2", "ms-2"], [2, "font-size", "smaller"]],
      template: function CategoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CategoryComponent_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx.onAddCategory(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Enter Category *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_Template_button_click_16_listener() {
            return ctx.closePopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "* enter category names separated by comma. (eg electronics, stationery) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx.widthCondition));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]],
      styles: [".overlay[_ngcontent-%COMP%] {\r\n    height: 40%;        \r\n    position: fixed;\r\n    top: 25%;\r\n    left: 35%;\r\n    width: 30%;\r\n    background-color: #ECF0F1;;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n    z-index: 999;\r\n}\r\n\r\n.close-width[_ngcontent-%COMP%] {\r\n    width: 0%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ub3ZlcmxheSB7XHJcbiAgICBoZWlnaHQ6IDQwJTsgICAgICAgIFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICBsZWZ0OiAzNSU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRjBGMTs7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5jbG9zZS13aWR0aCB7XHJcbiAgICB3aWR0aDogMCU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-category',
          templateUrl: './category.component.html',
          styleUrls: ['./category.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _all_services_service__WEBPACK_IMPORTED_MODULE_3__["AllServicesService"]
        }];
      }, {
        createRoomForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['form']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/chart-representation/chart-representation.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/chart-representation/chart-representation.component.ts ***!
    \************************************************************************/

  /*! exports provided: ChartRepresentationComponent */

  /***/
  function srcAppChartRepresentationChartRepresentationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartRepresentationComponent", function () {
      return ChartRepresentationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _all_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../all-services.service */
    "./src/app/all-services.service.ts");

    var ChartRepresentationComponent = /*#__PURE__*/function () {
      function ChartRepresentationComponent(allServices) {
        _classCallCheck(this, ChartRepresentationComponent);

        this.allServices = allServices;
        this.totalInventories = 0;
        this.WidthPercentage = 80;
        this.HeightPercentage = 80;
        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true,
          title: {
            text: 'Category Chart',
            display: true
          },
          legend: {
            labels: {
              fontSize: 12
            }
          },
          animation: {
            easing: 'easeOutBounce'
          }
        };
        this.barChartLabels = ['Electronics', 'Stationery', 'Documents', 'Books', 'Others'];
        this.barChartLegend = true;
        this.barChartData = [{
          data: [],
          label: 'Sample Data',
          backgroundColor: ['SlateBlue', 'DodgerBlue', 'Teal', 'MediumSeaGreen', 'LightSkyBlue'],
          hoverBackgroundColor: ['SlateBlue', 'DodgerBlue', 'Teal', 'MediumSeaGreen', 'LightSkyBlue']
        }];
      }

      _createClass(ChartRepresentationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.allServices.categoryCount();
          this.allServices.electronicsFilteredArray$.subscribe(function (inventory) {
            _this4.barChartData[0].data[0] = inventory.length;

            _this4.updateChart();

            _this4.calculateTotalInventory();
          });
          this.allServices.stationeryFilteredArray$.subscribe(function (inventory) {
            _this4.barChartData[0].data[1] = inventory.length;

            _this4.updateChart();

            _this4.calculateTotalInventory();
          });
          this.allServices.documentsFilteredArray$.subscribe(function (inventory) {
            _this4.barChartData[0].data[2] = inventory.length;

            _this4.updateChart();

            _this4.calculateTotalInventory();
          });
          this.allServices.booksFilteredArray$.subscribe(function (inventory) {
            _this4.barChartData[0].data[3] = inventory.length;

            _this4.updateChart();

            _this4.calculateTotalInventory();
          });
          this.allServices.othersFilteredArray$.subscribe(function (inventory) {
            _this4.barChartData[0].data[4] = inventory.length;

            _this4.updateChart();

            _this4.calculateTotalInventory();
          });
          this.barChartData[0].data[0] = [this.allServices.electronicsFilteredArray ? this.allServices.electronicsFilteredArray.length : 0];
          this.barChartData[0].data[1] = [this.allServices.stationeryFilteredArray ? this.allServices.stationeryFilteredArray.length : 0];
          this.barChartData[0].data[2] = [this.allServices.documentsFilteredArray ? this.allServices.documentsFilteredArray.length : 0];
          this.barChartData[0].data[3] = [this.allServices.booksFilteredArray ? this.allServices.booksFilteredArray.length : 0];
          this.barChartData[0].data[4] = [this.allServices.othersFilteredArray ? this.allServices.othersFilteredArray.length : 0];

          if (this.chart) {
            this.chart.update();
          }

          this.unRetunedInventories = this.allServices.calculateUnReturnedInventory();
          this.allServices.unReturnedInventory.subscribe(function (count) {
            _this4.unRetunedInventories = count;
          });
          this.calculateTotalInventory();
        }
      }, {
        key: "updateChart",
        value: function updateChart() {
          // this.barChartData[0].data[1] = length;
          if (this.chart) {
            this.chart.update();
          }
        }
      }, {
        key: "calculateTotalInventory",
        value: function calculateTotalInventory() {
          this.totalInventories = 0;

          for (var i = 0; i < this.barChartData[0].data.length; i++) {
            this.totalInventories += parseInt(this.barChartData[0].data[i]);
          }
        }
      }]);

      return ChartRepresentationComponent;
    }();

    ChartRepresentationComponent.ɵfac = function ChartRepresentationComponent_Factory(t) {
      return new (t || ChartRepresentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"]));
    };

    ChartRepresentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartRepresentationComponent,
      selectors: [["app-chart-representation"]],
      viewQuery: function ChartRepresentationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      decls: 6,
      vars: 9,
      consts: [[1, "border", "rounded-4", "mt-2", "bg-white"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType", "width", "height"], [1, "mt-4"]],
      template: function ChartRepresentationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", "pie")("width", "75")("height", "75");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Inventory Items : ", ctx.totalInventories, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Unreturned Inventory Items : ", ctx.unRetunedInventories, "");
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]],
      styles: ["div[_ngcontent-%COMP%] {\r\n    \r\n    height: 600px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnQtcmVwcmVzZW50YXRpb24vY2hhcnQtcmVwcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY2hhcnQtcmVwcmVzZW50YXRpb24vY2hhcnQtcmVwcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartRepresentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chart-representation',
          templateUrl: './chart-representation.component.html',
          styleUrls: ['./chart-representation.component.css']
        }]
      }], function () {
        return [{
          type: _all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"]
        }];
      }, {
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/display-ellipsis.pipe.ts":
  /*!******************************************!*\
    !*** ./src/app/display-ellipsis.pipe.ts ***!
    \******************************************/

  /*! exports provided: DisplayEllipsisPipe */

  /***/
  function srcAppDisplayEllipsisPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayEllipsisPipe", function () {
      return DisplayEllipsisPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DisplayEllipsisPipe = /*#__PURE__*/function () {
      function DisplayEllipsisPipe() {
        _classCallCheck(this, DisplayEllipsisPipe);
      }

      _createClass(DisplayEllipsisPipe, [{
        key: "transform",
        value: function transform(value) {
          if (value.length <= 8) {
            return value;
          } else {
            return value.substring(0, 8) + '...';
          }
        }
      }]);

      return DisplayEllipsisPipe;
    }();

    DisplayEllipsisPipe.ɵfac = function DisplayEllipsisPipe_Factory(t) {
      return new (t || DisplayEllipsisPipe)();
    };

    DisplayEllipsisPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "displayEllipsis",
      type: DisplayEllipsisPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayEllipsisPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'displayEllipsis'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _all_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../all-services.service */
    "./src/app/all-services.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["searchBox"];

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(allServices, router, authService) {
        _classCallCheck(this, HeaderComponent);

        this.allServices = allServices;
        this.router = router;
        this.authService = authService;
        this.isTextboxDisabled$ = this.allServices.isTextboxDisabled$;
        this.searchTextChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchText = '';
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.allServices.resetTextbox.subscribe(function (value) {
            _this5.searchBox.nativeElement.value = value;
          });
        }
      }, {
        key: "disableTextboxOnCreateInventory",
        value: function disableTextboxOnCreateInventory() {
          this.allServices.disableTextbox();

          if (!this.allServices.roomNames) {
            alert('Set Rooms first and comback !');
            this.router.navigate(['/']);
          }
        }
      }, {
        key: "disableTextboxOnCreateRoom",
        value: function disableTextboxOnCreateRoom() {
          this.allServices.disableTextbox();
        }
      }, {
        key: "disableTextboxOnAddCategory",
        value: function disableTextboxOnAddCategory() {
          this.allServices.disableTextbox();
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          var _this6 = this;

          var originalInventories = this.allServices.inventories.slice();
          var filteredInventories = originalInventories.filter(function (inventory) {
            return inventory.itemName.toLowerCase().includes(_this6.searchText.toLowerCase());
          });
          this.allServices.setFilteredInventory(filteredInventories);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      viewQuery: function HeaderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchBox = _t.first);
        }
      },
      outputs: {
        searchTextChanged: "searchTextChanged"
      },
      decls: 20,
      vars: 4,
      consts: [[2, "overflow", "hidden"], [1, "row"], [1, "col-2"], [1, "d-flex"], [1, "rounded-circle", "mt-4", "ms-2", "bg-danger"], [1, "rounded-circle", "mt-4", "ms-2", "bg-warning"], [1, "rounded-circle", "mt-4", "ms-2", "bg-success"], [1, "col-7"], [1, "d-flex", "justify-content-center"], ["type", "text", "placeholder", "Search Inventory Item", 1, "rounded", "mt-2", "border", "border-secondary", 3, "ngModel", "disabled", "ngModelChange", "input"], ["searchBox", ""], [1, "col-3"], ["data-toggle", "tooltip", "title", "New Inventory", "routerLink", "/add-new-inventory", 1, "mt-1", 2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-plus-circle", 2, "font-size", "x-large"], ["data-toggle", "tooltip", "title", "Set Rooms", "routerLink", "/add-room", 1, "mt-1", "ps-3", 2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-door-open", 2, "font-size", "x-large"], ["data-toggle", "tooltip", "title", "Logout", 1, "mt-1", "ps-3", "me-2", 2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-box-arrow-left", 2, "font-size", "x-large"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.searchText = $event;
          })("input", function HeaderComponent_Template_input_input_9_listener() {
            return ctx.onSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_14_listener() {
            return ctx.disableTextboxOnCreateInventory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_16_listener() {
            return ctx.disableTextboxOnCreateRoom();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText)("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 2, ctx.isTextboxDisabled$));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["span[_ngcontent-%COMP%] {\r\n    width:7px;\r\n    height:7px;\r\n    \r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    width:200px;\r\n}\r\n\r\n@media (min-width: 992px) {\r\ninput[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xyXG4gICAgd2lkdGg6N3B4O1xyXG4gICAgaGVpZ2h0OjdweDtcclxuICAgIFxyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDoyMDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, {
        searchTextChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        searchBox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchBox']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/inventory-item-location/inventory-item-location.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/inventory-item-location/inventory-item-location.component.ts ***!
    \******************************************************************************/

  /*! exports provided: InventoryItemLocationComponent */

  /***/
  function srcAppInventoryItemLocationInventoryItemLocationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryItemLocationComponent", function () {
      return InventoryItemLocationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _all_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../all-services.service */
    "./src/app/all-services.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _display_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../display-ellipsis.pipe */
    "./src/app/display-ellipsis.pipe.ts");

    function InventoryItemLocationComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "displayEllipsis");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r0.itemName));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.roomName.names);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.location);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.addInfo);
      }
    }

    function InventoryItemLocationComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select from the list to see its location");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var InventoryItemLocationComponent = /*#__PURE__*/function () {
      function InventoryItemLocationComponent(allServices) {
        _classCallCheck(this, InventoryItemLocationComponent);

        this.allServices = allServices;
      }

      _createClass(InventoryItemLocationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.allServices.selectedInventory$.subscribe(function (details) {
            _this7.itemName = details.itemName;
            _this7.roomName = details.roomNames;
            _this7.location = details.location;
            _this7.addInfo = details.addInfo;
          });
        }
      }]);

      return InventoryItemLocationComponent;
    }();

    InventoryItemLocationComponent.ɵfac = function InventoryItemLocationComponent_Factory(t) {
      return new (t || InventoryItemLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"]));
    };

    InventoryItemLocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InventoryItemLocationComponent,
      selectors: [["app-inventory-item-location"]],
      decls: 4,
      vars: 2,
      consts: [[1, "border", "rounded-4", "mt-2", "bgcolor"], ["class", "d-flex flex-column align-items-center", 4, "ngIf", "ngIfElse"], ["displayInfo", ""], [1, "d-flex", "flex-column", "align-items-center"], [1, "mt-2"], [1, "cloud", "cloud-pill-itemName", "overlay", "shadow-lg"], [1, "bi", "bi-arrow-down"], [1, "cloud", "cloud-pill-roomName", "overlay", "shadow-lg"], [1, "cloud", "cloud-pill-location", "overlay", "shadow-lg"], [1, "mb-2"], [1, "cloud", "cloud-pill-addInfo", "overlay", "shadow-lg"], [1, "display-msg"]],
      template: function InventoryItemLocationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InventoryItemLocationComponent_div_1_Template, 20, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InventoryItemLocationComponent_ng_template_2_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemName)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_display_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_3__["DisplayEllipsisPipe"]],
      styles: [".d-flex[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n}\r\n\r\n.cloud[_ngcontent-%COMP%] {\r\n    \r\n    background-color: white;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.cloud-pill-itemName[_ngcontent-%COMP%] {\r\n    \r\n    height: 40px;\r\n    width: 110px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.cloud-pill-roomName[_ngcontent-%COMP%] {\r\n    \r\n    height: 60px;\r\n    width: 160px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.cloud-pill-location[_ngcontent-%COMP%] {\r\n    \r\n    height: 80px;\r\n    width: 210px;\r\n    border-radius: 30px;\r\n    \r\n}\r\n\r\n.cloud-pill-addInfo[_ngcontent-%COMP%] {\r\n    \r\n    height: 90px;\r\n    width: 240px;\r\n    border-radius: 40px;\r\n    \r\n}\r\n\r\n.semi-circle[_ngcontent-%COMP%] {\r\n    \r\n    background-color: white;\r\n}\r\n\r\n.semi-circle-small-itemName[_ngcontent-%COMP%] {\r\n    \r\n    top: 2px;\r\n    width: 20px;\r\n    height: 10px;\r\n    border-radius: 10px 10px 0 0;\r\n}\r\n\r\n.semi-circle-small-roomName[_ngcontent-%COMP%] {\r\n    left: 34%;\r\n    top: 3px;\r\n    width: 20px;\r\n    height: 10px;\r\n    border-radius: 10px 10px 0 0;\r\n}\r\n\r\n.semi-circle-small-location[_ngcontent-%COMP%] {\r\n    left: 47%;\r\n    width: 40px;\r\n    height: 20px;\r\n    border-radius: 20px 20px 0 0;\r\n    bottom: 10px;\r\n}\r\n\r\n.semi-circle-large-itemName[_ngcontent-%COMP%] {\r\n    \r\n    left:50px;\r\n    top: 12px;\r\n    width: 70px;\r\n    height: 35px;\r\n    border-radius: 35px 35px 0 0;\r\n}\r\n\r\n.semi-circle-large-roomName[_ngcontent-%COMP%] {\r\n    left: 37%;\r\n    top: 11px;\r\n    width: 70px;\r\n    height: 35px;\r\n    border-radius: 35px 35px 0 0;\r\n}\r\n\r\n.semi-circle-large-location[_ngcontent-%COMP%] {\r\n    left: 52%;\r\n    top: 5px;\r\n    width: 140px;\r\n    height: 70px;\r\n    border-radius: 70px 70px 0 0;\r\n}\r\n\r\n.bgcolor[_ngcontent-%COMP%] {\r\n    background-color: #66D0FF;\r\n}\r\n\r\n.bi-arrow-down-left[_ngcontent-%COMP%], .bi-arrow-down-right[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n    color: white;\r\n    position: relative;\r\n    left: 50%;\r\n}\r\n\r\n.bi-arrow-down[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n    color: white;\r\n    \r\n}\r\n\r\n.white-line[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 1px;\r\n    background-color: white;\r\n}\r\n\r\n.info-panel[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 100px;\r\n    background-color: white;\r\n    text-align: center;\r\n}\r\n\r\n.display-msg[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: larger;\r\n    text-align: center;\r\n    margin-top: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5LWl0ZW0tbG9jYXRpb24vaW52ZW50b3J5LWl0ZW0tbG9jYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO2dCQUNZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7Z0JBQ1k7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWjtrQkFDYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS1pdGVtLWxvY2F0aW9uL2ludmVudG9yeS1pdGVtLWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuZGl2IHtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi5jbG91ZCB7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAxMCU7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxufVxyXG5cclxuLmNsb3VkLXBpbGwtaXRlbU5hbWUge1xyXG4gICAgLyogbGVmdDogNjIlOyAqL1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNsb3VkLXBpbGwtcm9vbU5hbWUge1xyXG4gICAgLyogbGVmdDogMzIuNSU7ICovXHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uY2xvdWQtcGlsbC1sb2NhdGlvbiB7XHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA0NSU7ICovXHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgLyogYm90dG9tOiAxOHB4OyAqL1xyXG59XHJcblxyXG4uY2xvdWQtcGlsbC1hZGRJbmZvIHtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDQ1JTsgKi9cclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAvKiBib3R0b206IDE4cHg7ICovXHJcbn1cclxuXHJcbi5zZW1pLWNpcmNsZSB7XHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlbWktY2lyY2xlLXNtYWxsLWl0ZW1OYW1lIHtcclxuICAgIC8qIGxlZnQ6IDY0JTsgKi9cclxuICAgIHRvcDogMnB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG59XHJcblxyXG4uc2VtaS1jaXJjbGUtc21hbGwtcm9vbU5hbWUge1xyXG4gICAgbGVmdDogMzQlO1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbn1cclxuXHJcbi5zZW1pLWNpcmNsZS1zbWFsbC1sb2NhdGlvbiB7XHJcbiAgICBsZWZ0OiA0NyU7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zZW1pLWNpcmNsZS1sYXJnZS1pdGVtTmFtZSB7XHJcbiAgICAvKiBsZWZ0OiA2NyU7ICovXHJcbiAgICBsZWZ0OjUwcHg7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHggMzVweCAwIDA7XHJcbn1cclxuXHJcbi5zZW1pLWNpcmNsZS1sYXJnZS1yb29tTmFtZSB7XHJcbiAgICBsZWZ0OiAzNyU7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHggMzVweCAwIDA7XHJcbn1cclxuXHJcbi5zZW1pLWNpcmNsZS1sYXJnZS1sb2NhdGlvbiB7XHJcbiAgICBsZWZ0OiA1MiU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDcwcHggNzBweCAwIDA7XHJcbn1cclxuXHJcbi5iZ2NvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NkQwRkY7XHJcbn1cclxuXHJcbi5iaS1hcnJvdy1kb3duLWxlZnQsXHJcbi5iaS1hcnJvdy1kb3duLXJpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5iaS1hcnJvdy1kb3duIHtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAyNTBweDsgKi9cclxufVxyXG5cclxuLndoaXRlLWxpbmUge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW5mby1wYW5lbCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXNwbGF5LW1zZyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwJTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryItemLocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inventory-item-location',
          templateUrl: './inventory-item-location.component.html',
          styleUrls: ['./inventory-item-location.component.css']
        }]
      }], function () {
        return [{
          type: _all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/inventory/create-new/create-new.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/inventory/create-new/create-new.component.ts ***!
    \**************************************************************/

  /*! exports provided: CreateNewComponent */

  /***/
  function srcAppInventoryCreateNewCreateNewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateNewComponent", function () {
      return CreateNewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_model_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/model/category.model */
    "./src/app/model/category.model.ts");
    /* harmony import */


    var src_app_model_inventory_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/model/inventory.model */
    "./src/app/model/inventory.model.ts");
    /* harmony import */


    var src_app_model_room_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/model/room.model */
    "./src/app/model/room.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_all_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/all-services.service */
    "./src/app/all-services.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CreateNewComponent_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r4.names);
      }
    }

    function CreateNewComponent_option_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var roomName_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](roomName_r5.names);
      }
    }

    function CreateNewComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sucessfully Created ! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "close-width": a0
      };
    };

    var CreateNewComponent = /*#__PURE__*/function () {
      function CreateNewComponent(router, allServices) {
        _classCallCheck(this, CreateNewComponent);

        this.router = router;
        this.allServices = allServices;
        this.editMode = false;
        this.showMessage = false;
      }

      _createClass(CreateNewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.roomNames = this.allServices.roomNames;
          this.categories = this.allServices.categories;
        }
      }, {
        key: "closePopup",
        value: function closePopup() {
          this.widthCondition = true;
          this.allServices.enableTextbox();
          this.router.navigate(['/']);
        }
      }, {
        key: "onCreateInventory",
        value: function onCreateInventory(form) {
          var _this8 = this;

          var newInventory = new src_app_model_inventory_model__WEBPACK_IMPORTED_MODULE_2__["Inventory"](form.value.itemName, new src_app_model_category_model__WEBPACK_IMPORTED_MODULE_1__["Category"](form.value.category), new src_app_model_room_model__WEBPACK_IMPORTED_MODULE_3__["Room"](form.value.room), form.value.location, form.value.addInfo, true);
          this.allServices.addInventory(newInventory);
          this.showMessage = true;
          setTimeout(function () {
            _this8.showMessage = false;
          }, 2000);
        }
      }]);

      return CreateNewComponent;
    }();

    CreateNewComponent.ɵfac = function CreateNewComponent_Factory(t) {
      return new (t || CreateNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_all_services_service__WEBPACK_IMPORTED_MODULE_5__["AllServicesService"]));
    };

    CreateNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateNewComponent,
      selectors: [["app-create-new"]],
      decls: 42,
      vars: 7,
      consts: [[3, "ngSubmit"], ["form", "ngForm"], [1, "overlay", "shadow-lg", 3, "ngClass"], [1, "row"], [1, "col"], [2, "text-align", "center"], [1, "col", "form-group"], ["type", "text", "name", "itemName", "ngModel", "", "required", "", 1, "form-control"], ["name", "category", "ngModel", "", "required", "", 1, "form-control"], [4, "ngFor", "ngForOf"], ["name", "room", "ngModel", "", "required", "", 1, "form-control"], ["type", "text", "name", "location", "ngModel", "", "required", "", 1, "form-control"], ["type", "text", "name", "addInfo", "ngModel", "", "required", "", 1, "form-control"], [1, "row", "mt-2"], [1, "col", "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-danger", "ms-2", 3, "click"], ["class", "text-success", "style", "text-align: center;", 4, "ngIf"], [1, "text-success", 2, "text-align", "center"]],
      template: function CreateNewComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateNewComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.onCreateInventory(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Inventory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Item Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Select Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CreateNewComponent_option_18_Template, 2, 1, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Select Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CreateNewComponent_option_24_Template, 2, 1, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Enter Location in Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Additional Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateNewComponent_Template_button_click_39_listener() {
            return ctx.closePopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CreateNewComponent_div_41_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.widthCondition));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roomNames);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessage);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]],
      styles: [".overlay[_ngcontent-%COMP%] {\r\n    height: 65%;        \r\n    position: fixed;\r\n    top: 20%;\r\n    left: 35%;\r\n    width: 30%;\r\n    background-color: #ECF0F1;;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n    z-index: 999;\r\n    transition: margin-left .5s;\r\n    border-radius: 20px;\r\n}\r\n\r\n.close-width[_ngcontent-%COMP%] {\r\n    width: 0%;\r\n    transition: 0.5s;\r\n    transition: margin-left .5s;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .overlay[_ngcontent-%COMP%] {\r\n        height: 65%;        \r\n        position: fixed;\r\n        top: 20%;\r\n        left: 2%;\r\n        right: 2%;\r\n        width: 96%;\r\n        background-color: #ECF0F1;;\r\n        overflow-x: hidden;\r\n        transition: 0.5s;\r\n        padding-top: 60px;\r\n        z-index: 999;\r\n        transition: margin-left .5s;\r\n        border-radius: 20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2NyZWF0ZS1uZXcvY3JlYXRlLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2YsUUFBUTtRQUNSLFFBQVE7UUFDUixTQUFTO1FBQ1QsVUFBVTtRQUNWLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osMkJBQTJCO1FBQzNCLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaW52ZW50b3J5L2NyZWF0ZS1uZXcvY3JlYXRlLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5vdmVybGF5IHtcclxuICAgIGhlaWdodDogNjUlOyAgICAgICAgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGxlZnQ6IDM1JTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMEYxOztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IC41cztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5jbG9zZS13aWR0aCB7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjVzO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5vdmVybGF5IHtcclxuICAgICAgICBoZWlnaHQ6IDY1JTsgICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDIwJTtcclxuICAgICAgICBsZWZ0OiAyJTtcclxuICAgICAgICByaWdodDogMiU7XHJcbiAgICAgICAgd2lkdGg6IDk2JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMEYxOztcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjVzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-new',
          templateUrl: './create-new.component.html',
          styleUrls: ['./create-new.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_all_services_service__WEBPACK_IMPORTED_MODULE_5__["AllServicesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/inventory/inventory-edit/inventory-edit.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/inventory/inventory-edit/inventory-edit.component.ts ***!
    \**********************************************************************/

  /*! exports provided: InventoryEditComponent */

  /***/
  function srcAppInventoryInventoryEditInventoryEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryEditComponent", function () {
      return InventoryEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_model_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/model/category.model */
    "./src/app/model/category.model.ts");
    /* harmony import */


    var src_app_model_inventory_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/model/inventory.model */
    "./src/app/model/inventory.model.ts");
    /* harmony import */


    var src_app_model_room_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/model/room.model */
    "./src/app/model/room.model.ts");
    /* harmony import */


    var src_app_all_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/all-services.service */
    "./src/app/all-services.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function InventoryEditComponent_option_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r3.names);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r3.names);
      }
    }

    function InventoryEditComponent_option_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var roomName_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", roomName_r4.names);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](roomName_r4.names);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "close-width": a0
      };
    };

    var InventoryEditComponent = /*#__PURE__*/function () {
      function InventoryEditComponent(allServices, router) {
        _classCallCheck(this, InventoryEditComponent);

        this.allServices = allServices;
        this.router = router;
        this.widthCondition = false;
      }

      _createClass(InventoryEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedInventory = this.allServices.getInvetory();
          this.roomNames = this.allServices.roomNames;
          this.categories = this.allServices.categories;
          this.editIndex = this.allServices.editInventoryIndex;
        }
      }, {
        key: "closePopup",
        value: function closePopup() {
          this.widthCondition = true;
          this.allServices.enableTextbox();
          this.router.navigate(['/']);
        }
      }, {
        key: "onEditInventory",
        value: function onEditInventory(form) {
          var updateInventory = new src_app_model_inventory_model__WEBPACK_IMPORTED_MODULE_2__["Inventory"](form.value.itemName, new src_app_model_category_model__WEBPACK_IMPORTED_MODULE_1__["Category"](form.value.category), new src_app_model_room_model__WEBPACK_IMPORTED_MODULE_3__["Room"](form.value.room), form.value.location, form.value.addInfo, true);
          this.allServices.updateInventory(updateInventory);
        }
      }]);

      return InventoryEditComponent;
    }();

    InventoryEditComponent.ɵfac = function InventoryEditComponent_Factory(t) {
      return new (t || InventoryEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_all_services_service__WEBPACK_IMPORTED_MODULE_4__["AllServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    InventoryEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InventoryEditComponent,
      selectors: [["app-inventory-edit"]],
      decls: 40,
      vars: 10,
      consts: [[3, "ngSubmit"], ["form", "ngForm"], [1, "overlay", "shadow-lg", 3, "ngClass"], [1, "row"], [1, "col"], [2, "text-align", "center"], [1, "col", "form-group"], ["type", "text", "name", "itemName", "ngModel", "", 1, "form-control", 3, "ngModel"], ["name", "category", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "room", "ngModel", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "location", "ngModel", "", 1, "form-control", 3, "ngModel"], ["type", "text", "name", "addInfo", "ngModel", "", 1, "form-control", 3, "ngModel"], [1, "row", "mt-2"], [1, "col", "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-danger", "ms-2", 3, "click"], [3, "value"]],
      template: function InventoryEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function InventoryEditComponent_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx.onEditInventory(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Edit Inventory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Item Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Select Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryEditComponent_Template_select_ngModelChange_16_listener($event) {
            return ctx.selectedInventory.categories.names = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InventoryEditComponent_option_17_Template, 2, 2, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Select Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryEditComponent_Template_select_ngModelChange_22_listener($event) {
            return ctx.selectedInventory.roomNames.names = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InventoryEditComponent_option_23_Template, 2, 2, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Enter Location in Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Additional Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryEditComponent_Template_button_click_38_listener() {
            return ctx.closePopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.widthCondition));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedInventory.itemName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedInventory.categories.names);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedInventory.roomNames.names);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roomNames);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedInventory.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedInventory.addInfo);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]],
      styles: [".overlay[_ngcontent-%COMP%] {\r\n    height: 60%;        \r\n    position: fixed;\r\n    top: 20%;\r\n    left: 35%;\r\n    width: 30%;\r\n    background-color: #ECF0F1;;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n    z-index: 999;\r\n    transition: margin-left .5s;\r\n}\r\n\r\n.close-width[_ngcontent-%COMP%] {\r\n    width: 0%;\r\n    transition: 0.5s;\r\n    transition: margin-left .5s;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .overlay[_ngcontent-%COMP%] {\r\n        height: 65%;        \r\n        position: fixed;\r\n        top: 20%;\r\n        left: 2%;\r\n        right: 2%;\r\n        width: 96%;\r\n        background-color: #ECF0F1;;\r\n        overflow-x: hidden;\r\n        transition: 0.5s;\r\n        padding-top: 60px;\r\n        z-index: 999;\r\n        transition: margin-left .5s;\r\n        border-radius: 20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS1lZGl0L2ludmVudG9yeS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLFFBQVE7UUFDUixRQUFRO1FBQ1IsU0FBUztRQUNULFVBQVU7UUFDVix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLDJCQUEyQjtRQUMzQixtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9pbnZlbnRvcnktZWRpdC9pbnZlbnRvcnktZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5vdmVybGF5IHtcclxuICAgIGhlaWdodDogNjAlOyAgICAgICAgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGxlZnQ6IDM1JTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMEYxOztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IC41cztcclxufVxyXG5cclxuLmNsb3NlLXdpZHRoIHtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAuNXM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm92ZXJsYXkge1xyXG4gICAgICAgIGhlaWdodDogNjUlOyAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgIGxlZnQ6IDIlO1xyXG4gICAgICAgIHJpZ2h0OiAyJTtcclxuICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0YwRjE7O1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAuNXM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inventory-edit',
          templateUrl: './inventory-edit.component.html',
          styleUrls: ['./inventory-edit.component.css']
        }]
      }], function () {
        return [{
          type: src_app_all_services_service__WEBPACK_IMPORTED_MODULE_4__["AllServicesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/inventory/inventory-item/inventory-item.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/inventory/inventory-item/inventory-item.component.ts ***!
    \**********************************************************************/

  /*! exports provided: InventoryItemComponent */

  /***/
  function srcAppInventoryInventoryItemInventoryItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryItemComponent", function () {
      return InventoryItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_all_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/all-services.service */
    "./src/app/all-services.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function InventoryItemComponent_p_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " IN ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InventoryItemComponent_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OUT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var InventoryItemComponent = /*#__PURE__*/function () {
      function InventoryItemComponent(allServices, router) {
        _classCallCheck(this, InventoryItemComponent);

        this.allServices = allServices;
        this.router = router;
      }

      _createClass(InventoryItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickInventory",
        value: function onClickInventory() {
          this.allServices.onSelectedInventory(this.id);
        }
      }, {
        key: "onEdit",
        value: function onEdit() {
          this.allServices.setInventory(this.id);
          this.router.navigate(['/edit-inventory']);
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          this.allServices.deleteInventory(this.id);
          this.allServices.calculateUnReturnedInventory();
        }
      }, {
        key: "statusChange",
        value: function statusChange() {
          this.allServices.statusChange(this.id);
        }
      }]);

      return InventoryItemComponent;
    }();

    InventoryItemComponent.ɵfac = function InventoryItemComponent_Factory(t) {
      return new (t || InventoryItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    InventoryItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InventoryItemComponent,
      selectors: [["app-inventory-item"]],
      inputs: {
        currentInventory: "currentInventory",
        id: "id"
      },
      decls: 27,
      vars: 5,
      consts: [[1, "m-3"], [1, "row", "p-1"], [1, "col-3", "p-1", "border", "border-secondary", "rounded-4"], [2, "cursor", "pointer", "text-align", "center", 3, "click"], [1, "col-1", "d-flex", "justify-content-center"], [1, "bi", "bi-arrow-right-circle", 2, "font-size", "larger"], [1, "col-3", "p-1", "border", "border-secondary", "rounded-4", 2, "text-align", "center"], [1, "col-4", "p-1", "border", "border-secondary", "rounded-4"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-6", "col-6", 2, "text-align", "center"], [3, "ngClass", "click"], [1, "bi", "bi-toggle-off"], ["style", "color: green;", 4, "ngIf", "ngIfElse"], ["elseStatus", ""], [2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-pencil-square", 2, "font-size", "larger"], [1, "bi", "bi-trash3", 2, "font-size", "larger"], [2, "color", "green"], [1, "", 2, "color", "red"]],
      template: function InventoryItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryItemComponent_Template_div_click_3_listener() {
            return ctx.onClickInventory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryItemComponent_Template_button_click_15_listener() {
            return ctx.statusChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, InventoryItemComponent_p_18_Template, 2, 0, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, InventoryItemComponent_ng_template_19_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryItemComponent_Template_a_click_22_listener() {
            return ctx.onEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryItemComponent_Template_a_click_25_listener() {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentInventory.itemName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentInventory.categories.names, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentInventory.status ? "btn btn-success" : "btn btn-danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentInventory.status)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".bi-trash3[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n\r\n.item-hove[_ngcontent-%COMP%]:hover {\r\n    background-color: beige;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS1pdGVtL2ludmVudG9yeS1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9pbnZlbnRvcnkvaW52ZW50b3J5LWl0ZW0vaW52ZW50b3J5LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaS10cmFzaDMge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLml0ZW0taG92ZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inventory-item',
          templateUrl: './inventory-item.component.html',
          styleUrls: ['./inventory-item.component.css']
        }]
      }], function () {
        return [{
          type: src_app_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        currentInventory: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/inventory/inventory.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/inventory/inventory.component.ts ***!
    \**************************************************/

  /*! exports provided: InventoryComponent */

  /***/
  function srcAppInventoryInventoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryComponent", function () {
      return InventoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _all_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../all-services.service */
    "./src/app/all-services.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./inventory-item/inventory-item.component */
    "./src/app/inventory/inventory-item/inventory-item.component.ts");

    function InventoryComponent_app_inventory_item_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-inventory-item", 2);
      }

      if (rf & 2) {
        var inventory_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentInventory", inventory_r1)("id", i_r2);
      }
    }

    var InventoryComponent = /*#__PURE__*/function () {
      function InventoryComponent(allServices) {
        _classCallCheck(this, InventoryComponent);

        this.allServices = allServices;
        this.items = [];
        this.filteredItems = [];
      }

      _createClass(InventoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.subscription = this.allServices.inventoriesChanged.subscribe(function (data) {
            _this9.inventories = data;
          });

          if (this.allServices.filterInventory$) {
            this.allServices.filterInventory$.subscribe(function (inventory) {
              _this9.inventories = inventory;
            });
          } else {
            this.inventories = this.allServices.getInventories();
          }

          this.inventories = this.allServices.getInventories();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "onSearchTextChanged",
        value: function onSearchTextChanged(searchText) {
          this.filteredItems = this.items.filter(function (item) {
            return item.toLowerCase().includes(searchText.toLowerCase());
          });
        }
      }]);

      return InventoryComponent;
    }();

    InventoryComponent.ɵfac = function InventoryComponent_Factory(t) {
      return new (t || InventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"]));
    };

    InventoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InventoryComponent,
      selectors: [["app-inventory"]],
      inputs: {
        items: "items"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "border", "rounded-4", "mt-2", "bg-white"], [3, "currentInventory", "id", 4, "ngFor", "ngForOf"], [3, "currentInventory", "id"]],
      template: function InventoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InventoryComponent_app_inventory_item_2_Template, 1, 2, "app-inventory-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inventories);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_4__["InventoryItemComponent"]],
      styles: ["div[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    height: 600px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inventory',
          templateUrl: './inventory.component.html',
          styleUrls: ['./inventory.component.css']
        }]
      }], function () {
        return [{
          type: _all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"]
        }];
      }, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/inventory/not-found/not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/inventory/not-found/not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppInventoryNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 6,
      vars: 0,
      consts: [[1, "border", "rounded-4", "mt-2", "bg-white", 2, "width", "100%", "height", "100%"], ["routerLink", "/inventory", 1, "bi", "bi-arrow-left-circle", 2, "cursor", "pointer", "font-size", "xx-large"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404 - Not Found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The requested page could not be found.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["div[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 3em;\r\n    color: #d9534f;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgY29sb3I6ICNkOTUzNGY7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../inventory/inventory.component */
    "./src/app/inventory/inventory.component.ts");
    /* harmony import */


    var _inventory_item_location_inventory_item_location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../inventory-item-location/inventory-item-location.component */
    "./src/app/inventory-item-location/inventory-item-location.component.ts");
    /* harmony import */


    var _chart_representation_chart_representation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../chart-representation/chart-representation.component */
    "./src/app/chart-representation/chart-representation.component.ts");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 8,
      vars: 0,
      consts: [[1, "mt-5", 2, "overflow", "hidden"], [1, "row"], [1, "col-lg-6", "order-lg-2"], [1, "col-lg-3", "order-lg-3"], [1, "col-lg-3", "order-lg-1"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-inventory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-inventory-item-location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-chart-representation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_1__["InventoryComponent"], _inventory_item_location_inventory_item_location_component__WEBPACK_IMPORTED_MODULE_2__["InventoryItemLocationComponent"], _chart_representation_chart_representation_component__WEBPACK_IMPORTED_MODULE_3__["ChartRepresentationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.css']
        }]
      }], function () {
        return [];
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


    var _model_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/user.model */
    "./src/app/model/user.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _all_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../all-services.service */
    "./src/app/all-services.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["form"];

    var _c1 = function _c1(a0) {
      return {
        "color": a0
      };
    };

    function LoginComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r1.message === "Login Failed !" ? "red" : "green"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.message, " ");
      }
    }

    function LoginComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, allService, authService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.allService = allService;
        this.authService = authService;
        this.showMessage = false;
        this.message = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.router.url === '/login') {
            this.allService.disableTextbox();
          }
        } // closePopup() {
        //   this.widthCondition = true;
        //   this.allService.enableTextbox();
        //   this.router.navigate(['/']);
        // }

      }, {
        key: "onLogin",
        value: function onLogin(form) {
          var _this10 = this;

          var user = form.value.enterUser;
          var password = form.value.enterPassword;
          this.user = new _model_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](form.value.enterUser, form.value.enterPassword);
          this.authService.login(user, password).subscribe(function (status) {
            if (status) {
              _this10.message = 'Login Succesful !';
              _this10.showMessage = true;
              setTimeout(function () {
                _this10.showMessage = false;

                _this10.router.navigate(['/inventory']);
              }, 2000);
            } else {
              _this10.message = 'Login Failed !';
              _this10.showMessage = true;
              setTimeout(function () {
                _this10.showMessage = false;
              }, 2000);
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_all_services_service__WEBPACK_IMPORTED_MODULE_3__["AllServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      viewQuery: function LoginComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.createRoomForm = _t.first);
        }
      },
      decls: 26,
      vars: 3,
      consts: [[3, "ngSubmit"], ["form", "ngForm"], [1, "overlay", "shadow-lg"], [1, "row"], [1, "col"], [2, "text-align", "center"], [1, "col", "form-group"], ["type", "text", "name", "enterUser", "ngModel", "", "required", "", 1, "form-control"], ["type", "password", "name", "enterPassword", "ngModel", "", "required", "", 1, "form-control"], [1, "row", "mt-2"], [1, "col", "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "row", "mt-2", "ms-2"], [1, "d-flex", "justify-content-center"], ["style", "text-align: center;", 3, "ngStyle", 4, "ngIf"], ["class", "ms-2", 4, "ngIf"], [2, "text-align", "center", 3, "ngStyle"], [1, "ms-2"], [1, "spinner-border", "text-success"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx.onLogin(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Enter Username *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enter Password *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoginComponent_div_24_Template, 2, 4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_div_25_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message === "Login Succesful !");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]],
      styles: [".overlay[_ngcontent-%COMP%] {\r\n    height: 41%;        \r\n    position: fixed;\r\n    top: 25%;\r\n    left: 35%;\r\n    width: 30%;\r\n    background-color: #ECF0F1;;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n    z-index: 999;\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n@media (max-width: 768px) {\r\n    .overlay[_ngcontent-%COMP%] {\r\n        height: 41%;        \r\n        position: fixed;\r\n        top: 20%;\r\n        left: 2%;\r\n        right: 2%;\r\n        width: 96%;\r\n        background-color: #ECF0F1;;\r\n        overflow-x: hidden;\r\n        transition: 0.5s;\r\n        padding-top: 60px;\r\n        z-index: 999;\r\n        transition: margin-left .5s;\r\n        border-radius: 20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGVBQWU7UUFDZixRQUFRO1FBQ1IsUUFBUTtRQUNSLFNBQVM7UUFDVCxVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWiwyQkFBMkI7UUFDM0IsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5vdmVybGF5IHtcclxuICAgIGhlaWdodDogNDElOyAgICAgICAgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIGxlZnQ6IDM1JTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMEYxOztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5vdmVybGF5IHtcclxuICAgICAgICBoZWlnaHQ6IDQxJTsgICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDIwJTtcclxuICAgICAgICBsZWZ0OiAyJTtcclxuICAgICAgICByaWdodDogMiU7XHJcbiAgICAgICAgd2lkdGg6IDk2JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMEYxOztcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjVzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _all_services_service__WEBPACK_IMPORTED_MODULE_3__["AllServicesService"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, {
        createRoomForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['form']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/model/category.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/model/category.model.ts ***!
    \*****************************************/

  /*! exports provided: Category */

  /***/
  function srcAppModelCategoryModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Category", function () {
      return Category;
    });

    var Category = /*#__PURE__*/_createClass(function Category(names) {
      _classCallCheck(this, Category);

      this.names = names;
    });
    /***/

  },

  /***/
  "./src/app/model/inventory.model.ts":
  /*!******************************************!*\
    !*** ./src/app/model/inventory.model.ts ***!
    \******************************************/

  /*! exports provided: Inventory */

  /***/
  function srcAppModelInventoryModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Inventory", function () {
      return Inventory;
    });

    var Inventory = /*#__PURE__*/_createClass(function Inventory(itemName, categories, roomNames, location, addInfo, status) {
      _classCallCheck(this, Inventory);

      this.itemName = itemName;
      this.categories = categories;
      this.roomNames = roomNames;
      this.location = location;
      this.addInfo = addInfo;
      this.status = status;
    });
    /***/

  },

  /***/
  "./src/app/model/room.model.ts":
  /*!*************************************!*\
    !*** ./src/app/model/room.model.ts ***!
    \*************************************/

  /*! exports provided: Room */

  /***/
  function srcAppModelRoomModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Room", function () {
      return Room;
    });

    var Room = /*#__PURE__*/_createClass(function Room(names) {
      _classCallCheck(this, Room);

      this.names = names;
    });
    /***/

  },

  /***/
  "./src/app/model/user.model.ts":
  /*!*************************************!*\
    !*** ./src/app/model/user.model.ts ***!
    \*************************************/

  /*! exports provided: User */

  /***/
  function srcAppModelUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = /*#__PURE__*/_createClass(function User(userName, password) {
      _classCallCheck(this, User);

      this.userName = userName;
      this.password = password;
    });
    /***/

  },

  /***/
  "./src/app/popover-forms/popover-forms.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/popover-forms/popover-forms.component.ts ***!
    \**********************************************************/

  /*! exports provided: PopoverFormsComponent */

  /***/
  function srcAppPopoverFormsPopoverFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverFormsComponent", function () {
      return PopoverFormsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_room_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/room.model */
    "./src/app/model/room.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _all_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../all-services.service */
    "./src/app/all-services.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["form"];

    function PopoverFormsComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sucessfully Created ! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "close-width": a0
      };
    };

    var PopoverFormsComponent = /*#__PURE__*/function () {
      function PopoverFormsComponent(router, allService) {
        _classCallCheck(this, PopoverFormsComponent);

        this.router = router;
        this.allService = allService;
        this.showMessage = false;
      }

      _createClass(PopoverFormsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.router.url === '/CreateRoom') {
            this.allService.disableTextbox();
          }
        }
      }, {
        key: "closePopup",
        value: function closePopup() {
          this.widthCondition = true;
          this.allService.enableTextbox();
          this.router.navigate(['/']);
        }
      }, {
        key: "onCreateRooms",
        value: function onCreateRooms(form) {
          var _this11 = this;

          var array = form.value.enterRooms.split(",");

          for (var i = 0; i < array.length; i++) {
            var newRomm = new _model_room_model__WEBPACK_IMPORTED_MODULE_1__["Room"](array[i]);
            this.allService.setRoomName(newRomm);
          }

          this.showMessage = true;
          setTimeout(function () {
            _this11.showMessage = false;
          }, 2000);
        }
      }]);

      return PopoverFormsComponent;
    }();

    PopoverFormsComponent.ɵfac = function PopoverFormsComponent_Factory(t) {
      return new (t || PopoverFormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_all_services_service__WEBPACK_IMPORTED_MODULE_3__["AllServicesService"]));
    };

    PopoverFormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PopoverFormsComponent,
      selectors: [["app-popover-forms"]],
      viewQuery: function PopoverFormsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.createRoomForm = _t.first);
        }
      },
      decls: 23,
      vars: 5,
      consts: [[3, "ngSubmit"], ["form", "ngForm"], [1, "overlay", "shadow-lg", 3, "ngClass"], [1, "row"], [1, "col"], [2, "text-align", "center"], [1, "col", "form-group"], ["type", "text", "name", "enterRooms", "ngModel", "", "required", "", 1, "form-control"], [1, "row", "mt-2"], [1, "col", "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-danger", "ms-2", 3, "click"], [1, "row", "mt-2", "ms-2"], [2, "font-size", "smaller"], ["class", "text-success", "style", "text-align: center;", 4, "ngIf"], [1, "text-success", 2, "text-align", "center"]],
      template: function PopoverFormsComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PopoverFormsComponent_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx.onCreateRooms(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Enter Rooms *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverFormsComponent_Template_button_click_16_listener() {
            return ctx.closePopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "* enter room names separated by comma. (eg living room, bedroom1) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PopoverFormsComponent_div_22_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.widthCondition));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessage);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: [".overlay[_ngcontent-%COMP%] {\r\n    height: 41%;        \r\n    position: fixed;\r\n    top: 25%;\r\n    left: 35%;\r\n    width: 30%;\r\n    background-color: #ECF0F1;;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n    z-index: 999;\r\n    border-radius: 20px;\r\n}\r\n\r\n.close-width[_ngcontent-%COMP%] {\r\n    width: 0%;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .overlay[_ngcontent-%COMP%] {\r\n        height: 41%;        \r\n        position: fixed;\r\n        top: 20%;\r\n        left: 2%;\r\n        right: 2%;\r\n        width: 96%;\r\n        background-color: #ECF0F1;;\r\n        overflow-x: hidden;\r\n        transition: 0.5s;\r\n        padding-top: 60px;\r\n        z-index: 999;\r\n        transition: margin-left .5s;\r\n        border-radius: 20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wb3Zlci1mb3Jtcy9wb3BvdmVyLWZvcm1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGVBQWU7UUFDZixRQUFRO1FBQ1IsUUFBUTtRQUNSLFNBQVM7UUFDVCxVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWiwyQkFBMkI7UUFDM0IsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wb3BvdmVyLWZvcm1zL3BvcG92ZXItZm9ybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ub3ZlcmxheSB7XHJcbiAgICBoZWlnaHQ6IDQxJTsgICAgICAgIFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICBsZWZ0OiAzNSU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRjBGMTs7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uY2xvc2Utd2lkdGgge1xyXG4gICAgd2lkdGg6IDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5vdmVybGF5IHtcclxuICAgICAgICBoZWlnaHQ6IDQxJTsgICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDIwJTtcclxuICAgICAgICBsZWZ0OiAyJTtcclxuICAgICAgICByaWdodDogMiU7XHJcbiAgICAgICAgd2lkdGg6IDk2JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMEYxOztcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjVzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverFormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-popover-forms',
          templateUrl: './popover-forms.component.html',
          styleUrls: ['./popover-forms.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _all_services_service__WEBPACK_IMPORTED_MODULE_3__["AllServicesService"]
        }];
      }, {
        createRoomForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['form']
        }]
      });
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
    /*! D:\Angular\home-inventory\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
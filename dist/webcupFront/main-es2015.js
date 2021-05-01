(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n\r\n<app-slide-top></app-slide-top>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header></app-main-header>\r\n<div class=\"main\">\r\n  <div class=\"main-contain\">\r\n    <h3>\r\n      ECOLE\r\n    </h3>\r\n    <p>\r\n      Nationale Informatique\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"main-title\">\r\n    <h3>\r\n      A Propos\r\n    </h3>\r\n    <p>\r\n      A propos de l'Ecole Nationale Informatique\r\n    </p>\r\n    <div class=\"bottomy\">\r\n      <p class=\"bottomy-one\"></p>\r\n      <div class=\"bottomy-center\">\r\n        <i class=\"fas fa-graduation-cap\"></i>\r\n      </div>\r\n      <p class=\"bottomy-two\"></p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n                <!--Teachers Area Start-->\r\n                <div class=\"teachers-area padding-top\">\r\n                  <div class=\"container\">\r\n                      <div class=\"row\" id=\"scrollspy-nav\">\r\n                          <div class=\"col-lg-3 col-md-6 col-12\">\r\n                              <div class=\"single-teacher-item\" (click)=\"scrollTo('information')\">\r\n                                  <div class=\"single-teacher-image\">\r\n                                      <a>\r\n                                        <!-- <img src=\"img/teacher/l-1.jpg\" alt=\"\"> -->\r\n                                      </a>\r\n                                  </div>\r\n                                  <div class=\"single-teacher-text\">\r\n                                      <h3>\r\n                                        <a>\r\n                                        Information\r\n                                      </a>\r\n                                      </h3>\r\n                                      <h4>Ordre général</h4>\r\n\r\n                                      <p *ngIf=\"information\"\r\n                                      [innerHTML]=\"information.substring(0, 100)+'...' | sanitizeHtml\">\r\n                                      </p>\r\n                                      <!-- <p >\r\n                                        {{information.substring(0, 150)}}...\r\n                                      </p> -->\r\n                                      <!-- <div class=\"social-links\">\r\n                                          <a><i class=\"fas fa-info-circle\"></i></a>\r\n                                          <a><i class=\"fas fa-landmark\"></i></a>\r\n                                          <a><i class=\"fas fa-graduation-cap\"></i></a>\r\n                                          <a><i class=\"fas fa-chalkboard-teacher\"></i></a>\r\n                                      </div> -->\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-lg-3 col-md-6 col-12\">\r\n                              <div class=\"single-teacher-item\" (click)=\"scrollTo('historique')\">\r\n                                  <div class=\"single-teacher-image\">\r\n                                      <a>\r\n                                        <!-- <img src=\"img/teacher/l-2.jpg\" alt=\"\"> -->\r\n                                      </a>\r\n                                  </div>\r\n                                  <div class=\"single-teacher-text\">\r\n                                      <h3><a>Historique</a></h3>\r\n                                      <h4>Décret</h4>\r\n                                      <p *ngIf=\"historique\"\r\n                                      [innerHTML]=\"historique.substring(0, 100)+'...' | sanitizeHtml\">\r\n                                      </p>\r\n                                      <!-- <p *ngIf=\"historique\">\r\n                                        {{historique.substring(0, 150)}}...\r\n                                      </p> -->\r\n                                      <!-- <div class=\"social-links\">\r\n                                        <a><i class=\"fas fa-info-circle\"></i></a>\r\n                                          <a><i class=\"fas fa-landmark\"></i></a>\r\n                                          <a><i class=\"fas fa-graduation-cap\"></i></a>\r\n                                          <a><i class=\"fas fa-chalkboard-teacher\"></i></a>\r\n                                      </div> -->\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-lg-3 col-md-6 col-12\">\r\n                              <div class=\"single-teacher-item\" (click)=\"scrollTo('mission')\">\r\n                                  <div class=\"single-teacher-image\">\r\n                                      <a>\r\n                                        <!-- <img src=\"img/teacher/l-3.jpg\" alt=\"\"> -->\r\n                                      </a>\r\n                                  </div>\r\n                                  <div class=\"single-teacher-text\">\r\n                                      <h3><a>Missions</a></h3>\r\n                                      <h4>Formation</h4>\r\n                                      <p *ngIf=\"mission\"\r\n                                      [innerHTML]=\"mission.substring(0, 100)+'...' | sanitizeHtml\">\r\n                                      </p>\r\n                                      <!-- <p *ngIf=\"mission\">\r\n                                        {{mission.substring(0, 150)}}...\r\n                                      </p> -->\r\n                                      <!-- <div class=\"social-links\">\r\n                                        <a><i class=\"fas fa-info-circle\"></i></a>\r\n                                          <a><i class=\"fas fa-landmark\"></i></a>\r\n                                          <a><i class=\"fas fa-graduation-cap\"></i></a>\r\n                                          <a><i class=\"fas fa-chalkboard-teacher\"></i></a>\r\n                                      </div> -->\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-lg-3 col-md-6 col-12\">\r\n                              <div class=\"single-teacher-item\" (click)=\"scrollTo('specialisation')\">\r\n                                  <div class=\"single-teacher-image\">\r\n                                      <a>\r\n                                        <!-- <img src=\"img/teacher/l-4.jpg\" alt=\"\"> -->\r\n                                      </a>\r\n                                  </div>\r\n                                  <div class=\"single-teacher-text\">\r\n                                      <h3><a>Spécialisation</a></h3>\r\n                                      <h4>Domaine</h4>\r\n                                      <p *ngIf=\"specification\"\r\n                                      [innerHTML]=\"specification.substring(0, 100)+'...' | sanitizeHtml\">\r\n                                      </p>\r\n                                      <!-- <p *ngIf=\"specification\">\r\n                                        {{specification.substring(0, 150)}}...\r\n                                      </p> -->\r\n                                      <!-- <div class=\"social-links\">\r\n                                        <a><i class=\"fas fa-info-circle\"></i></a>\r\n                                          <a><i class=\"fas fa-landmark\"></i></a>\r\n                                          <a><i class=\"fas fa-graduation-cap\"></i></a>\r\n                                          <a><i class=\"fas fa-chalkboard-teacher\"></i></a>\r\n                                      </div> -->\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <!--End of Teachers Area-->\r\n\r\n<div class=\"details\" id=\"parentDiv\" scrollSpy [spiedTags]=\"['DIV']\"\r\n(sectionChange)=\"onSectionChange($event)\">\r\n  <p class=\"mimi\" id=\"information\"></p>\r\n  <h3>\r\n    <i class=\"fas fa-info-circle\"></i>\r\n    Information d'ordre général\r\n  </h3>\r\n  <p [innerHTML]=\"information | sanitizeHtml\">\r\n  </p>\r\n  <!-- <p>\r\n    {{information}}\r\n  </p> -->\r\n  <p *ngIf=\"!information\">\r\n    L' Ecole Nationale d'Informatique, en abrégé ENI, est un établissement d'enseignement\r\n    supérieur rattaché académiquement et administrativement à l'Université de Fianarantsoa.\r\n  </p>\r\n  <p *ngIf=\"!information\">\r\n    Le siège de l'Ecole se trouve à Tanambao Fianarantsoa.  <br>\r\n    Boîte postale 1487, code 301. <br>\r\n    Téléphone : +261 34 05 733 36. <br>\r\n    Adresse électronique : eni@univ-fianar.mg. <br>\r\n  </p>\r\n\r\n  <div class=\"space\"></div>\r\n  <p class=\"mimi\" id=\"historique\"></p>\r\n  <h3 id=\"historique\">\r\n    <i class=\"fas fa-landmark\"></i>\r\n    Historique\r\n  </h3>\r\n  <p [innerHTML]=\"historique | sanitizeHtml\">\r\n  </p>\r\n  <p *ngIf=\"!historique\">\r\n    L’ENI se positionne sur l’échiquier socio-éducatif malgache comme étant le plus puissant\r\n    secteur de diffusion et de vulgarisation des connaissances et des technologies informatiques.\r\n  </p>\r\n  <p *ngIf=\"!historique\">\r\n    Cette Ecole Supérieure peut être considérée aujourd’hui comme la vitrine et\r\n    la pépinière des élites informaticiennes du pays.\r\n  L’Ecole s’est constituée de façon progressive au sein du Centre Universitaire Régional (CUR) de Fianarantsoa.\r\n  </p>\r\n  <p *ngIf=\"!historique\">\r\n    De façon formelle, l’ENI était constituée et créée au sein du CUR\r\n    par le décret N° 83185 du 24 Mai 1983, comme étant le seul\r\n    établissement Universitaire Professionnalisé au niveau national,\r\n    destiné à former des techniciens et des Ingénieurs de haut niveau, aptes\r\n    à répondre aux besoins et exigences d’Informatisation des entreprises,\r\n    des sociétés et des organes implantés à Madagascar.\r\n  </p>\r\n\r\n  <div class=\"space\"></div>\r\n  <p class=\"mimi\" id=\"mission\"></p>\r\n  <h3 id=\"mission\">\r\n    <i class=\"fas fa-graduation-cap\"></i>\r\n    Missions\r\n  </h3>\r\n  <div [innerHTML]=\"mission | sanitizeHtml\">\r\n  </div>\r\n  <!-- <div>\r\n    {{mission}}\r\n  </div> -->\r\n  <div *ngIf=\"!mission\">\r\n    L’ENI a pour conséquent pour mission de former des\r\n    spécialistes informaticiens compétents et opérationnels de différents niveaux notamment :\r\n    <ul>\r\n      <li>\r\n        En fournissant aux étudiants des connaissances de base en informatique ;\r\n      </li>\r\n      <li>\r\n        En leur transmettant le savoir-faire requis, à travers la professionnalisation\r\n        des formations dispensées et en\r\n        essayant une meilleure adéquation des formations par rapport\r\n        aux besoins évolutifs des sociétés et des entreprises.\r\n      </li>\r\n      <li>\r\n        En initiant les étudiants aux activités de recherche dans les différents domaines des\r\n        Technologies de l'information et de la communication (TIC).\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <p *ngIf=\"!mission\">\r\n    L'implantation de cette Ecole Supérieure de technologie de pointe\r\n    dans un pays en développement et dans une Province à tissu\r\n    économique et industriel faiblement développé ne l'a pourtant\r\n    pas défavorisée, ni empêchée de former des spécialistes informaticiens de bon niveau,\r\n    qui sont recherchés par les entreprises, les sociétés et\r\n    les organismes publics et privés sur le marché de l'emploi.\r\n  </p>\r\n\r\n  <div class=\"space\"></div>\r\n  <p class=\"mimi\" id=\"specialisation\"></p>\r\n  <h3 id=\"specialisation\">\r\n    <i class=\"fas fa-chalkboard-teacher\"></i>\r\n    Domaine de spécialisation\r\n  </h3>\r\n  <div [innerHTML]=\"specification | sanitizeHtml\">\r\n  </div>\r\n  <!-- <div>\r\n    {{specification}}\r\n  </div> -->\r\n  <div *ngIf=\"!specification\">\r\n    Les activités de formation et de recherche organisées à l'ENI portent sur les domaines suivants :\r\n    <ul>\r\n      <li>\r\n        Génie logiciel et Base de Données ;\r\n      </li>\r\n      <li>\r\n        Administration des Systèmes et Réseaux ;\r\n      </li>\r\n      <li>\r\n        Informatique Générale\r\n      </li>\r\n      <li>\r\n        Modélisation informatique et mathématique des Systèmes complexes.\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <p *ngIf=\"!specification\">\r\n    D'une manière plus générale, les programmes des formations sont\r\n    basés sur l'informatique de gestion et sur l'informatique des\r\n    Systèmes et Réseaux. Et les modules de formation\r\n    intègrent aussi bien des éléments d'Informatique fondamentale\r\n    que des éléments d'Informatique appliquée.\r\n  </p>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"contain-img\">\r\n        <img [src]=\"img1\" alt=\"\" class=\"image\">\r\n      </div>\r\n      <div class=\"contain-text\">\r\n        - Sortie de promotion\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"contain-img\">\r\n        <img [src]=\"img2\" alt=\"\" class=\"image\">\r\n      </div>\r\n      <div class=\"contain-text\">\r\n        - Vue de loin\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"contain-img\">\r\n        <img [src]=\"img3\" alt=\"\" class=\"image\">\r\n      </div>\r\n      <div class=\"contain-text\">\r\n        - Archive\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"content\">\r\n    <div id=\"progress-man\">\r\n      <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n    </div>\r\n\r\n    \r\n      <div class=\"\" id=\"loginheader\">\r\n        <div class=\"left-side row\">\r\n          <div class=\"cool-md-4 logoimg\">\r\n            <img [src]=\"logo\" alt=\"\" id=\"logologin\">\r\n          </div>\r\n          <div class=\"cool-md-8 logotitle\">\r\n            E c o l e<br>N a t i o n a l e<br>I n f o r m a t i q u e\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"left-side\">\r\n        <div class=\"main-one\">\r\n          Se Connecter\r\n        </div>\r\n        <div class=\"bar\"></div>\r\n        <div class=\"main-two\">\r\n          <form [formGroup]=\"signin\" (ngSubmit)=\"onConnect()\">\r\n          <div class=\"content-form-field field\">\r\n              <mat-form-field>\r\n                <mat-label>En tant que</mat-label>\r\n                <mat-select disableRipple formControlName=\"type\" required>\r\n                  <mat-option value=\"enseignant\">Enseignant</mat-option>\r\n                  <mat-option value=\"etudiant\">Etudiant</mat-option>\r\n                </mat-select>\r\n                <mat-icon matSuffix>assignment_ind</mat-icon>\r\n              </mat-form-field>\r\n          </div>\r\n  \r\n          <div class=\"content-form-field field\">\r\n              <mat-form-field>\r\n                <mat-label>Identifiant/Email</mat-label>\r\n                <input matInput formControlName=\"email\" autocomplete=\"off\" required>\r\n                <mat-icon matSuffix>account_circle</mat-icon>\r\n              </mat-form-field>\r\n          </div>\r\n  \r\n          <div class=\"content-form-field field\">\r\n            <mat-form-field>\r\n              <mat-label>Mot de passe</mat-label>\r\n              <input matInput [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" required>\r\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n              </mat-form-field>\r\n          </div>\r\n          <!-- <div class=\"forgot-pass\">\r\n            Mot de passe <span>oublié</span> ?\r\n          </div> -->\r\n  \r\n          <div class=\"contain-error\">\r\n            <p *ngIf=\"error\">\r\n              {{error}}\r\n            </p>\r\n          </div>\r\n  \r\n          <div class=\"content-btn\">\r\n              <button class=\"btn_connecter\" type=\"submit\">\r\n                <div class=\"loader\" *ngIf=\"isLogin\">...</div>\r\n                <span *ngIf=\"!isLogin\">\r\n                Connexion\r\n                </span>\r\n            </button>\r\n          </div>\r\n        </form>\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clubs/clubs.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clubs/clubs.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header></app-main-header>\r\n\r\n<div class=\"container-fluid mainy\">\r\n  <div id=\"myCarousel\" class=\"carousel slide bg-inverse w-50 ml-auto mr-auto\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li *ngFor=\"let item of clubs; let i=index\"\r\n      data-target=\"#myCarousel\"\r\n      data-slide-to=\" + i +\" [ngClass]=\"{'active': i == 0}\"></li>\r\n\r\n    </ol>\r\n    <div class=\"carousel-inner container \" role=\"listbox\">\r\n      <div class=\"carousel-item\" *ngFor=\"let item of clubs; let i=index\" [ngClass]=\"{'active': i == 0}\">\r\n        <div class=\"row\" style=\"margin: auto !important;\">\r\n          <div class=\"col-md-5 d-block\">\r\n            <img class=\"img-fluid\" id=\"clubimg\" [src]=\"item.image\" alt=\"club\">\r\n          </div>\r\n          <div class=\"col-md-6 \">\r\n            <div class=\"carousel-caption descriClub\">\r\n              <h3>{{item.libelle}}</h3>\r\n              <div [innerHTML]=\"item.description | sanitizeHtml\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<app-publications></app-publications>\r\n\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clubs/publications/publications.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clubs/publications/publications.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("                <!--Event Area Start-->\n                <div class=\"event-area section-padding bg-white\">\n                  <div class=\"container-fluid cint\">\n                      <div class=\"row\" id=\"top-row\">\n                          <div class=\"col-md-12\">\n                            <div class=\"section-title-wrapper\">\n                              <div class=\"section-title\">\n                                  <h4>PUBLICATIONS</h4>\n                                  <p>\n                                    Les récentes publications des clubs\n                                  </p>\n                                  <div class=\"bottomy\">\n                                    <p class=\"bottomy-one\"></p>\n                                    <div class=\"bottomy-center\">\n                                      <fa name=\"book\"></fa>\n                                    </div>\n                                    <p class=\"bottomy-two\"></p>\n                                  </div>\n\n                              </div>\n                          </div>\n                          </div>\n                      </div>\n\n                      <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <div class=\"contain-sel\">\n                            <div class=\"input-group mb-3\">\n                              <select name=\"club\" id=\"club-select\"\n                              [ngModel]=\"selected\" (ngModelChange)=\"onChange($event)\"\n                              aria-label=\"Search term\" aria-describedby=\"basic-addon\">\n                                <option value=\"all\">Lister tout</option>\n                                <option [value]=\"item.libelle\" *ngFor=\"let item of clubs\">{{item.libelle}}</option>\n                              </select>\n                              <div class=\"input-group-append\">\n                                <button class=\"btn btn-secondary\" type=\"button\">\n                                  <fa name=\"search\"></fa>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"row rowwy\">\n                          <div class=\"col-lg-4  main-col\" *ngFor=\"let item of four_actu\">\n                              <div class=\"single-event-item\">\n                                  <div class=\"single-event-image\">\n                                      <a>\n                                          <img [src]=\"item.image\" alt=\"\" class=\"imaged\">\n                                          <span><span>\n                                            {{item.date_creation.substring(0,2)}}\n                                          </span>\n                                          {{item.date_creation.substring(3,7)}}\n                                        </span>\n                                      </a>\n                                  </div>\n                                  <div class=\"single-event-text\">\n                                      <h3><a>{{item.titre}}</a></h3>\n                                      <div class=\"single-item-comment-view\">\n                                        <span><i class=\"fa fa-tasks\"></i>{{item.club}} - </span>\n                                        <span><i class=\"fa fa-edit\"></i>{{item.posteur}}</span>\n                                    </div>\n                                    <div class=\"desc\" [innerHTML]=\"item.description | sanitizeHtml\">\n                                    </div>\n                                    <div class=\"daty\">\n                                      <i class=\"fa fa-calendar\"></i>\n                                      <span>\n                                        {{item.date_mise_jour}}\n                                      </span>\n                                    </div>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"col-lg-12\" *ngIf=\"noPub\">\n                            <div class=\"no-actu\">\n                              Aucune publication\n                            </div>\n                          </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <div class=\"content-pagination\">\n                            <span *ngFor=\"let item of nbPagination\" (click)=\"page(item)\" [ngClass]=\"{current : item === currentPagination}\">\n                              {{item}}\n                            </span>\n                            <span (click)=\"page(currentPagination+1)\" *ngIf=\"!noPub\">\n                              <i class=\"fas fa-arrow-right\"></i>\n                            </span>\n                          </div>\n                        </div>\n                      </div>\n                  </div>\n              </div>\n              <!--End of Event Area-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header></app-main-header>\r\n\r\n<div class=\"main\">\r\n  <div class=\"contain-main\">\r\n    <div class=\"main-head\">\r\n      <div class=\"contain-name\">\r\n        <h5 class=\"txt1\">\r\n          Ecole\r\n        </h5>\r\n        <h6 class=\"txt2\">\r\n          Nationale Informatique\r\n        </h6>\r\n      </div>\r\n\r\n      <br>\r\n      <p>\r\n        <i class=\"fas fa-map-marker-alt\"></i> &nbsp; Tanambao\r\n      </p>\r\n      <p>\r\n        <i class=\"fas fa-map-marked-alt\"></i> &nbsp; FIANARANTSOA I\r\n      </p>\r\n      <p>\r\n        <i class=\"fas fa-envelope-open-text\"></i> &nbsp; BP : 1487 - Code 301\r\n      </p>\r\n      <p>\r\n        <i class=\"fas fa-globe-africa\"></i> &nbsp;MADAGASCAR\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"contain-contact\">\r\n  <div class=\"title-mapped\">\r\n    Avez-vous des questions ?\r\n  </div>\r\n\r\n  <form class=\"form\" [formGroup]=\"contactForm\">\r\n    <div>\r\n      <label for=\"email\">E-mail</label>\r\n      <input type=\"text\" name=\"email\" id=\"email\" class=\"form-control\"\r\n      formControlName=\"email\" placeholder=\"Votre adresse email\" [(ngModel)]=\"email\">\r\n\r\n      <div *ngIf=\"submitted && form.email.errors\">\r\n        <small *ngIf=\"form.email.errors.required\" class=\"form-text error-text \">\r\n          Adresse email requis\r\n        </small>\r\n        <small *ngIf=\"form.email.errors.email\" class=\"form-text error-text \">\r\n          Veuillez mettre un format email valide\r\n        </small>\r\n      </div>\r\n    </div>\r\n\r\n    <div>\r\n      <label for=\"fonction\">Objet</label>\r\n      <input type=\"text\" name=\"objet\" id=\"objet\" class=\"form-control\" formControlName=\"objet\"\r\n        placeholder=\"Votre objet\" [(ngModel)]=\"objet\">\r\n      <div *ngIf=\"submitted && form.objet.errors\">\r\n        <small *ngIf=\"form.objet.errors.required\" class=\"form-text error-text \">Objet requis</small>\r\n      </div>\r\n    </div>\r\n\r\n    <div>\r\n      <label for=\"message\">Message</label>\r\n      <textarea rows=\"5\" name=\"message\" id=\"message\"\r\n      class=\"form-control\" formControlName=\"message\"\r\n      placeholder=\"Votre message\" [(ngModel)]=\"message\"></textarea>\r\n      <div *ngIf=\"submitted && form.message.errors\">\r\n        <small *ngIf=\"form.message.errors.required\" class=\"form-text error-text \">Message requis</small>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"contain-submit\">\r\n      <button type=\"submit\" (click)=\"openConfirm()\">\r\n        <span>\r\n          Envoyer\r\n        </span>\r\n      </button>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n\r\n<div class=\"mapped\">\r\n  <div id=\"progress-man\">\r\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n  </div>\r\n  <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.0503978815673!2d47.091204214744295!3d-21.455131093075888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21e7bed737f377b5%3A0xb8558e55587dd811!2sEcole%20Nationale%20d%20Informatique!5e1!3m2!1sfr!2smg!4v1619166207585!5m2!1sfr!2smg\"\r\n  width=\"100%\" height=\"450\"\r\n  style=\"border:0;\"\r\n  allowfullscreen=\"\" loading=\"lazy\" id=\"frame_id\">\r\n</iframe>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/actuality/actuality.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/actuality/actuality.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span id=\"the-toppyy\"></span>\r\n<app-main-header></app-main-header>\r\n\r\n\r\n<div class=\"contain-section container\" id=\"the-toppy\">\r\n  <div class=\"top-tite\" (click)=\"slideToActu()\">\r\n    <span *ngIf=\"!isNews\">Les actualités</span>\r\n    <span *ngIf=\"isNews\">Les nouvelles</span>\r\n\r\n    <fa name=\"globe\" animation=\"spin\"></fa>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-5\" *ngIf=\"!noNews\">\r\n      <div class=\"section-left\">\r\n        <div class=\"section-left-date\">\r\n          <p class=\"p1\">\r\n            du <span class=\"date\" *ngIf=\"currentActu\">\r\n              {{currentActu.date_creation}}\r\n            </span>\r\n          </p>\r\n          <p class=\"p2\" *ngIf=\"currentActu\">\r\n            by <span>{{currentActu.posteur}}</span>\r\n          </p>\r\n        </div>\r\n        <!-- <img src=\"./../../../../../assets/images/latest/4.jpg\" alt=\"\" id=\"poster\"> -->\r\n        <img [src]=\"currentActu.image\" alt=\"\" id=\"poster\" *ngIf=\"currentActu\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6 offset-lg-1\">\r\n      <div class=\"section-right\">\r\n        <h3 class=\"section-right-h3\" *ngIf=\"currentActu\">\r\n          {{currentActu.titre}}\r\n        </h3>\r\n        <!-- <div class=\"section-right-description\" *ngIf=\"currentActu\">\r\n          {{currentActu.description}}\r\n        </div> -->\r\n        <div class=\"section-right-description\" *ngIf=\"currentActu\"\r\n        [innerHTML]=\"currentActu.description | sanitizeHtml\"></div>\r\n        <br><br>\r\n        <!-- <div class=\"section-right-description\">\r\n          Lorem, ipsum dolor sit amet consectetur adipisicing elit.\r\n          Quidem commodi alias quam ratione deleniti, ea eligendi dolor labore nobis\r\n          ad consequuntur necessitatibus hic\r\n          maiores consequatur beatae, doloremque tempore magnam ullam!\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\" *ngIf=\"galleryOne\">\r\n      <div class=\"contain-gallerie\" *ngIf=\"galleryOne.length > 0\">\r\n\r\n        <div class=\"contain-gallerie-one\" *ngIf=\"currentActu\">\r\n          <div class=\"img\" *ngFor=\"let item of galleryOne\">\r\n            <img [src]=\"item\" alt=\"\" class=\"image\">\r\n            <div class=\"overlay\">\r\n              <div class=\"text\">\r\n                <span *ngIf=\"!isNews\">Actualité</span>\r\n                <span *ngIf=\"isNews\">Nouvelle</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"text-gallerie\">\r\n          <span *ngIf=\"galleryOne.length === 1\">galerie</span>\r\n          <span *ngIf=\"galleryOne.length > 1\">galeries</span>\r\n        </div>\r\n        <div class=\"bar-gallerie\">\r\n        </div>\r\n\r\n        <div class=\"contain-gallerie-two\">\r\n          <!-- <div class=\"img\" *ngFor=\"let item of galleryTwo\">\r\n            <img [src]=\"item.path\" alt=\"\" class=\"image\">\r\n            <div class=\"overlay\">\r\n              <div class=\"text\">{{item.alt}}</div>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n                <!--Latest News Area Start-->\r\n                <div class=\"latest-area section-padding bg-white\" id=\"top-row\">\r\n                  <div class=\"container\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-md-12\">\r\n                              <div class=\"section-title-wrapper\">\r\n                                  <div class=\"section-title\">\r\n                                      <h3>\r\n                                        Récentes\r\n                                        <span *ngIf=\"!isNews\">actualités</span>\r\n                                        <span *ngIf=\"isNews\">nouvelles</span>\r\n                                      </h3>\r\n                                      <p>Les informations partagées</p>\r\n                                      <div class=\"bottomy\">\r\n                                        <p class=\"bottomy-one\"></p>\r\n                                        <div class=\"bottomy-center\">\r\n                                          <fa name=\"globe\"></fa>\r\n                                        </div>\r\n                                        <p class=\"bottomy-two\"></p>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-6 col-md-12 col-12\" *ngFor=\"let item of four_actu; let i=index\">\r\n                          <div class=\"single-latest-item\">\r\n                              <div class=\"single-latest-image\">\r\n                                  <!--<a [href]=\"item.slug\">-->\r\n                                    <img [src]=\"item.image\" alt=\"\" (click)=\"showActu(item.titre, item.date_mise_jour, item.posteur)\">\r\n                                  <!--</a>-->\r\n                              </div>\r\n                              <div class=\"single-latest-text\">\r\n                                  <h3><a>{{item.titre}}</a></h3>\r\n                                  <div class=\"single-item-comment-view\">\r\n                                    <span><i class=\"fa fa-calendar\"></i>{{item.date_creation}}</span>\r\n                                </div>\r\n\r\n                                <div [innerHTML]=\"item.description.substring(0, 100)+'...' | sanitizeHtml\"></div>\r\n                                <!-- <div>\r\n                                  {{item.description.substring(0, 100)}}...\r\n                                  </div> -->\r\n                                 <a class=\"btn button-default\" (click)=\"showActu(item.titre, item.date_mise_jour, item.posteur)\">\r\n                                   Afficher\r\n                                  </a>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-lg-12\" *ngIf=\"noNews\">\r\n                        <div class=\"no-actu\">\r\n                          Aucune &nbsp;\r\n                          <span *ngIf=\"isNews\">nouvelle</span>\r\n                          <span *ngIf=\"!isNews\">actualité</span>\r\n                          &nbsp;\r\n                          disponible\r\n                        </div>\r\n                      </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"content-pagination\" *ngIf=\"nbPagination.length > 1\">\r\n                    <span *ngFor=\"let item of nbPagination\" (click)=\"page(item)\" [ngClass]=\"{current : item === currentPagination}\">\r\n                      {{item}}\r\n                    </span>\r\n                    <span (click)=\"page(currentPagination+1)\" *ngIf=\"!noNews && nbPagination.length > 1\">\r\n                      <i class=\"fas fa-arrow-right\"></i>\r\n                    </span>\r\n                  </div>\r\n              </div>\r\n              <!--End of Latest News Area-->\r\n\r\n<app-footer></app-footer>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/events/events.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/events/events.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid main\">\r\n  <div class=\"title\">\r\n    Les Annonces\r\n  </div>\r\n\r\n  <div class=\"card-one\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"contain-two\">\r\n          <h2 class=\"title-card-one\">\r\n            communiqués à la une\r\n          </h2>\r\n\r\n          <div class=\"line\"></div>\r\n      </div>\r\n\r\n      <div class=\"noAnnonce\" *ngIf=\"three_news == null || three_news == undefined\">\r\n        Aucune annonce\r\n      </div>\r\n\r\n      <div class=\"row contain-com\">\r\n        <div class=\"col-lg-4\" *ngFor=\"let item of three_news\">\r\n            <div class=\"contain\">\r\n              <img [src]=\"item.image\" alt=\"\" class=\"contain-img\">\r\n              <h4 class=\"contain-title\">{{item.titre}}</h4>\r\n              <p class=\"contain-date\">\r\n                <fa name=\"calendar\"></fa>\r\n                {{item.date_mise_jour}}\r\n              </p>\r\n              <div class=\"contain-description\" [innerHTML]=\"item.description.substring(0, 120)+'...' | sanitizeHtml\">\r\n              </div>\r\n\r\n              <!-- <div class=\"contain-description\">{{item.description.substring(0, 200)}}...</div> -->\r\n\r\n              <div class=\"lire-plus\" (click)=\"lire(item)\">\r\n                Lire le communiqué\r\n                <span>\r\n                  <i class=\"fas fa-arrow-right\"></i>\r\n                </span>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"contain-other-com\" id=\"contain-other-intern\">\r\n    <div class=\"contain-other-intern\">\r\n      <div class=\"row list-com\" *ngFor=\"let item of last_news\">\r\n        <div class=\"content-src-img col-lg-4\">\r\n            <img [src]=\"item.image\" alt=\"\">\r\n        </div>\r\n        <div class=\"col-lg-7\">\r\n          <div class=\"description-other\">\r\n            <p class=\"title-other\">\r\n              {{item.titre}}\r\n            </p>\r\n            <p class=\"date-other\">\r\n              <fa name=\"calendar\"></fa>\r\n              {{item.date_mise_jour}}\r\n            </p>\r\n            <div class=\"detail-other\" [innerHTML]=\"item.description.substring(0, 100)+'...' | sanitizeHtml\"></div>\r\n\r\n            <!-- <div class=\"detail-other\">\r\n              {{item.description.substring(0, 100)}}...\r\n            </div> -->\r\n\r\n            <div class=\"lire-plus\" (click)=\"lire(item)\">\r\n              Lire le communiqué\r\n              <span>\r\n                <i class=\"fas fa-arrow-right\"></i>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-pagination\" *ngIf=\"nbPagination.length > 0 && nbPagination.length > 1\">\r\n      <span *ngFor=\"let item of nbPagination\" (click)=\"page(item)\" [ngClass]=\"{current : item === currentPagination}\">\r\n        {{item}}\r\n      </span>\r\n      <span (click)=\"page(currentPagination+1)\" *ngIf=\"nbPagination.length > 1\">\r\n        <i class=\"fas fa-arrow-right\"></i>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/news-all.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/news-all.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header></app-main-header>\r\n\r\n<div class=\"header-news\">\r\n  <div class=\"title-header-news\">\r\n    Plus d'annonce\r\n  </div>\r\n  <div class=\"descr-header-news\">\r\n    Offre d'emploi - Aide en ligne -\r\n    Publication de demande - Partenariat à l'étranger\r\n  </div>\r\n</div>\r\n\r\n<app-events></app-events>\r\n\r\n<app-footer></app-footer>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/popup-event/popup-event.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/popup-event/popup-event.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-popup\">\r\n  <div class=\"outside-popup\">\r\n    <img [src]=\"image\" alt=\"\" class=\"img-popup\">\r\n  </div>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"contain-title\">\r\n          <h2 class=\"main-title\">\r\n            {{titre}}\r\n          </h2>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12\" style=\"margin-top: -20px;\">\r\n        <div class=\"contain-date\" *ngIf=\"date\">\r\n          Le {{date}}\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"contain-posteur\" *ngIf=\"posteur\">\r\n          Par \"&nbsp; {{posteur}} &nbsp;\"\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"rightSide\">\r\n          <!-- <div class=\"desc\">\r\n            {{description}}\r\n          </div> -->\r\n          <div class=\"desc\" [innerHTML]=\"description | sanitizeHtml\"></div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\" *ngFor=\"let item of galerie\">\r\n        <img [src]=\"item\" alt=\"\" class=\"image\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/director-word/director-word.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/director-word/director-word.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <!--About Area Start-->\r\n    <div class=\"about-area\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-8 col-md-7 col-sm-6\" >\r\n                    <div class=\"about-container\">\r\n                      <h3 id=\"head-director-words\">Mot du Directeur</h3>\r\n                        <div id=\"director-words\">\r\n                          \r\n                          <div [innerHTML]=\"wordDirector | sanitizeHtml\">\r\n                          </div>\r\n                          <br>\r\n                        </div>\r\n                        <div class=\"timber\">\r\n                          - Ecole Nationale Informatique -\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-4 col-sm-6 contain-director\">\r\n                  <img [src]=\"imgDirector\" alt=\"\" id=\"imgDirector\">\r\n                  <p class=\"name-director\">\r\n                    {{nameDirector}}\r\n                  </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  <!--End of About Area-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/formations/formations.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/formations/formations.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content container-fluid\">\r\n  <div class=\"row row-title-actu\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"section-title-wrapper\">\r\n            <div class=\"section-title\">\r\n                <h4>formations</h4>\r\n                <p>\r\n                  Les formations offertes par l'Ecole\r\n                </p>\r\n                <div class=\"bottomy\">\r\n                  <p class=\"bottomy-one\"></p>\r\n                  <div class=\"bottomy-center\">\r\n                    <fa name=\"globe\"></fa>\r\n                  </div>\r\n                  <p class=\"bottomy-two\"></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n                  <!--Teachers Area Start-->\r\n                  <div class=\"teachers-area padding-top\">\r\n                    <div class=\"container-fluid contain-area\">\r\n                        <div class=\"row\">\r\n                              <div class=\"col-lg-4\" *ngFor=\"let item of formations; let i = index\" [ngClass]=\"{'col-lg-12': formations.length == 1,'col-lg-6': formations.length == 2, 'col-lg-4' : formations.length > 2}\">\r\n                                <div class=\"single-teacher-item\">\r\n                                    <div class=\"single-teacher-image\">\r\n                                    </div>\r\n                                    <!-- [ngClass]=\"{'one': i == 0, 'two': i == 1, 'three': i == 2}\" -->\r\n                                    <div class=\"single-teacher-text\"\r\n                                    [ngStyle]=\"{background: 'url('+ item.photo +')', 'background-size': 'cover',\r\n                                    'background-position': 'center'}\">\r\n                                      <h3><a>{{item.libelle}}</a></h3>\r\n                                        <h4 *ngIf=\"item.libelle == txt1\">Bac + 3</h4>\r\n                                        <h4 *ngIf=\"item.libelle == txt2\">Bac + 4</h4>\r\n                                        <h4 *ngIf=\"item.libelle == txt3\">Bac + 5</h4>\r\n                                      <p class=\"descr-formation\" [innerHTML]=\"item.description | sanitizeHtml\">\r\n                                      </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12\" *ngIf=\"noNews\">\r\n                              <div class=\"no-news\">\r\n                                Aucune donnée disponible\r\n                              </div>\r\n                            </div>\r\n\r\n                            <!-- <div class=\"col-lg-4 col-12\">\r\n                                <div class=\"single-teacher-item\">\r\n                                    <div class=\"single-teacher-image\">\r\n                                    </div>\r\n                                    <div class=\"single-teacher-text one\">\r\n                                        <h3><a>LICENCE</a></h3>\r\n                                        <h4>Bac + 3</h4>\r\n                                        <p>\r\n                                          Obtention d'un diplôme de Licence Professionnelle,\r\n                                          validé par l'Université de Fianarantsoa et par l'Etat.\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div> -->\r\n                            <!-- <div class=\"col-lg-4 col-12\">\r\n                                <div class=\"single-teacher-item\">\r\n                                    <div class=\"single-teacher-image\">\r\n                                    </div>\r\n                                    <div class=\"single-teacher-text two\">\r\n                                        <h3><a>MASTER</a></h3>\r\n                                        <h4>Bac + 5</h4>\r\n                                        <p>\r\n                                          Obtention d'un diplôme de Master Professionnel,\r\n                                          validé par l'Université de Fianarantsoa et par l'Etat.\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div> -->\r\n                            <!-- <div class=\"col-lg-4 col-12\">\r\n                                <div class=\"single-teacher-item \">\r\n                                    <div class=\"single-teacher-image\">\r\n                                    </div>\r\n                                    <div class=\"single-teacher-text three\">\r\n                                        <h3><a>DOCTORAT</a></h3>\r\n                                        <h4>Bac + 8</h4>\r\n                                        <p>\r\n                                          Obtention du doctorat, validé par l'Université de Fianarantsoa et par l'Etat.\r\n                                          Dans le but de continuer l'epanouissement\r\n                                          des connaissances en informatique.\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--End of Teachers Area-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<app-services-party></app-services-party>\n\n<app-director-word></app-director-word>\n\n<app-news></app-news>\n\n<app-formations></app-formations>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/news/news.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/news/news.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("                <div class=\"container-fluid\">\r\n                <div class=\"course-area section-padding\">\r\n                  <div class=\"container-fluid contain-actu\">\r\n                      <div class=\"row row-title-actu\">\r\n                          <div class=\"col-md-12\">\r\n                              <div class=\"section-title-wrapper\">\r\n                                  <div class=\"section-title\">\r\n                                      <h4>actualités</h4>\r\n                                      <p>\r\n                                        Les 3 dernières actualités à la une\r\n                                      </p>\r\n                                      <div class=\"bottomy\">\r\n                                        <p class=\"bottomy-one\"></p>\r\n                                        <div class=\"bottomy-center\">\r\n                                          <fa name=\"globe\"></fa>\r\n                                        </div>\r\n                                        <p class=\"bottomy-two\"></p>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"row row-actu\">\r\n                          <div class=\"col-lg-4\" *ngFor=\"let item of actuality\">\r\n                              <div class=\"single-item\">\r\n                                  <div class=\"single-item-image overlay-effect\">\r\n                                      <img [src]=\"item.image\" alt=\"\" id=\"imgActu\">\r\n                                  </div>\r\n                                  <div class=\"single-item-text\">\r\n                                      <h4><a>{{item.titre}}</a></h4>\r\n                                      <div class=\"single-item-text-info\">\r\n                                          <span> <fa name=\"pen\"></fa> <span>{{item.posteur}}</span></span> <br>\r\n                                          <span><fa name=\"calendar\"></fa> <span>{{item.date_mise_jour}}</span></span>\r\n                                      </div>\r\n                                      <!-- <p>\r\n                                        {{item.description.substring(0, 150)}}...\r\n                                      </p> -->\r\n                                      <div class=\"p\" [innerHTML]=\"item.description.substring(0, 140)+'...' | sanitizeHtml\">\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"button-bottom\" (click)=\"seeActu(item.titre, item.date_mise_jour, item.posteur)\">\r\n                                      <a class=\"button-default\">Voir l'actualité</a>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-lg-12\" *ngIf=\"noActu\">\r\n                            <div class=\"no-actu\">\r\n                              Aucune actualité disponible\r\n                            </div>\r\n                          </div>\r\n                          <br>\r\n                          <!-- <div class=\"col-md-12 col-sm-12 text-center\" id=\"content-button-large\" *ngIf=\"!noActu\">\r\n                              <a class=\"button-default button-large\" (click)=\"allNews()\">\r\n                                Les actualités\r\n                                <i class=\"fas fa-chevron-right\"></i>\r\n                              </a>\r\n                          </div> -->\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("                <!--Newsletter Area Start-->\r\n                <div class=\"newsletter-area\">\r\n                  <div class=\"container\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-lg-5 col-md-5\">\r\n                              <div class=\"newsletter-content\">\r\n                                  <h2>Recevoir</h2>\r\n                                  <h2>DES NOUVELLES</h2>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-lg-7 col-md-7\">\r\n                              <div class=\"newsletter-form angle\">\r\n                                  <form action=\"#\" id=\"mc-form\" class=\"mc-form footer-newsletter fix\">\r\n                                      <div class=\"subscribe-form\">\r\n                                          <input [(ngModel)]=\"emailNewsletter\" id=\"mc-email\" type=\"email\" name=\"email\" placeholder=\"Votre adresse email...\">\r\n                                          <button id=\"mc-submit\" type=\"submit\" (click)=\"newsletter()\">S'INSCRIRE</button>\r\n                                      </div>\r\n                                  </form>\r\n                                  <!-- mailchimp-alerts Start -->\r\n                                  <div class=\"mailchimp-alerts text-centre fix pull-right\">\r\n                                      <div class=\"mailchimp-submitting\"></div><!-- mailchimp-submitting end -->\r\n                                      <div class=\"mailchimp-success\"></div><!-- mailchimp-success end -->\r\n                                      <div class=\"mailchimp-error\"></div><!-- mailchimp-error end -->\r\n                                  </div>\r\n                                  <!-- mailchimp-alerts end -->\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <!--End of Newsletter Area-->\r\n              <!--Footer Widget Area Start-->\r\n              <div class=\"footer-widget-area\">\r\n                  <div class=\"container\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-lg-3 col-md-6 col-12\">\r\n                              <div class=\"single-footer-widget\">\r\n                                  <div class=\"footer-logo\">\r\n                                      <a>\r\n                                        <img [src]=\"logo\" alt=\"\" id=\"footer-logo\" (click)=\"home()\">\r\n                                      </a>\r\n                                  </div>\r\n                                  <p>\r\n                                    Rejoignez-nous sur :\r\n                                  </p>\r\n                                  <div class=\"social-icons\">\r\n                                      <a [href]=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n                                      <a [href]=\"youtube\"><i class=\"fa fa-youtube\"></i></a>\r\n                                      <a [href]=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n                                      <a [href]=\"instagram\"><i class=\"fa fa-instagram\"></i></a>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-lg-3 col-md-6 col-12\">\r\n                              <div class=\"single-footer-widget\">\r\n                                  <h3>INFORMATIONS</h3>\r\n                                  <a [href]=\"callPhone\">\r\n                                  <i class=\"fa fa-phone\"></i>{{telephone}}</a>\r\n                                  <span><i class=\"fa fa-envelope\"></i>{{email}}</span>\r\n                                  <span><i class=\"fa fa-globe\"></i>{{site}}</span>\r\n                                  <span><i class=\"fa fa-map-marker\"></i>{{adresse}}</span>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-lg-3 col-md-6 col-12\">\r\n                              <div class=\"single-footer-widget\">\r\n                                  <h3>Pages</h3>\r\n                                  <ul class=\"footer-list\" *ngFor=\"let item of menu\">\r\n                                      <li><a [href]=\"item.slug\">{{item.titre}}</a></li>\r\n                                  </ul>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-lg-3 col-md-6 col-12\">\r\n                              <div class=\"single-footer-widget\">\r\n                                  <div>\r\n                                      <img [src]=\"logoUf\" alt=\"\">\r\n                                  </div>\r\n                                \r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n              <!--End of Footer Widget Area-->\r\n              <!--Footer Area Start-->\r\n              <footer class=\"footer-area\">\r\n                  <div class=\"container\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-lg-6 col-md-7 col-12\">\r\n                              <span>Copyright &copy; ENI 2021\r\n                                &nbsp;&nbsp;\r\n                                <a href=\"#\">ICT Event</a></span>\r\n                          </div>\r\n                          <div class=\"col-lg-6 col-md-5 col-12\">\r\n                              <div class=\"column-right\">\r\n                                  <span>Privacy Policy , Terms &amp; Conditions</span>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </footer>\r\n              <!--End of Footer Area-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header></app-main-header>\r\n\r\n  <section id=\"carouselExampleFade\" [ngClass]=\"{'noData': news.length == 0}\" class=\"carousel slide carousel-fade slider\" data-ride=\"carousel\">\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item\" *ngFor=\"let item of news; let i = index\" [ngClass]=\"{active: i==0}\">\r\n        <img [src]=\"item.image\" class=\"d-block\" alt=\"...\">\r\n        <div class=\"carousel-caption\">\r\n            <h2>{{item.titre}}</h2>\r\n            <p [innerHTML]=\"item.description | sanitizeHtml\">\r\n            </p>\r\n            <!-- <p>{{item.description}}</p> -->\r\n            <div class=\"button-01\" (click)=\"seeNews(item.titre, item.date_mise_jour, item.posteur)\">\r\n                <ul>\r\n                    <li class=\"btn btn-default btn_continue\"><a>Continuer</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n\r\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"prev\">\r\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"carousel-control-next\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"next\">\r\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Next</span>\r\n        </a>\r\n</section>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/main-header/main-header.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/main-header/main-header.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-header-slide id=\"with-slide\"></app-top-header-slide>\r\n\r\n<app-top-header id=\"no-slide\"></app-top-header>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/top-header-slide/top-header-slide.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/top-header-slide/top-header-slide.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"mimi-main\">\r\n\r\n<div class=\"top-content\" id=\"top-content\">\r\n  <div class=\"first-content\">\r\n    <div class=\"content-logo\">\r\n      <div class=\"univ-eni\">\r\n        Ecole Nationale Informatique\r\n      </div>\r\n      <div class=\"mobile-univ-eni\">\r\n        <p class=\"firstly\">\r\n          Ecole\r\n        </p>\r\n        <p class=\"secondly\">\r\n          Nationale Informatique\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content-action-header\">\r\n      <div class=\"menu-action\">\r\n        <div class=\"p\" (click)=\"login()\">\r\n          <img [src]=\"profile\" alt=\"\" id=\"img-profile\">\r\n          <span>\r\n            Se Connecter\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"menu-action\">\r\n        <img [src]=\"langues[0].flag\" alt=\"\" id=\"flags\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content-logo-uf\"  (click)=\"home()\">\r\n      <img [src]=\"logoUf\" alt=\"\" id=\"logo-uf\">\r\n      <img [src]=\"logo\" alt=\"logo-UF\" id=\"logo-eni\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"second-content\">\r\n    <div class=\"my-menu\" *ngFor=\"let item of menu\">\r\n      <a [href]=\"item.slug\">\r\n        {{item.titre}}\r\n      </a>\r\n    </div>\r\n    <div class=\"my-menu-2\" id=\"best-menu-mobile\">\r\n      <div class=\"bar\"></div>\r\n      <div class=\"bar\"></div>\r\n      <div class=\"bar\"></div>\r\n    </div>\r\n    <div class=\"flag-mobile\">\r\n      <img [src]=\"langues[0].flag\" alt=\"\" id=\"flags\">\r\n    </div>\r\n  </div>\r\n  <div id=\"progress-man\" *ngIf=\"isLoading\">\r\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"external-content\" id=\"external-content\">\r\n  <div id=\"mobile\" class=\"demo1\">\r\n    <ul id=\"nav\">\r\n      <li *ngFor=\"let item of menu\" id=\"menu-colapse\">\r\n        <a [href]=\"item.slug\" style=\"color: inherit;\">\r\n          {{item.titre}}\r\n        </a>\r\n      </li>\r\n      <li id=\"login-mobile\" (click)=\"login()\">\r\n        <img [src]=\"profile\" alt=\"\" id=\"img-profile-mobile\">\r\n        <span>\r\n          Se Connecter\r\n        </span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/top-header/top-header.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/top-header/top-header.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top-content\" id=\"top-content\">\r\n  <div class=\"first-content\">\r\n    <div class=\"content-logo\">\r\n      <div class=\"univ-fianar\">\r\n        <img [src]=\"logoUf\" alt=\"\" id=\"uf\">\r\n        <p>\r\n          Université de Fianarantsoa\r\n        </p>\r\n        <img [src]=\"logoUf\" alt=\"\" id=\"uf\">\r\n      </div>\r\n      <div class=\"univ-eni\">\r\n        ECOLE NATIONALE INFORMATIQUE\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content-action-header\">\r\n      <div class=\"menu-action\">\r\n        <div class=\"p\" (click)=\"login()\">\r\n          <img [src]=\"profile\" alt=\"\" id=\"img-profile\">\r\n          <span>\r\n           Se Connecter\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"menu-action\">\r\n        <img [src]=\"langues[0].flag\" alt=\"\" id=\"flags\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content-logo-uf\"  (click)=\"home()\">\r\n      <!--<div id='warped1'>\r\n        <span class='w0'>E</span><span class='w1'>n</span><span class='w2'>s</span><span class='w3'>e</span><span class='w4'>m</span><span class='w5'>b</span><span class='w6'>l</span><span class='w7'>e</span>\r\n      </div>-->\r\n      <img [src]=\"logo\" alt=\"logo-UF\" id=\"logo-eni\">\r\n      <!--<div id='warped1'>\r\n      <div id='warped'>\r\n        <span class='w0'>E</span><span class='w1'>x</span><span class='w2'>c</span><span class='w3'>e</span><span class='w4'>l</span><span class='w5'>l</span><span class='w6'>e</span><span class='w7'>n</span><span class='w8'>c</span><span class='w9'>e</span>\r\n    </div>\r\n    </div>-->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"second-content\">\r\n    <div class=\"my-menu\" *ngFor=\"let item of menu\">\r\n      <a [href]=\"item.slug\">\r\n        {{item.titre}}\r\n      </a>\r\n    </div>\r\n    <div class=\"my-menu-2\" id=\"best-menu-mobile-main\">\r\n      <div class=\"bar\"></div>\r\n      <div class=\"bar\"></div>\r\n      <div class=\"bar\"></div>\r\n    </div>\r\n    <div class=\"flag-mobile\">\r\n      <img [src]=\"langues[0].flag\" alt=\"\" id=\"flags\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"external-content\" id=\"external-content-main\">\r\n  <div id=\"mobile-main\" class=\"demo2\">\r\n    <ul id=\"nav\">\r\n      <li *ngFor=\"let item of menu\" id=\"menu-colapse\">\r\n        <a [href]=\"item.slug\" style=\"color: inherit;\">\r\n          {{item.titre}}\r\n        </a>\r\n      </li>\r\n      <li id=\"login-mobile\" (click)=\"login()\">\r\n        <img [src]=\"profile\" alt=\"\" id=\"img-profile-mobile\">\r\n        <span style=\"font-family: raleway;\">\r\n          Se Connecter\r\n        </span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<div id=\"progress-man\" *ngIf=\"isLoading\">\r\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/services-party/services-party.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/services-party/services-party.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"bg-01\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n              <div class=\"se-box\">\n                  <div class=\"icon\">\n                    <i class=\"fas fa-university\"></i>\n                  </div>\n                  <div class=\"content\">\n                      <h3>Etablissement</h3>\n                      <p>\n                        Public d'enseignement supérieur et de recherche\n                      </p>\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n            <div class=\"se-box\">\n                <div class=\"icon\">\n                  <i class=\"fas fa-graduation-cap\"></i>\n                </div>\n                <div class=\"content\">\n                    <h3>Diplomés</h3>\n                    <p>\n                      Issu de la pepinière des élites informatiques Malgache\n                    </p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n            <div class=\"se-box\">\n                <div class=\"icon\">\n                  <i class=\"fas fa-chalkboard-teacher\"></i>\n                </div>\n                <div class=\"content\">\n                    <h3>Professeurs</h3>\n                    <p>\n                      Diplomés et experimentés ayant parcouru le monde\n                    </p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n            <div class=\"se-box\">\n                <div class=\"icon\">\n                  <i class=\"fas fa-handshake\"></i>\n                </div>\n                <div class=\"content\">\n                    <h3>Partenariats</h3>\n                    <p>Au niveau national et international</p>\n                </div>\n            </div>\n        </div>\n      </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/slide-top/slide-top.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slide-top/slide-top.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"scroll-to-top\" [ngClass]=\"{'show-scrollTop': windowScrolled}\">\r\n  <button type=\"button\" class=\"btn active btn_top\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"scrollToTop()\">\r\n      <i class=\"fas fa-chevron-up faUp\" ></i>\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_clubs_clubs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/clubs/clubs.component */ "./src/app/components/clubs/clubs.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_details_news_all_actuality_actuality_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/details/news-all/actuality/actuality.component */ "./src/app/components/details/news-all/actuality/actuality.component.ts");
/* harmony import */ var _components_details_news_all_news_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/details/news-all/news-all.component */ "./src/app/components/details/news-all/news-all.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    },
    {
        path: 'login',
        component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'annonces',
        component: _components_details_news_all_news_all_component__WEBPACK_IMPORTED_MODULE_5__["NewsAllComponent"]
    },
    {
        path: 'evenements/:type',
        component: _components_details_news_all_actuality_actuality_component__WEBPACK_IMPORTED_MODULE_4__["ActualityComponent"]
    },
    {
        path: 'evenements/:type/:titre/:date/:posteur',
        component: _components_details_news_all_actuality_actuality_component__WEBPACK_IMPORTED_MODULE_4__["ActualityComponent"]
    },
    {
        path: 'evenements/:titre/:date/:posteur',
        component: _components_details_news_all_actuality_actuality_component__WEBPACK_IMPORTED_MODULE_4__["ActualityComponent"]
    },
    {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    },
    {
        path: 'Apropos',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    },
    {
        path: 'clubs',
        component: _components_clubs_clubs_component__WEBPACK_IMPORTED_MODULE_1__["ClubsComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'webcupFront';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sanitize-html.pipe */ "./src/app/sanitize-html.pipe.ts");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var _services_annonces_annonces_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/annonces/annonces.service */ "./src/app/services/annonces/annonces.service.ts");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/login/login.service */ "./src/app/services/login/login.service.ts");
/* harmony import */ var _services_contact_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/contact/contact.service */ "./src/app/services/contact/contact.service.ts");
/* harmony import */ var _services_newsletter_newsletter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/newsletter/newsletter.service */ "./src/app/services/newsletter/newsletter.service.ts");
/* harmony import */ var _services_news_news_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/news/news.service */ "./src/app/services/news/news.service.ts");
/* harmony import */ var _services_Footer_footer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/Footer/footer.service */ "./src/app/services/Footer/footer.service.ts");
/* harmony import */ var _services_Header_header_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/Header/header.service */ "./src/app/services/Header/header.service.ts");
/* harmony import */ var _services_configurations_configurations_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/configurations/configurations.service */ "./src/app/services/configurations/configurations.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _components_news_news_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/news/news.component */ "./src/app/components/news/news.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_formations_formations_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/formations/formations.component */ "./src/app/components/formations/formations.component.ts");
/* harmony import */ var _components_director_word_director_word_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/director-word/director-word.component */ "./src/app/components/director-word/director-word.component.ts");
/* harmony import */ var _layout_header_top_header_top_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layout/header/top-header/top-header.component */ "./src/app/layout/header/top-header/top-header.component.ts");
/* harmony import */ var _layout_services_party_services_party_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layout/services-party/services-party.component */ "./src/app/layout/services-party/services-party.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _components_details_news_all_news_all_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/details/news-all/news-all.component */ "./src/app/components/details/news-all/news-all.component.ts");
/* harmony import */ var _components_details_news_all_actuality_actuality_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/details/news-all/actuality/actuality.component */ "./src/app/components/details/news-all/actuality/actuality.component.ts");
/* harmony import */ var _components_details_news_all_events_events_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/details/news-all/events/events.component */ "./src/app/components/details/news-all/events/events.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng2-animate-on-scroll */ "./node_modules/ng2-animate-on-scroll/fesm2015/ng2-animate-on-scroll.js");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_about_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/about/scroll-spy.directive */ "./src/app/components/about/scroll-spy.directive.ts");
/* harmony import */ var _slide_top_slide_top_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./slide-top/slide-top.component */ "./src/app/slide-top/slide-top.component.ts");
/* harmony import */ var _components_details_news_all_popup_event_popup_event_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/details/news-all/popup-event/popup-event.component */ "./src/app/components/details/news-all/popup-event/popup-event.component.ts");
/* harmony import */ var _layout_header_top_header_slide_top_header_slide_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./layout/header/top-header-slide/top-header-slide.component */ "./src/app/layout/header/top-header-slide/top-header-slide.component.ts");
/* harmony import */ var _layout_header_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./layout/header/main-header/main-header.component */ "./src/app/layout/header/main-header/main-header.component.ts");
/* harmony import */ var _components_clubs_clubs_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/clubs/clubs.component */ "./src/app/components/clubs/clubs.component.ts");
/* harmony import */ var _components_clubs_publications_publications_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/clubs/publications/publications.component */ "./src/app/components/clubs/publications/publications.component.ts");










































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"])({
        entryComponents: [
            _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
            _components_details_news_all_popup_event_popup_event_component__WEBPACK_IMPORTED_MODULE_37__["PopupEventComponent"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
            _components_about_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_35__["ScrollSpyDirective"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
            _layout_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
            _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
            _components_news_news_component__WEBPACK_IMPORTED_MODULE_20__["NewsComponent"],
            _components_formations_formations_component__WEBPACK_IMPORTED_MODULE_22__["FormationsComponent"],
            _components_director_word_director_word_component__WEBPACK_IMPORTED_MODULE_23__["DirectorWordComponent"],
            _layout_header_top_header_top_header_component__WEBPACK_IMPORTED_MODULE_24__["TopHeaderComponent"],
            _layout_services_party_services_party_component__WEBPACK_IMPORTED_MODULE_25__["ServicesPartyComponent"],
            _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
            _components_details_news_all_news_all_component__WEBPACK_IMPORTED_MODULE_28__["NewsAllComponent"],
            _components_details_news_all_actuality_actuality_component__WEBPACK_IMPORTED_MODULE_29__["ActualityComponent"],
            _components_details_news_all_events_events_component__WEBPACK_IMPORTED_MODULE_30__["EventsComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_33__["ContactComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_34__["AboutComponent"],
            _slide_top_slide_top_component__WEBPACK_IMPORTED_MODULE_36__["SlideTopComponent"],
            _components_details_news_all_popup_event_popup_event_component__WEBPACK_IMPORTED_MODULE_37__["PopupEventComponent"],
            _layout_header_top_header_slide_top_header_slide_component__WEBPACK_IMPORTED_MODULE_38__["TopHeaderSlideComponent"],
            _layout_header_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_39__["MainHeaderComponent"],
            _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_1__["SanitizeHtml"],
            _components_clubs_clubs_component__WEBPACK_IMPORTED_MODULE_40__["ClubsComponent"],
            _components_clubs_publications_publications_component__WEBPACK_IMPORTED_MODULE_41__["PublicationsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_32__["AnimateOnScrollModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatListModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_31__["AngularFontAwesomeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"]
        ],
        providers: [
            _services_configurations_configurations_service__WEBPACK_IMPORTED_MODULE_10__["ConfigurationsService"],
            _services_Header_header_service__WEBPACK_IMPORTED_MODULE_9__["HeaderService"],
            _services_Footer_footer_service__WEBPACK_IMPORTED_MODULE_8__["FooterService"],
            _services_news_news_service__WEBPACK_IMPORTED_MODULE_7__["NewsService"],
            _services_newsletter_newsletter_service__WEBPACK_IMPORTED_MODULE_6__["NewsletterService"],
            _services_contact_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"],
            _services_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _services_annonces_annonces_service__WEBPACK_IMPORTED_MODULE_3__["AnnoncesService"],
            _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"],
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_27__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: { duration: 2000 } }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cc {\n  background-color: whitesmoke;\n}\n\n.main {\n  width: 100%;\n  height: 400px;\n  background-image: url('a-propos-de-nous.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0.7;\n  padding-top: 50px;\n  padding-left: 50px;\n}\n\n.main-contain {\n  padding: 20px;\n  width: 300px;\n  border: 2px solid #0c2d50;\n  color: #0c2d50;\n}\n\n.main-contain h3 {\n  font-size: 50px;\n  letter-spacing: 25px;\n}\n\n.main-contain p {\n  letter-spacing: 4px;\n}\n\n.bottomy {\n  width: 25%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.bottomy-one, .bottomy-two {\n  width: 50%;\n  height: 3px;\n  background-color: #0c2d50;\n}\n\n.bottomy-center {\n  margin-left: 5%;\n  margin-right: 5%;\n  position: relative;\n  bottom: 15px;\n}\n\n.bottomy-center i {\n  font-size: 30px;\n}\n\n.main-title {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n  color: #0c2d50;\n}\n\n.main-title h3 {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 25px;\n  letter-spacing: 5px;\n}\n\n/*----------------------------------------*/\n\n/*  17.1 Teachers Area\n/*----------------------------------------*/\n\n.teachers-area {\n  padding: 0 0 50px;\n  margin-top: 40px;\n}\n\n.single-teacher-item {\n  box-shadow: 1px 0 5px rgba(0, 0, 0, 0.2);\n  position: relative;\n  transition: all 0.5s !important;\n  cursor: pointer;\n}\n\n.single-teacher-item:hover {\n  box-shadow: 0 6px 20px rgba(34, 30, 31, 0.3);\n}\n\n.single-teacher-image > a {\n  display: inline-block;\n  position: relative;\n}\n\n.single-teacher-image > a img, .single-teacher-image > a {\n  width: 100%;\n}\n\n.single-teacher-image > a:after {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  position: absolute;\n  top: 0;\n  transition: all 0.3s ease 0s;\n  width: 100%;\n}\n\n.single-teacher-item:hover .single-teacher-image > a:after {\n  opacity: 1;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n}\n\n.single-teacher-text {\n  background: #f6f6f6 none repeat scroll 0 0;\n  border-bottom: 3px solid #0c2d50;\n  padding: 20px 26px 90px;\n  text-align: center;\n  transition: all 0.4s;\n}\n\n.single-teacher-item:hover .single-teacher-text {\n  margin-top: -45px;\n  padding: 20px 26px 66px;\n  position: absolute;\n  z-index: 9;\n}\n\n.single-teacher-text > h3 {\n  font-family: raleway;\n  font-weight: 600;\n  margin-bottom: 4px;\n  padding-top: 20px;\n  font-size: 24px;\n}\n\n.single-teacher-item:hover .single-teacher-text > h3 {\n  padding-top: 0;\n}\n\n.single-teacher-text > h3 a {\n  color: #222222;\n  transition: all 0.3s;\n}\n\n.single-teacher-text > h4 {\n  font-family: raleway;\n  font-weight: 500;\n}\n\n.single-teacher-text > p {\n  display: none;\n  padding-top: 13px;\n}\n\n.single-teacher-item:hover .single-teacher-text p {\n  display: block;\n}\n\n.social-links > a {\n  border: 1px solid #2d3e50;\n  border-radius: 50%;\n  color: #2d3e50;\n  display: inline-block;\n  font-size: 14px;\n  height: 27px;\n  line-height: 25px;\n  margin: 0 3px;\n  text-align: center;\n  width: 27px;\n}\n\n.social-links > a:hover {\n  color: #ffffff;\n}\n\n.social-links {\n  bottom: 38px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  width: 100%;\n  transition: all 0.3s ease 0s;\n}\n\n.single-teacher-item:hover .social-links {\n  bottom: 25px;\n}\n\n.single-course-details {\n  background: #f6f6f6 none repeat scroll 0 0;\n  border-bottom: 3px solid #0c2d50;\n  margin-bottom: 80px;\n  padding: 33px 0;\n}\n\n.single-course-details .single-item-text {\n  padding-right: 48px;\n}\n\n.course-details-area a img {\n  margin-left: -35px;\n}\n\n.single-course-details a {\n  display: block;\n}\n\n.single-course-details .col-md-6:first-child {\n  padding-right: 3px;\n}\n\n.details {\n  margin-left: 10%;\n  margin-right: 10%;\n  height: 500px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  padding-right: 20px;\n}\n\n.details::-webkit-scrollbar {\n  width: 3px;\n  background: white;\n}\n\n.details h3 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  white-space: nowrap;\n  width: 30%;\n  padding-bottom: 5px;\n  border-bottom: 3px solid #0c2d50;\n}\n\n.details h3 i {\n  margin-right: 2px;\n  /* width: 17px; */\n  font-size: 30px;\n  position: relative;\n  bottom: 3px;\n}\n\n.details div, .details p {\n  text-align: justify;\n}\n\n.space {\n  margin-bottom: 80px;\n}\n\n.mimi {\n  height: -15px;\n}\n\n.contain-img {\n  width: 100%;\n  height: 260px;\n  margin-top: 30px;\n}\n\n.contain-img img {\n  width: 100%;\n  height: 100%;\n}\n\n.overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #33333391;\n  overflow: hidden;\n  width: 0;\n  height: 90%;\n  transition: 0.5s ease;\n}\n\n.contain-img:hover .overlay {\n  width: 100%;\n}\n\n.text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  white-space: nowrap;\n}\n\n@media screen and (max-width: 480px) {\n  .details h3 {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    white-space: normal;\n    width: 100%;\n    padding-bottom: 5px;\n    border-bottom: 3px solid #0c2d50;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  .main {\n    padding-left: 0px;\n  }\n}\n\n.contain-text {\n  margin-top: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9FOlxcUHJvamV0c1xcV2ViY3VwXFxjb2RlX2Zyb250XFx3ZWJjdXBGcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsNEJBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBdkJhO0FDcUJmOztBREtBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRkY7O0FES0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQTdDYTtBQzJDZjs7QURLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBRElFO0VBQ0UsZUFBQTtBQ0ZKOztBRE1BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBbEVhO0FDK0RmOztBRE1BO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BLDJDQUFBOztBQUNBOzJDQUFBOztBQUVBO0VBQWdCLGlCQUFBO0VBQW1CLGdCQUFBO0FDRG5DOztBREVBO0VBQ0ksd0NBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQTRCLDRDQUFBO0FDRzVCOztBREZBO0VBQTJCLHFCQUFBO0VBQXVCLGtCQUFBO0FDT2xEOztBRE5BO0VBQTBELFdBQUE7QUNVMUQ7O0FEVEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZ0VBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUVBLDRCQUFBO0VBQ0EsV0FBQTtBQ1lKOztBRFZBO0VBQ0ksVUFBQTtFQUNBLGtFQUFBO0VBQ0EsMEJBQUE7QUNhSjs7QURYQTtFQUNJLDBDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNjSjs7QURaQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNlSjs7QURiQTtFQUNDLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2dCRDs7QURkQTtFQUFzRCxjQUFBO0FDa0J0RDs7QURqQkE7RUFBNkIsY0FBQTtFQUFnQixvQkFBQTtBQ3NCN0M7O0FEckJBO0VBQTJCLG9CQUFBO0VBQXNCLGdCQUFBO0FDMEJqRDs7QUR6QkE7RUFBMEIsYUFBQTtFQUFlLGlCQUFBO0FDOEJ6Qzs7QUQ3QkE7RUFBbUQsY0FBQTtBQ2lDbkQ7O0FEaENBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDbUNKOztBRGpDQTtFQUF5QixjQUFBO0FDcUN6Qjs7QURwQ0E7RUFDSSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFUSw0QkFBQTtBQ3VDWjs7QURyQ0E7RUFBMEMsWUFBQTtBQ3lDMUM7O0FEeENBO0VBQ0ksMENBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQzJDSjs7QUR6Q0E7RUFBMEMsbUJBQUE7QUM2QzFDOztBRDVDQTtFQUE0QixrQkFBQTtBQ2dENUI7O0FEL0NBO0VBQTBCLGNBQUE7QUNtRDFCOztBRGxEQTtFQUE4QyxrQkFBQTtBQ3NEOUM7O0FEcERBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN1REY7O0FEcERBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDdURGOztBRHBEQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDdURGOztBRG5EQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDc0RGOztBRG5EQTtFQUNFLG1CQUFBO0FDc0RGOztBRG5EQTtFQUNFLG1CQUFBO0FDc0RGOztBRG5EQTtFQUNFLGFBQUE7QUNzREY7O0FEbkRBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ3NERjs7QURuREE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ3NERDs7QUQ3Q0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDZ0RGOztBRDdDQTtFQUNFLFdBQUE7QUNnREY7O0FEN0NBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBR0EsZ0NBQUE7RUFDQSxtQkFBQTtBQ2dERjs7QUQ3Q0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdDQUFBO0VDZ0RGO0FBQ0Y7O0FEN0NBO0VBQ0U7SUFDRSxpQkFBQTtFQytDRjtBQUNGOztBRDVDQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUM4Q0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpcnN0LWNvbG9yIDogIzBjMmQ1MDtcclxuJHNlY29uZC1jb2xvciA6ICMwMDIyNDc7XHJcblxyXG4uY2Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9FTkkvYS1wcm9wb3MtZGUtbm91cy5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkZmlyc3QtY29sb3I7XHJcbiAgY29sb3I6ICRmaXJzdC1jb2xvcjtcclxufVxyXG5cclxuLm1haW4tY29udGFpbiBoMyB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAyNXB4O1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluIHAge1xyXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbn1cclxuXHJcbi5ib3R0b215IHtcclxuICB3aWR0aDogMjUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5ib3R0b215LW9uZSwgLmJvdHRvbXktdHdvIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRmaXJzdC1jb2xvcjtcclxufVxyXG5cclxuLmJvdHRvbXktY2VudGVyIHtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluLXRpdGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGNvbG9yOiAkZmlyc3QtY29sb3I7XHJcbn1cclxuXHJcbi5tYWluLXRpdGxlIGgzIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiAgMTcuMSBUZWFjaGVycyBBcmVhXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi50ZWFjaGVycy1hcmVhIHtwYWRkaW5nOiAwIDAgNTBweDsgbWFyZ2luLXRvcDogNDBweDt9XHJcbi5zaW5nbGUtdGVhY2hlci1pdGVtIHtcclxuICAgIGJveC1zaGFkb3c6IDFweCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIHtib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMzQsIDMwLCAzMSwgMC4zKTt9XHJcbi5zaW5nbGUtdGVhY2hlci1pbWFnZSA+IGEge2Rpc3BsYXk6IGlubGluZS1ibG9jazsgcG9zaXRpb246IHJlbGF0aXZlO31cclxuLnNpbmdsZS10ZWFjaGVyLWltYWdlID4gYSBpbWcsIC5zaW5nbGUtdGVhY2hlci1pbWFnZSA+IGEge3dpZHRoOiAxMDAlO31cclxuLnNpbmdsZS10ZWFjaGVyLWltYWdlID4gYTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLWltYWdlID4gYTphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXCI7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcclxufVxyXG4uc2luZ2xlLXRlYWNoZXItdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGZpcnN0LWNvbG9yO1xyXG4gICAgcGFkZGluZzogMjBweCAyNnB4IDkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG4uc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciAuc2luZ2xlLXRlYWNoZXItdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDVweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjZweCA2NnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG4uc2luZ2xlLXRlYWNoZXItdGV4dCA+IGgzIHtcclxuXHRmb250LWZhbWlseTogcmFsZXdheTtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDRweDtcclxuXHRwYWRkaW5nLXRvcDogMjBweDtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBoMyB7cGFkZGluZy10b3A6IDA7fVxyXG4uc2luZ2xlLXRlYWNoZXItdGV4dCA+IGgzIGEge2NvbG9yOiAjMjIyMjIyOyB0cmFuc2l0aW9uOiBhbGwgMC4zczt9XHJcbi5zaW5nbGUtdGVhY2hlci10ZXh0ID4gaDQge2ZvbnQtZmFtaWx5OiByYWxld2F5OyBmb250LXdlaWdodDogNTAwO31cclxuLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBwIHtkaXNwbGF5OiBub25lOyBwYWRkaW5nLXRvcDogMTNweDt9XHJcbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIC5zaW5nbGUtdGVhY2hlci10ZXh0IHAge2Rpc3BsYXk6IGJsb2NrO31cclxuLnNvY2lhbC1saW5rcyA+IGEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJkM2U1MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjMmQzZTUwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbn1cclxuLnNvY2lhbC1saW5rcyA+IGE6aG92ZXIge2NvbG9yOiAjZmZmZmZmO31cclxuLnNvY2lhbC1saW5rcyB7XHJcbiAgICBib3R0b206IDM4cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwc1xyXG59XHJcbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIC5zb2NpYWwtbGlua3Mge2JvdHRvbTogMjVweDt9XHJcbi5zaW5nbGUtY291cnNlLWRldGFpbHMge1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRmaXJzdC1jb2xvcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICBwYWRkaW5nOiAzM3B4IDA7XHJcbn1cclxuLnNpbmdsZS1jb3Vyc2UtZGV0YWlscyAuc2luZ2xlLWl0ZW0tdGV4dCB7cGFkZGluZy1yaWdodDogNDhweDt9XHJcbi5jb3Vyc2UtZGV0YWlscy1hcmVhIGEgaW1nIHttYXJnaW4tbGVmdDogLTM1cHg7fVxyXG4uc2luZ2xlLWNvdXJzZS1kZXRhaWxzIGEge2Rpc3BsYXk6IGJsb2NrO31cclxuLnNpbmdsZS1jb3Vyc2UtZGV0YWlscyAuY29sLW1kLTY6Zmlyc3QtY2hpbGQge3BhZGRpbmctcmlnaHQ6IDNweDt9XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmRldGFpbHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogM3B4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uZGV0YWlscyBoMyB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkZmlyc3QtY29sb3I7XHJcblxyXG59XHJcblxyXG4uZGV0YWlscyBoMyBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAvKiB3aWR0aDogMTdweDsgKi9cclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4uZGV0YWlscyBkaXYsIC5kZXRhaWxzIHAge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5zcGFjZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxufVxyXG5cclxuLm1pbWkge1xyXG4gIGhlaWdodDogLTE1cHg7XHJcbn1cclxuXHJcbi5jb250YWluLWltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNjBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uY29udGFpbi1pbWcgaW1nIHtcclxuIHdpZHRoOiAxMDAlO1xyXG4gaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vLyAuY29udGFpbi1pbWcge1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICB3aWR0aDogNTAlO1xyXG4vLyB9XHJcblxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzOTE7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDkwJTtcclxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxufVxyXG5cclxuLmNvbnRhaW4taW1nOmhvdmVyIC5vdmVybGF5IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5kZXRhaWxzIGgzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkZmlyc3QtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW4tdGV4dCB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG4iLCIuY2Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4ubWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRU5JL2EtcHJvcG9zLWRlLW5vdXMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDAuNztcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuLm1haW4tY29udGFpbiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzBjMmQ1MDtcbiAgY29sb3I6ICMwYzJkNTA7XG59XG5cbi5tYWluLWNvbnRhaW4gaDMge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAyNXB4O1xufVxuXG4ubWFpbi1jb250YWluIHAge1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xufVxuXG4uYm90dG9teSB7XG4gIHdpZHRoOiAyNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJvdHRvbXktb25lLCAuYm90dG9teS10d28ge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmQ1MDtcbn1cblxuLmJvdHRvbXktY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTVweDtcbn1cbi5ib3R0b215LWNlbnRlciBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubWFpbi10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgY29sb3I6ICMwYzJkNTA7XG59XG5cbi5tYWluLXRpdGxlIGgzIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qICAxNy4xIFRlYWNoZXJzIEFyZWFcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4udGVhY2hlcnMtYXJlYSB7XG4gIHBhZGRpbmc6IDAgMCA1MHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uc2luZ2xlLXRlYWNoZXItaXRlbSB7XG4gIGJveC1zaGFkb3c6IDFweCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgzNCwgMzAsIDMxLCAwLjMpO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItaW1hZ2UgPiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaW5nbGUtdGVhY2hlci1pbWFnZSA+IGEgaW1nLCAuc2luZ2xlLXRlYWNoZXItaW1hZ2UgPiBhIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaW5nbGUtdGVhY2hlci1pbWFnZSA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLWltYWdlID4gYTphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKVwiO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLXRleHQge1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMGMyZDUwO1xuICBwYWRkaW5nOiAyMHB4IDI2cHggOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLXRleHQge1xuICBtYXJnaW4tdG9wOiAtNDVweDtcbiAgcGFkZGluZzogMjBweCAyNnB4IDY2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBoMyB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIC5zaW5nbGUtdGVhY2hlci10ZXh0ID4gaDMge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBoMyBhIHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItdGV4dCA+IGg0IHtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zaW5nbGUtdGVhY2hlci10ZXh0ID4gcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xufVxuXG4uc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciAuc2luZ2xlLXRlYWNoZXItdGV4dCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zb2NpYWwtbGlua3MgPiBhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkM2U1MDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogIzJkM2U1MDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMjdweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbjogMCAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI3cHg7XG59XG5cbi5zb2NpYWwtbGlua3MgPiBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zb2NpYWwtbGlua3Mge1xuICBib3R0b206IDM4cHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciAuc29jaWFsLWxpbmtzIHtcbiAgYm90dG9tOiAyNXB4O1xufVxuXG4uc2luZ2xlLWNvdXJzZS1kZXRhaWxzIHtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzBjMmQ1MDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgcGFkZGluZzogMzNweCAwO1xufVxuXG4uc2luZ2xlLWNvdXJzZS1kZXRhaWxzIC5zaW5nbGUtaXRlbS10ZXh0IHtcbiAgcGFkZGluZy1yaWdodDogNDhweDtcbn1cblxuLmNvdXJzZS1kZXRhaWxzLWFyZWEgYSBpbWcge1xuICBtYXJnaW4tbGVmdDogLTM1cHg7XG59XG5cbi5zaW5nbGUtY291cnNlLWRldGFpbHMgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2luZ2xlLWNvdXJzZS1kZXRhaWxzIC5jb2wtbWQtNjpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cblxuLmRldGFpbHMge1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5kZXRhaWxzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAzcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZGV0YWlscyBoMyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMGMyZDUwO1xufVxuXG4uZGV0YWlscyBoMyBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIC8qIHdpZHRoOiAxN3B4OyAqL1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAzcHg7XG59XG5cbi5kZXRhaWxzIGRpdiwgLmRldGFpbHMgcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5zcGFjZSB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5taW1pIHtcbiAgaGVpZ2h0OiAtMTVweDtcbn1cblxuLmNvbnRhaW4taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjYwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5jb250YWluLWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMzkxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbn1cblxuLmNvbnRhaW4taW1nOmhvdmVyIC5vdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmRldGFpbHMgaDMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwYzJkNTA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5tYWluIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxufVxuLmNvbnRhaW4tdGV4dCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgb3BhY2l0eTogMC43O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_configurations_configurations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/configurations/configurations.service */ "./src/app/services/configurations/configurations.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AboutComponent = class AboutComponent {
    constructor(confService) {
        this.confService = confService;
        this.currentSection = 'information';
        this.img1 = "./../../../assets/images/ENI/etudiants.jpg";
        this.img2 = "./../../../assets/images/ENI/etablissement2.jpg";
        this.img3 = "./../../../assets/images/ENI/news.gif";
        this.information = null;
        this.historique = null;
        this.specification = null;
        this.mission = null;
    }
    onSectionChange(sectionId) {
        this.currentSection = sectionId;
    }
    scrollTo(section) {
        document.querySelector('#' + section)
            .scrollIntoView();
        document.getElementById("parentDiv").scrollTop -= 110;
    }
    ngOnInit() {
        this.getConf();
    }
    getConf() {
        this.confService.getConfigurations().subscribe((data) => {
            // console.log(data);
            data.forEach(el => {
                if (el.cle == "apropos_informations")
                    this.information = el.valeur;
                if (el.cle == "apropos_historiques")
                    this.historique = el.valeur;
                if (el.cle == "apropos_specifications")
                    this.specification = el.valeur;
                if (el.cle == "apropos_missions")
                    this.mission = el.valeur;
            });
            return data;
        }, err => {
            console.log(err);
        });
    }
};
AboutComponent.ctorParameters = () => [
    { type: _services_configurations_configurations_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationsService"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../director-word/responsive.css */ "./src/app/components/director-word/responsive.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/about/scroll-spy.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/about/scroll-spy.directive.ts ***!
  \**********************************************************/
/*! exports provided: ScrollSpyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function() { return ScrollSpyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScrollSpyDirective = class ScrollSpyDirective {
    constructor(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onScroll(event) {
        let currentSection;
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }
};
ScrollSpyDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScrollSpyDirective.prototype, "spiedTags", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ScrollSpyDirective.prototype, "sectionChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll', ['$event'])
], ScrollSpyDirective.prototype, "onScroll", null);
ScrollSpyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[scrollSpy]'
    })
], ScrollSpyDirective);



/***/ }),

/***/ "./src/app/components/auth/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/auth/login/login.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  padding-right: 0px;\n}\n\n.left-side {\n  padding: 30px;\n  height: auto;\n}\n\n.right-side {\n  overflow: hidden;\n}\n\n.right-side img {\n  max-width: 100%;\n}\n\n.main-one span {\n  margin-right: 20px;\n  font-size: 3vw;\n}\n\n.main-one {\n  margin-top: 18px;\n  font-size: 21px;\n  color: #044973;\n  font-weight: 500;\n  font-family: \"Font Awesome 5 Brands\";\n}\n\n.main-two {\n  margin-top: 20px;\n}\n\nbutton.btn_connecter {\n  margin-top: 15px;\n  background: #044973;\n  color: white;\n  width: 170px;\n  height: 60px;\n  border: none;\n  border-radius: 3px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 20px;\n}\n\nbutton.btn_connecter:hover {\n  background: #0c2d50f6;\n}\n\n.content-form-field {\n  background: transparent;\n  padding: 10px;\n  display: flex;\n  margin-bottom: 30px;\n  justify-content: center;\n}\n\n.content-btn {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.bar {\n  margin-top: 5px;\n  width: 100%;\n  height: 2px;\n  background-color: #0c2d50db;\n}\n\nimg#logo-eni-popup {\n  width: 200px;\n  top: -60px;\n  left: -60px;\n  position: absolute;\n  z-index: 0;\n}\n\n.forgot-pass {\n  /* margin: 10px; */\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 26px;\n  font-size: 18px;\n}\n\n.forgot-pass span {\n  font-weight: 500;\n  cursor: pointer;\n  color: #044973;\n}\n\n/*\n@media screen and (max-width: 880px) {\n  .right-side {\n    display: none !important;\n  }\n\n  .right-side img {\n    display: none !important;\n  }\n\n  .left-side {\n    width: 100vh !important;\n  }\n\n  .main-one {\n    font-size: 33px;\n  }\n\n  .main-one span {\n    font-size: 20px;\n    margin-right: 10px;\n  }\n}\n*/\n\n@media screen and (max-width: 460px) {\n  .left-side {\n    padding-top: 75px !important;\n    padding-left: 10px !important;\n    /* padding: 3px; */\n    height: auto;\n    padding-right: 25px !important;\n  }\n\n  img#logo-eni-popup {\n    width: 150px;\n    top: -50px;\n    left: -50px;\n    position: absolute;\n    z-index: 0;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .left-side {\n    padding-top: 80px !important;\n    padding-left: 15px !important;\n    height: auto;\n    padding-right: 30px !important;\n  }\n\n  .content-form-field {\n    background: transparent;\n    padding: 2px;\n    border: 1px solid #0c2d50;\n    border-radius: 100px;\n    padding-left: 17px !important;\n  }\n\n  .btn_connecter {\n    margin-top: 0px;\n  }\n}\n\n.loader {\n  color: #ffffff;\n  font-size: 6px;\n  margin: 10px auto;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: load4 1.3s infinite linear;\n  animation: load4 1.3s infinite linear;\n  transform: translateZ(0);\n}\n\n@-webkit-keyframes load4 {\n  0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n\n@keyframes load4 {\n  0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n\n.contain-txt {\n  margin-top: 0px;\n  border: 2px solid #044973;\n  padding: 20px;\n  width: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #044973;\n}\n\n.txt-one {\n  font-size: 30px;\n  letter-spacing: 28px;\n  font-weight: bold;\n}\n\n.txt-two {\n  word-spacing: 0px;\n  font-weight: 500;\n}\n\n.contain-error {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.contain-error p {\n  color: red;\n}\n\n.logotitle {\n  font-size: 30px;\n  margin-right: 30px;\n  font-weight: bolder;\n  margin-left: 40px;\n  margin-top: 15px;\n  color: whitesmoke;\n}\n\nimg#logologin {\n  width: 160px;\n}\n\n#loginheader {\n  background-color: #0c2d50;\n}\n\n@media screen and (max-width: 646px) {\n  .logotitle {\n    display: none;\n  }\n\n  #logologin {\n    text-align: center;\n  }\n\n  .logoimg {\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL0U6XFxQcm9qZXRzXFxXZWJjdXBcXGNvZGVfZnJvbnRcXHdlYmN1cEZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxhdXRoXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGtCQUFBO0FDSkY7O0FET0E7RUFHRSxhQUFBO0VBRUEsWUFBQTtBQ1BGOztBRFVBO0VBRUUsZ0JBQUE7QUNSRjs7QURXQTtFQUNFLGVBQUE7QUNSRjs7QURXQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FsQ1k7RUFtQ1osZ0JBQUE7RUFDQSxvQ0FBQTtBQ1JGOztBRFVBO0VBQ0UsZ0JBQUE7QUNQRjs7QURVQTtFQUNFLGdCQUFBO0VBQ0EsbUJBNUNZO0VBNkNaLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ1BGOztBRFVBO0VBS0UscUJBQUE7QUNYRjs7QURjQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUdBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNkRjs7QURpQkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ2RGOztBRGlCQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ2RGOztBRGlCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2RGOztBRGlCQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBM0dZO0FDNkZkOztBRGdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTs7QUF3QkE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsNkJBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSw4QkFBQTtFQ2JGOztFRGdCQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtFQ2JGO0FBQ0Y7O0FEZ0JBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtJQUNBLDhCQUFBO0VDZEY7O0VEZ0JBO0lBQ0UsdUJBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxvQkFBQTtJQUNBLDZCQUFBO0VDYkY7O0VEZ0JBO0lBQ0UsZUFBQTtFQ2JGO0FBQ0Y7O0FEaUJBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkNBQUE7RUFDQSxxQ0FBQTtFQUdBLHdCQUFBO0FDZkY7O0FEaUJBO0VBQ0U7SUFFRSxxSUFBQTtFQ2ZGO0VEa0JBO0lBQ0UsbUlBQUE7RUNoQkY7RURtQkE7SUFDRSxxSUFBQTtFQ2pCRjtFRG9CQTtJQUNFLHlJQUFBO0VDbEJGO0VEcUJBO0lBQ0UsdUlBQUE7RUNuQkY7RURzQkE7SUFDRSxtSUFBQTtFQ3BCRjtFRHVCQTtJQUNFLHlJQUFBO0VDckJGO0VEd0JBO0lBQ0Usb0lBQUE7RUN0QkY7QUFDRjs7QUR5QkE7RUFDRTtJQUVFLHFJQUFBO0VDeEJGO0VEMkJBO0lBQ0UsbUlBQUE7RUN6QkY7RUQ0QkE7SUFDRSxxSUFBQTtFQzFCRjtFRDZCQTtJQUNFLHlJQUFBO0VDM0JGO0VEOEJBO0lBQ0UsdUlBQUE7RUM1QkY7RUQrQkE7SUFDRSxtSUFBQTtFQzdCRjtFRGdDQTtJQUNFLHlJQUFBO0VDOUJGO0VEaUNBO0lBQ0Usb0lBQUE7RUMvQkY7QUFDRjs7QURtQ0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0ExUVk7QUN5T2Q7O0FEb0NBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNqQ0Y7O0FEb0NBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ2pDRjs7QURvQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNqQ0Y7O0FEb0NBO0VBQ0UsVUFBQTtBQ2pDRjs7QUQwQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3ZDRjs7QUQwQ0E7RUFDRSxZQUFBO0FDdkNGOztBRDBDQTtFQUNFLHlCQUFBO0FDdkNGOztBRDBDQTtFQUNFO0lBQ0UsYUFBQTtFQ3ZDRjs7RUR5Q0E7SUFDRSxrQkFBQTtFQ3RDRjs7RUR3Q0E7SUFDRSxZQUFBO0VDckNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZmlyc3QtY29sb3I6ICMwNDQ5NzM7XHJcbiRzZWNvbmQtY29sb3I6ICMwMDIyNDc7XHJcbiRjb2xvci13aGl0ZTogd2hpdGU7XHJcbiRyYWRpdXM6IDEwcHg7XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LXNpZGUge1xyXG4gIC8vcGFkZGluZy10b3A6IDUwcHggIWltcG9ydGFudDtcclxuICAvL3BhZGRpbmctbGVmdDogNTBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgLy8gd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yaWdodC1zaWRlIHtcclxuICAvLyB3aWR0aDogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5yaWdodC1zaWRlIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbi1vbmUgc3BhbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogM3Z3O1xyXG59XHJcblxyXG4ubWFpbi1vbmUge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIGNvbG9yOiAkZmlyc3QtY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBCcmFuZHNcIjtcclxufVxyXG4ubWFpbi10d28ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG5fY29ubmVjdGVyIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICRmaXJzdC1jb2xvcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5idXR0b24uYnRuX2Nvbm5lY3Rlcjpob3ZlciB7XHJcbiAgLy8gYm9yZGVyOiAycHggc29saWQgJGZpcnN0LWNvbG9yO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8vIGNvbG9yOiAkZmlyc3QtY29sb3I7XHJcbiAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcclxuICBiYWNrZ3JvdW5kOiAjMGMyZDUwZjY7XHJcbn1cclxuXHJcbi5jb250ZW50LWZvcm0tZmllbGQge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLy9ib3JkZXI6IDFweCBzb2xpZCAkZmlyc3QtY29sb3I7XHJcbiAgLy9ib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAvL2ZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5iYXIge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwZGI7XHJcbn1cclxuXHJcbmltZyNsb2dvLWVuaS1wb3B1cCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIHRvcDogLTYwcHg7XHJcbiAgbGVmdDogLTYwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzcyB7XHJcbiAgLyogbWFyZ2luOiAxMHB4OyAqL1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMjZweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzcyBzcGFuIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogJGZpcnN0LWNvbG9yO1xyXG59XHJcbi8qXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcbiAgLnJpZ2h0LXNpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LXNpZGUgaW1nIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5sZWZ0LXNpZGUge1xyXG4gICAgd2lkdGg6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubWFpbi1vbmUge1xyXG4gICAgZm9udC1zaXplOiAzM3B4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tb25lIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxufVxyXG4qL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xyXG4gIC5sZWZ0LXNpZGUge1xyXG4gICAgcGFkZGluZy10b3A6IDc1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgLyogcGFkZGluZzogM3B4OyAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW1nI2xvZ28tZW5pLXBvcHVwIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBsZWZ0OiAtNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC5sZWZ0LXNpZGUge1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29udGVudC1mb3JtLWZpZWxkIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBjMmQ1MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnRuX2Nvbm5lY3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBsb2FkZXJcclxuLmxvYWRlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiA2cHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNCAxLjNzIGluZmluaXRlIGxpbmVhcjtcclxuICBhbmltYXRpb246IGxvYWQ0IDEuM3MgaW5maW5pdGUgbGluZWFyO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkNCB7XHJcbiAgMCUsXHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLjJlbSwgMmVtIC0yZW0gMCAwZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sXHJcbiAgICAgIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAwO1xyXG4gIH1cclxuICAxMi41JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLCAyZW0gLTJlbSAwIDAuMmVtLCAzZW0gMCAwIDAsIDJlbSAyZW0gMCAtMWVtLFxyXG4gICAgICAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0wLjVlbSwgMmVtIC0yZW0gMCAwLCAzZW0gMCAwIDAuMmVtLCAyZW0gMmVtIDAgMCxcclxuICAgICAgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XHJcbiAgfVxyXG4gIDM3LjUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIDAsIDJlbSAyZW0gMCAwLjJlbSxcclxuICAgICAgMCAzZW0gMCAwZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAwZW0sXHJcbiAgICAgIDAgM2VtIDAgMC4yZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xyXG4gIH1cclxuICA2Mi41JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sXHJcbiAgICAgIDAgM2VtIDAgMCwgLTJlbSAyZW0gMCAwLjJlbSwgLTNlbSAwIDAgMCwgLTJlbSAtMmVtIDAgLTFlbTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sXHJcbiAgICAgIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAuMmVtLCAtMmVtIC0yZW0gMCAwO1xyXG4gIH1cclxuICA4Ny41JSB7XHJcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIDAsIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSxcclxuICAgICAgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMCwgLTJlbSAtMmVtIDAgMC4yZW07XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbG9hZDQge1xyXG4gIDAlLFxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMC4yZW0sIDJlbSAtMmVtIDAgMGVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLFxyXG4gICAgICAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgMDtcclxuICB9XHJcbiAgMTIuNSUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMCwgMmVtIC0yZW0gMCAwLjJlbSwgM2VtIDAgMCAwLCAyZW0gMmVtIDAgLTFlbSxcclxuICAgICAgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMC41ZW0sIDJlbSAtMmVtIDAgMCwgM2VtIDAgMCAwLjJlbSwgMmVtIDJlbSAwIDAsXHJcbiAgICAgIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xyXG4gIH1cclxuICAzNy41JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAwLCAyZW0gMmVtIDAgMC4yZW0sXHJcbiAgICAgIDAgM2VtIDAgMGVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgMGVtLFxyXG4gICAgICAwIDNlbSAwIDAuMmVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcclxuICB9XHJcbiAgNjIuNSUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLFxyXG4gICAgICAwIDNlbSAwIDAsIC0yZW0gMmVtIDAgMC4yZW0sIC0zZW0gMCAwIDAsIC0yZW0gLTJlbSAwIC0xZW07XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLFxyXG4gICAgICAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLjJlbSwgLTJlbSAtMmVtIDAgMDtcclxuICB9XHJcbiAgODcuNSUge1xyXG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAwLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sXHJcbiAgICAgIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAsIC0yZW0gLTJlbSAwIDAuMmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW4tdHh0IHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGZpcnN0LWNvbG9yO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogJGZpcnN0LWNvbG9yO1xyXG59XHJcblxyXG4udHh0LW9uZSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udHh0LXR3byB7XHJcbiAgd29yZC1zcGFjaW5nOiAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmNvbnRhaW4tZXJyb3Ige1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uY29udGFpbi1lcnJvciBwIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5kaXYjcHJvZ3Jlc3MtbWFuIHtcclxuICAvL3dpZHRoOiAxMDAlO1xyXG4gIC8vcG9zaXRpb246IGZpeGVkO1xyXG4gIC8vbWFyZ2luLWxlZnQ6IC0xM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dvdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5pbWcjbG9nb2xvZ2luIHtcclxuICB3aWR0aDogMTYwcHg7XHJcbn1cclxuXHJcbiNsb2dpbmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmQ1MDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ2cHgpIHtcclxuICAubG9nb3RpdGxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNsb2dvbG9naW4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAubG9nb2ltZyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5sZWZ0LXNpZGUge1xuICBwYWRkaW5nOiAzMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5yaWdodC1zaWRlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnJpZ2h0LXNpZGUgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbi1vbmUgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAzdnc7XG59XG5cbi5tYWluLW9uZSB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6ICMwNDQ5NzM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEJyYW5kc1wiO1xufVxuXG4ubWFpbi10d28ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5idXR0b24uYnRuX2Nvbm5lY3RlciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICMwNDQ5NzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuYnV0dG9uLmJ0bl9jb25uZWN0ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMGMyZDUwZjY7XG59XG5cbi5jb250ZW50LWZvcm0tZmllbGQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5iYXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmQ1MGRiO1xufVxuXG5pbWcjbG9nby1lbmktcG9wdXAge1xuICB3aWR0aDogMjAwcHg7XG4gIHRvcDogLTYwcHg7XG4gIGxlZnQ6IC02MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5mb3Jnb3QtcGFzcyB7XG4gIC8qIG1hcmdpbjogMTBweDsgKi9cbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDI2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZvcmdvdC1wYXNzIHNwYW4ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMDQ0OTczO1xufVxuXG4vKlxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcbiAgLnJpZ2h0LXNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5yaWdodC1zaWRlIGltZyB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmxlZnQtc2lkZSB7XG4gICAgd2lkdGg6IDEwMHZoICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWFpbi1vbmUge1xuICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgfVxuXG4gIC5tYWluLW9uZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG4qL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgLmxlZnQtc2lkZSB7XG4gICAgcGFkZGluZy10b3A6IDc1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAvKiBwYWRkaW5nOiAzcHg7ICovXG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGltZyNsb2dvLWVuaS1wb3B1cCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHRvcDogLTUwcHg7XG4gICAgbGVmdDogLTUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5sZWZ0LXNpZGUge1xuICAgIHBhZGRpbmctdG9wOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb250ZW50LWZvcm0tZmllbGQge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGMyZDUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTdweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ0bl9jb25uZWN0ZXIge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxufVxuLmxvYWRlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDZweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNCAxLjNzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBsb2FkNCAxLjNzIGluZmluaXRlIGxpbmVhcjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ0IHtcbiAgMCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAuMmVtLCAyZW0gLTJlbSAwIDBlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIDA7XG4gIH1cbiAgMTIuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAsIDJlbSAtMmVtIDAgMC4yZW0sIDNlbSAwIDAgMCwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTAuNWVtLCAyZW0gLTJlbSAwIDAsIDNlbSAwIDAgMC4yZW0sIDJlbSAyZW0gMCAwLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICAzNy41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgMCwgMmVtIDJlbSAwIDAuMmVtLCAwIDNlbSAwIDBlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIDBlbSwgMCAzZW0gMCAwLjJlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNjIuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAwLCAtMmVtIDJlbSAwIDAuMmVtLCAtM2VtIDAgMCAwLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMC4yZW0sIC0yZW0gLTJlbSAwIDA7XG4gIH1cbiAgODcuNSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgMCwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLCAtMmVtIC0yZW0gMCAwLjJlbTtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkNCB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLjJlbSwgMmVtIC0yZW0gMCAwZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAwO1xuICB9XG4gIDEyLjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLCAyZW0gLTJlbSAwIDAuMmVtLCAzZW0gMCAwIDAsIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0wLjVlbSwgMmVtIC0yZW0gMCAwLCAzZW0gMCAwIDAuMmVtLCAyZW0gMmVtIDAgMCwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgMzcuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIDAsIDJlbSAyZW0gMCAwLjJlbSwgMCAzZW0gMCAwZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAwZW0sIDAgM2VtIDAgMC4yZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDYyLjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgMCwgLTJlbSAyZW0gMCAwLjJlbSwgLTNlbSAwIDAgMCwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAuMmVtLCAtMmVtIC0yZW0gMCAwO1xuICB9XG4gIDg3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIDAsIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMCwgLTJlbSAtMmVtIDAgMC4yZW07XG4gIH1cbn1cbi5jb250YWluLXR4dCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzA0NDk3MztcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICMwNDQ5NzM7XG59XG5cbi50eHQtb25lIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50eHQtdHdvIHtcbiAgd29yZC1zcGFjaW5nOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jb250YWluLWVycm9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5jb250YWluLWVycm9yIHAge1xuICBjb2xvcjogcmVkO1xufVxuXG4ubG9nb3RpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuaW1nI2xvZ29sb2dpbiB7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxuI2xvZ2luaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmQ1MDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ2cHgpIHtcbiAgLmxvZ290aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNsb2dvbG9naW4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5sb2dvaW1nIHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/login/login.service */ "./src/app/services/login/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(router, formBuilder, loginService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.imgBack = '../../../../assets/images/background/lili.png';
        this.logo = '../../../../assets/images/ENI/logo-ENl.png';
        this.login = {
            type: '',
            email: '',
            password: ''
        };
        this.hide = true;
        this.isLogin = false;
        this.error = "";
    }
    ngOnInit() {
        this.initSignIn();
    }
    initSignIn() {
        this.signin = this.formBuilder.group({
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    get typeInput() { return this.signin.get('type'); }
    get emailInput() { return this.signin.get('email'); }
    get passwordInput() { return this.signin.get('password'); }
    goToHome() { }
    goToForgotPassword() { }
    goToHowWork() { }
    signUp() { }
    onConnect() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLogin = true;
            const signinValue = this.signin.value;
            if (this.signin.invalid) {
                this.error = "Veuillez compléter le formulaire";
                this.isLogin = false;
            }
            let type = signinValue['type'];
            let email = signinValue['email'];
            let password = signinValue['password'];
            this.loginService.login(type, email, password);
            yield this.loginService.login(type, email, password).subscribe((data) => {
                console.log(data);
                // if good
                // data = {ok, token, id, url}
                if (data) {
                    if (data.ok == true) {
                        // let url = data.url + "/" + data.id + "/" + type + "/" + data.token;
                        let url = data.url + '?token=' + data.token + '&id=' + data.id + '&type=' + data.type;
                        console.log('redirection', url);
                        window.location.href = url;
                    }
                    else if (data.ok == false) {
                        this.isLogin = false;
                        this.error = data.message;
                    }
                    else {
                        this.error = data.message;
                    }
                }
            }, (error) => {
                this.error = "Une erreur est survenue";
                console.log(error);
            });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/clubs/clubs.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/clubs/clubs.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainy {\n  width: 100%;\n  background-color: #0c2d50;\n}\n\n.d-block {\n  width: 100%;\n  height: 400px;\n  max-width: 600px;\n  min-width: 230px;\n  min-height: 400px;\n  margin-top: 30px;\n}\n\n#clubimg {\n  margin: auto;\n}\n\ndiv#myCarousel {\n  width: 100% !important;\n  margin: auto;\n  /* margin-right: 27px !important; */\n}\n\n.descriClub {\n  top: 30px !important;\n  right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbHVicy9FOlxcUHJvamV0c1xcV2ViY3VwXFxjb2RlX2Zyb250XFx3ZWJjdXBGcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2x1YnNcXGNsdWJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NsdWJzL2NsdWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtFQUNBLHlCQUxZO0FDR2Q7O0FES0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0FDRkY7O0FES0E7RUFDRSxzQkFBQTtFQUVBLFlBQUE7RUFDQSxtQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsdWJzL2NsdWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpcnN0LWNvbG9yOiAjMGMyZDUwO1xyXG4kc2Vjb25kLWNvbG9yOiAjMDAyMjQ3O1xyXG5cclxuLm1haW55IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlyc3QtY29sb3I7XHJcbn1cclxuXHJcbi5kLWJsb2NrIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWluLXdpZHRoOiAyMzBweDtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4jY2x1YmltZyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5kaXYjbXlDYXJvdXNlbCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAvL21hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICAvKiBtYXJnaW4tcmlnaHQ6IDI3cHggIWltcG9ydGFudDsgKi9cclxufVxyXG5cclxuLmRlc2NyaUNsdWIge1xyXG4gIHRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5tYWlueSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwO1xufVxuXG4uZC1ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtaW4td2lkdGg6IDIzMHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuI2NsdWJpbWcge1xuICBtYXJnaW46IGF1dG87XG59XG5cbmRpdiNteUNhcm91c2VsIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvO1xuICAvKiBtYXJnaW4tcmlnaHQ6IDI3cHggIWltcG9ydGFudDsgKi9cbn1cblxuLmRlc2NyaUNsdWIge1xuICB0b3A6IDMwcHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/clubs/clubs.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/clubs/clubs.component.ts ***!
  \*****************************************************/
/*! exports provided: ClubsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubsComponent", function() { return ClubsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_clubs_clubs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/clubs/clubs.service */ "./src/app/services/clubs/clubs.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ClubsComponent = class ClubsComponent {
    constructor(clubService) {
        this.clubService = clubService;
        this.clubs = [];
        this.defaultImg = "./../../../assets/images/background/Anon151-Boundless-Banner-hd.jpg";
    }
    ngOnInit() {
        this.getClubs();
    }
    getClubs() {
        this.clubService.getClubs().subscribe((data) => {
            let tmp = data.data;
            this.clubs = tmp;
            console.log(this.clubs);
        }, (err) => {
            console.log(err);
        });
    }
};
ClubsComponent.ctorParameters = () => [
    { type: _services_clubs_clubs_service__WEBPACK_IMPORTED_MODULE_1__["ClubsService"] }
];
ClubsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-clubs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clubs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clubs/clubs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clubs.component.scss */ "./src/app/components/clubs/clubs.component.scss")).default]
    })
], ClubsComponent);



/***/ }),

/***/ "./src/app/components/clubs/publications/publications.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/clubs/publications/publications.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-title-wrapper {\n  margin-top: 50px;\n}\n\n.section-title-wrapper .section-title {\n  color: #0c2d50;\n}\n\n.section-title-wrapper .section-title h4 {\n  text-transform: uppercase;\n}\n\n.section-title {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.section-title h4 {\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.bottomy {\n  width: 60%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.bottomy-one, .bottomy-two {\n  width: 50%;\n  height: 3px;\n  background-color: #0c2d50;\n}\n\n.bottomy-center {\n  margin-left: 1%;\n  margin-right: 1%;\n  position: relative;\n  bottom: 10px;\n}\n\nimg.imaged {\n  width: 100%;\n  height: 280px;\n}\n\n.single-event-item {\n  margin-bottom: 50px;\n}\n\n.single-item-comment-view i {\n  margin-right: 10px;\n}\n\n/*----------------------------------------*/\n\n/*  10. Event Area\n/*----------------------------------------*/\n\n.single-event-image > a {\n  display: block;\n  position: relative;\n}\n\n.single-event-image > span {\n  background: #2d3e50 none repeat scroll 0 0;\n  bottom: 0;\n  content: \"\";\n  height: 96px;\n  left: 0;\n  position: absolute;\n  width: 96px;\n}\n\n.single-event-image a > span {\n  background: #2d3e50 none repeat scroll 0 0;\n  bottom: 0;\n  color: #ffffff;\n  font-family: \"montserratregular\";\n  font-size: 24px;\n  height: 96px;\n  left: 0;\n  line-height: 35px;\n  padding-top: 16px;\n  position: absolute;\n  width: 96px;\n}\n\n.single-event-image span {\n  display: block;\n  font-family: \"montserratsemi_bold\";\n  font-size: 42px;\n  text-align: center;\n}\n\n.single-event-text > h3 a, .single-event-text > h3 {\n  color: #4c4c4c;\n}\n\n.single-event-text > h3 {\n  font-family: \"montserratregular\";\n  margin-bottom: 5px;\n  font-size: 24px;\n}\n\n.single-event-text {\n  background: #f6f6f6 none repeat scroll 0 0;\n  border-bottom: 2px solid #86bc42;\n  padding: 29px 34px 35px;\n}\n\n.single-event-item .single-item-comment-view {\n  margin-bottom: 12px;\n}\n\n.single-event-item .single-item-comment-view span {\n  margin-right: 12px;\n}\n\n.single-event-item .single-item-comment-view span:last-child {\n  margin-right: 0;\n}\n\n.single-event-item .button-default {\n  margin-top: 16px;\n  padding: 6px 23px;\n}\n\n.single-event-item:hover .button-default {\n  background: #2d3e50 none repeat scroll 0 0;\n}\n\n.single-event-item {\n  box-shadow: 0 0 8px rgba(34, 30, 31, 0.3);\n}\n\n.content-pagination {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.content-pagination span {\n  margin: 10px;\n  cursor: pointer;\n}\n\n.content-pagination span:hover {\n  opacity: 0.7;\n}\n\n.current {\n  cursor: auto !important;\n}\n\n.desc {\n  height: 150px;\n  overflow-y: auto;\n}\n\n.daty {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  font-size: 15px;\n  font-style: italic;\n}\n\n.daty i {\n  margin-right: 10px;\n}\n\nselect#club-select {\n  width: 200px;\n  margin-bottom: 20px;\n  height: 40px;\n  padding-left: 20px;\n  border-color: #0c2d50;\n  color: #0c2d50;\n  border-width: 2px;\n}\n\nselect#club-select option:hover {\n  background: #002247 !important;\n  color: white !important;\n  cursor: pointer !important;\n}\n\n.input-group-append button {\n  height: 40px;\n  background-color: #0c2d50;\n}\n\n.input-group.mb-3 {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n@media screen and (max-width: 992px) {\n  .contain-sel {\n    margin-top: -65px;\n  }\n}\n\n.no-actu {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: 130px;\n  margin-top: 0px;\n  background: whitesmoke;\n  color: #0c2d50;\n  font-weight: bold;\n  align-items: center;\n  border-radius: 5px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbHVicy9wdWJsaWNhdGlvbnMvRTpcXFByb2pldHNcXFdlYmN1cFxcY29kZV9mcm9udFxcd2ViY3VwRnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNsdWJzXFxwdWJsaWNhdGlvbnNcXHB1YmxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jbHVicy9wdWJsaWNhdGlvbnMvcHVibGljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQXdCLGdCQUFBO0FDRHhCOztBREdBO0VBQ0UsY0FOYTtBQ01mOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFwQ2E7QUNvQ2Y7O0FER0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQSwyQ0FBQTs7QUFDQTsyQ0FBQTs7QUFFQTtFQUF5QixjQUFBO0VBQWdCLGtCQUFBO0FDRXpDOztBRERBO0VBQ0ksMENBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkE7RUFDSSwwQ0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDS0o7O0FESEE7RUFDSSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUFvRCxjQUFBO0FDUXBEOztBRFBBO0VBQ0MsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNVRDs7QURSQTtFQUNJLDBDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtBQ1dKOztBRFRBO0VBQThDLG1CQUFBO0FDYTlDOztBRFpBO0VBQW1ELGtCQUFBO0FDZ0JuRDs7QURmQTtFQUE4RCxlQUFBO0FDbUI5RDs7QURsQkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDcUJKOztBRG5CQTtFQUEwQywwQ0FBQTtBQ3VCMUM7O0FEdEJBO0VBQW9CLHlDQUFBO0FDMEJwQjs7QUR4QkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUMyQkY7O0FEeEJBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUMyQkY7O0FEeEJBO0VBQ0UsWUFBQTtBQzJCRjs7QUR4QkE7RUFDRSx1QkFBQTtBQzJCRjs7QUR4QkE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUMyQkY7O0FEeEJBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDMkJGOztBRHhCQTtFQUNFLGtCQUFBO0FDMkJGOztBRHhCQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQTNKYTtFQTRKYixjQTVKYTtFQTZKYixpQkFBQTtBQzJCRjs7QUR4QkE7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUMyQkY7O0FEeEJBO0VBQ0UsWUFBQTtFQUNBLHlCQXhLYTtBQ21NZjs7QUR4QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQzJCRjs7QUR4QkE7RUFDRTtJQUNFLGlCQUFBO0VDMkJGO0FBQ0Y7O0FEeEJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0E5TGE7RUErTGIsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQzBCRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2x1YnMvcHVibGljYXRpb25zL3B1YmxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmaXJzdC1jb2xvciA6ICMwYzJkNTA7XHJcbiRzZWNvbmQtY29sb3IgOiAjMDAyMjQ3O1xyXG5cclxuLnNlY3Rpb24tdGl0bGUtd3JhcHBlciB7bWFyZ2luLXRvcDogNTBweDt9XHJcblxyXG4uc2VjdGlvbi10aXRsZS13cmFwcGVyIC5zZWN0aW9uLXRpdGxlIHtcclxuICBjb2xvcjogJGZpcnN0LWNvbG9yO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZS13cmFwcGVyIC5zZWN0aW9uLXRpdGxlIGg0e1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUgaDQge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJvdHRvbXkge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJvdHRvbXktb25lLCAuYm90dG9teS10d28ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZpcnN0LWNvbG9yO1xyXG59XHJcblxyXG4uYm90dG9teS1jZW50ZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmltZy5pbWFnZWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjgwcHg7XHJcbn1cclxuXHJcbi5zaW5nbGUtZXZlbnQtaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnNpbmdsZS1pdGVtLWNvbW1lbnQtdmlldyBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qICAxMC4gRXZlbnQgQXJlYVxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uc2luZ2xlLWV2ZW50LWltYWdlID4gYSB7ZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5zaW5nbGUtZXZlbnQtaW1hZ2UgPiBzcGFuIHtcclxuICAgIGJhY2tncm91bmQ6ICMyZDNlNTAgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDk2cHg7XHJcbn1cclxuLnNpbmdsZS1ldmVudC1pbWFnZSBhID4gc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmQzZTUwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRyZWd1bGFyXCI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA5NnB4O1xyXG59XHJcbi5zaW5nbGUtZXZlbnQtaW1hZ2Ugc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRzZW1pX2JvbGRcIjtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2luZ2xlLWV2ZW50LXRleHQgPiBoMyBhLCAuc2luZ2xlLWV2ZW50LXRleHQgPiBoMyB7Y29sb3I6ICM0YzRjNGM7fVxyXG4uc2luZ2xlLWV2ZW50LXRleHQgPiBoMyB7XHJcblx0Zm9udC1mYW1pbHk6IFwibW9udHNlcnJhdHJlZ3VsYXJcIjtcclxuXHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5zaW5nbGUtZXZlbnQtdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg2YmM0MjtcclxuICAgIHBhZGRpbmc6IDI5cHggMzRweCAzNXB4O1xyXG59XHJcbi5zaW5nbGUtZXZlbnQtaXRlbSAuc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3IHttYXJnaW4tYm90dG9tOiAxMnB4O31cclxuLnNpbmdsZS1ldmVudC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcgc3BhbiB7bWFyZ2luLXJpZ2h0OiAxMnB4O31cclxuLnNpbmdsZS1ldmVudC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcgc3BhbjpsYXN0LWNoaWxkIHttYXJnaW4tcmlnaHQ6IDA7fVxyXG4uc2luZ2xlLWV2ZW50LWl0ZW0gLmJ1dHRvbi1kZWZhdWx0IHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMjNweDtcclxufVxyXG4uc2luZ2xlLWV2ZW50LWl0ZW06aG92ZXIgLmJ1dHRvbi1kZWZhdWx0IHtiYWNrZ3JvdW5kOiAjMmQzZTUwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7fVxyXG4uc2luZ2xlLWV2ZW50LWl0ZW0ge2JveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgzNCwgMzAsIDMxLCAwLjMpO31cclxuXHJcbi5jb250ZW50LXBhZ2luYXRpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQtcGFnaW5hdGlvbiBzcGFuIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGVudC1wYWdpbmF0aW9uIHNwYW46aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmN1cnJlbnQge1xyXG4gIGN1cnNvcjogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGVzYyB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uZGF0eSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmRhdHkgaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5zZWxlY3QjY2x1Yi1zZWxlY3Qge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAkZmlyc3QtY29sb3I7XHJcbiAgY29sb3I6ICRmaXJzdC1jb2xvcjtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxufVxyXG5cclxuc2VsZWN0I2NsdWItc2VsZWN0IG9wdGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogJHNlY29uZC1jb2xvciAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIGJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRmaXJzdC1jb2xvcjtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLm1iLTMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5jb250YWluLXNlbCAge1xyXG4gICAgbWFyZ2luLXRvcDogLTY1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubm8tYWN0dSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgY29sb3I6ICRmaXJzdC1jb2xvcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuIiwiLnNlY3Rpb24tdGl0bGUtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUge1xuICBjb2xvcjogIzBjMmQ1MDtcbn1cblxuLnNlY3Rpb24tdGl0bGUtd3JhcHBlciAuc2VjdGlvbi10aXRsZSBoNCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VjdGlvbi10aXRsZSBoNCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3R0b215IHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYm90dG9teS1vbmUsIC5ib3R0b215LXR3byB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwO1xufVxuXG4uYm90dG9teS1jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG5pbWcuaW1hZ2VkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjgwcHg7XG59XG5cbi5zaW5nbGUtZXZlbnQtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcgaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qICAxMC4gRXZlbnQgQXJlYVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5zaW5nbGUtZXZlbnQtaW1hZ2UgPiBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpbmdsZS1ldmVudC1pbWFnZSA+IHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjMmQzZTUwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvdHRvbTogMDtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA5NnB4O1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5NnB4O1xufVxuXG4uc2luZ2xlLWV2ZW50LWltYWdlIGEgPiBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzJkM2U1MCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0cmVndWxhclwiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGhlaWdodDogOTZweDtcbiAgbGVmdDogMDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5NnB4O1xufVxuXG4uc2luZ2xlLWV2ZW50LWltYWdlIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdHNlbWlfYm9sZFwiO1xuICBmb250LXNpemU6IDQycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpbmdsZS1ldmVudC10ZXh0ID4gaDMgYSwgLnNpbmdsZS1ldmVudC10ZXh0ID4gaDMge1xuICBjb2xvcjogIzRjNGM0Yztcbn1cblxuLnNpbmdsZS1ldmVudC10ZXh0ID4gaDMge1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0cmVndWxhclwiO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnNpbmdsZS1ldmVudC10ZXh0IHtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg2YmM0MjtcbiAgcGFkZGluZzogMjlweCAzNHB4IDM1cHg7XG59XG5cbi5zaW5nbGUtZXZlbnQtaXRlbSAuc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3IHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLnNpbmdsZS1ldmVudC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLnNpbmdsZS1ldmVudC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcgc3BhbjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uc2luZ2xlLWV2ZW50LWl0ZW0gLmJ1dHRvbi1kZWZhdWx0IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZzogNnB4IDIzcHg7XG59XG5cbi5zaW5nbGUtZXZlbnQtaXRlbTpob3ZlciAuYnV0dG9uLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kOiAjMmQzZTUwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG5cbi5zaW5nbGUtZXZlbnQtaXRlbSB7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgzNCwgMzAsIDMxLCAwLjMpO1xufVxuXG4uY29udGVudC1wYWdpbmF0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudC1wYWdpbmF0aW9uIHNwYW4ge1xuICBtYXJnaW46IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRlbnQtcGFnaW5hdGlvbiBzcGFuOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uY3VycmVudCB7XG4gIGN1cnNvcjogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uZGVzYyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5kYXR5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uZGF0eSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5zZWxlY3QjY2x1Yi1zZWxlY3Qge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBib3JkZXItY29sb3I6ICMwYzJkNTA7XG4gIGNvbG9yOiAjMGMyZDUwO1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxuc2VsZWN0I2NsdWItc2VsZWN0IG9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDIyNDcgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIGJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmQ1MDtcbn1cblxuLmlucHV0LWdyb3VwLm1iLTMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbi1zZWwge1xuICAgIG1hcmdpbi10b3A6IC02NXB4O1xuICB9XG59XG4ubm8tYWN0dSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiAjMGMyZDUwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/clubs/publications/publications.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/clubs/publications/publications.component.ts ***!
  \*************************************************************************/
/*! exports provided: PublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function() { return PublicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_clubs_clubs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clubs/clubs.service */ "./src/app/services/clubs/clubs.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let PublicationsComponent = class PublicationsComponent {
    constructor(clubService, loadService, _snackBar) {
        this.clubService = clubService;
        this.loadService = loadService;
        this._snackBar = _snackBar;
        this.pubs = [];
        this.pubsTmp = [];
        this.defaultImg = "./../../../../assets/images/background/Anon151-Boundless-Banner-hd.jpg";
        this.nbPagination = [];
        this.currentPagination = 1;
        this.minPagination = 1;
        this.maxPagination = 9;
        this.clubs = [];
        this.selected = "all";
        this.noPub = true;
    }
    ngOnInit() {
        this.loadService.load(true);
        this.getPublications();
        this.getClubs();
    }
    onChange(value) {
        this.loadService.load(true);
        this.pubs = [];
        this.selected = value;
        if (value == "all") {
            this.pubs = this.pubsTmp;
        }
        else {
            this.pubsTmp.forEach(element => {
                if (element.club == value) {
                    this.pubs.push(element);
                }
            });
        }
        this.nbPagination = [];
        this.initPagination();
        this.four_actu = this.pubs.slice(0, 9);
        this.last_actus = this.pubs.slice(this.minPagination, this.maxPagination);
        this.loadService.load(false);
    }
    initPagination() {
        let nb = this.pubs.length;
        let nbTmp = nb / 9;
        nb = Math.ceil(nbTmp);
        for (let index = 0; index < nb; index++) {
            this.nbPagination.push(index + 1);
        }
    }
    page(page) {
        this.minPagination = (9 * page) - 9;
        this.maxPagination = this.minPagination + 9;
        if (this.minPagination > this.pubs.length) {
            return false;
        }
        this.currentPagination = page;
        this.four_actu = this.pubs.slice(this.minPagination, this.maxPagination);
        this.slideTop();
    }
    slideTop() {
        jquery__WEBPACK_IMPORTED_MODULE_4__([document.documentElement, document.body]).animate({
            scrollTop: jquery__WEBPACK_IMPORTED_MODULE_4__("#top-row").offset().top
        }, 200);
    }
    getPublications() {
        this.clubService.getPublications().subscribe((data) => {
            let list = data.data;
            list.forEach((element, index) => {
                if (element.image == null) {
                    element.image = this.defaultImg;
                }
                // if (element.galerie == null) {
                //   element.galerie = [];
                //   for (let index = 0; index < 3; index++) {
                //     let ind = index + 1;
                //     let url = "./../../../assets/images/course/" + ind +".jpg"
                //     element.galerie.push(url);
                //   }
                // }
                element.date_creation = this.changeDate(element.date_creation, false);
                element.date_mise_jour = this.changeDate(element.date_mise_jour, true);
            });
            this.pubs = list;
            this.pubsTmp = list;
            console.log(this.pubs);
            this.initPagination();
            this.four_actu = this.pubs.slice(0, 9);
            this.last_actus = this.pubs.slice(this.minPagination, this.maxPagination);
            this.loadService.load(false);
            if (this.pubsTmp.length == 0) {
                this.noPub = true;
            }
            else {
                this.noPub = false;
            }
        }, (err) => {
            this.noPub = true;
            console.log(err);
            this.loadService.load(false);
            this._snackBar.open(`Serveur inacessible`, "", {
                duration: 1500,
                horizontalPosition: "right",
                verticalPosition: "bottom",
                panelClass: ["error_snackbar"]
            });
        });
    }
    changeDate(data, isFull) {
        let annee = data.substring(0, 4);
        let mois = data.substring(5, 7);
        let jour = data.substring(8, 10);
        let heure = data.substring(11, 16);
        if (isFull) {
            var newDate = jour + " " + this.voirMoisFull(mois) + " " + annee;
        }
        else {
            var newDate = jour + " " + this.voirMois(mois) + " " + annee;
        }
        return newDate;
    }
    voirMois(mois) {
        let newMois = "";
        switch (mois) {
            case "01": {
                newMois = "Jan";
                break;
            }
            case "02": {
                newMois = "Fev";
                break;
            }
            case "03": {
                newMois = "Mar";
                break;
            }
            case "04": {
                newMois = "Avr";
                break;
            }
            case "05": {
                newMois = "Mai";
                break;
            }
            case "06": {
                newMois = "Juin";
                break;
            }
            case "07": {
                newMois = "Juil";
                break;
            }
            case "08": {
                newMois = "Août";
                break;
            }
            case "09": {
                newMois = "Sept";
                break;
            }
            case "10": {
                newMois = "Oct";
                break;
            }
            case "11": {
                newMois = "Nov";
                break;
            }
            case "12": {
                newMois = "Déc";
                break;
            }
        }
        return newMois;
    }
    voirMoisFull(mois) {
        let newMois = "";
        switch (mois) {
            case "01": {
                newMois = "Janvier";
                break;
            }
            case "02": {
                newMois = "Février";
                break;
            }
            case "03": {
                newMois = "Mars";
                break;
            }
            case "04": {
                newMois = "Avril";
                break;
            }
            case "05": {
                newMois = "Mai";
                break;
            }
            case "06": {
                newMois = "Juin";
                break;
            }
            case "07": {
                newMois = "Juillet";
                break;
            }
            case "08": {
                newMois = "Août";
                break;
            }
            case "09": {
                newMois = "Septembre";
                break;
            }
            case "10": {
                newMois = "Octobre";
                break;
            }
            case "11": {
                newMois = "Novembre";
                break;
            }
            case "12": {
                newMois = "Décembre";
                break;
            }
        }
        return newMois;
    }
    getClubs() {
        this.clubService.getClubs().subscribe((data) => {
            let tmp = data.data;
            this.clubs = tmp;
            console.log(this.clubs);
        }, (err) => {
            console.log(err);
        });
    }
};
PublicationsComponent.ctorParameters = () => [
    { type: src_app_services_clubs_clubs_service__WEBPACK_IMPORTED_MODULE_3__["ClubsService"] },
    { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
PublicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-publications',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./publications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clubs/publications/publications.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./publications.component.scss */ "./src/app/components/clubs/publications/publications.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../director-word/responsive.css */ "./src/app/components/director-word/responsive.css")).default]
    })
], PublicationsComponent);



/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  height: 700px;\n  width: 100%;\n  background-image: linear-gradient(to bottom, #ffffff, #ffffffa4, #ffffff6b, #ffffff09, #ffffff00), url('Etablissement.jpeg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.mapped {\n  height: 300px;\n  width: 100%;\n  background: #686666;\n}\n\n.contain-contact {\n  position: absolute;\n  background: white;\n  width: 40%;\n  top: 400px;\n  right: 2vh;\n  border-radius: 3px;\n  padding: 45px;\n  z-index: 400;\n}\n\n.title-mapped {\n  text-align: center;\n  font-weight: bold;\n  color: #0c2d50;\n  font-size: 30px;\n  font-family: none;\n}\n\nlabel {\n  margin-top: 20px;\n  font-size: 16px;\n}\n\n.contain-submit {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.contain-submit button {\n  height: 50px;\n  width: 150px;\n  background-color: #0c2d50;\n  color: white;\n  border: none;\n}\n\nsmall.form-text.error-text {\n  color: red;\n  text-align: right;\n  padding-right: 5px;\n}\n\ninput {\n  height: 50px !important;\n}\n\n.main {\n  padding-top: 50px;\n  padding-left: 50px;\n}\n\n.contain-main {\n  width: 250px;\n  border: 2px solid #0c2d50;\n  padding: 20px;\n  font-weight: 500;\n  color: #0c2d50;\n}\n\n.txt1 {\n  font-size: 40px;\n  letter-spacing: 17px;\n  text-transform: uppercase;\n}\n\n.main-head h6 {\n  position: relative;\n  white-space: nowrap;\n  word-spacing: 20px;\n  letter-spacing: 1px;\n  bottom: 13px;\n}\n\n.main-head p {\n  font-weight: bold;\n}\n\n@media only screen and (min-width: 1700px) {\n  .contain-contact {\n    width: 600px;\n  }\n}\n\n@media only screen and (max-width: 750px) {\n  .contain-contact {\n    position: absolute;\n    background: white;\n    width: 91%;\n    top: 600px;\n    right: 2vh;\n    border-radius: 3px;\n    padding: 45px;\n  }\n\n  .main {\n    height: 880px;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .contain-contact {\n    position: absolute;\n    background: white;\n    width: 98%;\n    top: 600px;\n    right: 1%;\n    border-radius: 3px;\n    padding: 45px;\n  }\n}\n\n@media screen and (max-width: 310px) {\n  .main {\n    padding-top: 50px;\n    padding-left: 0px;\n  }\n}\n\n.loader {\n  color: #ffffff;\n  font-size: 6px;\n  margin: 10px auto;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: load4 1.3s infinite linear;\n  animation: load4 1.3s infinite linear;\n  transform: translateZ(0);\n}\n\n@-webkit-keyframes load4 {\n  0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n\n@keyframes load4 {\n  0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0U6XFxQcm9qZXRzXFxXZWJjdXBcXGNvZGVfZnJvbnRcXHdlYmN1cEZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBRUEsNEhBQUE7RUFTQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNYRjs7QURjQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNYRjs7QURjQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDWEY7O0FEY0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0F6Q1k7RUEwQ1osZUFBQTtFQUVBLGlCQUFBO0FDWkY7O0FEZUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNaRjs7QURlQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNaRjs7QURlQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBOURZO0VBK0RaLFlBQUE7RUFDQSxZQUFBO0FDWkY7O0FEZUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1pGOztBRGVBO0VBQ0UsdUJBQUE7QUNaRjs7QURlQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNaRjs7QURlQTtFQUVFLFlBQUE7RUFDQSx5QkFBQTtFQUVBLGFBQUE7RUFHQSxnQkFBQTtFQUNBLGNBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDaEJGOztBRGtCQTtFQUNFLGlCQUFBO0FDZkY7O0FEa0JBO0VBQ0U7SUFDRSxZQUFBO0VDZkY7QUFDRjs7QURrQkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsYUFBQTtFQ2hCRjtBQUNGOztBRG1CQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtFQ2pCRjtBQUNGOztBRG9CQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtFQ2xCRjtBQUNGOztBRHNCQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZDQUFBO0VBQ0EscUNBQUE7RUFHQSx3QkFBQTtBQ3BCRjs7QURzQkE7RUFDRTtJQUVFLHFJQUFBO0VDcEJGO0VEdUJBO0lBQ0UsbUlBQUE7RUNyQkY7RUR3QkE7SUFDRSxxSUFBQTtFQ3RCRjtFRHlCQTtJQUNFLHlJQUFBO0VDdkJGO0VEMEJBO0lBQ0UsdUlBQUE7RUN4QkY7RUQyQkE7SUFDRSxtSUFBQTtFQ3pCRjtFRDRCQTtJQUNFLHlJQUFBO0VDMUJGO0VENkJBO0lBQ0Usb0lBQUE7RUMzQkY7QUFDRjs7QUQ4QkE7RUFDRTtJQUVFLHFJQUFBO0VDN0JGO0VEZ0NBO0lBQ0UsbUlBQUE7RUM5QkY7RURpQ0E7SUFDRSxxSUFBQTtFQy9CRjtFRGtDQTtJQUNFLHlJQUFBO0VDaENGO0VEbUNBO0lBQ0UsdUlBQUE7RUNqQ0Y7RURvQ0E7SUFDRSxtSUFBQTtFQ2xDRjtFRHFDQTtJQUNFLHlJQUFBO0VDbkNGO0VEc0NBO0lBQ0Usb0lBQUE7RUNwQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpcnN0LWNvbG9yOiAjMGMyZDUwO1xyXG4kc2Vjb25kLWNvbG9yOiAjMDAyMjQ3O1xyXG5cclxuLm1haW4ge1xyXG4gIGhlaWdodDogNzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQvQW5vbjE1MS1Cb3VuZGxlc3MtQmFubmVyLWhkLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHRvIGJvdHRvbSxcclxuICAgICAgI2ZmZmZmZixcclxuICAgICAgI2ZmZmZmZmE0LFxyXG4gICAgICAjZmZmZmZmNmIsXHJcbiAgICAgICNmZmZmZmYwOSxcclxuICAgICAgI2ZmZmZmZjAwXHJcbiAgICApLFxyXG4gICAgdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0VOSS9FdGFibGlzc2VtZW50LmpwZWdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLm1hcHBlZCB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTA0LCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbi5jb250YWluLWNvbnRhY3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB3aWR0aDogNDAlO1xyXG4gIHRvcDogNDAwcHg7XHJcbiAgcmlnaHQ6IDJ2aDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZzogNDVweDtcclxuICB6LWluZGV4OiA0MDA7XHJcbn1cclxuXHJcbi50aXRsZS1tYXBwZWQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogJGZpcnN0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICAvLyBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgZm9udC1mYW1pbHk6IG5vbmU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNvbnRhaW4tc3VibWl0IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW4tc3VibWl0IGJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlyc3QtY29sb3I7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuc21hbGwuZm9ybS10ZXh0LmVycm9yLXRleHQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5jb250YWluLW1haW4ge1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwYzJkNTA7XHJcbiAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICAvLyB3aWR0aDogMzUwcHg7XHJcbiAgLy8gYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUyMSk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzBjMmQ1MDtcclxufVxyXG5cclxuLnR4dDEge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMTdweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubWFpbi1oZWFkIGg2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3b3JkLXNwYWNpbmc6IDIwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBib3R0b206IDEzcHg7XHJcbn1cclxuLm1haW4taGVhZCBwIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNzAwcHgpIHtcclxuICAuY29udGFpbi1jb250YWN0IHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAuY29udGFpbi1jb250YWN0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDkxJTtcclxuICAgIHRvcDogNjAwcHg7XHJcbiAgICByaWdodDogMnZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogNDVweDtcclxuICB9XHJcblxyXG4gIC5tYWluIHtcclxuICAgIGhlaWdodDogODgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgLmNvbnRhaW4tY29udGFjdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICB0b3A6IDYwMHB4O1xyXG4gICAgcmlnaHQ6IDElO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogNDVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxMHB4KSB7XHJcbiAgLm1haW4ge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIGxvYWRlclxyXG4ubG9hZGVyIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDZweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ0IDEuM3MgaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbjogbG9hZDQgMS4zcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ0IHtcclxuICAwJSxcclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAuMmVtLCAyZW0gLTJlbSAwIDBlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSxcclxuICAgICAgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIDA7XHJcbiAgfVxyXG4gIDEyLjUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAsIDJlbSAtMmVtIDAgMC4yZW0sIDNlbSAwIDAgMCwgMmVtIDJlbSAwIC0xZW0sXHJcbiAgICAgIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTAuNWVtLCAyZW0gLTJlbSAwIDAsIDNlbSAwIDAgMC4yZW0sIDJlbSAyZW0gMCAwLFxyXG4gICAgICAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcclxuICB9XHJcbiAgMzcuNSUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgMCwgMmVtIDJlbSAwIDAuMmVtLFxyXG4gICAgICAwIDNlbSAwIDBlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIDBlbSxcclxuICAgICAgMCAzZW0gMCAwLjJlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XHJcbiAgfVxyXG4gIDYyLjUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSxcclxuICAgICAgMCAzZW0gMCAwLCAtMmVtIDJlbSAwIDAuMmVtLCAtM2VtIDAgMCAwLCAtMmVtIC0yZW0gMCAtMWVtO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSxcclxuICAgICAgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMC4yZW0sIC0yZW0gLTJlbSAwIDA7XHJcbiAgfVxyXG4gIDg3LjUlIHtcclxuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgMCwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLFxyXG4gICAgICAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLCAtMmVtIC0yZW0gMCAwLjJlbTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBsb2FkNCB7XHJcbiAgMCUsXHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLjJlbSwgMmVtIC0yZW0gMCAwZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sXHJcbiAgICAgIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAwO1xyXG4gIH1cclxuICAxMi41JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLCAyZW0gLTJlbSAwIDAuMmVtLCAzZW0gMCAwIDAsIDJlbSAyZW0gMCAtMWVtLFxyXG4gICAgICAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0wLjVlbSwgMmVtIC0yZW0gMCAwLCAzZW0gMCAwIDAuMmVtLCAyZW0gMmVtIDAgMCxcclxuICAgICAgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XHJcbiAgfVxyXG4gIDM3LjUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIDAsIDJlbSAyZW0gMCAwLjJlbSxcclxuICAgICAgMCAzZW0gMCAwZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAwZW0sXHJcbiAgICAgIDAgM2VtIDAgMC4yZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xyXG4gIH1cclxuICA2Mi41JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sXHJcbiAgICAgIDAgM2VtIDAgMCwgLTJlbSAyZW0gMCAwLjJlbSwgLTNlbSAwIDAgMCwgLTJlbSAtMmVtIDAgLTFlbTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sXHJcbiAgICAgIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAuMmVtLCAtMmVtIC0yZW0gMCAwO1xyXG4gIH1cclxuICA4Ny41JSB7XHJcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIDAsIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSxcclxuICAgICAgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMCwgLTJlbSAtMmVtIDAgMC4yZW07XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluIHtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYsICNmZmZmZmZhNCwgI2ZmZmZmZjZiLCAjZmZmZmZmMDksICNmZmZmZmYwMCksIHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9FTkkvRXRhYmxpc3NlbWVudC5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5tYXBwZWQge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzY4NjY2Njtcbn1cblxuLmNvbnRhaW4tY29udGFjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiA0MCU7XG4gIHRvcDogNDAwcHg7XG4gIHJpZ2h0OiAydmg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNDVweDtcbiAgei1pbmRleDogNDAwO1xufVxuXG4udGl0bGUtbWFwcGVkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwYzJkNTA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IG5vbmU7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY29udGFpbi1zdWJtaXQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW4tc3VibWl0IGJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuc21hbGwuZm9ybS10ZXh0LmVycm9yLXRleHQge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG5pbnB1dCB7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbiB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi5jb250YWluLW1haW4ge1xuICB3aWR0aDogMjUwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwYzJkNTA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMGMyZDUwO1xufVxuXG4udHh0MSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDE3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tYWluLWhlYWQgaDYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtc3BhY2luZzogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm90dG9tOiAxM3B4O1xufVxuXG4ubWFpbi1oZWFkIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNzAwcHgpIHtcbiAgLmNvbnRhaW4tY29udGFjdCB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5jb250YWluLWNvbnRhY3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogOTElO1xuICAgIHRvcDogNjAwcHg7XG4gICAgcmlnaHQ6IDJ2aDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogNDVweDtcbiAgfVxuXG4gIC5tYWluIHtcbiAgICBoZWlnaHQ6IDg4MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jb250YWluLWNvbnRhY3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogOTglO1xuICAgIHRvcDogNjAwcHg7XG4gICAgcmlnaHQ6IDElO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiA0NXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMTBweCkge1xuICAubWFpbiB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbn1cbi5sb2FkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiA2cHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDQgMS4zcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogbG9hZDQgMS4zcyBpbmZpbml0ZSBsaW5lYXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkNCB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLjJlbSwgMmVtIC0yZW0gMCAwZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAwO1xuICB9XG4gIDEyLjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLCAyZW0gLTJlbSAwIDAuMmVtLCAzZW0gMCAwIDAsIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0wLjVlbSwgMmVtIC0yZW0gMCAwLCAzZW0gMCAwIDAuMmVtLCAyZW0gMmVtIDAgMCwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgMzcuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIDAsIDJlbSAyZW0gMCAwLjJlbSwgMCAzZW0gMCAwZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAwZW0sIDAgM2VtIDAgMC4yZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDYyLjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgMCwgLTJlbSAyZW0gMCAwLjJlbSwgLTNlbSAwIDAgMCwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAuMmVtLCAtMmVtIC0yZW0gMCAwO1xuICB9XG4gIDg3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIDAsIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMCwgLTJlbSAtMmVtIDAgMC4yZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZDQge1xuICAwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMC4yZW0sIDJlbSAtMmVtIDAgMGVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgMDtcbiAgfVxuICAxMi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMCwgMmVtIC0yZW0gMCAwLjJlbSwgM2VtIDAgMCAwLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMC41ZW0sIDJlbSAtMmVtIDAgMCwgM2VtIDAgMCAwLjJlbSwgMmVtIDJlbSAwIDAsIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDM3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAwLCAyZW0gMmVtIDAgMC4yZW0sIDAgM2VtIDAgMGVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgMGVtLCAwIDNlbSAwIDAuMmVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICA2Mi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIDAsIC0yZW0gMmVtIDAgMC4yZW0sIC0zZW0gMCAwIDAsIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLjJlbSwgLTJlbSAtMmVtIDAgMDtcbiAgfVxuICA4Ny41JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAwLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAsIC0yZW0gLTJlbSAwIDAuMmVtO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);








let ContactComponent = class ContactComponent {
    constructor(formBuilder, http, _snackBar, loadSrv) {
        this.formBuilder = formBuilder;
        this.http = http;
        this._snackBar = _snackBar;
        this.loadSrv = loadSrv;
        this.submitted = false;
        this.email = "";
        this.objet = "";
        this.message = "";
        this.telephone = "";
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint;
        this.contactForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            objet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            //   numeroUser: ['',[Validators.required, Validators.pattern(/^(?=\D*\d).{12,13}$/)]],
            // numero: ['',[Validators.pattern(/^(?=\D*\d).{2}\s(?=\D*\d).{2,3}\s(?=\D*\d).{2,3}\s(?=\D*\d).{2,3}$/)]],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_7__('#frame_id').on('load', () => {
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_7__("#progress-man").hide();
            }, 2000);
        });
    }
    get form() { return this.contactForm.controls; }
    openConfirm() {
        this.submitted = true;
        if (this.contactForm.invalid) {
            return;
        }
        // window.scroll(0,0);
        let data = this.contactForm.value;
        this.postMessage(data.email, data.objet, data.message);
    }
    postMessage(email, objet, message) {
        this.loadSrv.load(true);
        let options = {
            "email": email,
            "objet": objet,
            "message": message
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.http.post(`${this.endpoint}/messages`, options, headers).subscribe((data) => {
            // console.log(data);
            if (data.message == "sucess") {
                this._snackBar.open(`Message envoyé !`, "", {
                    duration: 1500,
                    horizontalPosition: "right",
                    verticalPosition: "bottom",
                    panelClass: ["success_snackbar"]
                });
                this.email = "";
                this.objet = "";
                this.message = "";
                this.telephone = "";
            }
            else {
                this._snackBar.open("Veuillez réessayer plustard", "", {
                    duration: 1500,
                    horizontalPosition: "right",
                    verticalPosition: "bottom",
                    panelClass: ["info_snackbar"]
                });
            }
            this.loadSrv.load(false);
            this.submitted = false;
        }, err => {
            this._snackBar.open(`Une erreur est survenue`, "", {
                duration: 1500,
                horizontalPosition: "right",
                verticalPosition: "bottom",
                panelClass: ["error_snackbar"]
            });
            this.loadSrv.load(false);
            console.log(err);
        });
        this.submitted = false;
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/components/details/news-all/actuality/actuality.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/details/news-all/actuality/actuality.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*----------------------------------------*/\n/*  7. Latest News Area\n/*----------------------------------------*/\n.latest-area {\n  padding: 120px 0 70px;\n}\n.single-latest-text {\n  height: 320px;\n}\n.single-latest-image img {\n  height: 290px;\n}\n.single-latest-text > h3 {\n  font-family: raleway;\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n.single-latest-item {\n  overflow: hidden;\n  margin-bottom: 50px;\n  transition: all 0.3s ease 0s;\n}\n.single-latest-item:hover {\n  box-shadow: 2px 5px 25px rgba(34, 30, 31, 0.25);\n}\n.single-latest-text > h3 a {\n  color: #2d3e50;\n}\n.single-latest-image {\n  float: left;\n}\n.single-latest-image a {\n  display: inline-block;\n}\n.single-latest-text {\n  background: #f6f6f6 none repeat scroll 0 0;\n  border-bottom: 2px solid #86bc42;\n  overflow: hidden;\n  padding: 30px 0 27px 35px;\n}\n.single-latest-item .single-item-comment-view span {\n  margin-right: 13px;\n}\n.single-latest-item .single-item-comment-view {\n  display: block;\n  margin-bottom: 6px;\n  margin-top: 6px;\n}\n.single-latest-item .button-default {\n  font-size: 13px;\n  margin-top: 7px;\n  padding: 7px 21px;\n  transition: all 0.3s;\n  background-color: #002247;\n  color: white;\n  cursor: pointer;\n}\n.single-latest-item:hover .button-default {\n  background: #2D3E50 none repeat scroll 0 0;\n}\n.section-left #poster {\n  width: 100%;\n}\n.single-latest-item {\n  display: flex;\n  flex-direction: row;\n}\n.single-latest-image {\n  width: 50%;\n  height: 260px;\n}\n.single-latest-item .single-item-comment-view {\n  font-size: 11px;\n}\n.single-latest-item .single-item-comment-view .fa {\n  margin-right: 5px;\n}\n.single-latest-text p {\n  font-size: 13px;\n  padding-right: 10px;\n  padding-top: 10px;\n}\n.section-title {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n}\n.section-title h3 {\n  font-weight: bold;\n}\n.bottomy {\n  width: 60%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.bottomy-one, .bottomy-two {\n  width: 50%;\n  height: 3px;\n  background-color: #0c2d50;\n}\n.bottomy-center {\n  margin-left: 1%;\n  margin-right: 1%;\n  position: relative;\n  bottom: 10px;\n}\n.contain-section {\n  margin-top: 50px;\n}\n.section-left-date {\n  position: absolute;\n  margin-top: 30px;\n  /* margin-left: 10px; */\n  padding-top: 5px;\n  padding-left: 5px;\n  padding-right: 10px;\n  background: #ffffffa1;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.section-left-date p {\n  font-size: 12px;\n}\n.section-left-date p span {\n  font-style: italic;\n}\np.p2 {\n  margin-top: -10px;\n  margin-left: 5px;\n  margin-bottom: 5px;\n}\nh3.section-right-h3 {\n  width: 30%;\n  font-weight: bold;\n  font-variant: petite-caps;\n  text-shadow: 9px 5px 10px rgba(0, 0, 0, 0.32);\n  font-size: 30px;\n  border-bottom: 1px solid black;\n  border-width: thick;\n  white-space: nowrap;\n  padding-bottom: 5px;\n  margin-bottom: 30px;\n}\n.section-right {\n  padding-right: 50px;\n  padding-left: 0px;\n}\n.contain-gallerie {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n}\n.contain-gallerie-one, .contain-gallerie-two {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n}\n.text-gallerie {\n  display: flex;\n  flex-direction: row;\n  height: 50px;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: 25px;\n  font-weight: bold;\n  padding-right: 10px;\n  background-color: #0c2d50;\n  color: white;\n  margin-bottom: -5px;\n  white-space: nowrap;\n  letter-spacing: 5px;\n}\n.bar-gallerie {\n  height: 5px;\n  background-color: white;\n  width: 100%;\n  position: relative;\n  bottom: 5px;\n}\n.img {\n  position: relative;\n  width: 50%;\n}\n.image {\n  display: block;\n  width: 100%;\n  min-height: 150px;\n  max-height: 220px;\n}\n.overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #0c2d506b;\n  overflow: hidden;\n  width: 0;\n  height: 100%;\n  transition: 0.5s ease;\n}\n.img:hover .overlay {\n  width: 100%;\n}\n.text {\n  white-space: nowrap;\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n.top-tite {\n  margin-bottom: 20px;\n  color: white;\n  background: #0c2d50;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  padding-right: 10px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  cursor: pointer;\n  font-family: none;\n}\n.top-tite fa {\n  margin-left: 15px;\n}\n.content-pagination {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.content-pagination span {\n  margin: 10px;\n  cursor: pointer;\n}\n.content-pagination span:hover {\n  opacity: 0.7;\n}\n.current {\n  cursor: auto !important;\n}\n.no-actu {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: 130px;\n  margin-top: 0px;\n  background: whitesmoke;\n  color: #0c2d50;\n  font-weight: bold;\n  align-items: center;\n  border-radius: 5px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL25ld3MtYWxsL2FjdHVhbGl0eS9FOlxcUHJvamV0c1xcV2ViY3VwXFxjb2RlX2Zyb250XFx3ZWJjdXBGcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZGV0YWlsc1xcbmV3cy1hbGxcXGFjdHVhbGl0eVxcYWN0dWFsaXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RldGFpbHMvbmV3cy1hbGwvYWN0dWFsaXR5L2FjdHVhbGl0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwyQ0FBQTtBQUNBOzJDQUFBO0FBRUE7RUFBYyxxQkFBQTtBQ0RkO0FERUE7RUFDRSxhQUFBO0FDQ0Y7QURFQTtFQUNFLGFBQUE7QUNDRjtBREVBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsNEJBQUE7QUNFSjtBREFBO0VBQTJCLCtDQUFBO0FDSTNCO0FESEE7RUFBNEIsY0FBQTtBQ081QjtBRE5BO0VBQXNCLFdBQUE7QUNVdEI7QURUQTtFQUF3QixxQkFBQTtBQ2F4QjtBRFpBO0VBQ0ksMENBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNlSjtBRGJBO0VBQW9ELGtCQUFBO0FDaUJwRDtBRGhCQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNtQko7QURqQkE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDb0JKO0FEbEJBO0VBQTJDLDBDQUFBO0FDc0IzQztBRHBCQTtFQUNFLFdBQUE7QUN1QkY7QURwQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUN1QkY7QURwQkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQ3VCRjtBRHBCQTtFQUNFLGVBQUE7QUN1QkY7QURwQkE7RUFDRSxpQkFBQTtBQ3VCRjtBRHBCQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDdUJGO0FEcEJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDdUJGO0FEcEJBO0VBQ0UsaUJBQUE7QUN1QkY7QURwQkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUN1QkY7QURwQkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQXZHYTtBQzhIZjtBRHBCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3VCRjtBRHBCQTtFQUNFLGdCQUFBO0FDdUJGO0FEcEJBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FDdUJGO0FEcEJBO0VBQ0UsZUFBQTtBQ3VCRjtBRHBCQTtFQUNFLGtCQUFBO0FDdUJGO0FEcEJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDdUJGO0FEcEJBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDdUJGO0FEcEJBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ3VCRjtBRG5CQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDc0JGO0FEbkJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDc0JGO0FEZkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBNUxhO0VBNkxiLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNrQkY7QURmQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNrQkY7QURkQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ2lCRjtBRGRBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDaUJGO0FEZEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBRUEsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDZ0JGO0FEYkE7RUFDRSxXQUFBO0FDZ0JGO0FEYkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtBQ2dCRjtBRGJBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBeFBhO0VBeVBiLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2dCRjtBRGJBO0VBQ0UsaUJBQUE7QUNnQkY7QURiQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2dCRjtBRGJBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNnQkY7QURiQTtFQUNFLFlBQUE7QUNnQkY7QURiQTtFQUNFLHVCQUFBO0FDZ0JGO0FEYkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQW5TYTtFQW9TYixpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDZ0JGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL25ld3MtYWxsL2FjdHVhbGl0eS9hY3R1YWxpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZmlyc3QtY29sb3IgOiAjMGMyZDUwO1xyXG4kc2Vjb25kLWNvbG9yIDogIzAwMjI0NztcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qICA3LiBMYXRlc3QgTmV3cyBBcmVhXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5sYXRlc3QtYXJlYSB7cGFkZGluZzogMTIwcHggMCA3MHB4O31cclxuLnNpbmdsZS1sYXRlc3QtdGV4dCB7XHJcbiAgaGVpZ2h0OiAzMjBweDtcclxufVxyXG5cclxuLnNpbmdsZS1sYXRlc3QtaW1hZ2UgaW1nIHtcclxuICBoZWlnaHQ6IDI5MHB4O1xyXG59XHJcblxyXG4uc2luZ2xlLWxhdGVzdC10ZXh0ID4gaDMge1xyXG4gICAgZm9udC1mYW1pbHk6IHJhbGV3YXk7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5zaW5nbGUtbGF0ZXN0LWl0ZW0ge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzXHJcbn1cclxuLnNpbmdsZS1sYXRlc3QtaXRlbTpob3ZlciB7Ym94LXNoYWRvdzogMnB4IDVweCAyNXB4IHJnYmEoMzQsIDMwLCAzMSwgMC4yNSk7fVxyXG4uc2luZ2xlLWxhdGVzdC10ZXh0ID4gaDMgYSB7Y29sb3I6ICMyZDNlNTA7fVxyXG4uc2luZ2xlLWxhdGVzdC1pbWFnZSB7ZmxvYXQ6IGxlZnQ7fVxyXG4uc2luZ2xlLWxhdGVzdC1pbWFnZSBhIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2t9XHJcbi5zaW5nbGUtbGF0ZXN0LXRleHQge1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4NmJjNDI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMzBweCAwIDI3cHggMzVweDtcclxufVxyXG4uc2luZ2xlLWxhdGVzdC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcgc3BhbiB7bWFyZ2luLXJpZ2h0OiAxM3B4O31cclxuLnNpbmdsZS1sYXRlc3QtaXRlbSAuc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcbi5zaW5nbGUtbGF0ZXN0LWl0ZW0gLmJ1dHRvbi1kZWZhdWx0IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIHBhZGRpbmc6IDdweCAyMXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMjQ3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zaW5nbGUtbGF0ZXN0LWl0ZW06aG92ZXIgLmJ1dHRvbi1kZWZhdWx0IHtiYWNrZ3JvdW5kOiAjMkQzRTUwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7fVxyXG5cclxuLnNlY3Rpb24tbGVmdCAjcG9zdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNpbmdsZS1sYXRlc3QtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uc2luZ2xlLWxhdGVzdC1pbWFnZSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDI2MHB4O1xyXG59XHJcblxyXG4uc2luZ2xlLWxhdGVzdC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLnNpbmdsZS1sYXRlc3QtaXRlbSAuc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3IC5mYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5zaW5nbGUtbGF0ZXN0LXRleHQgcCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUgaDMge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYm90dG9teSB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYm90dG9teS1vbmUsIC5ib3R0b215LXR3byB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlyc3QtY29sb3I7XHJcbn1cclxuXHJcbi5ib3R0b215LWNlbnRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNvbnRhaW4tc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tbGVmdC1kYXRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZmExO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnNlY3Rpb24tbGVmdC1kYXRlIHAge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnNlY3Rpb24tbGVmdC1kYXRlIHAgc3BhbiB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5wLnAyIHtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuaDMuc2VjdGlvbi1yaWdodC1oMyB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xyXG4gIHRleHQtc2hhZG93OiA5cHggNXB4IDEwcHggcmdiKDAgMCAwIC8gMzIlKTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci13aWR0aDogdGhpY2s7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXJpZ2h0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW4tZ2FsbGVyaWUge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY29udGFpbi1nYWxsZXJpZS1vbmUsIC5jb250YWluLWdhbGxlcmllLXR3byB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyAuY29udGFpbi1nYWxsZXJpZS1vbmUgLmltZywgLmNvbnRhaW4tZ2FsbGVyaWUtdHdvIC5pbWcge1xyXG4vLyAgIHdpZHRoOiAzNSUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLnRleHQtZ2FsbGVyaWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRmaXJzdC1jb2xvcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5iYXItZ2FsbGVyaWUge1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDVweDtcclxufVxyXG5cclxuLy8gQW5pbWF0aW9uXHJcbi5pbWcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDIyMHB4O1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzJkNTA2YjtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Q0JBO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG59XHJcblxyXG4uaW1nOmhvdmVyIC5vdmVybGF5IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4udG9wLXRpdGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICRmaXJzdC1jb2xvcjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogbm9uZTtcclxufVxyXG5cclxuLnRvcC10aXRlIGZhIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLmNvbnRlbnQtcGFnaW5hdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudC1wYWdpbmF0aW9uIHNwYW4ge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LXBhZ2luYXRpb24gc3Bhbjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uY3VycmVudCB7XHJcbiAgY3Vyc29yOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1hY3R1IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICBjb2xvcjogJGZpcnN0LWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogIDcuIExhdGVzdCBOZXdzIEFyZWFcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ubGF0ZXN0LWFyZWEge1xuICBwYWRkaW5nOiAxMjBweCAwIDcwcHg7XG59XG5cbi5zaW5nbGUtbGF0ZXN0LXRleHQge1xuICBoZWlnaHQ6IDMyMHB4O1xufVxuXG4uc2luZ2xlLWxhdGVzdC1pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDI5MHB4O1xufVxuXG4uc2luZ2xlLWxhdGVzdC10ZXh0ID4gaDMge1xuICBmb250LWZhbWlseTogcmFsZXdheTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5zaW5nbGUtbGF0ZXN0LWl0ZW0ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG5cbi5zaW5nbGUtbGF0ZXN0LWl0ZW06aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggNXB4IDI1cHggcmdiYSgzNCwgMzAsIDMxLCAwLjI1KTtcbn1cblxuLnNpbmdsZS1sYXRlc3QtdGV4dCA+IGgzIGEge1xuICBjb2xvcjogIzJkM2U1MDtcbn1cblxuLnNpbmdsZS1sYXRlc3QtaW1hZ2Uge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnNpbmdsZS1sYXRlc3QtaW1hZ2UgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNpbmdsZS1sYXRlc3QtdGV4dCB7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4NmJjNDI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDMwcHggMCAyN3B4IDM1cHg7XG59XG5cbi5zaW5nbGUtbGF0ZXN0LWl0ZW0gLnNpbmdsZS1pdGVtLWNvbW1lbnQtdmlldyBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xufVxuXG4uc2luZ2xlLWxhdGVzdC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5zaW5nbGUtbGF0ZXN0LWl0ZW0gLmJ1dHRvbi1kZWZhdWx0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIHBhZGRpbmc6IDdweCAyMXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjI0NztcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaW5nbGUtbGF0ZXN0LWl0ZW06aG92ZXIgLmJ1dHRvbi1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZDogIzJEM0U1MCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xufVxuXG4uc2VjdGlvbi1sZWZ0ICNwb3N0ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpbmdsZS1sYXRlc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5zaW5nbGUtbGF0ZXN0LWltYWdlIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyNjBweDtcbn1cblxuLnNpbmdsZS1sYXRlc3QtaXRlbSAuc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3IHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uc2luZ2xlLWxhdGVzdC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcgLmZhIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zaW5nbGUtbGF0ZXN0LXRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uLXRpdGxlIGgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3R0b215IHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYm90dG9teS1vbmUsIC5ib3R0b215LXR3byB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwO1xufVxuXG4uYm90dG9teS1jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4uY29udGFpbi1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnNlY3Rpb24tbGVmdC1kYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmZhMTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbn1cblxuLnNlY3Rpb24tbGVmdC1kYXRlIHAge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5zZWN0aW9uLWxlZnQtZGF0ZSBwIHNwYW4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbnAucDIge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5oMy5zZWN0aW9uLXJpZ2h0LWgzIHtcbiAgd2lkdGg6IDMwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtdmFyaWFudDogcGV0aXRlLWNhcHM7XG4gIHRleHQtc2hhZG93OiA5cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci13aWR0aDogdGhpY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5zZWN0aW9uLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5jb250YWluLWdhbGxlcmllIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW4tZ2FsbGVyaWUtb25lLCAuY29udGFpbi1nYWxsZXJpZS10d28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0LWdhbGxlcmllIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA1MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbi5iYXItZ2FsbGVyaWUge1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNXB4O1xufVxuXG4uaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xufVxuXG4uaW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiAyMjBweDtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzJkNTA2YjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xufVxuXG4uaW1nOmhvdmVyIC5vdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLnRvcC10aXRlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMGMyZDUwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBub25lO1xufVxuXG4udG9wLXRpdGUgZmEge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmNvbnRlbnQtcGFnaW5hdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtcGFnaW5hdGlvbiBzcGFuIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250ZW50LXBhZ2luYXRpb24gc3Bhbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmN1cnJlbnQge1xuICBjdXJzb3I6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm5vLWFjdHUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogIzBjMmQ1MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/details/news-all/actuality/actuality.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/details/news-all/actuality/actuality.component.ts ***!
  \******************************************************************************/
/*! exports provided: ActualityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualityComponent", function() { return ActualityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var _services_news_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/news/news.service */ "./src/app/services/news/news.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









let ActualityComponent = class ActualityComponent {
    constructor(newsService, activatedRoute, loadSrv, _sanitizer, _snackBar) {
        this.newsService = newsService;
        this.activatedRoute = activatedRoute;
        this.loadSrv = loadSrv;
        this._sanitizer = _sanitizer;
        this._snackBar = _snackBar;
        this.currentActu = {
            "id": 0,
            "slug": "",
            "titre": "",
            "posteur": "",
            "date_creation": "",
            "description": "",
            "image": "",
            "type": "",
            "date_mise_jour": "",
            "galerie": [""]
        };
        this.listActu = [];
        this.nbPagination = [];
        this.currentPagination = 1;
        this.minPagination = 1;
        this.maxPagination = 8;
        this.isNews = false;
        this.currentTitre = null;
        this.currentPosteur = null;
        this.currentDate = null;
        this.galleryOne = [];
        this.galleryTwo = [];
        this.galleryTmp = [];
        this.defaultImg = "./../../../../../assets/images/background/grey.png";
        this.wys = "<p>Holla</p><h4>Mama</h4>&lt;";
        this.noNews = true;
        let type = this.activatedRoute.snapshot.paramMap.get("type");
        let titre = this.activatedRoute.snapshot.paramMap.get("titre");
        let date = this.activatedRoute.snapshot.paramMap.get("date");
        let posteur = this.activatedRoute.snapshot.paramMap.get("posteur");
        if (type == "nouvelles" || type == "nouvelle" || type == "news" || type == "new") {
            this.isNews = true;
        }
        else {
            this.isNews = false;
        }
        if (titre && date && posteur) {
            this.currentTitre = titre;
            this.currentDate = date;
            this.currentPosteur = posteur;
        }
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // if (this.isNews) {
            //   this.listActu = this.newsService.news;
            // } else {
            //   this.listActu = this.newsService.actus;
            // }
            yield this.getEvenements();
        });
    }
    initCurrent() {
        if (this.currentActu) {
            this.initGalleryOne();
            this.initGalleryTwo();
        }
    }
    transform(v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    }
    initGalleryOne() {
        this.galleryOne = this.currentActu.galerie;
        this.galleryTmp = this.currentActu.galerie;
        if (this.galleryOne == null) {
            return;
        }
        let counter = this.galleryOne.length;
        let indice = 0;
        if (this.galleryOne.length > 0) {
            // while(this.galleryOne.length < 6) {
            //   if (indice > counter) {
            //     indice = 0;
            //   }
            //   this.galleryOne.push(this.galleryOne[indice]);
            //   indice++;
            // }
            this.animateGalleryOne();
        }
    }
    initGalleryTwo() {
        this.galleryTmp = this.currentActu.galerie;
        this.galleryTwo = null;
        this.galleryTwo = [];
        if (this.galleryTmp == null) {
            return;
        }
        this.galleryTmp.forEach(element => {
            if (element) {
                this.galleryTwo.push(element);
            }
        });
    }
    initPagination() {
        let nb = this.listActu.length;
        let nbTmp = nb / 4;
        nb = Math.ceil(nbTmp);
        for (let index = 0; index < nb; index++) {
            this.nbPagination.push(index + 1);
        }
    }
    page(page) {
        this.minPagination = (4 * page) - 4;
        this.maxPagination = this.minPagination + 4;
        if (this.minPagination > this.listActu.length) {
            return false;
        }
        this.currentPagination = page;
        this.four_actu = this.listActu.slice(this.minPagination, this.maxPagination);
        this.slideToActu();
    }
    showActu(titre, date, posteur) {
        // console.log("show");
        let tempActu = null;
        this.listActu.forEach(element => {
            // console.log(element.titre + " et " + titre);
            // console.log(element.date_mise_jour + " et " + date);
            // console.log(element.posteur + " et " + posteur);
            if (element.titre == titre && element.date_mise_jour == date && element.posteur == posteur) {
                // console.log("ito");
                tempActu = element;
            }
        });
        this.currentActu = tempActu;
        this.stopAnimation();
        if (this.currentActu) {
            if (this.currentActu !== undefined) {
                this.galleryOne = this.currentActu.galerie;
                this.galleryTmp = this.currentActu.galerie;
                this.initGalleryOne();
                this.initGalleryTwo();
            }
        }
        else {
            this.currentActu = this.listActu[this.listActu.length - 1];
            if (this.currentActu !== undefined) {
                this.galleryOne = this.currentActu.galerie;
                this.galleryTmp = this.currentActu.galerie;
                this.initGalleryOne();
                this.initGalleryTwo();
            }
        }
        this.slideToToppy();
    }
    slideToActu() {
        jquery__WEBPACK_IMPORTED_MODULE_4__([document.documentElement, document.body]).animate({
            scrollTop: jquery__WEBPACK_IMPORTED_MODULE_4__("#top-row").offset().top
        }, 200);
    }
    slideToToppy() {
        jquery__WEBPACK_IMPORTED_MODULE_4__([document.documentElement, document.body]).animate({
            scrollTop: jquery__WEBPACK_IMPORTED_MODULE_4__("#the-toppyy").offset().top
        }, 200);
    }
    animateGalleryOne() {
        let nbItem = this.galleryOne.length;
        let tabMax = [];
        this.timerInterval = setInterval(() => {
            tabMax = [];
            for (let index = 0; index < nbItem; index++) {
                tabMax.push(index);
            }
            // console.log(tabMax);
            for (let index = 0; index < nbItem; index++) {
                let max = tabMax.length;
                let random = Math.floor(Math.random() * (max + 1));
                let rand = random;
                if (!tabMax.includes(random)) {
                    while (random == rand) {
                        random = Math.floor(Math.random() * (max + 1));
                    }
                }
                if (this.galleryOne == null || this.galleryTwo == null) {
                    continue;
                }
                this.galleryOne[index] = this.galleryTwo[random];
                let ind = tabMax.indexOf(random);
                tabMax.splice(ind, 1);
            }
        }, 2000);
    }
    stopAnimation() {
        clearInterval(this.timerInterval);
    }
    changeDate(data, isUpdate) {
        let annee = data.substring(0, 4);
        let mois = data.substring(5, 7);
        let jour = data.substring(8, 10);
        let heure = data.substring(11, 16);
        // console.log(jour +  " " + this.voirMois(mois) + " " + annee+ " à " + heure);
        if (isUpdate) {
            var newDate = jour + " " + this.voirMois(mois) + " " + annee + "  " + heure;
        }
        else {
            var newDate = jour + " " + this.voirMois(mois) + " " + annee;
        }
        return newDate;
    }
    voirMois(mois) {
        let newMois = "";
        switch (mois) {
            case "01": {
                newMois = "Janvier";
                break;
            }
            case "02": {
                newMois = "Février";
                break;
            }
            case "03": {
                newMois = "Mars";
                break;
            }
            case "04": {
                newMois = "Avril";
                break;
            }
            case "05": {
                newMois = "Mai";
                break;
            }
            case "06": {
                newMois = "Juin";
                break;
            }
            case "07": {
                newMois = "Juillet";
                break;
            }
            case "08": {
                newMois = "Août";
                break;
            }
            case "09": {
                newMois = "Septembre";
                break;
            }
            case "10": {
                newMois = "Octobre";
                break;
            }
            case "11": {
                newMois = "Novembre";
                break;
            }
            case "12": {
                newMois = "Décembre";
                break;
            }
        }
        return newMois;
    }
    // async getCurrent() {
    //   if (this.isNews) {
    //     await this.newsService.getTopNouvelle().subscribe(
    //       (data: any) => {
    //         let list: any[] = data.data;
    //         let current = list[0];
    //         console.log("Current");
    //         console.log(current);
    //       }, (err) => {
    //         console.log(err);
    //       }
    //     )
    //   } else {
    //     await this.newsService.getTopActualite().subscribe(
    //       (data: any) => {
    //         let list: any[] = data.data;
    //         let current = list[0];
    //         console.log("Current");
    //         console.log(current);
    //       }, (err) => {
    //         console.log(err);
    //       }
    //     )
    //   }
    // }
    getEvenements() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadSrv.load(true);
            yield this.newsService.getEvenements().subscribe((data) => {
                // console.log(data);
                let list = data.data;
                list.forEach(element => {
                    // console.log(element);
                    let isO = true;
                    let isN = false;
                    element.date_creation = this.changeDate(element.date_creation, isO);
                    element.date_mise_jour = this.changeDate(element.date_mise_jour, isN);
                    if (element.image == null) {
                        element.image = this.defaultImg;
                    }
                    if (element.galerie == null) {
                        element.galerie = [];
                        for (let index = 0; index < 3; index++) {
                            element.galerie.push(this.defaultImg);
                        }
                    }
                    if (this.isNews && element.type == "nouvelle") {
                        this.listActu.push(element);
                    }
                    else if (!this.isNews && element.type == "actualite") {
                        this.listActu.push(element);
                    }
                });
                // this.listActu = list;
                this.currentActu = this.listActu[0];
                this.four_actu = this.listActu.slice(0, 4);
                this.last_actus = this.listActu.slice(this.minPagination, this.maxPagination);
                console.log(this.listActu);
                // console.log("Lenght " + this.listActu.length);
                this.initCurrent();
                this.initPagination();
                if (this.currentTitre && this.currentDate && this.currentPosteur) {
                    console.log("mis tonga");
                    this.showActu(this.currentTitre, this.currentDate, this.currentPosteur);
                }
                this.loadSrv.load(false);
                if (this.listActu.length == 0) {
                    this.noNews = true;
                }
                else {
                    this.noNews = false;
                }
                return this.listActu;
            }, (err) => {
                this.loadSrv.load(false);
                this.noNews = true;
                console.log(err);
                this._snackBar.open(`Serveur inacessible`, "", {
                    duration: 1500,
                    horizontalPosition: "right",
                    verticalPosition: "bottom",
                    panelClass: ["error_snackbar"]
                });
            });
        });
    }
};
ActualityComponent.ctorParameters = () => [
    { type: _services_news_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
];
ActualityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-actuality',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./actuality.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/actuality/actuality.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./actuality.component.scss */ "./src/app/components/details/news-all/actuality/actuality.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../../director-word/responsive.css */ "./src/app/components/director-word/responsive.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Pipe"])({
        name: 'sanitizeHtml'
    })
], ActualityComponent);



/***/ }),

/***/ "./src/app/components/details/news-all/events/events.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/details/news-all/events/events.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  width: 84%;\n  margin-left: 8%;\n  margin-right: 8%;\n}\n\n.noAnnonce {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n  font-size: 30px;\n}\n\n.title {\n  color: #002247;\n  font-size: 50px;\n  font-weight: 500;\n  font-variant: petite-caps;\n  margin-top: 30px;\n}\n\n.card-one {\n  background: whitesmoke;\n  padding: 20px;\n  min-height: 100px;\n  margin-top: 30px;\n}\n\n.title-card-one {\n  font-family: \"Geogrotesque semibold\", Helvetica, Arial, Lucida, sans-serif;\n  font-size: 24px;\n  color: #002247;\n  text-transform: uppercase;\n}\n\n.line {\n  width: 100%;\n  height: 2px;\n  background: #002247;\n}\n\n.contain-img {\n  width: 100%;\n  max-height: 200px;\n  min-height: 200px;\n}\n\n.contain-com {\n  margin-top: 30px;\n}\n\n.contain-com .contain {\n  background: white;\n}\n\n.contain-com .contain .contain-date {\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #000000a6;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  font-size: 13px;\n  font-style: italic;\n}\n\n.contain-com .contain .contain-date fa {\n  margin-right: 10px;\n}\n\n.contain-com .contain .contain-description {\n  padding: 15px;\n  padding-bottom: 20px !important;\n  color: #000000a6;\n  height: 150px;\n  overflow-y: auto;\n}\n\n.contain-description::-webkit-scrollbar {\n  width: 1px;\n  background-color: transparent;\n}\n\n.contain-com .contain .contain-title {\n  font-size: 20px;\n  margin-top: 10px;\n  padding: 10px;\n}\n\n.lire-plus {\n  color: #002247;\n  margin-left: 15px;\n  font-weight: 500;\n  padding-bottom: 20px !important;\n  cursor: pointer;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.lire-plus span {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s, opacity 0.2s, padding-left 0.3s linear;\n  padding-left: -1px;\n}\n\n.lire-plus:hover span {\n  visibility: visible;\n  opacity: 1;\n  padding-left: 15px;\n}\n\n.contain-other-com {\n  margin-top: 30px;\n}\n\n.contain-other-com .list-com {\n  margin-bottom: 30px;\n  margin-left: 0px;\n  background: whitesmoke;\n}\n\n.contain-other-com img {\n  width: 100%;\n  height: 200px;\n}\n\n.description-other {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-top: 10px;\n}\n\n.description-other .title-other {\n  font-weight: 500;\n}\n\n.description-other .detail-other {\n  font-weight: normal;\n}\n\n.list-com .lire-plus {\n  margin-left: 0px !important;\n}\n\n.content-pagination {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.content-pagination span {\n  margin: 10px;\n  cursor: pointer;\n}\n\n.content-pagination span:hover {\n  opacity: 0.7;\n}\n\n.content-src-img {\n  padding: 0px;\n  height: 100%;\n}\n\n.current {\n  cursor: auto !important;\n}\n\n.date-other {\n  font-size: 16px;\n  font-style: italic;\n}\n\n.date-other fa {\n  margin-right: 10px;\n}\n\n@media screen and (min-width: 992px) {\n  .contain-img {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL25ld3MtYWxsL2V2ZW50cy9FOlxcUHJvamV0c1xcV2ViY3VwXFxjb2RlX2Zyb250XFx3ZWJjdXBGcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZGV0YWlsc1xcbmV3cy1hbGxcXGV2ZW50c1xcZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RldGFpbHMvbmV3cy1hbGwvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRFFBO0VBQ0UsY0FuQmM7RUFvQmQsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFuQlU7QUNjWjs7QURRQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBMUJVO0FDcUJaOztBRFFBO0VBQ0UsMEVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FwQ2M7RUFxQ2QseUJBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBM0NjO0FDc0NoQjs7QURRQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxnQkFqRFU7QUM0Q1o7O0FEUUE7RUFDRSxpQkF4RFk7QUNtRGQ7O0FETUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURNRTtFQUNFLGtCQUFBO0FDSko7O0FETUU7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRFFBO0VBQ0ksVUFBQTtFQUNBLDZCQUFBO0FDTEo7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDTEY7O0FEUUE7RUFDRSxjQTdGYztFQThGZCxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDTEY7O0FET0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpRUFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEVUU7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ1BKOztBRFdBO0VBQ0UsZ0JBakhVO0FDeUdaOztBRFlBO0VBQ0UsbUJBdEhVO0VBdUhWLGdCQUFBO0VBQ0Esc0JBQUE7QUNURjs7QURZQTtFQUVFLFdBQUE7RUFDQSxhQUFBO0FDVkY7O0FEYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNWRjs7QURhQTtFQUNFLGdCQUFBO0FDVkY7O0FEYUE7RUFDRSxtQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsMkJBQUE7QUNWRjs7QURhQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1ZGOztBRGFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNWRjs7QURhQTtFQUNFLFlBQUE7QUNWRjs7QURhQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDVkY7O0FEYUE7RUFDRSx1QkFBQTtBQ1ZGOztBRGFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDVkY7O0FEYUE7RUFDRSxrQkFBQTtBQ1ZGOztBRGFBO0VBQ0U7SUFDRSxlQUFBO0VDVkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlscy9uZXdzLWFsbC9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpcnN0LWNvbG9yIDogIzBjMmQ1MDtcclxuJHNlY29uZC1jb2xvciA6ICMwMDIyNDc7XHJcbiRjb2xvci13aGl0ZTogd2hpdGU7XHJcbiRibHVlOiAjMDA1Y2I5O1xyXG5cclxuJG1hcmdpblRvcDogMzBweDtcclxuLm1haW4ge1xyXG4gIHdpZHRoOiA4NCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gIG1hcmdpbi1yaWdodDogOCU7XHJcbn1cclxuXHJcbi5ub0Fubm9uY2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogJHNlY29uZC1jb2xvcjtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xyXG4gIG1hcmdpbi10b3A6ICRtYXJnaW5Ub3A7XHJcbn1cclxuXHJcbi5jYXJkLW9uZSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbi10b3A6ICRtYXJnaW5Ub3A7XHJcbn1cclxuXHJcbi50aXRsZS1jYXJkLW9uZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdHZW9ncm90ZXNxdWUgc2VtaWJvbGQnLEhlbHZldGljYSxBcmlhbCxMdWNpZGEsc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICRzZWNvbmQtY29sb3I7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQ6ICRzZWNvbmQtY29sb3I7XHJcbn1cclxuXHJcbi5jb250YWluLWltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluLWNvbSB7XHJcbiAgbWFyZ2luLXRvcDogJG1hcmdpblRvcDtcclxufVxyXG5cclxuLmNvbnRhaW4tY29tIC5jb250YWluIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgLmNvbnRhaW4tZGF0ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDBhNjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuICAuY29udGFpbi1kYXRlIGZhIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLmNvbnRhaW4tZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMGE2O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbi1kZXNjcmlwdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY29udGFpbi1jb20gLmNvbnRhaW4gLmNvbnRhaW4tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5saXJlLXBsdXMge1xyXG4gIGNvbG9yOiAkc2Vjb25kLWNvbG9yO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG5cclxuICBzcGFuIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuMnMsIHBhZGRpbmctbGVmdCAwLjNzIGxpbmVhcjtcclxuICAgIHBhZGRpbmctbGVmdDogLTFweDtcclxuICB9XHJcbn1cclxuXHJcbi5saXJlLXBsdXM6aG92ZXIge1xyXG4gIHNwYW4ge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbi1vdGhlci1jb20ge1xyXG4gIG1hcmdpbi10b3A6ICRtYXJnaW5Ub3A7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbi1vdGhlci1jb20gLmxpc3QtY29tIHtcclxuICBtYXJnaW4tYm90dG9tOiAkbWFyZ2luVG9wO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLmNvbnRhaW4tb3RoZXItY29tIGltZyB7XHJcbiAgLy8gbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1vdGhlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLW90aGVyIC50aXRsZS1vdGhlciB7XHJcbiAgZm9udC13ZWlnaHQ6ICA1MDA7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1vdGhlciAuZGV0YWlsLW90aGVyIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4ubGlzdC1jb20gLmxpcmUtcGx1cyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGVudC1wYWdpbmF0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LXBhZ2luYXRpb24gc3BhbiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQtcGFnaW5hdGlvbiBzcGFuOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5jb250ZW50LXNyYy1pbWcge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jdXJyZW50IHtcclxuICBjdXJzb3I6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGUtb3RoZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5kYXRlLW90aGVyIGZhIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmNvbnRhaW4taW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIC8vIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIubWFpbiB7XG4gIHdpZHRoOiA4NCU7XG4gIG1hcmdpbi1sZWZ0OiA4JTtcbiAgbWFyZ2luLXJpZ2h0OiA4JTtcbn1cblxuLm5vQW5ub25jZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICMwMDIyNDc7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNhcmQtb25lIHtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi50aXRsZS1jYXJkLW9uZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb2dyb3Rlc3F1ZSBzZW1pYm9sZFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBMdWNpZGEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMwMDIyNDc7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDAyMjQ3O1xufVxuXG4uY29udGFpbi1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uY29udGFpbi1jb20ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uY29udGFpbi1jb20gLmNvbnRhaW4ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jb250YWluLWNvbSAuY29udGFpbiAuY29udGFpbi1kYXRlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzAwMDAwMGE2O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uY29udGFpbi1jb20gLmNvbnRhaW4gLmNvbnRhaW4tZGF0ZSBmYSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jb250YWluLWNvbSAuY29udGFpbiAuY29udGFpbi1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwMDAwYTY7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jb250YWluLWRlc2NyaXB0aW9uOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udGFpbi1jb20gLmNvbnRhaW4gLmNvbnRhaW4tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5saXJlLXBsdXMge1xuICBjb2xvcjogIzAwMjI0NztcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmxpcmUtcGx1cyBzcGFuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuMnMsIHBhZGRpbmctbGVmdCAwLjNzIGxpbmVhcjtcbiAgcGFkZGluZy1sZWZ0OiAtMXB4O1xufVxuXG4ubGlyZS1wbHVzOmhvdmVyIHNwYW4ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5jb250YWluLW90aGVyLWNvbSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5jb250YWluLW90aGVyLWNvbSAubGlzdC1jb20ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG4uY29udGFpbi1vdGhlci1jb20gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5kZXNjcmlwdGlvbi1vdGhlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmRlc2NyaXB0aW9uLW90aGVyIC50aXRsZS1vdGhlciB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5kZXNjcmlwdGlvbi1vdGhlciAuZGV0YWlsLW90aGVyIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmxpc3QtY29tIC5saXJlLXBsdXMge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50LXBhZ2luYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50LXBhZ2luYXRpb24gc3BhbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGVudC1wYWdpbmF0aW9uIHNwYW46aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5jb250ZW50LXNyYy1pbWcge1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmN1cnJlbnQge1xuICBjdXJzb3I6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmRhdGUtb3RoZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmRhdGUtb3RoZXIgZmEge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluLWltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/details/news-all/events/events.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/details/news-all/events/events.component.ts ***!
  \************************************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var _services_annonces_annonces_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/annonces/annonces.service */ "./src/app/services/annonces/annonces.service.ts");
/* harmony import */ var _popup_event_popup_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../popup-event/popup-event.component */ "./src/app/components/details/news-all/popup-event/popup-event.component.ts");
/* harmony import */ var _services_news_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/news/news.service */ "./src/app/services/news/news.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let EventsComponent = class EventsComponent {
    constructor(newsService, dialog, annonceService, loadSrv) {
        this.newsService = newsService;
        this.dialog = dialog;
        this.annonceService = annonceService;
        this.loadSrv = loadSrv;
        this.nbPagination = [];
        this.currentPagination = 1;
        this.minPagination = 3;
        this.maxPagination = 6;
        this.defaultImg = "./../../../../../assets/images/background/grey.png";
    }
    ngOnInit() {
        this.getTopAnnonces();
        this.getAnnonces();
    }
    initPagination() {
        let nb = this.news.length;
        let nbTmp = nb / 3;
        nb = Math.ceil(nbTmp);
        nb = nb - 1; // remove the A la Une
        for (let index = 0; index < nb; index++) {
            this.nbPagination.push(index + 1);
        }
    }
    page(page) {
        this.minPagination = 3 * page;
        this.maxPagination = this.minPagination + 3;
        if (this.minPagination > this.news.length) {
            return false;
        }
        this.currentPagination = page;
        this.last_news = this.news.slice(this.minPagination, this.maxPagination);
        // var scrollTo = $("#contain-other-intern");//#contain-other-intern
        // var container = $(".contain-other-com");
        // var position = scrollTo.offset().top - container.offset().top + container.scrollTop();
        // container.scrollTop(position);
        jquery__WEBPACK_IMPORTED_MODULE_6__([document.documentElement, document.body]).animate({
            scrollTop: jquery__WEBPACK_IMPORTED_MODULE_6__("#contain-other-intern").offset().top - 200
        }, 200);
    }
    lire(annonce) {
        let data = {
            titre: annonce.titre,
            description: annonce.description,
            date: annonce.date_creation,
            // posteur: annonce.posteur,
            image: annonce.image,
            galerie: annonce.galerie
        };
        const dialogRef = this.dialog.open(_popup_event_popup_event_component__WEBPACK_IMPORTED_MODULE_3__["PopupEventComponent"], { data });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    getAnnonces() {
        this.loadSrv.load(true);
        this.annonceService.getAnnonces().subscribe((data) => {
            let list = data.data;
            list.forEach(element => {
                let isO = true;
                let isN = false;
                element.date_creation = this.changeDate(element.date_creation, isO);
                element.date_mise_jour = this.changeDate(element.date_mise_jour, isN);
                if (element.image == null) {
                    element.image = this.defaultImg;
                }
            });
            console.log(list);
            this.news = list;
            this.last_news = this.news.slice(this.minPagination, this.maxPagination);
            this.initPagination();
            this.loadSrv.load(false);
        }, (err) => {
            console.log(err);
            this.loadSrv.load(false);
        });
    }
    getTopAnnonces() {
        this.annonceService.getTopAnnonces().subscribe((data) => {
            let list = data.data;
            list.forEach(element => {
                let isO = true;
                let isN = false;
                element.date_creation = this.changeDate(element.date_creation, isO);
                element.date_mise_jour = this.changeDate(element.date_mise_jour, isN);
                if (element.image == null) {
                    element.image = this.defaultImg;
                }
            });
            console.log(list);
            this.three_news = list;
        }, (err) => {
            console.log(err);
        });
    }
    changeDate(data, isUpdate) {
        let annee = data.substring(0, 4);
        let mois = data.substring(5, 7);
        let jour = data.substring(8, 10);
        let heure = data.substring(11, 16);
        if (isUpdate) {
            var newDate = jour + " " + this.voirMois(mois) + " " + annee + " à " + heure;
        }
        else {
            var newDate = jour + " " + this.voirMois(mois) + " " + annee;
        }
        return newDate;
    }
    voirMois(mois) {
        let newMois = "";
        switch (mois) {
            case "01": {
                newMois = "Janvier";
                break;
            }
            case "02": {
                newMois = "Février";
                break;
            }
            case "03": {
                newMois = "Mars";
                break;
            }
            case "04": {
                newMois = "Avril";
                break;
            }
            case "05": {
                newMois = "Mai";
                break;
            }
            case "06": {
                newMois = "Juin";
                break;
            }
            case "07": {
                newMois = "Juillet";
                break;
            }
            case "08": {
                newMois = "Août";
                break;
            }
            case "09": {
                newMois = "Septembre";
                break;
            }
            case "10": {
                newMois = "Octobre";
                break;
            }
            case "11": {
                newMois = "Novembre";
                break;
            }
            case "12": {
                newMois = "Décembre";
                break;
            }
        }
        return newMois;
    }
};
EventsComponent.ctorParameters = () => [
    { type: _services_news_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _services_annonces_annonces_service__WEBPACK_IMPORTED_MODULE_2__["AnnoncesService"] },
    { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] }
];
EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-events',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./events.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/events/events.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./events.component.scss */ "./src/app/components/details/news-all/events/events.component.scss")).default]
    })
], EventsComponent);



/***/ }),

/***/ "./src/app/components/details/news-all/news-all.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/details/news-all/news-all.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.header-news {\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n  width: 100%;\n  text-align: center;\n  background-image: linear-gradient(to bottom, #ffffff, #ffffffea, #ffffffde, #ffffff09, #ffffff00), url('Vue-aérienne-1024x414.jpg');\n  background-position: center;\n  background-size: cover;\n  padding-top: 80px;\n}\n.title-header-news {\n  font-size: 50px;\n  font-variant: petite-caps;\n  font-weight: 500;\n  color: #0c2d50;\n}\n.descr-header-news {\n  color: #002247;\n  width: 70%;\n  margin-left: 15%;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL25ld3MtYWxsL25ld3MtYWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RldGFpbHMvbmV3cy1hbGwvRTpcXFByb2pldHNcXFdlYmN1cFxcY29kZV9mcm9udFxcd2ViY3VwRnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRldGFpbHNcXG5ld3MtYWxsXFxuZXdzLWFsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNJaEI7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsbUlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QURIRjtBQ01BO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQXJCYTtBRGtCZjtBQ01BO0VBQ0UsY0F4QmM7RUF5QmQsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBREhGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL25ld3MtYWxsL25ld3MtYWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmhlYWRlci1uZXdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiwgI2ZmZmZmZmVhLCAjZmZmZmZmZGUsICNmZmZmZmYwOSwgI2ZmZmZmZjAwKSwgdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQvVnVlLWHDqXJpZW5uZS0xMDI0eDQxNC5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG59XG5cbi50aXRsZS1oZWFkZXItbmV3cyB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwYzJkNTA7XG59XG5cbi5kZXNjci1oZWFkZXItbmV3cyB7XG4gIGNvbG9yOiAjMDAyMjQ3O1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBmb250LXNpemU6IDE4cHg7XG59IiwiJGZpcnN0LWNvbG9yIDogIzBjMmQ1MDtcclxuJHNlY29uZC1jb2xvciA6ICMwMDIyNDc7XHJcbiRjb2xvci13aGl0ZTogd2hpdGU7XHJcblxyXG4uaGVhZGVyLW5ld3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9Bbm9uMTUxLUJvdW5kbGVzcy1CYW5uZXItaGQuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYsICNmZmZmZmZlYSwgI2ZmZmZmZmRlLCAjZmZmZmZmMDksICNmZmZmZmYwMCksdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQvVnVlLWHDqXJpZW5uZS0xMDI0eDQxNC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcGFkZGluZy10b3A6IDgwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1oZWFkZXItbmV3cyB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtdmFyaWFudDogcGV0aXRlLWNhcHM7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogJGZpcnN0LWNvbG9yO1xyXG59XHJcblxyXG4uZGVzY3ItaGVhZGVyLW5ld3Mge1xyXG4gIGNvbG9yOiAkc2Vjb25kLWNvbG9yO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/details/news-all/news-all.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/details/news-all/news-all.component.ts ***!
  \*******************************************************************/
/*! exports provided: NewsAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsAllComponent", function() { return NewsAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewsAllComponent = class NewsAllComponent {
    constructor() {
        this.bg = "./../../../../assets/images/background/bg-news.jpg";
    }
    ngOnInit() {
    }
};
NewsAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news-all',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news-all.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/news-all.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news-all.component.scss */ "./src/app/components/details/news-all/news-all.component.scss")).default]
    })
], NewsAllComponent);



/***/ }),

/***/ "./src/app/components/details/news-all/popup-event/popup-event.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/details/news-all/popup-event/popup-event.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image {\n  width: 100%;\n}\n\n.main-popup {\n  background-color: whitesmoke;\n}\n\n.img-popup {\n  width: 100%;\n  height: 40vh !important;\n}\n\n.inside-popup {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.outside-popup {\n  width: 100%;\n}\n\n.main-popup {\n  height: 95vh;\n  width: 100vh;\n}\n\n.leftSide {\n  padding: 10px;\n}\n\n.detail {\n  font-style: italic;\n}\n\n.rightSide {\n  padding: 10px;\n  height: 300px;\n  overflow-y: scroll;\n  text-align: justify;\n}\n\n.rightSide::-webkit-scrollbar {\n  width: 1px;\n  background-color: white;\n}\n\n.contain-title {\n  width: 100%;\n  text-align: center;\n  padding-top: 30px;\n}\n\n.contain-date, .contain-posteur {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n@media screen and (max-width: 992px) {\n  .rightSide {\n    width: 70%;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .rightSide {\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 520px) {\n  .rightSide {\n    width: 40%;\n  }\n}\n\n@media screen and (max-width: 390px) {\n  .rightSide {\n    width: 27%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL25ld3MtYWxsL3BvcHVwLWV2ZW50L0U6XFxQcm9qZXRzXFxXZWJjdXBcXGNvZGVfZnJvbnRcXHdlYmN1cEZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxkZXRhaWxzXFxuZXdzLWFsbFxccG9wdXAtZXZlbnRcXHBvcHVwLWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RldGFpbHMvbmV3cy1hbGwvcG9wdXAtZXZlbnQvcG9wdXAtZXZlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLFVBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0U7SUFDRSxVQUFBO0VDREY7QUFDRjs7QURJQTtFQUNFO0lBQ0UsVUFBQTtFQ0ZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RldGFpbHMvbmV3cy1hbGwvcG9wdXAtZXZlbnQvcG9wdXAtZXZlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbi1wb3B1cCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLmltZy1wb3B1cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnNpZGUtcG9wdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5vdXRzaWRlLXBvcHVwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW4tcG9wdXAge1xyXG4gIGhlaWdodDogOTV2aDtcclxuICB3aWR0aDogMTAwdmg7XHJcbn1cclxuXHJcbi5sZWZ0U2lkZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmRldGFpbCB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4ucmlnaHRTaWRlIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5yaWdodFNpZGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29udGFpbi10aXRsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uY29udGFpbi1kYXRlLCAuY29udGFpbi1wb3N0ZXVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5yaWdodFNpZGUge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgLnJpZ2h0U2lkZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAucmlnaHRTaWRlIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTBweCkge1xyXG4gIC5yaWdodFNpZGUge1xyXG4gICAgd2lkdGg6IDI3JTtcclxuICB9XHJcbn1cclxuIiwiLmltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLXBvcHVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmltZy1wb3B1cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwdmggIWltcG9ydGFudDtcbn1cblxuLmluc2lkZS1wb3B1cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm91dHNpZGUtcG9wdXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW4tcG9wdXAge1xuICBoZWlnaHQ6IDk1dmg7XG4gIHdpZHRoOiAxMDB2aDtcbn1cblxuLmxlZnRTaWRlIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmRldGFpbCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnJpZ2h0U2lkZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnJpZ2h0U2lkZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW4tdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmNvbnRhaW4tZGF0ZSwgLmNvbnRhaW4tcG9zdGV1ciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5yaWdodFNpZGUge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5yaWdodFNpZGUge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gIC5yaWdodFNpZGUge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5MHB4KSB7XG4gIC5yaWdodFNpZGUge1xuICAgIHdpZHRoOiAyNyU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/details/news-all/popup-event/popup-event.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/details/news-all/popup-event/popup-event.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PopupEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupEventComponent", function() { return PopupEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let PopupEventComponent = class PopupEventComponent {
    constructor(data) {
        this.data = data;
        this.titre = null;
        this.description = null;
        this.date = null;
        this.posteur = null;
        this.image = null;
    }
    ngOnInit() {
        this.titre = this.data.titre;
        this.description = this.data.description;
        this.date = this.data.date;
        this.posteur = this.data.posteur;
        this.image = this.data.image;
        this.galerie = this.data.galerie;
    }
};
PopupEventComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
PopupEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-event',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-event.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/popup-event/popup-event.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-event.component.scss */ "./src/app/components/details/news-all/popup-event/popup-event.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PopupEventComponent);



/***/ }),

/***/ "./src/app/components/director-word/color.css":
/*!****************************************************!*\
  !*** ./src/app/components/director-word/color.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a:hover, .carousel-style-one.owl-theme .owl-controls .owl-nav div:hover, .button-green:hover, .account-dropdown a:hover, .mainmenu ul#nav > li:hover > a, .mainmenu ul#nav li ul.sub-menu > li:hover > a, .mainmenu ul#nav li ul.sub-menu li ul.inside-menu > li > a:hover, .search-form button[type=\"submit\"], .mean-container .mean-nav ul li a:hover, .mean-container a.meanmenu-reveal, .single-item-text h4 a:hover, .single-latest-text > h3 a:hover, .single-product-text h4 a:hover, .single-event-item:hover h3 a, .subscribe-form > button:hover, .footer-list a:hover, .newsletter-two .subscribe-form > button:hover, .pagination-content.number .pagination li a, .single-teacher-text > h3 a:hover, .author-info > h4 a:hover, span.reply a, .sidebar-widget .single-teacher-text > h3 a:hover, .breadcrumb-bar a:hover, .recent-text > h4 a:hover, .related-tag .tags li a:hover, .link-social > a:hover, .shortcode-area i, .shortcode-area h3, .text-green, .header-top span.text-green, .slick-prev:hover:before, .slick-next:hover:before, .footer-widget-list li a:hover, .footer-container .social-links-three > a:hover  {\n  color: #044973;\n}\n.header-top:before, .about-area:before, .newsletter-area:before, .mainmenu ul#nav > li > a:after, .mainmenu ul#nav.menu-white > li > a:after, .search-menu, .button-default:hover, .button-green, .about-area .button-default, .single-item .button-default, .button-large.button-default, .single-latest-item .button-default, .single-product-text .button-default, .single-event-item .button-default, .subscribe-form > button, .social-icons > a:hover, .footer-area, .newsletter-two, .pagination-content.number .pagination li a:hover, .pagination-content.number .pagination li.current a, .pagination-content.number .pagination li:first-child a, .pagination-content.number .pagination li:last-child a, .product-details-content .button-default, .product-details-content .social-links a:hover, .duration-title, h4.title:after, .tution-fee, .single-sidebar-widget .social-links a:hover, .single-sidebar-widget .tags li a:hover, .pagination-content .pagination, .news-details-content .social-links a:hover, .contact-form-area .button-default, .skill-bar-item .progress-bar, #scrollUp, .bg-green, .bg-blue:hover, .preview-2 .nivo-directionNav a.nivo-prevNav:hover::before, .preview-2 .nivo-directionNav a.nivo-nextNav:hover::before, .slider-three .preview-2 .nivo-controlNav a, .footer-widget-area.footer-widget-four  {\n  background: #044973;\n}\n#particles-js, #particles-js.bg-color-1 {\n    background-color: #044973;\n}\n.search-form, .single-item, .single-latest-text, .single-product-text, .single-event-text, .subscribe-form > button, .subscribe-form > button:hover, .pagination-content.number .pagination li a, .subscribe-form > button, .subscribe-form > button:hover, .pagination-content.number .pagination li a, .pagination-content.number .pagination li a:hover, .pagination-content.number .pagination li.current a, .product-details-content .social-links a:hover, .single-teacher-text, .single-course-details, .course-duration .text, .tutor-image > img, .single-sidebar-widget .social-links a:hover, .single-sidebar-widget .tags li a:hover, .single-sidebar-widget .single-item, .event-details-content .single-event-item, .recent-content-item > a, .quote-section, .news-details-content .social-links a:hover, .shortcode-area i, .shortcode-area h3, .border-green, .slider-three .nivo-controlNav a.active:before, .slider-three .nivo-controlNav a:hover:before {\n  border-color: #044973;\n}\n.header-top:after, .about-area:after {\n    border-color: rgba(0, 0, 0, 0) #044973 #044973 rgba(0, 0, 0, 0);\n}\n.about-area:after, .newsletter-area:after {\n    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #044973 #044973;\n}\n.slider-area::after, .overlay-light-fullwidth::after {\n    background: rgba(134, 188, 66, 0.6) none repeat scroll 0 0;\n}\n.overlay-light-2-fullwidth:after, .semi-transparent  {\n    background: rgba(134, 188, 66, 0.4) none repeat scroll 0 0;\n}\n.header-logo-menu.stick.semi-transparent, .gallery-img, .gallery-img .hover-effect  {\n    background: rgba(134, 188, 66, 0.85) none repeat scroll 0 0;\n}\n.footer-img a:before {\n    background: #117abe none repeat scroll 0 0;\n}\n.single-teacher-image > a:after {\n    background: #117abe none repeat scroll 0 0;\n}\n.social-links > a:hover {\n    background: #044973 none repeat scroll 0 0;\n    border-color: #044973;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXJlY3Rvci13b3JkL2NvbG9yLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtJQUNJLCtEQUErRDtBQUNuRTtBQUNBO0lBQ0ksK0RBQStEO0FBQ25FO0FBQ0E7SUFDSSwwREFBMEQ7QUFDOUQ7QUFDQTtJQUNJLDBEQUEwRDtBQUM5RDtBQUNBO0lBQ0ksMkRBQTJEO0FBQy9EO0FBQ0E7SUFDSSwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlyZWN0b3Itd29yZC9jb2xvci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVyLCAuY2Fyb3VzZWwtc3R5bGUtb25lLm93bC10aGVtZSAub3dsLWNvbnRyb2xzIC5vd2wtbmF2IGRpdjpob3ZlciwgLmJ1dHRvbi1ncmVlbjpob3ZlciwgLmFjY291bnQtZHJvcGRvd24gYTpob3ZlciwgLm1haW5tZW51IHVsI25hdiA+IGxpOmhvdmVyID4gYSwgLm1haW5tZW51IHVsI25hdiBsaSB1bC5zdWItbWVudSA+IGxpOmhvdmVyID4gYSwgLm1haW5tZW51IHVsI25hdiBsaSB1bC5zdWItbWVudSBsaSB1bC5pbnNpZGUtbWVudSA+IGxpID4gYTpob3ZlciwgLnNlYXJjaC1mb3JtIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdLCAubWVhbi1jb250YWluZXIgLm1lYW4tbmF2IHVsIGxpIGE6aG92ZXIsIC5tZWFuLWNvbnRhaW5lciBhLm1lYW5tZW51LXJldmVhbCwgLnNpbmdsZS1pdGVtLXRleHQgaDQgYTpob3ZlciwgLnNpbmdsZS1sYXRlc3QtdGV4dCA+IGgzIGE6aG92ZXIsIC5zaW5nbGUtcHJvZHVjdC10ZXh0IGg0IGE6aG92ZXIsIC5zaW5nbGUtZXZlbnQtaXRlbTpob3ZlciBoMyBhLCAuc3Vic2NyaWJlLWZvcm0gPiBidXR0b246aG92ZXIsIC5mb290ZXItbGlzdCBhOmhvdmVyLCAubmV3c2xldHRlci10d28gLnN1YnNjcmliZS1mb3JtID4gYnV0dG9uOmhvdmVyLCAucGFnaW5hdGlvbi1jb250ZW50Lm51bWJlciAucGFnaW5hdGlvbiBsaSBhLCAuc2luZ2xlLXRlYWNoZXItdGV4dCA+IGgzIGE6aG92ZXIsIC5hdXRob3ItaW5mbyA+IGg0IGE6aG92ZXIsIHNwYW4ucmVwbHkgYSwgLnNpZGViYXItd2lkZ2V0IC5zaW5nbGUtdGVhY2hlci10ZXh0ID4gaDMgYTpob3ZlciwgLmJyZWFkY3J1bWItYmFyIGE6aG92ZXIsIC5yZWNlbnQtdGV4dCA+IGg0IGE6aG92ZXIsIC5yZWxhdGVkLXRhZyAudGFncyBsaSBhOmhvdmVyLCAubGluay1zb2NpYWwgPiBhOmhvdmVyLCAuc2hvcnRjb2RlLWFyZWEgaSwgLnNob3J0Y29kZS1hcmVhIGgzLCAudGV4dC1ncmVlbiwgLmhlYWRlci10b3Agc3Bhbi50ZXh0LWdyZWVuLCAuc2xpY2stcHJldjpob3ZlcjpiZWZvcmUsIC5zbGljay1uZXh0OmhvdmVyOmJlZm9yZSwgLmZvb3Rlci13aWRnZXQtbGlzdCBsaSBhOmhvdmVyLCAuZm9vdGVyLWNvbnRhaW5lciAuc29jaWFsLWxpbmtzLXRocmVlID4gYTpob3ZlciAge1xuICBjb2xvcjogIzA0NDk3Mztcbn1cbi5oZWFkZXItdG9wOmJlZm9yZSwgLmFib3V0LWFyZWE6YmVmb3JlLCAubmV3c2xldHRlci1hcmVhOmJlZm9yZSwgLm1haW5tZW51IHVsI25hdiA+IGxpID4gYTphZnRlciwgLm1haW5tZW51IHVsI25hdi5tZW51LXdoaXRlID4gbGkgPiBhOmFmdGVyLCAuc2VhcmNoLW1lbnUsIC5idXR0b24tZGVmYXVsdDpob3ZlciwgLmJ1dHRvbi1ncmVlbiwgLmFib3V0LWFyZWEgLmJ1dHRvbi1kZWZhdWx0LCAuc2luZ2xlLWl0ZW0gLmJ1dHRvbi1kZWZhdWx0LCAuYnV0dG9uLWxhcmdlLmJ1dHRvbi1kZWZhdWx0LCAuc2luZ2xlLWxhdGVzdC1pdGVtIC5idXR0b24tZGVmYXVsdCwgLnNpbmdsZS1wcm9kdWN0LXRleHQgLmJ1dHRvbi1kZWZhdWx0LCAuc2luZ2xlLWV2ZW50LWl0ZW0gLmJ1dHRvbi1kZWZhdWx0LCAuc3Vic2NyaWJlLWZvcm0gPiBidXR0b24sIC5zb2NpYWwtaWNvbnMgPiBhOmhvdmVyLCAuZm9vdGVyLWFyZWEsIC5uZXdzbGV0dGVyLXR3bywgLnBhZ2luYXRpb24tY29udGVudC5udW1iZXIgLnBhZ2luYXRpb24gbGkgYTpob3ZlciwgLnBhZ2luYXRpb24tY29udGVudC5udW1iZXIgLnBhZ2luYXRpb24gbGkuY3VycmVudCBhLCAucGFnaW5hdGlvbi1jb250ZW50Lm51bWJlciAucGFnaW5hdGlvbiBsaTpmaXJzdC1jaGlsZCBhLCAucGFnaW5hdGlvbi1jb250ZW50Lm51bWJlciAucGFnaW5hdGlvbiBsaTpsYXN0LWNoaWxkIGEsIC5wcm9kdWN0LWRldGFpbHMtY29udGVudCAuYnV0dG9uLWRlZmF1bHQsIC5wcm9kdWN0LWRldGFpbHMtY29udGVudCAuc29jaWFsLWxpbmtzIGE6aG92ZXIsIC5kdXJhdGlvbi10aXRsZSwgaDQudGl0bGU6YWZ0ZXIsIC50dXRpb24tZmVlLCAuc2luZ2xlLXNpZGViYXItd2lkZ2V0IC5zb2NpYWwtbGlua3MgYTpob3ZlciwgLnNpbmdsZS1zaWRlYmFyLXdpZGdldCAudGFncyBsaSBhOmhvdmVyLCAucGFnaW5hdGlvbi1jb250ZW50IC5wYWdpbmF0aW9uLCAubmV3cy1kZXRhaWxzLWNvbnRlbnQgLnNvY2lhbC1saW5rcyBhOmhvdmVyLCAuY29udGFjdC1mb3JtLWFyZWEgLmJ1dHRvbi1kZWZhdWx0LCAuc2tpbGwtYmFyLWl0ZW0gLnByb2dyZXNzLWJhciwgI3Njcm9sbFVwLCAuYmctZ3JlZW4sIC5iZy1ibHVlOmhvdmVyLCAucHJldmlldy0yIC5uaXZvLWRpcmVjdGlvbk5hdiBhLm5pdm8tcHJldk5hdjpob3Zlcjo6YmVmb3JlLCAucHJldmlldy0yIC5uaXZvLWRpcmVjdGlvbk5hdiBhLm5pdm8tbmV4dE5hdjpob3Zlcjo6YmVmb3JlLCAuc2xpZGVyLXRocmVlIC5wcmV2aWV3LTIgLm5pdm8tY29udHJvbE5hdiBhLCAuZm9vdGVyLXdpZGdldC1hcmVhLmZvb3Rlci13aWRnZXQtZm91ciAge1xuICBiYWNrZ3JvdW5kOiAjMDQ0OTczO1xufVxuI3BhcnRpY2xlcy1qcywgI3BhcnRpY2xlcy1qcy5iZy1jb2xvci0xIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ0OTczO1xufVxuLnNlYXJjaC1mb3JtLCAuc2luZ2xlLWl0ZW0sIC5zaW5nbGUtbGF0ZXN0LXRleHQsIC5zaW5nbGUtcHJvZHVjdC10ZXh0LCAuc2luZ2xlLWV2ZW50LXRleHQsIC5zdWJzY3JpYmUtZm9ybSA+IGJ1dHRvbiwgLnN1YnNjcmliZS1mb3JtID4gYnV0dG9uOmhvdmVyLCAucGFnaW5hdGlvbi1jb250ZW50Lm51bWJlciAucGFnaW5hdGlvbiBsaSBhLCAuc3Vic2NyaWJlLWZvcm0gPiBidXR0b24sIC5zdWJzY3JpYmUtZm9ybSA+IGJ1dHRvbjpob3ZlciwgLnBhZ2luYXRpb24tY29udGVudC5udW1iZXIgLnBhZ2luYXRpb24gbGkgYSwgLnBhZ2luYXRpb24tY29udGVudC5udW1iZXIgLnBhZ2luYXRpb24gbGkgYTpob3ZlciwgLnBhZ2luYXRpb24tY29udGVudC5udW1iZXIgLnBhZ2luYXRpb24gbGkuY3VycmVudCBhLCAucHJvZHVjdC1kZXRhaWxzLWNvbnRlbnQgLnNvY2lhbC1saW5rcyBhOmhvdmVyLCAuc2luZ2xlLXRlYWNoZXItdGV4dCwgLnNpbmdsZS1jb3Vyc2UtZGV0YWlscywgLmNvdXJzZS1kdXJhdGlvbiAudGV4dCwgLnR1dG9yLWltYWdlID4gaW1nLCAuc2luZ2xlLXNpZGViYXItd2lkZ2V0IC5zb2NpYWwtbGlua3MgYTpob3ZlciwgLnNpbmdsZS1zaWRlYmFyLXdpZGdldCAudGFncyBsaSBhOmhvdmVyLCAuc2luZ2xlLXNpZGViYXItd2lkZ2V0IC5zaW5nbGUtaXRlbSwgLmV2ZW50LWRldGFpbHMtY29udGVudCAuc2luZ2xlLWV2ZW50LWl0ZW0sIC5yZWNlbnQtY29udGVudC1pdGVtID4gYSwgLnF1b3RlLXNlY3Rpb24sIC5uZXdzLWRldGFpbHMtY29udGVudCAuc29jaWFsLWxpbmtzIGE6aG92ZXIsIC5zaG9ydGNvZGUtYXJlYSBpLCAuc2hvcnRjb2RlLWFyZWEgaDMsIC5ib3JkZXItZ3JlZW4sIC5zbGlkZXItdGhyZWUgLm5pdm8tY29udHJvbE5hdiBhLmFjdGl2ZTpiZWZvcmUsIC5zbGlkZXItdGhyZWUgLm5pdm8tY29udHJvbE5hdiBhOmhvdmVyOmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzA0NDk3Mztcbn1cblxuLmhlYWRlci10b3A6YWZ0ZXIsIC5hYm91dC1hcmVhOmFmdGVyIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCkgIzA0NDk3MyAjMDQ0OTczIHJnYmEoMCwgMCwgMCwgMCk7XG59XG4uYWJvdXQtYXJlYTphZnRlciwgLm5ld3NsZXR0ZXItYXJlYTphZnRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApIHJnYmEoMCwgMCwgMCwgMCkgIzA0NDk3MyAjMDQ0OTczO1xufVxuLnNsaWRlci1hcmVhOjphZnRlciwgLm92ZXJsYXktbGlnaHQtZnVsbHdpZHRoOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMzQsIDE4OCwgNjYsIDAuNikgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cbi5vdmVybGF5LWxpZ2h0LTItZnVsbHdpZHRoOmFmdGVyLCAuc2VtaS10cmFuc3BhcmVudCAge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTM0LCAxODgsIDY2LCAwLjQpIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG4uaGVhZGVyLWxvZ28tbWVudS5zdGljay5zZW1pLXRyYW5zcGFyZW50LCAuZ2FsbGVyeS1pbWcsIC5nYWxsZXJ5LWltZyAuaG92ZXItZWZmZWN0ICB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMzQsIDE4OCwgNjYsIDAuODUpIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG4uZm9vdGVyLWltZyBhOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogIzExN2FiZSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xufVxuLnNpbmdsZS10ZWFjaGVyLWltYWdlID4gYTphZnRlciB7XG4gICAgYmFja2dyb3VuZDogIzExN2FiZSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xufVxuLnNvY2lhbC1saW5rcyA+IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwNDQ5NzMgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXItY29sb3I6ICMwNDQ5NzM7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/director-word/director-word.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/director-word/director-word.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif !important;\n}\n\n.header-top:before,\n.about-area:before,\n.newsletter-area:before {\n  content: \"\";\n  height: 48px;\n  position: absolute;\n  right: 0;\n  top: 10px;\n  width: 43%;\n}\n\n.header-top:after,\n.about-area:after,\n.newsletter-area:after {\n  -moz-border-bottom-colors: none;\n  -moz-border-left-colors: none;\n  -moz-border-right-colors: none;\n  -moz-border-top-colors: none;\n  -o-border-image: none;\n  border-image: none;\n  border-style: solid;\n  border-width: 24px 10px;\n  content: \"\";\n  height: 5px;\n  position: absolute;\n  right: 43%;\n  top: 10px;\n  width: 0;\n}\n\n/*----------------------------------------*/\n\n/*  4. About Area\n/*----------------------------------------*/\n\n.about-area {\n  background-color: #0c2d50;\n  color: #ffffff;\n  margin-top: 100px;\n  padding-bottom: 54px;\n  position: relative;\n  margin-bottom: 100px;\n}\n\n.about-area:before {\n  height: 110px;\n  left: 0;\n  right: auto;\n  top: -20px;\n  width: 49.2%;\n}\n\n.about-area:after {\n  border-width: 55px 30px;\n  left: 49.2%;\n  top: -20px;\n  right: auto;\n}\n\n.about-area h3 {\n  font-size: 30px;\n  margin-bottom: 79px;\n  padding-top: 22px;\n  z-index: 9;\n  position: relative;\n}\n\n.about-area p {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif !important;\n  line-height: 26px;\n  margin-bottom: 42px;\n}\n\n.about-container {\n  margin-left: 70px;\n}\n\n.about-area .button-default {\n  padding: 9px 41px;\n}\n\n.about-container > .button-default:hover {\n  background: #ffffff none repeat scroll 0 0;\n  color: #2d3e50;\n}\n\n.timber {\n  right: 20px;\n  position: relative;\n  bottom: 20px;\n  width: 100%;\n  /* background: red; */\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.contain-director {\n  margin-top: 40px;\n  text-align: center;\n}\n\nimg#imgDirector {\n  width: 250px;\n  height: 300px;\n}\n\n.name-director {\n  width: 100% !important;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding: 3px;\n}\n\n@media screen and (max-width: 992px) {\n  .about-area p {\n    line-height: 26px;\n    margin-bottom: 42px;\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .about-area {\n    margin-top: 80px !important;\n    background: #0c2d50 !important;\n  }\n\n  .about-container {\n    margin-left: -50px !important;\n  }\n\n  .contain-director {\n    margin-top: 150px;\n  }\n\n  .about-area p {\n    line-height: 26px;\n    margin-bottom: 42px;\n    width: 65%;\n  }\n}\n\n@media screen and (max-width: 560px) {\n  .contain-director {\n    display: none;\n  }\n\n  .about-area p {\n    line-height: 26px;\n    margin-bottom: 42px;\n    width: 90%;\n  }\n\n  .about-container {\n    margin-left: 0px !important;\n  }\n}\n\n@media screen and (min-width: 1550px) {\n  .contain-director {\n    position: absolute;\n    right: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXJlY3Rvci13b3JkL0U6XFxQcm9qZXRzXFxXZWJjdXBcXGNvZGVfZnJvbnRcXHdlYmN1cEZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxkaXJlY3Rvci13b3JkXFxkaXJlY3Rvci13b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RpcmVjdG9yLXdvcmQvZGlyZWN0b3Itd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLDREQUFBO0FDRkY7O0FES0E7OztFQUdFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNGRjs7QURJQTs7O0VBR0UsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNERjs7QURJQSwyQ0FBQTs7QUFDQTsyQ0FBQTs7QUFFQTtFQUVFLHlCQXpDWTtFQTBDWixjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNGRjs7QURJQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDREY7O0FER0E7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsaUJBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0FDSUY7O0FERkE7RUFDRSwwQ0FBQTtFQUNBLGNBQUE7QUNLRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0tGOztBREZBO0VBSUUsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNFRjs7QURDQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0VGOztBRENBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFQ0VGO0FBQ0Y7O0FES0E7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsOEJBQUE7RUNIRjs7RURLQTtJQUNFLDZCQUFBO0VDRkY7O0VESUE7SUFDRSxpQkFBQTtFQ0RGOztFREdBO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0U7SUFDRSxhQUFBO0VDREY7O0VER0E7SUFDRSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFQ0FGOztFREVBO0lBQ0UsMkJBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFlBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaXJlY3Rvci13b3JkL2RpcmVjdG9yLXdvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZmlyc3QtY29sb3I6ICMwYzJkNTA7XHJcbiRzZWNvbmQtY29sb3I6ICMwMDIyNDc7XHJcblxyXG4qIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlci10b3A6YmVmb3JlLFxyXG4uYWJvdXQtYXJlYTpiZWZvcmUsXHJcbi5uZXdzbGV0dGVyLWFyZWE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiA0MyU7XHJcbn1cclxuLmhlYWRlci10b3A6YWZ0ZXIsXHJcbi5hYm91dC1hcmVhOmFmdGVyLFxyXG4ubmV3c2xldHRlci1hcmVhOmFmdGVyIHtcclxuICAtbW96LWJvcmRlci1ib3R0b20tY29sb3JzOiBub25lO1xyXG4gIC1tb3otYm9yZGVyLWxlZnQtY29sb3JzOiBub25lO1xyXG4gIC1tb3otYm9yZGVyLXJpZ2h0LWNvbG9yczogbm9uZTtcclxuICAtbW96LWJvcmRlci10b3AtY29sb3JzOiBub25lO1xyXG4gIC1vLWJvcmRlci1pbWFnZTogbm9uZTtcclxuICBib3JkZXItaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDI0cHggMTBweDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNDMlO1xyXG4gIHRvcDogMTBweDtcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogIDQuIEFib3V0IEFyZWFcclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmFib3V0LWFyZWEge1xyXG4gIC8vIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NsaWRlci9iYW5uZXIuanBnXCIpIG5vLXJlcGVhdCBzY3JvbGwgY2VudGVyIHRvcDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlyc3QtY29sb3I7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDU0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcbi5hYm91dC1hcmVhOmJlZm9yZSB7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgd2lkdGg6IDQ5LjIlO1xyXG59XHJcbi5hYm91dC1hcmVhOmFmdGVyIHtcclxuICBib3JkZXItd2lkdGg6IDU1cHggMzBweDtcclxuICBsZWZ0OiA0OS4yJTtcclxuICB0b3A6IC0yMHB4O1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG59XHJcbi5hYm91dC1hcmVhIGgzIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzlweDtcclxuICBwYWRkaW5nLXRvcDogMjJweDtcclxuICB6LWluZGV4OiA5O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYWJvdXQtYXJlYSBwIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MnB4O1xyXG59XHJcbi5hYm91dC1jb250YWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG59XHJcbi5hYm91dC1hcmVhIC5idXR0b24tZGVmYXVsdCB7XHJcbiAgcGFkZGluZzogOXB4IDQxcHg7XHJcbn1cclxuLmFib3V0LWNvbnRhaW5lciA+IC5idXR0b24tZGVmYXVsdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGNvbG9yOiAjMmQzZTUwO1xyXG59XHJcblxyXG4udGltYmVyIHtcclxuICByaWdodDogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmNvbnRhaW4tZGlyZWN0b3Ige1xyXG4gIC8vd2lkdGg6IDIyMHB4O1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyByaWdodDogMjUwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyNpbWdEaXJlY3RvciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5uYW1lLWRpcmVjdG9yIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmFib3V0LWFyZWEgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQycHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIHtcclxuICAuYWJvdXQtYXJlYSB7XHJcbiAgICAvLyBoZWlnaHQ6IDM4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmFib3V0LWFyZWEge1xyXG4gICAgbWFyZ2luLXRvcDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogJGZpcnN0LWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hYm91dC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb250YWluLWRpcmVjdG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIH1cclxuICAuYWJvdXQtYXJlYSBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDJweDtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xyXG4gIC5jb250YWluLWRpcmVjdG9yIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5hYm91dC1hcmVhIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgLmFib3V0LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTUwcHgpIHtcclxuICAuY29udGFpbi1kaXJlY3RvciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjUwcHg7XHJcbiAgfVxyXG59XHJcbiIsIioge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci10b3A6YmVmb3JlLFxuLmFib3V0LWFyZWE6YmVmb3JlLFxuLm5ld3NsZXR0ZXItYXJlYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTBweDtcbiAgd2lkdGg6IDQzJTtcbn1cblxuLmhlYWRlci10b3A6YWZ0ZXIsXG4uYWJvdXQtYXJlYTphZnRlcixcbi5uZXdzbGV0dGVyLWFyZWE6YWZ0ZXIge1xuICAtbW96LWJvcmRlci1ib3R0b20tY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci1sZWZ0LWNvbG9yczogbm9uZTtcbiAgLW1vei1ib3JkZXItcmlnaHQtY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci10b3AtY29sb3JzOiBub25lO1xuICAtby1ib3JkZXItaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAyNHB4IDEwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0MyU7XG4gIHRvcDogMTBweDtcbiAgd2lkdGg6IDA7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAgNC4gQWJvdXQgQXJlYVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5hYm91dC1hcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmQ1MDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLmFib3V0LWFyZWE6YmVmb3JlIHtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIHRvcDogLTIwcHg7XG4gIHdpZHRoOiA0OS4yJTtcbn1cblxuLmFib3V0LWFyZWE6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDU1cHggMzBweDtcbiAgbGVmdDogNDkuMiU7XG4gIHRvcDogLTIwcHg7XG4gIHJpZ2h0OiBhdXRvO1xufVxuXG4uYWJvdXQtYXJlYSBoMyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNzlweDtcbiAgcGFkZGluZy10b3A6IDIycHg7XG4gIHotaW5kZXg6IDk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFib3V0LWFyZWEgcCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbWFyZ2luLWJvdHRvbTogNDJweDtcbn1cblxuLmFib3V0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuXG4uYWJvdXQtYXJlYSAuYnV0dG9uLWRlZmF1bHQge1xuICBwYWRkaW5nOiA5cHggNDFweDtcbn1cblxuLmFib3V0LWNvbnRhaW5lciA+IC5idXR0b24tZGVmYXVsdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgY29sb3I6ICMyZDNlNTA7XG59XG5cbi50aW1iZXIge1xuICByaWdodDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5jb250YWluLWRpcmVjdG9yIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbWcjaW1nRGlyZWN0b3Ige1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5uYW1lLWRpcmVjdG9yIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogM3B4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuYWJvdXQtYXJlYSBwIHtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MnB4O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5hYm91dC1hcmVhIHtcbiAgICBtYXJnaW4tdG9wOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzBjMmQ1MCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29udGFpbi1kaXJlY3RvciB7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIH1cblxuICAuYWJvdXQtYXJlYSBwIHtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MnB4O1xuICAgIHdpZHRoOiA2NSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5jb250YWluLWRpcmVjdG9yIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmFib3V0LWFyZWEgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDJweDtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTUwcHgpIHtcbiAgLmNvbnRhaW4tZGlyZWN0b3Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjUwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/director-word/director-word.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/director-word/director-word.component.ts ***!
  \*********************************************************************/
/*! exports provided: DirectorWordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectorWordComponent", function() { return DirectorWordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_configurations_configurations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/configurations/configurations.service */ "./src/app/services/configurations/configurations.service.ts");



let DirectorWordComponent = class DirectorWordComponent {
    constructor(confService) {
        this.confService = confService;
        // https://res.cloudinary.com/team-stenny/image/upload/v1619532580/directeur_itg66p.jpg
        this.imgDirector = "";
        this.nameDirector = "";
        this.wordDirector = "";
    }
    ngOnInit() {
        document.onscroll = function () {
            if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
                document.getElementById("director-words").className = "slideLeft";
            }
        };
        this.getConf();
    }
    getConf() {
        this.confService.getConfigurations().subscribe((data) => {
            console.log(data);
            data.forEach(el => {
                if (el.cle == "nom_directeur")
                    this.nameDirector = el.valeur;
                if (el.cle == "mot_directeur")
                    this.wordDirector = el.valeur;
                if (el.cle == "image_directeur")
                    this.imgDirector = el.valeur;
            });
            return data;
        }, err => {
            console.log(err);
        });
    }
};
DirectorWordComponent.ctorParameters = () => [
    { type: src_app_services_configurations_configurations_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"] }
];
DirectorWordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-director-word',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./director-word.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/director-word/director-word.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./director-word.component.scss */ "./src/app/components/director-word/director-word.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./color.css */ "./src/app/components/director-word/color.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./responsive.css */ "./src/app/components/director-word/responsive.css")).default]
    })
], DirectorWordComponent);



/***/ }),

/***/ "./src/app/components/director-word/responsive.css":
/*!*********************************************************!*\
  !*** ./src/app/components/director-word/responsive.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Large desktop :1920px. */\n@media (min-width: 1920px) {\n    .container {width: 1230px}\n    .as-mainwrapper .container {width: 1200px}\n    .header-top::before {width: 44%;}\n    .header-top::after {right: 44%;}\n    .slider-area::after {width: 63.5%;}\n    .as-mainwrapper.wrapper-boxed .slider-area::after {width: 65%;}\n    .banner-content h1 {font-size: 62px;}\n    .form-container {padding: 38px 77px;}\n    .single-course-details .single-item-content {padding-top: 41px;}\n    .single-latest-text {padding: 30px 10px 27px 25px;}\n    .newsletter-area::before {width: 46.5%;}\n    .newsletter-area::after {left: 46.5%;}\n    .single-sidebar-widget .tags li a {margin-right: 10px;}\n    .as-mainwrapper.wrapper-boxed .slider-area.slider-two::after {width: 100%;}\n    .video-wrapper, .video-banner {height: 630px}\n    .form-container > button {padding: 0 22px;}\n    .select.large {width: 247px;}\n}\n/* Normal desktop :992px. */\n@media (min-width: 992px) and (max-width: 1169px) {\n    .container {width:970px}\n    .as-mainwrapper.wrapper-boxed {width: 970px}\n    .as-mainwrapper.wrapper-boxed .header-logo-menu.stick {width: 970px}\n    .header-top::before {width: 53%;}\n    .header-top::after {right: 53%;}\n    .slider-area::after {width: 77%; transform: rotate(21.5deg) scale(1.7)}\n    .banner-content .text-content-wrapper {margin-right: -15px;}\n    .banner-content h1 {font-size: 52px; line-height: 57px;}\n    .single-item {padding: 0 20px;}\n    .single-latest-text > h3 {font-size: 19px;}\n    .single-latest-text {padding: 22px 0 16px 11px;}\n    .single-product-text {padding: 23px 15px 22px;}\n    .single-event-text {padding: 29px 10px 35px;}\n    .single-event-item .single-item-comment-view span {margin-right: 3px;}\n    .newsletter-area::before {width: 42%;}\n    .newsletter-area::after {left: 42%;}\n    .subscribe-form {width: 452px;}\n    .social-icons a {margin-right: 8px;}\n    .single-footer-widget > span i {width: 24px;}\n    .footer-img {height: 59px; width: 59px;}\n    .footer-img a::after {margin: -13px auto 0;}\n    .select{margin-right: 7px;}\n    .select.large {width: 178px;}\n    .select.medium {width: 150px;}\n    .select.small {width: 130px;}\n    .course-page {padding: 120px 0 100px;}\n    .course-page .single-item {margin-bottom: 130px;}\n    .teachers-area {padding: 0 0 120px;}\n    .single-sidebar-widget .single-item {padding: 0 8px;}\n    .single-item-text-info span {margin-right: 8px;}\n    .single-sidebar-widget {margin-bottom: 35px;}\n    .sidebar-widget .single-teacher-text > p, .single-sidebar-widget .single-item-text > p {\n        font-size: 14px;\n    }\n    .single-course-details .single-item-text h4 {padding-top: 0;}\n    .single-course-details .single-item-text-info {margin-bottom: 10px;}\n    .newsletter-two .subscribe-form > input {width: 304px;}\n    .newsletter-two .subscribe-form > button {margin-left: 7px; width: 142px;}\n    .news-details-content .single-latest-text {padding: 35px 27px 0;}\n    .product-details-content {margin: 0 26px; padding: 3px 0 0;}\n    .header-logo-menu.stick .logo {padding: 28px 0;}\n    .testimonial-text-slider {width: 72%;}\n    .mailchimp-alerts {padding-left: 85px}\n    .subscribe-container {padding: 16px 27px 21px;}\n    .gallery-img h2 {margin: 47px auto 10px;}\n    .gallery-img p {margin: 0;}\n    .slider-two .banner-content h1::after {display: none;}\n    .slider-two .banner-content h1 {\n        font-size: 46px;\n        line-height: 46px;\n        padding-bottom: 7px;\n    }\n    .slider-two .banner-content p {padding-bottom: 0;}\n    .video-wrapper, .video-banner {height: 550px}\n    .padding-small .mainmenu ul#nav > li > a {line-height: 66px;}\n}\n/* Tablet desktop :768px. */\n@media (min-width: 768px) and (max-width: 991px) {\n    .container {max-width:750px}\n    .as-mainwrapper.wrapper-boxed {width:750px}\n    .mobile-menu-area {display: block}\n    .search {\n        top: -10px;\n    }\n    .mainmenu {\n        display: none !important;\n    }\n    .as-mainwrapper.wrapper-boxed .header-logo-menu.stick {width: 750px;}\n    .header-logo-menu.stick, .header-logo-menu.sticker.fixed {position: inherit;}\n    .header-top::before {width: 48%;}\n    .header-top::after {right: 48%;}\n    .logo {padding: 40px 0 33px; text-align: center}\n    .slider-area::after {width: 100%; transform: rotate(0) scale(1)}\n    .banner-content .text-content-wrapper {margin-right: 0;}\n    .banner-content .text-content-wrapper, .slider-two .banner-content .text-content-wrapper {\n\tfloat: none;\n\tmargin: auto;\n\ttext-align: center !important;\n}\n    .banner-content h1 {margin-bottom: 14px}\n    .banner-content h1::after {right: 0}\n    .about-area {\n        background-position: left top;\n        margin-top: 100px;\n    }\n    .about-container {margin-left: 0;}\n    .course-area .container .row .col-lg-4:nth-child(3) .single-item{\n        margin-top: 80px;\n    }\n    .single-latest-text {padding: 30px 10px 48px 35px;}\n    .section-title-wrapper {margin-bottom: 70px;}\n    .course-area .section-title-wrapper {margin-bottom: 105px;}\n    .section-margin {margin: 80px 0 100px 0}\n    .section-padding {padding: 80px 0;}\n    .latest-area.section-padding{padding: 80px 0 50px}\n    .section-bottom-padding {padding: 0 0 80px;}\n    .fun-factor-area {padding: 70px 0;}\n    .latest-area .col-md-6:last-child .single-latest-item:last-child {margin: 0;}\n    .product-area .container .row .col-md-6:nth-child(1) .single-product-item{\n        margin-bottom: 30px;\n    }\n    .product-area .container .row .col-md-6:nth-child(2) .single-product-item{\n        margin-bottom: 30px;\n    }\n    .teachers-area .container .row .col-md-6:nth-child(1) .single-teacher-item{\n        margin-bottom: 30px;\n    }\n    .teachers-area .container .row .col-md-6:nth-child(2) .single-teacher-item{\n        margin-bottom: 30px;\n    }\n    .single-product-text .button-default {margin-left: 5px;}\n    .button-large.button-default {margin-top: 70px;}\n    .event-area .container .row .col-md-6:nth-child(3) .single-event-item{\n        margin-top: 30px;\n    }\n    .event-area.event-page .container .row .col-md-6:nth-child(3) .single-event-item{\n        margin-top: 0px;\n    }\n    .instagram-image .footer-img:nth-child(3), .instagram-image .footer-img:nth-child(6) {\n    margin-right: 15px;\n    }\n    .single-event-item .single-item-comment-view span {margin-right: 6px;}\n    .newsletter-content h3 {font-size: 21px}\n    .newsletter-content h2 {font-size: 25px}\n    .subscribe-form {width: 335px;}\n    .footer-img {height: 62px; width: 62px;}\n    .footer-img a::after {margin: -13px auto 0;}\n    .single-footer-widget {\n        margin-bottom: 30px;\n    }\n    .teachers-area.padding-top {padding: 80px 0 100px;}\n    .skill-image {margin-top: 40px;}\n    .link-social {margin-bottom: 60px;}\n    .contact-text {margin-bottom: 60px;}\n    .select.large {width: 170px;}\n    .select.medium {width: 130px;}\n    .select.small {width: 126px;}\n    .form-container > button {padding: 0 15px;}\n    .course-page {padding-top: 110px;}\n    .course-page .single-item, .course-page .col-md-4:nth-child(4) .single-item {margin-bottom: 110px;}\n    .course-page .col-md-4:nth-child(5) .single-item, .course-page .col-md-4:nth-child(6) .single-item {\n        margin-bottom: 50px;\n    }\n    .course-page.course-area .container .row .col-lg-4:nth-child(3) .single-item{\n        margin-top: 0px;\n    }\n    .teachers-area {padding: 0 0 110px;}\n    .newsletter-two .subscribe-form > input {width: 237px;}\n    .newsletter-two .subscribe-form > button {margin-left: 8px;}\n    .latest-page .col-md-6:last-child  .single-latest-item:last-child {margin-bottom: 30px;}\n    .news-details-content .single-latest-text {padding: 35px 30px 0;}\n    .news-details-area .sidebar-widget {margin-top: 30px;}\n    .product-details-content {margin: 0; padding: 0;}\n    .qty {margin-top: 12px;}\n    .product-details-content .button-default {margin: 10px 0;}\n    .product-details-content .p-price {font-size: 30px; padding-top: 10px;}\n    .section-top-padding {padding: 80px 0 0;}\n    .shop-grid-area .col-md-3:nth-child(9) .single-product-item {margin-bottom: 60px;}\n    .pagination-content.number .pagination {margin: 60px 0 20px;}\n    .shortcode-area {padding: 35px 0 80px;}\n    .course-details-content {margin: 0;}\n    .course-details-area a img {margin: 0; width: 100%;}\n    .course-details-content .single-course-details {padding: 30px;}\n    .course-details-area .sidebar-widget {margin-top: 45px;}\n    .testimonial-text-slider {width: 90%;}\n    .mailchimp-alerts {padding-left: 85px}\n    .subscribe-container {padding: 13px 20px 15px;}\n    .angle .mailchimp-alerts {padding-left: 83px;}\n    .gallery-img h2 {margin: 67px auto 10px;}\n    .slider-two .banner-content h1::after {display: none;}\n    .slider-two .banner-content h1 {\n        font-size: 46px;\n        line-height: 46px;\n        padding-bottom: 7px;\n    }\n    .slider-two .banner-content p {padding-bottom: 0;}\n    .slider-three .banner-content h1 {\n        font-size: 48px;\n        line-height: 53px;\n        margin: 0;\n        padding-bottom: 14px;\n    }\n    .banner-content h1.mt-60 {margin-top: 10px;}\n    .video-wrapper, .video-banner {height: 430px}\n    .header-logo-menu.fixed {position: inherit;}\n    .welcome-video{\n        float: none;\n        min-height: 400px;\n        position: relative;\n        right: auto;\n        top: auto;\n        width: 100%;\n    }\n    .welcome-video .video-inner{\n        min-height: 400px;\n    }\n    .welcome-about-text{\n        padding: 140px 0;\n    }\n    .testimonial__inner {\n        padding: 100px 60px 60px;\n    }\n}\n/* small mobile :320px. */\n@media (max-width: 767px) {\n    .container {max-width:320px}\n    .as-mainwrapper.wrapper-boxed {width:300px}\n    .mobile-menu-area {display: block}\n    .mainmenu {\n        display: none !important;\n    }\n    .as-mainwrapper.wrapper-boxed .header-logo-menu.stick {width: 300px;}\n    .header-logo-menu.stick, .as-mainwrapper.wrapper-boxed .header-logo-menu.stick, .header-logo-menu.sticker.fixed {position: inherit;}\n    .btn {margin-bottom: 10px; padding: 6px 10px;}\n    .header-top-right > .content {\n        margin-left: 7px;\n        padding-left: 0;\n        z-index: 9;\n    }\n    .header-top-right > .content:first-child {margin: 0; padding: 0;}\n    .header-top::before {width: 91%;}\n    .header-top::after {right: 91%;}\n    .header-top-right > .content i {margin-right: 4px;}\n    .header-top-right > .content::after, .nivo-directionNav, .slider-two .preview-2 .nivo-controlNav, .banner-content h1::after, .subscribe-form::before, .header-two .header-top-right span:first-child, .slider-three .preview-2 .nivo-controlNav {\n        display: none;\n    }\n    .banner-content h1 {\n        font-size: 22px;\n        line-height: 30px;\n        padding-bottom: 5px;\n        margin: 0\n    }\n    .banner-content .text-content-wrapper, .slider-two .banner-content .text-content-wrapper {\n        float: none;\n        margin: auto;\n        text-align: center !important;\n    }\n    .button-default {padding: 10px 20px;}\n    .slider-area::after {width: 100%; transform: rotate(0) scale(1)}\n    .logo {padding: 46px 0 28px; text-align: center;}\n    .about-area {background: #2D3E50; margin-top: 80px;}\n    .about-container {margin-left: 0;}\n    .single-latest-text {padding: 30px 17px;}\n    .section-title-wrapper {margin-bottom: 60px;}\n    .section-title h3 {font-size: 25px;}\n    .course-area .section-title-wrapper {margin-bottom: 80px;}\n    .section-padding {padding: 60px 0;}\n    .section-margin {margin: 60px 0 80px 0}\n    .section-bottom-padding {padding: 0 0 60px;}\n    .course-page {padding-top: 80px;}\n    .about-area::before {width: 74%;}\n    .about-area::after {left: 74%;}\n    .single-item {margin-bottom: 80px;padding: 0 16px;}\n    .single-item-image {top: -20px;}\n    .button-large.button-default {margin-top: 5px;}\n    .fun-factor-area {padding: 60px 0 20px;}\n    .single-fun-factor {margin-bottom: 45px;}\n    .single-latest-image {float: none; text-align: center;}\n    .single-latest-image a, .single-latest-image img {width: 100%;}\n    .latest-area .col-md-6:last-child .single-latest-item:last-child, .product-area .col-md-3:last-child .single-product-item:last-child {\n        margin: 0;\n    }\n    .single-product-item, .single-event-item {margin-bottom: 40px;}\n    .single-event-text {padding: 29px 8px 35px;}\n    .event-area .col-md-4:last-child .single-event-item:last-child {margin-bottom: 15px;}\n    .newsletter-area::before {width: 69%;}\n    .newsletter-area::after {left: 69%;}\n    .newsletter-content > h2 {font-size: 22px;}\n    .subscribe-form > button {width: 33%;}\n    .subscribe-form {\n        height: 45px;\n        margin-top: 50px;\n        width: 100%;\n    }\n    .newsletter-form {padding: 36px 0 0;}\n    .single-footer-widget > h3 {padding-top: 40px;}\n    .footer-area {\n        font-size: 14px;\n        line-height: 24px;\n        text-align: center;\n    }\n    .column-right {float: none;}\n    .footer-widget-area {padding: 60px 0 40px;}\n    .breadcrumb-banner-area {padding: 60px 0;}\n    .skill-image {margin-top: 30px;}\n    .skill-and-experience-area .col-md-6:last-child .skill-bar-item:first-child {margin-top: 25px;}\n    .teachers-area.padding-top {padding: 60px 0 40px;}\n    .single-teacher-item {margin-bottom: 35px;}\n    span.c-icon i {width: 21px;}\n    .contact-text {margin-bottom: 40px;}\n    h4.contact-title {font-size: 22px;}\n    .link-social {margin-bottom: 45px;}\n    .breadcrumb-text h1 {line-height: 37px; font-size: 32px}\n    .form-container {margin: -35px 0 0; padding: 40px 30px;}\n    .select.large, .select.medium, .select.small {margin-bottom: 12px; width: 100%;}\n    .form-container > button {width: 100%;}\n    .course-page .single-item {margin-bottom: 80px;}\n    .course-page .col-md-4:nth-child(4) .single-item, .course-page .col-md-4:nth-child(5) .single-item, .course-page .col-md-4:nth-child(6) .single-item {\n        margin-bottom: 57px;\n    }\n    .single-item-text-info span {margin-right: 8px;}\n    .teachers-area {padding: 0 0 50px;}\n    .course-details-content {margin-left: 0;}\n    .course-details-area a img {margin: 0; width: 100%;}\n    .single-course-details .col-md-6:first-child {padding-right: 15px;}\n    .single-course-details .single-item-text h4 {font-size: 22px;}\n    .single-course-details {margin-bottom: 50px; padding: 0 0 30px;}\n    .single-course-details .single-item-text {padding: 0 10px;}\n    .course-duration .text span {width: 40%;}\n    .course-duration .text span.text-right {width: 60%;}\n    .comments {padding: 50px 0 20px;}\n    .author-image {margin-right: 8px;}\n    .author-info > h4 {display: block;}\n    .comment-time {float: none; font-size: 12px;}\n    .single-comment.comment-reply {padding-left: 10px;}\n    .single-sidebar-widget {margin-bottom: 35px;}\n    .single-sidebar-widget:last-child {margin-bottom: 0;}\n    .event-details-content .single-event-item {padding: 0;}\n    .event-details-content .single-event-text {padding: 32px 10px 0;}\n    .event-details-content .single-event-text h3 {font-size: 23px;}\n    .event-details-content .single-event-image a > span {\n        height: 65px;\n        line-height: 22px;\n        padding-top: 10px;\n        width: 65px;\n    }\n    .event-details-content .single-event-image span {font-size: 25px;}\n    .event-details-content .comments {padding: 10px 0 35px;}\n    .header-two .header-top-right {float: none; text-align: center;}\n    .newsletter-two .subscribe-form > input {\n        height: 40px;\n        margin: 0 auto 15px;\n        width: 100%;\n    }\n    .newsletter-two .subscribe-form > button {\n        float: none;\n        height: 45px;\n        margin: auto;\n        text-align: center;\n        width: 100%;\n    }\n    .newsletter-two .subscribe-form {\n        float: left;\n        height: auto;\n        margin: 0;\n        width: 100%;\n    }\n    .newsletter-two .newsletter-form {padding-top: 30px;}\n    .latest-page .col-md-6:last-child  .single-latest-item:last-child {margin-bottom: 30px;}\n    .news-details-content .single-latest-text {padding: 21px 13px 0;}\n    .news-details-content .single-latest-text > h3 {margin-bottom: 15px;}\n    .quote-section {margin: 20px 0 25px; padding: 17px 0 0 10px;}\n    .tags-and-links {padding-top: 0;}\n    .news-details-content .social-links {\n        display: block;\n        float: left;\n        margin: 0;\n    }\n    .news-details-content .comments {padding: 25px 0 40px;}\n    .product-details-content {margin: 0; padding: 0;}\n    .qty {margin-top: 12px;}\n    .product-details-content .button-default {margin: 10px 0;}\n    .section-top-padding {padding: 50px 0 0;}\n    .product-details-content h2 {font-size: 27px; padding: 20px 0 10px;}\n    .shop-grid-area .col-md-3:nth-child(9) .single-product-item, .shop-grid-area .col-md-3:nth-child(10) .single-product-item, .shop-grid-area .col-md-3:nth-child(11) .single-product-item {\n        margin-bottom: 60px\n    }\n    .pagination-content.number .pagination {margin: 50px 0 20px;}\n    .shortcode-area {padding: 20px 0 50px 0}\n    .breadcrumb-bar li {line-height: 22px;}\n    .testimonial-text-slider {width: 100%;}\n    .testimonial-area {background-size: cover; padding: 55px 0 42px;}\n    .testimonial-text-slider h2 {font-size: 25px;}\n    .sin-testiText p {line-height: 22px; margin-top: 15px;}\n    .slick-prev {left: 0;}\n    .slick-next {right: 0;}\n    .mailchimp-alerts {padding-left: 0px}\n    .text-area {padding: 60px 0 80px;}\n    .text-area p {line-height: 25px;}\n    .subscribe-container {padding: 16px 20px 20px;}\n    .footer-info-container {padding-bottom: 50px; padding-top: 80px;}\n    .footer-info > span { margin: 15px 0 0;}\n    .single-footer-widget {margin-bottom: 27px;}\n    .footer-container {padding: 30px 0 25px;}\n    .footer-container .social-links-three {\n        float: none;\n        margin-top: 12px;\n        text-align: center;\n    }\n    .footer-container span {display: block; text-align: center;}\n    .newsletter-four .subscribe-form {margin-bottom: 24px; margin-top: 0;}\n    .footer-widget-four .single-footer-widget > h3 {padding-top: 10px;}\n    .angle .mailchimp-alerts {padding-left: 0;}\n    .gallery-img h2 {margin: 33px auto 10px;}\n    .gallery-area .col-md-4 {margin-bottom: 30px;}\n    .gallery-area .col-md-4:last-child {margin: 0;}\n    .video-wrapper, .video-banner {height: 280px}\n    .header-logo-menu.fixed {position: inherit;}\n    .subscribe-form > button {padding: 0 7px; width: auto;}\n    .subscribe-form > input {padding-left: 7px;}\n    .pagination-lg > li > a, .pagination-lg > li > span {padding: 6px 14px;}\n    .mainmenu-area {\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 100%;\n        z-index: 999;\n    }\n    .header-search .search-menu {background: rgba(0, 0, 0, 0) none repeat scroll 0 0;}\n    .search {left: -16px; margin: auto; top: 37px; width: 100%;}\n    .header-search {position: absolute; right: 48px;}\n    .header-logo-menu {position: relative;}\n    .welcome-video{\n        float: none;\n        min-height: 300px;\n        position: relative;\n        right: auto;\n        top: auto;\n        width: 100%;\n    }\n    .welcome-video .video-inner{\n        min-height: 300px;\n    }\n    .welcome-about-text{\n        padding: 100px 0;\n    }\n    .testimonial__inner {\n        padding: 100px 60px 60px;\n    }\n    .testimonial__author-name {\n        font-size: 20px;\n    }\n\n    /* Login Register CSS*/\n    .form-fild, .login-submit, .lost-password, .register-submit {\n      margin-bottom: 0px;\n        margin-top: 20px;\n    }\n\n    .form-fild label, .login-submit label, .lost-password label, .register-submit label {\n      margin-left: 0px;\n        margin-top: 10px;\n    }\n}\n/* Large Mobile :480px. */\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n    .container {max-width:450px}\n    .single-item {margin: 0 14px 56px; padding: 0 47px;}\n    .as-mainwrapper.wrapper-boxed {width:450px}\n    .banner-content h1 {\n        font-size: 36px;\n        line-height: 46px;\n        padding-bottom: 22px;\n    }\n    .single-event-text {padding: 29px 21px 35px;}\n    .footer-img {height: 59px; width: 59px;}\n    .footer-img a::after {margin: -13px auto 0;}\n    .event-details-content .single-event-image a > span {\n        height: 80px;\n        line-height: 29px;\n        padding-top: 10px;\n        width: 80px;\n    }\n    .sin-testiImage.slick-current img {\n        height: 120px;\n        margin-top: 17px;\n        width: 120px;\n    }\n    .gallery-img h2 {margin: 83px auto 10px;}\n    .video-wrapper, .video-banner {height: 320px}\n    .welcome-video{\n        float: none;\n        min-height: 350px;\n        position: relative;\n        right: auto;\n        top: auto;\n        width: 100%;\n    }\n    .welcome-video .video-inner{\n        min-height: 350px;\n    }\n    .testimonial__inner {\n        padding: 100px 60px 60px;\n    }\n    .testimonial__author-name {\n        font-size: 20px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXJlY3Rvci13b3JkL3Jlc3BvbnNpdmUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLFlBQVksYUFBYTtJQUN6Qiw0QkFBNEIsYUFBYTtJQUN6QyxxQkFBcUIsVUFBVSxDQUFDO0lBQ2hDLG9CQUFvQixVQUFVLENBQUM7SUFDL0IscUJBQXFCLFlBQVksQ0FBQztJQUNsQyxtREFBbUQsVUFBVSxDQUFDO0lBQzlELG9CQUFvQixlQUFlLENBQUM7SUFDcEMsaUJBQWlCLGtCQUFrQixDQUFDO0lBQ3BDLDZDQUE2QyxpQkFBaUIsQ0FBQztJQUMvRCxxQkFBcUIsNEJBQTRCLENBQUM7SUFDbEQsMEJBQTBCLFlBQVksQ0FBQztJQUN2Qyx5QkFBeUIsV0FBVyxDQUFDO0lBQ3JDLG1DQUFtQyxrQkFBa0IsQ0FBQztJQUN0RCw4REFBOEQsV0FBVyxDQUFDO0lBQzFFLCtCQUErQixhQUFhO0lBQzVDLDBCQUEwQixlQUFlLENBQUM7SUFDMUMsZUFBZSxZQUFZLENBQUM7QUFDaEM7QUFHQSwyQkFBMkI7QUFDM0I7SUFDSSxZQUFZLFdBQVc7SUFDdkIsK0JBQStCLFlBQVk7SUFDM0MsdURBQXVELFlBQVk7SUFDbkUscUJBQXFCLFVBQVUsQ0FBQztJQUNoQyxvQkFBb0IsVUFBVSxDQUFDO0lBQy9CLHFCQUFxQixVQUFVLEVBQUUscUNBQXFDO0lBQ3RFLHVDQUF1QyxtQkFBbUIsQ0FBQztJQUMzRCxvQkFBb0IsZUFBZSxFQUFFLGlCQUFpQixDQUFDO0lBQ3ZELGNBQWMsZUFBZSxDQUFDO0lBQzlCLDBCQUEwQixlQUFlLENBQUM7SUFDMUMscUJBQXFCLHlCQUF5QixDQUFDO0lBQy9DLHNCQUFzQix1QkFBdUIsQ0FBQztJQUM5QyxvQkFBb0IsdUJBQXVCLENBQUM7SUFDNUMsbURBQW1ELGlCQUFpQixDQUFDO0lBQ3JFLDBCQUEwQixVQUFVLENBQUM7SUFDckMseUJBQXlCLFNBQVMsQ0FBQztJQUNuQyxpQkFBaUIsWUFBWSxDQUFDO0lBQzlCLGlCQUFpQixpQkFBaUIsQ0FBQztJQUNuQyxnQ0FBZ0MsV0FBVyxDQUFDO0lBQzVDLGFBQWEsWUFBWSxFQUFFLFdBQVcsQ0FBQztJQUN2QyxzQkFBc0Isb0JBQW9CLENBQUM7SUFDM0MsUUFBUSxpQkFBaUIsQ0FBQztJQUMxQixlQUFlLFlBQVksQ0FBQztJQUM1QixnQkFBZ0IsWUFBWSxDQUFDO0lBQzdCLGVBQWUsWUFBWSxDQUFDO0lBQzVCLGNBQWMsc0JBQXNCLENBQUM7SUFDckMsMkJBQTJCLG9CQUFvQixDQUFDO0lBQ2hELGdCQUFnQixrQkFBa0IsQ0FBQztJQUNuQyxxQ0FBcUMsY0FBYyxDQUFDO0lBQ3BELDZCQUE2QixpQkFBaUIsQ0FBQztJQUMvQyx3QkFBd0IsbUJBQW1CLENBQUM7SUFDNUM7UUFDSSxlQUFlO0lBQ25CO0lBQ0EsNkNBQTZDLGNBQWMsQ0FBQztJQUM1RCwrQ0FBK0MsbUJBQW1CLENBQUM7SUFDbkUseUNBQXlDLFlBQVksQ0FBQztJQUN0RCwwQ0FBMEMsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDO0lBQ3pFLDJDQUEyQyxvQkFBb0IsQ0FBQztJQUNoRSwwQkFBMEIsY0FBYyxFQUFFLGdCQUFnQixDQUFDO0lBQzNELCtCQUErQixlQUFlLENBQUM7SUFDL0MsMEJBQTBCLFVBQVUsQ0FBQztJQUNyQyxtQkFBbUIsa0JBQWtCO0lBQ3JDLHNCQUFzQix1QkFBdUIsQ0FBQztJQUM5QyxpQkFBaUIsc0JBQXNCLENBQUM7SUFDeEMsZ0JBQWdCLFNBQVMsQ0FBQztJQUMxQix1Q0FBdUMsYUFBYSxDQUFDO0lBQ3JEO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7SUFDQSwrQkFBK0IsaUJBQWlCLENBQUM7SUFDakQsK0JBQStCLGFBQWE7SUFDNUMsMENBQTBDLGlCQUFpQixDQUFDO0FBQ2hFO0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0ksWUFBWSxlQUFlO0lBQzNCLCtCQUErQixXQUFXO0lBQzFDLG1CQUFtQixjQUFjO0lBQ2pDO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQSx1REFBdUQsWUFBWSxDQUFDO0lBQ3BFLDBEQUEwRCxpQkFBaUIsQ0FBQztJQUM1RSxxQkFBcUIsVUFBVSxDQUFDO0lBQ2hDLG9CQUFvQixVQUFVLENBQUM7SUFDL0IsT0FBTyxvQkFBb0IsRUFBRSxrQkFBa0I7SUFDL0MscUJBQXFCLFdBQVcsRUFBRSw2QkFBNkI7SUFDL0QsdUNBQXVDLGVBQWUsQ0FBQztJQUN2RDtDQUNILFdBQVc7Q0FDWCxZQUFZO0NBQ1osNkJBQTZCO0FBQzlCO0lBQ0ksb0JBQW9CLG1CQUFtQjtJQUN2QywyQkFBMkIsUUFBUTtJQUNuQztRQUNJLDZCQUE2QjtRQUM3QixpQkFBaUI7SUFDckI7SUFDQSxrQkFBa0IsY0FBYyxDQUFDO0lBQ2pDO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0EscUJBQXFCLDRCQUE0QixDQUFDO0lBQ2xELHdCQUF3QixtQkFBbUIsQ0FBQztJQUM1QyxxQ0FBcUMsb0JBQW9CLENBQUM7SUFDMUQsaUJBQWlCLHNCQUFzQjtJQUN2QyxrQkFBa0IsZUFBZSxDQUFDO0lBQ2xDLDZCQUE2QixvQkFBb0I7SUFDakQseUJBQXlCLGlCQUFpQixDQUFDO0lBQzNDLGtCQUFrQixlQUFlLENBQUM7SUFDbEMsa0VBQWtFLFNBQVMsQ0FBQztJQUM1RTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBLHNDQUFzQyxnQkFBZ0IsQ0FBQztJQUN2RCw4QkFBOEIsZ0JBQWdCLENBQUM7SUFDL0M7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtJQUNBLGtCQUFrQjtJQUNsQjtJQUNBLG1EQUFtRCxpQkFBaUIsQ0FBQztJQUNyRSx3QkFBd0IsZUFBZTtJQUN2Qyx3QkFBd0IsZUFBZTtJQUN2QyxpQkFBaUIsWUFBWSxDQUFDO0lBQzlCLGFBQWEsWUFBWSxFQUFFLFdBQVcsQ0FBQztJQUN2QyxzQkFBc0Isb0JBQW9CLENBQUM7SUFDM0M7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQSw0QkFBNEIscUJBQXFCLENBQUM7SUFDbEQsY0FBYyxnQkFBZ0IsQ0FBQztJQUMvQixjQUFjLG1CQUFtQixDQUFDO0lBQ2xDLGVBQWUsbUJBQW1CLENBQUM7SUFDbkMsZUFBZSxZQUFZLENBQUM7SUFDNUIsZ0JBQWdCLFlBQVksQ0FBQztJQUM3QixlQUFlLFlBQVksQ0FBQztJQUM1QiwwQkFBMEIsZUFBZSxDQUFDO0lBQzFDLGNBQWMsa0JBQWtCLENBQUM7SUFDakMsNkVBQTZFLG9CQUFvQixDQUFDO0lBQ2xHO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0EsZ0JBQWdCLGtCQUFrQixDQUFDO0lBQ25DLHlDQUF5QyxZQUFZLENBQUM7SUFDdEQsMENBQTBDLGdCQUFnQixDQUFDO0lBQzNELG1FQUFtRSxtQkFBbUIsQ0FBQztJQUN2RiwyQ0FBMkMsb0JBQW9CLENBQUM7SUFDaEUsb0NBQW9DLGdCQUFnQixDQUFDO0lBQ3JELDBCQUEwQixTQUFTLEVBQUUsVUFBVSxDQUFDO0lBQ2hELE1BQU0sZ0JBQWdCLENBQUM7SUFDdkIsMENBQTBDLGNBQWMsQ0FBQztJQUN6RCxtQ0FBbUMsZUFBZSxFQUFFLGlCQUFpQixDQUFDO0lBQ3RFLHNCQUFzQixpQkFBaUIsQ0FBQztJQUN4Qyw2REFBNkQsbUJBQW1CLENBQUM7SUFDakYsd0NBQXdDLG1CQUFtQixDQUFDO0lBQzVELGlCQUFpQixvQkFBb0IsQ0FBQztJQUN0Qyx5QkFBeUIsU0FBUyxDQUFDO0lBQ25DLDRCQUE0QixTQUFTLEVBQUUsV0FBVyxDQUFDO0lBQ25ELGdEQUFnRCxhQUFhLENBQUM7SUFDOUQsc0NBQXNDLGdCQUFnQixDQUFDO0lBQ3ZELDBCQUEwQixVQUFVLENBQUM7SUFDckMsbUJBQW1CLGtCQUFrQjtJQUNyQyxzQkFBc0IsdUJBQXVCLENBQUM7SUFDOUMsMEJBQTBCLGtCQUFrQixDQUFDO0lBQzdDLGlCQUFpQixzQkFBc0IsQ0FBQztJQUN4Qyx1Q0FBdUMsYUFBYSxDQUFDO0lBQ3JEO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7SUFDQSwrQkFBK0IsaUJBQWlCLENBQUM7SUFDakQ7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCxvQkFBb0I7SUFDeEI7SUFDQSwwQkFBMEIsZ0JBQWdCLENBQUM7SUFDM0MsK0JBQStCLGFBQWE7SUFDNUMseUJBQXlCLGlCQUFpQixDQUFDO0lBQzNDO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFNBQVM7UUFDVCxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjtBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLFlBQVksZUFBZTtJQUMzQiwrQkFBK0IsV0FBVztJQUMxQyxtQkFBbUIsY0FBYztJQUNqQztRQUNJLHdCQUF3QjtJQUM1QjtJQUNBLHVEQUF1RCxZQUFZLENBQUM7SUFDcEUsaUhBQWlILGlCQUFpQixDQUFDO0lBQ25JLE1BQU0sbUJBQW1CLEVBQUUsaUJBQWlCLENBQUM7SUFDN0M7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLFVBQVU7SUFDZDtJQUNBLDBDQUEwQyxTQUFTLEVBQUUsVUFBVSxDQUFDO0lBQ2hFLHFCQUFxQixVQUFVLENBQUM7SUFDaEMsb0JBQW9CLFVBQVUsQ0FBQztJQUMvQixnQ0FBZ0MsaUJBQWlCLENBQUM7SUFDbEQ7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQjtJQUNKO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLDZCQUE2QjtJQUNqQztJQUNBLGlCQUFpQixrQkFBa0IsQ0FBQztJQUNwQyxxQkFBcUIsV0FBVyxFQUFFLDZCQUE2QjtJQUMvRCxPQUFPLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDO0lBQ2hELGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7SUFDbkQsa0JBQWtCLGNBQWMsQ0FBQztJQUNqQyxxQkFBcUIsa0JBQWtCLENBQUM7SUFDeEMsd0JBQXdCLG1CQUFtQixDQUFDO0lBQzVDLG1CQUFtQixlQUFlLENBQUM7SUFDbkMscUNBQXFDLG1CQUFtQixDQUFDO0lBQ3pELGtCQUFrQixlQUFlLENBQUM7SUFDbEMsaUJBQWlCLHFCQUFxQjtJQUN0Qyx5QkFBeUIsaUJBQWlCLENBQUM7SUFDM0MsY0FBYyxpQkFBaUIsQ0FBQztJQUNoQyxxQkFBcUIsVUFBVSxDQUFDO0lBQ2hDLG9CQUFvQixTQUFTLENBQUM7SUFDOUIsY0FBYyxtQkFBbUIsQ0FBQyxlQUFlLENBQUM7SUFDbEQsb0JBQW9CLFVBQVUsQ0FBQztJQUMvQiw4QkFBOEIsZUFBZSxDQUFDO0lBQzlDLGtCQUFrQixvQkFBb0IsQ0FBQztJQUN2QyxvQkFBb0IsbUJBQW1CLENBQUM7SUFDeEMsc0JBQXNCLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQztJQUN0RCxrREFBa0QsV0FBVyxDQUFDO0lBQzlEO1FBQ0ksU0FBUztJQUNiO0lBQ0EsMENBQTBDLG1CQUFtQixDQUFDO0lBQzlELG9CQUFvQixzQkFBc0IsQ0FBQztJQUMzQyxnRUFBZ0UsbUJBQW1CLENBQUM7SUFDcEYsMEJBQTBCLFVBQVUsQ0FBQztJQUNyQyx5QkFBeUIsU0FBUyxDQUFDO0lBQ25DLDBCQUEwQixlQUFlLENBQUM7SUFDMUMsMEJBQTBCLFVBQVUsQ0FBQztJQUNyQztRQUNJLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsV0FBVztJQUNmO0lBQ0Esa0JBQWtCLGlCQUFpQixDQUFDO0lBQ3BDLDRCQUE0QixpQkFBaUIsQ0FBQztJQUM5QztRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0EsZUFBZSxXQUFXLENBQUM7SUFDM0IscUJBQXFCLG9CQUFvQixDQUFDO0lBQzFDLHlCQUF5QixlQUFlLENBQUM7SUFDekMsY0FBYyxnQkFBZ0IsQ0FBQztJQUMvQiw2RUFBNkUsZ0JBQWdCLENBQUM7SUFDOUYsNEJBQTRCLG9CQUFvQixDQUFDO0lBQ2pELHNCQUFzQixtQkFBbUIsQ0FBQztJQUMxQyxlQUFlLFdBQVcsQ0FBQztJQUMzQixlQUFlLG1CQUFtQixDQUFDO0lBQ25DLGtCQUFrQixlQUFlLENBQUM7SUFDbEMsY0FBYyxtQkFBbUIsQ0FBQztJQUNsQyxxQkFBcUIsaUJBQWlCLEVBQUUsZUFBZTtJQUN2RCxpQkFBaUIsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7SUFDdkQsOENBQThDLG1CQUFtQixFQUFFLFdBQVcsQ0FBQztJQUMvRSwwQkFBMEIsV0FBVyxDQUFDO0lBQ3RDLDJCQUEyQixtQkFBbUIsQ0FBQztJQUMvQztRQUNJLG1CQUFtQjtJQUN2QjtJQUNBLDZCQUE2QixpQkFBaUIsQ0FBQztJQUMvQyxnQkFBZ0IsaUJBQWlCLENBQUM7SUFDbEMseUJBQXlCLGNBQWMsQ0FBQztJQUN4Qyw0QkFBNEIsU0FBUyxFQUFFLFdBQVcsQ0FBQztJQUNuRCw4Q0FBOEMsbUJBQW1CLENBQUM7SUFDbEUsNkNBQTZDLGVBQWUsQ0FBQztJQUM3RCx3QkFBd0IsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUM7SUFDL0QsMENBQTBDLGVBQWUsQ0FBQztJQUMxRCw2QkFBNkIsVUFBVSxDQUFDO0lBQ3hDLHdDQUF3QyxVQUFVLENBQUM7SUFDbkQsV0FBVyxvQkFBb0IsQ0FBQztJQUNoQyxlQUFlLGlCQUFpQixDQUFDO0lBQ2pDLG1CQUFtQixjQUFjLENBQUM7SUFDbEMsZUFBZSxXQUFXLEVBQUUsZUFBZSxDQUFDO0lBQzVDLCtCQUErQixrQkFBa0IsQ0FBQztJQUNsRCx3QkFBd0IsbUJBQW1CLENBQUM7SUFDNUMsbUNBQW1DLGdCQUFnQixDQUFDO0lBQ3BELDJDQUEyQyxVQUFVLENBQUM7SUFDdEQsMkNBQTJDLG9CQUFvQixDQUFDO0lBQ2hFLDhDQUE4QyxlQUFlLENBQUM7SUFDOUQ7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixXQUFXO0lBQ2Y7SUFDQSxpREFBaUQsZUFBZSxDQUFDO0lBQ2pFLGtDQUFrQyxvQkFBb0IsQ0FBQztJQUN2RCwrQkFBK0IsV0FBVyxFQUFFLGtCQUFrQixDQUFDO0lBQy9EO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osU0FBUztRQUNULFdBQVc7SUFDZjtJQUNBLGtDQUFrQyxpQkFBaUIsQ0FBQztJQUNwRCxtRUFBbUUsbUJBQW1CLENBQUM7SUFDdkYsMkNBQTJDLG9CQUFvQixDQUFDO0lBQ2hFLGdEQUFnRCxtQkFBbUIsQ0FBQztJQUNwRSxnQkFBZ0IsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUM7SUFDNUQsaUJBQWlCLGNBQWMsQ0FBQztJQUNoQztRQUNJLGNBQWM7UUFDZCxXQUFXO1FBQ1gsU0FBUztJQUNiO0lBQ0EsaUNBQWlDLG9CQUFvQixDQUFDO0lBQ3RELDBCQUEwQixTQUFTLEVBQUUsVUFBVSxDQUFDO0lBQ2hELE1BQU0sZ0JBQWdCLENBQUM7SUFDdkIsMENBQTBDLGNBQWMsQ0FBQztJQUN6RCxzQkFBc0IsaUJBQWlCLENBQUM7SUFDeEMsNkJBQTZCLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQztJQUNuRTtRQUNJO0lBQ0o7SUFDQSx3Q0FBd0MsbUJBQW1CLENBQUM7SUFDNUQsaUJBQWlCLHNCQUFzQjtJQUN2QyxvQkFBb0IsaUJBQWlCLENBQUM7SUFDdEMsMEJBQTBCLFdBQVcsQ0FBQztJQUN0QyxtQkFBbUIsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUM7SUFDaEUsNkJBQTZCLGVBQWUsQ0FBQztJQUM3QyxrQkFBa0IsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUM7SUFDdEQsYUFBYSxPQUFPLENBQUM7SUFDckIsYUFBYSxRQUFRLENBQUM7SUFDdEIsbUJBQW1CLGlCQUFpQjtJQUNwQyxZQUFZLG9CQUFvQixDQUFDO0lBQ2pDLGNBQWMsaUJBQWlCLENBQUM7SUFDaEMsc0JBQXNCLHVCQUF1QixDQUFDO0lBQzlDLHdCQUF3QixvQkFBb0IsRUFBRSxpQkFBaUIsQ0FBQztJQUNoRSxzQkFBc0IsZ0JBQWdCLENBQUM7SUFDdkMsdUJBQXVCLG1CQUFtQixDQUFDO0lBQzNDLG1CQUFtQixvQkFBb0IsQ0FBQztJQUN4QztRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0lBQ0Esd0JBQXdCLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQztJQUMzRCxrQ0FBa0MsbUJBQW1CLEVBQUUsYUFBYSxDQUFDO0lBQ3JFLGdEQUFnRCxpQkFBaUIsQ0FBQztJQUNsRSwwQkFBMEIsZUFBZSxDQUFDO0lBQzFDLGlCQUFpQixzQkFBc0IsQ0FBQztJQUN4Qyx5QkFBeUIsbUJBQW1CLENBQUM7SUFDN0Msb0NBQW9DLFNBQVMsQ0FBQztJQUM5QywrQkFBK0IsYUFBYTtJQUM1Qyx5QkFBeUIsaUJBQWlCLENBQUM7SUFDM0MsMEJBQTBCLGNBQWMsRUFBRSxXQUFXLENBQUM7SUFDdEQseUJBQXlCLGlCQUFpQixDQUFDO0lBQzNDLHFEQUFxRCxpQkFBaUIsQ0FBQztJQUN2RTtRQUNJLE9BQU87UUFDUCxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0EsNkJBQTZCLG1EQUFtRCxDQUFDO0lBQ2pGLFNBQVMsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDO0lBQzNELGdCQUFnQixrQkFBa0IsRUFBRSxXQUFXLENBQUM7SUFDaEQsbUJBQW1CLGtCQUFrQixDQUFDO0lBQ3RDO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFNBQVM7UUFDVCxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUEsc0JBQXNCO0lBQ3RCO01BQ0Usa0JBQWtCO1FBQ2hCLGdCQUFnQjtJQUNwQjs7SUFFQTtNQUNFLGdCQUFnQjtRQUNkLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksWUFBWSxlQUFlO0lBQzNCLGNBQWMsbUJBQW1CLEVBQUUsZUFBZSxDQUFDO0lBQ25ELCtCQUErQixXQUFXO0lBQzFDO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7SUFDQSxvQkFBb0IsdUJBQXVCLENBQUM7SUFDNUMsYUFBYSxZQUFZLEVBQUUsV0FBVyxDQUFDO0lBQ3ZDLHNCQUFzQixvQkFBb0IsQ0FBQztJQUMzQztRQUNJLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCO0lBQ0EsaUJBQWlCLHNCQUFzQixDQUFDO0lBQ3hDLCtCQUErQixhQUFhO0lBQzVDO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFNBQVM7UUFDVCxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RpcmVjdG9yLXdvcmQvcmVzcG9uc2l2ZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMYXJnZSBkZXNrdG9wIDoxOTIwcHguICovXG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7d2lkdGg6IDEyMzBweH1cbiAgICAuYXMtbWFpbndyYXBwZXIgLmNvbnRhaW5lciB7d2lkdGg6IDEyMDBweH1cbiAgICAuaGVhZGVyLXRvcDo6YmVmb3JlIHt3aWR0aDogNDQlO31cbiAgICAuaGVhZGVyLXRvcDo6YWZ0ZXIge3JpZ2h0OiA0NCU7fVxuICAgIC5zbGlkZXItYXJlYTo6YWZ0ZXIge3dpZHRoOiA2My41JTt9XG4gICAgLmFzLW1haW53cmFwcGVyLndyYXBwZXItYm94ZWQgLnNsaWRlci1hcmVhOjphZnRlciB7d2lkdGg6IDY1JTt9XG4gICAgLmJhbm5lci1jb250ZW50IGgxIHtmb250LXNpemU6IDYycHg7fVxuICAgIC5mb3JtLWNvbnRhaW5lciB7cGFkZGluZzogMzhweCA3N3B4O31cbiAgICAuc2luZ2xlLWNvdXJzZS1kZXRhaWxzIC5zaW5nbGUtaXRlbS1jb250ZW50IHtwYWRkaW5nLXRvcDogNDFweDt9XG4gICAgLnNpbmdsZS1sYXRlc3QtdGV4dCB7cGFkZGluZzogMzBweCAxMHB4IDI3cHggMjVweDt9XG4gICAgLm5ld3NsZXR0ZXItYXJlYTo6YmVmb3JlIHt3aWR0aDogNDYuNSU7fVxuICAgIC5uZXdzbGV0dGVyLWFyZWE6OmFmdGVyIHtsZWZ0OiA0Ni41JTt9XG4gICAgLnNpbmdsZS1zaWRlYmFyLXdpZGdldCAudGFncyBsaSBhIHttYXJnaW4tcmlnaHQ6IDEwcHg7fVxuICAgIC5hcy1tYWlud3JhcHBlci53cmFwcGVyLWJveGVkIC5zbGlkZXItYXJlYS5zbGlkZXItdHdvOjphZnRlciB7d2lkdGg6IDEwMCU7fVxuICAgIC52aWRlby13cmFwcGVyLCAudmlkZW8tYmFubmVyIHtoZWlnaHQ6IDYzMHB4fVxuICAgIC5mb3JtLWNvbnRhaW5lciA+IGJ1dHRvbiB7cGFkZGluZzogMCAyMnB4O31cbiAgICAuc2VsZWN0LmxhcmdlIHt3aWR0aDogMjQ3cHg7fVxufVxuXG5cbi8qIE5vcm1hbCBkZXNrdG9wIDo5OTJweC4gKi9cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExNjlweCkge1xuICAgIC5jb250YWluZXIge3dpZHRoOjk3MHB4fVxuICAgIC5hcy1tYWlud3JhcHBlci53cmFwcGVyLWJveGVkIHt3aWR0aDogOTcwcHh9XG4gICAgLmFzLW1haW53cmFwcGVyLndyYXBwZXItYm94ZWQgLmhlYWRlci1sb2dvLW1lbnUuc3RpY2sge3dpZHRoOiA5NzBweH1cbiAgICAuaGVhZGVyLXRvcDo6YmVmb3JlIHt3aWR0aDogNTMlO31cbiAgICAuaGVhZGVyLXRvcDo6YWZ0ZXIge3JpZ2h0OiA1MyU7fVxuICAgIC5zbGlkZXItYXJlYTo6YWZ0ZXIge3dpZHRoOiA3NyU7IHRyYW5zZm9ybTogcm90YXRlKDIxLjVkZWcpIHNjYWxlKDEuNyl9XG4gICAgLmJhbm5lci1jb250ZW50IC50ZXh0LWNvbnRlbnQtd3JhcHBlciB7bWFyZ2luLXJpZ2h0OiAtMTVweDt9XG4gICAgLmJhbm5lci1jb250ZW50IGgxIHtmb250LXNpemU6IDUycHg7IGxpbmUtaGVpZ2h0OiA1N3B4O31cbiAgICAuc2luZ2xlLWl0ZW0ge3BhZGRpbmc6IDAgMjBweDt9XG4gICAgLnNpbmdsZS1sYXRlc3QtdGV4dCA+IGgzIHtmb250LXNpemU6IDE5cHg7fVxuICAgIC5zaW5nbGUtbGF0ZXN0LXRleHQge3BhZGRpbmc6IDIycHggMCAxNnB4IDExcHg7fVxuICAgIC5zaW5nbGUtcHJvZHVjdC10ZXh0IHtwYWRkaW5nOiAyM3B4IDE1cHggMjJweDt9XG4gICAgLnNpbmdsZS1ldmVudC10ZXh0IHtwYWRkaW5nOiAyOXB4IDEwcHggMzVweDt9XG4gICAgLnNpbmdsZS1ldmVudC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcgc3BhbiB7bWFyZ2luLXJpZ2h0OiAzcHg7fVxuICAgIC5uZXdzbGV0dGVyLWFyZWE6OmJlZm9yZSB7d2lkdGg6IDQyJTt9XG4gICAgLm5ld3NsZXR0ZXItYXJlYTo6YWZ0ZXIge2xlZnQ6IDQyJTt9XG4gICAgLnN1YnNjcmliZS1mb3JtIHt3aWR0aDogNDUycHg7fVxuICAgIC5zb2NpYWwtaWNvbnMgYSB7bWFyZ2luLXJpZ2h0OiA4cHg7fVxuICAgIC5zaW5nbGUtZm9vdGVyLXdpZGdldCA+IHNwYW4gaSB7d2lkdGg6IDI0cHg7fVxuICAgIC5mb290ZXItaW1nIHtoZWlnaHQ6IDU5cHg7IHdpZHRoOiA1OXB4O31cbiAgICAuZm9vdGVyLWltZyBhOjphZnRlciB7bWFyZ2luOiAtMTNweCBhdXRvIDA7fVxuICAgIC5zZWxlY3R7bWFyZ2luLXJpZ2h0OiA3cHg7fVxuICAgIC5zZWxlY3QubGFyZ2Uge3dpZHRoOiAxNzhweDt9XG4gICAgLnNlbGVjdC5tZWRpdW0ge3dpZHRoOiAxNTBweDt9XG4gICAgLnNlbGVjdC5zbWFsbCB7d2lkdGg6IDEzMHB4O31cbiAgICAuY291cnNlLXBhZ2Uge3BhZGRpbmc6IDEyMHB4IDAgMTAwcHg7fVxuICAgIC5jb3Vyc2UtcGFnZSAuc2luZ2xlLWl0ZW0ge21hcmdpbi1ib3R0b206IDEzMHB4O31cbiAgICAudGVhY2hlcnMtYXJlYSB7cGFkZGluZzogMCAwIDEyMHB4O31cbiAgICAuc2luZ2xlLXNpZGViYXItd2lkZ2V0IC5zaW5nbGUtaXRlbSB7cGFkZGluZzogMCA4cHg7fVxuICAgIC5zaW5nbGUtaXRlbS10ZXh0LWluZm8gc3BhbiB7bWFyZ2luLXJpZ2h0OiA4cHg7fVxuICAgIC5zaW5nbGUtc2lkZWJhci13aWRnZXQge21hcmdpbi1ib3R0b206IDM1cHg7fVxuICAgIC5zaWRlYmFyLXdpZGdldCAuc2luZ2xlLXRlYWNoZXItdGV4dCA+IHAsIC5zaW5nbGUtc2lkZWJhci13aWRnZXQgLnNpbmdsZS1pdGVtLXRleHQgPiBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAuc2luZ2xlLWNvdXJzZS1kZXRhaWxzIC5zaW5nbGUtaXRlbS10ZXh0IGg0IHtwYWRkaW5nLXRvcDogMDt9XG4gICAgLnNpbmdsZS1jb3Vyc2UtZGV0YWlscyAuc2luZ2xlLWl0ZW0tdGV4dC1pbmZvIHttYXJnaW4tYm90dG9tOiAxMHB4O31cbiAgICAubmV3c2xldHRlci10d28gLnN1YnNjcmliZS1mb3JtID4gaW5wdXQge3dpZHRoOiAzMDRweDt9XG4gICAgLm5ld3NsZXR0ZXItdHdvIC5zdWJzY3JpYmUtZm9ybSA+IGJ1dHRvbiB7bWFyZ2luLWxlZnQ6IDdweDsgd2lkdGg6IDE0MnB4O31cbiAgICAubmV3cy1kZXRhaWxzLWNvbnRlbnQgLnNpbmdsZS1sYXRlc3QtdGV4dCB7cGFkZGluZzogMzVweCAyN3B4IDA7fVxuICAgIC5wcm9kdWN0LWRldGFpbHMtY29udGVudCB7bWFyZ2luOiAwIDI2cHg7IHBhZGRpbmc6IDNweCAwIDA7fVxuICAgIC5oZWFkZXItbG9nby1tZW51LnN0aWNrIC5sb2dvIHtwYWRkaW5nOiAyOHB4IDA7fVxuICAgIC50ZXN0aW1vbmlhbC10ZXh0LXNsaWRlciB7d2lkdGg6IDcyJTt9XG4gICAgLm1haWxjaGltcC1hbGVydHMge3BhZGRpbmctbGVmdDogODVweH1cbiAgICAuc3Vic2NyaWJlLWNvbnRhaW5lciB7cGFkZGluZzogMTZweCAyN3B4IDIxcHg7fVxuICAgIC5nYWxsZXJ5LWltZyBoMiB7bWFyZ2luOiA0N3B4IGF1dG8gMTBweDt9XG4gICAgLmdhbGxlcnktaW1nIHAge21hcmdpbjogMDt9XG4gICAgLnNsaWRlci10d28gLmJhbm5lci1jb250ZW50IGgxOjphZnRlciB7ZGlzcGxheTogbm9uZTt9XG4gICAgLnNsaWRlci10d28gLmJhbm5lci1jb250ZW50IGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA0NnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICB9XG4gICAgLnNsaWRlci10d28gLmJhbm5lci1jb250ZW50IHAge3BhZGRpbmctYm90dG9tOiAwO31cbiAgICAudmlkZW8td3JhcHBlciwgLnZpZGVvLWJhbm5lciB7aGVpZ2h0OiA1NTBweH1cbiAgICAucGFkZGluZy1zbWFsbCAubWFpbm1lbnUgdWwjbmF2ID4gbGkgPiBhIHtsaW5lLWhlaWdodDogNjZweDt9XG59XG5cbi8qIFRhYmxldCBkZXNrdG9wIDo3NjhweC4gKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLmNvbnRhaW5lciB7bWF4LXdpZHRoOjc1MHB4fVxuICAgIC5hcy1tYWlud3JhcHBlci53cmFwcGVyLWJveGVkIHt3aWR0aDo3NTBweH1cbiAgICAubW9iaWxlLW1lbnUtYXJlYSB7ZGlzcGxheTogYmxvY2t9XG4gICAgLnNlYXJjaCB7XG4gICAgICAgIHRvcDogLTEwcHg7XG4gICAgfVxuICAgIC5tYWlubWVudSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmFzLW1haW53cmFwcGVyLndyYXBwZXItYm94ZWQgLmhlYWRlci1sb2dvLW1lbnUuc3RpY2sge3dpZHRoOiA3NTBweDt9XG4gICAgLmhlYWRlci1sb2dvLW1lbnUuc3RpY2ssIC5oZWFkZXItbG9nby1tZW51LnN0aWNrZXIuZml4ZWQge3Bvc2l0aW9uOiBpbmhlcml0O31cbiAgICAuaGVhZGVyLXRvcDo6YmVmb3JlIHt3aWR0aDogNDglO31cbiAgICAuaGVhZGVyLXRvcDo6YWZ0ZXIge3JpZ2h0OiA0OCU7fVxuICAgIC5sb2dvIHtwYWRkaW5nOiA0MHB4IDAgMzNweDsgdGV4dC1hbGlnbjogY2VudGVyfVxuICAgIC5zbGlkZXItYXJlYTo6YWZ0ZXIge3dpZHRoOiAxMDAlOyB0cmFuc2Zvcm06IHJvdGF0ZSgwKSBzY2FsZSgxKX1cbiAgICAuYmFubmVyLWNvbnRlbnQgLnRleHQtY29udGVudC13cmFwcGVyIHttYXJnaW4tcmlnaHQ6IDA7fVxuICAgIC5iYW5uZXItY29udGVudCAudGV4dC1jb250ZW50LXdyYXBwZXIsIC5zbGlkZXItdHdvIC5iYW5uZXItY29udGVudCAudGV4dC1jb250ZW50LXdyYXBwZXIge1xuXHRmbG9hdDogbm9uZTtcblx0bWFyZ2luOiBhdXRvO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbiAgICAuYmFubmVyLWNvbnRlbnQgaDEge21hcmdpbi1ib3R0b206IDE0cHh9XG4gICAgLmJhbm5lci1jb250ZW50IGgxOjphZnRlciB7cmlnaHQ6IDB9XG4gICAgLmFib3V0LWFyZWEge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgfVxuICAgIC5hYm91dC1jb250YWluZXIge21hcmdpbi1sZWZ0OiAwO31cbiAgICAuY291cnNlLWFyZWEgLmNvbnRhaW5lciAucm93IC5jb2wtbGctNDpudGgtY2hpbGQoMykgLnNpbmdsZS1pdGVte1xuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIH1cbiAgICAuc2luZ2xlLWxhdGVzdC10ZXh0IHtwYWRkaW5nOiAzMHB4IDEwcHggNDhweCAzNXB4O31cbiAgICAuc2VjdGlvbi10aXRsZS13cmFwcGVyIHttYXJnaW4tYm90dG9tOiA3MHB4O31cbiAgICAuY291cnNlLWFyZWEgLnNlY3Rpb24tdGl0bGUtd3JhcHBlciB7bWFyZ2luLWJvdHRvbTogMTA1cHg7fVxuICAgIC5zZWN0aW9uLW1hcmdpbiB7bWFyZ2luOiA4MHB4IDAgMTAwcHggMH1cbiAgICAuc2VjdGlvbi1wYWRkaW5nIHtwYWRkaW5nOiA4MHB4IDA7fVxuICAgIC5sYXRlc3QtYXJlYS5zZWN0aW9uLXBhZGRpbmd7cGFkZGluZzogODBweCAwIDUwcHh9XG4gICAgLnNlY3Rpb24tYm90dG9tLXBhZGRpbmcge3BhZGRpbmc6IDAgMCA4MHB4O31cbiAgICAuZnVuLWZhY3Rvci1hcmVhIHtwYWRkaW5nOiA3MHB4IDA7fVxuICAgIC5sYXRlc3QtYXJlYSAuY29sLW1kLTY6bGFzdC1jaGlsZCAuc2luZ2xlLWxhdGVzdC1pdGVtOmxhc3QtY2hpbGQge21hcmdpbjogMDt9XG4gICAgLnByb2R1Y3QtYXJlYSAuY29udGFpbmVyIC5yb3cgLmNvbC1tZC02Om50aC1jaGlsZCgxKSAuc2luZ2xlLXByb2R1Y3QtaXRlbXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG4gICAgLnByb2R1Y3QtYXJlYSAuY29udGFpbmVyIC5yb3cgLmNvbC1tZC02Om50aC1jaGlsZCgyKSAuc2luZ2xlLXByb2R1Y3QtaXRlbXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG4gICAgLnRlYWNoZXJzLWFyZWEgLmNvbnRhaW5lciAucm93IC5jb2wtbWQtNjpudGgtY2hpbGQoMSkgLnNpbmdsZS10ZWFjaGVyLWl0ZW17XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgIC50ZWFjaGVycy1hcmVhIC5jb250YWluZXIgLnJvdyAuY29sLW1kLTY6bnRoLWNoaWxkKDIpIC5zaW5nbGUtdGVhY2hlci1pdGVte1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAuc2luZ2xlLXByb2R1Y3QtdGV4dCAuYnV0dG9uLWRlZmF1bHQge21hcmdpbi1sZWZ0OiA1cHg7fVxuICAgIC5idXR0b24tbGFyZ2UuYnV0dG9uLWRlZmF1bHQge21hcmdpbi10b3A6IDcwcHg7fVxuICAgIC5ldmVudC1hcmVhIC5jb250YWluZXIgLnJvdyAuY29sLW1kLTY6bnRoLWNoaWxkKDMpIC5zaW5nbGUtZXZlbnQtaXRlbXtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG4gICAgLmV2ZW50LWFyZWEuZXZlbnQtcGFnZSAuY29udGFpbmVyIC5yb3cgLmNvbC1tZC02Om50aC1jaGlsZCgzKSAuc2luZ2xlLWV2ZW50LWl0ZW17XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB9XG4gICAgLmluc3RhZ3JhbS1pbWFnZSAuZm9vdGVyLWltZzpudGgtY2hpbGQoMyksIC5pbnN0YWdyYW0taW1hZ2UgLmZvb3Rlci1pbWc6bnRoLWNoaWxkKDYpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC5zaW5nbGUtZXZlbnQtaXRlbSAuc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3IHNwYW4ge21hcmdpbi1yaWdodDogNnB4O31cbiAgICAubmV3c2xldHRlci1jb250ZW50IGgzIHtmb250LXNpemU6IDIxcHh9XG4gICAgLm5ld3NsZXR0ZXItY29udGVudCBoMiB7Zm9udC1zaXplOiAyNXB4fVxuICAgIC5zdWJzY3JpYmUtZm9ybSB7d2lkdGg6IDMzNXB4O31cbiAgICAuZm9vdGVyLWltZyB7aGVpZ2h0OiA2MnB4OyB3aWR0aDogNjJweDt9XG4gICAgLmZvb3Rlci1pbWcgYTo6YWZ0ZXIge21hcmdpbjogLTEzcHggYXV0byAwO31cbiAgICAuc2luZ2xlLWZvb3Rlci13aWRnZXQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAudGVhY2hlcnMtYXJlYS5wYWRkaW5nLXRvcCB7cGFkZGluZzogODBweCAwIDEwMHB4O31cbiAgICAuc2tpbGwtaW1hZ2Uge21hcmdpbi10b3A6IDQwcHg7fVxuICAgIC5saW5rLXNvY2lhbCB7bWFyZ2luLWJvdHRvbTogNjBweDt9XG4gICAgLmNvbnRhY3QtdGV4dCB7bWFyZ2luLWJvdHRvbTogNjBweDt9XG4gICAgLnNlbGVjdC5sYXJnZSB7d2lkdGg6IDE3MHB4O31cbiAgICAuc2VsZWN0Lm1lZGl1bSB7d2lkdGg6IDEzMHB4O31cbiAgICAuc2VsZWN0LnNtYWxsIHt3aWR0aDogMTI2cHg7fVxuICAgIC5mb3JtLWNvbnRhaW5lciA+IGJ1dHRvbiB7cGFkZGluZzogMCAxNXB4O31cbiAgICAuY291cnNlLXBhZ2Uge3BhZGRpbmctdG9wOiAxMTBweDt9XG4gICAgLmNvdXJzZS1wYWdlIC5zaW5nbGUtaXRlbSwgLmNvdXJzZS1wYWdlIC5jb2wtbWQtNDpudGgtY2hpbGQoNCkgLnNpbmdsZS1pdGVtIHttYXJnaW4tYm90dG9tOiAxMTBweDt9XG4gICAgLmNvdXJzZS1wYWdlIC5jb2wtbWQtNDpudGgtY2hpbGQoNSkgLnNpbmdsZS1pdGVtLCAuY291cnNlLXBhZ2UgLmNvbC1tZC00Om50aC1jaGlsZCg2KSAuc2luZ2xlLWl0ZW0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cbiAgICAuY291cnNlLXBhZ2UuY291cnNlLWFyZWEgLmNvbnRhaW5lciAucm93IC5jb2wtbGctNDpudGgtY2hpbGQoMykgLnNpbmdsZS1pdGVte1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxuICAgIC50ZWFjaGVycy1hcmVhIHtwYWRkaW5nOiAwIDAgMTEwcHg7fVxuICAgIC5uZXdzbGV0dGVyLXR3byAuc3Vic2NyaWJlLWZvcm0gPiBpbnB1dCB7d2lkdGg6IDIzN3B4O31cbiAgICAubmV3c2xldHRlci10d28gLnN1YnNjcmliZS1mb3JtID4gYnV0dG9uIHttYXJnaW4tbGVmdDogOHB4O31cbiAgICAubGF0ZXN0LXBhZ2UgLmNvbC1tZC02Omxhc3QtY2hpbGQgIC5zaW5nbGUtbGF0ZXN0LWl0ZW06bGFzdC1jaGlsZCB7bWFyZ2luLWJvdHRvbTogMzBweDt9XG4gICAgLm5ld3MtZGV0YWlscy1jb250ZW50IC5zaW5nbGUtbGF0ZXN0LXRleHQge3BhZGRpbmc6IDM1cHggMzBweCAwO31cbiAgICAubmV3cy1kZXRhaWxzLWFyZWEgLnNpZGViYXItd2lkZ2V0IHttYXJnaW4tdG9wOiAzMHB4O31cbiAgICAucHJvZHVjdC1kZXRhaWxzLWNvbnRlbnQge21hcmdpbjogMDsgcGFkZGluZzogMDt9XG4gICAgLnF0eSB7bWFyZ2luLXRvcDogMTJweDt9XG4gICAgLnByb2R1Y3QtZGV0YWlscy1jb250ZW50IC5idXR0b24tZGVmYXVsdCB7bWFyZ2luOiAxMHB4IDA7fVxuICAgIC5wcm9kdWN0LWRldGFpbHMtY29udGVudCAucC1wcmljZSB7Zm9udC1zaXplOiAzMHB4OyBwYWRkaW5nLXRvcDogMTBweDt9XG4gICAgLnNlY3Rpb24tdG9wLXBhZGRpbmcge3BhZGRpbmc6IDgwcHggMCAwO31cbiAgICAuc2hvcC1ncmlkLWFyZWEgLmNvbC1tZC0zOm50aC1jaGlsZCg5KSAuc2luZ2xlLXByb2R1Y3QtaXRlbSB7bWFyZ2luLWJvdHRvbTogNjBweDt9XG4gICAgLnBhZ2luYXRpb24tY29udGVudC5udW1iZXIgLnBhZ2luYXRpb24ge21hcmdpbjogNjBweCAwIDIwcHg7fVxuICAgIC5zaG9ydGNvZGUtYXJlYSB7cGFkZGluZzogMzVweCAwIDgwcHg7fVxuICAgIC5jb3Vyc2UtZGV0YWlscy1jb250ZW50IHttYXJnaW46IDA7fVxuICAgIC5jb3Vyc2UtZGV0YWlscy1hcmVhIGEgaW1nIHttYXJnaW46IDA7IHdpZHRoOiAxMDAlO31cbiAgICAuY291cnNlLWRldGFpbHMtY29udGVudCAuc2luZ2xlLWNvdXJzZS1kZXRhaWxzIHtwYWRkaW5nOiAzMHB4O31cbiAgICAuY291cnNlLWRldGFpbHMtYXJlYSAuc2lkZWJhci13aWRnZXQge21hcmdpbi10b3A6IDQ1cHg7fVxuICAgIC50ZXN0aW1vbmlhbC10ZXh0LXNsaWRlciB7d2lkdGg6IDkwJTt9XG4gICAgLm1haWxjaGltcC1hbGVydHMge3BhZGRpbmctbGVmdDogODVweH1cbiAgICAuc3Vic2NyaWJlLWNvbnRhaW5lciB7cGFkZGluZzogMTNweCAyMHB4IDE1cHg7fVxuICAgIC5hbmdsZSAubWFpbGNoaW1wLWFsZXJ0cyB7cGFkZGluZy1sZWZ0OiA4M3B4O31cbiAgICAuZ2FsbGVyeS1pbWcgaDIge21hcmdpbjogNjdweCBhdXRvIDEwcHg7fVxuICAgIC5zbGlkZXItdHdvIC5iYW5uZXItY29udGVudCBoMTo6YWZ0ZXIge2Rpc3BsYXk6IG5vbmU7fVxuICAgIC5zbGlkZXItdHdvIC5iYW5uZXItY29udGVudCBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgfVxuICAgIC5zbGlkZXItdHdvIC5iYW5uZXItY29udGVudCBwIHtwYWRkaW5nLWJvdHRvbTogMDt9XG4gICAgLnNsaWRlci10aHJlZSAuYmFubmVyLWNvbnRlbnQgaDEge1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1M3B4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICAgIH1cbiAgICAuYmFubmVyLWNvbnRlbnQgaDEubXQtNjAge21hcmdpbi10b3A6IDEwcHg7fVxuICAgIC52aWRlby13cmFwcGVyLCAudmlkZW8tYmFubmVyIHtoZWlnaHQ6IDQzMHB4fVxuICAgIC5oZWFkZXItbG9nby1tZW51LmZpeGVkIHtwb3NpdGlvbjogaW5oZXJpdDt9XG4gICAgLndlbGNvbWUtdmlkZW97XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLndlbGNvbWUtdmlkZW8gLnZpZGVvLWlubmVye1xuICAgICAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICB9XG4gICAgLndlbGNvbWUtYWJvdXQtdGV4dHtcbiAgICAgICAgcGFkZGluZzogMTQwcHggMDtcbiAgICB9XG4gICAgLnRlc3RpbW9uaWFsX19pbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IDYwcHggNjBweDtcbiAgICB9XG59XG5cbi8qIHNtYWxsIG1vYmlsZSA6MzIwcHguICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY29udGFpbmVyIHttYXgtd2lkdGg6MzIwcHh9XG4gICAgLmFzLW1haW53cmFwcGVyLndyYXBwZXItYm94ZWQge3dpZHRoOjMwMHB4fVxuICAgIC5tb2JpbGUtbWVudS1hcmVhIHtkaXNwbGF5OiBibG9ja31cbiAgICAubWFpbm1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5hcy1tYWlud3JhcHBlci53cmFwcGVyLWJveGVkIC5oZWFkZXItbG9nby1tZW51LnN0aWNrIHt3aWR0aDogMzAwcHg7fVxuICAgIC5oZWFkZXItbG9nby1tZW51LnN0aWNrLCAuYXMtbWFpbndyYXBwZXIud3JhcHBlci1ib3hlZCAuaGVhZGVyLWxvZ28tbWVudS5zdGljaywgLmhlYWRlci1sb2dvLW1lbnUuc3RpY2tlci5maXhlZCB7cG9zaXRpb246IGluaGVyaXQ7fVxuICAgIC5idG4ge21hcmdpbi1ib3R0b206IDEwcHg7IHBhZGRpbmc6IDZweCAxMHB4O31cbiAgICAuaGVhZGVyLXRvcC1yaWdodCA+IC5jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgIH1cbiAgICAuaGVhZGVyLXRvcC1yaWdodCA+IC5jb250ZW50OmZpcnN0LWNoaWxkIHttYXJnaW46IDA7IHBhZGRpbmc6IDA7fVxuICAgIC5oZWFkZXItdG9wOjpiZWZvcmUge3dpZHRoOiA5MSU7fVxuICAgIC5oZWFkZXItdG9wOjphZnRlciB7cmlnaHQ6IDkxJTt9XG4gICAgLmhlYWRlci10b3AtcmlnaHQgPiAuY29udGVudCBpIHttYXJnaW4tcmlnaHQ6IDRweDt9XG4gICAgLmhlYWRlci10b3AtcmlnaHQgPiAuY29udGVudDo6YWZ0ZXIsIC5uaXZvLWRpcmVjdGlvbk5hdiwgLnNsaWRlci10d28gLnByZXZpZXctMiAubml2by1jb250cm9sTmF2LCAuYmFubmVyLWNvbnRlbnQgaDE6OmFmdGVyLCAuc3Vic2NyaWJlLWZvcm06OmJlZm9yZSwgLmhlYWRlci10d28gLmhlYWRlci10b3AtcmlnaHQgc3BhbjpmaXJzdC1jaGlsZCwgLnNsaWRlci10aHJlZSAucHJldmlldy0yIC5uaXZvLWNvbnRyb2xOYXYge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuYmFubmVyLWNvbnRlbnQgaDEge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICBtYXJnaW46IDBcbiAgICB9XG4gICAgLmJhbm5lci1jb250ZW50IC50ZXh0LWNvbnRlbnQtd3JhcHBlciwgLnNsaWRlci10d28gLmJhbm5lci1jb250ZW50IC50ZXh0LWNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYnV0dG9uLWRlZmF1bHQge3BhZGRpbmc6IDEwcHggMjBweDt9XG4gICAgLnNsaWRlci1hcmVhOjphZnRlciB7d2lkdGg6IDEwMCU7IHRyYW5zZm9ybTogcm90YXRlKDApIHNjYWxlKDEpfVxuICAgIC5sb2dvIHtwYWRkaW5nOiA0NnB4IDAgMjhweDsgdGV4dC1hbGlnbjogY2VudGVyO31cbiAgICAuYWJvdXQtYXJlYSB7YmFja2dyb3VuZDogIzJEM0U1MDsgbWFyZ2luLXRvcDogODBweDt9XG4gICAgLmFib3V0LWNvbnRhaW5lciB7bWFyZ2luLWxlZnQ6IDA7fVxuICAgIC5zaW5nbGUtbGF0ZXN0LXRleHQge3BhZGRpbmc6IDMwcHggMTdweDt9XG4gICAgLnNlY3Rpb24tdGl0bGUtd3JhcHBlciB7bWFyZ2luLWJvdHRvbTogNjBweDt9XG4gICAgLnNlY3Rpb24tdGl0bGUgaDMge2ZvbnQtc2l6ZTogMjVweDt9XG4gICAgLmNvdXJzZS1hcmVhIC5zZWN0aW9uLXRpdGxlLXdyYXBwZXIge21hcmdpbi1ib3R0b206IDgwcHg7fVxuICAgIC5zZWN0aW9uLXBhZGRpbmcge3BhZGRpbmc6IDYwcHggMDt9XG4gICAgLnNlY3Rpb24tbWFyZ2luIHttYXJnaW46IDYwcHggMCA4MHB4IDB9XG4gICAgLnNlY3Rpb24tYm90dG9tLXBhZGRpbmcge3BhZGRpbmc6IDAgMCA2MHB4O31cbiAgICAuY291cnNlLXBhZ2Uge3BhZGRpbmctdG9wOiA4MHB4O31cbiAgICAuYWJvdXQtYXJlYTo6YmVmb3JlIHt3aWR0aDogNzQlO31cbiAgICAuYWJvdXQtYXJlYTo6YWZ0ZXIge2xlZnQ6IDc0JTt9XG4gICAgLnNpbmdsZS1pdGVtIHttYXJnaW4tYm90dG9tOiA4MHB4O3BhZGRpbmc6IDAgMTZweDt9XG4gICAgLnNpbmdsZS1pdGVtLWltYWdlIHt0b3A6IC0yMHB4O31cbiAgICAuYnV0dG9uLWxhcmdlLmJ1dHRvbi1kZWZhdWx0IHttYXJnaW4tdG9wOiA1cHg7fVxuICAgIC5mdW4tZmFjdG9yLWFyZWEge3BhZGRpbmc6IDYwcHggMCAyMHB4O31cbiAgICAuc2luZ2xlLWZ1bi1mYWN0b3Ige21hcmdpbi1ib3R0b206IDQ1cHg7fVxuICAgIC5zaW5nbGUtbGF0ZXN0LWltYWdlIHtmbG9hdDogbm9uZTsgdGV4dC1hbGlnbjogY2VudGVyO31cbiAgICAuc2luZ2xlLWxhdGVzdC1pbWFnZSBhLCAuc2luZ2xlLWxhdGVzdC1pbWFnZSBpbWcge3dpZHRoOiAxMDAlO31cbiAgICAubGF0ZXN0LWFyZWEgLmNvbC1tZC02Omxhc3QtY2hpbGQgLnNpbmdsZS1sYXRlc3QtaXRlbTpsYXN0LWNoaWxkLCAucHJvZHVjdC1hcmVhIC5jb2wtbWQtMzpsYXN0LWNoaWxkIC5zaW5nbGUtcHJvZHVjdC1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5zaW5nbGUtcHJvZHVjdC1pdGVtLCAuc2luZ2xlLWV2ZW50LWl0ZW0ge21hcmdpbi1ib3R0b206IDQwcHg7fVxuICAgIC5zaW5nbGUtZXZlbnQtdGV4dCB7cGFkZGluZzogMjlweCA4cHggMzVweDt9XG4gICAgLmV2ZW50LWFyZWEgLmNvbC1tZC00Omxhc3QtY2hpbGQgLnNpbmdsZS1ldmVudC1pdGVtOmxhc3QtY2hpbGQge21hcmdpbi1ib3R0b206IDE1cHg7fVxuICAgIC5uZXdzbGV0dGVyLWFyZWE6OmJlZm9yZSB7d2lkdGg6IDY5JTt9XG4gICAgLm5ld3NsZXR0ZXItYXJlYTo6YWZ0ZXIge2xlZnQ6IDY5JTt9XG4gICAgLm5ld3NsZXR0ZXItY29udGVudCA+IGgyIHtmb250LXNpemU6IDIycHg7fVxuICAgIC5zdWJzY3JpYmUtZm9ybSA+IGJ1dHRvbiB7d2lkdGg6IDMzJTt9XG4gICAgLnN1YnNjcmliZS1mb3JtIHtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLm5ld3NsZXR0ZXItZm9ybSB7cGFkZGluZzogMzZweCAwIDA7fVxuICAgIC5zaW5nbGUtZm9vdGVyLXdpZGdldCA+IGgzIHtwYWRkaW5nLXRvcDogNDBweDt9XG4gICAgLmZvb3Rlci1hcmVhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuY29sdW1uLXJpZ2h0IHtmbG9hdDogbm9uZTt9XG4gICAgLmZvb3Rlci13aWRnZXQtYXJlYSB7cGFkZGluZzogNjBweCAwIDQwcHg7fVxuICAgIC5icmVhZGNydW1iLWJhbm5lci1hcmVhIHtwYWRkaW5nOiA2MHB4IDA7fVxuICAgIC5za2lsbC1pbWFnZSB7bWFyZ2luLXRvcDogMzBweDt9XG4gICAgLnNraWxsLWFuZC1leHBlcmllbmNlLWFyZWEgLmNvbC1tZC02Omxhc3QtY2hpbGQgLnNraWxsLWJhci1pdGVtOmZpcnN0LWNoaWxkIHttYXJnaW4tdG9wOiAyNXB4O31cbiAgICAudGVhY2hlcnMtYXJlYS5wYWRkaW5nLXRvcCB7cGFkZGluZzogNjBweCAwIDQwcHg7fVxuICAgIC5zaW5nbGUtdGVhY2hlci1pdGVtIHttYXJnaW4tYm90dG9tOiAzNXB4O31cbiAgICBzcGFuLmMtaWNvbiBpIHt3aWR0aDogMjFweDt9XG4gICAgLmNvbnRhY3QtdGV4dCB7bWFyZ2luLWJvdHRvbTogNDBweDt9XG4gICAgaDQuY29udGFjdC10aXRsZSB7Zm9udC1zaXplOiAyMnB4O31cbiAgICAubGluay1zb2NpYWwge21hcmdpbi1ib3R0b206IDQ1cHg7fVxuICAgIC5icmVhZGNydW1iLXRleHQgaDEge2xpbmUtaGVpZ2h0OiAzN3B4OyBmb250LXNpemU6IDMycHh9XG4gICAgLmZvcm0tY29udGFpbmVyIHttYXJnaW46IC0zNXB4IDAgMDsgcGFkZGluZzogNDBweCAzMHB4O31cbiAgICAuc2VsZWN0LmxhcmdlLCAuc2VsZWN0Lm1lZGl1bSwgLnNlbGVjdC5zbWFsbCB7bWFyZ2luLWJvdHRvbTogMTJweDsgd2lkdGg6IDEwMCU7fVxuICAgIC5mb3JtLWNvbnRhaW5lciA+IGJ1dHRvbiB7d2lkdGg6IDEwMCU7fVxuICAgIC5jb3Vyc2UtcGFnZSAuc2luZ2xlLWl0ZW0ge21hcmdpbi1ib3R0b206IDgwcHg7fVxuICAgIC5jb3Vyc2UtcGFnZSAuY29sLW1kLTQ6bnRoLWNoaWxkKDQpIC5zaW5nbGUtaXRlbSwgLmNvdXJzZS1wYWdlIC5jb2wtbWQtNDpudGgtY2hpbGQoNSkgLnNpbmdsZS1pdGVtLCAuY291cnNlLXBhZ2UgLmNvbC1tZC00Om50aC1jaGlsZCg2KSAuc2luZ2xlLWl0ZW0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1N3B4O1xuICAgIH1cbiAgICAuc2luZ2xlLWl0ZW0tdGV4dC1pbmZvIHNwYW4ge21hcmdpbi1yaWdodDogOHB4O31cbiAgICAudGVhY2hlcnMtYXJlYSB7cGFkZGluZzogMCAwIDUwcHg7fVxuICAgIC5jb3Vyc2UtZGV0YWlscy1jb250ZW50IHttYXJnaW4tbGVmdDogMDt9XG4gICAgLmNvdXJzZS1kZXRhaWxzLWFyZWEgYSBpbWcge21hcmdpbjogMDsgd2lkdGg6IDEwMCU7fVxuICAgIC5zaW5nbGUtY291cnNlLWRldGFpbHMgLmNvbC1tZC02OmZpcnN0LWNoaWxkIHtwYWRkaW5nLXJpZ2h0OiAxNXB4O31cbiAgICAuc2luZ2xlLWNvdXJzZS1kZXRhaWxzIC5zaW5nbGUtaXRlbS10ZXh0IGg0IHtmb250LXNpemU6IDIycHg7fVxuICAgIC5zaW5nbGUtY291cnNlLWRldGFpbHMge21hcmdpbi1ib3R0b206IDUwcHg7IHBhZGRpbmc6IDAgMCAzMHB4O31cbiAgICAuc2luZ2xlLWNvdXJzZS1kZXRhaWxzIC5zaW5nbGUtaXRlbS10ZXh0IHtwYWRkaW5nOiAwIDEwcHg7fVxuICAgIC5jb3Vyc2UtZHVyYXRpb24gLnRleHQgc3BhbiB7d2lkdGg6IDQwJTt9XG4gICAgLmNvdXJzZS1kdXJhdGlvbiAudGV4dCBzcGFuLnRleHQtcmlnaHQge3dpZHRoOiA2MCU7fVxuICAgIC5jb21tZW50cyB7cGFkZGluZzogNTBweCAwIDIwcHg7fVxuICAgIC5hdXRob3ItaW1hZ2Uge21hcmdpbi1yaWdodDogOHB4O31cbiAgICAuYXV0aG9yLWluZm8gPiBoNCB7ZGlzcGxheTogYmxvY2s7fVxuICAgIC5jb21tZW50LXRpbWUge2Zsb2F0OiBub25lOyBmb250LXNpemU6IDEycHg7fVxuICAgIC5zaW5nbGUtY29tbWVudC5jb21tZW50LXJlcGx5IHtwYWRkaW5nLWxlZnQ6IDEwcHg7fVxuICAgIC5zaW5nbGUtc2lkZWJhci13aWRnZXQge21hcmdpbi1ib3R0b206IDM1cHg7fVxuICAgIC5zaW5nbGUtc2lkZWJhci13aWRnZXQ6bGFzdC1jaGlsZCB7bWFyZ2luLWJvdHRvbTogMDt9XG4gICAgLmV2ZW50LWRldGFpbHMtY29udGVudCAuc2luZ2xlLWV2ZW50LWl0ZW0ge3BhZGRpbmc6IDA7fVxuICAgIC5ldmVudC1kZXRhaWxzLWNvbnRlbnQgLnNpbmdsZS1ldmVudC10ZXh0IHtwYWRkaW5nOiAzMnB4IDEwcHggMDt9XG4gICAgLmV2ZW50LWRldGFpbHMtY29udGVudCAuc2luZ2xlLWV2ZW50LXRleHQgaDMge2ZvbnQtc2l6ZTogMjNweDt9XG4gICAgLmV2ZW50LWRldGFpbHMtY29udGVudCAuc2luZ2xlLWV2ZW50LWltYWdlIGEgPiBzcGFuIHtcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHdpZHRoOiA2NXB4O1xuICAgIH1cbiAgICAuZXZlbnQtZGV0YWlscy1jb250ZW50IC5zaW5nbGUtZXZlbnQtaW1hZ2Ugc3BhbiB7Zm9udC1zaXplOiAyNXB4O31cbiAgICAuZXZlbnQtZGV0YWlscy1jb250ZW50IC5jb21tZW50cyB7cGFkZGluZzogMTBweCAwIDM1cHg7fVxuICAgIC5oZWFkZXItdHdvIC5oZWFkZXItdG9wLXJpZ2h0IHtmbG9hdDogbm9uZTsgdGV4dC1hbGlnbjogY2VudGVyO31cbiAgICAubmV3c2xldHRlci10d28gLnN1YnNjcmliZS1mb3JtID4gaW5wdXQge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDE1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAubmV3c2xldHRlci10d28gLnN1YnNjcmliZS1mb3JtID4gYnV0dG9uIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAubmV3c2xldHRlci10d28gLnN1YnNjcmliZS1mb3JtIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLm5ld3NsZXR0ZXItdHdvIC5uZXdzbGV0dGVyLWZvcm0ge3BhZGRpbmctdG9wOiAzMHB4O31cbiAgICAubGF0ZXN0LXBhZ2UgLmNvbC1tZC02Omxhc3QtY2hpbGQgIC5zaW5nbGUtbGF0ZXN0LWl0ZW06bGFzdC1jaGlsZCB7bWFyZ2luLWJvdHRvbTogMzBweDt9XG4gICAgLm5ld3MtZGV0YWlscy1jb250ZW50IC5zaW5nbGUtbGF0ZXN0LXRleHQge3BhZGRpbmc6IDIxcHggMTNweCAwO31cbiAgICAubmV3cy1kZXRhaWxzLWNvbnRlbnQgLnNpbmdsZS1sYXRlc3QtdGV4dCA+IGgzIHttYXJnaW4tYm90dG9tOiAxNXB4O31cbiAgICAucXVvdGUtc2VjdGlvbiB7bWFyZ2luOiAyMHB4IDAgMjVweDsgcGFkZGluZzogMTdweCAwIDAgMTBweDt9XG4gICAgLnRhZ3MtYW5kLWxpbmtzIHtwYWRkaW5nLXRvcDogMDt9XG4gICAgLm5ld3MtZGV0YWlscy1jb250ZW50IC5zb2NpYWwtbGlua3Mge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLm5ld3MtZGV0YWlscy1jb250ZW50IC5jb21tZW50cyB7cGFkZGluZzogMjVweCAwIDQwcHg7fVxuICAgIC5wcm9kdWN0LWRldGFpbHMtY29udGVudCB7bWFyZ2luOiAwOyBwYWRkaW5nOiAwO31cbiAgICAucXR5IHttYXJnaW4tdG9wOiAxMnB4O31cbiAgICAucHJvZHVjdC1kZXRhaWxzLWNvbnRlbnQgLmJ1dHRvbi1kZWZhdWx0IHttYXJnaW46IDEwcHggMDt9XG4gICAgLnNlY3Rpb24tdG9wLXBhZGRpbmcge3BhZGRpbmc6IDUwcHggMCAwO31cbiAgICAucHJvZHVjdC1kZXRhaWxzLWNvbnRlbnQgaDIge2ZvbnQtc2l6ZTogMjdweDsgcGFkZGluZzogMjBweCAwIDEwcHg7fVxuICAgIC5zaG9wLWdyaWQtYXJlYSAuY29sLW1kLTM6bnRoLWNoaWxkKDkpIC5zaW5nbGUtcHJvZHVjdC1pdGVtLCAuc2hvcC1ncmlkLWFyZWEgLmNvbC1tZC0zOm50aC1jaGlsZCgxMCkgLnNpbmdsZS1wcm9kdWN0LWl0ZW0sIC5zaG9wLWdyaWQtYXJlYSAuY29sLW1kLTM6bnRoLWNoaWxkKDExKSAuc2luZ2xlLXByb2R1Y3QtaXRlbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHhcbiAgICB9XG4gICAgLnBhZ2luYXRpb24tY29udGVudC5udW1iZXIgLnBhZ2luYXRpb24ge21hcmdpbjogNTBweCAwIDIwcHg7fVxuICAgIC5zaG9ydGNvZGUtYXJlYSB7cGFkZGluZzogMjBweCAwIDUwcHggMH1cbiAgICAuYnJlYWRjcnVtYi1iYXIgbGkge2xpbmUtaGVpZ2h0OiAyMnB4O31cbiAgICAudGVzdGltb25pYWwtdGV4dC1zbGlkZXIge3dpZHRoOiAxMDAlO31cbiAgICAudGVzdGltb25pYWwtYXJlYSB7YmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgcGFkZGluZzogNTVweCAwIDQycHg7fVxuICAgIC50ZXN0aW1vbmlhbC10ZXh0LXNsaWRlciBoMiB7Zm9udC1zaXplOiAyNXB4O31cbiAgICAuc2luLXRlc3RpVGV4dCBwIHtsaW5lLWhlaWdodDogMjJweDsgbWFyZ2luLXRvcDogMTVweDt9XG4gICAgLnNsaWNrLXByZXYge2xlZnQ6IDA7fVxuICAgIC5zbGljay1uZXh0IHtyaWdodDogMDt9XG4gICAgLm1haWxjaGltcC1hbGVydHMge3BhZGRpbmctbGVmdDogMHB4fVxuICAgIC50ZXh0LWFyZWEge3BhZGRpbmc6IDYwcHggMCA4MHB4O31cbiAgICAudGV4dC1hcmVhIHAge2xpbmUtaGVpZ2h0OiAyNXB4O31cbiAgICAuc3Vic2NyaWJlLWNvbnRhaW5lciB7cGFkZGluZzogMTZweCAyMHB4IDIwcHg7fVxuICAgIC5mb290ZXItaW5mby1jb250YWluZXIge3BhZGRpbmctYm90dG9tOiA1MHB4OyBwYWRkaW5nLXRvcDogODBweDt9XG4gICAgLmZvb3Rlci1pbmZvID4gc3BhbiB7IG1hcmdpbjogMTVweCAwIDA7fVxuICAgIC5zaW5nbGUtZm9vdGVyLXdpZGdldCB7bWFyZ2luLWJvdHRvbTogMjdweDt9XG4gICAgLmZvb3Rlci1jb250YWluZXIge3BhZGRpbmc6IDMwcHggMCAyNXB4O31cbiAgICAuZm9vdGVyLWNvbnRhaW5lciAuc29jaWFsLWxpbmtzLXRocmVlIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmZvb3Rlci1jb250YWluZXIgc3BhbiB7ZGlzcGxheTogYmxvY2s7IHRleHQtYWxpZ246IGNlbnRlcjt9XG4gICAgLm5ld3NsZXR0ZXItZm91ciAuc3Vic2NyaWJlLWZvcm0ge21hcmdpbi1ib3R0b206IDI0cHg7IG1hcmdpbi10b3A6IDA7fVxuICAgIC5mb290ZXItd2lkZ2V0LWZvdXIgLnNpbmdsZS1mb290ZXItd2lkZ2V0ID4gaDMge3BhZGRpbmctdG9wOiAxMHB4O31cbiAgICAuYW5nbGUgLm1haWxjaGltcC1hbGVydHMge3BhZGRpbmctbGVmdDogMDt9XG4gICAgLmdhbGxlcnktaW1nIGgyIHttYXJnaW46IDMzcHggYXV0byAxMHB4O31cbiAgICAuZ2FsbGVyeS1hcmVhIC5jb2wtbWQtNCB7bWFyZ2luLWJvdHRvbTogMzBweDt9XG4gICAgLmdhbGxlcnktYXJlYSAuY29sLW1kLTQ6bGFzdC1jaGlsZCB7bWFyZ2luOiAwO31cbiAgICAudmlkZW8td3JhcHBlciwgLnZpZGVvLWJhbm5lciB7aGVpZ2h0OiAyODBweH1cbiAgICAuaGVhZGVyLWxvZ28tbWVudS5maXhlZCB7cG9zaXRpb246IGluaGVyaXQ7fVxuICAgIC5zdWJzY3JpYmUtZm9ybSA+IGJ1dHRvbiB7cGFkZGluZzogMCA3cHg7IHdpZHRoOiBhdXRvO31cbiAgICAuc3Vic2NyaWJlLWZvcm0gPiBpbnB1dCB7cGFkZGluZy1sZWZ0OiA3cHg7fVxuICAgIC5wYWdpbmF0aW9uLWxnID4gbGkgPiBhLCAucGFnaW5hdGlvbi1sZyA+IGxpID4gc3BhbiB7cGFkZGluZzogNnB4IDE0cHg7fVxuICAgIC5tYWlubWVudS1hcmVhIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgfVxuICAgIC5oZWFkZXItc2VhcmNoIC5zZWFyY2gtbWVudSB7YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO31cbiAgICAuc2VhcmNoIHtsZWZ0OiAtMTZweDsgbWFyZ2luOiBhdXRvOyB0b3A6IDM3cHg7IHdpZHRoOiAxMDAlO31cbiAgICAuaGVhZGVyLXNlYXJjaCB7cG9zaXRpb246IGFic29sdXRlOyByaWdodDogNDhweDt9XG4gICAgLmhlYWRlci1sb2dvLW1lbnUge3Bvc2l0aW9uOiByZWxhdGl2ZTt9XG4gICAgLndlbGNvbWUtdmlkZW97XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLndlbGNvbWUtdmlkZW8gLnZpZGVvLWlubmVye1xuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICB9XG4gICAgLndlbGNvbWUtYWJvdXQtdGV4dHtcbiAgICAgICAgcGFkZGluZzogMTAwcHggMDtcbiAgICB9XG4gICAgLnRlc3RpbW9uaWFsX19pbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IDYwcHggNjBweDtcbiAgICB9XG4gICAgLnRlc3RpbW9uaWFsX19hdXRob3ItbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAvKiBMb2dpbiBSZWdpc3RlciBDU1MqL1xuICAgIC5mb3JtLWZpbGQsIC5sb2dpbi1zdWJtaXQsIC5sb3N0LXBhc3N3b3JkLCAucmVnaXN0ZXItc3VibWl0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAuZm9ybS1maWxkIGxhYmVsLCAubG9naW4tc3VibWl0IGxhYmVsLCAubG9zdC1wYXNzd29yZCBsYWJlbCwgLnJlZ2lzdGVyLXN1Ym1pdCBsYWJlbCB7XG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbn1cblxuLyogTGFyZ2UgTW9iaWxlIDo0ODBweC4gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5jb250YWluZXIge21heC13aWR0aDo0NTBweH1cbiAgICAuc2luZ2xlLWl0ZW0ge21hcmdpbjogMCAxNHB4IDU2cHg7IHBhZGRpbmc6IDAgNDdweDt9XG4gICAgLmFzLW1haW53cmFwcGVyLndyYXBwZXItYm94ZWQge3dpZHRoOjQ1MHB4fVxuICAgIC5iYW5uZXItY29udGVudCBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMnB4O1xuICAgIH1cbiAgICAuc2luZ2xlLWV2ZW50LXRleHQge3BhZGRpbmc6IDI5cHggMjFweCAzNXB4O31cbiAgICAuZm9vdGVyLWltZyB7aGVpZ2h0OiA1OXB4OyB3aWR0aDogNTlweDt9XG4gICAgLmZvb3Rlci1pbWcgYTo6YWZ0ZXIge21hcmdpbjogLTEzcHggYXV0byAwO31cbiAgICAuZXZlbnQtZGV0YWlscy1jb250ZW50IC5zaW5nbGUtZXZlbnQtaW1hZ2UgYSA+IHNwYW4ge1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgfVxuICAgIC5zaW4tdGVzdGlJbWFnZS5zbGljay1jdXJyZW50IGltZyB7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE3cHg7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICB9XG4gICAgLmdhbGxlcnktaW1nIGgyIHttYXJnaW46IDgzcHggYXV0byAxMHB4O31cbiAgICAudmlkZW8td3JhcHBlciwgLnZpZGVvLWJhbm5lciB7aGVpZ2h0OiAzMjBweH1cbiAgICAud2VsY29tZS12aWRlb3tcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAud2VsY29tZS12aWRlbyAudmlkZW8taW5uZXJ7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICAgIH1cbiAgICAudGVzdGltb25pYWxfX2lubmVyIHtcbiAgICAgICAgcGFkZGluZzogMTAwcHggNjBweCA2MHB4O1xuICAgIH1cbiAgICAudGVzdGltb25pYWxfX2F1dGhvci1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/formations/formations.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/formations/formations.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content,\n.contain-area {\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.contain-area {\n  margin-bottom: 100px;\n}\n\n.section-title-wrapper {\n  margin-bottom: 122px;\n}\n\n.section-title-wrapper .section-title {\n  color: #0c2d50;\n}\n\n.section-title-wrapper .section-title h4 {\n  text-transform: uppercase;\n}\n\n.section-title {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.section-title h4 {\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.bottomy {\n  width: 60%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.bottomy-one,\n.bottomy-two {\n  width: 50%;\n  height: 3px;\n  background-color: #0c2d50;\n}\n\n.bottomy-center {\n  margin-left: 1%;\n  margin-right: 1%;\n  position: relative;\n  bottom: 10px;\n}\n\n/*----------------------------------------*/\n\n/*  17.1 Teachers Area\n/*----------------------------------------*/\n\n.teachers-area {\n  padding: 0 0 50px;\n  margin-top: -90px;\n}\n\n.single-teacher-item {\n  box-shadow: 1px 0 5px rgba(0, 0, 0, 0.2);\n  position: relative;\n  transition: all 0.5s !important;\n  cursor: pointer;\n}\n\n.single-teacher-item:hover {\n  box-shadow: 0 6px 20px rgba(34, 30, 31, 0.3);\n}\n\n.single-teacher-image > a {\n  display: inline-block;\n  position: relative;\n}\n\n.single-teacher-image > a img,\n.single-teacher-image > a {\n  width: 100%;\n}\n\n.single-teacher-image > a:after {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  position: absolute;\n  top: 0;\n  transition: all 0.3s ease 0s;\n  width: 100%;\n}\n\n.single-teacher-item:hover .single-teacher-image > a:after {\n  opacity: 1;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n}\n\n.single-teacher-text {\n  background: #f6f6f6 none repeat scroll 0 0;\n  border-bottom: 3px solid #0c2d50;\n  padding: 20px 26px 90px;\n  text-align: center;\n  transition: all 0.4s;\n}\n\n.single-teacher-item:hover .single-teacher-text {\n  margin-top: -45px;\n  padding: 20px 26px 66px;\n  position: absolute;\n  z-index: 9;\n}\n\n@media screen and (max-width: 992px) {\n  .single-teacher-item:hover .single-teacher-text {\n    margin-top: -45px;\n    padding: 20px 26px 66px;\n    position: relative;\n    z-index: 9;\n  }\n}\n\n.single-teacher-item:hover .descr-formation {\n  padding: 10px;\n  height: 150px;\n  overflow-y: auto;\n}\n\n.descr-formation::-webkit-scrollbar {\n  width: 1px;\n  background: transparent;\n}\n\n.single-teacher-text > h3 {\n  font-family: raleway;\n  font-weight: 600;\n  margin-bottom: 4px;\n  padding-top: 20px;\n  font-size: 24px;\n}\n\n.single-teacher-item:hover .single-teacher-text > h3 {\n  padding-top: 0;\n}\n\n.single-teacher-text > h3 a {\n  color: white;\n  transition: all 0.3s;\n}\n\n.single-teacher-text > h4 {\n  font-family: raleway;\n  font-weight: 500;\n  color: rgba(201, 191, 191, 0.76);\n}\n\n.single-teacher-text > p {\n  display: none;\n  padding-top: 13px;\n  color: white;\n}\n\n.single-teacher-item:hover .single-teacher-text p {\n  display: block;\n}\n\n.social-links > a {\n  border: 1px solid #2d3e50;\n  border-radius: 50%;\n  color: white;\n  display: inline-block;\n  font-size: 14px;\n  height: 27px;\n  line-height: 25px;\n  margin: 0 3px;\n  text-align: center;\n  width: 27px;\n}\n\n.social-links > a:hover {\n  color: #ffffff;\n}\n\n.social-links {\n  bottom: 38px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  width: 100%;\n  transition: all 0.3s ease 0s;\n}\n\n.single-teacher-item:hover .social-links {\n  bottom: 25px;\n}\n\n.single-course-details {\n  background: #f6f6f6 none repeat scroll 0 0;\n  border-bottom: 3px solid #0c2d50;\n  margin-bottom: 80px;\n  padding: 33px 0;\n}\n\n.single-course-details .single-item-text {\n  padding-right: 48px;\n}\n\n.course-details-area a img {\n  margin-left: -35px;\n}\n\n.single-course-details a {\n  display: block;\n}\n\n.single-course-details .col-md-6:first-child {\n  padding-right: 3px;\n}\n\n.one {\n  background-image: url('niv1.jpg') !important;\n  background-size: cover !important;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n}\n\n.two {\n  background-image: url('niv2.jpg') !important;\n  background-size: cover !important;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n}\n\n.three {\n  background-image: url('niv3.jpg') !important;\n  background-size: cover !important;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n}\n\n.single-teacher-text {\n  height: 260px;\n  width: 100%;\n}\n\n@media screen and (max-width: 992px) {\n  .single-teacher-item {\n    margin-top: 40px;\n  }\n}\n\n.no-news {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: 130px;\n  margin-top: -30px;\n  background: whitesmoke;\n  color: #0c2d50;\n  font-weight: bold;\n  align-items: center;\n  border-radius: 5px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtYXRpb25zL0U6XFxQcm9qZXRzXFxXZWJjdXBcXGNvZGVfZnJvbnRcXHdlYmN1cEZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb3JtYXRpb25zXFxmb3JtYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm1hdGlvbnMvZm9ybWF0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTs7RUFFRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxvQkFBQTtBQ0pGOztBRE9BO0VBQ0Usb0JBQUE7QUNKRjs7QURPQTtFQUNFLGNBckJZO0FDaUJkOztBRE9BO0VBQ0UseUJBQUE7QUNKRjs7QURPQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNKRjs7QURPQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0pGOztBRE9BOztFQUVFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBcERZO0FDZ0RkOztBRE9BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDSkY7O0FET0EsMkNBQUE7O0FBQ0E7MkNBQUE7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDSkY7O0FETUE7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FDSEY7O0FES0E7RUFDRSw0Q0FBQTtBQ0ZGOztBRElBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREdBOztFQUVFLFdBQUE7QUNBRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxnRUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBRUEsNEJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxVQUFBO0VBQ0Esa0VBQUE7RUFDQSwwQkFBQTtBQ0VGOztBREFBO0VBQ0UsMENBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0lGOztBRERBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VDSUY7QUFDRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURBQTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQ0dGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxjQUFBO0FDSUY7O0FERkE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUNLRjs7QURIQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ01GOztBREpBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ09GOztBRExBO0VBQ0UsY0FBQTtBQ1FGOztBRE5BO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDU0Y7O0FEUEE7RUFDRSxjQUFBO0FDVUY7O0FEUkE7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBQ1dGOztBRFRBO0VBQ0UsWUFBQTtBQ1lGOztBRFZBO0VBQ0UsMENBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ2FGOztBRFhBO0VBQ0UsbUJBQUE7QUNjRjs7QURaQTtFQUNFLGtCQUFBO0FDZUY7O0FEYkE7RUFDRSxjQUFBO0FDZ0JGOztBRGRBO0VBQ0Usa0JBQUE7QUNpQkY7O0FEZEE7RUFDRSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtBQ2lCRjs7QURkQTtFQUNFLDRDQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0FDaUJGOztBRGRBO0VBQ0UsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7QUNpQkY7O0FEZEE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ2lCRjs7QURkQTtFQUNFO0lBQ0UsZ0JBQUE7RUNpQkY7QUFDRjs7QURkQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQTVQWTtFQTZQWixpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDZ0JGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtYXRpb25zL2Zvcm1hdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZmlyc3QtY29sb3I6ICMwYzJkNTA7XHJcbiRzZWNvbmQtY29sb3I6ICMwMDIyNDc7XHJcbiR0aGlyZC1jb2xvcjogIzExN2FiZTtcclxuJGNvbG9yLXdoaXRlOiAjZmZmZmZmO1xyXG5cclxuLmNvbnRlbnQsXHJcbi5jb250YWluLWFyZWEge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi5jb250YWluLWFyZWEge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZS13cmFwcGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMjJweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUtd3JhcHBlciAuc2VjdGlvbi10aXRsZSB7XHJcbiAgY29sb3I6ICRmaXJzdC1jb2xvcjtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUtd3JhcHBlciAuc2VjdGlvbi10aXRsZSBoNCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSBoNCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYm90dG9teSB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYm90dG9teS1vbmUsXHJcbi5ib3R0b215LXR3byB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlyc3QtY29sb3I7XHJcbn1cclxuXHJcbi5ib3R0b215LWNlbnRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogIDE3LjEgVGVhY2hlcnMgQXJlYVxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4udGVhY2hlcnMtYXJlYSB7XHJcbiAgcGFkZGluZzogMCAwIDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTkwcHg7XHJcbn1cclxuLnNpbmdsZS10ZWFjaGVyLWl0ZW0ge1xyXG4gIGJveC1zaGFkb3c6IDFweCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMzQsIDMwLCAzMSwgMC4zKTtcclxufVxyXG4uc2luZ2xlLXRlYWNoZXItaW1hZ2UgPiBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zaW5nbGUtdGVhY2hlci1pbWFnZSA+IGEgaW1nLFxyXG4uc2luZ2xlLXRlYWNoZXItaW1hZ2UgPiBhIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2luZ2xlLXRlYWNoZXItaW1hZ2UgPiBhOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIC5zaW5nbGUtdGVhY2hlci1pbWFnZSA+IGE6YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXCI7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbn1cclxuLnNpbmdsZS10ZWFjaGVyLXRleHQge1xyXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGZpcnN0LWNvbG9yO1xyXG4gIHBhZGRpbmc6IDIwcHggMjZweCA5MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG4uc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciAuc2luZ2xlLXRlYWNoZXItdGV4dCB7XHJcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgcGFkZGluZzogMjBweCAyNnB4IDY2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLXRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDI2cHggNjZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk7XHJcbn1cclxufVxyXG5cclxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLmRlc2NyLWZvcm1hdGlvbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5kZXNjci1mb3JtYXRpb246Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMXB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc2luZ2xlLXRlYWNoZXItdGV4dCA+IGgzIHtcclxuICBmb250LWZhbWlseTogcmFsZXdheTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBoMyB7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBoMyBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBoNCB7XHJcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogcmdiYSgyMDEsIDE5MSwgMTkxLCAwLjc2KTtcclxufVxyXG4uc2luZ2xlLXRlYWNoZXItdGV4dCA+IHAge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIC5zaW5nbGUtdGVhY2hlci10ZXh0IHAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zb2NpYWwtbGlua3MgPiBhIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMmQzZTUwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBoZWlnaHQ6IDI3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbWFyZ2luOiAwIDNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI3cHg7XHJcbn1cclxuLnNvY2lhbC1saW5rcyA+IGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5zb2NpYWwtbGlua3Mge1xyXG4gIGJvdHRvbTogMzhweDtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIC5zb2NpYWwtbGlua3Mge1xyXG4gIGJvdHRvbTogMjVweDtcclxufVxyXG4uc2luZ2xlLWNvdXJzZS1kZXRhaWxzIHtcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRmaXJzdC1jb2xvcjtcclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gIHBhZGRpbmc6IDMzcHggMDtcclxufVxyXG4uc2luZ2xlLWNvdXJzZS1kZXRhaWxzIC5zaW5nbGUtaXRlbS10ZXh0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0OHB4O1xyXG59XHJcbi5jb3Vyc2UtZGV0YWlscy1hcmVhIGEgaW1nIHtcclxuICBtYXJnaW4tbGVmdDogLTM1cHg7XHJcbn1cclxuLnNpbmdsZS1jb3Vyc2UtZGV0YWlscyBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uc2luZ2xlLWNvdXJzZS1kZXRhaWxzIC5jb2wtbWQtNjpmaXJzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1yaWdodDogM3B4O1xyXG59XHJcblxyXG4ub25lIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVyL25pdjEuanBnXCIpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnR3byB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NsaWRlci9uaXYyLmpwZ1wiKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aHJlZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NsaWRlci9uaXYzLmpwZ1wiKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaW5nbGUtdGVhY2hlci10ZXh0IHtcclxuICBoZWlnaHQ6IDI2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5zaW5nbGUtdGVhY2hlci1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubm8tbmV3cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICBjb2xvcjogJGZpcnN0LWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4iLCIuY29udGVudCxcbi5jb250YWluLWFyZWEge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5jb250YWluLWFyZWEge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUtd3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDEyMnB4O1xufVxuXG4uc2VjdGlvbi10aXRsZS13cmFwcGVyIC5zZWN0aW9uLXRpdGxlIHtcbiAgY29sb3I6ICMwYzJkNTA7XG59XG5cbi5zZWN0aW9uLXRpdGxlLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUgaDQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tdGl0bGUgaDQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm90dG9teSB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJvdHRvbXktb25lLFxuLmJvdHRvbXktdHdvIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzJkNTA7XG59XG5cbi5ib3R0b215LWNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDEwcHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAgMTcuMSBUZWFjaGVycyBBcmVhXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnRlYWNoZXJzLWFyZWEge1xuICBwYWRkaW5nOiAwIDAgNTBweDtcbiAgbWFyZ2luLXRvcDogLTkwcHg7XG59XG5cbi5zaW5nbGUtdGVhY2hlci1pdGVtIHtcbiAgYm94LXNoYWRvdzogMXB4IDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDM0LCAzMCwgMzEsIDAuMyk7XG59XG5cbi5zaW5nbGUtdGVhY2hlci1pbWFnZSA+IGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLWltYWdlID4gYSBpbWcsXG4uc2luZ2xlLXRlYWNoZXItaW1hZ2UgPiBhIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaW5nbGUtdGVhY2hlci1pbWFnZSA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLWltYWdlID4gYTphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKVwiO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLXRleHQge1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMGMyZDUwO1xuICBwYWRkaW5nOiAyMHB4IDI2cHggOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLXRleHQge1xuICBtYXJnaW4tdG9wOiAtNDVweDtcbiAgcGFkZGluZzogMjBweCAyNnB4IDY2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLXRleHQge1xuICAgIG1hcmdpbi10b3A6IC00NXB4O1xuICAgIHBhZGRpbmc6IDIwcHggMjZweCA2NnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA5O1xuICB9XG59XG4uc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciAuZGVzY3ItZm9ybWF0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmRlc2NyLWZvcm1hdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBoMyB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIC5zaW5nbGUtdGVhY2hlci10ZXh0ID4gaDMge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBoMyBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBoNCB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogcmdiYSgyMDEsIDE5MSwgMTkxLCAwLjc2KTtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZy10b3A6IDEzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLXRleHQgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc29jaWFsLWxpbmtzID4gYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZDNlNTA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAyN3B4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgbWFyZ2luOiAwIDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjdweDtcbn1cblxuLnNvY2lhbC1saW5rcyA+IGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNvY2lhbC1saW5rcyB7XG4gIGJvdHRvbTogMzhweDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG5cbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIC5zb2NpYWwtbGlua3Mge1xuICBib3R0b206IDI1cHg7XG59XG5cbi5zaW5nbGUtY291cnNlLWRldGFpbHMge1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMGMyZDUwO1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBwYWRkaW5nOiAzM3B4IDA7XG59XG5cbi5zaW5nbGUtY291cnNlLWRldGFpbHMgLnNpbmdsZS1pdGVtLXRleHQge1xuICBwYWRkaW5nLXJpZ2h0OiA0OHB4O1xufVxuXG4uY291cnNlLWRldGFpbHMtYXJlYSBhIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAtMzVweDtcbn1cblxuLnNpbmdsZS1jb3Vyc2UtZGV0YWlscyBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaW5nbGUtY291cnNlLWRldGFpbHMgLmNvbC1tZC02OmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuXG4ub25lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NsaWRlci9uaXYxLmpwZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG59XG5cbi50d28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVyL25pdjIuanBnXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbn1cblxuLnRocmVlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NsaWRlci9uaXYzLmpwZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG59XG5cbi5zaW5nbGUtdGVhY2hlci10ZXh0IHtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5zaW5nbGUtdGVhY2hlci1pdGVtIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG59XG4ubm8tbmV3cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgY29sb3I6ICMwYzJkNTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/formations/formations.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/formations/formations.component.ts ***!
  \***************************************************************/
/*! exports provided: FormationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormationsComponent", function() { return FormationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_news_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/news/news.service */ "./src/app/services/news/news.service.ts");



let FormationsComponent = class FormationsComponent {
    constructor(newsService) {
        this.newsService = newsService;
        this.student = "./../../../assets/images/slider/Group-475.png";
        this.licence = "./../../../assets/images/slider/niv1.jpg";
        this.master = "./../../../assets/images/slider/niv2.jpg";
        this.doctorate = "./../../../assets/images/slider/niv3.jpg";
        this.txt1 = "Licence";
        this.txt2 = "Master";
        this.txt3 = "Doctorat";
        this.noNews = false;
        this.formations = [];
    }
    ngOnInit() {
        this.getFormation();
    }
    getFormation() {
        this.newsService.getFormation().subscribe((data) => {
            console.log(data);
            let tmp = data.data;
            this.formations = tmp;
            console.log(this.formations);
            if (this.formations.length == 0) {
                this.noNews = true;
            }
        }, (err) => {
            console.log(err);
            this.noNews = true;
        });
    }
};
FormationsComponent.ctorParameters = () => [
    { type: _services_news_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }
];
FormationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formations',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./formations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/formations/formations.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./formations.component.scss */ "./src/app/components/formations/formations.component.scss")).default]
    })
], FormationsComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_configurations_configurations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/configurations/configurations.service */ "./src/app/services/configurations/configurations.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let HomeComponent = class HomeComponent {
    constructor(router, config) {
        this.router = router;
        this.config = config;
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_configurations_configurations_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationsService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/news/news.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/news/news.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif !important;\n}\n\n.course-area .section-title-wrapper {\n  margin-bottom: 122px;\n}\n\n.single-item-image a {\n  display: inline-block;\n}\n\n.single-item-image {\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  top: -35px;\n}\n\n.overlay-effect a {\n  position: relative;\n}\n\n.overlay-effect a:before {\n  background: rgba(45, 62, 80, 0.2) none repeat scroll 0 0;\n  bottom: 0;\n  content: \"\";\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  position: absolute;\n  right: 0;\n  width: 100%;\n}\n\n.single-item:hover .overlay-effect a:before {\n  opacity: 1;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n}\n\n.single-item {\n  background: #f6f6f6 none repeat scroll 0 0;\n  border-bottom: 3px solid #86bc42;\n  padding: 0 35px;\n  transition: all 0.3s ease 0s;\n  margin-bottom: 20px;\n}\n\n.single-item:hover {\n  background: #ffffff none repeat scroll 0 0;\n  box-shadow: 0 2px 20px rgba(34, 30, 31, 0.4);\n}\n\n.single-item-text h4 {\n  font-size: 20px;\n  padding-top: 7px;\n  height: 60px;\n}\n\n.single-item-text h4 a, .single-item-text h4 {\n  color: #2d3e50;\n}\n\n.single-item-text-info span {\n  color: #696969;\n  font-family: \"montserratregular\";\n  margin-right: 11px;\n}\n\n.single-item-text-info span span {\n  color: #2d3e50;\n}\n\n.single-item-text > .p {\n  color: #222222;\n  margin-bottom: 50px;\n  height: 100px;\n}\n\n.single-item-content {\n  margin-bottom: 44px;\n  overflow: hidden;\n  padding-top: 21px;\n}\n\n.single-item-text-info {\n  margin-bottom: 18px;\n  padding-top: 5px;\n  font-size: 15px;\n}\n\n.single-item-text-info fa {\n  margin-right: 10px;\n}\n\n.single-item-comment-view span {\n  color: #696969;\n  display: inline-block;\n  font-family: \"montserratregular\";\n  font-size: 12px;\n  margin-right: 17px;\n}\n\n.single-item-comment-view span:last-child {\n  margin-right: 0;\n}\n\n.single-item-comment-view > span i {\n  font-size: 14px;\n  margin-right: 7px;\n}\n\n.single-item-comment-view, .single-item-rating {\n  display: inline-block;\n}\n\n.single-item-rating {\n  color: #f3c30b;\n  float: right;\n  font-size: 16px;\n}\n\n.single-item-rating i {\n  margin-left: 3px;\n}\n\n.single-item .button-default {\n  padding: 12px 33px;\n}\n\n.button-bottom {\n  margin-bottom: -19.5px;\n  text-align: center;\n  height: 30px;\n  cursor: pointer;\n}\n\n.single-item:hover .button-default {\n  background: #0c2d50 none repeat scroll 0 0;\n}\n\n.button-large.button-default {\n  box-shadow: 0 2px 20px rgba(34, 30, 31, 0.2);\n  font-size: 18px;\n  margin-top: 83px;\n  padding: 12px 18px;\n  text-transform: capitalize;\n}\n\n.shortcode .button-large.button-default {\n  margin-top: 40px;\n}\n\n.button-default.button-large:hover {\n  background: #0c2d50 none repeat scroll 0 0;\n}\n\n.button-large.button-default i {\n  font-size: 28px;\n  line-height: 20px;\n  margin-left: 11px;\n  position: relative;\n  top: 4px;\n}\n\n.course-area .section-title-wrapper .section-title {\n  color: #0c2d50;\n}\n\n.course-area .section-title-wrapper .section-title h4 {\n  text-transform: uppercase;\n}\n\n.button-bottom a {\n  color: white;\n  text-decoration: none;\n}\n\n#content-button-large {\n  margin-top: 60px;\n  margin-bottom: 40px;\n}\n\n#content-button-large a {\n  color: white;\n  text-decoration: none;\n  padding: 25px;\n  border-radius: 4px;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n#content-button-large a i {\n  transition: all 0.3s;\n}\n\n#content-button-large a:hover i {\n  margin-left: 30px !important;\n}\n\n.no-actu {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: 130px;\n  margin-top: -70px;\n  background: whitesmoke;\n  color: #0c2d50;\n  font-weight: bold;\n  align-items: center;\n  border-radius: 5px;\n  font-size: 18px;\n}\n\n.section-title {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.section-title h4 {\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.bottomy {\n  width: 60%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.bottomy-one, .bottomy-two {\n  width: 50%;\n  height: 3px;\n  background-color: #0c2d50;\n}\n\n.bottomy-center {\n  margin-left: 1%;\n  margin-right: 1%;\n  position: relative;\n  bottom: 10px;\n}\n\n.row-actu {\n  margin-bottom: 100px;\n}\n\n.row-title-actu {\n  margin-bottom: -50px;\n}\n\n.container-fluid.contain-actu {\n  margin-left: 5%;\n  margin-right: 5%;\n  width: 90%;\n}\n\n#imgActu {\n  height: 200px !important;\n}\n\n.p {\n  min-height: 90px;\n}\n\n@media screen and (max-width: 992px) {\n  .single-item {\n    margin-top: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL0U6XFxQcm9qZXRzXFxXZWJjdXBcXGNvZGVfZnJvbnRcXHdlYmN1cEZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxuZXdzXFxuZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLDREQUFBO0FDSEY7O0FETUE7RUFBcUMsb0JBQUE7QUNGckM7O0FER0E7RUFBc0IscUJBQUE7QUNDdEI7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDR0o7O0FEREE7RUFBbUIsa0JBQUE7QUNLbkI7O0FESkE7RUFDRSx3REFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZ0VBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNPRjs7QURMQTtFQUE2QyxVQUFBO0VBQVcsa0VBQUE7RUFBb0UsMEJBQUE7QUNXNUg7O0FEVkE7RUFDSSwwQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUVBLDRCQUFBO0VBQ0EsbUJBQUE7QUNhSjs7QURYQTtFQUNJLDBDQUFBO0VBQ0EsNENBQUE7QUNjSjs7QURaQTtFQUFzQixlQUFBO0VBQWlCLGdCQUFBO0VBQWlCLFlBQUE7QUNrQnhEOztBRGpCQTtFQUE4QyxjQUFBO0FDcUI5Qzs7QURwQkE7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ3VCSjs7QURyQkE7RUFBa0MsY0FBQTtBQ3lCbEM7O0FEeEJBO0VBQXdCLGNBQUE7RUFBZSxtQkFBQTtFQUFvQixhQUFBO0FDOEIzRDs7QUQ3QkE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNnQ0o7O0FEOUJBO0VBQXdCLG1CQUFBO0VBQXFCLGdCQUFBO0VBQWtCLGVBQUE7QUNvQy9EOztBRG5DQTtFQUEyQixrQkFBQTtBQ3VDM0I7O0FEdENBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUN5Q0o7O0FEdkNBO0VBQTJDLGVBQUE7QUMyQzNDOztBRDFDQTtFQUFvQyxlQUFBO0VBQWlCLGlCQUFBO0FDK0NyRDs7QUQ5Q0E7RUFBZ0QscUJBQUE7QUNrRGhEOztBRGpEQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ29ESjs7QURsREE7RUFBdUIsZ0JBQUE7QUNzRHZCOztBRHJEQTtFQUE4QixrQkFBQTtBQ3lEOUI7O0FEeERBO0VBQWdCLHNCQUFBO0VBQXdCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxlQUFBO0FDK0R4RTs7QUQ5REE7RUFBb0MsMENBQUE7QUNrRXBDOztBRGpFQTtFQUNJLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ29FSjs7QURsRUE7RUFBeUMsZ0JBQUE7QUNzRXpDOztBRHJFQTtFQUFvQywwQ0FBQTtBQ3lFcEM7O0FEeEVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUMyRUo7O0FEdEVBO0VBQ0UsY0FsR2E7QUMyS2Y7O0FEdEVBO0VBQ0UseUJBQUE7QUN5RUY7O0FEdEVBO0VBQ0UsWUF4R1k7RUF5R1oscUJBQUE7QUN5RUY7O0FEdEVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ3lFRjs7QUR0RUE7RUFDRSxZQWxIWTtFQW1IWixxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ3lFRjs7QUR0RUE7RUFDRSxvQkFBQTtBQ3lFRjs7QURyRUU7RUFDRSw0QkFBQTtBQ3dFSjs7QURwRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0E3SWE7RUE4SWIsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3VFRjs7QURwRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3VFRjs7QURwRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUN1RUY7O0FEcEVBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDdUVGOztBRHBFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBM0thO0FDa1BmOztBRHBFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3VFRjs7QURwRUE7RUFDRSxvQkFBQTtBQ3VFRjs7QURwRUE7RUFDRSxvQkFBQTtBQ3VFRjs7QURwRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDdUVGOztBRHBFQTtFQUNFLHdCQUFBO0FDdUVGOztBRHBFQTtFQUNJLGdCQUFBO0FDdUVKOztBRHBFQTtFQUNFO0lBQ0UsZ0JBQUE7RUN1RUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpcnN0LWNvbG9yIDogIzBjMmQ1MDtcclxuJHNlY29uZC1jb2xvciA6ICMwMDIyNDc7XHJcbiRjb2xvci13aGl0ZTogd2hpdGU7XHJcblxyXG4qIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvdXJzZS1hcmVhIC5zZWN0aW9uLXRpdGxlLXdyYXBwZXIge21hcmdpbi1ib3R0b206IDEyMnB4O31cclxuLnNpbmdsZS1pdGVtLWltYWdlIGEge2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XHJcbi5zaW5nbGUtaXRlbS1pbWFnZSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiAtMzVweDtcclxufVxyXG4ub3ZlcmxheS1lZmZlY3QgYSB7cG9zaXRpb246IHJlbGF0aXZlfVxyXG4ub3ZlcmxheS1lZmZlY3QgYTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNDUsIDYyLCA4MCwgMC4yKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnNpbmdsZS1pdGVtOmhvdmVyIC5vdmVybGF5LWVmZmVjdCBhOmJlZm9yZSB7b3BhY2l0eTogMTstbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwMClcIjsgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7fVxyXG4uc2luZ2xlLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM4NmJjNDI7XHJcbiAgICBwYWRkaW5nOiAwIDM1cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uc2luZ2xlLWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMjBweCByZ2JhKDM0LCAzMCwgMzEsIDAuNCk7XHJcbn1cclxuLnNpbmdsZS1pdGVtLXRleHQgaDQge2ZvbnQtc2l6ZTogMjBweDsgcGFkZGluZy10b3A6IDdweDtoZWlnaHQ6IDYwcHg7fVxyXG4uc2luZ2xlLWl0ZW0tdGV4dCBoNCBhLCAuc2luZ2xlLWl0ZW0tdGV4dCBoNCB7Y29sb3I6ICMyZDNlNTA7fVxyXG4uc2luZ2xlLWl0ZW0tdGV4dC1pbmZvIHNwYW4ge1xyXG4gICAgY29sb3I6ICM2OTY5Njk7XHJcbiAgICBmb250LWZhbWlseTogXCJtb250c2VycmF0cmVndWxhclwiO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xyXG59XHJcbi5zaW5nbGUtaXRlbS10ZXh0LWluZm8gc3BhbiBzcGFuIHtjb2xvcjogIzJkM2U1MDt9XHJcbi5zaW5nbGUtaXRlbS10ZXh0ID4gLnAge2NvbG9yOiAjMjIyMjIyO21hcmdpbi1ib3R0b206IDUwcHg7aGVpZ2h0OiAxMDBweDt9XHJcbi5zaW5nbGUtaXRlbS1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy10b3A6IDIxcHg7XHJcbn1cclxuLnNpbmdsZS1pdGVtLXRleHQtaW5mbyB7bWFyZ2luLWJvdHRvbTogMThweDsgcGFkZGluZy10b3A6IDVweDsgZm9udC1zaXplOiAxNXB4O31cclxuLnNpbmdsZS1pdGVtLXRleHQtaW5mbyBmYSB7bWFyZ2luLXJpZ2h0OiAxMHB4O31cclxuLnNpbmdsZS1pdGVtLWNvbW1lbnQtdmlldyBzcGFuIHtcclxuICAgIGNvbG9yOiAjNjk2OTY5O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdHJlZ3VsYXJcIjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTdweDtcclxufVxyXG4uc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3IHNwYW46bGFzdC1jaGlsZCB7bWFyZ2luLXJpZ2h0OiAwfVxyXG4uc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3ID4gc3BhbiBpIHtmb250LXNpemU6IDE0cHg7IG1hcmdpbi1yaWdodDogN3B4O31cclxuLnNpbmdsZS1pdGVtLWNvbW1lbnQtdmlldywgLnNpbmdsZS1pdGVtLXJhdGluZyB7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLnNpbmdsZS1pdGVtLXJhdGluZyB7XHJcbiAgICBjb2xvcjogI2YzYzMwYjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uc2luZ2xlLWl0ZW0tcmF0aW5nIGkge21hcmdpbi1sZWZ0OiAzcHg7fVxyXG4uc2luZ2xlLWl0ZW0gLmJ1dHRvbi1kZWZhdWx0IHtwYWRkaW5nOiAxMnB4IDMzcHg7fVxyXG4uYnV0dG9uLWJvdHRvbSB7bWFyZ2luLWJvdHRvbTogLTE5LjVweDsgdGV4dC1hbGlnbjogY2VudGVyO2hlaWdodDogMzBweDtjdXJzb3I6IHBvaW50ZXI7fVxyXG4uc2luZ2xlLWl0ZW06aG92ZXIgLmJ1dHRvbi1kZWZhdWx0IHtiYWNrZ3JvdW5kOiAkZmlyc3QtY29sb3Igbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDt9XHJcbi5idXR0b24tbGFyZ2UuYnV0dG9uLWRlZmF1bHQge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMjBweCByZ2JhKDM0LCAzMCwgMzEsIDAuMik7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4M3B4O1xyXG4gICAgcGFkZGluZzogMTJweCAxOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLnNob3J0Y29kZSAuYnV0dG9uLWxhcmdlLmJ1dHRvbi1kZWZhdWx0IHttYXJnaW4tdG9wOiA0MHB4fVxyXG4uYnV0dG9uLWRlZmF1bHQuYnV0dG9uLWxhcmdlOmhvdmVyIHtiYWNrZ3JvdW5kOiAkZmlyc3QtY29sb3Igbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDt9XHJcbi5idXR0b24tbGFyZ2UuYnV0dG9uLWRlZmF1bHQgaSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0cHg7XHJcbn1cclxuXHJcblxyXG4vLyBNaW5lXHJcbi5jb3Vyc2UtYXJlYSAuc2VjdGlvbi10aXRsZS13cmFwcGVyIC5zZWN0aW9uLXRpdGxlIHtcclxuICBjb2xvcjogJGZpcnN0LWNvbG9yO1xyXG59XHJcblxyXG4uY291cnNlLWFyZWEgLnNlY3Rpb24tdGl0bGUtd3JhcHBlciAuc2VjdGlvbi10aXRsZSBoNHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uYnV0dG9uLWJvdHRvbSBhIHtcclxuICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2NvbnRlbnQtYnV0dG9uLWxhcmdlIHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbiNjb250ZW50LWJ1dHRvbi1sYXJnZSBhIHtcclxuICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNjb250ZW50LWJ1dHRvbi1sYXJnZSBhIGkge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jY29udGVudC1idXR0b24tbGFyZ2UgYTpob3ZlciB7XHJcbiAgaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLm5vLWFjdHUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIG1hcmdpbi10b3A6IC03MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgY29sb3I6ICRmaXJzdC1jb2xvcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUgaDQge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJvdHRvbXkge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJvdHRvbXktb25lLCAuYm90dG9teS10d28ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZpcnN0LWNvbG9yO1xyXG59XHJcblxyXG4uYm90dG9teS1jZW50ZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5yb3ctYWN0dSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5yb3ctdGl0bGUtYWN0dSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQuY29udGFpbi1hY3R1IHtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4jaW1nQWN0dSB7XHJcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucCB7XHJcbiAgICBtaW4taGVpZ2h0OiA5MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5zaW5nbGUtaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIH1cclxufVxyXG4iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5jb3Vyc2UtYXJlYSAuc2VjdGlvbi10aXRsZS13cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTIycHg7XG59XG5cbi5zaW5nbGUtaXRlbS1pbWFnZSBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2luZ2xlLWl0ZW0taW1hZ2Uge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAtMzVweDtcbn1cblxuLm92ZXJsYXktZWZmZWN0IGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vdmVybGF5LWVmZmVjdCBhOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDUsIDYyLCA4MCwgMC4yKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3R0b206IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2luZ2xlLWl0ZW06aG92ZXIgLm92ZXJsYXktZWZmZWN0IGE6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXCI7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xufVxuXG4uc2luZ2xlLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjODZiYzQyO1xuICBwYWRkaW5nOiAwIDM1cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNpbmdsZS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMzQsIDMwLCAzMSwgMC40KTtcbn1cblxuLnNpbmdsZS1pdGVtLXRleHQgaDQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnNpbmdsZS1pdGVtLXRleHQgaDQgYSwgLnNpbmdsZS1pdGVtLXRleHQgaDQge1xuICBjb2xvcjogIzJkM2U1MDtcbn1cblxuLnNpbmdsZS1pdGVtLXRleHQtaW5mbyBzcGFuIHtcbiAgY29sb3I6ICM2OTY5Njk7XG4gIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRyZWd1bGFyXCI7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbn1cblxuLnNpbmdsZS1pdGVtLXRleHQtaW5mbyBzcGFuIHNwYW4ge1xuICBjb2xvcjogIzJkM2U1MDtcbn1cblxuLnNpbmdsZS1pdGVtLXRleHQgPiAucCB7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uc2luZ2xlLWl0ZW0tY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDQ0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiAyMXB4O1xufVxuXG4uc2luZ2xlLWl0ZW0tdGV4dC1pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uc2luZ2xlLWl0ZW0tdGV4dC1pbmZvIGZhIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3IHNwYW4ge1xuICBjb2xvcjogIzY5Njk2OTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0cmVndWxhclwiO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTdweDtcbn1cblxuLnNpbmdsZS1pdGVtLWNvbW1lbnQtdmlldyBzcGFuOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcgPiBzcGFuIGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuXG4uc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3LCAuc2luZ2xlLWl0ZW0tcmF0aW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2luZ2xlLWl0ZW0tcmF0aW5nIHtcbiAgY29sb3I6ICNmM2MzMGI7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc2luZ2xlLWl0ZW0tcmF0aW5nIGkge1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uc2luZ2xlLWl0ZW0gLmJ1dHRvbi1kZWZhdWx0IHtcbiAgcGFkZGluZzogMTJweCAzM3B4O1xufVxuXG4uYnV0dG9uLWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IC0xOS41cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaW5nbGUtaXRlbTpob3ZlciAuYnV0dG9uLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kOiAjMGMyZDUwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG5cbi5idXR0b24tbGFyZ2UuYnV0dG9uLWRlZmF1bHQge1xuICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMzQsIDMwLCAzMSwgMC4yKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiA4M3B4O1xuICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uc2hvcnRjb2RlIC5idXR0b24tbGFyZ2UuYnV0dG9uLWRlZmF1bHQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uYnV0dG9uLWRlZmF1bHQuYnV0dG9uLWxhcmdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzBjMmQ1MCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xufVxuXG4uYnV0dG9uLWxhcmdlLmJ1dHRvbi1kZWZhdWx0IGkge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDRweDtcbn1cblxuLmNvdXJzZS1hcmVhIC5zZWN0aW9uLXRpdGxlLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUge1xuICBjb2xvcjogIzBjMmQ1MDtcbn1cblxuLmNvdXJzZS1hcmVhIC5zZWN0aW9uLXRpdGxlLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUgaDQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYnV0dG9uLWJvdHRvbSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNjb250ZW50LWJ1dHRvbi1sYXJnZSB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbiNjb250ZW50LWJ1dHRvbi1sYXJnZSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NvbnRlbnQtYnV0dG9uLWxhcmdlIGEgaSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4jY29udGVudC1idXR0b24tbGFyZ2UgYTpob3ZlciBpIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLm5vLWFjdHUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgbWFyZ2luLXRvcDogLTcwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiAjMGMyZDUwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VjdGlvbi10aXRsZSBoNCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3R0b215IHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYm90dG9teS1vbmUsIC5ib3R0b215LXR3byB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwO1xufVxuXG4uYm90dG9teS1jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4ucm93LWFjdHUge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLnJvdy10aXRsZS1hY3R1IHtcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG59XG5cbi5jb250YWluZXItZmx1aWQuY29udGFpbi1hY3R1IHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICB3aWR0aDogOTAlO1xufVxuXG4jaW1nQWN0dSB7XG4gIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuLnAge1xuICBtaW4taGVpZ2h0OiA5MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc2luZ2xlLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/news/news.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news/news.component.ts ***!
  \***************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_news_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/news/news.service */ "./src/app/services/news/news.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let NewsComponent = class NewsComponent {
    constructor(newsService, router, loadSrv, _snackBar) {
        this.newsService = newsService;
        this.router = router;
        this.loadSrv = loadSrv;
        this._snackBar = _snackBar;
        this.actuality = [];
        this.noActu = false;
    }
    ngOnInit() {
        // this.actualities = this.newsService.actus;
        this.getTopActus();
        //this.initLastActuality();
    }
    initLastActuality() {
        if (this.actualities.length == 0) {
            this.noActu = true;
            return false;
        }
        for (let index = 0; (index < this.actualities.length) && (index < 3); index++) {
            this.actuality.push(this.actualities[index]);
        }
    }
    allNews() {
        this.router.navigate(['/actualités']);
    }
    seeActu(titre, date, posteur) {
        let str = "/evenements/" + titre + "/" + date + "/" + posteur + "";
        this.router.navigateByUrl(str);
    }
    getTopActus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadSrv.load(true);
            yield this.newsService.getTopActualite().subscribe((data) => {
                let list = data.data;
                list.forEach((element, index) => {
                    if (element.image == null) {
                        let indice = index + 1;
                        let url = "./../../../assets/images/course/" + indice + ".jpg";
                        element.image = url;
                    }
                    if (element.galerie == null) {
                        element.galerie = [];
                        for (let index = 0; index < 3; index++) {
                            let ind = index + 1;
                            let url = "./../../../assets/images/course/" + ind + ".jpg";
                            element.galerie.push(url);
                        }
                    }
                    let isO = true;
                    let isN = false;
                    element.date_creation = this.changeDate(element.date_creation, isO);
                    element.date_mise_jour = this.changeDate(element.date_mise_jour, isN);
                });
                this.actuality = list;
                if (this.actualities.length == 0) {
                    this.noActu = true;
                }
                else {
                    this.noActu = false;
                }
                //console.log(this.actuality);
            }, (err) => {
                this._snackBar.open(`Serveur inacessible`, "", {
                    duration: 1500,
                    horizontalPosition: "right",
                    verticalPosition: "bottom",
                    panelClass: ["error_snackbar"]
                });
                this.noActu = true;
                console.log(err);
            });
            this.loadSrv.load(false);
        });
    }
    changeDate(data, isUpdate) {
        let annee = data.substring(0, 4);
        let mois = data.substring(5, 7);
        let jour = data.substring(8, 10);
        let heure = data.substring(11, 16);
        if (isUpdate) {
            var newDate = jour + " " + this.voirMois(mois) + " " + annee + " à " + heure;
        }
        else {
            var newDate = jour + " " + this.voirMois(mois) + " " + annee;
        }
        return newDate;
    }
    voirMois(mois) {
        let newMois = "";
        switch (mois) {
            case "01": {
                newMois = "Janvier";
                break;
            }
            case "02": {
                newMois = "Février";
                break;
            }
            case "03": {
                newMois = "Mars";
                break;
            }
            case "04": {
                newMois = "Avril";
                break;
            }
            case "05": {
                newMois = "Mai";
                break;
            }
            case "06": {
                newMois = "Juin";
                break;
            }
            case "07": {
                newMois = "Juillet";
                break;
            }
            case "08": {
                newMois = "Août";
                break;
            }
            case "09": {
                newMois = "Septembre";
                break;
            }
            case "10": {
                newMois = "Octobre";
                break;
            }
            case "11": {
                newMois = "Novembre";
                break;
            }
            case "12": {
                newMois = "Décembre";
                break;
            }
        }
        return newMois;
    }
};
NewsComponent.ctorParameters = () => [
    { type: _services_news_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/news/news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.component.scss */ "./src/app/components/news/news.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../director-word/color.css */ "./src/app/components/director-word/color.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../director-word/responsive.css */ "./src/app/components/director-word/responsive.css")).default]
    })
], NewsComponent);



/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-top:before, .about-area:before, .newsletter-area:before {\n  content: \"\";\n  height: 48px;\n  position: absolute;\n  right: 0;\n  top: 10px;\n  width: 43%;\n}\n\n.header-top:after, .about-area:after, .newsletter-area:after {\n  -moz-border-bottom-colors: none;\n  -moz-border-left-colors: none;\n  -moz-border-right-colors: none;\n  -moz-border-top-colors: none;\n  -o-border-image: none;\n  border-image: none;\n  border-style: solid;\n  border-width: 24px 10px;\n  content: \"\";\n  height: 5px;\n  position: absolute;\n  right: 43%;\n  top: 10px;\n  width: 0;\n}\n\n.newsletter-area {\n  background: #0c2d50 none repeat scroll 0 0;\n  color: white;\n  position: relative;\n  margin-top: 50px;\n}\n\n.newsletter-area:before {\n  height: 148px;\n  left: 0;\n  right: auto;\n  top: -20px;\n  width: 44%;\n}\n\n.newsletter-area:after {\n  border-width: 74.5px 40px;\n  left: 44%;\n  right: auto;\n  top: -20px;\n}\n\n.newsletter-content h2, .newsletter-content h3 {\n  font-family: raleway;\n  font-weight: 700;\n  font-size: 30px;\n}\n\n.newsletter-content > h3 {\n  margin-bottom: 2px;\n  font-size: 24px;\n}\n\n.subscribe-form input {\n  color: #696969;\n  height: 100%;\n  padding-left: 15px;\n  width: 100%;\n  border: none;\n}\n\n.subscribe-form {\n  border: none !important;\n  border-color: white !important;\n}\n\n.subscribe-form > button {\n  border: 2px solid #117abe;\n  font-family: raleway;\n  font-weight: 700;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: all 0.3s ease 0s;\n  width: 34%;\n  color: #fff;\n  cursor: pointer;\n}\n\n.subscribe-form > button:hover {\n  background: #FFF;\n  border: 2px solid #117abe;\n}\n\n.newsletter-form {\n  overflow: hidden;\n  padding: 36px 0;\n}\n\n.subscribe-form {\n  float: right;\n  height: 56px;\n  position: relative;\n  width: 525px;\n}\n\n.subscribe-form:before {\n  -moz-border-bottom-colors: none;\n  -moz-border-left-colors: none;\n  -moz-border-right-colors: none;\n  -moz-border-top-colors: none;\n  border-color: #fff #fff transparent transparent;\n  -o-border-image: none;\n  border-image: none;\n  border-style: solid;\n  border-width: 28px 15px;\n  content: \"\";\n  height: 5px;\n  left: -30px;\n  position: absolute;\n  top: 0;\n  width: 0;\n}\n\n.subscribe-form:after {\n  -moz-border-bottom-colors: none;\n  -moz-border-left-colors: none;\n  -moz-border-right-colors: none;\n  -moz-border-top-colors: none;\n  border-color: #fff #fff transparent transparent;\n  -o-border-image: none;\n  border-image: none;\n}\n\n.newsletter-content {\n  padding-top: 26px;\n  z-index: 9;\n  position: relative;\n}\n\n/*----------------------------------------*/\n\n/*  12. Footer Widget Area\n/*----------------------------------------*/\n\n.footer-widget-area {\n  background: #0c2d50 none repeat scroll 0 0;\n  color: white;\n  padding: 80px 0 65px;\n}\n\n.footer-logo > a {\n  display: inline-block;\n}\n\n.footer-logo {\n  margin-bottom: 24px;\n}\n\n.social-icons a {\n  background: #ffffff none repeat scroll 0 0;\n  color: #2d3e50;\n  display: inline-block;\n  font-size: 20px;\n  height: 31px;\n  line-height: 30px;\n  margin-right: 11px;\n  text-align: center;\n  transition: all 0.3s ease 0s;\n  width: 31px;\n}\n\n.social-icons > a:last-child {\n  margin-right: 0;\n}\n\n.social-icons > a:hover {\n  color: #ffffff;\n}\n\n.social-icons {\n  margin-top: 27px;\n}\n\n.single-footer-widget > h3 {\n  font-family: raleway;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 19px;\n  margin-bottom: 37px;\n  padding-top: 12px;\n  text-transform: uppercase;\n}\n\n.single-footer-widget > span {\n  display: block;\n  margin-bottom: 11px;\n}\n\n.single-footer-widget > span i {\n  font-size: 18px;\n  width: 30px;\n}\n\n.footer-list a {\n  color: #ffffff;\n  line-height: 25px;\n}\n\n.footer-list a:hover {\n  color: #117abe;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.instagram-image {\n  padding-top: 5px;\n}\n\n.footer-img {\n  display: inline-block;\n  float: left;\n  margin-bottom: 15px;\n  margin-right: 15px;\n}\n\n.instagram-image .footer-img:nth-child(3), .instagram-image .footer-img:nth-child(6) {\n  margin-right: 0;\n}\n\n.footer-img a {\n  display: inline-block;\n  position: relative;\n}\n\n.footer-img a:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  position: absolute;\n  top: 0;\n  transition: all 0.3s ease 0s;\n  width: 100%;\n}\n\n.footer-img:hover a:before {\n  opacity: 1;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n}\n\n.footer-img a:after {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  bottom: 0;\n  color: #ffffff;\n  content: \"+\";\n  font-family: \"montserratregular\";\n  font-size: 40px;\n  height: 18px;\n  left: 0;\n  margin: -9px auto 0;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transition: all 0.3s ease 0s;\n  width: 18px;\n}\n\n.footer-img:hover a:after {\n  opacity: 1;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n}\n\n/*----------------------------------------*/\n\n/*  13. Footer Area\n/*----------------------------------------*/\n\n.footer-area {\n  color: #ffffff;\n  font-size: 12px;\n  padding: 18px 0;\n}\n\n.column-right {\n  float: right;\n}\n\n.footer-area span a {\n  color: #ffffff;\n}\n\n.footer-area span a:hover {\n  border-bottom: 1px solid #ffffff;\n}\n\n.single-footer-widget > a {\n  color: #ffffff;\n  display: block;\n  margin-bottom: 11px;\n}\n\n.single-footer-widget > a:hover i {\n  color: #fff;\n}\n\n.single-footer-widget > a i {\n  font-size: 18px;\n  width: 30px;\n}\n\n/*----------------------------------------*/\n\n/*  14. Home Two Start\n/*----------------------------------------*/\n\n/*----------------------------------------*/\n\n/*  14.1 Home Two Header\n/*----------------------------------------*/\n\n.header-two .header-top:before, .header-two .header-top:after {\n  display: none;\n}\n\n.header-two .header-top-right > span {\n  color: #ededed;\n}\n\n.header-two .header-top-right {\n  padding-top: 0;\n}\n\n.header-two .header-top-right span:first-child {\n  margin-right: 27px;\n}\n\n/*----------------------------------------*/\n\nimg#footer-logo {\n  max-width: 80%;\n  position: relative;\n  right: 30px;\n}\n\n.contain-txt {\n  margin-top: 50px;\n  border: 1px solid white;\n  padding: 20px;\n  width: 250px;\n  display: flex;\n  height: 170px;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.txt-one {\n  font-size: 30px;\n  letter-spacing: 28px;\n  font-weight: bold;\n}\n\n.txt-two {\n  word-spacing: 0px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9FOlxcUHJvamV0c1xcV2ViY3VwXFxjb2RlX2Zyb250XFx3ZWJjdXBGcm9udC9zcmNcXGFwcFxcbGF5b3V0XFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSkY7O0FETUE7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0ksa0JBQUE7RUFDSixtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0hGOztBRE1BO0VBQ0UsMENBQUE7RUFDQSxZQTdCWTtFQThCWixrQkFBQTtFQUNBLGdCQUFBO0FDSEY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBRElBO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNERjs7QURHQTtFQUFnRCxvQkFBQTtFQUFzQixnQkFBQTtFQUFrQixlQUFBO0FDR3hGOztBREZBO0VBQTBCLGtCQUFBO0VBQW9CLGVBQUE7QUNPOUM7O0FETkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNTRjs7QUROQTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7QUNTRjs7QUROQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBRUEsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNTRjs7QURQQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7QUNVRjs7QURSQTtFQUFrQixnQkFBQTtFQUFrQixlQUFBO0FDYXBDOztBRFpBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNlRjs7QURiQTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUNnQkY7O0FEZEE7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLCtDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ2lCRjs7QURkQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDaUJGOztBRGZBLDJDQUFBOztBQUNBOzJDQUFBOztBQUVBO0VBQ0UsMENBQUE7RUFDQSxZQTNIWTtFQTRIWixvQkFBQTtBQ2tCRjs7QURoQkE7RUFBa0IscUJBQUE7QUNvQmxCOztBRG5CQTtFQUFjLG1CQUFBO0FDdUJkOztBRHRCQTtFQUNFLDBDQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFUSw0QkFBQTtFQUNSLFdBQUE7QUN5QkY7O0FEdkJBO0VBQThCLGVBQUE7QUMyQjlCOztBRDFCQTtFQUF5QixjQUFBO0FDOEJ6Qjs7QUQ3QkE7RUFBZSxnQkFBQTtBQ2lDZjs7QURoQ0E7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDbUNGOztBRGpDQTtFQUE4QixjQUFBO0VBQWdCLG1CQUFBO0FDc0M5Qzs7QURyQ0E7RUFBZ0MsZUFBQTtFQUFpQixXQUFBO0FDMENqRDs7QUR6Q0E7RUFBZ0IsY0FBQTtFQUFnQixpQkFBQTtBQzhDaEM7O0FEN0NBO0VBQXNCLGNBN0pSO0VBNko2QixxQkFBQTtFQUF1QixlQUFBO0FDbURsRTs7QURsREE7RUFBa0IsZ0JBQUE7QUNzRGxCOztBRHJEQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUN3REY7O0FEdERBO0VBQXNGLGVBQUE7QUMwRHRGOztBRHpEQTtFQUFlLHFCQUFBO0VBQXVCLGtCQUFBO0FDOER0Qzs7QUQ3REE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZ0VBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUVBLDRCQUFBO0VBQ0EsV0FBQTtBQ2dFRjs7QUQ5REE7RUFBNEIsVUFBQTtFQUFXLGtFQUFBO0VBQW9FLDBCQUFBO0FDb0UzRzs7QURuRUE7RUFDRSxtREFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0VBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFFQSw0QkFBQTtFQUNBLFdBQUE7QUNzRUY7O0FEcEVBO0VBQTJCLFVBQUE7RUFBVyxrRUFBQTtFQUFvRSwwQkFBQTtBQzBFMUc7O0FEekVBLDJDQUFBOztBQUNBOzJDQUFBOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDNEVGOztBRDFFQTtFQUFlLFlBQUE7QUM4RWY7O0FEN0VBO0VBQXFCLGNBQUE7QUNpRnJCOztBRGhGQTtFQUEyQixnQ0FBQTtBQ29GM0I7O0FEbkZBO0VBQTJCLGNBQUE7RUFBZ0IsY0FBQTtFQUFnQixtQkFBQTtBQ3lGM0Q7O0FEeEZBO0VBQW1DLFdBQUE7QUM0Rm5DOztBRDNGQTtFQUE2QixlQUFBO0VBQWlCLFdBQUE7QUNnRzlDOztBRC9GQSwyQ0FBQTs7QUFDQTsyQ0FBQTs7QUFFQSwyQ0FBQTs7QUFDQTsyQ0FBQTs7QUFFQTtFQUErRCxhQUFBO0FDbUcvRDs7QURsR0E7RUFBc0MsY0FBQTtBQ3NHdEM7O0FEckdBO0VBQStCLGNBQUE7QUN5Ry9COztBRHhHQTtFQUFnRCxrQkFBQTtBQzRHaEQ7O0FEM0dBLDJDQUFBOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQzZHRjs7QUQxR0E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUM2R0Y7O0FEMUdBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUM2R0Y7O0FEMUdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDNkdGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZmlyc3QtY29sb3IgOiAjMGMyZDUwO1xyXG4kc2Vjb25kLWNvbG9yIDogIzFmNTY5MjtcclxuJHRoaXJkLWNvbG9yOiAjMTE3YWJlO1xyXG4kY29sb3Itd2hpdGU6IHdoaXRlO1xyXG5cclxuLmhlYWRlci10b3A6YmVmb3JlLCAuYWJvdXQtYXJlYTpiZWZvcmUsIC5uZXdzbGV0dGVyLWFyZWE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiA0MyU7XHJcbn1cclxuLmhlYWRlci10b3A6YWZ0ZXIsIC5hYm91dC1hcmVhOmFmdGVyLCAubmV3c2xldHRlci1hcmVhOmFmdGVyIHtcclxuICAtbW96LWJvcmRlci1ib3R0b20tY29sb3JzOiBub25lO1xyXG4gIC1tb3otYm9yZGVyLWxlZnQtY29sb3JzOiBub25lO1xyXG4gIC1tb3otYm9yZGVyLXJpZ2h0LWNvbG9yczogbm9uZTtcclxuICAtbW96LWJvcmRlci10b3AtY29sb3JzOiBub25lO1xyXG4gIC1vLWJvcmRlci1pbWFnZTogbm9uZTtcclxuICAgICAgYm9yZGVyLWltYWdlOiBub25lO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAyNHB4IDEwcHg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDQzJTtcclxuICB0b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5uZXdzbGV0dGVyLWFyZWEge1xyXG4gIGJhY2tncm91bmQ6ICRmaXJzdC1jb2xvciBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLm5ld3NsZXR0ZXItYXJlYTpiZWZvcmUge1xyXG4gIGhlaWdodDogMTQ4cHg7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogYXV0bztcclxuICB0b3A6IC0yMHB4O1xyXG4gIHdpZHRoOiA0NCU7XHJcbn1cclxuLm5ld3NsZXR0ZXItYXJlYTphZnRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiA3NC41cHggNDBweDtcclxuICBsZWZ0OiA0NCU7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbiAgdG9wOiAtMjBweDtcclxufVxyXG4ubmV3c2xldHRlci1jb250ZW50IGgyLCAubmV3c2xldHRlci1jb250ZW50IGgzIHtmb250LWZhbWlseTogcmFsZXdheTsgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zaXplOiAzMHB4fVxyXG4ubmV3c2xldHRlci1jb250ZW50ID4gaDMge21hcmdpbi1ib3R0b206IDJweDsgZm9udC1zaXplOiAyNHB4fVxyXG4uc3Vic2NyaWJlLWZvcm0gaW5wdXQge1xyXG4gIGNvbG9yOiAjNjk2OTY5O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uc3Vic2NyaWJlLWZvcm0ge1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1YnNjcmliZS1mb3JtID4gYnV0dG9uIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkdGhpcmQtY29sb3I7XHJcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICB3aWR0aDogMzQlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc3Vic2NyaWJlLWZvcm0gPiBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJHRoaXJkLWNvbG9yO1xyXG59XHJcbi5uZXdzbGV0dGVyLWZvcm0ge292ZXJmbG93OiBoaWRkZW47IHBhZGRpbmc6IDM2cHggMDt9XHJcbi5zdWJzY3JpYmUtZm9ybSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGhlaWdodDogNTZweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDUyNXB4O1xyXG59XHJcbi5zdWJzY3JpYmUtZm9ybTpiZWZvcmUge1xyXG4gIC1tb3otYm9yZGVyLWJvdHRvbS1jb2xvcnM6IG5vbmU7XHJcbiAgLW1vei1ib3JkZXItbGVmdC1jb2xvcnM6IG5vbmU7XHJcbiAgLW1vei1ib3JkZXItcmlnaHQtY29sb3JzOiBub25lO1xyXG4gIC1tb3otYm9yZGVyLXRvcC1jb2xvcnM6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgLW8tYm9yZGVyLWltYWdlOiBub25lO1xyXG4gIGJvcmRlci1pbWFnZTogbm9uZTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMjhweCAxNXB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgbGVmdDogLTMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMDtcclxufVxyXG4uc3Vic2NyaWJlLWZvcm06YWZ0ZXIge1xyXG4gIC1tb3otYm9yZGVyLWJvdHRvbS1jb2xvcnM6IG5vbmU7XHJcbiAgLW1vei1ib3JkZXItbGVmdC1jb2xvcnM6IG5vbmU7XHJcbiAgLW1vei1ib3JkZXItcmlnaHQtY29sb3JzOiBub25lO1xyXG4gIC1tb3otYm9yZGVyLXRvcC1jb2xvcnM6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgLW8tYm9yZGVyLWltYWdlOiBub25lO1xyXG4gIGJvcmRlci1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLm5ld3NsZXR0ZXItY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDI2cHg7XHJcbiAgei1pbmRleDogOTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogIDEyLiBGb290ZXIgV2lkZ2V0IEFyZWFcclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmZvb3Rlci13aWRnZXQtYXJlYSB7XHJcbiAgYmFja2dyb3VuZDogJGZpcnN0LWNvbG9yIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICBwYWRkaW5nOiA4MHB4IDAgNjVweDtcclxufVxyXG4uZm9vdGVyLWxvZ28gPiBhIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG4uZm9vdGVyLWxvZ28ge21hcmdpbi1ib3R0b206IDI0cHg7fVxyXG4uc29jaWFsLWljb25zIGEge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBjb2xvcjogIzJkM2U1MDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGhlaWdodDogMzFweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDExcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgd2lkdGg6IDMxcHg7XHJcbn1cclxuLnNvY2lhbC1pY29ucyA+IGE6bGFzdC1jaGlsZCB7bWFyZ2luLXJpZ2h0OiAwO31cclxuLnNvY2lhbC1pY29ucyA+IGE6aG92ZXIge2NvbG9yOiAjZmZmZmZmO31cclxuLnNvY2lhbC1pY29ucyB7bWFyZ2luLXRvcDogMjdweDt9XHJcbi5zaW5nbGUtZm9vdGVyLXdpZGdldCA+IGgzIHtcclxuICBmb250LWZhbWlseTogcmFsZXdheTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICBtYXJnaW4tYm90dG9tOiAzN3B4O1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnNpbmdsZS1mb290ZXItd2lkZ2V0ID4gc3BhbiB7ZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDExcHg7fVxyXG4uc2luZ2xlLWZvb3Rlci13aWRnZXQgPiBzcGFuIGkge2ZvbnQtc2l6ZTogMThweDsgd2lkdGg6IDMwcHg7fVxyXG4uZm9vdGVyLWxpc3QgYSB7Y29sb3I6ICNmZmZmZmY7IGxpbmUtaGVpZ2h0OiAyNXB4O31cclxuLmZvb3Rlci1saXN0IGE6aG92ZXIge2NvbG9yOiAkdGhpcmQtY29sb3I7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgY3Vyc29yOiBwb2ludGVyO31cclxuLmluc3RhZ3JhbS1pbWFnZSB7cGFkZGluZy10b3A6IDVweDt9XHJcbi5mb290ZXItaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLmluc3RhZ3JhbS1pbWFnZSAuZm9vdGVyLWltZzpudGgtY2hpbGQoMyksIC5pbnN0YWdyYW0taW1hZ2UgLmZvb3Rlci1pbWc6bnRoLWNoaWxkKDYpIHttYXJnaW4tcmlnaHQ6IDA7fVxyXG4uZm9vdGVyLWltZyBhIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHBvc2l0aW9uOiByZWxhdGl2ZX1cclxuLmZvb3Rlci1pbWcgYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZvb3Rlci1pbWc6aG92ZXIgYTpiZWZvcmUge29wYWNpdHk6IDE7LW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXCI7IGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApfVxyXG4uZm9vdGVyLWltZyBhOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGNvbnRlbnQ6IFwiK1wiO1xyXG4gIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRyZWd1bGFyXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbjogLTlweCBhdXRvIDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICB3aWR0aDogMThweDtcclxufVxyXG4uZm9vdGVyLWltZzpob3ZlciBhOmFmdGVyIHtvcGFjaXR5OiAxOy1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKVwiOyBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKX1cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogIDEzLiBGb290ZXIgQXJlYVxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uZm9vdGVyLWFyZWEge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiAxOHB4IDA7XHJcbn1cclxuLmNvbHVtbi1yaWdodCB7ZmxvYXQ6IHJpZ2h0fVxyXG4uZm9vdGVyLWFyZWEgc3BhbiBhIHtjb2xvcjogI2ZmZmZmZjt9XHJcbi5mb290ZXItYXJlYSBzcGFuIGE6aG92ZXIge2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO31cclxuLnNpbmdsZS1mb290ZXItd2lkZ2V0ID4gYSB7Y29sb3I6ICNmZmZmZmY7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAxMXB4O31cclxuLnNpbmdsZS1mb290ZXItd2lkZ2V0ID4gYTpob3ZlciBpIHtjb2xvcjogI2ZmZn1cclxuLnNpbmdsZS1mb290ZXItd2lkZ2V0ID4gYSBpIHtmb250LXNpemU6IDE4cHg7IHdpZHRoOiAzMHB4O31cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogIDE0LiBIb21lIFR3byBTdGFydFxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiAgMTQuMSBIb21lIFR3byBIZWFkZXJcclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmhlYWRlci10d28gLmhlYWRlci10b3A6YmVmb3JlLCAuaGVhZGVyLXR3byAuaGVhZGVyLXRvcDphZnRlciB7ZGlzcGxheTogbm9uZTt9XHJcbi5oZWFkZXItdHdvIC5oZWFkZXItdG9wLXJpZ2h0ID4gc3BhbiB7Y29sb3I6ICNlZGVkZWQ7fVxyXG4uaGVhZGVyLXR3byAuaGVhZGVyLXRvcC1yaWdodCB7cGFkZGluZy10b3A6IDA7fVxyXG4uaGVhZGVyLXR3byAuaGVhZGVyLXRvcC1yaWdodCBzcGFuOmZpcnN0LWNoaWxkIHttYXJnaW4tcmlnaHQ6IDI3cHg7fVxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuaW1nI2Zvb3Rlci1sb2dvIHtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250YWluLXR4dCB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTcwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnR4dC1vbmUge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnR4dC10d28ge1xyXG4gIHdvcmQtc3BhY2luZzogMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4iLCIuaGVhZGVyLXRvcDpiZWZvcmUsIC5hYm91dC1hcmVhOmJlZm9yZSwgLm5ld3NsZXR0ZXItYXJlYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTBweDtcbiAgd2lkdGg6IDQzJTtcbn1cblxuLmhlYWRlci10b3A6YWZ0ZXIsIC5hYm91dC1hcmVhOmFmdGVyLCAubmV3c2xldHRlci1hcmVhOmFmdGVyIHtcbiAgLW1vei1ib3JkZXItYm90dG9tLWNvbG9yczogbm9uZTtcbiAgLW1vei1ib3JkZXItbGVmdC1jb2xvcnM6IG5vbmU7XG4gIC1tb3otYm9yZGVyLXJpZ2h0LWNvbG9yczogbm9uZTtcbiAgLW1vei1ib3JkZXItdG9wLWNvbG9yczogbm9uZTtcbiAgLW8tYm9yZGVyLWltYWdlOiBub25lO1xuICBib3JkZXItaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMjRweCAxMHB4O1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNDMlO1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiAwO1xufVxuXG4ubmV3c2xldHRlci1hcmVhIHtcbiAgYmFja2dyb3VuZDogIzBjMmQ1MCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm5ld3NsZXR0ZXItYXJlYTpiZWZvcmUge1xuICBoZWlnaHQ6IDE0OHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogYXV0bztcbiAgdG9wOiAtMjBweDtcbiAgd2lkdGg6IDQ0JTtcbn1cblxuLm5ld3NsZXR0ZXItYXJlYTphZnRlciB7XG4gIGJvcmRlci13aWR0aDogNzQuNXB4IDQwcHg7XG4gIGxlZnQ6IDQ0JTtcbiAgcmlnaHQ6IGF1dG87XG4gIHRvcDogLTIwcHg7XG59XG5cbi5uZXdzbGV0dGVyLWNvbnRlbnQgaDIsIC5uZXdzbGV0dGVyLWNvbnRlbnQgaDMge1xuICBmb250LWZhbWlseTogcmFsZXdheTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubmV3c2xldHRlci1jb250ZW50ID4gaDMge1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnN1YnNjcmliZS1mb3JtIGlucHV0IHtcbiAgY29sb3I6ICM2OTY5Njk7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc3Vic2NyaWJlLWZvcm0ge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uc3Vic2NyaWJlLWZvcm0gPiBidXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTE3YWJlO1xuICBmb250LWZhbWlseTogcmFsZXdheTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgd2lkdGg6IDM0JTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN1YnNjcmliZS1mb3JtID4gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgIzExN2FiZTtcbn1cblxuLm5ld3NsZXR0ZXItZm9ybSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDM2cHggMDtcbn1cblxuLnN1YnNjcmliZS1mb3JtIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDU2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUyNXB4O1xufVxuXG4uc3Vic2NyaWJlLWZvcm06YmVmb3JlIHtcbiAgLW1vei1ib3JkZXItYm90dG9tLWNvbG9yczogbm9uZTtcbiAgLW1vei1ib3JkZXItbGVmdC1jb2xvcnM6IG5vbmU7XG4gIC1tb3otYm9yZGVyLXJpZ2h0LWNvbG9yczogbm9uZTtcbiAgLW1vei1ib3JkZXItdG9wLWNvbG9yczogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIC1vLWJvcmRlci1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLWltYWdlOiBub25lO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDI4cHggMTVweDtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA1cHg7XG4gIGxlZnQ6IC0zMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDA7XG59XG5cbi5zdWJzY3JpYmUtZm9ybTphZnRlciB7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1jb2xvcnM6IG5vbmU7XG4gIC1tb3otYm9yZGVyLWxlZnQtY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci1yaWdodC1jb2xvcnM6IG5vbmU7XG4gIC1tb3otYm9yZGVyLXRvcC1jb2xvcnM6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAtby1ib3JkZXItaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1pbWFnZTogbm9uZTtcbn1cblxuLm5ld3NsZXR0ZXItY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAyNnB4O1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAgMTIuIEZvb3RlciBXaWRnZXQgQXJlYVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mb290ZXItd2lkZ2V0LWFyZWEge1xuICBiYWNrZ3JvdW5kOiAjMGMyZDUwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogODBweCAwIDY1cHg7XG59XG5cbi5mb290ZXItbG9nbyA+IGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5mb290ZXItbG9nbyB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5zb2NpYWwtaWNvbnMgYSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgY29sb3I6ICMyZDNlNTA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDMxcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB3aWR0aDogMzFweDtcbn1cblxuLnNvY2lhbC1pY29ucyA+IGE6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnNvY2lhbC1pY29ucyA+IGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNvY2lhbC1pY29ucyB7XG4gIG1hcmdpbi10b3A6IDI3cHg7XG59XG5cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCA+IGgzIHtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDM3cHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc2luZ2xlLWZvb3Rlci13aWRnZXQgPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDExcHg7XG59XG5cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCA+IHNwYW4gaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5mb290ZXItbGlzdCBhIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4uZm9vdGVyLWxpc3QgYTpob3ZlciB7XG4gIGNvbG9yOiAjMTE3YWJlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmluc3RhZ3JhbS1pbWFnZSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5mb290ZXItaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uaW5zdGFncmFtLWltYWdlIC5mb290ZXItaW1nOm50aC1jaGlsZCgzKSwgLmluc3RhZ3JhbS1pbWFnZSAuZm9vdGVyLWltZzpudGgtY2hpbGQoNikge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5mb290ZXItaW1nIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvb3Rlci1pbWcgYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvb3Rlci1pbWc6aG92ZXIgYTpiZWZvcmUge1xuICBvcGFjaXR5OiAxO1xuICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwMClcIjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG5cbi5mb290ZXItaW1nIGE6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGNvbnRlbnQ6IFwiK1wiO1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0cmVndWxhclwiO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGhlaWdodDogMThweDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiAtOXB4IGF1dG8gMDtcbiAgb3BhY2l0eTogMDtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4uZm9vdGVyLWltZzpob3ZlciBhOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXCI7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogIDEzLiBGb290ZXIgQXJlYVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mb290ZXItYXJlYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDE4cHggMDtcbn1cblxuLmNvbHVtbi1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmZvb3Rlci1hcmVhIHNwYW4gYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZm9vdGVyLWFyZWEgc3BhbiBhOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XG59XG5cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCA+IGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDExcHg7XG59XG5cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCA+IGE6aG92ZXIgaSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2luZ2xlLWZvb3Rlci13aWRnZXQgPiBhIGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogIDE0LiBIb21lIFR3byBTdGFydFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAgMTQuMSBIb21lIFR3byBIZWFkZXJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uaGVhZGVyLXR3byAuaGVhZGVyLXRvcDpiZWZvcmUsIC5oZWFkZXItdHdvIC5oZWFkZXItdG9wOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlci10d28gLmhlYWRlci10b3AtcmlnaHQgPiBzcGFuIHtcbiAgY29sb3I6ICNlZGVkZWQ7XG59XG5cbi5oZWFkZXItdHdvIC5oZWFkZXItdG9wLXJpZ2h0IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5oZWFkZXItdHdvIC5oZWFkZXItdG9wLXJpZ2h0IHNwYW46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDI3cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbWcjZm9vdGVyLWxvZ28ge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMzBweDtcbn1cblxuLmNvbnRhaW4tdHh0IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50eHQtb25lIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50eHQtdHdvIHtcbiAgd29yZC1zcGFjaW5nOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_configurations_configurations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/configurations/configurations.service */ "./src/app/services/configurations/configurations.service.ts");
/* harmony import */ var _services_Header_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/Header/header.service */ "./src/app/services/Header/header.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let FooterComponent = class FooterComponent {
    constructor(router, headerService, confService, http, _snackBar) {
        this.router = router;
        this.headerService = headerService;
        this.confService = confService;
        this.http = http;
        this._snackBar = _snackBar;
        this.logo = "./../../../assets/images/ENI/logo-ENl.png";
        this.logoUf = "./../../../assets/images/ENI/uf-light.png";
        this.menu = null;
        this.facebook = "";
        this.youtube = "";
        this.twitter = "";
        this.instagram = "";
        this.telephone = "+261 34 05 733 36";
        this.callPhone = "tel:+261 34 05 733 36";
        this.email = "eni@univ-fianar.mg";
        this.adresse = "MADAGASCAR";
        this.site = "www.univ-fianar.mg/";
        this.emailNewsletter = "";
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint;
    }
    ngOnInit() {
        this.menu = this.headerService.menu;
        this.getConf();
    }
    home() {
        this.router.navigateByUrl("/");
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action);
    }
    getConf() {
        this.confService.getConfigurations().subscribe((data) => {
            // console.log(data);
            data.forEach(el => {
                if (el.cle == "lien_facebook")
                    this.facebook = el.valeur;
                if (el.cle == "lien_twitter")
                    this.twitter = el.valeur;
                if (el.cle == "lien_youtube")
                    this.youtube = el.valeur;
                if (el.cle == "lien_instagram")
                    this.instagram = el.valeur;
                if (el.cle == "email")
                    this.email = el.valeur;
                if (el.cle == "adresse")
                    this.adresse = el.valeur;
                if (el.cle == "lien_site")
                    this.site = el.valeur;
                if (el.cle == "telephone") {
                    this.telephone = el.valeur;
                    this.callPhone = "tel:" + el.valeur;
                }
            });
            return data;
        }, err => {
            console.log(err);
        });
    }
    newsletter() {
        console.log(this.emailNewsletter);
        if (this.emailNewsletter == " " || this.emailNewsletter == "") {
            return;
        }
        if (!this.emailNewsletter.includes("@") || !this.emailNewsletter.includes(".")) {
            document.getElementById("mc-email").style.color = "red";
            return;
        }
        else {
            document.getElementById("mc-email").style.color = "black";
        }
        let options = {
            "email": this.emailNewsletter,
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.http.post(`${this.endpoint}/newsletter`, options, headers).subscribe((data) => {
            console.log(data);
            if (data) {
                if (data.message == "sucess") {
                    this._snackBar.open(`Vous êtes maintenant abonné !`, "", {
                        duration: 1500,
                        horizontalPosition: "right",
                        verticalPosition: "bottom",
                        panelClass: ["success_snackbar"]
                    });
                }
                else {
                    this._snackBar.open(`Une erreur est survenue`, "", {
                        duration: 1500,
                        horizontalPosition: "right",
                        verticalPosition: "bottom",
                        panelClass: ["error_snackbar"]
                    });
                }
            }
            this.emailNewsletter = "";
        }, err => {
            this._snackBar.open(`Vous êtes dejà abonné`, "", {
                duration: 1500,
                horizontalPosition: "right",
                verticalPosition: "bottom",
                panelClass: ["info_snackbar"]
            });
            console.log(err);
        });
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_Header_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"] },
    { type: _services_configurations_configurations_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../components/director-word/color.css */ "./src/app/components/director-word/color.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../components/director-word/responsive.css */ "./src/app/components/director-word/responsive.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/layout/header/header-style.css":
/*!************************************************!*\
  !*** ./src/app/layout/header/header-style.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300&display=swap);\r\n/* ================================ Basic CSS =============================== */\r\nimg {\r\n  max-width: 100%; }\r\nh1, h2, h3, h4, h5, h6 {\r\n  margin: 0px; }\r\nul, ol {\r\n  margin: 0px;\r\n  padding: 0px; }\r\nli {\r\n  list-style: none; }\r\na {\r\n  text-decoration: none; }\r\np {\r\n  margin: 0px; }\r\na:hover {\r\n  text-decoration: none; }\r\n.container {\r\n  max-width: 1170px; }\r\n@media screen and (max-width: 575px) {\r\n    .container {\r\n      padding: 0px 15px;\r\n      max-width: 100%;\r\n      width: 100%; } }\r\n/* ================================ Header CSS =============================== */\r\n.my-nav {\r\n  position: fixed;\r\n  width: 100%;\r\n  padding: 10px 0px;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 999; }\r\n.my-nav .nav-items {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex: 1 1 100%;\r\n    max-width: 100%;\r\n    width: 100%; }\r\n@media (max-width: 768px) {\r\n      .my-nav .nav-items {\r\n        align-items: center; } }\r\n.my-nav .nav-items .logo {\r\n      width: 30%;\r\n      max-width: 30%;\r\n      flex: 1 1 30%;\r\n      padding: 10px 15px; }\r\n@media screen and (max-width: 767.98px) {\r\n        .my-nav .nav-items .logo {\r\n          width: 100%;\r\n          max-width: 100%;\r\n          flex: 1 1 100%; } }\r\n.my-nav .nav-items .menu-items {\r\n      width: 70%;\r\n      max-width: 70%;\r\n      flex: 1 1 70%;\r\n      position: relative; }\r\n@media screen and (max-width: 767.98px) {\r\n        .my-nav .nav-items .menu-items {\r\n          width: 100%;\r\n          max-width: 100%;\r\n          flex: 1 1 100%; } }\r\n.my-nav .nav-items .menu-items .menu {\r\n        display: block;\r\n        float: right;\r\n        padding: 10px 15px; }\r\n@media screen and (max-width: 767.98px) {\r\n          .my-nav .nav-items .menu-items .menu {\r\n            float: left;\r\n            display: none;\r\n            background: rgba(0, 33, 71, 0.9);\r\n            width: 100%;\r\n            position: relative; } }\r\n.my-nav .nav-items .menu-items .menu ul li {\r\n          display: inline-block;\r\n          padding: 10px;\r\n          font-size: 16px;\r\n          font-weight: lighter;\r\n          letter-spacing: 1px; }\r\n@media screen and (max-width: 767.98px) {\r\n            .my-nav .nav-items .menu-items .menu ul li {\r\n              display: block;\r\n              padding: 10px 0px; } }\r\n@media (max-width: 992px) and (min-width: 768px) {\r\n            .my-nav .nav-items .menu-items .menu ul li {\r\n              padding: 10px 2px; } }\r\n.my-nav .nav-items .menu-items .menu ul li a {\r\n            color: #fff;\r\n            padding: 10px;\r\n            /* text-transform: uppercase; */\r\n            transition: 0.5s; }\r\n.my-nav .nav-items .menu-items .menu ul li a:hover {\r\n              color: #fdc800; }\r\n@media screen and (max-width: 767.98px) {\r\n              .my-nav .nav-items .menu-items .menu ul li a {\r\n                padding: 10px 0px; } }\r\n.og-hf {\r\n  background: rgba(0, 33, 71, 0.9);\r\n  position: fixed;\r\n  height: 70px;\r\n  z-index: 999;\r\n  width: 100%;\r\n  transition: all 1s ease-out; }\r\n.og-hf .my-nav {\r\n    padding: 0px; }\r\n.menu-toggle {\r\n  /* display: none; */\r\n  height: 40px;\r\n  width: 40px;\r\n  margin: 10px 0 0 40px;\r\n  /* opacity: 0; */\r\n  /* visibility: hidden; */\r\n  z-index: 99;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 3px;\r\n}\r\n.menu-toggle::before {\r\n  position: absolute;\r\n  content: \"\\f0c9\";\r\n  font-size: 26px;\r\n  color: #fff;\r\n  font-family: \"Font Awesome 5 Pro\"; }\r\n.menu-toggle.active::before {\r\n  content: \"\\f00d\"; }\r\n@media (max-width: 768px) {\r\n  .menu-toggle {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    display: block; }\r\n\r\n  .menu.active {\r\n    display: block !important;\r\n    position: relative;\r\n    top: 0; } }\r\n/* ================================ Slider CSS =============================== */\r\n.slider {\r\n  position: relative;\r\n  overflow: hidden;\r\n  z-index: 9; }\r\n.slider::before {\r\n    position: absolute;\r\n    content: \"\";\r\n    -webkit-clip-path: polygon(0 79%, 100% 94%, 100% 100%, 0% 100%);\r\n            clip-path: polygon(0 79%, 100% 94%, 100% 100%, 0% 100%);\r\n    width: 100%;\r\n    height: 300px;\r\n    background: #002147;\r\n    bottom: -1px;\r\n    left: 0;\r\n    z-index: 9; }\r\n.slider .carousel-inner .carousel-item::before {\r\n    position: absolute;\r\n    content: \"\";\r\n    /* background: rgba(3, 7, 53, 0.8); */\r\n    /* background : #0022478c; */\r\n    background: #3436388c;\r\n    height: 100%;\r\n    width: 100%; }\r\n.slider .carousel-inner .carousel-item .carousel-caption {\r\n    top: 30%;\r\n    display: block;\r\n    transition: ease-in 0.5s; }\r\n@media screen and (min-width: 1200px) {\r\n      .slider .carousel-inner .carousel-item .carousel-caption {\r\n        top: 20%;\r\n        display: block;\r\n        transition: ease-in 0.5s; }\r\n    }\r\n@media screen and (max-width: 991.98px) {\r\n      .slider .carousel-inner .carousel-item .carousel-caption {\r\n        /* display: none; */\r\n       }\r\n       .slider .carousel-inner .carousel-item .carousel-caption h2{\r\n        font-size: 30px !important;\r\n       }\r\n       .slider .carousel-inner .carousel-item .carousel-caption p{\r\n        /* display: none !important; */\r\n          font-size: 13px !important;\r\n          line-height: 25px !important;\r\n       }\r\n       .button-01 {\r\n         display: block !important;\r\n       }\r\n      }\r\n@media screen and (max-width: 600px) {\r\n        .slider .carousel-inner .carousel-item .carousel-caption {\r\n          margin-top: -50px;\r\n         }\r\n\r\n         .slider .carousel-inner .carousel-item .carousel-caption h2{\r\n          font-size: 20px !important;\r\n         }\r\n         .button-01 {\r\n           display: block !important;\r\n         }\r\n        }\r\n@media screen and (max-width: 460px) {\r\n          .slider .carousel-inner .carousel-item .carousel-caption h2{\r\n            font-size: 17px !important;\r\n           }\r\n          .slider .carousel-inner .carousel-item .carousel-caption {\r\n            /* display: none; */\r\n            }\r\n          }\r\n@media screen and (max-width: 280px) {\r\n            .slider .carousel-inner .carousel-item .carousel-caption .button-01 {\r\n              margin: 0px 0px !important;\r\n          }\r\n        }\r\n@media (max-width: 1199.98px) and (min-width: 992px) {\r\n      .slider .carousel-inner .carousel-item .carousel-caption {\r\n        top: 20%; } }\r\n.slider .carousel-inner .carousel-item .carousel-caption h2 {\r\n      font-size: 2.5rem;\r\n      text-transform: uppercase;\r\n      line-height: normal;\r\n      letter-spacing: 1px;\r\n      color: #fff;\r\n      margin: 0 0 1rem 0;\r\n      display: inline-block; }\r\n.slider .carousel-inner .carousel-item .carousel-caption p {\r\n      font-size: 20px;\r\n      text-transform: capitalize;\r\n      letter-spacing: 0.5px;\r\n      margin: 10px 0px;\r\n      color: #fff;\r\n      display: block;\r\n      font-weight: 100;\r\n      line-height: 35px; }\r\n.slider .carousel-inner .carousel-item .carousel-caption .button-01 {\r\n      display: inline-block;\r\n      margin: 20px 0px;\r\n      text-align: center;\r\n      position: relative; }\r\n.slider .carousel-inner .carousel-item .carousel-caption .button-01 ul li {\r\n        display: inline-block;\r\n        padding: 8px 10px;\r\n        border: solid 1px #fff; }\r\n.slider .carousel-inner .carousel-item .carousel-caption .button-01 ul li:nth-child(1) {\r\n          /* margin-right: 20px;\r\n          background: #fdc800;\r\n          border: 1px solid #fdc800;\r\n          color: #002147; */\r\n          background-color: transparent;\r\n          border: 1px solid white;\r\n          width: 150px;\r\n          padding: 10px;\r\n        }\r\n.slider .carousel-inner .carousel-item .carousel-caption .button-01 ul li a {\r\n          font-size: 0.9rem;\r\n          color: #fff;\r\n          text-transform: uppercase;\r\n          letter-spacing: 0.4px; }\r\n/* ================================ Section CSS =============================== */\r\n/* .bg-01 {\r\n  padding: 50px 0px;\r\n  background: #eef6ff;\r\n  position: relative;\r\n  overflow: hidden; }\r\n  .bg-01 .se-box {\r\n    display: block;\r\n    margin: 20px 0px;\r\n    padding: 20px 25px;\r\n    position: relative;\r\n    text-align: center; }\r\n    .bg-01 .se-box .icon {\r\n      padding: 0 0 10px 0px;\r\n      position: relative;\r\n      display: block;\r\n      height: 60px;\r\n      width: 60px;\r\n      background-color: #002147;\r\n      border-radius: 50px;\r\n      line-height: 60px;\r\n      text-align: center;\r\n      margin: 0px auto;\r\n      color: #fff;\r\n      font-size: 20px;\r\n      transition: 0.5s; }\r\n      .bg-01 .se-box .icon::before {\r\n        position: absolute;\r\n        content: \"\";\r\n        width: 80px;\r\n        height: 80px;\r\n        border-radius: 50px;\r\n        left: -10px;\r\n        top: -10px;\r\n        border: 2px dashed #002147; }\r\n      .bg-01 .se-box .icon:hover {\r\n        background: #fdc800; }\r\n    .bg-01 .se-box .content {\r\n      padding: 20px 0px;\r\n      position: relative;\r\n      display: inline-block; }\r\n      .bg-01 .se-box .content h3 {\r\n        font-size: 20px;\r\n        color: #002147;\r\n        text-transform: capitalize;\r\n        margin: 10px 0 0 0; }\r\n      .bg-01 .se-box .content p {\r\n        color: #444444;\r\n        font-size: 15px;\r\n        line-height: 26px;\r\n        margin: 10px 0px 20px 0px; }\r\n\r\n.bg-02 {\r\n  padding: 50px 0px;\r\n  position: relative;\r\n  background: #fff;\r\n  z-index: 9; }\r\n  .bg-02 .featured-box {\r\n    position: relative;\r\n    display: block;\r\n    margin: 20px 0px;\r\n    padding: 10px 20px; }\r\n    .bg-02 .featured-box .content {\r\n      display: block;\r\n      position: relative;\r\n      padding: 10px 20px;\r\n      position: relative;\r\n      border: 1px solid #dddd;\r\n      border-top: 0px;\r\n      border-bottom-left-radius: 6px;\r\n      border-bottom-right-radius: 6px; }\r\n      .bg-02 .featured-box .content h3 {\r\n        font-size: 20px;\r\n        color: #002147; }\r\n      .bg-02 .featured-box .content p {\r\n        padding: 10px 0px;\r\n        color: #444444;\r\n        font-size: 14px;\r\n        font-weight: 500; }\r\n      .bg-02 .featured-box .content ol li {\r\n        display: inline-block;\r\n        padding: 0 6px 0 0;\r\n        border-right: 1px solid #dddd;\r\n        color: #444444;\r\n        font-size: 13px; }\r\n        .bg-02 .featured-box .content ol li:nth-child(3) {\r\n          border: none; }\r\n    .bg-02 .featured-box .feature-card {\r\n      position: relative;\r\n      border-top-right-radius: 6px;\r\n      border-top-left-radius: 6px;\r\n      overflow: hidden;\r\n      z-index: 3;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center; }\r\n      .bg-02 .featured-box .feature-card a {\r\n        position: absolute;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        color: #fff;\r\n        cursor: pointer;\r\n        width: 40px;\r\n        height: 40px;\r\n        border-radius: 50px;\r\n        transition: ease-in-out 0.9s;\r\n        visibility: hidden;\r\n        opacity: 0;\r\n        background: #002147;\r\n        z-index: 2; }\r\n      .bg-02 .featured-box .feature-card:hover a {\r\n        visibility: visible;\r\n        opacity: 1; }\r\n      .bg-02 .featured-box .feature-card:hover::before {\r\n        height: 100%; }\r\n      .bg-02 .featured-box .feature-card::before {\r\n        position: absolute;\r\n        content: \"\";\r\n        background: #fdc800;\r\n        opacity: 0.8;\r\n        width: 100%;\r\n        top: 0;\r\n        height: 0;\r\n        transition: ease-in-out 0.4s;\r\n        z-index: 1; }\r\n\r\n.bg-03 {\r\n  padding: 50px 0px;\r\n  background-image: url(../../../assets/images/background/1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  position: relative;\r\n  z-index: 9; }\r\n  .bg-03::before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 33, 71, 0.9);\r\n    z-index: 1; }\r\n  .bg-03 ._lk_bg_cd {\r\n    padding: 20px 25px;\r\n    position: relative;\r\n    display: block;\r\n    z-index: 8;\r\n    text-align: center; }\r\n    .bg-03 ._lk_bg_cd i {\r\n      font-size: 25px;\r\n      color: #fdc800;\r\n      display: block;\r\n      padding: 10px 0px; }\r\n    .bg-03 ._lk_bg_cd .counting {\r\n      display: block;\r\n      font-size: 20px;\r\n      color: #fff;\r\n      font-weight: 600; }\r\n    .bg-03 ._lk_bg_cd h5 {\r\n      font-size: 18px;\r\n      color: #fff;\r\n      padding: 10px 0px;\r\n      display: inline-block; }\r\n\r\n.team {\r\n  padding: 50px 0px;\r\n  position: relative;\r\n  overflow: hidden; }\r\n  @media screen and (max-width: 576px) {\r\n    .team .item {\r\n      text-align: center; } }\r\n  .team .team-card {\r\n    position: relative;\r\n    display: block;\r\n    padding: 20px 25px; }\r\n    .team .team-card .image-team {\r\n      overflow: hidden;\r\n      display: inline-block;\r\n      margin-bottom: 10px; }\r\n    .team .team-card .team-content {\r\n      display: block;\r\n      text-align: center; }\r\n      .team .team-card .team-content h3 {\r\n        font-size: 18px;\r\n        font-weight: 500;\r\n        color: #002147;\r\n        padding: 0 0 5px 0; }\r\n      .team .team-card .team-content p {\r\n        display: block;\r\n        font-size: 15px;\r\n        color: #444444;\r\n        padding: 0 0 10px 0; }\r\n      .team .team-card .team-content ol li {\r\n        display: inline-block;\r\n        height: 30px;\r\n        width: 30px;\r\n        line-height: 30px;\r\n        text-align: center;\r\n        background: #002147;\r\n        color: #fff;\r\n        transition: ease-in-out 0.5s;\r\n        padding: 0 5px;\r\n        position: relative; }\r\n        .team .team-card .team-content ol li:hover {\r\n          background: #fdc800; }\r\n\r\n.bg-04 {\r\n  padding: 50px 0px;\r\n  background: #eef6ff;\r\n  position: relative;\r\n  overflow: hidden; }\r\n  .bg-04 ._lk_bg_sd_we {\r\n    position: relative;\r\n    overflow: hidden;\r\n    margin: 20px 0;\r\n    box-shadow: 0px 0px 15px 0px #ddd; }\r\n    .bg-04 ._lk_bg_sd_we ._xs_we_er {\r\n      display: inline-block;\r\n      width: 100%;\r\n      padding: 15px; }\r\n      .bg-04 ._lk_bg_sd_we ._xs_we_er ._he_w {\r\n        position: relative;\r\n        margin: 10px 0px;\r\n        z-index: 2;\r\n        overflow: hidden; }\r\n        .bg-04 ._lk_bg_sd_we ._xs_we_er ._he_w p {\r\n          font-size: 16px;\r\n          color: #5c5c5c;\r\n          letter-spacing: 0.2px;\r\n          line-height: 24px;\r\n          margin: 15px 0px 10px 0px; }\r\n        .bg-04 ._lk_bg_sd_we ._xs_we_er ._he_w ol li {\r\n          color: #f55e45;\r\n          font-size: 14px;\r\n          display: inline-block;\r\n          width: 100%; }\r\n          .bg-04 ._lk_bg_sd_we ._xs_we_er ._he_w ol li ._mn_cd_xs {\r\n            margin: 0 10px; }\r\n          .bg-04 ._lk_bg_sd_we ._xs_we_er ._he_w ol li span {\r\n            color: #5c5c5c;\r\n            font-size: 15px;\r\n            font-weight: 500;\r\n            margin: 0 5px 0 0; }\r\n        .bg-04 ._lk_bg_sd_we ._xs_we_er ._he_w h3 {\r\n          font-size: 18px;\r\n          font-weight: 400;\r\n          color: #292929; }\r\n    .bg-04 ._lk_bg_sd_we ._bv_xs_we {\r\n      position: relative;\r\n      z-index: 1;\r\n      background: url(../../../assets/images/blog/img-02.jpg);\r\n      background-repeat: no-repeat !important;\r\n      height: 300px;\r\n      background-size: cover !important;\r\n      background-position: center !important; }\r\n      .bg-04 ._lk_bg_sd_we ._bv_xs_we:hover::before {\r\n        opacity: 0.8;\r\n        width: 100%;\r\n        visibility: visible;\r\n        transition: 0.5s; }\r\n      .bg-04 ._lk_bg_sd_we ._bv_xs_we::before {\r\n        content: \"\";\r\n        position: absolute;\r\n        width: 0;\r\n        height: 100%;\r\n        top: 0;\r\n        background: #002147;\r\n        transition: 0.5s;\r\n        opacity: 0;\r\n        visibility: hidden; }\r\n\r\n.heading {\r\n  position: relative;\r\n  padding: 0px 0 20px 0px;\r\n  display: block;\r\n  text-align: center;\r\n  z-index: 99; }\r\n  .heading h2 {\r\n    font-size: 25px;\r\n    color: #002147;\r\n    font-weight: 800;\r\n    letter-spacing: 0.4px;\r\n    text-transform: uppercase; }\r\n  .heading p {\r\n    font-size: 16px;\r\n    letter-spacing: 0.4px;\r\n    color: #444444;\r\n    margin: 10px 0px;\r\n    font-weight: 400;\r\n    line-height: 27px;\r\n    text-transform: capitalize; }\r\n\r\n.bg-02-a {\r\n  padding: 150px 0px 80px 0px;\r\n  background: #002147;\r\n  overflow: hidden;\r\n  position: relative;\r\n  text-align: center;\r\n  color: #fff; }\r\n  .bg-02-a ._head_01 {\r\n    position: relative;\r\n    display: block;\r\n    margin: 20px auto; }\r\n    .bg-02-a ._head_01 h2 {\r\n      font-size: 23px;\r\n      font-weight: 500;\r\n      margin: 0px;\r\n      padding: 0 0 10px 0;\r\n      color: #fff; }\r\n    .bg-02-a ._head_01 p {\r\n      margin: 10px 0px;\r\n      font-size: 18px;\r\n      font-weight: 300; }\r\n      .bg-02-a ._head_01 p i {\r\n        font-size: 20px;\r\n        margin: 0 10px;\r\n        position: relative;\r\n        top: 3px;\r\n        color: #fdc800; }\r\n      .bg-02-a ._head_01 p span {\r\n        color: #fdc800; }\r\n\r\n.se-001 {\r\n  padding: 40px 0px;\r\n  position: relative;\r\n  overflow: hidden; }\r\n  .se-001 .yu {\r\n    text-align: center; }\r\n  .se-001 ._Ol_er_qw {\r\n    margin: 20px 0px;\r\n    padding: 10px; }\r\n    .se-001 ._Ol_er_qw p {\r\n      font-size: 15px;\r\n      color: #444444;\r\n      text-align: left;\r\n      letter-spacing: 0.5px;\r\n      line-height: 28px; }\r\n\r\n._pl_rt {\r\n  padding: 40px 0px;\r\n  position: relative; }\r\n  ._pl_rt ._lo_we_ds {\r\n    background: #fdc800;\r\n    color: #fff;\r\n    padding: 30px 50px;\r\n    position: relative;\r\n    top: 55px;\r\n    z-index: 9;\r\n    box-shadow: 0px 0px 3px 0px #ddd; }\r\n    ._pl_rt ._lo_we_ds ._ol_we_as {\r\n      position: relative;\r\n      padding: 10px 20px;\r\n      display: inline-block; }\r\n      ._pl_rt ._lo_we_ds ._ol_we_as ol li {\r\n        display: block;\r\n        position: relative;\r\n        padding: 0 0 0 40px; }\r\n        ._pl_rt ._lo_we_ds ._ol_we_as ol li h3 {\r\n          color: #fff;\r\n          font-size: 20px; }\r\n        ._pl_rt ._lo_we_ds ._ol_we_as ol li i {\r\n          position: absolute;\r\n          left: 0;\r\n          font-size: 26px;\r\n          color: #fff;\r\n          display: flex;\r\n          align-items: center;\r\n          height: 100%; }\r\n    @media screen and (max-width: 768px) {\r\n      ._pl_rt ._lo_we_ds {\r\n        padding: 20px 0px; } }\r\n\r\n.my-pla {\r\n  padding: 40px 0px;\r\n  background: url(../../../assets/images/background/1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-attachment: fixed;\r\n  overflow: hidden;\r\n  position: relative;\r\n  z-index: 9; }\r\n  .my-pla::before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 33, 71, 0.9);\r\n    z-index: 1; }\r\n  .my-pla .form-group {\r\n    margin: 10px 0px;\r\n    color: #fff;\r\n    position: relative;\r\n    z-index: 2; }\r\n    .my-pla .form-group .form-control {\r\n      background: transparent;\r\n      color: #fff;\r\n      border: 1px solid #fff;\r\n      min-height: 45px;\r\n      border-radius: 4px;\r\n      margin: 10px 0px; } */\r\n/*# sourceMappingURL=style.css.map */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXItc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZIQUE2SDtBQUM3SCwrRUFBK0U7QUFFL0U7RUFDRSxlQUFlLEVBQUU7QUFFbkI7RUFDRSxXQUFXLEVBQUU7QUFFZjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUU7QUFFaEI7RUFDRSxnQkFBZ0IsRUFBRTtBQUVwQjtFQUNFLHFCQUFxQixFQUFFO0FBRXpCO0VBQ0UsV0FBVyxFQUFFO0FBRWY7RUFDRSxxQkFBcUIsRUFBRTtBQUV6QjtFQUNFLGlCQUFpQixFQUFFO0FBQ25CO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLFdBQVcsRUFBRSxFQUFFO0FBRXJCLGdGQUFnRjtBQUVoRjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVksRUFBRTtBQUNkO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVcsRUFBRTtBQUNiO01BQ0U7UUFDRSxtQkFBbUIsRUFBRSxFQUFFO0FBQzNCO01BQ0UsVUFBVTtNQUNWLGNBQWM7TUFDZCxhQUFhO01BQ2Isa0JBQWtCLEVBQUU7QUFDcEI7UUFDRTtVQUNFLFdBQVc7VUFDWCxlQUFlO1VBQ2YsY0FBYyxFQUFFLEVBQUU7QUFDeEI7TUFDRSxVQUFVO01BQ1YsY0FBYztNQUNkLGFBQWE7TUFDYixrQkFBa0IsRUFBRTtBQUNwQjtRQUNFO1VBQ0UsV0FBVztVQUNYLGVBQWU7VUFDZixjQUFjLEVBQUUsRUFBRTtBQUN0QjtRQUNFLGNBQWM7UUFDZCxZQUFZO1FBQ1osa0JBQWtCLEVBQUU7QUFDcEI7VUFDRTtZQUNFLFdBQVc7WUFDWCxhQUFhO1lBQ2IsZ0NBQWdDO1lBQ2hDLFdBQVc7WUFDWCxrQkFBa0IsRUFBRSxFQUFFO0FBQzFCO1VBQ0UscUJBQXFCO1VBQ3JCLGFBQWE7VUFDYixlQUFlO1VBQ2Ysb0JBQW9CO1VBQ3BCLG1CQUFtQixFQUFFO0FBQ3JCO1lBQ0U7Y0FDRSxjQUFjO2NBQ2QsaUJBQWlCLEVBQUUsRUFBRTtBQUN6QjtZQUNFO2NBQ0UsaUJBQWlCLEVBQUUsRUFBRTtBQUN6QjtZQUNFLFdBQVc7WUFDWCxhQUFhO1lBQ2IsK0JBQStCO1lBQy9CLGdCQUFnQixFQUFFO0FBQ2xCO2NBQ0UsY0FBYyxFQUFFO0FBQ2xCO2NBQ0U7Z0JBQ0UsaUJBQWlCLEVBQUUsRUFBRTtBQUVyQztFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBS1gsMkJBQTJCLEVBQUU7QUFDN0I7SUFDRSxZQUFZLEVBQUU7QUFFbEI7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0FBQ1Y7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQ0FBaUMsRUFBRTtBQUVyQztFQUNFLGdCQUFnQixFQUFFO0FBRXBCO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWMsRUFBRTs7RUFFbEI7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLE1BQU0sRUFBRSxFQUFFO0FBQ2QsZ0ZBQWdGO0FBQ2hGO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVLEVBQUU7QUFDWjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsK0RBQXVEO1lBQXZELHVEQUF1RDtJQUN2RCxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osT0FBTztJQUNQLFVBQVUsRUFBRTtBQUNkO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckMsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVyxFQUFFO0FBQ2Y7SUFDRSxRQUFRO0lBQ1IsY0FBYztJQUNkLHdCQUF3QixFQUFFO0FBQzFCO01BQ0U7UUFDRSxRQUFRO1FBQ1IsY0FBYztRQUNkLHdCQUF3QixFQUFFO0lBQzlCO0FBQ0E7TUFDRTtRQUNFLG1CQUFtQjtPQUNwQjtPQUNBO1FBQ0MsMEJBQTBCO09BQzNCO09BQ0E7UUFDQyw4QkFBOEI7VUFDNUIsMEJBQTBCO1VBQzFCLDRCQUE0QjtPQUMvQjtPQUNBO1NBQ0UseUJBQXlCO09BQzNCO01BQ0Q7QUFDQTtRQUNFO1VBQ0UsaUJBQWlCO1NBQ2xCOztTQUVBO1VBQ0MsMEJBQTBCO1NBQzNCO1NBQ0E7V0FDRSx5QkFBeUI7U0FDM0I7UUFDRDtBQUNBO1VBQ0U7WUFDRSwwQkFBMEI7V0FDM0I7VUFDRDtZQUNFLG1CQUFtQjtZQUNuQjtVQUNGO0FBQ0E7WUFDRTtjQUNFLDBCQUEwQjtVQUM5QjtRQUNGO0FBQ0o7TUFDRTtRQUNFLFFBQVEsRUFBRSxFQUFFO0FBQ2hCO01BQ0UsaUJBQWlCO01BQ2pCLHlCQUF5QjtNQUN6QixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIscUJBQXFCLEVBQUU7QUFDekI7TUFDRSxlQUFlO01BQ2YsMEJBQTBCO01BQzFCLHFCQUFxQjtNQUNyQixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUU7QUFDckI7TUFDRSxxQkFBcUI7TUFDckIsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixrQkFBa0IsRUFBRTtBQUNwQjtRQUNFLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsc0JBQXNCLEVBQUU7QUFDeEI7VUFDRTs7OzJCQUdpQjtVQUNqQiw2QkFBNkI7VUFDN0IsdUJBQXVCO1VBQ3ZCLFlBQVk7VUFDWixhQUFhO1FBQ2Y7QUFDQTtVQUNFLGlCQUFpQjtVQUNqQixXQUFXO1VBQ1gseUJBQXlCO1VBQ3pCLHFCQUFxQixFQUFFO0FBRWpDLGlGQUFpRjtBQUNqRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQXFaMkI7QUFHM0Isb0NBQW9DIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXItc3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMzAwJmRpc3BsYXk9c3dhcCk7XHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJhc2ljIENTUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTsgfVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgbWFyZ2luOiAwcHg7IH1cclxuXHJcbnVsLCBvbCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4OyB9XHJcblxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDBweDsgfVxyXG5cclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDExNzBweDsgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7IH0gfVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSGVhZGVyIENTUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4ubXktbmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogOTk5OyB9XHJcbiAgLm15LW5hdiAubmF2LWl0ZW1zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4OiAxIDEgMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlOyB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgLm15LW5hdiAubmF2LWl0ZW1zIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9IH1cclxuICAgIC5teS1uYXYgLm5hdi1pdGVtcyAubG9nbyB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgICBmbGV4OiAxIDEgMzAlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7IH1cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICAgICAubXktbmF2IC5uYXYtaXRlbXMgLmxvZ28ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBmbGV4OiAxIDEgMTAwJTsgfSB9XHJcbiAgICAubXktbmF2IC5uYXYtaXRlbXMgLm1lbnUtaXRlbXMge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgICAgZmxleDogMSAxIDcwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAgICAgLm15LW5hdiAubmF2LWl0ZW1zIC5tZW51LWl0ZW1zIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZmxleDogMSAxIDEwMCU7IH0gfVxyXG4gICAgICAubXktbmF2IC5uYXYtaXRlbXMgLm1lbnUtaXRlbXMgLm1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7IH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgICAgICAgLm15LW5hdiAubmF2LWl0ZW1zIC5tZW51LWl0ZW1zIC5tZW51IHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMzMsIDcxLCAwLjkpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9IH1cclxuICAgICAgICAubXktbmF2IC5uYXYtaXRlbXMgLm1lbnUtaXRlbXMgLm1lbnUgdWwgbGkge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDsgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICAgICAgICAgLm15LW5hdiAubmF2LWl0ZW1zIC5tZW51LWl0ZW1zIC5tZW51IHVsIGxpIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDsgfSB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAubXktbmF2IC5uYXYtaXRlbXMgLm1lbnUtaXRlbXMgLm1lbnUgdWwgbGkge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMnB4OyB9IH1cclxuICAgICAgICAgIC5teS1uYXYgLm5hdi1pdGVtcyAubWVudS1pdGVtcyAubWVudSB1bCBsaSBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7IH1cclxuICAgICAgICAgICAgLm15LW5hdiAubmF2LWl0ZW1zIC5tZW51LWl0ZW1zIC5tZW51IHVsIGxpIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmRjODAwOyB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAgICAgICAgICAgLm15LW5hdiAubmF2LWl0ZW1zIC5tZW51LWl0ZW1zIC5tZW51IHVsIGxpIGEge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7IH0gfVxyXG5cclxuLm9nLWhmIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDMzLCA3MSwgMC45KTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICB3aWR0aDogMTAwJTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7IH1cclxuICAub2ctaGYgLm15LW5hdiB7XHJcbiAgICBwYWRkaW5nOiAwcHg7IH1cclxuXHJcbi5tZW51LXRvZ2dsZSB7XHJcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMCA0MHB4O1xyXG4gIC8qIG9wYWNpdHk6IDA7ICovXHJcbiAgLyogdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDNweDtcclxufVxyXG5cclxuLm1lbnUtdG9nZ2xlOjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlxcZjBjOVwiO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBQcm9cIjsgfVxyXG5cclxuLm1lbnUtdG9nZ2xlLmFjdGl2ZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZjAwZFwiOyB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubWVudS10b2dnbGUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgfVxyXG5cclxuICAubWVudS5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDsgfSB9XHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFNsaWRlciBDU1MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uc2xpZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiA5OyB9XHJcbiAgLnNsaWRlcjo6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCA3OSUsIDEwMCUgOTQlLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMjE0NztcclxuICAgIGJvdHRvbTogLTFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA5OyB9XHJcbiAgLnNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW06OmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgLyogYmFja2dyb3VuZDogcmdiYSgzLCA3LCA1MywgMC44KTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQgOiAjMDAyMjQ3OGM7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQzNjM4OGM7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTsgfVxyXG4gIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuNXM7IH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAuc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjVzOyB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgICAuc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgLyogZGlzcGxheTogbm9uZTsgKi9cclxuICAgICAgIH1cclxuICAgICAgIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgICAgLnNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gcHtcclxuICAgICAgICAvKiBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICB9XHJcbiAgICAgICAuYnV0dG9uLTAxIHtcclxuICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAuc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiBoMntcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5idXR0b24tMDEge1xyXG4gICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAgICAgICAgIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4MHB4KSB7XHJcbiAgICAgICAgICAgIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIC5idXR0b24tMDEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAuc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgdG9wOiAyMCU7IH0gfVxyXG4gICAgLnNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gaDIge1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XHJcbiAgICAuc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4OyB9XHJcbiAgICAuc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiAuYnV0dG9uLTAxIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxyXG4gICAgICAuc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiAuYnV0dG9uLTAxIHVsIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjsgfVxyXG4gICAgICAgIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIC5idXR0b24tMDEgdWwgbGk6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgIC8qIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZGM4MDA7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmRjODAwO1xyXG4gICAgICAgICAgY29sb3I6ICMwMDIxNDc7ICovXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gLmJ1dHRvbi0wMSB1bCBsaSBhIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4OyB9XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTZWN0aW9uIENTUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qIC5iZy0wMSB7XHJcbiAgcGFkZGluZzogNTBweCAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2VlZjZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4gIC5iZy0wMSAuc2UtYm94IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4gICAgLmJnLTAxIC5zZS1ib3ggLmljb24ge1xyXG4gICAgICBwYWRkaW5nOiAwIDAgMTBweCAwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDIxNDc7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7IH1cclxuICAgICAgLmJnLTAxIC5zZS1ib3ggLmljb246OmJlZm9yZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgIzAwMjE0NzsgfVxyXG4gICAgICAuYmctMDEgLnNlLWJveCAuaWNvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZkYzgwMDsgfVxyXG4gICAgLmJnLTAxIC5zZS1ib3ggLmNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cclxuICAgICAgLmJnLTAxIC5zZS1ib3ggLmNvbnRlbnQgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogIzAwMjE0NztcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7IH1cclxuICAgICAgLmJnLTAxIC5zZS1ib3ggLmNvbnRlbnQgcCB7XHJcbiAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMjBweCAwcHg7IH1cclxuXHJcbi5iZy0wMiB7XHJcbiAgcGFkZGluZzogNTBweCAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgei1pbmRleDogOTsgfVxyXG4gIC5iZy0wMiAuZmVhdHVyZWQtYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDsgfVxyXG4gICAgLmJnLTAyIC5mZWF0dXJlZC1ib3ggLmNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGQ7XHJcbiAgICAgIGJvcmRlci10b3A6IDBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4OyB9XHJcbiAgICAgIC5iZy0wMiAuZmVhdHVyZWQtYm94IC5jb250ZW50IGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDIxNDc7IH1cclxuICAgICAgLmJnLTAyIC5mZWF0dXJlZC1ib3ggLmNvbnRlbnQgcCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cclxuICAgICAgLmJnLTAyIC5mZWF0dXJlZC1ib3ggLmNvbnRlbnQgb2wgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAwIDZweCAwIDA7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZGQ7XHJcbiAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4OyB9XHJcbiAgICAgICAgLmJnLTAyIC5mZWF0dXJlZC1ib3ggLmNvbnRlbnQgb2wgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTsgfVxyXG4gICAgLmJnLTAyIC5mZWF0dXJlZC1ib3ggLmZlYXR1cmUtY2FyZCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB6LWluZGV4OiAzO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxyXG4gICAgICAuYmctMDIgLmZlYXR1cmVkLWJveCAuZmVhdHVyZS1jYXJkIGEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuOXM7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMjE0NztcclxuICAgICAgICB6LWluZGV4OiAyOyB9XHJcbiAgICAgIC5iZy0wMiAuZmVhdHVyZWQtYm94IC5mZWF0dXJlLWNhcmQ6aG92ZXIgYSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICBvcGFjaXR5OiAxOyB9XHJcbiAgICAgIC5iZy0wMiAuZmVhdHVyZWQtYm94IC5mZWF0dXJlLWNhcmQ6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyB9XHJcbiAgICAgIC5iZy0wMiAuZmVhdHVyZWQtYm94IC5mZWF0dXJlLWNhcmQ6OmJlZm9yZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZkYzgwMDtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjRzO1xyXG4gICAgICAgIHotaW5kZXg6IDE7IH1cclxuXHJcbi5iZy0wMyB7XHJcbiAgcGFkZGluZzogNTBweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC8xLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogOTsgfVxyXG4gIC5iZy0wMzo6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMzMsIDcxLCAwLjkpO1xyXG4gICAgei1pbmRleDogMTsgfVxyXG4gIC5iZy0wMyAuX2xrX2JnX2NkIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgei1pbmRleDogODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4gICAgLmJnLTAzIC5fbGtfYmdfY2QgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgY29sb3I6ICNmZGM4MDA7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDsgfVxyXG4gICAgLmJnLTAzIC5fbGtfYmdfY2QgLmNvdW50aW5nIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cclxuICAgIC5iZy0wMyAuX2xrX2JnX2NkIGg1IHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxyXG5cclxuLnRlYW0ge1xyXG4gIHBhZGRpbmc6IDUwcHggMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuOyB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC50ZWFtIC5pdGVtIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9IH1cclxuICAudGVhbSAudGVhbS1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMjBweCAyNXB4OyB9XHJcbiAgICAudGVhbSAudGVhbS1jYXJkIC5pbWFnZS10ZWFtIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XHJcbiAgICAudGVhbSAudGVhbS1jYXJkIC50ZWFtLWNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbiAgICAgIC50ZWFtIC50ZWFtLWNhcmQgLnRlYW0tY29udGVudCBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDIxNDc7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDVweCAwOyB9XHJcbiAgICAgIC50ZWFtIC50ZWFtLWNhcmQgLnRlYW0tY29udGVudCBwIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDEwcHggMDsgfVxyXG4gICAgICAudGVhbSAudGVhbS1jYXJkIC50ZWFtLWNvbnRlbnQgb2wgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDIxNDc7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC41cztcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cclxuICAgICAgICAudGVhbSAudGVhbS1jYXJkIC50ZWFtLWNvbnRlbnQgb2wgbGk6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZkYzgwMDsgfVxyXG5cclxuLmJnLTA0IHtcclxuICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZWVmNmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuOyB9XHJcbiAgLmJnLTA0IC5fbGtfYmdfc2Rfd2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjZGRkOyB9XHJcbiAgICAuYmctMDQgLl9sa19iZ19zZF93ZSAuX3hzX3dlX2VyIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTVweDsgfVxyXG4gICAgICAuYmctMDQgLl9sa19iZ19zZF93ZSAuX3hzX3dlX2VyIC5faGVfdyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XHJcbiAgICAgICAgLmJnLTA0IC5fbGtfYmdfc2Rfd2UgLl94c193ZV9lciAuX2hlX3cgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzVjNWM1YztcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxNXB4IDBweCAxMHB4IDBweDsgfVxyXG4gICAgICAgIC5iZy0wNCAuX2xrX2JnX3NkX3dlIC5feHNfd2VfZXIgLl9oZV93IG9sIGxpIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjU1ZTQ1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7IH1cclxuICAgICAgICAgIC5iZy0wNCAuX2xrX2JnX3NkX3dlIC5feHNfd2VfZXIgLl9oZV93IG9sIGxpIC5fbW5fY2RfeHMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDsgfVxyXG4gICAgICAgICAgLmJnLTA0IC5fbGtfYmdfc2Rfd2UgLl94c193ZV9lciAuX2hlX3cgb2wgbGkgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNWM1YzVjO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHggMCAwOyB9XHJcbiAgICAgICAgLmJnLTA0IC5fbGtfYmdfc2Rfd2UgLl94c193ZV9lciAuX2hlX3cgaDMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMjkyOTI5OyB9XHJcbiAgICAuYmctMDQgLl9sa19iZ19zZF93ZSAuX2J2X3hzX3dlIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ibG9nL2ltZy0wMi5qcGcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7IH1cclxuICAgICAgLmJnLTA0IC5fbGtfYmdfc2Rfd2UgLl9idl94c193ZTpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzOyB9XHJcbiAgICAgIC5iZy0wNCAuX2xrX2JnX3NkX3dlIC5fYnZfeHNfd2U6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAyMTQ3O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMHB4IDAgMjBweCAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk5OyB9XHJcbiAgLmhlYWRpbmcgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMwMDIxNDc7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxyXG4gIC5oZWFkaW5nIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG4gICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cclxuXHJcbi5iZy0wMi1hIHtcclxuICBwYWRkaW5nOiAxNTBweCAwcHggODBweCAwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMjE0NztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7IH1cclxuICAuYmctMDItYSAuX2hlYWRfMDEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bzsgfVxyXG4gICAgLmJnLTAyLWEgLl9oZWFkXzAxIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgcGFkZGluZzogMCAwIDEwcHggMDtcclxuICAgICAgY29sb3I6ICNmZmY7IH1cclxuICAgIC5iZy0wMi1hIC5faGVhZF8wMSBwIHtcclxuICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwOyB9XHJcbiAgICAgIC5iZy0wMi1hIC5faGVhZF8wMSBwIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZGM4MDA7IH1cclxuICAgICAgLmJnLTAyLWEgLl9oZWFkXzAxIHAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZGM4MDA7IH1cclxuXHJcbi5zZS0wMDEge1xyXG4gIHBhZGRpbmc6IDQwcHggMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuOyB9XHJcbiAgLnNlLTAwMSAueXUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbiAgLnNlLTAwMSAuX09sX2VyX3F3IHtcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4OyB9XHJcbiAgICAuc2UtMDAxIC5fT2xfZXJfcXcgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7IH1cclxuXHJcbi5fcGxfcnQge1xyXG4gIHBhZGRpbmc6IDQwcHggMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxyXG4gIC5fcGxfcnQgLl9sb193ZV9kcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRjODAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMHB4ICNkZGQ7IH1cclxuICAgIC5fcGxfcnQgLl9sb193ZV9kcyAuX29sX3dlX2FzIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxyXG4gICAgICAuX3BsX3J0IC5fbG9fd2VfZHMgLl9vbF93ZV9hcyBvbCBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDQwcHg7IH1cclxuICAgICAgICAuX3BsX3J0IC5fbG9fd2VfZHMgLl9vbF93ZV9hcyBvbCBsaSBoMyB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsgfVxyXG4gICAgICAgIC5fcGxfcnQgLl9sb193ZV9kcyAuX29sX3dlX2FzIG9sIGxpIGkge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7IH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIC5fcGxfcnQgLl9sb193ZV9kcyB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHg7IH0gfVxyXG5cclxuLm15LXBsYSB7XHJcbiAgcGFkZGluZzogNDBweCAwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC8xLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk7IH1cclxuICAubXktcGxhOjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAzMywgNzEsIDAuOSk7XHJcbiAgICB6LWluZGV4OiAxOyB9XHJcbiAgLm15LXBsYSAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyOyB9XHJcbiAgICAubXktcGxhIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IDBweDsgfSAqL1xyXG5cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cclxuIl19 */");

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slider .carousel-inner .carousel-item {\n  background-color: #0c2d504d;\n}\n\n#carouselExampleFade {\n  height: 650px;\n}\n\n.button-01 {\n  cursor: pointer;\n}\n\n.btn_continue {\n  background: #0c2d504d !important;\n}\n\n.btn_continue:hover {\n  background: #0c2d50a6 !important;\n}\n\nimg.d-block {\n  width: 100% !important;\n}\n\n@media screen and (max-width: 991.98px) {\n  #carouselExampleFade {\n    height: 440px;\n  }\n}\n\n.carousel-caption {\n  margin-top: -70px;\n}\n\n@media screen and (max-width: 700px) {\n  .slider .carousel-inner .carousel-item .carousel-caption p {\n    display: none !important;\n  }\n\n  #carouselExampleFade {\n    height: 350px;\n  }\n\n  .carousel-control-prev,\n.carousel-control-next {\n    margin-top: -60px;\n  }\n}\n\n@media screen and (max-width: 460px) {\n  .carousel-control-prev,\n.carousel-control-next {\n    margin-top: -45px;\n  }\n\n  .slider .carousel-inner .carousel-item .carousel-caption .button-01 ul li:nth-child(1) {\n    width: 150px;\n    padding: 5px;\n  }\n\n  #carouselExampleFade {\n    height: 300px;\n  }\n}\n\nimg.d-blog {\n  width: 100% !important;\n}\n\n.noData {\n  background-color: #0c2d50a6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9FOlxcUHJvamV0c1xcV2ViY3VwXFxjb2RlX2Zyb250XFx3ZWJjdXBGcm9udC9zcmNcXGFwcFxcbGF5b3V0XFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSwyQkFIWTtBQ0VkOztBRElBO0VBQ0UsYUFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0NBQUE7QUNERjs7QURHQTtFQUNFLGdDQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQTtBQ0FGOztBREdBO0VBQ0U7SUFDRSxhQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFLGlCQUFBO0FDREY7O0FESUE7RUFDRTtJQUNFLHdCQUFBO0VDREY7O0VESUE7SUFDRSxhQUFBO0VDREY7O0VESUE7O0lBRUUsaUJBQUE7RUNERjtBQUNGOztBRElBO0VBQ0U7O0lBRUUsaUJBQUE7RUNGRjs7RURLQTtJQU9FLFlBQUE7SUFDQSxZQUFBO0VDUkY7O0VEV0E7SUFDRSxhQUFBO0VDUkY7QUFDRjs7QURXQTtFQUNFLHNCQUFBO0FDVEY7O0FEWUE7RUFDRSwyQkE1RWE7QUNtRWYiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmaXJzdC1jb2xvcjogIzBjMmQ1MDRkO1xyXG4kc2Vjb25kLWNvbG9yOiAjMGMyZDUwYTY7XHJcbi5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlyc3QtY29sb3I7XHJcbn1cclxuXHJcbiNjYXJvdXNlbEV4YW1wbGVGYWRlIHtcclxuICBoZWlnaHQ6IDY1MHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLTAxIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG5fY29udGludWUge1xyXG4gIGJhY2tncm91bmQ6ICRmaXJzdC1jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcbi5idG5fY29udGludWU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICRzZWNvbmQtY29sb3IgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW1nLmQtYmxvY2sge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgI2Nhcm91c2VsRXhhbXBsZUZhZGUge1xyXG4gICAgaGVpZ2h0OiA0NDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAtNzBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAuc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNjYXJvdXNlbEV4YW1wbGVGYWRlIHtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxyXG4gIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xyXG4gIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXHJcbiAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDVweDtcclxuICB9XHJcblxyXG4gIC5zbGlkZXJcclxuICAgIC5jYXJvdXNlbC1pbm5lclxyXG4gICAgLmNhcm91c2VsLWl0ZW1cclxuICAgIC5jYXJvdXNlbC1jYXB0aW9uXHJcbiAgICAuYnV0dG9uLTAxXHJcbiAgICB1bFxyXG4gICAgbGk6bnRoLWNoaWxkKDEpIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gICNjYXJvdXNlbEV4YW1wbGVGYWRlIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pbWcuZC1ibG9nIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm9EYXRhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kLWNvbG9yO1xyXG59XHJcbiIsIi5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmQ1MDRkO1xufVxuXG4jY2Fyb3VzZWxFeGFtcGxlRmFkZSB7XG4gIGhlaWdodDogNjUwcHg7XG59XG5cbi5idXR0b24tMDEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG5fY29udGludWUge1xuICBiYWNrZ3JvdW5kOiAjMGMyZDUwNGQgIWltcG9ydGFudDtcbn1cblxuLmJ0bl9jb250aW51ZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwYzJkNTBhNiAhaW1wb3J0YW50O1xufVxuXG5pbWcuZC1ibG9jayB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gICNjYXJvdXNlbEV4YW1wbGVGYWRlIHtcbiAgICBoZWlnaHQ6IDQ0MHB4O1xuICB9XG59XG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIG1hcmdpbi10b3A6IC03MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjY2Fyb3VzZWxFeGFtcGxlRmFkZSB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxuXG4gIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgLmNhcm91c2VsLWNvbnRyb2wtcHJldixcbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIG1hcmdpbi10b3A6IC00NXB4O1xuICB9XG5cbiAgLnNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gLmJ1dHRvbi0wMSB1bCBsaTpudGgtY2hpbGQoMSkge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuICAjY2Fyb3VzZWxFeGFtcGxlRmFkZSB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxufVxuaW1nLmQtYmxvZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5ub0RhdGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwYTY7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_news_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/news/news.service */ "./src/app/services/news/news.service.ts");
/* harmony import */ var _services_Header_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/Header/header.service */ "./src/app/services/Header/header.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let HeaderComponent = class HeaderComponent {
    constructor(headerService, newsService, router, loadSrv, _snackBar) {
        this.headerService = headerService;
        this.newsService = newsService;
        this.router = router;
        this.loadSrv = loadSrv;
        this._snackBar = _snackBar;
        this.img1 = "./../../../assets/images/slider/1.jpg";
        this.img2 = "./../../../assets/images/slider/2.jpg";
        this.img3 = "./../../../assets/images/slider/3.jpg";
        this.logo = "./../../../assets/images/ENI/logo-ENl.png";
        this.news = [];
        this.menu = null;
        this.langues = [
            {
                libelle: "Fr",
                flag: "./../../../assets/images/icones/france.png"
            },
            {
                libelle: "Ang",
                flag: "./../../../assets/images/icones/royaume-uni.png"
            }
        ];
        this.defaultImg = "./../../../assets/images/slider/gasy1.png";
        this.image1 = "./../../../assets/images/course/1.jpg";
        this.image2 = "./../../../assets/images/course/2.jpg";
        this.image3 = "./../../../assets/images/course/3.jpg";
    }
    ngOnInit() {
        this.menu = this.headerService.menu;
        // this.news = this.newsService.news.slice(0, 3);
        this.getTopNews();
    }
    seeNews(titre, date, posteur) {
        let str = "/evenements/nouvelles/" + titre + "/" + date + "/" + posteur + "";
        console.log(str);
        this.router.navigateByUrl(str);
    }
    getTopNews() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadSrv.load(true);
            yield this.newsService.getTopNouvelle().subscribe((data) => {
                let list = data.data;
                list.forEach(element => {
                    if (element.image == null) {
                        element.image = this.defaultImg;
                    }
                    if (element.galerie == null) {
                        element.galerie = [];
                        for (let index = 0; index < 3; index++) {
                            let ind = index + 1;
                            let url = "./../../../assets/images/course/" + ind + ".jpg";
                            element.galerie.push(url);
                        }
                    }
                    let isO = true;
                    let isN = false;
                    element.date_creation = this.changeDate(element.date_creation, isO);
                    element.date_mise_jour = this.changeDate(element.date_mise_jour, isN);
                });
                console.log(list);
                this.news = list;
            }, (err) => {
                console.log(err);
                this._snackBar.open(`Serveur inacessible`, "", {
                    duration: 1500,
                    horizontalPosition: "right",
                    verticalPosition: "bottom",
                    panelClass: ["error_snackbar"]
                });
            });
            this.loadSrv.load(false);
        });
    }
    changeDate(data, isUpdate) {
        let annee = data.substring(0, 4);
        let mois = data.substring(5, 7);
        let jour = data.substring(8, 10);
        let heure = data.substring(11, 16);
        if (isUpdate) {
            var newDate = jour + " " + this.voirMois(mois) + " " + annee + " à " + heure;
        }
        else {
            var newDate = jour + " " + this.voirMois(mois) + " " + annee;
        }
        return newDate;
    }
    voirMois(mois) {
        let newMois = "";
        switch (mois) {
            case "01": {
                newMois = "Janvier";
                break;
            }
            case "02": {
                newMois = "Février";
                break;
            }
            case "03": {
                newMois = "Mars";
                break;
            }
            case "04": {
                newMois = "Avril";
                break;
            }
            case "05": {
                newMois = "Mai";
                break;
            }
            case "06": {
                newMois = "Juin";
                break;
            }
            case "07": {
                newMois = "Juillet";
                break;
            }
            case "08": {
                newMois = "Août";
                break;
            }
            case "09": {
                newMois = "Septembre";
                break;
            }
            case "10": {
                newMois = "Octobre";
                break;
            }
            case "11": {
                newMois = "Novembre";
                break;
            }
            case "12": {
                newMois = "Décembre";
                break;
            }
        }
        return newMois;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_Header_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"] },
    { type: _services_news_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-style.css */ "./src/app/layout/header/header-style.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/header/main-header/main-header.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layout/header/main-header/main-header.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#with-slide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9tYWluLWhlYWRlci9FOlxcUHJvamV0c1xcV2ViY3VwXFxjb2RlX2Zyb250XFx3ZWJjdXBGcm9udC9zcmNcXGFwcFxcbGF5b3V0XFxoZWFkZXJcXG1haW4taGVhZGVyXFxtYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2hlYWRlci9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvbWFpbi1oZWFkZXIvbWFpbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2l0aC1zbGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iLCIjd2l0aC1zbGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/header/main-header/main-header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/header/main-header/main-header.component.ts ***!
  \********************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainHeaderComponent = class MainHeaderComponent {
    constructor() { }
    ngOnInit() {
        window.onscroll = function () {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                // document.getElementById("no-slide").style.display = "none";
                document.getElementById("with-slide").style.display = "block";
                document.getElementById("no-slide").className = "fadeUpHeader";
                document.getElementById("with-slide").className = "slideUpHeader";
            }
            else {
                // document.getElementById("no-slide").style.display = "block";
                document.getElementById("with-slide").style.display = "none";
                document.getElementById("no-slide").className = "slideUpHeader";
                document.getElementById("with-slide").className = "fadeUpHeader";
            }
        };
    }
};
MainHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/main-header/main-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-header.component.scss */ "./src/app/layout/header/main-header/main-header.component.scss")).default]
    })
], MainHeaderComponent);



/***/ }),

/***/ "./src/app/layout/header/top-header-slide/tmp.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/header/top-header-slide/tmp.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mobile {\n  height: 100vh;\n  width: 40vh;\n  background: #0c2d50;\n  position: absolute;\n  z-index: 400;\n  margin: 0px;\n  -o-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.048);\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.048);\n  overflow-y: auto !important;\n}\n\n#mobile::-webkit-scrollbar {\n  width: 1px;\n  background-color: transparent;\n}\n\n#top-content {\n  -o-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n#nav {\n  position: absolute;\n  z-index: 10;\n  list-style-type: none;\n  margin: 15px 0 0 20px;\n  padding: 0;\n  overflow: hidden;\n}\n\n#nav li {\n  height: 35px;\n  width: 0;\n  margin: 30px 0;\n  background: #eae8e5;\n  font-weight: 500;\n  padding: 5px;\n  transition: all 0.4s ease-in;\n}\n\n.navigation #nav li {\n  width: 200px;\n  margin-left: 0;\n}\n\n.demo1.navigation #mobileBodyContent {\n  -khtml-transform: scale(0.85);\n  transform: scale(0.85);\n  margin-left: 260px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyLXNsaWRlL0U6XFxQcm9qZXRzXFxXZWJjdXBcXGNvZGVfZnJvbnRcXHdlYmN1cEZyb250L3NyY1xcYXBwXFxsYXlvdXRcXGhlYWRlclxcdG9wLWhlYWRlci1zbGlkZVxcdG1wLnNjc3MiLCJzcmMvYXBwL2xheW91dC9oZWFkZXIvdG9wLWhlYWRlci1zbGlkZS90bXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnREE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQWxDQSxvREFtQ29CO0VBbENwQixpREFrQ29CO0VBQ3BCLDJCQUFBO0FDM0NGOztBRDhDQTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtBQzNDRjs7QUQ4Q0E7RUE1Q0Usa0RBNkNvQjtFQTVDcEIsK0NBNENvQjtFQUNwQixnQkFBQTtBQ3ZDRjs7QUQwQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDdkNGOztBRHdDRTtFQUNFLFlBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBN0VGLDRCQThFc0I7QUNsQ3hCOztBRGdERTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDN0NKOztBRGtERTtFQTdGQSw2QkFBQTtFQUVBLHNCQUFBO0VBNkZFLGtCQUFBO0FDM0NKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyLXNsaWRlL3RtcC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHRyYW5zaXRpb24oJHBhcmFtcykge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHBhcmFtcztcclxuICAtbW96LXRyYW5zaXRpb246ICRwYXJhbXM7XHJcbiAgLWtodG1sLXRyYW5zaXRpb246ICRwYXJhbXM7XHJcbiAgLW8tdHJhbnNpdGlvbjogJHBhcmFtcztcclxuICB0cmFuc2l0aW9uOiAkcGFyYW1zO1xyXG59XHJcblxyXG5AbWl4aW4gc2NhbGUoJHBhcmFtcykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkcGFyYW1zKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoJHBhcmFtcyk7XHJcbiAgLWtodG1sLXRyYW5zZm9ybTogc2NhbGUoJHBhcmFtcyk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkcGFyYW1zKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKCRwYXJhbXMpO1xyXG59XHJcblxyXG5AbWl4aW4gYm94LXNoYWRvdygkcGFyYW1zKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcGFyYW1zO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJHBhcmFtcztcclxuICAta2h0bWwtYm94LXNoYWRvdzogJHBhcmFtcztcclxuICAtby1ib3gtc2hhZG93OiAkcGFyYW1zO1xyXG4gIGJveC1zaGFkb3c6ICRwYXJhbXM7XHJcbn1cclxuXHJcbkBtaXhpbiByb3RhdGUoJHBhcmFtcykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJHBhcmFtcyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkcGFyYW1zKTtcclxuICAta2h0bWwtdHJhbnNmb3JtOiByb3RhdGUoJHBhcmFtcyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJHBhcmFtcyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoJHBhcmFtcyk7XHJcbn1cclxuXHJcbkBtaXhpbiBvcGFjaXR5KCRvcGFjaXR5KSB7XHJcbiAgLXdlYmtpdC1vcGFjaXR5OiAkb3BhY2l0eTtcclxuICAtbW96LW9wYWNpdHk6ICRvcGFjaXR5O1xyXG4gIC1raHRtbC1vcGFjaXR5OiAkb3BhY2l0eTtcclxuICAtby1vcGFjaXR5OiAkb3BhY2l0eTtcclxuICBvcGFjaXR5OiAkb3BhY2l0eTtcclxufVxyXG5cclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgLWtodG1sLWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG59XHJcblxyXG4jbW9iaWxlIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiA0MHZoO1xyXG4gIGJhY2tncm91bmQ6ICMwYzJkNTA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDQwMDtcclxuICBtYXJnaW46IDBweDtcclxuICBAaW5jbHVkZSBib3gtc2hhZG93KDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA0OCkpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuI21vYmlsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiN0b3AtY29udGVudCB7XHJcbiAgQGluY2x1ZGUgYm94LXNoYWRvdygwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI25hdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDE1cHggMCAwIDIwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGxpIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWFlOGU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuNHMgZWFzZS1pbik7XHJcbiAgICAvLyAmICsgbGkge1xyXG4gICAgLy8gICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIC8vICAgJiArIGxpIHtcclxuICAgIC8vICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIC8vICAgICAmICsgbGkge1xyXG4gICAgLy8gICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiB7XHJcbiAgI25hdiBsaSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5kZW1vMS5uYXZpZ2F0aW9uIHtcclxuICAjbW9iaWxlQm9keUNvbnRlbnQge1xyXG4gICAgQGluY2x1ZGUgc2NhbGUoMC44NSk7XHJcbiAgICBtYXJnaW4tbGVmdDogMjYwcHg7XHJcbiAgfVxyXG59XHJcbiIsIiNtb2JpbGUge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogNDB2aDtcbiAgYmFja2dyb3VuZDogIzBjMmQ1MDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA0MDA7XG4gIG1hcmdpbjogMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA0OCk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KTtcbiAgLWtodG1sLWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA0OCk7XG4gIC1vLWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA0OCk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA0OCk7XG4gIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuI21vYmlsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI3RvcC1jb250ZW50IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLWtodG1sLWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtby1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNuYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMTVweCAwIDAgMjBweDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNuYXYgbGkge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAwO1xuICBtYXJnaW46IDMwcHggMDtcbiAgYmFja2dyb3VuZDogI2VhZThlNTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogNXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcbiAgLWtodG1sLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XG59XG5cbi5uYXZpZ2F0aW9uICNuYXYgbGkge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uZGVtbzEubmF2aWdhdGlvbiAjbW9iaWxlQm9keUNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcbiAgLWtodG1sLXRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gIG1hcmdpbi1sZWZ0OiAyNjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/header/top-header-slide/top-header-slide.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/layout/header/top-header-slide/top-header-slide.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mimi-main {\n  position: fixed;\n  z-index: 500;\n  width: 100%;\n  top: 0px;\n}\n\n.mobile-univ-eni {\n  display: none;\n}\n\n.top-content {\n  display: flex;\n  flex-direction: column;\n  height: 170px;\n  background: transparent;\n}\n\n.flag-mobile {\n  display: none;\n}\n\n.first-content {\n  padding-top: 10px;\n  display: flex;\n  flex-direction: row;\n  height: 120px;\n  background-color: #0c2d50d9;\n  justify-content: space-between;\n  text-align: center;\n}\n\n.second-content {\n  max-width: 100%;\n  display: flex;\n  flex-direction: row;\n  height: 50px;\n  background-color: #002247ef;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.second-content .my-menu:last-child {\n  border-right: none !important;\n}\n\n.second-content .my-menu {\n  border-right: 3px solid #0c2d50;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  transition: all 0.3s;\n  white-space: nowrap;\n}\n\n.second-content .my-menu:hover {\n  background-color: #117abe;\n}\n\n.second-content .my-menu a {\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0px;\n  font-size: 14px;\n}\n\n.second-content .my-menu a:hover {\n  text-decoration: none;\n}\n\n.content-logo {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  color: white;\n}\n\n@media screen and (max-width: 920px) {\n  .content-logo-uf {\n    top: 5px;\n    left: 5px;\n  }\n\n  #warped,\n#warped1 {\n    display: none !important;\n  }\n\n  #flags {\n    margin-right: 10px;\n  }\n}\n\n.content-action-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-top: 35px;\n  padding-right: 0px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  right: 20px;\n}\n\n.content-action-header .menu-action .p {\n  color: white;\n  margin-right: 30px;\n  cursor: pointer;\n  letter-spacing: 1px;\n  padding: 10px;\n  font-weight: normal;\n  letter-spacing: 1px;\n  width: 160px;\n  border-radius: 10px;\n}\n\n#flags {\n  width: 30px;\n  height: 30px;\n}\n\n.content-action-header .menu-action .p #img-profile {\n  height: 22px;\n  width: 22px;\n  margin-right: 0px;\n}\n\n.content-action-header .menu-action .p span {\n  position: relative;\n  top: 3px;\n  left: 5px;\n}\n\n.content-logo-uf {\n  position: absolute;\n  top: 10px;\n  left: 15px;\n  cursor: pointer;\n}\n\n#logo-uf {\n  height: 90px;\n}\n\n#logo-eni {\n  height: 100px;\n}\n\n.my-menu-2 {\n  display: none;\n  padding: 7px;\n  margin: 0px;\n  height: 50px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n\n.my-menu-2 .bar {\n  margin-top: 8px;\n  margin-bottom: 8px;\n  width: 30px;\n  height: 3px;\n  background-color: white;\n}\n\n.univ-fianar {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: 5px;\n}\n\n.univ-fianar #uf {\n  height: 30px;\n}\n\n.univ-fianar p {\n  margin-left: 20px;\n  margin-right: 20px;\n  font-size: 20px;\n  font-variant: petite-caps;\n}\n\n.univ-eni {\n  font-size: 30px;\n  letter-spacing: 3px;\n  word-spacing: 10px;\n  font-variant: petite-caps;\n  font-weight: 500;\n  color: #ffffff;\n}\n\n@media screen and (max-width: 1100px) {\n  .content-action-header .menu-action .p span {\n    display: none;\n  }\n\n  .content-action-header .menu-action .p {\n    margin-right: 30px;\n    padding: 8px;\n    font-weight: normal;\n    letter-spacing: 1px;\n    width: 70px;\n  }\n}\n\n@media screen and (max-width: 650px) {\n  .univ-eni {\n    font-size: 25px;\n    letter-spacing: 0px;\n    word-spacing: 5px;\n    font-variant: petite-caps;\n  }\n}\n\n@media screen and (max-width: 540px) {\n  .univ-fianar p {\n    margin-left: 10px;\n    margin-right: 10px;\n    font-size: 15px;\n    font-variant: petite-caps;\n  }\n\n  .univ-fianar #uf {\n    height: 25px;\n  }\n}\n\n@media (max-width: 950px) and (min-width: 800px) {\n  .content-action-header {\n    right: 0px;\n  }\n\n  .menu-action:first-child {\n    margin-right: -15px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .content-logo-uf {\n    position: absolute;\n    top: 10px;\n    left: 0px;\n    right: 0px;\n    cursor: pointer;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  #logo-uf {\n    padding-left: 5px;\n  }\n\n  .content-action-header .menu-action .p {\n    display: none;\n  }\n\n  #flags {\n    margin-top: 0%;\n    width: 50px;\n    height: 50px;\n    padding: 6px;\n    cursor: pointer;\n  }\n\n  .second-content {\n    justify-content: flex-end;\n  }\n\n  .my-menu-2 {\n    display: block;\n  }\n\n  .flag-mobile {\n    display: block;\n  }\n\n  .menu-action {\n    display: none;\n  }\n\n  .my-menu {\n    display: none !important;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .univ-eni {\n    display: none;\n  }\n\n  .mobile-univ-eni {\n    display: block;\n    font-size: 15px;\n    letter-spacing: 3px;\n    word-spacing: 10px;\n    font-variant: petite-caps;\n    font-weight: 500;\n    color: #ffffff;\n    line-height: 8px;\n  }\n}\n\n@media screen and (max-width: 380px) {\n  img#logo-uf {\n    height: 50px;\n  }\n\n  img#logo-eni {\n    height: 60px;\n  }\n\n  #warped1,\n#warped2 {\n    display: none !important;\n  }\n\n  .content-logo-uf {\n    position: absolute;\n    top: 3px;\n  }\n\n  .top-content {\n    height: 150px;\n  }\n\n  .first-content {\n    height: 100px;\n  }\n}\n\n@media screen and (max-width: 310px) {\n  img#logo-uf {\n    height: 30px;\n  }\n\n  img#logo-eni {\n    height: 40px;\n  }\n}\n\n#external-content {\n  display: none;\n  transition: all 0.3s;\n}\n\n#menu-colapse {\n  border-radius: 8px;\n  padding: 10px;\n}\n\nli#login-mobile {\n  background: #002247 !important;\n  height: 60px !important;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\nli#login-mobile span {\n  font-weight: normal;\n  position: relative;\n  top: 3px;\n  font-size: 20px;\n  color: white;\n}\n\nimg#img-profile-mobile {\n  height: 25px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyLXNsaWRlL0U6XFxQcm9qZXRzXFxXZWJjdXBcXGNvZGVfZnJvbnRcXHdlYmN1cEZyb250L3NyY1xcYXBwXFxsYXlvdXRcXGhlYWRlclxcdG9wLWhlYWRlci1zbGlkZVxcdG9wLWhlYWRlci1zbGlkZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyLXNsaWRlL3RvcC1oZWFkZXItc2xpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7QUNIRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLDZCQUFBO0FDSEY7O0FETUE7RUFDRSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLHlCQUFBO0FDSEY7O0FETUE7RUFDRSxZQWpFWTtFQWtFWixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQXZGWTtBQ29GZDs7QURNQTtFQUNFO0lBQ0UsUUFBQTtJQUNBLFNBQUE7RUNIRjs7RURNQTs7SUFFRSx3QkFBQTtFQ0hGOztFRE1BO0lBQ0Usa0JBQUE7RUNIRjtBQUNGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0pGOztBRE9BO0VBQ0UsWUF6SFk7RUEwSFosa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDSkY7O0FET0E7RUFDRSxZQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQWxMWTtBQzhLZDs7QURPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7QUNKRjs7QURPQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNKRjs7QURPQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNKRjs7QURPQTtFQUNFO0lBQ0UsYUFBQTtFQ0pGOztFRE9BO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7RUNKRjtBQUNGOztBRE9BO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0VDTEY7QUFDRjs7QURRQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtFQ05GOztFRFNBO0lBQ0UsWUFBQTtFQ05GO0FBQ0Y7O0FEU0E7RUFDRTtJQUNFLFVBQUE7RUNQRjs7RURVQTtJQUNFLG1CQUFBO0VDUEY7QUFDRjs7QURVQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0VDUkY7O0VEV0E7SUFDRSxpQkFBQTtFQ1JGOztFRFdBO0lBQ0UsYUFBQTtFQ1JGOztFRFdBO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUNSRjs7RURXQTtJQUNFLHlCQUFBO0VDUkY7O0VEV0E7SUFDRSxjQUFBO0VDUkY7O0VEV0E7SUFDRSxjQUFBO0VDUkY7O0VEV0E7SUFDRSxhQUFBO0VDUkY7O0VEV0E7SUFDRSx3QkFBQTtFQ1JGO0FBQ0Y7O0FEV0E7RUFDRTtJQUNFLGFBQUE7RUNURjs7RURZQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUNURjtBQUNGOztBRFlBO0VBQ0U7SUFDRSxZQUFBO0VDVkY7O0VEYUE7SUFDRSxZQUFBO0VDVkY7O0VEYUE7O0lBRUUsd0JBQUE7RUNWRjs7RURhQTtJQUNFLGtCQUFBO0lBQ0EsUUFBQTtFQ1ZGOztFRGFBO0lBQ0UsYUFBQTtFQ1ZGOztFRGFBO0lBQ0UsYUFBQTtFQ1ZGO0FBQ0Y7O0FEYUE7RUFDRTtJQUNFLFlBQUE7RUNYRjs7RURjQTtJQUNFLFlBQUE7RUNYRjtBQUNGOztBRGNBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FDWkY7O0FEZUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNaRjs7QURlQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDWkY7O0FEZUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxZQWpZWTtBQ3FYZDs7QURlQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyLXNsaWRlL3RvcC1oZWFkZXItc2xpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZmlyc3QtY29sb3I6ICMwYzJkNTA7XHJcbiRzZWNvbmQtY29sb3I6ICMwMDIyNDc7XHJcbiRjb2xvci13aGl0ZTogd2hpdGU7XHJcblxyXG4jbWltaS1tYWluIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogNTAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMHB4O1xyXG59XHJcblxyXG4ubW9iaWxlLXVuaXYtZW5pIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udG9wLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDE3MHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZmxhZy1tb2JpbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5maXJzdC1jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwZDk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY29uZC1jb250ZW50IHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMjQ3ZWY7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWNvbmQtY29udGVudCAubXktbWVudTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlY29uZC1jb250ZW50IC5teS1tZW51IHtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkZmlyc3QtY29sb3I7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnNlY29uZC1jb250ZW50IC5teS1tZW51OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE3YWJlO1xyXG59XHJcblxyXG4uc2Vjb25kLWNvbnRlbnQgLm15LW1lbnUgYSB7XHJcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNlY29uZC1jb250ZW50IC5teS1tZW51IGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRlbnQtbG9nbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyMHB4KSB7XHJcbiAgLmNvbnRlbnQtbG9nby11ZiB7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIGxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gICN3YXJwZWQsXHJcbiAgI3dhcnBlZDEge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI2ZsYWdzIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50LWFjdGlvbi1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCB7XHJcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiNmbGFncyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCAjaW1nLXByb2ZpbGUge1xyXG4gIGhlaWdodDogMjJweDtcclxuICB3aWR0aDogMjJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtYWN0aW9uLWhlYWRlciAubWVudS1hY3Rpb24gLnAgc3BhbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogM3B4O1xyXG4gIGxlZnQ6IDVweDtcclxufVxyXG5cclxuLmNvbnRlbnQtbG9nby11ZiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2xvZ28tdWYge1xyXG4gIGhlaWdodDogOTBweDtcclxufVxyXG5cclxuI2xvZ28tZW5pIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ubXktbWVudS0yIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBtYXJnaW46IDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubXktbWVudS0yIC5iYXIge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG59XHJcblxyXG4udW5pdi1maWFuYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi51bml2LWZpYW5hciAjdWYge1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLnVuaXYtZmlhbmFyIHAge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcclxufVxyXG5cclxuLnVuaXYtZW5pIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICB3b3JkLXNwYWNpbmc6IDEwcHg7XHJcbiAgZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAuY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCBzcGFuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAudW5pdi1lbmkge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIHdvcmQtc3BhY2luZzogNXB4O1xyXG4gICAgZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgLnVuaXYtZmlhbmFyIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xyXG4gIH1cclxuXHJcbiAgLnVuaXYtZmlhbmFyICN1ZiB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gIC5jb250ZW50LWFjdGlvbi1oZWFkZXIge1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICB9XHJcblxyXG4gIC5tZW51LWFjdGlvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuY29udGVudC1sb2dvLXVmIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgI2xvZ28tdWYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgI2ZsYWdzIHtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc2Vjb25kLWNvbnRlbnQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG4gIC5teS1tZW51LTIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuZmxhZy1tb2JpbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubWVudS1hY3Rpb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5teS1tZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLnVuaXYtZW5pIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLXVuaXYtZW5pIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIHdvcmQtc3BhY2luZzogMTBweDtcclxuICAgIGZvbnQtdmFyaWFudDogcGV0aXRlLWNhcHM7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcclxuICBpbWcjbG9nby11ZiB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICBpbWcjbG9nby1lbmkge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgI3dhcnBlZDEsXHJcbiAgI3dhcnBlZDIge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtbG9nby11ZiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDNweDtcclxuICB9XHJcblxyXG4gIC50b3AtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmZpcnN0LWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxMHB4KSB7XHJcbiAgaW1nI2xvZ28tdWYge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgaW1nI2xvZ28tZW5pIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbiNleHRlcm5hbC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jbWVudS1jb2xhcHNlIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxubGkjbG9naW4tbW9iaWxlIHtcclxuICBiYWNrZ3JvdW5kOiAkc2Vjb25kLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmxpI2xvZ2luLW1vYmlsZSBzcGFuIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDNweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxufVxyXG5cclxuaW1nI2ltZy1wcm9maWxlLW1vYmlsZSB7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4iLCIjbWltaS1tYWluIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA1MDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDBweDtcbn1cblxuLm1vYmlsZS11bml2LWVuaSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b3AtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTcwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZmxhZy1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmlyc3QtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwZDk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2Vjb25kLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjI0N2VmO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWNvbmQtY29udGVudCAubXktbWVudTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zZWNvbmQtY29udGVudCAubXktbWVudSB7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICMwYzJkNTA7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc2Vjb25kLWNvbnRlbnQgLm15LW1lbnU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE3YWJlO1xufVxuXG4uc2Vjb25kLWNvbnRlbnQgLm15LW1lbnUgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNlY29uZC1jb250ZW50IC5teS1tZW51IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250ZW50LWxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gIC5jb250ZW50LWxvZ28tdWYge1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgfVxuXG4gICN3YXJwZWQsXG4jd2FycGVkMSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2ZsYWdzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbi5jb250ZW50LWFjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nLXRvcDogMzVweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgd2lkdGg6IDE2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jZmxhZ3Mge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCAjaW1nLXByb2ZpbGUge1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmNvbnRlbnQtYWN0aW9uLWhlYWRlciAubWVudS1hY3Rpb24gLnAgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDVweDtcbn1cblxuLmNvbnRlbnQtbG9nby11ZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNsb2dvLXVmIHtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4jbG9nby1lbmkge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubXktbWVudS0yIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogN3B4O1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXktbWVudS0yIC5iYXIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnVuaXYtZmlhbmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnVuaXYtZmlhbmFyICN1ZiB7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnVuaXYtZmlhbmFyIHAge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtdmFyaWFudDogcGV0aXRlLWNhcHM7XG59XG5cbi51bml2LWVuaSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgd29yZC1zcGFjaW5nOiAxMHB4O1xuICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC51bml2LWVuaSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgd29yZC1zcGFjaW5nOiA1cHg7XG4gICAgZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgLnVuaXYtZmlhbmFyIHAge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcbiAgfVxuXG4gIC51bml2LWZpYW5hciAjdWYge1xuICAgIGhlaWdodDogMjVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRlbnQtYWN0aW9uLWhlYWRlciB7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxuXG4gIC5tZW51LWFjdGlvbjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRlbnQtbG9nby11ZiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gICNsb2dvLXVmIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxuXG4gIC5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2ZsYWdzIHtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5zZWNvbmQtY29udGVudCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gIC5teS1tZW51LTIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmZsYWctbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5tZW51LWFjdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5teS1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC51bml2LWVuaSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tb2JpbGUtdW5pdi1lbmkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIHdvcmQtc3BhY2luZzogMTBweDtcbiAgICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDhweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgaW1nI2xvZ28tdWYge1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuXG4gIGltZyNsb2dvLWVuaSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG5cbiAgI3dhcnBlZDEsXG4jd2FycGVkMiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbnRlbnQtbG9nby11ZiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogM3B4O1xuICB9XG5cbiAgLnRvcC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG5cbiAgLmZpcnN0LWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxMHB4KSB7XG4gIGltZyNsb2dvLXVmIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cblxuICBpbWcjbG9nby1lbmkge1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxufVxuI2V4dGVybmFsLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuI21lbnUtY29sYXBzZSB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxubGkjbG9naW4tbW9iaWxlIHtcbiAgYmFja2dyb3VuZDogIzAwMjI0NyAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxubGkjbG9naW4tbW9iaWxlIHNwYW4ge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nI2ltZy1wcm9maWxlLW1vYmlsZSB7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/header/top-header-slide/top-header-slide.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/header/top-header-slide/top-header-slide.component.ts ***!
  \******************************************************************************/
/*! exports provided: TopHeaderSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopHeaderSlideComponent", function() { return TopHeaderSlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var _services_Header_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/Header/header.service */ "./src/app/services/Header/header.service.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









let TopHeaderSlideComponent = class TopHeaderSlideComponent {
    constructor(router, dialog, headerService, loadService) {
        this.router = router;
        this.dialog = dialog;
        this.headerService = headerService;
        this.loadService = loadService;
        this.langues = [
            {
                libelle: "Fr",
                flag: "./../../../../assets/images/icones/france.png"
            },
            {
                libelle: "Ang",
                flag: "./../../../../assets/images/icones/royaume-uni.png"
            }
        ];
        this.logo = "./../../../../assets/images/ENI/logo-ENl.png";
        this.logoUf = "./../../../../assets/images/ENI/uf-light.png";
        this.profile = "./../../../../assets/images/icones/profile.png";
        this.loadSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
        this.isLoading = false;
    }
    ngOnInit() {
        this.loadSubscription = this.loadService.loadSubject.subscribe((data) => {
            this.isLoading = data;
        });
        this.isLoading = this.loadService.isLoading;
        this.getMenu();
        this.initJs();
    }
    initJs() {
        jquery__WEBPACK_IMPORTED_MODULE_7__("#best-menu-mobile").on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_7__("#external-content").toggle();
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_7__("#mobile").toggleClass('navigation');
            }, 10);
        });
    }
    login() {
        const dialogRef = this.dialog.open(_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    getMenu() {
        this.menu = this.headerService.menu;
    }
    home() {
        this.router.navigateByUrl("/");
    }
};
TopHeaderSlideComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _services_Header_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"] },
    { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] }
];
TopHeaderSlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-top-header-slide',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-header-slide.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/top-header-slide/top-header-slide.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-header-slide.component.scss */ "./src/app/layout/header/top-header-slide/top-header-slide.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tmp.scss */ "./src/app/layout/header/top-header-slide/tmp.scss")).default]
    })
], TopHeaderSlideComponent);



/***/ }),

/***/ "./src/app/layout/header/top-header/tmp.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/header/top-header/tmp.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mobile-main {\n  height: 500px;\n  width: 40vh;\n  background: #0c2d50;\n  position: absolute;\n  z-index: 400;\n  margin: 0px;\n  -o-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);\n  overflow-y: auto;\n}\n\n#mobile-main::-webkit-scrollbar {\n  width: 1px;\n  background: transparent;\n}\n\n#top-content {\n  -o-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n#nav {\n  position: absolute;\n  z-index: 10;\n  list-style-type: none;\n  margin: 15px 0 0 20px;\n  padding: 0;\n  overflow: hidden;\n}\n\n#nav li {\n  height: 35px;\n  width: 0;\n  margin: 30px 0;\n  background: #eae8e5;\n  font-weight: 500;\n  padding: 5px;\n  transition: all 0.4s ease-in;\n}\n\n.navigation #nav li {\n  width: 200px;\n  margin-left: 0;\n}\n\n.demo2.navigation #mobileBodyContent {\n  -khtml-transform: scale(0.85);\n  transform: scale(0.85);\n  margin-left: 260px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyL0U6XFxQcm9qZXRzXFxXZWJjdXBcXGNvZGVfZnJvbnRcXHdlYmN1cEZyb250L3NyY1xcYXBwXFxsYXlvdXRcXGhlYWRlclxcdG9wLWhlYWRlclxcdG1wLnNjc3MiLCJzcmMvYXBwL2xheW91dC9oZWFkZXIvdG9wLWhlYWRlci90bXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnREE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQWxDQSxrREFtQ29CO0VBbENwQiwrQ0FrQ29CO0VBQ3BCLGdCQUFBO0FDM0NGOztBRDhDQTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQzNDRjs7QUQ4Q0E7RUE1Q0Usa0RBNkNvQjtFQTVDcEIsK0NBNENvQjtFQUNwQixnQkFBQTtBQ3ZDRjs7QUQwQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDdkNGOztBRHdDRTtFQUNFLFlBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBN0VGLDRCQThFc0I7QUNsQ3hCOztBRGdERTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDN0NKOztBRGtERTtFQTdGQSw2QkFBQTtFQUVBLHNCQUFBO0VBNkZFLGtCQUFBO0FDM0NKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyL3RtcC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHRyYW5zaXRpb24oJHBhcmFtcykge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHBhcmFtcztcclxuICAtbW96LXRyYW5zaXRpb246ICRwYXJhbXM7XHJcbiAgLWtodG1sLXRyYW5zaXRpb246ICRwYXJhbXM7XHJcbiAgLW8tdHJhbnNpdGlvbjogJHBhcmFtcztcclxuICB0cmFuc2l0aW9uOiAkcGFyYW1zO1xyXG59XHJcblxyXG5AbWl4aW4gc2NhbGUoJHBhcmFtcykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkcGFyYW1zKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoJHBhcmFtcyk7XHJcbiAgLWtodG1sLXRyYW5zZm9ybTogc2NhbGUoJHBhcmFtcyk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkcGFyYW1zKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKCRwYXJhbXMpO1xyXG59XHJcblxyXG5AbWl4aW4gYm94LXNoYWRvdygkcGFyYW1zKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcGFyYW1zO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJHBhcmFtcztcclxuICAta2h0bWwtYm94LXNoYWRvdzogJHBhcmFtcztcclxuICAtby1ib3gtc2hhZG93OiAkcGFyYW1zO1xyXG4gIGJveC1zaGFkb3c6ICRwYXJhbXM7XHJcbn1cclxuXHJcbkBtaXhpbiByb3RhdGUoJHBhcmFtcykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJHBhcmFtcyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkcGFyYW1zKTtcclxuICAta2h0bWwtdHJhbnNmb3JtOiByb3RhdGUoJHBhcmFtcyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJHBhcmFtcyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoJHBhcmFtcyk7XHJcbn1cclxuXHJcbkBtaXhpbiBvcGFjaXR5KCRvcGFjaXR5KSB7XHJcbiAgLXdlYmtpdC1vcGFjaXR5OiAkb3BhY2l0eTtcclxuICAtbW96LW9wYWNpdHk6ICRvcGFjaXR5O1xyXG4gIC1raHRtbC1vcGFjaXR5OiAkb3BhY2l0eTtcclxuICAtby1vcGFjaXR5OiAkb3BhY2l0eTtcclxuICBvcGFjaXR5OiAkb3BhY2l0eTtcclxufVxyXG5cclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgLWtodG1sLWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG59XHJcblxyXG4jbW9iaWxlLW1haW4ge1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgd2lkdGg6IDQwdmg7XHJcbiAgYmFja2dyb3VuZDogIzBjMmQ1MDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogNDAwO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbiNtb2JpbGUtbWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiN0b3AtY29udGVudCB7XHJcbiAgQGluY2x1ZGUgYm94LXNoYWRvdygwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI25hdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDE1cHggMCAwIDIwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGxpIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWFlOGU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuNHMgZWFzZS1pbik7XHJcbiAgICAvLyAmICsgbGkge1xyXG4gICAgLy8gICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIC8vICAgJiArIGxpIHtcclxuICAgIC8vICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIC8vICAgICAmICsgbGkge1xyXG4gICAgLy8gICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiB7XHJcbiAgI25hdiBsaSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5kZW1vMi5uYXZpZ2F0aW9uIHtcclxuICAjbW9iaWxlQm9keUNvbnRlbnQge1xyXG4gICAgQGluY2x1ZGUgc2NhbGUoMC44NSk7XHJcbiAgICBtYXJnaW4tbGVmdDogMjYwcHg7XHJcbiAgfVxyXG59XHJcbiIsIiNtb2JpbGUtbWFpbiB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA0MHZoO1xuICBiYWNrZ3JvdW5kOiAjMGMyZDUwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQwMDtcbiAgbWFyZ2luOiAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1raHRtbC1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW8tYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4jbW9iaWxlLW1haW46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbiN0b3AtY29udGVudCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1raHRtbC1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW8tYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDE1cHggMCAwIDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jbmF2IGxpIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMDtcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIGJhY2tncm91bmQ6ICNlYWU4ZTU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XG4gIC1raHRtbC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xufVxuXG4ubmF2aWdhdGlvbiAjbmF2IGxpIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmRlbW8yLm5hdmlnYXRpb24gI21vYmlsZUJvZHlDb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gIC1raHRtbC10cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICBtYXJnaW4tbGVmdDogMjYwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/header/top-header/top-header.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/layout/header/top-header/top-header.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-content {\n  display: flex;\n  flex-direction: column;\n  height: 220px;\n  background: transparent;\n}\n\n.flag-mobile {\n  display: none;\n}\n\n.first-content {\n  padding-top: 10px;\n  display: flex;\n  flex-direction: row;\n  height: 170px;\n  background-color: #0c2d50;\n  justify-content: space-between;\n  text-align: center;\n}\n\n.second-content {\n  max-width: 100%;\n  display: flex;\n  flex-direction: row;\n  height: 50px;\n  background-color: #002247;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.second-content .my-menu:last-child {\n  border-right: none !important;\n}\n\n.second-content .my-menu {\n  border-right: 3px solid #0c2d50;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  transition: all 0.3s;\n  white-space: nowrap;\n}\n\n.second-content .my-menu:hover {\n  background-color: #117abe;\n}\n\n.second-content .my-menu a {\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0px;\n  font-size: 14px;\n}\n\n.second-content .my-menu a:hover {\n  text-decoration: none;\n}\n\n.content-logo {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  color: white;\n}\n\n#logo-eni {\n  width: 150px;\n}\n\n@media screen and (max-width: 920px) {\n  .content-logo-uf {\n    top: 5px;\n    left: 5px;\n  }\n\n  #logo-eni {\n    width: 70px;\n  }\n\n  #warped,\n#warped1 {\n    display: none !important;\n  }\n\n  #flags {\n    margin-right: 10px;\n  }\n}\n\n.content-action-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  text-align: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-top: 3%;\n  padding-right: 0px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  right: 20px;\n  align-items: center;\n}\n\n.content-action-header .menu-action .p {\n  color: white;\n  margin-right: 30px;\n  cursor: pointer;\n  letter-spacing: 1px;\n  padding: 10px;\n  font-weight: normal;\n  letter-spacing: 1px;\n  width: 160px;\n  border-radius: 10px;\n}\n\n#flags {\n  width: 30px;\n  height: 30px;\n}\n\n.content-action-header .menu-action .p #img-profile {\n  height: 22px;\n  width: 22px;\n  margin-right: 0px;\n}\n\n.content-action-header .menu-action .p span {\n  position: relative;\n  top: 3px;\n  left: 5px;\n}\n\n.content-logo-uf {\n  position: absolute;\n  top: 10px;\n  left: 15px;\n  cursor: pointer;\n}\n\n.my-menu-2 {\n  display: none;\n  padding: 7px;\n  margin: 0px;\n  height: 50px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n\n.my-menu-2 .bar {\n  margin-top: 8px;\n  margin-bottom: 8px;\n  width: 30px;\n  height: 3px;\n  background-color: white;\n}\n\n.univ-fianar {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: 5px;\n}\n\n.univ-fianar #uf {\n  height: 30px;\n}\n\n.univ-fianar p {\n  margin-left: 20px;\n  margin-right: 20px;\n  font-size: 30px;\n  font-variant: petite-caps;\n}\n\n.univ-eni {\n  font-size: 30px;\n  letter-spacing: 1px;\n  word-spacing: 5px;\n  text-transform: uppercase;\n  font-weight: 500;\n  color: #ffffff;\n}\n\n@media screen and (max-width: 1100px) {\n  .content-action-header .menu-action .p span {\n    display: none;\n  }\n\n  .content-action-header .menu-action .p {\n    margin-right: 30px;\n    padding: 8px;\n    font-weight: normal;\n    letter-spacing: 1px;\n    width: 70px;\n  }\n}\n\n@media screen and (max-width: 650px) {\n  .univ-eni {\n    font-size: 25px;\n    letter-spacing: 0px;\n    word-spacing: 5px;\n    font-variant: petite-caps;\n  }\n}\n\n@media screen and (max-width: 540px) {\n  .univ-fianar p {\n    margin-left: 10px;\n    margin-right: 10px;\n    font-size: 15px;\n    font-variant: petite-caps;\n  }\n\n  .univ-fianar #uf {\n    height: 25px;\n  }\n}\n\n@media (max-width: 950px) and (min-width: 800px) {\n  .content-action-header {\n    right: 0px;\n  }\n\n  .menu-action:first-child {\n    margin-right: -15px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .content-action-header .menu-action .p {\n    display: none;\n  }\n\n  #flags {\n    margin-top: 0%;\n    width: 50px;\n    height: 50px;\n    padding: 6px;\n    cursor: pointer;\n  }\n\n  .second-content {\n    justify-content: flex-end;\n  }\n\n  .my-menu-2 {\n    display: block;\n  }\n\n  .flag-mobile {\n    display: block;\n  }\n\n  .menu-action {\n    display: none;\n  }\n\n  .my-menu {\n    display: none !important;\n  }\n}\n\n@media screen and (max-width: 380px) {\n  img#logo-uf {\n    left: 5px !important;\n    height: 55px !important;\n    position: absolute;\n    width: 50px;\n  }\n\n  #warped1,\n#warped2 {\n    display: none !important;\n  }\n\n  .content-logo-uf {\n    position: absolute;\n    top: 25px;\n    left: -10px;\n  }\n}\n\n@media screen and (max-width: 310px) {\n  img#logo-eni {\n    position: absolute;\n    width: 60px;\n    left: 10px;\n    top: 85px;\n  }\n}\n\n#external-content-main {\n  display: none;\n  transition: all 0.3s;\n}\n\nli#login-mobile {\n  background: #002247 !important;\n  height: 60px !important;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n#menu-colapse {\n  border-radius: 8px;\n  padding: 10px;\n}\n\nli#login-mobile span {\n  font-weight: normal;\n  position: relative;\n  top: 3px;\n  font-size: 20px;\n  color: white;\n}\n\nimg#img-profile-mobile {\n  height: 25px;\n  margin-right: 10px;\n}\n\n#warped1 {\n  position: absolute;\n  display: block;\n  width: 184px;\n  height: 167px;\n  color: white;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -moz-user-select: none;\n}\n\n#warped1 > span[class^=w]:nth-of-type(n + 0) {\n  display: block;\n  position: absolute;\n  transform-origin: 50% 100%;\n}\n\n#warped1 span {\n  font-family: \"ABeeZee\";\n  font-size: 12px;\n  font-weight: regular;\n  font-style: normal;\n  line-height: 3.3;\n  white-space: pre;\n  overflow: visible;\n  padding: 0px;\n}\n\n#warped1 .w0 {\n  transform: rotate(4.11rad);\n  width: 7px;\n  height: 39px;\n  left: 26.37px;\n  top: 91.02px;\n}\n\n#warped1 .w1 {\n  transform: rotate(4.34rad);\n  width: 6px;\n  height: 39px;\n  left: 18.31px;\n  top: 74.67px;\n}\n\n#warped1 .w2 {\n  transform: rotate(4.56rad);\n  width: 5px;\n  height: 39px;\n  left: 14.37px;\n  top: 57.78px;\n}\n\n#warped1 .w3 {\n  transform: rotate(4.77rad);\n  width: 5px;\n  height: 39px;\n  left: 13.66px;\n  top: 40.83px;\n}\n\n#warped1 .w4 {\n  transform: rotate(5.01rad);\n  width: 9px;\n  height: 39px;\n  left: 15.12px;\n  top: 22.19px;\n}\n\n#warped1 .w5 {\n  transform: rotate(5.25rad);\n  width: 6px;\n  height: 39px;\n  left: 24.62px;\n  top: 4.46px;\n}\n\n#warped1 .w6 {\n  transform: rotate(5.46rad);\n  width: 3px;\n  height: 39px;\n  left: 36.08px;\n  top: -8.66px;\n}\n\n#warped1 .w7 {\n  transform: rotate(5.66rad);\n  width: 5px;\n  height: 39px;\n  left: 47.1px;\n  top: -19.18px;\n}\n\n#warped {\n  position: absolute;\n  top: 0px;\n  margin-left: -22px;\n  display: block;\n  width: 184px;\n  height: 167px;\n  color: white;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -moz-user-select: none;\n}\n\n#warped > span[class^=w]:nth-of-type(n + 0) {\n  display: block;\n  position: absolute;\n  transform-origin: 50% 100%;\n}\n\n#warped span {\n  font-family: \"ABeeZee\";\n  font-size: 12px;\n  font-weight: regular;\n  font-style: normal;\n  line-height: 2.45;\n  white-space: pre;\n  overflow: visible;\n  padding: 0px;\n}\n\n#warped .w0 {\n  transform: rotate(6.86rad);\n  width: 7px;\n  height: 29px;\n  left: 122.43px;\n  top: -12.86px;\n}\n\n#warped .w1 {\n  transform: rotate(7.07rad);\n  width: 6px;\n  height: 29px;\n  left: 135.69px;\n  top: -2.45px;\n}\n\n#warped .w2 {\n  transform: rotate(7.26rad);\n  width: 5px;\n  height: 29px;\n  left: 146px;\n  top: 9.52px;\n}\n\n#warped .w3 {\n  transform: rotate(7.45rad);\n  width: 5px;\n  height: 29px;\n  left: 153.12px;\n  top: 22.7px;\n}\n\n#warped .w4 {\n  transform: rotate(7.62rad);\n  width: 3px;\n  height: 29px;\n  left: 158.44px;\n  top: 36px;\n}\n\n#warped .w5 {\n  transform: rotate(7.78rad);\n  width: 3px;\n  height: 29px;\n  left: 160.33px;\n  top: 48.84px;\n}\n\n#warped .w6 {\n  transform: rotate(7.96rad);\n  width: 5px;\n  height: 29px;\n  left: 159.01px;\n  top: 62.82px;\n}\n\n#warped .w7 {\n  transform: rotate(8.15rad);\n  width: 6px;\n  height: 29px;\n  left: 155.32px;\n  top: 77.97px;\n}\n\n#warped .w8 {\n  transform: rotate(8.35rad);\n  width: 5px;\n  height: 29px;\n  left: 149.78px;\n  top: 92.21px;\n}\n\n#warped .w9 {\n  transform: rotate(8.53rad);\n  width: 5px;\n  height: 29px;\n  left: 141.42px;\n  top: 104.64px;\n}\n\n#warped .w10 {\n  transform: rotate(7.93rad);\n  width: 5px;\n  height: 25px;\n  left: 159.2px;\n  top: 64.83px;\n}\n\n#warped .w11 {\n  transform: rotate(8.05rad);\n  width: 3px;\n  height: 25px;\n  left: 158.93px;\n  top: 73.74px;\n}\n\n#warped .w12 {\n  transform: rotate(8.15rad);\n  width: 3px;\n  height: 25px;\n  left: 156.97px;\n  top: 81.49px;\n}\n\n#warped .w13 {\n  transform: rotate(8.26rad);\n  width: 5px;\n  height: 25px;\n  left: 152.85px;\n  top: 89.93px;\n}\n\n#warped .w14 {\n  transform: rotate(8.39rad);\n  width: 6px;\n  height: 25px;\n  left: 147.54px;\n  top: 99.25px;\n}\n\n#warped .w15 {\n  transform: rotate(8.52rad);\n  width: 5px;\n  height: 25px;\n  left: 142.05px;\n  top: 107.87px;\n}\n\n#warped .w16 {\n  transform: rotate(8.65rad);\n  width: 5px;\n  height: 25px;\n  left: 135.34px;\n  top: 115.28px;\n}\n\n@media screen and (max-width: 670px) {\n  .univ-fianar p {\n    margin-left: 20px;\n    margin-right: 20px;\n    font-size: 20px;\n    font-variant: petite-caps;\n  }\n\n  .univ-eni {\n    font-size: 24px;\n    letter-spacing: 1px;\n    word-spacing: 5px;\n    text-transform: uppercase;\n    font-weight: 500;\n    color: #ffffff;\n  }\n}\n\n@media screen and (max-width: 560px) {\n  #logo-eni {\n    position: absolute;\n    width: 60px;\n    top: -9px;\n    left: -15px;\n  }\n}\n\n@media screen and (max-width: 450px) {\n  #logo-eni {\n    position: absolute;\n    width: 60px;\n    top: 100px;\n    left: -15px;\n  }\n}\n\n@media screen and (max-width: 380px) {\n  .univ-fianar {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin-bottom: 5px;\n    margin-top: -10px;\n  }\n\n  img#logo-eni {\n    position: absolute;\n    width: 46px;\n    left: 12px;\n    top: 97px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyL0U6XFxQcm9qZXRzXFxXZWJjdXBcXGNvZGVfZnJvbnRcXHdlYmN1cEZyb250L3NyY1xcYXBwXFxsYXlvdXRcXGhlYWRlclxcdG9wLWhlYWRlclxcdG9wLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyL3RvcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7QUNIRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQXBCWTtFQXFCWiw4QkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQTdCYTtFQThCYiw4QkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSw2QkFBQTtBQ0hGOztBRE1BO0VBQ0UsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSx5QkFBQTtBQ0hGOztBRE1BO0VBQ0UsWUF0RFk7RUF1RFosa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUE1RVk7QUN5RWQ7O0FETUE7RUFFRSxZQUFBO0FDSkY7O0FETUE7RUFDRTtJQUNFLFFBQUE7SUFDQSxTQUFBO0VDSEY7O0VETUE7SUFDRSxXQUFBO0VDSEY7O0VETUE7O0lBRUUsd0JBQUE7RUNIRjs7RURNQTtJQUNFLGtCQUFBO0VDSEY7QUFDRjs7QURNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsWUF0SFk7RUF1SFosa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQXZLWTtBQ21LZDs7QURPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7QUNKRjs7QURPQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNKRjs7QURPQTtFQUtFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNSRjs7QURXQTtFQUNFO0lBQ0UsYUFBQTtFQ1JGOztFRFdBO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7RUNSRjtBQUNGOztBRFdBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0VDVEY7QUFDRjs7QURZQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtFQ1ZGOztFRGFBO0lBQ0UsWUFBQTtFQ1ZGO0FBQ0Y7O0FEYUE7RUFDRTtJQUNFLFVBQUE7RUNYRjs7RURjQTtJQUNFLG1CQUFBO0VDWEY7QUFDRjs7QURjQTtFQUtFO0lBQ0UsYUFBQTtFQ2hCRjs7RURtQkE7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQ2hCRjs7RURtQkE7SUFDRSx5QkFBQTtFQ2hCRjs7RURtQkE7SUFDRSxjQUFBO0VDaEJGOztFRG1CQTtJQUNFLGNBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsYUFBQTtFQ2hCRjs7RURtQkE7SUFDRSx3QkFBQTtFQ2hCRjtBQUNGOztBRG1CQTtFQUNFO0lBQ0Usb0JBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQ2pCRjs7RUQ2QkE7O0lBRUUsd0JBQUE7RUMxQkY7O0VENkJBO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQzFCRjtBQUNGOztBRDZCQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUMzQkY7QUFDRjs7QUQ4QkE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUM1QkY7O0FEK0JBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUM1QkY7O0FEK0JBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDNUJGOztBRCtCQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFlBN1ZZO0FDaVVkOztBRCtCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQzVCRjs7QUQrQkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxzQkFBQTtBQzVCRjs7QUQrQkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFLQSwwQkFBQTtBQzVCRjs7QUQrQkE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDNUJGOztBRCtCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHNCQUFBO0FDNUJGOztBRCtCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUtBLDBCQUFBO0FDNUJGOztBRCtCQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUM1QkY7O0FEZ0NBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLHlCQUFBO0VDN0JGOztFRGdDQTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUM3QkY7QUFDRjs7QURpQ0E7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VDL0JGO0FBQ0Y7O0FEa0NBO0VBQ0U7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFQ2hDSjtBQUNGOztBRG1DQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VDakNGOztFRG9DRjtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0VDakNBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVhZGVyL3RvcC1oZWFkZXIvdG9wLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmaXJzdC1jb2xvcjogIzBjMmQ1MDtcclxuJHNlY29uZC1jb2xvcjogIzAwMjI0NztcclxuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcclxuXHJcbi50b3AtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mbGFnLW1vYmlsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZpcnN0LWNvbnRlbnQge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDE3MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRmaXJzdC1jb2xvcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2Vjb25kLWNvbnRlbnQge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmQtY29sb3I7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWNvbmQtY29udGVudCAubXktbWVudTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlY29uZC1jb250ZW50IC5teS1tZW51IHtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkZmlyc3QtY29sb3I7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnNlY29uZC1jb250ZW50IC5teS1tZW51OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE3YWJlO1xyXG59XHJcblxyXG4uc2Vjb25kLWNvbnRlbnQgLm15LW1lbnUgYSB7XHJcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNlY29uZC1jb250ZW50IC5teS1tZW51IGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRlbnQtbG9nbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbn1cclxuXHJcbiNsb2dvLWVuaSB7XHJcbiAgLy8gbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjBweCkge1xyXG4gIC5jb250ZW50LWxvZ28tdWYge1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAjbG9nby1lbmkge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgfVxyXG5cclxuICAjd2FycGVkLFxyXG4gICN3YXJwZWQxIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNmbGFncyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudC1hY3Rpb24taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgcGFkZGluZy10b3A6IDMlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wIHtcclxuICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI2ZsYWdzIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wICNpbWctcHJvZmlsZSB7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCBzcGFuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzcHg7XHJcbiAgbGVmdDogNXB4O1xyXG59XHJcblxyXG4uY29udGVudC1sb2dvLXVmIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubXktbWVudS0yIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBtYXJnaW46IDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubXktbWVudS0yIC5iYXIge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG59XHJcblxyXG4udW5pdi1maWFuYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi51bml2LWZpYW5hciAjdWYge1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLnVuaXYtZmlhbmFyIHAge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcclxufVxyXG5cclxuLnVuaXYtZW5pIHtcclxuICAvLyBmb250LXNpemU6IDMwcHg7XHJcbiAgLy8gbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAvLyB3b3JkLXNwYWNpbmc6IDEwcHg7XHJcbiAgLy8gZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB3b3JkLXNwYWNpbmc6IDVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIC5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wIHNwYW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIC51bml2LWVuaSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgd29yZC1zcGFjaW5nOiA1cHg7XHJcbiAgICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcclxuICAudW5pdi1maWFuYXIgcCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtdmFyaWFudDogcGV0aXRlLWNhcHM7XHJcbiAgfVxyXG5cclxuICAudW5pdi1maWFuYXIgI3VmIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkgYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgLmNvbnRlbnQtYWN0aW9uLWhlYWRlciB7XHJcbiAgICByaWdodDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtYWN0aW9uOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5jb250ZW50LWFjdGlvbi1oZWFkZXIge1xyXG4gICAgLy9yaWdodDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtYWN0aW9uLWhlYWRlciAubWVudS1hY3Rpb24gLnAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICNmbGFncyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnNlY29uZC1jb250ZW50IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAubXktbWVudS0yIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmZsYWctbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtYWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubXktbWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xyXG4gIGltZyNsb2dvLXVmIHtcclxuICAgIGxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcbiAgLy8gaW1nI2xvZ28tZW5pIHtcclxuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgIHdpZHRoOiA2MHB4O1xyXG4gIC8vICAgbGVmdDogMTBweDtcclxuICAvLyAgIHRvcDogLTI3cHg7XHJcbiAgLy8gfVxyXG4gIC8vICNmbGFncyB7XHJcbiAgLy8gICBtYXJnaW4tdG9wOiA4NSU7XHJcbiAgLy8gfVxyXG5cclxuICAjd2FycGVkMSxcclxuICAjd2FycGVkMiB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1sb2dvLXVmIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjVweDtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzEwcHgpIHtcclxuICBpbWcjbG9nby1lbmkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiA4NXB4O1xyXG4gIH1cclxufVxyXG5cclxuI2V4dGVybmFsLWNvbnRlbnQtbWFpbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxubGkjbG9naW4tbW9iaWxlIHtcclxuICBiYWNrZ3JvdW5kOiAkc2Vjb25kLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiNtZW51LWNvbGFwc2Uge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5saSNsb2dpbi1tb2JpbGUgc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbn1cclxuXHJcbmltZyNpbWctcHJvZmlsZS1tb2JpbGUge1xyXG4gIGhlaWdodDogMjVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiN3YXJwZWQxIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDE4NHB4O1xyXG4gIGhlaWdodDogMTY3cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbiN3YXJwZWQxID4gc3BhbltjbGFzc149XCJ3XCJdOm50aC1vZi10eXBlKG4gKyAwKSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAtby10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbn1cclxuXHJcbiN3YXJwZWQxIHNwYW4ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFCZWVaZWVcIjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IHJlZ3VsYXI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAzLjM7XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbiN3YXJwZWQxIC53MCB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0LjExcmFkKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQuMTFyYWQpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQuMTFyYWQpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0LjExcmFkKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0LjExcmFkKTtcclxuICB3aWR0aDogN3B4O1xyXG4gIGhlaWdodDogMzlweDtcclxuICBsZWZ0OiAyNi4zN3B4O1xyXG4gIHRvcDogOTEuMDJweDtcclxufVxyXG5cclxuI3dhcnBlZDEgLncxIHtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQuMzRyYWQpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNC4zNHJhZCk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNC4zNHJhZCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQuMzRyYWQpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQuMzRyYWQpO1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgaGVpZ2h0OiAzOXB4O1xyXG4gIGxlZnQ6IDE4LjMxcHg7XHJcbiAgdG9wOiA3NC42N3B4O1xyXG59XHJcblxyXG4jd2FycGVkMSAudzIge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNC41NnJhZCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0LjU2cmFkKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0LjU2cmFkKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNC41NnJhZCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNC41NnJhZCk7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDM5cHg7XHJcbiAgbGVmdDogMTQuMzdweDtcclxuICB0b3A6IDU3Ljc4cHg7XHJcbn1cclxuXHJcbiN3YXJwZWQxIC53MyB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0Ljc3cmFkKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQuNzdyYWQpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQuNzdyYWQpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0Ljc3cmFkKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0Ljc3cmFkKTtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMzlweDtcclxuICBsZWZ0OiAxMy42NnB4O1xyXG4gIHRvcDogNDAuODNweDtcclxufVxyXG5cclxuI3dhcnBlZDEgLnc0IHtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDUuMDFyYWQpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNS4wMXJhZCk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNS4wMXJhZCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDUuMDFyYWQpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDUuMDFyYWQpO1xyXG4gIHdpZHRoOiA5cHg7XHJcbiAgaGVpZ2h0OiAzOXB4O1xyXG4gIGxlZnQ6IDE1LjEycHg7XHJcbiAgdG9wOiAyMi4xOXB4O1xyXG59XHJcblxyXG4jd2FycGVkMSAudzUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNS4yNXJhZCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1LjI1cmFkKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg1LjI1cmFkKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNS4yNXJhZCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNS4yNXJhZCk7XHJcbiAgd2lkdGg6IDZweDtcclxuICBoZWlnaHQ6IDM5cHg7XHJcbiAgbGVmdDogMjQuNjJweDtcclxuICB0b3A6IDQuNDZweDtcclxufVxyXG5cclxuI3dhcnBlZDEgLnc2IHtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDUuNDZyYWQpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNS40NnJhZCk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNS40NnJhZCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDUuNDZyYWQpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDUuNDZyYWQpO1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgaGVpZ2h0OiAzOXB4O1xyXG4gIGxlZnQ6IDM2LjA4cHg7XHJcbiAgdG9wOiAtOC42NnB4O1xyXG59XHJcblxyXG4jd2FycGVkMSAudzcge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNS42NnJhZCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1LjY2cmFkKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg1LjY2cmFkKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNS42NnJhZCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNS42NnJhZCk7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDM5cHg7XHJcbiAgbGVmdDogNDcuMXB4O1xyXG4gIHRvcDogLTE5LjE4cHg7XHJcbn1cclxuXHJcbiN3YXJwZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICBtYXJnaW4tbGVmdDogLTIycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDE4NHB4O1xyXG4gIGhlaWdodDogMTY3cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbiN3YXJwZWQgPiBzcGFuW2NsYXNzXj1cIndcIl06bnRoLW9mLXR5cGUobiArIDApIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxufVxyXG5cclxuI3dhcnBlZCBzcGFuIHtcclxuICBmb250LWZhbWlseTogXCJBQmVlWmVlXCI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiByZWd1bGFyO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMi40NTtcclxuICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuI3dhcnBlZCAudzAge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNi44NnJhZCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2Ljg2cmFkKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg2Ljg2cmFkKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNi44NnJhZCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNi44NnJhZCk7XHJcbiAgd2lkdGg6IDdweDtcclxuICBoZWlnaHQ6IDI5cHg7XHJcbiAgbGVmdDogMTIyLjQzcHg7XHJcbiAgdG9wOiAtMTIuODZweDtcclxufVxyXG5cclxuI3dhcnBlZCAudzEge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNy4wN3JhZCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3LjA3cmFkKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3LjA3cmFkKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNy4wN3JhZCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNy4wN3JhZCk7XHJcbiAgd2lkdGg6IDZweDtcclxuICBoZWlnaHQ6IDI5cHg7XHJcbiAgbGVmdDogMTM1LjY5cHg7XHJcbiAgdG9wOiAtMi40NXB4O1xyXG59XHJcblxyXG4jd2FycGVkIC53MiB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3LjI2cmFkKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcuMjZyYWQpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDcuMjZyYWQpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3LjI2cmFkKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg3LjI2cmFkKTtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMjlweDtcclxuICBsZWZ0OiAxNDZweDtcclxuICB0b3A6IDkuNTJweDtcclxufVxyXG5cclxuI3dhcnBlZCAudzMge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNy40NXJhZCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3LjQ1cmFkKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3LjQ1cmFkKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNy40NXJhZCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNy40NXJhZCk7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDI5cHg7XHJcbiAgbGVmdDogMTUzLjEycHg7XHJcbiAgdG9wOiAyMi43cHg7XHJcbn1cclxuXHJcbiN3YXJwZWQgLnc0IHtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDcuNjJyYWQpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNy42MnJhZCk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNy42MnJhZCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDcuNjJyYWQpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDcuNjJyYWQpO1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgaGVpZ2h0OiAyOXB4O1xyXG4gIGxlZnQ6IDE1OC40NHB4O1xyXG4gIHRvcDogMzZweDtcclxufVxyXG5cclxuI3dhcnBlZCAudzUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNy43OHJhZCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3Ljc4cmFkKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3Ljc4cmFkKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNy43OHJhZCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNy43OHJhZCk7XHJcbiAgd2lkdGg6IDNweDtcclxuICBoZWlnaHQ6IDI5cHg7XHJcbiAgbGVmdDogMTYwLjMzcHg7XHJcbiAgdG9wOiA0OC44NHB4O1xyXG59XHJcblxyXG4jd2FycGVkIC53NiB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3Ljk2cmFkKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcuOTZyYWQpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDcuOTZyYWQpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3Ljk2cmFkKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg3Ljk2cmFkKTtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMjlweDtcclxuICBsZWZ0OiAxNTkuMDFweDtcclxuICB0b3A6IDYyLjgycHg7XHJcbn1cclxuXHJcbiN3YXJwZWQgLnc3IHtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDguMTVyYWQpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOC4xNXJhZCk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOC4xNXJhZCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDguMTVyYWQpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDguMTVyYWQpO1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgaGVpZ2h0OiAyOXB4O1xyXG4gIGxlZnQ6IDE1NS4zMnB4O1xyXG4gIHRvcDogNzcuOTdweDtcclxufVxyXG5cclxuI3dhcnBlZCAudzgge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOC4zNXJhZCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg4LjM1cmFkKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg4LjM1cmFkKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOC4zNXJhZCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOC4zNXJhZCk7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDI5cHg7XHJcbiAgbGVmdDogMTQ5Ljc4cHg7XHJcbiAgdG9wOiA5Mi4yMXB4O1xyXG59XHJcblxyXG4jd2FycGVkIC53OSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4LjUzcmFkKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDguNTNyYWQpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDguNTNyYWQpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4LjUzcmFkKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg4LjUzcmFkKTtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMjlweDtcclxuICBsZWZ0OiAxNDEuNDJweDtcclxuICB0b3A6IDEwNC42NHB4O1xyXG59XHJcblxyXG4jd2FycGVkIC53MTAge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNy45M3JhZCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3LjkzcmFkKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3LjkzcmFkKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNy45M3JhZCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNy45M3JhZCk7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgbGVmdDogMTU5LjJweDtcclxuICB0b3A6IDY0LjgzcHg7XHJcbn1cclxuXHJcbiN3YXJwZWQgLncxMSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4LjA1cmFkKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDguMDVyYWQpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDguMDVyYWQpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4LjA1cmFkKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg4LjA1cmFkKTtcclxuICB3aWR0aDogM3B4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsZWZ0OiAxNTguOTNweDtcclxuICB0b3A6IDczLjc0cHg7XHJcbn1cclxuXHJcbiN3YXJwZWQgLncxMiB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4LjE1cmFkKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDguMTVyYWQpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDguMTVyYWQpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4LjE1cmFkKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg4LjE1cmFkKTtcclxuICB3aWR0aDogM3B4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsZWZ0OiAxNTYuOTdweDtcclxuICB0b3A6IDgxLjQ5cHg7XHJcbn1cclxuXHJcbiN3YXJwZWQgLncxMyB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4LjI2cmFkKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDguMjZyYWQpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDguMjZyYWQpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4LjI2cmFkKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg4LjI2cmFkKTtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsZWZ0OiAxNTIuODVweDtcclxuICB0b3A6IDg5LjkzcHg7XHJcbn1cclxuXHJcbiN3YXJwZWQgLncxNCB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4LjM5cmFkKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDguMzlyYWQpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDguMzlyYWQpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4LjM5cmFkKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg4LjM5cmFkKTtcclxuICB3aWR0aDogNnB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsZWZ0OiAxNDcuNTRweDtcclxuICB0b3A6IDk5LjI1cHg7XHJcbn1cclxuXHJcbiN3YXJwZWQgLncxNSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4LjUycmFkKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDguNTJyYWQpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDguNTJyYWQpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4LjUycmFkKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg4LjUycmFkKTtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsZWZ0OiAxNDIuMDVweDtcclxuICB0b3A6IDEwNy44N3B4O1xyXG59XHJcblxyXG4jd2FycGVkIC53MTYge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOC42NXJhZCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg4LjY1cmFkKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg4LjY1cmFkKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOC42NXJhZCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOC42NXJhZCk7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgbGVmdDogMTM1LjM0cHg7XHJcbiAgdG9wOiAxMTUuMjhweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XHJcbiAgLnVuaXYtZmlhbmFyIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xyXG4gIH1cclxuXHJcbiAgLnVuaXYtZW5pIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcclxuICAjbG9nby1lbmkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICB0b3A6IC05cHg7XHJcbiAgICBsZWZ0OiAtMTVweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICNsb2dvLWVuaSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgIGxlZnQ6IC0xNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcclxuICAudW5pdi1maWFuYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcblxyXG5pbWcjbG9nby1lbmkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNDZweDtcclxuICBsZWZ0OiAxMnB4O1xyXG4gIHRvcDogOTdweDtcclxufVxyXG59XHJcbiIsIi50b3AtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMjIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZmxhZy1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmlyc3QtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDE3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlY29uZC1jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDIyNDc7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY29uZC1jb250ZW50IC5teS1tZW51Omxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNlY29uZC1jb250ZW50IC5teS1tZW51IHtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzBjMmQ1MDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zZWNvbmQtY29udGVudCAubXktbWVudTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTdhYmU7XG59XG5cbi5zZWNvbmQtY29udGVudCAubXktbWVudSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc2Vjb25kLWNvbnRlbnQgLm15LW1lbnUgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRlbnQtbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2xvZ28tZW5pIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjBweCkge1xuICAuY29udGVudC1sb2dvLXVmIHtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiA1cHg7XG4gIH1cblxuICAjbG9nby1lbmkge1xuICAgIHdpZHRoOiA3MHB4O1xuICB9XG5cbiAgI3dhcnBlZCxcbiN3YXJwZWQxIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjZmxhZ3Mge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuLmNvbnRlbnQtYWN0aW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgd2lkdGg6IDE2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jZmxhZ3Mge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCAjaW1nLXByb2ZpbGUge1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmNvbnRlbnQtYWN0aW9uLWhlYWRlciAubWVudS1hY3Rpb24gLnAgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDVweDtcbn1cblxuLmNvbnRlbnQtbG9nby11ZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5teS1tZW51LTIge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiA3cHg7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5teS1tZW51LTIgLmJhciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udW5pdi1maWFuYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udW5pdi1maWFuYXIgI3VmIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4udW5pdi1maWFuYXIgcCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC12YXJpYW50OiBwZXRpdGUtY2Fwcztcbn1cblxuLnVuaXYtZW5pIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB3b3JkLXNwYWNpbmc6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvbnRlbnQtYWN0aW9uLWhlYWRlciAubWVudS1hY3Rpb24gLnAge1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAudW5pdi1lbmkge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIHdvcmQtc3BhY2luZzogNXB4O1xuICAgIGZvbnQtdmFyaWFudDogcGV0aXRlLWNhcHM7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIC51bml2LWZpYW5hciBwIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtdmFyaWFudDogcGV0aXRlLWNhcHM7XG4gIH1cblxuICAudW5pdi1maWFuYXIgI3VmIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkgYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5jb250ZW50LWFjdGlvbi1oZWFkZXIge1xuICAgIHJpZ2h0OiAwcHg7XG4gIH1cblxuICAubWVudS1hY3Rpb246Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2ZsYWdzIHtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5zZWNvbmQtY29udGVudCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gIC5teS1tZW51LTIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmZsYWctbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5tZW51LWFjdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5teS1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gIGltZyNsb2dvLXVmIHtcbiAgICBsZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDU1cHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cblxuICAjd2FycGVkMSxcbiN3YXJwZWQyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29udGVudC1sb2dvLXVmIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNXB4O1xuICAgIGxlZnQ6IC0xMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMTBweCkge1xuICBpbWcjbG9nby1lbmkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjBweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRvcDogODVweDtcbiAgfVxufVxuI2V4dGVybmFsLWNvbnRlbnQtbWFpbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG5saSNsb2dpbi1tb2JpbGUge1xuICBiYWNrZ3JvdW5kOiAjMDAyMjQ3ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jbWVudS1jb2xhcHNlIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5saSNsb2dpbi1tb2JpbGUgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbWcjaW1nLXByb2ZpbGUtbW9iaWxlIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbiN3YXJwZWQxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE4NHB4O1xuICBoZWlnaHQ6IDE2N3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4jd2FycGVkMSA+IHNwYW5bY2xhc3NePXddOm50aC1vZi10eXBlKG4gKyAwKSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xufVxuXG4jd2FycGVkMSBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiQUJlZVplZVwiO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiByZWd1bGFyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzLjM7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiN3YXJwZWQxIC53MCB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNC4xMXJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNC4xMXJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQuMTFyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNC4xMXJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQuMTFyYWQpO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDM5cHg7XG4gIGxlZnQ6IDI2LjM3cHg7XG4gIHRvcDogOTEuMDJweDtcbn1cblxuI3dhcnBlZDEgLncxIHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0LjM0cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0LjM0cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNC4zNHJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0LjM0cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNC4zNHJhZCk7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMzlweDtcbiAgbGVmdDogMTguMzFweDtcbiAgdG9wOiA3NC42N3B4O1xufVxuXG4jd2FycGVkMSAudzIge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQuNTZyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQuNTZyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0LjU2cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQuNTZyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0LjU2cmFkKTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAzOXB4O1xuICBsZWZ0OiAxNC4zN3B4O1xuICB0b3A6IDU3Ljc4cHg7XG59XG5cbiN3YXJwZWQxIC53MyB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNC43N3JhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNC43N3JhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQuNzdyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNC43N3JhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQuNzdyYWQpO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDM5cHg7XG4gIGxlZnQ6IDEzLjY2cHg7XG4gIHRvcDogNDAuODNweDtcbn1cblxuI3dhcnBlZDEgLnc0IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg1LjAxcmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1LjAxcmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNS4wMXJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg1LjAxcmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNS4wMXJhZCk7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogMzlweDtcbiAgbGVmdDogMTUuMTJweDtcbiAgdG9wOiAyMi4xOXB4O1xufVxuXG4jd2FycGVkMSAudzUge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDUuMjVyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDUuMjVyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg1LjI1cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDUuMjVyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1LjI1cmFkKTtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiAzOXB4O1xuICBsZWZ0OiAyNC42MnB4O1xuICB0b3A6IDQuNDZweDtcbn1cblxuI3dhcnBlZDEgLnc2IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg1LjQ2cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1LjQ2cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNS40NnJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg1LjQ2cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNS40NnJhZCk7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMzlweDtcbiAgbGVmdDogMzYuMDhweDtcbiAgdG9wOiAtOC42NnB4O1xufVxuXG4jd2FycGVkMSAudzcge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDUuNjZyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDUuNjZyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg1LjY2cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDUuNjZyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1LjY2cmFkKTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAzOXB4O1xuICBsZWZ0OiA0Ny4xcHg7XG4gIHRvcDogLTE5LjE4cHg7XG59XG5cbiN3YXJwZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogLTIycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTg0cHg7XG4gIGhlaWdodDogMTY3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbiN3YXJwZWQgPiBzcGFuW2NsYXNzXj13XTpudGgtb2YtdHlwZShuICsgMCkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAtby10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbn1cblxuI3dhcnBlZCBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiQUJlZVplZVwiO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiByZWd1bGFyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyLjQ1O1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4jd2FycGVkIC53MCB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNi44NnJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNi44NnJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDYuODZyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNi44NnJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDYuODZyYWQpO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGxlZnQ6IDEyMi40M3B4O1xuICB0b3A6IC0xMi44NnB4O1xufVxuXG4jd2FycGVkIC53MSB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNy4wN3JhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNy4wN3JhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDcuMDdyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNy4wN3JhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDcuMDdyYWQpO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGxlZnQ6IDEzNS42OXB4O1xuICB0b3A6IC0yLjQ1cHg7XG59XG5cbiN3YXJwZWQgLncyIHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3LjI2cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3LjI2cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNy4yNnJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3LjI2cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNy4yNnJhZCk7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMjlweDtcbiAgbGVmdDogMTQ2cHg7XG4gIHRvcDogOS41MnB4O1xufVxuXG4jd2FycGVkIC53MyB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNy40NXJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNy40NXJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDcuNDVyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNy40NXJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDcuNDVyYWQpO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGxlZnQ6IDE1My4xMnB4O1xuICB0b3A6IDIyLjdweDtcbn1cblxuI3dhcnBlZCAudzQge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDcuNjJyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcuNjJyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3LjYycmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDcuNjJyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3LjYycmFkKTtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBsZWZ0OiAxNTguNDRweDtcbiAgdG9wOiAzNnB4O1xufVxuXG4jd2FycGVkIC53NSB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNy43OHJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNy43OHJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDcuNzhyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNy43OHJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDcuNzhyYWQpO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGxlZnQ6IDE2MC4zM3B4O1xuICB0b3A6IDQ4Ljg0cHg7XG59XG5cbiN3YXJwZWQgLnc2IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3Ljk2cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3Ljk2cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNy45NnJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3Ljk2cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNy45NnJhZCk7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMjlweDtcbiAgbGVmdDogMTU5LjAxcHg7XG4gIHRvcDogNjIuODJweDtcbn1cblxuI3dhcnBlZCAudzcge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDguMTVyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDguMTVyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg4LjE1cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDguMTVyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg4LjE1cmFkKTtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBsZWZ0OiAxNTUuMzJweDtcbiAgdG9wOiA3Ny45N3B4O1xufVxuXG4jd2FycGVkIC53OCB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOC4zNXJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOC4zNXJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDguMzVyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOC4zNXJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDguMzVyYWQpO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGxlZnQ6IDE0OS43OHB4O1xuICB0b3A6IDkyLjIxcHg7XG59XG5cbiN3YXJwZWQgLnc5IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4LjUzcmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg4LjUzcmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOC41M3JhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4LjUzcmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOC41M3JhZCk7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMjlweDtcbiAgbGVmdDogMTQxLjQycHg7XG4gIHRvcDogMTA0LjY0cHg7XG59XG5cbiN3YXJwZWQgLncxMCB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNy45M3JhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNy45M3JhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDcuOTNyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNy45M3JhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDcuOTNyYWQpO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxlZnQ6IDE1OS4ycHg7XG4gIHRvcDogNjQuODNweDtcbn1cblxuI3dhcnBlZCAudzExIHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4LjA1cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg4LjA1cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOC4wNXJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4LjA1cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOC4wNXJhZCk7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogMTU4LjkzcHg7XG4gIHRvcDogNzMuNzRweDtcbn1cblxuI3dhcnBlZCAudzEyIHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4LjE1cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg4LjE1cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOC4xNXJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4LjE1cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOC4xNXJhZCk7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogMTU2Ljk3cHg7XG4gIHRvcDogODEuNDlweDtcbn1cblxuI3dhcnBlZCAudzEzIHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4LjI2cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg4LjI2cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOC4yNnJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4LjI2cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOC4yNnJhZCk7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogMTUyLjg1cHg7XG4gIHRvcDogODkuOTNweDtcbn1cblxuI3dhcnBlZCAudzE0IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4LjM5cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg4LjM5cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOC4zOXJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4LjM5cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOC4zOXJhZCk7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogMTQ3LjU0cHg7XG4gIHRvcDogOTkuMjVweDtcbn1cblxuI3dhcnBlZCAudzE1IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4LjUycmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg4LjUycmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOC41MnJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4LjUycmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOC41MnJhZCk7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogMTQyLjA1cHg7XG4gIHRvcDogMTA3Ljg3cHg7XG59XG5cbiN3YXJwZWQgLncxNiB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOC42NXJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOC42NXJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDguNjVyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOC42NXJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDguNjVyYWQpO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxlZnQ6IDEzNS4zNHB4O1xuICB0b3A6IDExNS4yOHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xuICAudW5pdi1maWFuYXIgcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xuICB9XG5cbiAgLnVuaXYtZW5pIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB3b3JkLXNwYWNpbmc6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICNsb2dvLWVuaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHRvcDogLTlweDtcbiAgICBsZWZ0OiAtMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgI2xvZ28tZW5pIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgdG9wOiAxMDBweDtcbiAgICBsZWZ0OiAtMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgLnVuaXYtZmlhbmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICB9XG5cbiAgaW1nI2xvZ28tZW5pIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQ2cHg7XG4gICAgbGVmdDogMTJweDtcbiAgICB0b3A6IDk3cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/header/top-header/top-header.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/header/top-header/top-header.component.ts ***!
  \******************************************************************/
/*! exports provided: TopHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopHeaderComponent", function() { return TopHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var _services_Header_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/Header/header.service */ "./src/app/services/Header/header.service.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









let TopHeaderComponent = class TopHeaderComponent {
    constructor(router, dialog, headerService, loadService) {
        this.router = router;
        this.dialog = dialog;
        this.headerService = headerService;
        this.loadService = loadService;
        this.langues = [
            {
                libelle: "Fr",
                flag: "./../../../../assets/images/icones/france.png"
            },
            {
                libelle: "Ang",
                flag: "./../../../../assets/images/icones/royaume-uni.png"
            }
        ];
        this.logo = "./../../../../assets/images/ENI/logo-ENl.png";
        this.logoUf = "./../../../../assets/images/ENI/uf-light.png";
        this.profile = "./../../../../assets/images/icones/profile.png";
        this.loadSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
        this.isLoading = false;
    }
    ngOnInit() {
        this.loadSubscription = this.loadService.loadSubject.subscribe((data) => {
            this.isLoading = data;
        });
        this.isLoading = this.loadService.isLoading;
        this.getMenu();
        this.initJs();
    }
    initJs() {
        jquery__WEBPACK_IMPORTED_MODULE_7__("#best-menu-mobile-main").on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_7__("#external-content-main").toggle();
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_7__("#mobile-main").toggleClass('navigation');
            }, 10);
        });
    }
    login() {
        const dialogRef = this.dialog.open(_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    getMenu() {
        this.menu = this.headerService.menu;
    }
    home() {
        this.router.navigateByUrl("/");
    }
};
TopHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _services_Header_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"] },
    { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] }
];
TopHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-top-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/top-header/top-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-header.component.scss */ "./src/app/layout/header/top-header/top-header.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tmp.scss */ "./src/app/layout/header/top-header/tmp.scss")).default]
    })
], TopHeaderComponent);



/***/ }),

/***/ "./src/app/layout/services-party/services-party.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/services-party/services-party.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300&display=swap);\n.container {\n  max-width: 1170px;\n}\n@media screen and (max-width: 575px) {\n  .container {\n    padding: 0px 15px;\n    max-width: 100%;\n    width: 100%;\n  }\n}\n.bg-01 {\n  padding: 50px 0px;\n  background: #d9dee296;\n  position: relative;\n  overflow: hidden;\n}\n.bg-01 .se-box {\n  display: block;\n  margin: -15px 0px;\n  padding: 20px 25px;\n  position: relative;\n  text-align: center;\n}\n.bg-01 .se-box .icon {\n  padding: 0 0 10px 0px;\n  position: relative;\n  display: block;\n  height: 60px;\n  width: 60px;\n  background-color: #002147;\n  border-radius: 50px;\n  line-height: 60px;\n  text-align: center;\n  margin: 0px auto;\n  color: #fff;\n  font-size: 20px;\n  transition: 0.5s;\n}\n.bg-01 .se-box .icon::before {\n  position: absolute;\n  content: \"\";\n  width: 80px;\n  height: 80px;\n  border-radius: 50px;\n  left: -10px;\n  top: -10px;\n  border: 2px dashed #002147;\n}\n.bg-01 .se-box .icon:hover {\n  background: #4b4f5a;\n  cursor: pointer;\n}\n.bg-01 .se-box .content {\n  padding: 20px 0px;\n  position: relative;\n  display: inline-block;\n}\n.bg-01 .se-box .content h3 {\n  font-size: 20px;\n  color: #002147;\n  text-transform: capitalize;\n  margin: 10px 0 0 0;\n  cursor: pointer;\n}\n.bg-01 .se-box .content p {\n  color: #444444;\n  font-size: 15px;\n  line-height: 26px;\n  margin: 10px 0px 20px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NlcnZpY2VzLXBhcnR5L0U6XFxQcm9qZXRzXFxXZWJjdXBcXGNvZGVfZnJvbnRcXHdlYmN1cEZyb250L3NyY1xcYXBwXFxsYXlvdXRcXHNlcnZpY2VzLXBhcnR5XFxzZXJ2aWNlcy1wYXJ0eS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3NlcnZpY2VzLXBhcnR5L3NlcnZpY2VzLXBhcnR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDZIQUFBO0FBRVI7RUFDRSxpQkFBQTtBQ0FGO0FEQ0U7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RUNFSjtBQUNGO0FEQUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VGO0FEREU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNJSjtBREhJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTU47QURMTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FDUVI7QURQTTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ1VSO0FEVEk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNZTjtBRFhNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2NSO0FEYk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNnQlIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2VydmljZXMtcGFydHkvc2VydmljZXMtcGFydHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwzMDAmZGlzcGxheT1zd2FwKTtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTE3MHB4OyB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTsgfSB9XHJcblxyXG5cclxuLmJnLTAxIHtcclxuICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZDlkZWUyOTY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cclxuICAuYmctMDEgLnNlLWJveCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogLTE1cHggMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbiAgICAuYmctMDEgLnNlLWJveCAuaWNvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAxMHB4IDBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjE0NztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgdHJhbnNpdGlvbjogMC41czsgfVxyXG4gICAgICAuYmctMDEgLnNlLWJveCAuaWNvbjo6YmVmb3JlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjMDAyMTQ3OyB9XHJcbiAgICAgIC5iZy0wMSAuc2UtYm94IC5pY29uOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNGI0ZjVhO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjt9XHJcbiAgICAuYmctMDEgLnNlLWJveCAuY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxyXG4gICAgICAuYmctMDEgLnNlLWJveCAuY29udGVudCBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAyMTQ3O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7fVxyXG4gICAgICAuYmctMDEgLnNlLWJveCAuY29udGVudCBwIHtcclxuICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAyMHB4IDBweDsgfVxyXG5cclxuIiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMzAwJmRpc3BsYXk9c3dhcCk7XG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMTcwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmJnLTAxIHtcbiAgcGFkZGluZzogNTBweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNkOWRlZTI5NjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmctMDEgLnNlLWJveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IC0xNXB4IDBweDtcbiAgcGFkZGluZzogMjBweCAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJnLTAxIC5zZS1ib3ggLmljb24ge1xuICBwYWRkaW5nOiAwIDAgMTBweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDIxNDc7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5iZy0wMSAuc2UtYm94IC5pY29uOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGxlZnQ6IC0xMHB4O1xuICB0b3A6IC0xMHB4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzAwMjE0Nztcbn1cblxuLmJnLTAxIC5zZS1ib3ggLmljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNGI0ZjVhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iZy0wMSAuc2UtYm94IC5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYmctMDEgLnNlLWJveCAuY29udGVudCBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDIxNDc7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJnLTAxIC5zZS1ib3ggLmNvbnRlbnQgcCB7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBtYXJnaW46IDEwcHggMHB4IDIwcHggMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/services-party/services-party.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/services-party/services-party.component.ts ***!
  \*******************************************************************/
/*! exports provided: ServicesPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPartyComponent", function() { return ServicesPartyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicesPartyComponent = class ServicesPartyComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServicesPartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services-party',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services-party.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/services-party/services-party.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services-party.component.scss */ "./src/app/layout/services-party/services-party.component.scss")).default]
    })
], ServicesPartyComponent);



/***/ }),

/***/ "./src/app/sanitize-html.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/sanitize-html.pipe.ts ***!
  \***************************************/
/*! exports provided: SanitizeHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtml", function() { return SanitizeHtml; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SanitizeHtml = class SanitizeHtml {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    }
};
SanitizeHtml.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SanitizeHtml = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sanitizeHtml'
    })
], SanitizeHtml);



/***/ }),

/***/ "./src/app/services/Footer/footer.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/Footer/footer.service.ts ***!
  \***************************************************/
/*! exports provided: FooterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterService", function() { return FooterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterService = class FooterService {
    constructor() { }
};
FooterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FooterService);



/***/ }),

/***/ "./src/app/services/Header/header.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/Header/header.service.ts ***!
  \***************************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderService = class HeaderService {
    constructor() {
        this.menu = [
            {
                titre: "Actualités",
                slug: "evenements/actualités"
            },
            {
                titre: "Nouvelles",
                slug: "evenements/nouvelles"
            },
            {
                titre: "Annonces",
                slug: "annonces"
            },
            {
                titre: "Clubs",
                slug: "clubs"
            },
            {
                titre: "A Propos",
                slug: "Apropos"
            },
            {
                titre: "Contact",
                slug: "contact"
            }
        ];
    }
};
HeaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HeaderService);



/***/ }),

/***/ "./src/app/services/annonces/annonces.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/annonces/annonces.service.ts ***!
  \*******************************************************/
/*! exports provided: AnnoncesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnoncesService", function() { return AnnoncesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");




let AnnoncesService = class AnnoncesService {
    constructor(http) {
        this.http = http;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint;
    }
    getAnnonces() {
        return this.http.get(`${this.endpoint}/annonces`);
    }
    getTopAnnonces() {
        return this.http.get(`${this.endpoint}/annonces/principal/top`);
    }
};
AnnoncesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AnnoncesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AnnoncesService);



/***/ }),

/***/ "./src/app/services/clubs/clubs.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/clubs/clubs.service.ts ***!
  \*************************************************/
/*! exports provided: ClubsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubsService", function() { return ClubsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let ClubsService = class ClubsService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint;
    }
    getClubs() {
        return this.http.get(`${this.endpoint}/clubs`);
    }
    getPublications() {
        return this.http.get(`${this.endpoint}/articles`);
    }
};
ClubsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClubsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], ClubsService);



/***/ }),

/***/ "./src/app/services/configurations/configurations.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/configurations/configurations.service.ts ***!
  \*******************************************************************/
/*! exports provided: ConfigurationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationsService", function() { return ConfigurationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let ConfigurationsService = class ConfigurationsService {
    constructor(http) {
        this.http = http;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint;
    }
    getConfigurations() {
        return this.http.get(`${this.endpoint}/configurations`);
    }
};
ConfigurationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ConfigurationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], ConfigurationsService);



/***/ }),

/***/ "./src/app/services/contact/contact.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/contact/contact.service.ts ***!
  \*****************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ContactService = class ContactService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint;
    }
    postMessage(email, objet, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
                email: email,
                objet: objet,
                message: message
            };
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
            yield this.http.post(`${this.endpoint}/newsletter`, options, headers).subscribe((data) => {
            }, (error) => {
                console.log(error);
            });
        });
    }
};
ContactService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ContactService);



/***/ }),

/***/ "./src/app/services/loading/loading.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/loading/loading.service.ts ***!
  \*****************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoadingService = class LoadingService {
    constructor() {
        this.isLoading = false;
        this.loadSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    load(isOk) {
        if (!isOk) {
            setTimeout(() => {
                this.isLoading = isOk;
                this.loadSubject.next(this.isLoading);
            }, 1500);
        }
        else {
            this.isLoading = isOk;
            this.loadSubject.next(this.isLoading);
        }
    }
};
LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ "./src/app/services/login/login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
    }
    isEmail(mail) {
        var rep = mail.includes("@");
        return rep;
    }
    login(type, email, password) {
        let options = {};
        if (type == "etudiant") {
            if (this.isEmail(email)) {
                options = {
                    "email": email,
                    "password": password,
                    "type": "etudiant"
                };
            }
            else {
                options = {
                    "numero": email,
                    "password": password,
                    "type": "etudiant"
                };
            }
        }
        else if (type == "enseignant") {
            if (this.isEmail(email)) {
                options = {
                    "email": email,
                    "mot_de_passe": password,
                    "type": "enseignant"
                };
            }
            else {
                options = {
                    "identifiant": email,
                    "mot_de_passe": password,
                    "type": "enseignant"
                };
            }
        }
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(`${this.endpoint}/login`, options, headers);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/services/news/news.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/news/news.service.ts ***!
  \***********************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let NewsService = class NewsService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint;
        this.descr = "There are many variations of sages of Lorem Ipsum available,\
  but the mrity have suffered alteration in some orm,\
  by injected humo ur,There are many but the mri have\
  suffered alteration in some";
        this.actus = [
            {
                titre: "Photoshop1 CC 2017",
                description: this.descr,
                date: "20 Mai 2015",
                posteur: "Mc. Nawaz",
                image: "./../../../assets/images/course/1.jpg",
                galerie: [
                    "./../../../assets/images/latest/2.jpg",
                    "./../../../assets/images/latest/3.jpg",
                    "./../../../assets/images/latest/4.jpg",
                    "./../../../assets/images/latest/1.jpg",
                    "./../../../assets/images/course/2.jpg",
                    "./../../../assets/images/latest/1.jpg"
                ],
                slug: "",
            },
            {
                titre: "Illustrator1 CC 2017",
                description: this.descr,
                date: "18 Mai 2015",
                posteur: "Subas Das",
                image: "./../../../assets/images/course/2.jpg",
                galerie: [
                    "./../../../assets/images/course/2.jpg",
                    "./../../../assets/images/latest/3.jpg",
                    "./../../../assets/images/latest/4.jpg",
                ],
                slug: "",
            },
            {
                titre: "Indesign1 CC 2017",
                description: this.descr,
                date: "28 Avril 2015",
                posteur: "Momin Boss",
                image: "./../../../assets/images/course/3.jpg",
                galerie: [
                    "./../../../assets/images/course/2.jpg",
                    "./../../../assets/images/latest/3.jpg",
                    "./../../../assets/images/latest/4.jpg",
                ],
                slug: "",
            },
            {
                titre: "Photoshop2 CC 2017",
                description: this.descr,
                date: "20 Mai 2015",
                posteur: "Mc. Nawaz",
                image: "./../../../assets/images/course/1.jpg",
                galerie: [
                    "./../../../assets/images/course/2.jpg",
                    "./../../../assets/images/latest/3.jpg",
                    "./../../../assets/images/latest/4.jpg",
                ],
                slug: "",
            },
            {
                titre: "Illustrator2 CC 2017",
                description: this.descr,
                date: "18 Mai 2015",
                posteur: "Subas Das",
                image: "./../../../assets/images/course/2.jpg",
                galerie: [
                    "./../../../assets/images/course/2.jpg",
                    "./../../../assets/images/latest/3.jpg",
                    "./../../../assets/images/latest/4.jpg",
                ],
                slug: "",
            },
            {
                titre: "Indesign2 CC 2017",
                description: this.descr,
                date: "28 Avril 2015",
                posteur: "Momin Boss",
                image: "./../../../assets/images/course/3.jpg",
                galerie: [
                    "./../../../assets/images/course/2.jpg",
                    "./../../../assets/images/latest/3.jpg",
                    "./../../../assets/images/latest/4.jpg",
                ],
                slug: "",
            },
            {
                titre: "Photoshop3 CC 2017",
                description: this.descr,
                date: "20 Mai 2015",
                posteur: "Mc. Nawaz",
                image: "./../../../assets/images/course/1.jpg",
                galerie: [
                    "./../../../assets/images/course/2.jpg",
                    "./../../../assets/images/latest/3.jpg",
                    "./../../../assets/images/latest/4.jpg",
                ],
                slug: "",
            },
            {
                titre: "Illustrator3 CC 2017",
                description: this.descr,
                date: "18 Mai 2015",
                posteur: "Subas Das",
                image: "./../../../assets/images/course/2.jpg",
                galerie: [
                    "./../../../assets/images/course/2.jpg",
                    "./../../../assets/images/latest/3.jpg",
                    "./../../../assets/images/latest/4.jpg",
                ],
                slug: "",
            },
            {
                titre: "Indesign3 CC 2017",
                description: this.descr,
                date: "28 Avril 2015",
                posteur: "Momin Boss",
                image: "./../../../assets/images/course/3.jpg",
                galerie: [
                    "./../../../assets/images/course/2.jpg",
                    "./../../../assets/images/latest/3.jpg",
                    "./../../../assets/images/latest/4.jpg",
                ],
                slug: "",
            }
        ];
        this.news = [
            {
                titre: "FORMATION HYBRIDE 1",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
      saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
                slug: "#",
                image: "./../../../assets/images/slider/gasy1.png",
                galerie: [
                    "./../../../assets/images/slider/gasy1.png",
                ],
                date: "28 Avril 2015",
                posteur: "Momin Boss"
            },
            {
                titre: "MAINTENANCE 1",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
      saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
                slug: "#",
                image: "./../../../assets/images/slider/gasy2.jpg",
                galerie: [
                    "./../../../assets/images/slider/gasy2.jpg",
                    "./../../../assets/images/slider/gasy3.jpg",
                ],
                date: "28 Avril 2015",
                posteur: "Momin Boss"
            },
            {
                titre: "APPEL AU CANDIDATURE 1",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
    Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
    saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
                slug: "#",
                image: "./../../../assets/images/slider/gasy3.jpg",
                galerie: [
                    "./../../../assets/images/slider/gasy3.jpg",
                    "./../../../assets/images/slider/gasy2.jpg",
                    "./../../../assets/images/slider/gasy1.png",
                ],
                date: "28 Avril 2015",
                posteur: "Momin Boss"
            },
            {
                titre: "FORMATION HYBRIDE 2",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci.",
                slug: "#",
                image: "./../../../assets/images/slider/Trudel-Images-couverture-02-1024x576.jpg",
                galerie: [
                    "./../../../assets/images/slider/Trudel-Images-couverture-02-1024x576.jpg",
                    "./../../../assets/images/slider/gasy3.jpg",
                    "./../../../assets/images/slider/gasy2.jpg",
                    "./../../../assets/images/slider/gasy1.png",
                ],
                date: "28 Avril 2015",
                posteur: "Momin Boss"
            },
            {
                titre: "MAINTENANCE 2",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque.",
                slug: "#",
                image: "./../../../assets/images/slider/Trudel-Images-couverture-06-1024x576.jpg",
                galerie: [
                    "./../../../assets/images/slider/Trudel-Images-couverture-06-1024x576.jpg",
                    "./../../../assets/images/slider/Trudel-Images-couverture-02-1024x576.jpg",
                    "./../../../assets/images/slider/gasy3.jpg",
                    "./../../../assets/images/slider/gasy2.jpg",
                    "./../../../assets/images/slider/gasy1.png",
                ],
                date: "28 Avril 2015",
                posteur: "Momin Boss"
            },
            {
                titre: "APPEL AU CANDIDATURE 2",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
    Qui perspiciatis, eveniet sequi labore vel.",
                slug: "#",
                image: "./../../../assets/images/slider/Trudel-Images-couverture-07-1024x576.jpg",
                galerie: [
                    "./../../../assets/images/slider/Trudel-Images-couverture-07-1024x576.jpg",
                ],
                date: "28 Avril 2015",
                posteur: "Momin Boss"
            },
            {
                titre: "MAINTENANCE PRIMO",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque.",
                slug: "#",
                image: "./../../../assets/images/slider/Trudel-Images-couverture-06-1024x576.jpg",
                galerie: [
                    "./../../../assets/images/slider/Trudel-Images-couverture-06-1024x576.jpg",
                ],
                date: "28 Avril 2015",
                posteur: "Momin Boss"
            },
            {
                titre: "LETTRE ADIEU",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
    Qui perspiciatis, eveniet sequi labore vel.",
                slug: "#",
                image: "./../../../assets/images/slider/Trudel-Images-couverture-07-1024x576.jpg",
                galerie: [
                    "./../../../assets/images/slider/Trudel-Images-couverture-07-1024x576.jpg",
                ],
                date: "28 Avril 2015",
                posteur: "Momin Boss"
            },
            {
                titre: "FORMATION HYBRIDE 3",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
      saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
                slug: "#",
                image: "./../../../assets/images/slider/gasy1.png",
                galerie: [
                    "./../../../assets/images/slider/gasy1.png",
                ],
                date: "28 Avril 2015",
                posteur: "Momin Boss"
            },
            {
                titre: "MAINTENANCE 3",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
      saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
                slug: "#",
                image: "./../../../assets/images/slider/gasy2.jpg",
                galerie: [
                    "./../../../assets/images/slider/gasy2.jpg",
                ],
                date: "28 Avril 2015",
                posteur: "Momin Boss"
            },
            {
                titre: "APPEL AU CANDIDATURE 3",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
    Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
    saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
                slug: "#",
                image: "./../../../assets/images/slider/gasy3.jpg",
                galerie: [
                    "./../../../assets/images/slider/gasy3.jpg",
                ],
                date: "28 Avril 2015",
                posteur: "Momin Boss"
            }
        ];
    }
    getEvenements() {
        return this.http.get(`${this.endpoint}/evenements`);
    }
    getTopActualite() {
        return this.http.get(`${this.endpoint}/evenements/principal/top/actualite`);
    }
    getTopNouvelle() {
        return this.http.get(`${this.endpoint}/evenements/principal/top/nouvelle`);
    }
    getFormation() {
        return this.http.get(`${this.endpoint}/formations`);
    }
};
NewsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
NewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], NewsService);



/***/ }),

/***/ "./src/app/services/newsletter/newsletter.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/newsletter/newsletter.service.ts ***!
  \***********************************************************/
/*! exports provided: NewsletterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterService", function() { return NewsletterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let NewsletterService = class NewsletterService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint;
    }
    postEmail(email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
                email: email
            };
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
            yield this.http.post(`${this.endpoint}/newsletter`, options, headers).subscribe((data) => {
            }, (error) => {
                console.log(error);
            });
        });
    }
};
NewsletterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
NewsletterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], NewsletterService);



/***/ }),

/***/ "./src/app/slide-top/slide-top.component.scss":
/*!****************************************************!*\
  !*** ./src/app/slide-top/slide-top.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll-to-top {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}\n\n.show-scrollTop {\n  opacity: 1;\n  transition: all 0.2s ease-in-out;\n}\n\n.btn_top {\n  color: #ffffff;\n  background: #0c2d50;\n  border: transparent;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGUtdG9wL0U6XFxQcm9qZXRzXFxXZWJjdXBcXGNvZGVfZnJvbnRcXHdlYmN1cEZyb250L3NyY1xcYXBwXFxzbGlkZS10b3BcXHNsaWRlLXRvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2xpZGUtdG9wL3NsaWRlLXRvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBRENDO0VBQ0MsVUFBQTtFQUNBLGdDQUFBO0FDRUY7O0FERUM7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlLXRvcC9zbGlkZS10b3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLXRvLXRvcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiB9XHJcbiAuc2hvdy1zY3JvbGxUb3Age1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuIH1cclxuXHJcblxyXG4gLmJ0bl90b3Age1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQ6ICMwYzJkNTA7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIiwiLnNjcm9sbC10by10b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2hvdy1zY3JvbGxUb3Age1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmJ0bl90b3Age1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogIzBjMmQ1MDtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/slide-top/slide-top.component.ts":
/*!**************************************************!*\
  !*** ./src/app/slide-top/slide-top.component.ts ***!
  \**************************************************/
/*! exports provided: SlideTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideTopComponent", function() { return SlideTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let SlideTopComponent = class SlideTopComponent {
    constructor(document) {
        this.document = document;
    }
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        }
        else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }
    ngOnInit() { }
};
SlideTopComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", [])
], SlideTopComponent.prototype, "onWindowScroll", null);
SlideTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slide-top',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slide-top.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/slide-top/slide-top.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slide-top.component.scss */ "./src/app/slide-top/slide-top.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
], SlideTopComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    // endpoint: "http://127.0.0.1:8000/api",
    // url: "http://127.0.0.1:8000/api"
    endpoint: "http://bcactus.aaeni.fr/api",
    url: "http://bcactus.aaeni.fr/api"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projets\Webcup\code_front\webcupFront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
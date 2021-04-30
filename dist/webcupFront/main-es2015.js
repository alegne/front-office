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
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n\n<app-slide-top></app-slide-top>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header></app-main-header>\n<div class=\"main\">\n  <div class=\"main-contain\">\n    <h3>\n      ECOLE\n    </h3>\n    <p>\n      Nationale Informatique\n    </p>\n  </div>\n</div>\n\n\n<div class=\"container-fluid\">\n  <div class=\"main-title\">\n    <h3>\n      A Propos\n    </h3>\n    <p>\n      A propos de l'Ecole Nationale Informatique\n    </p>\n    <div class=\"bottomy\">\n      <p class=\"bottomy-one\"></p>\n      <div class=\"bottomy-center\">\n        <i class=\"fas fa-graduation-cap\"></i>\n      </div>\n      <p class=\"bottomy-two\"></p>\n    </div>\n  </div>\n</div>\n\n                <!--Teachers Area Start-->\n                <div class=\"teachers-area padding-top\">\n                  <div class=\"container\">\n                      <div class=\"row\" id=\"scrollspy-nav\">\n                          <div class=\"col-lg-3 col-md-6 col-12\">\n                              <div class=\"single-teacher-item\" (click)=\"scrollTo('information')\">\n                                  <div class=\"single-teacher-image\">\n                                      <a>\n                                        <!-- <img src=\"img/teacher/l-1.jpg\" alt=\"\"> -->\n                                      </a>\n                                  </div>\n                                  <div class=\"single-teacher-text\">\n                                      <h3>\n                                        <a>\n                                        Information\n                                      </a>\n                                      </h3>\n                                      <h4>Ordre général</h4>\n                                      <p *ngIf=\"information\">\n                                        {{information.substring(0, 150)}}...\n                                      </p>\n                                      <!-- <div class=\"social-links\">\n                                          <a><i class=\"fas fa-info-circle\"></i></a>\n                                          <a><i class=\"fas fa-landmark\"></i></a>\n                                          <a><i class=\"fas fa-graduation-cap\"></i></a>\n                                          <a><i class=\"fas fa-chalkboard-teacher\"></i></a>\n                                      </div> -->\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"col-lg-3 col-md-6 col-12\">\n                              <div class=\"single-teacher-item\" (click)=\"scrollTo('historique')\">\n                                  <div class=\"single-teacher-image\">\n                                      <a>\n                                        <!-- <img src=\"img/teacher/l-2.jpg\" alt=\"\"> -->\n                                      </a>\n                                  </div>\n                                  <div class=\"single-teacher-text\">\n                                      <h3><a>Historique</a></h3>\n                                      <h4>Décret</h4>\n                                      <p *ngIf=\"historique\">\n                                        {{historique.substring(0, 150)}}...\n                                      </p>\n                                      <!-- <div class=\"social-links\">\n                                        <a><i class=\"fas fa-info-circle\"></i></a>\n                                          <a><i class=\"fas fa-landmark\"></i></a>\n                                          <a><i class=\"fas fa-graduation-cap\"></i></a>\n                                          <a><i class=\"fas fa-chalkboard-teacher\"></i></a>\n                                      </div> -->\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"col-lg-3 col-md-6 col-12\">\n                              <div class=\"single-teacher-item\" (click)=\"scrollTo('mission')\">\n                                  <div class=\"single-teacher-image\">\n                                      <a>\n                                        <!-- <img src=\"img/teacher/l-3.jpg\" alt=\"\"> -->\n                                      </a>\n                                  </div>\n                                  <div class=\"single-teacher-text\">\n                                      <h3><a>Missions</a></h3>\n                                      <h4>Formation</h4>\n                                      <p *ngIf=\"mission\">\n                                        {{mission.substring(0, 150)}}...\n                                      </p>\n                                      <!-- <div class=\"social-links\">\n                                        <a><i class=\"fas fa-info-circle\"></i></a>\n                                          <a><i class=\"fas fa-landmark\"></i></a>\n                                          <a><i class=\"fas fa-graduation-cap\"></i></a>\n                                          <a><i class=\"fas fa-chalkboard-teacher\"></i></a>\n                                      </div> -->\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"col-lg-3 col-md-6 col-12\">\n                              <div class=\"single-teacher-item\" (click)=\"scrollTo('specialisation')\">\n                                  <div class=\"single-teacher-image\">\n                                      <a>\n                                        <!-- <img src=\"img/teacher/l-4.jpg\" alt=\"\"> -->\n                                      </a>\n                                  </div>\n                                  <div class=\"single-teacher-text\">\n                                      <h3><a>Spécialisation</a></h3>\n                                      <h4>Domaine</h4>\n                                      <p *ngIf=\"specification\">\n                                        {{specification.substring(0, 150)}}...\n                                      </p>\n                                      <!-- <div class=\"social-links\">\n                                        <a><i class=\"fas fa-info-circle\"></i></a>\n                                          <a><i class=\"fas fa-landmark\"></i></a>\n                                          <a><i class=\"fas fa-graduation-cap\"></i></a>\n                                          <a><i class=\"fas fa-chalkboard-teacher\"></i></a>\n                                      </div> -->\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <!--End of Teachers Area-->\n\n<div class=\"details\" id=\"parentDiv\" scrollSpy [spiedTags]=\"['DIV']\"\n(sectionChange)=\"onSectionChange($event)\">\n  <p class=\"mimi\" id=\"information\"></p>\n  <h3>\n    <i class=\"fas fa-info-circle\"></i>\n    Information d'ordre général\n  </h3>\n  <p>\n    {{information}}\n  </p>\n  <p *ngIf=\"!information\">\n    L' Ecole Nationale d'Informatique, en abrégé ENI, est un établissement d'enseignement\n    supérieur rattaché académiquement et administrativement à l'Université de Fianarantsoa.\n  </p>\n  <p *ngIf=\"!information\">\n    Le siège de l'Ecole se trouve à Tanambao Fianarantsoa.  <br>\n    Boîte postale 1487, code 301. <br>\n    Téléphone : +261 34 05 733 36. <br>\n    Adresse électronique : eni@univ-fianar.mg. <br>\n  </p>\n\n  <div class=\"space\"></div>\n  <p class=\"mimi\" id=\"historique\"></p>\n  <h3 id=\"historique\">\n    <i class=\"fas fa-landmark\"></i>\n    Historique\n  </h3>\n    {{historique}}\n  <p *ngIf=\"!historique\">\n    L’ENI se positionne sur l’échiquier socio-éducatif malgache comme étant le plus puissant\n    secteur de diffusion et de vulgarisation des connaissances et des technologies informatiques.\n  </p>\n  <p *ngIf=\"!historique\">\n    Cette Ecole Supérieure peut être considérée aujourd’hui comme la vitrine et\n    la pépinière des élites informaticiennes du pays.\n  L’Ecole s’est constituée de façon progressive au sein du Centre Universitaire Régional (CUR) de Fianarantsoa.\n  </p>\n  <p *ngIf=\"!historique\">\n    De façon formelle, l’ENI était constituée et créée au sein du CUR\n    par le décret N° 83185 du 24 Mai 1983, comme étant le seul\n    établissement Universitaire Professionnalisé au niveau national,\n    destiné à former des techniciens et des Ingénieurs de haut niveau, aptes\n    à répondre aux besoins et exigences d’Informatisation des entreprises,\n    des sociétés et des organes implantés à Madagascar.\n  </p>\n\n  <div class=\"space\"></div>\n  <p class=\"mimi\" id=\"mission\"></p>\n  <h3 id=\"mission\">\n    <i class=\"fas fa-graduation-cap\"></i>\n    Missions\n  </h3>\n  <div>\n    {{mission}}\n  </div>\n  <div *ngIf=\"!mission\">\n    L’ENI a pour conséquent pour mission de former des\n    spécialistes informaticiens compétents et opérationnels de différents niveaux notamment :\n    <ul>\n      <li>\n        En fournissant aux étudiants des connaissances de base en informatique ;\n      </li>\n      <li>\n        En leur transmettant le savoir-faire requis, à travers la professionnalisation\n        des formations dispensées et en\n        essayant une meilleure adéquation des formations par rapport\n        aux besoins évolutifs des sociétés et des entreprises.\n      </li>\n      <li>\n        En initiant les étudiants aux activités de recherche dans les différents domaines des\n        Technologies de l'information et de la communication (TIC).\n      </li>\n    </ul>\n  </div>\n  <p *ngIf=\"!mission\">\n    L'implantation de cette Ecole Supérieure de technologie de pointe\n    dans un pays en développement et dans une Province à tissu\n    économique et industriel faiblement développé ne l'a pourtant\n    pas défavorisée, ni empêchée de former des spécialistes informaticiens de bon niveau,\n    qui sont recherchés par les entreprises, les sociétés et\n    les organismes publics et privés sur le marché de l'emploi.\n  </p>\n\n  <div class=\"space\"></div>\n  <p class=\"mimi\" id=\"specialisation\"></p>\n  <h3 id=\"specialisation\">\n    <i class=\"fas fa-chalkboard-teacher\"></i>\n    Domaine de spécialisation\n  </h3>\n  <div>\n    {{specification}}\n  </div>\n  <div *ngIf=\"!specification\">\n    Les activités de formation et de recherche organisées à l'ENI portent sur les domaines suivants :\n    <ul>\n      <li>\n        Génie logiciel et Base de Données ;\n      </li>\n      <li>\n        Administration des Systèmes et Réseaux ;\n      </li>\n      <li>\n        Informatique Générale\n      </li>\n      <li>\n        Modélisation informatique et mathématique des Systèmes complexes.\n      </li>\n    </ul>\n  </div>\n  <p *ngIf=\"!specification\">\n    D'une manière plus générale, les programmes des formations sont\n    basés sur l'informatique de gestion et sur l'informatique des\n    Systèmes et Réseaux. Et les modules de formation\n    intègrent aussi bien des éléments d'Informatique fondamentale\n    que des éléments d'Informatique appliquée.\n  </p>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <div class=\"contain-img\">\n        <img [src]=\"img1\" alt=\"\" class=\"image\">\n      </div>\n      <div class=\"contain-text\">\n        - Sortie de promotion\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"contain-img\">\n        <img [src]=\"img2\" alt=\"\" class=\"image\">\n      </div>\n      <div class=\"contain-text\">\n        - Vue de loin\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"contain-img\">\n        <img [src]=\"img3\" alt=\"\" class=\"image\">\n      </div>\n      <div class=\"contain-text\">\n        - Archive\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"content\">\n    <div id=\"progress-man\">\n      <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n    </div>\n\n    \n      <div class=\"\" id=\"loginheader\">\n        <div class=\"left-side row\">\n          <div class=\"cool-md-4 logoimg\">\n            <img [src]=\"logo\" alt=\"\" id=\"logologin\">\n          </div>\n          <div class=\"cool-md-8 logotitle\">\n            E c o l e<br>N a t i o n a l e<br>I n f o r m a t i q u e\n          </div>\n        </div>\n      </div>\n\n      <div class=\"left-side\">\n        <div class=\"main-one\">\n          Se Connecter\n        </div>\n        <div class=\"bar\"></div>\n        <div class=\"main-two\">\n          <form [formGroup]=\"signin\" (ngSubmit)=\"onConnect()\">\n          <div class=\"content-form-field field\">\n              <mat-form-field>\n                <mat-label>En tant que</mat-label>\n                <mat-select disableRipple formControlName=\"type\" required>\n                  <mat-option value=\"enseignant\">Enseignant</mat-option>\n                  <mat-option value=\"etudiant\">Etudiant</mat-option>\n                </mat-select>\n                <mat-icon matSuffix>assignment_ind</mat-icon>\n              </mat-form-field>\n          </div>\n  \n          <div class=\"content-form-field field\">\n              <mat-form-field>\n                <mat-label>Identifiant/Email</mat-label>\n                <input matInput formControlName=\"email\" autocomplete=\"off\" required>\n                <mat-icon matSuffix>account_circle</mat-icon>\n              </mat-form-field>\n          </div>\n  \n          <div class=\"content-form-field field\">\n            <mat-form-field>\n              <mat-label>Mot de passe</mat-label>\n              <input matInput [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" required>\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n              </mat-form-field>\n          </div>\n          <!-- <div class=\"forgot-pass\">\n            Mot de passe <span>oublié</span> ?\n          </div> -->\n  \n          <div class=\"contain-error\">\n            <p *ngIf=\"error\">\n              {{error}}\n            </p>\n          </div>\n  \n          <div class=\"content-btn\">\n              <button class=\"btn_connecter\" type=\"submit\">\n                <div class=\"loader\" *ngIf=\"isLogin\">...</div>\n                <span *ngIf=\"!isLogin\">\n                Connexion\n                </span>\n            </button>\n          </div>\n        </form>\n        </div>\n      </div>\n\n  </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clubs/clubs.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clubs/clubs.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header></app-main-header>\n\n<div class=\"container-fluid mainy\">\n  <div id=\"myCarousel\" class=\"carousel slide bg-inverse w-50 ml-auto mr-auto\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li *ngFor=\"let item of clubs; let i=index\"\n      data-target=\"#myCarousel\"\n      data-slide-to=\" + i +\" [ngClass]=\"{'active': i == 0}\"></li>\n\n    </ol>\n    <div class=\"carousel-inner container \" role=\"listbox\">\n      <div class=\"carousel-item\" *ngFor=\"let item of clubs; let i=index\" [ngClass]=\"{'active': i == 0}\">\n        <div class=\"row\" style=\"margin: auto !important;\">\n          <div class=\"col-md-5 d-block\">\n            <img class=\"img-fluid\" id=\"clubimg\" [src]=\"item.image\" alt=\"club\">\n          </div>\n          <div class=\"col-md-6 \">\n            <div class=\"carousel-caption descriClub\">\n              <h3>{{item.libelle}}</h3>\n              <div [innerHTML]=\"item.description | sanitizeHtml\">\n              </div>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n\n<app-publications></app-publications>\n\n<app-footer></app-footer>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header></app-main-header>\n\n<div class=\"main\">\n  <div class=\"contain-main\">\n    <div class=\"main-head\">\n      <div class=\"contain-name\">\n        <h5 class=\"txt1\">\n          Ecole\n        </h5>\n        <h6 class=\"txt2\">\n          Nationale Informatique\n        </h6>\n      </div>\n\n      <br>\n      <p>\n        <i class=\"fas fa-map-marker-alt\"></i> &nbsp; Tanambao\n      </p>\n      <p>\n        <i class=\"fas fa-map-marked-alt\"></i> &nbsp; FIANARANTSOA I\n      </p>\n      <p>\n        <i class=\"fas fa-envelope-open-text\"></i> &nbsp; BP : 1487 - Code 301\n      </p>\n      <p>\n        <i class=\"fas fa-globe-africa\"></i> &nbsp;MADAGASCAR\n      </p>\n    </div>\n  </div>\n</div>\n\n<div class=\"contain-contact\">\n  <div class=\"title-mapped\">\n    Avez-vous des questions ?\n  </div>\n\n  <form class=\"form\" [formGroup]=\"contactForm\">\n    <div>\n      <label for=\"email\">E-mail</label>\n      <input type=\"text\" name=\"email\" id=\"email\" class=\"form-control\"\n      formControlName=\"email\" placeholder=\"Votre adresse email\" [(ngModel)]=\"email\">\n\n      <div *ngIf=\"submitted && form.email.errors\">\n        <small *ngIf=\"form.email.errors.required\" class=\"form-text error-text \">\n          Adresse email requis\n        </small>\n        <small *ngIf=\"form.email.errors.email\" class=\"form-text error-text \">\n          Veuillez mettre un format email valide\n        </small>\n      </div>\n    </div>\n\n    <div>\n      <label for=\"fonction\">Objet</label>\n      <input type=\"text\" name=\"objet\" id=\"objet\" class=\"form-control\" formControlName=\"objet\"\n        placeholder=\"Votre objet\" [(ngModel)]=\"objet\">\n      <div *ngIf=\"submitted && form.objet.errors\">\n        <small *ngIf=\"form.objet.errors.required\" class=\"form-text error-text \">Objet requis</small>\n      </div>\n    </div>\n\n    <div>\n      <label for=\"message\">Message</label>\n      <textarea rows=\"5\" name=\"message\" id=\"message\"\n      class=\"form-control\" formControlName=\"message\"\n      placeholder=\"Votre message\" [(ngModel)]=\"message\"></textarea>\n      <div *ngIf=\"submitted && form.message.errors\">\n        <small *ngIf=\"form.message.errors.required\" class=\"form-text error-text \">Message requis</small>\n      </div>\n    </div>\n\n    <div class=\"contain-submit\">\n      <button type=\"submit\" (click)=\"openConfirm()\">\n        <span>\n          Envoyer\n        </span>\n      </button>\n    </div>\n\n  </form>\n</div>\n\n<div class=\"mapped\">\n  <div id=\"progress-man\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </div>\n  <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.0503978815673!2d47.091204214744295!3d-21.455131093075888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21e7bed737f377b5%3A0xb8558e55587dd811!2sEcole%20Nationale%20d%20Informatique!5e1!3m2!1sfr!2smg!4v1619166207585!5m2!1sfr!2smg\"\n  width=\"100%\" height=\"450\"\n  style=\"border:0;\"\n  allowfullscreen=\"\" loading=\"lazy\" id=\"frame_id\">\n</iframe>\n</div>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/actuality/actuality.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/actuality/actuality.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span id=\"the-toppyy\"></span>\n<app-main-header></app-main-header>\n\n\n<div class=\"contain-section container\" id=\"the-toppy\">\n  <div class=\"top-tite\" (click)=\"slideToActu()\">\n    <span *ngIf=\"!isNews\">Les actualités</span>\n    <span *ngIf=\"isNews\">Les nouvelles</span>\n\n    <fa name=\"globe\" animation=\"spin\"></fa>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-5\" *ngIf=\"!noNews\">\n      <div class=\"section-left\">\n        <div class=\"section-left-date\">\n          <p class=\"p1\">\n            du <span class=\"date\" *ngIf=\"currentActu\">\n              {{currentActu.date_creation}}\n            </span>\n          </p>\n          <p class=\"p2\" *ngIf=\"currentActu\">\n            by <span>{{currentActu.posteur}}</span>\n          </p>\n        </div>\n        <!-- <img src=\"./../../../../../assets/images/latest/4.jpg\" alt=\"\" id=\"poster\"> -->\n        <img [src]=\"currentActu.image\" alt=\"\" id=\"poster\" *ngIf=\"currentActu\">\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 offset-lg-1\">\n      <div class=\"section-right\">\n        <h3 class=\"section-right-h3\" *ngIf=\"currentActu\">\n          {{currentActu.titre}}\n        </h3>\n        <!-- <div class=\"section-right-description\" *ngIf=\"currentActu\">\n          {{currentActu.description}}\n        </div> -->\n        <div class=\"section-right-description\" *ngIf=\"currentActu\"\n        [innerHTML]=\"currentActu.description | sanitizeHtml\"></div>\n        <br><br>\n        <!-- <div class=\"section-right-description\">\n          Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n          Quidem commodi alias quam ratione deleniti, ea eligendi dolor labore nobis\n          ad consequuntur necessitatibus hic\n          maiores consequatur beatae, doloremque tempore magnam ullam!\n        </div> -->\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\" *ngIf=\"galleryOne\">\n      <div class=\"contain-gallerie\" *ngIf=\"galleryOne.length > 0\">\n\n        <div class=\"contain-gallerie-one\" *ngIf=\"currentActu\">\n          <div class=\"img\" *ngFor=\"let item of galleryOne\">\n            <img [src]=\"item\" alt=\"\" class=\"image\">\n            <div class=\"overlay\">\n              <div class=\"text\">\n                <span *ngIf=\"!isNews\">Actualité</span>\n                <span *ngIf=\"isNews\">Nouvelle</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"text-gallerie\">\n          <span *ngIf=\"galleryOne.length === 1\">galerie</span>\n          <span *ngIf=\"galleryOne.length > 1\">galeries</span>\n        </div>\n        <div class=\"bar-gallerie\">\n        </div>\n\n        <div class=\"contain-gallerie-two\">\n          <!-- <div class=\"img\" *ngFor=\"let item of galleryTwo\">\n            <img [src]=\"item.path\" alt=\"\" class=\"image\">\n            <div class=\"overlay\">\n              <div class=\"text\">{{item.alt}}</div>\n            </div>\n          </div> -->\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n                <!--Latest News Area Start-->\n                <div class=\"latest-area section-padding bg-white\" id=\"top-row\">\n                  <div class=\"container\">\n                      <div class=\"row\">\n                          <div class=\"col-md-12\">\n                              <div class=\"section-title-wrapper\">\n                                  <div class=\"section-title\">\n                                      <h3>\n                                        Récentes\n                                        <span *ngIf=\"!isNews\">actualités</span>\n                                        <span *ngIf=\"isNews\">nouvelles</span>\n                                      </h3>\n                                      <p>Les informations partagées</p>\n                                      <div class=\"bottomy\">\n                                        <p class=\"bottomy-one\"></p>\n                                        <div class=\"bottomy-center\">\n                                          <fa name=\"globe\"></fa>\n                                        </div>\n                                        <p class=\"bottomy-two\"></p>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-12 col-12\" *ngFor=\"let item of four_actu; let i=index\">\n                          <div class=\"single-latest-item\">\n                              <div class=\"single-latest-image\">\n                                  <!--<a [href]=\"item.slug\">-->\n                                    <img [src]=\"item.image\" alt=\"\" (click)=\"showActu(item.titre, item.date_mise_jour, item.posteur)\">\n                                  <!--</a>-->\n                              </div>\n                              <div class=\"single-latest-text\">\n                                  <h3><a>{{item.titre}}</a></h3>\n                                  <div class=\"single-item-comment-view\">\n                                    <span><i class=\"fa fa-calendar\"></i>{{item.date_creation}}</span>\n                                </div>\n\n                                <div [innerHTML]=\"item.description.substring(0, 100) | sanitizeHtml\"></div>\n                                <!-- <div>\n                                  {{item.description.substring(0, 100)}}...\n                                  </div> -->\n                                 <a class=\"btn button-default\" (click)=\"showActu(item.titre, item.date_mise_jour, item.posteur)\">\n                                   Afficher\n                                  </a>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"col-lg-12\" *ngIf=\"noNews\">\n                        <div class=\"no-actu\">\n                          Aucune &nbsp;\n                          <span *ngIf=\"isNews\">nouvelle</span>\n                          <span *ngIf=\"!isNews\">actualité</span>\n                          &nbsp;\n                          disponible\n                        </div>\n                      </div>\n                      </div>\n                  </div>\n                  <div class=\"content-pagination\">\n                    <span *ngFor=\"let item of nbPagination\" (click)=\"page(item)\" [ngClass]=\"{current : item === currentPagination}\">\n                      {{item}}\n                    </span>\n                    <span (click)=\"page(currentPagination+1)\" *ngIf=\"!noNews\">\n                      <i class=\"fas fa-arrow-right\"></i>\n                    </span>\n                  </div>\n              </div>\n              <!--End of Latest News Area-->\n\n<app-footer></app-footer>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/events/events.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/events/events.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid main\">\n  <div class=\"title\">\n    Les Annonces\n  </div>\n\n  <div class=\"card-one\">\n    <div class=\"container-fluid\">\n      <div class=\"contain-two\">\n          <h2 class=\"title-card-one\">\n            communiqués à la une\n          </h2>\n\n          <div class=\"line\"></div>\n      </div>\n\n      <div class=\"noAnnonce\" *ngIf=\"three_news == null || three_news == undefined\">\n        Aucune annonce\n      </div>\n\n      <div class=\"row contain-com\">\n        <div class=\"col-lg-4\" *ngFor=\"let item of three_news\">\n            <div class=\"contain\">\n              <img [src]=\"item.image\" alt=\"\" class=\"contain-img\">\n              <h4 class=\"contain-title\">{{item.titre}}</h4>\n              <p class=\"contain-date\">{{item.date_mise_jour}}</p>\n              <div class=\"contain-description\" [innerHTML]=\"item.description.substring(0, 200) | sanitizeHtml\"></div>\n\n              <!-- <div class=\"contain-description\">{{item.description.substring(0, 200)}}...</div> -->\n\n              <div class=\"lire-plus\" (click)=\"lire(item)\">\n                Lire le communiqué\n                <span>\n                  <i class=\"fas fa-arrow-right\"></i>\n                </span>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"contain-other-com\" id=\"contain-other-intern\">\n    <div class=\"contain-other-intern\">\n      <div class=\"row list-com\" *ngFor=\"let item of last_news\">\n        <div class=\"content-src-img col-lg-4\">\n            <img [src]=\"item.image\" alt=\"\">\n        </div>\n        <div class=\"col-lg-7\">\n          <div class=\"description-other\">\n            <p class=\"date-other\">\n              {{item.date_mise_jour}}\n            </p>\n            <p class=\"title-other\">\n              {{item.titre}}\n            </p>\n            <div class=\"detail-other\" [innerHTML]=\"item.description.substring(0, 100) | sanitizeHtml\"></div>\n\n            <!-- <div class=\"detail-other\">\n              {{item.description.substring(0, 100)}}...\n            </div> -->\n\n            <div class=\"lire-plus\" (click)=\"lire(item)\">\n              Lire le communiqué\n              <span>\n                <i class=\"fas fa-arrow-right\"></i>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"content-pagination\" *ngIf=\"nbPagination.length > 0\">\n      <span *ngFor=\"let item of nbPagination\" (click)=\"page(item)\" [ngClass]=\"{current : item === currentPagination}\">\n        {{item}}\n      </span>\n      <span (click)=\"page(currentPagination+1)\">\n        <i class=\"fas fa-arrow-right\"></i>\n      </span>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/news-all.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/news-all.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header></app-main-header>\n\n<div class=\"header-news\">\n  <div class=\"title-header-news\">\n    Plus d'annonce\n  </div>\n  <div class=\"descr-header-news\">\n    Offre d'emploi - Aide en ligne -\n    Publication de demande - Partenariat à l'étranger\n  </div>\n</div>\n\n<app-events></app-events>\n\n<app-footer></app-footer>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/popup-event/popup-event.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/details/news-all/popup-event/popup-event.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-popup\">\n  <div class=\"outside-popup\">\n    <img [src]=\"image\" alt=\"\" class=\"img-popup\">\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"contain-title\">\n          <h2 class=\"main-title\">\n            {{titre}}\n          </h2>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"contain-date\" *ngIf=\"date\">\n          Du : {{date}}\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"contain-posteur\" *ngIf=\"posteur\">\n          Posté par : {{posteur}}\n        </div>\n      </div>\n      <div class=\"col-lg-12\">\n        <div class=\"rightSide\">\n          <!-- <div class=\"desc\">\n            {{description}}\n          </div> -->\n          <div class=\"desc\" [innerHTML]=\"description | sanitizeHtml\"></div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-3\" *ngFor=\"let item of galerie\">\n        <img [src]=\"item\" alt=\"\" class=\"image\">\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/director-word/director-word.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/director-word/director-word.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <!--About Area Start-->\n    <div class=\"about-area\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-8 col-md-7 col-sm-6\" >\n                    <div class=\"about-container\">\n                      <h3 id=\"head-director-words\">Mot du Directeur</h3>\n                        <div id=\"director-words\">\n                          \n                          <div [innerHTML]=\"wordDirector | sanitizeHtml\">\n                          </div>\n                          <br>\n                        </div>\n                        <div class=\"timber\">\n                          - Ecole Nationale Informatique -\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-4 col-sm-6 contain-director\">\n                  <img [src]=\"imgDirector\" alt=\"\" id=\"imgDirector\">\n                  <p class=\"name-director\">\n                    {{nameDirector}}\n                  </p>\n                </div>\n            </div>\n        </div>\n    </div>\n  <!--End of About Area-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/formations/formations.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/formations/formations.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content container-fluid\">\n  <div class=\"row row-title-actu\">\n    <div class=\"col-md-12\">\n        <div class=\"section-title-wrapper\">\n            <div class=\"section-title\">\n                <h4>formations</h4>\n                <p>\n                  Les formations offertes par l'Ecole\n                </p>\n                <div class=\"bottomy\">\n                  <p class=\"bottomy-one\"></p>\n                  <div class=\"bottomy-center\">\n                    <fa name=\"globe\"></fa>\n                  </div>\n                  <p class=\"bottomy-two\"></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n\n                  <!--Teachers Area Start-->\n                  <div class=\"teachers-area padding-top\">\n                    <div class=\"container-fluid contain-area\">\n                        <div class=\"row\">\n                              <div class=\"col-lg-4\" *ngFor=\"let item of formations; let i = index\" [ngClass]=\"{'col-lg-12': formations.length == 1,'col-lg-6': formations.length == 2, 'col-lg-4' : formations.length > 2}\">\n                                <div class=\"single-teacher-item\">\n                                    <div class=\"single-teacher-image\">\n                                    </div>\n                                    <!-- [ngClass]=\"{'one': i == 0, 'two': i == 1, 'three': i == 2}\" -->\n                                    <div class=\"single-teacher-text\"\n                                    [ngStyle]=\"{background: 'url('+ item.photo +')', 'background-size': 'cover',\n                                    'background-position': 'center'}\">\n                                      <h3><a>{{item.libelle}}</a></h3>\n                                        <h4 *ngIf=\"item.libelle == txt1\">Bac + 3</h4>\n                                        <h4 *ngIf=\"item.libelle == txt2\">Bac + 4</h4>\n                                        <h4 *ngIf=\"item.libelle == txt3\">Bac + 5</h4>\n                                      <p class=\"descr-formation\" [innerHTML]=\"item.description | sanitizeHtml\">\n                                      </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-12\" *ngIf=\"noNews\">\n                              <div class=\"no-news\">\n                                Aucune donnée disponible\n                              </div>\n                            </div>\n\n                            <!-- <div class=\"col-lg-4 col-12\">\n                                <div class=\"single-teacher-item\">\n                                    <div class=\"single-teacher-image\">\n                                    </div>\n                                    <div class=\"single-teacher-text one\">\n                                        <h3><a>LICENCE</a></h3>\n                                        <h4>Bac + 3</h4>\n                                        <p>\n                                          Obtention d'un diplôme de Licence Professionnelle,\n                                          validé par l'Université de Fianarantsoa et par l'Etat.\n                                        </p>\n                                    </div>\n                                </div>\n                            </div> -->\n                            <!-- <div class=\"col-lg-4 col-12\">\n                                <div class=\"single-teacher-item\">\n                                    <div class=\"single-teacher-image\">\n                                    </div>\n                                    <div class=\"single-teacher-text two\">\n                                        <h3><a>MASTER</a></h3>\n                                        <h4>Bac + 5</h4>\n                                        <p>\n                                          Obtention d'un diplôme de Master Professionnel,\n                                          validé par l'Université de Fianarantsoa et par l'Etat.\n                                        </p>\n                                    </div>\n                                </div>\n                            </div> -->\n                            <!-- <div class=\"col-lg-4 col-12\">\n                                <div class=\"single-teacher-item \">\n                                    <div class=\"single-teacher-image\">\n                                    </div>\n                                    <div class=\"single-teacher-text three\">\n                                        <h3><a>DOCTORAT</a></h3>\n                                        <h4>Bac + 8</h4>\n                                        <p>\n                                          Obtention du doctorat, validé par l'Université de Fianarantsoa et par l'Etat.\n                                          Dans le but de continuer l'epanouissement\n                                          des connaissances en informatique.\n                                        </p>\n                                    </div>\n                                </div>\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n                <!--End of Teachers Area-->\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("                <div class=\"container-fluid\">\n                <div class=\"course-area section-padding\">\n                  <div class=\"container-fluid contain-actu\">\n                      <div class=\"row row-title-actu\">\n                          <div class=\"col-md-12\">\n                              <div class=\"section-title-wrapper\">\n                                  <div class=\"section-title\">\n                                      <h4>actualités</h4>\n                                      <p>\n                                        Les 3 dernières actualités à la une\n                                      </p>\n                                      <div class=\"bottomy\">\n                                        <p class=\"bottomy-one\"></p>\n                                        <div class=\"bottomy-center\">\n                                          <fa name=\"globe\"></fa>\n                                        </div>\n                                        <p class=\"bottomy-two\"></p>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"row row-actu\">\n                          <div class=\"col-lg-4\" *ngFor=\"let item of actuality\">\n                              <div class=\"single-item\">\n                                  <div class=\"single-item-image overlay-effect\">\n                                      <img [src]=\"item.image\" alt=\"\" id=\"imgActu\">\n                                  </div>\n                                  <div class=\"single-item-text\">\n                                      <h4><a>{{item.titre}}</a></h4>\n                                      <div class=\"single-item-text-info\">\n                                          <span>By: <span>{{item.posteur}}</span></span> <br>\n                                          <span>Date: <span>{{item.date_mise_jour}}</span></span>\n                                      </div>\n                                      <!-- <p>\n                                        {{item.description.substring(0, 150)}}...\n                                      </p> -->\n                                      <div class=\"p\" [innerHTML]=\"item.description.substring(0, 150) | sanitizeHtml\">\n                                      </div>\n                                  </div>\n                                  <div class=\"button-bottom\" (click)=\"seeActu(item.titre, item.date_mise_jour, item.posteur)\">\n                                      <a class=\"button-default\">Voir l'actualité</a>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"col-lg-12\" *ngIf=\"noActu\">\n                            <div class=\"no-actu\">\n                              Aucune actualité disponible\n                            </div>\n                          </div>\n                          <br>\n                          <!-- <div class=\"col-md-12 col-sm-12 text-center\" id=\"content-button-large\" *ngIf=\"!noActu\">\n                              <a class=\"button-default button-large\" (click)=\"allNews()\">\n                                Les actualités\n                                <i class=\"fas fa-chevron-right\"></i>\n                              </a>\n                          </div> -->\n                      </div>\n                  </div>\n              </div>\n            </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("                <!--Newsletter Area Start-->\n                <div class=\"newsletter-area\">\n                  <div class=\"container\">\n                      <div class=\"row\">\n                          <div class=\"col-lg-5 col-md-5\">\n                              <div class=\"newsletter-content\">\n                                  <h2>Recevoir</h2>\n                                  <h2>DES NOUVELLES</h2>\n                              </div>\n                          </div>\n                          <div class=\"col-lg-7 col-md-7\">\n                              <div class=\"newsletter-form angle\">\n                                  <form action=\"#\" id=\"mc-form\" class=\"mc-form footer-newsletter fix\">\n                                      <div class=\"subscribe-form\">\n                                          <input [(ngModel)]=\"emailNewsletter\" id=\"mc-email\" type=\"email\" name=\"email\" placeholder=\"Votre adresse email...\">\n                                          <button id=\"mc-submit\" type=\"submit\" (click)=\"newsletter()\">S'INSCRIRE</button>\n                                      </div>\n                                  </form>\n                                  <!-- mailchimp-alerts Start -->\n                                  <div class=\"mailchimp-alerts text-centre fix pull-right\">\n                                      <div class=\"mailchimp-submitting\"></div><!-- mailchimp-submitting end -->\n                                      <div class=\"mailchimp-success\"></div><!-- mailchimp-success end -->\n                                      <div class=\"mailchimp-error\"></div><!-- mailchimp-error end -->\n                                  </div>\n                                  <!-- mailchimp-alerts end -->\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <!--End of Newsletter Area-->\n              <!--Footer Widget Area Start-->\n              <div class=\"footer-widget-area\">\n                  <div class=\"container\">\n                      <div class=\"row\">\n                          <div class=\"col-lg-3 col-md-6 col-12\">\n                              <div class=\"single-footer-widget\">\n                                  <div class=\"footer-logo\">\n                                      <a>\n                                        <img [src]=\"logo\" alt=\"\" id=\"footer-logo\" (click)=\"home()\">\n                                      </a>\n                                  </div>\n                                  <p>\n                                    Rejoignez-nous sur :\n                                  </p>\n                                  <div class=\"social-icons\">\n                                      <a [href]=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n                                      <a [href]=\"youtube\"><i class=\"fa fa-youtube\"></i></a>\n                                      <a [href]=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n                                      <a [href]=\"instagram\"><i class=\"fa fa-instagram\"></i></a>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"col-lg-3 col-md-6 col-12\">\n                              <div class=\"single-footer-widget\">\n                                  <h3>INFORMATIONS</h3>\n                                  <a [href]=\"callPhone\">\n                                  <i class=\"fa fa-phone\"></i>{{telephone}}</a>\n                                  <span><i class=\"fa fa-envelope\"></i>{{email}}</span>\n                                  <span><i class=\"fa fa-globe\"></i>{{site}}</span>\n                                  <span><i class=\"fa fa-map-marker\"></i>{{adresse}}</span>\n                              </div>\n                          </div>\n                          <div class=\"col-lg-3 col-md-6 col-12\">\n                              <div class=\"single-footer-widget\">\n                                  <h3>Pages</h3>\n                                  <ul class=\"footer-list\" *ngFor=\"let item of menu\">\n                                      <li><a [href]=\"item.slug\">{{item.titre}}</a></li>\n                                  </ul>\n                              </div>\n                          </div>\n                          <div class=\"col-lg-3 col-md-6 col-12\">\n                              <div class=\"single-footer-widget\">\n                                  <div>\n                                      <img [src]=\"logoUf\" alt=\"\">\n                                  </div>\n                                \n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n\n              <!--End of Footer Widget Area-->\n              <!--Footer Area Start-->\n              <footer class=\"footer-area\">\n                  <div class=\"container\">\n                      <div class=\"row\">\n                          <div class=\"col-lg-6 col-md-7 col-12\">\n                              <span>Copyright &copy; ENI 2021\n                                &nbsp;&nbsp;\n                                <a href=\"#\">ICT Event</a></span>\n                          </div>\n                          <div class=\"col-lg-6 col-md-5 col-12\">\n                              <div class=\"column-right\">\n                                  <span>Privacy Policy , Terms &amp; Conditions</span>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </footer>\n              <!--End of Footer Area-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header></app-main-header>\n\n  <section id=\"carouselExampleFade\" [ngClass]=\"{'noData': news.length == 0}\" class=\"carousel slide carousel-fade slider\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item\" *ngFor=\"let item of news; let i = index\" [ngClass]=\"{active: i==0}\">\n        <img [src]=\"item.image\" class=\"d-block\" alt=\"...\">\n        <div class=\"carousel-caption\">\n            <h2>{{item.titre}}</h2>\n            <p [innerHTML]=\"item.description.substring(0, 100) | sanitizeHtml\">\n            </p>\n            <!-- <p>{{item.description}}</p> -->\n            <div class=\"button-01\" (click)=\"seeNews(item.titre, item.date_mise_jour, item.posteur)\">\n                <ul>\n                    <li class=\"btn btn-default btn_continue\"><a>Continuer</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    </div>\n\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n</section>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/main-header/main-header.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/main-header/main-header.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-header-slide id=\"with-slide\"></app-top-header-slide>\n\n<app-top-header id=\"no-slide\"></app-top-header>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/top-header-slide/top-header-slide.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/top-header-slide/top-header-slide.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"mimi-main\">\n\n<div class=\"top-content\" id=\"top-content\">\n  <div class=\"first-content\">\n    <div class=\"content-logo\">\n      <div class=\"univ-eni\">\n        Ecole Nationale Informatique\n      </div>\n      <div class=\"mobile-univ-eni\">\n        <p class=\"firstly\">\n          Ecole\n        </p>\n        <p class=\"secondly\">\n          Nationale Informatique\n        </p>\n      </div>\n    </div>\n\n    <div class=\"content-action-header\">\n      <div class=\"menu-action\">\n        <div class=\"p\" (click)=\"login()\">\n          <img [src]=\"profile\" alt=\"\" id=\"img-profile\">\n          <span>\n            Se Connecter\n          </span>\n        </div>\n      </div>\n      <div class=\"menu-action\">\n        <img [src]=\"langues[0].flag\" alt=\"\" id=\"flags\">\n      </div>\n    </div>\n\n    <div class=\"content-logo-uf\"  (click)=\"home()\">\n      <img [src]=\"logoUf\" alt=\"\" id=\"logo-uf\">\n      <img [src]=\"logo\" alt=\"logo-UF\" id=\"logo-eni\">\n    </div>\n  </div>\n\n  <div class=\"second-content\">\n    <div class=\"my-menu\" *ngFor=\"let item of menu\">\n      <a [href]=\"item.slug\">\n        {{item.titre}}\n      </a>\n    </div>\n    <div class=\"my-menu-2\" id=\"best-menu-mobile\">\n      <div class=\"bar\"></div>\n      <div class=\"bar\"></div>\n      <div class=\"bar\"></div>\n    </div>\n    <div class=\"flag-mobile\">\n      <img [src]=\"langues[0].flag\" alt=\"\" id=\"flags\">\n    </div>\n  </div>\n  <div id=\"progress-man\" *ngIf=\"isLoading\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </div>\n</div>\n\n<div class=\"external-content\" id=\"external-content\">\n  <div id=\"mobile\" class=\"demo1\">\n    <ul id=\"nav\">\n      <li *ngFor=\"let item of menu\" id=\"menu-colapse\">\n        {{item.titre}}\n      </li>\n      <li id=\"login-mobile\" (click)=\"login()\">\n        <img [src]=\"profile\" alt=\"\" id=\"img-profile-mobile\">\n        <span>\n          Se Connecter\n        </span>\n      </li>\n    </ul>\n  </div>\n</div>\n\n</div>\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/top-header/top-header.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/top-header/top-header.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top-content\" id=\"top-content\">\n  <div class=\"first-content\">\n    <div class=\"content-logo\">\n      <div class=\"univ-fianar\">\n        <img [src]=\"logoUf\" alt=\"\" id=\"uf\">\n        <p>\n          Université de Fianarantsoa\n        </p>\n        <img [src]=\"logoUf\" alt=\"\" id=\"uf\">\n      </div>\n      <div class=\"univ-eni\">\n        ECOLE NATIONALE INFORMATIQUE\n      </div>\n    </div>\n\n    <div class=\"content-action-header\">\n      <div class=\"menu-action\">\n        <div class=\"p\" (click)=\"login()\">\n          <img [src]=\"profile\" alt=\"\" id=\"img-profile\">\n          <span>\n           Se Connecter\n          </span>\n        </div>\n      </div>\n      <div class=\"menu-action\">\n        <img [src]=\"langues[0].flag\" alt=\"\" id=\"flags\">\n      </div>\n    </div>\n\n    <div class=\"content-logo-uf\"  (click)=\"home()\">\n      <!--<div id='warped1'>\n        <span class='w0'>E</span><span class='w1'>n</span><span class='w2'>s</span><span class='w3'>e</span><span class='w4'>m</span><span class='w5'>b</span><span class='w6'>l</span><span class='w7'>e</span>\n      </div>-->\n      <img [src]=\"logo\" alt=\"logo-UF\" id=\"logo-eni\">\n      <!--<div id='warped1'>\n      <div id='warped'>\n        <span class='w0'>E</span><span class='w1'>x</span><span class='w2'>c</span><span class='w3'>e</span><span class='w4'>l</span><span class='w5'>l</span><span class='w6'>e</span><span class='w7'>n</span><span class='w8'>c</span><span class='w9'>e</span>\n    </div>\n    </div>-->\n    </div>\n  </div>\n\n  <div class=\"second-content\">\n    <div class=\"my-menu\" *ngFor=\"let item of menu\">\n      <a [href]=\"item.slug\">\n        {{item.titre}}\n      </a>\n    </div>\n    <div class=\"my-menu-2\" id=\"best-menu-mobile-main\">\n      <div class=\"bar\"></div>\n      <div class=\"bar\"></div>\n      <div class=\"bar\"></div>\n    </div>\n    <div class=\"flag-mobile\">\n      <img [src]=\"langues[0].flag\" alt=\"\" id=\"flags\">\n    </div>\n  </div>\n</div>\n\n<div class=\"external-content\" id=\"external-content-main\">\n  <div id=\"mobile-main\" class=\"demo2\">\n    <ul id=\"nav\">\n      <li *ngFor=\"let item of menu\" id=\"menu-colapse\">\n        {{item.titre}}\n      </li>\n      <li id=\"login-mobile\" (click)=\"login()\">\n        <img [src]=\"profile\" alt=\"\" id=\"img-profile-mobile\">\n        <span style=\"font-family: raleway;\">\n          Se Connecter\n        </span>\n      </li>\n    </ul>\n  </div>\n</div>\n<div id=\"progress-man\" *ngIf=\"isLoading\">\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n\n\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"scroll-to-top\" [ngClass]=\"{'show-scrollTop': windowScrolled}\">\n  <button type=\"button\" class=\"btn active btn_top\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"scrollToTop()\">\n      <i class=\"fas fa-chevron-up faUp\" ></i>\n  </button>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".cc {\n  background-color: whitesmoke;\n}\n\n.main {\n  width: 100%;\n  height: 400px;\n  background-image: url('a-propos-de-nous.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0.7;\n  padding-top: 50px;\n  padding-left: 50px;\n}\n\n.main-contain {\n  padding: 20px;\n  width: 300px;\n  border: 2px solid #0c2d50;\n  color: #0c2d50;\n}\n\n.main-contain h3 {\n  font-size: 50px;\n  letter-spacing: 25px;\n}\n\n.main-contain p {\n  letter-spacing: 4px;\n}\n\n.bottomy {\n  width: 25%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.bottomy-one, .bottomy-two {\n  width: 50%;\n  height: 3px;\n  background-color: #0c2d50;\n}\n\n.bottomy-center {\n  margin-left: 5%;\n  margin-right: 5%;\n  position: relative;\n  bottom: 15px;\n}\n\n.bottomy-center i {\n  font-size: 30px;\n}\n\n.main-title {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n  color: #0c2d50;\n}\n\n.main-title h3 {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 25px;\n  letter-spacing: 5px;\n}\n\n/*----------------------------------------*/\n\n/*  17.1 Teachers Area\n/*----------------------------------------*/\n\n.teachers-area {\n  padding: 0 0 50px;\n  margin-top: 40px;\n}\n\n.single-teacher-item {\n  box-shadow: 1px 0 5px rgba(0, 0, 0, 0.2);\n  position: relative;\n  transition: all 0.5s !important;\n  cursor: pointer;\n}\n\n.single-teacher-item:hover {\n  box-shadow: 0 6px 20px rgba(34, 30, 31, 0.3);\n}\n\n.single-teacher-image > a {\n  display: inline-block;\n  position: relative;\n}\n\n.single-teacher-image > a img, .single-teacher-image > a {\n  width: 100%;\n}\n\n.single-teacher-image > a:after {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  position: absolute;\n  top: 0;\n  transition: all 0.3s ease 0s;\n  width: 100%;\n}\n\n.single-teacher-item:hover .single-teacher-image > a:after {\n  opacity: 1;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n}\n\n.single-teacher-text {\n  background: #f6f6f6 none repeat scroll 0 0;\n  border-bottom: 3px solid #0c2d50;\n  padding: 20px 26px 90px;\n  text-align: center;\n  transition: all 0.4s;\n}\n\n.single-teacher-item:hover .single-teacher-text {\n  margin-top: -45px;\n  padding: 20px 26px 66px;\n  position: absolute;\n  z-index: 9;\n}\n\n.single-teacher-text > h3 {\n  font-family: raleway;\n  font-weight: 600;\n  margin-bottom: 4px;\n  padding-top: 20px;\n  font-size: 24px;\n}\n\n.single-teacher-item:hover .single-teacher-text > h3 {\n  padding-top: 0;\n}\n\n.single-teacher-text > h3 a {\n  color: #222222;\n  transition: all 0.3s;\n}\n\n.single-teacher-text > h4 {\n  font-family: raleway;\n  font-weight: 500;\n}\n\n.single-teacher-text > p {\n  display: none;\n  padding-top: 13px;\n}\n\n.single-teacher-item:hover .single-teacher-text p {\n  display: block;\n}\n\n.social-links > a {\n  border: 1px solid #2d3e50;\n  border-radius: 50%;\n  color: #2d3e50;\n  display: inline-block;\n  font-size: 14px;\n  height: 27px;\n  line-height: 25px;\n  margin: 0 3px;\n  text-align: center;\n  width: 27px;\n}\n\n.social-links > a:hover {\n  color: #ffffff;\n}\n\n.social-links {\n  bottom: 38px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  width: 100%;\n  transition: all 0.3s ease 0s;\n}\n\n.single-teacher-item:hover .social-links {\n  bottom: 25px;\n}\n\n.single-course-details {\n  background: #f6f6f6 none repeat scroll 0 0;\n  border-bottom: 3px solid #0c2d50;\n  margin-bottom: 80px;\n  padding: 33px 0;\n}\n\n.single-course-details .single-item-text {\n  padding-right: 48px;\n}\n\n.course-details-area a img {\n  margin-left: -35px;\n}\n\n.single-course-details a {\n  display: block;\n}\n\n.single-course-details .col-md-6:first-child {\n  padding-right: 3px;\n}\n\n.details {\n  margin-left: 10%;\n  margin-right: 10%;\n  height: 500px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  padding-right: 20px;\n}\n\n.details::-webkit-scrollbar {\n  width: 3px;\n  background: white;\n}\n\n.details h3 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  white-space: nowrap;\n  width: 30%;\n  padding-bottom: 5px;\n  border-bottom: 3px solid #0c2d50;\n}\n\n.details h3 i {\n  margin-right: 2px;\n  /* width: 17px; */\n  font-size: 30px;\n  position: relative;\n  bottom: 3px;\n}\n\n.details div, .details p {\n  text-align: justify;\n}\n\n.space {\n  margin-bottom: 80px;\n}\n\n.mimi {\n  height: -15px;\n}\n\n.contain-img {\n  width: 100%;\n  height: 260px;\n  margin-top: 30px;\n}\n\n.contain-img img {\n  width: 100%;\n  height: 100%;\n}\n\n.overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #33333391;\n  overflow: hidden;\n  width: 0;\n  height: 90%;\n  transition: 0.5s ease;\n}\n\n.contain-img:hover .overlay {\n  width: 100%;\n}\n\n.text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  white-space: nowrap;\n}\n\n@media screen and (max-width: 480px) {\n  .details h3 {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    white-space: normal;\n    width: 100%;\n    padding-bottom: 5px;\n    border-bottom: 3px solid #0c2d50;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  .main {\n    padding-left: 0px;\n  }\n}\n\n.contain-text {\n  margin-top: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLDRCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQXZCYTtBQ3FCZjs7QURLQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0ZGOztBREtBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkE3Q2E7QUMyQ2Y7O0FES0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNGRjs7QURJRTtFQUNFLGVBQUE7QUNGSjs7QURNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQWxFYTtBQytEZjs7QURNQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQSwyQ0FBQTs7QUFDQTsyQ0FBQTs7QUFFQTtFQUFnQixpQkFBQTtFQUFtQixnQkFBQTtBQ0RuQzs7QURFQTtFQUNJLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUE0Qiw0Q0FBQTtBQ0c1Qjs7QURGQTtFQUEyQixxQkFBQTtFQUF1QixrQkFBQTtBQ09sRDs7QUROQTtFQUEwRCxXQUFBO0FDVTFEOztBRFRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGdFQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFFQSw0QkFBQTtFQUNBLFdBQUE7QUNZSjs7QURWQTtFQUNJLFVBQUE7RUFDQSxrRUFBQTtFQUNBLDBCQUFBO0FDYUo7O0FEWEE7RUFDSSwwQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDY0o7O0FEWkE7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDZUo7O0FEYkE7RUFDQyxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNnQkQ7O0FEZEE7RUFBc0QsY0FBQTtBQ2tCdEQ7O0FEakJBO0VBQTZCLGNBQUE7RUFBZ0Isb0JBQUE7QUNzQjdDOztBRHJCQTtFQUEyQixvQkFBQTtFQUFzQixnQkFBQTtBQzBCakQ7O0FEekJBO0VBQTBCLGFBQUE7RUFBZSxpQkFBQTtBQzhCekM7O0FEN0JBO0VBQW1ELGNBQUE7QUNpQ25EOztBRGhDQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ21DSjs7QURqQ0E7RUFBeUIsY0FBQTtBQ3FDekI7O0FEcENBO0VBQ0ksWUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBRVEsNEJBQUE7QUN1Q1o7O0FEckNBO0VBQTBDLFlBQUE7QUN5QzFDOztBRHhDQTtFQUNJLDBDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUMyQ0o7O0FEekNBO0VBQTBDLG1CQUFBO0FDNkMxQzs7QUQ1Q0E7RUFBNEIsa0JBQUE7QUNnRDVCOztBRC9DQTtFQUEwQixjQUFBO0FDbUQxQjs7QURsREE7RUFBOEMsa0JBQUE7QUNzRDlDOztBRHBEQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDdURGOztBRHBEQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ3VERjs7QURwREE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ3VERjs7QURuREE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3NERjs7QURuREE7RUFDRSxtQkFBQTtBQ3NERjs7QURuREE7RUFDRSxtQkFBQTtBQ3NERjs7QURuREE7RUFDRSxhQUFBO0FDc0RGOztBRG5EQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNzREY7O0FEbkRBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNzREQ7O0FEN0NBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ2dERjs7QUQ3Q0E7RUFDRSxXQUFBO0FDZ0RGOztBRDdDQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUdBLGdDQUFBO0VBQ0EsbUJBQUE7QUNnREY7O0FEN0NBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQ0FBQTtFQ2dERjtBQUNGOztBRDdDQTtFQUNFO0lBQ0UsaUJBQUE7RUMrQ0Y7QUFDRjs7QUQ1Q0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDOENGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmaXJzdC1jb2xvciA6ICMwYzJkNTA7XG4kc2Vjb25kLWNvbG9yIDogIzAwMjI0NztcblxuLmNjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLm1haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0VOSS9hLXByb3Bvcy1kZS1ub3VzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAwLjc7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi5tYWluLWNvbnRhaW4ge1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICRmaXJzdC1jb2xvcjtcbiAgY29sb3I6ICRmaXJzdC1jb2xvcjtcbn1cblxuLm1haW4tY29udGFpbiBoMyB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDI1cHg7XG59XG5cbi5tYWluLWNvbnRhaW4gcCB7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG59XG5cbi5ib3R0b215IHtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYm90dG9teS1vbmUsIC5ib3R0b215LXR3byB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlyc3QtY29sb3I7XG59XG5cbi5ib3R0b215LWNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDE1cHg7XG5cbiAgaSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59XG5cbi5tYWluLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBjb2xvcjogJGZpcnN0LWNvbG9yO1xufVxuXG4ubWFpbi10aXRsZSBoMyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAgMTcuMSBUZWFjaGVycyBBcmVhXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnRlYWNoZXJzLWFyZWEge3BhZGRpbmc6IDAgMCA1MHB4OyBtYXJnaW4tdG9wOiA0MHB4O31cbi5zaW5nbGUtdGVhY2hlci1pdGVtIHtcbiAgICBib3gtc2hhZG93OiAxcHggMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIHtib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMzQsIDMwLCAzMSwgMC4zKTt9XG4uc2luZ2xlLXRlYWNoZXItaW1hZ2UgPiBhIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHBvc2l0aW9uOiByZWxhdGl2ZTt9XG4uc2luZ2xlLXRlYWNoZXItaW1hZ2UgPiBhIGltZywgLnNpbmdsZS10ZWFjaGVyLWltYWdlID4gYSB7d2lkdGg6IDEwMCU7fVxuLnNpbmdsZS10ZWFjaGVyLWltYWdlID4gYTphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIC5zaW5nbGUtdGVhY2hlci1pbWFnZSA+IGE6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXCI7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uc2luZ2xlLXRlYWNoZXItdGV4dCB7XG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkZmlyc3QtY29sb3I7XG4gICAgcGFkZGluZzogMjBweCAyNnB4IDkwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLXRleHQge1xuICAgIG1hcmdpbi10b3A6IC00NXB4O1xuICAgIHBhZGRpbmc6IDIwcHggMjZweCA2NnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5O1xufVxuLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBoMyB7XG5cdGZvbnQtZmFtaWx5OiByYWxld2F5O1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRtYXJnaW4tYm90dG9tOiA0cHg7XG5cdHBhZGRpbmctdG9wOiAyMHB4O1xuXHRmb250LXNpemU6IDI0cHg7XG59XG4uc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciAuc2luZ2xlLXRlYWNoZXItdGV4dCA+IGgzIHtwYWRkaW5nLXRvcDogMDt9XG4uc2luZ2xlLXRlYWNoZXItdGV4dCA+IGgzIGEge2NvbG9yOiAjMjIyMjIyOyB0cmFuc2l0aW9uOiBhbGwgMC4zczt9XG4uc2luZ2xlLXRlYWNoZXItdGV4dCA+IGg0IHtmb250LWZhbWlseTogcmFsZXdheTsgZm9udC13ZWlnaHQ6IDUwMDt9XG4uc2luZ2xlLXRlYWNoZXItdGV4dCA+IHAge2Rpc3BsYXk6IG5vbmU7IHBhZGRpbmctdG9wOiAxM3B4O31cbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIC5zaW5nbGUtdGVhY2hlci10ZXh0IHAge2Rpc3BsYXk6IGJsb2NrO31cbi5zb2NpYWwtbGlua3MgPiBhIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmQzZTUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogIzJkM2U1MDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogMjdweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBtYXJnaW46IDAgM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMjdweDtcbn1cbi5zb2NpYWwtbGlua3MgPiBhOmhvdmVyIHtjb2xvcjogI2ZmZmZmZjt9XG4uc29jaWFsLWxpbmtzIHtcbiAgICBib3R0b206IDM4cHg7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzXG59XG4uc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciAuc29jaWFsLWxpbmtzIHtib3R0b206IDI1cHg7fVxuLnNpbmdsZS1jb3Vyc2UtZGV0YWlscyB7XG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkZmlyc3QtY29sb3I7XG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgICBwYWRkaW5nOiAzM3B4IDA7XG59XG4uc2luZ2xlLWNvdXJzZS1kZXRhaWxzIC5zaW5nbGUtaXRlbS10ZXh0IHtwYWRkaW5nLXJpZ2h0OiA0OHB4O31cbi5jb3Vyc2UtZGV0YWlscy1hcmVhIGEgaW1nIHttYXJnaW4tbGVmdDogLTM1cHg7fVxuLnNpbmdsZS1jb3Vyc2UtZGV0YWlscyBhIHtkaXNwbGF5OiBibG9jazt9XG4uc2luZ2xlLWNvdXJzZS1kZXRhaWxzIC5jb2wtbWQtNjpmaXJzdC1jaGlsZCB7cGFkZGluZy1yaWdodDogM3B4O31cblxuLmRldGFpbHMge1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5kZXRhaWxzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAzcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZGV0YWlscyBoMyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkZmlyc3QtY29sb3I7XG5cbn1cblxuLmRldGFpbHMgaDMgaSB7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICAvKiB3aWR0aDogMTdweDsgKi9cbiAgZm9udC1zaXplOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogM3B4O1xufVxuXG4uZGV0YWlscyBkaXYsIC5kZXRhaWxzIHAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc3BhY2Uge1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG4ubWltaSB7XG4gIGhlaWdodDogLTE1cHg7XG59XG5cbi5jb250YWluLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2MHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uY29udGFpbi1pbWcgaW1nIHtcbiB3aWR0aDogMTAwJTtcbiBoZWlnaHQ6IDEwMCU7XG59XG5cbi8vIC5jb250YWluLWltZyB7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgd2lkdGg6IDUwJTtcbi8vIH1cblxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMzkxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xufVxuXG4uY29udGFpbi1pbWc6aG92ZXIgLm92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZGV0YWlscyBoMyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGZpcnN0LWNvbG9yO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5tYWluIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxufVxuXG4uY29udGFpbi10ZXh0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBvcGFjaXR5OiAwLjc7XG59XG4iLCIuY2Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4ubWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRU5JL2EtcHJvcG9zLWRlLW5vdXMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDAuNztcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuLm1haW4tY29udGFpbiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzBjMmQ1MDtcbiAgY29sb3I6ICMwYzJkNTA7XG59XG5cbi5tYWluLWNvbnRhaW4gaDMge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAyNXB4O1xufVxuXG4ubWFpbi1jb250YWluIHAge1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xufVxuXG4uYm90dG9teSB7XG4gIHdpZHRoOiAyNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJvdHRvbXktb25lLCAuYm90dG9teS10d28ge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmQ1MDtcbn1cblxuLmJvdHRvbXktY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTVweDtcbn1cbi5ib3R0b215LWNlbnRlciBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubWFpbi10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgY29sb3I6ICMwYzJkNTA7XG59XG5cbi5tYWluLXRpdGxlIGgzIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qICAxNy4xIFRlYWNoZXJzIEFyZWFcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4udGVhY2hlcnMtYXJlYSB7XG4gIHBhZGRpbmc6IDAgMCA1MHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uc2luZ2xlLXRlYWNoZXItaXRlbSB7XG4gIGJveC1zaGFkb3c6IDFweCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgzNCwgMzAsIDMxLCAwLjMpO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItaW1hZ2UgPiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaW5nbGUtdGVhY2hlci1pbWFnZSA+IGEgaW1nLCAuc2luZ2xlLXRlYWNoZXItaW1hZ2UgPiBhIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaW5nbGUtdGVhY2hlci1pbWFnZSA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLWltYWdlID4gYTphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKVwiO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLXRleHQge1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMGMyZDUwO1xuICBwYWRkaW5nOiAyMHB4IDI2cHggOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLXRleHQge1xuICBtYXJnaW4tdG9wOiAtNDVweDtcbiAgcGFkZGluZzogMjBweCAyNnB4IDY2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBoMyB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIC5zaW5nbGUtdGVhY2hlci10ZXh0ID4gaDMge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBoMyBhIHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItdGV4dCA+IGg0IHtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zaW5nbGUtdGVhY2hlci10ZXh0ID4gcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xufVxuXG4uc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciAuc2luZ2xlLXRlYWNoZXItdGV4dCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zb2NpYWwtbGlua3MgPiBhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkM2U1MDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogIzJkM2U1MDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMjdweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbjogMCAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI3cHg7XG59XG5cbi5zb2NpYWwtbGlua3MgPiBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zb2NpYWwtbGlua3Mge1xuICBib3R0b206IDM4cHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciAuc29jaWFsLWxpbmtzIHtcbiAgYm90dG9tOiAyNXB4O1xufVxuXG4uc2luZ2xlLWNvdXJzZS1kZXRhaWxzIHtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzBjMmQ1MDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgcGFkZGluZzogMzNweCAwO1xufVxuXG4uc2luZ2xlLWNvdXJzZS1kZXRhaWxzIC5zaW5nbGUtaXRlbS10ZXh0IHtcbiAgcGFkZGluZy1yaWdodDogNDhweDtcbn1cblxuLmNvdXJzZS1kZXRhaWxzLWFyZWEgYSBpbWcge1xuICBtYXJnaW4tbGVmdDogLTM1cHg7XG59XG5cbi5zaW5nbGUtY291cnNlLWRldGFpbHMgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2luZ2xlLWNvdXJzZS1kZXRhaWxzIC5jb2wtbWQtNjpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cblxuLmRldGFpbHMge1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5kZXRhaWxzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAzcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZGV0YWlscyBoMyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMGMyZDUwO1xufVxuXG4uZGV0YWlscyBoMyBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIC8qIHdpZHRoOiAxN3B4OyAqL1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAzcHg7XG59XG5cbi5kZXRhaWxzIGRpdiwgLmRldGFpbHMgcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5zcGFjZSB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5taW1pIHtcbiAgaGVpZ2h0OiAtMTVweDtcbn1cblxuLmNvbnRhaW4taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjYwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5jb250YWluLWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMzkxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbn1cblxuLmNvbnRhaW4taW1nOmhvdmVyIC5vdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmRldGFpbHMgaDMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwYzJkNTA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5tYWluIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxufVxuLmNvbnRhaW4tdGV4dCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgb3BhY2l0eTogMC43O1xufSJdfQ== */");

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
        document.getElementById("parentDiv").scrollTop -= 200;
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
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  padding-right: 0px;\n}\n\n.left-side {\n  padding: 30px;\n  height: auto;\n}\n\n.right-side {\n  overflow: hidden;\n}\n\n.right-side img {\n  max-width: 100%;\n}\n\n.main-one span {\n  margin-right: 20px;\n  font-size: 3vw;\n}\n\n.main-one {\n  margin-top: 18px;\n  font-size: 21px;\n  color: #044973;\n  font-weight: 500;\n  font-family: \"Font Awesome 5 Brands\";\n}\n\n.main-two {\n  margin-top: 20px;\n}\n\nbutton.btn_connecter {\n  margin-top: 15px;\n  background: #044973;\n  color: white;\n  width: 170px;\n  height: 60px;\n  border: none;\n  border-radius: 3px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 20px;\n}\n\nbutton.btn_connecter:hover {\n  background: #0c2d50f6;\n}\n\n.content-form-field {\n  background: transparent;\n  padding: 10px;\n  display: flex;\n  margin-bottom: 30px;\n  justify-content: center;\n}\n\n.content-btn {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.bar {\n  margin-top: 5px;\n  width: 100%;\n  height: 2px;\n  background-color: #0c2d50db;\n}\n\nimg#logo-eni-popup {\n  width: 200px;\n  top: -60px;\n  left: -60px;\n  position: absolute;\n  z-index: 0;\n}\n\n.forgot-pass {\n  /* margin: 10px; */\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 26px;\n  font-size: 18px;\n}\n\n.forgot-pass span {\n  font-weight: 500;\n  cursor: pointer;\n  color: #044973;\n}\n\n/*\n@media screen and (max-width: 880px) {\n  .right-side {\n    display: none !important;\n  }\n\n  .right-side img {\n    display: none !important;\n  }\n\n  .left-side {\n    width: 100vh !important;\n  }\n\n  .main-one {\n    font-size: 33px;\n  }\n\n  .main-one span {\n    font-size: 20px;\n    margin-right: 10px;\n  }\n}\n*/\n\n@media screen and (max-width: 460px) {\n  .left-side {\n    padding-top: 75px !important;\n    padding-left: 10px !important;\n    /* padding: 3px; */\n    height: auto;\n    padding-right: 25px !important;\n  }\n\n  img#logo-eni-popup {\n    width: 150px;\n    top: -50px;\n    left: -50px;\n    position: absolute;\n    z-index: 0;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .left-side {\n    padding-top: 80px !important;\n    padding-left: 15px !important;\n    height: auto;\n    padding-right: 30px !important;\n  }\n\n  .content-form-field {\n    background: transparent;\n    padding: 2px;\n    border: 1px solid #0c2d50;\n    border-radius: 100px;\n    padding-left: 17px !important;\n  }\n\n  .btn_connecter {\n    margin-top: 0px;\n  }\n}\n\n.loader {\n  color: #ffffff;\n  font-size: 6px;\n  margin: 10px auto;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: load4 1.3s infinite linear;\n  animation: load4 1.3s infinite linear;\n  transform: translateZ(0);\n}\n\n@-webkit-keyframes load4 {\n  0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n\n@keyframes load4 {\n  0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n\n.contain-txt {\n  margin-top: 0px;\n  border: 2px solid #044973;\n  padding: 20px;\n  width: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #044973;\n}\n\n.txt-one {\n  font-size: 30px;\n  letter-spacing: 28px;\n  font-weight: bold;\n}\n\n.txt-two {\n  word-spacing: 0px;\n  font-weight: 500;\n}\n\n.contain-error {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.contain-error p {\n  color: red;\n}\n\n.logotitle {\n  font-size: 30px;\n  margin-right: 30px;\n  font-weight: bolder;\n  margin-left: 40px;\n  margin-top: 15px;\n  color: whitesmoke;\n}\n\nimg#logologin {\n  width: 160px;\n}\n\n#loginheader {\n  background-color: #0c2d50;\n}\n\n@media screen and (max-width: 646px) {\n  .logotitle {\n    display: none;\n  }\n\n  #logologin {\n    text-align: center;\n  }\n\n  .logoimg {\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxrQkFBQTtBQ0pGOztBRE9BO0VBR0UsYUFBQTtFQUVBLFlBQUE7QUNQRjs7QURVQTtFQUVFLGdCQUFBO0FDUkY7O0FEV0E7RUFDRSxlQUFBO0FDUkY7O0FEV0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNSRjs7QURXQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBbENZO0VBbUNaLGdCQUFBO0VBQ0Esb0NBQUE7QUNSRjs7QURVQTtFQUNFLGdCQUFBO0FDUEY7O0FEVUE7RUFDRSxnQkFBQTtFQUNBLG1CQTVDWTtFQTZDWixZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNQRjs7QURVQTtFQUtFLHFCQUFBO0FDWEY7O0FEY0E7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFHQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtBQ2RGOztBRGlCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNkRjs7QURpQkE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNkRjs7QURpQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNkRjs7QURpQkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQTNHWTtBQzZGZDs7QURnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7O0FBd0JBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLDZCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsOEJBQUE7RUNiRjs7RURnQkE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUNiRjtBQUNGOztBRGdCQTtFQUNFO0lBQ0UsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLFlBQUE7SUFDQSw4QkFBQTtFQ2RGOztFRGdCQTtJQUNFLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0Esb0JBQUE7SUFDQSw2QkFBQTtFQ2JGOztFRGdCQTtJQUNFLGVBQUE7RUNiRjtBQUNGOztBRGlCQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZDQUFBO0VBQ0EscUNBQUE7RUFHQSx3QkFBQTtBQ2ZGOztBRGlCQTtFQUNFO0lBRUUscUlBQUE7RUNmRjtFRGtCQTtJQUNFLG1JQUFBO0VDaEJGO0VEbUJBO0lBQ0UscUlBQUE7RUNqQkY7RURvQkE7SUFDRSx5SUFBQTtFQ2xCRjtFRHFCQTtJQUNFLHVJQUFBO0VDbkJGO0VEc0JBO0lBQ0UsbUlBQUE7RUNwQkY7RUR1QkE7SUFDRSx5SUFBQTtFQ3JCRjtFRHdCQTtJQUNFLG9JQUFBO0VDdEJGO0FBQ0Y7O0FEeUJBO0VBQ0U7SUFFRSxxSUFBQTtFQ3hCRjtFRDJCQTtJQUNFLG1JQUFBO0VDekJGO0VENEJBO0lBQ0UscUlBQUE7RUMxQkY7RUQ2QkE7SUFDRSx5SUFBQTtFQzNCRjtFRDhCQTtJQUNFLHVJQUFBO0VDNUJGO0VEK0JBO0lBQ0UsbUlBQUE7RUM3QkY7RURnQ0E7SUFDRSx5SUFBQTtFQzlCRjtFRGlDQTtJQUNFLG9JQUFBO0VDL0JGO0FBQ0Y7O0FEbUNBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBMVFZO0FDeU9kOztBRG9DQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDakNGOztBRG9DQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNqQ0Y7O0FEb0NBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDakNGOztBRG9DQTtFQUNFLFVBQUE7QUNqQ0Y7O0FEMENBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUN2Q0Y7O0FEMENBO0VBQ0UsWUFBQTtBQ3ZDRjs7QUQwQ0E7RUFDRSx5QkFBQTtBQ3ZDRjs7QUQwQ0E7RUFDRTtJQUNFLGFBQUE7RUN2Q0Y7O0VEeUNBO0lBQ0Usa0JBQUE7RUN0Q0Y7O0VEd0NBO0lBQ0UsWUFBQTtFQ3JDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpcnN0LWNvbG9yOiAjMDQ0OTczO1xuJHNlY29uZC1jb2xvcjogIzAwMjI0NztcbiRjb2xvci13aGl0ZTogd2hpdGU7XG4kcmFkaXVzOiAxMHB4O1xuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4ubGVmdC1zaWRlIHtcbiAgLy9wYWRkaW5nLXRvcDogNTBweCAhaW1wb3J0YW50O1xuICAvL3BhZGRpbmctbGVmdDogNTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzMHB4O1xuICAvLyB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5yaWdodC1zaWRlIHtcbiAgLy8gd2lkdGg6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnJpZ2h0LXNpZGUgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbi1vbmUgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAzdnc7XG59XG5cbi5tYWluLW9uZSB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6ICRmaXJzdC1jb2xvcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgQnJhbmRzXCI7XG59XG4ubWFpbi10d28ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5idXR0b24uYnRuX2Nvbm5lY3RlciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICRmaXJzdC1jb2xvcjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTcwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5idXR0b24uYnRuX2Nvbm5lY3Rlcjpob3ZlciB7XG4gIC8vIGJvcmRlcjogMnB4IHNvbGlkICRmaXJzdC1jb2xvcjtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8vIGNvbG9yOiAkZmlyc3QtY29sb3I7XG4gIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQ6ICMwYzJkNTBmNjtcbn1cblxuLmNvbnRlbnQtZm9ybS1maWVsZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICAvL2JvcmRlcjogMXB4IHNvbGlkICRmaXJzdC1jb2xvcjtcbiAgLy9ib3JkZXItcmFkaXVzOiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAvL2ZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uYmFyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzJkNTBkYjtcbn1cblxuaW1nI2xvZ28tZW5pLXBvcHVwIHtcbiAgd2lkdGg6IDIwMHB4O1xuICB0b3A6IC02MHB4O1xuICBsZWZ0OiAtNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xufVxuXG4uZm9yZ290LXBhc3Mge1xuICAvKiBtYXJnaW46IDEwcHg7ICovXG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNnB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5mb3Jnb3QtcGFzcyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogJGZpcnN0LWNvbG9yO1xufVxuLypcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XG4gIC5yaWdodC1zaWRlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucmlnaHQtc2lkZSBpbWcge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5sZWZ0LXNpZGUge1xuICAgIHdpZHRoOiAxMDB2aCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1haW4tb25lIHtcbiAgICBmb250LXNpemU6IDMzcHg7XG4gIH1cblxuICAubWFpbi1vbmUgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gIC5sZWZ0LXNpZGUge1xuICAgIHBhZGRpbmctdG9wOiA3NXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgLyogcGFkZGluZzogM3B4OyAqL1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpbWcjbG9nby1lbmktcG9wdXAge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICB0b3A6IC01MHB4O1xuICAgIGxlZnQ6IC01MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5sZWZ0LXNpZGUge1xuICAgIHBhZGRpbmctdG9wOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY29udGVudC1mb3JtLWZpZWxkIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBjMmQ1MDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE3cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idG5fY29ubmVjdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbn1cblxuLy8gbG9hZGVyXG4ubG9hZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogNnB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ0IDEuM3MgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb246IGxvYWQ0IDEuM3MgaW5maW5pdGUgbGluZWFyO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ0IHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAuMmVtLCAyZW0gLTJlbSAwIDBlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSxcbiAgICAgIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAwO1xuICB9XG4gIDEyLjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLCAyZW0gLTJlbSAwIDAuMmVtLCAzZW0gMCAwIDAsIDJlbSAyZW0gMCAtMWVtLFxuICAgICAgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMC41ZW0sIDJlbSAtMmVtIDAgMCwgM2VtIDAgMCAwLjJlbSwgMmVtIDJlbSAwIDAsXG4gICAgICAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICAzNy41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgMCwgMmVtIDJlbSAwIDAuMmVtLFxuICAgICAgMCAzZW0gMCAwZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAwZW0sXG4gICAgICAwIDNlbSAwIDAuMmVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICA2Mi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLFxuICAgICAgMCAzZW0gMCAwLCAtMmVtIDJlbSAwIDAuMmVtLCAtM2VtIDAgMCAwLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSxcbiAgICAgIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAuMmVtLCAtMmVtIC0yZW0gMCAwO1xuICB9XG4gIDg3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIDAsIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSxcbiAgICAgIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAsIC0yZW0gLTJlbSAwIDAuMmVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWQ0IHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAuMmVtLCAyZW0gLTJlbSAwIDBlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSxcbiAgICAgIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAwO1xuICB9XG4gIDEyLjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLCAyZW0gLTJlbSAwIDAuMmVtLCAzZW0gMCAwIDAsIDJlbSAyZW0gMCAtMWVtLFxuICAgICAgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMC41ZW0sIDJlbSAtMmVtIDAgMCwgM2VtIDAgMCAwLjJlbSwgMmVtIDJlbSAwIDAsXG4gICAgICAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICAzNy41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgMCwgMmVtIDJlbSAwIDAuMmVtLFxuICAgICAgMCAzZW0gMCAwZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAwZW0sXG4gICAgICAwIDNlbSAwIDAuMmVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICA2Mi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLFxuICAgICAgMCAzZW0gMCAwLCAtMmVtIDJlbSAwIDAuMmVtLCAtM2VtIDAgMCAwLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSxcbiAgICAgIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAuMmVtLCAtMmVtIC0yZW0gMCAwO1xuICB9XG4gIDg3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIDAsIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSxcbiAgICAgIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAsIC0yZW0gLTJlbSAwIDAuMmVtO1xuICB9XG59XG5cbi5jb250YWluLXR4dCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgJGZpcnN0LWNvbG9yO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogJGZpcnN0LWNvbG9yO1xufVxuXG4udHh0LW9uZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udHh0LXR3byB7XG4gIHdvcmQtc3BhY2luZzogMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29udGFpbi1lcnJvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uY29udGFpbi1lcnJvciBwIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuZGl2I3Byb2dyZXNzLW1hbiB7XG4gIC8vd2lkdGg6IDEwMCU7XG4gIC8vcG9zaXRpb246IGZpeGVkO1xuICAvL21hcmdpbi1sZWZ0OiAtMTNweCAhaW1wb3J0YW50O1xufVxuXG4ubG9nb3RpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuaW1nI2xvZ29sb2dpbiB7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxuI2xvZ2luaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmQ1MDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ2cHgpIHtcbiAgLmxvZ290aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjbG9nb2xvZ2luIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmxvZ29pbWcge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuIiwiLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmxlZnQtc2lkZSB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnJpZ2h0LXNpZGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucmlnaHQtc2lkZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLW9uZSBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDN2dztcbn1cblxuLm1haW4tb25lIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBjb2xvcjogIzA0NDk3MztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgQnJhbmRzXCI7XG59XG5cbi5tYWluLXR3byB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmJ1dHRvbi5idG5fY29ubmVjdGVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYmFja2dyb3VuZDogIzA0NDk3MztcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTcwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5idXR0b24uYnRuX2Nvbm5lY3Rlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwYzJkNTBmNjtcbn1cblxuLmNvbnRlbnQtZm9ybS1maWVsZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmJhciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwZGI7XG59XG5cbmltZyNsb2dvLWVuaS1wb3B1cCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgdG9wOiAtNjBweDtcbiAgbGVmdDogLTYwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbn1cblxuLmZvcmdvdC1wYXNzIHtcbiAgLyogbWFyZ2luOiAxMHB4OyAqL1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZm9yZ290LXBhc3Mgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMwNDQ5NzM7XG59XG5cbi8qXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xuICAucmlnaHQtc2lkZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnJpZ2h0LXNpZGUgaW1nIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubGVmdC1zaWRlIHtcbiAgICB3aWR0aDogMTAwdmggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYWluLW9uZSB7XG4gICAgZm9udC1zaXplOiAzM3B4O1xuICB9XG5cbiAgLm1haW4tb25lIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAubGVmdC1zaWRlIHtcbiAgICBwYWRkaW5nLXRvcDogNzVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgIC8qIHBhZGRpbmc6IDNweDsgKi9cbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1yaWdodDogMjVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW1nI2xvZ28tZW5pLXBvcHVwIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgdG9wOiAtNTBweDtcbiAgICBsZWZ0OiAtNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmxlZnQtc2lkZSB7XG4gICAgcGFkZGluZy10b3A6IDgwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1yaWdodDogMzBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbnRlbnQtZm9ybS1maWVsZCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYzJkNTA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxN3B4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnRuX2Nvbm5lY3RlciB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG59XG4ubG9hZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogNnB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ0IDEuM3MgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb246IGxvYWQ0IDEuM3MgaW5maW5pdGUgbGluZWFyO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDQge1xuICAwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMC4yZW0sIDJlbSAtMmVtIDAgMGVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgMDtcbiAgfVxuICAxMi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMCwgMmVtIC0yZW0gMCAwLjJlbSwgM2VtIDAgMCAwLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMC41ZW0sIDJlbSAtMmVtIDAgMCwgM2VtIDAgMCAwLjJlbSwgMmVtIDJlbSAwIDAsIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDM3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAwLCAyZW0gMmVtIDAgMC4yZW0sIDAgM2VtIDAgMGVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgMGVtLCAwIDNlbSAwIDAuMmVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICA2Mi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIDAsIC0yZW0gMmVtIDAgMC4yZW0sIC0zZW0gMCAwIDAsIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLjJlbSwgLTJlbSAtMmVtIDAgMDtcbiAgfVxuICA4Ny41JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAwLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAsIC0yZW0gLTJlbSAwIDAuMmVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWQ0IHtcbiAgMCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAuMmVtLCAyZW0gLTJlbSAwIDBlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIDA7XG4gIH1cbiAgMTIuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAsIDJlbSAtMmVtIDAgMC4yZW0sIDNlbSAwIDAgMCwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTAuNWVtLCAyZW0gLTJlbSAwIDAsIDNlbSAwIDAgMC4yZW0sIDJlbSAyZW0gMCAwLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICAzNy41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgMCwgMmVtIDJlbSAwIDAuMmVtLCAwIDNlbSAwIDBlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIDBlbSwgMCAzZW0gMCAwLjJlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNjIuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAwLCAtMmVtIDJlbSAwIDAuMmVtLCAtM2VtIDAgMCAwLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMC4yZW0sIC0yZW0gLTJlbSAwIDA7XG4gIH1cbiAgODcuNSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgMCwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLCAtMmVtIC0yZW0gMCAwLjJlbTtcbiAgfVxufVxuLmNvbnRhaW4tdHh0IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDQ0OTczO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogIzA0NDk3Mztcbn1cblxuLnR4dC1vbmUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnR4dC10d28ge1xuICB3b3JkLXNwYWNpbmc6IDBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNvbnRhaW4tZXJyb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNvbnRhaW4tZXJyb3IgcCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5sb2dvdGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG5pbWcjbG9nb2xvZ2luIHtcbiAgd2lkdGg6IDE2MHB4O1xufVxuXG4jbG9naW5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDZweCkge1xuICAubG9nb3RpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2xvZ29sb2dpbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmxvZ29pbWcge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".mainy {\n  width: 100%;\n  background-color: #0c2d50;\n}\n\n.d-block {\n  width: 100%;\n  height: 400px;\n  max-width: 600px;\n  min-width: 230px;\n  min-height: 400px;\n  margin-top: 30px;\n}\n\n#clubimg {\n  margin: auto;\n}\n\ndiv#myCarousel {\n  width: 100% !important;\n  margin: auto;\n  /* margin-right: 27px !important; */\n}\n\n.descriClub {\n  top: 30px !important;\n  right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvY29tcG9uZW50cy9jbHVicy9jbHVicy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jbHVicy9jbHVicy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUFDQSx5QkFMWTtBQ0dkOztBREtBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGOztBREtBO0VBQ0Usc0JBQUE7RUFFQSxZQUFBO0VBQ0EsbUNBQUE7QUNIRjs7QURNQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbHVicy9jbHVicy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmaXJzdC1jb2xvcjogIzBjMmQ1MDtcbiRzZWNvbmQtY29sb3I6ICMwMDIyNDc7XG5cbi5tYWlueSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlyc3QtY29sb3I7XG59XG5cbi5kLWJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1pbi13aWR0aDogMjMwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4jY2x1YmltZyB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuZGl2I215Q2Fyb3VzZWwge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAvL21hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG87XG4gIC8qIG1hcmdpbi1yaWdodDogMjdweCAhaW1wb3J0YW50OyAqL1xufVxuXG4uZGVzY3JpQ2x1YiB7XG4gIHRvcDogMzBweCAhaW1wb3J0YW50O1xuICByaWdodDogMzBweDtcbiAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59XG4iLCIubWFpbnkge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmQ1MDtcbn1cblxuLmQtYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWluLXdpZHRoOiAyMzBweDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbiNjbHViaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5kaXYjbXlDYXJvdXNlbCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0bztcbiAgLyogbWFyZ2luLXJpZ2h0OiAyN3B4ICFpbXBvcnRhbnQ7ICovXG59XG5cbi5kZXNjcmlDbHViIHtcbiAgdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAzMHB4O1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".section-title-wrapper {\n  margin-top: 50px;\n}\n\n.section-title-wrapper .section-title {\n  color: #0c2d50;\n}\n\n.section-title-wrapper .section-title h4 {\n  text-transform: uppercase;\n}\n\n.section-title {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.section-title h4 {\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.bottomy {\n  width: 60%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.bottomy-one, .bottomy-two {\n  width: 50%;\n  height: 3px;\n  background-color: #0c2d50;\n}\n\n.bottomy-center {\n  margin-left: 1%;\n  margin-right: 1%;\n  position: relative;\n  bottom: 10px;\n}\n\nimg.imaged {\n  width: 100%;\n  height: 280px;\n}\n\n.single-event-item {\n  margin-bottom: 50px;\n}\n\n.single-item-comment-view i {\n  margin-right: 10px;\n}\n\n/*----------------------------------------*/\n\n/*  10. Event Area\n/*----------------------------------------*/\n\n.single-event-image > a {\n  display: block;\n  position: relative;\n}\n\n.single-event-image > span {\n  background: #2d3e50 none repeat scroll 0 0;\n  bottom: 0;\n  content: \"\";\n  height: 96px;\n  left: 0;\n  position: absolute;\n  width: 96px;\n}\n\n.single-event-image a > span {\n  background: #2d3e50 none repeat scroll 0 0;\n  bottom: 0;\n  color: #ffffff;\n  font-family: \"montserratregular\";\n  font-size: 24px;\n  height: 96px;\n  left: 0;\n  line-height: 35px;\n  padding-top: 16px;\n  position: absolute;\n  width: 96px;\n}\n\n.single-event-image span {\n  display: block;\n  font-family: \"montserratsemi_bold\";\n  font-size: 42px;\n  text-align: center;\n}\n\n.single-event-text > h3 a, .single-event-text > h3 {\n  color: #4c4c4c;\n}\n\n.single-event-text > h3 {\n  font-family: \"montserratregular\";\n  margin-bottom: 5px;\n  font-size: 24px;\n}\n\n.single-event-text {\n  background: #f6f6f6 none repeat scroll 0 0;\n  border-bottom: 2px solid #86bc42;\n  padding: 29px 34px 35px;\n}\n\n.single-event-item .single-item-comment-view {\n  margin-bottom: 12px;\n}\n\n.single-event-item .single-item-comment-view span {\n  margin-right: 12px;\n}\n\n.single-event-item .single-item-comment-view span:last-child {\n  margin-right: 0;\n}\n\n.single-event-item .button-default {\n  margin-top: 16px;\n  padding: 6px 23px;\n}\n\n.single-event-item:hover .button-default {\n  background: #2d3e50 none repeat scroll 0 0;\n}\n\n.single-event-item {\n  box-shadow: 0 0 8px rgba(34, 30, 31, 0.3);\n}\n\n.content-pagination {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.content-pagination span {\n  margin: 10px;\n  cursor: pointer;\n}\n\n.content-pagination span:hover {\n  opacity: 0.7;\n}\n\n.current {\n  cursor: auto !important;\n}\n\n.desc {\n  height: 150px;\n  overflow-y: auto;\n}\n\n.daty {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  font-size: 15px;\n  font-style: italic;\n}\n\n.daty i {\n  margin-right: 10px;\n}\n\nselect#club-select {\n  width: 200px;\n  margin-bottom: 20px;\n  height: 40px;\n  padding-left: 20px;\n  border-color: #0c2d50;\n  color: #0c2d50;\n  border-width: 2px;\n}\n\nselect#club-select option:hover {\n  background: #002247 !important;\n  color: white !important;\n  cursor: pointer !important;\n}\n\n.input-group-append button {\n  height: 40px;\n  background-color: #0c2d50;\n}\n\n.input-group.mb-3 {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n@media screen and (max-width: 992px) {\n  .contain-sel {\n    margin-top: -65px;\n  }\n}\n\n.no-actu {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: 130px;\n  margin-top: 0px;\n  background: whitesmoke;\n  color: #0c2d50;\n  font-weight: bold;\n  align-items: center;\n  border-radius: 5px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvY29tcG9uZW50cy9jbHVicy9wdWJsaWNhdGlvbnMvcHVibGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NsdWJzL3B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBd0IsZ0JBQUE7QUNEeEI7O0FER0E7RUFDRSxjQU5hO0FDTWY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQXBDYTtBQ29DZjs7QURHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBLDJDQUFBOztBQUNBOzJDQUFBOztBQUVBO0VBQXlCLGNBQUE7RUFBZ0Isa0JBQUE7QUNFekM7O0FEREE7RUFDSSwwQ0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNJSjs7QURGQTtFQUNJLDBDQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ01KOztBREpBO0VBQW9ELGNBQUE7QUNRcEQ7O0FEUEE7RUFDQyxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1VEOztBRFJBO0VBQ0ksMENBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0FDV0o7O0FEVEE7RUFBOEMsbUJBQUE7QUNhOUM7O0FEWkE7RUFBbUQsa0JBQUE7QUNnQm5EOztBRGZBO0VBQThELGVBQUE7QUNtQjlEOztBRGxCQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNxQko7O0FEbkJBO0VBQTBDLDBDQUFBO0FDdUIxQzs7QUR0QkE7RUFBb0IseUNBQUE7QUMwQnBCOztBRHhCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQzJCRjs7QUR4QkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQzJCRjs7QUR4QkE7RUFDRSxZQUFBO0FDMkJGOztBRHhCQTtFQUNFLHVCQUFBO0FDMkJGOztBRHhCQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQzJCRjs7QUR4QkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUMyQkY7O0FEeEJBO0VBQ0Usa0JBQUE7QUMyQkY7O0FEeEJBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBM0phO0VBNEpiLGNBNUphO0VBNkpiLGlCQUFBO0FDMkJGOztBRHhCQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQzJCRjs7QUR4QkE7RUFDRSxZQUFBO0VBQ0EseUJBeEthO0FDbU1mOztBRHhCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDMkJGOztBRHhCQTtFQUNFO0lBQ0UsaUJBQUE7RUMyQkY7QUFDRjs7QUR4QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQTlMYTtFQStMYixpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDMEJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbHVicy9wdWJsaWNhdGlvbnMvcHVibGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpcnN0LWNvbG9yIDogIzBjMmQ1MDtcbiRzZWNvbmQtY29sb3IgOiAjMDAyMjQ3O1xuXG4uc2VjdGlvbi10aXRsZS13cmFwcGVyIHttYXJnaW4tdG9wOiA1MHB4O31cblxuLnNlY3Rpb24tdGl0bGUtd3JhcHBlciAuc2VjdGlvbi10aXRsZSB7XG4gIGNvbG9yOiAkZmlyc3QtY29sb3I7XG59XG5cbi5zZWN0aW9uLXRpdGxlLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUgaDR7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VjdGlvbi10aXRsZSBoNCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3R0b215IHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYm90dG9teS1vbmUsIC5ib3R0b215LXR3byB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlyc3QtY29sb3I7XG59XG5cbi5ib3R0b215LWNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDEwcHg7XG59XG5cbmltZy5pbWFnZWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyODBweDtcbn1cblxuLnNpbmdsZS1ldmVudC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnNpbmdsZS1pdGVtLWNvbW1lbnQtdmlldyBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogIDEwLiBFdmVudCBBcmVhXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnNpbmdsZS1ldmVudC1pbWFnZSA+IGEge2Rpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogcmVsYXRpdmU7fVxuLnNpbmdsZS1ldmVudC1pbWFnZSA+IHNwYW4ge1xuICAgIGJhY2tncm91bmQ6ICMyZDNlNTAgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3R0b206IDA7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDk2cHg7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDk2cHg7XG59XG4uc2luZ2xlLWV2ZW50LWltYWdlIGEgPiBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmQzZTUwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRyZWd1bGFyXCI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGhlaWdodDogOTZweDtcbiAgICBsZWZ0OiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTZweDtcbn1cbi5zaW5nbGUtZXZlbnQtaW1hZ2Ugc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdHNlbWlfYm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2luZ2xlLWV2ZW50LXRleHQgPiBoMyBhLCAuc2luZ2xlLWV2ZW50LXRleHQgPiBoMyB7Y29sb3I6ICM0YzRjNGM7fVxuLnNpbmdsZS1ldmVudC10ZXh0ID4gaDMge1xuXHRmb250LWZhbWlseTogXCJtb250c2VycmF0cmVndWxhclwiO1xuXHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdGZvbnQtc2l6ZTogMjRweDtcbn1cbi5zaW5nbGUtZXZlbnQtdGV4dCB7XG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODZiYzQyO1xuICAgIHBhZGRpbmc6IDI5cHggMzRweCAzNXB4O1xufVxuLnNpbmdsZS1ldmVudC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcge21hcmdpbi1ib3R0b206IDEycHg7fVxuLnNpbmdsZS1ldmVudC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcgc3BhbiB7bWFyZ2luLXJpZ2h0OiAxMnB4O31cbi5zaW5nbGUtZXZlbnQtaXRlbSAuc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3IHNwYW46bGFzdC1jaGlsZCB7bWFyZ2luLXJpZ2h0OiAwO31cbi5zaW5nbGUtZXZlbnQtaXRlbSAuYnV0dG9uLWRlZmF1bHQge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgcGFkZGluZzogNnB4IDIzcHg7XG59XG4uc2luZ2xlLWV2ZW50LWl0ZW06aG92ZXIgLmJ1dHRvbi1kZWZhdWx0IHtiYWNrZ3JvdW5kOiAjMmQzZTUwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7fVxuLnNpbmdsZS1ldmVudC1pdGVtIHtib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMzQsIDMwLCAzMSwgMC4zKTt9XG5cbi5jb250ZW50LXBhZ2luYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50LXBhZ2luYXRpb24gc3BhbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGVudC1wYWdpbmF0aW9uIHNwYW46aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5jdXJyZW50IHtcbiAgY3Vyc29yOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmRhdHkge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5kYXR5IGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbnNlbGVjdCNjbHViLXNlbGVjdCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJvcmRlci1jb2xvcjogJGZpcnN0LWNvbG9yO1xuICBjb2xvcjogJGZpcnN0LWNvbG9yO1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxuc2VsZWN0I2NsdWItc2VsZWN0IG9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICRzZWNvbmQtY29sb3IgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIGJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZpcnN0LWNvbG9yO1xufVxuXG4uaW5wdXQtZ3JvdXAubWItMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluLXNlbCAge1xuICAgIG1hcmdpbi10b3A6IC02NXB4O1xuICB9XG59XG5cbi5uby1hY3R1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTMwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgY29sb3I6ICRmaXJzdC1jb2xvcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuIiwiLnNlY3Rpb24tdGl0bGUtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUge1xuICBjb2xvcjogIzBjMmQ1MDtcbn1cblxuLnNlY3Rpb24tdGl0bGUtd3JhcHBlciAuc2VjdGlvbi10aXRsZSBoNCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VjdGlvbi10aXRsZSBoNCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3R0b215IHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYm90dG9teS1vbmUsIC5ib3R0b215LXR3byB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwO1xufVxuXG4uYm90dG9teS1jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG5pbWcuaW1hZ2VkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjgwcHg7XG59XG5cbi5zaW5nbGUtZXZlbnQtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcgaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qICAxMC4gRXZlbnQgQXJlYVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5zaW5nbGUtZXZlbnQtaW1hZ2UgPiBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpbmdsZS1ldmVudC1pbWFnZSA+IHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjMmQzZTUwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvdHRvbTogMDtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA5NnB4O1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5NnB4O1xufVxuXG4uc2luZ2xlLWV2ZW50LWltYWdlIGEgPiBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzJkM2U1MCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0cmVndWxhclwiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGhlaWdodDogOTZweDtcbiAgbGVmdDogMDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5NnB4O1xufVxuXG4uc2luZ2xlLWV2ZW50LWltYWdlIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdHNlbWlfYm9sZFwiO1xuICBmb250LXNpemU6IDQycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpbmdsZS1ldmVudC10ZXh0ID4gaDMgYSwgLnNpbmdsZS1ldmVudC10ZXh0ID4gaDMge1xuICBjb2xvcjogIzRjNGM0Yztcbn1cblxuLnNpbmdsZS1ldmVudC10ZXh0ID4gaDMge1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0cmVndWxhclwiO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnNpbmdsZS1ldmVudC10ZXh0IHtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg2YmM0MjtcbiAgcGFkZGluZzogMjlweCAzNHB4IDM1cHg7XG59XG5cbi5zaW5nbGUtZXZlbnQtaXRlbSAuc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3IHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLnNpbmdsZS1ldmVudC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLnNpbmdsZS1ldmVudC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcgc3BhbjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uc2luZ2xlLWV2ZW50LWl0ZW0gLmJ1dHRvbi1kZWZhdWx0IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZzogNnB4IDIzcHg7XG59XG5cbi5zaW5nbGUtZXZlbnQtaXRlbTpob3ZlciAuYnV0dG9uLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kOiAjMmQzZTUwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG5cbi5zaW5nbGUtZXZlbnQtaXRlbSB7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgzNCwgMzAsIDMxLCAwLjMpO1xufVxuXG4uY29udGVudC1wYWdpbmF0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudC1wYWdpbmF0aW9uIHNwYW4ge1xuICBtYXJnaW46IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRlbnQtcGFnaW5hdGlvbiBzcGFuOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uY3VycmVudCB7XG4gIGN1cnNvcjogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uZGVzYyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5kYXR5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uZGF0eSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5zZWxlY3QjY2x1Yi1zZWxlY3Qge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBib3JkZXItY29sb3I6ICMwYzJkNTA7XG4gIGNvbG9yOiAjMGMyZDUwO1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxuc2VsZWN0I2NsdWItc2VsZWN0IG9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDIyNDcgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIGJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmQ1MDtcbn1cblxuLmlucHV0LWdyb3VwLm1iLTMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbi1zZWwge1xuICAgIG1hcmdpbi10b3A6IC02NXB4O1xuICB9XG59XG4ubm8tYWN0dSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiAjMGMyZDUwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  height: 700px;\n  width: 100%;\n  background-image: linear-gradient(to bottom, #ffffff, #ffffffa4, #ffffff6b, #ffffff09, #ffffff00), url('Etablissement.jpeg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.mapped {\n  height: 300px;\n  width: 100%;\n  background: #686666;\n}\n\n.contain-contact {\n  position: absolute;\n  background: white;\n  width: 40%;\n  top: 400px;\n  right: 2vh;\n  border-radius: 3px;\n  padding: 45px;\n  z-index: 400;\n}\n\n.title-mapped {\n  text-align: center;\n  font-weight: bold;\n  color: #0c2d50;\n  font-size: 30px;\n  font-family: none;\n}\n\nlabel {\n  margin-top: 20px;\n  font-size: 16px;\n}\n\n.contain-submit {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.contain-submit button {\n  height: 50px;\n  width: 150px;\n  background-color: #0c2d50;\n  color: white;\n  border: none;\n}\n\nsmall.form-text.error-text {\n  color: red;\n  text-align: right;\n  padding-right: 5px;\n}\n\ninput {\n  height: 50px !important;\n}\n\n.main {\n  padding-top: 50px;\n  padding-left: 50px;\n}\n\n.contain-main {\n  width: 250px;\n  border: 2px solid #0c2d50;\n  padding: 20px;\n  font-weight: 500;\n  color: #0c2d50;\n}\n\n.txt1 {\n  font-size: 40px;\n  letter-spacing: 17px;\n  text-transform: uppercase;\n}\n\n.main-head h6 {\n  position: relative;\n  white-space: nowrap;\n  word-spacing: 20px;\n  letter-spacing: 1px;\n  bottom: 13px;\n}\n\n.main-head p {\n  font-weight: bold;\n}\n\n@media only screen and (min-width: 1700px) {\n  .contain-contact {\n    width: 600px;\n  }\n}\n\n@media only screen and (max-width: 750px) {\n  .contain-contact {\n    position: absolute;\n    background: white;\n    width: 91%;\n    top: 600px;\n    right: 2vh;\n    border-radius: 3px;\n    padding: 45px;\n  }\n\n  .main {\n    height: 880px;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .contain-contact {\n    position: absolute;\n    background: white;\n    width: 98%;\n    top: 600px;\n    right: 1%;\n    border-radius: 3px;\n    padding: 45px;\n  }\n}\n\n@media screen and (max-width: 310px) {\n  .main {\n    padding-top: 50px;\n    padding-left: 0px;\n  }\n}\n\n.loader {\n  color: #ffffff;\n  font-size: 6px;\n  margin: 10px auto;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: load4 1.3s infinite linear;\n  animation: load4 1.3s infinite linear;\n  transform: translateZ(0);\n}\n\n@-webkit-keyframes load4 {\n  0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n\n@keyframes load4 {\n  0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFFQSw0SEFBQTtFQVNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ1hGOztBRGNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1hGOztBRGNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNYRjs7QURjQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQXpDWTtFQTBDWixlQUFBO0VBRUEsaUJBQUE7QUNaRjs7QURlQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ1pGOztBRGVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1pGOztBRGVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkE5RFk7RUErRFosWUFBQTtFQUNBLFlBQUE7QUNaRjs7QURlQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDWkY7O0FEZUE7RUFDRSx1QkFBQTtBQ1pGOztBRGVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ1pGOztBRGVBO0VBRUUsWUFBQTtFQUNBLHlCQUFBO0VBRUEsYUFBQTtFQUdBLGdCQUFBO0VBQ0EsY0FBQTtBQ2hCRjs7QURtQkE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ2hCRjs7QURtQkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNoQkY7O0FEa0JBO0VBQ0UsaUJBQUE7QUNmRjs7QURrQkE7RUFDRTtJQUNFLFlBQUE7RUNmRjtBQUNGOztBRGtCQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtFQ2hCRjs7RURtQkE7SUFDRSxhQUFBO0VDaEJGO0FBQ0Y7O0FEbUJBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDakJGO0FBQ0Y7O0FEb0JBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VDbEJGO0FBQ0Y7O0FEc0JBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkNBQUE7RUFDQSxxQ0FBQTtFQUdBLHdCQUFBO0FDcEJGOztBRHNCQTtFQUNFO0lBRUUscUlBQUE7RUNwQkY7RUR1QkE7SUFDRSxtSUFBQTtFQ3JCRjtFRHdCQTtJQUNFLHFJQUFBO0VDdEJGO0VEeUJBO0lBQ0UseUlBQUE7RUN2QkY7RUQwQkE7SUFDRSx1SUFBQTtFQ3hCRjtFRDJCQTtJQUNFLG1JQUFBO0VDekJGO0VENEJBO0lBQ0UseUlBQUE7RUMxQkY7RUQ2QkE7SUFDRSxvSUFBQTtFQzNCRjtBQUNGOztBRDhCQTtFQUNFO0lBRUUscUlBQUE7RUM3QkY7RURnQ0E7SUFDRSxtSUFBQTtFQzlCRjtFRGlDQTtJQUNFLHFJQUFBO0VDL0JGO0VEa0NBO0lBQ0UseUlBQUE7RUNoQ0Y7RURtQ0E7SUFDRSx1SUFBQTtFQ2pDRjtFRG9DQTtJQUNFLG1JQUFBO0VDbENGO0VEcUNBO0lBQ0UseUlBQUE7RUNuQ0Y7RURzQ0E7SUFDRSxvSUFBQTtFQ3BDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZmlyc3QtY29sb3I6ICMwYzJkNTA7XG4kc2Vjb25kLWNvbG9yOiAjMDAyMjQ3O1xuXG4ubWFpbiB7XG4gIGhlaWdodDogNzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9Bbm9uMTUxLUJvdW5kbGVzcy1CYW5uZXItaGQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byBib3R0b20sXG4gICAgICAjZmZmZmZmLFxuICAgICAgI2ZmZmZmZmE0LFxuICAgICAgI2ZmZmZmZjZiLFxuICAgICAgI2ZmZmZmZjA5LFxuICAgICAgI2ZmZmZmZjAwXG4gICAgKSxcbiAgICB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRU5JL0V0YWJsaXNzZW1lbnQuanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ubWFwcGVkIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYigxMDQsIDEwMiwgMTAyKTtcbn1cblxuLmNvbnRhaW4tY29udGFjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiA0MCU7XG4gIHRvcDogNDAwcHg7XG4gIHJpZ2h0OiAydmg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNDVweDtcbiAgei1pbmRleDogNDAwO1xufVxuXG4udGl0bGUtbWFwcGVkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICRmaXJzdC1jb2xvcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICAvLyBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG4gIGZvbnQtZmFtaWx5OiBub25lO1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNvbnRhaW4tc3VibWl0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluLXN1Ym1pdCBidXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZpcnN0LWNvbG9yO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuc21hbGwuZm9ybS10ZXh0LmVycm9yLXRleHQge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG5pbnB1dCB7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbiB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi5jb250YWluLW1haW4ge1xuICAvLyBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwYzJkNTA7XG4gIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAyMHB4O1xuICAvLyB3aWR0aDogMzUwcHg7XG4gIC8vIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MjEpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzBjMmQ1MDtcbn1cblxuLnR4dDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxN3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubWFpbi1oZWFkIGg2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXNwYWNpbmc6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJvdHRvbTogMTNweDtcbn1cbi5tYWluLWhlYWQgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE3MDBweCkge1xuICAuY29udGFpbi1jb250YWN0IHtcbiAgICB3aWR0aDogNjAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuY29udGFpbi1jb250YWN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6IDkxJTtcbiAgICB0b3A6IDYwMHB4O1xuICAgIHJpZ2h0OiAydmg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDQ1cHg7XG4gIH1cblxuICAubWFpbiB7XG4gICAgaGVpZ2h0OiA4ODBweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jb250YWluLWNvbnRhY3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogOTglO1xuICAgIHRvcDogNjAwcHg7XG4gICAgcmlnaHQ6IDElO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiA0NXB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxMHB4KSB7XG4gIC5tYWluIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxufVxuXG4vLyBsb2FkZXJcbi5sb2FkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiA2cHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDQgMS4zcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogbG9hZDQgMS4zcyBpbmZpbml0ZSBsaW5lYXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDQge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMC4yZW0sIDJlbSAtMmVtIDAgMGVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLFxuICAgICAgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIDA7XG4gIH1cbiAgMTIuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAsIDJlbSAtMmVtIDAgMC4yZW0sIDNlbSAwIDAgMCwgMmVtIDJlbSAwIC0xZW0sXG4gICAgICAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0wLjVlbSwgMmVtIC0yZW0gMCAwLCAzZW0gMCAwIDAuMmVtLCAyZW0gMmVtIDAgMCxcbiAgICAgIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDM3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAwLCAyZW0gMmVtIDAgMC4yZW0sXG4gICAgICAwIDNlbSAwIDBlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIDBlbSxcbiAgICAgIDAgM2VtIDAgMC4yZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDYyLjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sXG4gICAgICAwIDNlbSAwIDAsIC0yZW0gMmVtIDAgMC4yZW0sIC0zZW0gMCAwIDAsIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLFxuICAgICAgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMC4yZW0sIC0yZW0gLTJlbSAwIDA7XG4gIH1cbiAgODcuNSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgMCwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLFxuICAgICAgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMCwgLTJlbSAtMmVtIDAgMC4yZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZDQge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMC4yZW0sIDJlbSAtMmVtIDAgMGVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLFxuICAgICAgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIDA7XG4gIH1cbiAgMTIuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAsIDJlbSAtMmVtIDAgMC4yZW0sIDNlbSAwIDAgMCwgMmVtIDJlbSAwIC0xZW0sXG4gICAgICAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0wLjVlbSwgMmVtIC0yZW0gMCAwLCAzZW0gMCAwIDAuMmVtLCAyZW0gMmVtIDAgMCxcbiAgICAgIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDM3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAwLCAyZW0gMmVtIDAgMC4yZW0sXG4gICAgICAwIDNlbSAwIDBlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIDBlbSxcbiAgICAgIDAgM2VtIDAgMC4yZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDYyLjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sXG4gICAgICAwIDNlbSAwIDAsIC0yZW0gMmVtIDAgMC4yZW0sIC0zZW0gMCAwIDAsIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLFxuICAgICAgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMC4yZW0sIC0yZW0gLTJlbSAwIDA7XG4gIH1cbiAgODcuNSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgMCwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLFxuICAgICAgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMCwgLTJlbSAtMmVtIDAgMC4yZW07XG4gIH1cbn1cbiIsIi5tYWluIHtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYsICNmZmZmZmZhNCwgI2ZmZmZmZjZiLCAjZmZmZmZmMDksICNmZmZmZmYwMCksIHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9FTkkvRXRhYmxpc3NlbWVudC5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5tYXBwZWQge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzY4NjY2Njtcbn1cblxuLmNvbnRhaW4tY29udGFjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiA0MCU7XG4gIHRvcDogNDAwcHg7XG4gIHJpZ2h0OiAydmg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNDVweDtcbiAgei1pbmRleDogNDAwO1xufVxuXG4udGl0bGUtbWFwcGVkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwYzJkNTA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IG5vbmU7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY29udGFpbi1zdWJtaXQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW4tc3VibWl0IGJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuc21hbGwuZm9ybS10ZXh0LmVycm9yLXRleHQge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG5pbnB1dCB7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbiB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi5jb250YWluLW1haW4ge1xuICB3aWR0aDogMjUwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwYzJkNTA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMGMyZDUwO1xufVxuXG4udHh0MSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDE3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tYWluLWhlYWQgaDYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtc3BhY2luZzogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm90dG9tOiAxM3B4O1xufVxuXG4ubWFpbi1oZWFkIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNzAwcHgpIHtcbiAgLmNvbnRhaW4tY29udGFjdCB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5jb250YWluLWNvbnRhY3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogOTElO1xuICAgIHRvcDogNjAwcHg7XG4gICAgcmlnaHQ6IDJ2aDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogNDVweDtcbiAgfVxuXG4gIC5tYWluIHtcbiAgICBoZWlnaHQ6IDg4MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jb250YWluLWNvbnRhY3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogOTglO1xuICAgIHRvcDogNjAwcHg7XG4gICAgcmlnaHQ6IDElO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiA0NXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMTBweCkge1xuICAubWFpbiB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbn1cbi5sb2FkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiA2cHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDQgMS4zcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogbG9hZDQgMS4zcyBpbmZpbml0ZSBsaW5lYXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkNCB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLjJlbSwgMmVtIC0yZW0gMCAwZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAwO1xuICB9XG4gIDEyLjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLCAyZW0gLTJlbSAwIDAuMmVtLCAzZW0gMCAwIDAsIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0wLjVlbSwgMmVtIC0yZW0gMCAwLCAzZW0gMCAwIDAuMmVtLCAyZW0gMmVtIDAgMCwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgMzcuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIDAsIDJlbSAyZW0gMCAwLjJlbSwgMCAzZW0gMCAwZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAwZW0sIDAgM2VtIDAgMC4yZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDYyLjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgMCwgLTJlbSAyZW0gMCAwLjJlbSwgLTNlbSAwIDAgMCwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAuMmVtLCAtMmVtIC0yZW0gMCAwO1xuICB9XG4gIDg3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIDAsIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMCwgLTJlbSAtMmVtIDAgMC4yZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZDQge1xuICAwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMC4yZW0sIDJlbSAtMmVtIDAgMGVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgMDtcbiAgfVxuICAxMi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMCwgMmVtIC0yZW0gMCAwLjJlbSwgM2VtIDAgMCAwLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMC41ZW0sIDJlbSAtMmVtIDAgMCwgM2VtIDAgMCAwLjJlbSwgMmVtIDJlbSAwIDAsIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICB9XG4gIDM3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAwLCAyZW0gMmVtIDAgMC4yZW0sIDAgM2VtIDAgMGVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgMGVtLCAwIDNlbSAwIDAuMmVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgfVxuICA2Mi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIDAsIC0yZW0gMmVtIDAgMC4yZW0sIC0zZW0gMCAwIDAsIC0yZW0gLTJlbSAwIC0xZW07XG4gIH1cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLjJlbSwgLTJlbSAtMmVtIDAgMDtcbiAgfVxuICA4Ny41JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAwLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAsIC0yZW0gLTJlbSAwIDAuMmVtO1xuICB9XG59Il19 */");

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
            "message": message,
            "telephone": "",
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
/* harmony default export */ __webpack_exports__["default"] = ("/*----------------------------------------*/\n/*  7. Latest News Area\n/*----------------------------------------*/\n.latest-area {\n  padding: 120px 0 70px;\n}\n.single-latest-text > h3 {\n  font-family: raleway;\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n.single-latest-item {\n  overflow: hidden;\n  margin-bottom: 50px;\n  transition: all 0.3s ease 0s;\n}\n.single-latest-item:hover {\n  box-shadow: 2px 5px 25px rgba(34, 30, 31, 0.25);\n}\n.single-latest-text > h3 a {\n  color: #2d3e50;\n}\n.single-latest-image {\n  float: left;\n}\n.single-latest-image a {\n  display: inline-block;\n}\n.single-latest-text {\n  background: #f6f6f6 none repeat scroll 0 0;\n  border-bottom: 2px solid #86bc42;\n  overflow: hidden;\n  padding: 30px 0 27px 35px;\n}\n.single-latest-item .single-item-comment-view span {\n  margin-right: 13px;\n}\n.single-latest-item .single-item-comment-view {\n  display: block;\n  margin-bottom: 2px;\n}\n.single-latest-item .button-default {\n  font-size: 13px;\n  margin-top: 7px;\n  padding: 7px 21px;\n  transition: all 0.3s;\n  background-color: #002247;\n  color: white;\n  cursor: pointer;\n}\n.single-latest-item:hover .button-default {\n  background: #2D3E50 none repeat scroll 0 0;\n}\n.section-left #poster {\n  width: 100%;\n}\n.single-latest-item {\n  display: flex;\n  flex-direction: row;\n}\n.single-latest-image {\n  width: 50%;\n  height: 260px;\n}\n.single-latest-item .single-item-comment-view {\n  font-size: 11px;\n}\n.single-latest-item .single-item-comment-view .fa {\n  margin-right: 5px;\n}\n.single-latest-text p {\n  font-size: 13px;\n  padding-right: 10px;\n  padding-top: 10px;\n}\n.section-title {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n}\n.section-title h3 {\n  font-weight: bold;\n}\n.bottomy {\n  width: 60%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.bottomy-one, .bottomy-two {\n  width: 50%;\n  height: 3px;\n  background-color: #0c2d50;\n}\n.bottomy-center {\n  margin-left: 1%;\n  margin-right: 1%;\n  position: relative;\n  bottom: 10px;\n}\n.contain-section {\n  margin-top: 50px;\n}\n.section-left-date {\n  position: absolute;\n  margin-top: 30px;\n  /* margin-left: 10px; */\n  padding-top: 5px;\n  padding-left: 5px;\n  padding-right: 10px;\n  background: #ffffffa1;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.section-left-date p {\n  font-size: 12px;\n}\n.section-left-date p span {\n  font-style: italic;\n}\np.p2 {\n  margin-top: -10px;\n  margin-left: 5px;\n  margin-bottom: 5px;\n}\nh3.section-right-h3 {\n  width: 30%;\n  font-weight: bold;\n  font-variant: petite-caps;\n  text-shadow: 9px 5px 10px rgba(0, 0, 0, 0.32);\n  font-size: 30px;\n  border-bottom: 1px solid black;\n  border-width: thick;\n  white-space: nowrap;\n  padding-bottom: 5px;\n  margin-bottom: 30px;\n}\n.section-right {\n  padding-right: 50px;\n  padding-left: 0px;\n}\n.contain-gallerie {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n}\n.contain-gallerie-one, .contain-gallerie-two {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n}\n.text-gallerie {\n  display: flex;\n  flex-direction: row;\n  height: 50px;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: 25px;\n  font-weight: bold;\n  padding-right: 10px;\n  background-color: #0c2d50;\n  color: white;\n  margin-bottom: -5px;\n  white-space: nowrap;\n  letter-spacing: 5px;\n}\n.bar-gallerie {\n  height: 5px;\n  background-color: white;\n  width: 100%;\n  position: relative;\n  bottom: 5px;\n}\n.img {\n  position: relative;\n  width: 50%;\n}\n.image {\n  display: block;\n  width: 100%;\n  min-height: 150px;\n  max-height: 220px;\n}\n.overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #0c2d506b;\n  overflow: hidden;\n  width: 0;\n  height: 100%;\n  transition: 0.5s ease;\n}\n.img:hover .overlay {\n  width: 100%;\n}\n.text {\n  white-space: nowrap;\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n.top-tite {\n  margin-bottom: 20px;\n  color: white;\n  background: #0c2d50;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  padding-right: 10px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  cursor: pointer;\n  font-family: none;\n}\n.top-tite fa {\n  margin-left: 15px;\n}\n.content-pagination {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.content-pagination span {\n  margin: 10px;\n  cursor: pointer;\n}\n.content-pagination span:hover {\n  opacity: 0.7;\n}\n.current {\n  cursor: auto !important;\n}\n.no-actu {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: 130px;\n  margin-top: 0px;\n  background: whitesmoke;\n  color: #0c2d50;\n  font-weight: bold;\n  align-items: center;\n  border-radius: 5px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL25ld3MtYWxsL2FjdHVhbGl0eS9hY3R1YWxpdHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlscy9uZXdzLWFsbC9hY3R1YWxpdHkvYWN0dWFsaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDJDQUFBO0FBQ0E7MkNBQUE7QUFFQTtFQUFjLHFCQUFBO0FDRGQ7QURFQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLDRCQUFBO0FDRUo7QURBQTtFQUEyQiwrQ0FBQTtBQ0kzQjtBREhBO0VBQTRCLGNBQUE7QUNPNUI7QUROQTtFQUFzQixXQUFBO0FDVXRCO0FEVEE7RUFBd0IscUJBQUE7QUNheEI7QURaQTtFQUNJLDBDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDZUo7QURiQTtFQUFvRCxrQkFBQTtBQ2lCcEQ7QURoQkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNtQko7QURqQkE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDb0JKO0FEbEJBO0VBQTJDLDBDQUFBO0FDc0IzQztBRHBCQTtFQUNFLFdBQUE7QUN1QkY7QURwQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUN1QkY7QURwQkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQ3VCRjtBRHBCQTtFQUNFLGVBQUE7QUN1QkY7QURwQkE7RUFDRSxpQkFBQTtBQ3VCRjtBRHBCQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDdUJGO0FEcEJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDdUJGO0FEcEJBO0VBQ0UsaUJBQUE7QUN1QkY7QURwQkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUN1QkY7QURwQkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQTlGYTtBQ3FIZjtBRHBCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3VCRjtBRHBCQTtFQUNFLGdCQUFBO0FDdUJGO0FEcEJBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FDdUJGO0FEcEJBO0VBQ0UsZUFBQTtBQ3VCRjtBRHBCQTtFQUNFLGtCQUFBO0FDdUJGO0FEcEJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDdUJGO0FEcEJBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDdUJGO0FEcEJBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ3VCRjtBRG5CQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDc0JGO0FEbkJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDc0JGO0FEZkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBbkxhO0VBb0xiLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNrQkY7QURmQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNrQkY7QURkQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ2lCRjtBRGRBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDaUJGO0FEZEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBRUEsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDZ0JGO0FEYkE7RUFDRSxXQUFBO0FDZ0JGO0FEYkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtBQ2dCRjtBRGJBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBL09hO0VBZ1BiLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2dCRjtBRGJBO0VBQ0UsaUJBQUE7QUNnQkY7QURiQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2dCRjtBRGJBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNnQkY7QURiQTtFQUNFLFlBQUE7QUNnQkY7QURiQTtFQUNFLHVCQUFBO0FDZ0JGO0FEYkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQTFSYTtFQTJSYixpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDZ0JGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL25ld3MtYWxsL2FjdHVhbGl0eS9hY3R1YWxpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZmlyc3QtY29sb3IgOiAjMGMyZDUwO1xuJHNlY29uZC1jb2xvciA6ICMwMDIyNDc7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAgNy4gTGF0ZXN0IE5ld3MgQXJlYVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5sYXRlc3QtYXJlYSB7cGFkZGluZzogMTIwcHggMCA3MHB4O31cbi5zaW5nbGUtbGF0ZXN0LXRleHQgPiBoMyB7XG4gICAgZm9udC1mYW1pbHk6IHJhbGV3YXk7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnNpbmdsZS1sYXRlc3QtaXRlbSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzXG59XG4uc2luZ2xlLWxhdGVzdC1pdGVtOmhvdmVyIHtib3gtc2hhZG93OiAycHggNXB4IDI1cHggcmdiYSgzNCwgMzAsIDMxLCAwLjI1KTt9XG4uc2luZ2xlLWxhdGVzdC10ZXh0ID4gaDMgYSB7Y29sb3I6ICMyZDNlNTA7fVxuLnNpbmdsZS1sYXRlc3QtaW1hZ2Uge2Zsb2F0OiBsZWZ0O31cbi5zaW5nbGUtbGF0ZXN0LWltYWdlIGEge2Rpc3BsYXk6IGlubGluZS1ibG9ja31cbi5zaW5nbGUtbGF0ZXN0LXRleHQge1xuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg2YmM0MjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDMwcHggMCAyN3B4IDM1cHg7XG59XG4uc2luZ2xlLWxhdGVzdC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcgc3BhbiB7bWFyZ2luLXJpZ2h0OiAxM3B4O31cbi5zaW5nbGUtbGF0ZXN0LWl0ZW0gLnNpbmdsZS1pdGVtLWNvbW1lbnQtdmlldyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuLnNpbmdsZS1sYXRlc3QtaXRlbSAuYnV0dG9uLWRlZmF1bHQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgcGFkZGluZzogN3B4IDIxcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjI0NztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNpbmdsZS1sYXRlc3QtaXRlbTpob3ZlciAuYnV0dG9uLWRlZmF1bHQge2JhY2tncm91bmQ6ICMyRDNFNTAgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDt9XG5cbi5zZWN0aW9uLWxlZnQgI3Bvc3RlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2luZ2xlLWxhdGVzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnNpbmdsZS1sYXRlc3QtaW1hZ2Uge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDI2MHB4O1xufVxuXG4uc2luZ2xlLWxhdGVzdC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5zaW5nbGUtbGF0ZXN0LWl0ZW0gLnNpbmdsZS1pdGVtLWNvbW1lbnQtdmlldyAuZmEge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNpbmdsZS1sYXRlc3QtdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tdGl0bGUgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJvdHRvbXkge1xuICB3aWR0aDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ib3R0b215LW9uZSwgLmJvdHRvbXktdHdvIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRmaXJzdC1jb2xvcjtcbn1cblxuLmJvdHRvbXktY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICBtYXJnaW4tcmlnaHQ6IDElO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLmNvbnRhaW4tc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5zZWN0aW9uLWxlZnQtZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmYTE7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG59XG5cbi5zZWN0aW9uLWxlZnQtZGF0ZSBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc2VjdGlvbi1sZWZ0LWRhdGUgcCBzcGFuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5wLnAyIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuaDMuc2VjdGlvbi1yaWdodC1oMyB7XG4gIHdpZHRoOiAzMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xuICB0ZXh0LXNoYWRvdzogOXB4IDVweCAxMHB4IHJnYigwIDAgMCAvIDMyJSk7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItd2lkdGg6IHRoaWNrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uc2VjdGlvbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5cbi5jb250YWluLWdhbGxlcmllIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW4tZ2FsbGVyaWUtb25lLCAuY29udGFpbi1nYWxsZXJpZS10d28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8vIC5jb250YWluLWdhbGxlcmllLW9uZSAuaW1nLCAuY29udGFpbi1nYWxsZXJpZS10d28gLmltZyB7XG4vLyAgIHdpZHRoOiAzNSUgIWltcG9ydGFudDtcbi8vIH1cblxuLnRleHQtZ2FsbGVyaWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRmaXJzdC1jb2xvcjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuXG4uYmFyLWdhbGxlcmllIHtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDVweDtcbn1cblxuLy8gQW5pbWF0aW9uXG4uaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xufVxuXG4uaW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiAyMjBweDtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzJkNTA2YjtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwOENCQTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG59XG5cbi5pbWc6aG92ZXIgLm92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4udG9wLXRpdGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICRmaXJzdC1jb2xvcjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogbm9uZTtcbn1cblxuLnRvcC10aXRlIGZhIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5jb250ZW50LXBhZ2luYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50LXBhZ2luYXRpb24gc3BhbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGVudC1wYWdpbmF0aW9uIHNwYW46aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5jdXJyZW50IHtcbiAgY3Vyc29yOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5uby1hY3R1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTMwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgY29sb3I6ICRmaXJzdC1jb2xvcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qICA3LiBMYXRlc3QgTmV3cyBBcmVhXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmxhdGVzdC1hcmVhIHtcbiAgcGFkZGluZzogMTIwcHggMCA3MHB4O1xufVxuXG4uc2luZ2xlLWxhdGVzdC10ZXh0ID4gaDMge1xuICBmb250LWZhbWlseTogcmFsZXdheTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5zaW5nbGUtbGF0ZXN0LWl0ZW0ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG5cbi5zaW5nbGUtbGF0ZXN0LWl0ZW06aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggNXB4IDI1cHggcmdiYSgzNCwgMzAsIDMxLCAwLjI1KTtcbn1cblxuLnNpbmdsZS1sYXRlc3QtdGV4dCA+IGgzIGEge1xuICBjb2xvcjogIzJkM2U1MDtcbn1cblxuLnNpbmdsZS1sYXRlc3QtaW1hZ2Uge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnNpbmdsZS1sYXRlc3QtaW1hZ2UgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNpbmdsZS1sYXRlc3QtdGV4dCB7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4NmJjNDI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDMwcHggMCAyN3B4IDM1cHg7XG59XG5cbi5zaW5nbGUtbGF0ZXN0LWl0ZW0gLnNpbmdsZS1pdGVtLWNvbW1lbnQtdmlldyBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xufVxuXG4uc2luZ2xlLWxhdGVzdC1pdGVtIC5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uc2luZ2xlLWxhdGVzdC1pdGVtIC5idXR0b24tZGVmYXVsdCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBwYWRkaW5nOiA3cHggMjFweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDIyNDc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2luZ2xlLWxhdGVzdC1pdGVtOmhvdmVyIC5idXR0b24tZGVmYXVsdCB7XG4gIGJhY2tncm91bmQ6ICMyRDNFNTAgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cblxuLnNlY3Rpb24tbGVmdCAjcG9zdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaW5nbGUtbGF0ZXN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uc2luZ2xlLWxhdGVzdC1pbWFnZSB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMjYwcHg7XG59XG5cbi5zaW5nbGUtbGF0ZXN0LWl0ZW0gLnNpbmdsZS1pdGVtLWNvbW1lbnQtdmlldyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnNpbmdsZS1sYXRlc3QtaXRlbSAuc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3IC5mYSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc2luZ2xlLWxhdGVzdC10ZXh0IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VjdGlvbi10aXRsZSBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm90dG9teSB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJvdHRvbXktb25lLCAuYm90dG9teS10d28ge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmQ1MDtcbn1cblxuLmJvdHRvbXktY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICBtYXJnaW4tcmlnaHQ6IDElO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLmNvbnRhaW4tc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5zZWN0aW9uLWxlZnQtZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmYTE7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG59XG5cbi5zZWN0aW9uLWxlZnQtZGF0ZSBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc2VjdGlvbi1sZWZ0LWRhdGUgcCBzcGFuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5wLnAyIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuaDMuc2VjdGlvbi1yaWdodC1oMyB7XG4gIHdpZHRoOiAzMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xuICB0ZXh0LXNoYWRvdzogOXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zMik7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItd2lkdGg6IHRoaWNrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uc2VjdGlvbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uY29udGFpbi1nYWxsZXJpZSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250YWluLWdhbGxlcmllLW9uZSwgLmNvbnRhaW4tZ2FsbGVyaWUtdHdvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dC1nYWxsZXJpZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmQ1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuXG4uYmFyLWdhbGxlcmllIHtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDVweDtcbn1cblxuLmltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmltYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgbWF4LWhlaWdodDogMjIwcHg7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwNmI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbn1cblxuLmltZzpob3ZlciAub3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi50b3AtdGl0ZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzBjMmQ1MDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogbm9uZTtcbn1cblxuLnRvcC10aXRlIGZhIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5jb250ZW50LXBhZ2luYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50LXBhZ2luYXRpb24gc3BhbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGVudC1wYWdpbmF0aW9uIHNwYW46aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5jdXJyZW50IHtcbiAgY3Vyc29yOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5uby1hY3R1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTMwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgY29sb3I6ICMwYzJkNTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */");

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
        this.defaultImg = "./../../../../../assets/images/course/1.jpg";
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
                            let ind = index + 1;
                            let url = "./../../../../../assets/images/course/" + ind + ".jpg";
                            element.galerie.push(url);
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
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  width: 84%;\n  margin-left: 8%;\n  margin-right: 8%;\n}\n\n.noAnnonce {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n  font-size: 30px;\n}\n\n.title {\n  color: #002247;\n  font-size: 50px;\n  font-weight: 500;\n  font-variant: petite-caps;\n  margin-top: 30px;\n}\n\n.card-one {\n  background: whitesmoke;\n  padding: 20px;\n  min-height: 100px;\n  margin-top: 30px;\n}\n\n.title-card-one {\n  font-family: \"Geogrotesque semibold\", Helvetica, Arial, Lucida, sans-serif;\n  font-size: 24px;\n  color: #002247;\n  text-transform: uppercase;\n}\n\n.line {\n  width: 100%;\n  height: 2px;\n  background: #002247;\n}\n\n.contain-img {\n  max-width: 100%;\n}\n\n.contain-com {\n  margin-top: 30px;\n}\n\n.contain-com .contain {\n  background: white;\n}\n\n.contain-com .contain .contain-date {\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #000000a6;\n}\n\n.contain-com .contain .contain-description {\n  padding: 15px;\n  padding-bottom: 20px !important;\n  color: #000000a6;\n  height: 200px;\n  overflow-y: auto;\n}\n\n.contain-description::-webkit-scrollbar {\n  width: 1px;\n  background-color: transparent;\n}\n\n.contain-com .contain .contain-title {\n  font-size: 20px;\n  margin-top: 10px;\n  padding: 10px;\n}\n\n.lire-plus {\n  color: #002247;\n  margin-left: 15px;\n  font-weight: 500;\n  padding-bottom: 20px !important;\n  cursor: pointer;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.lire-plus span {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s, opacity 0.2s, padding-left 0.3s linear;\n  padding-left: -1px;\n}\n\n.lire-plus:hover span {\n  visibility: visible;\n  opacity: 1;\n  padding-left: 15px;\n}\n\n.contain-other-com {\n  margin-top: 30px;\n}\n\n.contain-other-com .list-com {\n  margin-bottom: 30px;\n  margin-left: 0px;\n  background: whitesmoke;\n}\n\n.contain-other-com img {\n  width: 100%;\n  height: 200px;\n}\n\n.description-other {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-top: 10px;\n}\n\n.description-other .title-other {\n  font-weight: 500;\n}\n\n.description-other .detail-other {\n  font-weight: 500;\n}\n\n.list-com .lire-plus {\n  margin-left: 0px !important;\n}\n\n.content-pagination {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.content-pagination span {\n  margin: 10px;\n  cursor: pointer;\n}\n\n.content-pagination span:hover {\n  opacity: 0.7;\n}\n\n.content-src-img {\n  padding: 0px;\n  height: 100%;\n}\n\n.current {\n  cursor: auto !important;\n}\n\n@media screen and (min-width: 992px) {\n  .contain-img {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL25ld3MtYWxsL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlscy9uZXdzLWFsbC9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSxjQW5CYztFQW9CZCxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQW5CVTtBQ2NaOztBRFFBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkExQlU7QUNxQlo7O0FEUUE7RUFDRSwwRUFBQTtFQUNBLGVBQUE7RUFDQSxjQXBDYztFQXFDZCx5QkFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkEzQ2M7QUNzQ2hCOztBRFFBO0VBQ0UsZUFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBL0NVO0FDMENaOztBRFFBO0VBQ0UsaUJBdERZO0FDaURkOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSko7O0FETUU7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRFFBO0VBQ0ksVUFBQTtFQUNBLDZCQUFBO0FDTEo7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDTEY7O0FEUUE7RUFDRSxjQWxGYztFQW1GZCxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDTEY7O0FET0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpRUFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEVUU7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ1BKOztBRFdBO0VBQ0UsZ0JBdEdVO0FDOEZaOztBRFlBO0VBQ0UsbUJBM0dVO0VBNEdWLGdCQUFBO0VBQ0Esc0JBQUE7QUNURjs7QURZQTtFQUVFLFdBQUE7RUFDQSxhQUFBO0FDVkY7O0FEYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNWRjs7QURhQTtFQUNFLGdCQUFBO0FDVkY7O0FEYUE7RUFDRSxnQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsMkJBQUE7QUNWRjs7QURhQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1ZGOztBRGFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNWRjs7QURhQTtFQUNFLFlBQUE7QUNWRjs7QURhQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDVkY7O0FEYUE7RUFDRSx1QkFBQTtBQ1ZGOztBRGFBO0VBQ0U7SUFDRSxlQUFBO0VDVkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlscy9uZXdzLWFsbC9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpcnN0LWNvbG9yIDogIzBjMmQ1MDtcbiRzZWNvbmQtY29sb3IgOiAjMDAyMjQ3O1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcbiRibHVlOiAjMDA1Y2I5O1xuXG4kbWFyZ2luVG9wOiAzMHB4O1xuLm1haW4ge1xuICB3aWR0aDogODQlO1xuICBtYXJnaW4tbGVmdDogOCU7XG4gIG1hcmdpbi1yaWdodDogOCU7XG59XG5cbi5ub0Fubm9uY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAkc2Vjb25kLWNvbG9yO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtdmFyaWFudDogcGV0aXRlLWNhcHM7XG4gIG1hcmdpbi10b3A6ICRtYXJnaW5Ub3A7XG59XG5cbi5jYXJkLW9uZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAkbWFyZ2luVG9wO1xufVxuXG4udGl0bGUtY2FyZC1vbmUge1xuICBmb250LWZhbWlseTogJ0dlb2dyb3Rlc3F1ZSBzZW1pYm9sZCcsSGVsdmV0aWNhLEFyaWFsLEx1Y2lkYSxzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkc2Vjb25kLWNvbG9yO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogJHNlY29uZC1jb2xvcjtcbn1cblxuLmNvbnRhaW4taW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbi1jb20ge1xuICBtYXJnaW4tdG9wOiAkbWFyZ2luVG9wO1xufVxuXG4uY29udGFpbi1jb20gLmNvbnRhaW4ge1xuICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XG4gIC5jb250YWluLWRhdGUge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGNvbG9yOiAjMDAwMDAwYTY7XG4gIH1cbiAgLmNvbnRhaW4tZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwMDAwMGE2O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxufVxuXG4uY29udGFpbi1kZXNjcmlwdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jb250YWluLWNvbSAuY29udGFpbiAuY29udGFpbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmxpcmUtcGx1cyB7XG4gIGNvbG9yOiAkc2Vjb25kLWNvbG9yO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgc3BhbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjJzLCBwYWRkaW5nLWxlZnQgMC4zcyBsaW5lYXI7XG4gICAgcGFkZGluZy1sZWZ0OiAtMXB4O1xuICB9XG59XG5cbi5saXJlLXBsdXM6aG92ZXIge1xuICBzcGFuIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG59XG5cbi5jb250YWluLW90aGVyLWNvbSB7XG4gIG1hcmdpbi10b3A6ICRtYXJnaW5Ub3A7XG59XG5cblxuLmNvbnRhaW4tb3RoZXItY29tIC5saXN0LWNvbSB7XG4gIG1hcmdpbi1ib3R0b206ICRtYXJnaW5Ub3A7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG5cbi5jb250YWluLW90aGVyLWNvbSBpbWcge1xuICAvLyBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uZGVzY3JpcHRpb24tb3RoZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5kZXNjcmlwdGlvbi1vdGhlciAudGl0bGUtb3RoZXIge1xuICBmb250LXdlaWdodDogIDUwMDtcbn1cblxuLmRlc2NyaXB0aW9uLW90aGVyIC5kZXRhaWwtb3RoZXIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubGlzdC1jb20gLmxpcmUtcGx1cyB7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnQtcGFnaW5hdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtcGFnaW5hdGlvbiBzcGFuIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250ZW50LXBhZ2luYXRpb24gc3Bhbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmNvbnRlbnQtc3JjLWltZyB7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY3VycmVudCB7XG4gIGN1cnNvcjogYXV0byAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbi1pbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbn1cbiIsIi5tYWluIHtcbiAgd2lkdGg6IDg0JTtcbiAgbWFyZ2luLWxlZnQ6IDglO1xuICBtYXJnaW4tcmlnaHQ6IDglO1xufVxuXG4ubm9Bbm5vbmNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogIzAwMjI0NztcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uY2FyZC1vbmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnRpdGxlLWNhcmQtb25lIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvZ3JvdGVzcXVlIHNlbWlib2xkXCIsIEhlbHZldGljYSwgQXJpYWwsIEx1Y2lkYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzAwMjI0NztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMwMDIyNDc7XG59XG5cbi5jb250YWluLWltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW4tY29tIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNvbnRhaW4tY29tIC5jb250YWluIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uY29udGFpbi1jb20gLmNvbnRhaW4gLmNvbnRhaW4tZGF0ZSB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgY29sb3I6ICMwMDAwMDBhNjtcbn1cbi5jb250YWluLWNvbSAuY29udGFpbiAuY29udGFpbi1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwMDAwYTY7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jb250YWluLWRlc2NyaXB0aW9uOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udGFpbi1jb20gLmNvbnRhaW4gLmNvbnRhaW4tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5saXJlLXBsdXMge1xuICBjb2xvcjogIzAwMjI0NztcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmxpcmUtcGx1cyBzcGFuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuMnMsIHBhZGRpbmctbGVmdCAwLjNzIGxpbmVhcjtcbiAgcGFkZGluZy1sZWZ0OiAtMXB4O1xufVxuXG4ubGlyZS1wbHVzOmhvdmVyIHNwYW4ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5jb250YWluLW90aGVyLWNvbSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5jb250YWluLW90aGVyLWNvbSAubGlzdC1jb20ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG4uY29udGFpbi1vdGhlci1jb20gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5kZXNjcmlwdGlvbi1vdGhlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmRlc2NyaXB0aW9uLW90aGVyIC50aXRsZS1vdGhlciB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5kZXNjcmlwdGlvbi1vdGhlciAuZGV0YWlsLW90aGVyIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxpc3QtY29tIC5saXJlLXBsdXMge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50LXBhZ2luYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50LXBhZ2luYXRpb24gc3BhbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGVudC1wYWdpbmF0aW9uIHNwYW46aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5jb250ZW50LXNyYy1pbWcge1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmN1cnJlbnQge1xuICBjdXJzb3I6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW4taW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */");

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
        this.defaultImg = "./../../../../../assets/images/background/Anon151-Boundless-Banner-hd.jpg";
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
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.header-news {\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n  width: 100%;\n  text-align: center;\n  background-image: linear-gradient(to bottom, #ffffff, #ffffffea, #ffffffde, #ffffff09, #ffffff00), url('Vue-aérienne-1024x414.jpg');\n  background-position: center;\n  background-size: cover;\n  padding-top: 80px;\n}\n.title-header-news {\n  font-size: 50px;\n  font-variant: petite-caps;\n  font-weight: 500;\n  color: #0c2d50;\n}\n.descr-header-news {\n  color: #002247;\n  width: 70%;\n  margin-left: 15%;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL25ld3MtYWxsL25ld3MtYWxsLmNvbXBvbmVudC5zY3NzIiwiL21lZGlhL2JveS9EQVRBL1dlYiBDdXAvY2FjdHVzLmVuaS5tZy9mcm9udF9vZmZpY2Uvc3JjL2FwcC9jb21wb25lbnRzL2RldGFpbHMvbmV3cy1hbGwvbmV3cy1hbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDSWhCO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLG1JQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FESEY7QUNNQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FyQmE7QURrQmY7QUNNQTtFQUNFLGNBeEJjO0VBeUJkLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURIRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlscy9uZXdzLWFsbC9uZXdzLWFsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5oZWFkZXItbmV3cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYsICNmZmZmZmZlYSwgI2ZmZmZmZmRlLCAjZmZmZmZmMDksICNmZmZmZmYwMCksIHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kL1Z1ZS1hw6lyaWVubmUtMTAyNHg0MTQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xufVxuXG4udGl0bGUtaGVhZGVyLW5ld3Mge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtdmFyaWFudDogcGV0aXRlLWNhcHM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMGMyZDUwO1xufVxuXG4uZGVzY3ItaGVhZGVyLW5ld3Mge1xuICBjb2xvcjogIzAwMjI0NztcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgZm9udC1zaXplOiAxOHB4O1xufSIsIiRmaXJzdC1jb2xvciA6ICMwYzJkNTA7XG4kc2Vjb25kLWNvbG9yIDogIzAwMjI0NztcbiRjb2xvci13aGl0ZTogd2hpdGU7XG5cbi5oZWFkZXItbmV3cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kL0Fub24xNTEtQm91bmRsZXNzLUJhbm5lci1oZC5qcGdcIik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYsICNmZmZmZmZlYSwgI2ZmZmZmZmRlLCAjZmZmZmZmMDksICNmZmZmZmYwMCksdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQvVnVlLWHDqXJpZW5uZS0xMDI0eDQxNC5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG59XG5cbi50aXRsZS1oZWFkZXItbmV3cyB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICRmaXJzdC1jb2xvcjtcbn1cblxuLmRlc2NyLWhlYWRlci1uZXdzIHtcbiAgY29sb3I6ICRzZWNvbmQtY29sb3I7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuXG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".image {\n  width: 100%;\n}\n\n.main-popup {\n  background-color: whitesmoke;\n}\n\n.img-popup {\n  width: 100%;\n  height: 40vh !important;\n}\n\n.inside-popup {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.outside-popup {\n  width: 100%;\n}\n\n.main-popup {\n  height: 95vh;\n  width: 100vh;\n}\n\n.leftSide {\n  padding: 10px;\n}\n\n.detail {\n  font-style: italic;\n}\n\n.rightSide {\n  padding: 10px;\n  height: 300px;\n  overflow-y: scroll;\n  text-align: justify;\n}\n\n.rightSide::-webkit-scrollbar {\n  width: 1px;\n  background-color: white;\n}\n\n.contain-title {\n  width: 100%;\n  text-align: center;\n  padding-top: 30px;\n}\n\n.contain-date, .contain-posteur {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n@media screen and (max-width: 992px) {\n  .rightSide {\n    width: 70%;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .rightSide {\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 520px) {\n  .rightSide {\n    width: 40%;\n  }\n}\n\n@media screen and (max-width: 390px) {\n  .rightSide {\n    width: 27%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL25ld3MtYWxsL3BvcHVwLWV2ZW50L3BvcHVwLWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RldGFpbHMvbmV3cy1hbGwvcG9wdXAtZXZlbnQvcG9wdXAtZXZlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLFVBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0U7SUFDRSxVQUFBO0VDREY7QUFDRjs7QURJQTtFQUNFO0lBQ0UsVUFBQTtFQ0ZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RldGFpbHMvbmV3cy1hbGwvcG9wdXAtZXZlbnQvcG9wdXAtZXZlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW4tcG9wdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uaW1nLXBvcHVwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDB2aCAhaW1wb3J0YW50O1xufVxuXG4uaW5zaWRlLXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ub3V0c2lkZS1wb3B1cCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbi1wb3B1cCB7XG4gIGhlaWdodDogOTV2aDtcbiAgd2lkdGg6IDEwMHZoO1xufVxuXG4ubGVmdFNpZGUge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZGV0YWlsIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ucmlnaHRTaWRlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ucmlnaHRTaWRlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbi10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uY29udGFpbi1kYXRlLCAuY29udGFpbi1wb3N0ZXVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnJpZ2h0U2lkZSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAucmlnaHRTaWRlIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gIC5yaWdodFNpZGUge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkwcHgpIHtcbiAgLnJpZ2h0U2lkZSB7XG4gICAgd2lkdGg6IDI3JTtcbiAgfVxufVxuIiwiLmltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLXBvcHVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmltZy1wb3B1cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwdmggIWltcG9ydGFudDtcbn1cblxuLmluc2lkZS1wb3B1cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm91dHNpZGUtcG9wdXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW4tcG9wdXAge1xuICBoZWlnaHQ6IDk1dmg7XG4gIHdpZHRoOiAxMDB2aDtcbn1cblxuLmxlZnRTaWRlIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmRldGFpbCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnJpZ2h0U2lkZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnJpZ2h0U2lkZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW4tdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmNvbnRhaW4tZGF0ZSwgLmNvbnRhaW4tcG9zdGV1ciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5yaWdodFNpZGUge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5yaWdodFNpZGUge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gIC5yaWdodFNpZGUge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5MHB4KSB7XG4gIC5yaWdodFNpZGUge1xuICAgIHdpZHRoOiAyNyU7XG4gIH1cbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif !important;\n}\n\n.header-top:before,\n.about-area:before,\n.newsletter-area:before {\n  content: \"\";\n  height: 48px;\n  position: absolute;\n  right: 0;\n  top: 10px;\n  width: 43%;\n}\n\n.header-top:after,\n.about-area:after,\n.newsletter-area:after {\n  -moz-border-bottom-colors: none;\n  -moz-border-left-colors: none;\n  -moz-border-right-colors: none;\n  -moz-border-top-colors: none;\n  -o-border-image: none;\n  border-image: none;\n  border-style: solid;\n  border-width: 24px 10px;\n  content: \"\";\n  height: 5px;\n  position: absolute;\n  right: 43%;\n  top: 10px;\n  width: 0;\n}\n\n/*----------------------------------------*/\n\n/*  4. About Area\n/*----------------------------------------*/\n\n.about-area {\n  background-color: #0c2d50;\n  color: #ffffff;\n  margin-top: 100px;\n  padding-bottom: 54px;\n  position: relative;\n  margin-bottom: 100px;\n}\n\n.about-area:before {\n  height: 110px;\n  left: 0;\n  right: auto;\n  top: -20px;\n  width: 49.2%;\n}\n\n.about-area:after {\n  border-width: 55px 30px;\n  left: 49.2%;\n  top: -20px;\n  right: auto;\n}\n\n.about-area h3 {\n  font-size: 30px;\n  margin-bottom: 79px;\n  padding-top: 22px;\n  z-index: 9;\n  position: relative;\n}\n\n.about-area p {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif !important;\n  line-height: 26px;\n  margin-bottom: 42px;\n}\n\n.about-container {\n  margin-left: 70px;\n}\n\n.about-area .button-default {\n  padding: 9px 41px;\n}\n\n.about-container > .button-default:hover {\n  background: #ffffff none repeat scroll 0 0;\n  color: #2d3e50;\n}\n\n.timber {\n  right: 20px;\n  position: relative;\n  bottom: 20px;\n  width: 100%;\n  /* background: red; */\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.contain-director {\n  margin-top: 40px;\n  text-align: center;\n}\n\nimg#imgDirector {\n  width: 250px;\n  height: 300px;\n}\n\n.name-director {\n  width: 100% !important;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding: 3px;\n}\n\n@media screen and (max-width: 992px) {\n  .about-area p {\n    line-height: 26px;\n    margin-bottom: 42px;\n    width: 50%;\n  }\n}\n\n@media screen and (min-width: 1500px) {\n  .about-area {\n    height: 380px !important;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .about-area {\n    margin-top: 80px !important;\n    background: #0c2d50 !important;\n  }\n\n  .about-container {\n    margin-left: -50px !important;\n  }\n\n  .contain-director {\n    margin-top: 150px;\n  }\n\n  .about-area p {\n    line-height: 26px;\n    margin-bottom: 42px;\n    width: 65%;\n  }\n}\n\n@media screen and (max-width: 560px) {\n  .contain-director {\n    display: none;\n  }\n\n  .about-area p {\n    line-height: 26px;\n    margin-bottom: 42px;\n    width: 90%;\n  }\n\n  .about-container {\n    margin-left: 0px !important;\n  }\n}\n\n@media screen and (min-width: 1550px) {\n  .contain-director {\n    position: absolute;\n    right: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvY29tcG9uZW50cy9kaXJlY3Rvci13b3JkL2RpcmVjdG9yLXdvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGlyZWN0b3Itd29yZC9kaXJlY3Rvci13b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsNERBQUE7QUNGRjs7QURLQTs7O0VBR0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBRElBOzs7RUFHRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0RGOztBRElBLDJDQUFBOztBQUNBOzJDQUFBOztBQUVBO0VBRUUseUJBekNZO0VBMENaLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0ZGOztBRElBO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNERjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQUY7O0FERUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsNERBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7QUNJRjs7QURGQTtFQUNFLDBDQUFBO0VBQ0EsY0FBQTtBQ0tGOztBREZBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDS0Y7O0FERkE7RUFJRSxnQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0VGOztBRENBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQ0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VDRUY7QUFDRjs7QURBQTtFQUNFO0lBQ0Usd0JBQUE7RUNFRjtBQUNGOztBREFBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLDhCQUFBO0VDRUY7O0VEQUE7SUFDRSw2QkFBQTtFQ0dGOztFRERBO0lBQ0UsaUJBQUE7RUNJRjs7RURGQTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VDS0Y7QUFDRjs7QURGQTtFQUNFO0lBQ0UsYUFBQTtFQ0lGOztFREZBO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUNLRjs7RURIQTtJQUNFLDJCQUFBO0VDTUY7QUFDRjs7QURIQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VDS0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlyZWN0b3Itd29yZC9kaXJlY3Rvci13b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpcnN0LWNvbG9yOiAjMGMyZDUwO1xuJHNlY29uZC1jb2xvcjogIzAwMjI0NztcblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLXRvcDpiZWZvcmUsXG4uYWJvdXQtYXJlYTpiZWZvcmUsXG4ubmV3c2xldHRlci1hcmVhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogNDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogNDMlO1xufVxuLmhlYWRlci10b3A6YWZ0ZXIsXG4uYWJvdXQtYXJlYTphZnRlcixcbi5uZXdzbGV0dGVyLWFyZWE6YWZ0ZXIge1xuICAtbW96LWJvcmRlci1ib3R0b20tY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci1sZWZ0LWNvbG9yczogbm9uZTtcbiAgLW1vei1ib3JkZXItcmlnaHQtY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci10b3AtY29sb3JzOiBub25lO1xuICAtby1ib3JkZXItaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAyNHB4IDEwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0MyU7XG4gIHRvcDogMTBweDtcbiAgd2lkdGg6IDA7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAgNC4gQWJvdXQgQXJlYVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5hYm91dC1hcmVhIHtcbiAgLy8gYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVyL2Jhbm5lci5qcGdcIikgbm8tcmVwZWF0IHNjcm9sbCBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlyc3QtY29sb3I7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDU0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG4uYWJvdXQtYXJlYTpiZWZvcmUge1xuICBoZWlnaHQ6IDExMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogYXV0bztcbiAgdG9wOiAtMjBweDtcbiAgd2lkdGg6IDQ5LjIlO1xufVxuLmFib3V0LWFyZWE6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDU1cHggMzBweDtcbiAgbGVmdDogNDkuMiU7XG4gIHRvcDogLTIwcHg7XG4gIHJpZ2h0OiBhdXRvO1xufVxuLmFib3V0LWFyZWEgaDMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDc5cHg7XG4gIHBhZGRpbmctdG9wOiAyMnB4O1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWJvdXQtYXJlYSBwIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBtYXJnaW4tYm90dG9tOiA0MnB4O1xufVxuLmFib3V0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuLmFib3V0LWFyZWEgLmJ1dHRvbi1kZWZhdWx0IHtcbiAgcGFkZGluZzogOXB4IDQxcHg7XG59XG4uYWJvdXQtY29udGFpbmVyID4gLmJ1dHRvbi1kZWZhdWx0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBjb2xvcjogIzJkM2U1MDtcbn1cblxuLnRpbWJlciB7XG4gIHJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNvbnRhaW4tZGlyZWN0b3Ige1xuICAvL3dpZHRoOiAyMjBweDtcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAvLyByaWdodDogMjUwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nI2ltZ0RpcmVjdG9yIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4ubmFtZS1kaXJlY3RvciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmFib3V0LWFyZWEgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDJweDtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIHtcbiAgLmFib3V0LWFyZWEge1xuICAgIGhlaWdodDogMzgwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFib3V0LWFyZWEge1xuICAgIG1hcmdpbi10b3A6IDgwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAkZmlyc3QtY29sb3IgIWltcG9ydGFudDtcbiAgfVxuICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFpbi1kaXJlY3RvciB7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIH1cbiAgLmFib3V0LWFyZWEgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDJweDtcbiAgICB3aWR0aDogNjUlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5jb250YWluLWRpcmVjdG9yIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5hYm91dC1hcmVhIHAge1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQycHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTU1MHB4KSB7XG4gIC5jb250YWluLWRpcmVjdG9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDI1MHB4O1xuICB9XG59XG4iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItdG9wOmJlZm9yZSxcbi5hYm91dC1hcmVhOmJlZm9yZSxcbi5uZXdzbGV0dGVyLWFyZWE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiA0MyU7XG59XG5cbi5oZWFkZXItdG9wOmFmdGVyLFxuLmFib3V0LWFyZWE6YWZ0ZXIsXG4ubmV3c2xldHRlci1hcmVhOmFmdGVyIHtcbiAgLW1vei1ib3JkZXItYm90dG9tLWNvbG9yczogbm9uZTtcbiAgLW1vei1ib3JkZXItbGVmdC1jb2xvcnM6IG5vbmU7XG4gIC1tb3otYm9yZGVyLXJpZ2h0LWNvbG9yczogbm9uZTtcbiAgLW1vei1ib3JkZXItdG9wLWNvbG9yczogbm9uZTtcbiAgLW8tYm9yZGVyLWltYWdlOiBub25lO1xuICBib3JkZXItaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMjRweCAxMHB4O1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNDMlO1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiAwO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogIDQuIEFib3V0IEFyZWFcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uYWJvdXQtYXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzJkNTA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDU0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5hYm91dC1hcmVhOmJlZm9yZSB7XG4gIGhlaWdodDogMTEwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiBhdXRvO1xuICB0b3A6IC0yMHB4O1xuICB3aWR0aDogNDkuMiU7XG59XG5cbi5hYm91dC1hcmVhOmFmdGVyIHtcbiAgYm9yZGVyLXdpZHRoOiA1NXB4IDMwcHg7XG4gIGxlZnQ6IDQ5LjIlO1xuICB0b3A6IC0yMHB4O1xuICByaWdodDogYXV0bztcbn1cblxuLmFib3V0LWFyZWEgaDMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDc5cHg7XG4gIHBhZGRpbmctdG9wOiAyMnB4O1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hYm91dC1hcmVhIHAge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbi1ib3R0b206IDQycHg7XG59XG5cbi5hYm91dC1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cblxuLmFib3V0LWFyZWEgLmJ1dHRvbi1kZWZhdWx0IHtcbiAgcGFkZGluZzogOXB4IDQxcHg7XG59XG5cbi5hYm91dC1jb250YWluZXIgPiAuYnV0dG9uLWRlZmF1bHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGNvbG9yOiAjMmQzZTUwO1xufVxuXG4udGltYmVyIHtcbiAgcmlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uY29udGFpbi1kaXJlY3RvciB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nI2ltZ0RpcmVjdG9yIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4ubmFtZS1kaXJlY3RvciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmFib3V0LWFyZWEgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDJweDtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIHtcbiAgLmFib3V0LWFyZWEge1xuICAgIGhlaWdodDogMzgwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFib3V0LWFyZWEge1xuICAgIG1hcmdpbi10b3A6IDgwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjMGMyZDUwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb250YWluLWRpcmVjdG9yIHtcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgfVxuXG4gIC5hYm91dC1hcmVhIHAge1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQycHg7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgLmNvbnRhaW4tZGlyZWN0b3Ige1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYWJvdXQtYXJlYSBwIHtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MnB4O1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1NTBweCkge1xuICAuY29udGFpbi1kaXJlY3RvciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyNTBweDtcbiAgfVxufSJdfQ== */");

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
        this.imgDirector = "./../../../assets/images/ENI/directeur.jpeg";
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
/* harmony default export */ __webpack_exports__["default"] = (".content,\n.contain-area {\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.contain-area {\n  margin-bottom: 100px;\n}\n\n.section-title-wrapper {\n  margin-bottom: 122px;\n}\n\n.section-title-wrapper .section-title {\n  color: #0c2d50;\n}\n\n.section-title-wrapper .section-title h4 {\n  text-transform: uppercase;\n}\n\n.section-title {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.section-title h4 {\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.bottomy {\n  width: 60%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.bottomy-one,\n.bottomy-two {\n  width: 50%;\n  height: 3px;\n  background-color: #0c2d50;\n}\n\n.bottomy-center {\n  margin-left: 1%;\n  margin-right: 1%;\n  position: relative;\n  bottom: 10px;\n}\n\n/*----------------------------------------*/\n\n/*  17.1 Teachers Area\n/*----------------------------------------*/\n\n.teachers-area {\n  padding: 0 0 50px;\n  margin-top: -90px;\n}\n\n.single-teacher-item {\n  box-shadow: 1px 0 5px rgba(0, 0, 0, 0.2);\n  position: relative;\n  transition: all 0.5s !important;\n  cursor: pointer;\n}\n\n.single-teacher-item:hover {\n  box-shadow: 0 6px 20px rgba(34, 30, 31, 0.3);\n}\n\n.single-teacher-image > a {\n  display: inline-block;\n  position: relative;\n}\n\n.single-teacher-image > a img,\n.single-teacher-image > a {\n  width: 100%;\n}\n\n.single-teacher-image > a:after {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  position: absolute;\n  top: 0;\n  transition: all 0.3s ease 0s;\n  width: 100%;\n}\n\n.single-teacher-item:hover .single-teacher-image > a:after {\n  opacity: 1;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n}\n\n.single-teacher-text {\n  background: #f6f6f6 none repeat scroll 0 0;\n  border-bottom: 3px solid #0c2d50;\n  padding: 20px 26px 90px;\n  text-align: center;\n  transition: all 0.4s;\n}\n\n.single-teacher-item:hover .single-teacher-text {\n  margin-top: -45px;\n  padding: 20px 26px 66px;\n  position: absolute;\n  z-index: 9;\n}\n\n@media screen and (max-width: 992px) {\n  .single-teacher-item:hover .single-teacher-text {\n    margin-top: -45px;\n    padding: 20px 26px 66px;\n    position: relative;\n    z-index: 9;\n  }\n}\n\n.single-teacher-item:hover .descr-formation {\n  padding: 10px;\n  height: 150px;\n  overflow-y: auto;\n}\n\n.descr-formation::-webkit-scrollbar {\n  width: 1px;\n  background: transparent;\n}\n\n.single-teacher-text > h3 {\n  font-family: raleway;\n  font-weight: 600;\n  margin-bottom: 4px;\n  padding-top: 20px;\n  font-size: 24px;\n}\n\n.single-teacher-item:hover .single-teacher-text > h3 {\n  padding-top: 0;\n}\n\n.single-teacher-text > h3 a {\n  color: white;\n  transition: all 0.3s;\n}\n\n.single-teacher-text > h4 {\n  font-family: raleway;\n  font-weight: 500;\n  color: rgba(201, 191, 191, 0.76);\n}\n\n.single-teacher-text > p {\n  display: none;\n  padding-top: 13px;\n  color: white;\n}\n\n.single-teacher-item:hover .single-teacher-text p {\n  display: block;\n}\n\n.social-links > a {\n  border: 1px solid #2d3e50;\n  border-radius: 50%;\n  color: white;\n  display: inline-block;\n  font-size: 14px;\n  height: 27px;\n  line-height: 25px;\n  margin: 0 3px;\n  text-align: center;\n  width: 27px;\n}\n\n.social-links > a:hover {\n  color: #ffffff;\n}\n\n.social-links {\n  bottom: 38px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  width: 100%;\n  transition: all 0.3s ease 0s;\n}\n\n.single-teacher-item:hover .social-links {\n  bottom: 25px;\n}\n\n.single-course-details {\n  background: #f6f6f6 none repeat scroll 0 0;\n  border-bottom: 3px solid #0c2d50;\n  margin-bottom: 80px;\n  padding: 33px 0;\n}\n\n.single-course-details .single-item-text {\n  padding-right: 48px;\n}\n\n.course-details-area a img {\n  margin-left: -35px;\n}\n\n.single-course-details a {\n  display: block;\n}\n\n.single-course-details .col-md-6:first-child {\n  padding-right: 3px;\n}\n\n.one {\n  background-image: url('niv1.jpg') !important;\n  background-size: cover !important;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n}\n\n.two {\n  background-image: url('niv2.jpg') !important;\n  background-size: cover !important;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n}\n\n.three {\n  background-image: url('niv3.jpg') !important;\n  background-size: cover !important;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n}\n\n.single-teacher-text {\n  height: 260px;\n  width: 100%;\n}\n\n@media screen and (max-width: 992px) {\n  .single-teacher-item {\n    margin-top: 40px;\n  }\n}\n\n.no-news {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: 130px;\n  margin-top: -30px;\n  background: whitesmoke;\n  color: #0c2d50;\n  font-weight: bold;\n  align-items: center;\n  border-radius: 5px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtYXRpb25zL2Zvcm1hdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybWF0aW9ucy9mb3JtYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOztFQUVFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURPQTtFQUNFLG9CQUFBO0FDSkY7O0FET0E7RUFDRSxvQkFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FyQlk7QUNpQmQ7O0FET0E7RUFDRSx5QkFBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0pGOztBRE9BO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDSkY7O0FET0E7O0VBRUUsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFwRFk7QUNnRGQ7O0FET0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNKRjs7QURPQSwyQ0FBQTs7QUFDQTsyQ0FBQTs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNKRjs7QURNQTtFQUNFLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNIRjs7QURLQTtFQUNFLDRDQUFBO0FDRkY7O0FESUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FER0E7O0VBRUUsV0FBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGdFQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFFQSw0QkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxrRUFBQTtFQUNBLDBCQUFBO0FDRUY7O0FEQUE7RUFDRSwwQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDSUY7O0FEREE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUNJRjtBQUNGOztBRERBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0dGOztBREFBO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FDR0Y7O0FEQUE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7QUNJRjs7QURGQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQ0tGOztBREhBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDTUY7O0FESkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDT0Y7O0FETEE7RUFDRSxjQUFBO0FDUUY7O0FETkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNTRjs7QURQQTtFQUNFLGNBQUE7QUNVRjs7QURSQTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLDRCQUFBO0FDV0Y7O0FEVEE7RUFDRSxZQUFBO0FDWUY7O0FEVkE7RUFDRSwwQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDYUY7O0FEWEE7RUFDRSxtQkFBQTtBQ2NGOztBRFpBO0VBQ0Usa0JBQUE7QUNlRjs7QURiQTtFQUNFLGNBQUE7QUNnQkY7O0FEZEE7RUFDRSxrQkFBQTtBQ2lCRjs7QURkQTtFQUNFLDRDQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0FDaUJGOztBRGRBO0VBQ0UsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7QUNpQkY7O0FEZEE7RUFDRSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtBQ2lCRjs7QURkQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDaUJGOztBRGRBO0VBQ0U7SUFDRSxnQkFBQTtFQ2lCRjtBQUNGOztBRGRBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBNVBZO0VBNlBaLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNnQkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvcm1hdGlvbnMvZm9ybWF0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmaXJzdC1jb2xvcjogIzBjMmQ1MDtcbiRzZWNvbmQtY29sb3I6ICMwMDIyNDc7XG4kdGhpcmQtY29sb3I6ICMxMTdhYmU7XG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XG5cbi5jb250ZW50LFxuLmNvbnRhaW4tYXJlYSB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLmNvbnRhaW4tYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uc2VjdGlvbi10aXRsZS13cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTIycHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUge1xuICBjb2xvcjogJGZpcnN0LWNvbG9yO1xufVxuXG4uc2VjdGlvbi10aXRsZS13cmFwcGVyIC5zZWN0aW9uLXRpdGxlIGg0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uLXRpdGxlIGg0IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJvdHRvbXkge1xuICB3aWR0aDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ib3R0b215LW9uZSxcbi5ib3R0b215LXR3byB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlyc3QtY29sb3I7XG59XG5cbi5ib3R0b215LWNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDEwcHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAgMTcuMSBUZWFjaGVycyBBcmVhXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnRlYWNoZXJzLWFyZWEge1xuICBwYWRkaW5nOiAwIDAgNTBweDtcbiAgbWFyZ2luLXRvcDogLTkwcHg7XG59XG4uc2luZ2xlLXRlYWNoZXItaXRlbSB7XG4gIGJveC1zaGFkb3c6IDFweCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMzQsIDMwLCAzMSwgMC4zKTtcbn1cbi5zaW5nbGUtdGVhY2hlci1pbWFnZSA+IGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zaW5nbGUtdGVhY2hlci1pbWFnZSA+IGEgaW1nLFxuLnNpbmdsZS10ZWFjaGVyLWltYWdlID4gYSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNpbmdsZS10ZWFjaGVyLWltYWdlID4gYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLWltYWdlID4gYTphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKVwiO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi5zaW5nbGUtdGVhY2hlci10ZXh0IHtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGZpcnN0LWNvbG9yO1xuICBwYWRkaW5nOiAyMHB4IDI2cHggOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIC5zaW5nbGUtdGVhY2hlci10ZXh0IHtcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XG4gIHBhZGRpbmc6IDIwcHggMjZweCA2NnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIC5zaW5nbGUtdGVhY2hlci10ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAtNDVweDtcbiAgICBwYWRkaW5nOiAyMHB4IDI2cHggNjZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTtcbn1cbn1cblxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLmRlc2NyLWZvcm1hdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5kZXNjci1mb3JtYXRpb246Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zaW5nbGUtdGVhY2hlci10ZXh0ID4gaDMge1xuICBmb250LWZhbWlseTogcmFsZXdheTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBoMyB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBoMyBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5zaW5nbGUtdGVhY2hlci10ZXh0ID4gaDQge1xuICBmb250LWZhbWlseTogcmFsZXdheTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHJnYmEoMjAxLCAxOTEsIDE5MSwgMC43Nik7XG59XG4uc2luZ2xlLXRlYWNoZXItdGV4dCA+IHAge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nLXRvcDogMTNweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLXRleHQgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNvY2lhbC1saW5rcyA+IGEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmQzZTUwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMjdweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbjogMCAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI3cHg7XG59XG4uc29jaWFsLWxpbmtzID4gYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnNvY2lhbC1saW5rcyB7XG4gIGJvdHRvbTogMzhweDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG4uc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciAuc29jaWFsLWxpbmtzIHtcbiAgYm90dG9tOiAyNXB4O1xufVxuLnNpbmdsZS1jb3Vyc2UtZGV0YWlscyB7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRmaXJzdC1jb2xvcjtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgcGFkZGluZzogMzNweCAwO1xufVxuLnNpbmdsZS1jb3Vyc2UtZGV0YWlscyAuc2luZ2xlLWl0ZW0tdGV4dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDQ4cHg7XG59XG4uY291cnNlLWRldGFpbHMtYXJlYSBhIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAtMzVweDtcbn1cbi5zaW5nbGUtY291cnNlLWRldGFpbHMgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNpbmdsZS1jb3Vyc2UtZGV0YWlscyAuY29sLW1kLTY6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG5cbi5vbmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVyL25pdjEuanBnXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbn1cblxuLnR3byB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXIvbml2Mi5qcGdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xufVxuXG4udGhyZWUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVyL25pdjMuanBnXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLXRleHQge1xuICBoZWlnaHQ6IDI2MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnNpbmdsZS10ZWFjaGVyLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbn1cblxuLm5vLW5ld3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiAkZmlyc3QtY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbiIsIi5jb250ZW50LFxuLmNvbnRhaW4tYXJlYSB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLmNvbnRhaW4tYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uc2VjdGlvbi10aXRsZS13cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTIycHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUge1xuICBjb2xvcjogIzBjMmQ1MDtcbn1cblxuLnNlY3Rpb24tdGl0bGUtd3JhcHBlciAuc2VjdGlvbi10aXRsZSBoNCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VjdGlvbi10aXRsZSBoNCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3R0b215IHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYm90dG9teS1vbmUsXG4uYm90dG9teS10d28ge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmQ1MDtcbn1cblxuLmJvdHRvbXktY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICBtYXJnaW4tcmlnaHQ6IDElO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qICAxNy4xIFRlYWNoZXJzIEFyZWFcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4udGVhY2hlcnMtYXJlYSB7XG4gIHBhZGRpbmc6IDAgMCA1MHB4O1xuICBtYXJnaW4tdG9wOiAtOTBweDtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLWl0ZW0ge1xuICBib3gtc2hhZG93OiAxcHggMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMzQsIDMwLCAzMSwgMC4zKTtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLWltYWdlID4gYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItaW1hZ2UgPiBhIGltZyxcbi5zaW5nbGUtdGVhY2hlci1pbWFnZSA+IGEge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLWltYWdlID4gYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciAuc2luZ2xlLXRlYWNoZXItaW1hZ2UgPiBhOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXCI7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItdGV4dCB7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwYzJkNTA7XG4gIHBhZGRpbmc6IDIwcHggMjZweCA5MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciAuc2luZ2xlLXRlYWNoZXItdGV4dCB7XG4gIG1hcmdpbi10b3A6IC00NXB4O1xuICBwYWRkaW5nOiAyMHB4IDI2cHggNjZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciAuc2luZ2xlLXRlYWNoZXItdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogLTQ1cHg7XG4gICAgcGFkZGluZzogMjBweCAyNnB4IDY2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDk7XG4gIH1cbn1cbi5zaW5nbGUtdGVhY2hlci1pdGVtOmhvdmVyIC5kZXNjci1mb3JtYXRpb24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZGVzY3ItZm9ybWF0aW9uOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uc2luZ2xlLXRlYWNoZXItdGV4dCA+IGgzIHtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNpbmdsZS10ZWFjaGVyLXRleHQgPiBoMyB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItdGV4dCA+IGgzIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItdGV4dCA+IGg0IHtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiByZ2JhKDIwMSwgMTkxLCAxOTEsIDAuNzYpO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItdGV4dCA+IHAge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nLXRvcDogMTNweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2luZ2xlLXRlYWNoZXItaXRlbTpob3ZlciAuc2luZ2xlLXRlYWNoZXItdGV4dCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zb2NpYWwtbGlua3MgPiBhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkM2U1MDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDI3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW46IDAgM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyN3B4O1xufVxuXG4uc29jaWFsLWxpbmtzID4gYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc29jaWFsLWxpbmtzIHtcbiAgYm90dG9tOiAzOHB4O1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuLnNpbmdsZS10ZWFjaGVyLWl0ZW06aG92ZXIgLnNvY2lhbC1saW5rcyB7XG4gIGJvdHRvbTogMjVweDtcbn1cblxuLnNpbmdsZS1jb3Vyc2UtZGV0YWlscyB7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwYzJkNTA7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIHBhZGRpbmc6IDMzcHggMDtcbn1cblxuLnNpbmdsZS1jb3Vyc2UtZGV0YWlscyAuc2luZ2xlLWl0ZW0tdGV4dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDQ4cHg7XG59XG5cbi5jb3Vyc2UtZGV0YWlscy1hcmVhIGEgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xufVxuXG4uc2luZ2xlLWNvdXJzZS1kZXRhaWxzIGEge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNpbmdsZS1jb3Vyc2UtZGV0YWlscyAuY29sLW1kLTY6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG5cbi5vbmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVyL25pdjEuanBnXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbn1cblxuLnR3byB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXIvbml2Mi5qcGdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xufVxuXG4udGhyZWUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVyL25pdjMuanBnXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbn1cblxuLnNpbmdsZS10ZWFjaGVyLXRleHQge1xuICBoZWlnaHQ6IDI2MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnNpbmdsZS10ZWFjaGVyLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbn1cbi5uby1uZXdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTMwcHg7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogIzBjMmQ1MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif !important;\n}\n\n.course-area .section-title-wrapper {\n  margin-bottom: 122px;\n}\n\n.single-item-image a {\n  display: inline-block;\n}\n\n.single-item-image {\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  top: -35px;\n}\n\n.overlay-effect a {\n  position: relative;\n}\n\n.overlay-effect a:before {\n  background: rgba(45, 62, 80, 0.2) none repeat scroll 0 0;\n  bottom: 0;\n  content: \"\";\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  position: absolute;\n  right: 0;\n  width: 100%;\n}\n\n.single-item:hover .overlay-effect a:before {\n  opacity: 1;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n}\n\n.single-item {\n  background: #f6f6f6 none repeat scroll 0 0;\n  border-bottom: 3px solid #86bc42;\n  padding: 0 35px;\n  transition: all 0.3s ease 0s;\n  margin-bottom: 20px;\n}\n\n.single-item:hover {\n  background: #ffffff none repeat scroll 0 0;\n  box-shadow: 0 2px 20px rgba(34, 30, 31, 0.4);\n}\n\n.single-item-text h4 {\n  font-size: 20px;\n  padding-top: 7px;\n}\n\n.single-item-text h4 a, .single-item-text h4 {\n  color: #2d3e50;\n}\n\n.single-item-text-info span {\n  color: #696969;\n  font-family: \"montserratregular\";\n  margin-right: 11px;\n}\n\n.single-item-text-info span span {\n  color: #2d3e50;\n}\n\n.single-item-text > .p {\n  color: #222222;\n  margin-bottom: 50px;\n}\n\n.single-item-content {\n  margin-bottom: 44px;\n  overflow: hidden;\n  padding-top: 21px;\n}\n\n.single-item-text-info {\n  margin-bottom: 18px;\n  padding-top: 5px;\n}\n\n.single-item-comment-view span {\n  color: #696969;\n  display: inline-block;\n  font-family: \"montserratregular\";\n  font-size: 12px;\n  margin-right: 17px;\n}\n\n.single-item-comment-view span:last-child {\n  margin-right: 0;\n}\n\n.single-item-comment-view > span i {\n  font-size: 14px;\n  margin-right: 7px;\n}\n\n.single-item-comment-view, .single-item-rating {\n  display: inline-block;\n}\n\n.single-item-rating {\n  color: #f3c30b;\n  float: right;\n  font-size: 16px;\n}\n\n.single-item-rating i {\n  margin-left: 3px;\n}\n\n.single-item .button-default {\n  padding: 12px 33px;\n}\n\n.button-bottom {\n  margin-bottom: -19.5px;\n  text-align: center;\n  height: 30px;\n  cursor: pointer;\n}\n\n.single-item:hover .button-default {\n  background: #0c2d50 none repeat scroll 0 0;\n}\n\n.button-large.button-default {\n  box-shadow: 0 2px 20px rgba(34, 30, 31, 0.2);\n  font-size: 18px;\n  margin-top: 83px;\n  padding: 12px 18px;\n  text-transform: capitalize;\n}\n\n.shortcode .button-large.button-default {\n  margin-top: 40px;\n}\n\n.button-default.button-large:hover {\n  background: #0c2d50 none repeat scroll 0 0;\n}\n\n.button-large.button-default i {\n  font-size: 28px;\n  line-height: 20px;\n  margin-left: 11px;\n  position: relative;\n  top: 4px;\n}\n\n.course-area .section-title-wrapper .section-title {\n  color: #0c2d50;\n}\n\n.course-area .section-title-wrapper .section-title h4 {\n  text-transform: uppercase;\n}\n\n.button-bottom a {\n  color: white;\n  text-decoration: none;\n}\n\n#content-button-large {\n  margin-top: 60px;\n  margin-bottom: 40px;\n}\n\n#content-button-large a {\n  color: white;\n  text-decoration: none;\n  padding: 25px;\n  border-radius: 4px;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n#content-button-large a i {\n  transition: all 0.3s;\n}\n\n#content-button-large a:hover i {\n  margin-left: 30px !important;\n}\n\n.no-actu {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: 130px;\n  margin-top: -70px;\n  background: whitesmoke;\n  color: #0c2d50;\n  font-weight: bold;\n  align-items: center;\n  border-radius: 5px;\n  font-size: 18px;\n}\n\n.section-title {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.section-title h4 {\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.bottomy {\n  width: 60%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.bottomy-one, .bottomy-two {\n  width: 50%;\n  height: 3px;\n  background-color: #0c2d50;\n}\n\n.bottomy-center {\n  margin-left: 1%;\n  margin-right: 1%;\n  position: relative;\n  bottom: 10px;\n}\n\n.row-actu {\n  margin-bottom: 100px;\n}\n\n.row-title-actu {\n  margin-bottom: -50px;\n}\n\n.container-fluid.contain-actu {\n  margin-left: 5%;\n  margin-right: 5%;\n  width: 90%;\n}\n\n#imgActu {\n  height: 200px !important;\n}\n\n.p {\n  min-height: 90px;\n}\n\n@media screen and (max-width: 992px) {\n  .single-item {\n    margin-top: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsNERBQUE7QUNIRjs7QURNQTtFQUFxQyxvQkFBQTtBQ0ZyQzs7QURHQTtFQUFzQixxQkFBQTtBQ0N0Qjs7QURBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNHSjs7QUREQTtFQUFtQixrQkFBQTtBQ0tuQjs7QURKQTtFQUNFLHdEQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxnRUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ09GOztBRExBO0VBQTZDLFVBQUE7RUFBVyxrRUFBQTtFQUFvRSwwQkFBQTtBQ1c1SDs7QURWQTtFQUNJLDBDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBRUEsNEJBQUE7RUFDQSxtQkFBQTtBQ2FKOztBRFhBO0VBQ0ksMENBQUE7RUFDQSw0Q0FBQTtBQ2NKOztBRFpBO0VBQXNCLGVBQUE7RUFBaUIsZ0JBQUE7QUNpQnZDOztBRGhCQTtFQUE4QyxjQUFBO0FDb0I5Qzs7QURuQkE7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ3NCSjs7QURwQkE7RUFBa0MsY0FBQTtBQ3dCbEM7O0FEdkJBO0VBQXdCLGNBQUE7RUFBZSxtQkFBQTtBQzRCdkM7O0FEM0JBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDOEJKOztBRDVCQTtFQUF3QixtQkFBQTtFQUFxQixnQkFBQTtBQ2lDN0M7O0FEaENBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNtQ0o7O0FEakNBO0VBQTJDLGVBQUE7QUNxQzNDOztBRHBDQTtFQUFvQyxlQUFBO0VBQWlCLGlCQUFBO0FDeUNyRDs7QUR4Q0E7RUFBZ0QscUJBQUE7QUM0Q2hEOztBRDNDQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQzhDSjs7QUQ1Q0E7RUFBdUIsZ0JBQUE7QUNnRHZCOztBRC9DQTtFQUE4QixrQkFBQTtBQ21EOUI7O0FEbERBO0VBQWdCLHNCQUFBO0VBQXdCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxlQUFBO0FDeUR4RTs7QUR4REE7RUFBb0MsMENBQUE7QUM0RHBDOztBRDNEQTtFQUNJLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQzhESjs7QUQ1REE7RUFBeUMsZ0JBQUE7QUNnRXpDOztBRC9EQTtFQUFvQywwQ0FBQTtBQ21FcEM7O0FEbEVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNxRUo7O0FEaEVBO0VBQ0UsY0FqR2E7QUNvS2Y7O0FEaEVBO0VBQ0UseUJBQUE7QUNtRUY7O0FEaEVBO0VBQ0UsWUF2R1k7RUF3R1oscUJBQUE7QUNtRUY7O0FEaEVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ21FRjs7QURoRUE7RUFDRSxZQWpIWTtFQWtIWixxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ21FRjs7QURoRUE7RUFDRSxvQkFBQTtBQ21FRjs7QUQvREU7RUFDRSw0QkFBQTtBQ2tFSjs7QUQ5REE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0E1SWE7RUE2SWIsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2lFRjs7QUQ5REE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2lFRjs7QUQ5REE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNpRUY7O0FEOURBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDaUVGOztBRDlEQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBMUthO0FDMk9mOztBRDlEQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2lFRjs7QUQ5REE7RUFDRSxvQkFBQTtBQ2lFRjs7QUQ5REE7RUFDRSxvQkFBQTtBQ2lFRjs7QUQ5REE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDaUVGOztBRDlEQTtFQUNFLHdCQUFBO0FDaUVGOztBRDlEQTtFQUNJLGdCQUFBO0FDaUVKOztBRDlEQTtFQUNFO0lBQ0UsZ0JBQUE7RUNpRUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpcnN0LWNvbG9yIDogIzBjMmQ1MDtcbiRzZWNvbmQtY29sb3IgOiAjMDAyMjQ3O1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG4uY291cnNlLWFyZWEgLnNlY3Rpb24tdGl0bGUtd3JhcHBlciB7bWFyZ2luLWJvdHRvbTogMTIycHg7fVxuLnNpbmdsZS1pdGVtLWltYWdlIGEge2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XG4uc2luZ2xlLWl0ZW0taW1hZ2Uge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IC0zNXB4O1xufVxuLm92ZXJsYXktZWZmZWN0IGEge3Bvc2l0aW9uOiByZWxhdGl2ZX1cbi5vdmVybGF5LWVmZmVjdCBhOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDUsIDYyLCA4MCwgMC4yKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3R0b206IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNpbmdsZS1pdGVtOmhvdmVyIC5vdmVybGF5LWVmZmVjdCBhOmJlZm9yZSB7b3BhY2l0eTogMTstbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwMClcIjsgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7fVxuLnNpbmdsZS1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM4NmJjNDI7XG4gICAgcGFkZGluZzogMCAzNXB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2luZ2xlLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMzQsIDMwLCAzMSwgMC40KTtcbn1cbi5zaW5nbGUtaXRlbS10ZXh0IGg0IHtmb250LXNpemU6IDIwcHg7IHBhZGRpbmctdG9wOiA3cHg7fVxuLnNpbmdsZS1pdGVtLXRleHQgaDQgYSwgLnNpbmdsZS1pdGVtLXRleHQgaDQge2NvbG9yOiAjMmQzZTUwO31cbi5zaW5nbGUtaXRlbS10ZXh0LWluZm8gc3BhbiB7XG4gICAgY29sb3I6ICM2OTY5Njk7XG4gICAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdHJlZ3VsYXJcIjtcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59XG4uc2luZ2xlLWl0ZW0tdGV4dC1pbmZvIHNwYW4gc3BhbiB7Y29sb3I6ICMyZDNlNTA7fVxuLnNpbmdsZS1pdGVtLXRleHQgPiAucCB7Y29sb3I6ICMyMjIyMjI7bWFyZ2luLWJvdHRvbTogNTBweDt9XG4uc2luZ2xlLWl0ZW0tY29udGVudCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAyMXB4O1xufVxuLnNpbmdsZS1pdGVtLXRleHQtaW5mbyB7bWFyZ2luLWJvdHRvbTogMThweDsgcGFkZGluZy10b3A6IDVweDt9XG4uc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3IHNwYW4ge1xuICAgIGNvbG9yOiAjNjk2OTY5O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogXCJtb250c2VycmF0cmVndWxhclwiO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG59XG4uc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3IHNwYW46bGFzdC1jaGlsZCB7bWFyZ2luLXJpZ2h0OiAwfVxuLnNpbmdsZS1pdGVtLWNvbW1lbnQtdmlldyA+IHNwYW4gaSB7Zm9udC1zaXplOiAxNHB4OyBtYXJnaW4tcmlnaHQ6IDdweDt9XG4uc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3LCAuc2luZ2xlLWl0ZW0tcmF0aW5nIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxuLnNpbmdsZS1pdGVtLXJhdGluZyB7XG4gICAgY29sb3I6ICNmM2MzMGI7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zaW5nbGUtaXRlbS1yYXRpbmcgaSB7bWFyZ2luLWxlZnQ6IDNweDt9XG4uc2luZ2xlLWl0ZW0gLmJ1dHRvbi1kZWZhdWx0IHtwYWRkaW5nOiAxMnB4IDMzcHg7fVxuLmJ1dHRvbi1ib3R0b20ge21hcmdpbi1ib3R0b206IC0xOS41cHg7IHRleHQtYWxpZ246IGNlbnRlcjtoZWlnaHQ6IDMwcHg7Y3Vyc29yOiBwb2ludGVyO31cbi5zaW5nbGUtaXRlbTpob3ZlciAuYnV0dG9uLWRlZmF1bHQge2JhY2tncm91bmQ6ICRmaXJzdC1jb2xvciBub25lIHJlcGVhdCBzY3JvbGwgMCAwO31cbi5idXR0b24tbGFyZ2UuYnV0dG9uLWRlZmF1bHQge1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgzNCwgMzAsIDMxLCAwLjIpO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiA4M3B4O1xuICAgIHBhZGRpbmc6IDEycHggMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5zaG9ydGNvZGUgLmJ1dHRvbi1sYXJnZS5idXR0b24tZGVmYXVsdCB7bWFyZ2luLXRvcDogNDBweH1cbi5idXR0b24tZGVmYXVsdC5idXR0b24tbGFyZ2U6aG92ZXIge2JhY2tncm91bmQ6ICRmaXJzdC1jb2xvciBub25lIHJlcGVhdCBzY3JvbGwgMCAwO31cbi5idXR0b24tbGFyZ2UuYnV0dG9uLWRlZmF1bHQgaSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDRweDtcbn1cblxuXG4vLyBNaW5lXG4uY291cnNlLWFyZWEgLnNlY3Rpb24tdGl0bGUtd3JhcHBlciAuc2VjdGlvbi10aXRsZSB7XG4gIGNvbG9yOiAkZmlyc3QtY29sb3I7XG59XG5cbi5jb3Vyc2UtYXJlYSAuc2VjdGlvbi10aXRsZS13cmFwcGVyIC5zZWN0aW9uLXRpdGxlIGg0e1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYnV0dG9uLWJvdHRvbSBhIHtcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jY29udGVudC1idXR0b24tbGFyZ2Uge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4jY29udGVudC1idXR0b24tbGFyZ2UgYSB7XG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY29udGVudC1idXR0b24tbGFyZ2UgYSBpIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbiNjb250ZW50LWJ1dHRvbi1sYXJnZSBhOmhvdmVyIHtcbiAgaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubm8tYWN0dSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBtYXJnaW4tdG9wOiAtNzBweDtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgY29sb3I6ICRmaXJzdC1jb2xvcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tdGl0bGUgaDQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm90dG9teSB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJvdHRvbXktb25lLCAuYm90dG9teS10d28ge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZpcnN0LWNvbG9yO1xufVxuXG4uYm90dG9teS1jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4ucm93LWFjdHUge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLnJvdy10aXRsZS1hY3R1IHtcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG59XG5cbi5jb250YWluZXItZmx1aWQuY29udGFpbi1hY3R1IHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICB3aWR0aDogOTAlO1xufVxuXG4jaW1nQWN0dSB7XG4gIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuLnAge1xuICAgIG1pbi1oZWlnaHQ6IDkwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5zaW5nbGUtaXRlbSB7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgfVxufVxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG4uY291cnNlLWFyZWEgLnNlY3Rpb24tdGl0bGUtd3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDEyMnB4O1xufVxuXG4uc2luZ2xlLWl0ZW0taW1hZ2UgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNpbmdsZS1pdGVtLWltYWdlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogLTM1cHg7XG59XG5cbi5vdmVybGF5LWVmZmVjdCBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3ZlcmxheS1lZmZlY3QgYTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQ1LCA2MiwgODAsIDAuMikgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm90dG9tOiAwO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpbmdsZS1pdGVtOmhvdmVyIC5vdmVybGF5LWVmZmVjdCBhOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKVwiO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cblxuLnNpbmdsZS1pdGVtIHtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzg2YmM0MjtcbiAgcGFkZGluZzogMCAzNXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zaW5nbGUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm94LXNoYWRvdzogMCAycHggMjBweCByZ2JhKDM0LCAzMCwgMzEsIDAuNCk7XG59XG5cbi5zaW5nbGUtaXRlbS10ZXh0IGg0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogN3B4O1xufVxuXG4uc2luZ2xlLWl0ZW0tdGV4dCBoNCBhLCAuc2luZ2xlLWl0ZW0tdGV4dCBoNCB7XG4gIGNvbG9yOiAjMmQzZTUwO1xufVxuXG4uc2luZ2xlLWl0ZW0tdGV4dC1pbmZvIHNwYW4ge1xuICBjb2xvcjogIzY5Njk2OTtcbiAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdHJlZ3VsYXJcIjtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG4uc2luZ2xlLWl0ZW0tdGV4dC1pbmZvIHNwYW4gc3BhbiB7XG4gIGNvbG9yOiAjMmQzZTUwO1xufVxuXG4uc2luZ2xlLWl0ZW0tdGV4dCA+IC5wIHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5zaW5nbGUtaXRlbS1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogNDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDIxcHg7XG59XG5cbi5zaW5nbGUtaXRlbS10ZXh0LWluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3IHNwYW4ge1xuICBjb2xvcjogIzY5Njk2OTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0cmVndWxhclwiO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTdweDtcbn1cblxuLnNpbmdsZS1pdGVtLWNvbW1lbnQtdmlldyBzcGFuOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5zaW5nbGUtaXRlbS1jb21tZW50LXZpZXcgPiBzcGFuIGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuXG4uc2luZ2xlLWl0ZW0tY29tbWVudC12aWV3LCAuc2luZ2xlLWl0ZW0tcmF0aW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2luZ2xlLWl0ZW0tcmF0aW5nIHtcbiAgY29sb3I6ICNmM2MzMGI7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc2luZ2xlLWl0ZW0tcmF0aW5nIGkge1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uc2luZ2xlLWl0ZW0gLmJ1dHRvbi1kZWZhdWx0IHtcbiAgcGFkZGluZzogMTJweCAzM3B4O1xufVxuXG4uYnV0dG9uLWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IC0xOS41cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaW5nbGUtaXRlbTpob3ZlciAuYnV0dG9uLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kOiAjMGMyZDUwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG5cbi5idXR0b24tbGFyZ2UuYnV0dG9uLWRlZmF1bHQge1xuICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMzQsIDMwLCAzMSwgMC4yKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiA4M3B4O1xuICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uc2hvcnRjb2RlIC5idXR0b24tbGFyZ2UuYnV0dG9uLWRlZmF1bHQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uYnV0dG9uLWRlZmF1bHQuYnV0dG9uLWxhcmdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzBjMmQ1MCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xufVxuXG4uYnV0dG9uLWxhcmdlLmJ1dHRvbi1kZWZhdWx0IGkge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDRweDtcbn1cblxuLmNvdXJzZS1hcmVhIC5zZWN0aW9uLXRpdGxlLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUge1xuICBjb2xvcjogIzBjMmQ1MDtcbn1cblxuLmNvdXJzZS1hcmVhIC5zZWN0aW9uLXRpdGxlLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUgaDQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYnV0dG9uLWJvdHRvbSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNjb250ZW50LWJ1dHRvbi1sYXJnZSB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbiNjb250ZW50LWJ1dHRvbi1sYXJnZSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NvbnRlbnQtYnV0dG9uLWxhcmdlIGEgaSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4jY29udGVudC1idXR0b24tbGFyZ2UgYTpob3ZlciBpIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLm5vLWFjdHUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgbWFyZ2luLXRvcDogLTcwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiAjMGMyZDUwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VjdGlvbi10aXRsZSBoNCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3R0b215IHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYm90dG9teS1vbmUsIC5ib3R0b215LXR3byB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwO1xufVxuXG4uYm90dG9teS1jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4ucm93LWFjdHUge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLnJvdy10aXRsZS1hY3R1IHtcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG59XG5cbi5jb250YWluZXItZmx1aWQuY29udGFpbi1hY3R1IHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICB3aWR0aDogOTAlO1xufVxuXG4jaW1nQWN0dSB7XG4gIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuLnAge1xuICBtaW4taGVpZ2h0OiA5MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc2luZ2xlLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gIH1cbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".header-top:before, .about-area:before, .newsletter-area:before {\n  content: \"\";\n  height: 48px;\n  position: absolute;\n  right: 0;\n  top: 10px;\n  width: 43%;\n}\n\n.header-top:after, .about-area:after, .newsletter-area:after {\n  -moz-border-bottom-colors: none;\n  -moz-border-left-colors: none;\n  -moz-border-right-colors: none;\n  -moz-border-top-colors: none;\n  -o-border-image: none;\n  border-image: none;\n  border-style: solid;\n  border-width: 24px 10px;\n  content: \"\";\n  height: 5px;\n  position: absolute;\n  right: 43%;\n  top: 10px;\n  width: 0;\n}\n\n.newsletter-area {\n  background: #0c2d50 none repeat scroll 0 0;\n  color: white;\n  position: relative;\n  margin-top: 50px;\n}\n\n.newsletter-area:before {\n  height: 148px;\n  left: 0;\n  right: auto;\n  top: -20px;\n  width: 44%;\n}\n\n.newsletter-area:after {\n  border-width: 74.5px 40px;\n  left: 44%;\n  right: auto;\n  top: -20px;\n}\n\n.newsletter-content h2, .newsletter-content h3 {\n  font-family: raleway;\n  font-weight: 700;\n  font-size: 30px;\n}\n\n.newsletter-content > h3 {\n  margin-bottom: 2px;\n  font-size: 24px;\n}\n\n.subscribe-form input {\n  color: #696969;\n  height: 100%;\n  padding-left: 15px;\n  width: 100%;\n  border: none;\n}\n\n.subscribe-form {\n  border: none !important;\n  border-color: white !important;\n}\n\n.subscribe-form > button {\n  border: 2px solid #117abe;\n  font-family: raleway;\n  font-weight: 700;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: all 0.3s ease 0s;\n  width: 34%;\n  color: #fff;\n  cursor: pointer;\n}\n\n.subscribe-form > button:hover {\n  background: #FFF;\n  border: 2px solid #117abe;\n}\n\n.newsletter-form {\n  overflow: hidden;\n  padding: 36px 0;\n}\n\n.subscribe-form {\n  float: right;\n  height: 56px;\n  position: relative;\n  width: 525px;\n}\n\n.subscribe-form:before {\n  -moz-border-bottom-colors: none;\n  -moz-border-left-colors: none;\n  -moz-border-right-colors: none;\n  -moz-border-top-colors: none;\n  border-color: #fff #fff transparent transparent;\n  -o-border-image: none;\n  border-image: none;\n  border-style: solid;\n  border-width: 28px 15px;\n  content: \"\";\n  height: 5px;\n  left: -30px;\n  position: absolute;\n  top: 0;\n  width: 0;\n}\n\n.subscribe-form:after {\n  -moz-border-bottom-colors: none;\n  -moz-border-left-colors: none;\n  -moz-border-right-colors: none;\n  -moz-border-top-colors: none;\n  border-color: #fff #fff transparent transparent;\n  -o-border-image: none;\n  border-image: none;\n}\n\n.newsletter-content {\n  padding-top: 26px;\n  z-index: 9;\n  position: relative;\n}\n\n/*----------------------------------------*/\n\n/*  12. Footer Widget Area\n/*----------------------------------------*/\n\n.footer-widget-area {\n  background: #0c2d50 none repeat scroll 0 0;\n  color: white;\n  padding: 80px 0 65px;\n}\n\n.footer-logo > a {\n  display: inline-block;\n}\n\n.footer-logo {\n  margin-bottom: 24px;\n}\n\n.social-icons a {\n  background: #ffffff none repeat scroll 0 0;\n  color: #2d3e50;\n  display: inline-block;\n  font-size: 20px;\n  height: 31px;\n  line-height: 30px;\n  margin-right: 11px;\n  text-align: center;\n  transition: all 0.3s ease 0s;\n  width: 31px;\n}\n\n.social-icons > a:last-child {\n  margin-right: 0;\n}\n\n.social-icons > a:hover {\n  color: #ffffff;\n}\n\n.social-icons {\n  margin-top: 27px;\n}\n\n.single-footer-widget > h3 {\n  font-family: raleway;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 19px;\n  margin-bottom: 37px;\n  padding-top: 12px;\n  text-transform: uppercase;\n}\n\n.single-footer-widget > span {\n  display: block;\n  margin-bottom: 11px;\n}\n\n.single-footer-widget > span i {\n  font-size: 18px;\n  width: 30px;\n}\n\n.footer-list a {\n  color: #ffffff;\n  line-height: 25px;\n}\n\n.footer-list a:hover {\n  color: #117abe;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.instagram-image {\n  padding-top: 5px;\n}\n\n.footer-img {\n  display: inline-block;\n  float: left;\n  margin-bottom: 15px;\n  margin-right: 15px;\n}\n\n.instagram-image .footer-img:nth-child(3), .instagram-image .footer-img:nth-child(6) {\n  margin-right: 0;\n}\n\n.footer-img a {\n  display: inline-block;\n  position: relative;\n}\n\n.footer-img a:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  position: absolute;\n  top: 0;\n  transition: all 0.3s ease 0s;\n  width: 100%;\n}\n\n.footer-img:hover a:before {\n  opacity: 1;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n}\n\n.footer-img a:after {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  bottom: 0;\n  color: #ffffff;\n  content: \"+\";\n  font-family: \"montserratregular\";\n  font-size: 40px;\n  height: 18px;\n  left: 0;\n  margin: -9px auto 0;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transition: all 0.3s ease 0s;\n  width: 18px;\n}\n\n.footer-img:hover a:after {\n  opacity: 1;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n}\n\n/*----------------------------------------*/\n\n/*  13. Footer Area\n/*----------------------------------------*/\n\n.footer-area {\n  color: #ffffff;\n  font-size: 12px;\n  padding: 18px 0;\n}\n\n.column-right {\n  float: right;\n}\n\n.footer-area span a {\n  color: #ffffff;\n}\n\n.footer-area span a:hover {\n  border-bottom: 1px solid #ffffff;\n}\n\n.single-footer-widget > a {\n  color: #ffffff;\n  display: block;\n  margin-bottom: 11px;\n}\n\n.single-footer-widget > a:hover i {\n  color: #fff;\n}\n\n.single-footer-widget > a i {\n  font-size: 18px;\n  width: 30px;\n}\n\n/*----------------------------------------*/\n\n/*  14. Home Two Start\n/*----------------------------------------*/\n\n/*----------------------------------------*/\n\n/*  14.1 Home Two Header\n/*----------------------------------------*/\n\n.header-two .header-top:before, .header-two .header-top:after {\n  display: none;\n}\n\n.header-two .header-top-right > span {\n  color: #ededed;\n}\n\n.header-two .header-top-right {\n  padding-top: 0;\n}\n\n.header-two .header-top-right span:first-child {\n  margin-right: 27px;\n}\n\n/*----------------------------------------*/\n\nimg#footer-logo {\n  max-width: 80%;\n  position: relative;\n  right: 30px;\n}\n\n.contain-txt {\n  margin-top: 50px;\n  border: 1px solid white;\n  padding: 20px;\n  width: 250px;\n  display: flex;\n  height: 170px;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.txt-one {\n  font-size: 30px;\n  letter-spacing: 28px;\n  font-weight: bold;\n}\n\n.txt-two {\n  word-spacing: 0px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRE1BO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNJLGtCQUFBO0VBQ0osbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNIRjs7QURNQTtFQUNFLDBDQUFBO0VBQ0EsWUE3Qlk7RUE4Qlosa0JBQUE7RUFDQSxnQkFBQTtBQ0hGOztBREtBO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNGRjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDREY7O0FER0E7RUFBZ0Qsb0JBQUE7RUFBc0IsZ0JBQUE7RUFBa0IsZUFBQTtBQ0d4Rjs7QURGQTtFQUEwQixrQkFBQTtFQUFvQixlQUFBO0FDTzlDOztBRE5BO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDU0Y7O0FETkE7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0FDU0Y7O0FETkE7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUVBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDU0Y7O0FEUEE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FDVUY7O0FEUkE7RUFBa0IsZ0JBQUE7RUFBa0IsZUFBQTtBQ2FwQzs7QURaQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDZUY7O0FEYkE7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLCtDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FDZ0JGOztBRGRBO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNpQkY7O0FEZEE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ2lCRjs7QURmQSwyQ0FBQTs7QUFDQTsyQ0FBQTs7QUFFQTtFQUNFLDBDQUFBO0VBQ0EsWUEzSFk7RUE0SFosb0JBQUE7QUNrQkY7O0FEaEJBO0VBQWtCLHFCQUFBO0FDb0JsQjs7QURuQkE7RUFBYyxtQkFBQTtBQ3VCZDs7QUR0QkE7RUFDRSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRVEsNEJBQUE7RUFDUixXQUFBO0FDeUJGOztBRHZCQTtFQUE4QixlQUFBO0FDMkI5Qjs7QUQxQkE7RUFBeUIsY0FBQTtBQzhCekI7O0FEN0JBO0VBQWUsZ0JBQUE7QUNpQ2Y7O0FEaENBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ21DRjs7QURqQ0E7RUFBOEIsY0FBQTtFQUFnQixtQkFBQTtBQ3NDOUM7O0FEckNBO0VBQWdDLGVBQUE7RUFBaUIsV0FBQTtBQzBDakQ7O0FEekNBO0VBQWdCLGNBQUE7RUFBZ0IsaUJBQUE7QUM4Q2hDOztBRDdDQTtFQUFzQixjQTdKUjtFQTZKNkIscUJBQUE7RUFBdUIsZUFBQTtBQ21EbEU7O0FEbERBO0VBQWtCLGdCQUFBO0FDc0RsQjs7QURyREE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDd0RGOztBRHREQTtFQUFzRixlQUFBO0FDMER0Rjs7QUR6REE7RUFBZSxxQkFBQTtFQUF1QixrQkFBQTtBQzhEdEM7O0FEN0RBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGdFQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFFQSw0QkFBQTtFQUNBLFdBQUE7QUNnRUY7O0FEOURBO0VBQTRCLFVBQUE7RUFBVyxrRUFBQTtFQUFvRSwwQkFBQTtBQ29FM0c7O0FEbkVBO0VBQ0UsbURBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdFQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBRUEsNEJBQUE7RUFDQSxXQUFBO0FDc0VGOztBRHBFQTtFQUEyQixVQUFBO0VBQVcsa0VBQUE7RUFBb0UsMEJBQUE7QUMwRTFHOztBRHpFQSwyQ0FBQTs7QUFDQTsyQ0FBQTs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQzRFRjs7QUQxRUE7RUFBZSxZQUFBO0FDOEVmOztBRDdFQTtFQUFxQixjQUFBO0FDaUZyQjs7QURoRkE7RUFBMkIsZ0NBQUE7QUNvRjNCOztBRG5GQTtFQUEyQixjQUFBO0VBQWdCLGNBQUE7RUFBZ0IsbUJBQUE7QUN5RjNEOztBRHhGQTtFQUFtQyxXQUFBO0FDNEZuQzs7QUQzRkE7RUFBNkIsZUFBQTtFQUFpQixXQUFBO0FDZ0c5Qzs7QUQvRkEsMkNBQUE7O0FBQ0E7MkNBQUE7O0FBRUEsMkNBQUE7O0FBQ0E7MkNBQUE7O0FBRUE7RUFBK0QsYUFBQTtBQ21HL0Q7O0FEbEdBO0VBQXNDLGNBQUE7QUNzR3RDOztBRHJHQTtFQUErQixjQUFBO0FDeUcvQjs7QUR4R0E7RUFBZ0Qsa0JBQUE7QUM0R2hEOztBRDNHQSwyQ0FBQTs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUM2R0Y7O0FEMUdBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDNkdGOztBRDFHQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDNkdGOztBRDFHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQzZHRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpcnN0LWNvbG9yIDogIzBjMmQ1MDtcbiRzZWNvbmQtY29sb3IgOiAjMWY1NjkyO1xuJHRoaXJkLWNvbG9yOiAjMTE3YWJlO1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcblxuLmhlYWRlci10b3A6YmVmb3JlLCAuYWJvdXQtYXJlYTpiZWZvcmUsIC5uZXdzbGV0dGVyLWFyZWE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiA0MyU7XG59XG4uaGVhZGVyLXRvcDphZnRlciwgLmFib3V0LWFyZWE6YWZ0ZXIsIC5uZXdzbGV0dGVyLWFyZWE6YWZ0ZXIge1xuICAtbW96LWJvcmRlci1ib3R0b20tY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci1sZWZ0LWNvbG9yczogbm9uZTtcbiAgLW1vei1ib3JkZXItcmlnaHQtY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci10b3AtY29sb3JzOiBub25lO1xuICAtby1ib3JkZXItaW1hZ2U6IG5vbmU7XG4gICAgICBib3JkZXItaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMjRweCAxMHB4O1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNDMlO1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiAwO1xufVxuXG4ubmV3c2xldHRlci1hcmVhIHtcbiAgYmFja2dyb3VuZDogJGZpcnN0LWNvbG9yIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5uZXdzbGV0dGVyLWFyZWE6YmVmb3JlIHtcbiAgaGVpZ2h0OiAxNDhweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIHRvcDogLTIwcHg7XG4gIHdpZHRoOiA0NCU7XG59XG4ubmV3c2xldHRlci1hcmVhOmFmdGVyIHtcbiAgYm9yZGVyLXdpZHRoOiA3NC41cHggNDBweDtcbiAgbGVmdDogNDQlO1xuICByaWdodDogYXV0bztcbiAgdG9wOiAtMjBweDtcbn1cbi5uZXdzbGV0dGVyLWNvbnRlbnQgaDIsIC5uZXdzbGV0dGVyLWNvbnRlbnQgaDMge2ZvbnQtZmFtaWx5OiByYWxld2F5OyBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDMwcHh9XG4ubmV3c2xldHRlci1jb250ZW50ID4gaDMge21hcmdpbi1ib3R0b206IDJweDsgZm9udC1zaXplOiAyNHB4fVxuLnN1YnNjcmliZS1mb3JtIGlucHV0IHtcbiAgY29sb3I6ICM2OTY5Njk7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc3Vic2NyaWJlLWZvcm0ge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uc3Vic2NyaWJlLWZvcm0gPiBidXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZCAkdGhpcmQtY29sb3I7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5O1xuICBmb250LXdlaWdodDogNzAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB3aWR0aDogMzQlO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN1YnNjcmliZS1mb3JtID4gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgJHRoaXJkLWNvbG9yO1xufVxuLm5ld3NsZXR0ZXItZm9ybSB7b3ZlcmZsb3c6IGhpZGRlbjsgcGFkZGluZzogMzZweCAwO31cbi5zdWJzY3JpYmUtZm9ybSB7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MjVweDtcbn1cbi5zdWJzY3JpYmUtZm9ybTpiZWZvcmUge1xuICAtbW96LWJvcmRlci1ib3R0b20tY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci1sZWZ0LWNvbG9yczogbm9uZTtcbiAgLW1vei1ib3JkZXItcmlnaHQtY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci10b3AtY29sb3JzOiBub25lO1xuICBib3JkZXItY29sb3I6ICNmZmYgI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgLW8tYm9yZGVyLWltYWdlOiBub25lO1xuICBib3JkZXItaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMjhweCAxNXB4O1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDVweDtcbiAgbGVmdDogLTMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMDtcbn1cbi5zdWJzY3JpYmUtZm9ybTphZnRlciB7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1jb2xvcnM6IG5vbmU7XG4gIC1tb3otYm9yZGVyLWxlZnQtY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci1yaWdodC1jb2xvcnM6IG5vbmU7XG4gIC1tb3otYm9yZGVyLXRvcC1jb2xvcnM6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAtby1ib3JkZXItaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1pbWFnZTogbm9uZTtcbn1cblxuLm5ld3NsZXR0ZXItY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAyNnB4O1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogIDEyLiBGb290ZXIgV2lkZ2V0IEFyZWFcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZm9vdGVyLXdpZGdldC1hcmVhIHtcbiAgYmFja2dyb3VuZDogJGZpcnN0LWNvbG9yIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIHBhZGRpbmc6IDgwcHggMCA2NXB4O1xufVxuLmZvb3Rlci1sb2dvID4gYSB7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cbi5mb290ZXItbG9nbyB7bWFyZ2luLWJvdHRvbTogMjRweDt9XG4uc29jaWFsLWljb25zIGEge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGNvbG9yOiAjMmQzZTUwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAzMXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB3aWR0aDogMzFweDtcbn1cbi5zb2NpYWwtaWNvbnMgPiBhOmxhc3QtY2hpbGQge21hcmdpbi1yaWdodDogMDt9XG4uc29jaWFsLWljb25zID4gYTpob3ZlciB7Y29sb3I6ICNmZmZmZmY7fVxuLnNvY2lhbC1pY29ucyB7bWFyZ2luLXRvcDogMjdweDt9XG4uc2luZ2xlLWZvb3Rlci13aWRnZXQgPiBoMyB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAzN3B4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCA+IHNwYW4ge2Rpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAxMXB4O31cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCA+IHNwYW4gaSB7Zm9udC1zaXplOiAxOHB4OyB3aWR0aDogMzBweDt9XG4uZm9vdGVyLWxpc3QgYSB7Y29sb3I6ICNmZmZmZmY7IGxpbmUtaGVpZ2h0OiAyNXB4O31cbi5mb290ZXItbGlzdCBhOmhvdmVyIHtjb2xvcjogJHRoaXJkLWNvbG9yOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGN1cnNvcjogcG9pbnRlcjt9XG4uaW5zdGFncmFtLWltYWdlIHtwYWRkaW5nLXRvcDogNXB4O31cbi5mb290ZXItaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmluc3RhZ3JhbS1pbWFnZSAuZm9vdGVyLWltZzpudGgtY2hpbGQoMyksIC5pbnN0YWdyYW0taW1hZ2UgLmZvb3Rlci1pbWc6bnRoLWNoaWxkKDYpIHttYXJnaW4tcmlnaHQ6IDA7fVxuLmZvb3Rlci1pbWcgYSB7ZGlzcGxheTogaW5saW5lLWJsb2NrOyBwb3NpdGlvbjogcmVsYXRpdmV9XG4uZm9vdGVyLWltZyBhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvb3Rlci1pbWc6aG92ZXIgYTpiZWZvcmUge29wYWNpdHk6IDE7LW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXCI7IGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApfVxuLmZvb3Rlci1pbWcgYTphZnRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY29udGVudDogXCIrXCI7XG4gIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRyZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IC05cHggYXV0byAwO1xuICBvcGFjaXR5OiAwO1xuICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgd2lkdGg6IDE4cHg7XG59XG4uZm9vdGVyLWltZzpob3ZlciBhOmFmdGVyIHtvcGFjaXR5OiAxOy1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKVwiOyBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKX1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAgMTMuIEZvb3RlciBBcmVhXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZvb3Rlci1hcmVhIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMThweCAwO1xufVxuLmNvbHVtbi1yaWdodCB7ZmxvYXQ6IHJpZ2h0fVxuLmZvb3Rlci1hcmVhIHNwYW4gYSB7Y29sb3I6ICNmZmZmZmY7fVxuLmZvb3Rlci1hcmVhIHNwYW4gYTpob3ZlciB7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7fVxuLnNpbmdsZS1mb290ZXItd2lkZ2V0ID4gYSB7Y29sb3I6ICNmZmZmZmY7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAxMXB4O31cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCA+IGE6aG92ZXIgaSB7Y29sb3I6ICNmZmZ9XG4uc2luZ2xlLWZvb3Rlci13aWRnZXQgPiBhIGkge2ZvbnQtc2l6ZTogMThweDsgd2lkdGg6IDMwcHg7fVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qICAxNC4gSG9tZSBUd28gU3RhcnRcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogIDE0LjEgSG9tZSBUd28gSGVhZGVyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmhlYWRlci10d28gLmhlYWRlci10b3A6YmVmb3JlLCAuaGVhZGVyLXR3byAuaGVhZGVyLXRvcDphZnRlciB7ZGlzcGxheTogbm9uZTt9XG4uaGVhZGVyLXR3byAuaGVhZGVyLXRvcC1yaWdodCA+IHNwYW4ge2NvbG9yOiAjZWRlZGVkO31cbi5oZWFkZXItdHdvIC5oZWFkZXItdG9wLXJpZ2h0IHtwYWRkaW5nLXRvcDogMDt9XG4uaGVhZGVyLXR3byAuaGVhZGVyLXRvcC1yaWdodCBzcGFuOmZpcnN0LWNoaWxkIHttYXJnaW4tcmlnaHQ6IDI3cHg7fVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaW1nI2Zvb3Rlci1sb2dvIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDMwcHg7XG59XG5cbi5jb250YWluLXR4dCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udHh0LW9uZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udHh0LXR3byB7XG4gIHdvcmQtc3BhY2luZzogMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIiwiLmhlYWRlci10b3A6YmVmb3JlLCAuYWJvdXQtYXJlYTpiZWZvcmUsIC5uZXdzbGV0dGVyLWFyZWE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiA0MyU7XG59XG5cbi5oZWFkZXItdG9wOmFmdGVyLCAuYWJvdXQtYXJlYTphZnRlciwgLm5ld3NsZXR0ZXItYXJlYTphZnRlciB7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1jb2xvcnM6IG5vbmU7XG4gIC1tb3otYm9yZGVyLWxlZnQtY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci1yaWdodC1jb2xvcnM6IG5vbmU7XG4gIC1tb3otYm9yZGVyLXRvcC1jb2xvcnM6IG5vbmU7XG4gIC1vLWJvcmRlci1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLWltYWdlOiBub25lO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDI0cHggMTBweDtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDQzJTtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogMDtcbn1cblxuLm5ld3NsZXR0ZXItYXJlYSB7XG4gIGJhY2tncm91bmQ6ICMwYzJkNTAgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5uZXdzbGV0dGVyLWFyZWE6YmVmb3JlIHtcbiAgaGVpZ2h0OiAxNDhweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIHRvcDogLTIwcHg7XG4gIHdpZHRoOiA0NCU7XG59XG5cbi5uZXdzbGV0dGVyLWFyZWE6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDc0LjVweCA0MHB4O1xuICBsZWZ0OiA0NCU7XG4gIHJpZ2h0OiBhdXRvO1xuICB0b3A6IC0yMHB4O1xufVxuXG4ubmV3c2xldHRlci1jb250ZW50IGgyLCAubmV3c2xldHRlci1jb250ZW50IGgzIHtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLm5ld3NsZXR0ZXItY29udGVudCA+IGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5zdWJzY3JpYmUtZm9ybSBpbnB1dCB7XG4gIGNvbG9yOiAjNjk2OTY5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnN1YnNjcmliZS1mb3JtIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnN1YnNjcmliZS1mb3JtID4gYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzExN2FiZTtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHdpZHRoOiAzNCU7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWJzY3JpYmUtZm9ybSA+IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxMTdhYmU7XG59XG5cbi5uZXdzbGV0dGVyLWZvcm0ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAzNnB4IDA7XG59XG5cbi5zdWJzY3JpYmUtZm9ybSB7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MjVweDtcbn1cblxuLnN1YnNjcmliZS1mb3JtOmJlZm9yZSB7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1jb2xvcnM6IG5vbmU7XG4gIC1tb3otYm9yZGVyLWxlZnQtY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci1yaWdodC1jb2xvcnM6IG5vbmU7XG4gIC1tb3otYm9yZGVyLXRvcC1jb2xvcnM6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAtby1ib3JkZXItaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAyOHB4IDE1cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogNXB4O1xuICBsZWZ0OiAtMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAwO1xufVxuXG4uc3Vic2NyaWJlLWZvcm06YWZ0ZXIge1xuICAtbW96LWJvcmRlci1ib3R0b20tY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci1sZWZ0LWNvbG9yczogbm9uZTtcbiAgLW1vei1ib3JkZXItcmlnaHQtY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci10b3AtY29sb3JzOiBub25lO1xuICBib3JkZXItY29sb3I6ICNmZmYgI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgLW8tYm9yZGVyLWltYWdlOiBub25lO1xuICBib3JkZXItaW1hZ2U6IG5vbmU7XG59XG5cbi5uZXdzbGV0dGVyLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMjZweDtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogIDEyLiBGb290ZXIgV2lkZ2V0IEFyZWFcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZm9vdGVyLXdpZGdldC1hcmVhIHtcbiAgYmFja2dyb3VuZDogIzBjMmQ1MCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDgwcHggMCA2NXB4O1xufVxuXG4uZm9vdGVyLWxvZ28gPiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZm9vdGVyLWxvZ28ge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uc29jaWFsLWljb25zIGEge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGNvbG9yOiAjMmQzZTUwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAzMXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgd2lkdGg6IDMxcHg7XG59XG5cbi5zb2NpYWwtaWNvbnMgPiBhOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5zb2NpYWwtaWNvbnMgPiBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zb2NpYWwtaWNvbnMge1xuICBtYXJnaW4tdG9wOiAyN3B4O1xufVxuXG4uc2luZ2xlLWZvb3Rlci13aWRnZXQgPiBoMyB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAzN3B4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNpbmdsZS1mb290ZXItd2lkZ2V0ID4gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xufVxuXG4uc2luZ2xlLWZvb3Rlci13aWRnZXQgPiBzcGFuIGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZm9vdGVyLWxpc3QgYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLmZvb3Rlci1saXN0IGE6aG92ZXIge1xuICBjb2xvcjogIzExN2FiZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbnN0YWdyYW0taW1hZ2Uge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uZm9vdGVyLWltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmluc3RhZ3JhbS1pbWFnZSAuZm9vdGVyLWltZzpudGgtY2hpbGQoMyksIC5pbnN0YWdyYW0taW1hZ2UgLmZvb3Rlci1pbWc6bnRoLWNoaWxkKDYpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uZm9vdGVyLWltZyBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb290ZXItaW1nIGE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb290ZXItaW1nOmhvdmVyIGE6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXCI7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xufVxuXG4uZm9vdGVyLWltZyBhOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjb250ZW50OiBcIitcIjtcbiAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdHJlZ3VsYXJcIjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogLTlweCBhdXRvIDA7XG4gIG9wYWNpdHk6IDA7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB3aWR0aDogMThweDtcbn1cblxuLmZvb3Rlci1pbWc6aG92ZXIgYTphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKVwiO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qICAxMy4gRm9vdGVyIEFyZWFcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZm9vdGVyLWFyZWEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAxOHB4IDA7XG59XG5cbi5jb2x1bW4tcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5mb290ZXItYXJlYSBzcGFuIGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZvb3Rlci1hcmVhIHNwYW4gYTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xufVxuXG4uc2luZ2xlLWZvb3Rlci13aWRnZXQgPiBhIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xufVxuXG4uc2luZ2xlLWZvb3Rlci13aWRnZXQgPiBhOmhvdmVyIGkge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNpbmdsZS1mb290ZXItd2lkZ2V0ID4gYSBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qICAxNC4gSG9tZSBUd28gU3RhcnRcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogIDE0LjEgSG9tZSBUd28gSGVhZGVyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmhlYWRlci10d28gLmhlYWRlci10b3A6YmVmb3JlLCAuaGVhZGVyLXR3byAuaGVhZGVyLXRvcDphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oZWFkZXItdHdvIC5oZWFkZXItdG9wLXJpZ2h0ID4gc3BhbiB7XG4gIGNvbG9yOiAjZWRlZGVkO1xufVxuXG4uaGVhZGVyLXR3byAuaGVhZGVyLXRvcC1yaWdodCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uaGVhZGVyLXR3byAuaGVhZGVyLXRvcC1yaWdodCBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyN3B4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1nI2Zvb3Rlci1sb2dvIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDMwcHg7XG59XG5cbi5jb250YWluLXR4dCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udHh0LW9uZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udHh0LXR3byB7XG4gIHdvcmQtc3BhY2luZzogMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300&display=swap);\n/* ================================ Basic CSS =============================== */\nimg {\n  max-width: 100%; }\nh1, h2, h3, h4, h5, h6 {\n  margin: 0px; }\nul, ol {\n  margin: 0px;\n  padding: 0px; }\nli {\n  list-style: none; }\na {\n  text-decoration: none; }\np {\n  margin: 0px; }\na:hover {\n  text-decoration: none; }\n.container {\n  max-width: 1170px; }\n@media screen and (max-width: 575px) {\n    .container {\n      padding: 0px 15px;\n      max-width: 100%;\n      width: 100%; } }\n/* ================================ Header CSS =============================== */\n.my-nav {\n  position: fixed;\n  width: 100%;\n  padding: 10px 0px;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999; }\n.my-nav .nav-items {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1 1 100%;\n    max-width: 100%;\n    width: 100%; }\n@media (max-width: 768px) {\n      .my-nav .nav-items {\n        align-items: center; } }\n.my-nav .nav-items .logo {\n      width: 30%;\n      max-width: 30%;\n      flex: 1 1 30%;\n      padding: 10px 15px; }\n@media screen and (max-width: 767.98px) {\n        .my-nav .nav-items .logo {\n          width: 100%;\n          max-width: 100%;\n          flex: 1 1 100%; } }\n.my-nav .nav-items .menu-items {\n      width: 70%;\n      max-width: 70%;\n      flex: 1 1 70%;\n      position: relative; }\n@media screen and (max-width: 767.98px) {\n        .my-nav .nav-items .menu-items {\n          width: 100%;\n          max-width: 100%;\n          flex: 1 1 100%; } }\n.my-nav .nav-items .menu-items .menu {\n        display: block;\n        float: right;\n        padding: 10px 15px; }\n@media screen and (max-width: 767.98px) {\n          .my-nav .nav-items .menu-items .menu {\n            float: left;\n            display: none;\n            background: rgba(0, 33, 71, 0.9);\n            width: 100%;\n            position: relative; } }\n.my-nav .nav-items .menu-items .menu ul li {\n          display: inline-block;\n          padding: 10px;\n          font-size: 16px;\n          font-weight: lighter;\n          letter-spacing: 1px; }\n@media screen and (max-width: 767.98px) {\n            .my-nav .nav-items .menu-items .menu ul li {\n              display: block;\n              padding: 10px 0px; } }\n@media (max-width: 992px) and (min-width: 768px) {\n            .my-nav .nav-items .menu-items .menu ul li {\n              padding: 10px 2px; } }\n.my-nav .nav-items .menu-items .menu ul li a {\n            color: #fff;\n            padding: 10px;\n            /* text-transform: uppercase; */\n            transition: 0.5s; }\n.my-nav .nav-items .menu-items .menu ul li a:hover {\n              color: #fdc800; }\n@media screen and (max-width: 767.98px) {\n              .my-nav .nav-items .menu-items .menu ul li a {\n                padding: 10px 0px; } }\n.og-hf {\n  background: rgba(0, 33, 71, 0.9);\n  position: fixed;\n  height: 70px;\n  z-index: 999;\n  width: 100%;\n  transition: all 1s ease-out; }\n.og-hf .my-nav {\n    padding: 0px; }\n.menu-toggle {\n  /* display: none; */\n  height: 40px;\n  width: 40px;\n  margin: 10px 0 0 40px;\n  /* opacity: 0; */\n  /* visibility: hidden; */\n  z-index: 99;\n  position: absolute;\n  right: 0;\n  top: 3px;\n}\n.menu-toggle::before {\n  position: absolute;\n  content: \"\\f0c9\";\n  font-size: 26px;\n  color: #fff;\n  font-family: \"Font Awesome 5 Pro\"; }\n.menu-toggle.active::before {\n  content: \"\\f00d\"; }\n@media (max-width: 768px) {\n  .menu-toggle {\n    visibility: visible;\n    opacity: 1;\n    display: block; }\n\n  .menu.active {\n    display: block !important;\n    position: relative;\n    top: 0; } }\n/* ================================ Slider CSS =============================== */\n.slider {\n  position: relative;\n  overflow: hidden;\n  z-index: 9; }\n.slider::before {\n    position: absolute;\n    content: \"\";\n    -webkit-clip-path: polygon(0 79%, 100% 94%, 100% 100%, 0% 100%);\n            clip-path: polygon(0 79%, 100% 94%, 100% 100%, 0% 100%);\n    width: 100%;\n    height: 300px;\n    background: #002147;\n    bottom: -1px;\n    left: 0;\n    z-index: 9; }\n.slider .carousel-inner .carousel-item::before {\n    position: absolute;\n    content: \"\";\n    /* background: rgba(3, 7, 53, 0.8); */\n    /* background : #0022478c; */\n    background: #3436388c;\n    height: 100%;\n    width: 100%; }\n.slider .carousel-inner .carousel-item .carousel-caption {\n    top: 30%;\n    display: block;\n    transition: ease-in 0.5s; }\n@media screen and (min-width: 1200px) {\n      .slider .carousel-inner .carousel-item .carousel-caption {\n        top: 20%;\n        display: block;\n        transition: ease-in 0.5s; }\n    }\n@media screen and (max-width: 991.98px) {\n      .slider .carousel-inner .carousel-item .carousel-caption {\n        /* display: none; */\n       }\n       .slider .carousel-inner .carousel-item .carousel-caption h2{\n        font-size: 30px !important;\n       }\n       .slider .carousel-inner .carousel-item .carousel-caption p{\n        /* display: none !important; */\n          font-size: 13px !important;\n          line-height: 25px !important;\n       }\n       .button-01 {\n         display: block !important;\n       }\n      }\n@media screen and (max-width: 600px) {\n        .slider .carousel-inner .carousel-item .carousel-caption {\n          margin-top: -50px;\n         }\n\n         .slider .carousel-inner .carousel-item .carousel-caption h2{\n          font-size: 20px !important;\n         }\n         .button-01 {\n           display: block !important;\n         }\n        }\n@media screen and (max-width: 460px) {\n          .slider .carousel-inner .carousel-item .carousel-caption h2{\n            font-size: 17px !important;\n           }\n          .slider .carousel-inner .carousel-item .carousel-caption {\n            /* display: none; */\n            }\n          }\n@media screen and (max-width: 280px) {\n            .slider .carousel-inner .carousel-item .carousel-caption .button-01 {\n              margin: 0px 0px !important;\n          }\n        }\n@media (max-width: 1199.98px) and (min-width: 992px) {\n      .slider .carousel-inner .carousel-item .carousel-caption {\n        top: 20%; } }\n.slider .carousel-inner .carousel-item .carousel-caption h2 {\n      font-size: 2.5rem;\n      text-transform: uppercase;\n      line-height: normal;\n      letter-spacing: 1px;\n      color: #fff;\n      margin: 0 0 1rem 0;\n      display: inline-block; }\n.slider .carousel-inner .carousel-item .carousel-caption p {\n      font-size: 20px;\n      text-transform: capitalize;\n      letter-spacing: 0.5px;\n      margin: 10px 0px;\n      color: #fff;\n      display: block;\n      font-weight: 100;\n      line-height: 35px; }\n.slider .carousel-inner .carousel-item .carousel-caption .button-01 {\n      display: inline-block;\n      margin: 20px 0px;\n      text-align: center;\n      position: relative; }\n.slider .carousel-inner .carousel-item .carousel-caption .button-01 ul li {\n        display: inline-block;\n        padding: 8px 10px;\n        border: solid 1px #fff; }\n.slider .carousel-inner .carousel-item .carousel-caption .button-01 ul li:nth-child(1) {\n          /* margin-right: 20px;\n          background: #fdc800;\n          border: 1px solid #fdc800;\n          color: #002147; */\n          background-color: transparent;\n          border: 1px solid white;\n          width: 150px;\n          padding: 10px;\n        }\n.slider .carousel-inner .carousel-item .carousel-caption .button-01 ul li a {\n          font-size: 0.9rem;\n          color: #fff;\n          text-transform: uppercase;\n          letter-spacing: 0.4px; }\n/* ================================ Section CSS =============================== */\n/* .bg-01 {\n  padding: 50px 0px;\n  background: #eef6ff;\n  position: relative;\n  overflow: hidden; }\n  .bg-01 .se-box {\n    display: block;\n    margin: 20px 0px;\n    padding: 20px 25px;\n    position: relative;\n    text-align: center; }\n    .bg-01 .se-box .icon {\n      padding: 0 0 10px 0px;\n      position: relative;\n      display: block;\n      height: 60px;\n      width: 60px;\n      background-color: #002147;\n      border-radius: 50px;\n      line-height: 60px;\n      text-align: center;\n      margin: 0px auto;\n      color: #fff;\n      font-size: 20px;\n      transition: 0.5s; }\n      .bg-01 .se-box .icon::before {\n        position: absolute;\n        content: \"\";\n        width: 80px;\n        height: 80px;\n        border-radius: 50px;\n        left: -10px;\n        top: -10px;\n        border: 2px dashed #002147; }\n      .bg-01 .se-box .icon:hover {\n        background: #fdc800; }\n    .bg-01 .se-box .content {\n      padding: 20px 0px;\n      position: relative;\n      display: inline-block; }\n      .bg-01 .se-box .content h3 {\n        font-size: 20px;\n        color: #002147;\n        text-transform: capitalize;\n        margin: 10px 0 0 0; }\n      .bg-01 .se-box .content p {\n        color: #444444;\n        font-size: 15px;\n        line-height: 26px;\n        margin: 10px 0px 20px 0px; }\n\n.bg-02 {\n  padding: 50px 0px;\n  position: relative;\n  background: #fff;\n  z-index: 9; }\n  .bg-02 .featured-box {\n    position: relative;\n    display: block;\n    margin: 20px 0px;\n    padding: 10px 20px; }\n    .bg-02 .featured-box .content {\n      display: block;\n      position: relative;\n      padding: 10px 20px;\n      position: relative;\n      border: 1px solid #dddd;\n      border-top: 0px;\n      border-bottom-left-radius: 6px;\n      border-bottom-right-radius: 6px; }\n      .bg-02 .featured-box .content h3 {\n        font-size: 20px;\n        color: #002147; }\n      .bg-02 .featured-box .content p {\n        padding: 10px 0px;\n        color: #444444;\n        font-size: 14px;\n        font-weight: 500; }\n      .bg-02 .featured-box .content ol li {\n        display: inline-block;\n        padding: 0 6px 0 0;\n        border-right: 1px solid #dddd;\n        color: #444444;\n        font-size: 13px; }\n        .bg-02 .featured-box .content ol li:nth-child(3) {\n          border: none; }\n    .bg-02 .featured-box .feature-card {\n      position: relative;\n      border-top-right-radius: 6px;\n      border-top-left-radius: 6px;\n      overflow: hidden;\n      z-index: 3;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n      .bg-02 .featured-box .feature-card a {\n        position: absolute;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: #fff;\n        cursor: pointer;\n        width: 40px;\n        height: 40px;\n        border-radius: 50px;\n        transition: ease-in-out 0.9s;\n        visibility: hidden;\n        opacity: 0;\n        background: #002147;\n        z-index: 2; }\n      .bg-02 .featured-box .feature-card:hover a {\n        visibility: visible;\n        opacity: 1; }\n      .bg-02 .featured-box .feature-card:hover::before {\n        height: 100%; }\n      .bg-02 .featured-box .feature-card::before {\n        position: absolute;\n        content: \"\";\n        background: #fdc800;\n        opacity: 0.8;\n        width: 100%;\n        top: 0;\n        height: 0;\n        transition: ease-in-out 0.4s;\n        z-index: 1; }\n\n.bg-03 {\n  padding: 50px 0px;\n  background-image: url(../../../assets/images/background/1.jpg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  z-index: 9; }\n  .bg-03::before {\n    position: absolute;\n    content: \"\";\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(0, 33, 71, 0.9);\n    z-index: 1; }\n  .bg-03 ._lk_bg_cd {\n    padding: 20px 25px;\n    position: relative;\n    display: block;\n    z-index: 8;\n    text-align: center; }\n    .bg-03 ._lk_bg_cd i {\n      font-size: 25px;\n      color: #fdc800;\n      display: block;\n      padding: 10px 0px; }\n    .bg-03 ._lk_bg_cd .counting {\n      display: block;\n      font-size: 20px;\n      color: #fff;\n      font-weight: 600; }\n    .bg-03 ._lk_bg_cd h5 {\n      font-size: 18px;\n      color: #fff;\n      padding: 10px 0px;\n      display: inline-block; }\n\n.team {\n  padding: 50px 0px;\n  position: relative;\n  overflow: hidden; }\n  @media screen and (max-width: 576px) {\n    .team .item {\n      text-align: center; } }\n  .team .team-card {\n    position: relative;\n    display: block;\n    padding: 20px 25px; }\n    .team .team-card .image-team {\n      overflow: hidden;\n      display: inline-block;\n      margin-bottom: 10px; }\n    .team .team-card .team-content {\n      display: block;\n      text-align: center; }\n      .team .team-card .team-content h3 {\n        font-size: 18px;\n        font-weight: 500;\n        color: #002147;\n        padding: 0 0 5px 0; }\n      .team .team-card .team-content p {\n        display: block;\n        font-size: 15px;\n        color: #444444;\n        padding: 0 0 10px 0; }\n      .team .team-card .team-content ol li {\n        display: inline-block;\n        height: 30px;\n        width: 30px;\n        line-height: 30px;\n        text-align: center;\n        background: #002147;\n        color: #fff;\n        transition: ease-in-out 0.5s;\n        padding: 0 5px;\n        position: relative; }\n        .team .team-card .team-content ol li:hover {\n          background: #fdc800; }\n\n.bg-04 {\n  padding: 50px 0px;\n  background: #eef6ff;\n  position: relative;\n  overflow: hidden; }\n  .bg-04 ._lk_bg_sd_we {\n    position: relative;\n    overflow: hidden;\n    margin: 20px 0;\n    box-shadow: 0px 0px 15px 0px #ddd; }\n    .bg-04 ._lk_bg_sd_we ._xs_we_er {\n      display: inline-block;\n      width: 100%;\n      padding: 15px; }\n      .bg-04 ._lk_bg_sd_we ._xs_we_er ._he_w {\n        position: relative;\n        margin: 10px 0px;\n        z-index: 2;\n        overflow: hidden; }\n        .bg-04 ._lk_bg_sd_we ._xs_we_er ._he_w p {\n          font-size: 16px;\n          color: #5c5c5c;\n          letter-spacing: 0.2px;\n          line-height: 24px;\n          margin: 15px 0px 10px 0px; }\n        .bg-04 ._lk_bg_sd_we ._xs_we_er ._he_w ol li {\n          color: #f55e45;\n          font-size: 14px;\n          display: inline-block;\n          width: 100%; }\n          .bg-04 ._lk_bg_sd_we ._xs_we_er ._he_w ol li ._mn_cd_xs {\n            margin: 0 10px; }\n          .bg-04 ._lk_bg_sd_we ._xs_we_er ._he_w ol li span {\n            color: #5c5c5c;\n            font-size: 15px;\n            font-weight: 500;\n            margin: 0 5px 0 0; }\n        .bg-04 ._lk_bg_sd_we ._xs_we_er ._he_w h3 {\n          font-size: 18px;\n          font-weight: 400;\n          color: #292929; }\n    .bg-04 ._lk_bg_sd_we ._bv_xs_we {\n      position: relative;\n      z-index: 1;\n      background: url(../../../assets/images/blog/img-02.jpg);\n      background-repeat: no-repeat !important;\n      height: 300px;\n      background-size: cover !important;\n      background-position: center !important; }\n      .bg-04 ._lk_bg_sd_we ._bv_xs_we:hover::before {\n        opacity: 0.8;\n        width: 100%;\n        visibility: visible;\n        transition: 0.5s; }\n      .bg-04 ._lk_bg_sd_we ._bv_xs_we::before {\n        content: \"\";\n        position: absolute;\n        width: 0;\n        height: 100%;\n        top: 0;\n        background: #002147;\n        transition: 0.5s;\n        opacity: 0;\n        visibility: hidden; }\n\n.heading {\n  position: relative;\n  padding: 0px 0 20px 0px;\n  display: block;\n  text-align: center;\n  z-index: 99; }\n  .heading h2 {\n    font-size: 25px;\n    color: #002147;\n    font-weight: 800;\n    letter-spacing: 0.4px;\n    text-transform: uppercase; }\n  .heading p {\n    font-size: 16px;\n    letter-spacing: 0.4px;\n    color: #444444;\n    margin: 10px 0px;\n    font-weight: 400;\n    line-height: 27px;\n    text-transform: capitalize; }\n\n.bg-02-a {\n  padding: 150px 0px 80px 0px;\n  background: #002147;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  color: #fff; }\n  .bg-02-a ._head_01 {\n    position: relative;\n    display: block;\n    margin: 20px auto; }\n    .bg-02-a ._head_01 h2 {\n      font-size: 23px;\n      font-weight: 500;\n      margin: 0px;\n      padding: 0 0 10px 0;\n      color: #fff; }\n    .bg-02-a ._head_01 p {\n      margin: 10px 0px;\n      font-size: 18px;\n      font-weight: 300; }\n      .bg-02-a ._head_01 p i {\n        font-size: 20px;\n        margin: 0 10px;\n        position: relative;\n        top: 3px;\n        color: #fdc800; }\n      .bg-02-a ._head_01 p span {\n        color: #fdc800; }\n\n.se-001 {\n  padding: 40px 0px;\n  position: relative;\n  overflow: hidden; }\n  .se-001 .yu {\n    text-align: center; }\n  .se-001 ._Ol_er_qw {\n    margin: 20px 0px;\n    padding: 10px; }\n    .se-001 ._Ol_er_qw p {\n      font-size: 15px;\n      color: #444444;\n      text-align: left;\n      letter-spacing: 0.5px;\n      line-height: 28px; }\n\n._pl_rt {\n  padding: 40px 0px;\n  position: relative; }\n  ._pl_rt ._lo_we_ds {\n    background: #fdc800;\n    color: #fff;\n    padding: 30px 50px;\n    position: relative;\n    top: 55px;\n    z-index: 9;\n    box-shadow: 0px 0px 3px 0px #ddd; }\n    ._pl_rt ._lo_we_ds ._ol_we_as {\n      position: relative;\n      padding: 10px 20px;\n      display: inline-block; }\n      ._pl_rt ._lo_we_ds ._ol_we_as ol li {\n        display: block;\n        position: relative;\n        padding: 0 0 0 40px; }\n        ._pl_rt ._lo_we_ds ._ol_we_as ol li h3 {\n          color: #fff;\n          font-size: 20px; }\n        ._pl_rt ._lo_we_ds ._ol_we_as ol li i {\n          position: absolute;\n          left: 0;\n          font-size: 26px;\n          color: #fff;\n          display: flex;\n          align-items: center;\n          height: 100%; }\n    @media screen and (max-width: 768px) {\n      ._pl_rt ._lo_we_ds {\n        padding: 20px 0px; } }\n\n.my-pla {\n  padding: 40px 0px;\n  background: url(../../../assets/images/background/1.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  overflow: hidden;\n  position: relative;\n  z-index: 9; }\n  .my-pla::before {\n    position: absolute;\n    content: \"\";\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(0, 33, 71, 0.9);\n    z-index: 1; }\n  .my-pla .form-group {\n    margin: 10px 0px;\n    color: #fff;\n    position: relative;\n    z-index: 2; }\n    .my-pla .form-group .form-control {\n      background: transparent;\n      color: #fff;\n      border: 1px solid #fff;\n      min-height: 45px;\n      border-radius: 4px;\n      margin: 10px 0px; } */\n/*# sourceMappingURL=style.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXItc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZIQUE2SDtBQUM3SCwrRUFBK0U7QUFFL0U7RUFDRSxlQUFlLEVBQUU7QUFFbkI7RUFDRSxXQUFXLEVBQUU7QUFFZjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUU7QUFFaEI7RUFDRSxnQkFBZ0IsRUFBRTtBQUVwQjtFQUNFLHFCQUFxQixFQUFFO0FBRXpCO0VBQ0UsV0FBVyxFQUFFO0FBRWY7RUFDRSxxQkFBcUIsRUFBRTtBQUV6QjtFQUNFLGlCQUFpQixFQUFFO0FBQ25CO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLFdBQVcsRUFBRSxFQUFFO0FBRXJCLGdGQUFnRjtBQUVoRjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVksRUFBRTtBQUNkO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVcsRUFBRTtBQUNiO01BQ0U7UUFDRSxtQkFBbUIsRUFBRSxFQUFFO0FBQzNCO01BQ0UsVUFBVTtNQUNWLGNBQWM7TUFDZCxhQUFhO01BQ2Isa0JBQWtCLEVBQUU7QUFDcEI7UUFDRTtVQUNFLFdBQVc7VUFDWCxlQUFlO1VBQ2YsY0FBYyxFQUFFLEVBQUU7QUFDeEI7TUFDRSxVQUFVO01BQ1YsY0FBYztNQUNkLGFBQWE7TUFDYixrQkFBa0IsRUFBRTtBQUNwQjtRQUNFO1VBQ0UsV0FBVztVQUNYLGVBQWU7VUFDZixjQUFjLEVBQUUsRUFBRTtBQUN0QjtRQUNFLGNBQWM7UUFDZCxZQUFZO1FBQ1osa0JBQWtCLEVBQUU7QUFDcEI7VUFDRTtZQUNFLFdBQVc7WUFDWCxhQUFhO1lBQ2IsZ0NBQWdDO1lBQ2hDLFdBQVc7WUFDWCxrQkFBa0IsRUFBRSxFQUFFO0FBQzFCO1VBQ0UscUJBQXFCO1VBQ3JCLGFBQWE7VUFDYixlQUFlO1VBQ2Ysb0JBQW9CO1VBQ3BCLG1CQUFtQixFQUFFO0FBQ3JCO1lBQ0U7Y0FDRSxjQUFjO2NBQ2QsaUJBQWlCLEVBQUUsRUFBRTtBQUN6QjtZQUNFO2NBQ0UsaUJBQWlCLEVBQUUsRUFBRTtBQUN6QjtZQUNFLFdBQVc7WUFDWCxhQUFhO1lBQ2IsK0JBQStCO1lBQy9CLGdCQUFnQixFQUFFO0FBQ2xCO2NBQ0UsY0FBYyxFQUFFO0FBQ2xCO2NBQ0U7Z0JBQ0UsaUJBQWlCLEVBQUUsRUFBRTtBQUVyQztFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBS1gsMkJBQTJCLEVBQUU7QUFDN0I7SUFDRSxZQUFZLEVBQUU7QUFFbEI7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0FBQ1Y7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQ0FBaUMsRUFBRTtBQUVyQztFQUNFLGdCQUFnQixFQUFFO0FBRXBCO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWMsRUFBRTs7RUFFbEI7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLE1BQU0sRUFBRSxFQUFFO0FBQ2QsZ0ZBQWdGO0FBQ2hGO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVLEVBQUU7QUFDWjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsK0RBQXVEO1lBQXZELHVEQUF1RDtJQUN2RCxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osT0FBTztJQUNQLFVBQVUsRUFBRTtBQUNkO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckMsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVyxFQUFFO0FBQ2Y7SUFDRSxRQUFRO0lBQ1IsY0FBYztJQUNkLHdCQUF3QixFQUFFO0FBQzFCO01BQ0U7UUFDRSxRQUFRO1FBQ1IsY0FBYztRQUNkLHdCQUF3QixFQUFFO0lBQzlCO0FBQ0E7TUFDRTtRQUNFLG1CQUFtQjtPQUNwQjtPQUNBO1FBQ0MsMEJBQTBCO09BQzNCO09BQ0E7UUFDQyw4QkFBOEI7VUFDNUIsMEJBQTBCO1VBQzFCLDRCQUE0QjtPQUMvQjtPQUNBO1NBQ0UseUJBQXlCO09BQzNCO01BQ0Q7QUFDQTtRQUNFO1VBQ0UsaUJBQWlCO1NBQ2xCOztTQUVBO1VBQ0MsMEJBQTBCO1NBQzNCO1NBQ0E7V0FDRSx5QkFBeUI7U0FDM0I7UUFDRDtBQUNBO1VBQ0U7WUFDRSwwQkFBMEI7V0FDM0I7VUFDRDtZQUNFLG1CQUFtQjtZQUNuQjtVQUNGO0FBQ0E7WUFDRTtjQUNFLDBCQUEwQjtVQUM5QjtRQUNGO0FBQ0o7TUFDRTtRQUNFLFFBQVEsRUFBRSxFQUFFO0FBQ2hCO01BQ0UsaUJBQWlCO01BQ2pCLHlCQUF5QjtNQUN6QixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIscUJBQXFCLEVBQUU7QUFDekI7TUFDRSxlQUFlO01BQ2YsMEJBQTBCO01BQzFCLHFCQUFxQjtNQUNyQixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUU7QUFDckI7TUFDRSxxQkFBcUI7TUFDckIsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixrQkFBa0IsRUFBRTtBQUNwQjtRQUNFLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsc0JBQXNCLEVBQUU7QUFDeEI7VUFDRTs7OzJCQUdpQjtVQUNqQiw2QkFBNkI7VUFDN0IsdUJBQXVCO1VBQ3ZCLFlBQVk7VUFDWixhQUFhO1FBQ2Y7QUFDQTtVQUNFLGlCQUFpQjtVQUNqQixXQUFXO1VBQ1gseUJBQXlCO1VBQ3pCLHFCQUFxQixFQUFFO0FBRWpDLGlGQUFpRjtBQUNqRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQXFaMkI7QUFHM0Isb0NBQW9DIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXItc3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMzAwJmRpc3BsYXk9c3dhcCk7XG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBCYXNpYyBDU1MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7IH1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIG1hcmdpbjogMHB4OyB9XG5cbnVsLCBvbCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7IH1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxucCB7XG4gIG1hcmdpbjogMHB4OyB9XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTE3MHB4OyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSGVhZGVyIENTUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5teS1uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5OyB9XG4gIC5teS1uYXYgLm5hdi1pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleDogMSAxIDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAubXktbmF2IC5uYXYtaXRlbXMge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9IH1cbiAgICAubXktbmF2IC5uYXYtaXRlbXMgLmxvZ28ge1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIG1heC13aWR0aDogMzAlO1xuICAgICAgZmxleDogMSAxIDMwJTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDsgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAgICAgLm15LW5hdiAubmF2LWl0ZW1zIC5sb2dvIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZmxleDogMSAxIDEwMCU7IH0gfVxuICAgIC5teS1uYXYgLm5hdi1pdGVtcyAubWVudS1pdGVtcyB7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgICBmbGV4OiAxIDEgNzAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAgICAgICAubXktbmF2IC5uYXYtaXRlbXMgLm1lbnUtaXRlbXMge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBmbGV4OiAxIDEgMTAwJTsgfSB9XG4gICAgICAubXktbmF2IC5uYXYtaXRlbXMgLm1lbnUtaXRlbXMgLm1lbnUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7IH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAgICAgICAubXktbmF2IC5uYXYtaXRlbXMgLm1lbnUtaXRlbXMgLm1lbnUge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAzMywgNzEsIDAuOSk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfSB9XG4gICAgICAgIC5teS1uYXYgLm5hdi1pdGVtcyAubWVudS1pdGVtcyAubWVudSB1bCBsaSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7IH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAgICAgICAgICAgLm15LW5hdiAubmF2LWl0ZW1zIC5tZW51LWl0ZW1zIC5tZW51IHVsIGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4OyB9IH1cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgLm15LW5hdiAubmF2LWl0ZW1zIC5tZW51LWl0ZW1zIC5tZW51IHVsIGxpIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAycHg7IH0gfVxuICAgICAgICAgIC5teS1uYXYgLm5hdi1pdGVtcyAubWVudS1pdGVtcyAubWVudSB1bCBsaSBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzOyB9XG4gICAgICAgICAgICAubXktbmF2IC5uYXYtaXRlbXMgLm1lbnUtaXRlbXMgLm1lbnUgdWwgbGkgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmRjODAwOyB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAgICAgICAgICAgICAubXktbmF2IC5uYXYtaXRlbXMgLm1lbnUtaXRlbXMgLm1lbnUgdWwgbGkgYSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7IH0gfVxuXG4ub2ctaGYge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDMzLCA3MSwgMC45KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7IH1cbiAgLm9nLWhmIC5teS1uYXYge1xuICAgIHBhZGRpbmc6IDBweDsgfVxuXG4ubWVudS10b2dnbGUge1xuICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW46IDEwcHggMCAwIDQwcHg7XG4gIC8qIG9wYWNpdHk6IDA7ICovXG4gIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cbiAgei1pbmRleDogOTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogM3B4O1xufVxuXG4ubWVudS10b2dnbGU6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcXGYwYzlcIjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgUHJvXCI7IH1cblxuLm1lbnUtdG9nZ2xlLmFjdGl2ZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMGRcIjsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1lbnUtdG9nZ2xlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cblxuICAubWVudS5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDsgfSB9XG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTbGlkZXIgQ1NTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDk7IH1cbiAgLnNsaWRlcjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCA3OSUsIDEwMCUgOTQlLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYmFja2dyb3VuZDogIzAwMjE0NztcbiAgICBib3R0b206IC0xcHg7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5OyB9XG4gIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtOjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoMywgNywgNTMsIDAuOCk7ICovXG4gICAgLyogYmFja2dyb3VuZCA6ICMwMDIyNDc4YzsgKi9cbiAgICBiYWNrZ3JvdW5kOiAjMzQzNjM4OGM7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICB0b3A6IDMwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuNXM7IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICAgICAgdG9wOiAyMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuNXM7IH1cbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAgIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICAgICAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgICAgICB9XG4gICAgICAgLnNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gaDJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgICAgIH1cbiAgICAgICAuc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiBwe1xuICAgICAgICAvKiBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7ICovXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgLmJ1dHRvbi0wMSB7XG4gICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICAgICAgIH1cblxuICAgICAgICAgLnNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gaDJ7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICB9XG4gICAgICAgICAuYnV0dG9uLTAxIHtcbiAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAgICAgICAgIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIGgye1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgICAgICAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyODBweCkge1xuICAgICAgICAgICAgLnNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gLmJ1dHRvbi0wMSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgLnNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24ge1xuICAgICAgICB0b3A6IDIwJTsgfSB9XG4gICAgLnNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gaDIge1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICBsaW5lLWhlaWdodDogMzVweDsgfVxuICAgIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIC5idXR0b24tMDEge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgLnNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gLmJ1dHRvbi0wMSB1bCBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmY7IH1cbiAgICAgICAgLnNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gLmJ1dHRvbi0wMSB1bCBsaTpudGgtY2hpbGQoMSkge1xuICAgICAgICAgIC8qIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmRjODAwO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZGM4MDA7XG4gICAgICAgICAgY29sb3I6ICMwMDIxNDc7ICovXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gLmJ1dHRvbi0wMSB1bCBsaSBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDsgfVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTZWN0aW9uIENTUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiAuYmctMDEge1xuICBwYWRkaW5nOiA1MHB4IDBweDtcbiAgYmFja2dyb3VuZDogI2VlZjZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIC5iZy0wMSAuc2UtYm94IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggMjVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgLmJnLTAxIC5zZS1ib3ggLmljb24ge1xuICAgICAgcGFkZGluZzogMCAwIDEwcHggMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDIxNDc7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB0cmFuc2l0aW9uOiAwLjVzOyB9XG4gICAgICAuYmctMDEgLnNlLWJveCAuaWNvbjo6YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBsZWZ0OiAtMTBweDtcbiAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICMwMDIxNDc7IH1cbiAgICAgIC5iZy0wMSAuc2UtYm94IC5pY29uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZkYzgwMDsgfVxuICAgIC5iZy0wMSAuc2UtYm94IC5jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAuYmctMDEgLnNlLWJveCAuY29udGVudCBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY29sb3I6ICMwMDIxNDc7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7IH1cbiAgICAgIC5iZy0wMSAuc2UtYm94IC5jb250ZW50IHAge1xuICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAyMHB4IDBweDsgfVxuXG4uYmctMDIge1xuICBwYWRkaW5nOiA1MHB4IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiA5OyB9XG4gIC5iZy0wMiAuZmVhdHVyZWQtYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7IH1cbiAgICAuYmctMDIgLmZlYXR1cmVkLWJveCAuY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkO1xuICAgICAgYm9yZGVyLXRvcDogMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDsgfVxuICAgICAgLmJnLTAyIC5mZWF0dXJlZC1ib3ggLmNvbnRlbnQgaDMge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjMDAyMTQ3OyB9XG4gICAgICAuYmctMDIgLmZlYXR1cmVkLWJveCAuY29udGVudCBwIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgICAgIC5iZy0wMiAuZmVhdHVyZWQtYm94IC5jb250ZW50IG9sIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwIDZweCAwIDA7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGRkO1xuICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4OyB9XG4gICAgICAgIC5iZy0wMiAuZmVhdHVyZWQtYm94IC5jb250ZW50IG9sIGxpOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgYm9yZGVyOiBub25lOyB9XG4gICAgLmJnLTAyIC5mZWF0dXJlZC1ib3ggLmZlYXR1cmUtY2FyZCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gICAgICAuYmctMDIgLmZlYXR1cmVkLWJveCAuZmVhdHVyZS1jYXJkIGEge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjlzO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDIxNDc7XG4gICAgICAgIHotaW5kZXg6IDI7IH1cbiAgICAgIC5iZy0wMiAuZmVhdHVyZWQtYm94IC5mZWF0dXJlLWNhcmQ6aG92ZXIgYSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIG9wYWNpdHk6IDE7IH1cbiAgICAgIC5iZy0wMiAuZmVhdHVyZWQtYm94IC5mZWF0dXJlLWNhcmQ6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgIGhlaWdodDogMTAwJTsgfVxuICAgICAgLmJnLTAyIC5mZWF0dXJlZC1ib3ggLmZlYXR1cmUtY2FyZDo6YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmRjODAwO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC40cztcbiAgICAgICAgei1pbmRleDogMTsgfVxuXG4uYmctMDMge1xuICBwYWRkaW5nOiA1MHB4IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC8xLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OyB9XG4gIC5iZy0wMzo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAzMywgNzEsIDAuOSk7XG4gICAgei1pbmRleDogMTsgfVxuICAuYmctMDMgLl9sa19iZ19jZCB7XG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB6LWluZGV4OiA4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgIC5iZy0wMyAuX2xrX2JnX2NkIGkge1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgY29sb3I6ICNmZGM4MDA7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4OyB9XG4gICAgLmJnLTAzIC5fbGtfYmdfY2QgLmNvdW50aW5nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogNjAwOyB9XG4gICAgLmJnLTAzIC5fbGtfYmdfY2QgaDUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4udGVhbSB7XG4gIHBhZGRpbmc6IDUwcHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAudGVhbSAuaXRlbSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0gfVxuICAudGVhbSAudGVhbS1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMjBweCAyNXB4OyB9XG4gICAgLnRlYW0gLnRlYW0tY2FyZCAuaW1hZ2UtdGVhbSB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuICAgIC50ZWFtIC50ZWFtLWNhcmQgLnRlYW0tY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgLnRlYW0gLnRlYW0tY2FyZCAudGVhbS1jb250ZW50IGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogIzAwMjE0NztcbiAgICAgICAgcGFkZGluZzogMCAwIDVweCAwOyB9XG4gICAgICAudGVhbSAudGVhbS1jYXJkIC50ZWFtLWNvbnRlbnQgcCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xuICAgICAgICBwYWRkaW5nOiAwIDAgMTBweCAwOyB9XG4gICAgICAudGVhbSAudGVhbS1jYXJkIC50ZWFtLWNvbnRlbnQgb2wgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDIxNDc7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjVzO1xuICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAgIC50ZWFtIC50ZWFtLWNhcmQgLnRlYW0tY29udGVudCBvbCBsaTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZkYzgwMDsgfVxuXG4uYmctMDQge1xuICBwYWRkaW5nOiA1MHB4IDBweDtcbiAgYmFja2dyb3VuZDogI2VlZjZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIC5iZy0wNCAuX2xrX2JnX3NkX3dlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICNkZGQ7IH1cbiAgICAuYmctMDQgLl9sa19iZ19zZF93ZSAuX3hzX3dlX2VyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTVweDsgfVxuICAgICAgLmJnLTA0IC5fbGtfYmdfc2Rfd2UgLl94c193ZV9lciAuX2hlX3cge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAgICAgLmJnLTA0IC5fbGtfYmdfc2Rfd2UgLl94c193ZV9lciAuX2hlX3cgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiAjNWM1YzVjO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICBtYXJnaW46IDE1cHggMHB4IDEwcHggMHB4OyB9XG4gICAgICAgIC5iZy0wNCAuX2xrX2JnX3NkX3dlIC5feHNfd2VfZXIgLl9oZV93IG9sIGxpIHtcbiAgICAgICAgICBjb2xvcjogI2Y1NWU0NTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICAgICAgLmJnLTA0IC5fbGtfYmdfc2Rfd2UgLl94c193ZV9lciAuX2hlX3cgb2wgbGkgLl9tbl9jZF94cyB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDsgfVxuICAgICAgICAgIC5iZy0wNCAuX2xrX2JnX3NkX3dlIC5feHNfd2VfZXIgLl9oZV93IG9sIGxpIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICM1YzVjNWM7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDVweCAwIDA7IH1cbiAgICAgICAgLmJnLTA0IC5fbGtfYmdfc2Rfd2UgLl94c193ZV9lciAuX2hlX3cgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGNvbG9yOiAjMjkyOTI5OyB9XG4gICAgLmJnLTA0IC5fbGtfYmdfc2Rfd2UgLl9idl94c193ZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmxvZy9pbWctMDIuanBnKTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAgICAgLmJnLTA0IC5fbGtfYmdfc2Rfd2UgLl9idl94c193ZTpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41czsgfVxuICAgICAgLmJnLTA0IC5fbGtfYmdfc2Rfd2UgLl9idl94c193ZTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDIxNDc7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuXG4uaGVhZGluZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMHB4IDAgMjBweCAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OyB9XG4gIC5oZWFkaW5nIGgyIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICMwMDIxNDc7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAuaGVhZGluZyBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgIGNvbG9yOiAjNDQ0NDQ0O1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxuXG4uYmctMDItYSB7XG4gIHBhZGRpbmc6IDE1MHB4IDBweCA4MHB4IDBweDtcbiAgYmFja2dyb3VuZDogIzAwMjE0NztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmOyB9XG4gIC5iZy0wMi1hIC5faGVhZF8wMSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMjBweCBhdXRvOyB9XG4gICAgLmJnLTAyLWEgLl9oZWFkXzAxIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gICAgICBjb2xvcjogI2ZmZjsgfVxuICAgIC5iZy0wMi1hIC5faGVhZF8wMSBwIHtcbiAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogMzAwOyB9XG4gICAgICAuYmctMDItYSAuX2hlYWRfMDEgcCBpIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgY29sb3I6ICNmZGM4MDA7IH1cbiAgICAgIC5iZy0wMi1hIC5faGVhZF8wMSBwIHNwYW4ge1xuICAgICAgICBjb2xvcjogI2ZkYzgwMDsgfVxuXG4uc2UtMDAxIHtcbiAgcGFkZGluZzogNDBweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAuc2UtMDAxIC55dSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5zZS0wMDEgLl9PbF9lcl9xdyB7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4OyB9XG4gICAgLnNlLTAwMSAuX09sX2VyX3F3IHAge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7IH1cblxuLl9wbF9ydCB7XG4gIHBhZGRpbmc6IDQwcHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLl9wbF9ydCAuX2xvX3dlX2RzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmRjODAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1NXB4O1xuICAgIHotaW5kZXg6IDk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMHB4ICNkZGQ7IH1cbiAgICAuX3BsX3J0IC5fbG9fd2VfZHMgLl9vbF93ZV9hcyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5fcGxfcnQgLl9sb193ZV9kcyAuX29sX3dlX2FzIG9sIGxpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMCAwIDAgNDBweDsgfVxuICAgICAgICAuX3BsX3J0IC5fbG9fd2VfZHMgLl9vbF93ZV9hcyBvbCBsaSBoMyB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4OyB9XG4gICAgICAgIC5fcGxfcnQgLl9sb193ZV9kcyAuX29sX3dlX2FzIG9sIGxpIGkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlOyB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5fcGxfcnQgLl9sb193ZV9kcyB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMHB4OyB9IH1cblxuLm15LXBsYSB7XG4gIHBhZGRpbmc6IDQwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLzEuanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7IH1cbiAgLm15LXBsYTo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAzMywgNzEsIDAuOSk7XG4gICAgei1pbmRleDogMTsgfVxuICAubXktcGxhIC5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyOyB9XG4gICAgLm15LXBsYSAuZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgbWluLWhlaWdodDogNDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIG1hcmdpbjogMTBweCAwcHg7IH0gKi9cblxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXG4iXX0= */");

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slider .carousel-inner .carousel-item {\n  background-color: #0c2d504d;\n}\n\n#carouselExampleFade {\n  height: 650px;\n}\n\n.button-01 {\n  cursor: pointer;\n}\n\n.btn_continue {\n  background: #0c2d504d !important;\n}\n\n.btn_continue:hover {\n  background: #0c2d50a6 !important;\n}\n\nimg.d-block {\n  width: 100% !important;\n}\n\n@media screen and (max-width: 991.98px) {\n  #carouselExampleFade {\n    height: 440px;\n  }\n}\n\n.carousel-caption {\n  margin-top: -70px;\n}\n\n@media screen and (max-width: 700px) {\n  .slider .carousel-inner .carousel-item .carousel-caption p {\n    display: none !important;\n  }\n\n  #carouselExampleFade {\n    height: 350px;\n  }\n\n  .carousel-control-prev,\n.carousel-control-next {\n    margin-top: -60px;\n  }\n}\n\n@media screen and (max-width: 460px) {\n  .carousel-control-prev,\n.carousel-control-next {\n    margin-top: -45px;\n  }\n\n  .slider .carousel-inner .carousel-item .carousel-caption .button-01 ul li:nth-child(1) {\n    width: 150px;\n    padding: 5px;\n  }\n\n  #carouselExampleFade {\n    height: 300px;\n  }\n}\n\nimg.d-blog {\n  width: 100% !important;\n}\n\n.noData {\n  background-color: #0c2d50a6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMkJBSFk7QUNFZDs7QURJQTtFQUNFLGFBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLGdDQUFBO0FDREY7O0FER0E7RUFDRSxnQ0FBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUE7QUNBRjs7QURHQTtFQUNFO0lBQ0UsYUFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRSxpQkFBQTtBQ0RGOztBRElBO0VBQ0U7SUFDRSx3QkFBQTtFQ0RGOztFRElBO0lBQ0UsYUFBQTtFQ0RGOztFRElBOztJQUVFLGlCQUFBO0VDREY7QUFDRjs7QURJQTtFQUNFOztJQUVFLGlCQUFBO0VDRkY7O0VES0E7SUFPRSxZQUFBO0lBQ0EsWUFBQTtFQ1JGOztFRFdBO0lBQ0UsYUFBQTtFQ1JGO0FBQ0Y7O0FEV0E7RUFDRSxzQkFBQTtBQ1RGOztBRFlBO0VBQ0UsMkJBNUVhO0FDbUVmIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZmlyc3QtY29sb3I6ICMwYzJkNTA0ZDtcbiRzZWNvbmQtY29sb3I6ICMwYzJkNTBhNjtcbi5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZpcnN0LWNvbG9yO1xufVxuXG4jY2Fyb3VzZWxFeGFtcGxlRmFkZSB7XG4gIGhlaWdodDogNjUwcHg7XG59XG5cbi5idXR0b24tMDEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG5fY29udGludWUge1xuICBiYWNrZ3JvdW5kOiAkZmlyc3QtY29sb3IgIWltcG9ydGFudDtcbn1cbi5idG5fY29udGludWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAkc2Vjb25kLWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbmltZy5kLWJsb2NrIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgI2Nhcm91c2VsRXhhbXBsZUZhZGUge1xuICAgIGhlaWdodDogNDQwcHg7XG4gIH1cbn1cblxuLmNhcm91c2VsLWNhcHRpb24ge1xuICBtYXJnaW4tdG9wOiAtNzBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gcCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2Nhcm91c2VsRXhhbXBsZUZhZGUge1xuICAgIGhlaWdodDogMzUwcHg7XG4gIH1cblxuICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxuICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxuICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAtNDVweDtcbiAgfVxuXG4gIC5zbGlkZXJcbiAgICAuY2Fyb3VzZWwtaW5uZXJcbiAgICAuY2Fyb3VzZWwtaXRlbVxuICAgIC5jYXJvdXNlbC1jYXB0aW9uXG4gICAgLmJ1dHRvbi0wMVxuICAgIHVsXG4gICAgbGk6bnRoLWNoaWxkKDEpIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgI2Nhcm91c2VsRXhhbXBsZUZhZGUge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbn1cblxuaW1nLmQtYmxvZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5ub0RhdGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kLWNvbG9yO1xufVxuIiwiLnNsaWRlciAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMyZDUwNGQ7XG59XG5cbiNjYXJvdXNlbEV4YW1wbGVGYWRlIHtcbiAgaGVpZ2h0OiA2NTBweDtcbn1cblxuLmJ1dHRvbi0wMSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bl9jb250aW51ZSB7XG4gIGJhY2tncm91bmQ6ICMwYzJkNTA0ZCAhaW1wb3J0YW50O1xufVxuXG4uYnRuX2NvbnRpbnVlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzBjMmQ1MGE2ICFpbXBvcnRhbnQ7XG59XG5cbmltZy5kLWJsb2NrIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgI2Nhcm91c2VsRXhhbXBsZUZhZGUge1xuICAgIGhlaWdodDogNDQwcHg7XG4gIH1cbn1cbi5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogLTcwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5zbGlkZXIgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gICNjYXJvdXNlbEV4YW1wbGVGYWRlIHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICB9XG5cbiAgLmNhcm91c2VsLWNvbnRyb2wtcHJldixcbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIG1hcmdpbi10b3A6IC02MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgbWFyZ2luLXRvcDogLTQ1cHg7XG4gIH1cblxuICAuc2xpZGVyIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiAuYnV0dG9uLTAxIHVsIGxpOm50aC1jaGlsZCgxKSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gICNjYXJvdXNlbEV4YW1wbGVGYWRlIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG5pbWcuZC1ibG9nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm5vRGF0YSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzJkNTBhNjtcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("#with-slide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvbGF5b3V0L2hlYWRlci9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2hlYWRlci9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvbWFpbi1oZWFkZXIvbWFpbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2l0aC1zbGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iLCIjd2l0aC1zbGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("#mobile {\n  height: 100vh;\n  width: 40vh;\n  background: #0c2d50;\n  position: absolute;\n  z-index: 400;\n  margin: 0px;\n  -o-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.048);\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.048);\n  overflow: hidden;\n}\n\n#top-content {\n  -o-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n#nav {\n  position: absolute;\n  z-index: 10;\n  list-style-type: none;\n  margin: 15px 0 0 20px;\n  padding: 0;\n  overflow: hidden;\n}\n\n#nav li {\n  height: 35px;\n  width: 0;\n  margin: 30px 0;\n  background: #eae8e5;\n  font-weight: 500;\n  padding: 5px;\n  transition: all 0.4s ease-in;\n}\n\n.navigation #nav li {\n  width: 200px;\n  margin-left: 0;\n}\n\n.demo1.navigation #mobileBodyContent {\n  -khtml-transform: scale(0.85);\n  transform: scale(0.85);\n  margin-left: 260px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyLXNsaWRlL3RtcC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvaGVhZGVyL3RvcC1oZWFkZXItc2xpZGUvdG1wLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFsQ0Esb0RBbUNvQjtFQWxDcEIsaURBa0NvQjtFQUNwQixnQkFBQTtBQzNDRjs7QUQ2Q0E7RUF0Q0Usa0RBdUNvQjtFQXRDcEIsK0NBc0NvQjtFQUNwQixnQkFBQTtBQ3RDRjs7QUR5Q0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDdENGOztBRHVDRTtFQUNFLFlBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBdkVGLDRCQXdFc0I7QUNqQ3hCOztBRCtDRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDNUNKOztBRGlERTtFQXZGQSw2QkFBQTtFQUVBLHNCQUFBO0VBdUZFLGtCQUFBO0FDMUNKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyLXNsaWRlL3RtcC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHRyYW5zaXRpb24oJHBhcmFtcykge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRwYXJhbXM7XG4gIC1tb3otdHJhbnNpdGlvbjogJHBhcmFtcztcbiAgLWtodG1sLXRyYW5zaXRpb246ICRwYXJhbXM7XG4gIC1vLXRyYW5zaXRpb246ICRwYXJhbXM7XG4gIHRyYW5zaXRpb246ICRwYXJhbXM7XG59XG5cbkBtaXhpbiBzY2FsZSgkcGFyYW1zKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkcGFyYW1zKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKCRwYXJhbXMpO1xuICAta2h0bWwtdHJhbnNmb3JtOiBzY2FsZSgkcGFyYW1zKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkcGFyYW1zKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgkcGFyYW1zKTtcbn1cblxuQG1peGluIGJveC1zaGFkb3coJHBhcmFtcykge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRwYXJhbXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHBhcmFtcztcbiAgLWtodG1sLWJveC1zaGFkb3c6ICRwYXJhbXM7XG4gIC1vLWJveC1zaGFkb3c6ICRwYXJhbXM7XG4gIGJveC1zaGFkb3c6ICRwYXJhbXM7XG59XG5cbkBtaXhpbiByb3RhdGUoJHBhcmFtcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRwYXJhbXMpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRwYXJhbXMpO1xuICAta2h0bWwtdHJhbnNmb3JtOiByb3RhdGUoJHBhcmFtcyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKCRwYXJhbXMpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgkcGFyYW1zKTtcbn1cblxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkb3BhY2l0eTtcbiAgLW1vei1vcGFjaXR5OiAkb3BhY2l0eTtcbiAgLWtodG1sLW9wYWNpdHk6ICRvcGFjaXR5O1xuICAtby1vcGFjaXR5OiAkb3BhY2l0eTtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG59XG5cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gIC1raHRtbC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAtby1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xufVxuXG4jbW9iaWxlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDQwdmg7XG4gIGJhY2tncm91bmQ6ICMwYzJkNTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNDAwO1xuICBtYXJnaW46IDBweDtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdygwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNDgpKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiN0b3AtY29udGVudCB7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDE1cHggMCAwIDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxpIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDA7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgYmFja2dyb3VuZDogI2VhZThlNTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjRzIGVhc2UtaW4pO1xuICAgIC8vICYgKyBsaSB7XG4gICAgLy8gICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvLyAgICYgKyBsaSB7XG4gICAgLy8gICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIC8vICAgICAmICsgbGkge1xuICAgIC8vICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgI25hdiBsaSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5cbi5kZW1vMS5uYXZpZ2F0aW9uIHtcbiAgI21vYmlsZUJvZHlDb250ZW50IHtcbiAgICBAaW5jbHVkZSBzY2FsZSgwLjg1KTtcbiAgICBtYXJnaW4tbGVmdDogMjYwcHg7XG4gIH1cbn1cbiIsIiNtb2JpbGUge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogNDB2aDtcbiAgYmFja2dyb3VuZDogIzBjMmQ1MDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA0MDA7XG4gIG1hcmdpbjogMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA0OCk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KTtcbiAgLWtodG1sLWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA0OCk7XG4gIC1vLWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA0OCk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA0OCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiN0b3AtY29udGVudCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1raHRtbC1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW8tYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDE1cHggMCAwIDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jbmF2IGxpIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMDtcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIGJhY2tncm91bmQ6ICNlYWU4ZTU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XG4gIC1raHRtbC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xufVxuXG4ubmF2aWdhdGlvbiAjbmF2IGxpIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmRlbW8xLm5hdmlnYXRpb24gI21vYmlsZUJvZHlDb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gIC1raHRtbC10cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICBtYXJnaW4tbGVmdDogMjYwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/header/top-header-slide/top-header-slide.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/layout/header/top-header-slide/top-header-slide.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mimi-main {\n  position: fixed;\n  z-index: 500;\n  width: 100%;\n  top: 0px;\n}\n\n.mobile-univ-eni {\n  display: none;\n}\n\n.top-content {\n  display: flex;\n  flex-direction: column;\n  height: 170px;\n  background: transparent;\n}\n\n.flag-mobile {\n  display: none;\n}\n\n.first-content {\n  padding-top: 10px;\n  display: flex;\n  flex-direction: row;\n  height: 120px;\n  background-color: #0c2d50d9;\n  justify-content: space-between;\n  text-align: center;\n}\n\n.second-content {\n  max-width: 100%;\n  display: flex;\n  flex-direction: row;\n  height: 50px;\n  background-color: #002247ef;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.second-content .my-menu:last-child {\n  border-right: none !important;\n}\n\n.second-content .my-menu {\n  border-right: 3px solid #0c2d50;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  transition: all 0.3s;\n  white-space: nowrap;\n}\n\n.second-content .my-menu:hover {\n  background-color: #117abe;\n}\n\n.second-content .my-menu a {\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0px;\n  font-size: 14px;\n}\n\n.second-content .my-menu a:hover {\n  text-decoration: none;\n}\n\n.content-logo {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  color: white;\n}\n\n@media screen and (max-width: 920px) {\n  .content-logo-uf {\n    top: 5px;\n    left: 5px;\n  }\n\n  #warped,\n#warped1 {\n    display: none !important;\n  }\n\n  #flags {\n    margin-right: 10px;\n  }\n}\n\n.content-action-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-top: 35px;\n  padding-right: 0px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  right: 20px;\n}\n\n.content-action-header .menu-action .p {\n  color: white;\n  margin-right: 30px;\n  cursor: pointer;\n  letter-spacing: 1px;\n  padding: 10px;\n  font-weight: normal;\n  letter-spacing: 1px;\n  width: 160px;\n  border-radius: 10px;\n}\n\n#flags {\n  width: 30px;\n  height: 30px;\n}\n\n.content-action-header .menu-action .p #img-profile {\n  height: 22px;\n  width: 22px;\n  margin-right: 0px;\n}\n\n.content-action-header .menu-action .p span {\n  position: relative;\n  top: 3px;\n  left: 5px;\n}\n\n.content-logo-uf {\n  position: absolute;\n  top: 10px;\n  left: 15px;\n  cursor: pointer;\n}\n\n#logo-uf {\n  height: 90px;\n}\n\n#logo-eni {\n  height: 100px;\n}\n\n.my-menu-2 {\n  display: none;\n  padding: 7px;\n  margin: 0px;\n  height: 50px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n\n.my-menu-2 .bar {\n  margin-top: 8px;\n  margin-bottom: 8px;\n  width: 30px;\n  height: 3px;\n  background-color: white;\n}\n\n.univ-fianar {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: 5px;\n}\n\n.univ-fianar #uf {\n  height: 30px;\n}\n\n.univ-fianar p {\n  margin-left: 20px;\n  margin-right: 20px;\n  font-size: 20px;\n  font-variant: petite-caps;\n}\n\n.univ-eni {\n  font-size: 30px;\n  letter-spacing: 3px;\n  word-spacing: 10px;\n  font-variant: petite-caps;\n  font-weight: 500;\n  color: #ffffff;\n}\n\n@media screen and (max-width: 1100px) {\n  .content-action-header .menu-action .p span {\n    display: none;\n  }\n\n  .content-action-header .menu-action .p {\n    margin-right: 30px;\n    padding: 8px;\n    font-weight: normal;\n    letter-spacing: 1px;\n    width: 70px;\n  }\n}\n\n@media screen and (max-width: 650px) {\n  .univ-eni {\n    font-size: 25px;\n    letter-spacing: 0px;\n    word-spacing: 5px;\n    font-variant: petite-caps;\n  }\n}\n\n@media screen and (max-width: 540px) {\n  .univ-fianar p {\n    margin-left: 10px;\n    margin-right: 10px;\n    font-size: 15px;\n    font-variant: petite-caps;\n  }\n\n  .univ-fianar #uf {\n    height: 25px;\n  }\n}\n\n@media (max-width: 950px) and (min-width: 800px) {\n  .content-action-header {\n    right: 0px;\n  }\n\n  .menu-action:first-child {\n    margin-right: -15px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .content-logo-uf {\n    position: absolute;\n    top: 10px;\n    left: 0px;\n    right: 0px;\n    cursor: pointer;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  #logo-uf {\n    padding-left: 5px;\n  }\n\n  .content-action-header .menu-action .p {\n    display: none;\n  }\n\n  #flags {\n    margin-top: 0%;\n    width: 50px;\n    height: 50px;\n    padding: 6px;\n    cursor: pointer;\n  }\n\n  .second-content {\n    justify-content: flex-end;\n  }\n\n  .my-menu-2 {\n    display: block;\n  }\n\n  .flag-mobile {\n    display: block;\n  }\n\n  .menu-action {\n    display: none;\n  }\n\n  .my-menu {\n    display: none !important;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .univ-eni {\n    display: none;\n  }\n\n  .mobile-univ-eni {\n    display: block;\n    font-size: 15px;\n    letter-spacing: 3px;\n    word-spacing: 10px;\n    font-variant: petite-caps;\n    font-weight: 500;\n    color: #ffffff;\n    line-height: 8px;\n  }\n}\n\n@media screen and (max-width: 380px) {\n  img#logo-uf {\n    height: 50px;\n  }\n\n  img#logo-eni {\n    height: 60px;\n  }\n\n  #warped1,\n#warped2 {\n    display: none !important;\n  }\n\n  .content-logo-uf {\n    position: absolute;\n    top: 3px;\n  }\n\n  .top-content {\n    height: 150px;\n  }\n\n  .first-content {\n    height: 100px;\n  }\n}\n\n@media screen and (max-width: 310px) {\n  img#logo-uf {\n    height: 30px;\n  }\n\n  img#logo-eni {\n    height: 40px;\n  }\n}\n\n#external-content {\n  display: none;\n  transition: all 0.3s;\n}\n\n#menu-colapse {\n  border-radius: 8px;\n  padding: 10px;\n}\n\nli#login-mobile {\n  background: #002247 !important;\n  height: 60px !important;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\nli#login-mobile span {\n  font-weight: normal;\n  position: relative;\n  top: 3px;\n  font-size: 20px;\n  color: white;\n}\n\nimg#img-profile-mobile {\n  height: 25px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyLXNsaWRlL3RvcC1oZWFkZXItc2xpZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9oZWFkZXIvdG9wLWhlYWRlci1zbGlkZS90b3AtaGVhZGVyLXNsaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSw2QkFBQTtBQ0hGOztBRE1BO0VBQ0UsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSx5QkFBQTtBQ0hGOztBRE1BO0VBQ0UsWUFqRVk7RUFrRVosa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUF2Rlk7QUNvRmQ7O0FETUE7RUFDRTtJQUNFLFFBQUE7SUFDQSxTQUFBO0VDSEY7O0VETUE7O0lBRUUsd0JBQUE7RUNIRjs7RURNQTtJQUNFLGtCQUFBO0VDSEY7QUFDRjs7QURNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNKRjs7QURPQTtFQUNFLFlBekhZO0VBMEhaLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7O0FET0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE9BO0VBQ0UsWUFBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFsTFk7QUM4S2Q7O0FET0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxZQUFBO0FDSkY7O0FET0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSkY7O0FET0E7RUFDRTtJQUNFLGFBQUE7RUNKRjs7RURPQTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VDSkY7QUFDRjs7QURPQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtFQ0xGO0FBQ0Y7O0FEUUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7RUNORjs7RURTQTtJQUNFLFlBQUE7RUNORjtBQUNGOztBRFNBO0VBQ0U7SUFDRSxVQUFBO0VDUEY7O0VEVUE7SUFDRSxtQkFBQTtFQ1BGO0FBQ0Y7O0FEVUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtFQ1JGOztFRFdBO0lBQ0UsaUJBQUE7RUNSRjs7RURXQTtJQUNFLGFBQUE7RUNSRjs7RURXQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDUkY7O0VEV0E7SUFDRSx5QkFBQTtFQ1JGOztFRFdBO0lBQ0UsY0FBQTtFQ1JGOztFRFdBO0lBQ0UsY0FBQTtFQ1JGOztFRFdBO0lBQ0UsYUFBQTtFQ1JGOztFRFdBO0lBQ0Usd0JBQUE7RUNSRjtBQUNGOztBRFdBO0VBQ0U7SUFDRSxhQUFBO0VDVEY7O0VEWUE7SUFDRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDVEY7QUFDRjs7QURZQTtFQUNFO0lBQ0UsWUFBQTtFQ1ZGOztFRGFBO0lBQ0UsWUFBQTtFQ1ZGOztFRGFBOztJQUVFLHdCQUFBO0VDVkY7O0VEYUE7SUFDRSxrQkFBQTtJQUNBLFFBQUE7RUNWRjs7RURhQTtJQUNFLGFBQUE7RUNWRjs7RURhQTtJQUNFLGFBQUE7RUNWRjtBQUNGOztBRGFBO0VBQ0U7SUFDRSxZQUFBO0VDWEY7O0VEY0E7SUFDRSxZQUFBO0VDWEY7QUFDRjs7QURjQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQ1pGOztBRGVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDWkY7O0FEZUE7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1pGOztBRGVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFqWVk7QUNxWGQ7O0FEZUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNaRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvdG9wLWhlYWRlci1zbGlkZS90b3AtaGVhZGVyLXNsaWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpcnN0LWNvbG9yOiAjMGMyZDUwO1xuJHNlY29uZC1jb2xvcjogIzAwMjI0NztcbiRjb2xvci13aGl0ZTogd2hpdGU7XG5cbiNtaW1pLW1haW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMHB4O1xufVxuXG4ubW9iaWxlLXVuaXYtZW5pIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvcC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5mbGFnLW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5maXJzdC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzJkNTBkOTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWNvbmQtY29udGVudCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMjQ3ZWY7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY29uZC1jb250ZW50IC5teS1tZW51Omxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNlY29uZC1jb250ZW50IC5teS1tZW51IHtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGZpcnN0LWNvbG9yO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnNlY29uZC1jb250ZW50IC5teS1tZW51OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExN2FiZTtcbn1cblxuLnNlY29uZC1jb250ZW50IC5teS1tZW51IGEge1xuICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc2Vjb25kLWNvbnRlbnQgLm15LW1lbnUgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRlbnQtbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gIC5jb250ZW50LWxvZ28tdWYge1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgfVxuXG4gICN3YXJwZWQsXG4gICN3YXJwZWQxIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjZmxhZ3Mge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuXG4uY29udGVudC1hY3Rpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcGFkZGluZy10b3A6IDM1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xufVxuXG4uY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCB7XG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNmbGFncyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wICNpbWctcHJvZmlsZSB7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogNXB4O1xufVxuXG4uY29udGVudC1sb2dvLXVmIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2xvZ28tdWYge1xuICBoZWlnaHQ6IDkwcHg7XG59XG5cbiNsb2dvLWVuaSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5teS1tZW51LTIge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiA3cHg7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5teS1tZW51LTIgLmJhciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbn1cblxuLnVuaXYtZmlhbmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnVuaXYtZmlhbmFyICN1ZiB7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnVuaXYtZmlhbmFyIHAge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtdmFyaWFudDogcGV0aXRlLWNhcHM7XG59XG5cbi51bml2LWVuaSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgd29yZC1zcGFjaW5nOiAxMHB4O1xuICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLnVuaXYtZW5pIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICB3b3JkLXNwYWNpbmc6IDVweDtcbiAgICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIC51bml2LWZpYW5hciBwIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtdmFyaWFudDogcGV0aXRlLWNhcHM7XG4gIH1cblxuICAudW5pdi1maWFuYXIgI3VmIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRlbnQtYWN0aW9uLWhlYWRlciB7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxuXG4gIC5tZW51LWFjdGlvbjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGVudC1sb2dvLXVmIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgI2xvZ28tdWYge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG5cbiAgLmNvbnRlbnQtYWN0aW9uLWhlYWRlciAubWVudS1hY3Rpb24gLnAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjZmxhZ3Mge1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnNlY29uZC1jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgLm15LW1lbnUtMiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZmxhZy1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLm1lbnUtYWN0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm15LW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAudW5pdi1lbmkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLXVuaXYtZW5pIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICB3b3JkLXNwYWNpbmc6IDEwcHg7XG4gICAgZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGxpbmUtaGVpZ2h0OiA4cHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgaW1nI2xvZ28tdWYge1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuXG4gIGltZyNsb2dvLWVuaSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG5cbiAgI3dhcnBlZDEsXG4gICN3YXJwZWQyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29udGVudC1sb2dvLXVmIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gIH1cblxuICAudG9wLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cblxuICAuZmlyc3QtY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMTBweCkge1xuICBpbWcjbG9nby11ZiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG5cbiAgaW1nI2xvZ28tZW5pIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbn1cblxuI2V4dGVybmFsLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuI21lbnUtY29sYXBzZSB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxubGkjbG9naW4tbW9iaWxlIHtcbiAgYmFja2dyb3VuZDogJHNlY29uZC1jb2xvciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxubGkjbG9naW4tbW9iaWxlIHNwYW4ge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XG59XG5cbmltZyNpbWctcHJvZmlsZS1tb2JpbGUge1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiIsIiNtaW1pLW1haW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMHB4O1xufVxuXG4ubW9iaWxlLXVuaXYtZW5pIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvcC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5mbGFnLW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5maXJzdC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzJkNTBkOTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWNvbmQtY29udGVudCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMjQ3ZWY7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY29uZC1jb250ZW50IC5teS1tZW51Omxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNlY29uZC1jb250ZW50IC5teS1tZW51IHtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzBjMmQ1MDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zZWNvbmQtY29udGVudCAubXktbWVudTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTdhYmU7XG59XG5cbi5zZWNvbmQtY29udGVudCAubXktbWVudSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc2Vjb25kLWNvbnRlbnQgLm15LW1lbnUgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRlbnQtbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgLmNvbnRlbnQtbG9nby11ZiB7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICB9XG5cbiAgI3dhcnBlZCxcbiN3YXJwZWQxIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjZmxhZ3Mge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuLmNvbnRlbnQtYWN0aW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbn1cblxuLmNvbnRlbnQtYWN0aW9uLWhlYWRlciAubWVudS1hY3Rpb24gLnAge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNmbGFncyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wICNpbWctcHJvZmlsZSB7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogNXB4O1xufVxuXG4uY29udGVudC1sb2dvLXVmIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2xvZ28tdWYge1xuICBoZWlnaHQ6IDkwcHg7XG59XG5cbiNsb2dvLWVuaSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5teS1tZW51LTIge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiA3cHg7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5teS1tZW51LTIgLmJhciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udW5pdi1maWFuYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udW5pdi1maWFuYXIgI3VmIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4udW5pdi1maWFuYXIgcCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC12YXJpYW50OiBwZXRpdGUtY2Fwcztcbn1cblxuLnVuaXYtZW5pIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICB3b3JkLXNwYWNpbmc6IDEwcHg7XG4gIGZvbnQtdmFyaWFudDogcGV0aXRlLWNhcHM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLmNvbnRlbnQtYWN0aW9uLWhlYWRlciAubWVudS1hY3Rpb24gLnAgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB3aWR0aDogNzBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLnVuaXYtZW5pIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICB3b3JkLXNwYWNpbmc6IDVweDtcbiAgICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xuICAudW5pdi1maWFuYXIgcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xuICB9XG5cbiAgLnVuaXYtZmlhbmFyICN1ZiB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAuY29udGVudC1hY3Rpb24taGVhZGVyIHtcbiAgICByaWdodDogMHB4O1xuICB9XG5cbiAgLm1lbnUtYWN0aW9uOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGVudC1sb2dvLXVmIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgI2xvZ28tdWYge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG5cbiAgLmNvbnRlbnQtYWN0aW9uLWhlYWRlciAubWVudS1hY3Rpb24gLnAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjZmxhZ3Mge1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnNlY29uZC1jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgLm15LW1lbnUtMiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZmxhZy1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLm1lbnUtYWN0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm15LW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLnVuaXYtZW5pIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1vYmlsZS11bml2LWVuaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgd29yZC1zcGFjaW5nOiAxMHB4O1xuICAgIGZvbnQtdmFyaWFudDogcGV0aXRlLWNhcHM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBsaW5lLWhlaWdodDogOHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xuICBpbWcjbG9nby11ZiB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG5cbiAgaW1nI2xvZ28tZW5pIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cblxuICAjd2FycGVkMSxcbiN3YXJwZWQyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29udGVudC1sb2dvLXVmIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gIH1cblxuICAudG9wLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cblxuICAuZmlyc3QtY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzEwcHgpIHtcbiAgaW1nI2xvZ28tdWYge1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuXG4gIGltZyNsb2dvLWVuaSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG4jZXh0ZXJuYWwtY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4jbWVudS1jb2xhcHNlIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5saSNsb2dpbi1tb2JpbGUge1xuICBiYWNrZ3JvdW5kOiAjMDAyMjQ3ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5saSNsb2dpbi1tb2JpbGUgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbWcjaW1nLXByb2ZpbGUtbW9iaWxlIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("#mobile-main {\n  height: 100vh;\n  width: 40vh;\n  background: #0c2d50;\n  position: absolute;\n  z-index: 400;\n  margin: 0px;\n  -o-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n#top-content {\n  -o-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n#nav {\n  position: absolute;\n  z-index: 10;\n  list-style-type: none;\n  margin: 15px 0 0 20px;\n  padding: 0;\n  overflow: hidden;\n}\n\n#nav li {\n  height: 35px;\n  width: 0;\n  margin: 30px 0;\n  background: #eae8e5;\n  font-weight: 500;\n  padding: 5px;\n  transition: all 0.4s ease-in;\n}\n\n.navigation #nav li {\n  width: 200px;\n  margin-left: 0;\n}\n\n.demo2.navigation #mobileBodyContent {\n  -khtml-transform: scale(0.85);\n  transform: scale(0.85);\n  margin-left: 260px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyL3RtcC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvaGVhZGVyL3RvcC1oZWFkZXIvdG1wLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFsQ0Esa0RBbUNvQjtFQWxDcEIsK0NBa0NvQjtFQUNwQixnQkFBQTtBQzNDRjs7QUQ2Q0E7RUF0Q0Usa0RBdUNvQjtFQXRDcEIsK0NBc0NvQjtFQUNwQixnQkFBQTtBQ3RDRjs7QUR5Q0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDdENGOztBRHVDRTtFQUNFLFlBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBdkVGLDRCQXdFc0I7QUNqQ3hCOztBRCtDRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDNUNKOztBRGlERTtFQXZGQSw2QkFBQTtFQUVBLHNCQUFBO0VBdUZFLGtCQUFBO0FDMUNKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyL3RtcC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHRyYW5zaXRpb24oJHBhcmFtcykge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRwYXJhbXM7XG4gIC1tb3otdHJhbnNpdGlvbjogJHBhcmFtcztcbiAgLWtodG1sLXRyYW5zaXRpb246ICRwYXJhbXM7XG4gIC1vLXRyYW5zaXRpb246ICRwYXJhbXM7XG4gIHRyYW5zaXRpb246ICRwYXJhbXM7XG59XG5cbkBtaXhpbiBzY2FsZSgkcGFyYW1zKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkcGFyYW1zKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKCRwYXJhbXMpO1xuICAta2h0bWwtdHJhbnNmb3JtOiBzY2FsZSgkcGFyYW1zKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkcGFyYW1zKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgkcGFyYW1zKTtcbn1cblxuQG1peGluIGJveC1zaGFkb3coJHBhcmFtcykge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRwYXJhbXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHBhcmFtcztcbiAgLWtodG1sLWJveC1zaGFkb3c6ICRwYXJhbXM7XG4gIC1vLWJveC1zaGFkb3c6ICRwYXJhbXM7XG4gIGJveC1zaGFkb3c6ICRwYXJhbXM7XG59XG5cbkBtaXhpbiByb3RhdGUoJHBhcmFtcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRwYXJhbXMpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRwYXJhbXMpO1xuICAta2h0bWwtdHJhbnNmb3JtOiByb3RhdGUoJHBhcmFtcyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKCRwYXJhbXMpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgkcGFyYW1zKTtcbn1cblxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkb3BhY2l0eTtcbiAgLW1vei1vcGFjaXR5OiAkb3BhY2l0eTtcbiAgLWtodG1sLW9wYWNpdHk6ICRvcGFjaXR5O1xuICAtby1vcGFjaXR5OiAkb3BhY2l0eTtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG59XG5cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gIC1raHRtbC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAtby1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xufVxuXG4jbW9iaWxlLW1haW4ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogNDB2aDtcbiAgYmFja2dyb3VuZDogIzBjMmQ1MDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA0MDA7XG4gIG1hcmdpbjogMHB4O1xuICBAaW5jbHVkZSBib3gtc2hhZG93KDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiN0b3AtY29udGVudCB7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDE1cHggMCAwIDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxpIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDA7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgYmFja2dyb3VuZDogI2VhZThlNTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjRzIGVhc2UtaW4pO1xuICAgIC8vICYgKyBsaSB7XG4gICAgLy8gICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvLyAgICYgKyBsaSB7XG4gICAgLy8gICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIC8vICAgICAmICsgbGkge1xuICAgIC8vICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgI25hdiBsaSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5cbi5kZW1vMi5uYXZpZ2F0aW9uIHtcbiAgI21vYmlsZUJvZHlDb250ZW50IHtcbiAgICBAaW5jbHVkZSBzY2FsZSgwLjg1KTtcbiAgICBtYXJnaW4tbGVmdDogMjYwcHg7XG4gIH1cbn1cbiIsIiNtb2JpbGUtbWFpbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiA0MHZoO1xuICBiYWNrZ3JvdW5kOiAjMGMyZDUwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQwMDtcbiAgbWFyZ2luOiAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1raHRtbC1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW8tYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jdG9wLWNvbnRlbnQge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAta2h0bWwtYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1vLWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI25hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAxNXB4IDAgMCAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI25hdiBsaSB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDA7XG4gIG1hcmdpbjogMzBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZWFlOGU1O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xuICAta2h0bWwtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcbn1cblxuLm5hdmlnYXRpb24gI25hdiBsaSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5kZW1vMi5uYXZpZ2F0aW9uICNtb2JpbGVCb2R5Q29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICAta2h0bWwtdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcbiAgbWFyZ2luLWxlZnQ6IDI2MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/header/top-header/top-header.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/layout/header/top-header/top-header.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-content {\n  display: flex;\n  flex-direction: column;\n  height: 220px;\n  background: transparent;\n}\n\n.flag-mobile {\n  display: none;\n}\n\n.first-content {\n  padding-top: 10px;\n  display: flex;\n  flex-direction: row;\n  height: 170px;\n  background-color: #0c2d50;\n  justify-content: space-between;\n  text-align: center;\n}\n\n.second-content {\n  max-width: 100%;\n  display: flex;\n  flex-direction: row;\n  height: 50px;\n  background-color: #002247;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.second-content .my-menu:last-child {\n  border-right: none !important;\n}\n\n.second-content .my-menu {\n  border-right: 3px solid #0c2d50;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  transition: all 0.3s;\n  white-space: nowrap;\n}\n\n.second-content .my-menu:hover {\n  background-color: #117abe;\n}\n\n.second-content .my-menu a {\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0px;\n  font-size: 14px;\n}\n\n.second-content .my-menu a:hover {\n  text-decoration: none;\n}\n\n.content-logo {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  color: white;\n}\n\n#logo-eni {\n  width: 150px;\n}\n\n@media screen and (max-width: 920px) {\n  .content-logo-uf {\n    top: 5px;\n    left: 5px;\n  }\n\n  #logo-eni {\n    width: 70px;\n  }\n\n  #warped,\n#warped1 {\n    display: none !important;\n  }\n\n  #flags {\n    margin-right: 10px;\n  }\n}\n\n.content-action-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  text-align: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-top: 3%;\n  padding-right: 0px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  right: 20px;\n  align-items: center;\n}\n\n.content-action-header .menu-action .p {\n  color: white;\n  margin-right: 30px;\n  cursor: pointer;\n  letter-spacing: 1px;\n  padding: 10px;\n  font-weight: normal;\n  letter-spacing: 1px;\n  width: 160px;\n  border-radius: 10px;\n}\n\n#flags {\n  width: 30px;\n  height: 30px;\n}\n\n.content-action-header .menu-action .p #img-profile {\n  height: 22px;\n  width: 22px;\n  margin-right: 0px;\n}\n\n.content-action-header .menu-action .p span {\n  position: relative;\n  top: 3px;\n  left: 5px;\n}\n\n.content-logo-uf {\n  position: absolute;\n  top: 10px;\n  left: 15px;\n  cursor: pointer;\n}\n\n.my-menu-2 {\n  display: none;\n  padding: 7px;\n  margin: 0px;\n  height: 50px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n\n.my-menu-2 .bar {\n  margin-top: 8px;\n  margin-bottom: 8px;\n  width: 30px;\n  height: 3px;\n  background-color: white;\n}\n\n.univ-fianar {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: 5px;\n}\n\n.univ-fianar #uf {\n  height: 30px;\n}\n\n.univ-fianar p {\n  margin-left: 20px;\n  margin-right: 20px;\n  font-size: 30px;\n  font-variant: petite-caps;\n}\n\n.univ-eni {\n  font-size: 30px;\n  letter-spacing: 1px;\n  word-spacing: 5px;\n  text-transform: uppercase;\n  font-weight: 500;\n  color: #ffffff;\n}\n\n@media screen and (max-width: 1100px) {\n  .content-action-header .menu-action .p span {\n    display: none;\n  }\n\n  .content-action-header .menu-action .p {\n    margin-right: 30px;\n    padding: 8px;\n    font-weight: normal;\n    letter-spacing: 1px;\n    width: 70px;\n  }\n}\n\n@media screen and (max-width: 650px) {\n  .univ-eni {\n    font-size: 25px;\n    letter-spacing: 0px;\n    word-spacing: 5px;\n    font-variant: petite-caps;\n  }\n}\n\n@media screen and (max-width: 540px) {\n  .univ-fianar p {\n    margin-left: 10px;\n    margin-right: 10px;\n    font-size: 15px;\n    font-variant: petite-caps;\n  }\n\n  .univ-fianar #uf {\n    height: 25px;\n  }\n}\n\n@media (max-width: 950px) and (min-width: 800px) {\n  .content-action-header {\n    right: 0px;\n  }\n\n  .menu-action:first-child {\n    margin-right: -15px;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .content-action-header .menu-action .p {\n    display: none;\n  }\n\n  #flags {\n    margin-top: 0%;\n    width: 50px;\n    height: 50px;\n    padding: 6px;\n    cursor: pointer;\n  }\n\n  .second-content {\n    justify-content: flex-end;\n  }\n\n  .my-menu-2 {\n    display: block;\n  }\n\n  .flag-mobile {\n    display: block;\n  }\n\n  .menu-action {\n    display: none;\n  }\n\n  .my-menu {\n    display: none !important;\n  }\n}\n\n@media screen and (max-width: 380px) {\n  img#logo-uf {\n    left: 5px !important;\n    height: 55px !important;\n    position: absolute;\n    width: 50px;\n  }\n\n  #warped1,\n#warped2 {\n    display: none !important;\n  }\n\n  .content-logo-uf {\n    position: absolute;\n    top: 25px;\n    left: -10px;\n  }\n}\n\n@media screen and (max-width: 310px) {\n  img#logo-eni {\n    position: absolute;\n    width: 60px;\n    left: 10px;\n    top: 85px;\n  }\n}\n\n#external-content-main {\n  display: none;\n  transition: all 0.3s;\n}\n\nli#login-mobile {\n  background: #002247 !important;\n  height: 60px !important;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n#menu-colapse {\n  border-radius: 8px;\n  padding: 10px;\n}\n\nli#login-mobile span {\n  font-weight: normal;\n  position: relative;\n  top: 3px;\n  font-size: 20px;\n  color: white;\n}\n\nimg#img-profile-mobile {\n  height: 25px;\n  margin-right: 10px;\n}\n\n#warped1 {\n  position: absolute;\n  display: block;\n  width: 184px;\n  height: 167px;\n  color: white;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -moz-user-select: none;\n}\n\n#warped1 > span[class^=w]:nth-of-type(n + 0) {\n  display: block;\n  position: absolute;\n  transform-origin: 50% 100%;\n}\n\n#warped1 span {\n  font-family: \"ABeeZee\";\n  font-size: 12px;\n  font-weight: regular;\n  font-style: normal;\n  line-height: 3.3;\n  white-space: pre;\n  overflow: visible;\n  padding: 0px;\n}\n\n#warped1 .w0 {\n  transform: rotate(4.11rad);\n  width: 7px;\n  height: 39px;\n  left: 26.37px;\n  top: 91.02px;\n}\n\n#warped1 .w1 {\n  transform: rotate(4.34rad);\n  width: 6px;\n  height: 39px;\n  left: 18.31px;\n  top: 74.67px;\n}\n\n#warped1 .w2 {\n  transform: rotate(4.56rad);\n  width: 5px;\n  height: 39px;\n  left: 14.37px;\n  top: 57.78px;\n}\n\n#warped1 .w3 {\n  transform: rotate(4.77rad);\n  width: 5px;\n  height: 39px;\n  left: 13.66px;\n  top: 40.83px;\n}\n\n#warped1 .w4 {\n  transform: rotate(5.01rad);\n  width: 9px;\n  height: 39px;\n  left: 15.12px;\n  top: 22.19px;\n}\n\n#warped1 .w5 {\n  transform: rotate(5.25rad);\n  width: 6px;\n  height: 39px;\n  left: 24.62px;\n  top: 4.46px;\n}\n\n#warped1 .w6 {\n  transform: rotate(5.46rad);\n  width: 3px;\n  height: 39px;\n  left: 36.08px;\n  top: -8.66px;\n}\n\n#warped1 .w7 {\n  transform: rotate(5.66rad);\n  width: 5px;\n  height: 39px;\n  left: 47.1px;\n  top: -19.18px;\n}\n\n#warped {\n  position: absolute;\n  top: 0px;\n  margin-left: -22px;\n  display: block;\n  width: 184px;\n  height: 167px;\n  color: white;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -moz-user-select: none;\n}\n\n#warped > span[class^=w]:nth-of-type(n + 0) {\n  display: block;\n  position: absolute;\n  transform-origin: 50% 100%;\n}\n\n#warped span {\n  font-family: \"ABeeZee\";\n  font-size: 12px;\n  font-weight: regular;\n  font-style: normal;\n  line-height: 2.45;\n  white-space: pre;\n  overflow: visible;\n  padding: 0px;\n}\n\n#warped .w0 {\n  transform: rotate(6.86rad);\n  width: 7px;\n  height: 29px;\n  left: 122.43px;\n  top: -12.86px;\n}\n\n#warped .w1 {\n  transform: rotate(7.07rad);\n  width: 6px;\n  height: 29px;\n  left: 135.69px;\n  top: -2.45px;\n}\n\n#warped .w2 {\n  transform: rotate(7.26rad);\n  width: 5px;\n  height: 29px;\n  left: 146px;\n  top: 9.52px;\n}\n\n#warped .w3 {\n  transform: rotate(7.45rad);\n  width: 5px;\n  height: 29px;\n  left: 153.12px;\n  top: 22.7px;\n}\n\n#warped .w4 {\n  transform: rotate(7.62rad);\n  width: 3px;\n  height: 29px;\n  left: 158.44px;\n  top: 36px;\n}\n\n#warped .w5 {\n  transform: rotate(7.78rad);\n  width: 3px;\n  height: 29px;\n  left: 160.33px;\n  top: 48.84px;\n}\n\n#warped .w6 {\n  transform: rotate(7.96rad);\n  width: 5px;\n  height: 29px;\n  left: 159.01px;\n  top: 62.82px;\n}\n\n#warped .w7 {\n  transform: rotate(8.15rad);\n  width: 6px;\n  height: 29px;\n  left: 155.32px;\n  top: 77.97px;\n}\n\n#warped .w8 {\n  transform: rotate(8.35rad);\n  width: 5px;\n  height: 29px;\n  left: 149.78px;\n  top: 92.21px;\n}\n\n#warped .w9 {\n  transform: rotate(8.53rad);\n  width: 5px;\n  height: 29px;\n  left: 141.42px;\n  top: 104.64px;\n}\n\n#warped .w10 {\n  transform: rotate(7.93rad);\n  width: 5px;\n  height: 25px;\n  left: 159.2px;\n  top: 64.83px;\n}\n\n#warped .w11 {\n  transform: rotate(8.05rad);\n  width: 3px;\n  height: 25px;\n  left: 158.93px;\n  top: 73.74px;\n}\n\n#warped .w12 {\n  transform: rotate(8.15rad);\n  width: 3px;\n  height: 25px;\n  left: 156.97px;\n  top: 81.49px;\n}\n\n#warped .w13 {\n  transform: rotate(8.26rad);\n  width: 5px;\n  height: 25px;\n  left: 152.85px;\n  top: 89.93px;\n}\n\n#warped .w14 {\n  transform: rotate(8.39rad);\n  width: 6px;\n  height: 25px;\n  left: 147.54px;\n  top: 99.25px;\n}\n\n#warped .w15 {\n  transform: rotate(8.52rad);\n  width: 5px;\n  height: 25px;\n  left: 142.05px;\n  top: 107.87px;\n}\n\n#warped .w16 {\n  transform: rotate(8.65rad);\n  width: 5px;\n  height: 25px;\n  left: 135.34px;\n  top: 115.28px;\n}\n\n@media screen and (max-width: 670px) {\n  .univ-fianar p {\n    margin-left: 20px;\n    margin-right: 20px;\n    font-size: 20px;\n    font-variant: petite-caps;\n  }\n\n  .univ-eni {\n    font-size: 24px;\n    letter-spacing: 1px;\n    word-spacing: 5px;\n    text-transform: uppercase;\n    font-weight: 500;\n    color: #ffffff;\n  }\n}\n\n@media screen and (max-width: 560px) {\n  #logo-eni {\n    position: absolute;\n    width: 60px;\n    top: -9px;\n    left: -15px;\n  }\n}\n\n@media screen and (max-width: 450px) {\n  #logo-eni {\n    position: absolute;\n    width: 60px;\n    top: 100px;\n    left: -15px;\n  }\n}\n\n@media screen and (max-width: 380px) {\n  .univ-fianar {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin-bottom: 5px;\n    margin-top: -10px;\n  }\n\n  img#logo-eni {\n    position: absolute;\n    width: 46px;\n    left: 12px;\n    top: 97px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyL3RvcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9oZWFkZXIvdG9wLWhlYWRlci90b3AtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFwQlk7RUFxQlosOEJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkE3QmE7RUE4QmIsOEJBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsNkJBQUE7QUNIRjs7QURNQTtFQUNFLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UseUJBQUE7QUNIRjs7QURNQTtFQUNFLFlBdERZO0VBdURaLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBNUVZO0FDeUVkOztBRE1BO0VBRUUsWUFBQTtBQ0pGOztBRE1BO0VBQ0U7SUFDRSxRQUFBO0lBQ0EsU0FBQTtFQ0hGOztFRE1BO0lBQ0UsV0FBQTtFQ0hGOztFRE1BOztJQUVFLHdCQUFBO0VDSEY7O0VETUE7SUFDRSxrQkFBQTtFQ0hGO0FBQ0Y7O0FETUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLFlBdEhZO0VBdUhaLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7O0FET0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkF2S1k7QUNtS2Q7O0FET0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxZQUFBO0FDSkY7O0FET0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDSkY7O0FET0E7RUFLRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDUkY7O0FEV0E7RUFDRTtJQUNFLGFBQUE7RUNSRjs7RURXQTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VDUkY7QUFDRjs7QURXQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtFQ1RGO0FBQ0Y7O0FEWUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7RUNWRjs7RURhQTtJQUNFLFlBQUE7RUNWRjtBQUNGOztBRGFBO0VBQ0U7SUFDRSxVQUFBO0VDWEY7O0VEY0E7SUFDRSxtQkFBQTtFQ1hGO0FBQ0Y7O0FEY0E7RUFLRTtJQUNFLGFBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUNoQkY7O0VEbUJBO0lBQ0UseUJBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsY0FBQTtFQ2hCRjs7RURtQkE7SUFDRSxjQUFBO0VDaEJGOztFRG1CQTtJQUNFLGFBQUE7RUNoQkY7O0VEbUJBO0lBQ0Usd0JBQUE7RUNoQkY7QUFDRjs7QURtQkE7RUFDRTtJQUNFLG9CQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUNqQkY7O0VENkJBOztJQUVFLHdCQUFBO0VDMUJGOztFRDZCQTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUMxQkY7QUFDRjs7QUQ2QkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0VDM0JGO0FBQ0Y7O0FEOEJBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FDNUJGOztBRCtCQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDNUJGOztBRCtCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxZQTdWWTtBQ2lVZDs7QUQrQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUM1QkY7O0FEK0JBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0Esc0JBQUE7QUM1QkY7O0FEK0JBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBS0EsMEJBQUE7QUM1QkY7O0FEK0JBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQrQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxzQkFBQTtBQzVCRjs7QUQrQkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFLQSwwQkFBQTtBQzVCRjs7QUQrQkE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDNUJGOztBRCtCQTtFQUtFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQzVCRjs7QUQrQkE7RUFLRSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUM1QkY7O0FEK0JBO0VBS0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDNUJGOztBRGdDQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtFQzdCRjs7RURnQ0E7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VDN0JGO0FBQ0Y7O0FEaUNBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQy9CRjtBQUNGOztBRGtDQTtFQUNFO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7RUNoQ0o7QUFDRjs7QURtQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQ2pDRjs7RURvQ0Y7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQ2pDQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci90b3AtaGVhZGVyL3RvcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZmlyc3QtY29sb3I6ICMwYzJkNTA7XG4kc2Vjb25kLWNvbG9yOiAjMDAyMjQ3O1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcblxuLnRvcC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAyMjBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5mbGFnLW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5maXJzdC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRmaXJzdC1jb2xvcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWNvbmQtY29udGVudCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kLWNvbG9yO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWNvbmQtY29udGVudCAubXktbWVudTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zZWNvbmQtY29udGVudCAubXktbWVudSB7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRmaXJzdC1jb2xvcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zZWNvbmQtY29udGVudCAubXktbWVudTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTdhYmU7XG59XG5cbi5zZWNvbmQtY29udGVudCAubXktbWVudSBhIHtcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNlY29uZC1jb250ZW50IC5teS1tZW51IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250ZW50LWxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBjb2xvcjogJGNvbG9yLXdoaXRlO1xufVxuXG4jbG9nby1lbmkge1xuICAvLyBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxNTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gIC5jb250ZW50LWxvZ28tdWYge1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgfVxuXG4gICNsb2dvLWVuaSB7XG4gICAgd2lkdGg6IDcwcHg7XG4gIH1cblxuICAjd2FycGVkLFxuICAjd2FycGVkMSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2ZsYWdzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cblxuLmNvbnRlbnQtYWN0aW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wIHtcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2ZsYWdzIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmNvbnRlbnQtYWN0aW9uLWhlYWRlciAubWVudS1hY3Rpb24gLnAgI2ltZy1wcm9maWxlIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjJweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiA1cHg7XG59XG5cbi5jb250ZW50LWxvZ28tdWYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXktbWVudS0yIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogN3B4O1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXktbWVudS0yIC5iYXIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG59XG5cbi51bml2LWZpYW5hciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi51bml2LWZpYW5hciAjdWYge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi51bml2LWZpYW5hciBwIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xufVxuXG4udW5pdi1lbmkge1xuICAvLyBmb250LXNpemU6IDMwcHg7XG4gIC8vIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIC8vIHdvcmQtc3BhY2luZzogMTBweDtcbiAgLy8gZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB3b3JkLXNwYWNpbmc6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvbnRlbnQtYWN0aW9uLWhlYWRlciAubWVudS1hY3Rpb24gLnAge1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC51bml2LWVuaSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgd29yZC1zcGFjaW5nOiA1cHg7XG4gICAgZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xuICAudW5pdi1maWFuYXIgcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xuICB9XG5cbiAgLnVuaXYtZmlhbmFyICN1ZiB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkgYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5jb250ZW50LWFjdGlvbi1oZWFkZXIge1xuICAgIHJpZ2h0OiAwcHg7XG4gIH1cblxuICAubWVudS1hY3Rpb246Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRlbnQtYWN0aW9uLWhlYWRlciB7XG4gICAgLy9yaWdodDogMHB4O1xuICB9XG5cbiAgLmNvbnRlbnQtYWN0aW9uLWhlYWRlciAubWVudS1hY3Rpb24gLnAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjZmxhZ3Mge1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnNlY29uZC1jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgLm15LW1lbnUtMiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZmxhZy1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLm1lbnUtYWN0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm15LW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xuICBpbWcjbG9nby11ZiB7XG4gICAgbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1NXB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gIC8vIGltZyNsb2dvLWVuaSB7XG4gIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyAgIHdpZHRoOiA2MHB4O1xuICAvLyAgIGxlZnQ6IDEwcHg7XG4gIC8vICAgdG9wOiAtMjdweDtcbiAgLy8gfVxuICAvLyAjZmxhZ3Mge1xuICAvLyAgIG1hcmdpbi10b3A6IDg1JTtcbiAgLy8gfVxuXG4gICN3YXJwZWQxLFxuICAjd2FycGVkMiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbnRlbnQtbG9nby11ZiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjVweDtcbiAgICBsZWZ0OiAtMTBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMTBweCkge1xuICBpbWcjbG9nby1lbmkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjBweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRvcDogODVweDtcbiAgfVxufVxuXG4jZXh0ZXJuYWwtY29udGVudC1tYWluIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbmxpI2xvZ2luLW1vYmlsZSB7XG4gIGJhY2tncm91bmQ6ICRzZWNvbmQtY29sb3IgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNtZW51LWNvbGFwc2Uge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmxpI2xvZ2luLW1vYmlsZSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogJGNvbG9yLXdoaXRlO1xufVxuXG5pbWcjaW1nLXByb2ZpbGUtbW9iaWxlIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbiN3YXJwZWQxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE4NHB4O1xuICBoZWlnaHQ6IDE2N3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4jd2FycGVkMSA+IHNwYW5bY2xhc3NePVwid1wiXTpudGgtb2YtdHlwZShuICsgMCkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAtby10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbn1cblxuI3dhcnBlZDEgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkFCZWVaZWVcIjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogcmVndWxhcjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMy4zO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4jd2FycGVkMSAudzAge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQuMTFyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQuMTFyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0LjExcmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQuMTFyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0LjExcmFkKTtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiAzOXB4O1xuICBsZWZ0OiAyNi4zN3B4O1xuICB0b3A6IDkxLjAycHg7XG59XG5cbiN3YXJwZWQxIC53MSB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNC4zNHJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNC4zNHJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQuMzRyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNC4zNHJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQuMzRyYWQpO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDM5cHg7XG4gIGxlZnQ6IDE4LjMxcHg7XG4gIHRvcDogNzQuNjdweDtcbn1cblxuI3dhcnBlZDEgLncyIHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0LjU2cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0LjU2cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNC41NnJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0LjU2cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNC41NnJhZCk7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMzlweDtcbiAgbGVmdDogMTQuMzdweDtcbiAgdG9wOiA1Ny43OHB4O1xufVxuXG4jd2FycGVkMSAudzMge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQuNzdyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQuNzdyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0Ljc3cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQuNzdyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0Ljc3cmFkKTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAzOXB4O1xuICBsZWZ0OiAxMy42NnB4O1xuICB0b3A6IDQwLjgzcHg7XG59XG5cbiN3YXJwZWQxIC53NCB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNS4wMXJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNS4wMXJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDUuMDFyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNS4wMXJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDUuMDFyYWQpO1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDM5cHg7XG4gIGxlZnQ6IDE1LjEycHg7XG4gIHRvcDogMjIuMTlweDtcbn1cblxuI3dhcnBlZDEgLnc1IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg1LjI1cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1LjI1cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNS4yNXJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg1LjI1cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNS4yNXJhZCk7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMzlweDtcbiAgbGVmdDogMjQuNjJweDtcbiAgdG9wOiA0LjQ2cHg7XG59XG5cbiN3YXJwZWQxIC53NiB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNS40NnJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNS40NnJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDUuNDZyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNS40NnJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDUuNDZyYWQpO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDM5cHg7XG4gIGxlZnQ6IDM2LjA4cHg7XG4gIHRvcDogLTguNjZweDtcbn1cblxuI3dhcnBlZDEgLnc3IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg1LjY2cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1LjY2cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNS42NnJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg1LjY2cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNS42NnJhZCk7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMzlweDtcbiAgbGVmdDogNDcuMXB4O1xuICB0b3A6IC0xOS4xOHB4O1xufVxuXG4jd2FycGVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE4NHB4O1xuICBoZWlnaHQ6IDE2N3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4jd2FycGVkID4gc3BhbltjbGFzc149XCJ3XCJdOm50aC1vZi10eXBlKG4gKyAwKSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xufVxuXG4jd2FycGVkIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJBQmVlWmVlXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IHJlZ3VsYXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIuNDU7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiN3YXJwZWQgLncwIHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg2Ljg2cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2Ljg2cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNi44NnJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2Ljg2cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNi44NnJhZCk7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogMjlweDtcbiAgbGVmdDogMTIyLjQzcHg7XG4gIHRvcDogLTEyLjg2cHg7XG59XG5cbiN3YXJwZWQgLncxIHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3LjA3cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3LjA3cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNy4wN3JhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3LjA3cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNy4wN3JhZCk7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMjlweDtcbiAgbGVmdDogMTM1LjY5cHg7XG4gIHRvcDogLTIuNDVweDtcbn1cblxuI3dhcnBlZCAudzIge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDcuMjZyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcuMjZyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3LjI2cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDcuMjZyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3LjI2cmFkKTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBsZWZ0OiAxNDZweDtcbiAgdG9wOiA5LjUycHg7XG59XG5cbiN3YXJwZWQgLnczIHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3LjQ1cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3LjQ1cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNy40NXJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3LjQ1cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNy40NXJhZCk7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMjlweDtcbiAgbGVmdDogMTUzLjEycHg7XG4gIHRvcDogMjIuN3B4O1xufVxuXG4jd2FycGVkIC53NCB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNy42MnJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNy42MnJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDcuNjJyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNy42MnJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDcuNjJyYWQpO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGxlZnQ6IDE1OC40NHB4O1xuICB0b3A6IDM2cHg7XG59XG5cbiN3YXJwZWQgLnc1IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3Ljc4cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3Ljc4cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNy43OHJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3Ljc4cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNy43OHJhZCk7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMjlweDtcbiAgbGVmdDogMTYwLjMzcHg7XG4gIHRvcDogNDguODRweDtcbn1cblxuI3dhcnBlZCAudzYge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDcuOTZyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcuOTZyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3Ljk2cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDcuOTZyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3Ljk2cmFkKTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBsZWZ0OiAxNTkuMDFweDtcbiAgdG9wOiA2Mi44MnB4O1xufVxuXG4jd2FycGVkIC53NyB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOC4xNXJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOC4xNXJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDguMTVyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOC4xNXJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDguMTVyYWQpO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGxlZnQ6IDE1NS4zMnB4O1xuICB0b3A6IDc3Ljk3cHg7XG59XG5cbiN3YXJwZWQgLnc4IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4LjM1cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg4LjM1cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOC4zNXJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4LjM1cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOC4zNXJhZCk7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMjlweDtcbiAgbGVmdDogMTQ5Ljc4cHg7XG4gIHRvcDogOTIuMjFweDtcbn1cblxuI3dhcnBlZCAudzkge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDguNTNyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDguNTNyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg4LjUzcmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDguNTNyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg4LjUzcmFkKTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBsZWZ0OiAxNDEuNDJweDtcbiAgdG9wOiAxMDQuNjRweDtcbn1cblxuI3dhcnBlZCAudzEwIHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3LjkzcmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3LjkzcmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNy45M3JhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3LjkzcmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNy45M3JhZCk7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogMTU5LjJweDtcbiAgdG9wOiA2NC44M3B4O1xufVxuXG4jd2FycGVkIC53MTEge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDguMDVyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDguMDVyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg4LjA1cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDguMDVyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg4LjA1cmFkKTtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAxNTguOTNweDtcbiAgdG9wOiA3My43NHB4O1xufVxuXG4jd2FycGVkIC53MTIge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDguMTVyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDguMTVyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg4LjE1cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDguMTVyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg4LjE1cmFkKTtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAxNTYuOTdweDtcbiAgdG9wOiA4MS40OXB4O1xufVxuXG4jd2FycGVkIC53MTMge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDguMjZyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDguMjZyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg4LjI2cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDguMjZyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg4LjI2cmFkKTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAxNTIuODVweDtcbiAgdG9wOiA4OS45M3B4O1xufVxuXG4jd2FycGVkIC53MTQge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDguMzlyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDguMzlyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg4LjM5cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDguMzlyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg4LjM5cmFkKTtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAxNDcuNTRweDtcbiAgdG9wOiA5OS4yNXB4O1xufVxuXG4jd2FycGVkIC53MTUge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDguNTJyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDguNTJyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg4LjUycmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDguNTJyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg4LjUycmFkKTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAxNDIuMDVweDtcbiAgdG9wOiAxMDcuODdweDtcbn1cblxuI3dhcnBlZCAudzE2IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4LjY1cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg4LjY1cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOC42NXJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4LjY1cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOC42NXJhZCk7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGVmdDogMTM1LjM0cHg7XG4gIHRvcDogMTE1LjI4cHg7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcbiAgLnVuaXYtZmlhbmFyIHAge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcbiAgfVxuXG4gIC51bml2LWVuaSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgd29yZC1zcGFjaW5nOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgI2xvZ28tZW5pIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgdG9wOiAtOXB4O1xuICAgIGxlZnQ6IC0xNXB4O1xufVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAjbG9nby1lbmkge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICB0b3A6IDEwMHB4O1xuICAgICAgbGVmdDogLTE1cHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgLnVuaXYtZmlhbmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG5pbWcjbG9nby1lbmkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0NnB4O1xuICBsZWZ0OiAxMnB4O1xuICB0b3A6IDk3cHg7XG59XG59XG4iLCIudG9wLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDIyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmZsYWctbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpcnN0LWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMmQ1MDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWNvbmQtY29udGVudCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMjQ3O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWNvbmQtY29udGVudCAubXktbWVudTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zZWNvbmQtY29udGVudCAubXktbWVudSB7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICMwYzJkNTA7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc2Vjb25kLWNvbnRlbnQgLm15LW1lbnU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE3YWJlO1xufVxuXG4uc2Vjb25kLWNvbnRlbnQgLm15LW1lbnUgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNlY29uZC1jb250ZW50IC5teS1tZW51IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250ZW50LWxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNsb2dvLWVuaSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgLmNvbnRlbnQtbG9nby11ZiB7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICB9XG5cbiAgI2xvZ28tZW5pIHtcbiAgICB3aWR0aDogNzBweDtcbiAgfVxuXG4gICN3YXJwZWQsXG4jd2FycGVkMSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2ZsYWdzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbi5jb250ZW50LWFjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2ZsYWdzIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmNvbnRlbnQtYWN0aW9uLWhlYWRlciAubWVudS1hY3Rpb24gLnAgI2ltZy1wcm9maWxlIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjJweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiA1cHg7XG59XG5cbi5jb250ZW50LWxvZ28tdWYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXktbWVudS0yIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogN3B4O1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXktbWVudS0yIC5iYXIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnVuaXYtZmlhbmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnVuaXYtZmlhbmFyICN1ZiB7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnVuaXYtZmlhbmFyIHAge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtdmFyaWFudDogcGV0aXRlLWNhcHM7XG59XG5cbi51bml2LWVuaSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgd29yZC1zcGFjaW5nOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLmNvbnRlbnQtYWN0aW9uLWhlYWRlciAubWVudS1hY3Rpb24gLnAgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jb250ZW50LWFjdGlvbi1oZWFkZXIgLm1lbnUtYWN0aW9uIC5wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB3aWR0aDogNzBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLnVuaXYtZW5pIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICB3b3JkLXNwYWNpbmc6IDVweDtcbiAgICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xuICAudW5pdi1maWFuYXIgcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xuICB9XG5cbiAgLnVuaXYtZmlhbmFyICN1ZiB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAuY29udGVudC1hY3Rpb24taGVhZGVyIHtcbiAgICByaWdodDogMHB4O1xuICB9XG5cbiAgLm1lbnUtYWN0aW9uOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGVudC1hY3Rpb24taGVhZGVyIC5tZW51LWFjdGlvbiAucCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNmbGFncyB7XG4gICAgbWFyZ2luLXRvcDogMCU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuc2Vjb25kLWNvbnRlbnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cblxuICAubXktbWVudS0yIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5mbGFnLW1vYmlsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAubWVudS1hY3Rpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubXktbWVudSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xuICBpbWcjbG9nby11ZiB7XG4gICAgbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1NXB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG5cbiAgI3dhcnBlZDEsXG4jd2FycGVkMiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbnRlbnQtbG9nby11ZiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjVweDtcbiAgICBsZWZ0OiAtMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzEwcHgpIHtcbiAgaW1nI2xvZ28tZW5pIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgICB0b3A6IDg1cHg7XG4gIH1cbn1cbiNleHRlcm5hbC1jb250ZW50LW1haW4ge1xuICBkaXNwbGF5OiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxubGkjbG9naW4tbW9iaWxlIHtcbiAgYmFja2dyb3VuZDogIzAwMjI0NyAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI21lbnUtY29sYXBzZSB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxubGkjbG9naW4tbW9iaWxlIHNwYW4ge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nI2ltZy1wcm9maWxlLW1vYmlsZSB7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4jd2FycGVkMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxODRweDtcbiAgaGVpZ2h0OiAxNjdweDtcbiAgY29sb3I6IHdoaXRlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuI3dhcnBlZDEgPiBzcGFuW2NsYXNzXj13XTpudGgtb2YtdHlwZShuICsgMCkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAtby10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbn1cblxuI3dhcnBlZDEgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkFCZWVaZWVcIjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogcmVndWxhcjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMy4zO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4jd2FycGVkMSAudzAge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQuMTFyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQuMTFyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0LjExcmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQuMTFyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0LjExcmFkKTtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiAzOXB4O1xuICBsZWZ0OiAyNi4zN3B4O1xuICB0b3A6IDkxLjAycHg7XG59XG5cbiN3YXJwZWQxIC53MSB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNC4zNHJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNC4zNHJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQuMzRyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNC4zNHJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQuMzRyYWQpO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDM5cHg7XG4gIGxlZnQ6IDE4LjMxcHg7XG4gIHRvcDogNzQuNjdweDtcbn1cblxuI3dhcnBlZDEgLncyIHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0LjU2cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0LjU2cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNC41NnJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0LjU2cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNC41NnJhZCk7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMzlweDtcbiAgbGVmdDogMTQuMzdweDtcbiAgdG9wOiA1Ny43OHB4O1xufVxuXG4jd2FycGVkMSAudzMge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQuNzdyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQuNzdyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0Ljc3cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQuNzdyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0Ljc3cmFkKTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAzOXB4O1xuICBsZWZ0OiAxMy42NnB4O1xuICB0b3A6IDQwLjgzcHg7XG59XG5cbiN3YXJwZWQxIC53NCB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNS4wMXJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNS4wMXJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDUuMDFyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNS4wMXJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDUuMDFyYWQpO1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDM5cHg7XG4gIGxlZnQ6IDE1LjEycHg7XG4gIHRvcDogMjIuMTlweDtcbn1cblxuI3dhcnBlZDEgLnc1IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg1LjI1cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1LjI1cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNS4yNXJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg1LjI1cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNS4yNXJhZCk7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMzlweDtcbiAgbGVmdDogMjQuNjJweDtcbiAgdG9wOiA0LjQ2cHg7XG59XG5cbiN3YXJwZWQxIC53NiB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNS40NnJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNS40NnJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDUuNDZyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNS40NnJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDUuNDZyYWQpO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDM5cHg7XG4gIGxlZnQ6IDM2LjA4cHg7XG4gIHRvcDogLTguNjZweDtcbn1cblxuI3dhcnBlZDEgLnc3IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg1LjY2cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1LjY2cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNS42NnJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg1LjY2cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNS42NnJhZCk7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMzlweDtcbiAgbGVmdDogNDcuMXB4O1xuICB0b3A6IC0xOS4xOHB4O1xufVxuXG4jd2FycGVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE4NHB4O1xuICBoZWlnaHQ6IDE2N3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4jd2FycGVkID4gc3BhbltjbGFzc149d106bnRoLW9mLXR5cGUobiArIDApIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG59XG5cbiN3YXJwZWQgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkFCZWVaZWVcIjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogcmVndWxhcjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMi40NTtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuI3dhcnBlZCAudzAge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDYuODZyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDYuODZyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg2Ljg2cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDYuODZyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg2Ljg2cmFkKTtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBsZWZ0OiAxMjIuNDNweDtcbiAgdG9wOiAtMTIuODZweDtcbn1cblxuI3dhcnBlZCAudzEge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDcuMDdyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcuMDdyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3LjA3cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDcuMDdyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3LjA3cmFkKTtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBsZWZ0OiAxMzUuNjlweDtcbiAgdG9wOiAtMi40NXB4O1xufVxuXG4jd2FycGVkIC53MiB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNy4yNnJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNy4yNnJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDcuMjZyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNy4yNnJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDcuMjZyYWQpO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGxlZnQ6IDE0NnB4O1xuICB0b3A6IDkuNTJweDtcbn1cblxuI3dhcnBlZCAudzMge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDcuNDVyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcuNDVyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3LjQ1cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDcuNDVyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3LjQ1cmFkKTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBsZWZ0OiAxNTMuMTJweDtcbiAgdG9wOiAyMi43cHg7XG59XG5cbiN3YXJwZWQgLnc0IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3LjYycmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3LjYycmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNy42MnJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3LjYycmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNy42MnJhZCk7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMjlweDtcbiAgbGVmdDogMTU4LjQ0cHg7XG4gIHRvcDogMzZweDtcbn1cblxuI3dhcnBlZCAudzUge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDcuNzhyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcuNzhyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3Ljc4cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDcuNzhyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3Ljc4cmFkKTtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBsZWZ0OiAxNjAuMzNweDtcbiAgdG9wOiA0OC44NHB4O1xufVxuXG4jd2FycGVkIC53NiB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNy45NnJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNy45NnJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDcuOTZyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNy45NnJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDcuOTZyYWQpO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGxlZnQ6IDE1OS4wMXB4O1xuICB0b3A6IDYyLjgycHg7XG59XG5cbiN3YXJwZWQgLnc3IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4LjE1cmFkKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg4LjE1cmFkKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOC4xNXJhZCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4LjE1cmFkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOC4xNXJhZCk7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMjlweDtcbiAgbGVmdDogMTU1LjMycHg7XG4gIHRvcDogNzcuOTdweDtcbn1cblxuI3dhcnBlZCAudzgge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDguMzVyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDguMzVyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg4LjM1cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDguMzVyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg4LjM1cmFkKTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBsZWZ0OiAxNDkuNzhweDtcbiAgdG9wOiA5Mi4yMXB4O1xufVxuXG4jd2FycGVkIC53OSB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOC41M3JhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOC41M3JhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDguNTNyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOC41M3JhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDguNTNyYWQpO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIGxlZnQ6IDE0MS40MnB4O1xuICB0b3A6IDEwNC42NHB4O1xufVxuXG4jd2FycGVkIC53MTAge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDcuOTNyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcuOTNyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3LjkzcmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDcuOTNyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3LjkzcmFkKTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAxNTkuMnB4O1xuICB0b3A6IDY0LjgzcHg7XG59XG5cbiN3YXJwZWQgLncxMSB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOC4wNXJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOC4wNXJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDguMDVyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOC4wNXJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDguMDVyYWQpO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxlZnQ6IDE1OC45M3B4O1xuICB0b3A6IDczLjc0cHg7XG59XG5cbiN3YXJwZWQgLncxMiB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOC4xNXJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOC4xNXJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDguMTVyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOC4xNXJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDguMTVyYWQpO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxlZnQ6IDE1Ni45N3B4O1xuICB0b3A6IDgxLjQ5cHg7XG59XG5cbiN3YXJwZWQgLncxMyB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOC4yNnJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOC4yNnJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDguMjZyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOC4yNnJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDguMjZyYWQpO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxlZnQ6IDE1Mi44NXB4O1xuICB0b3A6IDg5LjkzcHg7XG59XG5cbiN3YXJwZWQgLncxNCB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOC4zOXJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOC4zOXJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDguMzlyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOC4zOXJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDguMzlyYWQpO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxlZnQ6IDE0Ny41NHB4O1xuICB0b3A6IDk5LjI1cHg7XG59XG5cbiN3YXJwZWQgLncxNSB7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOC41MnJhZCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOC41MnJhZCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDguNTJyYWQpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOC41MnJhZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDguNTJyYWQpO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxlZnQ6IDE0Mi4wNXB4O1xuICB0b3A6IDEwNy44N3B4O1xufVxuXG4jd2FycGVkIC53MTYge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDguNjVyYWQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDguNjVyYWQpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg4LjY1cmFkKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDguNjVyYWQpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg4LjY1cmFkKTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsZWZ0OiAxMzUuMzRweDtcbiAgdG9wOiAxMTUuMjhweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcbiAgLnVuaXYtZmlhbmFyIHAge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC12YXJpYW50OiBwZXRpdGUtY2FwcztcbiAgfVxuXG4gIC51bml2LWVuaSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgd29yZC1zcGFjaW5nOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAjbG9nby1lbmkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjBweDtcbiAgICB0b3A6IC05cHg7XG4gICAgbGVmdDogLTE1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICNsb2dvLWVuaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHRvcDogMTAwcHg7XG4gICAgbGVmdDogLTE1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gIC51bml2LWZpYW5hciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgfVxuXG4gIGltZyNsb2dvLWVuaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0NnB4O1xuICAgIGxlZnQ6IDEycHg7XG4gICAgdG9wOiA5N3B4O1xuICB9XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300&display=swap);\n.container {\n  max-width: 1170px;\n}\n@media screen and (max-width: 575px) {\n  .container {\n    padding: 0px 15px;\n    max-width: 100%;\n    width: 100%;\n  }\n}\n.bg-01 {\n  padding: 50px 0px;\n  background: #d9dee296;\n  position: relative;\n  overflow: hidden;\n}\n.bg-01 .se-box {\n  display: block;\n  margin: -15px 0px;\n  padding: 20px 25px;\n  position: relative;\n  text-align: center;\n}\n.bg-01 .se-box .icon {\n  padding: 0 0 10px 0px;\n  position: relative;\n  display: block;\n  height: 60px;\n  width: 60px;\n  background-color: #002147;\n  border-radius: 50px;\n  line-height: 60px;\n  text-align: center;\n  margin: 0px auto;\n  color: #fff;\n  font-size: 20px;\n  transition: 0.5s;\n}\n.bg-01 .se-box .icon::before {\n  position: absolute;\n  content: \"\";\n  width: 80px;\n  height: 80px;\n  border-radius: 50px;\n  left: -10px;\n  top: -10px;\n  border: 2px dashed #002147;\n}\n.bg-01 .se-box .icon:hover {\n  background: #4b4f5a;\n  cursor: pointer;\n}\n.bg-01 .se-box .content {\n  padding: 20px 0px;\n  position: relative;\n  display: inline-block;\n}\n.bg-01 .se-box .content h3 {\n  font-size: 20px;\n  color: #002147;\n  text-transform: capitalize;\n  margin: 10px 0 0 0;\n  cursor: pointer;\n}\n.bg-01 .se-box .content p {\n  color: #444444;\n  font-size: 15px;\n  line-height: 26px;\n  margin: 10px 0px 20px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvbGF5b3V0L3NlcnZpY2VzLXBhcnR5L3NlcnZpY2VzLXBhcnR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2VydmljZXMtcGFydHkvc2VydmljZXMtcGFydHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkhBQUE7QUFFUjtFQUNFLGlCQUFBO0FDQUY7QURDRTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQ0VKO0FBQ0Y7QURBQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUY7QURERTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0lKO0FESEk7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNNTjtBRExNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUNRUjtBRFBNO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDVVI7QURUSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ1lOO0FEWE07RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDY1I7QURiTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ2dCUiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZXJ2aWNlcy1wYXJ0eS9zZXJ2aWNlcy1wYXJ0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDMwMCZkaXNwbGF5PXN3YXApO1xuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMTcwcHg7IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7IH0gfVxuXG5cbi5iZy0wMSB7XG4gIHBhZGRpbmc6IDUwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDlkZWUyOTY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAuYmctMDEgLnNlLWJveCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAtMTVweCAwcHg7XG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAuYmctMDEgLnNlLWJveCAuaWNvbiB7XG4gICAgICBwYWRkaW5nOiAwIDAgMTBweCAwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjE0NztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7IH1cbiAgICAgIC5iZy0wMSAuc2UtYm94IC5pY29uOjpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGxlZnQ6IC0xMHB4O1xuICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgIzAwMjE0NzsgfVxuICAgICAgLmJnLTAxIC5zZS1ib3ggLmljb246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNGI0ZjVhO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7fVxuICAgIC5iZy0wMSAuc2UtYm94IC5jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAuYmctMDEgLnNlLWJveCAuY29udGVudCBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY29sb3I6ICMwMDIxNDc7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjt9XG4gICAgICAuYmctMDEgLnNlLWJveCAuY29udGVudCBwIHtcbiAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMjBweCAwcHg7IH1cblxuIiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMzAwJmRpc3BsYXk9c3dhcCk7XG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMTcwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmJnLTAxIHtcbiAgcGFkZGluZzogNTBweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNkOWRlZTI5NjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmctMDEgLnNlLWJveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IC0xNXB4IDBweDtcbiAgcGFkZGluZzogMjBweCAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJnLTAxIC5zZS1ib3ggLmljb24ge1xuICBwYWRkaW5nOiAwIDAgMTBweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDIxNDc7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5iZy0wMSAuc2UtYm94IC5pY29uOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGxlZnQ6IC0xMHB4O1xuICB0b3A6IC0xMHB4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzAwMjE0Nztcbn1cblxuLmJnLTAxIC5zZS1ib3ggLmljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNGI0ZjVhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iZy0wMSAuc2UtYm94IC5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYmctMDEgLnNlLWJveCAuY29udGVudCBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDIxNDc7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJnLTAxIC5zZS1ib3ggLmNvbnRlbnQgcCB7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBtYXJnaW46IDEwcHggMHB4IDIwcHggMHB4O1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".scroll-to-top {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}\n\n.show-scrollTop {\n  opacity: 1;\n  transition: all 0.2s ease-in-out;\n}\n\n.btn_top {\n  color: #ffffff;\n  background: #0c2d50;\n  border: transparent;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ib3kvREFUQS9XZWIgQ3VwL2NhY3R1cy5lbmkubWcvZnJvbnRfb2ZmaWNlL3NyYy9hcHAvc2xpZGUtdG9wL3NsaWRlLXRvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2xpZGUtdG9wL3NsaWRlLXRvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBRENDO0VBQ0MsVUFBQTtFQUNBLGdDQUFBO0FDRUY7O0FERUM7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlLXRvcC9zbGlkZS10b3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLXRvLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiB9XG4gLnNob3ctc2Nyb2xsVG9wIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiB9XG5cblxuIC5idG5fdG9wIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICMwYzJkNTA7XG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiIsIi5zY3JvbGwtdG8tdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnNob3ctc2Nyb2xsVG9wIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idG5fdG9wIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICMwYzJkNTA7XG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */");

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
    endpoint: "http://127.0.0.1:8000/api",
    url: "http://127.0.0.1:8000/api"
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

module.exports = __webpack_require__(/*! /media/boy/DATA/Web Cup/cactus.eni.mg/front_office/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
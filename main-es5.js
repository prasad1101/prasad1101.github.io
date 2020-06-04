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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/blog/blog.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/blog/blog.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-heading\">\n    <div class=\"container\">\n        <div class=\"heading-content\">\n            <h1>Blog</h1>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"blog-entries\">\n    <div class=\"container\">\n        <div class=\"col-md-9\">\n            <div class=\"blog-posts\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"single-blog-post\">\n                            <img src=\"img/blog_post_1.png\" alt=\"\">\n                            <div class=\"text-content\">\n                                <h2>Demo blog</h2>\n                                <span><a href=\"#\">Prasad</a> / <a href=\"#\">02 June 2020</a> / <a\n                                        href=\"#\">Branding</a></span>\n                                <p>Nullam et justo pharetra, commodo eros ac, pharetra justo. Donec vel vehicula urna.\n                                    Proin sodales ligula vitae lacus elementum, at tempor nisl congue. Pellentesque nec\n                                    lacus velit. Vestibulum tincidunt hendrerit ante id sagittis. Phasellus sodales nibh\n                                    mattis neque interdum viverra. Nam accumsan arcu id fringilla auctor.\n                                    <br><br>Suspendisse et rutrum nisl. Phasellus porttitor metus vel justo blandit, in\n                                    finibus neque elementum. Nullam semper, turpis quis egestas consequat, dui eros\n                                    tristique lectus, ac euismod ex quam id mauris. Nunc sit amet nibh sollicitudin,\n                                    interdum nunc in, eleifend est.\n\n                                    <br><br>Pellentesque vel dignissim libero, et sagittis elit. Nulla dignissim\n                                    eleifend tellus, sed molestie risus rutrum non. Etiam lorem odio, convallis a arcu\n                                    vel, bibendum molestie metus. Pellentesque imperdiet nisl ante, eu congue nisl\n                                    suscipit id.\n                                    <br><br><a href=\"home\">Back to Blog</a></p>\n                                <div class=\"tags-share\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <ul class=\"tags\">\n                                                <li>Tags:</li>\n                                                <li><a href=\"#\">life</a>,</li>\n                                                <li><a href=\"#\">nature</a>,</li>\n                                                <li><a href=\"#\">life is good</a></li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <ul class=\"share\">\n                                                <li>Share:</li>\n                                                <li><a href=\"#\">facebook</a>,</li>\n                                                <li><a href=\"#\">twitter</a>,</li>\n                                                <li><a href=\"#\">behance</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n<footer>\n    <div class=\"container-fluid\">\n        <div class=\"col-md-12\">\n            <p>Copyright &copy; 2018 Company Name\n\n                | Designed by TemplateMo</p>\n        </div>\n    </div>\n</footer>\n\n\n<!-- Modal button -->\n<div class=\"popup-icon\">\n    <button id=\"modBtn\" class=\"modal-btn\"><img src=\"img/contact-icon.png\" alt=\"\"></button>\n</div>\n\n<!-- Modal -->\n<div id=\"modal\" class=\"modal\">\n    <!-- Modal Content -->\n    <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n            <h3 class=\"header-title\">Say hello to <em>Highway</em></h3>\n            <div class=\"close-btn\"><img src=\"img/close_contact.png\" alt=\"\"></div>\n        </div>\n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n            <div class=\"col-md-6 col-md-offset-3\">\n                <form id=\"contact\" action=\"\" method=\"post\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <input name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your name...\"\n                                    required=\"\">\n                            </fieldset>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <input name=\"email\" type=\"email\" class=\"form-control\" id=\"email\"\n                                    placeholder=\"Your email...\" required=\"\">\n                            </fieldset>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <textarea name=\"message\" rows=\"6\" class=\"form-control\" id=\"message\"\n                                    placeholder=\"Your message...\" required=\"\"></textarea>\n                            </fieldset>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <button type=\"submit\" id=\"form-submit\" class=\"btn\">Send Message Now</button>\n                            </fieldset>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<section class=\"overlay-menu\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"main-menu\">\n                <ul>\n                    <li>\n                        <a href=\"index.html\">Home - Full-width</a>\n                    </li>\n                    <li>\n                        <a href=\"masonry.html\">Home - Masonry</a>\n                    </li>\n                    <li>\n                        <a href=\"grid.html\">Home - Small-width</a>\n                    </li>\n                    <li>\n                        <a href=\"about.html\">About Us</a>\n                    </li>\n                    <li>\n                        <a href=\"blog.html\">Blog Entries</a>\n                    </li>\n                    <li>\n                        <a href=\"single-post.html\">Single Post</a>\n                    </li>\n                </ul>\n                <p>We create awesome templates for you</p>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/blog2/blog2.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/blog2/blog2.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-heading\">\n    <div class=\"container\">\n        <div class=\"heading-content\">\n            <h1>Blog</h1>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"blog-entries\">\n    <div class=\"container\">\n        <div class=\"col-md-9\">\n            <div class=\"blog-posts\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"single-blog-post\">\n                            <img src=\"img/blog_post_1.png\" alt=\"\">\n                            <div class=\"text-content\">\n                                <h2>Demo blog 2</h2>\n                                <span><a href=\"#\">Prasad</a> / <a href=\"#\">02 June 2020</a> / <a\n                                        href=\"#\">Branding</a></span>\n                                <p>Nullam et justo pharetra, commodo eros ac, pharetra justo. Donec vel vehicula urna.\n                                    Proin sodales ligula vitae lacus elementum, at tempor nisl congue. Pellentesque nec\n                                    lacus velit. Vestibulum tincidunt hendrerit ante id sagittis. Phasellus sodales nibh\n                                    mattis neque interdum viverra. Nam accumsan arcu id fringilla auctor.\n                                    <br><br>Suspendisse et rutrum nisl. Phasellus porttitor metus vel justo blandit, in\n                                    finibus neque elementum. Nullam semper, turpis quis egestas consequat, dui eros\n                                    tristique lectus, ac euismod ex quam id mauris. Nunc sit amet nibh sollicitudin,\n                                    interdum nunc in, eleifend est.\n\n                                    <br><br>Pellentesque vel dignissim libero, et sagittis elit. Nulla dignissim\n                                    eleifend tellus, sed molestie risus rutrum non. Etiam lorem odio, convallis a arcu\n                                    vel, bibendum molestie metus. Pellentesque imperdiet nisl ante, eu congue nisl\n                                    suscipit id.\n                                    <br><br><a href=\"home\">Back to Blog</a></p>\n                                <div class=\"tags-share\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <ul class=\"tags\">\n                                                <li>Tags:</li>\n                                                <li><a href=\"#\">life</a>,</li>\n                                                <li><a href=\"#\">nature</a>,</li>\n                                                <li><a href=\"#\">life is good</a></li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <ul class=\"share\">\n                                                <li>Share:</li>\n                                                <li><a href=\"#\">facebook</a>,</li>\n                                                <li><a href=\"#\">twitter</a>,</li>\n                                                <li><a href=\"#\">behance</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n<footer>\n    <div class=\"container-fluid\">\n        <div class=\"col-md-12\">\n            <p>Copyright &copy; 2018 Company Name\n\n                | Designed by TemplateMo</p>\n        </div>\n    </div>\n</footer>\n\n\n<!-- Modal button -->\n<div class=\"popup-icon\">\n    <button id=\"modBtn\" class=\"modal-btn\"><img src=\"img/contact-icon.png\" alt=\"\"></button>\n</div>\n\n<!-- Modal -->\n<div id=\"modal\" class=\"modal\">\n    <!-- Modal Content -->\n    <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n            <h3 class=\"header-title\">Say hello to <em>Highway</em></h3>\n            <div class=\"close-btn\"><img src=\"img/close_contact.png\" alt=\"\"></div>\n        </div>\n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n            <div class=\"col-md-6 col-md-offset-3\">\n                <form id=\"contact\" action=\"\" method=\"post\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <input name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your name...\"\n                                    required=\"\">\n                            </fieldset>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <input name=\"email\" type=\"email\" class=\"form-control\" id=\"email\"\n                                    placeholder=\"Your email...\" required=\"\">\n                            </fieldset>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <textarea name=\"message\" rows=\"6\" class=\"form-control\" id=\"message\"\n                                    placeholder=\"Your message...\" required=\"\"></textarea>\n                            </fieldset>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <button type=\"submit\" id=\"form-submit\" class=\"btn\">Send Message Now</button>\n                            </fieldset>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<section class=\"overlay-menu\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"main-menu\">\n                <ul>\n                    <li>\n                        <a href=\"index.html\">Home - Full-width</a>\n                    </li>\n                    <li>\n                        <a href=\"masonry.html\">Home - Masonry</a>\n                    </li>\n                    <li>\n                        <a href=\"grid.html\">Home - Small-width</a>\n                    </li>\n                    <li>\n                        <a href=\"about.html\">About Us</a>\n                    </li>\n                    <li>\n                        <a href=\"blog.html\">Blog Entries</a>\n                    </li>\n                    <li>\n                        <a href=\"single-post.html\">Single Post</a>\n                    </li>\n                </ul>\n                <p>We create awesome templates for you</p>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/blog3/blog3.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/blog3/blog3.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-heading\">\n    <div class=\"container\">\n        <div class=\"heading-content\">\n            <h1>Blog</h1>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"blog-entries\">\n    <div class=\"container\">\n        <div class=\"col-md-9\">\n            <div class=\"blog-posts\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"single-blog-post\">\n                            <img src=\"img/blog_post_1.png\" alt=\"\">\n                            <div class=\"text-content\">\n                                <h2>Demo blog3</h2>\n                                <span><a href=\"#\">Prasad</a> / <a href=\"#\">02 June 2020</a> / <a\n                                        href=\"#\">Branding</a></span>\n                                <p>Nullam et justo pharetra, commodo eros ac, pharetra justo. Donec vel vehicula urna.\n                                    Proin sodales ligula vitae lacus elementum, at tempor nisl congue. Pellentesque nec\n                                    lacus velit. Vestibulum tincidunt hendrerit ante id sagittis. Phasellus sodales nibh\n                                    mattis neque interdum viverra. Nam accumsan arcu id fringilla auctor.\n                                    <br><br>Suspendisse et rutrum nisl. Phasellus porttitor metus vel justo blandit, in\n                                    finibus neque elementum. Nullam semper, turpis quis egestas consequat, dui eros\n                                    tristique lectus, ac euismod ex quam id mauris. Nunc sit amet nibh sollicitudin,\n                                    interdum nunc in, eleifend est.\n\n                                    <br><br>Pellentesque vel dignissim libero, et sagittis elit. Nulla dignissim\n                                    eleifend tellus, sed molestie risus rutrum non. Etiam lorem odio, convallis a arcu\n                                    vel, bibendum molestie metus. Pellentesque imperdiet nisl ante, eu congue nisl\n                                    suscipit id.\n                                    <br><br><a href=\"home\">Back to Blog</a></p>\n                                <div class=\"tags-share\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <ul class=\"tags\">\n                                                <li>Tags:</li>\n                                                <li><a href=\"#\">life</a>,</li>\n                                                <li><a href=\"#\">nature</a>,</li>\n                                                <li><a href=\"#\">life is good</a></li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <ul class=\"share\">\n                                                <li>Share:</li>\n                                                <li><a href=\"#\">facebook</a>,</li>\n                                                <li><a href=\"#\">twitter</a>,</li>\n                                                <li><a href=\"#\">behance</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n<footer>\n    <div class=\"container-fluid\">\n        <div class=\"col-md-12\">\n            <p>Copyright &copy; 2018 Company Name\n\n                | Designed by TemplateMo</p>\n        </div>\n    </div>\n</footer>\n\n\n<!-- Modal button -->\n<div class=\"popup-icon\">\n    <button id=\"modBtn\" class=\"modal-btn\"><img src=\"img/contact-icon.png\" alt=\"\"></button>\n</div>\n\n<!-- Modal -->\n<div id=\"modal\" class=\"modal\">\n    <!-- Modal Content -->\n    <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n            <h3 class=\"header-title\">Say hello to <em>Highway</em></h3>\n            <div class=\"close-btn\"><img src=\"img/close_contact.png\" alt=\"\"></div>\n        </div>\n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n            <div class=\"col-md-6 col-md-offset-3\">\n                <form id=\"contact\" action=\"\" method=\"post\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <input name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your name...\"\n                                    required=\"\">\n                            </fieldset>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <input name=\"email\" type=\"email\" class=\"form-control\" id=\"email\"\n                                    placeholder=\"Your email...\" required=\"\">\n                            </fieldset>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <textarea name=\"message\" rows=\"6\" class=\"form-control\" id=\"message\"\n                                    placeholder=\"Your message...\" required=\"\"></textarea>\n                            </fieldset>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <button type=\"submit\" id=\"form-submit\" class=\"btn\">Send Message Now</button>\n                            </fieldset>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<section class=\"overlay-menu\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"main-menu\">\n                <ul>\n                    <li>\n                        <a href=\"index.html\">Home - Full-width</a>\n                    </li>\n                    <li>\n                        <a href=\"masonry.html\">Home - Masonry</a>\n                    </li>\n                    <li>\n                        <a href=\"grid.html\">Home - Small-width</a>\n                    </li>\n                    <li>\n                        <a href=\"about.html\">About Us</a>\n                    </li>\n                    <li>\n                        <a href=\"blog.html\">Blog Entries</a>\n                    </li>\n                    <li>\n                        <a href=\"single-post.html\">Single Post</a>\n                    </li>\n                </ul>\n                <p>We create awesome templates for you</p>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"logo\">\n        <a href=\"index.html\">MyBlogs</a>\n    </div>\n    <div class=\"menu-icon\">\n        <span></span>\n    </div>\n</nav>\n\n<div id=\"video-container\">\n    <div class=\"video-overlay\"></div>\n    <div class=\"video-content\">\n        <div class=\"inner\">\n            <h1>Welcome to <em>MyBlogs</em></h1>\n            <p>Start writing your personal blogs with MyBlogs!</p>\n\n            <div class=\"scroll-icon\">\n                <a class=\"scrollTo\" data-scrollTo=\"portfolio\" href=\"#\"><img src=\"assets/img/scroll-icon.png\" alt=\"\"></a>\n            </div>\n        </div>\n    </div>\n    <video autoplay=\"\" loop=\"\" muted>\n        <source src=\"assets/img/highway-loop.mp4\" type=\"video/mp4\" />\n    </video>\n</div>\n\n\n<div class=\"full-screen-portfolio\" id=\"portfolio\">\n    <div class=\"container-fluid\">\n        <div class=\"col-md-4 col-sm-6\">\n            <div class=\"portfolio-item\">\n                <a href=\"blog\" data-lightbox=\"image-1\">\n                    <div class=\"thumb\">\n                        <div class=\"hover-effect\">\n                            <div class=\"hover-content\">\n                                <h1>Demo blog 1</h1>\n                                <p>Awesome Subtittle Goes Here</p>\n                            </div>\n                        </div>\n                        <div class=\"image\">\n                            <img src=\"assets/img/portfolio_item_4.png\">\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n        <div class=\"col-md-4 col-sm-6\">\n            <div class=\"portfolio-item\">\n                <a href=\"blog2\" data-lightbox=\"image-1\">\n                    <div class=\"thumb\">\n                        <div class=\"hover-effect\">\n                            <div class=\"hover-content\">\n                                <h1>Demo blog 2</h1>\n                                <p>Awesome Subtittle Goes Here</p>\n                            </div>\n                        </div>\n                        <div class=\"image\">\n                            <img src=\"assets/img/portfolio_item_2.png\">\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n        <div class=\"col-md-4 col-sm-6\">\n            <div class=\"portfolio-item\">\n                <a href=\"blog3\" data-lightbox=\"image-1\">\n                    <div class=\"thumb\">\n                        <div class=\"hover-effect\">\n                            <div class=\"hover-content\">\n                                <h1>Demo blog 3</h1>\n                                <p>Awesome Subtittle Goes Here</p>\n                            </div>\n                        </div>\n                        <div class=\"image\">\n                            <img src=\"assets/img/portfolio_item_3.png\">\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n\n\n    </div>\n</div>\n\n\n<footer>\n    <div class=\"container-fluid\">\n        <div class=\"col-md-12\">\n            <p>Copyright &copy; 2020 MyBlogs\n\n                | Designed by Prasad Pawar</p>\n        </div>\n    </div>\n</footer>\n\n\n<!-- Modal button -->\n<div class=\"popup-icon\">\n    <button id=\"modBtn\" class=\"modal-btn\"><img src=\"assets/img/contact-icon.png\" alt=\"\"></button>\n</div>\n\n<!-- Modal -->\n<div id=\"modal\" class=\"modal\">\n    <!-- Modal Content -->\n    <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n            <h3 class=\"header-title\">Say hello to <em>Highway</em></h3>\n            <div class=\"close-btn\"><img src=\"assets/img/close_contact.png\" alt=\"\"></div>\n        </div>\n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n            <div class=\"col-md-6 col-md-offset-3\">\n                <form id=\"contact\" action=\"\" method=\"post\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <input name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your name...\"\n                                    required=\"\">\n                            </fieldset>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <input name=\"email\" type=\"email\" class=\"form-control\" id=\"email\"\n                                    placeholder=\"Your email...\" required=\"\">\n                            </fieldset>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <textarea name=\"message\" rows=\"6\" class=\"form-control\" id=\"message\"\n                                    placeholder=\"Your message...\" required=\"\"></textarea>\n                            </fieldset>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <fieldset>\n                                <button type=\"submit\" id=\"form-submit\" class=\"btn\">Send Message Now</button>\n                            </fieldset>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<section class=\"overlay-menu\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"main-menu\">\n                <ul>\n                    <li>\n                        <a href=\"index.html\">Home - Full-width</a>\n                    </li>\n                    <li>\n                        <a href=\"masonry.html\">Home - Masonry</a>\n                    </li>\n                    <li>\n                        <a href=\"grid.html\">Home - Small-width</a>\n                    </li>\n                    <li>\n                        <a href=\"about.html\">About Us</a>\n                    </li>\n                    <li>\n                        <a href=\"blog.html\">Blog Entries</a>\n                    </li>\n                    <li>\n                        <a href=\"single-post.html\">Single Post</a>\n                    </li>\n                </ul>\n                <p>We create awesome templates for you.</p>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div _ngcontent-kki-c2=\"\" id=\"video-container\">\n    <div _ngcontent-kki-c2=\"\" class=\"video-overlay\"></div>\n    <div _ngcontent-kki-c2=\"\" class=\"video-content\">\n        <div _ngcontent-kki-c2=\"\" class=\"inner\">\n            <h2 class=\"text-white\">Welcome to the blogging site</h2>\n\n            <input class=\"p-2 m-2\" type=\"text\" [(ngModel)]=\"userData.userName\" placeholder=\"Enter Username\">\n            <br>\n            <input class=\"p-2 m-2\" [placeholder]=\"placeholder\" [(ngModel)]=\"userData.password\" type=\"password\">\n            <br>\n\n            <button class=\"p-2 m-2 btn btn-danger\" (click)=\"login()\">Login</button>\n        </div>\n    </div><video _ngcontent-kki-c2=\"\" autoplay=\"\" loop=\"\" muted=\"\">\n        <source _ngcontent-kki-c2=\"\" src=\"assets/img/highway-loop.mp4\" type=\"video/mp4\"></video>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_blog2_blog2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/blog2/blog2.component */ "./src/app/components/blog2/blog2.component.ts");
/* harmony import */ var _components_blog3_blog3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/blog3/blog3.component */ "./src/app/components/blog3/blog3.component.ts");








var routes = [
    { path: "", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "blog", component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"] },
    { path: "blog2", component: _components_blog2_blog2_component__WEBPACK_IMPORTED_MODULE_6__["Blog2Component"] },
    { path: "blog3", component: _components_blog3_blog3_component__WEBPACK_IMPORTED_MODULE_7__["Blog3Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background-color: rgba(255, 127, 80, 0.548);\r\n}\r\n\r\nh1 {\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-style: italic;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxxREFBcUQ7SUFDckQsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMjcsIDgwLCAwLjU0OCk7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'demo-project';
        var a = 4;
        for (var i = 0; i <= 10; i++) {
            a = a * i;
            console.log(a);
        }
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_blog2_blog2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/blog2/blog2.component */ "./src/app/components/blog2/blog2.component.ts");
/* harmony import */ var _components_blog3_blog3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/blog3/blog3.component */ "./src/app/components/blog3/blog3.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"],
                _components_blog2_blog2_component__WEBPACK_IMPORTED_MODULE_9__["Blog2Component"],
                _components_blog3_blog3_component__WEBPACK_IMPORTED_MODULE_10__["Blog3Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        })
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/blog2/blog2.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/blog2/blog2.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZzIvYmxvZzIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/blog2/blog2.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/blog2/blog2.component.ts ***!
  \*****************************************************/
/*! exports provided: Blog2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blog2Component", function() { return Blog2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Blog2Component = /** @class */ (function () {
    function Blog2Component() {
    }
    Blog2Component.prototype.ngOnInit = function () {
    };
    Blog2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog2',
            template: __webpack_require__(/*! raw-loader!./blog2.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/blog2/blog2.component.html"),
            styles: [__webpack_require__(/*! ./blog2.component.css */ "./src/app/components/blog2/blog2.component.css")]
        })
    ], Blog2Component);
    return Blog2Component;
}());



/***/ }),

/***/ "./src/app/components/blog3/blog3.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/blog3/blog3.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZzMvYmxvZzMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/blog3/blog3.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/blog3/blog3.component.ts ***!
  \*****************************************************/
/*! exports provided: Blog3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blog3Component", function() { return Blog3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Blog3Component = /** @class */ (function () {
    function Blog3Component() {
    }
    Blog3Component.prototype.ngOnInit = function () {
    };
    Blog3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog3',
            template: __webpack_require__(/*! raw-loader!./blog3.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/blog3/blog3.component.html"),
            styles: [__webpack_require__(/*! ./blog3.component.css */ "./src/app/components/blog3/blog3.component.css")]
        })
    ], Blog3Component);
    return Blog3Component;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* h1 {\r\n    color: green;\r\n} */\r\n\r\n.prasad {\r\n    color: red;\r\n    font-family: sans-serif;\r\n}\r\n\r\n/* input {\r\n    background-color: transparent;\r\n    color: white;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVIO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTs7O0dBR0ciLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBoMSB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn0gKi9cclxuXHJcbi5wcmFzYWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiBpbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.placeholder = "enter a password";
        this.userData = {
            userName: "ankita",
            password: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log(this.userData);
        if (this.userData.userName && this.userData.password) {
            alert("login successful!");
            this.router.navigateByUrl("home");
        }
        else {
            alert("username or password incorrect");
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\prasad\node-academy\demo-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
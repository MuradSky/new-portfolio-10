/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/auto-stock/auto-stock.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/auto-stock/auto-stock.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $('.auto-stock__flex-item').on('mouseout', function (e) {
    if ($(this).hasClass('blur')) $(this).removeClass('blur');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/comment/comment.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/comment/comment.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $commentSlider = $('.js-comment-slider');
  $commentSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
      breakpoint: 1440,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: true
      }
    }]
  });
  $(".js-comment-text").text(function (i, text) {
    if (text.length >= 150) {
      text = text.substring(0, 150);
      var lastIndex = text.lastIndexOf(" ");
      text = text.substring(0, lastIndex) + '...';
    }

    $(this).text(text);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/features/features.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/features/features.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $fhead = $('.js-head'),
      $fbody = $('.js-body');
  $fhead.on('click', function () {
    $id = $(this).attr('data-id');
    $benefit = $(this).attr('data-benefit');

    if (!$('#' + $id).hasClass('active__item')) {
      $('#' + $benefit + ' .benefits__item').removeClass('active__item');
      $('#' + $id).addClass('active__item');
    }

    if ($(this).hasClass('active')) {
      $fbody.removeClass('active');
      $fhead.removeClass('active');
    } else {
      $fbody.removeClass('active');
      $fhead.removeClass('active');
      $(this).addClass('active');
      $(this).next().addClass('active');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $headerBurger = $('.js-header-burger'),
      $headerNav = $('.js-header-nav'),
      $headerClose = $('.js-header-close');
  $headerBurger.on('click', function () {
    $headerNav.addClass('show');
    $('body').css('overflow', 'hidden');
  });
  $headerClose.on('click', function () {
    $headerNav.removeClass('show');
    $('body').css('overflow', 'visible');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/lx-slides/lx-slides.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/lx-slides/lx-slides.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $window = $(window);
  var $slideSide = $(".js-sidebar");
  var $lxSlides = $(".js-lx-slide");
  var $sidebarLink = $(".js-sidebar-link");
  var $offsetTopSide = $lxSlides.offset().top;
  var $offsetTopBottom = $offsetTopSide + ($lxSlides.height() - $slideSide.height() - 300);
  var fixed = false;
  $slideSide.css("top", $offsetTopSide + 150);
  $window.on("scroll load", function () {
    var $scrollTop = $window.scrollTop();
    handleNavigation($scrollTop);
    if ($offsetTopBottom + 1000 <= $scrollTop && !fixed) fixed = true;
    if ($offsetTopSide - 100 <= $scrollTop && !fixed) $slideSide.css("top", $scrollTop + 200);
    if ($offsetTopBottom + 1000 >= $scrollTop) fixed = false;
  });
  $sidebarLink.on("click", function () {
    var that = $(this);
    $sidebarLink.removeClass("active");
    if (!that.hasClass("active")) that.addClass("active");
  });
  var init = false;
  var prev = 0;
  var count = 0;
  var blocksHeight = [];
  $lxSlides.children().each(function (i, item) {
    return blocksHeight.push($(item).position().top);
  });

  var handleNavigation = function handleNavigation(scrollTop) {
    var currentIndex = blocksHeight.indexOf(blocksHeight.find(function (item) {
      return String(item)[0] === String(scrollTop)[0];
    }));

    if (!init) {
      $sidebarLink.eq(currentIndex === -1 ? 0 : currentIndex).addClass("active");
      init = true;
    }

    if (prev > scrollTop && count > 0 && currentIndex >= 0) addClassLink(currentIndex, "up");
    if (prev < scrollTop && count < blocksHeight.length - 1 && currentIndex > 0 && $offsetTopSide < scrollTop) addClassLink(currentIndex, "down");
    prev = window.scrollY;
  };

  var addClassLink = function addClassLink(index, scrollDirection) {
    count = index;
    if ($sidebarLink.hasClass("active")) $sidebarLink.removeClass("active");
    if (scrollDirection === "up") $sidebarLink.eq(index).addClass("active");
    if (scrollDirection === "down") $sidebarLink.eq(index).addClass("active");
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/map/map.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/map/map.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var mapId = $('#ymap');

  function init() {
    var map = new ymaps.Map('ymap', {
      center: [55.67450294928798, 37.022896335937396],
      zoom: 9,
      controls: ['fullscreenControl', 'zoomControl', 'trafficControl'],
      behaviors: ['drag', 'dblClickZoom', 'multiTouch']
    });
    var placemark1 = new ymaps.Placemark([55.468045, 37.559236], {
      hintContent: mapId.data('content')
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/dist/img/pin.png',
      iconImageSize: [53, 70],
      iconImageOffset: [-25, -70]
    });
    var placemark2 = new ymaps.Placemark([55.881394, 37.732718], {
      hintContent: mapId.data('content')
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/dist/img/pin.png',
      iconImageSize: [53, 70],
      iconImageOffset: [-25, -70]
    });
    var width = $(window).width();

    if (width < 770) {
      ynewMap.behaviors.disable('drag');
    }

    map.geoObjects.add(placemark1).add(placemark2);
  }

  ymaps.ready(init);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/modals/modals.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/modals/modals.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $modalCarSlider = $(".js-modal-car__slider");
  var mediaWidth = window.matchMedia("(max-width: 1100px)").matches;

  var sliderParam = function sliderParam(that) {
    return {
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      adaptiveHeight: true,
      prevArrow: that.find(".js-modal-car-prev"),
      nextArrow: that.find(".js-modal-car-next"),
      responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
  };

  var pageCounter = 1;
  $('.js-popup-link').magnificPopup({
    src: $(this).attr('data-mfp-src'),
    type: 'inline',
    callbacks: {
      close: function close() {
        var currentSlider = $(this.content).find(".js-modal-car__slider");
        currentSlider.slick("unslick");
        $('.js-form').removeClass('error-validation');
        $(".js-page-current").text(1);
        pageCounter = 1;
      },
      open: function open() {
        var that = $(this.content);
        var currentSlider = that.find(".js-modal-car__slider");
        currentSlider.slick(sliderParam(currentSlider.next()));
      }
    }
  });
  $('.js-modal-close').on('click', function () {
    return $.magnificPopup.close();
  });
  $modalCarSlider.on('init', function (event, slick) {
    var division = slick.slideCount / 2;
    var that = $(event.currentTarget);
    that.next().find(".js-page-count").text(mediaWidth ? slick.slideCount : Math.round(division));
    var mediaCondition = mediaWidth ? slick.slideCount < 1 : slick.slideCount <= 2;
    if (mediaCondition) return that.next().css("display", "none");
    prevBtn(that.next().find(".js-modal-car-prev"));
    nextBtn(that.next().find(".js-modal-car-next"), slick.slideCount);
  });

  function prevBtn(btn) {
    btn.on("click", function () {
      if (pageCounter > 1) pageCounter--;
      btn.next().find(".js-page-current").text(pageCounter);
    });
  }

  function nextBtn(btn, slideCount) {
    console.log(btn);
    btn.on("click", function () {
      var mediaCondition = mediaWidth ? pageCounter < slideCount : pageCounter < slideCount - 2;
      if (mediaCondition) pageCounter++;
      btn.prev().find(".js-page-current").text(pageCounter);
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/model/model.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/model/model.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $modelTab = $('.js-model-tab');

  if ($modelTab.length !== 0) {
    $modelTab.on('click', function (event) {
      var idx = $modelTab.index($(this));
      $modelTab.removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
      $('body').css('overflow', 'visible');
      $('html, body').stop(true, true).delay(500).animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 50
      }, 500);
    });
    $(window).on('scroll', function (event) {
      var technologies = $('#technologies').offset().top - 100,
          design = $('#design').offset().top - 100,
          komfort = $('#komfort').offset().top - 100,
          safety = $('#safety').offset().top - 100,
          quality = $('#quality').offset().top - 100,
          gallery = $('#gallery').offset().top - 100,
          windowScrollPosition = $(window).scrollTop();

      if (design < windowScrollPosition) {
        $modelTab.removeClass('active');
        $('#design-menu').addClass('active');
      }

      if (technologies < windowScrollPosition) {
        $modelTab.removeClass('active');
        $('#technologies-menu').addClass('active');
      }

      if (komfort < windowScrollPosition) {
        $modelTab.removeClass('active');
        $('#komfort-menu').addClass('active');
      }

      if (safety < windowScrollPosition) {
        $modelTab.removeClass('active');
        $('#safety-menu').addClass('active');
      }

      if (quality < windowScrollPosition) {
        $modelTab.removeClass('active');
        $('#quality-menu').addClass('active');
      }

      if (gallery < windowScrollPosition) {
        $modelTab.removeClass('active');
        $('#gallery-menu').addClass('active');
      }
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/news/news.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/news/news.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $newsSlider = $('.js-news-slider');
  var width = $(window).width();

  if (width < 1250) {
    $newsSlider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: true
        }
      }]
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/global.js":
/*!*********************************!*\
  !*** ./src/js/import/global.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var agent = navigator.userAgent;
  var $jsNotWebp = $('.js-not-webp');

  if (agent.indexOf("MSIE") != -1 || !!document.documentMode == true || /^((?!chrome|android).)*safari/i.test(agent)) {
    $jsNotWebp.addClass('not-webp');
  }

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('.js-header-nav').removeClass('show');
    $('body').css('overflow', 'visible');
    $('html, body').stop(true, true).animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/js/import/global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_auto_stock_auto_stock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/auto-stock/auto-stock */ "./src/blocks/modules/auto-stock/auto-stock.js");
/* harmony import */ var _modules_auto_stock_auto_stock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_auto_stock_auto_stock__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_modals_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/modals/modals */ "./src/blocks/modules/modals/modals.js");
/* harmony import */ var _modules_modals_modals__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_modals_modals__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/map/map */ "./src/blocks/modules/map/map.js");
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_map_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_comment_comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/comment/comment */ "./src/blocks/modules/comment/comment.js");
/* harmony import */ var _modules_comment_comment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_comment_comment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_news_news__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/news/news */ "./src/blocks/modules/news/news.js");
/* harmony import */ var _modules_news_news__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_news_news__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_features_features__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/features/features */ "./src/blocks/modules/features/features.js");
/* harmony import */ var _modules_features_features__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_features_features__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_model_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/model/model */ "./src/blocks/modules/model/model.js");
/* harmony import */ var _modules_model_model__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_model_model__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_lx_slides_lx_slides__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/lx-slides/lx-slides */ "./src/blocks/modules/lx-slides/lx-slides.js");
/* harmony import */ var _modules_lx_slides_lx_slides__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_lx_slides_lx_slides__WEBPACK_IMPORTED_MODULE_10__);












/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _parts_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/mask */ "./src/js/parts/mask.js");
/* harmony import */ var _parts_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js");





$(function () {
  Object(_parts_mask__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_parts_form__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["default"] = (function () {
  $(document).ready(function () {
    initForm();

    function initForm() {
      $('body').on('submit', 'form', function (e) {
        var t = $(this);

        if (!isFormValidate(t)) {
          e.preventDefault();
          e.stopPropagation();
          $('.error', t).first().focus();
        } else if (t.hasClass('js-ajax-form')) {
          e.preventDefault();
          t.closest('.js-ajax-form');
          t.addClass('load'); // formSendResult(t);

          sendFormAjax(t, function (data) {
            formSendResult(t, data);
            t.removeClass('load');
          });
        }
      });
      $('body').on('change', '.error', function () {
        var t = $(this);

        if (isFieldValidate(t)) {
          t.closest('.error').removeClass('has-error');
        }
      });
    }
    /**
     * Валидация E-mail адреса
     * @param {string} emailAddress - e-mail для проверки
     * @returns {Boolean}
     */


    function isValidEmail(emailAddress) {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      return pattern.test(emailAddress);
    }
    /**
     * Валидация всей формы
     * @param {object} form jQuery объект формы
     * @param {string} error_class класс ошибки
     * @returns {Boolean}
     */


    function isFormValidate(form, error_class) {
      var result = true,
          rq = $('.required', form).length,
          check = ['input[type="text"]', 'input[type="login"]', 'input[type="password"]', 'input[type="number"]', 'input[type="checkbox"]', 'input[type="tel"]', 'input[type="email"]', 'input[type="textarea"]', 'input[type="select"]', 'textarea', 'select'],
          parent;
      error_class = error_class || 'has-error';
      $('.required, input, textarea, select').removeClass(error_class);

      if (rq < 1) {
        return result;
      }

      for (var i = 0; i < rq; i++) {
        parent = $('.required', form).eq(i);
        $(check.join(','), parent).each(function () {
          if (!isFieldValidate($(this), error_class)) {
            return result = false;
          }
        });
      }

      return result;
    }
    /**
     * Проверка валидации поля
     * @param {object} field jQuery объект поля формы
     * @param {string} error_class класс ошибки
     * @returns {Boolean}
     */


    function isFieldValidate(field, error_class) {
      var result = true;
      var val = '';

      if (field && field.attr('name')) {
        if (!field.val()) {
          field.val('');
          return false;
        }

        val = (field.val() + '').trim();

        if (field.attr('name') === 'email' && !isValidEmail(val)) {
          result = false;
        } else if (field.attr('type') === 'tel' && !isValidPhone(val)) {
          result = false;
        } else if (field.attr('type') === 'checkbox' && !field.is(':checked')) {
          result = false;
        } else if (val === null || val === '') {
          field.val('');
          result = false;
        }
      }

      return result;
    }
    /**
     * Валидация phone адреса
     * @param {string} phine - e-mail для проверки
     * @returns {Boolean}
     */


    function isValidPhone(phone) {
      var pattern = new RegExp(/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/i);
      return pattern.test(phone);
    }
    /**
     * Проверяем значение на null и undefined
     * @param {mixed} val значение
     * @returns {Boolean}
     */


    function notNull(val) {
      return val !== null && val !== undefined;
    }
    /**
     * Отправляем форму ajax
     * @param {object} form jQuery объект формы
     * @param {function} callback функция обратного вызова
     */


    function sendFormAjax(form, callback) {
      sendAjax(form.attr('action') || './send.php', form.serialize(), callback);
    }
    /**
     * Отправляем ajax запрос
     * @param {string} url ссылка
     * @param {object} data данные
     * @param {function} callback функция обратного вызова
     */


    function sendAjax(url, data, callback) {
      callback = callback || function () {};

      $.ajax({
        url: url,
        dataType: 'json',
        type: 'POST',
        data: data,
        success: function success(data) {
          callback(data);
        },
        error: function error(data) {
          callback({
            'type': 'error',
            'class': 'danger',
            'text': data['responseText']
          });
        }
      });
    }
    /**
     * Обработка отправки формы
     * @param {object} form jQuery объект формы
     * @param {object} data данные полученные от сервера
     */


    function formSendResult(form, data) {
      form.next().show();
      form.html('<p class="boocking__text">Спасибо! Ваша заявка успешно отправлена.</br>Наши менеджеры свяжутся с Вами в ближайшее время.</p>'); // form.hide();
      //ym(0, 'reachGoal', 'lead');
      //ga('send','event','form','lead');
      //цель отправка формы
      //reachGoal(form.data('goal'), '');
    }

    function arrayToDict(arr) {
      var dict = {};

      for (var i in arr) {
        dict[arr[i]['name']] = arr[i]['value'];
      }

      return dict;
    }
    /**
     * Достижение цели
     * @param {string} goal название цели
     * @param {string} added дополнительная информация
     */


    function reachGoal(goal, added) {
      reachGoalYM(goal, added);
      reachGoalGA(goal);
    }
    /**
     * Отправка цели в Метрику
     * @param {string} goal название цели
     * @param {string} added дополнительная информация
     */


    function reachGoalYM(goal, added) {
      if (window.yaCounter000) {
        window.yaCounter000.reachGoal(goal, added || {});
      }
    }
    /**
     * Отправка цели в Аналитику
     * @param {string} goal название цели
     */


    function reachGoalGA(goal) {
      if (window.gtag) {
        gtag('event', 'event_name', {
          'event_category': goal
        });
      }
    }
    /**
     * Заказ обратного звонка CallTouch
     * @param {string} formKey ключ формы
     * @param {string} phone номер телефона
     */


    function calltouchRecall(formKey, phone) {
      // создаем звонок
      window.ctw.createRequest(formKey, phone, [], function (success, data) {
        console.log(success, data);

        if (success) {
          console.log('Создана заявка на колбек, идентификатор: ' + data.callbackRequestId);
        } else {
          switch (data.type) {
            case 'request_throttle_timeout':
            case 'request_throttle_count':
              console.log('Достигнут лимит создания заявок, попробуйте позже');
              break;

            case 'request_phone_blacklisted':
              console.log('номер телефона находится в черном списке');
              break;

            case 'validation_error':
              console.log('были переданы некорректные данные');
              break;

            default:
              console.log('Во время выполнения запроса произошла ошибка: ' + data.type);
          }
        }
      });
    }
    /**
    * Создание завяки для обратного звонка Calltouch
    * @param {object} data данные формы
    */


    function calltouchRequest(phone, key) {
      if (window.ctw) {
        window.ctw.createRequest(key, phone.replace(/\D+/g, ""), [], function (success, data) {
          console.log(success, data);

          if (success) {
            console.log("Создана заявка на колбек, идентификатор: " + data.callbackRequestId);
          } else {
            var unsent_data = [{
              'name': key,
              'phone': phone.replace(/\D+/g, ""),
              'error': data.type
            }];
            $('input[name="request_error"]').val(unsent_data);

            switch (data.type) {
              case "request_throttle_timeout":
              case "request_throttle_count":
                console.log("Достигнут лимит создания заявок, попробуйте позже");
                break;

              case "request_phone_blacklisted":
                console.log("номер телефона находится в черном списке");
                break;

              case "validation_error":
                console.log("были переданы некорректные данные");
                break;

              default:
                console.log("Во время выполнения запроса произошла ошибка: " + data.type);
            }
          }
        });
      }
    } // Вызов модалки CallTouch


    $('[data-src="#calltouch"]').on('click', function () {
      window.ct('modules', 'widgets', 'openExternal', 'promotion', function (result) {
        console.log(result);
      });
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/parts/mask.js":
/*!******************************!*\
  !*** ./src/js/parts/mask.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["default"] = (function () {
  function initMask(app) {
    $('input[name="phone"]').attr('type', 'tel');
    $('input[name="phone"]').inputmask({
      mask: '+7 (999) 999-99-99',
      'oncomplete': function oncomplete(evt) {
        evt.target.classList.remove('invalid');
      }
    });
    $('body').on('keydown', 'input[name="phone"]', function (e) {
      var t = $(this);

      if ((t.val() === t.data('mask') || t.val() === '') && e.key === '8') {
        e.preventDefault();
      }
    });
  }

  window.app = window.app || {};
  window.app.initMask = initMask;
  initMask(window.app);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
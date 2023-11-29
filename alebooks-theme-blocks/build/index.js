/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/banner/placeholder.svg":
/*!*******************************************!*\
  !*** ./src/blocks/banner/placeholder.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgPlaceholder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgPlaceholder(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12l-3-3-5 5-2-2-6 6V4h16zM6 8.5A2.5 2.5 0 118.5 11 2.5 2.5 0 016 8.5z"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+PHBhdGggZD0iTTIxLDJIM0ExLDEsMCwwLDAsMiwzVjIxYTEsMSwwLDAsMCwxLDFIMjFhMSwxLDAsMCwwLDEtMVYzQTEsMSwwLDAsMCwyMSwyWk0yMCwxNGwtMy0zLTUsNS0yLTJMNCwyMFY0SDIwWk02LDguNUEyLjUsMi41LDAsMSwxLDguNSwxMSwyLjUsMi41LDAsMCwxLDYsOC41WiI+PC9wYXRoPjwvZz48L3N2Zz4=");


/***/ }),

/***/ "./src/blocks/banner/block.js":
/*!************************************!*\
  !*** ./src/blocks/banner/block.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/banner/edit.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/banner/styles/editor.scss");






const {
  InnerBlocks
} = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ || _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__;

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wp-artsolut-blocks/banner', {
  title: 'Banner',
  category: 'wp-artsolut-blocks',
  keywords: [],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/blocks/banner/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/banner/edit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _placeholder_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./placeholder.svg */ "./src/blocks/banner/placeholder.svg");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../icons/icons */ "./src/icons/icons.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/banner/styles/editor.scss");









const {
  InnerBlocks
} = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ || _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__;



const ALLOWED_BLOCKS = ['wp-artsolut-blocks/grid', 'wp-artsolut-blocks/column', 'core/paragraph', 'core/heading', 'core/group'];
class BlockEdit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  onSelectMedia = media => {
    const {
      attributes,
      setAttributes
    } = this.props;
    const result = {
      photoId: media.id,
      photoUrl: media.url || media.source_url,
      photoAlt: media.alt
    };
    setAttributes(result);
  };
  render() {
    const {
      attributes,
      setAttributes,
      hasChildBlocks
    } = this.props;
    const {
      title,
      text,
      photoId,
      photoUrl,
      photoAlt,
      subtitle
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      className: "art-media-upload",
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        icon: _icons_icons__WEBPACK_IMPORTED_MODULE_8__["default"].banner,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Imagen banner", "wp-arstolut-blocks")))
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, !photoId ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      onSelect: media => {
        this.onSelectMedia(media);
      },
      value: photoId,
      allowedTypes: ["image", "svg"],
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
          onClick: open
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Subir imagen", "wp-arstolut-blocks"));
      }
    }) : null, photoId ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      onSelect: media => {
        this.onSelectMedia(media);
      },
      value: photoId,
      allowedTypes: ["image"],
      render: _ref2 => {
        let {
          open
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Click en la imagen para editarla o modificarla.", "wp-arstolut-blocks")
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          href: "#",
          onClick: open,
          style: {
            display: "block"
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: photoUrl,
          alt: photoAlt
        })));
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        marginTop: -20
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: e => {
        setAttributes({
          photoId: "",
          photoUrl: ""
        });
        e.preventDefault();
      },
      isPrimary: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Eliminar imagen", "wp-arstolut-blocks"))) : null)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "art-banner"
    }, photoId ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "art-banner__image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: photoUrl,
      alt: photoAlt
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "art-banner__image placeholder"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: _placeholder_svg__WEBPACK_IMPORTED_MODULE_7__["default"]
    }))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, props) => {
  const {
    clientId
  } = props;
  const blockEditor = select('core/block-editor');
  return {
    hasChildBlocks: blockEditor ? blockEditor.getBlockOrder(clientId).length > 0 : false
  };
})(BlockEdit));

/***/ }),

/***/ "./src/blocks/faq/block.js":
/*!*********************************!*\
  !*** ./src/blocks/faq/block.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultItem: () => (/* binding */ defaultItem)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/faq/edit.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/faq/styles/editor.scss");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/faq/icons.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('wp-artsolut-blocks/faq', {
  title: 'FAQ',
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_4__["default"].timelinenew,
  category: 'wp-artsolut-blocks',
  keywords: [],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => {
    return null;
  }
});
const defaultItem = {
  icon: '',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Texto visible'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Texto oculto')
};

/***/ }),

/***/ "./src/blocks/faq/edit.js":
/*!********************************!*\
  !*** ./src/blocks/faq/edit.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/faq/icons.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block */ "./src/blocks/faq/block.js");








class BlockEdit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  addNewItem = () => {
    this.props.setAttributes({
      items: [...this.props.attributes.items, {
        ..._block__WEBPACK_IMPORTED_MODULE_6__.defaultItem,
        title: _block__WEBPACK_IMPORTED_MODULE_6__.defaultItem.title,
        icon: _block__WEBPACK_IMPORTED_MODULE_6__.defaultItem.icon
      }]
    });
  };
  onChangePropertyItem = (() => {
    var _this = this;
    return function (property, value, index) {
      let withMutation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      const items = withMutation ? [..._this.props.attributes.items] : _this.props.attributes.items;
      if (!items[index] || typeof items[index][property] !== 'string') {
        return;
      }
      items[index][property] = value;
      _this.props.setAttributes({
        items: items
      });
    };
  })();
  removeItem = index => {
    const items = [...this.props.attributes.items];
    if (items.length === 1) {
      this.props.setAttributes({
        items: [_block__WEBPACK_IMPORTED_MODULE_6__.defaultItem]
      });
    } else {
      items.splice(index, 1);
      this.props.setAttributes({
        items: items
      });
    }
  };
  render() {
    const {
      attributes,
      setAttributes,
      className,
      isSelected
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "art-newtimeline"
    }, attributes.items && attributes.items.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: item.key,
      className: "timeline-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "remove dashicons dashicons-no",
      onClick: () => this.removeItem(index)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_5__["default"].delete
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "timeline-row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Texto visible'),
      value: item.title,
      onChange: value => this.onChangePropertyItem('title', value, index, true)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "timeline-row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Texto oculto'),
      value: item.description,
      onChange: value => this.onChangePropertyItem('description', value, index, true)
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editPadding"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "addWhite",
      onClick: this.addNewItem
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Añadir elemento')))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockEdit);

/***/ }),

/***/ "./src/blocks/faq/icons.js":
/*!*********************************!*\
  !*** ./src/blocks/faq/icons.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.timelinenew = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  fill: "#000000",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "SVGRepo_bgCarrier",
  "stroke-width": "0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "SVGRepo_tracerCarrier",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "SVGRepo_iconCarrier"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12,22A10,10,0,1,0,2,12,10,10,0,0,0,12,22Zm0-2a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,20ZM8,8.994a3.907,3.907,0,0,1,2.319-3.645,4.061,4.061,0,0,1,3.889.316,4,4,0,0,1,.294,6.456,3.972,3.972,0,0,0-1.411,2.114,1,1,0,0,1-1.944-.47,5.908,5.908,0,0,1,2.1-3.2,2,2,0,0,0-.146-3.23,2.06,2.06,0,0,0-2.006-.14,1.937,1.937,0,0,0-1.1,1.8A1,1,0,0,1,8,9Z"
})));
icons.plus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  className: "dashicon dashicons-insert",
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/blocks/panaderia/block.js":
/*!***************************************!*\
  !*** ./src/blocks/panaderia/block.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/panaderia/edit.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/panaderia/styles/editor.scss");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('wp-artsolut-blocks/panaderia', {
  title: 'Panaderia',
  category: 'wp-artsolut-blocks',
  keywords: [],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/panaderia/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/panaderia/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/panaderia/styles/editor.scss");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/panaderia/icons.js");








const colors = [{
  name: "pastel",
  color: "#FFEFCF"
}, {
  name: "red",
  color: "#F5333F"
}, {
  name: "orange",
  color: "#FF7A00"
}, {
  name: "blue",
  color: "#213A51"
}];
function getColorName(colorValue) {
  const color = colors.find(c => c.color === colorValue);
  if (color) {
    return color.name;
  } else {
    return null;
  }
}
class BlockEdit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      cardTitle,
      cardDirection,
      imageAlt,
      imageUrl,
      coverColor,
      coverColorName,
      post
    } = attributes;
    const resetImage = () => {
      setAttributes({
        imageAlt: '',
        imageUrl: ''
      });
    };
    const setColorName = color => {
      setAttributes({
        coverColorName: getColorName(color)
      });
    };
    const getImageButton = openEvent => {
      if (attributes.imageUrl) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: ""
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.imageUrl,
          onClick: openEvent,
          className: "image"
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "button-container"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          isDefault: true,
          isDestructive: true,
          onClick: () => resetImage()
        }, "Reset")));
      } else {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "button-container"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: openEvent,
          className: "button button-large"
        }, "Selecciona una imagen"));
      }
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      className: "art-media-upload",
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        icon: _icons_js__WEBPACK_IMPORTED_MODULE_6__["default"].card,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Opciones tarjeta producto", "wp-arstolut-blocks")))
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      className: "textos"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "Titulo de la tarjeta",
      help: "titulo que aparece al pasar el rat\xF3n por encima de la tarjeta",
      value: cardTitle,
      onChange: value => setAttributes({
        cardTitle: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
      label: "Direcci\xF3n",
      help: "Introduzca la direcci\xF3n de la panader\xEDa",
      value: cardDirection,
      onChange: value => {
        setAttributes({
          cardDirection: value
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      onSelect: media => {
        setAttributes({
          imageAlt: media.alt,
          imageUrl: media.url
        });
      },
      type: "image",
      value: attributes.imageID,
      render: _ref => {
        let {
          open
        } = _ref;
        return getImageButton(open);
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-label"
    }, "Color del hover"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
      colors: colors,
      className: "art-mt-xs",
      value: coverColor,
      onChange: newColor => {
        setColorName(newColor);
        setAttributes({
          coverColor: newColor
        });
      },
      disableCustomColors: true
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      className: "art-linkcontrol",
      header: "Enlace"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-label"
    }, "Enlace de la tarjeta"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalLinkControl, {
      label: "Enlace",
      searchInputPlaceholder: "Buscar...",
      value: attributes.post,
      settings: [{
        id: 'opensInNewTab',
        title: 'Abrir en ventana nueva?'
      }],
      onChange: newPost => setAttributes({
        post: newPost
      }),
      withCreateSuggestion: false
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `panaderia-card ${getColorName(coverColor)}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageUrl
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cover"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "body"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "datos"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, cardTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "direccion"
    }, cardDirection)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flecha"
    }, "Ver en mapas", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "46",
      height: "34",
      viewBox: "0 0 46 34",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M0 17H45.5",
      stroke: "currentColor",
      "stroke-width": "2"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M46 17C40.3333 17 29 13.6 29 0",
      stroke: "currentColor",
      "stroke-width": "2"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M29 34C29 28.3333 32.4 17 46 17",
      stroke: "currentColor",
      "stroke-width": "2"
    }))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockEdit);

/***/ }),

/***/ "./src/blocks/panaderia/icons.js":
/*!***************************************!*\
  !*** ./src/blocks/panaderia/icons.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.card = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17.999 17C19.102 17 19.999 16.103 19.999 15V5C19.999 3.897 19.102 3 17.999 3H5.999C4.896 3 3.999 3.897 3.999 5V15C3.999 16.103 4.896 17 5.999 17H17.999ZM5.999 5H17.999L18.001 15H5.999V5ZM3.999 19H19.999V21H3.999V19Z",
  fill: "black"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/blocks/product-card/block.js":
/*!******************************************!*\
  !*** ./src/blocks/product-card/block.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/product-card/edit.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/product-card/styles/editor.scss");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('wp-artsolut-blocks/product-card', {
  title: 'Tarjeta de producto',
  category: 'wp-artsolut-blocks',
  keywords: [],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/product-card/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/product-card/edit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/product-card/styles/editor.scss");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/product-card/icons.js");








const colors = [{
  name: "pastel",
  color: "#FFEFCF"
}, {
  name: "red",
  color: "#F5333F"
}, {
  name: "orange",
  color: "#FF7A00"
}];
function getColorName(colorValue) {
  const color = colors.find(c => c.color === colorValue);
  if (color) {
    return color.name;
  } else {
    return null;
  }
}
class BlockEdit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      attributes,
      setAttributes,
      className
    } = this.props;
    const {
      cardTitle,
      imageAlt,
      imageUrl,
      coverColor,
      coverColorName,
      post
    } = attributes;
    const resetImage = () => {
      setAttributes({
        imageAlt: '',
        imageUrl: ''
      });
    };
    const setColorName = color => {
      setAttributes({
        coverColorName: getColorName(color)
      });
    };
    const getImageButton = openEvent => {
      if (attributes.imageUrl) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: ""
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: attributes.imageUrl,
          onClick: openEvent,
          className: "image"
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "button-container"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          isDefault: true,
          isDestructive: true,
          onClick: () => resetImage()
        }, "Reset")));
      } else {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "button-container"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: openEvent,
          className: "button button-large"
        }, "Selecciona una imagen"));
      }
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      className: "art-media-upload",
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        icon: _icons_js__WEBPACK_IMPORTED_MODULE_6__["default"].card,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Opciones tarjeta producto", "wp-arstolut-blocks")))
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "Titulo de la tarjeta",
      help: "titulo que aparece al pasar el rat\xF3n por encima de la tarjeta",
      value: cardTitle,
      onChange: value => setAttributes({
        cardTitle: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      onSelect: media => {
        setAttributes({
          imageAlt: media.alt,
          imageUrl: media.url
        });
      },
      type: "image",
      value: attributes.imageID,
      render: _ref => {
        let {
          open
        } = _ref;
        return getImageButton(open);
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-label"
    }, "Color del hover"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
      colors: colors,
      className: "art-mt-xs",
      value: coverColor,
      onChange: newColor => {
        setColorName(newColor);
        setAttributes({
          coverColor: newColor
        });
      },
      disableCustomColors: true
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      className: "art-linkcontrol",
      header: "Enlace"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-label"
    }, "Enlace de l atarjeta"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalLinkControl, {
      label: "Enlace",
      searchInputPlaceholder: "Buscar...",
      value: attributes.post,
      settings: [{
        id: 'opensInNewTab',
        title: 'Abrir en ventana nueva?'
      }],
      onChange: newPost => setAttributes({
        post: newPost
      }),
      withCreateSuggestion: false
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `product-card ${getColorName(coverColor)}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageUrl
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cover"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "body"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, cardTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flecha"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "46",
      height: "34",
      viewBox: "0 0 46 34",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M0 17H45.5",
      stroke: "white",
      "stroke-width": "2"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M46 17C40.3333 17 29 13.6 29 0",
      stroke: "white",
      "stroke-width": "2"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M29 34C29 28.3333 32.4 17 46 17",
      stroke: "white",
      "stroke-width": "2"
    }))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockEdit);

/***/ }),

/***/ "./src/blocks/product-card/icons.js":
/*!******************************************!*\
  !*** ./src/blocks/product-card/icons.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.card = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M9.19999 5.99998L7.19999 3.99998H20C21.11 3.99998 22 4.88998 22 5.99998V18C22 18.24 21.96 18.47 21.88 18.68L20 16.8V5.99998H9.19999ZM22.11 21.46L20.84 22.73L18.11 20H3.99999C3.46955 20 2.96084 19.7893 2.58577 19.4142C2.2107 19.0391 1.99999 18.5304 1.99999 18V5.99998C1.99999 5.41998 2.24999 4.89998 2.64999 4.53998L1.10999 2.99998L2.38999 1.72998L6.65999 5.99998L18.65 18H18.66L20.57 19.91H20.56L22.11 21.46ZM16.11 18L4.10999 5.99998H3.99999V18H16.11Z",
  fill: "black"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/blocks/product-slider/block.js":
/*!********************************************!*\
  !*** ./src/blocks/product-slider/block.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/product-slider/edit.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/product-slider/styles/editor.scss");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('wp-artsolut-blocks/product-slider', {
  title: 'Slider de productos',
  category: 'wp-artsolut-blocks',
  keywords: [],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/blocks/product-slider/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/product-slider/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/product-slider/styles/editor.scss");






const {
  InnerBlocks,
  InspectorControls,
  BlockControls,
  MediaUpload,
  MediaUploadCheck,
  __experimentalLinkControl: LinkControl
} = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ || _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__; // Fallback to 

const ALLOWED_BLOCKS = ['core/gallery'];
const MY_TEMPLATE = [['core/gallery', {
  className: 'product-gallery'
}]];
class BlockEdit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      className: "art-product-gallery",
      template: MY_TEMPLATE,
      templateLock: false,
      allowedBlocks: ALLOWED_BLOCKS
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockEdit);

/***/ }),

/***/ "./src/blocks/timeline/block.js":
/*!**************************************!*\
  !*** ./src/blocks/timeline/block.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultItem: () => (/* binding */ defaultItem)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/timeline/edit.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/timeline/styles/editor.scss");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/timeline/icons.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('wp-artsolut-blocks/timeline', {
  title: 'Timeline',
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_4__["default"].timelinenew,
  category: 'wp-artsolut-blocks',
  keywords: [],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => {
    return null;
  }
});
const defaultItem = {
  icon: '',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Titulo'),
  image: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('imagen'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('texto')
};

/***/ }),

/***/ "./src/blocks/timeline/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/timeline/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/timeline/icons.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block */ "./src/blocks/timeline/block.js");








class BlockEdit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  addNewItem = () => {
    this.props.setAttributes({
      items: [...this.props.attributes.items, {
        ..._block__WEBPACK_IMPORTED_MODULE_6__.defaultItem,
        icon: _block__WEBPACK_IMPORTED_MODULE_6__.defaultItem.icon
      }]
    });
  };
  onChangePropertyItem = (() => {
    var _this = this;
    return function (property, value, index) {
      let withMutation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      const items = withMutation ? [..._this.props.attributes.items] : _this.props.attributes.items;
      if (!items[index] || typeof items[index][property] !== 'string') {
        return;
      }
      items[index][property] = value;
      _this.props.setAttributes({
        items: items
      });
    };
  })();
  onImageSelect = (media, index) => {
    // Handle image selection and store it in the item's 'image' property.
    this.onChangePropertyItem('image', media.url, index, true);
  };
  removeItem = index => {
    const items = [...this.props.attributes.items];
    if (items.length === 1) {
      this.props.setAttributes({
        items: [_block__WEBPACK_IMPORTED_MODULE_6__.defaultItem]
      });
    } else {
      items.splice(index, 1);
      this.props.setAttributes({
        items: items
      });
    }
  };
  render() {
    const {
      attributes,
      setAttributes,
      className,
      isSelected
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "art-newtimeline"
    }, attributes.items && attributes.items.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: item.key,
      className: "timeline-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "remove dashicons dashicons-no",
      onClick: () => this.removeItem(index)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_5__["default"].delete
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "timeline-row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      onSelect: media => this.onImageSelect(media, index),
      type: "image",
      value: item.image,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
          onClick: open,
          isPrimary: true
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Seleccionar Imagen')), item.image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: item.image,
          alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selected Image')
        }));
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "timeline-row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Titulo'),
      value: item.title,
      onChange: value => this.onChangePropertyItem('title', value, index, true)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Descripcion'),
      value: item.description,
      onChange: value => this.onChangePropertyItem('description', value, index, true)
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editPadding"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "addWhite",
      onClick: this.addNewItem
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Añadir elemento')))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockEdit);

/***/ }),

/***/ "./src/blocks/timeline/icons.js":
/*!**************************************!*\
  !*** ./src/blocks/timeline/icons.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.timelinenew = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "SVGRepo_bgCarrier",
  "stroke-width": "0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "SVGRepo_tracerCarrier",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "SVGRepo_iconCarrier"
}, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7 7h4v4H7V7zm-2 6v-2h2v2H5zm0 0v4H1v-4h4zm8 0h-2v-2h2v2zm4 0h-4v4h4v-4zm2-2v2h-2v-2h2zm0 0h4V7h-4v4z",
  fill: "#000000"
}), " "));
icons.plus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  className: "dashicon dashicons-insert",
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/extend/aspect/icons.js":
/*!************************************!*\
  !*** ./src/extend/aspect/icons.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.aspect = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M19 12H17V15H14V17H19V12ZM7 9H10V7H5V12H7V9ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19.01H3V4.99H21V19.01Z",
  fill: "black"
}));
icons.iconDesktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M20 4H4C2.89543 4 2 4.83147 2 5.85714V15.1429C2 16.1685 2.89543 17 4 17H20C21.1046 17 22 16.1685 22 15.1429V5.85714C22 4.83147 21.1046 4 20 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M8 20H16",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 18V20",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
icons.iconTablet = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16.6429 4H7.35714C6.33147 4 5.5 4.71634 5.5 5.6V18.4C5.5 19.2837 6.33147 20 7.35714 20H16.6429C17.6685 20 18.5 19.2837 18.5 18.4V5.6C18.5 4.71634 17.6685 4 16.6429 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 17.5H12.01",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
icons.iconMobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15.5714 4H8.42857C7.63959 4 7 4.71634 7 5.6V18.4C7 19.2837 7.63959 20 8.42857 20H15.5714C16.3604 20 17 19.2837 17 18.4V5.6C17 4.71634 16.3604 4 15.5714 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 17.5H12.01",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/extend/aspect/index.js":
/*!************************************!*\
  !*** ./src/extend/aspect/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons */ "./src/icons.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tools */ "./src/tools/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons */ "./src/extend/aspect/icons.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);













let initalOpenPanel = false;
const allowedBlocks = ['wp-artsolut-blocks/column'];
let aspectOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1 / 1', 'wp-artsolut-blocks'),
  value: '1:1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('16 / 9', 'wp-artsolut-blocks'),
  value: '16:9'
}];
class AspectComponent extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      aspectXs,
      aspectMd,
      aspectXl
    } = attributes;
    let allow = false;
    const name = this.props.name;
    if (!allow) {
      allow = allowedBlocks.includes(name);
    }
    if (!allow) {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_10__["default"].aspect,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Relación de aspecto'), " ")),
      initialOpen: initalOpenPanel,
      onToggle: () => {
        initalOpenPanel = !initalOpenPanel;
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TabPanel, {
      className: "art-ext-tabpanel",
      tabs: [{
        name: 'xl',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_10__["default"].iconDesktop)),
        className: 'art-ext-tabpanel-tab'
      }, {
        name: 'md',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_10__["default"].iconTablet)),
        className: 'art-ext-tabpanel-tab'
      }, {
        name: 'xs',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_10__["default"].iconMobile)),
        className: 'art-ext-tabpanel-tab'
      }]
    }, tabData => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding superior', 'wp-artsolut-blocks'),
        className: "art-ext-basecontrol"
      }, tabData.name === 'xl' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, aspectOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: aspectXl == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (aspectXl === option.value) {
            setAttributes({
              aspectXl: ''
            });
          } else {
            setAttributes({
              aspectXl: option.value
            });
          }
        }
      }, option.label)))) : '', tabData.name === 'md' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, aspectOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: aspectMd == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (aspectMd == option.value) {
            setAttributes({
              aspectMd: ''
            });
          } else {
            setAttributes({
              aspectMd: option.value
            });
          }
        }
      }, option.label)))) : '', tabData.name === 'xs' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, aspectOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: aspectXs == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (aspectXs === option.value) {
            setAttributes({
              aspectXs: ''
            });
          } else {
            setAttributes({
              aspectXs: option.value
            });
          }
        }
      }, option.label)))) : ''));
    })));
  }
}
function addAttributes(settings) {
  const {
    attributes
  } = settings;
  if (allowedBlocks.includes(settings.name)) {
    return {
      ...settings,
      attributes: {
        ...attributes,
        aspectXs: {
          type: 'string',
          default: ''
        },
        aspectMd: {
          type: 'string',
          default: ''
        },
        aspectXl: {
          type: 'string',
          default: ''
        }
      }
    };
  }
  return settings;
}
const withInspectorControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockEdit => function (props) {
  const {
    attributes
  } = props;
  if (!allowedBlocks.includes(props.name)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
  }
  const hasCustomClassName = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.hasBlockSupport)(props.name, 'customClassName', true);
  let classes = [];
  props.attributes.className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(props.attributes.className, classes);
  if (hasCustomClassName && props.isSelected) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AspectComponent, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, 'withAspectComponent');
function applyExtraClass(extraProps, blockType, attributes) {
  if (!allowedBlocks.includes(blockType.name)) {
    return extraProps;
  }
  let classes = [];

  /* if (attributes.aspect && attributes.aspect !== '' )
  	classes.push(`aspect-ratio-${attributes.aspect}`) */

  return {
    ...extraProps,
    className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, classes)
  };
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'wp-artsolut-blocks/AspectComponent/attributes', addAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', 'wp-artsolut-blocks/AspectComponent/advanced', withInspectorControl);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.getSaveContent.extraProps', 'wp-artsolut-blocks/AspectComponent/applyExtraClass', applyExtraClass);

/***/ }),

/***/ "./src/extend/button-options/icons.js":
/*!********************************************!*\
  !*** ./src/extend/button-options/icons.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.options = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "64",
  height: "64",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2 20h20v1H2zm-.14-2L8.54 3.028h.92L16.14 18h-1.09l-2.24-5H5.19l-2.24 5zm3.777-6h6.726L9 4.491zM18 16h4v-1h-4zM14 5v1h8V5zm2 6h6v-1h-6z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})));
icons.arrow = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1 11L11 1",
  stroke: "#000000",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1 1H11V11",
  stroke: "#000000",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/extend/button-options/index.js":
/*!********************************************!*\
  !*** ./src/extend/button-options/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons.js */ "./src/extend/button-options/icons.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");












let initalOpenPanel = false;
const allowedBlocks = ['wp-artsolut-blocks/button'];
const colors = [{
  name: 'transparent',
  color: 'transparent'
}, {
  name: 'white',
  color: '#FFFFFF'
}, {
  name: 'black',
  color: '#000000'
}, {
  name: "red",
  color: "#F0392D"
}];
const iconlist = [{
  label: 'Flecha',
  value: 'arrow'
}];
function getColorName(colorValue) {
  const color = colors.find(c => c.color === colorValue);
  if (color) {
    return color.name;
  } else {
    return null;
  }
}
function removeClasses(classNamesString, classToken) {
  return classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(classNamesString.split(' ')).split(' ').filter(className => !className.startsWith(classToken)).join(' ');
}
class ButtonOptionsComponent extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      attributes,
      setAttributes,
      classNames
    } = this.props;
    const {
      iconName,
      buttonColor,
      showAsLink,
      extendButton,
      catButton
    } = attributes;
    let allow = false;
    const name = this.props.name;
    if (!allow) {
      allow = allowedBlocks.includes(name);
    }
    if (!allow) {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: _icons_js__WEBPACK_IMPORTED_MODULE_9__["default"].options,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Configuración botón'), " ")),
      initialOpen: initalOpenPanel,
      onToggle: () => {
        initalOpenPanel = !initalOpenPanel;
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, {
      className: "art-mt-xs"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
      label: "Icono",
      help: "Seleccione el icono que se desa mostrar en el boton",
      className: "art-mt-xs"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      class: "art-btn-group"
    }, iconlist.map(option => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: option.value == iconName ? 'primary' : '',
        className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()({
          'is-active': 'left' === option.value
        }),
        onClick: () => setAttributes({
          iconName: option.value
        }),
        icon: _icons_js__WEBPACK_IMPORTED_MODULE_9__["default"][option.value],
        label: option.label
      }));
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      isDestructive: true,
      key: "resetIcons",
      onClick: () => setAttributes({
        iconName: ''
      })
    }, "Restaurar"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, {
      className: "art-mt-xs"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
      label: "Colores",
      help: "Seleccione el color del bot\xF3n"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ColorPalette, {
      colors: colors,
      className: "art-mt-xs",
      value: buttonColor,
      onChange: newColor => {
        setAttributes({
          buttonColor: newColor
        });
      },
      disableCustomColors: true
    })))));
  }
}
function addAttributes(settings) {
  const {
    attributes
  } = settings;
  if (allowedBlocks.includes(settings.name)) {
    return {
      ...settings,
      attributes: {
        ...attributes,
        iconName: {
          type: 'string',
          default: ''
        },
        buttonColor: {
          type: 'string',
          default: ''
        },
        showAsLink: {
          type: 'boolean',
          default: false
        },
        extendButton: {
          type: 'boolean',
          default: false
        },
        catButton: {
          type: 'boolean',
          default: false
        }
      }
    };
  }
  return settings;
}
const withButtonOptionsControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockEdit => function (props) {
  const {
    attributes
  } = props;
  if (!allowedBlocks.includes(props.name)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
  }
  const hasCustomClassName = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.hasBlockSupport)(props.name, 'customClassName', true);
  if (attributes.className) {
    attributes.className = removeClasses(attributes.className, "ico-");
    attributes.className = removeClasses(attributes.className, "color-");
  }
  let classes = [];
  classes.push({
    "aslink": attributes.showAsLink
  });
  classes.push({
    "extendButton": attributes.extendButton
  });
  classes.push({
    "catButton": attributes.catButton
  });
  if (attributes.iconName) {
    classes.push(`ico-${attributes.iconName}`);
  }
  let colorName = getColorName(attributes.buttonColor);
  if (colorName) {
    classes.push(`color-${colorName}`);
  }
  props.attributes.className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(props.attributes.className, classes);
  if (hasCustomClassName && props.isSelected) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonOptionsComponent, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, 'withButtonOptionsControl');
function applyExtraClass(extraProps, blockType, attributes) {
  if (!allowedBlocks.includes(blockType.name)) {
    return extraProps;
  }
  let classes = [];
  classes.push({
    "aslink": attributes.showAsLink
  });
  classes.push({
    "extendButton": attributes.extendButton
  });
  classes.push({
    "catButton": attributes.catButton
  });
  if (attributes.iconName) {
    classes.push(`ico-${iconName}`);
  }
  let colorName = getColorName(attributes.buttonColor);
  if (colorName) {
    classes.push(`color-${colorName}`);
  }
  return {
    ...extraProps,
    className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, classes)
  };
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'wp-artsolut-blocks/button-options/attributes', addAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', 'wp-artsolut-blocks/button-options/advanced', withButtonOptionsControl);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.getSaveContent.extraProps', 'wp-artsolut-blocks/button-options/applyExtraClass', applyExtraClass);

/***/ }),

/***/ "./src/extend/column-color/icons.js":
/*!******************************************!*\
  !*** ./src/extend/column-color/icons.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.options = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "64",
  height: "64",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2 20h20v1H2zm-.14-2L8.54 3.028h.92L16.14 18h-1.09l-2.24-5H5.19l-2.24 5zm3.777-6h6.726L9 4.491zM18 16h4v-1h-4zM14 5v1h8V5zm2 6h6v-1h-6z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})));
icons.pantone = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M20 13.998C19.908 14.063 18 16.081 18 17.498C18 18.992 18.949 19.946 20 19.998C20.906 20.042 22 19.107 22 17.498C22 15.998 20.092 14.063 20 13.998ZM3.414 12.998C3.414 13.532 3.622 14.034 4 14.412L9.586 19.998C9.964 20.376 10.466 20.584 11 20.584C11.534 20.584 12.036 20.376 12.414 19.998L19.414 12.998L18.707 12.291L11 4.584L8.707 2.291L7.293 3.705L9.586 5.998L4 11.584C3.622 11.962 3.414 12.464 3.414 12.998ZM11 7.412L16.586 12.998L11 18.584H11.001L11 19.584V18.584L5.414 12.998L11 7.412Z",
  fill: "black"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/extend/column-color/index.js":
/*!******************************************!*\
  !*** ./src/extend/column-color/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons.js */ "./src/extend/column-color/icons.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);











let initalOpenPanel = false;
const allowedBlocks = ['wp-artsolut-blocks/column'];
let colors = [{
  name: "white",
  color: "#FFFFFF"
}, {
  name: "light-grey",
  color: "#F8F7F7"
}, {
  name: "black",
  color: "#1C1B1B"
}, {
  name: "red",
  color: "#F0392D"
}, {
  name: "black-b",
  color: "#000000"
}];
function removeClasses(classNamesString, classToken) {
  return classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(classNamesString.split(' ')).split(' ').filter(className => !className.startsWith(classToken)).join(' ');
}
function getColorName(colorValue) {
  const color = colors.find(c => c.color === colorValue);
  if (color) {
    return color.name;
  } else {
    return null;
  }
}
class ColumnColorComponent extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      columnBgColor,
      columnBgColorName
    } = attributes;
    let allow = false;
    const name = this.props.name;

    /* function setColorName(value) {
    	let result = '';
    			switch (value){
    		case '#F5F5F6':
    			result = 'gray';
    			break;
    		case '#F5F5F6':
    			result = 'gray';
    			break;
    		case '#F5F5F6':
    			result = 'gray';
    			break;
    		default:
    			result = '';
    			break;
    	}
    	setAttributes({ columnBgColorName: result });
    } */

    if (!allow) {
      allow = allowedBlocks.includes(name);
    }
    if (!allow) {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].pantone,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Colores'), " ")),
      initialOpen: initalOpenPanel,
      onToggle: () => {
        initalOpenPanel = !initalOpenPanel;
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color de fondo'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Seleccione el color de fondo de la columna'),
      className: "art-ext-basecontrol"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ColorPalette, {
      value: columnBgColor,
      colors: colors,
      onChange: value => {
        setAttributes({
          columnBgColor: value,
          columnBgColorName: getColorName(value)
        });
      },
      disableCustomColors: true
    }))));
  }
}
function addAttributes(settings) {
  const {
    attributes
  } = settings;
  if (allowedBlocks.includes(settings.name)) {
    return {
      ...settings,
      attributes: {
        ...attributes,
        columnBgColor: {
          type: 'string',
          default: ''
        },
        columnBgColorName: {
          type: 'string',
          default: ''
        }
      }
    };
  }
  return settings;
}
const withColumnColorControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockEdit => function (props) {
  const {
    attributes
  } = props;
  if (!allowedBlocks.includes(props.name)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
  }
  const hasCustomClassName = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.hasBlockSupport)(props.name, 'customClassName', true);
  if (attributes.className) attributes.className = removeClasses(attributes.className, 'bg-');
  let classes = [];
  let colorName = attributes.columnBgColorName;
  if (colorName) {
    classes.push(`bg-${colorName}`);
  }
  attributes.className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(attributes.className, classes);
  if (hasCustomClassName && props.isSelected) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColumnColorComponent, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, 'withColumnColorControl');
function applyExtraClass(extraProps, blockType, attributes) {
  if (!allowedBlocks.includes(blockType.name)) {
    return extraProps;
  }
  const {
    columnBgColor,
    columnBgColorName
  } = attributes;
  let classes = [];
  let colorName = columnBgColorName;
  if (colorName) {
    classes.push(`bg-${colorName}`);
  }
  return {
    ...extraProps,
    className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, classes)
  };
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'wp-artsolut-blocks/column-color-component/attributes', addAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', 'wp-artsolut-blocks/column-color-component/advanced', withColumnColorControl);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.getSaveContent.extraProps', 'wp-artsolut-blocks/column-color-component/applyExtraClass', applyExtraClass);

/***/ }),

/***/ "./src/extend/column-options/icons.js":
/*!********************************************!*\
  !*** ./src/extend/column-options/icons.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.options = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 32 32",
  version: "1.1",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "SVGRepo_bgCarrier",
  "stroke-width": "0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "SVGRepo_tracerCarrier",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "SVGRepo_iconCarrier"
}, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "icomoon-ignore"
}, " "), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17.599 3.738v2.598l0.8 0.207c0.905 0.234 1.768 0.597 2.566 1.081l0.715 0.434 1.86-1.86 2.262 2.262-1.888 1.888 0.407 0.708c0.451 0.785 0.788 1.635 1.002 2.527l0.196 0.817h2.744v3.199h-2.806l-0.216 0.782c-0.233 0.844-0.583 1.654-1.040 2.406l-0.434 0.716 2.036 2.035-2.262 2.262-2.064-2.064-0.707 0.407c-0.734 0.422-1.531 0.745-2.368 0.961l-0.8 0.206v2.951h-3.199v-2.951l-0.8-0.206c-0.837-0.216-1.634-0.539-2.368-0.961l-0.708-0.407-2.064 2.064-2.262-2.262 2.036-2.035-0.434-0.716c-0.457-0.753-0.807-1.562-1.040-2.406l-0.216-0.782h-2.806v-3.199h2.744l0.196-0.817c0.213-0.891 0.551-1.742 1.002-2.527l0.407-0.708-1.888-1.888 2.262-2.262 1.86 1.86 0.715-0.434c0.798-0.484 1.661-0.848 2.566-1.081l0.8-0.207v-2.598h3.199zM16 20.799c2.646 0 4.798-2.153 4.798-4.799s-2.152-4.799-4.798-4.799-4.798 2.153-4.798 4.799c0 2.646 2.152 4.799 4.798 4.799zM18.666 2.672h-5.331v2.839c-1.018 0.263-1.975 0.67-2.852 1.202l-2.022-2.022-3.769 3.77 2.065 2.065c-0.498 0.867-0.875 1.81-1.114 2.809h-2.97v5.331h3.060c0.263 0.953 0.655 1.85 1.156 2.676l-2.198 2.198 3.769 3.77 2.241-2.241c0.816 0.469 1.7 0.828 2.633 1.069v3.191h5.331v-3.191c0.933-0.241 1.817-0.6 2.633-1.069l2.241 2.241 3.769-3.77-2.198-2.198c0.501-0.826 0.893-1.723 1.156-2.676h3.060v-5.331h-2.97c-0.239-0.999-0.616-1.941-1.114-2.809l2.065-2.065-3.769-3.77-2.022 2.022c-0.877-0.532-1.834-0.939-2.852-1.202v-2.839h-0zM16 19.733c-2.062 0-3.732-1.671-3.732-3.733s1.67-3.732 3.732-3.732 3.732 1.671 3.732 3.732c0 2.062-1.67 3.733-3.732 3.733v0z",
  fill: "#000000"
}, " "), " "));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/extend/column-options/index.js":
/*!********************************************!*\
  !*** ./src/extend/column-options/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tools */ "./src/tools/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons.js */ "./src/extend/column-options/icons.js");












let initalOpenPanel = false;
const allowedBlocks = ['wp-artsolut-blocks/column'];
class ColumnOptionsComponent extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      alignCenter
    } = attributes;
    let allow = false;
    const name = this.props.name;
    if (!allow) {
      allow = allowedBlocks.includes(name);
    }
    if (!allow) {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: _icons_js__WEBPACK_IMPORTED_MODULE_10__["default"].options,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Opciones de columna'), " ")),
      initialOpen: initalOpenPanel,
      onToggle: () => {
        initalOpenPanel = !initalOpenPanel;
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
      className: "art-mt-xs",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Alinear contenido al centro"),
      checked: alignCenter,
      onChange: newValue => {
        setAttributes({
          alignCenter: newValue
        });
      }
    }))));
  }
}
function addAttributes(settings) {
  const {
    attributes
  } = settings;
  if (allowedBlocks.includes(settings.name)) {
    return {
      ...settings,
      attributes: {
        ...attributes,
        maskLeft: {
          type: 'boolean',
          default: false
        },
        alignCenter: {
          type: 'boolean',
          default: false
        }
      }
    };
  }
  return settings;
}
const withColumnOptionsComponent = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockEdit => function (props) {
  if (!allowedBlocks.includes(props.name)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
  }
  const hasCustomClassName = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.hasBlockSupport)(props.name, 'customClassName', true);
  let classes = [];
  props.attributes.className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(props.attributes.className, classes);
  if (hasCustomClassName && props.isSelected) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColumnOptionsComponent, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, 'withInspectorControl');
function applyExtraClass(extraProps, blockType, attributes) {
  if (!allowedBlocks.includes(blockType.name)) {
    return extraProps;
  }
  let classes = [];
  return {
    ...extraProps,
    className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, classes)
  };
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'wp-artsolut-blocks/ColumnOptionsComponet/attributes', addAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', 'wp-artsolut-blocks/ColumnOptionsComponet/advanced', withColumnOptionsComponent);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.getSaveContent.extraProps', 'wp-artsolut-blocks/ColumnOptionsComponet/applyExtraClass', applyExtraClass);

/***/ }),

/***/ "./src/extend/column-order/icons.js":
/*!******************************************!*\
  !*** ./src/extend/column-order/icons.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.order = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7 21H3V19H7V18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V15C3 13.9 3.9 13 5 13H7C7.53043 13 8.03914 13.2107 8.41421 13.5858C8.78929 13.9609 9 14.4696 9 15V19C9 20.11 8.11 21 7 21ZM7 15H5V16H7M5 3H7C7.53043 3 8.03914 3.21071 8.41421 3.58579C8.78929 3.96086 9 4.46957 9 5V9C9 10.11 8.11 11 7 11H5C4.46957 11 3.96086 10.7893 3.58579 10.4142C3.21071 10.0391 3 9.53043 3 9V5C3 3.9 3.9 3 5 3ZM5 9H7V5H5M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12V11Z",
  fill: "black"
}));
icons.iconDesktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M20 4H4C2.89543 4 2 4.83147 2 5.85714V15.1429C2 16.1685 2.89543 17 4 17H20C21.1046 17 22 16.1685 22 15.1429V5.85714C22 4.83147 21.1046 4 20 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M8 20H16",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 18V20",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
icons.iconTablet = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16.6429 4H7.35714C6.33147 4 5.5 4.71634 5.5 5.6V18.4C5.5 19.2837 6.33147 20 7.35714 20H16.6429C17.6685 20 18.5 19.2837 18.5 18.4V5.6C18.5 4.71634 17.6685 4 16.6429 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 17.5H12.01",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
icons.iconMobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15.5714 4H8.42857C7.63959 4 7 4.71634 7 5.6V18.4C7 19.2837 7.63959 20 8.42857 20H15.5714C16.3604 20 17 19.2837 17 18.4V5.6C17 4.71634 16.3604 4 15.5714 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 17.5H12.01",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/extend/column-order/index.js":
/*!******************************************!*\
  !*** ./src/extend/column-order/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons */ "./src/icons.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tools */ "./src/tools/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons */ "./src/extend/column-order/icons.js");














let initalOpenPanel = false;
const allowedBlocks = ['wp-artsolut-blocks/column'];
let spacingOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('xs', 'wp-artsolut-blocks'),
  value: 'xs'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('sm', 'wp-artsolut-blocks'),
  value: 'sm'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('md', 'wp-artsolut-blocks'),
  value: 'md'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('lg', 'wp-artsolut-blocks'),
  value: 'lg'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('xl', 'wp-artsolut-blocks'),
  value: 'xl'
}];
class ColumnOrderComponent extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      orderXl,
      orderMd,
      orderXs
    } = attributes;
    let allow = false;
    const name = this.props.name;
    if (!allow) {
      allow = allowedBlocks.includes(name);
    }
    if (!allow) {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_11__["default"].order,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Orden'), " ")),
      initialOpen: initalOpenPanel,
      onToggle: () => {
        initalOpenPanel = !initalOpenPanel;
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TabPanel, {
      className: "art-ext-tabpanel",
      tabs: [{
        name: 'xl',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_11__["default"].iconDesktop)),
        className: 'art-ext-tabpanel-tab'
      }, {
        name: 'md',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_11__["default"].iconTablet)),
        className: 'art-ext-tabpanel-tab'
      }, {
        name: 'xs',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_11__["default"].iconMobile)),
        className: 'art-ext-tabpanel-tab'
      }]
    }, tabData => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding superior', 'wp-artsolut-blocks'),
        className: "art-ext-basecontrol"
      }, tabData.name === 'xl' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalNumberControl, {
        label: "Orden",
        help: "Establece el orden de la columna",
        min: 0,
        max: 12,
        value: orderXl,
        size: "small",
        step: "1",
        type: "string",
        onChange: value => {
          setAttributes({
            orderXl: value
          });
        }
      })) : '', tabData.name === 'md' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalNumberControl, {
        label: "Orden",
        help: "Establece el orden de la columna",
        min: 0,
        max: 12,
        value: orderMd,
        size: "small",
        step: "1",
        type: "string",
        onChange: value => {
          setAttributes({
            orderMd: value
          });
        }
      })) : '', tabData.name === 'xs' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalNumberControl, {
        label: "Orden",
        help: "Establece el orden de la columna",
        min: 0,
        max: 12,
        value: orderXs,
        size: "small",
        step: "1",
        type: "string",
        onChange: value => {
          setAttributes({
            orderXs: value
          });
        }
      })) : ''));
    })));
  }
}
function addAttributes(settings) {
  const {
    attributes
  } = settings;
  if (allowedBlocks.includes(settings.name)) {
    return {
      ...settings,
      attributes: {
        ...attributes,
        orderXl: {
          type: 'string',
          default: 0
        },
        orderMd: {
          type: 'string',
          default: 0
        },
        orderXs: {
          type: 'string',
          default: 0
        }
      }
    };
  }
  return settings;
}
const withInspectorControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockEdit => function (props) {
  if (!allowedBlocks.includes(props.name)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
  }
  const hasCustomClassName = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.hasBlockSupport)(props.name, 'customClassName', true);
  let classes = [];
  props.attributes.className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(props.attributes.className, classes);
  if (hasCustomClassName && props.isSelected) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColumnOrderComponent, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, 'withInspectorControl');
function applyExtraClass(extraProps, blockType, attributes) {
  if (!allowedBlocks.includes(blockType.name)) {
    return extraProps;
  }
  let classes = [];
  if (attributes.attr) classes.push('styleH1');
  return {
    ...extraProps,
    className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, classes)
  };
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'wp-artsolut-blocks/ColumnOrderComponent/attributes', addAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', 'wp-artsolut-blocks/ColumnOrderComponent/advanced', withInspectorControl);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.getSaveContent.extraProps', 'wp-artsolut-blocks/custom/applyExtraClass', applyExtraClass);

/***/ }),

/***/ "./src/extend/container-bg-alingment/icons.js":
/*!****************************************************!*\
  !*** ./src/extend/container-bg-alingment/icons.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.align = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7 5C7 6.10455 6.10455 7 5 7C3.89543 7 3 6.10455 3 5C3 3.89543 3.89543 3 5 3C6.10455 3 7 3.89543 7 5Z",
  fill: "#2F88FF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7 5C7 6.10455 6.10455 7 5 7M7 5C7 3.89543 6.10455 3 5 3C3.89543 3 3 3.89543 3 5C3 6.10455 3.89543 7 5 7M7 5H10M5 7V10",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7 19C7 17.8954 6.10455 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21C6.10455 21 7 20.1046 7 19Z",
  fill: "#2F88FF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7 19C7 17.8954 6.10455 17 5 17M7 19C7 20.1046 6.10455 21 5 21C3.89543 21 3 20.1046 3 19C3 17.8954 3.89543 17 5 17M7 19H10M5 17V14",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17 19C17 17.8954 17.8954 17 19 17C20.1046 17 21 17.8954 21 19C21 20.1046 20.1046 21 19 21C17.8954 21 17 20.1046 17 19Z",
  fill: "#2F88FF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17 19C17 17.8954 17.8954 17 19 17M17 19C17 20.1046 17.8954 21 19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17M17 19H14M19 17V14",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17 5C17 6.10455 17.8954 7 19 7C20.1046 7 21 6.10455 21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5Z",
  fill: "#2F88FF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17 5C17 6.10455 17.8954 7 19 7M17 5C17 3.89543 17.8954 3 19 3C20.1046 3 21 3.89543 21 5C21 6.10455 20.1046 7 19 7M17 5H14M19 7V10",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M8.5 12H15.5",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 15.5V8.5",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
icons.size = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2.39999 8.1C2.39999 7.22479 2.74767 6.38542 3.36654 5.76655C3.98541 5.14768 4.82478 4.8 5.69999 4.8H18.3C19.1752 4.8 20.0146 5.14768 20.6334 5.76655C21.2523 6.38542 21.6 7.22479 21.6 8.1V15.9C21.6 16.7752 21.2523 17.6146 20.6334 18.2335C20.0146 18.8523 19.1752 19.2 18.3 19.2H5.69999C4.82478 19.2 3.98541 18.8523 3.36654 18.2335C2.74767 17.6146 2.39999 16.7752 2.39999 15.9V8.1ZM5.69999 6C5.14304 6 4.6089 6.22125 4.21507 6.61508C3.82124 7.0089 3.59999 7.54305 3.59999 8.1V15.9C3.59999 17.0592 4.54079 18 5.69999 18H18.3C18.8569 18 19.3911 17.7788 19.7849 17.3849C20.1787 16.9911 20.4 16.457 20.4 15.9V8.1C20.4 7.54305 20.1787 7.0089 19.7849 6.61508C19.3911 6.22125 18.8569 6 18.3 6H5.69999ZM13.2 7.8C13.2 7.64087 13.2632 7.48826 13.3757 7.37574C13.4883 7.26321 13.6409 7.2 13.8 7.2H16.2C16.3591 7.2 16.5117 7.26321 16.6243 7.37574C16.7368 7.48826 16.8 7.64087 16.8 7.8V10.2C16.8 10.3591 16.7368 10.5117 16.6243 10.6243C16.5117 10.7368 16.3591 10.8 16.2 10.8C16.0409 10.8 15.8883 10.7368 15.7757 10.6243C15.6632 10.5117 15.6 10.3591 15.6 10.2V9.2484L13.6248 11.2248C13.5121 11.3375 13.3593 11.4008 13.2 11.4008C13.0407 11.4008 12.8879 11.3375 12.7752 11.2248C12.6625 11.1121 12.5992 10.9593 12.5992 10.8C12.5992 10.6407 12.6625 10.4879 12.7752 10.3752L14.7516 8.4H13.8C13.6409 8.4 13.4883 8.33679 13.3757 8.22426C13.2632 8.11174 13.2 7.95913 13.2 7.8ZM10.3752 12.7752C10.4879 12.6625 10.6407 12.5992 10.8 12.5992C10.9593 12.5992 11.1121 12.6625 11.2248 12.7752C11.3375 12.8879 11.4008 13.0407 11.4008 13.2C11.4008 13.3593 11.3375 13.5121 11.2248 13.6248L9.24839 15.6H10.2C10.3591 15.6 10.5117 15.6632 10.6243 15.7757C10.7368 15.8883 10.8 16.0409 10.8 16.2C10.8 16.3591 10.7368 16.5117 10.6243 16.6243C10.5117 16.7368 10.3591 16.8 10.2 16.8H7.79999C7.64086 16.8 7.48825 16.7368 7.37573 16.6243C7.26321 16.5117 7.19999 16.3591 7.19999 16.2V13.8C7.19999 13.6409 7.26321 13.4883 7.37573 13.3757C7.48825 13.2632 7.64086 13.2 7.79999 13.2C7.95912 13.2 8.11174 13.2632 8.22426 13.3757C8.33678 13.4883 8.39999 13.6409 8.39999 13.8V14.7516L10.3752 12.7752Z",
  fill: "black"
}));
icons.iconDesktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M20 4H4C2.89543 4 2 4.83147 2 5.85714V15.1429C2 16.1685 2.89543 17 4 17H20C21.1046 17 22 16.1685 22 15.1429V5.85714C22 4.83147 21.1046 4 20 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M8 20H16",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 18V20",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
icons.iconTablet = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16.6429 4H7.35714C6.33147 4 5.5 4.71634 5.5 5.6V18.4C5.5 19.2837 6.33147 20 7.35714 20H16.6429C17.6685 20 18.5 19.2837 18.5 18.4V5.6C18.5 4.71634 17.6685 4 16.6429 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 17.5H12.01",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
icons.iconMobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15.5714 4H8.42857C7.63959 4 7 4.71634 7 5.6V18.4C7 19.2837 7.63959 20 8.42857 20H15.5714C16.3604 20 17 19.2837 17 18.4V5.6C17 4.71634 16.3604 4 15.5714 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 17.5H12.01",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/extend/container-bg-alingment/index.js":
/*!****************************************************!*\
  !*** ./src/extend/container-bg-alingment/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons */ "./src/icons.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tools */ "./src/tools/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons */ "./src/extend/container-bg-alingment/icons.js");














let initalOpenPanel = false;
const allowedBlocks = ['wp-artsolut-blocks/container'];
const bgsizeOptions = [{
  label: 'Default',
  value: ''
}, {
  label: 'Cover',
  value: 'cover'
}, {
  label: 'Contain',
  value: 'contain'
}];
let spacingOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('xs', 'wp-artsolut-blocks'),
  value: 'xs'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('sm', 'wp-artsolut-blocks'),
  value: 'sm'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('md', 'wp-artsolut-blocks'),
  value: 'md'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('lg', 'wp-artsolut-blocks'),
  value: 'lg'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('xl', 'wp-artsolut-blocks'),
  value: 'xl'
}];
class BgAlingmentControl extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      bgalignXs,
      bgsizeXs,
      bgalignMd,
      bgsizeMd,
      bgalignXl,
      bgsizeXl
    } = attributes;
    let allow = false;
    const name = this.props.name;
    const handleReset = () => {
      const defaultValue = '';
      setAttributes({
        bgalign: defaultValue
      });
    };
    if (!allow) {
      allow = allowedBlocks.includes(name);
    }
    if (!allow) {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_11__["default"].align,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Posición'), " ")),
      initialOpen: initalOpenPanel,
      onToggle: () => {
        initalOpenPanel = !initalOpenPanel;
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TabPanel, {
      className: "art-ext-tabpanel",
      tabs: [{
        name: 'xl',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_11__["default"].iconDesktop)),
        className: 'art-ext-tabpanel-tab'
      }, {
        name: 'md',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_11__["default"].iconTablet)),
        className: 'art-ext-tabpanel-tab'
      }, {
        name: 'xs',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_11__["default"].iconMobile)),
        className: 'art-ext-tabpanel-tab'
      }]
    }, tabData => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Posición', 'wp-artsolut-blocks'),
        className: "art-ext-basecontrol"
      }, tabData.name === 'xl' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginTop: '20px'
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalAlignmentMatrixControl, {
        value: bgalignXl,
        onChange: newValue => {
          setAttributes({
            bgalignXl: newValue
          });
        }
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          width: '100%',
          marginTop: '20px'
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
        label: "Tama\xF1o",
        value: bgsizeXl,
        options: bgsizeOptions,
        onChange: value => {
          setAttributes({
            bgsizeXl: value
          });
        }
      }))) : '', tabData.name === 'md' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginTop: '20px'
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalAlignmentMatrixControl, {
        value: bgalignMd,
        onChange: newValue => {
          setAttributes({
            bgalignMd: newValue
          });
        }
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          width: '100%',
          marginTop: '20px'
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
        label: "Tama\xF1o",
        value: bgsizeMd,
        options: bgsizeOptions,
        onChange: value => {
          setAttributes({
            bgsizeMd: value
          });
        }
      }))) : '', tabData.name === 'xs' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginTop: '20px'
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalAlignmentMatrixControl, {
        value: bgalignXs,
        onChange: newValue => {
          setAttributes({
            bgalignXs: newValue
          });
        }
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          width: '100%',
          marginTop: '20px'
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
        label: "Tama\xF1o",
        value: bgsizeXs,
        options: bgsizeOptions,
        onChange: value => {
          setAttributes({
            bgsizeXs: value
          });
        }
      }))) : ''));
    })));
  }
}
function addAttributes(settings) {
  const {
    attributes
  } = settings;
  if (allowedBlocks.includes(settings.name)) {
    return {
      ...settings,
      attributes: {
        ...attributes,
        bgalignXs: {
          type: 'string',
          default: 'center center'
        },
        bgsizeXs: {
          type: 'string',
          default: ''
        },
        bgalignMd: {
          type: 'string',
          default: 'center center'
        },
        bgsizeMd: {
          type: 'string',
          default: ''
        },
        bgalignXl: {
          type: 'string',
          default: 'center center'
        },
        bgsizeXl: {
          type: 'string',
          default: ''
        }
      }
    };
  }
  return settings;
}
const withInspectorControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockEdit => function (props) {
  if (!allowedBlocks.includes(props.name)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
  }
  const hasCustomClassName = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.hasBlockSupport)(props.name, 'customClassName', true);
  let classes = [];
  props.attributes.className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(props.attributes.className, classes);
  if (hasCustomClassName && props.isSelected) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BgAlingmentControl, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, 'withBgAlingmentControl');
function applyExtraClass(extraProps, blockType, attributes) {
  if (!allowedBlocks.includes(blockType.name)) {
    return extraProps;
  }
  let classes = [];
  return {
    ...extraProps,
    className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, classes)
  };
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'wp-artsolut-blocks/BgAlingmentControl/attributes', addAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', 'wp-artsolut-blocks/BgAlingmentControl/advanced', withInspectorControl);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.getSaveContent.extraProps', 'wp-artsolut-blocks/BgAlingmentControl/applyExtraClass', applyExtraClass);

/***/ }),

/***/ "./src/extend/container-options/icons.js":
/*!***********************************************!*\
  !*** ./src/extend/container-options/icons.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.options = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 32 32",
  version: "1.1",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "SVGRepo_bgCarrier",
  "stroke-width": "0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "SVGRepo_tracerCarrier",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "SVGRepo_iconCarrier"
}, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  id: "icomoon-ignore"
}, " "), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17.599 3.738v2.598l0.8 0.207c0.905 0.234 1.768 0.597 2.566 1.081l0.715 0.434 1.86-1.86 2.262 2.262-1.888 1.888 0.407 0.708c0.451 0.785 0.788 1.635 1.002 2.527l0.196 0.817h2.744v3.199h-2.806l-0.216 0.782c-0.233 0.844-0.583 1.654-1.040 2.406l-0.434 0.716 2.036 2.035-2.262 2.262-2.064-2.064-0.707 0.407c-0.734 0.422-1.531 0.745-2.368 0.961l-0.8 0.206v2.951h-3.199v-2.951l-0.8-0.206c-0.837-0.216-1.634-0.539-2.368-0.961l-0.708-0.407-2.064 2.064-2.262-2.262 2.036-2.035-0.434-0.716c-0.457-0.753-0.807-1.562-1.040-2.406l-0.216-0.782h-2.806v-3.199h2.744l0.196-0.817c0.213-0.891 0.551-1.742 1.002-2.527l0.407-0.708-1.888-1.888 2.262-2.262 1.86 1.86 0.715-0.434c0.798-0.484 1.661-0.848 2.566-1.081l0.8-0.207v-2.598h3.199zM16 20.799c2.646 0 4.798-2.153 4.798-4.799s-2.152-4.799-4.798-4.799-4.798 2.153-4.798 4.799c0 2.646 2.152 4.799 4.798 4.799zM18.666 2.672h-5.331v2.839c-1.018 0.263-1.975 0.67-2.852 1.202l-2.022-2.022-3.769 3.77 2.065 2.065c-0.498 0.867-0.875 1.81-1.114 2.809h-2.97v5.331h3.060c0.263 0.953 0.655 1.85 1.156 2.676l-2.198 2.198 3.769 3.77 2.241-2.241c0.816 0.469 1.7 0.828 2.633 1.069v3.191h5.331v-3.191c0.933-0.241 1.817-0.6 2.633-1.069l2.241 2.241 3.769-3.77-2.198-2.198c0.501-0.826 0.893-1.723 1.156-2.676h3.060v-5.331h-2.97c-0.239-0.999-0.616-1.941-1.114-2.809l2.065-2.065-3.769-3.77-2.022 2.022c-0.877-0.532-1.834-0.939-2.852-1.202v-2.839h-0zM16 19.733c-2.062 0-3.732-1.671-3.732-3.733s1.67-3.732 3.732-3.732 3.732 1.671 3.732 3.732c0 2.062-1.67 3.733-3.732 3.733v0z",
  fill: "#000000"
}, " "), " "));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/extend/container-options/index.js":
/*!***********************************************!*\
  !*** ./src/extend/container-options/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tools */ "./src/tools/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons.js */ "./src/extend/container-options/icons.js");












let initalOpenPanel = false;
const allowedBlocks = ['wp-artsolut-blocks/container', 'wp-artsolut-blocks/grid'];
const colors = [{
  name: "white",
  color: "#FFFFFF"
}, {
  name: "light-grey",
  color: "#F8F7F7"
}, {
  name: "black",
  color: "#1C1B1B"
}, {
  name: "red",
  color: "#F0392D"
}, {
  name: "black-b",
  color: "#000000"
}];
function getColorName(colorValue) {
  const color = colors.find(c => c.color === colorValue);
  if (color) {
    return color.name;
  } else {
    return null;
  }
}
class ContainerOptionsComponent extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      cbgColor,
      cbgColorName,
      alignCenter
    } = attributes;
    let allow = false;
    const name = this.props.name;
    if (!allow) {
      allow = allowedBlocks.includes(name);
    }
    if (!allow) {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: _icons_js__WEBPACK_IMPORTED_MODULE_10__["default"].options,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Opciones del contenedor'), " ")),
      initialOpen: initalOpenPanel,
      onToggle: () => {
        initalOpenPanel = !initalOpenPanel;
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
      className: "art-mt-xs",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("centrar contenido"),
      checked: alignCenter,
      onChange: newValue => {
        setAttributes({
          alignCenter: newValue
        });
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: _icons_js__WEBPACK_IMPORTED_MODULE_10__["default"].options,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color de fondo"), " ")),
      className: "art-mb-xs",
      initialOpen: initalOpenPanel,
      onToggle: () => {
        initalOpenPanel = !initalOpenPanel;
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ColorPalette, {
      colors: colors,
      className: "art-mt-xs",
      value: cbgColor,
      onChange: newColor => {
        setAttributes({
          cbgColor: newColor,
          cbgColorName: getColorName(newColor)
        });
      },
      disableCustomColors: true
    })));
  }
}
function addAttributes(settings) {
  const {
    attributes
  } = settings;
  if (allowedBlocks.includes(settings.name)) {
    return {
      ...settings,
      attributes: {
        ...attributes,
        topDecoration: {
          type: 'boolean',
          default: false
        },
        cbgColor: {
          type: 'string',
          default: 'false'
        },
        cbgColorName: {
          type: 'string',
          default: 'false'
        },
        alignCenter: {
          type: 'boolean',
          default: false
        }
      }
    };
  }
  return settings;
}
const withContainerOptionscontrol = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockEdit => function (props) {
  const {
    attributes
  } = props;
  if (!allowedBlocks.includes(props.name)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
  }
  const hasCustomClassName = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.hasBlockSupport)(props.name, 'customClassName', true);
  if (attributes.className) attributes.className = (0,_tools__WEBPACK_IMPORTED_MODULE_8__.removeClasses)(attributes.className, "bg-color-");
  let classes = [];
  /* classes.push({ 'topDecoration': props.attributes.topDecoration }); */

  /* let colorName = getColorName(attributes.cbgColor);
  if (colorName) {
  	classes.push(`bg-color-${colorName}`);
  } */

  props.attributes.className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(props.attributes.className, classes);
  if (hasCustomClassName && props.isSelected) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContainerOptionsComponent, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, 'withContainerOptionscontrol');
function applyExtraClass(extraProps, blockType, attributes) {
  if (!allowedBlocks.includes(blockType.name)) {
    return extraProps;
  }
  let classes = [];
  /* if (attributes.borderRounded)
  	classes.push('borderRounded');
  
  if (attributes.alignRight)
  	classes.push('alignRight');
  
  classes.push({ 'topDecoration': attributes.topDecoration });
  
  let colorName = getColorName(attributes.bgColor);
  if (colorName) {
  	classes.push(`bg-color-${colorName}`);
  }	 */

  return {
    ...extraProps,
    className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, classes)
  };
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'wp-artsolut-blocks/container-option/attributes', addAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', 'wp-artsolut-blocks/container-option/advanced', withContainerOptionscontrol);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.getSaveContent.extraProps', 'wp-artsolut-blocks/container-option/applyExtraClass', applyExtraClass);

/***/ }),

/***/ "./src/extend/falignv/icons.js":
/*!*************************************!*\
  !*** ./src/extend/falignv/icons.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.align = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7M7 5C7 4.60444 6.8827 4.21776 6.66294 3.88886C6.44318 3.55996 6.13082 3.30362 5.76537 3.15224C5.39992 3.00087 4.99778 2.96126 4.60982 3.03843C4.22186 3.1156 3.86549 3.30608 3.58579 3.58579C3.30608 3.86549 3.1156 4.22186 3.03843 4.60982C2.96126 4.99778 3.00087 5.39992 3.15224 5.76537C3.30362 6.13082 3.55996 6.44318 3.88886 6.66294C4.21776 6.8827 4.60444 7 5 7M7 5H10M5 7V10",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7 19C7 18.4696 6.78929 17.9609 6.41421 17.5858C6.03914 17.2107 5.53043 17 5 17M7 19C7 19.3956 6.8827 19.7822 6.66294 20.1111C6.44318 20.44 6.13082 20.6964 5.76537 20.8478C5.39992 20.9991 4.99778 21.0387 4.60982 20.9616C4.22186 20.8844 3.86549 20.6939 3.58579 20.4142C3.30608 20.1345 3.1156 19.7781 3.03843 19.3902C2.96126 19.0022 3.00087 18.6001 3.15224 18.2346C3.30362 17.8692 3.55996 17.5568 3.88886 17.3371C4.21776 17.1173 4.60444 17 5 17M7 19H10M5 17V14",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17 19C17 18.4696 17.2107 17.9609 17.5858 17.5858C17.9609 17.2107 18.4696 17 19 17M17 19C17 19.3956 17.1173 19.7822 17.3371 20.1111C17.5568 20.44 17.8692 20.6964 18.2346 20.8478C18.6001 20.9991 19.0022 21.0387 19.3902 20.9616C19.7781 20.8844 20.1345 20.6939 20.4142 20.4142C20.6939 20.1345 20.8844 19.7781 20.9616 19.3902C21.0387 19.0022 20.9991 18.6001 20.8478 18.2346C20.6964 17.8692 20.44 17.5568 20.1111 17.3371C19.7822 17.1173 19.3956 17 19 17M17 19H14M19 17V14",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17 5C17 5.53043 17.2107 6.03914 17.5858 6.41421C17.9609 6.78929 18.4696 7 19 7M17 5C17 4.60444 17.1173 4.21776 17.3371 3.88886C17.5568 3.55996 17.8692 3.30362 18.2346 3.15224C18.6001 3.00087 19.0022 2.96126 19.3902 3.03843C19.7781 3.1156 20.1345 3.30608 20.4142 3.58579C20.6939 3.86549 20.8844 4.22186 20.9616 4.60982C21.0387 4.99778 20.9991 5.39992 20.8478 5.76537C20.6964 6.13082 20.44 6.44318 20.1111 6.66294C19.7822 6.8827 19.3956 7 19 7M17 5H14M19 7V10M8.5 12H15.5M12 15.5V8.5",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
icons.top = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M22 2V4H2V2H22ZM7 22H10V6H7V22ZM14 16H17V6H14V16Z",
  fill: "black"
}));
icons.bottom = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16 13H13V3H11V13H8L12 17L16 13ZM4 19V21H20V19H4Z",
  fill: "black"
}));
icons.between = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M13 9V15H16L12 19L8 15H11V9H8L12 5L16 9H13ZM4 2H20V4H4V2ZM4 20H20V22H4V20Z",
  fill: "black"
}));
icons.center = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M22 11H17V6H14V11H10V3H7.00005V11H1.80005V13H7.00005V21H10V13H14V18H17V13H22V11Z",
  fill: "black"
}));
icons.iconDesktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M20 4H4C2.89543 4 2 4.83147 2 5.85714V15.1429C2 16.1685 2.89543 17 4 17H20C21.1046 17 22 16.1685 22 15.1429V5.85714C22 4.83147 21.1046 4 20 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M8 20H16",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 18V20",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
icons.iconTablet = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16.6429 4H7.35714C6.33147 4 5.5 4.71634 5.5 5.6V18.4C5.5 19.2837 6.33147 20 7.35714 20H16.6429C17.6685 20 18.5 19.2837 18.5 18.4V5.6C18.5 4.71634 17.6685 4 16.6429 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 17.5H12.01",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
icons.iconMobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15.5714 4H8.42857C7.63959 4 7 4.71634 7 5.6V18.4C7 19.2837 7.63959 20 8.42857 20H15.5714C16.3604 20 17 19.2837 17 18.4V5.6C17 4.71634 16.3604 4 15.5714 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 17.5H12.01",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/extend/falignv/index.js":
/*!*************************************!*\
  !*** ./src/extend/falignv/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons */ "./src/icons.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tools */ "./src/tools/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons */ "./src/extend/falignv/icons.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);













let initalOpenPanel = false;
const allowedBlocks = ['wp-artsolut-blocks/column'];
let spacingOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('xs', 'wp-artsolut-blocks'),
  value: 'xs'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('sm', 'wp-artsolut-blocks'),
  value: 'sm'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('md', 'wp-artsolut-blocks'),
  value: 'md'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('lg', 'wp-artsolut-blocks'),
  value: 'lg'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('xl', 'wp-artsolut-blocks'),
  value: 'xl'
}];
let verticalOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('top', 'wp-artsolut-blocks'),
  key: 'vtop',
  value: 'start',
  icon: _icons__WEBPACK_IMPORTED_MODULE_10__["default"].top
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('center', 'wp-artsolut-blocks'),
  key: 'vcenter',
  value: 'center',
  icon: _icons__WEBPACK_IMPORTED_MODULE_10__["default"].center
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('bottom', 'wp-artsolut-blocks'),
  key: 'vbottom',
  value: 'end',
  icon: _icons__WEBPACK_IMPORTED_MODULE_10__["default"].bottom
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('between', 'wp-artsolut-blocks'),
  key: 'vbetween',
  value: 'between',
  icon: _icons__WEBPACK_IMPORTED_MODULE_10__["default"].between
}];
class FaligmentvComponent extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      YverticalXs,
      YverticalMd,
      YverticalXl,
      XverticalXs,
      XverticalMd,
      XverticalXl
    } = attributes;
    let allow = false;
    const name = this.props.name;
    if (!allow) {
      allow = allowedBlocks.includes(name);
    }
    if (!allow) {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_10__["default"].align,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alineación vertical'), " ")),
      initialOpen: initalOpenPanel,
      onToggle: () => {
        initalOpenPanel = !initalOpenPanel;
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TabPanel, {
      className: "art-ext-tabpanel",
      tabs: [{
        name: 'xl',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_10__["default"].iconDesktop)),
        className: 'art-ext-tabpanel-tab'
      }, {
        name: 'md',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_10__["default"].iconTablet)),
        className: 'art-ext-tabpanel-tab'
      }, {
        name: 'xs',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_10__["default"].iconMobile)),
        className: 'art-ext-tabpanel-tab'
      }]
    }, tabData => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alineación Y', 'wp-artsolut-blocks'),
        className: "art-ext-basecontrol"
      }, tabData.name === 'xl' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, verticalOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: YverticalXl == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (YverticalXl === option.value) {
            setAttributes({
              YverticalXl: ''
            });
          } else {
            setAttributes({
              YverticalXl: option.value
            });
          }
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: option.icon
      })))) : '', tabData.name === 'md' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, verticalOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: YverticalMd == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (YverticalMd === option.value) {
            setAttributes({
              YverticalMd: ''
            });
          } else {
            setAttributes({
              YverticalMd: option.value
            });
          }
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: option.icon
      })))) : '', tabData.name === 'xs' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, verticalOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: YverticalXs == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (YverticalXs === option.value) {
            setAttributes({
              YverticalXs: ''
            });
          } else {
            setAttributes({
              YverticalXs: option.value
            });
          }
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: option.icon
      })))) : ''));
    })));
  }
}
function addAttributes(settings) {
  const {
    attributes
  } = settings;
  if (allowedBlocks.includes(settings.name)) {
    return {
      ...settings,
      attributes: {
        ...attributes,
        YverticalXs: {
          type: 'string',
          default: ''
        },
        YverticalMd: {
          type: 'string',
          default: ''
        },
        YverticalXl: {
          type: 'string',
          default: ''
        },
        XerticalXs: {
          type: 'string',
          default: ''
        },
        XverticalMd: {
          type: 'string',
          default: ''
        },
        XverticalXl: {
          type: 'string',
          default: ''
        }
      }
    };
  }
  return settings;
}
const withInspectorControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockEdit => function (props) {
  if (!allowedBlocks.includes(props.name)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
  }
  const hasCustomClassName = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.hasBlockSupport)(props.name, 'customClassName', true);
  let classes = [];
  props.attributes.className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(props.attributes.className, classes);
  if (hasCustomClassName && props.isSelected) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(FaligmentvComponent, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, 'withFaligmentvComponent');
function applyExtraClass(extraProps, blockType, attributes) {
  if (!allowedBlocks.includes(blockType.name)) {
    return extraProps;
  }
  const {
    YverticalXs,
    YverticalMd,
    YverticalXl
  } = attributes;
  let classes = [];
  if (YverticalXs != null && YverticalXs != '') {
    classes.push(`justify-${YverticalXs}@xs`);
  }
  if (YverticalMd != null && YverticalMd != '') {
    classes.push(`justify-${YverticalMd}@xs`);
  }
  if (YverticalXl != null && YverticalXl != '') {
    classes.push(`justify-${YverticalXl}@xl`);
  }
  return {
    ...extraProps,
    className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, classes)
  };
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'wp-artsolut-blocks/FaligmentvComponent/attributes', addAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', 'wp-artsolut-blocks/FaligmentvComponent/advanced', withInspectorControl);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.getSaveContent.extraProps', 'wp-artsolut-blocks/FaligmentvComponent/applyExtraClass', applyExtraClass);

/***/ }),

/***/ "./src/extend/image-options/index.js":
/*!*******************************************!*\
  !*** ./src/extend/image-options/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons */ "./src/icons.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tools */ "./src/tools/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);












let initalOpenPanel = false;
const allowedBlocks = ['core/image', 'da/wp-swiper-slides'];
class ImageOptionsComponent extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      negativeMargin,
      scaleImage,
      fixImage
    } = attributes;
    let allow = false;
    const name = this.props.name;
    if (!allow) {
      allow = allowedBlocks.includes(name);
    }
    if (!allow) {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_7__.iconBackground,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Opciones de imagen'), " ")),
      initialOpen: initalOpenPanel,
      onToggle: () => {
        initalOpenPanel = !initalOpenPanel;
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, {
      className: "art-mb-xs"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
      className: "art-mt-xs",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Margen negativo"),
      checked: negativeMargin,
      onChange: newValue => {
        setAttributes({
          negativeMargin: newValue
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, {
      className: "art-mb-xs"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
      className: "art-mt-xs",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Agrandar imagen (efecto)"),
      checked: scaleImage,
      onChange: newValue => {
        setAttributes({
          scaleImage: newValue
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, {
      className: "art-mb-xs"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
      className: "art-mt-xs",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Fix de imagen"),
      checked: fixImage,
      onChange: newValue => {
        setAttributes({
          fixImage: newValue
        });
      }
    }))));
  }
}
function addAttributes(settings) {
  const {
    attributes
  } = settings;
  if (allowedBlocks.includes(settings.name)) {
    return {
      ...settings,
      attributes: {
        ...attributes,
        negativeMargin: {
          type: 'boolean',
          default: false
        },
        scaleImage: {
          type: 'boolean',
          default: false
        },
        fixImage: {
          type: 'boolean',
          default: false
        }
      }
    };
  }
  return settings;
}
const withImageOptionsComponent = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockEdit => function (props) {
  if (!allowedBlocks.includes(props.name)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
  }
  const hasCustomClassName = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.hasBlockSupport)(props.name, 'customClassName', true);
  let classes = [];
  classes.push({
    'scale-image': props.attributes.scaleImage
  });
  classes.push({
    'fix-image': props.attributes.fixImage
  });
  props.attributes.className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(props.attributes.className, classes);
  if (hasCustomClassName && props.isSelected) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ImageOptionsComponent, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, 'withImageOptionsComponent');
function applyExtraClass(extraProps, blockType, attributes) {
  if (!allowedBlocks.includes(blockType.name)) {
    return extraProps;
  }
  let classes = [];
  classes.push({
    'scale-image': attributes.scaleImage
  });
  classes.push({
    'fix-image': attributes.fixImage
  });
  return {
    ...extraProps,
    className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, classes)
  };
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'wp-artsolut-blocks/ImageOptionsComponent/attributes', addAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', 'wp-artsolut-blocks/ImageOptionsComponent/advanced', withImageOptionsComponent);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.getSaveContent.extraProps', 'wp-artsolut-blocks/ImageOptionsComponent/applyExtraClass', applyExtraClass);

/***/ }),

/***/ "./src/extend/index.js":
/*!*****************************!*\
  !*** ./src/extend/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container_bg_alingment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container-bg-alingment */ "./src/extend/container-bg-alingment/index.js");
/* harmony import */ var _container_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container-options */ "./src/extend/container-options/index.js");
/* harmony import */ var _column_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./column-order */ "./src/extend/column-order/index.js");
/* harmony import */ var _column_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./column-options */ "./src/extend/column-options/index.js");
/* harmony import */ var _column_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./column-color */ "./src/extend/column-color/index.js");
/* harmony import */ var _button_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button-options */ "./src/extend/button-options/index.js");
/* harmony import */ var _text_sizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text-sizes */ "./src/extend/text-sizes/index.js");
/* harmony import */ var _paddings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paddings */ "./src/extend/paddings/index.js");
/* harmony import */ var _margins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./margins */ "./src/extend/margins/index.js");
/* harmony import */ var _aspect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aspect */ "./src/extend/aspect/index.js");
/* harmony import */ var _falignv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./falignv */ "./src/extend/falignv/index.js");
/* harmony import */ var _image_options__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./image-options */ "./src/extend/image-options/index.js");













/***/ }),

/***/ "./src/extend/margins/icons.js":
/*!*************************************!*\
  !*** ./src/extend/margins/icons.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.options = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M1.5 2C1.63261 2 1.75979 1.94732 1.85355 1.85355C1.94732 1.75979 2 1.63261 2 1.5C2 1.36739 1.94732 1.24021 1.85355 1.14645C1.75979 1.05268 1.63261 1 1.5 1C1.36739 1 1.24021 1.05268 1.14645 1.14645C1.05268 1.24021 1 1.36739 1 1.5C1 1.63261 1.05268 1.75979 1.14645 1.85355C1.24021 1.94732 1.36739 2 1.5 2ZM4.5 2C4.63261 2 4.75979 1.94732 4.85355 1.85355C4.94732 1.75979 5 1.63261 5 1.5C5 1.36739 4.94732 1.24021 4.85355 1.14645C4.75979 1.05268 4.63261 1 4.5 1C4.36739 1 4.24021 1.05268 4.14645 1.14645C4.05268 1.24021 4 1.36739 4 1.5C4 1.63261 4.05268 1.75979 4.14645 1.85355C4.24021 1.94732 4.36739 2 4.5 2ZM8 1.5C8 1.63261 7.94732 1.75979 7.85355 1.85355C7.75979 1.94732 7.63261 2 7.5 2C7.36739 2 7.24021 1.94732 7.14645 1.85355C7.05268 1.75979 7 1.63261 7 1.5C7 1.36739 7.05268 1.24021 7.14645 1.14645C7.24021 1.05268 7.36739 1 7.5 1C7.63261 1 7.75979 1.05268 7.85355 1.14645C7.94732 1.24021 8 1.36739 8 1.5ZM10.5 2C10.6326 2 10.7598 1.94732 10.8536 1.85355C10.9473 1.75979 11 1.63261 11 1.5C11 1.36739 10.9473 1.24021 10.8536 1.14645C10.7598 1.05268 10.6326 1 10.5 1C10.3674 1 10.2402 1.05268 10.1464 1.14645C10.0527 1.24021 10 1.36739 10 1.5C10 1.63261 10.0527 1.75979 10.1464 1.85355C10.2402 1.94732 10.3674 2 10.5 2ZM14 1.5C14 1.63261 13.9473 1.75979 13.8536 1.85355C13.7598 1.94732 13.6326 2 13.5 2C13.3674 2 13.2402 1.94732 13.1464 1.85355C13.0527 1.75979 13 1.63261 13 1.5C13 1.36739 13.0527 1.24021 13.1464 1.14645C13.2402 1.05268 13.3674 1 13.5 1C13.6326 1 13.7598 1.05268 13.8536 1.14645C13.9473 1.24021 14 1.36739 14 1.5ZM1.5 14C1.63261 14 1.75979 13.9473 1.85355 13.8536C1.94732 13.7598 2 13.6326 2 13.5C2 13.3674 1.94732 13.2402 1.85355 13.1464C1.75979 13.0527 1.63261 13 1.5 13C1.36739 13 1.24021 13.0527 1.14645 13.1464C1.05268 13.2402 1 13.3674 1 13.5C1 13.6326 1.05268 13.7598 1.14645 13.8536C1.24021 13.9473 1.36739 14 1.5 14ZM2 10.5C2 10.6326 1.94732 10.7598 1.85355 10.8536C1.75979 10.9473 1.63261 11 1.5 11C1.36739 11 1.24021 10.9473 1.14645 10.8536C1.05268 10.7598 1 10.6326 1 10.5C1 10.3674 1.05268 10.2402 1.14645 10.1464C1.24021 10.0527 1.36739 10 1.5 10C1.63261 10 1.75979 10.0527 1.85355 10.1464C1.94732 10.2402 2 10.3674 2 10.5ZM1.5 8C1.63261 8 1.75979 7.94732 1.85355 7.85355C1.94732 7.75979 2 7.63261 2 7.5C2 7.36739 1.94732 7.24021 1.85355 7.14645C1.75979 7.05268 1.63261 7 1.5 7C1.36739 7 1.24021 7.05268 1.14645 7.14645C1.05268 7.24021 1 7.36739 1 7.5C1 7.63261 1.05268 7.75979 1.14645 7.85355C1.24021 7.94732 1.36739 8 1.5 8ZM2 4.5C2 4.63261 1.94732 4.75979 1.85355 4.85355C1.75979 4.94732 1.63261 5 1.5 5C1.36739 5 1.24021 4.94732 1.14645 4.85355C1.05268 4.75979 1 4.63261 1 4.5C1 4.36739 1.05268 4.24021 1.14645 4.14645C1.24021 4.05268 1.36739 4 1.5 4C1.63261 4 1.75979 4.05268 1.85355 4.14645C1.94732 4.24021 2 4.36739 2 4.5ZM13.5 11C13.6326 11 13.7598 10.9473 13.8536 10.8536C13.9473 10.7598 14 10.6326 14 10.5C14 10.3674 13.9473 10.2402 13.8536 10.1464C13.7598 10.0527 13.6326 10 13.5 10C13.3674 10 13.2402 10.0527 13.1464 10.1464C13.0527 10.2402 13 10.3674 13 10.5C13 10.6326 13.0527 10.7598 13.1464 10.8536C13.2402 10.9473 13.3674 11 13.5 11ZM14 7.5C14 7.63261 13.9473 7.75979 13.8536 7.85355C13.7598 7.94732 13.6326 8 13.5 8C13.3674 8 13.2402 7.94732 13.1464 7.85355C13.0527 7.75979 13 7.63261 13 7.5C13 7.36739 13.0527 7.24021 13.1464 7.14645C13.2402 7.05268 13.3674 7 13.5 7C13.6326 7 13.7598 7.05268 13.8536 7.14645C13.9473 7.24021 14 7.36739 14 7.5ZM13.5 5C13.6326 5 13.7598 4.94732 13.8536 4.85355C13.9473 4.75979 14 4.63261 14 4.5C14 4.36739 13.9473 4.24021 13.8536 4.14645C13.7598 4.05268 13.6326 4 13.5 4C13.3674 4 13.2402 4.05268 13.1464 4.14645C13.0527 4.24021 13 4.36739 13 4.5C13 4.63261 13.0527 4.75979 13.1464 4.85355C13.2402 4.94732 13.3674 5 13.5 5ZM5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14C4.36739 14 4.24021 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5C4 13.3674 4.05268 13.2402 4.14645 13.1464C4.24021 13.0527 4.36739 13 4.5 13C4.63261 13 4.75979 13.0527 4.85355 13.1464C4.94732 13.2402 5 13.3674 5 13.5ZM7.5 14C7.63261 14 7.75979 13.9473 7.85355 13.8536C7.94732 13.7598 8 13.6326 8 13.5C8 13.3674 7.94732 13.2402 7.85355 13.1464C7.75979 13.0527 7.63261 13 7.5 13C7.36739 13 7.24021 13.0527 7.14645 13.1464C7.05268 13.2402 7 13.3674 7 13.5C7 13.6326 7.05268 13.7598 7.14645 13.8536C7.24021 13.9473 7.36739 14 7.5 14ZM11 13.5C11 13.6326 10.9473 13.7598 10.8536 13.8536C10.7598 13.9473 10.6326 14 10.5 14C10.3674 14 10.2402 13.9473 10.1464 13.8536C10.0527 13.7598 10 13.6326 10 13.5C10 13.3674 10.0527 13.2402 10.1464 13.1464C10.2402 13.0527 10.3674 13 10.5 13C10.6326 13 10.7598 13.0527 10.8536 13.1464C10.9473 13.2402 11 13.3674 11 13.5ZM13.5 14C13.6326 14 13.7598 13.9473 13.8536 13.8536C13.9473 13.7598 14 13.6326 14 13.5C14 13.3674 13.9473 13.2402 13.8536 13.1464C13.7598 13.0527 13.6326 13 13.5 13C13.3674 13 13.2402 13.0527 13.1464 13.1464C13.0527 13.2402 13 13.3674 13 13.5C13 13.6326 13.0527 13.7598 13.1464 13.8536C13.2402 13.9473 13.3674 14 13.5 14ZM4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H10C10.2652 4 10.5196 4.10536 10.7071 4.29289C10.8946 4.48043 11 4.73478 11 5V10C11 10.2652 10.8946 10.5196 10.7071 10.7071C10.5196 10.8946 10.2652 11 10 11H5C4.73478 11 4.48043 10.8946 4.29289 10.7071C4.10536 10.5196 4 10.2652 4 10V5ZM5 5H10V10H5V5Z",
  fill: "black"
}));
icons.iconDesktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M20 4H4C2.89543 4 2 4.83147 2 5.85714V15.1429C2 16.1685 2.89543 17 4 17H20C21.1046 17 22 16.1685 22 15.1429V5.85714C22 4.83147 21.1046 4 20 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M8 20H16",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 18V20",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
icons.iconTablet = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16.6429 4H7.35714C6.33147 4 5.5 4.71634 5.5 5.6V18.4C5.5 19.2837 6.33147 20 7.35714 20H16.6429C17.6685 20 18.5 19.2837 18.5 18.4V5.6C18.5 4.71634 17.6685 4 16.6429 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 17.5H12.01",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
icons.iconMobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15.5714 4H8.42857C7.63959 4 7 4.71634 7 5.6V18.4C7 19.2837 7.63959 20 8.42857 20H15.5714C16.3604 20 17 19.2837 17 18.4V5.6C17 4.71634 16.3604 4 15.5714 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 17.5H12.01",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/extend/margins/index.js":
/*!*************************************!*\
  !*** ./src/extend/margins/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons */ "./src/icons.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tools */ "./src/tools/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons */ "./src/extend/margins/icons.js");













let initalOpenPanel = false;
const allowedBlocks = ['wp-artsolut-blocks/container', 'wp-artsolut-blocks/grid', 'wp-artsolut-blocks/column', 'core/paragraph', 'core/heading', 'core/image'];
let spacingOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('xs', 'wp-artsolut-blocks'),
  value: 'xs'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('sm', 'wp-artsolut-blocks'),
  value: 'sm'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('md', 'wp-artsolut-blocks'),
  value: 'md'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('lg', 'wp-artsolut-blocks'),
  value: 'lg'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('xl', 'wp-artsolut-blocks'),
  value: 'xl'
}];
class MarginComponent extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      marginTopXs,
      marginTopMd,
      marginTopXl,
      marginLeftXs,
      marginLeftMd,
      marginLeftXl,
      marginRightXs,
      marginRightMd,
      marginRightXl,
      marginBottomXs,
      marginBottomMd,
      marginBottomXl
    } = attributes;
    let allow = false;
    const name = this.props.name;
    if (!allow) {
      allow = allowedBlocks.includes(name);
    }
    if (!allow) {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_11__["default"].options,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margenes del contenido'), " ")),
      initialOpen: initalOpenPanel,
      onToggle: () => {
        initalOpenPanel = !initalOpenPanel;
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TabPanel, {
      className: "art-ext-tabpanel",
      tabs: [{
        name: 'xl',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_11__["default"].iconDesktop)),
        className: 'art-ext-tabpanel-tab'
      }, {
        name: 'md',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_11__["default"].iconTablet)),
        className: 'art-ext-tabpanel-tab'
      }, {
        name: 'xs',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_11__["default"].iconMobile)),
        className: 'art-ext-tabpanel-tab'
      }]
    }, tabData => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('margin superior', 'wp-artsolut-blocks'),
        className: "art-ext-basecontrol"
      }, tabData.name === 'xl' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: marginTopXl == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (marginTopXl === option.value) {
            setAttributes({
              marginTopXl: ''
            });
          } else {
            setAttributes({
              marginTopXl: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'md' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: marginTopMd == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (marginTopMd === option.value) {
            setAttributes({
              marginTopMd: ''
            });
          } else {
            setAttributes({
              marginTopMd: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'xs' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: marginTopXs == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (marginTopXs === option.value) {
            setAttributes({
              marginTopXs: ''
            });
          } else {
            setAttributes({
              marginTopXs: option.value
            });
          }
        }
      }, option.label))) : ''), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margen Izquierda', 'wp-artsolut-blocks'),
        className: "art-ext-basecontrol"
      }, tabData.name === 'xl' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: marginLeftXl == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (marginLeftXl === option.value) {
            setAttributes({
              marginLeftXl: ''
            });
          } else {
            setAttributes({
              marginLeftXl: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'md' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: marginLeftMd == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (marginLeftMd === option.value) {
            setAttributes({
              marginLeftMd: ''
            });
          } else {
            setAttributes({
              marginLeftMd: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'xs' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: marginLeftXs == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (marginLeftXs === option.value) {
            setAttributes({
              marginLeftXs: ''
            });
          } else {
            setAttributes({
              marginLeftXs: option.value
            });
          }
        }
      }, option.label))) : ''), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margen Derecha', 'wp-artsolut-blocks'),
        className: "art-ext-basecontrol"
      }, tabData.name === 'xl' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: marginRightXl == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (marginRightXl === option.value) {
            setAttributes({
              marginRightXl: ''
            });
          } else {
            setAttributes({
              marginRightXl: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'md' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: marginRightMd == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (marginRightMd === option.value) {
            setAttributes({
              marginRightMd: ''
            });
          } else {
            setAttributes({
              marginRightMd: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'xs' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: marginRightXs == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (marginRightXs === option.value) {
            setAttributes({
              marginRightXs: ''
            });
          } else {
            setAttributes({
              marginRightXs: option.value
            });
          }
        }
      }, option.label))) : ''), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margen Inferior', 'wp-artsolut-blocks'),
        className: "art-ext-basecontrol"
      }, tabData.name === 'xl' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: marginBottomXl == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (marginBottomXl === option.value) {
            setAttributes({
              marginBottomXl: ''
            });
          } else {
            setAttributes({
              marginBottomXl: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'md' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: marginBottomMd == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (marginBottomMd === option.value) {
            setAttributes({
              marginBottomMd: ''
            });
          } else {
            setAttributes({
              marginBottomMd: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'xs' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: marginBottomXs == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (marginBottomXs === option.value) {
            setAttributes({
              marginBottomXs: ''
            });
          } else {
            setAttributes({
              marginBottomXs: option.value
            });
          }
        }
      }, option.label))) : ''));
    })));
  }
}
function addAttributes(settings) {
  const {
    attributes
  } = settings;
  if (allowedBlocks.includes(settings.name)) {
    return {
      ...settings,
      attributes: {
        ...attributes,
        marginTopXl: {
          type: 'string',
          default: ''
        },
        marginLeftXl: {
          type: 'string',
          default: ''
        },
        marginRightXl: {
          type: 'string',
          default: ''
        },
        marginBottomXl: {
          type: 'string',
          default: ''
        },
        marginTopMd: {
          type: 'string',
          default: ''
        },
        marginLeftMd: {
          type: 'string',
          default: ''
        },
        marginRightMd: {
          type: 'string',
          default: ''
        },
        marginBottomMd: {
          type: 'string',
          default: ''
        },
        marginTopXs: {
          type: 'string',
          default: ''
        },
        marginLeftXs: {
          type: 'string',
          default: ''
        },
        marginRightXs: {
          type: 'string',
          default: ''
        },
        marginBottomXs: {
          type: 'string',
          default: ''
        }
      }
    };
  }
  return settings;
}
const withMarginComponent = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockEdit => function (props) {
  if (!allowedBlocks.includes(props.name)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
  }
  const hasCustomClassName = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.hasBlockSupport)(props.name, 'customClassName', true);
  let classes = [];
  props.attributes.className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(props.attributes.className, classes);
  if (hasCustomClassName && props.isSelected) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MarginComponent, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, 'withMarginComponent');
function applyExtraClass(extraProps, blockType, attributes) {
  if (!allowedBlocks.includes(blockType.name)) {
    return extraProps;
  }
  const {
    marginTopXs,
    marginTopMd,
    marginTopXl,
    marginLeftXs,
    marginLeftMd,
    marginLeftXl,
    marginRightXs,
    marginRightMd,
    marginRightXl,
    marginBottomXs,
    marginBottomMd,
    marginBottomXl
  } = attributes;
  let classes = [];
  if (marginTopXs != null && marginTopXs != '') {
    classes.push(`margin-top-${marginTopXs}@xs`);
  }
  if (marginLeftXs != null && marginLeftXs != '') {
    classes.push(`margin-left-${marginLeftXs}@xs`);
  }
  if (marginRightXs != null && marginRightXs != '') {
    classes.push(`margin-right-${marginRightXs}@xs`);
  }
  if (marginBottomXs != null && marginBottomXs != '') {
    classes.push(`margin-bottom-${marginBottomXs}@xs`);
  }
  //Md
  if (marginTopMd != null && marginTopMd != '') {
    classes.push(`margin-top-${marginTopMd}@md`);
  }
  if (marginLeftMd != null && marginLeftMd != '') {
    classes.push(`margin-left-${marginLeftMd}@md`);
  }
  if (marginRightMd != null && marginRightMd != '') {
    classes.push(`margin-right-${marginRightMd}@md`);
  }
  if (marginBottomMd != null && marginBottomMd != '') {
    classes.push(`margin-bottom-${marginBottomMd}@md`);
  }

  //Xl
  if (marginTopXl != null && marginTopXl != '') {
    classes.push(`margin-top-${marginTopXl}@lg`);
  }
  if (marginLeftXl != null && marginLeftXl != '') {
    classes.push(`margin-left-${marginLeftXl}@lg`);
  }
  if (marginRightXl != null && marginRightXl != '') {
    classes.push(`margin-right-${marginRightXl}@lg`);
  }
  if (marginBottomXl != null && marginBottomXl != '') {
    classes.push(`margin-bottom-${marginBottomXl}@lg`);
  }
  return {
    ...extraProps,
    className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, classes)
  };
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'wp-artsolut-blocks/MarginComponent/attributes', addAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', 'wp-artsolut-blocks/MarginComponent/advanced', withMarginComponent);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.getSaveContent.extraProps', 'wp-artsolut-blocks/MarginComponent/applyExtraClass', applyExtraClass);

/***/ }),

/***/ "./src/extend/paddings/icons.js":
/*!**************************************!*\
  !*** ./src/extend/paddings/icons.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.options = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  "clip-path": "url(#clip0_1_2)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0V16H16V0H0ZM15 3H14V4H15V5H14V6H15V7H14V8H15V9H14V10H15V11H14V12H15V13H14V14H15V15H14V14H13V15H12V14H11V15H10V14H9V15H8V14H7V15H6V14H5V15H4V14H3V15H2V14H1V13H2V12H1V11H2V10H1V9H2V8H1V7H2V6H1V5H2V4H1V3H2V2H1V1H2V2H3V1H4V2H5V1H6V2H7V1H8V2H9V1H10V2H11V1H12V2H13V1H14V2H15V3Z",
  fill: "black"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M3 2H4V3H3V2ZM4 3H5V4H4V3ZM6 3H7V4H6V3ZM5 2H6V3H5V2ZM7 2H8V3H7V2ZM9 2H10V3H9V2ZM8 3H9V4H8V3ZM10 3H11V4H10V3ZM12 3H13V4H12V3ZM11 2H12V3H11V2ZM13 2H14V3H13V2ZM12 5H13V6H12V5ZM13 4H14V5H13V4ZM12 7H13V8H12V7ZM13 6H14V7H13V6ZM12 9H13V10H12V9ZM13 8H14V9H13V8ZM12 11H13V12H12V11ZM13 10H14V11H13V10ZM12 13H13V14H12V13ZM13 12H14V13H13V12ZM2 3H3V4H2V3ZM3 4H4V5H3V4ZM2 5H3V6H2V5ZM3 6H4V7H3V6ZM2 7H3V8H2V7ZM3 8H4V9H3V8ZM2 9H3V10H2V9ZM3 10H4V11H3V10ZM2 11H3V12H2V11ZM2 13H3V14H2V13ZM3 12H4V13H3V12ZM4 11H5V12H4V11ZM4 13H5V14H4V13ZM5 12H6V13H5V12ZM6 13H7V14H6V13ZM7 12H8V13H7V12ZM9 12H10V13H9V12ZM8 13H9V14H8V13ZM11 12H12V13H11V12ZM10 13H11V14H10V13Z",
  fill: "black"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip0_1_2"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "16",
  height: "16",
  fill: "white"
}))));
icons.iconDesktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M20 4H4C2.89543 4 2 4.83147 2 5.85714V15.1429C2 16.1685 2.89543 17 4 17H20C21.1046 17 22 16.1685 22 15.1429V5.85714C22 4.83147 21.1046 4 20 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M8 20H16",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 18V20",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
icons.iconTablet = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16.6429 4H7.35714C6.33147 4 5.5 4.71634 5.5 5.6V18.4C5.5 19.2837 6.33147 20 7.35714 20H16.6429C17.6685 20 18.5 19.2837 18.5 18.4V5.6C18.5 4.71634 17.6685 4 16.6429 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 17.5H12.01",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
icons.iconMobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15.5714 4H8.42857C7.63959 4 7 4.71634 7 5.6V18.4C7 19.2837 7.63959 20 8.42857 20H15.5714C16.3604 20 17 19.2837 17 18.4V5.6C17 4.71634 16.3604 4 15.5714 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 17.5H12.01",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/extend/paddings/index.js":
/*!**************************************!*\
  !*** ./src/extend/paddings/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons */ "./src/icons.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tools */ "./src/tools/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons */ "./src/extend/paddings/icons.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);













let initalOpenPanel = false;
const allowedBlocks = ['wp-artsolut-blocks/container', 'wp-artsolut-blocks/grid', 'wp-artsolut-blocks/column', 'core/paragraph', 'core/heading', 'core/image'];
let spacingOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('xs', 'wp-artsolut-blocks'),
  value: 'xs'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('sm', 'wp-artsolut-blocks'),
  value: 'sm'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('md', 'wp-artsolut-blocks'),
  value: 'md'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('lg', 'wp-artsolut-blocks'),
  value: 'lg'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('xl', 'wp-artsolut-blocks'),
  value: 'xl'
}];
class PaddingComponent extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      paddingTopXs,
      paddingTopMd,
      paddingTopXl,
      paddingLeftXs,
      paddingLeftMd,
      paddingLeftXl,
      paddingRightXs,
      paddingRightMd,
      paddingRightXl,
      paddingBottomXs,
      paddingBottomMd,
      paddingBottomXl
    } = attributes;
    let allow = false;
    const name = this.props.name;
    if (!allow) {
      allow = allowedBlocks.includes(name);
    }
    if (!allow) {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_10__["default"].options,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding del contenido'), " ")),
      initialOpen: initalOpenPanel,
      onToggle: () => {
        initalOpenPanel = !initalOpenPanel;
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TabPanel, {
      className: "art-ext-tabpanel",
      tabs: [{
        name: 'xl',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_10__["default"].iconDesktop)),
        className: 'art-ext-tabpanel-tab'
      }, {
        name: 'md',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_10__["default"].iconTablet)),
        className: 'art-ext-tabpanel-tab'
      }, {
        name: 'xs',
        title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, _icons__WEBPACK_IMPORTED_MODULE_10__["default"].iconMobile)),
        className: 'art-ext-tabpanel-tab'
      }]
    }, tabData => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding superior', 'wp-artsolut-blocks'),
        className: "art-ext-basecontrol"
      }, tabData.name === 'xl' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: paddingTopXl == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (paddingTopXl === option.value) {
            setAttributes({
              paddingTopXl: ''
            });
          } else {
            setAttributes({
              paddingTopXl: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'md' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: paddingTopMd == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (paddingTopMd === option.value) {
            setAttributes({
              paddingTopMd: ''
            });
          } else {
            setAttributes({
              paddingTopMd: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'xs' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: paddingTopXs == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (paddingTopXs === option.value) {
            setAttributes({
              paddingTopXs: ''
            });
          } else {
            setAttributes({
              paddingTopXs: option.value
            });
          }
        }
      }, option.label))) : ''), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Izquierda', 'wp-artsolut-blocks'),
        className: "art-ext-basecontrol"
      }, tabData.name === 'xl' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: paddingLeftXl == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (paddingLeftXl === option.value) {
            setAttributes({
              paddingLeftXl: ''
            });
          } else {
            setAttributes({
              paddingLeftXl: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'md' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: paddingLeftMd == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (paddingLeftMd === option.value) {
            setAttributes({
              paddingLeftMd: ''
            });
          } else {
            setAttributes({
              paddingLeftMd: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'xs' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: paddingLeftXs == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (paddingLeftXs === option.value) {
            setAttributes({
              paddingLeftXs: ''
            });
          } else {
            setAttributes({
              paddingLeftXs: option.value
            });
          }
        }
      }, option.label))) : ''), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Derecha', 'wp-artsolut-blocks'),
        className: "art-ext-basecontrol"
      }, tabData.name === 'xl' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: paddingRightXl == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (paddingRightXl === option.value) {
            setAttributes({
              paddingRightXl: ''
            });
          } else {
            setAttributes({
              paddingRightXl: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'md' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: paddingRightMd == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (paddingRightMd === option.value) {
            setAttributes({
              paddingRightMd: ''
            });
          } else {
            setAttributes({
              paddingRightMd: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'xs' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: paddingRightXs == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (paddingRightXs === option.value) {
            setAttributes({
              paddingRightXs: ''
            });
          } else {
            setAttributes({
              paddingRightXs: option.value
            });
          }
        }
      }, option.label))) : ''), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding Inferior', 'wp-artsolut-blocks'),
        className: "art-ext-basecontrol"
      }, tabData.name === 'xl' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: paddingBottomXl == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (paddingBottomXl === option.value) {
            setAttributes({
              paddingBottomXl: ''
            });
          } else {
            setAttributes({
              paddingBottomXl: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'md' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: paddingBottomMd == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (paddingBottomMd === option.value) {
            setAttributes({
              paddingBottomMd: ''
            });
          } else {
            setAttributes({
              paddingBottomMd: option.value
            });
          }
        }
      }, option.label))) : '', tabData.name === 'xs' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {
        className: "art-btn-group"
      }, spacingOptions.map((option, value) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        key: option.value,
        variant: paddingBottomXs == option.value ? 'primary' : '',
        isPressed: value === option.value,
        disabled: option.disabled,
        onClick: () => {
          if (paddingBottomXs === option.value) {
            setAttributes({
              paddingBottomXs: ''
            });
          } else {
            setAttributes({
              paddingBottomXs: option.value
            });
          }
        }
      }, option.label))) : ''));
    })));
  }
}
function addAttributes(settings) {
  const {
    attributes
  } = settings;
  if (allowedBlocks.includes(settings.name)) {
    return {
      ...settings,
      attributes: {
        ...attributes,
        paddingTopXl: {
          type: 'string',
          default: ''
        },
        paddingLeftXl: {
          type: 'string',
          default: ''
        },
        paddingRightXl: {
          type: 'string',
          default: ''
        },
        paddingBottomXl: {
          type: 'string',
          default: ''
        },
        paddingTopMd: {
          type: 'string',
          default: ''
        },
        paddingLeftMd: {
          type: 'string',
          default: ''
        },
        paddingRightMd: {
          type: 'string',
          default: ''
        },
        paddingBottomMd: {
          type: 'string',
          default: ''
        },
        paddingTopXs: {
          type: 'string',
          default: ''
        },
        paddingLeftXs: {
          type: 'string',
          default: ''
        },
        paddingRightXs: {
          type: 'string',
          default: ''
        },
        paddingBottomXs: {
          type: 'string',
          default: ''
        }
      }
    };
  }
  return settings;
}
const withPaddingComponent = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockEdit => function (props) {
  if (!allowedBlocks.includes(props.name)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
  }
  const hasCustomClassName = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.hasBlockSupport)(props.name, 'customClassName', true);
  let classes = [];

  /* 			if (props.attributes.styleH1) {
  				classes.push({ 'styleH1': true });
  			} else {
  				classes.push({ 'styleH1': false });
  			} */

  props.attributes.className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(props.attributes.className, classes);
  if (hasCustomClassName && props.isSelected) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PaddingComponent, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, 'withPaddingComponent');
function applyExtraClass(extraProps, blockType, attributes) {
  if (!allowedBlocks.includes(blockType.name)) {
    return extraProps;
  }
  const {
    paddingTopXs,
    paddingTopMd,
    paddingTopXl,
    paddingLeftXs,
    paddingLeftMd,
    paddingLeftXl,
    paddingRightXs,
    paddingRightMd,
    paddingRightXl,
    paddingBottomXs,
    paddingBottomMd,
    paddingBottomXl
  } = attributes;
  let classes = [];
  if (paddingTopXs != null && paddingTopXs != '') {
    classes.push(`padding-top-${paddingTopXs}@xs`);
  }
  if (paddingLeftXs != null && paddingLeftXs != '') {
    classes.push(`padding-left-${paddingLeftXs}@xs`);
  }
  if (paddingRightXs != null && paddingRightXs != '') {
    classes.push(`padding-right-${paddingRightXs}@xs`);
  }
  if (paddingBottomXs != null && paddingBottomXs != '') {
    classes.push(`padding-bottom-${paddingBottomXs}@xs`);
  }
  //Md
  if (paddingTopMd != null && paddingTopMd != '') {
    classes.push(`padding-top-${paddingTopMd}@md`);
  }
  if (paddingLeftMd != null && paddingLeftMd != '') {
    classes.push(`padding-left-${paddingLeftMd}@md`);
  }
  if (paddingRightMd != null && paddingRightMd != '') {
    classes.push(`padding-right-${paddingRightMd}@md`);
  }
  if (paddingBottomMd != null && paddingBottomMd != '') {
    classes.push(`padding-bottom-${paddingBottomMd}@md`);
  }

  //Xl
  if (paddingTopXl != null && paddingTopXl != '') {
    classes.push(`padding-top-${paddingTopXl}@lg`);
  }
  if (paddingLeftXl != null && paddingLeftXl != '') {
    classes.push(`padding-left-${paddingLeftXl}@lg`);
  }
  if (paddingRightXl != null && paddingRightXl != '') {
    classes.push(`padding-right-${paddingRightXl}@lg`);
  }
  if (paddingBottomXl != null && paddingBottomXl != '') {
    classes.push(`padding-bottom-${paddingBottomXl}@lg`);
  }
  return {
    ...extraProps,
    className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, classes)
  };
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'wp-artsolut-blocks/PaddingComponet/attributes', addAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', 'wp-artsolut-blocks/PaddingComponet/advanced', withPaddingComponent);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.getSaveContent.extraProps', 'wp-artsolut-blocks/PaddingComponet/applyExtraClass', applyExtraClass);

/***/ }),

/***/ "./src/extend/text-sizes/icons.js":
/*!****************************************!*\
  !*** ./src/extend/text-sizes/icons.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.options = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M5 7C4.46957 7 3.96086 6.78929 3.58579 6.41421C3.21071 6.03914 3 5.53043 3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3C5.53043 3 6.03914 3.21071 6.41421 3.58579C6.78929 3.96086 7 4.46957 7 5M5 7C5.53043 7 6.03914 6.78929 6.41421 6.41421C6.78929 6.03914 7 5.53043 7 5M5 7V17M7 5H17M17 5C17 5.53043 17.2107 6.03914 17.5858 6.41421C17.9609 6.78929 18.4696 7 19 7M17 5C17 4.46957 17.2107 3.96086 17.5858 3.58579C17.9609 3.21071 18.4696 3 19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5C21 5.53043 20.7893 6.03914 20.4142 6.41421C20.0391 6.78929 19.5304 7 19 7M19 7V17M7 19C7 19.5304 6.78929 20.0391 6.41421 20.4142C6.03914 20.7893 5.53043 21 5 21C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19C3 18.4696 3.21071 17.9609 3.58579 17.5858C3.96086 17.2107 4.46957 17 5 17M7 19C7 18.4696 6.78929 17.9609 6.41421 17.5858C6.03914 17.2107 5.53043 17 5 17M7 19H17M17 19C17 19.5304 17.2107 20.0391 17.5858 20.4142C17.9609 20.7893 18.4696 21 19 21C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19C21 18.4696 20.7893 17.9609 20.4142 17.5858C20.0391 17.2107 19.5304 17 19 17M17 19C17 18.4696 17.2107 17.9609 17.5858 17.5858C17.9609 17.2107 18.4696 17 19 17M10 10H14M12 14V10",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
icons.color = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  "clip-path": "url(#clip0_2_12)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M3 24C2.71667 24 2.479 23.904 2.287 23.712C2.095 23.52 1.99934 23.2827 2 23V21C2 20.7167 2.096 20.479 2.288 20.287C2.48 20.095 2.71734 19.9993 3 20H21C21.2833 20 21.521 20.096 21.713 20.288C21.905 20.48 22.0007 20.7173 22 21V23C22 23.2833 21.904 23.521 21.712 23.713C21.52 23.905 21.2827 24.0007 21 24H3ZM7.125 17C6.74167 17 6.43734 16.8373 6.212 16.512C5.98667 16.1867 5.941 15.841 6.075 15.475L10.475 3.75C10.5583 3.51667 10.7 3.33333 10.9 3.2C11.1 3.06667 11.3167 3 11.55 3H12.45C12.7 3 12.921 3.06667 13.113 3.2C13.305 3.33333 13.4423 3.51667 13.525 3.75L17.95 15.5C18.0833 15.8667 18.0377 16.2083 17.813 16.525C17.5883 16.8417 17.284 17 16.9 17C16.6667 17 16.45 16.9333 16.25 16.8C16.05 16.6667 15.9083 16.4833 15.825 16.25L14.85 13.4H9.2L8.175 16.275C8.09167 16.5083 7.954 16.6873 7.762 16.812C7.57 16.9367 7.357 16.9993 7.125 17ZM9.9 11.4H14.1L12.05 5.6H11.95L9.9 11.4Z",
  fill: "black"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip0_2_12"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "24",
  height: "24",
  fill: "white"
}))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/extend/text-sizes/index.js":
/*!****************************************!*\
  !*** ./src/extend/text-sizes/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tools */ "./src/tools/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons.js */ "./src/extend/text-sizes/icons.js");












let initalOpenPanel = false;
const allowedBlocks = ["core/paragraph", "core/heading"];
const colors = [{
  name: "white",
  color: "#FFFFFF"
}, {
  name: "light-grey",
  color: "#F8F7F7"
}, {
  name: "black",
  color: "#1C1B1B"
}, {
  name: "red",
  color: "#F0392D"
}, {
  name: "black-b",
  color: "#000000"
}];
function getColorName(colorValue) {
  const color = colors.find(c => c.color === colorValue);
  if (color) {
    return color.name;
  } else {
    return null;
  }
}
class TextOptionsComponent extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      medium,
      t1,
      t2,
      t3,
      t3dest,
      t4,
      t5,
      t1dest,
      banner,
      textColor
    } = attributes;
    let allow = false;
    const name = this.props.name;
    if (!allow) {
      allow = allowedBlocks.includes(name);
    }
    if (!allow) {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: _icons_js__WEBPACK_IMPORTED_MODULE_10__["default"].options,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Tamaño de texto"), " ")),
      className: "art-mb-xs",
      initialOpen: initalOpenPanel,
      onToggle: () => {
        initalOpenPanel = !initalOpenPanel;
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
      className: "art-mt-xs",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Tamaño H1"),
      checked: t1,
      onChange: newValue => {
        setAttributes({
          t1: newValue
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
      className: "art-mt-xs",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Tamaño H1 Dest"),
      checked: t1dest,
      onChange: newValue => {
        setAttributes({
          t1dest: newValue
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
      className: "art-mt-xs",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Tamaño H2"),
      checked: t2,
      onChange: newValue => {
        setAttributes({
          t2: newValue
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
      className: "art-mt-xs",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Tamaño H3"),
      checked: t3,
      onChange: newValue => {
        setAttributes({
          t3: newValue
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
      className: "art-mt-xs",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Tamaño H3 Dest"),
      checked: t3dest,
      onChange: newValue => {
        setAttributes({
          t3dest: newValue
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
      className: "art-mt-xs",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Tamaño H4"),
      checked: t4,
      onChange: newValue => {
        setAttributes({
          t4: newValue
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
      className: "art-mt-xs",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Tamaño H5"),
      checked: t5,
      onChange: newValue => {
        setAttributes({
          t5: newValue
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
      className: "art-mt-xs",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Tamaño Banner"),
      checked: banner,
      onChange: newValue => {
        setAttributes({
          banner: newValue
        });
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        icon: _icons_js__WEBPACK_IMPORTED_MODULE_10__["default"].color,
        className: "art-ext-icon"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color del texto"), " ")),
      className: "art-mb-xs",
      initialOpen: initalOpenPanel,
      onToggle: () => {
        initalOpenPanel = !initalOpenPanel;
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ColorPalette, {
      colors: colors,
      className: "art-mt-xs",
      value: textColor,
      onChange: newColor => {
        setAttributes({
          textColor: newColor
        });
      },
      disableCustomColors: true
    }))));
  }
}
function addAttributes(settings) {
  const {
    attributes
  } = settings;
  if (allowedBlocks.includes(settings.name)) {
    return {
      ...settings,
      attributes: {
        ...attributes,
        t1: {
          type: "boolean",
          default: false
        },
        t1dest: {
          type: "boolean",
          default: false
        },
        t2: {
          type: "boolean",
          default: false
        },
        t3: {
          type: "boolean",
          default: false
        },
        t3dest: {
          type: "boolean",
          default: false
        },
        t4: {
          type: "boolean",
          default: false
        },
        banner: {
          type: "boolean",
          default: false
        },
        textColor: {
          type: "string",
          default: ""
        }
      }
    };
  }
  return settings;
}
const withTextOptionsComponent = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockEdit => function (props) {
  const {
    attributes
  } = props;
  if (!allowedBlocks.includes(props.name)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
  }
  const hasCustomClassName = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.hasBlockSupport)(props.name, "customClassName", true);
  if (attributes.className) attributes.className = (0,_tools__WEBPACK_IMPORTED_MODULE_8__.removeClasses)(attributes.className, "color-");
  let classes = [];
  classes.push({
    "has-size-t1": attributes.t1
  });
  classes.push({
    "has-size-t1dest": attributes.t1dest
  });
  classes.push({
    "has-size-t2": attributes.t2
  });
  classes.push({
    "has-size-t3": attributes.t3
  });
  classes.push({
    "has-size-t3-dest": attributes.t3dest
  });
  classes.push({
    "has-size-t4": attributes.t4
  });
  classes.push({
    "has-size-t5": attributes.t5
  });
  classes.push({
    "has-size-banner": attributes.banner
  });
  let colorName = getColorName(attributes.textColor);
  if (colorName) {
    classes.push(`color-${colorName}`);
  }
  attributes.className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(attributes.className, classes);
  if (hasCustomClassName && props.isSelected) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextOptionsComponent, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, "withTextOptionsComponent");
function applyExtraClass(extraProps, blockType, attributes) {
  if (!allowedBlocks.includes(blockType.name)) {
    return extraProps;
  }

  /* if (extraProps.className)
  extraProps.className = removeClasses(extraProps.className, 'color-'); */

  let classes = [];
  classes.push({
    "has-size-t1": attributes.t1
  });
  classes.push({
    "has-size-t1dest": attributes.t1dest
  });
  classes.push({
    "has-size-t2": attributes.t2
  });
  classes.push({
    "has-size-t3": attributes.t3
  });
  classes.push({
    "has-size-t3-dest": attributes.t3dest
  });
  classes.push({
    "has-size-t4": attributes.t4
  });
  classes.push({
    "has-size-t5": attributes.t5
  });
  classes.push({
    "has-size-banner": attributes.banner
  });
  let colorName = getColorName(attributes.textColor);
  if (colorName) {
    classes.push(`color-${colorName}`);
  }
  return {
    ...extraProps,
    className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, classes)
  };
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)("blocks.registerBlockType", "wp-artsolut-blocks/TextOptionsComponent/attributes", addAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)("editor.BlockEdit", "wp-artsolut-blocks/TextOptionsComponent/advanced", withTextOptionsComponent);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)("blocks.getSaveContent.extraProps", "wp-artsolut-blocks/TextOptionsComponent/applyExtraClass", applyExtraClass);

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideIcon: () => (/* binding */ hideIcon),
/* harmony export */   iconAnimation: () => (/* binding */ iconAnimation),
/* harmony export */   iconArrow: () => (/* binding */ iconArrow),
/* harmony export */   iconBackground: () => (/* binding */ iconBackground),
/* harmony export */   iconBgColor: () => (/* binding */ iconBgColor),
/* harmony export */   iconCard: () => (/* binding */ iconCard),
/* harmony export */   iconColor: () => (/* binding */ iconColor),
/* harmony export */   iconCta: () => (/* binding */ iconCta),
/* harmony export */   iconDesktop: () => (/* binding */ iconDesktop),
/* harmony export */   iconLayout1: () => (/* binding */ iconLayout1),
/* harmony export */   iconLayout2: () => (/* binding */ iconLayout2),
/* harmony export */   iconLottie: () => (/* binding */ iconLottie),
/* harmony export */   iconMasonry: () => (/* binding */ iconMasonry),
/* harmony export */   iconMobile: () => (/* binding */ iconMobile),
/* harmony export */   iconOpen: () => (/* binding */ iconOpen),
/* harmony export */   iconOptions: () => (/* binding */ iconOptions),
/* harmony export */   iconPatrocinador: () => (/* binding */ iconPatrocinador),
/* harmony export */   iconPostCard: () => (/* binding */ iconPostCard),
/* harmony export */   iconRectangle: () => (/* binding */ iconRectangle),
/* harmony export */   iconTablet: () => (/* binding */ iconTablet),
/* harmony export */   iconTextSize: () => (/* binding */ iconTextSize),
/* harmony export */   iconWorkGrid: () => (/* binding */ iconWorkGrid),
/* harmony export */   inconColorPicker: () => (/* binding */ inconColorPicker)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const iconBgColor = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24px",
  height: "24px",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M8.99994 1.75C8.99994 1.33579 9.33573 1 9.74994 1C10.1642 1 10.4999 1.33579 10.4999 1.75V3.01536C10.9506 3.0556 11.3903 3.24821 11.7352 3.59318L15.2708 7.12871C16.0518 7.90976 16.0518 9.17609 15.2708 9.95714L11.0281 14.1998C10.2471 14.9808 8.98074 14.9808 8.19969 14.1998L4.66416 10.6642C3.88311 9.8832 3.88311 8.61687 4.66416 7.83582L8.9068 3.59318C8.93713 3.56284 8.9682 3.53368 8.99994 3.5057V1.75ZM8.99994 6.25V5.62135L6.11052 8.51077H14.3555C14.348 8.39373 14.2995 8.27882 14.2101 8.18937L10.6746 4.65384C10.6233 4.60254 10.5636 4.56471 10.4999 4.54037V6.25C10.4999 6.66421 10.1642 7 9.74994 7C9.33573 7 8.99994 6.66421 8.99994 6.25ZM6.132 10.0108L9.26035 13.1391C9.45561 13.3344 9.77219 13.3344 9.96746 13.1391L13.0958 10.0108H6.132Z",
  fill: "#212121"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.58573 14H4.5C3.11929 14 2 15.1193 2 16.5V19.5C2 20.8807 3.11929 22 4.5 22H19.5C20.8807 22 22 20.8807 22 19.5V16.5C22 15.285 21.1333 14.2725 19.9844 14.0469C19.9945 14.1543 20 14.2638 20 14.3749C20 14.7762 19.9349 15.1734 19.8115 15.5495C20.2113 15.6804 20.5 16.0565 20.5 16.5V19.5C20.5 20.0523 20.0523 20.5 19.5 20.5H4.5C3.94772 20.5 3.5 20.0523 3.5 19.5V16.5C3.5 15.9477 3.94772 15.5 4.5 15.5H8.3345C8.02991 15.3564 7.74449 15.1588 7.49269 14.907L6.58573 14Z",
  fill: "#212121"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14 14.375C14 13.8816 14.1541 13.4027 14.3418 12.9938C14.5325 12.5784 14.7798 12.1881 15.0158 11.8595C15.2531 11.5289 15.4888 11.247 15.6647 11.0481C15.7502 10.9515 15.9062 10.7867 15.9642 10.7254L15.9697 10.7197C16.2626 10.4268 16.7374 10.4268 17.0303 10.7197L17.3353 11.0481C17.5112 11.247 17.7469 11.5289 17.9842 11.8595C18.2202 12.1881 18.4675 12.5784 18.6582 12.9938C18.8459 13.4027 19 13.8816 19 14.375C19 15.7654 17.9711 17 16.5 17C15.0289 17 14 15.7654 14 14.375ZM16.7658 12.7343C16.676 12.6092 16.5858 12.4916 16.5 12.3844C16.4142 12.4916 16.324 12.6092 16.2342 12.7343C16.0327 13.015 15.8425 13.32 15.7051 13.6195C15.5647 13.9253 15.5 14.1808 15.5 14.375C15.5 15.0663 15.9809 15.5 16.5 15.5C17.0191 15.5 17.5 15.0663 17.5 14.375C17.5 14.1808 17.4353 13.9253 17.2949 13.6195C17.1575 13.32 16.9673 13.015 16.7658 12.7343Z",
  fill: "#212121"
}));
const iconWorkGrid = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24px",
  height: "24px",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13.9922 17H16.9922M19.9922 17H16.9922M16.9922 17V14M16.9922 17V20",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 9.4V4.6C4 4.26863 4.26863 4 4.6 4H9.4C9.73137 4 10 4.26863 10 4.6V9.4C10 9.73137 9.73137 10 9.4 10H4.6C4.26863 10 4 9.73137 4 9.4Z",
  stroke: "currentColor",
  "stroke-width": "1.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 19.4V14.6C4 14.2686 4.26863 14 4.6 14H9.4C9.73137 14 10 14.2686 10 14.6V19.4C10 19.7314 9.73137 20 9.4 20H4.6C4.26863 20 4 19.7314 4 19.4Z",
  stroke: "currentColor",
  "stroke-width": "1.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14 9.4V4.6C14 4.26863 14.2686 4 14.6 4H19.4C19.7314 4 20 4.26863 20 4.6V9.4C20 9.73137 19.7314 10 19.4 10H14.6C14.2686 10 14 9.73137 14 9.4Z",
  stroke: "currentColor",
  "stroke-width": "1.5"
}));
const iconPostCard = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24px",
  height: "24px",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13.9922 17H16.9922M19.9922 17H16.9922M16.9922 17V14M16.9922 17V20",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 9.4V4.6C4 4.26863 4.26863 4 4.6 4H9.4C9.73137 4 10 4.26863 10 4.6V9.4C10 9.73137 9.73137 10 9.4 10H4.6C4.26863 10 4 9.73137 4 9.4Z",
  stroke: "currentColor",
  "stroke-width": "1.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 19.4V14.6C4 14.2686 4.26863 14 4.6 14H9.4C9.73137 14 10 14.2686 10 14.6V19.4C10 19.7314 9.73137 20 9.4 20H4.6C4.26863 20 4 19.7314 4 19.4Z",
  stroke: "currentColor",
  "stroke-width": "1.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14 9.4V4.6C14 4.26863 14.2686 4 14.6 4H19.4C19.7314 4 20 4.26863 20 4.6V9.4C20 9.73137 19.7314 10 19.4 10H14.6C14.2686 10 14 9.73137 14 9.4Z",
  stroke: "currentColor",
  "stroke-width": "1.5"
}));
const iconMasonry = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  "enable-background": "new 0 0 512 512;"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M501.801,245.801H387.908V134.629c0-5.632-4.566-10.199-10.199-10.199h-111.17V10.199C266.539,4.567,261.973,0,256.34,0\r H10.199C4.566,0,0,4.567,0,10.199v491.602C0,507.433,4.566,512,10.199,512h491.602c5.633,0,10.199-4.567,10.199-10.199V256\r C512,250.368,507.434,245.801,501.801,245.801z M367.51,144.829v100.972H144.489V144.829H367.51z M20.398,20.398H246.14V124.43\r H20.398V20.398z M20.398,144.829h103.692v100.972H20.398V144.829z M20.398,266.199H246.14v101.652H20.398V266.199z\r M124.091,491.602H20.398V388.25h103.692V491.602z M367.511,491.602H144.489V388.25h223.022V491.602z M491.602,491.602H387.909\r V388.25h33.318c5.633,0,10.199-4.567,10.199-10.199c0-5.632-4.566-10.199-10.199-10.199H266.539V266.199h225.063V491.602z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M464.064,367.852h-6.12c-5.633,0-10.199,4.567-10.199,10.199c0,5.632,4.566,10.199,10.199,10.199h6.12\r c5.633,0,10.199-4.567,10.199-10.199C474.263,372.419,469.697,367.852,464.064,367.852z"
}));
const iconDesktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20 4H4C2.89543 4 2 4.83147 2 5.85714V15.1429C2 16.1685 2.89543 17 4 17H20C21.1046 17 22 16.1685 22 15.1429V5.85714C22 4.83147 21.1046 4 20 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M8 20H16",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 18V20",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
const iconTablet = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16.6429 4H7.35714C6.33147 4 5.5 4.71634 5.5 5.6V18.4C5.5 19.2837 6.33147 20 7.35714 20H16.6429C17.6685 20 18.5 19.2837 18.5 18.4V5.6C18.5 4.71634 17.6685 4 16.6429 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 17.5H12.01",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
const iconMobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.5714 4H8.42857C7.63959 4 7 4.71634 7 5.6V18.4C7 19.2837 7.63959 20 8.42857 20H15.5714C16.3604 20 17 19.2837 17 18.4V5.6C17 4.71634 16.3604 4 15.5714 4Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 17.5H12.01",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  fill: "transparent"
}));
const iconCard = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  "enable-background": "new 0 0 512 512",
  version: "1.1",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(1 1)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m272.92 199.53-84.48-84.48c-3.413-3.413-8.533-3.413-11.947 0l-108.37 108.37c-1.707 1.707-2.56 3.413-2.56 5.973s0.853 4.267 2.56 5.973l84.48 84.48c1.707 1.707 3.413 2.56 5.973 2.56 1.707 0 4.267-0.853 5.973-2.56l108.37-108.37c3.413-3.413 3.413-8.533 0-11.947zm-77.653 42.667c5.973-6.827 15.36-10.24 23.893-10.24 2.298 0 4.608 0.011 8.141 1.246l-40.908 40.908c-2.788-11.548 0.664-23.705 8.874-31.914zm-36.694-12.8c-6.827-6.827-6.827-17.067 0-23.893 3.413-3.413 7.68-5.12 11.947-5.12s8.533 1.707 11.947 5.12c6.827 6.827 6.827 17.067 0 23.893s-17.067 6.827-23.894 0zm82.895-10.361c-11.431-5.03-24.247-5.838-35.974-2.543-0.135-8.569-3.539-17.101-10.227-23.789-13.653-13.653-34.987-13.653-48.64 0s-13.653 34.987 0 48.64c6.771 6.771 15.22 10.179 23.683 10.235-3.581 11.846-2.922 24.617 2.494 36.122l-14.23 14.23-72.534-72.534 96.427-96.427 72.533 72.534-13.532 13.532z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m249.03 283.16c-3.413-3.413-8.533-3.413-11.947 0l-60.587 60.587c-3.413 3.413-3.413 8.533 0 11.947 1.707 1.707 3.413 2.56 5.973 2.56s4.267 0 5.973-2.56l60.587-60.587c3.414-3.414 3.414-8.534 1e-3 -11.947z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m260.97 271.21c1.707 1.707 3.413 2.56 5.973 2.56s4.267 0 5.973-2.56l35.84-35.84c3.413-3.413 3.413-8.533 0-11.947s-8.533-3.413-11.947 0l-35.84 35.84c-3.412 3.414-3.412 8.534 1e-3 11.947z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m338.63 254.15c-3.413-3.413-8.533-3.413-11.947 0l-120.32 120.32c-3.413 3.413-3.413 8.533 0 11.947 1.707 1.707 3.413 2.56 5.973 2.56s5.12-0.853 5.973-2.56l120.32-120.32c3.414-3.414 3.414-8.534 1e-3 -11.947z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m272.92 380.44c1.707 1.707 3.413 2.56 5.973 2.56s4.267-0.853 5.973-2.56l84.48-84.48c3.413-3.413 3.413-8.533 0-11.947-3.413-3.413-8.533-3.413-11.947 0l-84.48 84.48c-3.412 3.414-3.412 8.534 1e-3 11.947z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m249.03 392.39-11.947 11.947c-3.413 3.413-3.413 8.533 0 11.947 1.707 1.707 3.413 2.56 5.973 2.56 1.707 0 4.267-0.853 5.973-2.56l11.947-11.947c3.413-3.413 3.413-8.533 0-11.947s-8.533-3.414-11.946 0z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m315.59 386.41-48.64 48.64c-3.413 3.413-3.413 8.533 0 11.947 1.707 1.707 3.413 2.56 5.973 2.56s4.267-0.853 5.973-2.56l48.64-48.64c3.413-3.413 3.413-8.533 0-11.947-3.413-3.413-8.533-3.413-11.946 0z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m400.07 325.83c3.413-3.413 3.413-8.533 0-11.947-3.413-3.413-8.533-3.413-11.947 0l-48.64 48.64c-3.413 3.413-3.413 8.533 0 11.947 1.707 1.707 3.413 2.56 5.973 2.56s4.267-0.853 5.973-2.56l48.641-48.64z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m408.6 71.533h51.2c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533h-51.2c-5.12 0-8.533 3.413-8.533 8.533s3.413 8.533 8.533 8.533z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m408.6 156.87h51.2c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533h-51.2c-5.12 0-8.533 3.413-8.533 8.533s3.413 8.533 8.533 8.533z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m408.6 114.2h34.133c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533h-34.133c-5.12 0-8.533 3.413-8.533 8.533s3.413 8.533 8.533 8.533z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m502.47 3.267h-256c-5.12 0-8.533 3.413-8.533 8.533v80.213l-43.52-43.52c-3.413-3.413-8.533-3.413-11.947 0l-180.91 180.91c-1.707 1.707-2.56 3.413-2.56 5.973s0.853 4.267 2.56 5.973l264.53 262.83c1.707 1.707 3.413 2.56 5.973 2.56s4.267-0.853 5.973-2.56l40.874-40.107h183.55c5.12 0 8.533-3.413 8.533-8.533v-443.73c2e-3 -5.12-3.411-8.533-8.531-8.533zm-230.4 482.99-252.59-250.88 168.96-168.96 137.63 137.63c0.689 1.239 1.681 2.231 2.92 2.92l39.746 39.746c0.689 1.239 1.681 2.232 2.92 2.92l39.746 39.746c0.689 1.239 1.681 2.231 2.92 2.92l27.553 27.553-0.08 0.079-43.751 42.872c-1.144 0.65-2.074 1.562-2.745 2.689l-40.826 40.009c-1.104 0.639-2.006 1.522-2.664 2.61l-79.745 78.143zm221.87-39.253h-157.01l25.961-25.6h96.919c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533h-79.612l25.961-25.6h53.651c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533h-36.345l36.345-35.84c1.707-1.707 2.56-3.413 2.56-5.973s-0.853-4.267-2.56-5.973l-20.48-20.48h20.48c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533h-37.547l-25.6-25.6h63.147c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533h-80.213l-25.6-25.6h105.81c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.537-8.533-8.537h-122.88l-25.6-25.6h63.147c5.12 0 8.533-3.413 8.533-8.533v-102.4c0-5.12-3.413-8.533-8.533-8.533h-85.333c-5.12 0-8.533 3.413-8.533 8.533v80.213l-25.6-25.6v-88.747h238.93v426.67zm-196.27-298.67v-85.333h68.267v85.333h-68.267z"
})));
const iconLayout1 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "24",
  height: "24",
  fill: "white"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "1",
  width: "22",
  height: "11",
  fill: "black"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "1",
  y: "12",
  width: "22",
  height: "2",
  fill: "black"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "1",
  y: "15",
  width: "10",
  height: "1",
  fill: "black"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "22",
  height: "1",
  transform: "matrix(1 0 0 -1 1 19)",
  fill: "black"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "22",
  height: "1",
  transform: "matrix(1 0 0 -1 1 21)",
  fill: "black"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "22",
  height: "1",
  transform: "matrix(1 0 0 -1 1 23)",
  fill: "black"
}));
const iconLayout2 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "24",
  height: "24",
  fill: "white"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "1",
  y: "4",
  width: "22",
  height: "11",
  fill: "black"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "1",
  y: "16",
  width: "10",
  height: "1",
  fill: "black"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "22",
  height: "1",
  transform: "matrix(1 0 0 -1 1 19)",
  fill: "black"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "22",
  height: "1",
  transform: "matrix(1 0 0 -1 1 21)",
  fill: "black"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "22",
  height: "1",
  transform: "matrix(1 0 0 -1 1 23)",
  fill: "black"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "1",
  y: "1",
  width: "22",
  height: "2",
  fill: "black"
}));
const iconCta = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  "enable-background": "new 0 0 94.63 94.63",
  version: "1.1",
  viewBox: "0 0 94.63 94.63",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m93.949 91.792-34.088-90.497c-0.293-0.779-1.039-1.295-1.872-1.295h-20.467c-0.827 0-1.568 0.509-1.866 1.28l-34.97 90.63c-0.237 0.615-0.156 1.308 0.216 1.852 0.373 0.543 0.99 0.868 1.649 0.868h17.268c0.835 0 1.583-0.521 1.875-1.304l7.782-20.92h34.894l7.199 20.746c0.279 0.806 1.038 1.345 1.891 1.345h18.619c0.655 0 1.271-0.322 1.645-0.862 0.374-0.539 0.457-1.229 0.225-1.843zm-34.672-34.666h-24.502l12.638-38.098 11.864 38.098z"
}));
const iconBackground = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  "enable-background": "new 0 0 512 512",
  version: "1.1",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m43.636 40.727v273.46h285.09v-273.46h-285.09zm267.64 256h-250.18v-33.588l102.25-80.725 147.93 98.621v15.692zm-1e-3 -36.671-81.673-54.448 32.818-28.716 48.855 34.198v48.966zm1e-3 -70.273-50.054-35.037-46.665 40.832-52.077-34.718-101.38 80.04v-182.72h250.18v131.6z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m369.46 157.09v-157.09h-366.55v354.91h139.64v157.09h366.54v-354.91h-139.64zm0 58.182h81.455v238.54h-250.18v-98.909h168.73v-139.64zm-349.09 122.18v-320h331.64v320h-331.64zm471.27 157.09h-331.64v-139.64h23.273v116.36h285.09v-273.46h-98.909v-23.273h122.18v320z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m122.18 75.636c-20.852 0-37.818 16.965-37.818 37.818 0 20.854 16.966 37.818 37.818 37.818s37.818-16.964 37.818-37.817c0-20.854-16.966-37.819-37.818-37.819zm0 58.182c-11.228 0-20.364-9.136-20.364-20.364s9.136-20.364 20.364-20.364 20.364 9.136 20.364 20.364c-1e-3 11.228-9.136 20.364-20.364 20.364z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "197.82",
  y: "87.273",
  width: "81.455",
  height: "17.455"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "180.36",
  y: "122.18",
  width: "23.273",
  height: "17.455"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "215.27",
  y: "122.18",
  width: "23.273",
  height: "17.455"
}));
const iconAnimation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "36px",
  height: "36px",
  viewBox: "0 0 36 36",
  version: "1.1",
  preserveAspectRatio: "xMidYMid meet",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M24.31,25.81c-1.75,0-3-2.49-3-6a12.79,12.79,0,0,1,1.72-6.7,2.57,2.57,0,0,0-3.79,0A12.79,12.79,0,0,1,21,19.76c0,3.56-1.23,6-3,6s-3-2.49-3-6a12.79,12.79,0,0,1,1.72-6.7,2.57,2.57,0,0,0-3.79,0,12.79,12.79,0,0,1,1.72,6.7c0,3.56-1.23,6-3,6s-3-2.49-3-6a12.88,12.88,0,0,1,1.71-6.7,2.7,2.7,0,0,0-1.89-.87C7.1,12.19,5.69,13.7,5,16l-.23.7H2a1,1,0,0,1,0-2H3.29c1.1-2.83,3.06-4.55,5.24-4.55a4.67,4.67,0,0,1,3.16,1.32,4.62,4.62,0,0,1,3.15-1.32A4.65,4.65,0,0,1,18,11.51a4.43,4.43,0,0,1,6.31,0,4.67,4.67,0,0,1,3.16-1.32c2.18,0,4.14,1.72,5.24,4.55H34a1,1,0,0,1,0,2H31.28l-.23-.7c-.74-2.34-2.15-3.85-3.58-3.85a2.7,2.7,0,0,0-1.89.87,12.88,12.88,0,0,1,1.71,6.7C27.29,23.32,26.07,25.81,24.31,25.81ZM18,14.93a11.71,11.71,0,0,0-1,4.83c0,2.54.66,3.75,1,4,.32-.27,1-1.48,1-4A11.71,11.71,0,0,0,18,14.93Zm6.31,0a11.71,11.71,0,0,0-1,4.83c0,2.54.66,3.75,1,4,.32-.27,1-1.48,1-4A11.71,11.71,0,0,0,24.31,14.93Zm-12.62,0a11.71,11.71,0,0,0-1,4.83c0,2.54.66,3.75,1,4,.32-.27,1-1.48,1-4A11.71,11.71,0,0,0,11.69,14.93Z",
  class: "clr-i-outline clr-i-outline-path-1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "0",
  y: "0",
  width: "36",
  height: "36",
  "fill-opacity": "0"
}));
const iconColor = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24px",
  height: "24px",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20 13.998c-.092.065-2 2.083-2 3.5 0 1.494.949 2.448 2 2.5.906.044 2-.891 2-2.5 0-1.5-1.908-3.435-2-3.5zm-16.586-1c0 .534.208 1.036.586 1.414l5.586 5.586c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l7-7-.707-.707L11 4.584 8.707 2.291 7.293 3.705l2.293 2.293L4 11.584c-.378.378-.586.88-.586 1.414zM11 7.412l5.586 5.586L11 18.584h.001l-.001 1v-1l-5.586-5.586L11 7.412z"
}));
const inconColorPicker = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "36px",
  height: "36px",
  viewBox: "0 0 214 260",
  "enable-background": "new 0 0 214 260"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M143.309,163.108l-40.012-40.012l19.799-19.799l40.012,40.012l0.077,19.876L143.309,163.108z M198.046,186.736\r l-16.836-16.836l-0.128-34.077L90.571,45.311l11.311-11.311l-16.97-16.97L73.598,28.344L56.628,11.373\r c-12.497-12.497-32.758-12.497-45.255,0c-12.497,12.497-12.497,32.758,0,45.255l16.971,16.971L17.03,84.912L34,101.882\r l11.311-11.311l90.511,90.511l34.071,0.128l16.839,16.839L198.046,186.736z M53.797,82.086l28.289-28.289l87.007,87.016l0.12,28.4\r l-28.4-0.12L53.797,82.086z M212,240.26c0,9.797-6.766,17.74-15.112,17.74s-15.112-7.942-15.112-17.74\r c0-9.797,15.112-30.941,15.112-30.941S212,230.462,212,240.26z"
}));
const iconPatrocinador = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "100px",
  height: "100px",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M71.7,20H28.17c-4.58,0-8.3,3.56-8.16,7.81V72.19a7,7,0,0,0,.26,2.23A41.24,41.24,0,0,1,28,70.51c4.38-1.8,4.89-3.38,4.89-5.14S31.6,62,30.19,60.61a12.17,12.17,0,0,1-3.86-9c0-6.81,4.37-12.6,12-12.6s12,5.91,12,12.6a11.29,11.29,0,0,1-3.86,9c-1.41,1.29-2.7,3-2.7,4.76s.65,3.34,4.89,5.14c5.68,2.32,11,4.95,12.14,9.49h11A8.08,8.08,0,0,0,80,72.19V27.81A8.12,8.12,0,0,0,71.7,20ZM71,45.85a2,2,0,0,1-2,2H54a2,2,0,0,1-2-2v-3a2,2,0,0,1,2-2H69a2,2,0,0,1,2,2Zm5-13a2,2,0,0,1-2,2H54a2,2,0,0,1-2-2v-3a2,2,0,0,1,2-2H74a2,2,0,0,1,2,2Z",
  "fill-rule": "evenodd"
}));
const iconTextSize = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  x: "0px",
  y: "0px",
  "enable-background": "new 0 0 52 52",
  viewBox: "0 0 52 52",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M49.4,47.9c-0.2-3.2-0.3-6.5-0.3-9.7c0-1.6,0-3.2,0.1-4.9c0-1.5,0.2-3-0.4-4.4c-1.3-3.2-5.5-3.8-8.5-3.8  c-1.5,0-3.1,0.2-4.7,0.6c-1.1,0.3-2.2,0.7-3.1,1.2l1,2.5c0.2,0.5,0.3,1,0.4,1.5c2-1,4-1.5,6.1-1.5c3.2,0,4.8,1.3,4.8,3.8v1.2  c-0.5,0-1.3,0-2.2,0c-4.1,0-7.2,0.6-9.3,1.8C31,37.3,30,39.4,30,42.5c0,2.3,0.7,4.1,2.1,5.3c1.4,1.2,3.2,1.9,5.4,1.9  c1.9,0,3.4-0.3,4.6-0.8c1.2-0.5,2.2-1.4,3-2.5h0.1c0.1,0.5,0.2,1.4,0.4,2.6c0,0.1,3.6,0,3.9,0C49.5,48.6,49.4,48.3,49.4,47.9z   M44.8,40c0,0.6-0.1,1.1-0.3,1.6c-0.1,0.4-0.3,0.8-0.6,1.1c-1,1.4-2.6,2.1-4.2,2.3c-1,0.2-2,0.1-3-0.1c-0.8-0.1-1.5-0.5-2-1.2  c-0.7-1.1-0.5-2.8,0.2-3.8c0.5-0.6,1.2-1,1.9-1.3c1.9-0.6,4.2-0.6,6.2-0.6l1.7,0V40z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M29.9,31L18.7,3.4c-0.2-0.5-0.6-0.9-1.2-0.9H14c-0.5,0-1.1,0.4-1.3,0.9L2.6,31c-0.3,0.5,0.2,1.2,0.7,1.2h3.9  c0.5,0,1.1-0.4,1.3-1L11,24h10l2.9,7.2c0.2,0.5,0.7,1,1.3,1h3.9C29.7,32.2,30.1,31.5,29.9,31z M13.1,18.5L16,11l3.2,7.5H13.1z"
}));
const iconLottie = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 80 80",
  fill: "none"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M59.7566 0H20.2433C9.06324 0 0 9.06331 0 20.2434V59.7566C0 70.9367 9.06324 80 20.2433 80H59.7566C70.9367 80 79.9999 70.9367 79.9999 59.7566V20.2434C79.9999 9.06331 70.9367 0 59.7566 0Z",
  fill: "#000000"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M60.8068 17.9194C47.0165 17.9194 41.9304 27.7511 37.8298 35.6521L35.1326 40.7018C30.7846 49.0814 27.5398 54.1716 19.1764 54.1716C18.6567 54.1711 18.1421 54.273 17.6618 54.4715C17.1815 54.67 16.7451 54.9612 16.3775 55.3285C16.0098 55.6958 15.7182 56.1319 15.5192 56.6119C15.3202 57.092 15.2178 57.6065 15.2178 58.1262C15.2178 58.6459 15.3202 59.1605 15.5192 59.6405C15.7182 60.1206 16.0098 60.5567 16.3775 60.924C16.7451 61.2912 17.1815 61.5824 17.6618 61.7809C18.1421 61.9794 18.6567 62.0813 19.1764 62.0808C32.9667 62.0808 38.0529 52.2491 42.1534 44.3481L44.8344 39.2984C49.1824 30.9188 52.4272 25.8286 60.7906 25.8286C61.3103 25.8291 61.825 25.7272 62.3052 25.5287C62.7855 25.3302 63.2219 25.039 63.5895 24.6717C63.9572 24.3044 64.2488 23.8683 64.4478 23.3883C64.6468 22.9082 64.7492 22.3937 64.7492 21.874C64.7492 21.3543 64.6468 20.8397 64.4478 20.3597C64.2488 19.8796 63.9572 19.4435 63.5895 19.0762C63.2219 18.7089 62.7855 18.4178 62.3052 18.2193C61.825 18.0208 61.3103 17.9189 60.7906 17.9194H60.8068Z",
  fill: "white"
}));
const iconOptions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24px",
  height: "24px",
  viewBox: "0 0 1024 1024"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M899.4 638.2h-27.198c-2.2-.6-4.2-1.6-6.4-2-57.2-8.8-102.4-56.4-106.2-112.199-4.401-62.4 31.199-115.2 89.199-132.4 7.6-2.2 15.6-3.8 23.399-5.8h27.2c1.8.6 3.4 1.6 5.4 1.8 52.8 8.6 93 46.6 104.4 98.6.8 4 2 8 3 12v27.2c-.6 1.8-1.6 3.6-1.8 5.4-8.4 52-45.4 91.599-96.801 103.6-5 1.2-9.6 2.6-14.2 3.8zM130.603 385.8l27.202.001c2.2.6 4.2 1.6 6.4 1.8 57.6 9 102.6 56.8 106.2 113.2 4 62.2-32 114.8-90.2 131.8-7.401 2.2-15 3.8-22.401 5.6h-27.2c-1.8-.6-3.4-1.6-5.2-2-52-9.6-86-39.8-102.2-90.2-2.2-6.6-3.4-13.6-5.2-20.4v-27.2c.6-1.8 1.6-3.6 1.8-5.4 8.6-52.2 45.4-91.6 96.8-103.6 4.8-1.201 9.4-2.401 13.999-3.601zm370.801.001h27.2c2.2.6 4.2 1.6 6.4 2 57.4 9 103.6 58.6 106 114.6 2.8 63-35.2 116.4-93.8 131.4-6.2 1.6-12.4 3-18.6 4.4h-27.2c-2.2-.6-4.2-1.6-6.4-2-57.4-8.8-103.601-58.6-106.2-114.6-3-63 35.2-116.4 93.8-131.4 6.4-1.6 12.6-3 18.8-4.4z"
}));
const iconOpen = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M22 2H23V1H22V2ZM10.1558 3H22V1H10.1558V3ZM21 2V14.5844H23V2H21ZM6.7282 19.6854L22.7282 2.68536L21.2718 1.31464L5.2718 18.3146L6.7282 19.6854Z",
  fill: "currentColor"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M2 22H1L1 23H2L2 22ZM23 21L2 21L2 23L23 23V21ZM3 22L3 1L1 1L1 22H3Z",
  fill: "currentColor"
}));
const iconArrow = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "26",
  height: "24",
  viewBox: "0 0 26 24",
  fill: "none"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.5 2L24 11.5M24 11.5L14.5 21M24 11.5H0",
  stroke: "currentColor",
  "stroke-width": "2"
}));
const iconRectangle = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 100 100",
  "aria-hidden": "true",
  role: "img",
  class: "iconify iconify--gis",
  preserveAspectRatio: "xMidYMid meet"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M8.5 22.5A3.5 3.5 0 0 0 5 26v48a3.5 3.5 0 0 0 3.5 3.5h83A3.5 3.5 0 0 0 95 74V26a3.5 3.5 0 0 0-3.5-3.5h-83zm3.5 7h76v41H12v-41z",
  fill: "currentColor"
}));
const hideIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.4727 6.18002C10.9733 6.05918 11.4859 5.99877 12 6.00002C17.0909 6.00002 20 12 20 12C19.5585 12.8517 19.032 13.6536 18.4291 14.3925M13.5418 13.59C13.3421 13.8111 13.1012 13.9884 12.8336 14.1113C12.5659 14.2343 12.277 14.3005 11.9841 14.3058C11.6911 14.3111 11.4001 14.2555 11.1284 14.1424C10.8568 14.0292 10.61 13.8608 10.4028 13.6471C10.1956 13.4335 10.0323 13.179 9.92255 12.8988C9.81282 12.6186 9.75893 12.3185 9.7641 12.0164C9.76927 11.7143 9.83339 11.4164 9.95264 11.1404C10.0719 10.8644 10.2438 10.616 10.4582 10.41M16.32 16.455C15.0768 17.4323 13.563 17.9736 12 18C6.90909 18 4 12 4 12C4.90465 10.2614 6.15937 8.74247 7.68 7.54502L16.32 16.455Z",
  fill: "transparent",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 4L20 20",
  fill: "transparent",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));

/***/ }),

/***/ "./src/icons/icons.js":
/*!****************************!*\
  !*** ./src/icons/icons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const appicons = {};
appicons.group = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "59",
  height: "53",
  viewBox: "0 0 59 53",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M29 11C31.7614 11 34 8.76142 34 6C34 3.23858 31.7614 1 29 1C26.2386 1 24 3.23858 24 6C24 8.76142 26.2386 11 29 11Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M21 23V18.7453C21 16.6773 22.746 15 24.8987 15H33.1013C35.254 15 37 16.6773 37 18.7453V23",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M9 40C11.7614 40 14 37.7614 14 35C14 32.2386 11.7614 30 9 30C6.23858 30 4 32.2386 4 35C4 37.7614 6.23858 40 9 40Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1 52V47.7453C1 45.6773 2.74598 44 4.89868 44H13.1013C15.254 44 17 45.6773 17 47.7453V52",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M29 40C31.7614 40 34 37.7614 34 35C34 32.2386 31.7614 30 29 30C26.2386 30 24 32.2386 24 35C24 37.7614 26.2386 40 29 40Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M21 52V47.7453C21 45.6773 22.746 44 24.8987 44H33.1013C35.254 44 37 45.6773 37 47.7453V52",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M50 40C52.7614 40 55 37.7614 55 35C55 32.2386 52.7614 30 50 30C47.2386 30 45 32.2386 45 35C45 37.7614 47.2386 40 50 40Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M42 52V47.7453C42 45.6773 43.746 44 45.8987 44H54.1013C56.254 44 58 45.6773 58 47.7453V52",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M47 24V31",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 24V31",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M8 24H51",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M45 24V16.6031L42 14",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
appicons.document = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "37",
  height: "37",
  viewBox: "0 0 37 37",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18.5 1H4.5C3.57174 1 2.6815 1.36875 2.02513 2.02513C1.36875 2.6815 1 3.57174 1 4.5V32.5C1 33.4283 1.36875 34.3185 2.02513 34.9749C2.6815 35.6313 3.57174 36 4.5 36H25.5C26.4283 36 27.3185 35.6313 27.9749 34.9749C28.6313 34.3185 29 33.4283 29 32.5V11.5L18.5 1Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18.501 1V11.5H29.001",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M22.001 20.2499H8.00098",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M22.001 27.25H8.00098",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M11.501 13.2498H9.75098H8.00098",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
appicons.book = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "29",
  height: "35",
  viewBox: "0 0 29 35",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1 29.875C1 28.781 1.4346 27.7318 2.20818 26.9582C2.98177 26.1846 4.03098 25.75 5.125 25.75H27.4",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M5.125 1H27.4V34H5.125C4.03098 34 2.98177 33.5654 2.20818 32.7918C1.4346 32.0182 1 30.969 1 29.875V5.125C1 4.03098 1.4346 2.98177 2.20818 2.20818C2.98177 1.4346 4.03098 1 5.125 1Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
appicons.etiqueta = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "19",
  height: "37",
  viewBox: "0 0 19 37",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M9.34189 1C13.9487 1 17.6838 4.90844 17.6838 9.73089V9.82655C17.6838 11.4011 15.9988 12.3332 14.7559 11.4447C14.2284 11.0679 13.9203 10.4361 13.9426 9.76756C13.9619 9.18036 13.8725 8.56235 13.6233 7.91882C12.9191 6.1009 11.2635 4.81332 9.38911 4.79366C6.80039 4.76603 4.69854 6.97559 4.73865 9.68891C4.7686 11.6583 6.01295 13.397 7.76601 14.1139C8.11074 14.2552 8.44785 14.3445 8.77734 14.3907C10.2248 14.5959 11.6245 15.0709 12.8302 15.9334L13.8847 16.6864C16.2612 18.3842 17.6828 21.2017 17.6828 24.2131V31.3116C17.6828 33.6471 15.8739 35.541 13.6415 35.541H5.04072C2.80891 35.541 1 33.6471 1 31.3116V9.73036C1 4.90844 4.73458 1 9.34189 1Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-miterlimit": "10",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M9.34169 32.0795C10.3982 32.0795 11.2547 31.183 11.2547 30.0771C11.2547 28.9713 10.3982 28.0748 9.34169 28.0748C8.28518 28.0748 7.42871 28.9713 7.42871 30.0771C7.42871 31.183 8.28518 32.0795 9.34169 32.0795Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-miterlimit": "10",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
appicons.bed = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "48",
  height: "36",
  viewBox: "0 0 48 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  "clip-path": "url(#clip0_147_1791)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1.27344 35.2313V19.6652C1.27344 18.074 2.57276 16.7826 4.17372 16.7826H43.8263C45.4273 16.7826 46.7266 18.074 46.7266 19.6652V35.2313",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6.03174 13.3234V3.65129C6.03174 2.06009 7.33106 0.768677 8.93202 0.768677H39.0795C40.6746 0.768677 41.9701 2.05432 41.9701 3.64168V13.3253",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15.686 16.7825V10.3908C15.686 9.10903 16.7301 8.07129 18.0198 8.07129H29.9805C31.2702 8.07129 32.3143 9.10903 32.3143 10.3908V16.7825",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1.27344 28.5706H46.7266",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip0_147_1791"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "47",
  height: "36",
  fill: "white",
  transform: "translate(0.5)"
}))));
appicons.double = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "64",
  height: "38",
  viewBox: "0 0 64 38",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1.26318 37V20.7395C1.26318 19.0773 2.6132 17.7283 4.27661 17.7283H59.7236C61.387 17.7283 62.737 19.0773 62.737 20.7395V37",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4.00977 14.1148V4.01121C4.00977 2.34902 5.35978 1 7.02319 1H56.9898C58.6471 1 59.9931 2.343 59.9931 4.00117V14.1168",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M11.8442 17.7282V11.0514C11.8442 9.71239 12.9291 8.62836 14.269 8.62836H26.6964C28.0364 8.62836 29.1212 9.71239 29.1212 11.0514V17.7282",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M34.8789 17.7282V11.0373C34.8789 9.70637 35.9577 8.62836 37.2896 8.62836H49.7311C51.071 8.62836 52.1559 9.71239 52.1559 11.0514V17.7282",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1.26318 30.0421H62.737",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
appicons.mark = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "29",
  height: "35",
  viewBox: "0 0 29 35",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M28 14.5C28 25 14.5 34 14.5 34C14.5 34 1 25 1 14.5C1 10.9196 2.42232 7.4858 4.95406 4.95406C7.4858 2.42232 10.9196 1 14.5 1C18.0804 1 21.5142 2.42232 24.0459 4.95406C26.5777 7.4858 28 10.9196 28 14.5Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14.5 19C16.9853 19 19 16.9853 19 14.5C19 12.0147 16.9853 10 14.5 10C12.0147 10 10 12.0147 10 14.5C10 16.9853 12.0147 19 14.5 19Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
appicons.calendar = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "30",
  height: "30",
  viewBox: "0 0 30 30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M3.14286 5.35712C2.57454 5.35712 2.02949 5.58288 1.62763 5.98474C1.22576 6.38661 1 6.93165 1 7.49997V26.7857C1 27.354 1.22576 27.8991 1.62763 28.3009C2.02949 28.7028 2.57454 28.9285 3.14286 28.9285H26.7143C27.2826 28.9285 27.8276 28.7028 28.2295 28.3009C28.6314 27.8991 28.8571 27.354 28.8571 26.7857V7.49997C28.8571 6.93165 28.6314 6.38661 28.2295 5.98474C27.8276 5.58288 27.2826 5.35712 26.7143 5.35712H22.4286",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1 13.9285H28.8571",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7.42871 1.07141V9.64284",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M22.4287 1.07141V9.64284",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7.42871 5.35712H18.143",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
appicons.medal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "23",
  height: "34",
  viewBox: "0 0 23 34",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M11.1818 21.3636C16.8051 21.3636 21.3636 16.8051 21.3636 11.1818C21.3636 5.55855 16.8051 1 11.1818 1C5.55855 1 1 5.55855 1 11.1818C1 16.8051 5.55855 21.3636 11.1818 21.3636Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M5.66905 19.7492L3.90906 33.0001L11.1818 28.6364L18.4545 33.0001L16.6945 19.7346",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
appicons.persons = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "53",
  height: "34",
  viewBox: "0 0 53 34",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40.7854 33V29.4444C40.7854 27.5584 40.0362 25.7497 38.7026 24.4161C37.369 23.0825 35.5603 22.3333 33.6743 22.3333H19.4521C17.5661 22.3333 15.7573 23.0825 14.4237 24.4161C13.0901 25.7497 12.3409 27.5584 12.3409 29.4444V33",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M26.5633 15.2222C30.4906 15.2222 33.6744 12.0385 33.6744 8.11111C33.6744 4.18375 30.4906 1 26.5633 1C22.6359 1 19.4521 4.18375 19.4521 8.11111C19.4521 12.0385 22.6359 15.2222 26.5633 15.2222Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M51.4521 33V29.4445C51.4509 27.8689 50.9265 26.3383 49.9612 25.093C48.9959 23.8478 47.6443 22.9584 46.1188 22.5645",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M39.0077 1.23108C40.5373 1.62273 41.8931 2.51233 42.8613 3.75963C43.8295 5.00694 44.355 6.541 44.355 8.11997C44.355 9.69894 43.8295 11.233 42.8613 12.4803C41.8931 13.7276 40.5373 14.6172 39.0077 15.0089",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1.00004 33V29.4445C1.00122 27.8689 1.52563 26.3383 2.49095 25.093C3.45626 23.8478 4.80781 22.9584 6.33337 22.5645",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M13.4445 1.23108C11.9148 1.62273 10.5591 2.51233 9.59088 3.75963C8.6227 5.00694 8.09718 6.541 8.09718 8.11997C8.09718 9.69894 8.6227 11.233 9.59088 12.4803C10.5591 13.7276 11.9148 14.6172 13.4445 15.0089",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
appicons.openbook = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "38",
  height: "34",
  viewBox: "0 0 38 34",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1 1H11.6667C13.5527 1 15.3614 1.7492 16.695 3.0828C18.0286 4.41639 18.7778 6.22513 18.7778 8.11111V33C18.7778 31.5855 18.2159 30.229 17.2157 29.2288C16.2155 28.2286 14.8589 27.6667 13.4444 27.6667H1V1Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M36.5556 1H25.8889C24.003 1 22.1942 1.7492 20.8606 3.0828C19.527 4.41639 18.7778 6.22513 18.7778 8.11111V33C18.7778 31.5855 19.3397 30.229 20.3399 29.2288C21.3401 28.2286 22.6967 27.6667 24.1112 27.6667H36.5556V1Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
appicons.leaf = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "38",
  height: "38",
  viewBox: "0 0 38 38",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M33.68 19.3616C35.6971 17.3445 36.8304 14.6086 36.8304 11.756C36.8304 8.90331 35.6971 6.16749 33.68 4.15035C31.6629 2.13322 28.927 1 26.0744 1C23.2217 1 20.4859 2.13322 18.4687 4.15035L6.375 16.2441V31.4733H21.6042L33.68 19.3616Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M26.0833 11.765L1 36.8483",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M28.7709 24.3066H13.5417",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
appicons.options = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "125",
  height: "118",
  viewBox: "0 0 125 118",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M62.2221 80.6745C50.2407 80.6745 40.5167 70.9505 40.5167 58.9691C40.5167 46.9877 50.2407 37.2637 62.2221 37.2637C74.2035 37.2637 83.9275 46.9877 83.9275 58.9691C83.9275 70.9505 74.2035 80.6745 62.2221 80.6745ZM62.2221 45.9459C55.0449 45.9459 49.1989 51.7919 49.1989 58.9691C49.1989 66.1464 55.0449 71.9924 62.2221 71.9924C69.3994 71.9924 75.2453 66.1464 75.2453 58.9691C75.2453 51.7919 69.3994 45.9459 62.2221 45.9459Z",
  fill: "#292D32"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M80.8019 117.949C79.5864 117.949 78.3709 117.775 77.1554 117.486C73.5668 116.502 70.557 114.244 68.6469 111.061L67.9523 109.903C64.5374 103.999 59.849 103.999 56.434 109.903L55.7973 111.003C53.8873 114.244 50.8774 116.56 47.2888 117.486C43.6423 118.47 39.88 117.949 36.6966 116.039L26.741 110.308C23.2103 108.283 20.6635 104.983 19.5638 100.99C18.5219 96.9958 19.0429 92.8863 21.0687 89.3555C22.7472 86.4036 23.2103 83.7411 22.2263 82.0625C21.2423 80.384 18.7535 79.4 15.3385 79.4C6.88784 79.4 0 72.5121 0 64.0615V53.8744C0 45.4238 6.88784 38.536 15.3385 38.536C18.7535 38.536 21.2423 37.552 22.2263 35.8734C23.2103 34.1949 22.8051 31.5324 21.0687 28.5804C19.0429 25.0497 18.5219 20.8822 19.5638 16.9463C20.6057 12.9525 23.1524 9.65332 26.741 7.62749L36.7545 1.89726C43.295 -1.98077 51.9193 0.276592 55.8552 6.93291L56.5498 8.09053C59.9648 13.9944 64.6531 13.9944 68.0681 8.09053L68.7048 6.99079C72.6407 0.276592 81.265 -1.98077 87.8634 1.95514L97.819 7.68537C101.35 9.7112 103.896 13.0104 104.996 17.0042C106.038 20.998 105.517 25.1076 103.491 28.6383C101.813 31.5902 101.35 34.2528 102.334 35.9313C103.318 37.6099 105.807 38.5938 109.222 38.5938C117.672 38.5938 124.56 45.4817 124.56 53.9323V64.1194C124.56 72.57 117.672 79.4579 109.222 79.4579C105.807 79.4579 103.318 80.4418 102.334 82.1204C101.35 83.7989 101.755 86.4615 103.491 89.4134C105.517 92.9441 106.096 97.1116 104.996 101.047C103.954 105.041 101.408 108.34 97.819 110.366L87.8055 116.097C85.6061 117.312 83.2329 117.949 80.8019 117.949ZM62.2221 96.5328C67.3735 96.5328 72.1777 99.7741 75.4769 105.504L76.1136 106.604C76.8081 107.82 77.9658 108.688 79.3549 109.035C80.7441 109.382 82.1332 109.209 83.2908 108.514L93.3042 102.726C94.8091 101.858 95.9668 100.411 96.4298 98.6744C96.8929 96.9379 96.6613 95.1436 95.7931 93.6387C92.4939 87.9664 92.0887 82.1204 94.6355 77.6635C97.1823 73.2067 102.449 70.6599 109.048 70.6599C112.752 70.6599 115.704 67.708 115.704 64.0036V53.8166C115.704 50.1701 112.752 47.1602 109.048 47.1602C102.449 47.1602 97.1823 44.6135 94.6355 40.1566C92.0887 35.6998 92.4939 29.8538 95.7931 24.1815C96.6613 22.6766 96.8929 20.8822 96.4298 19.1458C95.9668 17.4094 94.867 16.0202 93.3621 15.0941L83.3487 9.36392C80.8598 7.85901 77.5606 8.72722 76.0557 11.274L75.419 12.3737C72.1198 18.104 67.3156 21.3453 62.1642 21.3453C57.0128 21.3453 52.2087 18.104 48.9095 12.3737L48.2728 11.2161C46.8258 8.78511 43.5844 7.91689 41.0955 9.36392L31.0821 15.152C29.5772 16.0202 28.4196 17.4673 27.9565 19.2037C27.4935 20.9401 27.725 22.7344 28.5932 24.2393C31.8925 29.9117 32.2976 35.7577 29.7509 40.2145C27.2041 44.6714 21.9369 47.2181 15.3385 47.2181C11.6341 47.2181 8.68216 50.17 8.68216 53.8744V64.0615C8.68216 67.708 11.6341 70.7178 15.3385 70.7178C21.9369 70.7178 27.2041 73.2646 29.7509 77.7214C32.2976 82.1783 31.8925 88.0242 28.5932 93.6966C27.725 95.2015 27.4935 96.9958 27.9565 98.7322C28.4196 100.469 29.5193 101.858 31.0242 102.784L41.0377 108.514C42.2532 109.267 43.7002 109.44 45.0314 109.093C46.4206 108.746 47.5782 107.82 48.3307 106.604L48.9674 105.504C52.2666 99.832 57.0707 96.5328 62.2221 96.5328Z",
  fill: "#292D32"
}));
appicons.ponente = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "31",
  height: "34",
  viewBox: "0 0 31 34",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M29.4444 33V29.4444C29.4444 27.5584 28.6952 25.7497 27.3616 24.4161C26.0281 23.0825 24.2193 22.3333 22.3333 22.3333H8.11111C6.22513 22.3333 4.41639 23.0825 3.0828 24.4161C1.7492 25.7497 1 27.5584 1 29.4444V33",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15.2224 15.2222C19.1498 15.2222 22.3336 12.0385 22.3336 8.11111C22.3336 4.18375 19.1498 1 15.2224 1C11.2951 1 8.11133 4.18375 8.11133 8.11111C8.11133 12.0385 11.2951 15.2222 15.2224 15.2222Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
appicons.euro = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "35",
  height: "35",
  viewBox: "0 0 35 35",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M21.2685 24.3643C20.4726 24.6966 19.6187 24.8674 18.7562 24.8667C16.8411 24.7819 15.038 23.9406 13.7426 22.5275C12.4473 21.1144 11.7657 19.2451 11.8474 17.3298C11.7657 15.4146 12.4473 13.5452 13.7426 12.1322C15.038 10.7191 16.8411 9.87775 18.7562 9.79297C19.4554 9.79734 20.15 9.90745 20.8163 10.1196",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M8.70703 14.8181H16.2439",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M8.70703 19.8416H16.2439",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17.4998 33.6598C26.5186 33.6598 33.8297 26.3486 33.8297 17.3299C33.8297 8.31114 26.5186 1 17.4998 1C8.48107 1 1.16992 8.31114 1.16992 17.3299C1.16992 26.3486 8.48107 33.6598 17.4998 33.6598Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
appicons.credit = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "35",
  height: "24",
  viewBox: "0 0 35 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M31.0411 1H3.95907C2.59935 1 1.49707 1.99474 1.49707 3.2218V19.8853C1.49707 21.1124 2.59935 22.1071 3.95907 22.1071H31.0411C32.4008 22.1071 33.5031 21.1124 33.5031 19.8853V3.2218C33.5031 1.99474 32.4008 1 31.0411 1Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1.49707 8.77637H33.5031",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M23.6553 16.5527H27.3483",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
appicons.pencil = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "27",
  height: "26",
  viewBox: "0 0 27 26",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M13.5 24.2986H25.7474",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M19.6241 1.84551C20.1654 1.30414 20.8997 1 21.6653 1C22.0444 1 22.4198 1.07467 22.77 1.21974C23.1202 1.36481 23.4385 1.57745 23.7065 1.84551C23.9746 2.11357 24.1872 2.4318 24.3323 2.78204C24.4774 3.13227 24.552 3.50765 24.552 3.88674C24.552 4.26584 24.4774 4.64122 24.3323 4.99145C24.1872 5.34169 23.9746 5.65992 23.7065 5.92798L6.69623 22.9383L1.25293 24.2991L2.61375 18.8558L19.6241 1.84551Z",
  stroke: "#495159",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appicons);

/***/ }),

/***/ "./src/tools/index.js":
/*!****************************!*\
  !*** ./src/tools/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeClasses: () => (/* binding */ removeClasses)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);

function removeClasses(classNamesString, classToken) {
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classNamesString.split(" ")).split(" ").filter(className => !className.startsWith(classToken)).join(" ");
}

/***/ }),

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			if (object.toString !== Object.prototype.toString && !object.toString.toString().includes('[native code]')) {
				resultSet[object.toString()] = true;
				return;
			}

			for (var k in object) {
				if (hasOwn.call(object, k)) {
					// set value to false instead of deleting it to avoid changing object structure
					// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
					resultSet[k] = !!object[k];
				}
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./node_modules/dom-helpers/esm/canUseDOM.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/esm/canUseDOM.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));

/***/ }),

/***/ "./node_modules/dom-helpers/esm/scrollbarSize.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/scrollbarSize.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scrollbarSize)
/* harmony export */ });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDOM */ "./node_modules/dom-helpers/esm/canUseDOM.js");

var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_canUseDOM__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

/***/ }),

/***/ "./src/blocks/banner/styles/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/banner/styles/editor.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/faq/styles/editor.scss":
/*!*******************************************!*\
  !*** ./src/blocks/faq/styles/editor.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/panaderia/styles/editor.scss":
/*!*************************************************!*\
  !*** ./src/blocks/panaderia/styles/editor.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/product-card/styles/editor.scss":
/*!****************************************************!*\
  !*** ./src/blocks/product-card/styles/editor.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/product-slider/styles/editor.scss":
/*!******************************************************!*\
  !*** ./src/blocks/product-slider/styles/editor.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/timeline/styles/editor.scss":
/*!************************************************!*\
  !*** ./src/blocks/timeline/styles/editor.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   polyfill: () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/ArrowKeyStepper.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ArrowKeyStepper/ArrowKeyStepper.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Grid */ "./node_modules/react-virtualized/dist/es/Grid/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);








var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/**
 * This HOC decorates a virtualized component and responds to arrow-key events by scrolling one row or column at a time.
 */

var ArrowKeyStepper = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ArrowKeyStepper, _React$PureComponent);

  function ArrowKeyStepper() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ArrowKeyStepper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ArrowKeyStepper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      scrollToColumn: 0,
      scrollToRow: 0,
      instanceProps: {
        prevScrollToColumn: 0,
        prevScrollToRow: 0
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_columnStartIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_columnStopIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_rowStartIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_rowStopIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onKeyDown", function (event) {
      var _this$props = _this.props,
          columnCount = _this$props.columnCount,
          disabled = _this$props.disabled,
          mode = _this$props.mode,
          rowCount = _this$props.rowCount;

      if (disabled) {
        return;
      }

      var _this$_getScrollState = _this._getScrollState(),
          scrollToColumnPrevious = _this$_getScrollState.scrollToColumn,
          scrollToRowPrevious = _this$_getScrollState.scrollToRow;

      var _this$_getScrollState2 = _this._getScrollState(),
          scrollToColumn = _this$_getScrollState2.scrollToColumn,
          scrollToRow = _this$_getScrollState2.scrollToRow; // The above cases all prevent default event event behavior.
      // This is to keep the grid from scrolling after the snap-to update.


      switch (event.key) {
        case 'ArrowDown':
          scrollToRow = mode === 'cells' ? Math.min(scrollToRow + 1, rowCount - 1) : Math.min(_this._rowStopIndex + 1, rowCount - 1);
          break;

        case 'ArrowLeft':
          scrollToColumn = mode === 'cells' ? Math.max(scrollToColumn - 1, 0) : Math.max(_this._columnStartIndex - 1, 0);
          break;

        case 'ArrowRight':
          scrollToColumn = mode === 'cells' ? Math.min(scrollToColumn + 1, columnCount - 1) : Math.min(_this._columnStopIndex + 1, columnCount - 1);
          break;

        case 'ArrowUp':
          scrollToRow = mode === 'cells' ? Math.max(scrollToRow - 1, 0) : Math.max(_this._rowStartIndex - 1, 0);
          break;
      }

      if (scrollToColumn !== scrollToColumnPrevious || scrollToRow !== scrollToRowPrevious) {
        event.preventDefault();

        _this._updateScrollState({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onSectionRendered", function (_ref) {
      var columnStartIndex = _ref.columnStartIndex,
          columnStopIndex = _ref.columnStopIndex,
          rowStartIndex = _ref.rowStartIndex,
          rowStopIndex = _ref.rowStopIndex;
      _this._columnStartIndex = columnStartIndex;
      _this._columnStopIndex = columnStopIndex;
      _this._rowStartIndex = rowStartIndex;
      _this._rowStopIndex = rowStopIndex;
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ArrowKeyStepper, [{
    key: "setScrollIndexes",
    value: function setScrollIndexes(_ref2) {
      var scrollToColumn = _ref2.scrollToColumn,
          scrollToRow = _ref2.scrollToRow;
      this.setState({
        scrollToRow: scrollToRow,
        scrollToColumn: scrollToColumn
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children;

      var _this$_getScrollState3 = this._getScrollState(),
          scrollToColumn = _this$_getScrollState3.scrollToColumn,
          scrollToRow = _this$_getScrollState3.scrollToRow;

      return react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: className,
        onKeyDown: this._onKeyDown
      }, children({
        onSectionRendered: this._onSectionRendered,
        scrollToColumn: scrollToColumn,
        scrollToRow: scrollToRow
      }));
    }
  }, {
    key: "_getScrollState",
    value: function _getScrollState() {
      return this.props.isControlled ? this.props : this.state;
    }
  }, {
    key: "_updateScrollState",
    value: function _updateScrollState(_ref3) {
      var scrollToColumn = _ref3.scrollToColumn,
          scrollToRow = _ref3.scrollToRow;
      var _this$props3 = this.props,
          isControlled = _this$props3.isControlled,
          onScrollToChange = _this$props3.onScrollToChange;

      if (typeof onScrollToChange === 'function') {
        onScrollToChange({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }

      if (!isControlled) {
        this.setState({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isControlled) {
        return {};
      }

      if (nextProps.scrollToColumn !== prevState.instanceProps.prevScrollToColumn || nextProps.scrollToRow !== prevState.instanceProps.prevScrollToRow) {
        return _objectSpread({}, prevState, {
          scrollToColumn: nextProps.scrollToColumn,
          scrollToRow: nextProps.scrollToRow,
          instanceProps: {
            prevScrollToColumn: nextProps.scrollToColumn,
            prevScrollToRow: nextProps.scrollToRow
          }
        });
      }

      return {};
    }
  }]);

  return ArrowKeyStepper;
}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, "propTypes",  false ? 0 : {
  "children": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func).isRequired,
  "className": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
  "columnCount": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number).isRequired,
  "disabled": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool).isRequired,
  "isControlled": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool).isRequired,
  "mode": prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(["cells", "edges"]).isRequired,
  "onScrollToChange": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
  "rowCount": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number).isRequired,
  "scrollToColumn": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number).isRequired,
  "scrollToRow": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number).isRequired
}), _temp);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(ArrowKeyStepper, "defaultProps", {
  disabled: false,
  isControlled: false,
  mode: 'edges',
  scrollToColumn: 0,
  scrollToRow: 0
});

(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__.polyfill)(ArrowKeyStepper);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowKeyStepper);




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ArrowKeyStepper/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrowKeyStepper: () => (/* reexport safe */ _ArrowKeyStepper__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   bpfrpt_proptype_ScrollIndices: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.bpfrpt_proptype_ScrollIndices),
/* harmony export */   "default": () => (/* reexport safe */ _ArrowKeyStepper__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ArrowKeyStepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrowKeyStepper */ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/ArrowKeyStepper.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/types.js");





/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/types.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ArrowKeyStepper/types.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bpfrpt_proptype_ScrollIndices: () => (/* binding */ bpfrpt_proptype_ScrollIndices)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
var bpfrpt_proptype_ScrollIndices =  false ? 0 : {
  "scrollToColumn": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "scrollToRow": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired
};



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/AutoSizer/AutoSizer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/AutoSizer/AutoSizer.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AutoSizer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vendor_detectElementResize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vendor/detectElementResize */ "./node_modules/react-virtualized/dist/es/vendor/detectElementResize.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);








var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var AutoSizer = (_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AutoSizer, _React$Component);

  function AutoSizer() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AutoSizer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AutoSizer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_parentNode", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_autoSizer", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_window", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_detectElementResize", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onResize", function () {
      var _this$props = _this.props,
          disableHeight = _this$props.disableHeight,
          disableWidth = _this$props.disableWidth,
          onResize = _this$props.onResize;

      if (_this._parentNode) {
        // Guard against AutoSizer component being removed from the DOM immediately after being added.
        // This can result in invalid style values which can result in NaN values if we don't handle them.
        // See issue #150 for more context.
        var height = _this._parentNode.offsetHeight || 0;
        var width = _this._parentNode.offsetWidth || 0;
        var win = _this._window || window;
        var style = win.getComputedStyle(_this._parentNode) || {};
        var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(style.paddingRight, 10) || 0;
        var paddingTop = parseInt(style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(style.paddingBottom, 10) || 0;
        var newHeight = height - paddingTop - paddingBottom;
        var newWidth = width - paddingLeft - paddingRight;

        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: height - paddingTop - paddingBottom,
            width: width - paddingLeft - paddingRight
          });

          onResize({
            height: height,
            width: width
          });
        }
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_setRef", function (autoSizer) {
      _this._autoSizer = autoSizer;
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AutoSizer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var nonce = this.props.nonce;

      if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
        // Delay access of parentNode until mount.
        // This handles edge-cases where the component has already been unmounted before its ref has been set,
        // As well as libraries like react-lite which have a slightly different lifecycle.
        this._parentNode = this._autoSizer.parentNode;
        this._window = this._autoSizer.parentNode.ownerDocument.defaultView; // Defer requiring resize handler in order to support server-side rendering.
        // See issue #41

        this._detectElementResize = (0,_vendor_detectElementResize__WEBPACK_IMPORTED_MODULE_8__["default"])(nonce, this._window);

        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

        this._onResize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          disableHeight = _this$props2.disableHeight,
          disableWidth = _this$props2.disableWidth,
          style = _this$props2.style;
      var _this$state = this.state,
          height = _this$state.height,
          width = _this$state.width; // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = {
        overflow: 'visible'
      };
      var childParams = {};

      if (!disableHeight) {
        outerStyle.height = 0;
        childParams.height = height;
      }

      if (!disableWidth) {
        outerStyle.width = 0;
        childParams.width = width;
      }
      /**
       * TODO: Avoid rendering children before the initial measurements have been collected.
       * At best this would just be wasting cycles.
       * Add this check into version 10 though as it could break too many ref callbacks in version 9.
       * Note that if default width/height props were provided this would still work with SSR.
      if (
        height !== 0 &&
        width !== 0
      ) {
        child = children({ height, width })
      }
      */


      return react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: className,
        ref: this._setRef,
        style: _objectSpread({}, outerStyle, {}, style)
      }, children(childParams));
    }
  }]);

  return AutoSizer;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, "propTypes",  false ? 0 : {
  /** Function responsible for rendering children.*/
  "children": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func).isRequired,

  /** Optional custom CSS class name to attach to root AutoSizer element.  */
  "className": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),

  /** Default height to use for initial render; useful for SSR */
  "defaultHeight": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number),

  /** Default width to use for initial render; useful for SSR */
  "defaultWidth": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number),

  /** Disable dynamic :height property */
  "disableHeight": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool).isRequired,

  /** Disable dynamic :width property */
  "disableWidth": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool).isRequired,

  /** Nonce of the inlined stylesheet for Content Security Policy */
  "nonce": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),

  /** Callback to be invoked on-resize */
  "onResize": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func).isRequired,

  /** Optional inline style */
  "style": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)
}), _temp);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(AutoSizer, "defaultProps", {
  onResize: function onResize() {},
  disableHeight: false,
  disableWidth: false,
  style: {}
});




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/AutoSizer/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/AutoSizer/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoSizer: () => (/* reexport safe */ _AutoSizer__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (/* reexport safe */ _AutoSizer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _AutoSizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoSizer */ "./node_modules/react-virtualized/dist/es/AutoSizer/AutoSizer.js");



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CellMeasurer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/CellMeasurer/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);








var _class, _temp;




/**
 * Wraps a cell and measures its rendered content.
 * Measurements are stored in a per-cell cache.
 * Cached-content is not be re-measured.
 */
var CellMeasurer = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CellMeasurer, _React$PureComponent);

  function CellMeasurer() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CellMeasurer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CellMeasurer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_child", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_measure", function () {
      var _this$props = _this.props,
          cache = _this$props.cache,
          _this$props$columnInd = _this$props.columnIndex,
          columnIndex = _this$props$columnInd === void 0 ? 0 : _this$props$columnInd,
          parent = _this$props.parent,
          _this$props$rowIndex = _this$props.rowIndex,
          rowIndex = _this$props$rowIndex === void 0 ? _this.props.index || 0 : _this$props$rowIndex;

      var _this$_getCellMeasure = _this._getCellMeasurements(),
          height = _this$_getCellMeasure.height,
          width = _this$_getCellMeasure.width;

      if (height !== cache.getHeight(rowIndex, columnIndex) || width !== cache.getWidth(rowIndex, columnIndex)) {
        cache.set(rowIndex, columnIndex, width, height);

        if (parent && typeof parent.recomputeGridSize === 'function') {
          parent.recomputeGridSize({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_registerChild", function (element) {
      if (element && !(element instanceof Element)) {
        console.warn('CellMeasurer registerChild expects to be passed Element or null');
      }

      _this._child = element;

      if (element) {
        _this._maybeMeasureCell();
      }
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CellMeasurer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._maybeMeasureCell();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._maybeMeasureCell();
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return typeof children === 'function' ? children({
        measure: this._measure,
        registerChild: this._registerChild
      }) : children;
    }
  }, {
    key: "_getCellMeasurements",
    value: function _getCellMeasurements() {
      var cache = this.props.cache;
      var node = this._child || (0,react_dom__WEBPACK_IMPORTED_MODULE_8__.findDOMNode)(this); // TODO Check for a bad combination of fixedWidth and missing numeric width or vice versa with height

      if (node && node.ownerDocument && node.ownerDocument.defaultView && node instanceof node.ownerDocument.defaultView.HTMLElement) {
        var styleWidth = node.style.width;
        var styleHeight = node.style.height; // If we are re-measuring a cell that has already been measured,
        // It will have a hard-coded width/height from the previous measurement.
        // The fact that we are measuring indicates this measurement is probably stale,
        // So explicitly clear it out (eg set to "auto") so we can recalculate.
        // See issue #593 for more info.
        // Even if we are measuring initially- if we're inside of a MultiGrid component,
        // Explicitly clear width/height before measuring to avoid being tainted by another Grid.
        // eg top/left Grid renders before bottom/right Grid
        // Since the CellMeasurerCache is shared between them this taints derived cell size values.

        if (!cache.hasFixedWidth()) {
          node.style.width = 'auto';
        }

        if (!cache.hasFixedHeight()) {
          node.style.height = 'auto';
        }

        var height = Math.ceil(node.offsetHeight);
        var width = Math.ceil(node.offsetWidth); // Reset after measuring to avoid breaking styles; see #660

        if (styleWidth) {
          node.style.width = styleWidth;
        }

        if (styleHeight) {
          node.style.height = styleHeight;
        }

        return {
          height: height,
          width: width
        };
      } else {
        return {
          height: 0,
          width: 0
        };
      }
    }
  }, {
    key: "_maybeMeasureCell",
    value: function _maybeMeasureCell() {
      var _this$props2 = this.props,
          cache = _this$props2.cache,
          _this$props2$columnIn = _this$props2.columnIndex,
          columnIndex = _this$props2$columnIn === void 0 ? 0 : _this$props2$columnIn,
          parent = _this$props2.parent,
          _this$props2$rowIndex = _this$props2.rowIndex,
          rowIndex = _this$props2$rowIndex === void 0 ? this.props.index || 0 : _this$props2$rowIndex;

      if (!cache.has(rowIndex, columnIndex)) {
        var _this$_getCellMeasure2 = this._getCellMeasurements(),
            height = _this$_getCellMeasure2.height,
            width = _this$_getCellMeasure2.width;

        cache.set(rowIndex, columnIndex, width, height); // If size has changed, let Grid know to re-render.

        if (parent && typeof parent.invalidateCellSizeAfterRender === 'function') {
          parent.invalidateCellSizeAfterRender({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    }
  }]);

  return CellMeasurer;
}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, "propTypes",  false ? 0 : {
  "cache": function cache() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_9__.bpfrpt_proptype_CellMeasureCache === "function" ? _types__WEBPACK_IMPORTED_MODULE_9__.bpfrpt_proptype_CellMeasureCache.isRequired ? _types__WEBPACK_IMPORTED_MODULE_9__.bpfrpt_proptype_CellMeasureCache.isRequired : _types__WEBPACK_IMPORTED_MODULE_9__.bpfrpt_proptype_CellMeasureCache : prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape(_types__WEBPACK_IMPORTED_MODULE_9__.bpfrpt_proptype_CellMeasureCache).isRequired).apply(this, arguments);
  },
  "children": prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node)]).isRequired,
  "columnIndex": (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),
  "index": (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),
  "parent": prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    invalidateCellSizeAfterRender: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),
    recomputeGridSize: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)
  }).isRequired,
  "rowIndex": (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number)
}), _temp); // Used for DEV mode warning check

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(CellMeasurer, "__internalCellMeasurerFlag", false);



if (true) {
  CellMeasurer.__internalCellMeasurerFlag = true;
}




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurerCache.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurerCache.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_HEIGHT: () => (/* binding */ DEFAULT_HEIGHT),
/* harmony export */   DEFAULT_WIDTH: () => (/* binding */ DEFAULT_WIDTH),
/* harmony export */   "default": () => (/* binding */ CellMeasurerCache)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/CellMeasurer/types.js");



var DEFAULT_HEIGHT = 30;
var DEFAULT_WIDTH = 100; // Enables more intelligent mapping of a given column and row index to an item ID.
// This prevents a cell cache from being invalidated when its parent collection is modified.

/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCache =
/*#__PURE__*/
function () {
  function CellMeasurerCache() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CellMeasurerCache);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_cellHeightCache", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_cellWidthCache", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_columnWidthCache", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_rowHeightCache", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_defaultHeight", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_defaultWidth", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_minHeight", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_minWidth", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_keyMapper", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_hasFixedHeight", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_hasFixedWidth", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_columnCount", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_rowCount", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "columnWidth", function (_ref) {
      var index = _ref.index;

      var key = _this._keyMapper(0, index);

      return _this._columnWidthCache[key] !== undefined ? _this._columnWidthCache[key] : _this._defaultWidth;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "rowHeight", function (_ref2) {
      var index = _ref2.index;

      var key = _this._keyMapper(index, 0);

      return _this._rowHeightCache[key] !== undefined ? _this._rowHeightCache[key] : _this._defaultHeight;
    });

    var defaultHeight = params.defaultHeight,
        defaultWidth = params.defaultWidth,
        fixedHeight = params.fixedHeight,
        fixedWidth = params.fixedWidth,
        keyMapper = params.keyMapper,
        minHeight = params.minHeight,
        minWidth = params.minWidth;
    this._hasFixedHeight = fixedHeight === true;
    this._hasFixedWidth = fixedWidth === true;
    this._minHeight = minHeight || 0;
    this._minWidth = minWidth || 0;
    this._keyMapper = keyMapper || defaultKeyMapper;
    this._defaultHeight = Math.max(this._minHeight, typeof defaultHeight === 'number' ? defaultHeight : DEFAULT_HEIGHT);
    this._defaultWidth = Math.max(this._minWidth, typeof defaultWidth === 'number' ? defaultWidth : DEFAULT_WIDTH);

    if (true) {
      if (this._hasFixedHeight === false && this._hasFixedWidth === false) {
        console.warn("CellMeasurerCache should only measure a cell's width or height. " + 'You have configured CellMeasurerCache to measure both. ' + 'This will result in poor performance.');
      }

      if (this._hasFixedHeight === false && this._defaultHeight === 0) {
        console.warn('Fixed height CellMeasurerCache should specify a :defaultHeight greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
      }

      if (this._hasFixedWidth === false && this._defaultWidth === 0) {
        console.warn('Fixed width CellMeasurerCache should specify a :defaultWidth greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
      }
    }
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CellMeasurerCache, [{
    key: "clear",
    value: function clear(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this._keyMapper(rowIndex, columnIndex);

      delete this._cellHeightCache[key];
      delete this._cellWidthCache[key];

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._cellHeightCache = {};
      this._cellWidthCache = {};
      this._columnWidthCache = {};
      this._rowHeightCache = {};
      this._rowCount = 0;
      this._columnCount = 0;
    }
  }, {
    key: "hasFixedHeight",
    value: function hasFixedHeight() {
      return this._hasFixedHeight;
    }
  }, {
    key: "hasFixedWidth",
    value: function hasFixedWidth() {
      return this._hasFixedWidth;
    }
  }, {
    key: "getHeight",
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedHeight) {
        return this._defaultHeight;
      } else {
        var _key = this._keyMapper(rowIndex, columnIndex);

        return this._cellHeightCache[_key] !== undefined ? Math.max(this._minHeight, this._cellHeightCache[_key]) : this._defaultHeight;
      }
    }
  }, {
    key: "getWidth",
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedWidth) {
        return this._defaultWidth;
      } else {
        var _key2 = this._keyMapper(rowIndex, columnIndex);

        return this._cellWidthCache[_key2] !== undefined ? Math.max(this._minWidth, this._cellWidthCache[_key2]) : this._defaultWidth;
      }
    }
  }, {
    key: "has",
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this._keyMapper(rowIndex, columnIndex);

      return this._cellHeightCache[key] !== undefined;
    }
  }, {
    key: "set",
    value: function set(rowIndex, columnIndex, width, height) {
      var key = this._keyMapper(rowIndex, columnIndex);

      if (columnIndex >= this._columnCount) {
        this._columnCount = columnIndex + 1;
      }

      if (rowIndex >= this._rowCount) {
        this._rowCount = rowIndex + 1;
      } // Size is cached per cell so we don't have to re-measure if cells are re-ordered.


      this._cellHeightCache[key] = height;
      this._cellWidthCache[key] = width;

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: "_updateCachedColumnAndRowSizes",
    value: function _updateCachedColumnAndRowSizes(rowIndex, columnIndex) {
      // :columnWidth and :rowHeight are derived based on all cells in a column/row.
      // Pre-cache these derived values for faster lookup later.
      // Reads are expected to occur more frequently than writes in this case.
      // Only update non-fixed dimensions though to avoid doing unnecessary work.
      if (!this._hasFixedWidth) {
        var columnWidth = 0;

        for (var i = 0; i < this._rowCount; i++) {
          columnWidth = Math.max(columnWidth, this.getWidth(i, columnIndex));
        }

        var columnKey = this._keyMapper(0, columnIndex);

        this._columnWidthCache[columnKey] = columnWidth;
      }

      if (!this._hasFixedHeight) {
        var rowHeight = 0;

        for (var _i = 0; _i < this._columnCount; _i++) {
          rowHeight = Math.max(rowHeight, this.getHeight(rowIndex, _i));
        }

        var rowKey = this._keyMapper(rowIndex, 0);

        this._rowHeightCache[rowKey] = rowHeight;
      }
    }
  }, {
    key: "defaultHeight",
    get: function get() {
      return this._defaultHeight;
    }
  }, {
    key: "defaultWidth",
    get: function get() {
      return this._defaultWidth;
    }
  }]);

  return CellMeasurerCache;
}();



function defaultKeyMapper(rowIndex, columnIndex) {
  return "".concat(rowIndex, "-").concat(columnIndex);
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/CellMeasurer/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CellMeasurer: () => (/* reexport safe */ _CellMeasurer__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   CellMeasurerCache: () => (/* reexport safe */ _CellMeasurerCache__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CellMeasurer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurer.js");
/* harmony import */ var _CellMeasurerCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellMeasurerCache */ "./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurerCache.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CellMeasurer__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/CellMeasurer/types.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/CellMeasurer/types.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bpfrpt_proptype_CellMeasureCache: () => (/* binding */ bpfrpt_proptype_CellMeasureCache)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
var bpfrpt_proptype_CellMeasureCache =  false ? 0 : {
  "hasFixedWidth": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired,
  "hasFixedHeight": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired,
  "has": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired,
  "set": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired,
  "getHeight": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired,
  "getWidth": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired
};



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/Collection.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/Collection.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Collection)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CollectionView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CollectionView */ "./node_modules/react-virtualized/dist/es/Collection/CollectionView.js");
/* harmony import */ var _utils_calculateSizeAndPositionData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/calculateSizeAndPositionData */ "./node_modules/react-virtualized/dist/es/Collection/utils/calculateSizeAndPositionData.js");
/* harmony import */ var _utils_getUpdatedOffsetForIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/getUpdatedOffsetForIndex */ "./node_modules/react-virtualized/dist/es/utils/getUpdatedOffsetForIndex.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Collection/types.js");














/**
 * Renders scattered or non-linear data.
 * Unlike Grid, which renders checkerboard data, Collection can render arbitrarily positioned- even overlapping- data.
 */
var Collection =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Collection, _React$PureComponent);

  function Collection(props, context) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Collection);

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Collection).call(this, props, context));
    _this._cellMetadata = [];
    _this._lastRenderedCellIndices = []; // Cell cache during scroll (for performance)

    _this._cellCache = [];
    _this._isScrollingChange = _this._isScrollingChange.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this._setCollectionViewRef = _this._setCollectionViewRef.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Collection, [{
    key: "forceUpdate",
    value: function forceUpdate() {
      if (this._collectionView !== undefined) {
        this._collectionView.forceUpdate();
      }
    }
    /** See Collection#recomputeCellSizesAndPositions */

  }, {
    key: "recomputeCellSizesAndPositions",
    value: function recomputeCellSizesAndPositions() {
      this._cellCache = [];

      this._collectionView.recomputeCellSizesAndPositions();
    }
    /** React lifecycle methods */

  }, {
    key: "render",
    value: function render() {
      var props = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props);

      return react__WEBPACK_IMPORTED_MODULE_8__.createElement(_CollectionView__WEBPACK_IMPORTED_MODULE_9__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        cellLayoutManager: this,
        isScrollingChange: this._isScrollingChange,
        ref: this._setCollectionViewRef
      }, props));
    }
    /** CellLayoutManager interface */

  }, {
    key: "calculateSizeAndPositionData",
    value: function calculateSizeAndPositionData() {
      var _this$props = this.props,
          cellCount = _this$props.cellCount,
          cellSizeAndPositionGetter = _this$props.cellSizeAndPositionGetter,
          sectionSize = _this$props.sectionSize;

      var data = (0,_utils_calculateSizeAndPositionData__WEBPACK_IMPORTED_MODULE_10__["default"])({
        cellCount: cellCount,
        cellSizeAndPositionGetter: cellSizeAndPositionGetter,
        sectionSize: sectionSize
      });

      this._cellMetadata = data.cellMetadata;
      this._sectionManager = data.sectionManager;
      this._height = data.height;
      this._width = data.width;
    }
    /**
     * Returns the most recently rendered set of cell indices.
     */

  }, {
    key: "getLastRenderedIndices",
    value: function getLastRenderedIndices() {
      return this._lastRenderedCellIndices;
    }
    /**
     * Calculates the minimum amount of change from the current scroll position to ensure the specified cell is (fully) visible.
     */

  }, {
    key: "getScrollPositionForCell",
    value: function getScrollPositionForCell(_ref) {
      var align = _ref.align,
          cellIndex = _ref.cellIndex,
          height = _ref.height,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          width = _ref.width;
      var cellCount = this.props.cellCount;

      if (cellIndex >= 0 && cellIndex < cellCount) {
        var cellMetadata = this._cellMetadata[cellIndex];
        scrollLeft = (0,_utils_getUpdatedOffsetForIndex__WEBPACK_IMPORTED_MODULE_11__["default"])({
          align: align,
          cellOffset: cellMetadata.x,
          cellSize: cellMetadata.width,
          containerSize: width,
          currentOffset: scrollLeft,
          targetIndex: cellIndex
        });
        scrollTop = (0,_utils_getUpdatedOffsetForIndex__WEBPACK_IMPORTED_MODULE_11__["default"])({
          align: align,
          cellOffset: cellMetadata.y,
          cellSize: cellMetadata.height,
          containerSize: height,
          currentOffset: scrollTop,
          targetIndex: cellIndex
        });
      }

      return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      };
    }
  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      return {
        height: this._height,
        width: this._width
      };
    }
  }, {
    key: "cellRenderers",
    value: function cellRenderers(_ref2) {
      var _this2 = this;

      var height = _ref2.height,
          isScrolling = _ref2.isScrolling,
          width = _ref2.width,
          x = _ref2.x,
          y = _ref2.y;
      var _this$props2 = this.props,
          cellGroupRenderer = _this$props2.cellGroupRenderer,
          cellRenderer = _this$props2.cellRenderer; // Store for later calls to getLastRenderedIndices()

      this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
        height: height,
        width: width,
        x: x,
        y: y
      });
      return cellGroupRenderer({
        cellCache: this._cellCache,
        cellRenderer: cellRenderer,
        cellSizeAndPositionGetter: function cellSizeAndPositionGetter(_ref3) {
          var index = _ref3.index;
          return _this2._sectionManager.getCellMetadata({
            index: index
          });
        },
        indices: this._lastRenderedCellIndices,
        isScrolling: isScrolling
      });
    }
  }, {
    key: "_isScrollingChange",
    value: function _isScrollingChange(isScrolling) {
      if (!isScrolling) {
        this._cellCache = [];
      }
    }
  }, {
    key: "_setCollectionViewRef",
    value: function _setCollectionViewRef(ref) {
      this._collectionView = ref;
    }
  }]);

  return Collection;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Collection, "defaultProps", {
  'aria-label': 'grid',
  cellGroupRenderer: defaultCellGroupRenderer
});


Collection.propTypes =  true ? {
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /**
   * Number of cells in Collection.
   */
  cellCount: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,

  /**
   * Responsible for rendering a group of cells given their indices.
   * Should implement the following interface: ({
   *   cellSizeAndPositionGetter:Function,
   *   indices: Array<number>,
   *   cellRenderer: Function
   * }): Array<PropTypes.node>
   */
  cellGroupRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /**
   * Responsible for rendering a cell given an row and column index.
   * Should implement the following interface: ({ index: number, key: string, style: object }): PropTypes.element
   */
  cellRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /**
   * Callback responsible for returning size and offset/position information for a given cell (index).
   * ({ index: number }): { height: number, width: number, x: number, y: number }
   */
  cellSizeAndPositionGetter: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /**
   * Optionally override the size of the sections a Collection's cells are split into.
   */
  sectionSize: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number)
} : 0;

function defaultCellGroupRenderer(_ref4) {
  var cellCache = _ref4.cellCache,
      cellRenderer = _ref4.cellRenderer,
      cellSizeAndPositionGetter = _ref4.cellSizeAndPositionGetter,
      indices = _ref4.indices,
      isScrolling = _ref4.isScrolling;
  return indices.map(function (index) {
    var cellMetadata = cellSizeAndPositionGetter({
      index: index
    });
    var cellRendererProps = {
      index: index,
      isScrolling: isScrolling,
      key: index,
      style: {
        height: cellMetadata.height,
        left: cellMetadata.x,
        position: 'absolute',
        top: cellMetadata.y,
        width: cellMetadata.width
      }
    }; // Avoid re-creating cells while scrolling.
    // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
    // If a scroll is in progress- cache and reuse cells.
    // This cache will be thrown away once scrolling complets.

    if (isScrolling) {
      if (!(index in cellCache)) {
        cellCache[index] = cellRenderer(cellRendererProps);
      }

      return cellCache[index];
    } else {
      return cellRenderer(cellRendererProps);
    }
  }).filter(function (renderedCell) {
    return !!renderedCell;
  });
}




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/CollectionView.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/CollectionView.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/createCallbackMemoizer */ "./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js");
/* harmony import */ var dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dom-helpers/scrollbarSize */ "./node_modules/dom-helpers/esm/scrollbarSize.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // @TODO Merge Collection and CollectionView

/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */

var IS_SCROLLING_TIMEOUT = 150;
/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */

var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};
/**
 * Monitors changes in properties (eg. cellCount) and state (eg. scroll offsets) to determine when rendering needs to occur.
 * This component does not render any visible content itself; it defers to the specified :cellLayoutManager.
 */

var CollectionView =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CollectionView, _React$PureComponent);

  // Invokes callbacks only when their values have changed.
  function CollectionView() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CollectionView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CollectionView)).call.apply(_getPrototypeOf2, [this].concat(args))); // If this component is being rendered server-side, getScrollbarSize() will return undefined.
    // We handle this case in componentDidMount()

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_calculateSizeAndPositionDataOnNextUpdate", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onSectionRenderedMemoizer", (0,_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_10__["default"])());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onScrollMemoizer", (0,_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_10__["default"])(false));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_invokeOnSectionRenderedHelper", function () {
      var _this$props = _this.props,
          cellLayoutManager = _this$props.cellLayoutManager,
          onSectionRendered = _this$props.onSectionRendered;

      _this._onSectionRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          indices: cellLayoutManager.getLastRenderedIndices()
        }
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_setScrollingContainerRef", function (ref) {
      _this._scrollingContainer = ref;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_updateScrollPositionForScrollToCell", function () {
      var _this$props2 = _this.props,
          cellLayoutManager = _this$props2.cellLayoutManager,
          height = _this$props2.height,
          scrollToAlignment = _this$props2.scrollToAlignment,
          scrollToCell = _this$props2.scrollToCell,
          width = _this$props2.width;
      var _this$state = _this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop;

      if (scrollToCell >= 0) {
        var scrollPosition = cellLayoutManager.getScrollPositionForCell({
          align: scrollToAlignment,
          cellIndex: scrollToCell,
          height: height,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          width: width
        });

        if (scrollPosition.scrollLeft !== scrollLeft || scrollPosition.scrollTop !== scrollTop) {
          _this._setScrollPosition(scrollPosition);
        }
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onScroll", function (event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target !== _this._scrollingContainer) {
        return;
      } // Prevent pointer events from interrupting a smooth scroll


      _this._enablePointerEventsAfterDelay(); // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.


      var _this$props3 = _this.props,
          cellLayoutManager = _this$props3.cellLayoutManager,
          height = _this$props3.height,
          isScrollingChange = _this$props3.isScrollingChange,
          width = _this$props3.width;
      var scrollbarSize = _this._scrollbarSize;

      var _cellLayoutManager$ge = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge.height,
          totalWidth = _cellLayoutManager$ge.width;

      var scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft));
      var scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop)); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.

      if (_this.state.scrollLeft !== scrollLeft || _this.state.scrollTop !== scrollTop) {
        // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
        // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
        // All things considered, this seems to be the best current work around that I'm aware of.
        // For more information see https://github.com/bvaughn/react-virtualized/pull/124
        var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED; // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)

        if (!_this.state.isScrolling) {
          isScrollingChange(true);
        }

        _this.setState({
          isScrolling: true,
          scrollLeft: scrollLeft,
          scrollPositionChangeReason: scrollPositionChangeReason,
          scrollTop: scrollTop
        });
      }

      _this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalWidth: totalWidth,
        totalHeight: totalHeight
      });
    });

    _this._scrollbarSize = (0,dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_11__["default"])();

    if (_this._scrollbarSize === undefined) {
      _this._scrollbarSizeMeasured = false;
      _this._scrollbarSize = 0;
    } else {
      _this._scrollbarSizeMeasured = true;
    }

    return _this;
  }
  /**
   * Forced recompute of cell sizes and positions.
   * This function should be called if cell sizes have changed but nothing else has.
   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CollectionView, [{
    key: "recomputeCellSizesAndPositions",
    value: function recomputeCellSizesAndPositions() {
      this._calculateSizeAndPositionDataOnNextUpdate = true;
      this.forceUpdate();
    }
    /* ---------------------------- Component lifecycle methods ---------------------------- */

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
          cellLayoutManager = _this$props4.cellLayoutManager,
          scrollLeft = _this$props4.scrollLeft,
          scrollToCell = _this$props4.scrollToCell,
          scrollTop = _this$props4.scrollTop; // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.

      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = (0,dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_11__["default"])();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }

      if (scrollToCell >= 0) {
        this._updateScrollPositionForScrollToCell();
      } else if (scrollLeft >= 0 || scrollTop >= 0) {
        this._setScrollPosition({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
      } // Update onSectionRendered callback.


      this._invokeOnSectionRenderedHelper();

      var _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge2.height,
          totalWidth = _cellLayoutManager$ge2.width; // Initialize onScroll callback.


      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalHeight: totalHeight,
        totalWidth: totalWidth
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props5 = this.props,
          height = _this$props5.height,
          scrollToAlignment = _this$props5.scrollToAlignment,
          scrollToCell = _this$props5.scrollToCell,
          width = _this$props5.width;
      var _this$state2 = this.state,
          scrollLeft = _this$state2.scrollLeft,
          scrollPositionChangeReason = _this$state2.scrollPositionChangeReason,
          scrollTop = _this$state2.scrollTop; // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        if (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }

        if (scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      } // Update scroll offsets if the current :scrollToCell values requires it


      if (height !== prevProps.height || scrollToAlignment !== prevProps.scrollToAlignment || scrollToCell !== prevProps.scrollToCell || width !== prevProps.width) {
        this._updateScrollPositionForScrollToCell();
      } // Update onRowsRendered callback if start/stop indices have changed


      this._invokeOnSectionRenderedHelper();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          autoHeight = _this$props6.autoHeight,
          cellCount = _this$props6.cellCount,
          cellLayoutManager = _this$props6.cellLayoutManager,
          className = _this$props6.className,
          height = _this$props6.height,
          horizontalOverscanSize = _this$props6.horizontalOverscanSize,
          id = _this$props6.id,
          noContentRenderer = _this$props6.noContentRenderer,
          style = _this$props6.style,
          verticalOverscanSize = _this$props6.verticalOverscanSize,
          width = _this$props6.width;
      var _this$state3 = this.state,
          isScrolling = _this$state3.isScrolling,
          scrollLeft = _this$state3.scrollLeft,
          scrollTop = _this$state3.scrollTop; // Memoization reset

      if (this._lastRenderedCellCount !== cellCount || this._lastRenderedCellLayoutManager !== cellLayoutManager || this._calculateSizeAndPositionDataOnNextUpdate) {
        this._lastRenderedCellCount = cellCount;
        this._lastRenderedCellLayoutManager = cellLayoutManager;
        this._calculateSizeAndPositionDataOnNextUpdate = false;
        cellLayoutManager.calculateSizeAndPositionData();
      }

      var _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge3.height,
          totalWidth = _cellLayoutManager$ge3.width; // Safely expand the rendered area by the specified overscan amount


      var left = Math.max(0, scrollLeft - horizontalOverscanSize);
      var top = Math.max(0, scrollTop - verticalOverscanSize);
      var right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize);
      var bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize);
      var childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
        height: bottom - top,
        isScrolling: isScrolling,
        width: right - left,
        x: left,
        y: top
      }) : [];
      var collectionStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        WebkitOverflowScrolling: 'touch',
        width: width,
        willChange: 'transform'
      }; // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116

      var verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0; // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23

      collectionStyle.overflowX = totalWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      collectionStyle.overflowY = totalHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
      return react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        ref: this._setScrollingContainerRef,
        "aria-label": this.props['aria-label'],
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__["default"])('ReactVirtualized__Collection', className),
        id: id,
        onScroll: this._onScroll,
        role: "grid",
        style: _objectSpread({}, collectionStyle, {}, style),
        tabIndex: 0
      }, cellCount > 0 && react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "ReactVirtualized__Collection__innerScrollContainer",
        style: {
          height: totalHeight,
          maxHeight: totalHeight,
          maxWidth: totalWidth,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          width: totalWidth
        }
      }, childrenToDisplay), cellCount === 0 && noContentRenderer());
    }
    /* ---------------------------- Helper methods ---------------------------- */

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Collection.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: "_enablePointerEventsAfterDelay",
    value: function _enablePointerEventsAfterDelay() {
      var _this2 = this;

      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = setTimeout(function () {
        var isScrollingChange = _this2.props.isScrollingChange;
        isScrollingChange(false);
        _this2._disablePointerEventsTimeoutId = null;

        _this2.setState({
          isScrolling: false
        });
      }, IS_SCROLLING_TIMEOUT);
    }
  }, {
    key: "_invokeOnScrollMemoizer",
    value: function _invokeOnScrollMemoizer(_ref) {
      var _this3 = this;

      var scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          totalHeight = _ref.totalHeight,
          totalWidth = _ref.totalWidth;

      this._onScrollMemoizer({
        callback: function callback(_ref2) {
          var scrollLeft = _ref2.scrollLeft,
              scrollTop = _ref2.scrollTop;
          var _this3$props = _this3.props,
              height = _this3$props.height,
              onScroll = _this3$props.onScroll,
              width = _this3$props.width;
          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: "_setScrollPosition",
    value: function _setScrollPosition(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
          scrollTop = _ref3.scrollTop;
      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (scrollLeft >= 0) {
        newState.scrollLeft = scrollLeft;
      }

      if (scrollTop >= 0) {
        newState.scrollTop = scrollTop;
      }

      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.cellCount === 0 && (prevState.scrollLeft !== 0 || prevState.scrollTop !== 0)) {
        return {
          scrollLeft: 0,
          scrollTop: 0,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
        };
      } else if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) {
        return {
          scrollLeft: nextProps.scrollLeft != null ? nextProps.scrollLeft : prevState.scrollLeft,
          scrollTop: nextProps.scrollTop != null ? nextProps.scrollTop : prevState.scrollTop,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
        };
      }

      return null;
    }
  }]);

  return CollectionView;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(CollectionView, "defaultProps", {
  'aria-label': 'grid',
  horizontalOverscanSize: 0,
  noContentRenderer: function noContentRenderer() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  onSectionRendered: function onSectionRendered() {
    return null;
  },
  scrollToAlignment: 'auto',
  scrollToCell: -1,
  style: {},
  verticalOverscanSize: 0
});

CollectionView.propTypes =  true ? {
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /**
   * Number of cells in collection.
   */
  cellCount: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,

  /**
   * Calculates cell sizes and positions and manages rendering the appropriate cells given a specified window.
   */
  cellLayoutManager: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object).isRequired,

  /**
   * Optional custom CSS class name to attach to root Collection element.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /**
   * Height of Collection; this property determines the number of visible (vs virtualized) rows.
   */
  height: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,

  /**
   * Optional custom id to attach to root Collection element.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /**
   * Enables the `Collection` to horiontally "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */
  horizontalOverscanSize: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  isScrollingChange: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func),

  /**
   * Optional renderer to be used in place of rows when either :rowCount or :cellCount is 0.
   */
  noContentRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
   */
  onScroll: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /**
   * Callback invoked with information about the section of the Collection that was just rendered.
   * This callback is passed a named :indices parameter which is an Array of the most recently rendered section indices.
   */
  onSectionRendered: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /**
   * Horizontal offset.
   */
  scrollLeft: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number),

  /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */
  scrollToAlignment: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /**
   * Cell index to ensure visible (by forcefully scrolling if necessary).
   */
  scrollToCell: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,

  /**
   * Vertical offset.
   */
  scrollTop: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number),

  /**
   * Optional custom inline style to attach to root Collection element.
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object),

  /**
   * Enables the `Collection` to vertically "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */
  verticalOverscanSize: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,

  /**
   * Width of Collection; this property determines the number of visible (vs virtualized) columns.
   */
  width: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired
} : 0;
(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__.polyfill)(CollectionView);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionView);

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/Section.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/Section.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Collection/types.js");



/**
 * A section of the Window.
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * Sections have a fixed size and contain 0 to many cells (tracked by their indices).
 */
var Section =
/*#__PURE__*/
function () {
  function Section(_ref) {
    var height = _ref.height,
        width = _ref.width,
        x = _ref.x,
        y = _ref.y;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Section);

    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this._indexMap = {};
    this._indices = [];
  }
  /** Add a cell to this section. */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Section, [{
    key: "addCellIndex",
    value: function addCellIndex(_ref2) {
      var index = _ref2.index;

      if (!this._indexMap[index]) {
        this._indexMap[index] = true;

        this._indices.push(index);
      }
    }
    /** Get all cell indices that have been added to this section. */

  }, {
    key: "getCellIndices",
    value: function getCellIndices() {
      return this._indices;
    }
    /** Intended for debugger/test purposes only */

  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.x, ",").concat(this.y, " ").concat(this.width, "x").concat(this.height);
    }
  }]);

  return Section;
}();





/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/SectionManager.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/SectionManager.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SectionManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section */ "./node_modules/react-virtualized/dist/es/Collection/Section.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Collection/types.js");



/**
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * 
 */

var SECTION_SIZE = 100;

/**
 * Contains 0 to many Sections.
 * Grows (and adds Sections) dynamically as cells are registered.
 * Automatically adds cells to the appropriate Section(s).
 */
var SectionManager =
/*#__PURE__*/
function () {
  function SectionManager() {
    var sectionSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SECTION_SIZE;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SectionManager);

    this._sectionSize = sectionSize;
    this._cellMetadata = [];
    this._sections = {};
  }
  /**
   * Gets all cell indices contained in the specified region.
   * A region may encompass 1 or more Sections.
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SectionManager, [{
    key: "getCellIndices",
    value: function getCellIndices(_ref) {
      var height = _ref.height,
          width = _ref.width,
          x = _ref.x,
          y = _ref.y;
      var indices = {};
      this.getSections({
        height: height,
        width: width,
        x: x,
        y: y
      }).forEach(function (section) {
        return section.getCellIndices().forEach(function (index) {
          indices[index] = index;
        });
      }); // Object keys are strings; this function returns numbers

      return Object.keys(indices).map(function (index) {
        return indices[index];
      });
    }
    /** Get size and position information for the cell specified. */

  }, {
    key: "getCellMetadata",
    value: function getCellMetadata(_ref2) {
      var index = _ref2.index;
      return this._cellMetadata[index];
    }
    /** Get all Sections overlapping the specified region. */

  }, {
    key: "getSections",
    value: function getSections(_ref3) {
      var height = _ref3.height,
          width = _ref3.width,
          x = _ref3.x,
          y = _ref3.y;
      var sectionXStart = Math.floor(x / this._sectionSize);
      var sectionXStop = Math.floor((x + width - 1) / this._sectionSize);
      var sectionYStart = Math.floor(y / this._sectionSize);
      var sectionYStop = Math.floor((y + height - 1) / this._sectionSize);
      var sections = [];

      for (var sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++) {
        for (var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++) {
          var key = "".concat(sectionX, ".").concat(sectionY);

          if (!this._sections[key]) {
            this._sections[key] = new _Section__WEBPACK_IMPORTED_MODULE_2__["default"]({
              height: this._sectionSize,
              width: this._sectionSize,
              x: sectionX * this._sectionSize,
              y: sectionY * this._sectionSize
            });
          }

          sections.push(this._sections[key]);
        }
      }

      return sections;
    }
    /** Total number of Sections based on the currently registered cells. */

  }, {
    key: "getTotalSectionCount",
    value: function getTotalSectionCount() {
      return Object.keys(this._sections).length;
    }
    /** Intended for debugger/test purposes only */

  }, {
    key: "toString",
    value: function toString() {
      var _this = this;

      return Object.keys(this._sections).map(function (index) {
        return _this._sections[index].toString();
      });
    }
    /** Adds a cell to the appropriate Sections and registers it metadata for later retrievable. */

  }, {
    key: "registerCell",
    value: function registerCell(_ref4) {
      var cellMetadatum = _ref4.cellMetadatum,
          index = _ref4.index;
      this._cellMetadata[index] = cellMetadatum;
      this.getSections(cellMetadatum).forEach(function (section) {
        return section.addCellIndex({
          index: index
        });
      });
    }
  }]);

  return SectionManager;
}();





/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collection: () => (/* reexport safe */ _Collection__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collection */ "./node_modules/react-virtualized/dist/es/Collection/Collection.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Collection__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/types.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/types.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bpfrpt_proptype_Index: () => (/* binding */ bpfrpt_proptype_Index),
/* harmony export */   bpfrpt_proptype_PositionInfo: () => (/* binding */ bpfrpt_proptype_PositionInfo),
/* harmony export */   bpfrpt_proptype_ScrollPosition: () => (/* binding */ bpfrpt_proptype_ScrollPosition),
/* harmony export */   bpfrpt_proptype_SizeAndPositionInfo: () => (/* binding */ bpfrpt_proptype_SizeAndPositionInfo),
/* harmony export */   bpfrpt_proptype_SizeInfo: () => (/* binding */ bpfrpt_proptype_SizeInfo)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
var bpfrpt_proptype_Index =  false ? 0 : {
  "index": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired
};
var bpfrpt_proptype_PositionInfo =  false ? 0 : {
  "x": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "y": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired
};
var bpfrpt_proptype_ScrollPosition =  false ? 0 : {
  "scrollLeft": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "scrollTop": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired
};
var bpfrpt_proptype_SizeAndPositionInfo =  false ? 0 : {
  "height": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "width": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "x": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "y": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired
};
var bpfrpt_proptype_SizeInfo =  false ? 0 : {
  "height": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "width": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired
};







/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/utils/calculateSizeAndPositionData.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/utils/calculateSizeAndPositionData.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calculateSizeAndPositionData)
/* harmony export */ });
/* harmony import */ var _SectionManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SectionManager */ "./node_modules/react-virtualized/dist/es/Collection/SectionManager.js");

function calculateSizeAndPositionData(_ref) {
  var cellCount = _ref.cellCount,
      cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter,
      sectionSize = _ref.sectionSize;
  var cellMetadata = [];
  var sectionManager = new _SectionManager__WEBPACK_IMPORTED_MODULE_0__["default"](sectionSize);
  var height = 0;
  var width = 0;

  for (var index = 0; index < cellCount; index++) {
    var cellMetadatum = cellSizeAndPositionGetter({
      index: index
    });

    if (cellMetadatum.height == null || isNaN(cellMetadatum.height) || cellMetadatum.width == null || isNaN(cellMetadatum.width) || cellMetadatum.x == null || isNaN(cellMetadatum.x) || cellMetadatum.y == null || isNaN(cellMetadatum.y)) {
      throw Error("Invalid metadata returned for cell ".concat(index, ":\n        x:").concat(cellMetadatum.x, ", y:").concat(cellMetadatum.y, ", width:").concat(cellMetadatum.width, ", height:").concat(cellMetadatum.height));
    }

    height = Math.max(height, cellMetadatum.y + cellMetadatum.height);
    width = Math.max(width, cellMetadatum.x + cellMetadatum.width);
    cellMetadata[index] = cellMetadatum;
    sectionManager.registerCell({
      cellMetadatum: cellMetadatum,
      index: index
    });
  }

  return {
    cellMetadata: cellMetadata,
    height: height,
    sectionManager: sectionManager,
    width: width
  };
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ColumnSizer/ColumnSizer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ColumnSizer/ColumnSizer.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColumnSizer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








/**
 * High-order component that auto-calculates column-widths for `Grid` cells.
 */

var ColumnSizer =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ColumnSizer, _React$PureComponent);

  function ColumnSizer(props, context) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ColumnSizer);

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ColumnSizer).call(this, props, context));
    _this._registerChild = _this._registerChild.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ColumnSizer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          columnMaxWidth = _this$props.columnMaxWidth,
          columnMinWidth = _this$props.columnMinWidth,
          columnCount = _this$props.columnCount,
          width = _this$props.width;

      if (columnMaxWidth !== prevProps.columnMaxWidth || columnMinWidth !== prevProps.columnMinWidth || columnCount !== prevProps.columnCount || width !== prevProps.width) {
        if (this._registeredChild) {
          this._registeredChild.recomputeGridSize();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          columnMaxWidth = _this$props2.columnMaxWidth,
          columnMinWidth = _this$props2.columnMinWidth,
          columnCount = _this$props2.columnCount,
          width = _this$props2.width;
      var safeColumnMinWidth = columnMinWidth || 1;
      var safeColumnMaxWidth = columnMaxWidth ? Math.min(columnMaxWidth, width) : width;
      var columnWidth = width / columnCount;
      columnWidth = Math.max(safeColumnMinWidth, columnWidth);
      columnWidth = Math.min(safeColumnMaxWidth, columnWidth);
      columnWidth = Math.floor(columnWidth);
      var adjustedWidth = Math.min(width, columnWidth * columnCount);
      return children({
        adjustedWidth: adjustedWidth,
        columnWidth: columnWidth,
        getColumnWidth: function getColumnWidth() {
          return columnWidth;
        },
        registerChild: this._registerChild
      });
    }
  }, {
    key: "_registerChild",
    value: function _registerChild(child) {
      if (child && typeof child.recomputeGridSize !== 'function') {
        throw Error('Unexpected child type registered; only Grid/MultiGrid children are supported.');
      }

      this._registeredChild = child;

      if (this._registeredChild) {
        this._registeredChild.recomputeGridSize();
      }
    }
  }]);

  return ColumnSizer;
}(react__WEBPACK_IMPORTED_MODULE_6__.PureComponent);


ColumnSizer.propTypes =  true ? {
  /**
   * Function responsible for rendering a virtualized Grid.
   * This function should implement the following signature:
   * ({ adjustedWidth, getColumnWidth, registerChild }) => PropTypes.element
   *
   * The specified :getColumnWidth function should be passed to the Grid's :columnWidth property.
   * The :registerChild should be passed to the Grid's :ref property.
   * The :adjustedWidth property is optional; it reflects the lesser of the overall width or the width of all columns.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func).isRequired,

  /** Optional maximum allowed column width */
  columnMaxWidth: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),

  /** Optional minimum allowed column width */
  columnMinWidth: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),

  /** Number of columns in Grid or Table child */
  columnCount: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number).isRequired,

  /** Width of Grid or Table child */
  width: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number).isRequired
} : 0;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ColumnSizer/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ColumnSizer/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColumnSizer: () => (/* reexport safe */ _ColumnSizer__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColumnSizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColumnSizer */ "./node_modules/react-virtualized/dist/es/ColumnSizer/ColumnSizer.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ColumnSizer__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/Grid.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/Grid.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_SCROLLING_RESET_TIME_INTERVAL: () => (/* binding */ DEFAULT_SCROLLING_RESET_TIME_INTERVAL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_calculateSizeAndPositionDataAndUpdateScrollOffset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/calculateSizeAndPositionDataAndUpdateScrollOffset */ "./node_modules/react-virtualized/dist/es/Grid/utils/calculateSizeAndPositionDataAndUpdateScrollOffset.js");
/* harmony import */ var _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/ScalingCellSizeAndPositionManager */ "./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js");
/* harmony import */ var _utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/createCallbackMemoizer */ "./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js");
/* harmony import */ var _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./defaultOverscanIndicesGetter */ "./node_modules/react-virtualized/dist/es/Grid/defaultOverscanIndicesGetter.js");
/* harmony import */ var _utils_updateScrollIndexHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/updateScrollIndexHelper */ "./node_modules/react-virtualized/dist/es/Grid/utils/updateScrollIndexHelper.js");
/* harmony import */ var _defaultCellRangeRenderer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./defaultCellRangeRenderer */ "./node_modules/react-virtualized/dist/es/Grid/defaultCellRangeRenderer.js");
/* harmony import */ var dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dom-helpers/scrollbarSize */ "./node_modules/dom-helpers/esm/scrollbarSize.js");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/requestAnimationTimeout */ "./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__);









var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */

var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */

var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

var renderNull = function renderNull() {
  return null;
};

/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */
var Grid = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Grid, _React$PureComponent);

  // Invokes onSectionRendered callback only when start/stop row or column indices change
  function Grid(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Grid);

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Grid).call(this, props));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_onGridRenderedMemoizer", (0,_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_12__["default"])());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_onScrollMemoizer", (0,_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_12__["default"])(false));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_deferredInvalidateColumnIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_deferredInvalidateRowIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_recomputeScrollLeftFlag", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_recomputeScrollTopFlag", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_horizontalScrollBarSize", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_verticalScrollBarSize", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_scrollbarPresenceChanged", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_scrollingContainer", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_childrenToDisplay", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_columnStartIndex", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_columnStopIndex", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_rowStartIndex", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_rowStopIndex", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_renderedColumnStartIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_renderedColumnStopIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_renderedRowStartIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_renderedRowStopIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_initialScrollTop", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_initialScrollLeft", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_disablePointerEventsTimeoutId", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_styleCache", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_cellCache", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_debounceScrollEndedCallback", function () {
      _this._disablePointerEventsTimeoutId = null; // isScrolling is used to determine if we reset styleCache

      _this.setState({
        isScrolling: false,
        needToResetStyleCache: false
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_invokeOnGridRenderedHelper", function () {
      var onSectionRendered = _this.props.onSectionRendered;

      _this._onGridRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          columnOverscanStartIndex: _this._columnStartIndex,
          columnOverscanStopIndex: _this._columnStopIndex,
          columnStartIndex: _this._renderedColumnStartIndex,
          columnStopIndex: _this._renderedColumnStopIndex,
          rowOverscanStartIndex: _this._rowStartIndex,
          rowOverscanStopIndex: _this._rowStopIndex,
          rowStartIndex: _this._renderedRowStartIndex,
          rowStopIndex: _this._renderedRowStopIndex
        }
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_setScrollingContainerRef", function (ref) {
      _this._scrollingContainer = ref;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_onScroll", function (event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target === _this._scrollingContainer) {
        _this.handleScrollEvent(event.target);
      }
    });

    var columnSizeAndPositionManager = new _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_11__["default"]({
      cellCount: props.columnCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.columnWidth)(params);
      },
      estimatedCellSize: Grid._getEstimatedColumnSize(props)
    });
    var rowSizeAndPositionManager = new _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_11__["default"]({
      cellCount: props.rowCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.rowHeight)(params);
      },
      estimatedCellSize: Grid._getEstimatedRowSize(props)
    });
    _this.state = {
      instanceProps: {
        columnSizeAndPositionManager: columnSizeAndPositionManager,
        rowSizeAndPositionManager: rowSizeAndPositionManager,
        prevColumnWidth: props.columnWidth,
        prevRowHeight: props.rowHeight,
        prevColumnCount: props.columnCount,
        prevRowCount: props.rowCount,
        prevIsScrolling: props.isScrolling === true,
        prevScrollToColumn: props.scrollToColumn,
        prevScrollToRow: props.scrollToRow,
        scrollbarSize: 0,
        scrollbarSizeMeasured: false
      },
      isScrolling: false,
      scrollDirectionHorizontal: _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD,
      scrollDirectionVertical: _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD,
      scrollLeft: 0,
      scrollTop: 0,
      scrollPositionChangeReason: null,
      needToResetStyleCache: false
    };

    if (props.scrollToRow > 0) {
      _this._initialScrollTop = _this._getCalculatedScrollTop(props, _this.state);
    }

    if (props.scrollToColumn > 0) {
      _this._initialScrollLeft = _this._getCalculatedScrollLeft(props, _this.state);
    }

    return _this;
  }
  /**
   * Gets offsets for a given cell and alignment.
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Grid, [{
    key: "getOffsetForCell",
    value: function getOffsetForCell() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$alignment = _ref.alignment,
          alignment = _ref$alignment === void 0 ? this.props.scrollToAlignment : _ref$alignment,
          _ref$columnIndex = _ref.columnIndex,
          columnIndex = _ref$columnIndex === void 0 ? this.props.scrollToColumn : _ref$columnIndex,
          _ref$rowIndex = _ref.rowIndex,
          rowIndex = _ref$rowIndex === void 0 ? this.props.scrollToRow : _ref$rowIndex;

      var offsetProps = _objectSpread({}, this.props, {
        scrollToAlignment: alignment,
        scrollToColumn: columnIndex,
        scrollToRow: rowIndex
      });

      return {
        scrollLeft: this._getCalculatedScrollLeft(offsetProps),
        scrollTop: this._getCalculatedScrollTop(offsetProps)
      };
    }
    /**
     * Gets estimated total rows' height.
     */

  }, {
    key: "getTotalRowsHeight",
    value: function getTotalRowsHeight() {
      return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
    }
    /**
     * Gets estimated total columns' width.
     */

  }, {
    key: "getTotalColumnsWidth",
    value: function getTotalColumnsWidth() {
      return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
    }
    /**
     * This method handles a scroll event originating from an external scroll control.
     * It's an advanced method and should probably not be used unless you're implementing a custom scroll-bar solution.
     */

  }, {
    key: "handleScrollEvent",
    value: function handleScrollEvent(_ref2) {
      var _ref2$scrollLeft = _ref2.scrollLeft,
          scrollLeftParam = _ref2$scrollLeft === void 0 ? 0 : _ref2$scrollLeft,
          _ref2$scrollTop = _ref2.scrollTop,
          scrollTopParam = _ref2$scrollTop === void 0 ? 0 : _ref2$scrollTop;

      // On iOS, we can arrive at negative offsets by swiping past the start.
      // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
      if (scrollTopParam < 0) {
        return;
      } // Prevent pointer events from interrupting a smooth scroll


      this._debounceScrollEnded();

      var _this$props = this.props,
          autoHeight = _this$props.autoHeight,
          autoWidth = _this$props.autoWidth,
          height = _this$props.height,
          width = _this$props.width;
      var instanceProps = this.state.instanceProps; // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollbarSize = instanceProps.scrollbarSize;
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam);
      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.

      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
        // Don't change direction for an axis unless scroll offset has changed.
        var scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionHorizontal;
        var scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionVertical;
        var newState = {
          isScrolling: true,
          scrollDirectionHorizontal: scrollDirectionHorizontal,
          scrollDirectionVertical: scrollDirectionVertical,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
        };

        if (!autoHeight) {
          newState.scrollTop = scrollTop;
        }

        if (!autoWidth) {
          newState.scrollLeft = scrollLeft;
        }

        newState.needToResetStyleCache = false;
        this.setState(newState);
      }

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalColumnsWidth: totalColumnsWidth,
        totalRowsHeight: totalRowsHeight
      });
    }
    /**
     * Invalidate Grid size and recompute visible cells.
     * This is a deferred wrapper for recomputeGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    // @TODO (bvaughn) Add automated test coverage for this.

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref3) {
      var columnIndex = _ref3.columnIndex,
          rowIndex = _ref3.rowIndex;
      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }
    /**
     * Pre-measure all columns and rows in a Grid.
     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
     */

  }, {
    key: "measureAllCells",
    value: function measureAllCells() {
      var _this$props2 = this.props,
          columnCount = _this$props2.columnCount,
          rowCount = _this$props2.rowCount;
      var instanceProps = this.state.instanceProps;
      instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
      instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    }
    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$columnIndex = _ref4.columnIndex,
          columnIndex = _ref4$columnIndex === void 0 ? 0 : _ref4$columnIndex,
          _ref4$rowIndex = _ref4.rowIndex,
          rowIndex = _ref4$rowIndex === void 0 ? 0 : _ref4$rowIndex;

      var _this$props3 = this.props,
          scrollToColumn = _this$props3.scrollToColumn,
          scrollToRow = _this$props3.scrollToRow;
      var instanceProps = this.state.instanceProps;
      instanceProps.columnSizeAndPositionManager.resetCell(columnIndex);
      instanceProps.rowSizeAndPositionManager.resetCell(rowIndex); // Cell sizes may be determined by a function property.
      // In this case the cDU handler can't know if they changed.
      // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.

      this._recomputeScrollLeftFlag = scrollToColumn >= 0 && (this.state.scrollDirectionHorizontal === _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD ? columnIndex <= scrollToColumn : columnIndex >= scrollToColumn);
      this._recomputeScrollTopFlag = scrollToRow >= 0 && (this.state.scrollDirectionVertical === _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD ? rowIndex <= scrollToRow : rowIndex >= scrollToRow); // Clear cell cache in case we are scrolling;
      // Invalid row heights likely mean invalid cached content as well.

      this._styleCache = {};
      this._cellCache = {};
      this.forceUpdate();
    }
    /**
     * Ensure column and row are visible.
     */

  }, {
    key: "scrollToCell",
    value: function scrollToCell(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rowIndex = _ref5.rowIndex;
      var columnCount = this.props.columnCount;
      var props = this.props; // Don't adjust scroll offset for single-column grids (eg List, Table).
      // This can cause a funky scroll offset because of the vertical scrollbar width.

      if (columnCount > 1 && columnIndex !== undefined) {
        this._updateScrollLeftForScrollToColumn(_objectSpread({}, props, {
          scrollToColumn: columnIndex
        }));
      }

      if (rowIndex !== undefined) {
        this._updateScrollTopForScrollToRow(_objectSpread({}, props, {
          scrollToRow: rowIndex
        }));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
          getScrollbarSize = _this$props4.getScrollbarSize,
          height = _this$props4.height,
          scrollLeft = _this$props4.scrollLeft,
          scrollToColumn = _this$props4.scrollToColumn,
          scrollTop = _this$props4.scrollTop,
          scrollToRow = _this$props4.scrollToRow,
          width = _this$props4.width;
      var instanceProps = this.state.instanceProps; // Reset initial offsets to be ignored in browser

      this._initialScrollTop = 0;
      this._initialScrollLeft = 0; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize(); // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.


      if (!instanceProps.scrollbarSizeMeasured) {
        this.setState(function (prevState) {
          var stateUpdate = _objectSpread({}, prevState, {
            needToResetStyleCache: false
          });

          stateUpdate.instanceProps.scrollbarSize = getScrollbarSize();
          stateUpdate.instanceProps.scrollbarSizeMeasured = true;
          return stateUpdate;
        });
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 || typeof scrollTop === 'number' && scrollTop >= 0) {
        var stateUpdate = Grid._getScrollToPositionStateUpdate({
          prevState: this.state,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });

        if (stateUpdate) {
          stateUpdate.needToResetStyleCache = false;
          this.setState(stateUpdate);
        }
      } // refs don't work in `react-test-renderer`


      if (this._scrollingContainer) {
        // setting the ref's scrollLeft and scrollTop.
        // Somehow in MultiGrid the main grid doesn't trigger a update on mount.
        if (this._scrollingContainer.scrollLeft !== this.state.scrollLeft) {
          this._scrollingContainer.scrollLeft = this.state.scrollLeft;
        }

        if (this._scrollingContainer.scrollTop !== this.state.scrollTop) {
          this._scrollingContainer.scrollTop = this.state.scrollTop;
        }
      } // Don't update scroll offset if the size is 0; we don't render any cells in this case.
      // Setting a state may cause us to later thing we've updated the offce when we haven't.


      var sizeIsBiggerThanZero = height > 0 && width > 0;

      if (scrollToColumn >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollLeftForScrollToColumn();
      }

      if (scrollToRow >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollTopForScrollToRow();
      } // Update onRowsRendered callback


      this._invokeOnGridRenderedHelper(); // Initialize onScroll callback


      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalColumnsWidth: instanceProps.columnSizeAndPositionManager.getTotalSize(),
        totalRowsHeight: instanceProps.rowSizeAndPositionManager.getTotalSize()
      });

      this._maybeCallOnScrollbarPresenceChange();
    }
    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _this$props5 = this.props,
          autoHeight = _this$props5.autoHeight,
          autoWidth = _this$props5.autoWidth,
          columnCount = _this$props5.columnCount,
          height = _this$props5.height,
          rowCount = _this$props5.rowCount,
          scrollToAlignment = _this$props5.scrollToAlignment,
          scrollToColumn = _this$props5.scrollToColumn,
          scrollToRow = _this$props5.scrollToRow,
          width = _this$props5.width;
      var _this$state = this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollPositionChangeReason = _this$state.scrollPositionChangeReason,
          scrollTop = _this$state.scrollTop,
          instanceProps = _this$state.instanceProps; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize(); // Handle edge case where column or row count has only just increased over 0.
      // In this case we may have to restore a previously-specified scroll offset.
      // For more info see bvaughn/react-virtualized/issues/218


      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0; // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        // @TRICKY :autoHeight and :autoWidth properties instructs Grid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
        // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
        if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }

        if (!autoHeight && scrollTop >= 0 && (scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      } // Special case where the previous size was 0:
      // In this case we don't show any windowed cells at all.
      // So we should always recalculate offset afterwards.


      var sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && height > 0 && width > 0; // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?

      if (this._recomputeScrollLeftFlag) {
        this._recomputeScrollLeftFlag = false;

        this._updateScrollLeftForScrollToColumn(this.props);
      } else {
        (0,_utils_updateScrollIndexHelper__WEBPACK_IMPORTED_MODULE_14__["default"])({
          cellSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          previousCellsCount: prevProps.columnCount,
          previousCellSize: prevProps.columnWidth,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToColumn,
          previousSize: prevProps.width,
          scrollOffset: scrollLeft,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToColumn,
          size: width,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollLeftForScrollToColumn(_this2.props);
          }
        });
      }

      if (this._recomputeScrollTopFlag) {
        this._recomputeScrollTopFlag = false;

        this._updateScrollTopForScrollToRow(this.props);
      } else {
        (0,_utils_updateScrollIndexHelper__WEBPACK_IMPORTED_MODULE_14__["default"])({
          cellSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          previousCellsCount: prevProps.rowCount,
          previousCellSize: prevProps.rowHeight,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToRow,
          previousSize: prevProps.height,
          scrollOffset: scrollTop,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToRow,
          size: height,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollTopForScrollToRow(_this2.props);
          }
        });
      } // Update onRowsRendered callback if start/stop indices have changed


      this._invokeOnGridRenderedHelper(); // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners


      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();

        this._invokeOnScrollMemoizer({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          totalColumnsWidth: totalColumnsWidth,
          totalRowsHeight: totalRowsHeight
        });
      }

      this._maybeCallOnScrollbarPresenceChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_18__.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
      }
    }
    /**
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          autoContainerWidth = _this$props6.autoContainerWidth,
          autoHeight = _this$props6.autoHeight,
          autoWidth = _this$props6.autoWidth,
          className = _this$props6.className,
          containerProps = _this$props6.containerProps,
          containerRole = _this$props6.containerRole,
          containerStyle = _this$props6.containerStyle,
          height = _this$props6.height,
          id = _this$props6.id,
          noContentRenderer = _this$props6.noContentRenderer,
          role = _this$props6.role,
          style = _this$props6.style,
          tabIndex = _this$props6.tabIndex,
          width = _this$props6.width;
      var _this$state2 = this.state,
          instanceProps = _this$state2.instanceProps,
          needToResetStyleCache = _this$state2.needToResetStyleCache;

      var isScrolling = this._isScrolling();

      var gridStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        width: autoWidth ? 'auto' : width,
        WebkitOverflowScrolling: 'touch',
        willChange: 'transform'
      };

      if (needToResetStyleCache) {
        this._styleCache = {};
      } // calculate _styleCache here
      // if state.isScrolling (not from _isScrolling) then reset


      if (!this.state.isScrolling) {
        this._resetStyleCache();
      } // calculate children to render here


      this._calculateChildrenToRender(this.props, this.state);

      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize(); // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116

      var verticalScrollBarSize = totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
      var horizontalScrollBarSize = totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;

      if (horizontalScrollBarSize !== this._horizontalScrollBarSize || verticalScrollBarSize !== this._verticalScrollBarSize) {
        this._horizontalScrollBarSize = horizontalScrollBarSize;
        this._verticalScrollBarSize = verticalScrollBarSize;
        this._scrollbarPresenceChanged = true;
      } // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23


      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
      var childrenToDisplay = this._childrenToDisplay;
      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;
      return react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: this._setScrollingContainerRef
      }, containerProps, {
        "aria-label": this.props['aria-label'],
        "aria-readonly": this.props['aria-readonly'],
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__["default"])('ReactVirtualized__Grid', className),
        id: id,
        onScroll: this._onScroll,
        role: role,
        style: _objectSpread({}, gridStyle, {}, style),
        tabIndex: tabIndex
      }), childrenToDisplay.length > 0 && react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "ReactVirtualized__Grid__innerScrollContainer",
        role: containerRole,
        style: _objectSpread({
          width: autoContainerWidth ? 'auto' : totalColumnsWidth,
          height: totalRowsHeight,
          maxWidth: totalColumnsWidth,
          maxHeight: totalRowsHeight,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          position: 'relative'
        }, containerStyle)
      }, childrenToDisplay), showNoContentRenderer && noContentRenderer());
    }
    /* ---------------------------- Helper methods ---------------------------- */

  }, {
    key: "_calculateChildrenToRender",
    value: function _calculateChildrenToRender() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var cellRenderer = props.cellRenderer,
          cellRangeRenderer = props.cellRangeRenderer,
          columnCount = props.columnCount,
          deferredMeasurementCache = props.deferredMeasurementCache,
          height = props.height,
          overscanColumnCount = props.overscanColumnCount,
          overscanIndicesGetter = props.overscanIndicesGetter,
          overscanRowCount = props.overscanRowCount,
          rowCount = props.rowCount,
          width = props.width,
          isScrollingOptOut = props.isScrollingOptOut;
      var scrollDirectionHorizontal = state.scrollDirectionHorizontal,
          scrollDirectionVertical = state.scrollDirectionVertical,
          instanceProps = state.instanceProps;
      var scrollTop = this._initialScrollTop > 0 ? this._initialScrollTop : state.scrollTop;
      var scrollLeft = this._initialScrollLeft > 0 ? this._initialScrollLeft : state.scrollLeft;

      var isScrolling = this._isScrolling(props, state);

      this._childrenToDisplay = []; // Render only enough columns and rows to cover the visible area of the grid.

      if (height > 0 && width > 0) {
        var visibleColumnIndices = instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
          containerSize: width,
          offset: scrollLeft
        });
        var visibleRowIndices = instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
          containerSize: height,
          offset: scrollTop
        });
        var horizontalOffsetAdjustment = instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
          containerSize: width,
          offset: scrollLeft
        });
        var verticalOffsetAdjustment = instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
          containerSize: height,
          offset: scrollTop
        }); // Store for _invokeOnGridRenderedHelper()

        this._renderedColumnStartIndex = visibleColumnIndices.start;
        this._renderedColumnStopIndex = visibleColumnIndices.stop;
        this._renderedRowStartIndex = visibleRowIndices.start;
        this._renderedRowStopIndex = visibleRowIndices.stop;
        var overscanColumnIndices = overscanIndicesGetter({
          direction: 'horizontal',
          cellCount: columnCount,
          overscanCellsCount: overscanColumnCount,
          scrollDirection: scrollDirectionHorizontal,
          startIndex: typeof visibleColumnIndices.start === 'number' ? visibleColumnIndices.start : 0,
          stopIndex: typeof visibleColumnIndices.stop === 'number' ? visibleColumnIndices.stop : -1
        });
        var overscanRowIndices = overscanIndicesGetter({
          direction: 'vertical',
          cellCount: rowCount,
          overscanCellsCount: overscanRowCount,
          scrollDirection: scrollDirectionVertical,
          startIndex: typeof visibleRowIndices.start === 'number' ? visibleRowIndices.start : 0,
          stopIndex: typeof visibleRowIndices.stop === 'number' ? visibleRowIndices.stop : -1
        }); // Store for _invokeOnGridRenderedHelper()

        var columnStartIndex = overscanColumnIndices.overscanStartIndex;
        var columnStopIndex = overscanColumnIndices.overscanStopIndex;
        var rowStartIndex = overscanRowIndices.overscanStartIndex;
        var rowStopIndex = overscanRowIndices.overscanStopIndex; // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.

        if (deferredMeasurementCache) {
          // If rows have a dynamic height, scan the rows we are about to render.
          // If any have not yet been measured, then we need to render all columns initially,
          // Because the height of the row is equal to the tallest cell within that row,
          // (And so we can't know the height without measuring all column-cells first).
          if (!deferredMeasurementCache.hasFixedHeight()) {
            for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
              if (!deferredMeasurementCache.has(rowIndex, 0)) {
                columnStartIndex = 0;
                columnStopIndex = columnCount - 1;
                break;
              }
            }
          } // If columns have a dynamic width, scan the columns we are about to render.
          // If any have not yet been measured, then we need to render all rows initially,
          // Because the width of the column is equal to the widest cell within that column,
          // (And so we can't know the width without measuring all row-cells first).


          if (!deferredMeasurementCache.hasFixedWidth()) {
            for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
              if (!deferredMeasurementCache.has(0, columnIndex)) {
                rowStartIndex = 0;
                rowStopIndex = rowCount - 1;
                break;
              }
            }
          }
        }

        this._childrenToDisplay = cellRangeRenderer({
          cellCache: this._cellCache,
          cellRenderer: cellRenderer,
          columnSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          columnStartIndex: columnStartIndex,
          columnStopIndex: columnStopIndex,
          deferredMeasurementCache: deferredMeasurementCache,
          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
          isScrolling: isScrolling,
          isScrollingOptOut: isScrollingOptOut,
          parent: this,
          rowSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          rowStartIndex: rowStartIndex,
          rowStopIndex: rowStopIndex,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          styleCache: this._styleCache,
          verticalOffsetAdjustment: verticalOffsetAdjustment,
          visibleColumnIndices: visibleColumnIndices,
          visibleRowIndices: visibleRowIndices
        }); // update the indices

        this._columnStartIndex = columnStartIndex;
        this._columnStopIndex = columnStopIndex;
        this._rowStartIndex = rowStartIndex;
        this._rowStopIndex = rowStopIndex;
      }
    }
    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Grid.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: "_debounceScrollEnded",
    value: function _debounceScrollEnded() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;

      if (this._disablePointerEventsTimeoutId) {
        (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_18__.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_18__.requestAnimationTimeout)(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    }
  }, {
    key: "_handleInvalidatedGridSize",

    /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number' && typeof this._deferredInvalidateRowIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;
        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;
        this.recomputeGridSize({
          columnIndex: columnIndex,
          rowIndex: rowIndex
        });
      }
    }
  }, {
    key: "_invokeOnScrollMemoizer",
    value: function _invokeOnScrollMemoizer(_ref6) {
      var _this3 = this;

      var scrollLeft = _ref6.scrollLeft,
          scrollTop = _ref6.scrollTop,
          totalColumnsWidth = _ref6.totalColumnsWidth,
          totalRowsHeight = _ref6.totalRowsHeight;

      this._onScrollMemoizer({
        callback: function callback(_ref7) {
          var scrollLeft = _ref7.scrollLeft,
              scrollTop = _ref7.scrollTop;
          var _this3$props = _this3.props,
              height = _this3$props.height,
              onScroll = _this3$props.onScroll,
              width = _this3$props.width;
          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalRowsHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalColumnsWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: "_isScrolling",
    value: function _isScrolling() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      // If isScrolling is defined in props, use it to override the value in state
      // This is a performance optimization for WindowScroller + Grid
      return Object.hasOwnProperty.call(props, 'isScrolling') ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
    }
  }, {
    key: "_maybeCallOnScrollbarPresenceChange",
    value: function _maybeCallOnScrollbarPresenceChange() {
      if (this._scrollbarPresenceChanged) {
        var onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;
        this._scrollbarPresenceChanged = false;
        onScrollbarPresenceChange({
          horizontal: this._horizontalScrollBarSize > 0,
          size: this.state.instanceProps.scrollbarSize,
          vertical: this._verticalScrollBarSize > 0
        });
      }
    }
  }, {
    key: "scrollToPosition",

    /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */
    value: function scrollToPosition(_ref8) {
      var scrollLeft = _ref8.scrollLeft,
          scrollTop = _ref8.scrollTop;

      var stateUpdate = Grid._getScrollToPositionStateUpdate({
        prevState: this.state,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: "_getCalculatedScrollLeft",
    value: function _getCalculatedScrollLeft() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      return Grid._getCalculatedScrollLeft(props, state);
    }
  }, {
    key: "_updateScrollLeftForScrollToColumn",
    value: function _updateScrollLeftForScrollToColumn() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      var stateUpdate = Grid._getScrollLeftForScrollToColumnStateUpdate(props, state);

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: "_getCalculatedScrollTop",
    value: function _getCalculatedScrollTop() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      return Grid._getCalculatedScrollTop(props, state);
    }
  }, {
    key: "_resetStyleCache",
    value: function _resetStyleCache() {
      var styleCache = this._styleCache;
      var cellCache = this._cellCache;
      var isScrollingOptOut = this.props.isScrollingOptOut; // Reset cell and style caches once scrolling stops.
      // This makes Grid simpler to use (since cells commonly change).
      // And it keeps the caches from growing too large.
      // Performance is most sensitive when a user is scrolling.
      // Don't clear visible cells from cellCache if isScrollingOptOut is specified.
      // This keeps the cellCache to a resonable size.

      this._cellCache = {};
      this._styleCache = {}; // Copy over the visible cell styles so avoid unnecessary re-render.

      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
          var key = "".concat(rowIndex, "-").concat(columnIndex);
          this._styleCache[key] = styleCache[key];

          if (isScrollingOptOut) {
            this._cellCache[key] = cellCache[key];
          }
        }
      }
    }
  }, {
    key: "_updateScrollTopForScrollToRow",
    value: function _updateScrollTopForScrollToRow() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      var stateUpdate = Grid._getScrollTopForScrollToRowStateUpdate(props, state);

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newState = {};

      if (nextProps.columnCount === 0 && prevState.scrollLeft !== 0 || nextProps.rowCount === 0 && prevState.scrollTop !== 0) {
        newState.scrollLeft = 0;
        newState.scrollTop = 0; // only use scroll{Left,Top} from props if scrollTo{Column,Row} isn't specified
        // scrollTo{Column,Row} should override scroll{Left,Top}
      } else if (nextProps.scrollLeft !== prevState.scrollLeft && nextProps.scrollToColumn < 0 || nextProps.scrollTop !== prevState.scrollTop && nextProps.scrollToRow < 0) {
        Object.assign(newState, Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: nextProps.scrollLeft,
          scrollTop: nextProps.scrollTop
        }));
      }

      var instanceProps = prevState.instanceProps; // Initially we should not clearStyleCache

      newState.needToResetStyleCache = false;

      if (nextProps.columnWidth !== instanceProps.prevColumnWidth || nextProps.rowHeight !== instanceProps.prevRowHeight) {
        // Reset cache. set it to {} in render
        newState.needToResetStyleCache = true;
      }

      instanceProps.columnSizeAndPositionManager.configure({
        cellCount: nextProps.columnCount,
        estimatedCellSize: Grid._getEstimatedColumnSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.columnWidth)
      });
      instanceProps.rowSizeAndPositionManager.configure({
        cellCount: nextProps.rowCount,
        estimatedCellSize: Grid._getEstimatedRowSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.rowHeight)
      });

      if (instanceProps.prevColumnCount === 0 || instanceProps.prevRowCount === 0) {
        instanceProps.prevColumnCount = 0;
        instanceProps.prevRowCount = 0;
      } // If scrolling is controlled outside this component, clear cache when scrolling stops


      if (nextProps.autoHeight && nextProps.isScrolling === false && instanceProps.prevIsScrolling === true) {
        Object.assign(newState, {
          isScrolling: false
        });
      }

      var maybeStateA;
      var maybeStateB;
      (0,_utils_calculateSizeAndPositionDataAndUpdateScrollOffset__WEBPACK_IMPORTED_MODULE_10__["default"])({
        cellCount: instanceProps.prevColumnCount,
        cellSize: typeof instanceProps.prevColumnWidth === 'number' ? instanceProps.prevColumnWidth : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.columnSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.columnCount,
        nextCellSize: typeof nextProps.columnWidth === 'number' ? nextProps.columnWidth : null,
        nextScrollToIndex: nextProps.scrollToColumn,
        scrollToIndex: instanceProps.prevScrollToColumn,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateA = Grid._getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState);
        }
      });
      (0,_utils_calculateSizeAndPositionDataAndUpdateScrollOffset__WEBPACK_IMPORTED_MODULE_10__["default"])({
        cellCount: instanceProps.prevRowCount,
        cellSize: typeof instanceProps.prevRowHeight === 'number' ? instanceProps.prevRowHeight : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.rowSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.rowCount,
        nextCellSize: typeof nextProps.rowHeight === 'number' ? nextProps.rowHeight : null,
        nextScrollToIndex: nextProps.scrollToRow,
        scrollToIndex: instanceProps.prevScrollToRow,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateB = Grid._getScrollTopForScrollToRowStateUpdate(nextProps, prevState);
        }
      });
      instanceProps.prevColumnCount = nextProps.columnCount;
      instanceProps.prevColumnWidth = nextProps.columnWidth;
      instanceProps.prevIsScrolling = nextProps.isScrolling === true;
      instanceProps.prevRowCount = nextProps.rowCount;
      instanceProps.prevRowHeight = nextProps.rowHeight;
      instanceProps.prevScrollToColumn = nextProps.scrollToColumn;
      instanceProps.prevScrollToRow = nextProps.scrollToRow; // getting scrollBarSize (moved from componentWillMount)

      instanceProps.scrollbarSize = nextProps.getScrollbarSize();

      if (instanceProps.scrollbarSize === undefined) {
        instanceProps.scrollbarSizeMeasured = false;
        instanceProps.scrollbarSize = 0;
      } else {
        instanceProps.scrollbarSizeMeasured = true;
      }

      newState.instanceProps = instanceProps;
      return _objectSpread({}, newState, {}, maybeStateA, {}, maybeStateB);
    }
  }, {
    key: "_getEstimatedColumnSize",
    value: function _getEstimatedColumnSize(props) {
      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
    }
  }, {
    key: "_getEstimatedRowSize",
    value: function _getEstimatedRowSize(props) {
      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
    }
  }, {
    key: "_getScrollToPositionStateUpdate",

    /**
     * Get the updated state after scrolling to
     * scrollLeft and scrollTop
     */
    value: function _getScrollToPositionStateUpdate(_ref9) {
      var prevState = _ref9.prevState,
          scrollLeft = _ref9.scrollLeft,
          scrollTop = _ref9.scrollTop;
      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (typeof scrollLeft === 'number' && scrollLeft >= 0) {
        newState.scrollDirectionHorizontal = scrollLeft > prevState.scrollLeft ? _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_BACKWARD;
        newState.scrollLeft = scrollLeft;
      }

      if (typeof scrollTop === 'number' && scrollTop >= 0) {
        newState.scrollDirectionVertical = scrollTop > prevState.scrollTop ? _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_BACKWARD;
        newState.scrollTop = scrollTop;
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft || typeof scrollTop === 'number' && scrollTop >= 0 && scrollTop !== prevState.scrollTop) {
        return newState;
      }

      return {};
    }
  }, {
    key: "_wrapSizeGetter",
    value: function _wrapSizeGetter(value) {
      return typeof value === 'function' ? value : function () {
        return value;
      };
    }
  }, {
    key: "_getCalculatedScrollLeft",
    value: function _getCalculatedScrollLeft(nextProps, prevState) {
      var columnCount = nextProps.columnCount,
          height = nextProps.height,
          scrollToAlignment = nextProps.scrollToAlignment,
          scrollToColumn = nextProps.scrollToColumn,
          width = nextProps.width;
      var scrollLeft = prevState.scrollLeft,
          instanceProps = prevState.instanceProps;

      if (columnCount > 0) {
        var finalColumn = columnCount - 1;
        var targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn);
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
        return instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: width - scrollBarSize,
          currentOffset: scrollLeft,
          targetIndex: targetIndex
        });
      }

      return 0;
    }
  }, {
    key: "_getScrollLeftForScrollToColumnStateUpdate",
    value: function _getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState) {
      var scrollLeft = prevState.scrollLeft;

      var calculatedScrollLeft = Grid._getCalculatedScrollLeft(nextProps, prevState);

      if (typeof calculatedScrollLeft === 'number' && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: calculatedScrollLeft,
          scrollTop: -1
        });
      }

      return {};
    }
  }, {
    key: "_getCalculatedScrollTop",
    value: function _getCalculatedScrollTop(nextProps, prevState) {
      var height = nextProps.height,
          rowCount = nextProps.rowCount,
          scrollToAlignment = nextProps.scrollToAlignment,
          scrollToRow = nextProps.scrollToRow,
          width = nextProps.width;
      var scrollTop = prevState.scrollTop,
          instanceProps = prevState.instanceProps;

      if (rowCount > 0) {
        var finalRow = rowCount - 1;
        var targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow);
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;
        return instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: height - scrollBarSize,
          currentOffset: scrollTop,
          targetIndex: targetIndex
        });
      }

      return 0;
    }
  }, {
    key: "_getScrollTopForScrollToRowStateUpdate",
    value: function _getScrollTopForScrollToRowStateUpdate(nextProps, prevState) {
      var scrollTop = prevState.scrollTop;

      var calculatedScrollTop = Grid._getCalculatedScrollTop(nextProps, prevState);

      if (typeof calculatedScrollTop === 'number' && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: -1,
          scrollTop: calculatedScrollTop
        });
      }

      return {};
    }
  }]);

  return Grid;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_class, "propTypes",  false ? 0 : {
  "aria-label": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().string).isRequired,
  "aria-readonly": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool),

  /**
   * Set the width of the inner scrollable container to 'auto'.
   * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
   */
  "autoContainerWidth": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool).isRequired,

  /**
   * Removes fixed height from the scrollingContainer so that the total height of rows can stretch the window.
   * Intended for use with WindowScroller
   */
  "autoHeight": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool).isRequired,

  /**
   * Removes fixed width from the scrollingContainer so that the total width of rows can stretch the window.
   * Intended for use with WindowScroller
   */
  "autoWidth": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool).isRequired,

  /** Responsible for rendering a cell given an row and column index.  */
  "cellRenderer": function cellRenderer() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRenderer === "function" ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRenderer.isRequired ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRenderer.isRequired : _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRenderer : prop_types__WEBPACK_IMPORTED_MODULE_19___default().shape(_types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRenderer).isRequired).apply(this, arguments);
  },

  /** Responsible for rendering a group of cells given their index ranges.  */
  "cellRangeRenderer": function cellRangeRenderer() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRangeRenderer === "function" ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRangeRenderer.isRequired ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRangeRenderer.isRequired : _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRangeRenderer : prop_types__WEBPACK_IMPORTED_MODULE_19___default().shape(_types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRangeRenderer).isRequired).apply(this, arguments);
  },

  /** Optional custom CSS class name to attach to root Grid element.  */
  "className": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().string),

  /** Number of columns in grid.  */
  "columnCount": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** Either a fixed column width (number) or a function that returns the width of a column given its index.  */
  "columnWidth": function columnWidth() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize === "function" ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize.isRequired ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize.isRequired : _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize : prop_types__WEBPACK_IMPORTED_MODULE_19___default().shape(_types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize).isRequired).apply(this, arguments);
  },

  /** Unfiltered props for the Grid container. */
  "containerProps": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object),

  /** ARIA role for the cell-container.  */
  "containerRole": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().string).isRequired,

  /** Optional inline style applied to inner cell-container */
  "containerStyle": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object).isRequired,

  /**
   * If CellMeasurer is used to measure this Grid's children, this should be a pointer to its CellMeasurerCache.
   * A shared CellMeasurerCache reference enables Grid and CellMeasurer to share measurement data.
   */
  "deferredMeasurementCache": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object),

  /**
   * Used to estimate the total width of a Grid before all of its columns have actually been measured.
   * The estimated total width is adjusted as columns are rendered.
   */
  "estimatedColumnSize": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /**
   * Used to estimate the total height of a Grid before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  "estimatedRowSize": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** Exposed for testing purposes only.  */
  "getScrollbarSize": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().func).isRequired,

  /** Height of Grid; this property determines the number of visible (vs virtualized) rows.  */
  "height": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** Optional custom id to attach to root Grid element.  */
  "id": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().string),

  /**
   * Override internal is-scrolling state tracking.
   * This property is primarily intended for use with the WindowScroller component.
   */
  "isScrolling": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool),

  /**
   * Opt-out of isScrolling param passed to cellRangeRenderer.
   * To avoid the extra render when scroll stops.
   */
  "isScrollingOptOut": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool).isRequired,

  /** Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.  */
  "noContentRenderer": function noContentRenderer() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_NoContentRenderer === "function" ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_NoContentRenderer.isRequired ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_NoContentRenderer.isRequired : _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_NoContentRenderer : prop_types__WEBPACK_IMPORTED_MODULE_19___default().shape(_types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_NoContentRenderer).isRequired).apply(this, arguments);
  },

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   */
  "onScroll": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().func).isRequired,

  /**
   * Called whenever a horizontal or vertical scrollbar is added or removed.
   * This prop is not intended for end-user use;
   * It is used by MultiGrid to support fixed-row/fixed-column scroll syncing.
   */
  "onScrollbarPresenceChange": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().func).isRequired,

  /** Callback invoked with information about the section of the Grid that was just rendered.  */
  "onSectionRendered": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().func).isRequired,

  /**
   * Number of columns to render before/after the visible section of the grid.
   * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */
  "overscanColumnCount": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /**
   * Calculates the number of cells to overscan before and after a specified range.
   * This function ensures that overscanning doesn't exceed the available cells.
   */
  "overscanIndicesGetter": function overscanIndicesGetter() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_OverscanIndicesGetter === "function" ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_OverscanIndicesGetter.isRequired ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_OverscanIndicesGetter.isRequired : _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_OverscanIndicesGetter : prop_types__WEBPACK_IMPORTED_MODULE_19___default().shape(_types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_OverscanIndicesGetter).isRequired).apply(this, arguments);
  },

  /**
   * Number of rows to render above/below the visible section of the grid.
   * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */
  "overscanRowCount": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** ARIA role for the grid element.  */
  "role": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().string).isRequired,

  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * Should implement the following interface: ({ index: number }): number
   */
  "rowHeight": function rowHeight() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize === "function" ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize.isRequired ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize.isRequired : _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize : prop_types__WEBPACK_IMPORTED_MODULE_19___default().shape(_types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize).isRequired).apply(this, arguments);
  },

  /** Number of rows in grid.  */
  "rowCount": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** Wait this amount of time after the last scroll event before resetting Grid `pointer-events`. */
  "scrollingResetTimeInterval": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** Horizontal offset. */
  "scrollLeft": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number),

  /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */
  "scrollToAlignment": function scrollToAlignment() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_Alignment === "function" ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_Alignment.isRequired ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_Alignment.isRequired : _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_Alignment : prop_types__WEBPACK_IMPORTED_MODULE_19___default().shape(_types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_Alignment).isRequired).apply(this, arguments);
  },

  /** Column index to ensure visible (by forcefully scrolling if necessary) */
  "scrollToColumn": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** Vertical offset. */
  "scrollTop": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number),

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  "scrollToRow": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** Optional inline style */
  "style": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object).isRequired,

  /** Tab index for focus */
  "tabIndex": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number),

  /** Width of Grid; this property determines the number of visible (vs virtualized) columns.  */
  "width": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired
}), _temp);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Grid, "defaultProps", {
  'aria-label': 'grid',
  'aria-readonly': true,
  autoContainerWidth: false,
  autoHeight: false,
  autoWidth: false,
  cellRangeRenderer: _defaultCellRangeRenderer__WEBPACK_IMPORTED_MODULE_15__["default"],
  containerRole: 'rowgroup',
  containerStyle: {},
  estimatedColumnSize: 100,
  estimatedRowSize: 30,
  getScrollbarSize: dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_16__["default"],
  noContentRenderer: renderNull,
  onScroll: function onScroll() {},
  onScrollbarPresenceChange: function onScrollbarPresenceChange() {},
  onSectionRendered: function onSectionRendered() {},
  overscanColumnCount: 0,
  overscanIndicesGetter: _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__["default"],
  overscanRowCount: 10,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  scrollToAlignment: 'auto',
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  tabIndex: 0,
  isScrollingOptOut: false
});

(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_17__.polyfill)(Grid);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);
















/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/accessibilityOverscanIndicesGetter.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/accessibilityOverscanIndicesGetter.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SCROLL_DIRECTION_BACKWARD: () => (/* binding */ SCROLL_DIRECTION_BACKWARD),
/* harmony export */   SCROLL_DIRECTION_FORWARD: () => (/* binding */ SCROLL_DIRECTION_FORWARD),
/* harmony export */   SCROLL_DIRECTION_HORIZONTAL: () => (/* binding */ SCROLL_DIRECTION_HORIZONTAL),
/* harmony export */   SCROLL_DIRECTION_VERTICAL: () => (/* binding */ SCROLL_DIRECTION_VERTICAL),
/* harmony export */   "default": () => (/* binding */ defaultOverscanIndicesGetter)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");
var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = 1;
var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = 'vertical';
/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;
  // Make sure we render at least 1 cell extra before and after (except near boundaries)
  // This is necessary in order to support keyboard navigation (TAB/SHIFT+TAB) in some cases
  // For more info see issues #625
  overscanCellsCount = Math.max(1, overscanCellsCount);

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex - 1),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
    };
  }
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/defaultCellRangeRenderer.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/defaultCellRangeRenderer.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultCellRangeRenderer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");
/**
 * Default implementation of cellRangeRenderer used by Grid.
 * This renderer supports cell-caching while the user is scrolling.
 */
function defaultCellRangeRenderer(_ref) {
  var cellCache = _ref.cellCache,
      cellRenderer = _ref.cellRenderer,
      columnSizeAndPositionManager = _ref.columnSizeAndPositionManager,
      columnStartIndex = _ref.columnStartIndex,
      columnStopIndex = _ref.columnStopIndex,
      deferredMeasurementCache = _ref.deferredMeasurementCache,
      horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment,
      isScrolling = _ref.isScrolling,
      isScrollingOptOut = _ref.isScrollingOptOut,
      parent = _ref.parent,
      rowSizeAndPositionManager = _ref.rowSizeAndPositionManager,
      rowStartIndex = _ref.rowStartIndex,
      rowStopIndex = _ref.rowStopIndex,
      styleCache = _ref.styleCache,
      verticalOffsetAdjustment = _ref.verticalOffsetAdjustment,
      visibleColumnIndices = _ref.visibleColumnIndices,
      visibleRowIndices = _ref.visibleRowIndices;
  var renderedCells = []; // Browsers have native size limits for elements (eg Chrome 33M pixels, IE 1.5M pixes).
  // User cannot scroll beyond these size limitations.
  // In order to work around this, ScalingCellSizeAndPositionManager compresses offsets.
  // We should never cache styles for compressed offsets though as this can lead to bugs.
  // See issue #576 for more.

  var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();
  var canCacheStyle = !isScrolling && !areOffsetsAdjusted;

  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);

    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
      var key = "".concat(rowIndex, "-").concat(columnIndex);
      var style = void 0; // Cache style objects so shallow-compare doesn't re-render unnecessarily.

      if (canCacheStyle && styleCache[key]) {
        style = styleCache[key];
      } else {
        // In deferred mode, cells will be initially rendered before we know their size.
        // Don't interfere with CellMeasurer's measurements by setting an invalid size.
        if (deferredMeasurementCache && !deferredMeasurementCache.has(rowIndex, columnIndex)) {
          // Position not-yet-measured cells at top/left 0,0,
          // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
          // Positioning them further to the right/bottom influences their measured size.
          style = {
            height: 'auto',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 'auto'
          };
        } else {
          style = {
            height: rowDatum.size,
            left: columnDatum.offset + horizontalOffsetAdjustment,
            position: 'absolute',
            top: rowDatum.offset + verticalOffsetAdjustment,
            width: columnDatum.size
          };
          styleCache[key] = style;
        }
      }

      var cellRendererParams = {
        columnIndex: columnIndex,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent,
        rowIndex: rowIndex,
        style: style
      };
      var renderedCell = void 0; // Avoid re-creating cells while scrolling.
      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
      // If a scroll is in progress- cache and reuse cells.
      // This cache will be thrown away once scrolling completes.
      // However if we are scaling scroll positions and sizes, we should also avoid caching.
      // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
      // For more info refer to issue #395
      //
      // If isScrollingOptOut is specified, we always cache cells.
      // For more info refer to issue #1028

      if ((isScrollingOptOut || isScrolling) && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
        if (!cellCache[key]) {
          cellCache[key] = cellRenderer(cellRendererParams);
        }

        renderedCell = cellCache[key]; // If the user is no longer scrolling, don't cache cells.
        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
      } else {
        renderedCell = cellRenderer(cellRendererParams);
      }

      if (renderedCell == null || renderedCell === false) {
        continue;
      }

      if (true) {
        warnAboutMissingStyle(parent, renderedCell);
      }

      renderedCells.push(renderedCell);
    }
  }

  return renderedCells;
}

function warnAboutMissingStyle(parent, renderedCell) {
  if (true) {
    if (renderedCell) {
      // If the direct child is a CellMeasurer, then we should check its child
      // See issue #611
      if (renderedCell.type && renderedCell.type.__internalCellMeasurerFlag) {
        renderedCell = renderedCell.props.children;
      }

      if (renderedCell && renderedCell.props && renderedCell.props.style === undefined && parent.__warnedAboutMissingStyle !== true) {
        parent.__warnedAboutMissingStyle = true;
        console.warn('Rendered cell should include style property for positioning.');
      }
    }
  }
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/defaultOverscanIndicesGetter.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/defaultOverscanIndicesGetter.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SCROLL_DIRECTION_BACKWARD: () => (/* binding */ SCROLL_DIRECTION_BACKWARD),
/* harmony export */   SCROLL_DIRECTION_FORWARD: () => (/* binding */ SCROLL_DIRECTION_FORWARD),
/* harmony export */   SCROLL_DIRECTION_HORIZONTAL: () => (/* binding */ SCROLL_DIRECTION_HORIZONTAL),
/* harmony export */   SCROLL_DIRECTION_VERTICAL: () => (/* binding */ SCROLL_DIRECTION_VERTICAL),
/* harmony export */   "default": () => (/* binding */ defaultOverscanIndicesGetter)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");
var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = 1;
var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = 'vertical';
/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex)
    };
  }
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Grid: () => (/* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   accessibilityOverscanIndicesGetter: () => (/* reexport safe */ _accessibilityOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   bpfrpt_proptype_Alignment: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_Alignment),
/* harmony export */   bpfrpt_proptype_CellPosition: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_CellPosition),
/* harmony export */   bpfrpt_proptype_CellRendererParams: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_CellRendererParams),
/* harmony export */   bpfrpt_proptype_CellSize: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_CellSize),
/* harmony export */   bpfrpt_proptype_NoContentRenderer: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_NoContentRenderer),
/* harmony export */   bpfrpt_proptype_OverscanIndicesGetter: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_OverscanIndicesGetter),
/* harmony export */   bpfrpt_proptype_RenderedSection: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_RenderedSection),
/* harmony export */   bpfrpt_proptype_Scroll: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_Scroll),
/* harmony export */   "default": () => (/* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   defaultCellRangeRenderer: () => (/* reexport safe */ _defaultCellRangeRenderer__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   defaultOverscanIndicesGetter: () => (/* reexport safe */ _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ "./node_modules/react-virtualized/dist/es/Grid/Grid.js");
/* harmony import */ var _accessibilityOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accessibilityOverscanIndicesGetter */ "./node_modules/react-virtualized/dist/es/Grid/accessibilityOverscanIndicesGetter.js");
/* harmony import */ var _defaultCellRangeRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultCellRangeRenderer */ "./node_modules/react-virtualized/dist/es/Grid/defaultCellRangeRenderer.js");
/* harmony import */ var _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultOverscanIndicesGetter */ "./node_modules/react-virtualized/dist/es/Grid/defaultOverscanIndicesGetter.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");






















/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/types.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/types.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bpfrpt_proptype_Alignment: () => (/* binding */ bpfrpt_proptype_Alignment),
/* harmony export */   bpfrpt_proptype_CellCache: () => (/* binding */ bpfrpt_proptype_CellCache),
/* harmony export */   bpfrpt_proptype_CellPosition: () => (/* binding */ bpfrpt_proptype_CellPosition),
/* harmony export */   bpfrpt_proptype_CellRangeRenderer: () => (/* binding */ bpfrpt_proptype_CellRangeRenderer),
/* harmony export */   bpfrpt_proptype_CellRangeRendererParams: () => (/* binding */ bpfrpt_proptype_CellRangeRendererParams),
/* harmony export */   bpfrpt_proptype_CellRenderer: () => (/* binding */ bpfrpt_proptype_CellRenderer),
/* harmony export */   bpfrpt_proptype_CellRendererParams: () => (/* binding */ bpfrpt_proptype_CellRendererParams),
/* harmony export */   bpfrpt_proptype_CellSize: () => (/* binding */ bpfrpt_proptype_CellSize),
/* harmony export */   bpfrpt_proptype_CellSizeGetter: () => (/* binding */ bpfrpt_proptype_CellSizeGetter),
/* harmony export */   bpfrpt_proptype_NoContentRenderer: () => (/* binding */ bpfrpt_proptype_NoContentRenderer),
/* harmony export */   bpfrpt_proptype_OverscanIndices: () => (/* binding */ bpfrpt_proptype_OverscanIndices),
/* harmony export */   bpfrpt_proptype_OverscanIndicesGetter: () => (/* binding */ bpfrpt_proptype_OverscanIndicesGetter),
/* harmony export */   bpfrpt_proptype_OverscanIndicesGetterParams: () => (/* binding */ bpfrpt_proptype_OverscanIndicesGetterParams),
/* harmony export */   bpfrpt_proptype_RenderedSection: () => (/* binding */ bpfrpt_proptype_RenderedSection),
/* harmony export */   bpfrpt_proptype_Scroll: () => (/* binding */ bpfrpt_proptype_Scroll),
/* harmony export */   bpfrpt_proptype_ScrollbarPresenceChange: () => (/* binding */ bpfrpt_proptype_ScrollbarPresenceChange),
/* harmony export */   bpfrpt_proptype_StyleCache: () => (/* binding */ bpfrpt_proptype_StyleCache),
/* harmony export */   bpfrpt_proptype_VisibleCellRange: () => (/* binding */ bpfrpt_proptype_VisibleCellRange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ScalingCellSizeAndPositionManager */ "./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);


var bpfrpt_proptype_CellPosition =  false ? 0 : {
  "columnIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "rowIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
};
var bpfrpt_proptype_CellRendererParams =  false ? 0 : {
  "columnIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "isScrolling": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  "isVisible": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  "key": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  "parent": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  "rowIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "style": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired
};
var bpfrpt_proptype_CellRenderer =  false ? 0 : (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func);
var bpfrpt_proptype_CellCache =  false ? 0 : prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired);
var bpfrpt_proptype_StyleCache =  false ? 0 : prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired);
var bpfrpt_proptype_CellRangeRendererParams =  false ? 0 : {
  "cellCache": prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired).isRequired,
  "cellRenderer": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  "columnSizeAndPositionManager": function columnSizeAndPositionManager() {
    return (typeof _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_1__["default"] === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(_utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_1__["default"]).isRequired : (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any).isRequired).apply(this, arguments);
  },
  "columnStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "columnStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "deferredMeasurementCache": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  "horizontalOffsetAdjustment": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "isScrolling": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  "isScrollingOptOut": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  "parent": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  "rowSizeAndPositionManager": function rowSizeAndPositionManager() {
    return (typeof _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_1__["default"] === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(_utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_1__["default"]).isRequired : (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any).isRequired).apply(this, arguments);
  },
  "rowStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "rowStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "scrollLeft": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "scrollTop": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "styleCache": prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired).isRequired,
  "verticalOffsetAdjustment": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "visibleColumnIndices": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  "visibleRowIndices": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired
};
var bpfrpt_proptype_CellRangeRenderer =  false ? 0 : (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func);
var bpfrpt_proptype_CellSizeGetter =  false ? 0 : (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func);
var bpfrpt_proptype_CellSize =  false ? 0 : prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)]);
var bpfrpt_proptype_NoContentRenderer =  false ? 0 : (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func);
var bpfrpt_proptype_Scroll =  false ? 0 : {
  "clientHeight": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "clientWidth": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "scrollHeight": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "scrollLeft": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "scrollTop": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "scrollWidth": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
};
var bpfrpt_proptype_ScrollbarPresenceChange =  false ? 0 : {
  "horizontal": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  "vertical": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  "size": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
};
var bpfrpt_proptype_RenderedSection =  false ? 0 : {
  "columnOverscanStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "columnOverscanStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "columnStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "columnStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "rowOverscanStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "rowOverscanStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "rowStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "rowStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
};
var bpfrpt_proptype_OverscanIndicesGetterParams =  false ? 0 : {
  // One of SCROLL_DIRECTION_HORIZONTAL or SCROLL_DIRECTION_VERTICAL
  "direction": prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["horizontal", "vertical"]).isRequired,
  // One of SCROLL_DIRECTION_BACKWARD or SCROLL_DIRECTION_FORWARD
  "scrollDirection": prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([-1, 1]).isRequired,
  // Number of rows or columns in the current axis
  "cellCount": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  // Maximum number of cells to over-render in either direction
  "overscanCellsCount": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  // Begin of range of visible cells
  "startIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  // End of range of visible cells
  "stopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
};
var bpfrpt_proptype_OverscanIndices =  false ? 0 : {
  "overscanStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "overscanStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
};
var bpfrpt_proptype_OverscanIndicesGetter =  false ? 0 : (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func);
var bpfrpt_proptype_Alignment =  false ? 0 : prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["auto", "end", "start", "center"]);
var bpfrpt_proptype_VisibleCellRange =  false ? 0 : {
  "start": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  "stop": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
};




















/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/utils/CellSizeAndPositionManager.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/utils/CellSizeAndPositionManager.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CellSizeAndPositionManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");




/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */
var CellSizeAndPositionManager =
/*#__PURE__*/
function () {
  // Cache of size and position data for cells, mapped by cell index.
  // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
  // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
  // Used in deferred mode to track which cells have been queued for measurement.
  function CellSizeAndPositionManager(_ref) {
    var cellCount = _ref.cellCount,
        cellSizeGetter = _ref.cellSizeGetter,
        estimatedCellSize = _ref.estimatedCellSize;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CellSizeAndPositionManager);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_cellSizeAndPositionData", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_lastMeasuredIndex", -1);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_lastBatchedIndex", -1);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_cellCount", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_cellSizeGetter", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_estimatedCellSize", void 0);

    this._cellSizeGetter = cellSizeGetter;
    this._cellCount = cellCount;
    this._estimatedCellSize = estimatedCellSize;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CellSizeAndPositionManager, [{
    key: "areOffsetsAdjusted",
    value: function areOffsetsAdjusted() {
      return false;
    }
  }, {
    key: "configure",
    value: function configure(_ref2) {
      var cellCount = _ref2.cellCount,
          estimatedCellSize = _ref2.estimatedCellSize,
          cellSizeGetter = _ref2.cellSizeGetter;
      this._cellCount = cellCount;
      this._estimatedCellSize = estimatedCellSize;
      this._cellSizeGetter = cellSizeGetter;
    }
  }, {
    key: "getCellCount",
    value: function getCellCount() {
      return this._cellCount;
    }
  }, {
    key: "getEstimatedCellSize",
    value: function getEstimatedCellSize() {
      return this._estimatedCellSize;
    }
  }, {
    key: "getLastMeasuredIndex",
    value: function getLastMeasuredIndex() {
      return this._lastMeasuredIndex;
    }
  }, {
    key: "getOffsetAdjustment",
    value: function getOffsetAdjustment() {
      return 0;
    }
    /**
     * This method returns the size and position for the cell at the specified index.
     * It just-in-time calculates (or used cached values) for cells leading up to the index.
     */

  }, {
    key: "getSizeAndPositionOfCell",
    value: function getSizeAndPositionOfCell(index) {
      if (index < 0 || index >= this._cellCount) {
        throw Error("Requested index ".concat(index, " is outside of range 0..").concat(this._cellCount));
      }

      if (index > this._lastMeasuredIndex) {
        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
        var offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;

        for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
          var size = this._cellSizeGetter({
            index: i
          }); // undefined or NaN probably means a logic error in the size getter.
          // null means we're using CellMeasurer and haven't yet measured a given index.


          if (size === undefined || isNaN(size)) {
            throw Error("Invalid size returned for cell ".concat(i, " of value ").concat(size));
          } else if (size === null) {
            this._cellSizeAndPositionData[i] = {
              offset: offset,
              size: 0
            };
            this._lastBatchedIndex = index;
          } else {
            this._cellSizeAndPositionData[i] = {
              offset: offset,
              size: size
            };
            offset += size;
            this._lastMeasuredIndex = index;
          }
        }
      }

      return this._cellSizeAndPositionData[index];
    }
  }, {
    key: "getSizeAndPositionOfLastMeasuredCell",
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
        offset: 0,
        size: 0
      };
    }
    /**
     * Total size of all cells being measured.
     * This value will be completely estimated initially.
     * As cells are measured, the estimate will be updated.
     */

  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var totalSizeOfMeasuredCells = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
      var numUnmeasuredCells = this._cellCount - this._lastMeasuredIndex - 1;
      var totalSizeOfUnmeasuredCells = numUnmeasuredCells * this._estimatedCellSize;
      return totalSizeOfMeasuredCells + totalSizeOfUnmeasuredCells;
    }
    /**
     * Determines a new offset that ensures a certain cell is visible, given the current offset.
     * If the cell is already visible then the current offset will be returned.
     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
     *
     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @param currentOffset Container's current (x or y) offset
     * @param totalSize Total size (width or height) of all cells
     * @return Offset to use to ensure the specified cell is visible
     */

  }, {
    key: "getUpdatedOffsetForIndex",
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === void 0 ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;

      if (containerSize <= 0) {
        return 0;
      }

      var datum = this.getSizeAndPositionOfCell(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;
      var idealOffset;

      switch (align) {
        case 'start':
          idealOffset = maxOffset;
          break;

        case 'end':
          idealOffset = minOffset;
          break;

        case 'center':
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;

        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
          break;
      }

      var totalSize = this.getTotalSize();
      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: "getVisibleCellRange",
    value: function getVisibleCellRange(params) {
      var containerSize = params.containerSize,
          offset = params.offset;
      var totalSize = this.getTotalSize();

      if (totalSize === 0) {
        return {};
      }

      var maxOffset = offset + containerSize;

      var start = this._findNearestCell(offset);

      var datum = this.getSizeAndPositionOfCell(start);
      offset = datum.offset + datum.size;
      var stop = start;

      while (offset < maxOffset && stop < this._cellCount - 1) {
        stop++;
        offset += this.getSizeAndPositionOfCell(stop).size;
      }

      return {
        start: start,
        stop: stop
      };
    }
    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */

  }, {
    key: "resetCell",
    value: function resetCell(index) {
      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
    }
  }, {
    key: "_binarySearch",
    value: function _binarySearch(high, low, offset) {
      while (low <= high) {
        var middle = low + Math.floor((high - low) / 2);
        var currentOffset = this.getSizeAndPositionOfCell(middle).offset;

        if (currentOffset === offset) {
          return middle;
        } else if (currentOffset < offset) {
          low = middle + 1;
        } else if (currentOffset > offset) {
          high = middle - 1;
        }
      }

      if (low > 0) {
        return low - 1;
      } else {
        return 0;
      }
    }
  }, {
    key: "_exponentialSearch",
    value: function _exponentialSearch(index, offset) {
      var interval = 1;

      while (index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset) {
        index += interval;
        interval *= 2;
      }

      return this._binarySearch(Math.min(index, this._cellCount - 1), Math.floor(index / 2), offset);
    }
    /**
     * Searches for the cell (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest cell index will be returned.
     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
     */

  }, {
    key: "_findNearestCell",
    value: function _findNearestCell(offset) {
      if (isNaN(offset)) {
        throw Error("Invalid offset ".concat(offset, " specified"));
      } // Our search algorithms find the nearest match at or below the specified offset.
      // So make sure the offset is at least 0 or no match will be found.


      offset = Math.max(0, offset);
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);

      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
        // If we've already measured cells within this range just use a binary search as it's faster.
        return this._binarySearch(lastMeasuredIndex, 0, offset);
      } else {
        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
        // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
        // The overall complexity for this approach is O(log n).
        return this._exponentialSearch(lastMeasuredIndex, offset);
      }
    }
  }]);

  return CellSizeAndPositionManager;
}();






/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScalingCellSizeAndPositionManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _CellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CellSizeAndPositionManager */ "./node_modules/react-virtualized/dist/es/Grid/utils/CellSizeAndPositionManager.js");
/* harmony import */ var _maxElementSize_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maxElementSize.js */ "./node_modules/react-virtualized/dist/es/Grid/utils/maxElementSize.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");







/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */
var ScalingCellSizeAndPositionManager =
/*#__PURE__*/
function () {
  function ScalingCellSizeAndPositionManager(_ref) {
    var _ref$maxScrollSize = _ref.maxScrollSize,
        maxScrollSize = _ref$maxScrollSize === void 0 ? (0,_maxElementSize_js__WEBPACK_IMPORTED_MODULE_5__.getMaxElementSize)() : _ref$maxScrollSize,
        params = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["maxScrollSize"]);

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ScalingCellSizeAndPositionManager);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "_cellSizeAndPositionManager", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "_maxScrollSize", void 0);

    // Favor composition over inheritance to simplify IE10 support
    this._cellSizeAndPositionManager = new _CellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_4__["default"](params);
    this._maxScrollSize = maxScrollSize;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ScalingCellSizeAndPositionManager, [{
    key: "areOffsetsAdjusted",
    value: function areOffsetsAdjusted() {
      return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
    }
  }, {
    key: "configure",
    value: function configure(params) {
      this._cellSizeAndPositionManager.configure(params);
    }
  }, {
    key: "getCellCount",
    value: function getCellCount() {
      return this._cellSizeAndPositionManager.getCellCount();
    }
  }, {
    key: "getEstimatedCellSize",
    value: function getEstimatedCellSize() {
      return this._cellSizeAndPositionManager.getEstimatedCellSize();
    }
  }, {
    key: "getLastMeasuredIndex",
    value: function getLastMeasuredIndex() {
      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
    }
    /**
     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
     * The offset passed to this function is scaled (safe) as well.
     */

  }, {
    key: "getOffsetAdjustment",
    value: function getOffsetAdjustment(_ref2) {
      var containerSize = _ref2.containerSize,
          offset = _ref2.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();

      var safeTotalSize = this.getTotalSize();

      var offsetPercentage = this._getOffsetPercentage({
        containerSize: containerSize,
        offset: offset,
        totalSize: safeTotalSize
      });

      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
    }
  }, {
    key: "getSizeAndPositionOfCell",
    value: function getSizeAndPositionOfCell(index) {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
    }
  }, {
    key: "getSizeAndPositionOfLastMeasuredCell",
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
    }
    /** See CellSizeAndPositionManager#getTotalSize */

  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
    }
    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */

  }, {
    key: "getUpdatedOffsetForIndex",
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === void 0 ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;
      currentOffset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: currentOffset
      });

      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
        align: align,
        containerSize: containerSize,
        currentOffset: currentOffset,
        targetIndex: targetIndex
      });

      return this._offsetToSafeOffset({
        containerSize: containerSize,
        offset: offset
      });
    }
    /** See CellSizeAndPositionManager#getVisibleCellRange */

  }, {
    key: "getVisibleCellRange",
    value: function getVisibleCellRange(_ref4) {
      var containerSize = _ref4.containerSize,
          offset = _ref4.offset;
      offset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: offset
      });
      return this._cellSizeAndPositionManager.getVisibleCellRange({
        containerSize: containerSize,
        offset: offset
      });
    }
  }, {
    key: "resetCell",
    value: function resetCell(index) {
      this._cellSizeAndPositionManager.resetCell(index);
    }
  }, {
    key: "_getOffsetPercentage",
    value: function _getOffsetPercentage(_ref5) {
      var containerSize = _ref5.containerSize,
          offset = _ref5.offset,
          totalSize = _ref5.totalSize;
      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
    }
  }, {
    key: "_offsetToSafeOffset",
    value: function _offsetToSafeOffset(_ref6) {
      var containerSize = _ref6.containerSize,
          offset = _ref6.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();

      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: totalSize
        });

        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
      }
    }
  }, {
    key: "_safeOffsetToOffset",
    value: function _safeOffsetToOffset(_ref7) {
      var containerSize = _ref7.containerSize,
          offset = _ref7.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();

      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: safeTotalSize
        });

        return Math.round(offsetPercentage * (totalSize - containerSize));
      }
    }
  }]);

  return ScalingCellSizeAndPositionManager;
}();






/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/utils/calculateSizeAndPositionDataAndUpdateScrollOffset.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/utils/calculateSizeAndPositionDataAndUpdateScrollOffset.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calculateSizeAndPositionDataAndUpdateScrollOffset)
/* harmony export */ });
/**
 * Helper method that determines when to recalculate row or column metadata.
 */
function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
  var cellCount = _ref.cellCount,
      cellSize = _ref.cellSize,
      computeMetadataCallback = _ref.computeMetadataCallback,
      computeMetadataCallbackProps = _ref.computeMetadataCallbackProps,
      nextCellsCount = _ref.nextCellsCount,
      nextCellSize = _ref.nextCellSize,
      nextScrollToIndex = _ref.nextScrollToIndex,
      scrollToIndex = _ref.scrollToIndex,
      updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;

  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
  // In that event users should use the manual recompute methods to inform of changes.
  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
    computeMetadataCallback(computeMetadataCallbackProps); // Updated cell metadata may have hidden the previous scrolled-to item.
    // In this case we should also update the scrollTop to ensure it stays visible.

    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
      updateScrollOffsetForScrollToIndex();
    }
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/utils/maxElementSize.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/utils/maxElementSize.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMaxElementSize: () => (/* binding */ getMaxElementSize)
/* harmony export */ });
var DEFAULT_MAX_ELEMENT_SIZE = 1500000;
var CHROME_MAX_ELEMENT_SIZE = 1.67771e7;

var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};

var isChrome = function isChrome() {
  return !!window.chrome;
};

var getMaxElementSize = function getMaxElementSize() {
  if (isBrowser()) {
    if (isChrome()) {
      return CHROME_MAX_ELEMENT_SIZE;
    }
  }

  return DEFAULT_MAX_ELEMENT_SIZE;
};

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/utils/updateScrollIndexHelper.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/utils/updateScrollIndexHelper.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateScrollIndexHelper)
/* harmony export */ });
/* harmony import */ var _ScalingCellSizeAndPositionManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScalingCellSizeAndPositionManager.js */ "./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");

/**
 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
 */

function updateScrollIndexHelper(_ref) {
  var cellSize = _ref.cellSize,
      cellSizeAndPositionManager = _ref.cellSizeAndPositionManager,
      previousCellsCount = _ref.previousCellsCount,
      previousCellSize = _ref.previousCellSize,
      previousScrollToAlignment = _ref.previousScrollToAlignment,
      previousScrollToIndex = _ref.previousScrollToIndex,
      previousSize = _ref.previousSize,
      scrollOffset = _ref.scrollOffset,
      scrollToAlignment = _ref.scrollToAlignment,
      scrollToIndex = _ref.scrollToIndex,
      size = _ref.size,
      sizeJustIncreasedFromZero = _ref.sizeJustIncreasedFromZero,
      updateScrollIndexCallback = _ref.updateScrollIndexCallback;
  var cellCount = cellSizeAndPositionManager.getCellCount();
  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
  var sizeHasChanged = size !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize; // If we have a new scroll target OR if height/row-height has changed,
  // We should ensure that the scroll target is visible.

  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
    updateScrollIndexCallback(scrollToIndex); // If we don't have a selected item but list size or number of children have decreased,
    // Make sure we aren't scrolled too far past the current content.
  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
    // We need to ensure that the current scroll offset is still within the collection's range.
    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
    // Just check to make sure we're still okay.
    // Only adjust the scroll position if we've scrolled below the last set of rows.
    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
      updateScrollIndexCallback(cellCount - 1);
    }
  }
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/InfiniteLoader/InfiniteLoader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/InfiniteLoader/InfiniteLoader.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfiniteLoader),
/* harmony export */   forceUpdateReactVirtualizedComponent: () => (/* binding */ forceUpdateReactVirtualizedComponent),
/* harmony export */   isRangeVisible: () => (/* binding */ isRangeVisible),
/* harmony export */   scanForUnloadedRanges: () => (/* binding */ scanForUnloadedRanges)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/createCallbackMemoizer */ "./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js");











/**
 * Higher-order component that manages lazy-loading for "infinite" data.
 * This component decorates a virtual component and just-in-time prefetches rows as a user scrolls.
 * It is intended as a convenience component; fork it if you'd like finer-grained control over data-loading.
 */

var InfiniteLoader =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(InfiniteLoader, _React$PureComponent);

  function InfiniteLoader(props, context) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InfiniteLoader);

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(InfiniteLoader).call(this, props, context));
    _this._loadMoreRowsMemoizer = (0,_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_9__["default"])();
    _this._onRowsRendered = _this._onRowsRendered.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this._registerChild = _this._registerChild.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(InfiniteLoader, [{
    key: "resetLoadMoreRowsCache",
    value: function resetLoadMoreRowsCache(autoReload) {
      this._loadMoreRowsMemoizer = (0,_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_9__["default"])();

      if (autoReload) {
        this._doStuff(this._lastRenderedStartIndex, this._lastRenderedStopIndex);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        onRowsRendered: this._onRowsRendered,
        registerChild: this._registerChild
      });
    }
  }, {
    key: "_loadUnloadedRanges",
    value: function _loadUnloadedRanges(unloadedRanges) {
      var _this2 = this;

      var loadMoreRows = this.props.loadMoreRows;
      unloadedRanges.forEach(function (unloadedRange) {
        var promise = loadMoreRows(unloadedRange);

        if (promise) {
          promise.then(function () {
            // Refresh the visible rows if any of them have just been loaded.
            // Otherwise they will remain in their unloaded visual state.
            if (isRangeVisible({
              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
              startIndex: unloadedRange.startIndex,
              stopIndex: unloadedRange.stopIndex
            })) {
              if (_this2._registeredChild) {
                forceUpdateReactVirtualizedComponent(_this2._registeredChild, _this2._lastRenderedStartIndex);
              }
            }
          });
        }
      });
    }
  }, {
    key: "_onRowsRendered",
    value: function _onRowsRendered(_ref) {
      var startIndex = _ref.startIndex,
          stopIndex = _ref.stopIndex;
      this._lastRenderedStartIndex = startIndex;
      this._lastRenderedStopIndex = stopIndex;

      this._doStuff(startIndex, stopIndex);
    }
  }, {
    key: "_doStuff",
    value: function _doStuff(startIndex, stopIndex) {
      var _ref2,
          _this3 = this;

      var _this$props = this.props,
          isRowLoaded = _this$props.isRowLoaded,
          minimumBatchSize = _this$props.minimumBatchSize,
          rowCount = _this$props.rowCount,
          threshold = _this$props.threshold;
      var unloadedRanges = scanForUnloadedRanges({
        isRowLoaded: isRowLoaded,
        minimumBatchSize: minimumBatchSize,
        rowCount: rowCount,
        startIndex: Math.max(0, startIndex - threshold),
        stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
      }); // For memoize comparison

      var squashedUnloadedRanges = (_ref2 = []).concat.apply(_ref2, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(unloadedRanges.map(function (_ref3) {
        var startIndex = _ref3.startIndex,
            stopIndex = _ref3.stopIndex;
        return [startIndex, stopIndex];
      })));

      this._loadMoreRowsMemoizer({
        callback: function callback() {
          _this3._loadUnloadedRanges(unloadedRanges);
        },
        indices: {
          squashedUnloadedRanges: squashedUnloadedRanges
        }
      });
    }
  }, {
    key: "_registerChild",
    value: function _registerChild(registeredChild) {
      this._registeredChild = registeredChild;
    }
  }]);

  return InfiniteLoader;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent);
/**
 * Determines if the specified start/stop range is visible based on the most recently rendered range.
 */


(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(InfiniteLoader, "defaultProps", {
  minimumBatchSize: 10,
  rowCount: 0,
  threshold: 15
});


InfiniteLoader.propTypes =  true ? {
  /**
   * Function responsible for rendering a virtualized component.
   * This function should implement the following signature:
   * ({ onRowsRendered, registerChild }) => PropTypes.element
   *
   * The specified :onRowsRendered function should be passed through to the child's :onRowsRendered property.
   * The :registerChild callback should be set as the virtualized component's :ref.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func).isRequired,

  /**
   * Function responsible for tracking the loaded state of each row.
   * It should implement the following signature: ({ index: number }): boolean
   */
  isRowLoaded: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func).isRequired,

  /**
   * Callback to be invoked when more rows must be loaded.
   * It should implement the following signature: ({ startIndex, stopIndex }): Promise
   * The returned Promise should be resolved once row data has finished loading.
   * It will be used to determine when to refresh the list with the newly-loaded data.
   * This callback may be called multiple times in reaction to a single scroll event.
   */
  loadMoreRows: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func).isRequired,

  /**
   * Minimum number of rows to be loaded at a time.
   * This property can be used to batch requests to reduce HTTP requests.
   */
  minimumBatchSize: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number).isRequired,

  /**
   * Number of rows in list; can be arbitrary high number if actual number is unknown.
   */
  rowCount: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number).isRequired,

  /**
   * Threshold at which to pre-fetch data.
   * A threshold X means that data will start loading when a user scrolls within X rows.
   * This value defaults to 15.
   */
  threshold: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number).isRequired
} : 0;
function isRangeVisible(_ref4) {
  var lastRenderedStartIndex = _ref4.lastRenderedStartIndex,
      lastRenderedStopIndex = _ref4.lastRenderedStopIndex,
      startIndex = _ref4.startIndex,
      stopIndex = _ref4.stopIndex;
  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}
/**
 * Returns all of the ranges within a larger range that contain unloaded rows.
 */

function scanForUnloadedRanges(_ref5) {
  var isRowLoaded = _ref5.isRowLoaded,
      minimumBatchSize = _ref5.minimumBatchSize,
      rowCount = _ref5.rowCount,
      startIndex = _ref5.startIndex,
      stopIndex = _ref5.stopIndex;
  var unloadedRanges = [];
  var rangeStartIndex = null;
  var rangeStopIndex = null;

  for (var index = startIndex; index <= stopIndex; index++) {
    var loaded = isRowLoaded({
      index: index
    });

    if (!loaded) {
      rangeStopIndex = index;

      if (rangeStartIndex === null) {
        rangeStartIndex = index;
      }
    } else if (rangeStopIndex !== null) {
      unloadedRanges.push({
        startIndex: rangeStartIndex,
        stopIndex: rangeStopIndex
      });
      rangeStartIndex = rangeStopIndex = null;
    }
  } // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
  // Scan forward to try filling our :minimumBatchSize.


  if (rangeStopIndex !== null) {
    var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1);

    for (var _index = rangeStopIndex + 1; _index <= potentialStopIndex; _index++) {
      if (!isRowLoaded({
        index: _index
      })) {
        rangeStopIndex = _index;
      } else {
        break;
      }
    }

    unloadedRanges.push({
      startIndex: rangeStartIndex,
      stopIndex: rangeStopIndex
    });
  } // Check to see if our first range ended prematurely.
  // In this case we should scan backwards to try filling our :minimumBatchSize.


  if (unloadedRanges.length) {
    var firstUnloadedRange = unloadedRanges[0];

    while (firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0) {
      var _index2 = firstUnloadedRange.startIndex - 1;

      if (!isRowLoaded({
        index: _index2
      })) {
        firstUnloadedRange.startIndex = _index2;
      } else {
        break;
      }
    }
  }

  return unloadedRanges;
}
/**
 * Since RV components use shallowCompare we need to force a render (even though props haven't changed).
 * However InfiniteLoader may wrap a Grid or it may wrap a Table or List.
 * In the first case the built-in React forceUpdate() method is sufficient to force a re-render,
 * But in the latter cases we need to use the RV-specific forceUpdateGrid() method.
 * Else the inner Grid will not be re-rendered and visuals may be stale.
 *
 * Additionally, while a Grid is scrolling the cells can be cached,
 * So it's important to invalidate that cache by recalculating sizes
 * before forcing a rerender.
 */

function forceUpdateReactVirtualizedComponent(component) {
  var currentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var recomputeSize = typeof component.recomputeGridSize === 'function' ? component.recomputeGridSize : component.recomputeRowHeights;

  if (recomputeSize) {
    recomputeSize.call(component, currentIndex);
  } else {
    component.forceUpdate();
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/InfiniteLoader/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/InfiniteLoader/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfiniteLoader: () => (/* reexport safe */ _InfiniteLoader__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfiniteLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfiniteLoader */ "./node_modules/react-virtualized/dist/es/InfiniteLoader/InfiniteLoader.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_InfiniteLoader__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/List/List.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/List/List.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Grid */ "./node_modules/react-virtualized/dist/es/Grid/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/List/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);









var _class, _temp;




/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */

var List = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(List, _React$PureComponent);

  function List() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(List)).call.apply(_getPrototypeOf2, [this].concat(args)));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "Grid", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_cellRenderer", function (_ref) {
      var parent = _ref.parent,
          rowIndex = _ref.rowIndex,
          style = _ref.style,
          isScrolling = _ref.isScrolling,
          isVisible = _ref.isVisible,
          key = _ref.key;
      var rowRenderer = _this.props.rowRenderer; // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var widthDescriptor = Object.getOwnPropertyDescriptor(style, 'width');

      if (widthDescriptor && widthDescriptor.writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer({
        index: rowIndex,
        style: style,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_setRef", function (ref) {
      _this.Grid = ref;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_onScroll", function (_ref2) {
      var clientHeight = _ref2.clientHeight,
          scrollHeight = _ref2.scrollHeight,
          scrollTop = _ref2.scrollTop;
      var onScroll = _this.props.onScroll;
      onScroll({
        clientHeight: clientHeight,
        scrollHeight: scrollHeight,
        scrollTop: scrollTop
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_onSectionRendered", function (_ref3) {
      var rowOverscanStartIndex = _ref3.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref3.rowOverscanStopIndex,
          rowStartIndex = _ref3.rowStartIndex,
          rowStopIndex = _ref3.rowStopIndex;
      var onRowsRendered = _this.props.onRowsRendered;
      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(List, [{
    key: "forceUpdateGrid",
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }
    /** See Grid#getOffsetForCell */

  }, {
    key: "getOffsetForRow",
    value: function getOffsetForRow(_ref4) {
      var alignment = _ref4.alignment,
          index = _ref4.index;

      if (this.Grid) {
        var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index,
          columnIndex: 0
        }),
            scrollTop = _this$Grid$getOffsetF.scrollTop;

        return scrollTop;
      }

      return 0;
    }
    /** CellMeasurer compatibility */

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rowIndex = _ref5.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#measureAllCells */

  }, {
    key: "measureAllRows",
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }
    /** CellMeasurer compatibility */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref6$columnIndex = _ref6.columnIndex,
          columnIndex = _ref6$columnIndex === void 0 ? 0 : _ref6$columnIndex,
          _ref6$rowIndex = _ref6.rowIndex,
          rowIndex = _ref6$rowIndex === void 0 ? 0 : _ref6$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#recomputeGridSize */

  }, {
    key: "recomputeRowHeights",
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index,
          columnIndex: 0
        });
      }
    }
    /** See Grid#scrollToPosition */

  }, {
    key: "scrollToPosition",
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({
          scrollTop: scrollTop
        });
      }
    }
    /** See Grid#scrollToCell */

  }, {
    key: "scrollToRow",
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          noRowsRenderer = _this$props.noRowsRenderer,
          scrollToIndex = _this$props.scrollToIndex,
          width = _this$props.width;
      var classNames = (0,clsx__WEBPACK_IMPORTED_MODULE_10__["default"])('ReactVirtualized__List', className);
      return react__WEBPACK_IMPORTED_MODULE_9__.createElement(_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_9__.PureComponent), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_class, "propTypes",  false ? 0 : {
  "aria-label": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  "autoHeight": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool).isRequired,

  /** Optional CSS class name */
  "className": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * Used to estimate the total height of a List before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  "estimatedRowSize": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number).isRequired,

  /** Height constraint for list (determines how many actual rows are rendered) */
  "height": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number).isRequired,

  /** Optional renderer to be used in place of rows when rowCount is 0 */
  "noRowsRenderer": function noRowsRenderer() {
    return (typeof _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_NoContentRenderer === "function" ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_NoContentRenderer.isRequired ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_NoContentRenderer.isRequired : _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_NoContentRenderer : prop_types__WEBPACK_IMPORTED_MODULE_11___default().shape(_Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_NoContentRenderer).isRequired).apply(this, arguments);
  },

  /** Callback invoked with information about the slice of rows that were just rendered.  */
  "onRowsRendered": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func).isRequired,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   */
  "onScroll": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func).isRequired,

  /** See Grid#overscanIndicesGetter */
  "overscanIndicesGetter": function overscanIndicesGetter() {
    return (typeof _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_OverscanIndicesGetter === "function" ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_OverscanIndicesGetter.isRequired ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_OverscanIndicesGetter.isRequired : _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_OverscanIndicesGetter : prop_types__WEBPACK_IMPORTED_MODULE_11___default().shape(_Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_OverscanIndicesGetter).isRequired).apply(this, arguments);
  },

  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  "overscanRowCount": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number).isRequired,

  /** Either a fixed row height (number) or a function that returns the height of a row given its index.  */
  "rowHeight": function rowHeight() {
    return (typeof _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_CellSize === "function" ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_CellSize.isRequired ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_CellSize.isRequired : _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_CellSize : prop_types__WEBPACK_IMPORTED_MODULE_11___default().shape(_Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_CellSize).isRequired).apply(this, arguments);
  },

  /** Responsible for rendering a row given an index; ({ index: number }): node */
  "rowRenderer": function rowRenderer() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_12__.bpfrpt_proptype_RowRenderer === "function" ? _types__WEBPACK_IMPORTED_MODULE_12__.bpfrpt_proptype_RowRenderer.isRequired ? _types__WEBPACK_IMPORTED_MODULE_12__.bpfrpt_proptype_RowRenderer.isRequired : _types__WEBPACK_IMPORTED_MODULE_12__.bpfrpt_proptype_RowRenderer : prop_types__WEBPACK_IMPORTED_MODULE_11___default().shape(_types__WEBPACK_IMPORTED_MODULE_12__.bpfrpt_proptype_RowRenderer).isRequired).apply(this, arguments);
  },

  /** Number of rows in list. */
  "rowCount": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number).isRequired,

  /** See Grid#scrollToAlignment */
  "scrollToAlignment": function scrollToAlignment() {
    return (typeof _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_Alignment === "function" ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_Alignment.isRequired ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_Alignment.isRequired : _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_Alignment : prop_types__WEBPACK_IMPORTED_MODULE_11___default().shape(_Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_Alignment).isRequired).apply(this, arguments);
  },

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  "scrollToIndex": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number).isRequired,

  /** Vertical offset. */
  "scrollTop": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number),

  /** Optional inline style */
  "style": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object).isRequired,

  /** Tab index for focus */
  "tabIndex": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number),

  /** Width of list */
  "width": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number).isRequired
}), _temp);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(List, "defaultProps", {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: function onScroll() {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {},
  overscanIndicesGetter: _Grid__WEBPACK_IMPORTED_MODULE_8__.accessibilityOverscanIndicesGetter,
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
});















/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/List/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/List/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   List: () => (/* reexport safe */ _List__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   bpfrpt_proptype_RowRendererParams: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.bpfrpt_proptype_RowRendererParams),
/* harmony export */   "default": () => (/* reexport safe */ _List__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./node_modules/react-virtualized/dist/es/List/List.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/List/types.js");





/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/List/types.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/List/types.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bpfrpt_proptype_RenderedRows: () => (/* binding */ bpfrpt_proptype_RenderedRows),
/* harmony export */   bpfrpt_proptype_RowRenderer: () => (/* binding */ bpfrpt_proptype_RowRenderer),
/* harmony export */   bpfrpt_proptype_RowRendererParams: () => (/* binding */ bpfrpt_proptype_RowRendererParams),
/* harmony export */   bpfrpt_proptype_Scroll: () => (/* binding */ bpfrpt_proptype_Scroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var bpfrpt_proptype_RowRendererParams =  false ? 0 : {
  "index": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  "isScrolling": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  "isVisible": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  "key": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  "parent": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  "style": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired
};
var bpfrpt_proptype_RowRenderer =  false ? 0 : (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func);
var bpfrpt_proptype_RenderedRows =  false ? 0 : {
  "overscanStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  "overscanStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  "startIndex": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  "stopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
var bpfrpt_proptype_Scroll =  false ? 0 : {
  "clientHeight": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  "scrollHeight": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  "scrollTop": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};






/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Masonry/Masonry.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Masonry/Masonry.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_SCROLLING_RESET_TIME_INTERVAL: () => (/* binding */ DEFAULT_SCROLLING_RESET_TIME_INTERVAL),
/* harmony export */   bpfrpt_proptype_CellMeasurerCache: () => (/* binding */ bpfrpt_proptype_CellMeasurerCache),
/* harmony export */   bpfrpt_proptype_Positioner: () => (/* binding */ bpfrpt_proptype_Positioner),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _PositionCache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PositionCache */ "./node_modules/react-virtualized/dist/es/Masonry/PositionCache.js");
/* harmony import */ var _utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/requestAnimationTimeout */ "./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);








var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var emptyObject = {};
/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */

var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
/**
 * This component efficiently displays arbitrarily positioned cells using windowing techniques.
 * Cell position is determined by an injected `cellPositioner` property.
 * Windowing is vertical; this component does not support horizontal scrolling.
 *
 * Rendering occurs in two phases:
 * 1) First pass uses estimated cell sizes (provided by the cache) to determine how many cells to measure in a batch.
 *    Batch size is chosen using a fast, naive layout algorithm that stacks images in order until the viewport has been filled.
 *    After measurement is complete (componentDidMount or componentDidUpdate) this component evaluates positioned cells
 *    in order to determine if another measurement pass is required (eg if actual cell sizes were less than estimated sizes).
 *    All measurements are permanently cached (keyed by `keyMapper`) for performance purposes.
 * 2) Second pass uses the external `cellPositioner` to layout cells.
 *    At this time the positioner has access to cached size measurements for all cells.
 *    The positions it returns are cached by Masonry for fast access later.
 *    Phase one is repeated if the user scrolls beyond the current layout's bounds.
 *    If the layout is invalidated due to eg a resize, cached positions can be cleared using `recomputeCellPositions()`.
 *
 * Animation constraints:
 *   Simple animations are supported (eg translate/slide into place on initial reveal).
 *   More complex animations are not (eg flying from one position to another on resize).
 *
 * Layout constraints:
 *   This component supports multi-column layout.
 *   The height of each item may vary.
 *   The width of each item must not exceed the width of the column it is "in".
 *   The left position of all items within a column must align.
 *   (Items may not span multiple columns.)
 */

var Masonry = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Masonry, _React$PureComponent);

  function Masonry() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Masonry);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Masonry)).call.apply(_getPrototypeOf2, [this].concat(args)));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isScrolling: false,
      scrollTop: 0
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_debounceResetIsScrollingId", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_invalidateOnUpdateStartIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_invalidateOnUpdateStopIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_positionCache", new _PositionCache__WEBPACK_IMPORTED_MODULE_10__["default"]());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_startIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_startIndexMemoized", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_stopIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_stopIndexMemoized", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_debounceResetIsScrollingCallback", function () {
      _this.setState({
        isScrolling: false
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_setScrollingContainerRef", function (ref) {
      _this._scrollingContainer = ref;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onScroll", function (event) {
      var height = _this.props.height;
      var eventScrollTop = event.currentTarget.scrollTop; // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollTop = Math.min(Math.max(0, _this._getEstimatedTotalHeight() - height), eventScrollTop); // On iOS, we can arrive at negative offsets by swiping past the start or end.
      // Avoid re-rendering in this case as it can cause problems; see #532 for more.

      if (eventScrollTop !== scrollTop) {
        return;
      } // Prevent pointer events from interrupting a smooth scroll


      _this._debounceResetIsScrolling(); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.


      if (_this.state.scrollTop !== scrollTop) {
        _this.setState({
          isScrolling: true,
          scrollTop: scrollTop
        });
      }
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Masonry, [{
    key: "clearCellPositions",
    value: function clearCellPositions() {
      this._positionCache = new _PositionCache__WEBPACK_IMPORTED_MODULE_10__["default"]();
      this.forceUpdate();
    } // HACK This method signature was intended for Grid

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref) {
      var index = _ref.rowIndex;

      if (this._invalidateOnUpdateStartIndex === null) {
        this._invalidateOnUpdateStartIndex = index;
        this._invalidateOnUpdateStopIndex = index;
      } else {
        this._invalidateOnUpdateStartIndex = Math.min(this._invalidateOnUpdateStartIndex, index);
        this._invalidateOnUpdateStopIndex = Math.max(this._invalidateOnUpdateStopIndex, index);
      }
    }
  }, {
    key: "recomputeCellPositions",
    value: function recomputeCellPositions() {
      var stopIndex = this._positionCache.count - 1;
      this._positionCache = new _PositionCache__WEBPACK_IMPORTED_MODULE_10__["default"]();

      this._populatePositionCache(0, stopIndex);

      this.forceUpdate();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._checkInvalidateOnUpdate();

      this._invokeOnScrollCallback();

      this._invokeOnCellsRenderedCallback();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this._checkInvalidateOnUpdate();

      this._invokeOnScrollCallback();

      this._invokeOnCellsRenderedCallback();

      if (this.props.scrollTop !== prevProps.scrollTop) {
        this._debounceResetIsScrolling();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._debounceResetIsScrollingId) {
        (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_11__.cancelAnimationTimeout)(this._debounceResetIsScrollingId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          autoHeight = _this$props.autoHeight,
          cellCount = _this$props.cellCount,
          cellMeasurerCache = _this$props.cellMeasurerCache,
          cellRenderer = _this$props.cellRenderer,
          className = _this$props.className,
          height = _this$props.height,
          id = _this$props.id,
          keyMapper = _this$props.keyMapper,
          overscanByPixels = _this$props.overscanByPixels,
          role = _this$props.role,
          style = _this$props.style,
          tabIndex = _this$props.tabIndex,
          width = _this$props.width,
          rowDirection = _this$props.rowDirection;
      var _this$state = this.state,
          isScrolling = _this$state.isScrolling,
          scrollTop = _this$state.scrollTop;
      var children = [];

      var estimateTotalHeight = this._getEstimatedTotalHeight();

      var shortestColumnSize = this._positionCache.shortestColumnSize;
      var measuredCellCount = this._positionCache.count;
      var startIndex = 0;
      var stopIndex;

      this._positionCache.range(Math.max(0, scrollTop - overscanByPixels), height + overscanByPixels * 2, function (index, left, top) {
        var _style;

        if (typeof stopIndex === 'undefined') {
          startIndex = index;
          stopIndex = index;
        } else {
          startIndex = Math.min(startIndex, index);
          stopIndex = Math.max(stopIndex, index);
        }

        children.push(cellRenderer({
          index: index,
          isScrolling: isScrolling,
          key: keyMapper(index),
          parent: _this2,
          style: (_style = {
            height: cellMeasurerCache.getHeight(index)
          }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_style, rowDirection === 'ltr' ? 'left' : 'right', left), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_style, "position", 'absolute'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_style, "top", top), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_style, "width", cellMeasurerCache.getWidth(index)), _style)
        }));
      }); // We need to measure additional cells for this layout


      if (shortestColumnSize < scrollTop + height + overscanByPixels && measuredCellCount < cellCount) {
        var batchSize = Math.min(cellCount - measuredCellCount, Math.ceil((scrollTop + height + overscanByPixels - shortestColumnSize) / cellMeasurerCache.defaultHeight * width / cellMeasurerCache.defaultWidth));

        for (var _index = measuredCellCount; _index < measuredCellCount + batchSize; _index++) {
          stopIndex = _index;
          children.push(cellRenderer({
            index: _index,
            isScrolling: isScrolling,
            key: keyMapper(_index),
            parent: this,
            style: {
              width: cellMeasurerCache.getWidth(_index)
            }
          }));
        }
      }

      this._startIndex = startIndex;
      this._stopIndex = stopIndex;
      return react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        ref: this._setScrollingContainerRef,
        "aria-label": this.props['aria-label'],
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__["default"])('ReactVirtualized__Masonry', className),
        id: id,
        onScroll: this._onScroll,
        role: role,
        style: _objectSpread({
          boxSizing: 'border-box',
          direction: 'ltr',
          height: autoHeight ? 'auto' : height,
          overflowX: 'hidden',
          overflowY: estimateTotalHeight < height ? 'hidden' : 'auto',
          position: 'relative',
          width: width,
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform'
        }, style),
        tabIndex: tabIndex
      }, react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "ReactVirtualized__Masonry__innerScrollContainer",
        style: {
          width: '100%',
          height: estimateTotalHeight,
          maxWidth: '100%',
          maxHeight: estimateTotalHeight,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          position: 'relative'
        }
      }, children));
    }
  }, {
    key: "_checkInvalidateOnUpdate",
    value: function _checkInvalidateOnUpdate() {
      if (typeof this._invalidateOnUpdateStartIndex === 'number') {
        var startIndex = this._invalidateOnUpdateStartIndex;
        var stopIndex = this._invalidateOnUpdateStopIndex;
        this._invalidateOnUpdateStartIndex = null;
        this._invalidateOnUpdateStopIndex = null; // Query external layout logic for position of newly-measured cells

        this._populatePositionCache(startIndex, stopIndex);

        this.forceUpdate();
      }
    }
  }, {
    key: "_debounceResetIsScrolling",
    value: function _debounceResetIsScrolling() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;

      if (this._debounceResetIsScrollingId) {
        (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_11__.cancelAnimationTimeout)(this._debounceResetIsScrollingId);
      }

      this._debounceResetIsScrollingId = (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_11__.requestAnimationTimeout)(this._debounceResetIsScrollingCallback, scrollingResetTimeInterval);
    }
  }, {
    key: "_getEstimatedTotalHeight",
    value: function _getEstimatedTotalHeight() {
      var _this$props2 = this.props,
          cellCount = _this$props2.cellCount,
          cellMeasurerCache = _this$props2.cellMeasurerCache,
          width = _this$props2.width;
      var estimatedColumnCount = Math.max(1, Math.floor(width / cellMeasurerCache.defaultWidth));
      return this._positionCache.estimateTotalHeight(cellCount, estimatedColumnCount, cellMeasurerCache.defaultHeight);
    }
  }, {
    key: "_invokeOnScrollCallback",
    value: function _invokeOnScrollCallback() {
      var _this$props3 = this.props,
          height = _this$props3.height,
          onScroll = _this$props3.onScroll;
      var scrollTop = this.state.scrollTop;

      if (this._onScrollMemoized !== scrollTop) {
        onScroll({
          clientHeight: height,
          scrollHeight: this._getEstimatedTotalHeight(),
          scrollTop: scrollTop
        });
        this._onScrollMemoized = scrollTop;
      }
    }
  }, {
    key: "_invokeOnCellsRenderedCallback",
    value: function _invokeOnCellsRenderedCallback() {
      if (this._startIndexMemoized !== this._startIndex || this._stopIndexMemoized !== this._stopIndex) {
        var onCellsRendered = this.props.onCellsRendered;
        onCellsRendered({
          startIndex: this._startIndex,
          stopIndex: this._stopIndex
        });
        this._startIndexMemoized = this._startIndex;
        this._stopIndexMemoized = this._stopIndex;
      }
    }
  }, {
    key: "_populatePositionCache",
    value: function _populatePositionCache(startIndex, stopIndex) {
      var _this$props4 = this.props,
          cellMeasurerCache = _this$props4.cellMeasurerCache,
          cellPositioner = _this$props4.cellPositioner;

      for (var _index2 = startIndex; _index2 <= stopIndex; _index2++) {
        var _cellPositioner = cellPositioner(_index2),
            left = _cellPositioner.left,
            top = _cellPositioner.top;

        this._positionCache.setPosition(_index2, left, top, cellMeasurerCache.getHeight(_index2));
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.scrollTop !== undefined && prevState.scrollTop !== nextProps.scrollTop) {
        return {
          isScrolling: true,
          scrollTop: nextProps.scrollTop
        };
      }

      return null;
    }
  }]);

  return Masonry;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, "propTypes",  false ? 0 : {
  "autoHeight": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool).isRequired,
  "cellCount": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "cellMeasurerCache": function cellMeasurerCache() {
    return (typeof CellMeasurerCache === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_12___default().instanceOf(CellMeasurerCache).isRequired : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any).isRequired).apply(this, arguments);
  },
  "cellPositioner": function cellPositioner() {
    return (typeof Positioner === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_12___default().instanceOf(Positioner).isRequired : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any).isRequired).apply(this, arguments);
  },
  "cellRenderer": function cellRenderer() {
    return (typeof CellRenderer === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_12___default().instanceOf(CellRenderer).isRequired : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any).isRequired).apply(this, arguments);
  },
  "className": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),
  "height": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "id": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),
  "keyMapper": function keyMapper() {
    return (typeof KeyMapper === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_12___default().instanceOf(KeyMapper).isRequired : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any).isRequired).apply(this, arguments);
  },
  "onCellsRendered": function onCellsRendered() {
    return (typeof OnCellsRenderedCallback === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_12___default().instanceOf(OnCellsRenderedCallback) : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any)).apply(this, arguments);
  },
  "onScroll": function onScroll() {
    return (typeof OnScrollCallback === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_12___default().instanceOf(OnScrollCallback) : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any)).apply(this, arguments);
  },
  "overscanByPixels": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "role": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string).isRequired,
  "scrollingResetTimeInterval": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "style": function style(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  },
  "tabIndex": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "width": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "rowDirection": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string).isRequired,
  "scrollTop": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number)
}), _temp);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Masonry, "defaultProps", {
  autoHeight: false,
  keyMapper: identity,
  onCellsRendered: noop,
  onScroll: noop,
  overscanByPixels: 20,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  style: emptyObject,
  tabIndex: 0,
  rowDirection: 'ltr'
});

function identity(value) {
  return value;
}

function noop() {}

var bpfrpt_proptype_CellMeasurerCache =  false ? 0 : {
  "defaultHeight": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "defaultWidth": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "getHeight": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,
  "getWidth": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired
};
(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__.polyfill)(Masonry);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Masonry);
var bpfrpt_proptype_Positioner =  false ? 0 : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func);





/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Masonry/PositionCache.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Masonry/PositionCache.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PositionCache)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _vendor_intervalTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vendor/intervalTree */ "./node_modules/react-virtualized/dist/es/vendor/intervalTree.js");






// Position cache requirements:
//   O(log(n)) lookup of cells to render for a given viewport size
//   O(1) lookup of shortest measured column (so we know when to enter phase 1)
var PositionCache =
/*#__PURE__*/
function () {
  function PositionCache() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PositionCache);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "_columnSizeMap", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "_intervalTree", (0,_vendor_intervalTree__WEBPACK_IMPORTED_MODULE_4__["default"])());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "_leftMap", {});
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PositionCache, [{
    key: "estimateTotalHeight",
    value: function estimateTotalHeight(cellCount, columnCount, defaultCellHeight) {
      var unmeasuredCellCount = cellCount - this.count;
      return this.tallestColumnSize + Math.ceil(unmeasuredCellCount / columnCount) * defaultCellHeight;
    } // Render all cells visible within the viewport range defined.

  }, {
    key: "range",
    value: function range(scrollTop, clientHeight, renderCallback) {
      var _this = this;

      this._intervalTree.queryInterval(scrollTop, scrollTop + clientHeight, function (_ref) {
        var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 3),
            top = _ref2[0],
            _ = _ref2[1],
            index = _ref2[2];

        return renderCallback(index, _this._leftMap[index], top);
      });
    }
  }, {
    key: "setPosition",
    value: function setPosition(index, left, top, height) {
      this._intervalTree.insert([top, top + height, index]);

      this._leftMap[index] = left;
      var columnSizeMap = this._columnSizeMap;
      var columnHeight = columnSizeMap[left];

      if (columnHeight === undefined) {
        columnSizeMap[left] = top + height;
      } else {
        columnSizeMap[left] = Math.max(columnHeight, top + height);
      }
    }
  }, {
    key: "count",
    get: function get() {
      return this._intervalTree.count;
    }
  }, {
    key: "shortestColumnSize",
    get: function get() {
      var columnSizeMap = this._columnSizeMap;
      var size = 0;

      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = size === 0 ? height : Math.min(size, height);
      }

      return size;
    }
  }, {
    key: "tallestColumnSize",
    get: function get() {
      var columnSizeMap = this._columnSizeMap;
      var size = 0;

      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = Math.max(size, height);
      }

      return size;
    }
  }]);

  return PositionCache;
}();



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Masonry/createCellPositioner.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Masonry/createCellPositioner.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCellPositioner)
/* harmony export */ });
/* harmony import */ var _Masonry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Masonry */ "./node_modules/react-virtualized/dist/es/Masonry/Masonry.js");
function createCellPositioner(_ref) {
  var cellMeasurerCache = _ref.cellMeasurerCache,
      columnCount = _ref.columnCount,
      columnWidth = _ref.columnWidth,
      _ref$spacer = _ref.spacer,
      spacer = _ref$spacer === void 0 ? 0 : _ref$spacer;
  var columnHeights;
  initOrResetDerivedValues();

  function cellPositioner(index) {
    // Find the shortest column and use it.
    var columnIndex = 0;

    for (var i = 1; i < columnHeights.length; i++) {
      if (columnHeights[i] < columnHeights[columnIndex]) {
        columnIndex = i;
      }
    }

    var left = columnIndex * (columnWidth + spacer);
    var top = columnHeights[columnIndex] || 0;
    columnHeights[columnIndex] = top + cellMeasurerCache.getHeight(index) + spacer;
    return {
      left: left,
      top: top
    };
  }

  function initOrResetDerivedValues() {
    // Track the height of each column.
    // Layout algorithm below always inserts into the shortest column.
    columnHeights = [];

    for (var i = 0; i < columnCount; i++) {
      columnHeights[i] = 0;
    }
  }

  function reset(params) {
    columnCount = params.columnCount;
    columnWidth = params.columnWidth;
    spacer = params.spacer;
    initOrResetDerivedValues();
  }

  cellPositioner.reset = reset;
  return cellPositioner;
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Masonry/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Masonry/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Masonry: () => (/* reexport safe */ _Masonry__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   createCellPositioner: () => (/* reexport safe */ _createCellPositioner__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createCellPositioner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCellPositioner */ "./node_modules/react-virtualized/dist/es/Masonry/createCellPositioner.js");
/* harmony import */ var _Masonry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Masonry */ "./node_modules/react-virtualized/dist/es/Masonry/Masonry.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Masonry__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/MultiGrid/CellMeasurerCacheDecorator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/MultiGrid/CellMeasurerCacheDecorator.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CellMeasurerCacheDecorator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _CellMeasurer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js");





/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCacheDecorator =
/*#__PURE__*/
function () {
  function CellMeasurerCacheDecorator() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CellMeasurerCacheDecorator);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_cellMeasurerCache", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_columnIndexOffset", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_rowIndexOffset", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "columnWidth", function (_ref) {
      var index = _ref.index;

      _this._cellMeasurerCache.columnWidth({
        index: index + _this._columnIndexOffset
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "rowHeight", function (_ref2) {
      var index = _ref2.index;

      _this._cellMeasurerCache.rowHeight({
        index: index + _this._rowIndexOffset
      });
    });

    var cellMeasurerCache = params.cellMeasurerCache,
        _params$columnIndexOf = params.columnIndexOffset,
        columnIndexOffset = _params$columnIndexOf === void 0 ? 0 : _params$columnIndexOf,
        _params$rowIndexOffse = params.rowIndexOffset,
        rowIndexOffset = _params$rowIndexOffse === void 0 ? 0 : _params$rowIndexOffse;
    this._cellMeasurerCache = cellMeasurerCache;
    this._columnIndexOffset = columnIndexOffset;
    this._rowIndexOffset = rowIndexOffset;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CellMeasurerCacheDecorator, [{
    key: "clear",
    value: function clear(rowIndex, columnIndex) {
      this._cellMeasurerCache.clear(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._cellMeasurerCache.clearAll();
    }
  }, {
    key: "hasFixedHeight",
    value: function hasFixedHeight() {
      return this._cellMeasurerCache.hasFixedHeight();
    }
  }, {
    key: "hasFixedWidth",
    value: function hasFixedWidth() {
      return this._cellMeasurerCache.hasFixedWidth();
    }
  }, {
    key: "getHeight",
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._cellMeasurerCache.getHeight(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "getWidth",
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._cellMeasurerCache.getWidth(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "has",
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._cellMeasurerCache.has(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "set",
    value: function set(rowIndex, columnIndex, width, height) {
      this._cellMeasurerCache.set(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset, width, height);
    }
  }, {
    key: "defaultHeight",
    get: function get() {
      return this._cellMeasurerCache.defaultHeight;
    }
  }, {
    key: "defaultWidth",
    get: function get() {
      return this._cellMeasurerCache.defaultWidth;
    }
  }]);

  return CellMeasurerCacheDecorator;
}();



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/MultiGrid/MultiGrid.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/MultiGrid/MultiGrid.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _CellMeasurerCacheDecorator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CellMeasurerCacheDecorator */ "./node_modules/react-virtualized/dist/es/MultiGrid/CellMeasurerCacheDecorator.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Grid */ "./node_modules/react-virtualized/dist/es/Grid/index.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var SCROLLBAR_SIZE_BUFFER = 20;
/**
 * Renders 1, 2, or 4 Grids depending on configuration.
 * A main (body) Grid will always be rendered.
 * Optionally, 1-2 Grids for sticky header rows will also be rendered.
 * If no sticky columns, only 1 sticky header Grid will be rendered.
 * If sticky columns, 2 sticky header Grids will be rendered.
 */

var MultiGrid =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MultiGrid, _React$PureComponent);

  function MultiGrid(props, context) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MultiGrid);

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MultiGrid).call(this, props, context));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      scrollLeft: 0,
      scrollTop: 0,
      scrollbarSize: 0,
      showHorizontalScrollbar: false,
      showVerticalScrollbar: false
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_deferredInvalidateColumnIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_deferredInvalidateRowIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_bottomLeftGridRef", function (ref) {
      _this._bottomLeftGrid = ref;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_bottomRightGridRef", function (ref) {
      _this._bottomRightGrid = ref;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_cellRendererBottomLeftGrid", function (_ref) {
      var rowIndex = _ref.rowIndex,
          rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["rowIndex"]);

      var _this$props = _this.props,
          cellRenderer = _this$props.cellRenderer,
          fixedRowCount = _this$props.fixedRowCount,
          rowCount = _this$props.rowCount;

      if (rowIndex === rowCount - fixedRowCount) {
        return react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
          key: rest.key,
          style: _objectSpread({}, rest.style, {
            height: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(_objectSpread({}, rest, {
          parent: (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this),
          rowIndex: rowIndex + fixedRowCount
        }));
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_cellRendererBottomRightGrid", function (_ref2) {
      var columnIndex = _ref2.columnIndex,
          rowIndex = _ref2.rowIndex,
          rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["columnIndex", "rowIndex"]);

      var _this$props2 = _this.props,
          cellRenderer = _this$props2.cellRenderer,
          fixedColumnCount = _this$props2.fixedColumnCount,
          fixedRowCount = _this$props2.fixedRowCount;
      return cellRenderer(_objectSpread({}, rest, {
        columnIndex: columnIndex + fixedColumnCount,
        parent: (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this),
        rowIndex: rowIndex + fixedRowCount
      }));
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_cellRendererTopRightGrid", function (_ref3) {
      var columnIndex = _ref3.columnIndex,
          rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["columnIndex"]);

      var _this$props3 = _this.props,
          cellRenderer = _this$props3.cellRenderer,
          columnCount = _this$props3.columnCount,
          fixedColumnCount = _this$props3.fixedColumnCount;

      if (columnIndex === columnCount - fixedColumnCount) {
        return react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
          key: rest.key,
          style: _objectSpread({}, rest.style, {
            width: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(_objectSpread({}, rest, {
          columnIndex: columnIndex + fixedColumnCount,
          parent: (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)
        }));
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_columnWidthRightGrid", function (_ref4) {
      var index = _ref4.index;
      var _this$props4 = _this.props,
          columnCount = _this$props4.columnCount,
          fixedColumnCount = _this$props4.fixedColumnCount,
          columnWidth = _this$props4.columnWidth;
      var _this$state = _this.state,
          scrollbarSize = _this$state.scrollbarSize,
          showHorizontalScrollbar = _this$state.showHorizontalScrollbar; // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showHorizontalScrollbar && index === columnCount - fixedColumnCount) {
        return scrollbarSize;
      }

      return typeof columnWidth === 'function' ? columnWidth({
        index: index + fixedColumnCount
      }) : columnWidth;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_onScroll", function (scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft,
          scrollTop = scrollInfo.scrollTop;

      _this.setState({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });

      var onScroll = _this.props.onScroll;

      if (onScroll) {
        onScroll(scrollInfo);
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_onScrollbarPresenceChange", function (_ref5) {
      var horizontal = _ref5.horizontal,
          size = _ref5.size,
          vertical = _ref5.vertical;
      var _this$state2 = _this.state,
          showHorizontalScrollbar = _this$state2.showHorizontalScrollbar,
          showVerticalScrollbar = _this$state2.showVerticalScrollbar;

      if (horizontal !== showHorizontalScrollbar || vertical !== showVerticalScrollbar) {
        _this.setState({
          scrollbarSize: size,
          showHorizontalScrollbar: horizontal,
          showVerticalScrollbar: vertical
        });

        var onScrollbarPresenceChange = _this.props.onScrollbarPresenceChange;

        if (typeof onScrollbarPresenceChange === 'function') {
          onScrollbarPresenceChange({
            horizontal: horizontal,
            size: size,
            vertical: vertical
          });
        }
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_onScrollLeft", function (scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft;

      _this._onScroll({
        scrollLeft: scrollLeft,
        scrollTop: _this.state.scrollTop
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_onScrollTop", function (scrollInfo) {
      var scrollTop = scrollInfo.scrollTop;

      _this._onScroll({
        scrollTop: scrollTop,
        scrollLeft: _this.state.scrollLeft
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_rowHeightBottomGrid", function (_ref6) {
      var index = _ref6.index;
      var _this$props5 = _this.props,
          fixedRowCount = _this$props5.fixedRowCount,
          rowCount = _this$props5.rowCount,
          rowHeight = _this$props5.rowHeight;
      var _this$state3 = _this.state,
          scrollbarSize = _this$state3.scrollbarSize,
          showVerticalScrollbar = _this$state3.showVerticalScrollbar; // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showVerticalScrollbar && index === rowCount - fixedRowCount) {
        return scrollbarSize;
      }

      return typeof rowHeight === 'function' ? rowHeight({
        index: index + fixedRowCount
      }) : rowHeight;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_topLeftGridRef", function (ref) {
      _this._topLeftGrid = ref;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_topRightGridRef", function (ref) {
      _this._topRightGrid = ref;
    });

    var deferredMeasurementCache = props.deferredMeasurementCache,
        _fixedColumnCount = props.fixedColumnCount,
        _fixedRowCount = props.fixedRowCount;

    _this._maybeCalculateCachedStyles(true);

    if (deferredMeasurementCache) {
      _this._deferredMeasurementCacheBottomLeftGrid = _fixedRowCount > 0 ? new _CellMeasurerCacheDecorator__WEBPACK_IMPORTED_MODULE_11__["default"]({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: 0,
        rowIndexOffset: _fixedRowCount
      }) : deferredMeasurementCache;
      _this._deferredMeasurementCacheBottomRightGrid = _fixedColumnCount > 0 || _fixedRowCount > 0 ? new _CellMeasurerCacheDecorator__WEBPACK_IMPORTED_MODULE_11__["default"]({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: _fixedColumnCount,
        rowIndexOffset: _fixedRowCount
      }) : deferredMeasurementCache;
      _this._deferredMeasurementCacheTopRightGrid = _fixedColumnCount > 0 ? new _CellMeasurerCacheDecorator__WEBPACK_IMPORTED_MODULE_11__["default"]({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: _fixedColumnCount,
        rowIndexOffset: 0
      }) : deferredMeasurementCache;
    }

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MultiGrid, [{
    key: "forceUpdateGrids",
    value: function forceUpdateGrids() {
      this._bottomLeftGrid && this._bottomLeftGrid.forceUpdate();
      this._bottomRightGrid && this._bottomRightGrid.forceUpdate();
      this._topLeftGrid && this._topLeftGrid.forceUpdate();
      this._topRightGrid && this._topRightGrid.forceUpdate();
    }
    /** See Grid#invalidateCellSizeAfterRender */

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref7$columnIndex = _ref7.columnIndex,
          columnIndex = _ref7$columnIndex === void 0 ? 0 : _ref7$columnIndex,
          _ref7$rowIndex = _ref7.rowIndex,
          rowIndex = _ref7$rowIndex === void 0 ? 0 : _ref7$rowIndex;

      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }
    /** See Grid#measureAllCells */

  }, {
    key: "measureAllCells",
    value: function measureAllCells() {
      this._bottomLeftGrid && this._bottomLeftGrid.measureAllCells();
      this._bottomRightGrid && this._bottomRightGrid.measureAllCells();
      this._topLeftGrid && this._topLeftGrid.measureAllCells();
      this._topRightGrid && this._topRightGrid.measureAllCells();
    }
    /** See Grid#recomputeGridSize */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref8$columnIndex = _ref8.columnIndex,
          columnIndex = _ref8$columnIndex === void 0 ? 0 : _ref8$columnIndex,
          _ref8$rowIndex = _ref8.rowIndex,
          rowIndex = _ref8$rowIndex === void 0 ? 0 : _ref8$rowIndex;

      var _this$props6 = this.props,
          fixedColumnCount = _this$props6.fixedColumnCount,
          fixedRowCount = _this$props6.fixedRowCount;
      var adjustedColumnIndex = Math.max(0, columnIndex - fixedColumnCount);
      var adjustedRowIndex = Math.max(0, rowIndex - fixedRowCount);
      this._bottomLeftGrid && this._bottomLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: adjustedRowIndex
      });
      this._bottomRightGrid && this._bottomRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: adjustedRowIndex
      });
      this._topLeftGrid && this._topLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: rowIndex
      });
      this._topRightGrid && this._topRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: rowIndex
      });
      this._leftGridWidth = null;
      this._topGridHeight = null;

      this._maybeCalculateCachedStyles(true);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
          scrollLeft = _this$props7.scrollLeft,
          scrollTop = _this$props7.scrollTop;

      if (scrollLeft > 0 || scrollTop > 0) {
        var newState = {};

        if (scrollLeft > 0) {
          newState.scrollLeft = scrollLeft;
        }

        if (scrollTop > 0) {
          newState.scrollTop = scrollTop;
        }

        this.setState(newState);
      }

      this._handleInvalidatedGridSize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._handleInvalidatedGridSize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          onScroll = _this$props8.onScroll,
          onSectionRendered = _this$props8.onSectionRendered,
          onScrollbarPresenceChange = _this$props8.onScrollbarPresenceChange,
          scrollLeftProp = _this$props8.scrollLeft,
          scrollToColumn = _this$props8.scrollToColumn,
          scrollTopProp = _this$props8.scrollTop,
          scrollToRow = _this$props8.scrollToRow,
          rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props8, ["onScroll", "onSectionRendered", "onScrollbarPresenceChange", "scrollLeft", "scrollToColumn", "scrollTop", "scrollToRow"]);

      this._prepareForRender(); // Don't render any of our Grids if there are no cells.
      // This mirrors what Grid does,
      // And prevents us from recording inaccurage measurements when used with CellMeasurer.


      if (this.props.width === 0 || this.props.height === 0) {
        return null;
      } // scrollTop and scrollLeft props are explicitly filtered out and ignored


      var _this$state4 = this.state,
          scrollLeft = _this$state4.scrollLeft,
          scrollTop = _this$state4.scrollTop;
      return react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        style: this._containerOuterStyle
      }, react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        style: this._containerTopStyle
      }, this._renderTopLeftGrid(rest), this._renderTopRightGrid(_objectSpread({}, rest, {
        onScroll: onScroll,
        scrollLeft: scrollLeft
      }))), react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        style: this._containerBottomStyle
      }, this._renderBottomLeftGrid(_objectSpread({}, rest, {
        onScroll: onScroll,
        scrollTop: scrollTop
      })), this._renderBottomRightGrid(_objectSpread({}, rest, {
        onScroll: onScroll,
        onSectionRendered: onSectionRendered,
        scrollLeft: scrollLeft,
        scrollToColumn: scrollToColumn,
        scrollToRow: scrollToRow,
        scrollTop: scrollTop
      }))));
    }
  }, {
    key: "_getBottomGridHeight",
    value: function _getBottomGridHeight(props) {
      var height = props.height;

      var topGridHeight = this._getTopGridHeight(props);

      return height - topGridHeight;
    }
  }, {
    key: "_getLeftGridWidth",
    value: function _getLeftGridWidth(props) {
      var fixedColumnCount = props.fixedColumnCount,
          columnWidth = props.columnWidth;

      if (this._leftGridWidth == null) {
        if (typeof columnWidth === 'function') {
          var leftGridWidth = 0;

          for (var index = 0; index < fixedColumnCount; index++) {
            leftGridWidth += columnWidth({
              index: index
            });
          }

          this._leftGridWidth = leftGridWidth;
        } else {
          this._leftGridWidth = columnWidth * fixedColumnCount;
        }
      }

      return this._leftGridWidth;
    }
  }, {
    key: "_getRightGridWidth",
    value: function _getRightGridWidth(props) {
      var width = props.width;

      var leftGridWidth = this._getLeftGridWidth(props);

      return width - leftGridWidth;
    }
  }, {
    key: "_getTopGridHeight",
    value: function _getTopGridHeight(props) {
      var fixedRowCount = props.fixedRowCount,
          rowHeight = props.rowHeight;

      if (this._topGridHeight == null) {
        if (typeof rowHeight === 'function') {
          var topGridHeight = 0;

          for (var index = 0; index < fixedRowCount; index++) {
            topGridHeight += rowHeight({
              index: index
            });
          }

          this._topGridHeight = topGridHeight;
        } else {
          this._topGridHeight = rowHeight * fixedRowCount;
        }
      }

      return this._topGridHeight;
    }
  }, {
    key: "_handleInvalidatedGridSize",
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;
        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;
        this.recomputeGridSize({
          columnIndex: columnIndex,
          rowIndex: rowIndex
        });
        this.forceUpdate();
      }
    }
    /**
     * Avoid recreating inline styles each render; this bypasses Grid's shallowCompare.
     * This method recalculates styles only when specific props change.
     */

  }, {
    key: "_maybeCalculateCachedStyles",
    value: function _maybeCalculateCachedStyles(resetAll) {
      var _this$props9 = this.props,
          columnWidth = _this$props9.columnWidth,
          enableFixedColumnScroll = _this$props9.enableFixedColumnScroll,
          enableFixedRowScroll = _this$props9.enableFixedRowScroll,
          height = _this$props9.height,
          fixedColumnCount = _this$props9.fixedColumnCount,
          fixedRowCount = _this$props9.fixedRowCount,
          rowHeight = _this$props9.rowHeight,
          style = _this$props9.style,
          styleBottomLeftGrid = _this$props9.styleBottomLeftGrid,
          styleBottomRightGrid = _this$props9.styleBottomRightGrid,
          styleTopLeftGrid = _this$props9.styleTopLeftGrid,
          styleTopRightGrid = _this$props9.styleTopRightGrid,
          width = _this$props9.width;
      var sizeChange = resetAll || height !== this._lastRenderedHeight || width !== this._lastRenderedWidth;
      var leftSizeChange = resetAll || columnWidth !== this._lastRenderedColumnWidth || fixedColumnCount !== this._lastRenderedFixedColumnCount;
      var topSizeChange = resetAll || fixedRowCount !== this._lastRenderedFixedRowCount || rowHeight !== this._lastRenderedRowHeight;

      if (resetAll || sizeChange || style !== this._lastRenderedStyle) {
        this._containerOuterStyle = _objectSpread({
          height: height,
          overflow: 'visible',
          // Let :focus outline show through
          width: width
        }, style);
      }

      if (resetAll || sizeChange || topSizeChange) {
        this._containerTopStyle = {
          height: this._getTopGridHeight(this.props),
          position: 'relative',
          width: width
        };
        this._containerBottomStyle = {
          height: height - this._getTopGridHeight(this.props),
          overflow: 'visible',
          // Let :focus outline show through
          position: 'relative',
          width: width
        };
      }

      if (resetAll || styleBottomLeftGrid !== this._lastRenderedStyleBottomLeftGrid) {
        this._bottomLeftGridStyle = _objectSpread({
          left: 0,
          overflowX: 'hidden',
          overflowY: enableFixedColumnScroll ? 'auto' : 'hidden',
          position: 'absolute'
        }, styleBottomLeftGrid);
      }

      if (resetAll || leftSizeChange || styleBottomRightGrid !== this._lastRenderedStyleBottomRightGrid) {
        this._bottomRightGridStyle = _objectSpread({
          left: this._getLeftGridWidth(this.props),
          position: 'absolute'
        }, styleBottomRightGrid);
      }

      if (resetAll || styleTopLeftGrid !== this._lastRenderedStyleTopLeftGrid) {
        this._topLeftGridStyle = _objectSpread({
          left: 0,
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopLeftGrid);
      }

      if (resetAll || leftSizeChange || styleTopRightGrid !== this._lastRenderedStyleTopRightGrid) {
        this._topRightGridStyle = _objectSpread({
          left: this._getLeftGridWidth(this.props),
          overflowX: enableFixedRowScroll ? 'auto' : 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopRightGrid);
      }

      this._lastRenderedColumnWidth = columnWidth;
      this._lastRenderedFixedColumnCount = fixedColumnCount;
      this._lastRenderedFixedRowCount = fixedRowCount;
      this._lastRenderedHeight = height;
      this._lastRenderedRowHeight = rowHeight;
      this._lastRenderedStyle = style;
      this._lastRenderedStyleBottomLeftGrid = styleBottomLeftGrid;
      this._lastRenderedStyleBottomRightGrid = styleBottomRightGrid;
      this._lastRenderedStyleTopLeftGrid = styleTopLeftGrid;
      this._lastRenderedStyleTopRightGrid = styleTopRightGrid;
      this._lastRenderedWidth = width;
    }
  }, {
    key: "_prepareForRender",
    value: function _prepareForRender() {
      if (this._lastRenderedColumnWidth !== this.props.columnWidth || this._lastRenderedFixedColumnCount !== this.props.fixedColumnCount) {
        this._leftGridWidth = null;
      }

      if (this._lastRenderedFixedRowCount !== this.props.fixedRowCount || this._lastRenderedRowHeight !== this.props.rowHeight) {
        this._topGridHeight = null;
      }

      this._maybeCalculateCachedStyles();

      this._lastRenderedColumnWidth = this.props.columnWidth;
      this._lastRenderedFixedColumnCount = this.props.fixedColumnCount;
      this._lastRenderedFixedRowCount = this.props.fixedRowCount;
      this._lastRenderedRowHeight = this.props.rowHeight;
    }
  }, {
    key: "_renderBottomLeftGrid",
    value: function _renderBottomLeftGrid(props) {
      var enableFixedColumnScroll = props.enableFixedColumnScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          hideBottomLeftGridScrollbar = props.hideBottomLeftGridScrollbar;
      var showVerticalScrollbar = this.state.showVerticalScrollbar;

      if (!fixedColumnCount) {
        return null;
      }

      var additionalRowCount = showVerticalScrollbar ? 1 : 0,
          height = this._getBottomGridHeight(props),
          width = this._getLeftGridWidth(props),
          scrollbarSize = this.state.showVerticalScrollbar ? this.state.scrollbarSize : 0,
          gridWidth = hideBottomLeftGridScrollbar ? width + scrollbarSize : width;

      var bottomLeftGrid = react__WEBPACK_IMPORTED_MODULE_9__.createElement(_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        cellRenderer: this._cellRendererBottomLeftGrid,
        className: this.props.classNameBottomLeftGrid,
        columnCount: fixedColumnCount,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomLeftGrid,
        height: height,
        onScroll: enableFixedColumnScroll ? this._onScrollTop : undefined,
        ref: this._bottomLeftGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount) + additionalRowCount,
        rowHeight: this._rowHeightBottomGrid,
        style: this._bottomLeftGridStyle,
        tabIndex: null,
        width: gridWidth
      }));

      if (hideBottomLeftGridScrollbar) {
        return react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
          className: "BottomLeftGrid_ScrollWrapper",
          style: _objectSpread({}, this._bottomLeftGridStyle, {
            height: height,
            width: width,
            overflowY: 'hidden'
          })
        }, bottomLeftGrid);
      }

      return bottomLeftGrid;
    }
  }, {
    key: "_renderBottomRightGrid",
    value: function _renderBottomRightGrid(props) {
      var columnCount = props.columnCount,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          scrollToColumn = props.scrollToColumn,
          scrollToRow = props.scrollToRow;
      return react__WEBPACK_IMPORTED_MODULE_9__.createElement(_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        cellRenderer: this._cellRendererBottomRightGrid,
        className: this.props.classNameBottomRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount),
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomRightGrid,
        height: this._getBottomGridHeight(props),
        onScroll: this._onScroll,
        onScrollbarPresenceChange: this._onScrollbarPresenceChange,
        ref: this._bottomRightGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount),
        rowHeight: this._rowHeightBottomGrid,
        scrollToColumn: scrollToColumn - fixedColumnCount,
        scrollToRow: scrollToRow - fixedRowCount,
        style: this._bottomRightGridStyle,
        width: this._getRightGridWidth(props)
      }));
    }
  }, {
    key: "_renderTopLeftGrid",
    value: function _renderTopLeftGrid(props) {
      var fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount;

      if (!fixedColumnCount || !fixedRowCount) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_9__.createElement(_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        className: this.props.classNameTopLeftGrid,
        columnCount: fixedColumnCount,
        height: this._getTopGridHeight(props),
        ref: this._topLeftGridRef,
        rowCount: fixedRowCount,
        style: this._topLeftGridStyle,
        tabIndex: null,
        width: this._getLeftGridWidth(props)
      }));
    }
  }, {
    key: "_renderTopRightGrid",
    value: function _renderTopRightGrid(props) {
      var columnCount = props.columnCount,
          enableFixedRowScroll = props.enableFixedRowScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          scrollLeft = props.scrollLeft,
          hideTopRightGridScrollbar = props.hideTopRightGridScrollbar;
      var _this$state5 = this.state,
          showHorizontalScrollbar = _this$state5.showHorizontalScrollbar,
          scrollbarSize = _this$state5.scrollbarSize;

      if (!fixedRowCount) {
        return null;
      }

      var additionalColumnCount = showHorizontalScrollbar ? 1 : 0,
          height = this._getTopGridHeight(props),
          width = this._getRightGridWidth(props),
          additionalHeight = showHorizontalScrollbar ? scrollbarSize : 0;

      var gridHeight = height,
          style = this._topRightGridStyle;

      if (hideTopRightGridScrollbar) {
        gridHeight = height + additionalHeight;
        style = _objectSpread({}, this._topRightGridStyle, {
          left: 0
        });
      }

      var topRightGrid = react__WEBPACK_IMPORTED_MODULE_9__.createElement(_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        cellRenderer: this._cellRendererTopRightGrid,
        className: this.props.classNameTopRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount) + additionalColumnCount,
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheTopRightGrid,
        height: gridHeight,
        onScroll: enableFixedRowScroll ? this._onScrollLeft : undefined,
        ref: this._topRightGridRef,
        rowCount: fixedRowCount,
        scrollLeft: scrollLeft,
        style: style,
        tabIndex: null,
        width: width
      }));

      if (hideTopRightGridScrollbar) {
        return react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
          className: "TopRightGrid_ScrollWrapper",
          style: _objectSpread({}, this._topRightGridStyle, {
            height: height,
            width: width,
            overflowX: 'hidden'
          })
        }, topRightGrid);
      }

      return topRightGrid;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) {
        return {
          scrollLeft: nextProps.scrollLeft != null && nextProps.scrollLeft >= 0 ? nextProps.scrollLeft : prevState.scrollLeft,
          scrollTop: nextProps.scrollTop != null && nextProps.scrollTop >= 0 ? nextProps.scrollTop : prevState.scrollTop
        };
      }

      return null;
    }
  }]);

  return MultiGrid;
}(react__WEBPACK_IMPORTED_MODULE_9__.PureComponent);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(MultiGrid, "defaultProps", {
  classNameBottomLeftGrid: '',
  classNameBottomRightGrid: '',
  classNameTopLeftGrid: '',
  classNameTopRightGrid: '',
  enableFixedColumnScroll: false,
  enableFixedRowScroll: false,
  fixedColumnCount: 0,
  fixedRowCount: 0,
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  styleBottomLeftGrid: {},
  styleBottomRightGrid: {},
  styleTopLeftGrid: {},
  styleTopRightGrid: {},
  hideTopRightGridScrollbar: false,
  hideBottomLeftGridScrollbar: false
});

MultiGrid.propTypes =  true ? {
  classNameBottomLeftGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string).isRequired,
  classNameBottomRightGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string).isRequired,
  classNameTopLeftGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string).isRequired,
  classNameTopRightGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string).isRequired,
  enableFixedColumnScroll: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool).isRequired,
  enableFixedRowScroll: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool).isRequired,
  fixedColumnCount: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().number).isRequired,
  fixedRowCount: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().number).isRequired,
  onScrollbarPresenceChange: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object).isRequired,
  styleBottomLeftGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object).isRequired,
  styleBottomRightGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object).isRequired,
  styleTopLeftGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object).isRequired,
  styleTopRightGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object).isRequired,
  hideTopRightGridScrollbar: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),
  hideBottomLeftGridScrollbar: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool)
} : 0;
(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_10__.polyfill)(MultiGrid);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiGrid);

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/MultiGrid/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/MultiGrid/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiGrid: () => (/* reexport safe */ _MultiGrid__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MultiGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiGrid */ "./node_modules/react-virtualized/dist/es/MultiGrid/MultiGrid.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_MultiGrid__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ScrollSync/ScrollSync.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ScrollSync/ScrollSync.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollSync)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








/**
 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
 */

var ScrollSync =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ScrollSync, _React$PureComponent);

  function ScrollSync(props, context) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScrollSync);

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ScrollSync).call(this, props, context));
    _this.state = {
      clientHeight: 0,
      clientWidth: 0,
      scrollHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      scrollWidth: 0
    };
    _this._onScroll = _this._onScroll.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScrollSync, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state = this.state,
          clientHeight = _this$state.clientHeight,
          clientWidth = _this$state.clientWidth,
          scrollHeight = _this$state.scrollHeight,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop,
          scrollWidth = _this$state.scrollWidth;
      return children({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        onScroll: this._onScroll,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }, {
    key: "_onScroll",
    value: function _onScroll(_ref) {
      var clientHeight = _ref.clientHeight,
          clientWidth = _ref.clientWidth,
          scrollHeight = _ref.scrollHeight,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          scrollWidth = _ref.scrollWidth;
      this.setState({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }]);

  return ScrollSync;
}(react__WEBPACK_IMPORTED_MODULE_6__.PureComponent);


ScrollSync.propTypes =  true ? {
  /**
   * Function responsible for rendering 2 or more virtualized components.
   * This function should implement the following signature:
   * ({ onScroll, scrollLeft, scrollTop }) => PropTypes.element
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func).isRequired
} : 0;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ScrollSync/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ScrollSync/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollSync: () => (/* reexport safe */ _ScrollSync__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScrollSync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollSync */ "./node_modules/react-virtualized/dist/es/ScrollSync/ScrollSync.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ScrollSync__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/Column.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/Column.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Column)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultHeaderRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRenderer.js");
/* harmony import */ var _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defaultCellRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultCellRenderer.js");
/* harmony import */ var _defaultCellDataGetter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./defaultCellDataGetter */ "./node_modules/react-virtualized/dist/es/Table/defaultCellDataGetter.js");
/* harmony import */ var _SortDirection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SortDirection */ "./node_modules/react-virtualized/dist/es/Table/SortDirection.js");











/**
 * Describes the header and cell contents of a table column.
 */

var Column =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Column, _React$Component);

  function Column() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Column);

    return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Column).apply(this, arguments));
  }

  return Column;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Column, "defaultProps", {
  cellDataGetter: _defaultCellDataGetter__WEBPACK_IMPORTED_MODULE_8__["default"],
  cellRenderer: _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_7__["default"],
  defaultSortDirection: _SortDirection__WEBPACK_IMPORTED_MODULE_9__["default"].ASC,
  flexGrow: 0,
  flexShrink: 1,
  headerRenderer: _defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_6__["default"],
  style: {}
});


Column.propTypes =  true ? {
  /** Optional aria-label value to set on the column header */
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /**
   * Callback responsible for returning a cell's data, given its :dataKey
   * ({ columnData: any, dataKey: string, rowData: any }): any
   */
  cellDataGetter: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),

  /**
   * Callback responsible for rendering a cell's contents.
   * ({ cellData: any, columnData: any, dataKey: string, rowData: any, rowIndex: number }): node
   */
  cellRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),

  /** Optional CSS class to apply to cell */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /** Optional additional data passed to this column's :cellDataGetter */
  columnData: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),

  /** Uniquely identifies the row-data attribute corresponding to this cell */
  dataKey: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().any).isRequired,

  /** Optional direction to be used when clicked the first time */
  defaultSortDirection: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf([_SortDirection__WEBPACK_IMPORTED_MODULE_9__["default"].ASC, _SortDirection__WEBPACK_IMPORTED_MODULE_9__["default"].DESC]),

  /** If sort is enabled for the table at large, disable it for this column */
  disableSort: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /** Flex grow style; defaults to 0 */
  flexGrow: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),

  /** Flex shrink style; defaults to 1 */
  flexShrink: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),

  /** Optional CSS class to apply to this column's header */
  headerClassName: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /**
   * Optional callback responsible for rendering a column header contents.
   * ({ columnData: object, dataKey: string, disableSort: boolean, label: node, sortBy: string, sortDirection: string }): PropTypes.node
   */
  headerRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func).isRequired,

  /** Optional inline style to apply to this column's header */
  headerStyle: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),

  /** Optional id to set on the column header */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /** Header label for this column */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /** Maximum width of column; this property will only be used if :flexGrow is > 0. */
  maxWidth: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),

  /** Minimum width of column. */
  minWidth: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),

  /** Optional inline style to apply to cell */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),

  /** Flex basis (width) for this column; This value can grow or shrink based on :flexGrow and :flexShrink properties. */
  width: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number).isRequired
} : 0;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/SortDirection.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/SortDirection.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SortDirection = {
  /**
   * Sort items in ascending order.
   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
   */
  ASC: 'ASC',

  /**
   * Sort items in descending order.
   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
   */
  DESC: 'DESC'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortDirection);

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/SortIndicator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/SortIndicator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortIndicator)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SortDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SortDirection */ "./node_modules/react-virtualized/dist/es/Table/SortDirection.js");




/**
 * Displayed beside a header to indicate that a Table is currently sorted by this column.
 */

function SortIndicator(_ref) {
  var sortDirection = _ref.sortDirection;
  var classNames = (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('ReactVirtualized__Table__sortableHeaderIcon', {
    'ReactVirtualized__Table__sortableHeaderIcon--ASC': sortDirection === _SortDirection__WEBPACK_IMPORTED_MODULE_2__["default"].ASC,
    'ReactVirtualized__Table__sortableHeaderIcon--DESC': sortDirection === _SortDirection__WEBPACK_IMPORTED_MODULE_2__["default"].DESC
  });
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", {
    className: classNames,
    width: 18,
    height: 18,
    viewBox: "0 0 24 24"
  }, sortDirection === _SortDirection__WEBPACK_IMPORTED_MODULE_2__["default"].ASC ? react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M7 14l5-5 5 5z"
  }) : react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
}
SortIndicator.propTypes =  true ? {
  sortDirection: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf([_SortDirection__WEBPACK_IMPORTED_MODULE_2__["default"].ASC, _SortDirection__WEBPACK_IMPORTED_MODULE_2__["default"].DESC])
} : 0;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/Table.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/Table.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Column */ "./node_modules/react-virtualized/dist/es/Table/Column.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Grid */ "./node_modules/react-virtualized/dist/es/Grid/index.js");
/* harmony import */ var _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./defaultRowRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultRowRenderer.js");
/* harmony import */ var _defaultHeaderRowRenderer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./defaultHeaderRowRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRowRenderer.js");
/* harmony import */ var _SortDirection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SortDirection */ "./node_modules/react-virtualized/dist/es/Table/SortDirection.js");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










/**
 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
 * This component expects explicit width, height, and padding parameters.
 */

var Table =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Table, _React$PureComponent);

  function Table(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Table);

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Table).call(this, props));
    _this.state = {
      scrollbarWidth: 0
    };
    _this._createColumn = _this._createColumn.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this._createRow = _this._createRow.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this._onScroll = _this._onScroll.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this._onSectionRendered = _this._onSectionRendered.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this._setRef = _this._setRef.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Table, [{
    key: "forceUpdateGrid",
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }
    /** See Grid#getOffsetForCell */

  }, {
    key: "getOffsetForRow",
    value: function getOffsetForRow(_ref) {
      var alignment = _ref.alignment,
          index = _ref.index;

      if (this.Grid) {
        var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index
        }),
            scrollTop = _this$Grid$getOffsetF.scrollTop;

        return scrollTop;
      }

      return 0;
    }
    /** CellMeasurer compatibility */

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref2) {
      var columnIndex = _ref2.columnIndex,
          rowIndex = _ref2.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#measureAllCells */

  }, {
    key: "measureAllRows",
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }
    /** CellMeasurer compatibility */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$columnIndex = _ref3.columnIndex,
          columnIndex = _ref3$columnIndex === void 0 ? 0 : _ref3$columnIndex,
          _ref3$rowIndex = _ref3.rowIndex,
          rowIndex = _ref3$rowIndex === void 0 ? 0 : _ref3$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#recomputeGridSize */

  }, {
    key: "recomputeRowHeights",
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index
        });
      }
    }
    /** See Grid#scrollToPosition */

  }, {
    key: "scrollToPosition",
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({
          scrollTop: scrollTop
        });
      }
    }
    /** See Grid#scrollToCell */

  }, {
    key: "scrollToRow",
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: "getScrollbarWidth",
    value: function getScrollbarWidth() {
      if (this.Grid) {
        var _Grid = (0,react_dom__WEBPACK_IMPORTED_MODULE_11__.findDOMNode)(this.Grid);

        var clientWidth = _Grid.clientWidth || 0;
        var offsetWidth = _Grid.offsetWidth || 0;
        return offsetWidth - clientWidth;
      }

      return 0;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setScrollbarWidth();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._setScrollbarWidth();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          disableHeader = _this$props.disableHeader,
          gridClassName = _this$props.gridClassName,
          gridStyle = _this$props.gridStyle,
          headerHeight = _this$props.headerHeight,
          headerRowRenderer = _this$props.headerRowRenderer,
          height = _this$props.height,
          id = _this$props.id,
          noRowsRenderer = _this$props.noRowsRenderer,
          rowClassName = _this$props.rowClassName,
          rowStyle = _this$props.rowStyle,
          scrollToIndex = _this$props.scrollToIndex,
          style = _this$props.style,
          width = _this$props.width;
      var scrollbarWidth = this.state.scrollbarWidth;
      var availableRowsHeight = disableHeader ? height : height - headerHeight;
      var rowClass = typeof rowClassName === 'function' ? rowClassName({
        index: -1
      }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({
        index: -1
      }) : rowStyle; // Precompute and cache column styles before rendering rows and columns to speed things up

      this._cachedColumnStyles = [];
      react__WEBPACK_IMPORTED_MODULE_10__.Children.toArray(children).forEach(function (column, index) {
        var flexStyles = _this2._getFlexStyleForColumn(column, column.props.style);

        _this2._cachedColumnStyles[index] = _objectSpread({
          overflow: 'hidden'
        }, flexStyles);
      }); // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
      // This is done because Grid is a pure component and won't update unless its properties or state has changed.
      // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.

      return react__WEBPACK_IMPORTED_MODULE_10__.createElement("div", {
        "aria-label": this.props['aria-label'],
        "aria-labelledby": this.props['aria-labelledby'],
        "aria-colcount": react__WEBPACK_IMPORTED_MODULE_10__.Children.toArray(children).length,
        "aria-rowcount": this.props.rowCount,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__["default"])('ReactVirtualized__Table', className),
        id: id,
        role: "grid",
        style: style
      }, !disableHeader && headerRowRenderer({
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__["default"])('ReactVirtualized__Table__headerRow', rowClass),
        columns: this._getHeaderColumns(),
        style: _objectSpread({
          height: headerHeight,
          overflow: 'hidden',
          paddingRight: scrollbarWidth,
          width: width
        }, rowStyleObject)
      }), react__WEBPACK_IMPORTED_MODULE_10__.createElement(_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        "aria-readonly": null,
        autoContainerWidth: true,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__["default"])('ReactVirtualized__Table__Grid', gridClassName),
        cellRenderer: this._createRow,
        columnWidth: width,
        columnCount: 1,
        height: availableRowsHeight,
        id: undefined,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        role: "rowgroup",
        scrollbarWidth: scrollbarWidth,
        scrollToRow: scrollToIndex,
        style: _objectSpread({}, gridStyle, {
          overflowX: 'hidden'
        })
      })));
    }
  }, {
    key: "_createColumn",
    value: function _createColumn(_ref4) {
      var column = _ref4.column,
          columnIndex = _ref4.columnIndex,
          isScrolling = _ref4.isScrolling,
          parent = _ref4.parent,
          rowData = _ref4.rowData,
          rowIndex = _ref4.rowIndex;
      var onColumnClick = this.props.onColumnClick;
      var _column$props = column.props,
          cellDataGetter = _column$props.cellDataGetter,
          cellRenderer = _column$props.cellRenderer,
          className = _column$props.className,
          columnData = _column$props.columnData,
          dataKey = _column$props.dataKey,
          id = _column$props.id;
      var cellData = cellDataGetter({
        columnData: columnData,
        dataKey: dataKey,
        rowData: rowData
      });
      var renderedCell = cellRenderer({
        cellData: cellData,
        columnData: columnData,
        columnIndex: columnIndex,
        dataKey: dataKey,
        isScrolling: isScrolling,
        parent: parent,
        rowData: rowData,
        rowIndex: rowIndex
      });

      var onClick = function onClick(event) {
        onColumnClick && onColumnClick({
          columnData: columnData,
          dataKey: dataKey,
          event: event
        });
      };

      var style = this._cachedColumnStyles[columnIndex];
      var title = typeof renderedCell === 'string' ? renderedCell : null; // Avoid using object-spread syntax with multiple objects here,
      // Since it results in an extra method call to 'babel-runtime/helpers/extends'
      // See PR https://github.com/bvaughn/react-virtualized/pull/942

      return react__WEBPACK_IMPORTED_MODULE_10__.createElement("div", {
        "aria-colindex": columnIndex + 1,
        "aria-describedby": id,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__["default"])('ReactVirtualized__Table__rowColumn', className),
        key: 'Row' + rowIndex + '-' + 'Col' + columnIndex,
        onClick: onClick,
        role: "gridcell",
        style: style,
        title: title
      }, renderedCell);
    }
  }, {
    key: "_createHeader",
    value: function _createHeader(_ref5) {
      var column = _ref5.column,
          index = _ref5.index;
      var _this$props2 = this.props,
          headerClassName = _this$props2.headerClassName,
          headerStyle = _this$props2.headerStyle,
          onHeaderClick = _this$props2.onHeaderClick,
          sort = _this$props2.sort,
          sortBy = _this$props2.sortBy,
          sortDirection = _this$props2.sortDirection;
      var _column$props2 = column.props,
          columnData = _column$props2.columnData,
          dataKey = _column$props2.dataKey,
          defaultSortDirection = _column$props2.defaultSortDirection,
          disableSort = _column$props2.disableSort,
          headerRenderer = _column$props2.headerRenderer,
          id = _column$props2.id,
          label = _column$props2.label;
      var sortEnabled = !disableSort && sort;
      var classNames = (0,clsx__WEBPACK_IMPORTED_MODULE_8__["default"])('ReactVirtualized__Table__headerColumn', headerClassName, column.props.headerClassName, {
        ReactVirtualized__Table__sortableHeaderColumn: sortEnabled
      });

      var style = this._getFlexStyleForColumn(column, _objectSpread({}, headerStyle, {}, column.props.headerStyle));

      var renderedHeader = headerRenderer({
        columnData: columnData,
        dataKey: dataKey,
        disableSort: disableSort,
        label: label,
        sortBy: sortBy,
        sortDirection: sortDirection
      });
      var headerOnClick, headerOnKeyDown, headerTabIndex, headerAriaSort, headerAriaLabel;

      if (sortEnabled || onHeaderClick) {
        // If this is a sortable header, clicking it should update the table data's sorting.
        var isFirstTimeSort = sortBy !== dataKey; // If this is the firstTime sort of this column, use the column default sort order.
        // Otherwise, invert the direction of the sort.

        var newSortDirection = isFirstTimeSort ? defaultSortDirection : sortDirection === _SortDirection__WEBPACK_IMPORTED_MODULE_15__["default"].DESC ? _SortDirection__WEBPACK_IMPORTED_MODULE_15__["default"].ASC : _SortDirection__WEBPACK_IMPORTED_MODULE_15__["default"].DESC;

        var onClick = function onClick(event) {
          sortEnabled && sort({
            defaultSortDirection: defaultSortDirection,
            event: event,
            sortBy: dataKey,
            sortDirection: newSortDirection
          });
          onHeaderClick && onHeaderClick({
            columnData: columnData,
            dataKey: dataKey,
            event: event
          });
        };

        var onKeyDown = function onKeyDown(event) {
          if (event.key === 'Enter' || event.key === ' ') {
            onClick(event);
          }
        };

        headerAriaLabel = column.props['aria-label'] || label || dataKey;
        headerAriaSort = 'none';
        headerTabIndex = 0;
        headerOnClick = onClick;
        headerOnKeyDown = onKeyDown;
      }

      if (sortBy === dataKey) {
        headerAriaSort = sortDirection === _SortDirection__WEBPACK_IMPORTED_MODULE_15__["default"].ASC ? 'ascending' : 'descending';
      } // Avoid using object-spread syntax with multiple objects here,
      // Since it results in an extra method call to 'babel-runtime/helpers/extends'
      // See PR https://github.com/bvaughn/react-virtualized/pull/942


      return react__WEBPACK_IMPORTED_MODULE_10__.createElement("div", {
        "aria-label": headerAriaLabel,
        "aria-sort": headerAriaSort,
        className: classNames,
        id: id,
        key: 'Header-Col' + index,
        onClick: headerOnClick,
        onKeyDown: headerOnKeyDown,
        role: "columnheader",
        style: style,
        tabIndex: headerTabIndex
      }, renderedHeader);
    }
  }, {
    key: "_createRow",
    value: function _createRow(_ref6) {
      var _this3 = this;

      var index = _ref6.rowIndex,
          isScrolling = _ref6.isScrolling,
          key = _ref6.key,
          parent = _ref6.parent,
          style = _ref6.style;
      var _this$props3 = this.props,
          children = _this$props3.children,
          onRowClick = _this$props3.onRowClick,
          onRowDoubleClick = _this$props3.onRowDoubleClick,
          onRowRightClick = _this$props3.onRowRightClick,
          onRowMouseOver = _this$props3.onRowMouseOver,
          onRowMouseOut = _this$props3.onRowMouseOut,
          rowClassName = _this$props3.rowClassName,
          rowGetter = _this$props3.rowGetter,
          rowRenderer = _this$props3.rowRenderer,
          rowStyle = _this$props3.rowStyle;
      var scrollbarWidth = this.state.scrollbarWidth;
      var rowClass = typeof rowClassName === 'function' ? rowClassName({
        index: index
      }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({
        index: index
      }) : rowStyle;
      var rowData = rowGetter({
        index: index
      });
      var columns = react__WEBPACK_IMPORTED_MODULE_10__.Children.toArray(children).map(function (column, columnIndex) {
        return _this3._createColumn({
          column: column,
          columnIndex: columnIndex,
          isScrolling: isScrolling,
          parent: parent,
          rowData: rowData,
          rowIndex: index,
          scrollbarWidth: scrollbarWidth
        });
      });
      var className = (0,clsx__WEBPACK_IMPORTED_MODULE_8__["default"])('ReactVirtualized__Table__row', rowClass);

      var flattenedStyle = _objectSpread({}, style, {
        height: this._getRowHeight(index),
        overflow: 'hidden',
        paddingRight: scrollbarWidth
      }, rowStyleObject);

      return rowRenderer({
        className: className,
        columns: columns,
        index: index,
        isScrolling: isScrolling,
        key: key,
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowRightClick: onRowRightClick,
        onRowMouseOver: onRowMouseOver,
        onRowMouseOut: onRowMouseOut,
        rowData: rowData,
        style: flattenedStyle
      });
    }
    /**
     * Determines the flex-shrink, flex-grow, and width values for a cell (header or column).
     */

  }, {
    key: "_getFlexStyleForColumn",
    value: function _getFlexStyleForColumn(column) {
      var customStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var flexValue = "".concat(column.props.flexGrow, " ").concat(column.props.flexShrink, " ").concat(column.props.width, "px");

      var style = _objectSpread({}, customStyle, {
        flex: flexValue,
        msFlex: flexValue,
        WebkitFlex: flexValue
      });

      if (column.props.maxWidth) {
        style.maxWidth = column.props.maxWidth;
      }

      if (column.props.minWidth) {
        style.minWidth = column.props.minWidth;
      }

      return style;
    }
  }, {
    key: "_getHeaderColumns",
    value: function _getHeaderColumns() {
      var _this4 = this;

      var _this$props4 = this.props,
          children = _this$props4.children,
          disableHeader = _this$props4.disableHeader;
      var items = disableHeader ? [] : react__WEBPACK_IMPORTED_MODULE_10__.Children.toArray(children);
      return items.map(function (column, index) {
        return _this4._createHeader({
          column: column,
          index: index
        });
      });
    }
  }, {
    key: "_getRowHeight",
    value: function _getRowHeight(rowIndex) {
      var rowHeight = this.props.rowHeight;
      return typeof rowHeight === 'function' ? rowHeight({
        index: rowIndex
      }) : rowHeight;
    }
  }, {
    key: "_onScroll",
    value: function _onScroll(_ref7) {
      var clientHeight = _ref7.clientHeight,
          scrollHeight = _ref7.scrollHeight,
          scrollTop = _ref7.scrollTop;
      var onScroll = this.props.onScroll;
      onScroll({
        clientHeight: clientHeight,
        scrollHeight: scrollHeight,
        scrollTop: scrollTop
      });
    }
  }, {
    key: "_onSectionRendered",
    value: function _onSectionRendered(_ref8) {
      var rowOverscanStartIndex = _ref8.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref8.rowOverscanStopIndex,
          rowStartIndex = _ref8.rowStartIndex,
          rowStopIndex = _ref8.rowStopIndex;
      var onRowsRendered = this.props.onRowsRendered;
      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }
  }, {
    key: "_setRef",
    value: function _setRef(ref) {
      this.Grid = ref;
    }
  }, {
    key: "_setScrollbarWidth",
    value: function _setScrollbarWidth() {
      var scrollbarWidth = this.getScrollbarWidth();
      this.setState({
        scrollbarWidth: scrollbarWidth
      });
    }
  }]);

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_10__.PureComponent);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Table, "defaultProps", {
  disableHeader: false,
  estimatedRowSize: 30,
  headerHeight: 0,
  headerStyle: {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  overscanIndicesGetter: _Grid__WEBPACK_IMPORTED_MODULE_12__.accessibilityOverscanIndicesGetter,
  overscanRowCount: 10,
  rowRenderer: _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_13__["default"],
  headerRowRenderer: _defaultHeaderRowRenderer__WEBPACK_IMPORTED_MODULE_14__["default"],
  rowStyle: {},
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
});


Table.propTypes =  true ? {
  /** This is just set on the grid top element. */
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /** This is just set on the grid top element. */
  'aria-labelledby': (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),

  /** One or more Columns describing the data displayed in this row */
  children: function children(props) {
    var children = react__WEBPACK_IMPORTED_MODULE_10__.Children.toArray(props.children);

    for (var i = 0; i < children.length; i++) {
      var childType = children[i].type;

      if (childType !== _Column__WEBPACK_IMPORTED_MODULE_9__["default"] && !(childType.prototype instanceof _Column__WEBPACK_IMPORTED_MODULE_9__["default"])) {
        return new Error('Table only accepts children of type Column');
      }
    }
  },

  /** Optional CSS class name */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /** Disable rendering the header at all */
  disableHeader: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),

  /**
   * Used to estimate the total height of a Table before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number).isRequired,

  /** Optional custom CSS class name to attach to inner Grid element. */
  gridClassName: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /** Optional inline style to attach to inner Grid element. */
  gridStyle: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object),

  /** Optional CSS class to apply to all column headers */
  headerClassName: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /** Fixed height of header row */
  headerHeight: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number).isRequired,

  /**
   * Responsible for rendering a table row given an array of columns:
   * Should implement the following interface: ({
   *   className: string,
   *   columns: any[],
   *   style: any
   * }): PropTypes.node
   */
  headerRowRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /** Optional custom inline style to attach to table header columns. */
  headerStyle: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object),

  /** Fixed/available height for out DOM element */
  height: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number).isRequired,

  /** Optional id */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /** Optional renderer to be used in place of table body rows when rowCount is 0 */
  noRowsRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Optional callback when a column is clicked.
   * ({ columnData: any, dataKey: string }): void
   */
  onColumnClick: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Optional callback when a column's header is clicked.
   * ({ columnData: any, dataKey: string }): void
   */
  onHeaderClick: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Callback invoked when a user clicks on a table row.
   * ({ index: number }): void
   */
  onRowClick: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Callback invoked when a user double-clicks on a table row.
   * ({ index: number }): void
   */
  onRowDoubleClick: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Callback invoked when the mouse leaves a table row.
   * ({ index: number }): void
   */
  onRowMouseOut: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Callback invoked when a user moves the mouse over a table row.
   * ({ index: number }): void
   */
  onRowMouseOver: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Callback invoked when a user right-clicks on a table row.
   * ({ index: number }): void
   */
  onRowRightClick: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Callback invoked with information about the slice of rows that were just rendered.
   * ({ startIndex, stopIndex }): void
   */
  onRowsRendered: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, scrollHeight, scrollTop }): void
   */
  onScroll: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func).isRequired,

  /** See Grid#overscanIndicesGetter */
  overscanIndicesGetter: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func).isRequired,

  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  overscanRowCount: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number).isRequired,

  /**
   * Optional CSS class to apply to all table rows (including the header row).
   * This property can be a CSS class name (string) or a function that returns a class name.
   * If a function is provided its signature should be: ({ index: number }): string
   */
  rowClassName: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_16___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func)]),

  /**
   * Callback responsible for returning a data row given an index.
   * ({ index: number }): any
   */
  rowGetter: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func).isRequired,

  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * ({ index: number }): number
   */
  rowHeight: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_16___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func)]).isRequired,

  /** Number of rows in table. */
  rowCount: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number).isRequired,

  /**
   * Responsible for rendering a table row given an array of columns:
   * Should implement the following interface: ({
   *   className: string,
   *   columns: Array,
   *   index: number,
   *   isScrolling: boolean,
   *   onRowClick: ?Function,
   *   onRowDoubleClick: ?Function,
   *   onRowMouseOver: ?Function,
   *   onRowMouseOut: ?Function,
   *   rowData: any,
   *   style: any
   * }): PropTypes.node
   */
  rowRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /** Optional custom inline style to attach to table rows. */
  rowStyle: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_16___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func)]).isRequired,

  /** See Grid#scrollToAlignment */
  scrollToAlignment: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToIndex: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number).isRequired,

  /** Vertical offset. */
  scrollTop: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number),

  /**
   * Sort function to be called if a sortable header is clicked.
   * Should implement the following interface: ({
   *   defaultSortDirection: 'ASC' | 'DESC',
   *   event: MouseEvent,
   *   sortBy: string,
   *   sortDirection: SortDirection
   * }): void
   */
  sort: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /** Table data is currently sorted by this :dataKey (if it is sorted at all) */
  sortBy: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /** Table data is currently sorted in this direction (if it is sorted at all) */
  sortDirection: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOf([_SortDirection__WEBPACK_IMPORTED_MODULE_15__["default"].ASC, _SortDirection__WEBPACK_IMPORTED_MODULE_15__["default"].DESC]),

  /** Optional inline style */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object),

  /** Tab index for focus */
  tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number),

  /** Width of list */
  width: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number).isRequired
} : 0;


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/createMultiSort.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/createMultiSort.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMultiSort)
/* harmony export */ });
function createMultiSort(sortCallback) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      defaultSortBy = _ref.defaultSortBy,
      _ref$defaultSortDirec = _ref.defaultSortDirection,
      defaultSortDirection = _ref$defaultSortDirec === void 0 ? {} : _ref$defaultSortDirec;

  if (!sortCallback) {
    throw Error("Required parameter \"sortCallback\" not specified");
  }

  var sortBy = defaultSortBy || [];
  var sortDirection = {};
  sortBy.forEach(function (dataKey) {
    sortDirection[dataKey] = defaultSortDirection[dataKey] !== undefined ? defaultSortDirection[dataKey] : 'ASC';
  });

  function sort(_ref2) {
    var defaultSortDirection = _ref2.defaultSortDirection,
        event = _ref2.event,
        dataKey = _ref2.sortBy;

    if (event.shiftKey) {
      // Shift + click appends a column to existing criteria
      if (sortDirection[dataKey] !== undefined) {
        sortDirection[dataKey] = sortDirection[dataKey] === 'ASC' ? 'DESC' : 'ASC';
      } else {
        sortDirection[dataKey] = defaultSortDirection;
        sortBy.push(dataKey);
      }
    } else if (event.ctrlKey || event.metaKey) {
      // Control + click removes column from sort (if pressent)
      var index = sortBy.indexOf(dataKey);

      if (index >= 0) {
        sortBy.splice(index, 1);
        delete sortDirection[dataKey];
      }
    } else {
      // Clear sortBy array of all non-selected keys
      sortBy.length = 0;
      sortBy.push(dataKey); // Clear sortDirection object of all non-selected keys

      var sortDirectionKeys = Object.keys(sortDirection);
      sortDirectionKeys.forEach(function (key) {
        if (key !== dataKey) delete sortDirection[key];
      }); // If key is already selected, reverse sort direction.
      // Else, set sort direction to default direction.

      if (sortDirection[dataKey] !== undefined) {
        sortDirection[dataKey] = sortDirection[dataKey] === 'ASC' ? 'DESC' : 'ASC';
      } else {
        sortDirection[dataKey] = defaultSortDirection;
      }
    } // Notify application code


    sortCallback({
      sortBy: sortBy,
      sortDirection: sortDirection
    });
  }

  return {
    sort: sort,
    sortBy: sortBy,
    sortDirection: sortDirection
  };
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/defaultCellDataGetter.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/defaultCellDataGetter.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultCellDataGetter)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Table/types.js");
/**
 * Default accessor for returning a cell value for a given attribute.
 * This function expects to operate on either a vanilla Object or an Immutable Map.
 * You should override the column's cellDataGetter if your data is some other type of object.
 */
function defaultCellDataGetter(_ref) {
  var dataKey = _ref.dataKey,
      rowData = _ref.rowData;

  if (typeof rowData.get === 'function') {
    return rowData.get(dataKey);
  } else {
    return rowData[dataKey];
  }
}


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/defaultCellRenderer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/defaultCellRenderer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultCellRenderer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Table/types.js");
/**
 * Default cell renderer that displays an attribute as a simple string
 * You should override the column's cellRenderer if your data is some other type of object.
 */
function defaultCellRenderer(_ref) {
  var cellData = _ref.cellData;

  if (cellData == null) {
    return '';
  } else {
    return String(cellData);
  }
}


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRenderer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/defaultHeaderRenderer.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultHeaderRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SortIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SortIndicator */ "./node_modules/react-virtualized/dist/es/Table/SortIndicator.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Table/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);



/**
 * Default table header renderer.
 */
function defaultHeaderRenderer(_ref) {
  var dataKey = _ref.dataKey,
      label = _ref.label,
      sortBy = _ref.sortBy,
      sortDirection = _ref.sortDirection;
  var showSortIndicator = sortBy === dataKey;
  var children = [react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "ReactVirtualized__Table__headerTruncatedText",
    key: "label",
    title: typeof label === 'string' ? label : null
  }, label)];

  if (showSortIndicator) {
    children.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SortIndicator__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: "SortIndicator",
      sortDirection: sortDirection
    }));
  }

  return children;
}
defaultHeaderRenderer.propTypes =  false ? 0 : _types__WEBPACK_IMPORTED_MODULE_2__.bpfrpt_proptype_HeaderRendererParams === (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any) ? {} : _types__WEBPACK_IMPORTED_MODULE_2__.bpfrpt_proptype_HeaderRendererParams;



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRowRenderer.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/defaultHeaderRowRenderer.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultHeaderRowRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Table/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

function defaultHeaderRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: className,
    role: "row",
    style: style
  }, columns);
}
defaultHeaderRowRenderer.propTypes =  false ? 0 : _types__WEBPACK_IMPORTED_MODULE_1__.bpfrpt_proptype_HeaderRowRendererParams === (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any) ? {} : _types__WEBPACK_IMPORTED_MODULE_1__.bpfrpt_proptype_HeaderRowRendererParams;



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/defaultRowRenderer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/defaultRowRenderer.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultRowRenderer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Table/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);



/**
 * Default row renderer for Table.
 */
function defaultRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      index = _ref.index,
      key = _ref.key,
      onRowClick = _ref.onRowClick,
      onRowDoubleClick = _ref.onRowDoubleClick,
      onRowMouseOut = _ref.onRowMouseOut,
      onRowMouseOver = _ref.onRowMouseOver,
      onRowRightClick = _ref.onRowRightClick,
      rowData = _ref.rowData,
      style = _ref.style;
  var a11yProps = {
    'aria-rowindex': index + 1
  };

  if (onRowClick || onRowDoubleClick || onRowMouseOut || onRowMouseOver || onRowRightClick) {
    a11yProps['aria-label'] = 'row';
    a11yProps.tabIndex = 0;

    if (onRowClick) {
      a11yProps.onClick = function (event) {
        return onRowClick({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }

    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = function (event) {
        return onRowDoubleClick({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }

    if (onRowMouseOut) {
      a11yProps.onMouseOut = function (event) {
        return onRowMouseOut({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }

    if (onRowMouseOver) {
      a11yProps.onMouseOver = function (event) {
        return onRowMouseOver({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }

    if (onRowRightClick) {
      a11yProps.onContextMenu = function (event) {
        return onRowRightClick({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a11yProps, {
    className: className,
    key: key,
    role: "row",
    style: style
  }), columns);
}
defaultRowRenderer.propTypes =  false ? 0 : _types__WEBPACK_IMPORTED_MODULE_2__.bpfrpt_proptype_RowRendererParams === (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any) ? {} : _types__WEBPACK_IMPORTED_MODULE_2__.bpfrpt_proptype_RowRendererParams;



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Column: () => (/* reexport safe */ _Column__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   SortDirection: () => (/* reexport safe */ _SortDirection__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   SortIndicator: () => (/* reexport safe */ _SortIndicator__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   Table: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   createMultiSort: () => (/* reexport safe */ _createMultiSort__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultCellDataGetter: () => (/* reexport safe */ _defaultCellDataGetter__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   defaultCellRenderer: () => (/* reexport safe */ _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   defaultHeaderRenderer: () => (/* reexport safe */ _defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   defaultHeaderRowRenderer: () => (/* reexport safe */ _defaultHeaderRowRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   defaultRowRenderer: () => (/* reexport safe */ _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _createMultiSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMultiSort */ "./node_modules/react-virtualized/dist/es/Table/createMultiSort.js");
/* harmony import */ var _defaultCellDataGetter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultCellDataGetter */ "./node_modules/react-virtualized/dist/es/Table/defaultCellDataGetter.js");
/* harmony import */ var _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultCellRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultCellRenderer.js");
/* harmony import */ var _defaultHeaderRowRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultHeaderRowRenderer.js */ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRowRenderer.js");
/* harmony import */ var _defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultHeaderRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRenderer.js");
/* harmony import */ var _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultRowRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultRowRenderer.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Column */ "./node_modules/react-virtualized/dist/es/Table/Column.js");
/* harmony import */ var _SortDirection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SortDirection */ "./node_modules/react-virtualized/dist/es/Table/SortDirection.js");
/* harmony import */ var _SortIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SortIndicator */ "./node_modules/react-virtualized/dist/es/Table/SortIndicator.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Table */ "./node_modules/react-virtualized/dist/es/Table/Table.js");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Table__WEBPACK_IMPORTED_MODULE_9__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/types.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/types.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bpfrpt_proptype_CellDataGetterParams: () => (/* binding */ bpfrpt_proptype_CellDataGetterParams),
/* harmony export */   bpfrpt_proptype_CellRendererParams: () => (/* binding */ bpfrpt_proptype_CellRendererParams),
/* harmony export */   bpfrpt_proptype_HeaderRendererParams: () => (/* binding */ bpfrpt_proptype_HeaderRendererParams),
/* harmony export */   bpfrpt_proptype_HeaderRowRendererParams: () => (/* binding */ bpfrpt_proptype_HeaderRowRendererParams),
/* harmony export */   bpfrpt_proptype_RowRendererParams: () => (/* binding */ bpfrpt_proptype_RowRendererParams)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
var bpfrpt_proptype_CellDataGetterParams =  false ? 0 : {
  "columnData": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  "dataKey": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired,
  "rowData": function rowData(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  }
};
var bpfrpt_proptype_CellRendererParams =  false ? 0 : {
  "cellData": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  "columnData": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  "dataKey": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired,
  "rowData": function rowData(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  },
  "rowIndex": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired
};
var bpfrpt_proptype_HeaderRowRendererParams =  false ? 0 : {
  "className": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired,
  "columns": prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(function (props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  }).isRequired,
  "style": function style(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  }
};
var bpfrpt_proptype_HeaderRendererParams =  false ? 0 : {
  "columnData": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  "dataKey": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired,
  "disableSort": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  "label": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  "sortBy": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  "sortDirection": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
};
var bpfrpt_proptype_RowRendererParams =  false ? 0 : {
  "className": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired,
  "columns": prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(function (props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  }).isRequired,
  "index": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "isScrolling": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool).isRequired,
  "onRowClick": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  "onRowDoubleClick": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  "onRowMouseOver": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  "onRowMouseOut": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  "rowData": function rowData(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  },
  "style": function style(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  },
  "key": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired
};







/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/WindowScroller/WindowScroller.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/WindowScroller/WindowScroller.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS_SCROLLING_TIMEOUT: () => (/* binding */ IS_SCROLLING_TIMEOUT),
/* harmony export */   "default": () => (/* binding */ WindowScroller)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_onScroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/onScroll */ "./node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js");
/* harmony import */ var _utils_dimensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/dimensions */ "./node_modules/react-virtualized/dist/es/WindowScroller/utils/dimensions.js");
/* harmony import */ var _vendor_detectElementResize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../vendor/detectElementResize */ "./node_modules/react-virtualized/dist/es/vendor/detectElementResize.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);








var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = 150;

var getWindow = function getWindow() {
  return typeof window !== 'undefined' ? window : undefined;
};

var WindowScroller = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WindowScroller, _React$PureComponent);

  function WindowScroller() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WindowScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WindowScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_window", getWindow());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_isMounted", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_positionFromTop", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_positionFromLeft", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_detectElementResize", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_child", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", _objectSpread({}, (0,_utils_dimensions__WEBPACK_IMPORTED_MODULE_10__.getDimensions)(_this.props.scrollElement, _this.props), {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    }));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_registerChild", function (element) {
      if (element && !(element instanceof Element)) {
        console.warn('WindowScroller registerChild expects to be passed Element or null');
      }

      _this._child = element;

      _this.updatePosition();
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onChildScroll", function (_ref) {
      var scrollTop = _ref.scrollTop;

      if (_this.state.scrollTop === scrollTop) {
        return;
      }

      var scrollElement = _this.props.scrollElement;

      if (scrollElement) {
        if (typeof scrollElement.scrollTo === 'function') {
          scrollElement.scrollTo(0, scrollTop + _this._positionFromTop);
        } else {
          scrollElement.scrollTop = scrollTop + _this._positionFromTop;
        }
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_registerResizeListener", function (element) {
      if (element === window) {
        window.addEventListener('resize', _this._onResize, false);
      } else {
        _this._detectElementResize.addResizeListener(element, _this._onResize);
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_unregisterResizeListener", function (element) {
      if (element === window) {
        window.removeEventListener('resize', _this._onResize, false);
      } else if (element) {
        _this._detectElementResize.removeResizeListener(element, _this._onResize);
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onResize", function () {
      _this.updatePosition();
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "__handleWindowScrollEvent", function () {
      if (!_this._isMounted) {
        return;
      }

      var onScroll = _this.props.onScroll;
      var scrollElement = _this.props.scrollElement;

      if (scrollElement) {
        var scrollOffset = (0,_utils_dimensions__WEBPACK_IMPORTED_MODULE_10__.getScrollOffset)(scrollElement);
        var scrollLeft = Math.max(0, scrollOffset.left - _this._positionFromLeft);
        var scrollTop = Math.max(0, scrollOffset.top - _this._positionFromTop);

        _this.setState({
          isScrolling: true,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });

        onScroll({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "__resetIsScrolling", function () {
      _this.setState({
        isScrolling: false
      });
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WindowScroller, [{
    key: "updatePosition",
    value: function updatePosition() {
      var scrollElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.scrollElement;
      var onResize = this.props.onResize;
      var _this$state = this.state,
          height = _this$state.height,
          width = _this$state.width;
      var thisNode = this._child || react_dom__WEBPACK_IMPORTED_MODULE_8__.findDOMNode(this);

      if (thisNode instanceof Element && scrollElement) {
        var offset = (0,_utils_dimensions__WEBPACK_IMPORTED_MODULE_10__.getPositionOffset)(thisNode, scrollElement);
        this._positionFromTop = offset.top;
        this._positionFromLeft = offset.left;
      }

      var dimensions = (0,_utils_dimensions__WEBPACK_IMPORTED_MODULE_10__.getDimensions)(scrollElement, this.props);

      if (height !== dimensions.height || width !== dimensions.width) {
        this.setState({
          height: dimensions.height,
          width: dimensions.width
        });
        onResize({
          height: dimensions.height,
          width: dimensions.width
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var scrollElement = this.props.scrollElement;
      this._detectElementResize = (0,_vendor_detectElementResize__WEBPACK_IMPORTED_MODULE_11__["default"])();
      this.updatePosition(scrollElement);

      if (scrollElement) {
        (0,_utils_onScroll__WEBPACK_IMPORTED_MODULE_9__.registerScrollListener)(this, scrollElement);

        this._registerResizeListener(scrollElement);
      }

      this._isMounted = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var scrollElement = this.props.scrollElement;
      var prevScrollElement = prevProps.scrollElement;

      if (prevScrollElement !== scrollElement && prevScrollElement != null && scrollElement != null) {
        this.updatePosition(scrollElement);
        (0,_utils_onScroll__WEBPACK_IMPORTED_MODULE_9__.unregisterScrollListener)(this, prevScrollElement);
        (0,_utils_onScroll__WEBPACK_IMPORTED_MODULE_9__.registerScrollListener)(this, scrollElement);

        this._unregisterResizeListener(prevScrollElement);

        this._registerResizeListener(scrollElement);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var scrollElement = this.props.scrollElement;

      if (scrollElement) {
        (0,_utils_onScroll__WEBPACK_IMPORTED_MODULE_9__.unregisterScrollListener)(this, scrollElement);

        this._unregisterResizeListener(scrollElement);
      }

      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state2 = this.state,
          isScrolling = _this$state2.isScrolling,
          scrollTop = _this$state2.scrollTop,
          scrollLeft = _this$state2.scrollLeft,
          height = _this$state2.height,
          width = _this$state2.width;
      return children({
        onChildScroll: this._onChildScroll,
        registerChild: this._registerChild,
        height: height,
        isScrolling: isScrolling,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        width: width
      });
    }
  }]);

  return WindowScroller;
}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, "propTypes",  false ? 0 : {
  /**
   * Function responsible for rendering children.
   * This function should implement the following signature:
   * ({ height, isScrolling, scrollLeft, scrollTop, width }) => PropTypes.element
   */
  "children": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /** Callback to be invoked on-resize: ({ height, width }) */
  "onResize": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /** Callback to be invoked on-scroll: ({ scrollLeft, scrollTop }) */
  "onScroll": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /** Element to attach scroll event listeners. Defaults to window. */
  "scrollElement": prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().any), function () {
    return (typeof Element === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_12___default().instanceOf(Element) : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any)).apply(this, arguments);
  }]),

  /**
   * Wait this amount of time after the last scroll event before resetting child `pointer-events`.
   */
  "scrollingResetTimeInterval": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,

  /** Height used for server-side rendering */
  "serverHeight": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,

  /** Width used for server-side rendering */
  "serverWidth": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired
}), _temp);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(WindowScroller, "defaultProps", {
  onResize: function onResize() {},
  onScroll: function onScroll() {},
  scrollingResetTimeInterval: IS_SCROLLING_TIMEOUT,
  scrollElement: getWindow(),
  serverHeight: 0,
  serverWidth: 0
});




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/WindowScroller/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/WindowScroller/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS_SCROLLING_TIMEOUT: () => (/* reexport safe */ _WindowScroller__WEBPACK_IMPORTED_MODULE_0__.IS_SCROLLING_TIMEOUT),
/* harmony export */   WindowScroller: () => (/* reexport safe */ _WindowScroller__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WindowScroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WindowScroller */ "./node_modules/react-virtualized/dist/es/WindowScroller/WindowScroller.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_WindowScroller__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/WindowScroller/utils/dimensions.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/WindowScroller/utils/dimensions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDimensions: () => (/* binding */ getDimensions),
/* harmony export */   getPositionOffset: () => (/* binding */ getPositionOffset),
/* harmony export */   getScrollOffset: () => (/* binding */ getScrollOffset)
/* harmony export */ });
/**
 * Gets the dimensions of the element, accounting for API differences between
 * `window` and other DOM elements.
 */
// TODO Move this into WindowScroller and import from there
var isWindow = function isWindow(element) {
  return element === window;
};

var getBoundingBox = function getBoundingBox(element) {
  return element.getBoundingClientRect();
};

function getDimensions(scrollElement, props) {
  if (!scrollElement) {
    return {
      height: props.serverHeight,
      width: props.serverWidth
    };
  } else if (isWindow(scrollElement)) {
    var _window = window,
        innerHeight = _window.innerHeight,
        innerWidth = _window.innerWidth;
    return {
      height: typeof innerHeight === 'number' ? innerHeight : 0,
      width: typeof innerWidth === 'number' ? innerWidth : 0
    };
  } else {
    return getBoundingBox(scrollElement);
  }
}
/**
 * Gets the vertical and horizontal position of an element within its scroll container.
 * Elements that have been “scrolled past” return negative values.
 * Handles edge-case where a user is navigating back (history) from an already-scrolled page.
 * In this case the body’s top or left position will be a negative number and this element’s top or left will be increased (by that amount).
 */

function getPositionOffset(element, container) {
  if (isWindow(container) && document.documentElement) {
    var containerElement = document.documentElement;
    var elementRect = getBoundingBox(element);
    var containerRect = getBoundingBox(containerElement);
    return {
      top: elementRect.top - containerRect.top,
      left: elementRect.left - containerRect.left
    };
  } else {
    var scrollOffset = getScrollOffset(container);

    var _elementRect = getBoundingBox(element);

    var _containerRect = getBoundingBox(container);

    return {
      top: _elementRect.top + scrollOffset.top - _containerRect.top,
      left: _elementRect.left + scrollOffset.left - _containerRect.left
    };
  }
}
/**
 * Gets the vertical and horizontal scroll amount of the element, accounting for IE compatibility
 * and API differences between `window` and other DOM elements.
 */

function getScrollOffset(element) {
  if (isWindow(element) && document.documentElement) {
    return {
      top: 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop,
      left: 'scrollX' in window ? window.scrollX : document.documentElement.scrollLeft
    };
  } else {
    return {
      top: element.scrollTop,
      left: element.scrollLeft
    };
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerScrollListener: () => (/* binding */ registerScrollListener),
/* harmony export */   unregisterScrollListener: () => (/* binding */ unregisterScrollListener)
/* harmony export */ });
/* harmony import */ var _utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/requestAnimationTimeout */ "./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js");
/* harmony import */ var _WindowScroller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WindowScroller.js */ "./node_modules/react-virtualized/dist/es/WindowScroller/WindowScroller.js");

var mountedInstances = [];
var originalBodyPointerEvents = null;
var disablePointerEventsTimeoutId = null;

function enablePointerEventsIfDisabled() {
  if (disablePointerEventsTimeoutId) {
    disablePointerEventsTimeoutId = null;

    if (document.body && originalBodyPointerEvents != null) {
      document.body.style.pointerEvents = originalBodyPointerEvents;
    }

    originalBodyPointerEvents = null;
  }
}

function enablePointerEventsAfterDelayCallback() {
  enablePointerEventsIfDisabled();
  mountedInstances.forEach(function (instance) {
    return instance.__resetIsScrolling();
  });
}

function enablePointerEventsAfterDelay() {
  if (disablePointerEventsTimeoutId) {
    (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_0__.cancelAnimationTimeout)(disablePointerEventsTimeoutId);
  }

  var maximumTimeout = 0;
  mountedInstances.forEach(function (instance) {
    maximumTimeout = Math.max(maximumTimeout, instance.props.scrollingResetTimeInterval);
  });
  disablePointerEventsTimeoutId = (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_0__.requestAnimationTimeout)(enablePointerEventsAfterDelayCallback, maximumTimeout);
}

function onScrollWindow(event) {
  if (event.currentTarget === window && originalBodyPointerEvents == null && document.body) {
    originalBodyPointerEvents = document.body.style.pointerEvents;
    document.body.style.pointerEvents = 'none';
  }

  enablePointerEventsAfterDelay();
  mountedInstances.forEach(function (instance) {
    if (instance.props.scrollElement === event.currentTarget) {
      instance.__handleWindowScrollEvent();
    }
  });
}

function registerScrollListener(component, element) {
  if (!mountedInstances.some(function (instance) {
    return instance.props.scrollElement === element;
  })) {
    element.addEventListener('scroll', onScrollWindow);
  }

  mountedInstances.push(component);
}
function unregisterScrollListener(component, element) {
  mountedInstances = mountedInstances.filter(function (instance) {
    return instance !== component;
  });

  if (!mountedInstances.length) {
    element.removeEventListener('scroll', onScrollWindow);

    if (disablePointerEventsTimeoutId) {
      (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_0__.cancelAnimationTimeout)(disablePointerEventsTimeoutId);
      enablePointerEventsIfDisabled();
    }
  }
}


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrowKeyStepper: () => (/* reexport safe */ _ArrowKeyStepper__WEBPACK_IMPORTED_MODULE_0__.ArrowKeyStepper),
/* harmony export */   AutoSizer: () => (/* reexport safe */ _AutoSizer__WEBPACK_IMPORTED_MODULE_1__.AutoSizer),
/* harmony export */   CellMeasurer: () => (/* reexport safe */ _CellMeasurer__WEBPACK_IMPORTED_MODULE_2__.CellMeasurer),
/* harmony export */   CellMeasurerCache: () => (/* reexport safe */ _CellMeasurer__WEBPACK_IMPORTED_MODULE_2__.CellMeasurerCache),
/* harmony export */   Collection: () => (/* reexport safe */ _Collection__WEBPACK_IMPORTED_MODULE_3__.Collection),
/* harmony export */   Column: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.Column),
/* harmony export */   ColumnSizer: () => (/* reexport safe */ _ColumnSizer__WEBPACK_IMPORTED_MODULE_4__.ColumnSizer),
/* harmony export */   Grid: () => (/* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_5__.Grid),
/* harmony export */   InfiniteLoader: () => (/* reexport safe */ _InfiniteLoader__WEBPACK_IMPORTED_MODULE_6__.InfiniteLoader),
/* harmony export */   List: () => (/* reexport safe */ _List__WEBPACK_IMPORTED_MODULE_7__.List),
/* harmony export */   Masonry: () => (/* reexport safe */ _Masonry__WEBPACK_IMPORTED_MODULE_8__.Masonry),
/* harmony export */   MultiGrid: () => (/* reexport safe */ _MultiGrid__WEBPACK_IMPORTED_MODULE_9__.MultiGrid),
/* harmony export */   ScrollSync: () => (/* reexport safe */ _ScrollSync__WEBPACK_IMPORTED_MODULE_10__.ScrollSync),
/* harmony export */   SortDirection: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.SortDirection),
/* harmony export */   SortIndicator: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.SortIndicator),
/* harmony export */   Table: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.Table),
/* harmony export */   WindowScroller: () => (/* reexport safe */ _WindowScroller__WEBPACK_IMPORTED_MODULE_12__.WindowScroller),
/* harmony export */   accessibilityOverscanIndicesGetter: () => (/* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_5__.accessibilityOverscanIndicesGetter),
/* harmony export */   createMasonryCellPositioner: () => (/* reexport safe */ _Masonry__WEBPACK_IMPORTED_MODULE_8__.createCellPositioner),
/* harmony export */   createTableMultiSort: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.createMultiSort),
/* harmony export */   defaultCellRangeRenderer: () => (/* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_5__.defaultCellRangeRenderer),
/* harmony export */   defaultOverscanIndicesGetter: () => (/* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_5__.defaultOverscanIndicesGetter),
/* harmony export */   defaultTableCellDataGetter: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.defaultCellDataGetter),
/* harmony export */   defaultTableCellRenderer: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.defaultCellRenderer),
/* harmony export */   defaultTableHeaderRenderer: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.defaultHeaderRenderer),
/* harmony export */   defaultTableHeaderRowRenderer: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.defaultHeaderRowRenderer),
/* harmony export */   defaultTableRowRenderer: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.defaultRowRenderer)
/* harmony export */ });
/* harmony import */ var _ArrowKeyStepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrowKeyStepper */ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/index.js");
/* harmony import */ var _AutoSizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoSizer */ "./node_modules/react-virtualized/dist/es/AutoSizer/index.js");
/* harmony import */ var _CellMeasurer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js");
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Collection */ "./node_modules/react-virtualized/dist/es/Collection/index.js");
/* harmony import */ var _ColumnSizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColumnSizer */ "./node_modules/react-virtualized/dist/es/ColumnSizer/index.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Grid */ "./node_modules/react-virtualized/dist/es/Grid/index.js");
/* harmony import */ var _InfiniteLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InfiniteLoader */ "./node_modules/react-virtualized/dist/es/InfiniteLoader/index.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./List */ "./node_modules/react-virtualized/dist/es/List/index.js");
/* harmony import */ var _Masonry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Masonry */ "./node_modules/react-virtualized/dist/es/Masonry/index.js");
/* harmony import */ var _MultiGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MultiGrid */ "./node_modules/react-virtualized/dist/es/MultiGrid/index.js");
/* harmony import */ var _ScrollSync__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ScrollSync */ "./node_modules/react-virtualized/dist/es/ScrollSync/index.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Table */ "./node_modules/react-virtualized/dist/es/Table/index.js");
/* harmony import */ var _WindowScroller__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WindowScroller */ "./node_modules/react-virtualized/dist/es/WindowScroller/index.js");














/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/utils/animationFrame.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/utils/animationFrame.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   caf: () => (/* binding */ caf),
/* harmony export */   raf: () => (/* binding */ raf)
/* harmony export */ });
// Properly handle server-side rendering.
var win;

if (typeof window !== 'undefined') {
  win = window;
} else if (typeof self !== 'undefined') {
  win = self;
} else {
  win = {};
} // requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/


var request = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function (callback) {
  return win.setTimeout(callback, 1000 / 60);
};

var cancel = win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame || function (id) {
  win.clearTimeout(id);
};

var raf = request;
var caf = cancel;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCallbackMemoizer)
/* harmony export */ });
/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */
function createCallbackMemoizer() {
  var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var cachedIndices = {};
  return function (_ref) {
    var callback = _ref.callback,
        indices = _ref.indices;
    var keys = Object.keys(indices);
    var allInitialized = !requireAllKeys || keys.every(function (key) {
      var value = indices[key];
      return Array.isArray(value) ? value.length > 0 : value >= 0;
    });
    var indexChanged = keys.length !== Object.keys(cachedIndices).length || keys.some(function (key) {
      var cachedValue = cachedIndices[key];
      var value = indices[key];
      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
    });
    cachedIndices = indices;

    if (allInitialized && indexChanged) {
      callback(indices);
    }
  };
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/utils/getUpdatedOffsetForIndex.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/utils/getUpdatedOffsetForIndex.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUpdatedOffsetForIndex)
/* harmony export */ });
/**
 * Determines a new offset that ensures a certain cell is visible, given the current offset.
 * If the cell is already visible then the current offset will be returned.
 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
 *
 * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
 * @param cellOffset Offset (x or y) position for cell
 * @param cellSize Size (width or height) of cell
 * @param containerSize Total size (width or height) of the container
 * @param currentOffset Container's current (x or y) offset
 * @return Offset to use to ensure the specified cell is visible
 */
function getUpdatedOffsetForIndex(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'auto' : _ref$align,
      cellOffset = _ref.cellOffset,
      cellSize = _ref.cellSize,
      containerSize = _ref.containerSize,
      currentOffset = _ref.currentOffset;
  var maxOffset = cellOffset;
  var minOffset = maxOffset - containerSize + cellSize;

  switch (align) {
    case 'start':
      return maxOffset;

    case 'end':
      return minOffset;

    case 'center':
      return maxOffset - (containerSize - cellSize) / 2;

    default:
      return Math.max(minOffset, Math.min(maxOffset, currentOffset));
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bpfrpt_proptype_AnimationTimeoutId: () => (/* binding */ bpfrpt_proptype_AnimationTimeoutId),
/* harmony export */   cancelAnimationTimeout: () => (/* binding */ cancelAnimationTimeout),
/* harmony export */   requestAnimationTimeout: () => (/* binding */ requestAnimationTimeout)
/* harmony export */ });
/* harmony import */ var _animationFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animationFrame */ "./node_modules/react-virtualized/dist/es/utils/animationFrame.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var bpfrpt_proptype_AnimationTimeoutId =  false ? 0 : {
  "id": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
var cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return (0,_animationFrame__WEBPACK_IMPORTED_MODULE_0__.caf)(frame.id);
};
/**
 * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
 * When the delay time has been reached the function you're timing out will be called.
 *
 * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
 */

var requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
  var start; // wait for end of processing current event handler, because event handler may be long

  Promise.resolve().then(function () {
    start = Date.now();
  });

  var timeout = function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = (0,_animationFrame__WEBPACK_IMPORTED_MODULE_0__.raf)(timeout);
    }
  };

  var frame = {
    id: (0,_animationFrame__WEBPACK_IMPORTED_MODULE_0__.raf)(timeout)
  };
  return frame;
};



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/vendor/binarySearchBounds.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/vendor/binarySearchBounds.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/binary-search-bounds
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/
function _GEA(a, l, h, y) {
  var i = h + 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (x >= y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return i;
}

function _GEP(a, l, h, y, c) {
  var i = h + 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (c(x, y) >= 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return i;
}

function dispatchBsearchGE(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _GEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _GTA(a, l, h, y) {
  var i = h + 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (x > y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return i;
}

function _GTP(a, l, h, y, c) {
  var i = h + 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (c(x, y) > 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return i;
}

function dispatchBsearchGT(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _GTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _LTA(a, l, h, y) {
  var i = l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (x < y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return i;
}

function _LTP(a, l, h, y, c) {
  var i = l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (c(x, y) < 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return i;
}

function dispatchBsearchLT(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _LTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _LEA(a, l, h, y) {
  var i = l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (x <= y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return i;
}

function _LEP(a, l, h, y, c) {
  var i = l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (c(x, y) <= 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return i;
}

function dispatchBsearchLE(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _LEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _EQA(a, l, h, y) {
  l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (x === y) {
      return m;
    } else if (x <= y) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return -1;
}

function _EQP(a, l, h, y, c) {
  l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    var p = c(x, y);

    if (p === 0) {
      return m;
    } else if (p <= 0) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return -1;
}

function dispatchBsearchEQ(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _EQP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _EQA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ge: dispatchBsearchGE,
  gt: dispatchBsearchGT,
  lt: dispatchBsearchLT,
  le: dispatchBsearchLE,
  eq: dispatchBsearchEQ
});

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/vendor/detectElementResize.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/vendor/detectElementResize.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDetectElementResize)
/* harmony export */ });
/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 * 5) Added support for injecting custom window object
 **/
function createDetectElementResize(nonce, hostWindow) {
  // Check `document` and `window` in case of server-side rendering
  var _window;

  if (typeof hostWindow !== 'undefined') {
    _window = hostWindow;
  } else if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = __webpack_require__.g;
  }

  var attachEvent = typeof _window.document !== 'undefined' && _window.document.attachEvent;

  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };

      return function (fn) {
        return raf(fn);
      };
    }();

    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
          expand = triggers.firstElementChild,
          contract = triggers.lastElementChild,
          expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className && typeof e.target.className.indexOf === 'function' && e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }

      var element = this;
      resetTriggers(this);

      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }

      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;

          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };
    /* Detect CSS Animations support to detect element display/re-attach */


    var animation = false,
        keyframeprefix = '',
        animationstartevent = 'animationstart',
        domPrefixes = 'Webkit Moz O ms'.split(' '),
        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
        pfx = '';
    {
      var elm = _window.document.createElement('fakeelement');

      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }
    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }

  var createStyles = function createStyles(doc) {
    if (!doc.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          head = doc.head || doc.getElementsByTagName('head')[0],
          style = doc.createElement('style');
      style.id = 'detectElementResize';
      style.type = 'text/css';

      if (nonce != null) {
        style.setAttribute('nonce', nonce);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) {
      element.attachEvent('onresize', fn);
    } else {
      if (!element.__resizeTriggers__) {
        var doc = element.ownerDocument;

        var elementStyle = _window.getComputedStyle(element);

        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }

        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement('div')).className = 'resize-triggers';
        var resizeTriggersHtml = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';

        if (window.trustedTypes) {
          var staticPolicy = trustedTypes.createPolicy('react-virtualized-auto-sizer', {
            createHTML: function createHTML() {
              return resizeTriggersHtml;
            }
          });
          element.__resizeTriggers__.innerHTML = staticPolicy.createHTML('');
        } else {
          element.__resizeTriggers__.innerHTML = resizeTriggersHtml;
        }

        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);
        /* Listen for a css animation to detect element display/re-attach */

        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) {
              resetTriggers(element);
            }
          };

          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }

      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) {
      element.detachEvent('onresize', fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);

      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);

        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);

          element.__resizeTriggers__.__animationListener__ = null;
        }

        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {// Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/vendor/intervalTree.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/vendor/intervalTree.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createWrapper)
/* harmony export */ });
/* harmony import */ var _binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binarySearchBounds */ "./node_modules/react-virtualized/dist/es/vendor/binarySearchBounds.js");
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/interval-tree-1d
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax in an upstream dependency.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/

var NOT_FOUND = 0;
var SUCCESS = 1;
var EMPTY = 2;

function IntervalTreeNode(mid, left, right, leftPoints, rightPoints) {
  this.mid = mid;
  this.left = left;
  this.right = right;
  this.leftPoints = leftPoints;
  this.rightPoints = rightPoints;
  this.count = (left ? left.count : 0) + (right ? right.count : 0) + leftPoints.length;
}

var proto = IntervalTreeNode.prototype;

function copy(a, b) {
  a.mid = b.mid;
  a.left = b.left;
  a.right = b.right;
  a.leftPoints = b.leftPoints;
  a.rightPoints = b.rightPoints;
  a.count = b.count;
}

function rebuild(node, intervals) {
  var ntree = createIntervalTree(intervals);
  node.mid = ntree.mid;
  node.left = ntree.left;
  node.right = ntree.right;
  node.leftPoints = ntree.leftPoints;
  node.rightPoints = ntree.rightPoints;
  node.count = ntree.count;
}

function rebuildWithInterval(node, interval) {
  var intervals = node.intervals([]);
  intervals.push(interval);
  rebuild(node, intervals);
}

function rebuildWithoutInterval(node, interval) {
  var intervals = node.intervals([]);
  var idx = intervals.indexOf(interval);

  if (idx < 0) {
    return NOT_FOUND;
  }

  intervals.splice(idx, 1);
  rebuild(node, intervals);
  return SUCCESS;
}

proto.intervals = function (result) {
  result.push.apply(result, this.leftPoints);

  if (this.left) {
    this.left.intervals(result);
  }

  if (this.right) {
    this.right.intervals(result);
  }

  return result;
};

proto.insert = function (interval) {
  var weight = this.count - this.leftPoints.length;
  this.count += 1;

  if (interval[1] < this.mid) {
    if (this.left) {
      if (4 * (this.left.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.left.insert(interval);
      }
    } else {
      this.left = createIntervalTree([interval]);
    }
  } else if (interval[0] > this.mid) {
    if (this.right) {
      if (4 * (this.right.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.right.insert(interval);
      }
    } else {
      this.right = createIntervalTree([interval]);
    }
  } else {
    var l = _binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__["default"].ge(this.leftPoints, interval, compareBegin);
    var r = _binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__["default"].ge(this.rightPoints, interval, compareEnd);
    this.leftPoints.splice(l, 0, interval);
    this.rightPoints.splice(r, 0, interval);
  }
};

proto.remove = function (interval) {
  var weight = this.count - this.leftPoints;

  if (interval[1] < this.mid) {
    if (!this.left) {
      return NOT_FOUND;
    }

    var rw = this.right ? this.right.count : 0;

    if (4 * rw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }

    var r = this.left.remove(interval);

    if (r === EMPTY) {
      this.left = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }

    return r;
  } else if (interval[0] > this.mid) {
    if (!this.right) {
      return NOT_FOUND;
    }

    var lw = this.left ? this.left.count : 0;

    if (4 * lw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }

    var r = this.right.remove(interval);

    if (r === EMPTY) {
      this.right = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }

    return r;
  } else {
    if (this.count === 1) {
      if (this.leftPoints[0] === interval) {
        return EMPTY;
      } else {
        return NOT_FOUND;
      }
    }

    if (this.leftPoints.length === 1 && this.leftPoints[0] === interval) {
      if (this.left && this.right) {
        var p = this;
        var n = this.left;

        while (n.right) {
          p = n;
          n = n.right;
        }

        if (p === this) {
          n.right = this.right;
        } else {
          var l = this.left;
          var r = this.right;
          p.count -= n.count;
          p.right = n.left;
          n.left = l;
          n.right = r;
        }

        copy(this, n);
        this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length;
      } else if (this.left) {
        copy(this, this.left);
      } else {
        copy(this, this.right);
      }

      return SUCCESS;
    }

    for (var l = _binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__["default"].ge(this.leftPoints, interval, compareBegin); l < this.leftPoints.length; ++l) {
      if (this.leftPoints[l][0] !== interval[0]) {
        break;
      }

      if (this.leftPoints[l] === interval) {
        this.count -= 1;
        this.leftPoints.splice(l, 1);

        for (var r = _binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__["default"].ge(this.rightPoints, interval, compareEnd); r < this.rightPoints.length; ++r) {
          if (this.rightPoints[r][1] !== interval[1]) {
            break;
          } else if (this.rightPoints[r] === interval) {
            this.rightPoints.splice(r, 1);
            return SUCCESS;
          }
        }
      }
    }

    return NOT_FOUND;
  }
};

function reportLeftRange(arr, hi, cb) {
  for (var i = 0; i < arr.length && arr[i][0] <= hi; ++i) {
    var r = cb(arr[i]);

    if (r) {
      return r;
    }
  }
}

function reportRightRange(arr, lo, cb) {
  for (var i = arr.length - 1; i >= 0 && arr[i][1] >= lo; --i) {
    var r = cb(arr[i]);

    if (r) {
      return r;
    }
  }
}

function reportRange(arr, cb) {
  for (var i = 0; i < arr.length; ++i) {
    var r = cb(arr[i]);

    if (r) {
      return r;
    }
  }
}

proto.queryPoint = function (x, cb) {
  if (x < this.mid) {
    if (this.left) {
      var r = this.left.queryPoint(x, cb);

      if (r) {
        return r;
      }
    }

    return reportLeftRange(this.leftPoints, x, cb);
  } else if (x > this.mid) {
    if (this.right) {
      var r = this.right.queryPoint(x, cb);

      if (r) {
        return r;
      }
    }

    return reportRightRange(this.rightPoints, x, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

proto.queryInterval = function (lo, hi, cb) {
  if (lo < this.mid && this.left) {
    var r = this.left.queryInterval(lo, hi, cb);

    if (r) {
      return r;
    }
  }

  if (hi > this.mid && this.right) {
    var r = this.right.queryInterval(lo, hi, cb);

    if (r) {
      return r;
    }
  }

  if (hi < this.mid) {
    return reportLeftRange(this.leftPoints, hi, cb);
  } else if (lo > this.mid) {
    return reportRightRange(this.rightPoints, lo, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

function compareNumbers(a, b) {
  return a - b;
}

function compareBegin(a, b) {
  var d = a[0] - b[0];

  if (d) {
    return d;
  }

  return a[1] - b[1];
}

function compareEnd(a, b) {
  var d = a[1] - b[1];

  if (d) {
    return d;
  }

  return a[0] - b[0];
}

function createIntervalTree(intervals) {
  if (intervals.length === 0) {
    return null;
  }

  var pts = [];

  for (var i = 0; i < intervals.length; ++i) {
    pts.push(intervals[i][0], intervals[i][1]);
  }

  pts.sort(compareNumbers);
  var mid = pts[pts.length >> 1];
  var leftIntervals = [];
  var rightIntervals = [];
  var centerIntervals = [];

  for (var i = 0; i < intervals.length; ++i) {
    var s = intervals[i];

    if (s[1] < mid) {
      leftIntervals.push(s);
    } else if (mid < s[0]) {
      rightIntervals.push(s);
    } else {
      centerIntervals.push(s);
    }
  } //Split center intervals


  var leftPoints = centerIntervals;
  var rightPoints = centerIntervals.slice();
  leftPoints.sort(compareBegin);
  rightPoints.sort(compareEnd);
  return new IntervalTreeNode(mid, createIntervalTree(leftIntervals), createIntervalTree(rightIntervals), leftPoints, rightPoints);
} //User friendly wrapper that makes it possible to support empty trees


function IntervalTree(root) {
  this.root = root;
}

var tproto = IntervalTree.prototype;

tproto.insert = function (interval) {
  if (this.root) {
    this.root.insert(interval);
  } else {
    this.root = new IntervalTreeNode(interval[0], null, null, [interval], [interval]);
  }
};

tproto.remove = function (interval) {
  if (this.root) {
    var r = this.root.remove(interval);

    if (r === EMPTY) {
      this.root = null;
    }

    return r !== NOT_FOUND;
  }

  return false;
};

tproto.queryPoint = function (p, cb) {
  if (this.root) {
    return this.root.queryPoint(p, cb);
  }
};

tproto.queryInterval = function (lo, hi, cb) {
  if (lo <= hi && this.root) {
    return this.root.queryInterval(lo, hi, cb);
  }
};

Object.defineProperty(tproto, 'count', {
  get: function get() {
    if (this.root) {
      return this.root.count;
    }

    return 0;
  }
});
Object.defineProperty(tproto, 'intervals', {
  get: function get() {
    if (this.root) {
      return this.root.intervals([]);
    }

    return [];
  }
});
function createWrapper(intervals) {
  if (!intervals || intervals.length === 0) {
    return new IntervalTree(null);
  }

  return new IntervalTree(createIntervalTree(intervals));
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_product_card_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/product-card/block.js */ "./src/blocks/product-card/block.js");
/* harmony import */ var _blocks_product_slider_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/product-slider/block.js */ "./src/blocks/product-slider/block.js");
/* harmony import */ var _blocks_panaderia_block_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/panaderia/block.js */ "./src/blocks/panaderia/block.js");
/* harmony import */ var _blocks_timeline_block_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/timeline/block.js */ "./src/blocks/timeline/block.js");
/* harmony import */ var _blocks_banner_block_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/banner/block.js */ "./src/blocks/banner/block.js");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons.js */ "./src/icons.js");
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extend */ "./src/extend/index.js");
/* harmony import */ var _blocks_faq_block_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/faq/block.js */ "./src/blocks/faq/block.js");








})();

/******/ })()
;
//# sourceMappingURL=index.js.map
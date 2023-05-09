"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ClubPreview.js":
/*!***********************************!*\
  !*** ./components/ClubPreview.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ClubPreview\": function() { return /* binding */ ClubPreview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/theme-ui.esm.js\");\n\n\n\nconst ClubPreview = (param)=>/*#__PURE__*/ {\n    let { club , isMobile , setSelectedClubs , selectedClubs , setClubOpened , setRecentlyCopied , navigator , recentlyCopied  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        as: \"div\",\n        variant: \"primary\",\n        sx: {\n            p: [\n                3,\n                4,\n                2\n            ]\n        },\n        mb: 2,\n        children: !isMobile ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n            columns: [\n                null,\n                \"0.15fr 1.5fr 1.5fr 1.5fr 1.5fr 1fr\"\n            ],\n            gap: 3,\n            sx: {\n                pl: [\n                    1,\n                    3\n                ],\n                pr: [\n                    1,\n                    3\n                ],\n                alignItems: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {\n                        onClick: ()=>{\n                            if (selectedClubs.includes(club.id)) {\n                                setSelectedClubs(selectedClubs.filter((clubPicked)=>clubPicked !== club.id));\n                            } else {\n                                setSelectedClubs([\n                                    ...selectedClubs,\n                                    club.id\n                                ]);\n                            }\n                        },\n                        checked: selectedClubs.includes(club.id),\n                        defaultChecked: false\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    // onClick={() => \n                    //   setClubOpened(club)\n                    //   } \n                    style: {\n                        textDecoration: \"underline\"\n                    },\n                    children: club.name\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 30,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                    sx: {\n                        color: \"accent\",\n                        textDecoration: \"underline\"\n                    },\n                    onClick: ()=>{\n                        const venue = encodeURIComponent(club.venue);\n                        const location = encodeURIComponent(club.location);\n                        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {\n                            window.location.href = \"https://maps.apple.com/?q=\".concat(venue, \",\").concat(location);\n                        } else {\n                            window.open(\"https://www.google.com/maps/dir/?api=1&destination=\".concat(venue, \",\").concat(location));\n                        }\n                    },\n                    children: club.venue\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: club.location\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 50,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: club.leaders[0].name\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 56,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    style: {\n                        display: \"flex\",\n                        flexDirection: \"row\",\n                        justifyContent: \"end\",\n                        alignItems: \"center\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        variant: \"primary\",\n                        as: \"a\",\n                        onClick: ()=>{\n                            setRecentlyCopied(club.id);\n                            navigator.clipboard.writeText(club.leaders.map((leader)=>leader.email).join(\", \"));\n                        },\n                        children: recentlyCopied == club.id ? \"Copied Email\" : \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                        lineNumber: 62,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 61,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n            lineNumber: 15,\n            columnNumber: 14\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            sx: {\n                flexDirection: \"column\",\n                display: \"flex\",\n                color: \"darkless\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    sx: {\n                        fontSize: 3,\n                        fontWeight: 600\n                    },\n                    children: club.name\n                }, void 0, false, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 76,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    sx: {\n                        color: \"slate\"\n                    },\n                    children: [\n                        \"Led by \",\n                        club.leaders[0].name,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            sx: {\n                                color: \"darkless\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                            lineNumber: 79,\n                            columnNumber: 70\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 79,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                    sx: {\n                        color: \"accent\",\n                        textDecoration: \"underline\"\n                    },\n                    onClick: ()=>{\n                        const venue = encodeURIComponent(club.venue);\n                        const location = encodeURIComponent(club.location);\n                        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {\n                            window.location.href = \"https://maps.apple.com/?q=\".concat(venue, \",\").concat(location);\n                        } else {\n                            window.open(\"https://www.google.com/maps/dir/?api=1&destination=\".concat(venue, \",\").concat(location));\n                        }\n                    },\n                    children: [\n                        club.venue,\n                        \", \",\n                        club.location\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 80,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            variant: \"primary\",\n                            as: \"a\",\n                            sx: {\n                                width: \"fit-content\",\n                                mt: 3\n                            },\n                            onClick: ()=>{\n                                setRecentlyCopied(club.id);\n                                navigator.clipboard.writeText(club.leaders.map((leader)=>leader.email).join(\", \"));\n                            },\n                            children: recentlyCopied == club.id ? \"Copied Email\" : \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                            lineNumber: 96,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            variant: \"primary\",\n                            as: \"a\",\n                            sx: {\n                                width: \"fit-content\",\n                                mt: 3,\n                                ml: 2,\n                                backgroundColor: \"#EC375010\",\n                                color: \"primary\",\n                                fontWeight: 400\n                            },\n                            onClick: ()=>{\n                                if (selectedClubs.includes(club.id)) {\n                                    setSelectedClubs(selectedClubs.filter((clubPicked)=>clubPicked !== club.id));\n                                } else {\n                                    setSelectedClubs([\n                                        ...selectedClubs,\n                                        club.id\n                                    ]);\n                                }\n                            },\n                            children: recentlyCopied == club.id ? \"Select\" : \"Selected\"\n                        }, void 0, false, {\n                            fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                            lineNumber: 108,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n                    lineNumber: 95,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n            lineNumber: 75,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/thomasstubblefield/Developer/clubsdirectory/site/components/ClubPreview.js\",\n        lineNumber: 5,\n        columnNumber: 12\n    }, undefined);\n};\n_c = ClubPreview;\nvar _c;\n$RefreshReg$(_c, \"ClubPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMxQyxLQUFLcUMsT0FBTyxDQUFDTSxHQUFHLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsS0FBSyxFQUFFQyxJQUFJLENBQUM7NEJBQ2hGO3NDQUVDdkMsa0JBQWtCUCxLQUFLb0IsRUFBRSxHQUFJLGlCQUFtQixTQUFVOzs7Ozs7c0NBRzNELDhEQUFDdkIsNENBQU1BOzRCQUNQWSxTQUFROzRCQUNSRCxJQUFHOzRCQUNIRSxJQUFJO2dDQUFDdUMsT0FBTztnQ0FBZUMsSUFBSTtnQ0FBR0MsSUFBSTtnQ0FBR0MsaUJBQWlCO2dDQUFheEIsT0FBTztnQ0FBV29CLFlBQVk7NEJBQUc7NEJBQ3hHOUIsU0FBUyxJQUFNO2dDQUNYLElBQUlmLGNBQWNnQixRQUFRLENBQUNuQixLQUFLb0IsRUFBRSxHQUFHO29DQUNyQ2xCLGlCQUFpQkMsY0FBY2tCLE1BQU0sQ0FBQyxDQUFDQyxhQUFlQSxlQUFldEIsS0FBS29CLEVBQUU7Z0NBQzVFLE9BQU87b0NBQ1BsQixpQkFBaUI7MkNBQUlDO3dDQUFlSCxLQUFLb0IsRUFBRTtxQ0FBQztnQ0FDNUMsQ0FBQzs0QkFDRDtzQ0FFSGIsa0JBQWtCUCxLQUFLb0IsRUFBRSxHQUFJLFdBQWEsVUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBSTFDOzs7Ozs7QUFFRixFQUNmO0tBM0hZckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbHViUHJldmlldy5qcz8wZDBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgQ2FyZCwgTGFiZWwsIExpbmssIFRleHQsIEdyaWQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tICd0aGVtZS11aSdcblxuZXhwb3J0IGNvbnN0IENsdWJQcmV2aWV3ID0gKHtjbHViLCBpc01vYmlsZSwgc2V0U2VsZWN0ZWRDbHVicywgc2VsZWN0ZWRDbHVicywgc2V0Q2x1Yk9wZW5lZCwgc2V0UmVjZW50bHlDb3BpZWQsIG5hdmlnYXRvciwgcmVjZW50bHlDb3BpZWR9KSA9PiAoXG5cdCAgICAgICAgICA8Q2FyZFxuXG4gICAgICAgICAgYXM9eydkaXYnfVxuICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICBzeD17e3A6IFszLCA0LCAyXSBcbiAgICAgICAgICAgIC8vIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICB9fVxuICAgICAgICAgIG1iPXsyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshaXNNb2JpbGUgPyBcbiAgICAgICAgICAgICg8R3JpZFxuICAgICAgICAgICAgICBjb2x1bW5zPXtbbnVsbCwgXCIwLjE1ZnIgMS41ZnIgMS41ZnIgMS41ZnIgMS41ZnIgMWZyXCJdfSBcbiAgICAgICAgICAgICAgZ2FwPXszfVxuICAgICAgICAgICAgICBzeD17e3BsOiBbMSwzXSwgcHI6IFsxLDNdLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0gXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPExhYmVsPlxuICAgICAgICAgIDxDaGVja2JveCBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkQ2x1YnMuaW5jbHVkZXMoY2x1Yi5pZCkpIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZENsdWJzKHNlbGVjdGVkQ2x1YnMuZmlsdGVyKChjbHViUGlja2VkKSA9PiBjbHViUGlja2VkICE9PSBjbHViLmlkKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZENsdWJzKFsuLi5zZWxlY3RlZENsdWJzLCBjbHViLmlkXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRDbHVicy5pbmNsdWRlcyhjbHViLmlkKX0gZGVmYXVsdENoZWNrZWQ9e2ZhbHNlfSAvPlxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgIDxwIFxuICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiBcbiAgICAgICAgICAgICAgLy8gICBzZXRDbHViT3BlbmVkKGNsdWIpXG4gICAgICAgICAgICAgIC8vICAgfSBcbiAgICAgICAgICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwifX0+e2NsdWIubmFtZX08L3A+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgc3g9e3tjb2xvcjogXCJhY2NlbnRcIiwgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCJ9fVxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBjb25zdCB2ZW51ZSA9IGVuY29kZVVSSUNvbXBvbmVudChjbHViLnZlbnVlKTtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBlbmNvZGVVUklDb21wb25lbnQoY2x1Yi5sb2NhdGlvbik7XG4gICAgICAgIFxuICAgICAgICBpZiAoL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cHM6Ly9tYXBzLmFwcGxlLmNvbS8/cT0ke3ZlbnVlfSwke2xvY2F0aW9ufWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9kaXIvP2FwaT0xJmRlc3RpbmF0aW9uPSR7dmVudWV9LCR7bG9jYXRpb259YCk7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPlxuICAgICAge2NsdWIudmVudWV9XG4gICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8cCBcbiAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gXG4gICAgICAgICAgICAgIC8vICAgLy8gc2V0Q2x1Yk9wZW5lZChjbHViKVxuICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICA+e2NsdWIubG9jYXRpb259PC9wPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPHAgXG4gICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IFxuICAgICAgICAgICAgICAvLyAgIC8vIHNldENsdWJPcGVuZWQoY2x1YilcbiAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgPntjbHViLmxlYWRlcnNbMF0ubmFtZX08L3A+XG4gICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwganVzdGlmeUNvbnRlbnQ6IFwiZW5kXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBhcz1cImFcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFJlY2VudGx5Q29waWVkKGNsdWIuaWQpXG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjbHViLmxlYWRlcnMubWFwKChsZWFkZXIpID0+IGxlYWRlci5lbWFpbCkuam9pbihcIiwgXCIpKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cmVjZW50bHlDb3BpZWQgPT0gY2x1Yi5pZCA/IChcIkNvcGllZCBFbWFpbFwiKSA6IChcIkNvbnRhY3RcIil9XG5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0dyaWQ+KSA6IFxuICAgICAgICAgICAgPEJveCBzeD17e2ZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBjb2xvcjogXCJkYXJrbGVzc1wifX0+XG4gICAgICAgICAgICA8VGV4dCBzeD17e2ZvbnRTaXplOiAzLCBmb250V2VpZ2h0OiA2MDB9fT5cbiAgICAgICAgICAgICAge2NsdWIubmFtZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IHN4PXt7Y29sb3I6IFwic2xhdGVcIn19PkxlZCBieSB7Y2x1Yi5sZWFkZXJzWzBdLm5hbWV9PFRleHQgc3g9e3tjb2xvcjogXCJkYXJrbGVzc1wifX0+PC9UZXh0PjwvVGV4dD5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICBzeD17e2NvbG9yOiBcImFjY2VudFwiLCB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIn19XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlbnVlID0gZW5jb2RlVVJJQ29tcG9uZW50KGNsdWIudmVudWUpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGVuY29kZVVSSUNvbXBvbmVudChjbHViLmxvY2F0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIGlmICgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwczovL21hcHMuYXBwbGUuY29tLz9xPSR7dmVudWV9LCR7bG9jYXRpb259YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2Rpci8/YXBpPTEmZGVzdGluYXRpb249JHt2ZW51ZX0sJHtsb2NhdGlvbn1gKTtcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2x1Yi52ZW51ZX0sIHtjbHViLmxvY2F0aW9ufVxuICAgIDwvTGluaz5cbiAgICA8Qm94PlxuICAgIDxCdXR0b25cbiAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgIGFzPVwiYVwiXG4gICAgICBzeD17e3dpZHRoOiBcImZpdC1jb250ZW50XCIsIG10OiAzfX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgc2V0UmVjZW50bHlDb3BpZWQoY2x1Yi5pZClcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY2x1Yi5sZWFkZXJzLm1hcCgobGVhZGVyKSA9PiBsZWFkZXIuZW1haWwpLmpvaW4oXCIsIFwiKSlcbiAgICAgIH19XG4gICAgPlxuICAgICAge3JlY2VudGx5Q29waWVkID09IGNsdWIuaWQgPyAoXCJDb3BpZWQgRW1haWxcIikgOiAoXCJDb250YWN0XCIpfVxuXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgIGFzPVwiYVwiXG4gICAgICBzeD17e3dpZHRoOiBcImZpdC1jb250ZW50XCIsIG10OiAzLCBtbDogMiwgYmFja2dyb3VuZENvbG9yOiBcIiNFQzM3NTAxMFwiLCBjb2xvcjogXCJwcmltYXJ5XCIsIGZvbnRXZWlnaHQ6IDQwMH19XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkQ2x1YnMuaW5jbHVkZXMoY2x1Yi5pZCkpIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZENsdWJzKHNlbGVjdGVkQ2x1YnMuZmlsdGVyKChjbHViUGlja2VkKSA9PiBjbHViUGlja2VkICE9PSBjbHViLmlkKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZENsdWJzKFsuLi5zZWxlY3RlZENsdWJzLCBjbHViLmlkXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgPlxuICAgICAge3JlY2VudGx5Q29waWVkID09IGNsdWIuaWQgPyAoXCJTZWxlY3RcIikgOiAoXCJTZWxlY3RlZFwiKX1cblxuICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvQ2FyZD5cbilcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkNhcmQiLCJMYWJlbCIsIkxpbmsiLCJUZXh0IiwiR3JpZCIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiQ2x1YlByZXZpZXciLCJjbHViIiwiaXNNb2JpbGUiLCJzZXRTZWxlY3RlZENsdWJzIiwic2VsZWN0ZWRDbHVicyIsInNldENsdWJPcGVuZWQiLCJzZXRSZWNlbnRseUNvcGllZCIsIm5hdmlnYXRvciIsInJlY2VudGx5Q29waWVkIiwiYXMiLCJ2YXJpYW50Iiwic3giLCJwIiwibWIiLCJjb2x1bW5zIiwiZ2FwIiwicGwiLCJwciIsImFsaWduSXRlbXMiLCJvbkNsaWNrIiwiaW5jbHVkZXMiLCJpZCIsImZpbHRlciIsImNsdWJQaWNrZWQiLCJjaGVja2VkIiwiZGVmYXVsdENoZWNrZWQiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwibmFtZSIsImNvbG9yIiwidmVudWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2NhdGlvbiIsInRlc3QiLCJ1c2VyQWdlbnQiLCJ3aW5kb3ciLCJocmVmIiwib3BlbiIsImxlYWRlcnMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwibWFwIiwibGVhZGVyIiwiZW1haWwiLCJqb2luIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwid2lkdGgiLCJtdCIsIm1sIiwiYmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ClubPreview.js\n"));

/***/ })

});
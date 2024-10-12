"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/context/TodoContext.tsx":
/*!*************************************!*\
  !*** ./src/context/TodoContext.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoProvider: function() { return /* binding */ TodoProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/service/todo */ \"(app-pages-browser)/./src/service/todo.ts\");\n/* __next_internal_client_entry_do_not_use__ TodoProvider,default auto */ \nvar _s = $RefreshSig$();\n\n\n// Initialize the default state\nconst initialState = {\n    todos: [],\n    currentPage: 1,\n    totalPages: 0,\n    loading: false\n};\n// Create the reducer function with strong typing\nconst todoReducer = (state, action)=>{\n    switch(action.type){\n        case \"SET_TODOS\":\n            return {\n                ...state,\n                todos: action.payload,\n                totalPages: action.totalPages,\n                currentPage: action.currentPage\n            };\n        case \"ADD_TODO\":\n            return {\n                ...state,\n                todos: [\n                    ...state.todos,\n                    action.payload\n                ]\n            };\n        case \"UPDATE_TODO\":\n            return {\n                ...state,\n                todos: state.todos.map((todo)=>todo.id === action.payload.id ? action.payload : todo)\n            };\n        case \"DELETE_TODO\":\n            return {\n                ...state,\n                todos: state.todos.filter((todo)=>todo.id !== Number(action.payload))\n            };\n        case \"SET_CURRENT_PAGE\":\n            return {\n                ...state,\n                currentPage: action.payload\n            };\n        case \"SET_LOADING\":\n            return {\n                ...state,\n                loading: action.payload\n            };\n        default:\n            return state;\n    }\n};\n// Create the context with the correct type\nconst TodoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\n// Create the provider component\nconst TodoProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(todoReducer, initialState);\n    // // Fetch todos from API on component mount\n    // useEffect(() => {\n    //   const fetchTodos = async () => {\n    //     const data = await getTodosQuery();\n    //     dispatch({ type: 'SET_TODOS', payload: data.data, totalPages: data.meta.last_page, currentPage: data.meta.current_page });\n    //   };\n    //   fetchTodos();\n    // }, []);\n    const paginate = async (page, search, status, priority)=>{\n        dispatch({\n            type: \"SET_CURRENT_PAGE\",\n            payload: page\n        });\n        const data = await (0,_service_todo__WEBPACK_IMPORTED_MODULE_2__.getTodosQuery)(page, search, status, priority);\n        dispatch({\n            type: \"SET_TODOS\",\n            payload: data.data,\n            totalPages: data.meta.last_page,\n            currentPage: data.meta.current_page\n        });\n    };\n    // Function to add a new todo\n    const addTodo = async (newTodo)=>{\n        const addedTodo = await (0,_service_todo__WEBPACK_IMPORTED_MODULE_2__.createTodoMutate)(newTodo);\n        dispatch({\n            type: \"ADD_TODO\",\n            payload: addedTodo\n        });\n        paginate(state.currentPage);\n    };\n    // Function to update a todo\n    const updateTodo = async (updatedTodo)=>{\n        const newTodo = await (0,_service_todo__WEBPACK_IMPORTED_MODULE_2__.updateTodoMutate)(updatedTodo.id, updatedTodo);\n        dispatch({\n            type: \"UPDATE_TODO\",\n            payload: newTodo\n        });\n    };\n    // Function to delete a todo\n    const deleteTodo = async (id)=>{\n        await (0,_service_todo__WEBPACK_IMPORTED_MODULE_2__.deleteTodoMutate)(id);\n        dispatch({\n            type: \"DELETE_TODO\",\n            payload: id\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TodoContext.Provider, {\n        value: {\n            state,\n            addTodo,\n            updateTodo,\n            deleteTodo,\n            paginate\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\projects\\\\test\\\\todo-client\\\\src\\\\context\\\\TodoContext.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoProvider, \"6JWkGZ32UPfojeNx+xqn8ZU8A0Q=\");\n_c = TodoProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoContext);\nvar _c;\n$RefreshReg$(_c, \"TodoProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L1RvZG9Db250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ29FO0FBRWlDO0FBRXJHLCtCQUErQjtBQUMvQixNQUFNTyxlQUEwQjtJQUM5QkMsT0FBTyxFQUFFO0lBQ1RDLGFBQWE7SUFDYkMsWUFBWTtJQUNaQyxTQUFTO0FBQ1g7QUFFQSxpREFBaUQ7QUFDakQsTUFBTUMsY0FBYyxDQUFDQyxPQUFrQkM7SUFDckMsT0FBUUEsT0FBT0MsSUFBSTtRQUNqQixLQUFLO1lBQ0gsT0FBTztnQkFBRSxHQUFHRixLQUFLO2dCQUFFTCxPQUFPTSxPQUFPRSxPQUFPO2dCQUFFTixZQUFZSSxPQUFPSixVQUFVO2dCQUFFRCxhQUFhSyxPQUFPTCxXQUFXO1lBQUM7UUFDM0csS0FBSztZQUNILE9BQU87Z0JBQUUsR0FBR0ksS0FBSztnQkFBRUwsT0FBTzt1QkFBSUssTUFBTUwsS0FBSztvQkFBRU0sT0FBT0UsT0FBTztpQkFBQztZQUFDO1FBQzdELEtBQUs7WUFDSCxPQUFPO2dCQUNMLEdBQUdILEtBQUs7Z0JBQ1JMLE9BQU9LLE1BQU1MLEtBQUssQ0FBQ1MsR0FBRyxDQUFDLENBQUNDLE9BQ3RCQSxLQUFLQyxFQUFFLEtBQUtMLE9BQU9FLE9BQU8sQ0FBQ0csRUFBRSxHQUFHTCxPQUFPRSxPQUFPLEdBQUdFO1lBRXJEO1FBQ0YsS0FBSztZQUNILE9BQU87Z0JBQ0wsR0FBR0wsS0FBSztnQkFDUkwsT0FBT0ssTUFBTUwsS0FBSyxDQUFDWSxNQUFNLENBQUMsQ0FBQ0YsT0FBU0EsS0FBS0MsRUFBRSxLQUFLRSxPQUFPUCxPQUFPRSxPQUFPO1lBQ3ZFO1FBQ0YsS0FBSztZQUNILE9BQU87Z0JBQUUsR0FBR0gsS0FBSztnQkFBRUosYUFBYUssT0FBT0UsT0FBTztZQUFDO1FBQ2pELEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdILEtBQUs7Z0JBQUVGLFNBQVNHLE9BQU9FLE9BQU87WUFBQztRQUM3QztZQUNFLE9BQU9IO0lBQ1g7QUFDRjtBQUVBLDJDQUEyQztBQUMzQyxNQUFNUyw0QkFBY3JCLG9EQUFhQSxDQUE4QnNCO0FBRS9ELGdDQUFnQztBQUN6QixNQUFNQyxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFxQjs7SUFDMUQsTUFBTSxDQUFDWixPQUFPYSxTQUFTLEdBQUd4QixpREFBVUEsQ0FBQ1UsYUFBYUw7SUFFbEQsNkNBQTZDO0lBQzdDLG9CQUFvQjtJQUNwQixxQ0FBcUM7SUFDckMsMENBQTBDO0lBQzFDLGlJQUFpSTtJQUNqSSxPQUFPO0lBRVAsa0JBQWtCO0lBQ2xCLFVBQVU7SUFFVixNQUFNb0IsV0FBVyxPQUFPQyxNQUFjQyxRQUFpQkMsUUFBaUJDO1FBQ3RFTCxTQUFTO1lBQUVYLE1BQU07WUFBb0JDLFNBQVNZO1FBQUs7UUFDbkQsTUFBTUksT0FBTyxNQUFNM0IsNERBQWFBLENBQUN1QixNQUFNQyxRQUFRQyxRQUFRQztRQUN2REwsU0FBUztZQUFFWCxNQUFNO1lBQWFDLFNBQVNnQixLQUFLQSxJQUFJO1lBQUV0QixZQUFZc0IsS0FBS0MsSUFBSSxDQUFDQyxTQUFTO1lBQUV6QixhQUFhdUIsS0FBS0MsSUFBSSxDQUFDRSxZQUFZO1FBQUM7SUFDekg7SUFFQSw2QkFBNkI7SUFDN0IsTUFBTUMsVUFBVSxPQUFPQztRQUNyQixNQUFNQyxZQUFZLE1BQU1uQywrREFBZ0JBLENBQUNrQztRQUN6Q1gsU0FBUztZQUFFWCxNQUFNO1lBQVlDLFNBQVNzQjtRQUFVO1FBQ2hEWCxTQUFTZCxNQUFNSixXQUFXO0lBQzVCO0lBRUEsNEJBQTRCO0lBQzVCLE1BQU04QixhQUFhLE9BQU9DO1FBQ3hCLE1BQU1ILFVBQVUsTUFBTS9CLCtEQUFnQkEsQ0FBQ2tDLFlBQVlyQixFQUFFLEVBQUVxQjtRQUN2RGQsU0FBUztZQUFFWCxNQUFNO1lBQWVDLFNBQVNxQjtRQUFRO0lBQ25EO0lBRUEsNEJBQTRCO0lBQzVCLE1BQU1JLGFBQWEsT0FBT3RCO1FBQ3hCLE1BQU1mLCtEQUFnQkEsQ0FBQ2U7UUFDdkJPLFNBQVM7WUFBRVgsTUFBTTtZQUFlQyxTQUFTRztRQUFHO0lBQzlDO0lBR0EscUJBQ0UsOERBQUNHLFlBQVlvQixRQUFRO1FBQUNDLE9BQU87WUFBRTlCO1lBQU91QjtZQUFTRztZQUFZRTtZQUFZZDtRQUFTO2tCQUM3RUY7Ozs7OztBQUdQLEVBQUU7R0E1Q1dEO0tBQUFBO0FBOENiLCtEQUFlRixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L1RvZG9Db250ZXh0LnRzeD83YWUyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb2RvQWN0aW9uLCBUb2RvQ29udGV4dFR5cGUsIFRvZG9Qcm92aWRlclByb3BzLCBUb2RvU3RhdGUsIFRvZG8gfSBmcm9tICdAL3R5cGVzL3RvZG8nO1xyXG5pbXBvcnQgeyBjcmVhdGVUb2RvTXV0YXRlLCBkZWxldGVUb2RvTXV0YXRlLCBnZXRUb2Rvc1F1ZXJ5LCB1cGRhdGVUb2RvTXV0YXRlIH0gZnJvbSBcIkAvc2VydmljZS90b2RvXCI7XHJcblxyXG4vLyBJbml0aWFsaXplIHRoZSBkZWZhdWx0IHN0YXRlXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVG9kb1N0YXRlID0ge1xyXG4gIHRvZG9zOiBbXSxcclxuICBjdXJyZW50UGFnZTogMSwgICAvLyBEZWZhdWx0IHRvIHBhZ2UgMVxyXG4gIHRvdGFsUGFnZXM6IDAsXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIHJlZHVjZXIgZnVuY3Rpb24gd2l0aCBzdHJvbmcgdHlwaW5nXHJcbmNvbnN0IHRvZG9SZWR1Y2VyID0gKHN0YXRlOiBUb2RvU3RhdGUsIGFjdGlvbjogVG9kb0FjdGlvbik6IFRvZG9TdGF0ZSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnU0VUX1RPRE9TJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRvZG9zOiBhY3Rpb24ucGF5bG9hZCwgdG90YWxQYWdlczogYWN0aW9uLnRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlOiBhY3Rpb24uY3VycmVudFBhZ2UgfTtcclxuICAgIGNhc2UgJ0FERF9UT0RPJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRvZG9zOiBbLi4uc3RhdGUudG9kb3MsIGFjdGlvbi5wYXlsb2FkXSB9O1xyXG4gICAgY2FzZSAnVVBEQVRFX1RPRE8nOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRvZG9zOiBzdGF0ZS50b2Rvcy5tYXAoKHRvZG8pID0+XHJcbiAgICAgICAgICB0b2RvLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCA/IGFjdGlvbi5wYXlsb2FkIDogdG9kb1xyXG4gICAgICAgICksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdERUxFVEVfVE9ETyc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdG9kb3M6IHN0YXRlLnRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gTnVtYmVyKGFjdGlvbi5wYXlsb2FkKSksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdTRVRfQ1VSUkVOVF9QQUdFJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRQYWdlOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSAnU0VUX0xPQURJTkcnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIGNvbnRleHQgd2l0aCB0aGUgY29ycmVjdCB0eXBlXHJcbmNvbnN0IFRvZG9Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxUb2RvQ29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG4vLyBDcmVhdGUgdGhlIHByb3ZpZGVyIGNvbXBvbmVudFxyXG5leHBvcnQgY29uc3QgVG9kb1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogVG9kb1Byb3ZpZGVyUHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIodG9kb1JlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gIC8vIC8vIEZldGNoIHRvZG9zIGZyb20gQVBJIG9uIGNvbXBvbmVudCBtb3VudFxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBmZXRjaFRvZG9zID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0VG9kb3NRdWVyeSgpO1xyXG4gIC8vICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfVE9ET1MnLCBwYXlsb2FkOiBkYXRhLmRhdGEsIHRvdGFsUGFnZXM6IGRhdGEubWV0YS5sYXN0X3BhZ2UsIGN1cnJlbnRQYWdlOiBkYXRhLm1ldGEuY3VycmVudF9wYWdlIH0pO1xyXG4gIC8vICAgfTtcclxuICAgIFxyXG4gIC8vICAgZmV0Y2hUb2RvcygpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgcGFnaW5hdGUgPSBhc3luYyAocGFnZTogbnVtYmVyLCBzZWFyY2g/OiBzdHJpbmcsIHN0YXR1cz86IHN0cmluZywgcHJpb3JpdHk/OiBzdHJpbmcpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9DVVJSRU5UX1BBR0UnLCBwYXlsb2FkOiBwYWdlIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFRvZG9zUXVlcnkocGFnZSwgc2VhcmNoLCBzdGF0dXMsIHByaW9yaXR5KTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9UT0RPUycsIHBheWxvYWQ6IGRhdGEuZGF0YSwgdG90YWxQYWdlczogZGF0YS5tZXRhLmxhc3RfcGFnZSwgY3VycmVudFBhZ2U6IGRhdGEubWV0YS5jdXJyZW50X3BhZ2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gYWRkIGEgbmV3IHRvZG9cclxuICBjb25zdCBhZGRUb2RvID0gYXN5bmMgKG5ld1RvZG86IE9taXQ8VG9kbywgJ2lkJz4pID0+IHtcclxuICAgIGNvbnN0IGFkZGVkVG9kbyA9IGF3YWl0IGNyZWF0ZVRvZG9NdXRhdGUobmV3VG9kbyk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfVE9ETycsIHBheWxvYWQ6IGFkZGVkVG9kbyB9KTtcclxuICAgIHBhZ2luYXRlKHN0YXRlLmN1cnJlbnRQYWdlKTtcclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgYSB0b2RvXHJcbiAgY29uc3QgdXBkYXRlVG9kbyA9IGFzeW5jICh1cGRhdGVkVG9kbzogVG9kbykgPT4ge1xyXG4gICAgY29uc3QgbmV3VG9kbyA9IGF3YWl0IHVwZGF0ZVRvZG9NdXRhdGUodXBkYXRlZFRvZG8uaWQsIHVwZGF0ZWRUb2RvKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9UT0RPJywgcGF5bG9hZDogbmV3VG9kbyB9KTtcclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBkZWxldGUgYSB0b2RvXHJcbiAgY29uc3QgZGVsZXRlVG9kbyA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICBhd2FpdCBkZWxldGVUb2RvTXV0YXRlKGlkKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0RFTEVURV9UT0RPJywgcGF5bG9hZDogaWQgfSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VG9kb0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGFkZFRvZG8sIHVwZGF0ZVRvZG8sIGRlbGV0ZVRvZG8sIHBhZ2luYXRlIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1RvZG9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvQ29udGV4dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJjcmVhdGVUb2RvTXV0YXRlIiwiZGVsZXRlVG9kb011dGF0ZSIsImdldFRvZG9zUXVlcnkiLCJ1cGRhdGVUb2RvTXV0YXRlIiwiaW5pdGlhbFN0YXRlIiwidG9kb3MiLCJjdXJyZW50UGFnZSIsInRvdGFsUGFnZXMiLCJsb2FkaW5nIiwidG9kb1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwibWFwIiwidG9kbyIsImlkIiwiZmlsdGVyIiwiTnVtYmVyIiwiVG9kb0NvbnRleHQiLCJ1bmRlZmluZWQiLCJUb2RvUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwicGFnaW5hdGUiLCJwYWdlIiwic2VhcmNoIiwic3RhdHVzIiwicHJpb3JpdHkiLCJkYXRhIiwibWV0YSIsImxhc3RfcGFnZSIsImN1cnJlbnRfcGFnZSIsImFkZFRvZG8iLCJuZXdUb2RvIiwiYWRkZWRUb2RvIiwidXBkYXRlVG9kbyIsInVwZGF0ZWRUb2RvIiwiZGVsZXRlVG9kbyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/TodoContext.tsx\n"));

/***/ })

});
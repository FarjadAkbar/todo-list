"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/context/TodoContext.tsx":
/*!*************************************!*\
  !*** ./src/context/TodoContext.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoProvider: function() { return /* binding */ TodoProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/service/todo */ \"(app-pages-browser)/./src/service/todo.ts\");\n/* __next_internal_client_entry_do_not_use__ TodoProvider,default auto */ \nvar _s = $RefreshSig$();\n\n\n// Initialize the default state\nconst initialState = {\n    todos: [],\n    currentPage: 1,\n    totalPages: 0\n};\n// Create the reducer function with strong typing\nconst todoReducer = (state, action)=>{\n    switch(action.type){\n        case \"SET_TODOS\":\n            return {\n                ...state,\n                todos: action.payload,\n                totalPages: action.totalPages,\n                currentPage: action.currentPage\n            };\n        case \"ADD_TODO\":\n            return {\n                ...state,\n                todos: [\n                    ...state.todos,\n                    action.payload\n                ]\n            };\n        case \"UPDATE_TODO\":\n            return {\n                ...state,\n                todos: state.todos.map((todo)=>todo.id === action.payload.id ? action.payload : todo)\n            };\n        case \"DELETE_TODO\":\n            return {\n                ...state,\n                todos: state.todos.filter((todo)=>todo.id !== Number(action.payload))\n            };\n        case \"SET_CURRENT_PAGE\":\n            return {\n                ...state,\n                currentPage: action.payload\n            };\n        default:\n            return state;\n    }\n};\n// Create the context with the correct type\nconst TodoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\n// Create the provider component\nconst TodoProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(todoReducer, initialState);\n    // // Fetch todos from API on component mount\n    // useEffect(() => {\n    //   const fetchTodos = async () => {\n    //     const data = await getTodosQuery();\n    //     dispatch({ type: 'SET_TODOS', payload: data.data, totalPages: data.meta.last_page, currentPage: data.meta.current_page });\n    //   };\n    //   fetchTodos();\n    // }, []);\n    const paginate = async (page, search, status, priority)=>{\n        dispatch({\n            type: \"SET_CURRENT_PAGE\",\n            payload: page\n        });\n        const data = await (0,_service_todo__WEBPACK_IMPORTED_MODULE_2__.getTodosQuery)(page, search, status, priority);\n        dispatch({\n            type: \"SET_TODOS\",\n            payload: data.data,\n            totalPages: data.meta.last_page,\n            currentPage: data.meta.current_page\n        });\n    };\n    // Function to add a new todo\n    const addTodo = async (newTodo)=>{\n        const addedTodo = await (0,_service_todo__WEBPACK_IMPORTED_MODULE_2__.createTodoMutate)(newTodo);\n        dispatch({\n            type: \"ADD_TODO\",\n            payload: addedTodo\n        });\n        paginate(state.currentPage, state.searchTerm, state.statusFilter, state.priorityFilter);\n    };\n    // Function to update a todo\n    const updateTodo = async (updatedTodo)=>{\n        const newTodo = await (0,_service_todo__WEBPACK_IMPORTED_MODULE_2__.updateTodoMutate)(updatedTodo.id, updatedTodo);\n        dispatch({\n            type: \"UPDATE_TODO\",\n            payload: newTodo\n        });\n    };\n    // Function to delete a todo\n    const deleteTodo = async (id)=>{\n        await (0,_service_todo__WEBPACK_IMPORTED_MODULE_2__.deleteTodoMutate)(id);\n        dispatch({\n            type: \"DELETE_TODO\",\n            payload: id\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TodoContext.Provider, {\n        value: {\n            state,\n            addTodo,\n            updateTodo,\n            deleteTodo,\n            paginate\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\projects\\\\test\\\\todo-client\\\\src\\\\context\\\\TodoContext.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoProvider, \"6JWkGZ32UPfojeNx+xqn8ZU8A0Q=\");\n_c = TodoProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoContext);\nvar _c;\n$RefreshReg$(_c, \"TodoProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L1RvZG9Db250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ29FO0FBRWlDO0FBRXJHLCtCQUErQjtBQUMvQixNQUFNTyxlQUEwQjtJQUM5QkMsT0FBTyxFQUFFO0lBQ1RDLGFBQWE7SUFDYkMsWUFBWTtBQUNkO0FBRUEsaURBQWlEO0FBQ2pELE1BQU1DLGNBQWMsQ0FBQ0MsT0FBa0JDO0lBQ3JDLE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBSztZQUNILE9BQU87Z0JBQUUsR0FBR0YsS0FBSztnQkFBRUosT0FBT0ssT0FBT0UsT0FBTztnQkFBRUwsWUFBWUcsT0FBT0gsVUFBVTtnQkFBRUQsYUFBYUksT0FBT0osV0FBVztZQUFDO1FBQzNHLEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdHLEtBQUs7Z0JBQUVKLE9BQU87dUJBQUlJLE1BQU1KLEtBQUs7b0JBQUVLLE9BQU9FLE9BQU87aUJBQUM7WUFBQztRQUM3RCxLQUFLO1lBQ0gsT0FBTztnQkFDTCxHQUFHSCxLQUFLO2dCQUNSSixPQUFPSSxNQUFNSixLQUFLLENBQUNRLEdBQUcsQ0FBQyxDQUFDQyxPQUN0QkEsS0FBS0MsRUFBRSxLQUFLTCxPQUFPRSxPQUFPLENBQUNHLEVBQUUsR0FBR0wsT0FBT0UsT0FBTyxHQUFHRTtZQUVyRDtRQUNGLEtBQUs7WUFDSCxPQUFPO2dCQUNMLEdBQUdMLEtBQUs7Z0JBQ1JKLE9BQU9JLE1BQU1KLEtBQUssQ0FBQ1csTUFBTSxDQUFDLENBQUNGLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0UsT0FBT1AsT0FBT0UsT0FBTztZQUN2RTtRQUNGLEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdILEtBQUs7Z0JBQUVILGFBQWFJLE9BQU9FLE9BQU87WUFBQztRQUNqRDtZQUNFLE9BQU9IO0lBQ1g7QUFDRjtBQUVBLDJDQUEyQztBQUMzQyxNQUFNUyw0QkFBY3BCLG9EQUFhQSxDQUE4QnFCO0FBRS9ELGdDQUFnQztBQUN6QixNQUFNQyxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFxQjs7SUFDMUQsTUFBTSxDQUFDWixPQUFPYSxTQUFTLEdBQUd2QixpREFBVUEsQ0FBQ1MsYUFBYUo7SUFFbEQsNkNBQTZDO0lBQzdDLG9CQUFvQjtJQUNwQixxQ0FBcUM7SUFDckMsMENBQTBDO0lBQzFDLGlJQUFpSTtJQUNqSSxPQUFPO0lBRVAsa0JBQWtCO0lBQ2xCLFVBQVU7SUFFVixNQUFNbUIsV0FBVyxPQUFPQyxNQUFjQyxRQUFpQkMsUUFBaUJDO1FBQ3RFTCxTQUFTO1lBQUVYLE1BQU07WUFBb0JDLFNBQVNZO1FBQUs7UUFDbkQsTUFBTUksT0FBTyxNQUFNMUIsNERBQWFBLENBQUNzQixNQUFNQyxRQUFRQyxRQUFRQztRQUN2REwsU0FBUztZQUFFWCxNQUFNO1lBQWFDLFNBQVNnQixLQUFLQSxJQUFJO1lBQUVyQixZQUFZcUIsS0FBS0MsSUFBSSxDQUFDQyxTQUFTO1lBQUV4QixhQUFhc0IsS0FBS0MsSUFBSSxDQUFDRSxZQUFZO1FBQUM7SUFDekg7SUFFQSw2QkFBNkI7SUFDN0IsTUFBTUMsVUFBVSxPQUFPQztRQUNyQixNQUFNQyxZQUFZLE1BQU1sQywrREFBZ0JBLENBQUNpQztRQUN6Q1gsU0FBUztZQUFFWCxNQUFNO1lBQVlDLFNBQVNzQjtRQUFVO1FBQ2hEWCxTQUFTZCxNQUFNSCxXQUFXLEVBQUVHLE1BQU0wQixVQUFVLEVBQUUxQixNQUFNMkIsWUFBWSxFQUFFM0IsTUFBTTRCLGNBQWM7SUFDeEY7SUFFQSw0QkFBNEI7SUFDNUIsTUFBTUMsYUFBYSxPQUFPQztRQUN4QixNQUFNTixVQUFVLE1BQU05QiwrREFBZ0JBLENBQUNvQyxZQUFZeEIsRUFBRSxFQUFFd0I7UUFDdkRqQixTQUFTO1lBQUVYLE1BQU07WUFBZUMsU0FBU3FCO1FBQVE7SUFDbkQ7SUFFQSw0QkFBNEI7SUFDNUIsTUFBTU8sYUFBYSxPQUFPekI7UUFDeEIsTUFBTWQsK0RBQWdCQSxDQUFDYztRQUN2Qk8sU0FBUztZQUFFWCxNQUFNO1lBQWVDLFNBQVNHO1FBQUc7SUFDOUM7SUFHQSxxQkFDRSw4REFBQ0csWUFBWXVCLFFBQVE7UUFBQ0MsT0FBTztZQUFFakM7WUFBT3VCO1lBQVNNO1lBQVlFO1lBQVlqQjtRQUFTO2tCQUM3RUY7Ozs7OztBQUdQLEVBQUU7R0E1Q1dEO0tBQUFBO0FBOENiLCtEQUFlRixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L1RvZG9Db250ZXh0LnRzeD83YWUyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb2RvQWN0aW9uLCBUb2RvQ29udGV4dFR5cGUsIFRvZG9Qcm92aWRlclByb3BzLCBUb2RvU3RhdGUsIFRvZG8gfSBmcm9tICdAL3R5cGVzL3RvZG8nO1xyXG5pbXBvcnQgeyBjcmVhdGVUb2RvTXV0YXRlLCBkZWxldGVUb2RvTXV0YXRlLCBnZXRUb2Rvc1F1ZXJ5LCB1cGRhdGVUb2RvTXV0YXRlIH0gZnJvbSBcIkAvc2VydmljZS90b2RvXCI7XHJcblxyXG4vLyBJbml0aWFsaXplIHRoZSBkZWZhdWx0IHN0YXRlXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVG9kb1N0YXRlID0ge1xyXG4gIHRvZG9zOiBbXSxcclxuICBjdXJyZW50UGFnZTogMSwgICAvLyBEZWZhdWx0IHRvIHBhZ2UgMVxyXG4gIHRvdGFsUGFnZXM6IDAsXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIHJlZHVjZXIgZnVuY3Rpb24gd2l0aCBzdHJvbmcgdHlwaW5nXHJcbmNvbnN0IHRvZG9SZWR1Y2VyID0gKHN0YXRlOiBUb2RvU3RhdGUsIGFjdGlvbjogVG9kb0FjdGlvbik6IFRvZG9TdGF0ZSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnU0VUX1RPRE9TJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRvZG9zOiBhY3Rpb24ucGF5bG9hZCwgdG90YWxQYWdlczogYWN0aW9uLnRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlOiBhY3Rpb24uY3VycmVudFBhZ2UgfTtcclxuICAgIGNhc2UgJ0FERF9UT0RPJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRvZG9zOiBbLi4uc3RhdGUudG9kb3MsIGFjdGlvbi5wYXlsb2FkXSB9O1xyXG4gICAgY2FzZSAnVVBEQVRFX1RPRE8nOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRvZG9zOiBzdGF0ZS50b2Rvcy5tYXAoKHRvZG8pID0+XHJcbiAgICAgICAgICB0b2RvLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCA/IGFjdGlvbi5wYXlsb2FkIDogdG9kb1xyXG4gICAgICAgICksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdERUxFVEVfVE9ETyc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdG9kb3M6IHN0YXRlLnRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gTnVtYmVyKGFjdGlvbi5wYXlsb2FkKSksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdTRVRfQ1VSUkVOVF9QQUdFJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRQYWdlOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgY29udGV4dCB3aXRoIHRoZSBjb3JyZWN0IHR5cGVcclxuY29uc3QgVG9kb0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PFRvZG9Db250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgcHJvdmlkZXIgY29tcG9uZW50XHJcbmV4cG9ydCBjb25zdCBUb2RvUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBUb2RvUHJvdmlkZXJQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcih0b2RvUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgLy8gLy8gRmV0Y2ggdG9kb3MgZnJvbSBBUEkgb24gY29tcG9uZW50IG1vdW50XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IGZldGNoVG9kb3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRUb2Rvc1F1ZXJ5KCk7XHJcbiAgLy8gICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9UT0RPUycsIHBheWxvYWQ6IGRhdGEuZGF0YSwgdG90YWxQYWdlczogZGF0YS5tZXRhLmxhc3RfcGFnZSwgY3VycmVudFBhZ2U6IGRhdGEubWV0YS5jdXJyZW50X3BhZ2UgfSk7XHJcbiAgLy8gICB9O1xyXG4gICAgXHJcbiAgLy8gICBmZXRjaFRvZG9zKCk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICBjb25zdCBwYWdpbmF0ZSA9IGFzeW5jIChwYWdlOiBudW1iZXIsIHNlYXJjaD86IHN0cmluZywgc3RhdHVzPzogc3RyaW5nLCBwcmlvcml0eT86IHN0cmluZykgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0NVUlJFTlRfUEFHRScsIHBheWxvYWQ6IHBhZ2UgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0VG9kb3NRdWVyeShwYWdlLCBzZWFyY2gsIHN0YXR1cywgcHJpb3JpdHkpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX1RPRE9TJywgcGF5bG9hZDogZGF0YS5kYXRhLCB0b3RhbFBhZ2VzOiBkYXRhLm1ldGEubGFzdF9wYWdlLCBjdXJyZW50UGFnZTogZGF0YS5tZXRhLmN1cnJlbnRfcGFnZSB9KTtcclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBhZGQgYSBuZXcgdG9kb1xyXG4gIGNvbnN0IGFkZFRvZG8gPSBhc3luYyAobmV3VG9kbzogT21pdDxUb2RvLCAnaWQnPikgPT4ge1xyXG4gICAgY29uc3QgYWRkZWRUb2RvID0gYXdhaXQgY3JlYXRlVG9kb011dGF0ZShuZXdUb2RvKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9UT0RPJywgcGF5bG9hZDogYWRkZWRUb2RvIH0pO1xyXG4gICAgcGFnaW5hdGUoc3RhdGUuY3VycmVudFBhZ2UsIHN0YXRlLnNlYXJjaFRlcm0sIHN0YXRlLnN0YXR1c0ZpbHRlciwgc3RhdGUucHJpb3JpdHlGaWx0ZXIpO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSBhIHRvZG9cclxuICBjb25zdCB1cGRhdGVUb2RvID0gYXN5bmMgKHVwZGF0ZWRUb2RvOiBUb2RvKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUb2RvID0gYXdhaXQgdXBkYXRlVG9kb011dGF0ZSh1cGRhdGVkVG9kby5pZCwgdXBkYXRlZFRvZG8pO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX1RPRE8nLCBwYXlsb2FkOiBuZXdUb2RvIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGRlbGV0ZSBhIHRvZG9cclxuICBjb25zdCBkZWxldGVUb2RvID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcclxuICAgIGF3YWl0IGRlbGV0ZVRvZG9NdXRhdGUoaWQpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnREVMRVRFX1RPRE8nLCBwYXlsb2FkOiBpZCB9KTtcclxuICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2RvQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgYWRkVG9kbywgdXBkYXRlVG9kbywgZGVsZXRlVG9kbywgcGFnaW5hdGUgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVG9kb0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9Db250ZXh0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsImNyZWF0ZVRvZG9NdXRhdGUiLCJkZWxldGVUb2RvTXV0YXRlIiwiZ2V0VG9kb3NRdWVyeSIsInVwZGF0ZVRvZG9NdXRhdGUiLCJpbml0aWFsU3RhdGUiLCJ0b2RvcyIsImN1cnJlbnRQYWdlIiwidG90YWxQYWdlcyIsInRvZG9SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIm1hcCIsInRvZG8iLCJpZCIsImZpbHRlciIsIk51bWJlciIsIlRvZG9Db250ZXh0IiwidW5kZWZpbmVkIiwiVG9kb1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInBhZ2luYXRlIiwicGFnZSIsInNlYXJjaCIsInN0YXR1cyIsInByaW9yaXR5IiwiZGF0YSIsIm1ldGEiLCJsYXN0X3BhZ2UiLCJjdXJyZW50X3BhZ2UiLCJhZGRUb2RvIiwibmV3VG9kbyIsImFkZGVkVG9kbyIsInNlYXJjaFRlcm0iLCJzdGF0dXNGaWx0ZXIiLCJwcmlvcml0eUZpbHRlciIsInVwZGF0ZVRvZG8iLCJ1cGRhdGVkVG9kbyIsImRlbGV0ZVRvZG8iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/TodoContext.tsx\n"));

/***/ })

});
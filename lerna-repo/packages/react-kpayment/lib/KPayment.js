"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function KPayment(props) {
    var attrs = props.attrs, formAction = props.formAction, onFinish = props.onFinish, onError = props.onError, onProcess = props.onProcess, _a = props.debug, debug = _a === void 0 ? false : _a;
    function formSubmit(event) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, token, paymentMethods, saveCard, data, url, resp, result, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        formData = new FormData(event.target);
                        token = formData.get("token");
                        paymentMethods = formData.get("paymentMethods");
                        saveCard = formData.get("saveCard");
                        if (onProcess)
                            onProcess(formData);
                        data = {
                            token: token,
                            paymentMethods: paymentMethods,
                            saveCard: saveCard
                        };
                        url = formAction;
                        return [4 /*yield*/, fetch(url, {
                                method: "POST",
                                body: JSON.stringify(data),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })];
                    case 1:
                        resp = _a.sent();
                        if (!resp.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, resp.json()];
                    case 2:
                        result = _a.sent();
                        if (onFinish)
                            onFinish(result);
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, resp.json()];
                    case 4:
                        result = _a.sent();
                        if (onError)
                            onError(JSON.stringify(result));
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    react_1.default.useEffect(function () {
        var script = document.createElement("script");
        script.src = attrs.scriptUrl;
        script.setAttribute("data-apikey", attrs.apiKey);
        script.setAttribute("data-amount", attrs.amount);
        script.setAttribute("data-currency", attrs.currency);
        script.setAttribute("data-payment-methods", attrs.paymentMethods);
        script.setAttribute("data-name", attrs.shopName);
        script.type = "text/javascript";
        script.async = true;
        script.onload = function (ev) {
            if (checkoutForm) {
                if (debug) {
                    console.log("payment-container create new");
                }
                window.KPayment.create();
            }
        };
        var checkoutForm = document.getElementById("checkout-form");
        if (checkoutForm) {
            checkoutForm.appendChild(script);
            checkoutForm.addEventListener("submit", formSubmit);
        }
        return function () {
            if (checkoutForm) {
                checkoutForm.removeChild(script);
                checkoutForm.removeEventListener("submit", formSubmit);
                var paymentContainer = document.querySelector(".payment-container");
                if (paymentContainer) {
                    document.body.removeChild(paymentContainer);
                }
            }
        };
    }, []);
    return react_1.default.createElement("form", { id: "checkout-form" });
}
exports.default = KPayment;

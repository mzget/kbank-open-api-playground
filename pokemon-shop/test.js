var KPayment = function() {
    var e, o, r, d = "https://uat-kpaymentgateway.new-kpgw.com", a = d + "/ui/v2/index.html", s = document.querySelector('script[src^="' + d + '"]'), n = document.head || document.getElementsByTagName("head")[0], c = document.querySelector("body"), t = window.location.host, u = {};
    function i() {
        var e;
        return function() {
            u.merchanturl = t,
            u.publicKey || (u.publicKey = s.dataset ? s.dataset.apikey : s.getAttribute("data-apikey"));
            u.name || (u.name = s.dataset ? s.dataset.name : s.getAttribute("data-name"));
            u.description || (u.description = s.dataset ? s.dataset.description : s.getAttribute("data-description"));
            u.amount || (u.amount = s.dataset ? s.dataset.amount : s.getAttribute("data-amount"));
            u.currency || (u.currency = s.dataset ? s.dataset.currency : s.getAttribute("data-currency"));
            u.paymentMethods || (u.paymentMethods = s.dataset ? s.dataset.paymentMethods : s.getAttribute("data-payment-methods"));
            u.savecard || (u.savecard = s.dataset ? s.dataset.savecard : s.getAttribute("data-savecard"));
            u.mid || (u.mid = s.dataset ? s.dataset.mid : s.getAttribute("data-mid"));
            u.smartpayId || (u.smartpayId = s.dataset ? s.dataset.smartpayId : s.getAttribute("data-smartpay-id"));
            u.term || (u.term = s.dataset ? s.dataset.term : s.getAttribute("data-term"));
            u.customerId || (u.customerId = s.dataset ? s.dataset.customerId : s.getAttribute("data-customer-id"));
            u.orderId || (u.orderId = s.dataset ? s.dataset.orderId : s.getAttribute("data-order-id"));
            u.refNumber || (u.refNumber = s.dataset ? s.dataset.refNumber : s.getAttribute("data-ref-number"));
            u.timer || (u.timer = s.dataset ? s.dataset.timer : s.getAttribute("data-timer"));
            u.showButton || (u.showButton = s.dataset ? s.dataset.showButton : s.getAttribute("data-show-button"))
        }(),
        e = window.addEventListener ? "addEventListener" : "attachEvent",
        (0,
        window[e])("attachEvent" == e ? "onmessage" : "message", function(e) {
            var t, a, n = e.message ? "message" : "data", i = e[n];
            if (e.origin == d)
                switch (i.event) {
                case "close":
                    v(),
                    b(),
                    r && r();
                    break;
                case "requestMerchantClientSetting":
                    clearTimeout(o),
                    document.querySelector("div.payment-container > iframe[_kpayment]").contentWindow.postMessage(data = {
                        event: "clientSetting",
                        value: u
                    }, d),
                    document.querySelector(".payment-container[_kpayment]").classList.toggle("show"),
                    c.classList.toggle("scroll-y-hidden"),
                    document.querySelector("div.payment-container > iframe[_kpayment]").classList.toggle("kpayment-m-top-hide");
                    break;
                case "submitToken":
                    !function(e) {
                        var t = e.token;
                        if (t) {
                            var a = document.createElement("input");
                            a.type = "hidden",
                            a.name = "token",
                            a.value = t,
                            s.parentNode.appendChild(a)
                        }
                        var n = e.dcc_currency;
                        if (n) {
                            var a = document.createElement("input");
                            a.type = "hidden",
                            a.name = "dcc_currency",
                            a.value = n,
                            s.parentNode.appendChild(a)
                        }
                        var i = e.saveCard;
                        if (i) {
                            var a = document.createElement("input");
                            a.type = "hidden",
                            a.name = "saveCard",
                            a.value = i,
                            s.parentNode.appendChild(a)
                        }
                        var o = e.smartpayId;
                        if (o) {
                            var a = document.createElement("input");
                            a.type = "hidden",
                            a.name = "smartpayId",
                            a.value = o,
                            s.parentNode.appendChild(a)
                        }
                        var r = e.mid;
                        if (r) {
                            var a = document.createElement("input");
                            a.type = "hidden",
                            a.name = "mid",
                            a.value = r,
                            s.parentNode.appendChild(a)
                        }
                        var d = e.term;
                        if (d) {
                            var a = document.createElement("input");
                            a.type = "hidden",
                            a.name = "term",
                            a.value = d,
                            s.parentNode.appendChild(a)
                        }
                        if (u.paymentMethods) {
                            var a = document.createElement("input");
                            a.type = "hidden",
                            a.name = "paymentMethods",
                            a.value = u.paymentMethods,
                            s.parentNode.appendChild(a)
                        }
                    }(i.value),
                    p(),
                    v();
                    break;
                case "submitQRChargeId":
                    t = i.value.chargeId,
                    (a = document.createElement("input")).type = "hidden",
                    a.name = "chargeId",
                    a.value = t,
                    s.parentNode.appendChild(a),
                    p(),
                    v()
                }
        }, !1),
        function() {
            var e = '.scroll-y-hidden { overflow-y: hidden; } .payment-container[_kpayment] { visibility: hidden; opacity: 0; /* display: block; */ z-index: 999999; position: fixed; top: 0px; bottom: 0px; left: 0px; right: 0px; overflow: hidden; transition-timing-function: ease-in; transition: 0.2s; background-color: rgba(0, 0, 0, 0.8); text-align: center; justify-content: center; align-items: center; display: flex; } .payment-container[_kpayment].show { transition: 0.25s; transition-timing-function: ease-out; opacity: 1; visibility: visible; } div.payment-container>iframe[_kpayment] { border: none; transition: 0.2s; transition-timing-function: ease-in-out; } .pay-button[_kpayment] { width: 105px; transition: all 0.5s; line-height: normal; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 14px; display: inline-block; padding: 10px 15px; min-height: 15px; border: 0px; font-weight: bold; text-align: center; text-decoration: none; outline: none; border-radius: 2px; user-select: none; background-color: rgb(33, 155, 120); color: white; cursor: pointer; width: 110px; transition: all 0.5s; } .pay-button[_kpayment] span::before { position: absolute; width: 28px; height: 36px; content: ""; margin-top: -10px; opacity: 0; margin-left: -30px; -webkit-transition: all 0.5s; transition: all 0.5s; background: transparent url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAABkCAYAAABHAJglAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQjJGODA2NTBCNjExMUU2OTA5M0RBODE4RUZEQTNDQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQjJGODA2NjBCNjExMUU2OTA5M0RBODE4RUZEQTNDQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNCMkY4MDYzMEI2MTExRTY5MDkzREE4MThFRkRBM0NCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNCMkY4MDY0MEI2MTExRTY5MDkzREE4MThFRkRBM0NCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+tVEF2AAADcFJREFUeNrsXQ+Y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") no-repeat center right; background-size: contain; } .pay-button[_kpayment] span::after { content: "Pay Now"; } .pay-button[_kpayment].processing span::after { content: "Processing"; } .pay-button[_kpayment].processing { pointer-events: none; cursor: default; } /* .pay-button[_kpayment]:focus span { padding-left: 20px; } .pay-button[_kpayment]:focus span:before { opacity: 1; } */ .pay-button[_kpayment]:hover span { padding-left: 20px; } .pay-button[_kpayment]:hover span:before { opacity: 1; } .pay-button[_kpayment][disabled], .pay-button[_kpayment].disabled { background-color: #9E9E9E; pointer-events: none; cursor: not-allowed; } .alertContainer { height: 30px; width: 500px; right: 0px; position: absolute; left: 0px; margin: auto; top: 0px; bottom: 0px; background-color: #fff; color: #219b78 }'
              , t = document.createElement("style");
            t.type = "text/css",
            t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e));
            n.appendChild(t)
        }(),
        function() {
            void 0 !== u.showButton && !0 !== u.showButton || function() {
                var e = document.createElement("span");
                if (e.style.cssText = "-webkit-transition: all 0.5s;transition: all 0.5s;",
                -1 !== navigator.appVersion.indexOf("MSIE 8")) {
                    var t = document.createTextNode("Pay Now");
                    e.appendChild(t)
                }
                var a = document.createElement("button");
                a.setAttribute("_kpayment", ""),
                a.setAttribute("type", "button"),
                a.classList ? a.classList.add("pay-button") : a.className += " pay-button";
                a.appendChild(e),
                a.addEventListener ? a.addEventListener("click", function(e) {
                    m()
                }, !1) : a.attachEvent("onclick", function(e) {
                    m()
                });
                l(a),
                s.parentNode.appendChild(a)
            }();
            e = document.createElement("div"),
            e.setAttribute("_kpayment", ""),
            e.setAttribute("class", "payment-container"),
            c.appendChild(e);
            var e
        }(),
        !0
    }
    function p() {
        var e = document.createElement("button");
        e.style.cssText = "display: none;visibility: hidden;",
        e.setAttribute("_kpayment", ""),
        e.type = "submit",
        s.parentNode.appendChild(e),
        e.click()
    }
    function m() {
        "alipay" === u.paymentMethods.toLocaleLowerCase() || "paypal" === u.paymentMethods.toLocaleLowerCase() || "unionpay" === u.paymentMethods.toLocaleLowerCase() ? p() : k()
    }
    function l(e) {
        var t, a;
        e || (e = document.querySelector(".pay-button[_kpayment]")),
        e && (h() ? ((a = e).removeAttribute("disabled"),
        a.classList ? a.classList.remove("disabled") : a.className = a.className.replace(new RegExp("(^|\\b)" + "disabled".split(" ").join("|") + "(\\b|$)","gi"), " ")) : ((t = e).setAttribute("disabled", ""),
        t.classList ? t.classList.add("disabled") : t.className += " disabled"))
    }
    function y() {
        var e = document.querySelector(".payment-container[_kpayment]")
          , t = e.querySelector("iframe[_kpayment]");
        t && e.removeChild(t)
    }
    function h() {
        var e = !0;
        u.publicKey && "" !== u.publicKey || (e = !1),
        u.amount || (e = !1);
        return /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/.test(u.amount) || (e = !1),
        u.smartpayId && "" !== u.smartpayId && !u.mid && (e = !1),
        e
    }
    function b() {
        var e = document.querySelector(".pay-button[_kpayment]");
        e && (e.classList ? e.classList.remove("processing") : e.className = e.className.replace(new RegExp("(^|\\b)" + "processing".split(" ").join("|") + "(\\b|$)","gi"), " "))
    }
    function v() {
        document.querySelector(".payment-container[_kpayment]").classList.remove("show"),
        c.classList.toggle("scroll-y-hidden"),
        document.querySelector("div.payment-container > iframe[_kpayment]").classList.toggle("kpayment-m-top-hide"),
        y()
    }
    function k() {
        var e;
        !function() {
            {
                if (-1 !== navigator.appVersion.indexOf("MSIE 10"))
                    return !0;
                if (-1 !== navigator.appVersion.indexOf("MSIE"))
                    return !1
            }
            return !0
        }() ? alert("You are running an un-supported version of Internet Explorer.") : ((e = document.querySelector(".pay-button[_kpayment]")) && (e.classList ? e.classList.add("processing") : e.className += " processing"),
        function() {
            if (h()) {
                var e = document.querySelector(".payment-container[_kpayment]");
                y();
                var t = document.createElement("iframe");
                t.setAttribute("_kpayment", ""),
                t.id = "kpaymentframe",
                t.setAttribute("src", a),
                t.setAttribute("width", "100%"),
                t.setAttribute("height", "100%"),
                e.appendChild(t)
            }
        }(),
        o = setTimeout(function() {
            var e;
            (e = new XMLHttpRequest).open("GET", a, !0),
            e.onload = function() {
                200 <= e.status && e.status < 400 ? clearTimeout(o) : b()
            }
            ,
            e.onerror = function(e) {
                b(),
                console.log(a + " load fail.")
            }
            ,
            e.send()
        }, 5e3))
    }
    return {
        create: function() {
            e || (e = i())
        },
        show: function() {
            k()
        },
        configure: function(e) {
            var t;
            (t = e).apikey && (u.publicKey = t.apikey),
            t.name && (u.name = t.name),
            t.description && (u.description = t.description),
            t.amount && (u.amount = t.amount),
            t.currency && (u.currency = t.currency),
            t.paymentMethods && (u.paymentMethods = t.paymentMethods),
            t.savecard && (u.savecard = t.savecard),
            t.mid && (u.mid = t.mid),
            t.smartpayId && (u.smartpayId = t.smartpayId),
            t.term && (u.term = t.term),
            t.customerId && (u.customerId = t.customerId),
            t.orderId && (u.orderId = t.orderId),
            t.refNumber && (u.refNumber = t.refNumber),
            t.timer && (u.timer = t.timer),
            void 0 !== t.showButton && (u.showButton = t.showButton),
            l()
        },
        setPublickey: function(e) {
            u.publicKey = e,
            l()
        },
        setName: function(e) {
            u.name = e,
            l()
        },
        setDescription: function(e) {
            u.description = e,
            l()
        },
        setAmount: function(e) {
            u.amount = e,
            l()
        },
        setCurrency: function(e) {
            u.currency = e,
            l()
        },
        setPaymentMethods: function(e) {
            u.paymentMethods = e,
            l()
        },
        setSavecard: function(e) {
            u.savecard = e,
            l()
        },
        setMid: function(e) {
            u.mid = e,
            l()
        },
        setSmartpayId: function(e) {
            u.smartpayId = e,
            l()
        },
        setTerm: function(e) {
            u.term = e,
            l()
        },
        setCustomerId: function(e) {
            u.customerId = e,
            l()
        },
        setOrderId: function(e) {
            u.orderId = e,
            l()
        },
        setRefNumber: function(e) {
            u.refNumber = e,
            l()
        },
        setTimer: function(e) {
            u.timer = e,
            l()
        },
        onClose: function(e) {
            r = e
        }
    }
}();
document.onreadystatechange = function() {
    document.addEventListener ? document.addEventListener("DOMContentLoaded", KPayment.create()) : (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) && KPayment.create()
}
;

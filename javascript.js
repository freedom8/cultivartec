window.onload = function() {
    function n(n, e) {
        e.value = M(n), e.focus()
    }

    function e(n, e) {
        for (var r = 0; r < n.length; r++) n[r].onclick = function() {
            if (1 == this.checked) {
                var n = T(e),
                    r = parseInt(this.value);
                n += r, e.innerHTML = n
            } else {
                var n = T(e),
                    r = parseInt(this.value);
                n -= r, e.innerHTML = n
            }
        }
    }

    function r() {
        try {
            var n = new XMLHttpRequest
        } catch (e) {
            try {
                var n = ActiveXObject("Msxm12.XMLHTTP")
            } catch (e) {
                try {
                    var n = ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {
                    var n = !1
                }
            }
        }
        return n
    }

    function o() {
        var n = new r;
        n.onreadystatechange = function() {
            if (4 == n.readyState && 200 == n.status) {
                var e = n.responseText;
                "Enviado" == e ? _.classList.remove("ocultar") : alert(n.responseText + "Error")
            }
        };
        var e = X.value,
            o = x.value,
            t = A.value,
            c = B.value,
            a = j.value,
            i = W.value;
        n.open("GET", "http://localhost/Cultivartec/BackEnd/SendMail.php?Price=" + e + "&Name=" + o + "&Type=" + t + "&Serv=" + c + "&Email=" + a + "&Tel=" + i, !0), n.send()
    }

    function t() {
        var n = !0;
        return a() || (n = c("<span>*Nombre incorrecto</span>")), i() || (n = c("<span>*Email incorrecto</span>")), u() || (n = c("<span>*Telefono incorrecto</span>")), s() || (n = c("<span>*Tipo Cliente Incorrecto</span>")), l() || (n = c("<span>*Tipo Sevicio Incorrecto</span>")), n
    }

    function c(n) {
        return F(E("#MensaForm"), n), !1
    }

    function a() {
        return m(x.value, "cadena") ? (x.classList.remove("ErrorForm"), !0) : (x.classList.add("ErrorForm"), !1)
    }

    function i() {
        return m(String(j.value), "email") ? (j.classList.remove("ErrorForm"), !0) : (j.classList.add("ErrorForm"), !1)
    }

    function u() {
        return m(W.value, "tel") ? (W.classList.remove("ErrorForm"), !0) : (W.classList.add("ErrorForm"), !1)
    }

    function s() {
        return m(A.value, "cadena") ? (A.classList.remove("ErrorForm"), !0) : (A.classList.add("ErrorForm"), !1)
    }

    function l() {
        return m(B.value, "cadena") ? (B.classList.remove("ErrorForm"), !0) : (B.classList.add("ErrorForm"), !1)
    }

    function m(n, e) {
        return v(n) ? "cadena" == e ? f(n) : "tel" == e ? p(n) : "email" == e ? h(n) : "num" == e ? d(n) : !1 : !1
    }

    function v(n) {
        return null == n || 0 == n.length || void 0 == typeof n ? !1 : !0
    }

    function f(n) {
        return /^[a-z][a-z]*/.test(n)
    }

    function d(n) {
        return !isNaN(n)
    }

    function p(n) {
        return d(n) && 9 == n.length ? !0 : !1
    }

    function h(n) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(n)
    }

    function E(n) {
        return document.querySelector(n)
    }

    function L(n) {
        return document.querySelectorAll(n)
    }

    function T(n) {
        return parseInt(M(n))
    }

    function M(n) {
        return n.innerHTML
    }

    function g(n, e) {
        n.innerHTML = e
    }

    function F(n, e) {
        n.innerHTML += e
    }
    var S = M(E("#MensaForm")),
        y = document.querySelector(".menu_toggle");
    y.onclick = function() {
        y.nextElementSibling.classList.toggle("menu_on")
    };
    for (var w = document.querySelectorAll(".hola"), O = 0; O < w.length; O++) w[O].onclick = function() {
        var n = document.querySelector(".menu");
        n.classList.remove("menu_on")
    };
    var k = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    k >= 1200 && console.log("El ancho del navegador es: " + k);
    var H = E("#OptionTwoPrice"),
        q = E("#OptionOnePrice"),
        C = L(".OptionOne"),
        b = L(".OptionTwo"),
        I = E("#BtnSelectOne"),
        N = E("#BtnSelectTwo"),
        P = E("#BtnSendMail"),
        X = E("#SelectedValue"),
        x = E("#NameClie"),
        A = E("#TypeClie"),
        B = E("#TypeServ"),
        j = E("#EmailClie"),
        W = E("#TelClie"),
        _ = E("#MensajeSuss");
    e(C, q), e(b, H), I.onclick = function() {
        n(q, X)
    }, N.onclick = function() {
        n(H, X)
    }, x.onchange = function() {
        a()
    }, j.onchange = function() {
        i()
    }, W.onchange = function() {
        u()
    }, A.onchange = function() {
        s()
    }, B.onchange = function() {
        l()
    }, P.onclick = function() {
        g(E("#MensaForm"), ""), t() ? (g(E("#MensaForm"), S), o(), E("#MensaForm").classList.remove("ErrorForm", "ErrorFormMessage")) : E("#MensaForm").classList.add("ErrorForm", "ErrorFormMessage")
    }
};
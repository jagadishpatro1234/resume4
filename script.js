let inp = document.querySelector("input")
let Ac = document.getElementById("Ac")
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")
let e = document.getElementById("e")
let f = document.getElementById("f")
let g = document.getElementById("g")
let h = document.getElementById("h")
let i = document.getElementById("i")
let j = document.getElementById("j")
let k = document.getElementById("k")
let l = document.getElementById("l")
let m = document.getElementById("m")
let n = document.getElementById("n")
let o = document.getElementById("o")
let p = document.getElementById("p")
let q = document.getElementById("q")
let r = document.getElementById("r")
let s = document.getElementById("s")
let bg = document.getElementById("bg")
let inn = document.getElementById("inn")
let bt = document.getElementById("bt")
let box = document.getElementById("bb")
let text = document.getElementById("text")
let button = document.querySelector("button")


inn.onclick = function(){
    bg.classList.toggle("bgg")
    box.classList.toggle("white")
    box.classList.toggle("box")
    text.classList.toggle("ww")
    a.classList.toggle("rrr")
    a.classList.toggle("bbbt")
    b.classList.toggle("rrr")
    b.classList.toggle("bbbt")
    c.classList.toggle("rrr")
    c.classList.toggle("bbbt")
    d.classList.toggle("rrr")
    d.classList.toggle("bbbt")
    e.classList.toggle("rrr")
    e.classList.toggle("bbbt")
    f.classList.toggle("rrr")
    f.classList.toggle("bbbt")
    g.classList.toggle("rrr")
    g.classList.toggle("bbbt")
    h.classList.toggle("rrr")
    h.classList.toggle("bbbt")
    i.classList.toggle("rrr")
    i.classList.toggle("bbbt")
    j.classList.toggle("rrr")
    j.classList.toggle("bbbt")
    k.classList.toggle("rrr")
    k.classList.toggle("bbbt")
    l.classList.toggle("rrr")
    l.classList.toggle("bbbt")
    m.classList.toggle("rrr")
    m.classList.toggle("bbbt")
    n.classList.toggle("rrr")
    n.classList.toggle("bbbt")
    o.classList.toggle("rrr")
    o.classList.toggle("bbbt")
    p.classList.toggle("rrr")
    p.classList.toggle("bbbt")
    q.classList.toggle("rrr")
    q.classList.toggle("bbbt")
    r.classList.toggle("rrr")
    r.classList.toggle("bbbt")
    s.classList.toggle("rrr")
    s.classList.toggle("bbbt")
    Ac.classList.toggle("rrr")
    Ac.classList.toggle("bbbt")
    inn.classList.toggle("w")
    bt.classList.toggle("b")
    bt.classList.toggle("in")
}
a.onclick = function(){
    inp.value = inp.value.toString().slice(0,-1)
}
b.onclick = function(){
    inp.value = eval(inp.value)
}
c.onclick = function(){
    inp.value += "+"
}
d.onclick = function(){
    inp.value += "7"
}
e.onclick = function(){
    inp.value += "8"
}
f.onclick = function(){
    inp.value += "9"
}
g.onclick = function(){
    inp.value += "*"
}
h.onclick = function(){
    inp.value += "4"
}
i.onclick = function(){
    inp.value += "5"
}
j.onclick = function(){
    inp.value += "6"
}
k.onclick = function(){
    inp.value += "/"
}
l.onclick = function(){
    inp.value += "1"
}
m.onclick = function(){
    inp.value += "2"
}
n.onclick = function(){
    inp.value += "3"
}
o.onclick = function(){
    inp.value += "-"
}
p.onclick = function(){
    inp.value += "0"
}
q.onclick = function(){
    inp.value += "00"
}
r.onclick = function(){
    inp.value += "."
}
s.onclick = function(){
    inp.value = inp.value.toString().slice(0,-2)
}
Ac.onclick = function(){
    inp.value = " "
}
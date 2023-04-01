//keys
const a = new Audio("Tunes\\tunes\\a.wav")
const w = new Audio("Tunes\\tunes\\w.wav")
const s = new Audio("Tunes\\tunes\\s.wav")
const e = new Audio("Tunes\\tunes\\e.wav")
const d = new Audio("Tunes\\tunes\\d.wav")
const f = new Audio("Tunes\\tunes\\f.wav")
const t = new Audio("Tunes\\tunes\\t.wav")
const y = new Audio("Tunes\\tunes\\y.wav")
const g = new Audio("Tunes\\tunes\\g.wav")
const h = new Audio("Tunes\\tunes\\h.wav")
const u = new Audio("Tunes\\tunes\\u.wav")
const j = new Audio("Tunes\\tunes\\j.wav")
const k = new Audio("Tunes\\tunes\\k.wav")
const o = new Audio("Tunes\\tunes\\o.wav")
const l = new Audio("Tunes\\tunes\\l.wav")
const last = new Audio("Tunes\\tunes\\;.wav")

const tunes = [a,w,s,e,d,f,t,y,g,h,u,j,k,o,l,last,last]
const keys = document.querySelectorAll("button")


keys[0].onclick = function(){
    a.currentTime = 0.1
    a.play()
}
keys[1].onclick = function(){
    w.play()
}
keys[2].onclick = function(){
    s.play()
}
keys[3].onclick = function(){
    e.play()
}
keys[4].onclick = function(){
    d.play()
}
keys[5].onclick = function(){
    f.play()
}
keys[6].onclick = function(){
    t.play()
}
keys[7].onclick = function(){
    y.play()
}
keys[8].onclick = function(){
    g.play()
}
keys[9].onclick = function(){
    h.play()
}
keys[10].onclick = function(){
    u.play()
}
keys[11].onclick = function(){
    j.play()
}
keys[12].onclick = function(){
    k.play()
}
keys[13].onclick = function(){
    o.play()
}
keys[14].onclick = function(){
    l.play()
}
keys[15].onclick = function(){
    l.play()
}
keys[16].onclick = function(){
    l.play()
}



const textarea=document.querySelector("textarea"),
select=document.querySelector("select"),
btn=document.querySelector("button"),
p=document.querySelector('p');
function convert(text){
      let trans=new SpeechSynthesisUtterance(text)
      speechSynthesis.speak(trans)
}
btn.addEventListener("click",eo=>{
    eo.preventDefault()
    if(textarea.value!=""){
        convert(textarea.value)
    }
})

textarea.onfocus=()=>{
    p.classList.add('activ')
    textarea.classList.add('activ')
    p.innerHTML='Enter Text'
    clearInterval(l)
}
textarea.onblur=()=>{
    p.classList.remove('activ')
    textarea.classList.remove('activ')
}
let k=true
let l=setInterval(()=>{
if(k){
    p.innerHTML+='.'
    k=false
}else{
    p.innerHTML='Enter Text.'
    k=true
}
},500)
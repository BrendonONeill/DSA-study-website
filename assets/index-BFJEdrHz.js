(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(e){if(e.ep)return;e.ep=!0;const i=l(e);fetch(e.href,i)}})();const a=document.getElementsByClassName("accordion-btn"),r=document.getElementsByClassName("panel"),u=document.getElementsByClassName("arrow"),h=[1,2,3,4];h.splice(1,2,5);console.log(h);for(let s=0;s<a.length;s++)a[s].addEventListener("click",function(){this.classList.toggle("active"),u[s].classList.toggle("rotate"),r[s].style.maxHeight?r[s].style.maxHeight=null:r[s].style.maxHeight=r[s].scrollHeight+"px"});class d{constructor(t){this.val=t,this.next=null,this.prev}}class f{constructor(){this.head=null,this.tail=null,this.length=0}Push(t){const l=new d(t);if(this.length++,this.head){this.tail.next=l,l.prev=this.tail,this.tail=l;return}else{this.head=l,this.tail=l;return}}Pop(){if(!this.head)return;let t=this.head,l=this.head;for(;t.next;)l=t,t=t.next;return this.tail=l,this.tail.next=null,this.length--,this.length===0&&(this.head=null,this.tail=null),t.prev=null,t}}let n=new f;n.Push(4);n.Push(3);n.Push(2);n.Push(1);console.log(n);

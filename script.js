// Menu e rodapé compartilhados por todas as páginas
const paginas=[['index.html','Início'],['sobre.html','Sobre Nós'],['apoie.html','Apoie'],['contato.html','Contato']];
const atual=location.pathname.split('/').pop()||'index.html';
const logo=`<a class="logo" href="index.html"><b>C</b>Cultocantins</a>`;
const icInsta='<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#fff" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>';
const icMail='<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#fff" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="1"/><path d="M2 6l10 8 10-8"/></svg>';
const links=paginas.map(([h,t])=>`<a href="${h}" class="${h===atual?'ativo':''}">${t}</a>`).join('');
document.getElementById('menu').innerHTML=`${logo}<button class="toggle" aria-label="Abrir menu" aria-expanded="false">☰</button><nav>${links}</nav>`;
document.getElementById('rodape').innerHTML=`<nav>${paginas.map(([h,t])=>`<a href="${h}">${t==='Sobre Nós'?'Sobre':t}</a>`).join('')}</nav>
<div class="rodape-logo">${logo}<small>Siga-nos</small><a href="https://instagram.com/cultocantins" aria-label="Instagram">${icInsta}</a> <a href="mailto:cultocantins@gmail.com" aria-label="E-mail">${icMail}</a></div>
<p class="copy">© copyright 2026. <b>CULTOCANTINS</b></p>`;
const t=document.querySelector('.toggle'),n=document.querySelector('#menu nav');
t.addEventListener('click',()=>{const a=n.classList.toggle('aberto');t.setAttribute('aria-expanded',a)});

// Formulário de contato
const f=document.getElementById('form-contato');
if(f){f.addEventListener('submit',e=>{
 e.preventDefault();
 const m=document.getElementById('msg'),email=f.email.value.trim();
 const ok=[...f.elements].filter(x=>x.required).every(x=>x.value.trim())&&/^\S+@\S+\.\S+$/.test(email);
 m.className='msg'+(ok?'':' erro');
 if(!ok){m.textContent='Preencha todos os campos obrigatórios com um e-mail válido.';return}
 const corpo=`Nome: ${f.nome.value}\nE-mail: ${email}\n\n${f.mensagem.value}`;
 location.href=`mailto:cultocantins@gmail.com?subject=${encodeURIComponent(f.assunto.value)}&body=${encodeURIComponent(corpo)}`;
 m.textContent='Obrigado! Sua mensagem está pronta para envio no seu e-mail.';f.reset();
})}

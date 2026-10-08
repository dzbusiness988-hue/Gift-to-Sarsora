const gallery = [
  ["01","assets/images/photo-01.jpg"],["02","assets/images/photo-02.jpg"],
  ["03","assets/images/photo-03.jpg"],["04","assets/images/photo-04.jpg"],
  ["05","assets/images/photo-05.jpg"],["06","assets/images/photo-06.jpg"],
  ["07","assets/images/photo-07.jpg"],["08","assets/images/photo-08.jpg"],
  ["09","assets/images/photo-09.jpg"],["10","assets/images/photo-10.jpg"]
];

const reasons = [
  ["01","عشان وجودك بيخلّي اليوم العادي فيه حاجة مميزة و بتفرحني","مش لازم يحصل شيء كبير…  كفاية إنك موجودة بس والله يا روحي."],
  ["02","عشان اليوم مينفعش يعدي بدون ما تكوني موجودة فيه","حرفيا انتي حاجة اساسية في يومي و اليوم اللي ممكن يعدي بدونك بيكون سيء اوي ليا"],
  ["03","عشان ضحكتك بتساوي عندي الدنيا كلها و اكتر","مجرد لما بشوفك مبسوطة و فرحانة بكون في قمة سعادتي و مش بعرف اوصف الشعور دة ... عشان كدة دايما بعمل على اني اكون جنبك و اخليكي مبسوطة دايما"],
  ["04","عشان معاكِ أقدر أكون على طبيعتي.","ودي من أريح الحاجات اللي ممكن شخص يحسها مع شخص تاني."],
  ["05","عشان حتى لما احيانا بنختلف، بتفضلي اهم حد في حياتي","الاختلاف وارد دايما بين اي اتنين بس اهم حاجة اننا لما بنختلف بنعرف نتعامل كويس و نتعايش مع الاختلاف دة"],
  ["06","عشان فيكي حاجة مش شبه اي حد تاني في الكون","لو لفيت العالم كله اللي فيه 8 مليار واحد عمري في حياتي ما هقدر الاقي نسخة منك او حاجة تتعوض بيكي"],
  ["07","عشان بقيتي جزء كبير من ذكرياتي الحلوة.","انتي بقيتي اعز و اقرب حد ليا بعمل معاه ذكريات و غير ذكرياتنا القديمة مع بعض كدة كدة"],
  ["08","عشان وجودك علّمني إن التفاصيل بتفرق.","رسالة، كلمة، ضحكة… حاجات صغيرة بس بتفضل."],
  ["09","عشان ببساطة… إنتِ إنتِ.","وده لوحده سبب كفاية اني بحبك لأن انا بحبك عشان انتي سرسورا "],
];

const questions = [
  {q:"إيه التاريخ اللي بدأت فيه أول محادثة بيننا؟", a:["18/10/2025","24/9/2025","26/9/2025","1/8/2025"], c:1},
  {q:"إيه اللقب اللي بحب اقوله ليكي؟", a:["قطقوطتي","فلافي","جانتر","سوسو"], c:1},
  {q:"إيه المناسبة اللي معمولة عشانها الصفحة دي؟", a:["ذكرى أول كلام","عيد ميلاد فلافي روح قلبي","أول خروجة","ذكرى صورة"], c:1},
  {q:"ايه اكتر اسم انا بحب انك تناديني بيه ؟", a:["فلافيلو","زيودة","ارنوبي","زيزو"], c:1},
  {q:"لو حد فينا زعل من التاني الطرف التاني هيسيبه عادي ؟ ", a:["اه عادي","يفكر شوية","يجيبه من شعره و مش هيسيبه غير لما احنا الاتنين نتصالح ونضحك 🤭❤️","ممكن"], c:2},
  {q:"الأغنية الموجودة في الصفحة اسمها إيه؟", a:["Ma3aya","Hobak","Bahebak","Leila"], c:0},
  {q:"لو مريتي بيوم سيء او موقف وحش .. مين اول حد هتروحي تتكلمي معاه و تحكيله ؟", a:["مش عارفة","انت اكيد يا روح قلبي ❤️🫂","مش هقول لحد 😒","فتح 😂"], c:1},
  {q:"ناوية نفضل مع بعض للأبد ؟ 🥹❤️", a:["يس شور","اكيد يا روحي من غير كلام 🤭❤️","ايوة طبعا","اكيد"], c:1}
];

/* ---------- Gallery ---------- */
const galleryGrid=document.getElementById("galleryGrid");
gallery.forEach(([n,src])=>{
  const el=document.createElement("div"); el.className="photo reveal";
  el.innerHTML=`<img src="${src}" alt="ذكرى ${n}" loading="lazy" onerror="this.style.display='none'"><span>Photo ${n}</span>`;
  galleryGrid.appendChild(el);
});

/* ---------- Reasons ---------- */
const reasonsGrid=document.getElementById("reasonsGrid");
reasons.forEach(([n,t,p])=>{
  const el=document.createElement("article"); el.className="reason reveal";
  el.innerHTML=`<div class="reason-num">${n}</div><h3>${t}</h3><p>${p}</p>`;
  reasonsGrid.appendChild(el);
});

/* ---------- Reveal on scroll ---------- */
document.querySelectorAll(".photo").forEach((el,i)=>{el.style.transitionDelay=(i%5)*90+"ms"});
document.querySelectorAll(".reason").forEach((el,i)=>{el.classList.add("zoom");el.style.transitionDelay=(i%3)*120+"ms"});
document.querySelectorAll(".letter-card").forEach((el,i)=>{el.classList.add("zoom");el.style.transitionDelay=i*100+"ms"});
document.querySelectorAll(".timeline-card").forEach((el,i)=>el.classList.add(i%2?"from-left":"from-right"));
const revealEls=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}
    });
  },{threshold:.12});
  revealEls.forEach(el=>observer.observe(el));
}else{
  revealEls.forEach(el=>el.classList.add("visible"));
}

/* ---------- Smooth scroll buttons ---------- */
document.querySelectorAll("[data-scroll]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const target=document.querySelector(btn.dataset.scroll);
    if(target)target.scrollIntoView({behavior:"smooth"});
  });
});

/* ---------- Music ---------- */
const audio=document.getElementById("birthdaySong");
const musicToggle=document.getElementById("musicToggle");
const musicLabel=document.getElementById("musicLabel");
const START_AT=30;
let seeked=false;
function setPlaying(on){
  musicToggle.classList.toggle("playing",on);
  musicToggle.setAttribute("aria-pressed",on?"true":"false");
  musicLabel.textContent=on?"إيقاف الأغنية":"شغّل الأغنية";
}
function seekOnce(){
  if(seeked)return;
  try{audio.currentTime=START_AT;seeked=true}catch(e){}
}
audio.addEventListener("loadedmetadata",seekOnce);
musicToggle.addEventListener("click",()=>{
  if(audio.paused){
    if(audio.readyState>=1)seekOnce();
    // play() لازم يتنادى مباشرة جوه الضغطة عشان المتصفح يسمح بالصوت
    const p=audio.play();
    setPlaying(true);
    if(p&&p.catch)p.catch(()=>{setPlaying(false);console.warn("تعذر تشغيل الأغنية: اتأكد إن الملف assets/ashan-habeeby.mp3 موجود")});
  }else{
    audio.pause();
    setPlaying(false);
  }
});
audio.addEventListener("ended",()=>{seeked=false;setPlaying(false)});
audio.addEventListener("error",()=>setPlaying(false));

/* ---------- Modal ---------- */
const modal=document.getElementById("modal"), modalTitle=document.getElementById("modalTitle"), modalText=document.getElementById("modalText");
const modalClose=document.getElementById("modalClose");
let lastFocus=null;
function openModal(title,text){
  lastFocus=document.activeElement;
  modalTitle.textContent=title;modalText.textContent=text;
  modal.classList.add("active");modal.setAttribute("aria-hidden","false");
  modalClose.focus();
}
function closeModal(){
  modal.classList.remove("active");modal.setAttribute("aria-hidden","true");
  if(lastFocus&&lastFocus.focus)lastFocus.focus();
}
modalClose.addEventListener("click",closeModal);
document.querySelector(".modal-backdrop").addEventListener("click",closeModal);

/* لو الخريطة اتضافت بعدين يشتغل الزرار، ولو مش موجودة مفيش أي خطأ */
const mapPin=document.getElementById("mapPin");
if(mapPin){
  mapPin.addEventListener("click",()=>openModal("بيت جدي","هنا هنحط الذكرى الحقيقية لما تحكيهالي. لحد وقتها، المكان ده مجرد نقطة مستنية قصة."));
}

/* ---------- Open-when letters ---------- */
const letters={
 sad:["افتحي لما تكوني مخنوقة و زعلانة","لو انتي زعلانة في حاجة دايما تعالي احكيلي و فضفضي معايا ايه اللي جواكي و انا هفهم كلامك كويس … اه ممكن احيانا يا سرسورا مش بفهم كل كلامك بالظبط و اكيد محدش عمره هيقدر يحس بمعاناة حد تاني بس انا جنبك و لازم اعرف انتي حاسة بإيه و زعلانة من ايه و ايه اللي مضايقك … هنتكلم مع بعض و أهون عليكي بكل الطرق و احاول دايما انسيكي همومك بأي طريقة أنا عاوز اكون دايما اول إنسان انتي تفكري فيه لما تمري بحاجة وحشة او ضايقتك و تحكيلي ايه اللي حصل او بيحصل معاكي و عاوز احس دايما اني جنبك و معاكي … و عاوزك تعرفي دايما يا حياتي اني جنبك و معاكي و سندك طول العمر في كل حلوة و مرة و كل لحظة فرحة و زعل و كل لحظة صعبة معاكي انا هكون دايما معاكي و ان شاء الله كل حاجة هتكون كويسة طالما انا معاكي و جنبك … انتي مش هتكوني لوحدك أبدا تاني ياروحي أنا معاكي طول العمر ❤️❤️❤️🫂🫀"],
 miss:["افتحي لما تشتاقيلي","عاوز اقولك أنك لو مشتاقة ليا او انا واحشك … ف انتي واحشاني أضعاف الأضعاف … مش عاوز اقولك انك دايما واحشاني عشان احنا مش بنشوف بعض اصلا غير كل فين و فين مع اننا بنتكلم كتير اهو … بس برضو واحشاني دايما والله و في دماغي … و ربنا ما يبعدنا عن بعض أبدا و المسافات اللي بيننا تكبر أبدا يا روح قلبي 🥹❤️❤️❤️🫂"],
 sleep:["افتحي قبل ما تنامي","عاوزك دايما قبل النوم تتوضي و تصلي ركعتين قبل النوم و تدعي ربنا بكل اللي انتي بتتمناه … بتفرق اوي بجد في حياتك ❤️❤️❤️🫂و في الآخر أتمنى لكي ليلة سعيدة و هنيئة و احلاما جميلة تفرحي فيها ❤️❤️❤️🫂✨"],
 angry:["افتحي لما تزعلي مني","مهما حصل ايه في الدنيا دي مستحيل أسيبك تزعلي مني في يوم من الأيام … و لو انتي زعلتي بجد في يوم من الأيام مستحيل أسيبك غير لما أصالحك و تبقي مسامحاني و نضحك مع بعض و نكون مبسوطين … الحمدلله مفيش ولا مرة لحد النهاردة قفلنا مع بعض و احنا زعلانين من بعض … و لو في مرة انا قفلت معاكي و انتي زعلانة مني ( مع انها عمرها ما حصلت ) ف سامحيني .. بس عاوزك تعرفي ان زعلك والله العظيم عمره ما كان يهون عليا بس ثانية في حياتي كلها لحد ما أموت او اني اشوفك زعلانة او بتعيطي 🥺❤️❤️❤️🫂"]
};
document.querySelectorAll(".letter-card").forEach(card=>{
  card.addEventListener("click",()=>{
    const x=letters[card.dataset.letter];
    if(x)openModal(x[0],x[1]);
  });
});

/* ---------- Quiz ---------- */
let qi=0, score=0, answered=false;
const qText=document.getElementById("questionText"), answers=document.getElementById("answers"), qCount=document.getElementById("quizCount"), progress=document.getElementById("progressBar"), result=document.getElementById("quizResult");

function renderQ(){
  answered=false; result.textContent="";
  const q=questions[qi];
  qCount.textContent=`QUESTION ${String(qi+1).padStart(2,"0")} / 08`;
  qText.textContent=q.q;
  progress.style.width=`${(qi/questions.length)*100}%`;
  answers.innerHTML="";
  q.a.forEach((txt,i)=>{
    const b=document.createElement("button");
    b.type="button"; b.className="answer"; b.textContent=txt;
    b.addEventListener("click",()=>{
      if(answered)return; answered=true;
      if(i===q.c){score++;b.classList.add("correct")}
      else{b.classList.add("wrong");answers.children[q.c].classList.add("correct")}
      answers.classList.add("locked");
      setTimeout(()=>{
        answers.classList.remove("locked");
        qi++;
        if(qi<questions.length)renderQ();
        else showResult();
      },900);
    });
    answers.appendChild(b);
  });
}

function showResult(){
  progress.style.width="100%"; qText.textContent="خلصنا…";
  answers.innerHTML="";
  const msg=score>=7?"واضح إن فلافي مذاكرة كويس ... شطووورة 🤭❤️":"و بعدين بقا 🙄 مش عارفة تجاوبي صح على معظم الاسئلة ؟ 🥺😔 ... المرة الجاية تجاوبي صح بقا 🌚😂❤️";
  result.innerHTML=`<strong>${score} / 8</strong><br>${msg}<br><button type="button" class="primary-btn restart-btn">نعيدها؟</button>`;
  result.querySelector(".restart-btn").addEventListener("click",()=>{qi=0;score=0;renderQ()});
}
renderQ();

/* ---------- Birthday surprise ---------- */
const surprise=document.getElementById("surpriseBtn"), overlay=document.getElementById("birthdayOverlay");
const confettiColors=["#f9a8c9","#f472a8","#ffc2d9","#ec4899","#fbcfe8","#fda4cf","#ffffff"];
function closeBirthday(){overlay.classList.remove("active")}
surprise.addEventListener("click",()=>{
  overlay.classList.add("active");
  const box=document.getElementById("confetti"); box.innerHTML="";
  for(let i=0;i<90;i++){
    const p=document.createElement("i");p.className="piece";
    p.style.left=Math.random()*100+"%";
    p.style.top=(-Math.random()*20)+"%";
    p.style.animationDelay=Math.random()*1.5+"s";
    p.style.background=confettiColors[Math.floor(Math.random()*confettiColors.length)];
    p.style.transform=`rotate(${Math.random()*360}deg)`;
    box.appendChild(p);
  }
});
document.getElementById("closeBirthday").addEventListener("click",closeBirthday);

/* ---------- Escape key ---------- */
document.addEventListener("keydown",e=>{
  if(e.key!=="Escape")return;
  if(modal.classList.contains("active"))closeModal();
  if(overlay.classList.contains("active"))closeBirthday();
});


/* ---------- Floating hearts ---------- */
(function(){
  const box=document.getElementById("floaters");
  if(!box||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  const sym=["❤","✦","♡","✿","❥"];
  for(let i=0;i<16;i++){
    const e=document.createElement("i");
    e.textContent=sym[i%sym.length];
    e.style.left=Math.random()*100+"%";
    e.style.fontSize=(12+Math.random()*20)+"px";
    e.style.animationDuration=(12+Math.random()*14)+"s";
    e.style.animationDelay=(-Math.random()*20)+"s";
    box.appendChild(e);
  }
})();

/* ---------- Click hearts ---------- */
document.addEventListener("click",e=>{
  if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  for(let i=0;i<5;i++){
    const h=document.createElement("span");h.className="click-heart";h.textContent="❤";
    h.style.left=e.clientX+"px";h.style.top=e.clientY+"px";
    h.style.setProperty("--dx",(Math.random()*80-40)+"px");
    h.style.animationDelay=i*50+"ms";
    document.body.appendChild(h);setTimeout(()=>h.remove(),1200);
  }
});

/* ---------- Hero parallax ---------- */
const heroEl=document.querySelector(".hero");
heroEl.addEventListener("mousemove",e=>{
  const x=(e.clientX/innerWidth-.5)*24,y=(e.clientY/innerHeight-.5)*24;
  heroEl.querySelectorAll(".shape").forEach((el,i)=>{el.style.translate=`${x*(i%3+1)}px ${y*(i%3+1)}px`});
});


/* ---------- Password gate ---------- */
function cyrb53(s){let a=0xdeadbeef,b=0x41c6ce57;for(let i=0;i<s.length;i++){const c=s.charCodeAt(i);a=Math.imul(a^c,2654435761);b=Math.imul(b^c,1597334677)}a=Math.imul(a^(a>>>16),2246822507)^Math.imul(b^(b>>>13),3266489909);b=Math.imul(b^(b>>>16),2246822507)^Math.imul(a^(a>>>13),3266489909);return 4294967296*(2097151&b)+(a>>>0)}
(function(){
  const HASH=8543424036450647;
  const gate=document.getElementById("gate"),box=document.getElementById("gateBox");
  const input=document.getElementById("gateInput"),btn=document.getElementById("gateBtn"),msg=document.getElementById("gateMsg");
  const wrong=["لأ مش الباسورد ده 🙈 جربي تاني","قربتي… بس لسه 🤭","فكري تاني يا فلافي 🥺"];
  let tries=0;
  setTimeout(()=>input.focus(),400);
  function check(){
    const v=input.value.trim().replace(/[٠-٩]/g,d=>"٠١٢٣٤٥٦٧٨٩".indexOf(d));
    if(cyrb53(v)===HASH){
      msg.textContent="أهلاً بيكي يا قلبي ❤️";
      gate.classList.add("unlocking");
      setTimeout(()=>{
        gate.classList.add("open");
        document.body.classList.remove("locked");
        setTimeout(()=>gate.remove(),900);
      },600);
    }else{
      msg.textContent=wrong[tries++%wrong.length];
      input.value="";
      box.classList.remove("shake");void box.offsetWidth;box.classList.add("shake");
      input.focus();
    }
  }
  btn.addEventListener("click",check);
  input.addEventListener("keydown",e=>{if(e.key==="Enter")check()});
})();

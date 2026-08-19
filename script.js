(() => {
  "use strict";
  const $ = id => document.getElementById(id);

  const els = {
    screens:[...document.querySelectorAll(".screen")],
    startScreen:$("startScreen"), questionScreen:$("questionScreen"), analysisScreen:$("analysisScreen"), resultScreen:$("resultScreen"),
    homeButton:$("homeButton"), backButton:$("backButton"), adultCheck:$("adultCheck"), adultError:$("adultError"),
    progressLabel:$("progressLabel"), progressPercent:$("progressPercent"), progressBar:$("progressBar"),
    questionIcon:$("questionIcon"), questionStep:$("questionStep"), questionTitle:$("questionTitle"), questionDescription:$("questionDescription"), answerList:$("answerList"),
    questionBackButton:$("questionBackButton"),
    analysisTitle:$("analysisTitle"), analysisMessage:$("analysisMessage"), analysisBar:$("analysisBar"), analysisChecklist:$("analysisChecklist"),
    resultTitle:$("resultTitle"), resultSubtitle:$("resultSubtitle"), deviceResult:$("deviceResult"), stickResult:$("stickResult"),
    deviceReasonList:$("deviceReasonList"), stickProductGrid:$("stickProductGrid"), choiceSummary:$("choiceSummary"),
    staffButton:$("staffButton"), crossRecommendButton:$("crossRecommendButton"), restartButton:$("restartButton"),
    analyticsTrigger:$("analyticsTrigger")
  };

  const state = { mode:null, answers:{}, history:[], current:null, result:null };
  const STORAGE_KEY = "findMyLilAbleFocusAnalyticsV1";

  // Site entry gate — simple on-device access control for the static GitHub Pages site.
  // Note: because this is a static site, the code is not a substitute for server-side authentication.
  const ENTRY_CODE = "0000";
  const ENTRY_SESSION_KEY = "findMyLilAdultEntryVerifiedV1";

  function unlockEntryGate() {
    const gate = $("entryGate");
    if (gate) gate.hidden = true;
    document.body.classList.remove("entry-locked");
  }

  function initEntryGate() {
    const gate = $("entryGate");
    const form = $("entryGateForm");
    const input = $("entryGateInput");
    const error = $("entryGateError");
    if (!gate || !form || !input || !error) return;

    if (sessionStorage.getItem(ENTRY_SESSION_KEY) === "1") {
      unlockEntryGate();
      return;
    }

    document.body.classList.add("entry-locked");
    gate.hidden = false;
    setTimeout(() => input.focus(), 80);

    input.addEventListener("input", e => {
      e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
      error.hidden = true;
    });

    form.addEventListener("submit", e => {
      e.preventDefault();
      if (input.value !== ENTRY_CODE) {
        error.hidden = false;
        input.select();
        return;
      }
      sessionStorage.setItem(ENTRY_SESSION_KEY, "1");
      unlockEntryGate();
    });
  }

  initEntryGate();

  const icons = {
    gender:"user",
    age:"calendar",
    current:"cigarette",
    priority:"star",
    amount:"chart",
    sensation:"wind",
    category:"layers",
    menthol:"snow"
  };

  const commonQuestions = {
    gender:{
      title:"성별을 선택해 주세요.", description:"행사 분석을 위한 정보이며 추천 결과에는 영향을 주지 않습니다.", icon:"gender",
      options:[["male","남성",""],["female","여성",""]]
    },
    age:{
      title:"연령대를 선택해 주세요.", description:"행사 분석을 위한 정보이며 추천 결과에는 영향을 주지 않습니다.", icon:"age",
      options:[["20s","20대",""],["30s","30대",""],["40s","40대",""],["50plus","50대 이상",""]]
    }
  };

  const deviceQuestions = {
    current:{
      title:"현재 사용 중인 제품은 무엇인가요?", description:"가장 자주 사용하는 제품을 선택해 주세요.", icon:"current",
      options:[
        ["cigarette","연초","일반 궐련 제품"],["iqos","아이코스 일루마","아이코스 전용 기기"],
        ["ploom","플룸","플룸 전용 기기"],["glo","글로 하이퍼","글로 전용 기기"],
        ["hybrid","릴 하이브리드","릴 하이브리드 기기"],["liquid","액상형 전자담배","액상 카트리지 또는 팟"]
      ]
    },
    priority:{
      title:"기기를 선택할 때 가장 우선하는 것은 무엇인가요?", description:"상담 시 가장 중요하게 안내받고 싶은 기준을 선택해 주세요.", icon:"priority",
      options:[
        ["preheat","빠른 예열","사용 준비 시간"],["vapor","풍부한 연무","연무량을 중요하게 고려"],
        ["satisfaction","담배와 비슷한 만족감","익숙하고 진한 느낌"],["simple","간편한 사용","복잡하지 않은 사용 방식"],
        ["price","가격","구매 가격과 할인 혜택"]
      ]
    },
    amount:{
      title:"하루 평균 사용량은 어느 정도인가요?", description:"평소 하루 사용량과 가장 가까운 항목을 선택해 주세요.", icon:"amount",
      options:[["low","10개비 이하",""],["mid","10~20개비",""],["high","20개비 이상",""]]
    },
    sensation:{
      title:"어떤 사용감을 선호하시나요?", description:"상담 시 참고할 수 있도록 가장 가까운 항목을 선택해 주세요.", icon:"sensation",
      options:[
        ["strong","진한 만족감",""],["soft","부드러운 사용감",""],["vapor","풍부한 연무",""],["balanced","균형 잡힌 사용감",""]
      ]
    }
  };

  const stickQuestions = {
    current:deviceQuestions.current,
    category:{
      title:"평소 가장 자주 선택하는 계열은 무엇인가요?", description:"제품을 평가하기보다 자주 선택하는 계열을 골라 주세요.", icon:"category",
      options:[["menthol","멘솔 계열","시원한 계열"],["scent","향 계열","향이 포함된 계열"],["original","오리지널 계열","담배 본연의 계열"]]
    },
    mentholStyle:{
      title:"어떤 멘솔 스타일을 선호하시나요?", description:"가장 가까운 스타일을 선택해 주세요.", icon:"menthol",
      options:[["strong","강한 멘솔",""],["soft","부드러운 멘솔",""],["satisfying","타격감 있는 멘솔",""]]
    }
  };

  const labels = {
    gender:{male:"남성",female:"여성"}, age:{"20s":"20대","30s":"30대","40s":"40대","50plus":"50대 이상"},
    current:{cigarette:"연초",iqos:"아이코스 일루마",ploom:"플룸",glo:"글로 하이퍼",hybrid:"릴 하이브리드",liquid:"액상형 전자담배"},
    priority:{preheat:"빠른 예열",vapor:"풍부한 연무",satisfaction:"담배와 비슷한 만족감",simple:"간편한 사용",price:"가격"},
    amount:{low:"10개비 이하",mid:"10~20개비",high:"20개비 이상"},
    sensation:{strong:"진한 만족감",soft:"부드러운 사용감",vapor:"풍부한 연무",balanced:"균형 잡힌 사용감"},
    category:{menthol:"멘솔 계열",scent:"향 계열",original:"오리지널 계열"},
    mentholStyle:{strong:"강한 멘솔",soft:"부드러운 멘솔",satisfying:"타격감 있는 멘솔"}
  };

  const products = {
    "에임 아이스피크":{image:"images/aim-ice-peak.png"},
    "에임 아이스팟":{image:"images/aim-ice-spot.jpg"},
    "에임 아이스노우":{image:"images/aim-ice-snow.png"},
    "레임 아이스":{image:"images/raim-ice.png"},
    "레임 아이스미드":{image:"images/raim-ice-mid.png"},
    "에임 쿨샷":{image:"images/aim-cool-shot.png"},
    "에임 탱고":{image:"images/aim-tango.png"},
    "에임 트와이스":{image:"images/aim-twice.png"},
    "에임 블루밍":{image:"images/aim-blooming.png"},
    "에임 리믹스":{image:"images/aim-remix.png"},
    "에임 시가리쉬":{image:"images/aim-cigarish.png"},
    "에임 까메오":{image:"images/aim-cameo.png"},
    "레임 레귤러":{image:"images/raim-regular.png"}
  };

  function iconSvg(name) {
    const paths = {
      user:'<circle cx="12" cy="8" r="3.2"></circle><path d="M5.5 20c.7-4 3-6 6.5-6s5.8 2 6.5 6"></path>',
      calendar:'<rect x="3" y="5" width="18" height="16" rx="2.5"></rect><path d="M8 3v4M16 3v4M3 10h18"></path>',
      cigarette:'<path d="M3 14h14v4H3z"></path><path d="M17 14h4v4h-4"></path><path d="M18 6c0 2 2 2 2 4M14 5c0 2 2 2 2 4"></path>',
      star:'<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3z"></path>',
      chart:'<path d="M5 20V10M12 20V4M19 20v-7"></path>',
      wind:'<path d="M3 8h11c2.5 0 2.5-4 0-4-1.2 0-2 .6-2.4 1.4M3 12h16c2.7 0 2.7 4 0 4-1 0-1.8-.4-2.3-1.2M3 16h8"></path>',
      layers:'<path d="m12 3 9 5-9 5-9-5 9-5z"></path><path d="m3 12 9 5 9-5M3 16l9 5 9-5"></path>',
      snow:'<path d="M12 2v20M4 7l16 10M20 7 4 17M8.5 4.5 12 7l3.5-2.5M8.5 19.5 12 17l3.5 2.5"></path>',
      male:'<circle cx="10" cy="10" r="5"></circle><path d="M14 6l5-5M15 1h4v4"></path>',
      female:'<circle cx="12" cy="9" r="5"></circle><path d="M12 14v7M9 18h6"></path>',
      clock:'<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
      cloud:'<path d="M6 18h11a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 2A3 3 0 0 0 6 18z"></path>',
      flame:'<path d="M13 2s1 4-2 6c-2 1.4-3 3.4-3 5.5A4.5 4.5 0 0 0 17 14c0-4-2-6-4-8 0 3-1 4-2 5"></path>',
      hand:'<path d="M8 11V6a1.5 1.5 0 0 1 3 0v4M11 10V5a1.5 1.5 0 0 1 3 0v5M14 10V6a1.5 1.5 0 0 1 3 0v6M8 10a1.5 1.5 0 0 0-3 0v4c0 4 2.5 7 7 7h1c4 0 6-2.5 6-6v-3"></path>',
      card:'<rect x="3" y="5" width="18" height="14" rx="2.5"></rect><path d="M3 10h18M7 15h4"></path>',
      leaf:'<path d="M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-7 10-16z"></path><path d="M5 19c3-5 7-8 12-11"></path>',
      balance:'<path d="M12 3v18M5 7h14M7 7l-3 6h6L7 7zM17 7l-3 6h6l-3-6zM8 21h8"></path>',
      bolt:'<path d="m13 2-7 11h6l-1 9 7-12h-6l1-8z"></path>',
      berry:'<circle cx="9" cy="12" r="4"></circle><circle cx="15" cy="12" r="4"></circle><circle cx="12" cy="16" r="4"></circle><path d="M12 7c0-2 2-3 4-3"></path>',
      blackdot:'<circle cx="12" cy="12" r="6"></circle>',
      droplet:'<path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11z"></path>'
    };
    return `<svg class="line-icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.layers}</svg>`;
  }

  function getOptionIcon(key, value) {
    const map = {
      gender:{male:"male",female:"female"},
      age:{"20s":"calendar","30s":"calendar","40s":"calendar","50plus":"calendar"},
      current:{cigarette:"cigarette",iqos:"flame",ploom:"leaf",glo:"blackdot",hybrid:"layers",liquid:"droplet"},
      priority:{preheat:"clock",vapor:"cloud",satisfaction:"flame",simple:"hand",price:"card"},
      amount:{low:"cigarette",mid:"cigarette",high:"cigarette"},
      sensation:{strong:"flame",soft:"leaf",vapor:"cloud",balanced:"balance"},
      category:{menthol:"snow",scent:"berry",original:"cigarette"},
      mentholStyle:{strong:"snow",soft:"leaf",satisfying:"bolt"}
    };
    return iconSvg(map[key]?.[value] || icons[key] || "layers");
  }

  function show(screen){
    els.screens.forEach(s=>s.classList.toggle("is-active",s===screen));
    window.scrollTo({top:0,behavior:"smooth"});
  }

  function reset(){
    state.mode=null; state.answers={}; state.history=[]; state.current=null; state.result=null;
    els.backButton.hidden=true; show(els.startScreen);
  }

  function start(mode){
    if(!els.adultCheck.checked){els.adultError.hidden=false;return}
    els.adultError.hidden=true;
    state.mode=mode; state.answers={}; state.history=[]; state.current="gender"; state.result=null;
    els.backButton.hidden=false; renderQuestion();
  }

  function getSequence(){
    if(state.mode==="device") return ["gender","age","current","priority","amount","sensation"];
    return ["gender","age","current","category", ...(state.answers.category==="menthol" ? ["mentholStyle"] : [])];
  }

  function getQuestion(key){
    if(commonQuestions[key]) return commonQuestions[key];
    return state.mode==="device" ? deviceQuestions[key] : stickQuestions[key];
  }

  function renderQuestion(){
    const sequence=getSequence();
    let key=state.current;
    if(!sequence.includes(key)) key=sequence.find(k=>state.answers[k]===undefined) || sequence[sequence.length-1];
    state.current=key;
    const q=getQuestion(key);
    const idx=sequence.indexOf(key);
    const pct=Math.round(((idx+1)/sequence.length)*100);
    els.progressLabel.textContent=`${idx+1} / ${sequence.length}`;
    els.progressPercent.textContent=`${pct}%`;
    els.progressBar.style.width=`${pct}%`;
    els.questionStep.textContent=`Q${idx+1}`;
    els.questionIcon.innerHTML=iconSvg(icons[q.icon] || "layers");
    els.questionTitle.textContent=q.title;
    els.questionDescription.textContent=q.description;
    els.answerList.innerHTML="";
    q.options.forEach(([value,title,desc])=>{
      const b=document.createElement("button");
      b.type="button"; b.className="answer-button";
      const optionIcon = getOptionIcon(key, value);
      b.innerHTML=`<span class="answer-icon">${optionIcon}</span><span class="answer-copy"><strong>${title}</strong>${desc?`<small>${desc}</small>`:""}</span><span class="answer-arrow">›</span>`;
      b.addEventListener("click",()=>selectAnswer(key,value,b));
      els.answerList.appendChild(b);
    });
    show(els.questionScreen);
  }

  function selectAnswer(key,value,button){
    if (button) {
      button.classList.add("is-selected");
      button.querySelector(".answer-arrow").textContent = "✓";
      document.querySelectorAll(".answer-button").forEach(item => {
        if (item !== button) item.classList.add("is-dimmed");
      });
    }

    setTimeout(() => {
      state.answers[key]=value;
      state.history.push(key);
      const sequence=getSequence();
      const idx=sequence.indexOf(key);
      if(idx>=sequence.length-1){beginAnalysis();return}
      state.current=sequence[idx+1];
      renderQuestion();
    }, 190);
  }

  function goBack(){
    if(!state.history.length){reset();return}
    const last=state.history.pop();
    delete state.answers[last];
    state.current=last;
    renderQuestion();
  }

  function beginAnalysis(){
    els.backButton.hidden=true;
    const steps=state.mode==="device"
      ? [["선택하신 내용을 확인하고 있습니다.","현재 제품과 상담 기준을 정리하고 있습니다.",28],["에이블 3.0 안내 포인트를 구성하고 있습니다.","고객님의 사용량과 선호 사용감을 확인하고 있습니다.",67],["결과를 준비하고 있습니다.","직원이 바로 상담할 수 있도록 내용을 정리하고 있습니다.",100]]
      : [["선택하신 내용을 확인하고 있습니다.","현재 제품과 선택 계열을 정리하고 있습니다.",28],["릴 스틱 정보를 비교하고 있습니다.","선택하신 계열에 맞는 제품을 준비하고 있습니다.",67],["결과를 준비하고 있습니다.","안내 제품과 상담 정보를 정리하고 있습니다.",100]];
    show(els.analysisScreen); els.analysisBar.style.width="0%";
    const items=[...els.analysisChecklist.querySelectorAll("span")];
    items.forEach((x,i)=>{x.className=i===0?"is-active":""});
    let i=0;
    const next=()=>{
      const [title,msg,pct]=steps[i];
      els.analysisTitle.textContent=title; els.analysisMessage.textContent=msg; els.analysisBar.style.width=`${pct}%`;
      items.forEach((x,j)=>{x.className=j<i?"is-complete":j===i?"is-active":""});
      i++;
      if(i<steps.length)setTimeout(next,650);else setTimeout(renderResult,550);
    };
    next();
  }

  function deviceReasons(){
    const a=state.answers, reasons=[];
    const current=labels.current[a.current];
    reasons.push(`${current} 사용 고객을 위한 에이블 3.0 상담 안내`);
    const map={
      preheat:"빠른 사용 준비를 중요하게 선택하셨습니다.",
      vapor:"풍부한 연무를 중요하게 선택하셨습니다.",
      satisfaction:"담배와 비슷한 만족감을 중요하게 선택하셨습니다.",
      simple:"간편한 사용 방식을 중요하게 선택하셨습니다.",
      price:"가격과 행사 혜택을 중요하게 선택하셨습니다."
    };
    reasons.push(map[a.priority]);
    if(a.amount==="high") reasons.push("하루 사용량이 많아 충족감을 중심으로 안내할 수 있습니다.");
    else reasons.push(`${labels.amount[a.amount]} 사용 패턴을 상담에 반영합니다.`);
    reasons.push(`${labels.sensation[a.sensation]}을 선호하는 것으로 선택하셨습니다.`);
    return reasons.slice(0,4);
  }

  function stickProducts(){
    const a=state.answers;
    if(a.category==="scent") return ["에임 트와이스","에임 블루밍","에임 리믹스"];
    if(a.category==="original") return ["에임 시가리쉬","에임 까메오","레임 레귤러"];
    if(a.mentholStyle==="soft") return ["레임 아이스미드","에임 쿨샷","에임 탱고"];
    if(a.mentholStyle==="satisfying") return ["레임 아이스","에임 아이스피크","에임 쿨샷"];
    return ["에임 아이스피크","에임 아이스팟","레임 아이스"];
  }

  function summaryRows(){
    const a=state.answers;
    const rows=[["성별",labels.gender[a.gender]],["연령대",labels.age[a.age]],["현재 제품",labels.current[a.current]]];
    if(state.mode==="device"){
      rows.push(["중요 요소",labels.priority[a.priority]],["하루 사용량",labels.amount[a.amount]],["선호 사용감",labels.sensation[a.sensation]]);
    }else{
      rows.push(["선택 계열",labels.category[a.category]]);
      if(a.mentholStyle) rows.push(["멘솔 스타일",labels.mentholStyle[a.mentholStyle]]);
    }
    return rows;
  }

  function renderResult(){
    const rows=summaryRows();
    els.choiceSummary.innerHTML=rows.map(([l,v])=>`<div class="choice-row"><span>${l}</span><strong>${v}</strong></div>`).join("");
    if(state.mode==="device"){
      state.result={type:"device",name:"릴 에이블 3.0",products:["릴 에이블 3.0"]};
      els.deviceResult.hidden=false; els.stickResult.hidden=true;
      els.resultTitle.textContent="회원님께 추천드리는 릴 기기";
      els.resultSubtitle.textContent="선택하신 답변을 바탕으로 에이블 3.0 상담 정보를 준비했습니다.";
      els.deviceReasonList.innerHTML=deviceReasons().map(x=>`<div class="reason-item">✓ ${x}</div>`).join("");
      els.crossRecommendButton.textContent="나에게 맞는 릴 스틱도 찾아보기";
    }else{
      const list=stickProducts();
      state.result={type:"stick",name:list.join(", "),products:list};
      els.deviceResult.hidden=true; els.stickResult.hidden=false;
      els.resultTitle.textContent="회원님께 추천드리는 릴 스틱";
      els.resultSubtitle.textContent="회원님의 선택을 바탕으로 안내드리는 제품입니다.";
      els.stickProductGrid.innerHTML=list.map(name=>{
        const p=products[name];
        const image=p && p.image ? `<img src="${p.image}" alt="${name}">` : `<span class="product-placeholder"><span class="placeholder-icon" aria-hidden="true"></span><strong>이미지 준비중</strong><small>${name}</small></span>`;
        return `<article class="product-card"><div class="product-image">${image}</div><strong>${name}</strong></article>`;
      }).join("");
      els.crossRecommendButton.textContent="나에게 맞는 릴 기기도 찾아보기";
    }
    saveRecord();
    show(els.resultScreen);
  }

  function saveRecord(){
    const data=loadData();
    const a=state.answers;
    data.records.push({
      id:`${Date.now()}-${Math.random().toString(16).slice(2)}`,
      completedAt:new Date().toISOString(), mode:state.mode,
      gender:labels.gender[a.gender], age:labels.age[a.age], current:labels.current[a.current],
      priority:a.priority?labels.priority[a.priority]:"", amount:a.amount?labels.amount[a.amount]:"",
      sensation:a.sensation?labels.sensation[a.sensation]:"", category:a.category?labels.category[a.category]:"",
      recommendation:state.mode==="device"?"릴 에이블 3.0":state.result.products.join("|")
    });
    saveData(data);
  }

  function staffPayload(){
    const rows=summaryRows();
    if(state.mode==="device"){
      const points=deviceReasons();
      return {title:"릴 에이블 3.0",sub:"추천 기기",rows,points,script:`“고객님은 ${labels.priority[state.answers.priority]}을 중요하게 선택하셨습니다. 에이블 3.0의 관련 특징과 현재 행사 혜택을 중심으로 안내드리겠습니다.”`};
    }
    const list=state.result.products;
    const category=labels.category[state.answers.category];
    return {title:list.join(" · "),sub:"추천 릴 스틱",rows,points:[`${category} 선택 고객`,`${list[0]}부터 제품 이미지를 보며 안내`, "제품별 가격과 세부 정보는 직원이 직접 설명"],script:`“고객님은 ${category}을 선택하셨습니다. 화면에 표시된 세 제품을 차례로 안내해 드리겠습니다.”`};
  }

  function openPassword(){
    $("passwordInput").value=""; $("passwordError").hidden=true; $("passwordModal").hidden=false; document.body.style.overflow="hidden";
    setTimeout(()=>$("passwordInput").focus(),80);
  }
  function closePassword(){$("passwordModal").hidden=true;document.body.style.overflow=""}
  function openStaff(){
    const p=staffPayload();
    $("staffRecommendation").innerHTML=`<strong>${p.title}</strong><span>${p.sub}</span>`;
    $("staffChoices").innerHTML=p.rows.map(([l,v])=>`<div class="choice-row"><span>${l}</span><strong>${v}</strong></div>`).join("");
    $("staffPoints").innerHTML=p.points.map(x=>`<span>✓ ${x}</span>`).join("");
    $("staffScript").textContent=p.script;
    const data=loadData();data.staffOpenCount=(data.staffOpenCount||0)+1;saveData(data);
    $("staffModal").hidden=false;document.body.style.overflow="hidden";
  }
  function closeStaff(){$("staffModal").hidden=true;document.body.style.overflow=""}

  function loadData(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||{records:[],staffOpenCount:0}}catch(_){return{records:[],staffOpenCount:0}}}
  function saveData(data){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(data))}catch(_){}}
  function counts(records,key){return records.reduce((a,r)=>{const v=r[key];if(v)a[v]=(a[v]||0)+1;return a},{})}
  function pct(n,t){return t?Math.round(n/t*100):0}
  function renderBars(container, map, total){
    const entries=Object.entries(map).sort((a,b)=>b[1]-a[1]);
    container.innerHTML=entries.length?entries.map(([name,count])=>`<div class="bar-row"><div class="bar-row__head"><span>${name}</span><strong>${count}명 · ${pct(count,total)}%</strong></div><div class="bar-track"><span style="width:${pct(count,total)}%"></span></div></div>`).join(""):`<p class="section-copy">데이터 없음</p>`;
  }
  function top(records,key){
    const e=Object.entries(counts(records,key)).sort((a,b)=>b[1]-a[1])[0];
    return e?`${e[0]} · ${e[1]}명`:"데이터 없음";
  }
  function renderAnalytics(){
    const data=loadData(), records=data.records||[], total=records.length;
    const device=records.filter(r=>r.mode==="device"),stick=records.filter(r=>r.mode==="stick");
    $("totalCount").textContent=total;$("deviceCount").textContent=device.length;$("stickCount").textContent=stick.length;
    $("deviceRate").textContent=`${pct(device.length,total)}%`;$("stickRate").textContent=`${pct(stick.length,total)}%`;
    renderBars($("genderStats"),counts(records,"gender"),total);
    renderBars($("ageStats"),counts(records,"age"),total);
    renderBars($("currentStats"),counts(records,"current"),total);
    $("topPriority").textContent=top(device,"priority");$("topSensation").textContent=top(device,"sensation");
    $("topCategory").textContent=top(stick,"category");
    const allSticks=stick.flatMap(r=>(r.recommendation||"").split("|").filter(Boolean)).map(x=>({stick:x}));
    $("topStick").textContent=top(allSticks,"stick");
    $("staffOpenCount").textContent=`${data.staffOpenCount||0}회`;
  }
  function openAnalyticsPassword(){$("analyticsPasswordInput").value="";$("analyticsPasswordError").hidden=true;$("analyticsPasswordModal").hidden=false;document.body.style.overflow="hidden"}
  function closeAnalyticsPassword(){$("analyticsPasswordModal").hidden=true;document.body.style.overflow=""}
  function openAnalytics(){renderAnalytics();$("analyticsModal").hidden=false;document.body.style.overflow="hidden"}
  function closeAnalytics(){$("analyticsModal").hidden=true;document.body.style.overflow=""}
  function csv(){
    const data=loadData(), headers=["완료시간","구분","성별","연령대","현재제품","중요요소","사용량","선호사용감","선택계열","안내결과"];
    const rows=data.records.map(r=>[new Date(r.completedAt).toLocaleString("ko-KR"),r.mode==="device"?"기기":"스틱",r.gender,r.age,r.current,r.priority,r.amount,r.sensation,r.category,r.recommendation]);
    const esc=v=>`"${String(v||"").replace(/"/g,'""')}"`;
    const content="\uFEFF"+[headers,...rows].map(row=>row.map(esc).join(",")).join("\n");
    const url=URL.createObjectURL(new Blob([content],{type:"text/csv;charset=utf-8"}));const a=document.createElement("a");a.href=url;a.download=`find-my-lil-${new Date().toISOString().slice(0,10)}.csv`;a.click();URL.revokeObjectURL(url);
  }

  document.querySelectorAll("[data-start]").forEach(b=>b.addEventListener("click",()=>start(b.dataset.start)));
  els.homeButton.addEventListener("click",reset);
  els.backButton.addEventListener("click",goBack);
  els.questionBackButton.addEventListener("click",goBack);
  els.restartButton.addEventListener("click",reset);
  els.crossRecommendButton.addEventListener("click",()=>{state.mode=state.mode==="device"?"stick":"device";state.answers={};state.history=[];state.current="gender";state.result=null;els.backButton.hidden=false;renderQuestion()});
  els.staffButton.addEventListener("click",openPassword);
  $("passwordForm").addEventListener("submit",e=>{e.preventDefault();if($("passwordInput").value!=="1234"){$("passwordError").hidden=false;return}closePassword();openStaff()});
  $("passwordInput").addEventListener("input",e=>{e.target.value=e.target.value.replace(/\D/g,"").slice(0,4);$("passwordError").hidden=true});
  $("passwordClose").addEventListener("click",closePassword);document.querySelector("[data-close-password]").addEventListener("click",closePassword);
  $("staffClose").addEventListener("click",closeStaff);$("staffDone").addEventListener("click",closeStaff);document.querySelector("[data-close-staff]").addEventListener("click",closeStaff);

  let taps=0,timer;
  els.analyticsTrigger.addEventListener("click",()=>{taps++;clearTimeout(timer);timer=setTimeout(()=>taps=0,1400);if(taps>=5){taps=0;clearTimeout(timer);openAnalyticsPassword()}});
  $("analyticsPasswordForm").addEventListener("submit",e=>{e.preventDefault();if($("analyticsPasswordInput").value!=="1234"){$("analyticsPasswordError").hidden=false;return}closeAnalyticsPassword();openAnalytics()});
  $("analyticsPasswordInput").addEventListener("input",e=>{e.target.value=e.target.value.replace(/\D/g,"").slice(0,4);$("analyticsPasswordError").hidden=true});
  $("analyticsPasswordClose").addEventListener("click",closeAnalyticsPassword);document.querySelector("[data-close-analytics-password]").addEventListener("click",closeAnalyticsPassword);
  $("analyticsClose").addEventListener("click",closeAnalytics);document.querySelector("[data-close-analytics]").addEventListener("click",closeAnalytics);
  $("csvButton").addEventListener("click",csv);
  $("resetDataButton").addEventListener("click",()=>{if(confirm("현재 브라우저에 저장된 데이터를 모두 삭제할까요?")){saveData({records:[],staffOpenCount:0});renderAnalytics()}});
  els.adultCheck.addEventListener("change",()=>els.adultError.hidden=true);
  document.addEventListener("keydown",e=>{if(e.key!=="Escape")return;if(!$("analyticsModal").hidden)closeAnalytics();else if(!$("analyticsPasswordModal").hidden)closeAnalyticsPassword();else if(!$("staffModal").hidden)closeStaff();else if(!$("passwordModal").hidden)closePassword()});
  reset();
})();

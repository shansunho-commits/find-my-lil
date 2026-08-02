(() => {
  "use strict";

  const PRODUCTS = [
    { id:"aim-cigarish", name:"에임 시가리쉬", category:"일반맛", capsule:"캡슐 스틱", image:"images/aim-cigarish.png",
      tags:["basic","hit"], summary:"담백한 기본 맛과 또렷한 타격감을 선호하는 취향에 가까운 제품입니다." },
    { id:"aim-cameo", name:"에임 까메오", category:"일반맛", capsule:"캡슐 스틱", image:"images/aim-cameo.png",
      tags:["basic","hit"], summary:"익숙한 기본 맛과 강한 느낌을 중요하게 생각하는 취향에 어울립니다." },
    { id:"aim-change-up", name:"에임 체인지업", category:"일반맛", capsule:"캡슐 스틱", image:"images/aim-change-up.png",
      tags:["basic","flavor"], summary:"기본 맛을 중심으로 약간의 맛 변화를 원하는 취향에 어울립니다." },
    { id:"raim-regular", name:"레임 레귤러", category:"일반맛", capsule:"논캡슐 스틱", image:"images/raim-regular.png",
      tags:["basic","hit"], summary:"캡슐 없이 담백한 맛과 안정적인 사용감을 선호하는 취향에 가깝습니다." },
    { id:"raim-velvet", name:"레임 벨벳", category:"일반맛", capsule:"논캡슐 스틱", image:"images/raim-velvet.png",
      tags:["basic","smooth"], summary:"부드럽고 편안한 기본 맛을 원하는 취향에 가까운 제품입니다." },

    { id:"aim-twice", name:"에임 트와이스", category:"색다른 맛", capsule:"캡슐 스틱", image:"images/aim-twice.png",
      tags:["flavor","aroma"], summary:"풍부하고 달달한 향과 다채로운 맛을 선호하는 취향에 어울립니다." },
    { id:"aim-rimo", name:"에임 리모", category:"색다른 맛", capsule:"캡슐 스틱", image:"images/aim-rimo.png",
      tags:["flavor","aroma"], summary:"개성 있는 향과 맛의 변화를 즐기는 취향에 가까운 제품입니다." },
    { id:"aim-blooming", name:"에임 블루밍", category:"색다른 맛", capsule:"캡슐 스틱", image:"images/aim-blooming.png",
      tags:["flavor","aroma"], summary:"향이 풍부하고 화사한 맛을 중요하게 생각하는 취향에 어울립니다." },
    { id:"aim-haze", name:"에임 헤이즈", category:"색다른 맛", capsule:"캡슐 스틱", image:"images/aim-haze.png",
      tags:["flavor","aroma"], summary:"은은하면서도 색다른 향을 원하는 취향에 가까운 제품입니다." },
    { id:"aim-cool-shot", name:"에임 쿨샷", category:"색다른 맛", capsule:"캡슐 스틱", image:"images/aim-cool-shot.png",
      tags:["flavor","menthol","vapor"], summary:"색다른 향과 시원함을 함께 찾는 취향에 어울립니다." },
    { id:"aim-couple", name:"에임 커플", category:"색다른 맛", capsule:"캡슐 스틱", image:"images/aim-couple.png",
      tags:["flavor","aroma"], summary:"달달한 향과 부드러운 맛의 조화를 원하는 취향에 가깝습니다." },

    { id:"aim-ice-peak", name:"에임 아이스피크", category:"시원한맛", capsule:"캡슐 스틱", image:"images/aim-ice-peak.png",
      tags:["menthol","hit"], summary:"강하고 선명한 쿨링감과 타격감을 선호하는 취향에 어울립니다." },
    { id:"aim-tango", name:"에임 탱고", category:"시원한맛", capsule:"캡슐 스틱", image:"images/aim-tango.png",
      tags:["menthol","vapor"], summary:"시원한 맛과 풍부하게 느껴지는 연무를 중요하게 생각하는 취향에 가깝습니다." },
    { id:"aim-ice-rush", name:"에임 아이스러쉬", category:"시원한맛", capsule:"캡슐 스틱", image:"images/aim-ice-rush.png",
      tags:["menthol","flavor"], summary:"시원함에 색다른 맛의 변화를 더한 취향에 어울립니다." },
    { id:"aim-ice-snow", name:"에임 아이스노우", category:"시원한맛", capsule:"캡슐 스틱", image:"images/aim-ice-snow.png",
      tags:["menthol","smooth"], summary:"깔끔하고 차가운 느낌을 편안하게 즐기는 취향에 가깝습니다." },
    { id:"raim-ice", name:"레임 아이스", category:"시원한맛", capsule:"논캡슐 스틱", image:"images/raim-ice.png",
      tags:["menthol","hit"], summary:"캡슐 없이 담백하고 시원한 맛을 원하는 취향에 어울립니다." },
    { id:"raim-ice-mid", name:"레임 아이스미드", category:"시원한맛", capsule:"논캡슐 스틱", image:"images/raim-ice-mid.png",
      tags:["menthol","smooth"], summary:"과하지 않은 시원함과 균형 잡힌 사용감을 선호하는 취향에 가깝습니다." }
  ];

  const ICONS = {
    cigarette: `<svg viewBox="0 0 24 24"><path d="M4 10h11v4H4z"/><path d="M15 10h3v4h-3z"/><path d="M20 8c1 1 1 3 0 4"/></svg>`,
    heated: `<svg viewBox="0 0 24 24"><rect x="8" y="3" width="8" height="18" rx="3"/><path d="M10 7h4"/><circle cx="12" cy="17" r="1"/></svg>`,
    liquid: `<svg viewBox="0 0 24 24"><path d="M12 3s5 6 5 10a5 5 0 01-10 0c0-4 5-10 5-10z"/></svg>`,
    menthol: `<svg viewBox="0 0 24 24"><path d="M12 2v20M4.9 6l14.2 12M19.1 6L4.9 18M2 12h20"/></svg>`,
    flavor: `<svg viewBox="0 0 24 24"><path d="M12 3l1.8 4.4L18 9l-4.2 1.6L12 15l-1.8-4.4L6 9l4.2-1.6z"/><path d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z"/></svg>`,
    basic: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M8 12h8"/></svg>`,
    hit: `<svg viewBox="0 0 24 24"><path d="M13 2L5 14h6l-1 8 8-12h-6z"/></svg>`,
    aroma: `<svg viewBox="0 0 24 24"><path d="M8 18c-2-2-2-5 0-7s2-5 0-7M13 18c-2-2-2-5 0-7s2-5 0-7M18 18c-2-2-2-5 0-7"/></svg>`,
    vapor: `<svg viewBox="0 0 24 24"><path d="M4 15h12a4 4 0 000-8 5 5 0 00-9.6 1.5A3.5 3.5 0 004 15z"/></svg>`,
    lil: `<svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="3"/><path d="M10 7h4M10 17h4"/></svg>`,
    iqos: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8v8"/></svg>`,
    ploom: `<svg viewBox="0 0 24 24"><path d="M8 4h6a4 4 0 010 8H8z"/><path d="M8 12v8"/></svg>`,
    glo: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M15 9a4 4 0 10.5 5"/></svg>`,
    other: `<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>`,
    taste: `<svg viewBox="0 0 24 24"><path d="M5 10c4-5 10-5 14 0-1 5-4 8-7 8s-6-3-7-8z"/><path d="M9 11h6"/></svg>`,
    performance: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>`,
    design: `<svg viewBox="0 0 24 24"><path d="M12 3l8 6-8 12L4 9z"/><path d="M4 9h16"/></svg>`,
    service: `<svg viewBox="0 0 24 24"><path d="M4 14v-4a8 8 0 0116 0v4"/><path d="M4 14h3v5H5a1 1 0 01-1-1zM20 14h-3v5h2a1 1 0 001-1z"/></svg>`,
    cleaning: `<svg viewBox="0 0 24 24"><path d="M4 18l7-7 3 3-7 7H4z"/><path d="M13 6l5-3 3 3-3 5z"/></svg>`,
    battery: `<svg viewBox="0 0 24 24"><rect x="3" y="7" width="17" height="10" rx="2"/><path d="M20 10h2v4h-2M7 10v4M10 10v4"/></svg>`,
    variety: `<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>`,
    convenience: `<svg viewBox="0 0 24 24"><path d="M5 12l4 4L19 6"/></svg>`,
    leak: `<svg viewBox="0 0 24 24"><path d="M12 3s5 6 5 10a5 5 0 01-10 0c0-4 5-10 5-10z"/><path d="M15 16c-1 1-2 1-3 1"/></svg>`,
    management: `<svg viewBox="0 0 24 24"><path d="M13 2l-2 8h5l-5 12 2-8H8z"/></svg>`,
    lasting: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>`,
    strong: `<svg viewBox="0 0 24 24"><path d="M5 18h3V9H5zM10.5 18h3V6h-3zM16 18h3V3h-3z"/></svg>`,
    medium: `<svg viewBox="0 0 24 24"><path d="M5 18h3V11H5zM10.5 18h3V8h-3zM16 18h3V8h-3z"/></svg>`,
    soft: `<svg viewBox="0 0 24 24"><path d="M5 18h3v-4H5zM10.5 18h3v-6h-3zM16 18h3v-5h-3z"/></svg>`
  };

  const QUESTIONS = {
    root: {
      id:"root", number:"Q1", category:"현재 이용 제품",
      title:"현재 사용 중인 제품은?",
      description:"가장 자주 사용하는 제품 한 가지를 선택해 주세요.",
      progress:10,
      options:[
        { value:"cigarette", label:"연초", sub:"일반 궐련 제품", next:"cigaretteFlavor" },
        { value:"heated", label:"궐련형 전자담배", sub:"전용 기기와 스틱 사용", next:"heatedDevice" },
        { value:"liquid", label:"액상형 전자담배", sub:"액상 카트리지 또는 팟 사용", next:"liquidSatisfaction" }
      ]
    },
    cigaretteFlavor: {
      id:"cigaretteFlavor", number:"Q2", category:"선호하는 맛",
      title:"어떤 맛을 선호하시나요?",
      description:"평소 가장 자주 찾는 맛을 골라 주세요.",
      progress:35,
      options:[
        { value:"menthol", label:"멘솔", sub:"시원하고 상쾌한 맛", next:"cigarettePriority" },
        { value:"flavor", label:"향 / 과립", sub:"향이 풍부하거나 변화가 있는 맛", next:"cigarettePriority" },
        { value:"basic", label:"기본", sub:"담백하고 익숙한 맛", next:"cigarettePriority" }
      ]
    },
    cigarettePriority: {
      id:"cigarettePriority", number:"Q3", category:"선택 기준",
      title:"가장 중요하게 생각하는 것은?",
      description:"제품을 선택할 때 우선하는 기준을 골라 주세요.",
      progress:60,
      options:[
        { value:"hit", label:"타격감", sub:"강한 느낌", next:"result" },
        { value:"aroma", label:"향", sub:"풍부하고 달달한 향", next:"result" },
        { value:"vapor", label:"연무량", sub:"풍부하게 느껴지는 연무", next:"result" }
      ]
    },
    heatedDevice: {
      id:"heatedDevice", number:"Q2", category:"현재 사용하는 기기",
      title:"현재 어떤 기기를 사용하시나요?",
      description:"가장 자주 사용하는 기기를 선택해 주세요.",
      progress:35,
      options:[
        { value:"lil", label:"릴", sub:"lil 기기", next:"heatedSatisfaction" },
        { value:"iqos", label:"아이코스", sub:"IQOS 기기", next:"heatedSatisfaction" },
        { value:"ploom", label:"플룸", sub:"Ploom 기기", next:"heatedSatisfaction" },
        { value:"glo", label:"글로", sub:"glo 기기", next:"heatedSatisfaction" },
        { value:"other", label:"기타", sub:"그 외 궐련형 기기", next:"heatedSatisfaction" }
      ]
    },
    heatedSatisfaction: {
      id:"heatedSatisfaction", number:"Q3", category:"만족 요소",
      title:"현재 제품에서 가장 만족하는 점은?",
      description:"현재 사용 경험 중 가장 마음에 드는 부분을 선택해 주세요.",
      progress:60,
      options:[
        { value:"taste", label:"맛", sub:"스틱의 맛과 향", next:"heatedPain" },
        { value:"performance", label:"기기 성능", sub:"가열과 사용 편의성", next:"heatedPain" },
        { value:"design", label:"디자인", sub:"외관과 휴대성", next:"heatedPain" }
      ]
    },
    heatedPain: {
      id:"heatedPain", number:"Q4", category:"개선 희망 요소",
      title:"현재 제품에서 가장 아쉬운 점은?",
      description:"바뀌었으면 하는 점 한 가지를 선택해 주세요.",
      progress:85,
      options:[
        { value:"service", label:"A/S", sub:"A/S 서비스", next:"heatedFlavor" },
        { value:"cleaning", label:"청소", sub:"관리와 청소의 번거로움", next:"heatedFlavor" },
        { value:"battery", label:"배터리", sub:"충전과 사용 시간", next:"heatedFlavor" },
        { value:"variety", label:"스틱 종류", sub:"선택 가능한 맛의 다양성", next:"heatedFlavor" }
      ]
    },
    heatedFlavor: {
      id:"heatedFlavor", number:"Q5", category:"선호하는 스틱 맛",
      title:"스틱을 선택할 때 어떤 맛을 가장 중요하게 생각하시나요?",
      description:"평소 가장 자주 찾는 맛의 방향을 선택해 주세요.",
      progress:72,
      options:[
        { value:"menthol", label:"멘솔·시원한 맛", sub:"시원하고 상쾌한 쿨링감", next:"heatedStrength" },
        { value:"flavor", label:"향·색다른 맛", sub:"풍부한 향 또는 개성 있는 맛", next:"heatedStrength" },
        { value:"basic", label:"기본 맛·타격감", sub:"담백한 맛과 분명한 타격감", next:"heatedStrength" }
      ]
    },
    heatedStrength: {
      id:"heatedStrength", number:"Q6", category:"선호하는 맛의 강도",
      title:"어느 정도의 맛을 선호하시나요?",
      description:"추천 순서를 정하기 위해 가장 가까운 강도를 선택해 주세요.",
      progress:88,
      options:[
        { value:"strong", label:"강하게", sub:"맛과 느낌이 또렷한 제품", next:"result" },
        { value:"medium", label:"적당하게", sub:"강도와 부드러움이 균형 잡힌 제품", next:"result" },
        { value:"soft", label:"부드럽게", sub:"부담 없이 편안한 제품", next:"result" }
      ]
    },
    liquidSatisfaction: {
      id:"liquidSatisfaction", number:"Q2", category:"만족 요소",
      title:"현재 제품에서 가장 만족하는 점은?",
      description:"현재 사용 경험 중 가장 마음에 드는 부분을 선택해 주세요.",
      progress:35,
      options:[
        { value:"taste", label:"맛과 향", sub:"풍부하고 만족스러운 맛과 향", next:"liquidPain" },
        { value:"hit", label:"타격감", sub:"분명하고 강한 느낌", next:"liquidPain" },
        { value:"vapor", label:"연무량", sub:"풍부하게 느껴지는 연무", next:"liquidPain" },
        { value:"convenience", label:"사용 편의성", sub:"간편한 사용과 휴대성", next:"liquidPain" }
      ]
    },
    liquidPain: {
      id:"liquidPain", number:"Q3", category:"개선 희망 요소",
      title:"현재 제품에서 가장 아쉬운 점은?",
      description:"바뀌었으면 하는 점 한 가지를 선택해 주세요.",
      progress:55,
      options:[
        { value:"battery", label:"배터리", sub:"충전과 사용 시간", next:"liquidFlavor" },
        { value:"leak", label:"액상 누수", sub:"액상이 새거나 묻어나는 불편함", next:"liquidFlavor" },
        { value:"management", label:"충전·관리", sub:"충전과 관리의 번거로움", next:"liquidFlavor" },
        { value:"lasting", label:"맛의 지속성", sub:"사용할수록 맛이 약해지는 점", next:"liquidFlavor" },
        { value:"variety", label:"제품 선택의 다양성", sub:"원하는 맛과 제품 선택의 제한", next:"liquidFlavor" }
      ]
    },
    liquidFlavor: {
      id:"liquidFlavor", number:"Q4", category:"선호하는 릴 스틱 맛",
      title:"릴 스틱에서 어떤 맛을 원하시나요?",
      description:"평소 가장 자주 찾는 맛의 방향을 선택해 주세요.",
      progress:75,
      options:[
        { value:"menthol", label:"멘솔·시원한 맛", sub:"시원하고 상쾌한 쿨링감", next:"liquidStrength" },
        { value:"flavor", label:"향·색다른 맛", sub:"풍부한 향 또는 개성 있는 맛", next:"liquidStrength" },
        { value:"basic", label:"기본 맛·타격감", sub:"담백한 기본 맛과 분명한 타격감", next:"liquidStrength" }
      ]
    },
    liquidStrength: {
      id:"liquidStrength", number:"Q5", category:"선호하는 맛의 강도",
      title:"어느 정도의 맛을 선호하시나요?",
      description:"추천 순서를 정하기 위해 가장 가까운 강도를 선택해 주세요.",
      progress:90,
      options:[
        { value:"strong", label:"강하게", sub:"맛과 느낌이 또렷한 제품", next:"result" },
        { value:"medium", label:"적당하게", sub:"강도와 부드러움이 균형 잡힌 제품", next:"result" },
        { value:"soft", label:"부드럽게", sub:"부담 없이 편안한 제품", next:"result" }
      ]
    }
  };

  const state = { currentQuestionId:"root", answers:{}, history:[] };

  const $ = (id) => document.getElementById(id);
  const els = {
    startScreen:$("startScreen"), questionScreen:$("questionScreen"),
    analysisScreen:$("analysisScreen"), resultScreen:$("resultScreen"),
    progressSection:$("progressSection"), progressText:$("progressText"),
    progressBar:$("progressBar"), progressTrack:$("progressTrack"),
    backButton:$("backButton"), logoButton:$("logoButton"),
    adultCheckbox:$("adultCheckbox"), ageError:$("ageError"),
    stickStartButton:$("stickStartButton"), deviceStartButton:$("deviceStartButton"), questionNumber:$("questionNumber"),
    questionCategory:$("questionCategory"), questionTitle:$("questionTitle"),
    questionDescription:$("questionDescription"), answerList:$("answerList"),
    recommendationList:$("recommendationList"), restartButton:$("restartButton"),
    couponButton:$("couponButton"), couponModal:$("couponModal"),
    couponCloseButton:$("couponCloseButton"), couponDoneButton:$("couponDoneButton"),
    stickCustomerChoiceList:$("stickCustomerChoiceList"),
    stickConsultingPoints:$("stickConsultingPoints"),
    stickConsultingScript:$("stickConsultingScript"),
    liveRegion:$("liveRegion")
  };

  const deviceEls = {
    questionScreen:$("deviceQuestionScreen"),
    analysisScreen:$("deviceAnalysisScreen"),
    resultScreen:$("deviceResultScreen"),
    questionNumber:$("deviceQuestionNumber"),
    questionCategory:$("deviceQuestionCategory"),
    questionTitle:$("deviceQuestionTitle"),
    questionDescription:$("deviceQuestionDescription"),
    answerList:$("deviceAnswerList"),
    primaryImage:$("primaryDeviceImage"),
    primaryName:$("primaryDeviceName"),
    primaryMatch:$("primaryDeviceMatch"),
    primaryMatchBar:$("primaryDeviceMatchBar"),
    primarySummary:$("primaryDeviceSummary"),
    primaryReasons:$("primaryDeviceReasons"),
    secondaryImage:$("secondaryDeviceImage"),
    secondaryName:$("secondaryDeviceName"),
    secondaryMatch:$("secondaryDeviceMatch"),
    customerChoiceList:$("customerChoiceList"),
    startFromStickButton:$("startDeviceFromStickButton"),
    staffButton:$("deviceStaffButton"),
    restartButton:$("deviceRestartButton"),
    startStickButton:$("startStickFromDeviceButton"),
    consultingPoints:$("deviceConsultingPoints"),
    consultingScript:$("deviceConsultingScript")
  };

  const screens = [
    els.startScreen, els.questionScreen, els.analysisScreen, els.resultScreen,
    deviceEls.questionScreen, deviceEls.analysisScreen, deviceEls.resultScreen
  ];

  const analysisEls = {
    stickTitle:$("stickAnalysisTitle"),
    stickMessage:$("stickAnalysisMessage"),
    stickBar:$("stickAnalysisProgressBar"),
    stickChecklist:$("stickAnalysisChecklist"),
    deviceTitle:$("deviceAnalysisTitle"),
    deviceMessage:$("deviceAnalysisMessage"),
    deviceBar:$("deviceAnalysisProgressBar"),
    deviceChecklist:$("deviceAnalysisChecklist")
  };

  const staffEls = {
    modal:$("staffModeModal"), closeButton:$("staffModeCloseButton"), doneButton:$("staffModeDoneButton"),
    recommendation:$("staffModeRecommendation"), choices:$("staffModeChoices"),
    points:$("staffModePoints"),
    script:$("staffModeScript"),
    compareScript:$("staffModeCompareScript")
  };

  const passwordEls = {
    modal:$("staffPasswordModal"),
    closeButton:$("staffPasswordCloseButton"),
    form:$("staffPasswordForm"),
    input:$("staffPasswordInput"),
    error:$("staffPasswordError"),
    visibilityButton:$("staffPasswordVisibilityButton")
  };

  let lastStaffPayload = null;


  function showScreen(target) {
    const current = screens.find((screen) => !screen.hidden);
    if (current && current !== target) {
      current.classList.add("screen--leaving");
      setTimeout(() => {
        current.hidden = true;
        current.classList.remove("screen--active", "screen--leaving");
        activateTarget(target);
      }, 210);
      return;
    }
    activateTarget(target);
  }

  function activateTarget(target) {
    target.hidden = false;
    target.classList.remove("screen--leaving");
    target.classList.add("screen--active");
    window.scrollTo({ top:0, behavior:"smooth" });
  }

  function setProgress(value) {
    const safe = Math.max(0, Math.min(100, value));
    els.progressText.textContent = `${safe}%`;
    els.progressTrack.setAttribute("aria-valuenow", String(safe));
    requestAnimationFrame(() => { els.progressBar.style.width = `${safe}%`; });
  }

  function startStickTest() {
    if (!els.adultCheckbox.checked) {
      els.ageError.hidden = false;
      els.adultCheckbox.focus();
      return;
    }
    els.ageError.hidden = true;
    state.currentQuestionId = "root";
    state.answers = {};
    state.history = [];
    els.progressSection.hidden = false;
    els.backButton.hidden = false;
    renderQuestion("root");
    showScreen(els.questionScreen);
  }

  function renderQuestion(questionId) {
    const question = QUESTIONS[questionId];
    if (!question) return;

    state.currentQuestionId = questionId;
    setProgress(question.progress);
    els.questionNumber.textContent = question.number;
    els.questionCategory.textContent = question.category;
    els.questionTitle.textContent = question.title;
    els.questionDescription.textContent = question.description;
    els.answerList.innerHTML = "";

    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-button";
      button.innerHTML = `
        <span class="answer-icon" aria-hidden="true">${ICONS[option.value] || ICONS.other}</span>
        <span class="answer-copy"><strong>${option.label}</strong><span>${option.sub}</span></span>
      `;
      button.addEventListener("click", () => selectAnswer(option, button));
      els.answerList.appendChild(button);
    });

    els.liveRegion.textContent = `${question.number}. ${question.title}`;
  }

  function selectAnswer(option, button) {
    const question = QUESTIONS[state.currentQuestionId];
    if (!question) return;

    els.answerList.querySelectorAll(".answer-button").forEach((item) => { item.disabled = true; });
    button.classList.add("is-selected");
    state.answers[question.id] = option.value;
    state.history.push(question.id);

    setTimeout(() => {
      if (option.next === "result") beginAnalysis();
      else {
        renderQuestion(option.next);
        showScreen(els.questionScreen);
      }
    }, 330);
  }

  function addScores(scores, ids, amount) {
    ids.forEach((id) => { scores[id] = (scores[id] || 0) + amount; });
  }

  function calculateRecommendations() {
    const scores = Object.fromEntries(PRODUCTS.map((product, index) => [product.id, 0.01 * (PRODUCTS.length - index)]));
    const a = state.answers;

    if (a.root === "cigarette") {
      if (a.cigaretteFlavor === "menthol") {
        addScores(scores, ["aim-ice-snow","aim-cool-shot","aim-ice-peak","raim-ice","raim-ice-mid","aim-tango","aim-ice-rush"], 7);
      }
      if (a.cigaretteFlavor === "flavor") {
        addScores(scores, ["aim-twice","aim-blooming","aim-rimo","aim-ice-rush","aim-couple","aim-haze","aim-cool-shot"], 7);
      }
      if (a.cigaretteFlavor === "basic") {
        addScores(scores, ["aim-cigarish","aim-cameo","aim-change-up","raim-regular","raim-velvet"], 7);
      }

      if (a.cigarettePriority === "hit") addScores(scores, ["aim-cigarish","aim-cameo","raim-regular","aim-ice-peak","raim-ice"], 2);
      if (a.cigarettePriority === "aroma") addScores(scores, ["aim-twice","aim-blooming","aim-rimo","aim-haze","aim-couple"], 2);
      if (a.cigarettePriority === "vapor") addScores(scores, ["aim-tango","aim-cool-shot"], 2);
    }

    if (a.root === "liquid") {
      if (a.liquidFlavor === "menthol") {
        addScores(scores, ["aim-ice-peak","aim-ice-rush","aim-ice-snow","aim-tango","aim-cool-shot","raim-ice","raim-ice-mid"], 8);
      }
      if (a.liquidFlavor === "flavor") {
        addScores(scores, ["aim-twice","aim-blooming","aim-rimo","aim-haze","aim-couple","aim-cool-shot","aim-ice-rush"], 8);
      }
      if (a.liquidFlavor === "basic") {
        addScores(scores, ["aim-cigarish","aim-cameo","aim-change-up","raim-regular","raim-velvet"], 8);
      }

      if (a.liquidStrength === "strong") {
        addScores(scores, ["aim-ice-peak","aim-ice-rush","aim-twice","aim-blooming","aim-cigarish","aim-cameo","raim-ice"], 3);
      }
      if (a.liquidStrength === "medium") {
        addScores(scores, ["aim-tango","aim-cool-shot","aim-rimo","aim-haze","aim-change-up","raim-regular","raim-ice-mid"], 3);
      }
      if (a.liquidStrength === "soft") {
        addScores(scores, ["aim-ice-snow","raim-ice-mid","aim-couple","aim-haze","raim-velvet","aim-change-up"], 3);
      }

      if (a.liquidSatisfaction === "taste") {
        addScores(scores, ["aim-twice","aim-blooming","aim-rimo","aim-ice-peak"], 1);
      }
      if (a.liquidSatisfaction === "hit") {
        addScores(scores, ["aim-ice-peak","aim-cigarish","aim-cameo","raim-ice"], 1);
      }
      if (a.liquidSatisfaction === "vapor") {
        addScores(scores, ["aim-tango","aim-cool-shot","aim-ice-rush"], 1);
      }
    }

    if (a.root === "heated") {
      // 궐련형 사용자의 스틱 추천은 현재 기기보다 선호 맛과 강도를 핵심 기준으로 사용합니다.
      if (a.heatedFlavor === "menthol") {
        addScores(scores, ["aim-ice-peak","aim-ice-rush","aim-ice-snow","aim-tango","aim-cool-shot","raim-ice","raim-ice-mid"], 8);
      }
      if (a.heatedFlavor === "flavor") {
        addScores(scores, ["aim-twice","aim-blooming","aim-rimo","aim-haze","aim-couple","aim-cool-shot","aim-ice-rush"], 8);
      }
      if (a.heatedFlavor === "basic") {
        addScores(scores, ["aim-cigarish","aim-cameo","aim-change-up","raim-regular","raim-velvet"], 8);
      }

      if (a.heatedStrength === "strong") {
        addScores(scores, ["aim-ice-peak","aim-ice-rush","aim-twice","aim-blooming","aim-cigarish","aim-cameo","raim-ice"], 3);
      }
      if (a.heatedStrength === "medium") {
        addScores(scores, ["aim-tango","aim-cool-shot","aim-rimo","aim-haze","aim-change-up","raim-regular","raim-ice-mid"], 3);
      }
      if (a.heatedStrength === "soft") {
        addScores(scores, ["aim-ice-snow","raim-ice-mid","aim-couple","aim-haze","raim-velvet","aim-change-up"], 3);
      }

      // 만족 요소는 보조 점수로만 반영합니다.
      if (a.heatedSatisfaction === "taste") {
        addScores(scores, ["aim-twice","aim-blooming","aim-ice-peak","aim-cigarish"], 1);
      }
      if (a.heatedSatisfaction === "performance") {
        addScores(scores, ["aim-ice-peak","aim-tango","aim-cigarish","raim-regular"], 0.5);
      }
      if (a.heatedSatisfaction === "design") {
        addScores(scores, ["aim-rimo","aim-haze","aim-couple","aim-ice-snow"], 0.5);
      }
    }

    const ranked = PRODUCTS
      .map((product) => ({ ...product, score:scores[product.id] || 0 }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    const max = Math.max(...ranked.map((item) => item.score), 1);
    return ranked.map((item, index) => ({
      ...item,
      match: Math.max(78, Math.min(97, Math.round(97 - index * 5 - (max - item.score) * 1.5)))
    }));
  }

  function getPreferenceReasons() {
    const a = state.answers;
    const reasons = [];

    const flavor = a.cigaretteFlavor || a.heatedFlavor || a.liquidFlavor;
    const strength = a.heatedStrength || a.liquidStrength;
    const priority = a.cigarettePriority || a.liquidSatisfaction;

    if (flavor === "menthol") reasons.push("시원하고 상쾌한 맛 선호");
    if (flavor === "flavor" || flavor === "fruit") reasons.push("풍부하고 색다른 향 선호");
    if (flavor === "basic" || flavor === "other") reasons.push("담백한 기본 맛 선호");

    if (strength === "strong") reasons.push("또렷하고 강한 맛 선호");
    if (strength === "medium") reasons.push("균형 잡힌 맛의 강도 선호");
    if (strength === "soft") reasons.push("부드럽고 편안한 맛 선호");

    if (priority === "hit") reasons.push("타격감을 중요하게 생각함");
    if (priority === "aroma" || priority === "taste") reasons.push("맛과 향을 중요하게 생각함");
    if (priority === "vapor") reasons.push("풍부한 연무를 중요하게 생각함");
    if (priority === "cost") reasons.push("부담 없는 유지비를 중요하게 생각함");

    return reasons.slice(0, 3);
  }

  function getDeviceBenefitMessage() {
    const a = state.answers;
    if (a.root !== "heated") {
      return "릴 기기 할인 혜택을 직원에게 안내받아 보세요.";
    }

    const deviceNames = {
      lil:"릴", iqos:"아이코스", ploom:"플룸", glo:"글로", other:"현재 사용 중인 기기"
    };
    const painMessages = {
      service:"A/S와 기기 지원이 중요하신가요?",
      cleaning:"기기 관리와 청소가 번거로우셨나요?",
      battery:"배터리와 사용 시간이 아쉬우셨나요?",
      variety:"더 다양한 릴 스틱을 만나보고 싶으신가요?"
    };

    const device = deviceNames[a.heatedDevice] || "현재 사용 중인 기기";
    const pain = painMessages[a.heatedPain] || "현재 기기와 릴을 비교해 보세요.";
    return `${device}를 사용 중이시군요. ${pain} 릴 기기 할인 혜택을 직원에게 안내받아 보세요.`;
  }

  function renderResult(products) {
    els.recommendationList.innerHTML = "";
    const reasons = getPreferenceReasons();

    products.forEach((product, index) => {
      const rankLabels = ["BEST MATCH", "SECOND PICK", "THIRD PICK"];
      const article = document.createElement("article");
      article.className = `recommendation-card recommendation-card--${index + 1}`;
      article.innerHTML = `
        <div class="recommendation-rank">
          <span>${index + 1}</span>
          <div><small>${rankLabels[index]}</small><strong>${index + 1}위 추천</strong></div>
          <em>${product.match}%</em>
        </div>
        <div class="recommendation-body">
          <div class="recommendation-image">
            <img src="${product.image}" alt="${product.name} 제품 이미지">
          </div>
          <div class="recommendation-copy">
            <div class="product-tags">
              <span>${product.category}</span>
              <span>${product.capsule}</span>
            </div>
            <h3>${product.name}</h3>
            <div class="match-bar" aria-label="추천 적합도 ${product.match}%">
              <span style="width:${product.match}%"></span>
            </div>
            <p>${product.summary}</p>
            ${index === 0 && reasons.length ? `
              <div class="preference-reasons">
                ${reasons.map((reason) => `<span>✓ ${reason}</span>`).join("")}
              </div>
            ` : ""}
          </div>
        </div>
      `;
      els.recommendationList.appendChild(article);
    });

    const benefitText = document.getElementById("deviceBenefitText");
    if (benefitText) benefitText.textContent = getDeviceBenefitMessage();

    els.liveRegion.textContent = `분석 완료. 1위 추천 제품은 ${products[0].name}입니다.`;
  }

  function getStickChoiceRows() {
    const a = state.answers;
    const rows = [];
    const roots = { cigarette:"연초", heated:"궐련형 전자담배", liquid:"액상형 전자담배" };
    if (a.root) rows.push(["현재 제품", roots[a.root]]);
    if (a.root === "cigarette") {
      rows.push(["선호 맛", {menthol:"멘솔", flavor:"향·과립", basic:"기본 맛"}[a.cigaretteFlavor]]);
      rows.push(["중요 요소", {hit:"타격감", aroma:"향", vapor:"연무량"}[a.cigarettePriority]]);
    }
    if (a.root === "heated") {
      rows.push(["현재 기기", {lil:"릴", iqos:"아이코스", ploom:"플룸", glo:"글로", other:"기타"}[a.heatedDevice]]);
      rows.push(["선호 맛", {menthol:"멘솔·시원한 맛", flavor:"향·색다른 맛", basic:"기본 맛·타격감"}[a.heatedFlavor]]);
      rows.push(["맛의 강도", {strong:"강하게", medium:"적당하게", soft:"부드럽게"}[a.heatedStrength]]);
    }
    if (a.root === "liquid") {
      rows.push(["현재 만족 요소", {taste:"맛과 향", hit:"타격감", vapor:"연무량", convenience:"사용 편의성"}[a.liquidSatisfaction]]);
      rows.push(["선호 맛", {menthol:"멘솔·시원한 맛", flavor:"향·색다른 맛", basic:"기본 맛·타격감"}[a.liquidFlavor]]);
      rows.push(["맛의 강도", {strong:"강하게", medium:"적당하게", soft:"부드럽게"}[a.liquidStrength]]);
    }
    return rows.filter(([, value]) => value);
  }

  function prepareStickConsulting(products) {
    const rows = getStickChoiceRows();
    const top = products[0];
    els.stickCustomerChoiceList.innerHTML = rows.map(([label, value]) => `
      <div class="customer-choice-row result-reveal-item">
        <span class="customer-choice-row__icon">${ICONS.other}</span>
        <span class="customer-choice-row__label">${label}</span><strong>${value}</strong>
      </div>`).join("");

    const taste = rows.find(([label]) => label.includes("선호 맛"))?.[1] || "선택한 맛";
    const points = [
      `${taste}을 중심으로 제품 특징 설명`,
      `${top.name}을 먼저 보여주고 2·3위 제품과 차이 비교`,
      "릴 기기 사용 방식과 할인 혜택을 자연스럽게 연결"
    ];
    els.stickConsultingPoints.innerHTML = points.map((p, i) =>
      `<span class="consulting-point result-reveal-item" style="--reveal-delay:${i*120}ms">✓ ${p}</span>`).join("");
    els.stickConsultingScript.textContent =
      `“고객님은 ${taste}을 선호하셔서 ${top.name}이 가장 잘 맞는 제품으로 추천되었습니다.”`;
    const stickCompareScript =
      `“비슷한 계열의 다른 맛도 궁금하시면 ${products[1]?.name || "두 번째 추천 제품"}과 함께 비교해 보실까요?”`;

    lastStaffPayload = {
      title:"추천 릴 스틱",
      recommendation:top.name,
      image:top.image,
      choices:rows,
      points,
      script:els.stickConsultingScript.textContent,
      compareScript:stickCompareScript
    };
  }

  function runAnalysisSequence(type, onComplete) {
    const isDevice = type === "device";
    const titleEl = isDevice ? analysisEls.deviceTitle : analysisEls.stickTitle;
    const messageEl = isDevice ? analysisEls.deviceMessage : analysisEls.stickMessage;
    const barEl = isDevice ? analysisEls.deviceBar : analysisEls.stickBar;
    const checklistEl = isDevice ? analysisEls.deviceChecklist : analysisEls.stickChecklist;
    const steps = isDevice
      ? [
          ["사용 습관을 확인하고 있습니다.", "현재 사용 제품과 선택 기준을 정리하고 있습니다.", 22],
          ["흡연 패턴을 분석하고 있습니다.", "하루 사용량과 선호 사용감을 확인하고 있습니다.", 48],
          ["릴 기기와 매칭하고 있습니다.", "답변과 기기별 특징을 비교하고 있습니다.", 74],
          ["가장 적합한 결과를 찾았습니다.", "상담에 필요한 내용을 정리하고 있습니다.", 100]
        ]
      : [
          ["취향 데이터를 확인하고 있습니다.", "선택한 맛과 기준을 정리하고 있습니다.", 22],
          ["흡연 패턴을 분석하고 있습니다.", "선호 맛과 강도를 확인하고 있습니다.", 48],
          ["릴 스틱과 매칭하고 있습니다.", "답변과 제품별 특징을 비교하고 있습니다.", 74],
          ["가장 적합한 결과를 찾았습니다.", "추천 TOP 3와 상담 포인트를 정리하고 있습니다.", 100]
        ];
    let stepIndex = 0;
    if (barEl) barEl.style.width = "0%";
    const next = () => {
      const [title, message, percent] = steps[stepIndex];
      titleEl.textContent = title;
      messageEl.textContent = message;
      titleEl.classList.remove("analysis-text-swap");
      void titleEl.offsetWidth;
      titleEl.classList.add("analysis-text-swap");
      if (barEl) barEl.style.width = `${percent}%`;

      if (checklistEl) {
        const checklistItems = [...checklistEl.querySelectorAll("span")];
        const activeIndex = Math.min(
          checklistItems.length - 1,
          Math.floor((stepIndex / Math.max(1, steps.length - 1)) * checklistItems.length)
        );
        checklistItems.forEach((item, index) => {
          item.classList.toggle("is-complete", index < activeIndex);
          item.classList.toggle("is-active", index === activeIndex);
        });
      }

      stepIndex += 1;
      if (stepIndex < steps.length) setTimeout(next, 620);
      else setTimeout(onComplete, 500);
    };
    next();
  }

  function beginAnalysis() {
    setProgress(85);
    els.backButton.hidden = true;
    showScreen(els.analysisScreen);
    runAnalysisSequence("stick", () => {
      setProgress(100);
      const products = calculateRecommendations();
      renderResult(products);
      prepareStickConsulting(products);
      showScreen(els.resultScreen);
    });
  }

  function goBack() {
    if (els.questionScreen.hidden || state.history.length <= 1) {
      resetApp();
      return;
    }
    state.history.pop();
    const previousId = state.history.pop() || "root";
    delete state.answers[state.currentQuestionId];
    renderQuestion(previousId);
  }

  function populateStaffMode(payload) {
    if (!payload) return;
    staffEls.recommendation.innerHTML = `<img src="${payload.image}" alt="${payload.recommendation} 이미지"><div><span>${payload.title}</span><strong>${payload.recommendation}</strong></div>`;
    staffEls.choices.innerHTML = payload.choices.map(([l,v]) => `<div><span>${l}</span><strong>${v}</strong></div>`).join("");
    staffEls.points.innerHTML = payload.points.map(p => `<span>✓ ${p}</span>`).join("");
    staffEls.script.textContent = payload.script;
    staffEls.compareScript.textContent = payload.compareScript || "함께 비교할 제품의 특징을 간단히 안내해 보세요.";
  }

  function openStaffPasswordModal() {
    if (!lastStaffPayload) return;
    passwordEls.input.value = "";
    passwordEls.input.type = "password";
    passwordEls.error.hidden = true;
    passwordEls.modal.hidden = false;
    document.body.classList.add("modal-open");
    setTimeout(() => passwordEls.input.focus(), 80);
  }

  function closeStaffPasswordModal() {
    passwordEls.modal.hidden = true;
    passwordEls.error.hidden = true;
    passwordEls.input.value = "";
    document.body.classList.remove("modal-open");
  }

  function verifyStaffPassword(event) {
    event.preventDefault();

    if (passwordEls.input.value !== "1234") {
      passwordEls.error.hidden = false;
      passwordEls.input.classList.remove("is-error");
      void passwordEls.input.offsetWidth;
      passwordEls.input.classList.add("is-error");
      passwordEls.input.select();
      return;
    }

    passwordEls.error.hidden = true;
    passwordEls.modal.hidden = true;
    populateStaffMode(lastStaffPayload);
    staffEls.modal.hidden = false;
    staffEls.closeButton.focus();
  }

  function togglePasswordVisibility() {
    const hidden = passwordEls.input.type === "password";
    passwordEls.input.type = hidden ? "text" : "password";
    passwordEls.visibilityButton.setAttribute(
      "aria-label",
      hidden ? "비밀번호 숨기기" : "비밀번호 표시"
    );
    passwordEls.input.focus();
  }

  function openStaffMode() {
    openStaffPasswordModal();
  }

  function closeStaffMode() {
    staffEls.modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  function openCouponModal() {
    els.couponModal.hidden = false;
    document.body.classList.add("modal-open");
    els.couponCloseButton.focus();
  }

  function closeCouponModal() {
    els.couponModal.hidden = true;
    document.body.classList.remove("modal-open");
    els.couponButton.focus();
  }

  function resetApp() {
    state.currentQuestionId = "root";
    state.answers = {};
    state.history = [];
    els.adultCheckbox.checked = false;
    els.ageError.hidden = true;
    els.progressSection.hidden = true;
    els.backButton.hidden = true;
    setProgress(10);
    if (!els.couponModal.hidden) {
      els.couponModal.hidden = true;
      document.body.classList.remove("modal-open");
    }
    showScreen(els.startScreen);
  }


  const DEVICE_QUESTIONS = {
    current: {
      number:"Q1", category:"현재 사용 제품",
      title:"현재 사용 중인 제품은?",
      description:"가장 자주 사용하는 제품을 선택해 주세요.",
      progress:20,
      options:[
        { value:"cigarette", label:"연초", sub:"일반 궐련 제품", icon:"cigarette", next:"priority" },
        { value:"iqos", label:"아이코스", sub:"IQOS 기기", icon:"iqos", next:"priority" },
        { value:"ploom", label:"플룸", sub:"Ploom 기기", icon:"ploom", next:"priority" },
        { value:"glo", label:"글로", sub:"glo 기기", icon:"glo", next:"priority" },
        { value:"lil", label:"릴", sub:"현재 릴 기기 사용", icon:"lil", next:"priority" },
        { value:"liquid", label:"액상형 전자담배", sub:"액상 카트리지 또는 팟 사용", icon:"liquid", next:"priority" }
      ]
    },
    priority: {
      number:"Q2", category:"기기 선택 기준",
      title:"기기를 선택할 때 가장 중요한 것은?",
      description:"가장 우선하는 한 가지를 선택해 주세요.",
      progress:45,
      options:[
        { value:"preheat", label:"빠른 예열", sub:"사용 준비 시간이 짧은 기기", icon:"preheat", next:"amount" },
        { value:"vapor", label:"풍부한 연무", sub:"풍부하게 느껴지는 연무량", icon:"vapor", next:"amount" },
        { value:"cigaretteFeel", label:"담배와 비슷한 만족감", sub:"익숙하고 진한 사용감", icon:"cigaretteFeel", next:"amount" },
        { value:"simple", label:"간편한 사용", sub:"직관적이고 간편한 사용 방식", icon:"simple", next:"amount" },
        { value:"design", label:"디자인", sub:"외관과 휴대성", icon:"design", next:"amount" }
      ]
    },
    amount: {
      number:"Q3", category:"하루 사용량",
      title:"하루 평균 흡연량은 어느 정도인가요?",
      description:"평소 하루 사용량과 가장 가까운 항목을 선택해 주세요.",
      progress:70,
      options:[
        { value:"low", label:"10개비 이하", sub:"비교적 가벼운 사용량", icon:"amountLow", next:"sensation" },
        { value:"medium", label:"10~20개비", sub:"평균적인 사용량", icon:"amountMedium", next:"sensation" },
        { value:"high", label:"20개비 이상", sub:"충족감을 중요하게 보는 사용량", icon:"amountHigh", next:"sensation" }
      ]
    },
    sensation: {
      number:"Q4", category:"선호하는 사용감",
      title:"어떤 흡연감을 선호하시나요?",
      description:"가장 가까운 사용감을 선택해 주세요.",
      progress:90,
      options:[
        { value:"strong", label:"진한 만족감", sub:"분명하고 강한 충족감", icon:"strong", next:"result" },
        { value:"smooth", label:"부드러운 흡연감", sub:"편안하고 부드러운 사용감", icon:"smooth", next:"result" },
        { value:"vapor", label:"풍부한 연무", sub:"연무량이 풍부한 사용감", icon:"vapor", next:"result" },
        { value:"balanced", label:"균형", sub:"만족감과 부드러움의 균형", icon:"balanced", next:"result" }
      ]
    }
  };

  const DEVICE_ICONS = {
    ...ICONS,
    preheat:`<svg viewBox="0 0 24 24"><path d="M6 17c0-3 2-3 2-6s-2-3-2-6M12 17c0-3 2-3 2-6s-2-3-2-6M18 17c0-3 2-3 2-6"/></svg>`,
    cigaretteFeel:`<svg viewBox="0 0 24 24"><path d="M4 9h11v6H4z"/><path d="M15 9h3v6h-3z"/><path d="M20 7c1 1 1 3 0 4"/></svg>`,
    simple:`<svg viewBox="0 0 24 24"><path d="M5 12l4 4L19 6"/><circle cx="12" cy="12" r="9"/></svg>`,
    amountLow:`<svg viewBox="0 0 24 24"><rect x="4" y="15" width="4" height="5" rx="1"/><rect x="10" y="11" width="4" height="9" rx="1"/><rect x="16" y="7" width="4" height="13" rx="1" opacity=".35"/></svg>`,
    amountMedium:`<svg viewBox="0 0 24 24"><rect x="4" y="15" width="4" height="5" rx="1"/><rect x="10" y="11" width="4" height="9" rx="1"/><rect x="16" y="7" width="4" height="13" rx="1" opacity=".7"/></svg>`,
    amountHigh:`<svg viewBox="0 0 24 24"><rect x="4" y="15" width="4" height="5" rx="1"/><rect x="10" y="11" width="4" height="9" rx="1"/><rect x="16" y="7" width="4" height="13" rx="1"/></svg>`,
    smooth:`<svg viewBox="0 0 24 24"><path d="M3 12c3-5 6 5 9 0s6 5 9 0"/></svg>`,
    balanced:`<svg viewBox="0 0 24 24"><path d="M12 4v16M5 8h14M7 8l-3 6h6zM17 8l-3 6h6z"/></svg>`
  };

  const DEVICE_LABELS = {
    current:{
      cigarette:"연초", iqos:"아이코스", ploom:"플룸", glo:"글로", lil:"릴", liquid:"액상형 전자담배"
    },
    priority:{
      preheat:"빠른 예열", vapor:"풍부한 연무", cigaretteFeel:"담배와 비슷한 만족감",
      simple:"간편한 사용", design:"디자인"
    },
    amount:{ low:"10개비 이하", medium:"10~20개비", high:"20개비 이상" },
    sensation:{ strong:"진한 만족감", smooth:"부드러운 흡연감", vapor:"풍부한 연무", balanced:"균형" }
  };

  const DEVICE_PRODUCTS = {
    able:{
      name:"릴 에이블 3.0",
      image:"images/lil-able-3.webp",
      summary:"진한 충족감과 담배에 가까운 만족감, 간편한 스틱 사용을 중요하게 생각하는 고객에게 추천합니다."
    },
    hybrid:{
      name:"릴 하이브리드 3.0",
      image:"images/lil-hybrid-3.jpg",
      summary:"빠른 예열과 부드러운 흡연감, 풍부한 연무를 중요하게 생각하는 고객에게 추천합니다."
    }
  };

  const deviceState = {
    currentQuestion:"current",
    answers:{},
    history:[]
  };

  function ensureAdultChecked() {
    if (!els.adultCheckbox.checked) {
      els.ageError.hidden = false;
      els.adultCheckbox.focus();
      return false;
    }
    els.ageError.hidden = true;
    return true;
  }

  function startDeviceTest() {
    if (!ensureAdultChecked()) return;
    deviceState.currentQuestion = "current";
    deviceState.answers = {};
    deviceState.history = [];
    els.progressSection.hidden = false;
    els.backButton.hidden = false;
    renderDeviceQuestion("current");
    showScreen(deviceEls.questionScreen);
  }

  function renderDeviceQuestion(questionId) {
    const question = DEVICE_QUESTIONS[questionId];
    if (!question) return;

    deviceState.currentQuestion = questionId;
    setProgress(question.progress);
    deviceEls.questionNumber.textContent = question.number;
    deviceEls.questionCategory.textContent = question.category;
    deviceEls.questionTitle.textContent = question.title;
    deviceEls.questionDescription.textContent = question.description;
    deviceEls.answerList.innerHTML = "";

    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-button";
      button.innerHTML = `
        <span class="answer-icon" aria-hidden="true">${DEVICE_ICONS[option.icon] || DEVICE_ICONS.other}</span>
        <span class="answer-copy"><strong>${option.label}</strong><span>${option.sub}</span></span>
      `;
      button.addEventListener("click", () => selectDeviceAnswer(option, button));
      deviceEls.answerList.appendChild(button);
    });

    els.liveRegion.textContent = `${question.number}. ${question.title}`;
  }

  function selectDeviceAnswer(option, button) {
    deviceEls.answerList.querySelectorAll(".answer-button").forEach((item) => { item.disabled = true; });
    button.classList.add("is-selected");

    deviceState.answers[deviceState.currentQuestion] = option.value;
    deviceState.history.push(deviceState.currentQuestion);

    setTimeout(() => {
      if (option.next === "result") beginDeviceAnalysis();
      else {
        renderDeviceQuestion(option.next);
        showScreen(deviceEls.questionScreen);
      }
    }, 330);
  }

  function calculateDeviceResult() {
    const scores = { able:0, hybrid:0 };
    const reasons = { able:[], hybrid:[] };
    const a = deviceState.answers;

    if (a.priority === "preheat") {
      scores.able += 2;
      scores.hybrid += 3;
      reasons.hybrid.push("약 15초의 빠른 예열을 중요하게 선택함");
      reasons.able.push("약 20초의 예열 시간도 함께 비교 가능");
    }
    if (a.priority === "vapor") {
      scores.hybrid += 4;
      reasons.hybrid.push("풍부한 연무를 가장 중요하게 선택함");
    }
    if (a.priority === "cigaretteFeel") {
      scores.able += 3;
      reasons.able.push("담배와 비슷한 만족감을 중요하게 선택함");
    }
    if (a.priority === "simple") {
      scores.able += 3;
      reasons.able.push("간편한 스틱 사용 방식을 중요하게 선택함");
    }
    if (a.priority === "design") {
      scores.able += 1;
      scores.hybrid += 1;
      reasons.able.push("기기 디자인과 휴대성을 중요하게 선택함");
      reasons.hybrid.push("기기 디자인과 휴대성을 중요하게 선택함");
    }

    if (a.amount === "low") {
      scores.hybrid += 1;
      reasons.hybrid.push("하루 10개비 이하의 가벼운 사용량");
    }
    if (a.amount === "medium") {
      scores.able += 1;
      scores.hybrid += 1;
    }
    if (a.amount === "high") {
      scores.able += 3;
      reasons.able.push("20개비 이상 사용하며 높은 충족감을 중요하게 봄");
    }

    if (a.sensation === "strong") {
      scores.able += 4;
      reasons.able.push("진하고 분명한 충족감을 선호함");
    }
    if (a.sensation === "smooth") {
      scores.hybrid += 4;
      reasons.hybrid.push("부드러운 흡연감을 선호함");
    }
    if (a.sensation === "vapor") {
      scores.hybrid += 3;
      reasons.hybrid.push("풍부한 연무의 사용감을 선호함");
    }
    if (a.sensation === "balanced") {
      scores.able += 2;
      scores.hybrid += 2;
      reasons.able.push("만족감과 부드러움의 균형을 선호함");
      reasons.hybrid.push("만족감과 부드러움의 균형을 선호함");
    }

    const ranking = Object.entries(scores).sort((x, y) => y[1] - x[1]);
    const primaryKey = ranking[0][0];
    const secondaryKey = ranking[1][0];
    const gap = Math.max(0, ranking[0][1] - ranking[1][1]);
    const primaryMatch = Math.min(97, 88 + gap * 2);
    const secondaryMatch = Math.max(72, primaryMatch - 10 - gap);

    return {
      primary:{ key:primaryKey, ...DEVICE_PRODUCTS[primaryKey], match:primaryMatch, reasons:reasons[primaryKey].slice(0,3) },
      secondary:{ key:secondaryKey, ...DEVICE_PRODUCTS[secondaryKey], match:secondaryMatch }
    };
  }

  function renderDeviceResult(result) {
    deviceEls.primaryImage.src = result.primary.image;
    deviceEls.primaryImage.alt = `${result.primary.name} 제품 이미지`;
    deviceEls.primaryName.textContent = result.primary.name;
    deviceEls.primaryMatch.textContent = `${result.primary.match}%`;
    deviceEls.primaryMatchBar.style.width = `${result.primary.match}%`;
    deviceEls.primarySummary.textContent = result.primary.summary;
    deviceEls.primaryReasons.innerHTML = "";

    const fallbackReasons = result.primary.key === "able"
      ? ["진한 충족감을 중요하게 생각함", "담배에 가까운 만족감을 선호함", "간편한 사용 방식을 선호함"]
      : ["빠른 예열을 중요하게 생각함", "부드러운 흡연감을 선호함", "풍부한 연무를 중요하게 생각함"];

    (result.primary.reasons.length ? result.primary.reasons : fallbackReasons).forEach((reason) => {
      const chip = document.createElement("span");
      chip.textContent = `✓ ${reason}`;
      deviceEls.primaryReasons.appendChild(chip);
    });

    deviceEls.secondaryImage.src = result.secondary.image;
    deviceEls.secondaryImage.alt = `${result.secondary.name} 제품 이미지`;
    deviceEls.secondaryName.textContent = result.secondary.name;
    deviceEls.secondaryMatch.textContent = `${result.secondary.match}%`;

    const choiceRows = [
      ["현재 제품", DEVICE_LABELS.current[deviceState.answers.current]],
      ["중요 요소", DEVICE_LABELS.priority[deviceState.answers.priority]],
      ["하루 사용량", DEVICE_LABELS.amount[deviceState.answers.amount]],
      ["선호 사용감", DEVICE_LABELS.sensation[deviceState.answers.sensation]]
    ];

    deviceEls.customerChoiceList.innerHTML = "";
    choiceRows.forEach(([label, value], index) => {
      const icons = ["current", "priority", "amount", "sensation"];
      const row = document.createElement("div");
      row.className = "customer-choice-row";
      row.innerHTML = `
        <span class="customer-choice-row__icon" aria-hidden="true">${DEVICE_ICONS[deviceState.answers[icons[index]]] || DEVICE_ICONS.other}</span>
        <span class="customer-choice-row__label">${label}</span>
        <strong>${value}</strong>
      `;
      deviceEls.customerChoiceList.appendChild(row);
    });

    els.liveRegion.textContent = `기기 분석 완료. 추천 기기는 ${result.primary.name}입니다.`;
  }

  function getDeviceChoiceRows() {
    return [
      ["현재 제품", DEVICE_LABELS.current[deviceState.answers.current]],
      ["중요 요소", DEVICE_LABELS.priority[deviceState.answers.priority]],
      ["하루 사용량", DEVICE_LABELS.amount[deviceState.answers.amount]],
      ["선호 사용감", DEVICE_LABELS.sensation[deviceState.answers.sensation]]
    ].filter(([, value]) => value);
  }

  function prepareDeviceConsulting(result) {
    const rows = getDeviceChoiceRows();
    const able = result.primary.key === "able";
    const points = able
      ? ["진한 충족감과 담배에 가까운 만족감을 먼저 설명", "고객 사용량에 맞춘 충족감 강조", "하이브리드와 사용감·연무 차이를 비교"]
      : ["부드러운 사용감과 풍부한 연무를 먼저 설명", "빠른 예열 또는 연무 특징 강조", "에이블과 충족감·사용 방식 차이를 비교"];
    deviceEls.consultingPoints.innerHTML = points.map((p, i) =>
      `<span class="consulting-point result-reveal-item" style="--reveal-delay:${i*120}ms">✓ ${p}</span>`).join("");
    const key = DEVICE_LABELS.priority[deviceState.answers.priority];
    deviceEls.consultingScript.textContent =
      `“고객님은 ${key}을 중요하게 선택하셔서 ${result.primary.name}이 가장 잘 맞는 기기로 추천되었습니다.”`;
    const comparisonDeviceName = result.secondary.name;
    const comparisonReason = result.primary.key === "able"
      ? "빠른 예열과 부드러운 사용감"
      : "진한 충족감과 담배에 가까운 만족감";

    const deviceCompareScript =
      `“혹시 ${comparisonReason}도 중요하시면 ${comparisonDeviceName}도 함께 비교해 보실까요?”`;

    lastStaffPayload = {
      title:"추천 릴 기기",
      recommendation:result.primary.name,
      image:result.primary.image,
      choices:rows,
      points,
      script:deviceEls.consultingScript.textContent,
      compareScript:deviceCompareScript
    };
  }

  function beginDeviceAnalysis() {
    setProgress(90);
    els.backButton.hidden = true;
    showScreen(deviceEls.analysisScreen);
    runAnalysisSequence("device", () => {
      setProgress(100);
      const result = calculateDeviceResult();
      renderDeviceResult(result);
      prepareDeviceConsulting(result);
      showScreen(deviceEls.resultScreen);
    });
  }

  function openDeviceStaffScreen() {
    const title = document.getElementById("couponModalTitle");
    const message = document.querySelector(".staff-message strong");
    const help = document.querySelector(".coupon-modal__help");
    if (title) title.innerHTML = "추천 기기와 고객 선택을<br>확인해 주세요.";
    if (message) message.textContent = "릴 기기 상담 및 할인 혜택 안내";
    if (help) help.textContent = "직원에게 이 화면과 추천 결과를 함께 보여주세요.";
    openCouponModal();
  }

  function resetAll() {
    resetApp();
    deviceState.currentQuestion = "current";
    deviceState.answers = {};
    deviceState.history = [];
  }

  els.deviceStartButton.addEventListener("click", startDeviceTest);
  deviceEls.startFromStickButton.addEventListener("click", startDeviceTest);
  deviceEls.staffButton.addEventListener("click", openStaffMode);
  deviceEls.restartButton.addEventListener("click", resetAll);
  deviceEls.startStickButton.addEventListener("click", () => {
    state.currentQuestionId = "root";
    state.answers = {};
    state.history = [];
    els.progressSection.hidden = false;
    els.backButton.hidden = false;
    renderQuestion("root");
    showScreen(els.questionScreen);
  });

  els.stickStartButton.addEventListener("click", startStickTest);
  els.restartButton.addEventListener("click", resetApp);
  els.logoButton.addEventListener("click", resetApp);
  els.backButton.addEventListener("click", goBack);
  els.couponButton.addEventListener("click", openStaffMode);
  els.couponCloseButton.addEventListener("click", closeCouponModal);
  els.couponDoneButton.addEventListener("click", closeCouponModal);
  els.couponModal.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-close-coupon")) closeCouponModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !els.couponModal.hidden) closeCouponModal();
  });
  els.adultCheckbox.addEventListener("change", () => {
    if (els.adultCheckbox.checked) els.ageError.hidden = true;
  });

  staffEls.closeButton.addEventListener("click", closeStaffMode);
  staffEls.doneButton.addEventListener("click", closeStaffMode);
  staffEls.modal.addEventListener("click", e => {
    if (e.target.hasAttribute("data-close-staff")) closeStaffMode();
  });
  passwordEls.form.addEventListener("submit", verifyStaffPassword);
  passwordEls.closeButton.addEventListener("click", closeStaffPasswordModal);
  passwordEls.visibilityButton.addEventListener("click", togglePasswordVisibility);
  passwordEls.input.addEventListener("input", () => {
    passwordEls.error.hidden = true;
    passwordEls.input.classList.remove("is-error");
    passwordEls.input.value = passwordEls.input.value.replace(/\D/g, "").slice(0, 4);
  });
  passwordEls.modal.addEventListener("click", event => {
    if (event.target.hasAttribute("data-close-password")) closeStaffPasswordModal();
  });
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    if (!passwordEls.modal.hidden) closeStaffPasswordModal();
    else if (!staffEls.modal.hidden) closeStaffMode();
  });

})();
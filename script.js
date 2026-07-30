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
    cigarette:"▰", heated:"◫", liquid:"◌", menthol:"❄", flavor:"✦", basic:"●",
    hit:"⚡", aroma:"✧", vapor:"☁", lil:"L", iqos:"I", ploom:"P", glo:"G",
    other:"＋", taste:"✦", performance:"⚙", design:"◇", service:"◎",
    cleaning:"✣", battery:"▣", variety:"⋯", fruit:"●", cost:"₩"
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
        { value:"liquid", label:"액상형 전자담배", sub:"액상 카트리지 또는 팟 사용", next:"liquidFlavor" }
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
    liquidFlavor: {
      id:"liquidFlavor", number:"Q2", category:"선호하는 맛",
      title:"어떤 맛을 선호하시나요?",
      description:"평소 가장 자주 찾는 계열을 선택해 주세요.",
      progress:35,
      options:[
        { value:"fruit", label:"과일", sub:"달콤하고 풍부한 과일 계열", next:"liquidPriority" },
        { value:"menthol", label:"멘솔", sub:"시원하고 상쾌한 계열", next:"liquidPriority" },
        { value:"other", label:"기타", sub:"담백하거나 개성 있는 기타 계열", next:"liquidPriority" }
      ]
    },
    liquidPriority: {
      id:"liquidPriority", number:"Q3", category:"선택 기준",
      title:"가장 중요하게 생각하는 것은?",
      description:"제품을 선택할 때 우선하는 기준을 골라 주세요.",
      progress:60,
      options:[
        { value:"taste", label:"맛", sub:"풍부하고 만족스러운 맛", next:"result" },
        { value:"hit", label:"타격감", sub:"분명하고 강한 느낌", next:"result" },
        { value:"cost", label:"유지비", sub:"지속적으로 사용하는 비용", next:"result" }
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
    startButton:$("startButton"), questionNumber:$("questionNumber"),
    questionCategory:$("questionCategory"), questionTitle:$("questionTitle"),
    questionDescription:$("questionDescription"), answerList:$("answerList"),
    recommendationList:$("recommendationList"), restartButton:$("restartButton"),
    couponButton:$("couponButton"), couponModal:$("couponModal"),
    couponCloseButton:$("couponCloseButton"), couponDoneButton:$("couponDoneButton"),
    liveRegion:$("liveRegion")
  };

  const screens = [els.startScreen, els.questionScreen, els.analysisScreen, els.resultScreen];

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

  function startTest() {
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
        <span class="answer-icon" aria-hidden="true">${ICONS[option.value] || "•"}</span>
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
      if (a.liquidFlavor === "fruit") addScores(scores, ["aim-twice","aim-blooming","aim-rimo","aim-couple","aim-haze"], 7);
      if (a.liquidFlavor === "menthol") addScores(scores, ["aim-ice-peak","aim-ice-snow","aim-tango","aim-ice-rush","raim-ice","raim-ice-mid"], 7);
      if (a.liquidFlavor === "other") addScores(scores, ["aim-change-up","aim-cool-shot","aim-cigarish","raim-velvet"], 7);

      if (a.liquidPriority === "taste") addScores(scores, ["aim-twice","aim-blooming","aim-rimo","aim-couple"], 2);
      if (a.liquidPriority === "hit") addScores(scores, ["aim-ice-peak","aim-cigarish","aim-cameo","raim-ice"], 2);
      if (a.liquidPriority === "cost") addScores(scores, ["raim-regular","raim-velvet","raim-ice","raim-ice-mid"], 2);
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
    const strength = a.heatedStrength;
    const priority = a.cigarettePriority || a.liquidPriority;

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

  function beginAnalysis() {
    setProgress(85);
    els.backButton.hidden = true;
    showScreen(els.analysisScreen);
    setTimeout(() => setProgress(100), 380);
    setTimeout(() => {
      renderResult(calculateRecommendations());
      showScreen(els.resultScreen);
    }, 2200);
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

  els.startButton.addEventListener("click", startTest);
  els.restartButton.addEventListener("click", resetApp);
  els.logoButton.addEventListener("click", resetApp);
  els.backButton.addEventListener("click", goBack);
  els.couponButton.addEventListener("click", openCouponModal);
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
})();
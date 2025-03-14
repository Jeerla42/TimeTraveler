//klara arrenius klar7276
//jesper larsson jela5656

const epoker = [
    "Forntiden", "Antiken", "Medeltiden", "Renässansen", "Industriella revolutionen", "Modern tid"
  ];
  const epokClasses = {
    "Forntiden": "forntiden",
    "Antiken": "antiken",
    "Medeltiden": "medeltiden",
    "Renässansen": "renässansen",
    "Industriella revolutionen": "industriella-revolutionen",
    "Modern tid": "modern-tid"
  };
  
  const questions = {
    "Forntiden": [
      { question: "Vilket av dessa djur var heligt i det forntida Egypten?", answers: ["Hund", "Katt", "Ko", "Örn"], correct: 1 },
      { question: "Vilken forntida flod anses vara 'livets källa' i Egypten?", answers: ["Tigris", "Amazonas", "Nilen", "Ganges"], correct: 2 },
      { question: "Vad var Hammurabis lagar?", answers: ["En samling religiösa berättelser", "Ett av de första skrivna rättssystemen", "En krigsstrategi från Rom", "En filosofi från Kina"], correct: 1 },
      { question: "Vad var kilskrift och var uppfanns den?", answers: ["Ett alfabet utvecklat av romarna", "Ett bildspråk från Kina", "En skrift med kilformade tecken uppfunnen av sumererna", "En boktryckarteknik från Medeltiden"], correct: 2 },
      { question: "Vad kallas det första mänskliga samhället som utvecklade jordbruk och boskapsskötsel?", answers: ["Jägar-samlare", "Feodalism", "Neolitiska revolutionen", "Klansamhälle"], correct: 2 }
    ],
    "Antiken": [
      { question: "Vilken stad var centrum för den första demokratin?", answers: ["Sparta", "Aten", "Rom", "Troja"], correct: 1 },
      { question: "Vad använde romarna en akvedukt till?", answers: ["Transportera vatten", "Förvara vapen", "Som en religiös byggnad", "Som en handelsplats"], correct: 0 },
      { question: "Vad var Pax Romana?", answers: ["En period av fred och stabilitet i Romarriket", "Ett stort krig mellan Rom och Grekland", "Den romerska versionen av demokrati", "En lag som skyddade slavar i Rom"], correct: 0 },
      { question: "Vilken filosofi ansåg att ett dygdigt liv och självdisciplin var vägen till lycka?", answers: ["Hedonism", "Epikurism", "Stoicism", "Skepticism"], correct: 2 },
      { question: "Vilka var det största hotet mot Romarriket under dess fall på 400-talet?", answers: ["Perserna", "Vikingarna", "Germanerna", "Grekerna"], correct: 2 }
    ],
    "Medeltiden": [
      { question: "Vad användes en borg till på medeltiden?", answers: ["Som en handelsplats", "Som ett försvar mot fiender", "Som ett universitet", "Som en teater"], correct: 1 },
      { question: "Vad var korstågen?", answers: ["Ett handelsavtal mellan Europa och Asien", "En serie krig för att återta Jerusalem", "En medeltida konststil", "En lag om skatt"], correct: 1 },
      { question: "Vad var den huvudsakliga effekten av Digerdöden på Europa?", answers: ["Ekonomin växte snabbt", "En tredjedel av befolkningen dog", "Handeln med Asien ökade", "Kyrkan blev svagare"], correct: 1 },
      { question: "Vilken medeltida uppfinning revolutionerade krigföringen?", answers: ["Långbågen", "Krutet", "Ångmaskinen", "Kompassen"], correct: 0 },
      { question: "Vilken konflikt varade i över 100 år och utkämpades mellan England och Frankrike?", answers: ["Tredje korståget", "Hundraåriga kriget", "Spanska tronföljdskriget", "Napoleonskrigen"], correct: 1 }
    ],
    "Renässansen": [
      { question: "Vilket land brukar kallas renässansens födelseland?", answers: ["Tyskland", "Spanien", "England", "Italien"], correct: 3 },
      { question: "Vem var kung i Sverige under renässansen när landet blev självständigt från Danmark?", answers: ["Gustav Vasa", "Olof Skötkonung", "Erik XIV", "Magnus Ladulås"], correct: 0 },
      { question: "Vilket konstverk är Leonardo da Vinci mest känd för?", answers: ["Sixtinska kapellets tak", "Mona Lisa", "Venus födelse", "Nattvarden av Teniers"], correct: 1 },
      { question: "Vilken av följande vetenskapsmän var verksam under renässansen och studerade himlakropparnas rörelser?", answers: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Charles Darwin"], correct: 1 },
      { question: "I vilken stad i Italien verkade många konstnärer och vetenskapsmän, såsom Leonardo da Vinci och Michelangelo, under 1400- och 1500-talen?", answers: ["Florens", "Rom", "Neapel", "Venedig"], correct: 0 }
    ],
    "Industriella revolutionen": [
      { question: "Ungefär under vilken tidsperiod inleddes den industriella revolutionen?", answers: ["1700-talet", "1800-talet", "1500-talet", "1900-talet"], correct: 0 },
      { question: "I vilket land brukar man säga att den industriella revolutionen startade?", answers: ["Spanien", "USA", "Storbritannien", "Kina"], correct: 2 },
      { question: "Vilket politiskt tankesätt uppstod delvis som en reaktion på de orättvisor arbetarna upplevde under den industriella revolutionen?", answers: ["Kapitalism", "Liberalism", "Socialism", "Anarkism"], correct: 2 },
      { question: "Vilket transportsätt konkurrerade med häst och vagn och blev ett snabbare alternativ?", answers: ["Skateboard", "Luftballong", "Ånglok på järnväg", "Ridande brevbärare"], correct: 2 },
      { question: "Vilket ord beskriver när man går samman för att förbättra arbetsvillkor och löner?", answers: ["Fackförening", "Politik", "Nationalism", "Folkrörelse"], correct: 0 }
    ],
    "Modern tid": [
      { question: "Första världskriget började 1914, men vilket år slutade det?", answers: ["1939", "1918", "1915", "2021"], correct: 1 },
      { question: "Vilken organisation bildades 1945 för att främja fred och samarbete mellan länder i världen?", answers: ["FN (Förenta nationerna)", "EU (Europeiska unionen)", "NATO", "Världsbanken"], correct: 0 },
      { question: "Vilken var en av orsakerna till att Andra världskriget bröt ut?", answers: ["Valet av en ny amerikansk president", "Konkurrerande fotbollslag i Europa", "Adolf Hitlers aggression och Tysklands expansion", "Freden efter Första världskriget var stark och stabil"], correct: 2 },
      { question: "Vilket år landade astronauter från USA på månen för första gången?", answers: ["1919", "1969", "1989", "2001"], correct: 1 },
      { question: "Vilken svensk reform ledde till bättre förhållanden för arbetare och infördes under 1900-talet?", answers: ["Slaveriets avskaffande", "Åtta timmars arbetsdag", "Hårdare straff för sjöröveri", "Införande av euro som valuta"], correct: 1 }
    ]
  };
  
  const hints = {
    "Forntiden": [
      "Ledtråd: Tänk på djur som ofta avbildades i egyptiska konstverk...",
      "Ledtråd: Detta är världens längsta flod...",
      "Ledtråd: Tänk på ordet ¨lag¨...",
      "Ledtråd: Detta uppfanns inte i Europa...",
      "Ledtråd: Det kallas även jordbruksrevolutionen..."
    ],
    "Antiken": [
      "Ledtråd: Denna stad är fortfarande huvudstad...",
      "Ledtråd: Romarna blev inspirerade av Grekerna...",
      "Ledtråd: Expansion, handel & guld... ",
      "Ledtråd: Denna filosofin var grundad av Zenon av Citium...",
      "Ledtråd: De tidigaste kända invånarna i detta område var kelterna..."
    ],
    "Medeltiden": [
      "Ledtråd: Det byggdes ibland om till ett slott...",
      "Ledtråd: Detta förekom även på andra håll - i Europa...",
      "Ledtråd: Digerdöden påverkade hela Europa...",
      "Ledtråd: Medeltiden varade från 500 e.Kr till 1500 e.Kr...",
      "Ledtråd: Här behövs ingen ledtråd..."
    ],
    "Renässansen": [
      "Ledtråd: Tänk på landet med många konstnärer under denna tid...",
      "Ledtråd: Känd för en stav...",
      "Ledtråd: Den förföljer dig...",
      "Ledtråd: Han blev i slutet av sitt liv blind... ",
      "Ledtråd: Denna stad ligger i Toscanaregionen..."
    ],
    "Industriella revolutionen": [
      "Ledtråd: Carl von Linne verkade under detta århundrade i Sverige... ",
      "Ledtråd: Detta land är känd för att gilla te...",
      "Ledtråd: Karl Marx & Friedrich Engels var två viktiga teoretiker... ",
      "Ledtråd: Rök...",
      "Ledtråd: Jobbar kollektivt..."
    ],
    "Modern tid": [
      "Ledtråd: Versaillefreden uppkom på grund av detta...",
      "Ledtråd: Känd för ett svenskt konstverk... ",
      "Ledtråd: Polen är en viktig detalj...",
      "Ledtråd: Bryan Adams har skrivit en låt om denna sommaren...",
      "Ledtråd: Man ska dela arbete, sova och fritid lika "
    ]
  };
  
  let currentEpokIndex = 0;
  let currentQuestionIndex = 0;
  let epokCorrectCount = 0;
  
  const epokText = document.getElementById("epok-text");
  const questionText = document.getElementById("question-text");
  const questionHint = document.getElementById("question-hint");
  const answerButtons = document.getElementById("answer-buttons");
  
  function startGame() {
    currentEpokIndex = 0;
    startEpok();
  }
  
  function startEpok() {
    let epok = epoker[currentEpokIndex];
    
    currentQuestionIndex = 0;
    epokCorrectCount = 0;
    

    document.body.className = "";
    document.body.classList.add(epokClasses[epok]);
    
    epokText.textContent = "Epok: " + epok;
    showQuestion();
  }
  
  function showQuestion() {
    let epok = epoker[currentEpokIndex];
    let questionObj = questions[epok][currentQuestionIndex];
    
    questionText.textContent = questionObj.question;
    questionHint.textContent = hints[epok][currentQuestionIndex];
    answerButtons.innerHTML = "";
    
    questionObj.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.classList.add("answer-btn");
      button.style.backgroundColor = "#007bff";
      
      button.addEventListener("click", () => checkAnswer(index, questionObj.correct, button));
      answerButtons.appendChild(button);
    });
  }
  
  function checkAnswer(selectedIndex, correctIndex, button) {
    const epok = epoker[currentEpokIndex];
    const totalQuestions = questions[epok].length;
    
    if (selectedIndex === correctIndex) {
      button.style.backgroundColor = "#4CAF50";
      epokCorrectCount++;
    } else {
      button.style.backgroundColor = "red";
    }
    

    const buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach(btn => btn.disabled = true);
    
    setTimeout(() => {
      currentQuestionIndex++;
      
      if (currentQuestionIndex < totalQuestions) {
        showQuestion();
      } else {
       
        if (epokCorrectCount === totalQuestions) {
          
          currentEpokIndex++;
          if (currentEpokIndex < epoker.length) {
            startEpok();
          } else {
            showEndScreen();
          }
        } else {
         
          alert(`Tyvärr, du stannar kvar i ${epok} då du fick ${epokCorrectCount}/${totalQuestions} rätt. Du behöver alla rätt för att färdas till nästa epok!`);
          startEpok();
        }
      }
    }, 1000);
  }
  
  function showEndScreen() {
    document.body.className = "game-over";
    document.getElementById("game-container").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
  }
  
  document.getElementById("restart-btn").addEventListener("click", function() {
    document.body.className = "";
    document.getElementById("game-container").style.display = "block";
    document.getElementById("end-screen").style.display = "none";
    startGame();
  });
  
  startGame();
const questions = [
    // --- TOPIC: FJALËT MOHUESE S' DHE NUK (Workbook p.20) ---
    {
        type: "choice",
        question: "Plotëso fjalinë: Unë ___ shkoj në shkollë pa mësuar.",
        options: ["s'", "nuk"],
        answer: "nuk"
    },
    {
        type: "choice",
        question: "Cila është e shkruar saktë?",
        options: ["Ti smund të lexosh.", "Ti s'mund të lexosh."],
        answer: "Ti s'mund të lexosh."
    },
    {
        type: "choice",
        question: "Zgjidh fjalën e duhur: Ne ___ duam t'ju shqetësojmë.",
        options: ["s'", "nuk"],
        answer: "s'"
    },
    
    // --- TOPIC: NDARJA E FJALËVE (Workbook p.22 & Test Images) ---
    {
        type: "choice",
        question: "Si ndahet saktë fjala 'populli' në fund të rreshtit?",
        options: ["po-pu-lli", "pop-u-lli", "popu-lli"],
        answer: "popu-lli"
    },
    {
        type: "choice",
        question: "Si ndahet saktë fjala 'flutura'?",
        options: ["fl-utura", "flu-tura"],
        answer: "flu-tura"
    },
    {
        type: "choice",
        question: "Cila fjalë është ndarë GABIM?",
        options: ["shk-oj", "zemër-mirë", "ba-rka"],
        answer: "shk-oj"
    },

    // --- TOPIC: SHQISAT (Test Images) ---
    {
        type: "choice",
        question: "Me çfarë shqise shohim?",
        options: ["Shqisa e të prekurit", "Shqisa e të parit", "Shqisa e të dëgjuarve"],
        answer: "Shqisa e të parit"
    },
    {
        type: "choice",
        question: "Cila shqisë përdor hundën?",
        options: ["Të nuhaturit", "Të shijuarit", "Të prekurit"],
        answer: "Të nuhaturit"
    },

    // --- TOPIC: FJALIA E THJESHTË (Workbook p.23) ---
    {
        type: "choice",
        question: "Fjalia 'Bariu kullot.' është:",
        options: ["Fjali e thjeshtë", "Fjali e zgjeruar"],
        answer: "Fjali e thjeshtë"
    },
    {
        type: "choice",
        question: "Gjej foljen në fjalinë: 'Zogu cicëron në degë.'",
        options: ["Zogu", "cicëron", "degë"],
        answer: "cicëron"
    },
    {
        type: "choice",
        question: "A është kjo fjali e thjeshtë? 'Mami gatuan gjellë të shijshme.'",
        options: ["Po", "Jo (është e zgjeruar)"],
        answer: "Jo (është e zgjeruar)"
    },

    // --- TOPIC: KRYEFJALA DHE KALLËZUESI (Workbook p.24 & Test Images) ---
    {
        type: "choice",
        question: "Gjej KRYEFJALËN: 'Vajza lexon librin.'",
        options: ["lexon", "Vajza", "librin"],
        answer: "Vajza"
    },
    {
        type: "choice",
        question: "Gjej KALLËZUESIN: 'Djali vrapon shpejt.'",
        options: ["Djali", "vrapon", "shpejt"],
        answer: "vrapon"
    },
    {
        type: "choice",
        question: "Me cilën pyetje gjendet Kryefjala?",
        options: ["Ç'bën?", "Kush / Cili?", "Ku?"],
        answer: "Kush / Cili?"
    },
    {
        type: "choice",
        question: "Me cilën pyetje gjendet Kallëzuesi?",
        options: ["Kush?", "Si?", "Ç'bën?"],
        answer: "Ç'bën?"
    },

    // --- TOPIC: RENDITJA E FJALËVE (Workbook p.31 - Drag & Drop) ---
    {
        type: "drag",
        question: "Rendit fjalët për të formuar fjali:",
        words: ["shkon", "në", "shkollë", "Ana"],
        answer: "Ana shkon në shkollë"
    },
    {
        type: "drag",
        question: "Rendit fjalët (Workbook f.31):",
        words: ["mban", "Babagjyshi", "ditar", "një"],
        answer: "Babagjyshi mban një ditar" // Or "Një ditar mban Babagjyshi" but standard is SVO
    },
    {
        type: "drag",
        question: "Formo fjalinë:",
        words: ["bleu", "Mami", "lule", "të", "bukura"],
        answer: "Mami bleu lule të bukura"
    },

    // --- TOPIC: EMRI (Workbook p.32) ---
    {
        type: "choice",
        question: "Cila fjalë është EMËR?",
        options: ["Vrapon", "I bukur", "Libër"],
        answer: "Libër"
    },
    {
        type: "choice",
        question: "Cila fjalë është EMËR I PËRVEÇËM?",
        options: ["qytet", "Durrës", "mal"],
        answer: "Durrës"
    },

    // --- TOPIC: PJESËT PLOTËSUESE (Workbook p.25) ---
    {
        type: "choice",
        question: "Plotëso fjalinë: Peshku noton në...",
        options: ["fushë", "ujë", "qiell"],
        answer: "ujë"
    },
    {
        type: "choice",
        question: "Zgjidh pjesën plotësuese: 'Mësuesja shpjegon...'",
        options: ["bukur", "mbi tavolinë", "me vrap"],
        answer: "bukur"
    },

    // --- TOPIC: HEQIM/SHTOJMË FJALË (Workbook p.27-28) ---
    {
        type: "choice",
        question: "Hiq fjalët e tepërta: 'Vajza e vogël luan në oborr me top.' (Bëje fjali të thjeshtë)",
        options: ["Vajza luan.", "Vajza e vogël luan.", "Luan në oborr."],
        answer: "Vajza luan."
    },
    {
        type: "choice",
        question: "Shto fjalë: 'Zogu fluturon.' (Ku?)",
        options: ["Zogu i vogël fluturon.", "Zogu fluturon në qiell.", "Zogu këndon."],
        answer: "Zogu fluturon në qiell."
    },

    // --- MIXED BAG (Samples from Main Book) ---
    {
        type: "choice",
        question: "Gjej antonimin (të kundërtën) e fjalës: 'Hyrje'",
        options: ["Dalje", "Portë", "Shtëpi"],
        answer: "Dalje"
    },
    {
        type: "choice",
        question: "Gjej sinonimin (fjalë e njëjtë) e fjalës: 'Vajzë'",
        options: ["Çun", "Gocë", "Burrë"],
        answer: "Gocë"
    },
    {
        type: "choice",
        question: "Si shkruhet numërori 100?",
        options: ["një qind", "njëqind", "nje qind"],
        answer: "njëqind"
    },
    {
        type: "choice",
        question: "Cila fjalë është MBIEMËR?",
        options: ["mollë", "i kuq", "ha"],
        answer: "i kuq"
    },
    {
        type: "drag",
        question: "Formo fjalinë:",
        words: ["është", "Dimri", "stinë", "e ftohtë"],
        answer: "Dimri është stinë e ftohtë"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userDragOrder = [];

// DOM Elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const dragDropArea = document.getElementById('drag-drop-area');
const dropZone = document.getElementById('drop-zone');
const dragSource = document.getElementById('drag-source');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const counter = document.getElementById('question-counter');
const resultScreen = document.getElementById('result-screen');
const quizArea = document.getElementById('quiz-area');
const finalScore = document.getElementById('final-score');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let q = questions[currentQuestionIndex];
    
    questionText.innerText = q.question;
    counter.innerText = `Pyetja ${currentQuestionIndex + 1} nga ${questions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    if (q.type === 'choice') {
        dragDropArea.classList.add('hidden');
        optionsContainer.classList.remove('hidden');
        
        q.options.forEach(opt => {
            const button = document.createElement('button');
            button.innerText = opt;
            button.classList.add('option-btn');
            button.onclick = () => checkChoice(opt, q.answer, button);
            optionsContainer.appendChild(button);
        });
    } else if (q.type === 'drag') {
        optionsContainer.classList.add('hidden');
        dragDropArea.classList.remove('hidden');
        userDragOrder = [];
        
        // Shuffle words for source
        let shuffled = [...q.words].sort(() => Math.random() - 0.5);
        
        shuffled.forEach(word => {
            const span = document.createElement('div');
            span.innerText = word;
            span.classList.add('draggable-word');
            // Click to move logic (easier for touch than dragging)
            span.onclick = () => moveWord(span);
            dragSource.appendChild(span);
        });

        // Add a "Check" button specifically for drag questions
        const checkBtn = document.createElement('button');
        checkBtn.innerText = "Kontrollo";
        checkBtn.classList.add('btn');
        checkBtn.style.marginTop = "10px";
        checkBtn.onclick = checkDragAnswer;
        dragDropArea.appendChild(checkBtn);
    }
}

function resetState() {
    nextBtn.classList.add('hidden');
    feedback.classList.add('hidden');
    feedback.innerText = '';
    optionsContainer.innerHTML = '';
    dropZone.innerHTML = '<p class="placeholder-text" style="color: #aaa;">Prek fjalët poshtë për t\'i ngjitur këtu</p>';
    dragSource.innerHTML = '';
    
    // Remove old check button if exists
    const oldCheck = dragDropArea.querySelector('.btn');
    if(oldCheck) oldCheck.remove();
}

// Logic for Choice Questions
function checkChoice(selected, correct, btn) {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    if (selected === correct) {
        btn.classList.add('correct');
        feedback.innerText = "Saktë! Bravo Noar! 🌟";
        feedback.style.color = "#2ECC71";
        score++;
    } else {
        btn.classList.add('wrong');
        feedback.innerText = `Gabim. Përgjigja e saktë është: ${correct}`;
        feedback.style.color = "#E74C3C";
        // Highlight correct
        allBtns.forEach(b => {
            if(b.innerText === correct) b.classList.add('correct');
        });
    }
    feedback.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
}

// Logic for Drag/Move Questions
function moveWord(element) {
    // If in source, move to zone
    if (element.parentElement === dragSource) {
        // Remove placeholder if it exists
        const placeholder = dropZone.querySelector('.placeholder-text');
        if(placeholder) placeholder.style.display = 'none';
        
        dropZone.appendChild(element);
    } else {
        // If in zone, move back to source
        dragSource.appendChild(element);
        
        // Show placeholder if empty
        if(dropZone.children.length === 1 && dropZone.querySelector('.placeholder-text')) {
             dropZone.querySelector('.placeholder-text').style.display = 'block';
        }
    }
}

function checkDragAnswer() {
    // Get current sentence
    const currentWords = Array.from(dropZone.querySelectorAll('.draggable-word')).map(el => el.innerText);
    const constructedSentence = currentWords.join(' ');
    const correctSentence = questions[currentQuestionIndex].answer;

    // Remove check button to prevent double clicking
    const checkBtn = dragDropArea.querySelector('.btn');
    if(checkBtn) checkBtn.remove();

    if (constructedSentence === correctSentence) {
        feedback.innerText = "Saktë! Fjalia është e përkryer! 🌟";
        feedback.style.color = "#2ECC71";
        score++;
    } else {
        feedback.innerText = `Gabim. Fjalia e saktë është: "${correctSentence}"`;
        feedback.style.color = "#E74C3C";
    }
    feedback.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizArea.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScore.innerText = `Ti more ${score} pikë nga ${questions.length}!`;
}

// Initialize
startQuiz();

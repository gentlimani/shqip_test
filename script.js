const questions = [
    // --- TOPIC: SHQISAT (5 Questions) ---
    { type: "choice", topic: "Shqisat", question: "Me çfarë shqise e shijojmë akulloren?", options: ["Të nuhaturit (hunda)", "Të shijuarit (gjuha)", "Të prekurit (dora)"], answer: "Të shijuarit (gjuha)" },
    { type: "choice", topic: "Shqisat", question: "Me çfarë shqise e dëgjojmë muzikën?", options: ["Të dëgjuarit (veshi)", "Të parit (syri)", "Të prekurit (dora)"], answer: "Të dëgjuarit (veshi)" },
    { type: "choice", topic: "Shqisat", question: "Me çfarë shqise e nuhasim erën e luleve?", options: ["Të shijuarit", "Të nuhaturit", "Të parit"], answer: "Të nuhaturit" },
    { type: "choice", topic: "Shqisat", question: "Kur Hajdi prek lëkurën e butë të kecit, cilën shqisë përdor?", options: ["Të prekurit", "Të nuhaturit", "Të dëgjuarit"], answer: "Të prekurit" },
    { type: "choice", topic: "Shqisat", question: "Me çfarë shqise shohim ngjyrat e ylberit?", options: ["Të nuhaturit", "Të parit", "Të prekurit"], answer: "Të parit" },

    // --- TOPIC: ANALIZA E FJALISË (5 Questions - Drag into Buckets) ---
    { type: "analysis", topic: "Analiza e Fjalisë", instruction: "Gjej Kryefjalën, Kallëzuesin dhe Pjesët Plotësuese.", sentenceWords: [{ text: "Fëmijët", category: "kryefjala" }, { text: "ndihmojnë", category: "kallezuesi" }, { text: "mësuesen", category: "plotesuese" }] },
    { type: "analysis", topic: "Analiza e Fjalisë", instruction: "Analizo fjalinë e gjatë: 'Nxënësit e klasës së tretë vizituan muzeun.'", sentenceWords: [{ text: "Nxënësit e klasës së tretë", category: "kryefjala" }, { text: "vizituan", category: "kallezuesi" }, { text: "muzeun", category: "plotesuese" }] },
    { type: "analysis", topic: "Analiza e Fjalisë", instruction: "Gjej pjesët: 'Mami im gatuan gjellë të shijshme.'", sentenceWords: [{ text: "Mami im", category: "kryefjala" }, { text: "gatuan", category: "kallezuesi" }, { text: "gjellë të shijshme", category: "plotesuese" }] },
    { type: "analysis", topic: "Analiza e Fjalisë", instruction: "Analizo fjalinë: 'Gjergj Kastrioti luftoi për lirinë.'", sentenceWords: [{ text: "Gjergj Kastrioti", category: "kryefjala" }, { text: "luftoi", category: "kallezuesi" }, { text: "për lirinë", category: "plotesuese" }] },
    { type: "analysis", topic: "Analiza e Fjalisë", instruction: "Vendos fjalët: 'Zogjtë e vegjël cicërojnë bukur.'", sentenceWords: [{ text: "Zogjtë e vegjël", category: "kryefjala" }, { text: "cicërojnë", category: "kallezuesi" }, { text: "bukur", category: "plotesuese" }] },

    // --- TOPIC: KRIJO FJALI (Fill in Blanks) (4 Questions) ---
    { type: "fill", topic: "Krijo Fjali (Kryefjala)", instruction: "Shto Kryefjalën (Kush?) në fjali.", sentencePart1: "", sentencePart2: " kujdesen për gjyshin.", answer: ["Ata", "Fëmijët", "Nipat", "Mbesat", "Ato", "Familja"], placeholder: "Kush?" },
    { type: "fill", topic: "Krijo Fjali (Kallëzuesi)", instruction: "Shto Kallëzuesin (Ç'bën?) në fjali.", sentencePart1: "Mami ", sentencePart2: " një tortë të madhe.", answer: ["gatuan", "bëri", "përgatiti", "bleu"], placeholder: "Ç'bën?" },
    { type: "fill", topic: "Krijo Fjali (Pjesë Plotësuese)", instruction: "Shto një pjesë plotësuese (Ku?).", sentencePart1: "Peshku noton në ", sentencePart2: ".", answer: ["ujë", "det", "lumë", "liqen", "akuarium"], placeholder: "Ku?" },
    { type: "fill", topic: "Krijo Fjali (Kryefjala)", instruction: "Kush po luan në oborr?", sentencePart1: "", sentencePart2: " luan me top.", answer: ["Djali", "Vajza", "Fëmija", "Noari", "Ai", "Ajo"], placeholder: "Kush?" },

    // --- TOPIC: RENDITJA E FJALËVE (3 Questions) ---
    { type: "drag", topic: "Renditja e Fjalëve", question: "Rendit fjalët për të formuar fjali:", words: ["shkon", "në", "shkollë", "Ana"], answer: "Ana shkon në shkollë" },
    { type: "drag", topic: "Renditja e Fjalëve", question: "Rendit fjalët (Workbook f.31):", words: ["mban", "Babagjyshi", "një", "ditar"], answer: "Babagjyshi mban një ditar" },
    { type: "drag", topic: "Renditja e Fjalëve", question: "Formo fjalinë:", words: ["bleu", "Mami", "lule", "të", "bukura"], answer: "Mami bleu lule të bukura" },

    // --- TOPIC: GJEJ KALLËZUESIN (3 Questions - based on Q6) ---
    { type: "choice", topic: "Gjej Kallëzuesin", question: "Gjej kallëzuesin në fjali: 'Ju shkoni çdo ditë në stërvitje.'", options: ["Ju", "shkoni", "stërvitje"], answer: "shkoni" },
    { type: "choice", topic: "Gjej Kallëzuesin", question: "Gjej kallëzuesin në fjali: 'Fëmijët shkruajnë për të drejtat e tyre.'", options: ["Fëmijët", "shkruajnë", "të drejtat"], answer: "shkruajnë" },
    { type: "choice", topic: "Gjej Kallëzuesin", question: "Gjej kallëzuesin: 'Dielli ndriçon tokën.'", options: ["Dielli", "ndriçon", "tokën"], answer: "ndriçon" },

    // --- TOPIC: PLOTËSO FJALINË (Based on Q7) (3 Questions) ---
    { type: "choice", topic: "Plotëso Fjalinë", question: "Zgjidh fjalën e duhur: Pjesët ______ plotësojnë kuptimin e kryefjalës dhe të kallëzuesit.", options: ["kryesore", "plotësuese"], answer: "plotësuese" },
    { type: "choice", topic: "Plotëso Fjalinë", question: "Zgjidh fjalën për të plotësuar fjalinë: 'Vajza e vogël luan ______.'", options: ["e bukur", "në oborr"], answer: "në oborr" },
    { type: "choice", topic: "Plotëso Fjalinë", question: "Cila fjalë mungon? 'Zogu ______ në degë.'", options: ["fluturon", "këndon", "noton"], answer: "këndon" },

    // --- TOPIC: FJALËT MOHUESE S' DHE NUK (2 Questions) ---
    { type: "choice", topic: "Fjalët Mohuese", question: "Plotëso fjalinë: Unë ___ shkoj në shkollë pa mësuar.", options: ["s'", "nuk"], answer: "nuk" },
    { type: "choice", topic: "Fjalët Mohuese", question: "Cila është shkruar saktë?", options: ["Ti smund të luash.", "Ti s'mund të luash."], answer: "Ti s'mund të luash." },

    // --- TOPIC: NDARJA E FJALËVE (3 Questions) ---
    { type: "choice", topic: "Ndarja e fjalëve", question: "Si ndahet saktë fjala 'populli' në fund të rreshtit?", options: ["po-pu-lli", "pop-u-lli", "popu-lli"], answer: "popu-lli" },
    { type: "choice", topic: "Ndarja e fjalëve", question: "Si ndahet saktë fjala 'flutura'?", options: ["fl-utura", "flu-tura"], answer: "flu-tura" },
    { type: "choice", topic: "Ndarja e fjalëve", question: "Cila fjalë është ndarë GABIM?", options: ["shk-oj", "zemër-mirë", "ba-rka"], answer: "shk-oj" },

    // --- TOPIC: GRAMATIKË (Nouns/Adjectives/Sentence Types) (2 Questions) ---
    { type: "choice", topic: "Fjalia e Thjeshtë", question: "A është kjo fjali e thjeshtë? 'Mami gatuan dhe pastron shtëpinë.'", options: ["Po (E thjeshtë)", "Jo (Jo e thjeshtë)"], answer: "Jo (Jo e thjeshtë)", note: "Ka dy folje: gatuan, pastron." },
    { type: "choice", topic: "Emri", question: "Cila fjalë është EMËR I PËRVEÇËM?", options: ["qytet", "Durrës", "mal"], answer: "Durrës" }
];

// --- APP STATE ---
let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false;

// --- DRAG STATE ---
let activeDragEl = null;
let originalParent = null;
let touchOffsetX = 0;
let touchOffsetY = 0;

// Elements
const questionText = document.getElementById('question-text');
const topicTag = document.getElementById('topic-tag');
const optionsContainer = document.getElementById('options-container');

// Simple Drag
const dragDropArea = document.getElementById('drag-drop-area');
const dropZone = document.getElementById('drop-zone');
const dragSource = document.getElementById('drag-source');
const checkDragBtn = document.getElementById('check-drag-btn');

// Analysis Drag
const analysisArea = document.getElementById('analysis-area');
const analysisSource = document.getElementById('analysis-source');
const checkAnalysisBtn = document.getElementById('check-analysis-btn');

// Fill Blank
const fillBlankArea = document.getElementById('fill-blank-area');
const sentenceContainer = document.getElementById('sentence-container');
const checkFillBtn = document.getElementById('check-fill-btn');

// General
const feedbackArea = document.getElementById('feedback-area');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const counter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const quizArea = document.getElementById('quiz-area');
const resultScreen = document.getElementById('result-screen');
const finalScore = document.getElementById('final-score');

function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.innerText = `Pikët: ${score}`;
    showQuestion();
}

function showQuestion() {
    isAnswered = false;
    let q = questions[currentQuestionIndex];
    
    topicTag.innerText = q.topic || "Gjuha Shqipe";
    questionText.innerText = q.instruction || q.question;
    counter.innerText = `Pyetja ${currentQuestionIndex + 1} / ${questions.length}`;
    progressBar.style.width = `${((currentQuestionIndex) / questions.length) * 100}%`;
    
    // Reset Views
    optionsContainer.classList.add('hidden');
    dragDropArea.classList.add('hidden');
    fillBlankArea.classList.add('hidden');
    analysisArea.classList.add('hidden');
    feedbackArea.classList.add('hidden');
    optionsContainer.innerHTML = '';
    
    if (q.type === 'choice') {
        setupChoiceQuestion(q);
    } else if (q.type === 'drag') {
        setupDragQuestion(q);
    } else if (q.type === 'fill') {
        setupFillQuestion(q);
    } else if (q.type === 'analysis') {
        setupAnalysisQuestion(q);
    }
}

// --- CHOICE LOGIC ---
function setupChoiceQuestion(q) {
    optionsContainer.classList.remove('hidden');
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'option-btn';
        btn.onclick = () => handleChoice(btn, opt, q.answer);
        optionsContainer.appendChild(btn);
    });
}

function handleChoice(btn, selected, correct) {
    if (isAnswered) return;
    isAnswered = true;
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    
    if (selected === correct) {
        btn.classList.add('correct');
        showFeedback(true, "Saktë! Bravo! 🌟");
        score++;
        scoreDisplay.innerText = `Pikët: ${score}`;
    } else {
        btn.classList.add('wrong');
        allBtns.forEach(b => { if (b.innerText === correct) b.classList.add('correct'); });
        showFeedback(false, `Gabim. E sakta është: ${correct}`);
    }
}

// --- DRAG AND DROP LOGIC (Unified Pointer Events) ---
function createDraggable(text, category = null) {
    const el = document.createElement('div');
    el.innerText = text;
    el.className = 'draggable-word';
    if (category) el.dataset.category = category;
    
    // Bind Pointer Events (Mouse, Touch, Pen)
    el.addEventListener('pointerdown', onPointerDown);
    return el;
}

function onPointerDown(e) {
    if (isAnswered) return;
    
    activeDragEl = e.target;
    originalParent = activeDragEl.parentElement;
    
    // Calculate offset to grab element exactly where touched
    const rect = activeDragEl.getBoundingClientRect();
    touchOffsetX = e.clientX - rect.left;
    touchOffsetY = e.clientY - rect.top;

    // Prepare Element for Dragging
    activeDragEl.classList.add('dragging');
    activeDragEl.style.width = `${rect.width}px`; // Fix width
    activeDragEl.style.left = `${e.clientX - touchOffsetX}px`;
    activeDragEl.style.top = `${e.clientY - touchOffsetY}px`;
    
    document.body.appendChild(activeDragEl); // Move to body to float over everything
    
    activeDragEl.setPointerCapture(e.pointerId);
    
    activeDragEl.addEventListener('pointermove', onPointerMove);
    activeDragEl.addEventListener('pointerup', onPointerUp);
}

function onPointerMove(e) {
    if (!activeDragEl) return;
    e.preventDefault();
    
    const x = e.clientX - touchOffsetX;
    const y = e.clientY - touchOffsetY;
    
    activeDragEl.style.left = `${x}px`;
    activeDragEl.style.top = `${y}px`;

    // Hit Testing for Highlight
    highlightDroppableUnder(e.clientX, e.clientY);
}

function onPointerUp(e) {
    if (!activeDragEl) return;
    
    activeDragEl.releasePointerCapture(e.pointerId);
    activeDragEl.removeEventListener('pointermove', onPointerMove);
    activeDragEl.removeEventListener('pointerup', onPointerUp);
    activeDragEl.classList.remove('dragging');
    activeDragEl.style.width = '';
    activeDragEl.style.left = '';
    activeDragEl.style.top = '';

    // Find drop target
    const dropTarget = getDroppableUnder(e.clientX, e.clientY);

    if (dropTarget) {
        // Determine container (handle Analysis buckets specially)
        let container = dropTarget;
        if (container.classList.contains('category-box')) {
            container = container.querySelector('.cat-content') || container;
        }
        
        // Clear placeholder text if dropping into zone
        if (container.classList.contains('drop-zone')) {
            const ph = container.querySelector('.placeholder-text');
            if (ph) ph.style.display = 'none';
        }
        
        container.appendChild(activeDragEl);
    } else {
        // Return to original if dropped in void
        originalParent.appendChild(activeDragEl);
        // Restore placeholder if needed
        if (originalParent.id === 'drop-zone' && originalParent.children.length <= 1) {
             const ph = originalParent.querySelector('.placeholder-text');
             if(ph) ph.style.display = 'block';
        }
    }

    // Clean up highlight
    document.querySelectorAll('.droppable').forEach(el => el.classList.remove('hovered'));
    activeDragEl = null;
    originalParent = null;
}

function getDroppableUnder(x, y) {
    // Hide drag element momentarily to peek underneath
    activeDragEl.style.visibility = 'hidden';
    const elemBelow = document.elementFromPoint(x, y);
    activeDragEl.style.visibility = 'visible';

    if (!elemBelow) return null;
    return elemBelow.closest('.droppable');
}

function highlightDroppableUnder(x, y) {
    document.querySelectorAll('.droppable').forEach(el => el.classList.remove('hovered'));
    const target = getDroppableUnder(x, y);
    if (target) target.classList.add('hovered');
}

// --- SETUP DRAG QUESTION (Type 1) ---
function setupDragQuestion(q) {
    dragDropArea.classList.remove('hidden');
    
    const ph = dropZone.querySelector('.placeholder-text');
    if(ph) ph.style.display = 'block';
    
    // Clean up previous
    Array.from(dropZone.children).forEach(c => {
        if(!c.classList.contains('placeholder-text')) c.remove();
    });
    dragSource.innerHTML = '';
    checkDragBtn.classList.remove('hidden');

    let words = [...q.words].sort(() => Math.random() - 0.5);
    words.forEach(word => {
        dragSource.appendChild(createDraggable(word));
    });
}

// --- SETUP ANALYSIS QUESTION (Type 2) ---
function setupAnalysisQuestion(q) {
    analysisArea.classList.remove('hidden');
    analysisSource.innerHTML = '';
    checkAnalysisBtn.classList.remove('hidden');
    
    document.querySelectorAll('.category-box .cat-content').forEach(c => c.innerHTML = '');

    let shuffled = [...q.sentenceWords].sort(() => Math.random() - 0.5);
    shuffled.forEach(item => {
        analysisSource.appendChild(createDraggable(item.text, item.category));
    });
}

// --- CHECK LOGIC ---
checkDragBtn.onclick = () => {
    if (isAnswered) return;
    const words = Array.from(dropZone.querySelectorAll('.draggable-word')).map(e => e.innerText);
    const sentence = words.join(' ');
    const correct = questions[currentQuestionIndex].answer;

    if (sentence === correct) {
        showFeedback(true, "Shkëlqyeshëm! Fjalia është e saktë! 🎉");
        score++;
        scoreDisplay.innerText = `Pikët: ${score}`;
    } else {
        showFeedback(false, `Jo plotësisht. E sakta: "${correct}"`);
    }
    isAnswered = true;
    checkDragBtn.classList.add('hidden');
};

checkAnalysisBtn.onclick = () => {
    if (isAnswered) return;
    let allCorrect = true;
    
    const allWords = document.querySelectorAll('#analysis-area .draggable-word');
    allWords.forEach(word => {
        const correctCat = word.dataset.category;
        const parentBox = word.closest('.category-box');
        
        if (parentBox && parentBox.dataset.id === correctCat) {
            word.style.backgroundColor = 'var(--success)';
            word.style.color = 'white';
            word.style.borderColor = 'var(--success)';
        } else {
            allCorrect = false;
            word.style.backgroundColor = 'var(--error)';
            word.style.color = 'white';
            word.style.borderColor = 'var(--error)';
        }
    });

    // Ensure source is empty
    if (analysisSource.children.length > 0) allCorrect = false;

    if (allCorrect) {
        showFeedback(true, "Analizë e shkëlqyer! 🌟");
        score++;
        scoreDisplay.innerText = `Pikët: ${score}`;
    } else {
        showFeedback(false, "Ka disa gabime. Shiko ngjyrat.");
    }
    isAnswered = true;
    checkAnalysisBtn.classList.add('hidden');
};

// --- FILL IN BLANK LOGIC ---
function setupFillQuestion(q) {
    fillBlankArea.classList.remove('hidden');
    checkFillBtn.classList.remove('hidden');
    
    sentenceContainer.innerHTML = `
        <span>${q.sentencePart1}</span>
        <input type="text" class="blank-input" placeholder="${q.placeholder}" autocomplete="off">
        <span>${q.sentencePart2}</span>
    `;
    setTimeout(() => {
        const input = sentenceContainer.querySelector('input');
        if(input) input.focus();
    }, 100);
}

checkFillBtn.onclick = () => {
    if (isAnswered) return;
    const q = questions[currentQuestionIndex];
    const input = sentenceContainer.querySelector('input');
    const userVal = input.value.trim();
    const isCorrect = q.answer.some(ans => ans.toLowerCase() === userVal.toLowerCase());

    if (isCorrect) {
        input.classList.add('correct-input');
        showFeedback(true, `Bravo! "${userVal}" është zgjedhje e saktë.`);
        score++;
        scoreDisplay.innerText = `Pikët: ${score}`;
    } else {
        input.classList.add('wrong-input');
        showFeedback(false, `Mund të vendosje: ${q.answer[0]}`);
    }
    isAnswered = true;
    checkFillBtn.classList.add('hidden');
};

function showFeedback(isCorrect, msg) {
    feedbackArea.classList.remove('hidden');
    feedbackText.innerText = msg;
    feedbackText.style.color = isCorrect ? 'var(--success)' : 'var(--error)';
}

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
};

function finishQuiz() {
    quizArea.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    progressBar.style.width = '100%';
    finalScore.innerText = `Ti more ${score} nga ${questions.length} pikë!`;
}

// Start
initQuiz();

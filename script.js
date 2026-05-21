// --- DATABASE SOALAN ---
// Kumpulan 1: Eagle / Autokratik / Pengurusan
// Kumpulan 2: Owl / Analitikal / STEM
// Kumpulan 3: Dove / Demokratik / Sosial
// Kumpulan 4: Peacock / Visionary / Seni
const questions = [
    { group: 1, bm: "Saya fokus kepada hasil berbanding perasaan.", en: "I focus on results more than feelings." },
    { group: 2, bm: "Saya perlukan semua fakta sebelum membuat keputusan.", en: "I need all the facts before deciding." },
    { group: 3, bm: "Saya mengelak konflik walau apa cara sekalipun.", en: "I avoid conflict at all costs." },
    { group: 4, bm: "Saya suka menjadi tumpuan di hadapan orang ramai.", en: "I love being the center of attention in public." }
    // Tambah baki 56 soalan mengikut format di atas
];

let currentLang = 'bm';
let currentQuestionIndex = 0;
let scores = { group1: 0, group2: 0, group3: 0, group4: 0 };
let timerInterval;
let timeLeft = 10;

// --- FUNGSI BAHASA ---
function toggleLanguage() {
    currentLang = currentLang === 'bm' ? 'en' : 'bm';
    updateUIText();
    if (document.getElementById('quizScreen').classList.contains('active')) {
        showQuestion();
    }
}

function updateUIText() {
    document.querySelectorAll('[data-bm]').forEach(el => {
        el.innerText = el.getAttribute(`data-${currentLang}`);
    });
}

// --- FUNGSI LOGIN ---
function checkLogin() {
    const pass = document.getElementById('password').value;
    if (pass === 'abc123') {
        document.getElementById('loginScreen').classList.remove('active');
        document.getElementById('quizScreen').classList.add('active');
        startQuiz();
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
}

// --- FUNGSI UJIAN ---
function startQuiz() {
    // Rawakkan soalan (Randomizer)
    questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const q = questions[currentQuestionIndex];
    document.getElementById('questionText').innerText = q[currentLang];
    document.getElementById('questionCounter').innerText = currentLang === 'bm' 
        ? `Soalan ${currentQuestionIndex + 1} / ${questions.length}` 
        : `Question ${currentQuestionIndex + 1} / ${questions.length}`;

    resetTimer();
}

// --- FUNGSI TIMER (10 SAAT) ---
function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 10;
    document.getElementById('timerBar').style.width = '100%';

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timerBar').style.width = `${(timeLeft / 10) * 100}%`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            answerQuestion(false); // Auto-skip jika masa tamat (Markah = 0)
        }
    }, 1000);
}

// --- FUNGSI JAWAPAN & KIRAAN ---
function answerQuestion(isAgree) {
    clearInterval(timerInterval);
    
    if (isAgree) {
        let group = questions[currentQuestionIndex].group;
        scores[`group${group}`]++;
    }

    currentQuestionIndex++;
    showQuestion();
}

// --- FUNGSI KEPUTUSAN AKHIR ---
function endQuiz() {
    document.getElementById('quizScreen').classList.remove('active');
    document.getElementById('resultScreen').classList.add('active');

    // Analisis Matriks Tertinggi
    let highestGroup = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    let resDove, resLead, resWork;
    if (highestGroup === 'group1') { resDove = "Eagle"; resLead = "Autocratic"; resWork = "Management/Business"; }
    else if (highestGroup === 'group2') { resDove = "Owl"; resLead = "Analytical"; resWork = "STEM/Technical"; }
    else if (highestGroup === 'group3') { resDove = "Dove"; resLead = "Democratic"; resWork = "Social/Education"; }
    else { resDove = "Peacock"; resLead = "Visionary"; resWork = "Art/Communication"; }

    document.getElementById('resDove').innerText = resDove;
    document.getElementById('resLeadership').innerText = resLead;
    document.getElementById('resWork').innerText = resWork;
}

// Initialize setup
updateUIText();

// --- DATABASE SOALAN ---
// Kumpulan 1: Eagle / Autokratik / Pengurusan
// Kumpulan 2: Owl / Analitikal / STEM
// Kumpulan 3: Dove / Demokratik / Sosial
// Kumpulan 4: Peacock / Visionary / Seni
const questions = [
    { group: 1, bm: "Saya fokus kepada hasil berbanding perasaan.", en: "I focus on results more than feelings." },
    { group: 2, bm: "Saya perlukan semua fakta sebelum membuat keputusan.", en: "I need all the facts before deciding." },
    { group: 3, bm: "Saya mengelak konflik walau apa cara sekalipun.", en: "I avoid conflict at all costs." },
    { group: 4, bm: "Saya suka menjadi tumpuan di hadapan orang ramai.", en: "I love being the center of attention in public." },
    { group: 1, bm: "Saya fokus kepada hasil berbanding perasaan.", en: "I focus on results more than feelings." },
    { group: 1, bm: "Saya lebih suka memberi arahan daripada menerimanya.", en: "I prefer giving orders than receiving them." },
    { group: 1, bm: "Saya selesa membuat keputusan yang tidak popular.", en: "I am comfortable making unpopular decisions." },
    { group: 1, bm: "Saya sasarkan untuk menjadi ketua dalam mana-mana kumpulan.", en: "I aim to be the leader in any group." },
    { group: 1, bm: "Saya utamakan kecekapan berbanding persetujuan ramai.", en: "I value efficiency over group consensus." },
    { group: 1, bm: "Jika projek lewat, saya menuntut tindakan segera.", en: "If a project is late, I demand immediate action." },
    { group: 1, bm: "Semasa krisis, saya mengambil alih tanpa bertanya.", en: "During a crisis, I take control without asking." },
    { group: 1, bm: "Semasa berunding, saya berjuang untuk menang dalam apa jua keadaan.", en: "When negotiating, I play to win at all costs." },
    { group: 1, bm: "Jika seseorang buat silap, saya tegur secara berdepan.", en: "If someone makes a mistake, I point it out directly." },
    { group: 1, bm: "Dalam mesyuarat, saya mencelah jika perbincangan mula tersasar.", en: "In a meeting, I interrupt if we go off-topic." },
    { group: 1, bm: "Saya didorong oleh kuasa dan pencapaian.", en: "I am driven by power and achievement." },
    { group: 1, bm: "Saya lebih suka menetapkan matlamat berbanding melaksanakannya.", en: "I prefer setting goals rather than executing them." },
    { group: 1, bm: "Saya tiada masalah memecat pekerja yang tidak berprestasi.", en: "I can easily fire someone if they underperform." },
    { group: 1, bm: "Saya tidak kisah dengan konflik jika ia membawa kemajuan.", en: "I don't mind conflicts if it brings progress." },
    { group: 1, bm: "Saya hanya menghormati pihak atasan yang terbukti cekap.", en: "I respect authority only if they prove their competence." },

    // Kumpulan 2: Owl / Analitikal / STEM
    { group: 2, bm: "Saya perlukan semua fakta sebelum membuat keputusan.", en: "I need all the facts before deciding." },
    { group: 2, bm: "Saya lebih suka bekerja sendirian menganalisis data.", en: "I prefer working alone analyzing data." },
    { group: 2, bm: "Saya sangat mementingkan perincian dan teratur.", en: "I am very detail-oriented and organized." },
    { group: 2, bm: "Saya lebih percayakan logik berbanding naluri.", en: "I trust logic more than intuition." },
    { group: 2, bm: "Saya sentiasa patuh kepada peraturan dan prosedur.", en: "I always follow strict rules and procedures." },
    { group: 2, bm: "Jika mesin rosak, saya baca manual untuk membaikinya.", en: "If a machine breaks, I read the manual to fix it." },
    { group: 2, bm: "Apabila membeli peranti, saya bandingkan semua spesifikasi teknikal.", en: "When buying a device, I compare all technical specs." },
    { group: 2, bm: "Jika orang berdebat dengan saya, saya minta bukti.", en: "If someone argues with me, I ask for evidence." },
    { group: 2, bm: "Sebelum bercuti, saya rancang jadual secara terperinci.", en: "Before a trip, I plan the itinerary in detail." },
    { group: 2, bm: "Semasa berdebat, saya kekal tenang dan fokus pada fakta.", en: "During a debate, I remain calm and stick to facts." },
    { group: 2, bm: "Saya berasa tenang apabila melihat graf dan nombor.", en: "I find comfort in viewing graphs and numbers." },
    { group: 2, bm: "Saya elakkan keputusan berdasarkan \"gerak hati\".", en: "I avoid making decisions based on \"gut feeling\"." },
    { group: 2, bm: "Saya semak tugasan saya berulang kali.", en: "I double-check my work multiple times." },
    { group: 2, bm: "Saya lebih suka komunikasi bertulis berbanding lisan.", en: "I prefer written communication over verbal." },
    { group: 2, bm: "Saya seorang yang perfeksionis dalam tugas harian.", en: "I am a perfectionist in my daily tasks." },

    // Kumpulan 3: Dove / Demokratik / Sosial
    { group: 3, bm: "Saya mengelak konflik walau apa cara sekalipun.", en: "I avoid conflict at all costs." },
    { group: 3, bm: "Saya suka membantu orang lain mencapai matlamat mereka.", en: "I love helping others achieve their goals." },
    { group: 3, bm: "Saya pendengar yang baik dan sangat berempati.", en: "I am a good listener and highly empathetic." },
    { group: 3, bm: "Saya lebih suka bekerja dalam pasukan yang saling menyokong.", en: "I prefer working in a supportive team." },
    { group: 3, bm: "Saya letakkan keperluan orang lain mendahului diri saya.", en: "I put others' needs before my own." },
    { group: 3, bm: "Jika rakan bersedih, saya ketepikan kerja untuk mendengarnya.", en: "If a friend is sad, I set aside work to listen." },
    { group: 3, bm: "Bila memilih tempat makan, saya ikut keputusan majoriti.", en: "When deciding where to eat, I follow the majority." },
    { group: 3, bm: "Jika rakan sekerja bergaduh, saya bertindak sebagai pendamai.", en: "If colleagues fight, I act as the peacemaker." },
    { group: 3, bm: "Dalam projek, saya pastikan semua ahli pasukan selesa.", en: "In a project, I ensure all team members are comfortable." },
    { group: 3, bm: "Jika menang anugerah, saya berikan kredit kepada seluruh pasukan.", en: "If I win an award, I credit the entire team." },
    { group: 3, bm: "Saya sangat menghargai kesetiaan dan persahabatan.", en: "I deeply value loyalty and friendships." },
    { group: 3, bm: "Saya berasa tertekan apabila ada yang meninggikan suara.", en: "I feel stressed when people raise their voices." },
    { group: 3, bm: "Saya seronok mengajar dan membimbing orang dengan sabar.", en: "I enjoy teaching and guiding others patiently." },
    { group: 3, bm: "Saya jarang berkata \"tidak\" apabila orang meminta bantuan.", en: "I rarely say \"no\" when someone asks for help." },
    { group: 3, bm: "Saya mahu diingati sebagai seorang yang baik hati.", en: "I want to be remembered as a kind person." },

    // Kumpulan 4: Peacock / Visionary / Seni
    { group: 4, bm: "Saya suka menjadi tumpuan di hadapan orang ramai.", en: "I love being the center of attention in public." },
    { group: 4, bm: "Saya sangat kreatif dan sentiasa penuh dengan idea baharu.", en: "I am highly creative and always full of new ideas." },
    { group: 4, bm: "Saya lebih suka gaya hidup fleksibel dan spontan.", en: "I prefer a flexible and spontaneous lifestyle." },
    { group: 4, bm: "Saya memberi inspirasi kepada orang lain dengan semangat saya.", en: "I inspire others with my enthusiasm." },
    { group: 4, bm: "Saya fokus pada gambaran besar, bukan perincian remeh.", en: "I focus on the big picture, not petty details." },
    { group: 4, bm: "Di majlis keramaian, saya akan cuba berbual dengan semua orang.", en: "At a social event, I will try to talk to everyone." },
    { group: 4, bm: "Jika tugas itu bosan, saya akan cari jalan jadikan ia seronok.", en: "If a task is boring, I will find a way to make it fun." },
    { group: 4, bm: "Semasa membentang idea, saya menggunakan penceritaan yang menarik.", en: "When pitching an idea, I use engaging storytelling." },
    { group: 4, bm: "Jika peraturan terlalu ketat, saya akan cari jalan melonggarkannya.", en: "If rules are too strict, I will find a way to bend them." },
    { group: 4, bm: "Dalam sesi perbincangan, saya beri idea yang paling luar biasa.", en: "In a discussion, I give the most out-of-the-box ideas." },
    { group: 4, bm: "Saya sangat mementingkan penampilan dan gaya fizikal saya.", en: "I care a lot about my physical appearance and style." },
    { group: 4, bm: "Saya mudah bosan dengan tugasan rutin yang berulang-ulang.", en: "I get easily bored with repetitive routine tasks." },
    { group: 4, bm: "Saya meluahkan emosi dan perasaan saya secara terbuka.", en: "I express my emotions and feelings openly." },
    { group: 4, bm: "Saya sangat optimis dan sentiasa memikirkan masa depan.", en: "I am very optimistic and always thinking about the future." },
    { group: 4, bm: "Saya lebih suka mencipta benda baharu berbanding membaiki yang lama.", en: "I prefer creating something new over fixing something old." }
// Tambah baki 56 soalan mengikut format di atas
];

let currentLang = 'bm';
let currentQuestionIndex = 0;
let scores = { group1: 0, group2: 0, group3: 0, group4: 0 };
let answerHistory = []; // Simpan rekod jawapan untuk fungsi Back
let timerInterval;
let timeLeft = 10;
let myChart = null; // Variable untuk Spider Chart

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
    questions.sort(() => Math.random() - 0.5); // Rawak soalan
    currentQuestionIndex = 0;
    answerHistory = []; // Reset sejarah jawapan
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

    // Tunjuk butang 'Back' hanya jika bukan soalan pertama
    document.getElementById('btnBack').style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';

    resetTimer();
}

// --- FUNGSI TIMER ---
function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 10;
    document.getElementById('timerBar').style.width = '100%';

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timerBar').style.width = `${(timeLeft / 10) * 100}%`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            answerQuestion(false); 
        }
    }, 1000);
}

// --- FUNGSI JAWAPAN ---
function answerQuestion(isAgree) {
    clearInterval(timerInterval);
    answerHistory[currentQuestionIndex] = isAgree; // Simpan jawapan dalam history
    currentQuestionIndex++;
    showQuestion();
}

// --- FUNGSI UNDUR (BACK) ---
function goBack() {
    if (currentQuestionIndex > 0) {
        clearInterval(timerInterval);
        currentQuestionIndex--; // Undur 1 soalan
        showQuestion();
    }
}

// --- FUNGSI KEPUTUSAN AKHIR & SPIDER CHART ---
function endQuiz() {
    document.getElementById('quizScreen').classList.remove('active');
    document.getElementById('resultScreen').classList.add('active');

    // Pengiraan markah berdasarkan answerHistory
    scores = { group1: 0, group2: 0, group3: 0, group4: 0 };
    for (let i = 0; i < answerHistory.length; i++) {
        if (answerHistory[i] === true) {
            let group = questions[i].group;
            scores[`group${group}`]++;
        }
    }

    // Analisis Keputusan Teks
    let highestGroup = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    let resDove, resLead, resWork;
    if (highestGroup === 'group1') { resDove = "Eagle"; resLead = "Autocratic"; resWork = "Management/Business"; }
    else if (highestGroup === 'group2') { resDove = "Owl"; resLead = "Analytical"; resWork = "STEM/Technical"; }
    else if (highestGroup === 'group3') { resDove = "Dove"; resLead = "Democratic"; resWork = "Social/Education"; }
    else { resDove = "Peacock"; resLead = "Visionary"; resWork = "Art/Communication"; }

    document.getElementById('resDove').innerText = resDove;
    document.getElementById('resLeadership').innerText = resLead;
    document.getElementById('resWork').innerText = resWork;

    // Lukis Spiderweb Chart
    drawSpiderChart();
}

function drawSpiderChart() {
    const ctx = document.getElementById('spiderChart').getContext('2d');
    
    // Clear graf lama jika user ambil test kali kedua
    if (myChart !== null) { myChart.destroy(); }

    myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Eagle (Dominant)', 'Owl (Analytical)', 'Dove (Harmony)', 'Peacock (Expressive)'],
            datasets: [{
                label: 'DOVE Profiling Score',
                data: [scores.group1, scores.group2, scores.group3, scores.group4],
                backgroundColor: 'rgba(242, 169, 0, 0.4)', // UniKL Yellow (Transparent)
                borderColor: '#F2A900', // UniKL Yellow
                pointBackgroundColor: '#1B2956', // UniKL Navy Blue
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#1B2956'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 15 // Maksimum soalan untuk setiap kategori
                }
            }
        }
    });
}

// Initialize setup
updateUIText();

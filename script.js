// --- DATABASE SOALAN (Format 30-30-30 Matriks Berasingan) ---
// category: "dope", "lead", "work"
// trait: Kumpulan spesifik untuk pengiraan markah
const questions = [
  
    // Sifat: EAGLE (Dominan, Fokus Hasil)
    { category: "dope", trait: "eagle", bm: "Saya fokus kepada hasil berbanding perasaan.", en: "I focus on results more than feelings." },
    { category: "dope", trait: "eagle", bm: "Saya lebih suka mengambil alih dalam situasi kelam-kabut.", en: "I prefer to take charge in a chaotic situation." },
    { category: "dope", trait: "eagle", bm: "Saya selesa membuat keputusan tidak popular jika ia membawa kejayaan.", en: "I am comfortable making unpopular decisions if it brings success." },
    { category: "dope", trait: "eagle", bm: "Saya mudah hilang sabar apabila sesuatu bergerak terlalu lambat.", en: "I get impatient when things move too slowly." },
    { category: "dope", trait: "eagle", bm: "Saya suka mencabar peraturan jika ia tidak masuk akal.", en: "I like to challenge the rules if they don't make sense." },
    { category: "dope", trait: "eagle", bm: "Saya secara semula jadi kompetitif dan bermain untuk menang.", en: "I am naturally competitive and play to win." },
    { category: "dope", trait: "eagle", bm: "Saya bercakap secara berterus-terang dan tepat pada maksudnya.", en: "I speak directly and straight to the point." },
    { category: "dope", trait: "eagle", bm: "Saya lebih suka tindakan berbanding perancangan yang berterusan.", en: "I prefer action over endless planning." },

    // Sifat: OWL (Analitikal, Teratur)
    { category: "dope", trait: "owl", bm: "Saya perlukan semua fakta sebelum membuat keputusan.", en: "I need all the facts before deciding." },
    { category: "dope", trait: "owl", bm: "Saya menyemak semula kerja saya untuk memastikan tiada kesilapan.", en: "I double-check my work to ensure there are no mistakes." },
    { category: "dope", trait: "owl", bm: "Saya lebih suka komunikasi bertulis berbanding sembang lisan.", en: "I prefer written communication over verbal chats." },
    { category: "dope", trait: "owl", bm: "Saya seronok menganalisis data untuk mencari corak tersembunyi.", en: "I enjoy analyzing data to find hidden patterns." },
    { category: "dope", trait: "owl", bm: "Saya patuh sepenuhnya pada peraturan dan prosedur operasi standard.", en: "I strictly follow rules and standard operating procedures." },
    { category: "dope", trait: "owl", bm: "Saya berhati-hati dan mengira risiko sebelum bertindak.", en: "I am cautious and calculate risks before acting." },
    { category: "dope", trait: "owl", bm: "Kualiti dan kesempurnaan lebih penting bagi saya daripada kelajuan.", en: "Quality and perfection are more important to me than speed." },
    { category: "dope", trait: "owl", bm: "Saya mengawal emosi saya dan sangat bergantung pada logik.", en: "I control my emotions and rely heavily on logic." },

    // Sifat: DOVE (Harmoni, Penyokong)
    { category: "dope", trait: "dove", bm: "Saya mengelak konflik walau apa cara sekalipun.", en: "I avoid conflict at all costs." },
    { category: "dope", trait: "dove", bm: "Saya pendengar yang baik apabila seseorang perlu meluahkan perasaan.", en: "I am a good listener when someone needs to vent." },
    { category: "dope", trait: "dove", bm: "Saya mendahulukan keperluan pasukan saya berbanding diri sendiri.", en: "I put the needs of my team before my own." },
    { category: "dope", trait: "dove", bm: "Saya berusaha untuk mengekalkan persekitaran yang damai dan stabil.", en: "I strive to maintain a peaceful and stable environment." },
    { category: "dope", trait: "dove", bm: "Saya berasa tertekan apabila ada orang meninggikan suara.", en: "I feel stressed when people raise their voices." },
    { category: "dope", trait: "dove", bm: "Saya seronok membantu orang lain membina kemahiran mereka dengan sabar.", en: "I enjoy helping others develop their skills patiently." },
    { category: "dope", trait: "dove", bm: "Saya menghargai hubungan yang mendalam berbanding sekadar membina rangkaian.", en: "I value deep relationships over just networking." },

    // Sifat: PEACOCK (Ekspresif, Sosial)
    { category: "dope", trait: "peacock", bm: "Saya suka menjadi tumpuan di hadapan orang ramai.", en: "I love being the center of attention in public." },
    { category: "dope", trait: "peacock", bm: "Saya penuh bertenaga dan mudah teruja dengan idea baharu.", en: "I am full of energy and easily excited by new ideas." },
    { category: "dope", trait: "peacock", bm: "Saya memujuk dan memberi inspirasi kepada orang lain melalui penceritaan.", en: "I persuade and inspire others through storytelling." },
    { category: "dope", trait: "peacock", bm: "Saya benci melakukan tugas rutin yang mengehadkan kreativiti saya.", en: "I hate doing routine tasks that limit my creativity." },
    { category: "dope", trait: "peacock", bm: "Saya mudah memulakan perbualan dengan orang yang tidak dikenali.", en: "I easily strike up conversations with strangers." },
    { category: "dope", trait: "peacock", bm: "Saya bersikap optimis dan sentiasa melihat dari sudut positif.", en: "I am optimistic and always look on the bright side." },
    { category: "dope", trait: "peacock", bm: "Saya banyak bergantung pada naluri dan gerak hati saya.", en: "I rely on my intuition and gut feeling a lot." },
    

    // --- KATEGORI: LEADERSHIP (Gaya Kepimpinan) ---
   // --- KATEGORI: LEADERSHIP (Gaya Kepimpinan - 30 Soalan) ---
    // Gaya: AUTOCRATIC (Arahan, Kawalan, Pembuat Keputusan Mutlak)
    { category: "lead", trait: "autocratic", bm: "Saya lebih suka memberi arahan daripada menerimanya.", en: "I prefer giving orders than receiving them." },
    { category: "lead", trait: "autocratic", bm: "Saya mengharapkan pasukan mematuhi arahan saya tanpa banyak soal.", en: "I expect the team to follow my orders without much questioning." },
    { category: "lead", trait: "autocratic", bm: "Apabila krisis melanda, saya akan membuat keputusan secara sendirian.", en: "When a crisis hits, I will make decisions on my own." },
    { category: "lead", trait: "autocratic", bm: "Saya lebih fokus kepada pencapaian sasaran berbanding keselesaan pekerja.", en: "I focus more on hitting targets than employee comfort." },
    { category: "lead", trait: "autocratic", bm: "Saya memantau kerja subordinat secara rapat untuk mengelakkan kesilapan.", en: "I closely monitor subordinates' work to avoid mistakes." },
    { category: "lead", trait: "autocratic", bm: "Saya bertegas dalam melaksanakan hukuman jika ada yang melanggar peraturan.", en: "I am firm in enforcing penalties if rules are broken." },
    { category: "lead", trait: "autocratic", bm: "Kuasa pemutus mesti berada di tangan ketua, bukan pasukan.", en: "The ultimate decision-making power must lie with the leader, not the team." },
    { category: "lead", trait: "autocratic", bm: "Saya memimpin dengan menetapkan piawaian yang sangat ketat.", en: "I lead by setting very strict standards." },

    // Gaya: ANALYTICAL (Logik, Data, Perancangan Rapi)
    { category: "lead", trait: "analytical", bm: "Saya percayakan logik dan data dalam memimpin.", en: "I trust logic and data in leading." },
    { category: "lead", trait: "analytical", bm: "Saya mahu melihat laporan dan bukti sebelum meluluskan sebarang projek.", en: "I want to see reports and evidence before approving any project." },
    { category: "lead", trait: "analytical", bm: "Perancangan strategik dan terperinci adalah kunci kepada kepimpinan saya.", en: "Strategic and detailed planning is the key to my leadership." },
    { category: "lead", trait: "analytical", bm: "Saya menilai prestasi pekerja berdasarkan metrik dan nombor yang objektif.", en: "I evaluate employee performance based on objective metrics and numbers." },
    { category: "lead", trait: "analytical", bm: "Saya mengambil masa yang secukupnya untuk mengkaji risiko sebelum bertindak.", en: "I take enough time to study risks before acting." },
    { category: "lead", trait: "analytical", bm: "Saya tidak suka perubahan mendadak tanpa perbincangan berstruktur.", en: "I dislike sudden changes without structured discussions." },
    { category: "lead", trait: "analytical", bm: "Saya memimpin dengan mewujudkan sistem yang efisien dan boleh diukur.", en: "I lead by creating efficient and measurable systems." },
    { category: "lead", trait: "analytical", bm: "Setiap masalah dalam organisasi boleh diselesaikan melalui analisis terperinci.", en: "Every problem in the organization can be solved through detailed analysis." },

    // Gaya: DEMOCRATIC (Konsensus, Empati, Kerjasama)
    { category: "lead", trait: "democratic", bm: "Saya sentiasa meminta pendapat pasukan sebelum bertindak.", en: "I always ask for the team's opinion before acting." },
    { category: "lead", trait: "democratic", bm: "Keputusan yang dicapai secara undian majoriti adalah yang terbaik.", en: "Decisions reached by majority vote are the best." },
    { category: "lead", trait: "democratic", bm: "Saya menggalakkan perbincangan terbuka dan ketelusan dalam organisasi.", en: "I encourage open discussion and transparency in the organization." },
    { category: "lead", trait: "democratic", bm: "Kegagalan pasukan adalah tanggungjawab saya bersama.", en: "The team's failure is my shared responsibility." },
    { category: "lead", trait: "democratic", bm: "Saya memimpin dengan menjadi fasilitator, bukan sekadar 'boss'.", en: "I lead by being a facilitator, not just a 'boss'." },
    { category: "lead", trait: "democratic", bm: "Kesejahteraan moral pasukan sangat penting untuk kejayaan.", en: "The team's moral well-being is crucial for success." },
    { category: "lead", trait: "democratic", bm: "Saya memberi ruang kepada ahli pasukan untuk mencuba dan belajar dari kesilapan.", en: "I give team members space to try and learn from mistakes." },

    // Gaya: VISIONARY (Inovasi, Inspirasi, Gambaran Besar)
    { category: "lead", trait: "visionary", bm: "Saya suka memikirkan inovasi dan masa depan syarikat.", en: "I like thinking about innovation and the company's future." },
    { category: "lead", trait: "visionary", bm: "Saya memimpin dengan memberi inspirasi dan menceritakan gambaran besar.", en: "I lead by inspiring and telling the big picture." },
    { category: "lead", trait: "visionary", bm: "Saya menggalakkan pasukan untuk mengambil risiko bagi mencapai kejayaan.", en: "I encourage the team to take risks to achieve success." },
    { category: "lead", trait: "visionary", bm: "Saya cepat bosan dengan status quo dan sentiasa mencari pembaharuan.", en: "I get bored quickly with the status quo and always seek renewal." },
    { category: "lead", trait: "visionary", bm: "Peranan utama ketua adalah untuk membuka jalan dan peluang baharu.", en: "The leader's main role is to pave the way and open new opportunities." },
    { category: "lead", trait: "visionary", bm: "Saya lebih memikirkan 'apa yang boleh dicapai' berbanding 'bagaimana nak buat'.", en: "I think more about 'what can be achieved' rather than 'how to do it'." },
    { category: "lead", trait: "visionary", bm: "Saya meletakkan sasaran yang sangat berani dan luar dari kebiasaan.", en: "I set very bold and out-of-the-box targets." },
    

    // --- KATEGORI: WORK TENDENCY (Kecenderungan Kerja) ---
    // --- KATEGORI: WORK TENDENCY (Kecenderungan Kerja - 30 Soalan) ---
    // Kecenderungan: MANAGEMENT (Pengurusan, Perniagaan, Strategi)
    { category: "work", trait: "management", bm: "Saya mahir menguruskan belanjawan dan operasi.", en: "I am skilled at managing budgets and operations." },
    { category: "work", trait: "management", bm: "Saya berminat merancang strategi untuk meluaskan pasaran perniagaan.", en: "I am interested in planning strategies to expand business markets." },
    { category: "work", trait: "management", bm: "Saya suka menyelaraskan projek dan memastikan ia mengikut jadual.", en: "I like coordinating projects and ensuring they are on schedule." },
    { category: "work", trait: "management", bm: "Menjadi usahawan atau pengarah syarikat adalah cita-cita besar saya.", en: "Becoming an entrepreneur or company director is my big ambition." },
    { category: "work", trait: "management", bm: "Saya seronok menganalisis keuntungan dan kerugian syarikat.", en: "I enjoy analyzing company profits and losses." },
    { category: "work", trait: "management", bm: "Saya selesa membentangkan rancangan perniagaan kepada pelabur.", en: "I am comfortable pitching business plans to investors." },
    { category: "work", trait: "management", bm: "Saya mahir berunding dan memujuk pihak lain untuk bersetuju.", en: "I am skilled at negotiating and persuading others to agree." },
    { category: "work", trait: "management", bm: "Saya lebih mementingkan produktiviti berbanding tugasan kreatif yang remeh.", en: "I value productivity over trivial creative tasks." },

    // Kecenderungan: STEM (Sains, Teknologi, Kejuruteraan, Matematik)
    { category: "work", trait: "stem", bm: "Saya seronok menyelesaikan masalah kejuruteraan rumit.", en: "I enjoy solving complex engineering problems." },
    { category: "work", trait: "stem", bm: "Saya sangat berminat dengan penemuan teknologi terkini atau pengaturcaraan.", en: "I am very interested in the latest tech discoveries or programming." },
    { category: "work", trait: "stem", bm: "Mengkaji teori sains atau fenomena alam amat menarik minat saya.", en: "Studying scientific theories or natural phenomena greatly interests me." },
    { category: "work", trait: "stem", bm: "Saya selesa membuat eksperimen di dalam makmal selama berjam-jam.", en: "I am comfortable conducting experiments in a lab for hours." },
    { category: "work", trait: "stem", bm: "Saya suka membaiki peralatan elektronik atau mekanikal yang rosak.", en: "I like fixing broken electronic or mechanical equipment." },
    { category: "work", trait: "stem", bm: "Formula matematik yang kompleks tidak menakutkan saya.", en: "Complex mathematical formulas do not scare me." },
    { category: "work", trait: "stem", bm: "Saya lebih suka membaca jurnal penyelidikan berbanding novel.", en: "I prefer reading research journals over novels." },
    { category: "work", trait: "stem", bm: "Pekerjaan ideal saya melibatkan analisis data berbanding interaksi sosial.", en: "My ideal job involves data analysis rather than social interaction." },

    // Kecenderungan: SOCIAL (Khidmat Masyarakat, Pendidikan, Kesihatan)
    { category: "work", trait: "social", bm: "Saya lebih gembira bekerja dalam bidang khidmat masyarakat.", en: "I am happier working in social services." },
    { category: "work", trait: "social", bm: "Saya berasa puas apabila dapat merawat atau menjaga orang yang sakit.", en: "I feel fulfilled when I can treat or care for the sick." },
    { category: "work", trait: "social", bm: "Kerjaya sebagai pendidik atau kaunselor sangat sesuai dengan jiwa saya.", en: "A career as an educator or counselor suits my soul perfectly." },
    { category: "work", trait: "social", bm: "Saya sanggup bekerja di kawasan pendalaman untuk membantu mereka yang memerlukan.", en: "I am willing to work in rural areas to help those in need." },
    { category: "work", trait: "social", bm: "Memahami tingkah laku dan psikologi manusia adalah minat utama saya.", en: "Understanding human behavior and psychology is my main interest." },
    { category: "work", trait: "social", bm: "Pekerjaan saya mesti memberi impak positif yang langsung kepada masyarakat.", en: "My job must have a direct positive impact on society." },
    { category: "work", trait: "social", bm: "Saya lebih suka bekerja secara rapat dengan orang ramai setiap hari.", en: "I prefer working closely with people every day." },

    // Kecenderungan: ART (Seni, Komunikasi, Kreativiti)
    { category: "work", trait: "art", bm: "Saya lebih suka kerja yang memerlukan kreativiti bebas.", en: "I prefer work that requires free creativity." },
    { category: "work", trait: "art", bm: "Mereka bentuk grafik, fesyen, atau hiasan dalaman sangat mengujakan saya.", en: "Designing graphics, fashion, or interiors highly excites me." },
    { category: "work", trait: "art", bm: "Saya berbakat dalam bidang penulisan, lakonan, atau pengacaraan.", en: "I am talented in writing, acting, or hosting." },
    { category: "work", trait: "art", bm: "Mencipta muzik atau kandungan media sosial adalah kepakaran saya.", en: "Creating music or social media content is my expertise." },
    { category: "work", trait: "art", bm: "Saya sangat peka terhadap estetika dan nilai seni dalam sesuatu produk.", en: "I am highly sensitive to the aesthetics and artistic value of a product." },
    { category: "work", trait: "art", bm: "Kerja yang terlalu berstruktur dan rutin akan membunuh semangat saya.", en: "Work that is too structured and routine will kill my spirit." },
    { category: "work", trait: "art", bm: "Saya mahu kerjaya yang membolehkan saya mengekspresikan diri sepenuhnya.", en: "I want a career that allows me to express myself fully." }
    // Tambah baki 26 soalan WORK TENDENCY di sini...
];

let currentLang = 'bm';
let currentQuestionIndex = 0;
let answerHistory = [];
let timerInterval;
let timeLeft = 10;
let myChart = null;

// --- FUNGSI BAHASA & LOGIN ---
// (Kekalkan fungsi sama macam sebelum ini)
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

// --- FUNGSI UJIAN & TIMER ---
function startQuiz() {
    questions.sort(() => Math.random() - 0.5); // Rawak semua 90 soalan
    currentQuestionIndex = 0;
    answerHistory = [];
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

    document.getElementById('btnBack').style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    resetTimer();
}

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

function answerQuestion(isAgree) {
    clearInterval(timerInterval);
    answerHistory[currentQuestionIndex] = isAgree;
    currentQuestionIndex++;
    showQuestion();
}

function goBack() {
    if (currentQuestionIndex > 0) {
        clearInterval(timerInterval);
        currentQuestionIndex--;
        showQuestion();
    }
}

// --- FUNGSI KEPUTUSAN AKHIR (MATRIKS BERASINGAN) ---
function endQuiz() {
    document.getElementById('quizScreen').classList.remove('active');
    document.getElementById('resultScreen').classList.add('active');

    // 1. Sediakan objek pemarkahan kosong
    let scores = {
        dope: { eagle: 0, owl: 0, dove: 0, peacock: 0 },
        lead: { autocratic: 0, analytical: 0, democratic: 0, visionary: 0 },
        work: { management: 0, stem: 0, social: 0, art: 0 }
    };

    // 2. Kira markah berdasarkan sejarah jawapan dan kategori soalan
    for (let i = 0; i < answerHistory.length; i++) {
        if (answerHistory[i] === true) {
            let cat = questions[i].category;
            let trait = questions[i].trait;
            scores[cat][trait]++;
        }
    }

    // 3. Tentukan pemenang (Trait tertinggi) untuk setiap kategori
    const getHighestTrait = (categoryScores) => {
        return Object.keys(categoryScores).reduce((a, b) => categoryScores[a] > categoryScores[b] ? a : b);
    };

    let topDope = getHighestTrait(scores.dope);
    let topLead = getHighestTrait(scores.lead);
    let topWork = getHighestTrait(scores.work);

    // 4. Paparkan ke skrin (Format teks untuk kesesuaian BM/EN boleh dilaraskan)
    document.getElementById('resDope').innerText = topDope.toUpperCase();
    document.getElementById('resLeadership').innerText = topLead.toUpperCase();
    document.getElementById('resWork').innerText = topWork.toUpperCase();

    // 5. Lukis Spider Chart
    drawSpiderChart(scores);
}

// --- FUNGSI SPIDER CHART UNTUK DOPE ---
function drawSpiderChart(scores) {
    const ctx = document.getElementById('spiderChart').getContext('2d');
    
    if (myChart !== null) { myChart.destroy(); }

    myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            // Label khusus untuk DOPE
            labels: ['EAGLE', 'OWL', 'DOVE', 'PEACOCK'],
            datasets: [{
                label: 'Skor Personaliti DOPE',
                data: [
                    scores.dope.eagle, 
                    scores.dope.owl, 
                    scores.dope.dove, 
                    scores.dope.peacock
                ],
                backgroundColor: 'rgba(242, 169, 0, 0.4)', // UniKL Yellow
                borderColor: '#F2A900',
                pointBackgroundColor: '#1B2956',
                pointBorderColor: '#fff'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 8 // Anggaran 30 soalan / 4 ciri = ~7.5 soalan setiap ciri
                }
            }
        }
    });
}

// Initialize
updateUIText();

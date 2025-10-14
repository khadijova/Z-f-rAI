// HTML elementlərini seçirik
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const aiResponse = document.getElementById('ai-response');

// Əsas funksiyanı təyin edirik
function getAiResponse() {
    // 1. İstifadəçinin sualını alırıq
    const question = userInput.value.trim().toLowerCase();

    if (question === "") {
        aiResponse.innerHTML = "<p style='color: var(--az-red);'>Zəhmət olmasa, tarixi sualınızı daxil edin.</p>";
        return;
    }

    // 2. Cavabı saxlayacaq dəyişən
    let responseText = "";
    
    // 3. Suallara əsasən cavab məntiqini qururuq (DEMO)
    if (question.includes("qarabağ xanlığı")) {
        responseText = "Qarabağ xanlığı 18-ci əsrin ortalarında, 1747-ci ildə Pənahəli xan Cavanşir tərəfindən qurulmuşdur. Xanlığın paytaxtı Şuşa qalası idi. O, Azərbaycanın ən güclü və mühüm xanlıqlarından biri olmuşdur.";
    } else if (question.includes("xocalı")) {
        responseText = "Xocalı soyqırımı 1992-ci ilin fevral ayının 25-dən 26-a keçən gecə Ermənistan silahlı qüvvələri tərəfindən Xocalı şəhərində törədilmiş və Azərbaycan tarixində qanlı iz buraxmış faciədir.";
    } else if (question.includes("bakı xanlığı")) {
        responseText = "Bakı xanlığı 18-ci əsrin ortalarında yaranmışdır. Mərkəzi Bakı şəhəri olmaqla, Xəzər dənizinin mühüm ticarət nöqtələrindən biri idi. Xanlığın tarixi Mirzə Məhəmməd xan dövrü ilə xüsusilə əlaqəlidir.";
    } else if (question.includes("28 may")) {
        responseText = "28 May 1918-ci il, Azərbaycan Xalq Cümhuriyyətinin (AXC) yarandığı gündür. Bu, müsəlman şərqində ilk dünyəvi demokratik respublika idi və bizim milli qürur günümüzdür.";
    } else if (question.includes("salam") || question.includes("necə")) {
        responseText = "Salam! Mən ZəfərAI - Azərbaycan tarixi üzrə Sizin şəxsi bələdçiniz. Tarix, mədəniyyət və zəfərlərimiz haqqında nə soruşmaq istərdiniz?";
    } else {
        responseText = "Maraqlı sualdır! Mən hələ ki, demo rejimdəyəm. Zəhmət olmasa, Qarabağ, Xocalı və ya Bakı xanlığı ilə bağlı bir sual verin.";
    }

    // 4. Cavabı ekranda göstəririk
    aiResponse.innerHTML = `<p><strong>ZəfərAI:</strong> ${responseText}</p>`;
    userInput.value = ""; // İnput sahəsini təmizləyirik
}

// Düyməyə klikləmə hadisəsini əlavə edirik
submitBtn.addEventListener('click', getAiResponse);

// Enter düyməsini basmaqla da sual göndərmə imkanı əlavə edirik
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getAiResponse();
    }
});

// Demo interfeysinin başlanğıc mesajı
aiResponse.innerHTML = "<p><strong>ZəfərAI:</strong> Xoş gəldiniz! Mənə Azərbaycan tarixi haqqında suallar verə bilərsiniz.</p>";

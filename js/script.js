function calculateBMI() {
    // Ambil nilai input
    const berat = parseFloat(document.getElementById('berat').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value) / 100; // Convert cm to meters

    // Hitung BMI
    const bmi = (berat / (tinggi * tinggi)).toFixed(1);

    // Temukan elemen yang ingin di-update
    const bmiCategory = document.getElementById('bmi-category');
    const bmiValue = document.getElementById('bmi-value');
    const bmiMessage = document.getElementById('bmi-message');
    const bmiDescriptionText = document.getElementById('bmi-description-text');

    // Tentukan interpretasi berdasarkan nilai BMI
    if (bmi < 18.5) {
        bmiCategory.textContent = "Kekurangan Berat Badan";
        bmiValue.textContent = bmi;
        bmiMessage.textContent = "Anda memiliki kekurangan berat badan";
        bmiDescriptionText.textContent = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory.textContent = "Berat Badan Normal";
        bmiValue.textContent = bmi;
        bmiMessage.textContent = "Anda memiliki berat badan normal";
        bmiDescriptionText.textContent = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory.textContent = "Berat Badan Lebih";
        bmiValue.textContent = bmi;
        bmiMessage.textContent = "Anda memiliki berat badan berlebih";
        bmiDescriptionText.textContent = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    } else {
        bmiCategory.textContent = "Obesitas";
        bmiValue.textContent = bmi;
        bmiMessage.textContent = "Anda memiliki obesitas";
        bmiDescriptionText.textContent = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    }
}

// Add the following functions for the consultation and registration buttons
function consultGizi() {
    alert("Konsultasi Ahli Gizi Via Aplikasi");
}

function registerGizi() {
    alert("Registrasi Online Ahli Gizi");
}

function konsuldokter() {
    alert("Konsul Dokter Via Aplikasi");
}

function regisonline() {
    alert("Registaris Online Sekarang");
}

function downloadGooglePlay() {
    // Open Google Play store link
    window.open("https://play.google.com/store/apps/details?id=com.example.yourapp", "_blank");
}

function downloadAppStore() {
    // Open App Store link
    window.open("https://itunes.apple.com/us/app/yourapp/id123456789", "_blank");
}

function downloadBMIResult() {
    const bmiCategory = document.getElementById('bmi-category').textContent;
    const bmiValue = document.getElementById('bmi-value').textContent;
    const bmiMessage = document.getElementById('bmi-message').textContent;

    const text = `Kategori: ${bmiCategory}\nBMI: ${bmiValue}\nPesan: ${bmiMessage}`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Hasil_BMI.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

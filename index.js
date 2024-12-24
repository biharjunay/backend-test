const prompt = require('prompt-sync')()
function hitungGaji(jamKerja, tarifPerJam) {
    const jamNormal = 40;
    const tarifLembur = 1.5 * tarifPerJam;
    let gaji;
    
    if (jamKerja <= jamNormal) {
        gaji = jamKerja * tarifPerJam;
    } else {
        const jamLembur = jamKerja - jamNormal;
        gaji = (jamNormal * tarifPerJam) + (jamLembur * tarifLembur);
    }
    
    return gaji;
}

try {
    const jamKerja = parseFloat(prompt("Masukkan jumlah jam kerja dalam seminggu:"));
    const tarifPerJam = parseFloat(prompt("Masukkan tarif per jam:"));
    
    if (isNaN(jamKerja) || isNaN(tarifPerJam)) {
        throw new Error("Input tidak valid. Harap masukkan angka yang benar.");
    }
    
    const gaji = hitungGaji(jamKerja, tarifPerJam);
    console.log(`Gaji total karyawan: Rp${gaji.toFixed(2)}`);
} catch (error) {
    console.error(error.message);
}
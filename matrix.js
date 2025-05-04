// Simple Matrix rain effect with 1s and 0s
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size to window size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const fontSize = 20;
const columns = Math.floor(window.innerWidth / fontSize);
let drops = [];

// Mysterious symbols for Matrix rain
const symbols = [
    'ｱ','ｲ','ｳ','ｴ','ｵ','ｶ','ｷ','ｸ','ｹ','ｺ',
    'ｻ','ｼ','ｽ','ｾ','ｿ','ﾀ','ﾁ','ﾂ','ﾃ','ﾄ',
    'ﾅ','ﾆ','ﾇ','ﾈ','ﾉ','ﾊ','ﾋ','ﾌ','ﾍ','ﾎ',
    'ﾏ','ﾐ','ﾑ','ﾒ','ﾓ','ﾔ','ﾕ','ﾖ','ﾗ','ﾘ','ﾙ','ﾚ','ﾛ','ﾜ','ﾝ',
    'α','β','γ','δ','ε','ζ','η','θ','λ','μ','ξ','π','σ','φ','ψ','ω',
    'Ω','Σ','Ψ','Ξ','∑','∇','∂','∞','≡','≠','∫','∴','∵','∩','∪',
    '¤','§','¶','†','‡','•',
    '∆','∇','∈','∉','∋','∌','⊂','⊃','⊆','⊇','⊥','⊨','⊰','⊱',
];

function initializeDrops() {
    drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * -canvas.height;
    }
}
initializeDrops();
window.addEventListener('resize', initializeDrops);

function drawMatrix() {
    ctx.fillStyle = 'rgba(26, 27, 38, 0.5)'; // More opaque for a short trail
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + 'px monospace';
    ctx.fillStyle = '#00ff41'; // Matrix green
    for (let i = 0; i < drops.length; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i] += 0.3 + Math.random() * 0.2;
    }
    requestAnimationFrame(drawMatrix);
}
drawMatrix(); 
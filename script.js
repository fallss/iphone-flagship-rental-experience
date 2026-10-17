/* ==========================================================================
   PRORENT STUDIO - JAVASCRIPT ENGINE (REAL 3D MODEL & MINIMALIST LUXURY)
   Featuring Real GLTF iPhone 15 Pro 3D Model, Studio Lighting,
   Refined Sound FX, GSAP ScrollTrigger, Comparison & Checkout
   ========================================================================== */

// ==========================================
// 1. DATA STORE
// ==========================================
const products = [
    {
        id: 1, brand: "Apple", name: "iPhone 15 Pro Max 1TB", price: 195000, category: "ProMax", series: "iPhone 15 Pro Max", badge: "Tetraprism 5x Zoom",
        img: "iphone15_pro_natural.jpg",
        desc: "Layar 6.7\" Super Retina XDR ProMotion, bodi Grade 5 Titanium kelas aerospace, chip A17 Pro 3nm, dan zoom optik periskop 5x.",
        specs: {
            display: "6.7\" Super Retina XDR OLED, 120Hz ProMotion",
            chipset: "Apple A17 Pro (3nm)",
            ram: "8GB RAM",
            storage: "1TB Titanium Edition",
            camera: "Triple 48MP Fusion + 12MP Ultra + 12MP Tele 5x",
            battery: "4422 mAh (Fast Charge USB-C 10Gbps)",
            os: "iOS 17/18"
        },
        colors: ["#8a857b", "#2b3846", "#e2e4e7", "#1f2124"]
    },
    {
        id: 2, brand: "Apple", name: "iPhone 15 Pro Max 512GB", price: 185000, category: "ProMax", series: "iPhone 15 Pro Max", badge: "Perekaman ProRes",
        img: "iphone15_pro_blue.jpg",
        desc: "Warna Blue Titanium elegan dengan Action Button kustom, chip A17 Pro, dan perekaman video Log ProRes 4K 60fps ke drive eksternal.",
        specs: {
            display: "6.7\" Super Retina XDR OLED, 120Hz ProMotion",
            chipset: "Apple A17 Pro (3nm)",
            ram: "8GB RAM",
            storage: "512GB Titanium",
            camera: "Triple 48MP Fusion Optics System + Tele 5x",
            battery: "4422 mAh",
            os: "iOS 17/18"
        },
        colors: ["#2b3846", "#8a857b", "#e2e4e7", "#1f2124"]
    },
    {
        id: 3, brand: "Apple", name: "iPhone 15 Pro Max 256GB", price: 175000, category: "ProMax", series: "iPhone 15 Pro Max", badge: "Best Seller Event",
        img: "iphone15_pro_white.jpg",
        desc: "Kombinasi White Titanium bersih monokrom, Dynamic Island interaktif, dan daya tahan baterai terlama untuk konser & traveling.",
        specs: {
            display: "6.7\" Super Retina XDR OLED, 120Hz ProMotion",
            chipset: "Apple A17 Pro (3nm)",
            ram: "8GB RAM",
            storage: "256GB Titanium",
            camera: "48MP Utama + 12MP Ultra Wide + 12MP Tele 5x",
            battery: "4422 mAh (USB-C)",
            os: "iOS 17/18"
        },
        colors: ["#e2e4e7", "#8a857b", "#2b3846", "#1f2124"]
    },
    {
        id: 4, brand: "Apple", name: "iPhone 15 Pro Max 256GB Black", price: 175000, category: "ProMax", series: "iPhone 15 Pro Max", badge: "Stealth Titanium",
        img: "iphone15_pro_black.jpg",
        desc: "Tampilan Black Titanium pekat mewah berwibawa dengan grafis Ray Tracing bertenaga A17 Pro untuk event profesional & dokumentasi.",
        specs: {
            display: "6.7\" Super Retina XDR OLED, 120Hz ProMotion",
            chipset: "Apple A17 Pro (3nm)",
            ram: "8GB RAM",
            storage: "256GB Titanium",
            camera: "48MP Fusion + 12MP Ultra + 12MP Tele 5x",
            battery: "4422 mAh",
            os: "iOS 17/18"
        },
        colors: ["#1f2124", "#8a857b", "#2b3846", "#e2e4e7"]
    },
    {
        id: 5, brand: "Apple", name: "iPhone 15 Pro 512GB", price: 160000, category: "Pro", series: "iPhone 15 Pro", badge: "Studio 3D Unit",
        img: "iphone15_pro_natural.jpg",
        desc: "Bodi kompak 6.1 inci Grade 5 Titanium berbobot ringan, chip A17 Pro, Action Button, dan zoom 3x tajam untuk konten kreator.",
        specs: {
            display: "6.1\" Super Retina XDR OLED, 120Hz ProMotion",
            chipset: "Apple A17 Pro (3nm)",
            ram: "8GB RAM",
            storage: "512GB Titanium",
            camera: "48MP Utama + 12MP Ultra Wide + 12MP Tele 3x",
            battery: "3274 mAh",
            os: "iOS 17/18"
        },
        colors: ["#8a857b", "#2b3846", "#e2e4e7", "#1f2124"]
    },
    {
        id: 6, brand: "Apple", name: "iPhone 15 Pro 256GB Blue", price: 145000, category: "Pro", series: "iPhone 15 Pro", badge: "Favorit Konser",
        img: "iphone15_pro_blue.jpg",
        desc: "Performa kamera 48MP dengan portrait generasi baru fokus dinamis, mikrofon studio isolasi suara, dan layar ProMotion 120Hz.",
        specs: {
            display: "6.1\" Super Retina XDR OLED, 120Hz ProMotion",
            chipset: "Apple A17 Pro (3nm)",
            ram: "8GB RAM",
            storage: "256GB Titanium",
            camera: "48MP Utama + 12MP Ultra Wide + 12MP Tele 3x",
            battery: "3274 mAh",
            os: "iOS 17/18"
        },
        colors: ["#2b3846", "#8a857b", "#e2e4e7", "#1f2124"]
    },
    {
        id: 7, brand: "Apple", name: "iPhone 15 Pro 256GB White", price: 145000, category: "Pro", series: "iPhone 15 Pro", badge: "Kompak Elegan",
        img: "iphone15_pro_white.jpg",
        desc: "White Titanium satin halus, Dynamic Island multitasking responsif, dan pengisian daya universal USB-C 3.0 kecepatan tinggi.",
        specs: {
            display: "6.1\" Super Retina XDR OLED, 120Hz ProMotion",
            chipset: "Apple A17 Pro (3nm)",
            ram: "8GB RAM",
            storage: "256GB Titanium",
            camera: "48MP Utama + 12MP Ultra Wide + 12MP Tele 3x",
            battery: "3274 mAh",
            os: "iOS 17/18"
        },
        colors: ["#e2e4e7", "#8a857b", "#2b3846", "#1f2124"]
    },
    {
        id: 8, brand: "Apple", name: "iPhone 15 Pro 128GB Black", price: 135000, category: "Pro", series: "iPhone 15 Pro", badge: "Best Value Pro",
        img: "iphone15_pro_black.jpg",
        desc: "Pengalaman sewa iPhone Pro Titanium paling terjangkau. Baterai prima, unit 100% original, dan kamera 48MP photonic engine.",
        specs: {
            display: "6.1\" Super Retina XDR OLED, 120Hz ProMotion",
            chipset: "Apple A17 Pro (3nm)",
            ram: "8GB RAM",
            storage: "128GB Titanium",
            camera: "48MP Utama + 12MP Ultra Wide + 12MP Tele 3x",
            battery: "3274 mAh",
            os: "iOS 17/18"
        },
        colors: ["#1f2124", "#8a857b", "#2b3846", "#e2e4e7"]
    },
    {
        id: 9, brand: "Apple", name: "iPhone 15 Plus 256GB Pink", price: 135000, category: "Plus", series: "iPhone 15 Plus", badge: "Baterai Juara",
        img: "iphone15_pink.jpg",
        desc: "Layar besar 6.7 inci dengan masa pakai baterai terpanjang, kaca belakang tembus warna pink pastel, dan Dynamic Island.",
        specs: {
            display: "6.7\" Super Retina XDR OLED",
            chipset: "Apple A16 Bionic (4nm)",
            ram: "6GB RAM",
            storage: "256GB",
            camera: "48MP Fusion 2x Telephoto + 12MP Ultra Wide",
            battery: "4383 mAh (Maksimal)",
            os: "iOS 17/18"
        },
        colors: ["#f7d5e6", "#d3e2f5", "#d9e8df", "#1e2022"]
    },
    {
        id: 10, brand: "Apple", name: "iPhone 15 Plus 128GB Blue", price: 125000, category: "Plus", series: "iPhone 15 Plus", badge: "Layar Besar 6.7\"",
        img: "iphone15_blue.jpg",
        desc: "Kombinasi layar luas 6.7 inci dan daya tahan baterai seharian penuh untuk streaming, event pameran, dan navigasi perjalanan.",
        specs: {
            display: "6.7\" Super Retina XDR OLED",
            chipset: "Apple A16 Bionic (4nm)",
            ram: "6GB RAM",
            storage: "128GB",
            camera: "48MP Fusion + 12MP Ultra Wide",
            battery: "4383 mAh",
            os: "iOS 17/18"
        },
        colors: ["#d3e2f5", "#f7d5e6", "#d9e8df", "#1e2022"]
    },
    {
        id: 11, brand: "Apple", name: "iPhone 15 Plus 128GB Black", price: 125000, category: "Plus", series: "iPhone 15 Plus", badge: "Bisnis & Wisata",
        img: "iphone15_pro_black.jpg",
        desc: "Bodi kokoh bertepi kontur nyaman, baterai raksasa, Dynamic Island, dan port USB-C universal yang fleksibel untuk segala acara.",
        specs: {
            display: "6.7\" Super Retina XDR OLED",
            chipset: "Apple A16 Bionic (4nm)",
            ram: "6GB RAM",
            storage: "128GB",
            camera: "48MP Fusion + 12MP Ultra Wide",
            battery: "4383 mAh",
            os: "iOS 17/18"
        },
        colors: ["#1e2022", "#d3e2f5", "#f7d5e6", "#d9e8df"]
    },
    {
        id: 12, brand: "Apple", name: "iPhone 15 256GB Pink", price: 115000, category: "Standard", series: "iPhone 15", badge: "Paling Estetik",
        img: "iphone15_pink.jpg",
        desc: "Warna pink pastel cantik dengan kaca belakang berinfusi warna, Dynamic Island, dan kamera utama 48MP resolusi super tajam.",
        specs: {
            display: "6.1\" Super Retina XDR OLED, 2000 nits",
            chipset: "Apple A16 Bionic (4nm)",
            ram: "6GB RAM",
            storage: "256GB",
            camera: "48MP Utama + 12MP Ultra Wide + 2x Telephoto",
            battery: "3349 mAh",
            os: "iOS 17/18"
        },
        colors: ["#f7d5e6", "#d3e2f5", "#d9e8df", "#fbf5cf", "#1e2022"]
    },
    {
        id: 13, brand: "Apple", name: "iPhone 15 128GB Blue", price: 100000, category: "Standard", series: "iPhone 15", badge: "Best Value Sewa",
        img: "iphone15_blue.jpg",
        desc: "Warna biru cerah berkarakter dengan port USB-C, Dynamic Island untuk notifikasi interaktif, dan performa mulus A16 Bionic.",
        specs: {
            display: "6.1\" Super Retina XDR OLED",
            chipset: "Apple A16 Bionic (4nm)",
            ram: "6GB RAM",
            storage: "128GB",
            camera: "48MP Utama + 12MP Ultra Wide",
            battery: "3349 mAh",
            os: "iOS 17/18"
        },
        colors: ["#d3e2f5", "#f7d5e6", "#d9e8df", "#1e2022"]
    },
    {
        id: 14, brand: "Apple", name: "iPhone 15 128GB Green", price: 100000, category: "Standard", series: "iPhone 15", badge: "Segar & Unik",
        img: "iphone15_green.jpg",
        desc: "Sentuhan hijau mint lembut, tepian bodi melengkung berkontur nyaman digenggam, dan sertifikasi tahan air IP68.",
        specs: {
            display: "6.1\" Super Retina XDR OLED",
            chipset: "Apple A16 Bionic (4nm)",
            ram: "6GB RAM",
            storage: "128GB",
            camera: "48MP Utama + 12MP Ultra Wide",
            battery: "3349 mAh",
            os: "iOS 17/18"
        },
        colors: ["#d9e8df", "#d3e2f5", "#f7d5e6", "#1e2022"]
    },
    {
        id: 15, brand: "Apple", name: "iPhone 15 128GB Yellow", price: 100000, category: "Standard", series: "iPhone 15", badge: "Ceria Liburan",
        img: "iphone15_yellow.jpg",
        desc: "Kuning pastel hangat cerah, sempurna untuk dokumentasi liburan dan traveling dengan kamera 2x optik telephoto.",
        specs: {
            display: "6.1\" Super Retina XDR OLED",
            chipset: "Apple A16 Bionic (4nm)",
            ram: "6GB RAM",
            storage: "128GB",
            camera: "48MP Utama + 12MP Ultra Wide",
            battery: "3349 mAh",
            os: "iOS 17/18"
        },
        colors: ["#fbf5cf", "#f7d5e6", "#d3e2f5", "#1e2022"]
    },
    {
        id: 16, brand: "Apple", name: "iPhone 15 128GB Black", price: 100000, category: "Standard", series: "iPhone 15", badge: "Paling Fleksibel",
        img: "iphone15_pro_black.jpg",
        desc: "Pilihan netral serbaguna untuk kebutuhan kantor, event ujian, atau daily driver sementara dengan tarif sewa terjangkau.",
        specs: {
            display: "6.1\" Super Retina XDR OLED",
            chipset: "Apple A16 Bionic (4nm)",
            ram: "6GB RAM",
            storage: "128GB",
            camera: "48MP Utama + 12MP Ultra Wide",
            battery: "3349 mAh",
            os: "iOS 17/18"
        },
        colors: ["#1e2022", "#d3e2f5", "#f7d5e6", "#d9e8df"]
    }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
let cart = JSON.parse(localStorage.getItem('prorent_cart')) || JSON.parse(localStorage.getItem('ponestore_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('prorent_wishlist')) || JSON.parse(localStorage.getItem('ponestore_wishlist')) || [];
let activeCategory = 'All';
let activeBrand = 'All';
let activeStorage = 'All';
let searchQuery = '';
let currentSort = 'featured';
let appliedCoupon = null;
let soundEnabled = true;

// 3D Engine State
let hero3D = {
    scene: null,
    camera: null,
    renderer: null,
    phoneGroup: null,
    tintMaterials: [],
    screenMaterial: null,
    currentAngle: 'isometric',
    isDragging: false,
    prevPointer: { x: 0, y: 0 },
    autoSpin: true,
    targetRotation: { x: 0.16, y: -0.42 }, // Iconic Studio 3/4 Perspective: OLED screen & titanium frame
    currentRotation: { x: 0.16, y: -0.42 },
    currentColor: "#8a857b",
    preloadedWallpapers: {}
};

let modal3D = {
    scene: null,
    camera: null,
    renderer: null,
    phoneGroup: null,
    tintMaterials: [],
    screenMaterial: null,
    currentAngle: 'isometric',
    isDragging: false,
    prevPointer: { x: 0, y: 0 },
    autoSpin: true,
    targetRotation: { x: 0.16, y: -0.42 },
    currentRotation: { x: 0.16, y: -0.42 },
    currentColor: "#8a857b",
    isAnimating: false,
    clock: null
};

// ==========================================
// 3. REFINED AUDIO SYNTHESIZER (INSTANT & SEAMLESS)
// ==========================================
class SoundFX {
    constructor() {
        this.ctx = null;
    }

    init() {
        if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContextClass();
        }
    }

    playClick() {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(250, this.ctx.currentTime + 0.04);

        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.04);
    }

    playChime() {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const now = this.ctx.currentTime;
        [523.25, 783.99].forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.07);

            gain.gain.setValueAtTime(0.09, now + idx * 0.07);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.2);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + idx * 0.07);
            osc.stop(now + idx * 0.07 + 0.2);
        });
    }

    playWhoosh() {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(180, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(360, this.ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
    }
}

const audioFX = new SoundFX();

// Auto-unlock Web Audio context on first user interaction
function autoUnlockAudio() {
    audioFX.init();
    if (audioFX.ctx && audioFX.ctx.state === 'suspended') {
        audioFX.ctx.resume();
    }
    window.removeEventListener('pointerdown', autoUnlockAudio);
    window.removeEventListener('touchstart', autoUnlockAudio);
    window.removeEventListener('click', autoUnlockAudio);
    window.removeEventListener('keydown', autoUnlockAudio);
}
window.addEventListener('pointerdown', autoUnlockAudio, { passive: true });
window.addEventListener('touchstart', autoUnlockAudio, { passive: true });
window.addEventListener('click', autoUnlockAudio, { passive: true });
window.addEventListener('keydown', autoUnlockAudio, { passive: true });

// ==========================================
// 4. FORMATTERS & HELPERS
// ==========================================
const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
};

const formatRentalPrice = (price) => {
    return `${formatPrice(price)} / hari`;
};

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    toastMsg.innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

// ==========================================
// 5. REAL 3D MODEL LOADER WITH PROCEDURAL FALLBACK
// ==========================================
function createMinimalistScreenTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Minimalist Studio Wallpaper (Deep Titanium Obsidian)
    const gradient = ctx.createLinearGradient(0, 0, 512, 1024);
    gradient.addColorStop(0, '#0c0d10');
    gradient.addColorStop(0.5, '#15171c');
    gradient.addColorStop(1, '#08080a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 1024);

    // Subtle Architectural Geometric Ring
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(256, 512, 180, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.beginPath();
    ctx.arc(256, 512, 280, 0, Math.PI * 2);
    ctx.stroke();

    // Dynamic Island at top
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.roundRect(180, 36, 152, 40, 20);
    ctx.fill();

    // Camera dot
    ctx.fillStyle = '#111317';
    ctx.beginPath();
    ctx.arc(296, 56, 9, 0, Math.PI * 2);
    ctx.fill();

    // Minimalist Clock
    ctx.textAlign = 'center';
    ctx.font = '600 90px "Outfit", sans-serif';
    ctx.fillStyle = '#f5f5f7';
    ctx.fillText('09:41', 256, 360);

    ctx.font = '500 20px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#86868b';
    ctx.fillText('Wednesday, October 14', 256, 405);

    // Home bar
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(180, 980, 152, 6, 3);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
}

function buildProceduralPhone(primaryColorHex = "#8a857b") {
    const group = new THREE.Group();

    // 1. Materials
    const frameMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(primaryColorHex),
        metalness: 0.90,
        roughness: 0.24
    });

    const backMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(primaryColorHex),
        metalness: 0.32,
        roughness: 0.40
    });

    const screenTexture = createMinimalistScreenTexture(primaryColorHex);
    const screenMaterial = new THREE.MeshStandardMaterial({
        map: screenTexture,
        roughness: 0.12,
        metalness: 0.08,
        emissive: new THREE.Color(0xffffff),
        emissiveMap: screenTexture,
        emissiveIntensity: 0.32
    });

    const lensRingMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(primaryColorHex),
        metalness: 0.95,
        roughness: 0.15
    });

    const lensGlassMaterial = new THREE.MeshStandardMaterial({
        color: 0x05070a,
        metalness: 0.92,
        roughness: 0.06
    });

    // 2. Main Phone Body (Extruded Rounded Chassis)
    const shape = new THREE.Shape();
    const width = 2.15;
    const height = 4.4;
    const radius = 0.34;
    const x = -width / 2;
    const y = -height / 2;

    shape.moveTo(x + radius, y);
    shape.lineTo(x + width - radius, y);
    shape.quadraticCurveTo(x + width, y, x + width, y + radius);
    shape.lineTo(x + width, y + height - radius);
    shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    shape.lineTo(x + radius, y + height);
    shape.quadraticCurveTo(x, y + height, x, y + height - radius);
    shape.lineTo(x, y + radius);
    shape.quadraticCurveTo(x, y, x + radius, y);

    const extrudeSettings = {
        depth: 0.2,
        bevelEnabled: true,
        bevelSegments: 6,
        steps: 1,
        bevelSize: 0.028,
        bevelThickness: 0.028
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();
    const bodyMesh = new THREE.Mesh(geometry, frameMaterial);
    group.add(bodyMesh);

    // 3. Front Screen Glass
    const screenShape = new THREE.Shape();
    const sw = width - 0.12;
    const sh = height - 0.12;
    const sRad = radius - 0.04;
    const sx = -sw / 2;
    const sy = -sh / 2;

    screenShape.moveTo(sx + sRad, sy);
    screenShape.lineTo(sx + sw - sRad, sy);
    screenShape.quadraticCurveTo(sx + sw, sy, sx + sw, sy + sRad);
    screenShape.lineTo(sx + sw, sy + sh - sRad);
    screenShape.quadraticCurveTo(sx + sw, sy + sh, sx + sw - sRad, sy + sh);
    screenShape.lineTo(sx + sRad, sy + sh);
    screenShape.quadraticCurveTo(sx, sy + sh, sx, sy + sh - sRad);
    screenShape.lineTo(sx, sy + sRad);
    screenShape.quadraticCurveTo(sx, sy, sx + sRad, sy);

    const screenGeom = new THREE.ShapeGeometry(screenShape);
    const screenMesh = new THREE.Mesh(screenGeom, screenMaterial);
    screenMesh.position.z = 0.132;
    group.add(screenMesh);

    // 4. Back Cover Plate
    const backGeom = new THREE.ShapeGeometry(screenShape);
    const backMesh = new THREE.Mesh(backGeom, backMaterial);
    backMesh.position.z = -0.132;
    backMesh.rotation.y = Math.PI;
    group.add(backMesh);

    // Apple Ring Emblem on Back
    const logoPlate = new THREE.Mesh(
        new THREE.RingGeometry(0.12, 0.18, 32),
        new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.92, roughness: 0.12 })
    );
    logoPlate.position.set(0, 0.25, -0.133);
    logoPlate.rotation.y = Math.PI;
    group.add(logoPlate);

    // 5. Camera Island Bump Plateau
    const bumpWidth = 1.08;
    const bumpHeight = 1.08;
    const bumpRad = 0.22;
    const bx = -bumpWidth / 2;
    const by = -bumpHeight / 2;

    const bumpShape = new THREE.Shape();
    bumpShape.moveTo(bx + bumpRad, by);
    bumpShape.lineTo(bx + bumpWidth - bumpRad, by);
    bumpShape.quadraticCurveTo(bx + bumpWidth, by, bx + bumpWidth, by + bumpRad);
    bumpShape.lineTo(bx + bumpWidth, by + bumpHeight - bumpRad);
    bumpShape.quadraticCurveTo(bx + bumpWidth, by + bumpHeight, bx + bumpWidth - bumpRad, by + bumpHeight);
    bumpShape.lineTo(bx + bumpRad, by + bumpHeight);
    bumpShape.quadraticCurveTo(bx, by + bumpHeight, bx, by + bumpHeight - bumpRad);
    bumpShape.lineTo(bx, by + bumpRad);
    bumpShape.quadraticCurveTo(bx, by, bx + bumpRad, by);

    const bumpExtrude = new THREE.ExtrudeGeometry(bumpShape, {
        depth: 0.05,
        bevelEnabled: true,
        bevelSegments: 4,
        bevelSize: 0.02,
        bevelThickness: 0.02
    });
    bumpExtrude.center();
    const bumpMesh = new THREE.Mesh(bumpExtrude, frameMaterial);
    bumpMesh.position.set(-0.42, 1.42, -0.16);
    bumpMesh.rotation.y = Math.PI;
    group.add(bumpMesh);

    // 6. Triple Camera Lenses
    const lensPositions = [
        [-0.64, 1.62],
        [-0.64, 1.20],
        [-0.20, 1.41]
    ];

    lensPositions.forEach(([lx, ly]) => {
        // Outer metallic bezel ring
        const outerRing = new THREE.Mesh(
            new THREE.CylinderGeometry(0.18, 0.18, 0.08, 32),
            lensRingMaterial
        );
        outerRing.rotation.x = Math.PI / 2;
        outerRing.position.set(lx, ly, -0.21);
        group.add(outerRing);

        // Inner dark optical glass
        const innerGlass = new THREE.Mesh(
            new THREE.CylinderGeometry(0.13, 0.13, 0.085, 32),
            lensGlassMaterial
        );
        innerGlass.rotation.x = Math.PI / 2;
        innerGlass.position.set(lx, ly, -0.212);
        group.add(innerGlass);

        // Blue reflection tint
        const blueTint = new THREE.Mesh(
            new THREE.CircleGeometry(0.065, 16),
            new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.75 })
        );
        blueTint.rotation.y = Math.PI;
        blueTint.position.set(lx, ly, -0.256);
        group.add(blueTint);
    });

    // Dual Tone TrueTone Flash & LiDAR
    const flashMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.065, 0.065, 0.02, 16),
        new THREE.MeshStandardMaterial({ color: 0xfff6dd, emissive: 0xffe680, emissiveIntensity: 0.4 })
    );
    flashMesh.rotation.x = Math.PI / 2;
    flashMesh.position.set(-0.20, 1.70, -0.19);
    group.add(flashMesh);

    const lidarMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.045, 0.045, 0.02, 16),
        new THREE.MeshStandardMaterial({ color: 0x111113, metalness: 0.8, roughness: 0.2 })
    );
    lidarMesh.rotation.x = Math.PI / 2;
    lidarMesh.position.set(-0.20, 1.14, -0.19);
    group.add(lidarMesh);

    // 7. Tactile Hardware Buttons
    const btnGeom = new THREE.BoxGeometry(0.04, 0.25, 0.08);
    const volumeUp = new THREE.Mesh(btnGeom, frameMaterial);
    volumeUp.position.set(-1.14, 1.15, 0);
    group.add(volumeUp);

    const volumeDown = new THREE.Mesh(btnGeom, frameMaterial);
    volumeDown.position.set(-1.14, 0.80, 0);
    group.add(volumeDown);

    const actionBtn = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.13, 0.08), frameMaterial);
    actionBtn.position.set(-1.14, 1.48, 0);
    group.add(actionBtn);

    const powerBtn = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.45, 0.08), frameMaterial);
    powerBtn.position.set(1.14, 1.0, 0);
    group.add(powerBtn);

    return {
        group,
        model: group,
        materials: { frameMaterial, backMaterial, screenMaterial, lensRingMaterial },
        tintMaterials: [frameMaterial, backMaterial, lensRingMaterial],
        screenMaterial: screenMaterial
    };
}

// ==========================================
// SHARED 3D IPHONE 15 ASSET & GLTF FACTORY
// ==========================================
const titaniumWallpapers = {
    "#8a857b": "iphone_15_pro_yellow.png", // Natural Titanium
    "#2b3846": "iphone_15_pro_blue.png",   // Blue Titanium
    "#e2e4e7": "iphone_15_pro_white.png",  // White Titanium
    "#1f2124": "iphone_15_pro_black.png"   // Black Titanium
};

function getWallpaperForColor(hex) {
    if (!hex) return 'iphone_15_pro_yellow.png';
    const lower = String(hex).toLowerCase();
    if (titaniumWallpapers[lower]) return titaniumWallpapers[lower];
    if (lower.startsWith('#2') || lower.startsWith('#1')) return 'iphone_15_pro_black.png';
    if (lower.startsWith('#e') || lower.startsWith('#d')) return 'iphone_15_pro_white.png';
    if (lower.startsWith('#3') || lower.startsWith('#4')) return 'iphone_15_pro_blue.png';
    return 'iphone_15_pro_yellow.png';
}

let cachedGLTFScene = null;
let gltfLoadPromise = null;

function loadIphone15GLTF() {
    if (cachedGLTFScene) {
        return Promise.resolve(cachedGLTFScene);
    }
    if (gltfLoadPromise) {
        return gltfLoadPromise;
    }

    gltfLoadPromise = new Promise((resolve, reject) => {
        if (typeof THREE.GLTFLoader !== 'function') {
            return reject(new Error('THREE.GLTFLoader is not available'));
        }

        const loader = new THREE.GLTFLoader();
        if (typeof THREE.DRACOLoader === 'function') {
            const dracoLoader = new THREE.DRACOLoader();
            dracoLoader.setDecoderPath('draco/');
            loader.setDRACOLoader(dracoLoader);
        }

        loader.load(
            'iphone.glb',
            (gltf) => {
                const realModel = gltf.scene;

                // Center model at origin
                const box = new THREE.Box3().setFromObject(realModel);
                const size = new THREE.Vector3();
                box.getSize(size);
                const center = new THREE.Vector3();
                box.getCenter(center);
                realModel.position.sub(center);

                // Scale to fit cleanly (~4.35 units height)
                const targetHeight = 4.35;
                const scale = targetHeight / (size.y || 15.9);
                realModel.scale.set(scale, scale, scale);

                // In iphone.glb, front screen mesh is oriented at -Z.
                // Rotate 180 deg (Math.PI) so front screen faces +Z directly towards camera!
                realModel.rotation.y = Math.PI;

                cachedGLTFScene = realModel;
                resolve(cachedGLTFScene);
            },
            undefined,
            (err) => {
                gltfLoadPromise = null;
                console.warn("Error loading iphone.glb:", err);
                reject(err);
            }
        );
    });

    return gltfLoadPromise;
}

function createIphone15GLTFInstance(targetColor = "#8a857b") {
    if (!cachedGLTFScene) return null;

    const clonedModel = cachedGLTFScene.clone(true);
    const tintMaterials = [];
    let screenMat = null;

    clonedModel.traverse((child) => {
        if (child.isMesh && child.material) {
            // Material deep clone so each instance (Hero, Modal, Catalog) is fully independent
            child.material = child.material.clone();
            child.castShadow = true;
            child.receiveShadow = true;

            const matName = child.material.name || '';

            // Front Screen material (pIJKfZsazmcpEiU in iPhone 15 Pro model)
            if (matName.includes('pIJKfZsazmcpEiU')) {
                screenMat = child.material;
                screenMat.color.setHex(0xffffff);
                screenMat.roughness = 0.12;
                screenMat.metalness = 0.05;

                const wallPath = getWallpaperForColor(targetColor);
                new THREE.TextureLoader().load(wallPath, (tex) => {
                    tex.flipY = false;
                    if (THREE.sRGBEncoding) tex.encoding = THREE.sRGBEncoding;
                    screenMat.map = tex;
                    screenMat.needsUpdate = true;
                });
            }

            // Titanium frame, backplate, and camera bezel materials
            if (matName.includes('dxCVrUCvYhjVxqy') || matName.includes('yhcAXNGcJWCqtIS') || matName.includes('mcPrzcBUcdqUybC') || matName.includes('oZRkkORNzkufnGD')) {
                child.material.color.set(targetColor);
                tintMaterials.push(child.material);
            }
        }
    });

    const wrapper = new THREE.Group();
    wrapper.add(clonedModel);

    return {
        wrapper,
        clonedModel,
        tintMaterials,
        screenMaterial: screenMat,
        setColor: (newHex) => {
            const target = new THREE.Color(newHex);
            tintMaterials.forEach(m => {
                if (m && m.color) {
                    gsap.to(m.color, { r: target.r, g: target.g, b: target.b, duration: 0.45 });
                }
            });
            if (screenMat) {
                const wallPath = getWallpaperForColor(newHex);
                new THREE.TextureLoader().load(wallPath, (tex) => {
                    tex.flipY = false;
                    if (THREE.sRGBEncoding) tex.encoding = THREE.sRGBEncoding;
                    screenMat.map = tex;
                    screenMat.needsUpdate = true;
                });
            }
        }
    };
}

// ==========================================
// 6. INITIALIZE HERO 3D SCENE (SPACIOUS STUDIO FRAMING)
// ==========================================
function getOptimalHeroCameraZ(width, height) {
    if (!width || !height) return 11.0;
    const aspect = width / height;
    
    // Target vertical fraction of phone (height: 4.35) in viewport
    // Generous breathing room: ~56% on desktop, ~58% on tablet, ~62% on mobile
    let targetVerticalRatio = 0.56;
    if (window.innerWidth <= 480) {
        targetVerticalRatio = 0.62;
    } else if (window.innerWidth <= 768) {
        targetVerticalRatio = 0.59;
    } else if (window.innerWidth <= 1024) {
        targetVerticalRatio = 0.57;
    }
    
    const fovRad = THREE.MathUtils.degToRad(38 / 2); // FOV 38deg
    const zFromHeight = (4.35 / targetVerticalRatio) / (2 * Math.tan(fovRad));
    
    // Also guarantee comfortable horizontal clearance for phone width (2.15)
    const targetHorizontalRatio = 0.65;
    const zFromWidth = (2.15 / targetHorizontalRatio) / (2 * Math.tan(fovRad) * aspect);
    
    return Math.max(zFromHeight, zFromWidth);
}

function initHero3D() {
    const container = document.getElementById('hero-3d-canvas');
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width > 0 ? rect.width : (container.clientWidth || Math.min(window.innerWidth - 32, 500));
    const height = rect.height > 0 ? rect.height : (container.clientHeight || (window.innerWidth < 768 ? 400 : 600));

    hero3D.scene = new THREE.Scene();
    hero3D.camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    hero3D.camera.position.set(0, 0, getOptimalHeroCameraZ(width, height));

    hero3D.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    hero3D.renderer.setSize(width, height);
    hero3D.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    hero3D.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    hero3D.renderer.toneMappingExposure = 1.05;
    container.innerHTML = '';
    container.appendChild(hero3D.renderer.domElement);

    // Natural Studio Lighting (Minimalist & Neutral)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    hero3D.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.35);
    keyLight.position.set(4, 5, 5);
    hero3D.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.7);
    fillLight.position.set(-4, -1, 4);
    hero3D.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.1);
    rimLight.position.set(0, 4, -4);
    hero3D.scene.add(rimLight);

    // Dynamic Follower Glint (Subtle Specular Highlight)
    const glintLight = new THREE.PointLight(0xffffff, 1.8, 10);
    glintLight.position.set(0, 0, 4);
    hero3D.scene.add(glintLight);
    hero3D.glintLight = glintLight;

    // Floating Dust Particles (Apple Studio Atmosphere)
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 65;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
        size: 0.035,
        color: 0x94a3b8,
        transparent: true,
        opacity: 0.45
    });
    const particleMesh = new THREE.Points(particleGeo, particleMat);
    hero3D.scene.add(particleMesh);
    hero3D.particles = particleMesh;

    // Preload wallpapers
    const textureLoader = new THREE.TextureLoader();
    hero3D.preloadedWallpapers = {};
    Object.keys(titaniumWallpapers).forEach(k => {
        hero3D.preloadedWallpapers[k] = textureLoader.load(titaniumWallpapers[k], (tex) => {
            tex.flipY = false;
            if (THREE.sRGBEncoding) tex.encoding = THREE.sRGBEncoding;
            if (hero3D.currentColor === k && hero3D.screenMaterial) {
                hero3D.screenMaterial.color.setHex(0xffffff);
                hero3D.screenMaterial.map = tex;
                hero3D.screenMaterial.needsUpdate = true;
            }
        });
    });

    // 1. Instant Procedural Placeholder (0ms delay so canvas is never blank)
    const placeholderPhone = buildProceduralPhone(hero3D.currentColor);
    hero3D.phoneGroup = placeholderPhone.group;
    hero3D.tintMaterials = placeholderPhone.tintMaterials;
    hero3D.screenMaterial = placeholderPhone.screenMaterial;
    hero3D.phoneGroup.rotation.x = hero3D.currentRotation.x;
    hero3D.phoneGroup.rotation.y = hero3D.currentRotation.y;
    hero3D.scene.add(hero3D.phoneGroup);

    // 2. Load the REAL iPhone 15 Pro 3D Model (iphone.glb with DracoLoader)
    loadIphone15GLTF().then(() => {
        const instance = createIphone15GLTFInstance(hero3D.currentColor);
        if (!instance) return;

        // Seamlessly swap placeholder with the real iPhone 15 Pro model
        if (hero3D.phoneGroup) {
            hero3D.scene.remove(hero3D.phoneGroup);
        }

        hero3D.instance = instance;
        hero3D.phoneGroup = instance.wrapper;
        hero3D.tintMaterials = instance.tintMaterials;
        hero3D.screenMaterial = instance.screenMaterial;

        hero3D.phoneGroup.rotation.x = hero3D.currentRotation.x;
        hero3D.phoneGroup.rotation.y = hero3D.currentRotation.y;
        hero3D.scene.add(hero3D.phoneGroup);

        // Apply active titanium color finish
        applyPhoneColor(hero3D.currentColor);
    }).catch((err) => {
        console.warn("Using procedural fallback:", err);
    });

    // Pointer Events for 3D Drag & Tilt
    const dom = hero3D.renderer.domElement;

    dom.addEventListener('pointerdown', (e) => {
        hero3D.isDragging = true;
        hero3D.prevPointer = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointerup', () => {
        hero3D.isDragging = false;
    });

    window.addEventListener('pointermove', (e) => {
        // Subtle Glint Light tracking
        const rect = container.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const ndcX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const ndcY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
            glintLight.position.x = ndcX * 3;
            glintLight.position.y = ndcY * 3;
        }

        if (hero3D.isDragging) {
            const deltaX = e.clientX - hero3D.prevPointer.x;
            const deltaY = e.clientY - hero3D.prevPointer.y;
            hero3D.targetRotation.y += deltaX * 0.008;
            hero3D.targetRotation.x += deltaY * 0.008;
            hero3D.prevPointer = { x: e.clientX, y: e.clientY };
        } else {
            const ndcX = (e.clientX / window.innerWidth) * 2 - 1;
            const ndcY = (e.clientY / window.innerHeight) * 2 - 1;
            // Respect active studio preset base angle
            const base = studioAngles[hero3D.currentAngle] || studioAngles.isometric;
            hero3D.targetRotation.y = base.y + ndcX * 0.25;
            hero3D.targetRotation.x = base.x + ndcY * 0.15;
        }
    });

    // Authentic Titanium Finishes Switcher
    document.querySelectorAll('#hero-color-options .color-swatch').forEach(swatch => {
        swatch.addEventListener('click', () => {
            document.querySelectorAll('#hero-color-options .color-swatch').forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');

            const colorHex = swatch.dataset.color;
            const colorName = swatch.dataset.name;
            document.getElementById('active-color-name').innerText = colorName;

            applyPhoneColor(colorHex);
            audioFX.playClick();
        });
    });

    // Apple Studio Angle Presets
    const studioAngles = {
        isometric: { x: 0.16, y: -0.42 }, // Iconic studio 3/4 angle (Screen + Titanium frame)
        front: { x: 0, y: 0 },             // Frontal display (Super Retina XDR & Dynamic Island)
        dynamic: { x: 0.22, y: -0.75 },    // Dynamic perspective tilt
        back: { x: 0.14, y: Math.PI }      // Titanium backplate & 48MP Photonic Camera System
    };

    // Interactive Feature Markers - Click to Inspect Component in 3D
    const tagCamera = document.getElementById('tag-camera');
    const tagChassis = document.getElementById('tag-chassis');
    const tagScreen = document.getElementById('tag-screen');

    tagCamera?.addEventListener('click', () => {
        hero3D.autoSpin = false;
        document.getElementById('toggle-spin-btn')?.classList.remove('active');
        document.querySelectorAll('#hero-angle-presets .preset-btn').forEach(b => b.classList.toggle('active', b.dataset.angle === 'back'));
        hero3D.currentAngle = 'back';
        gsap.to(hero3D.targetRotation, { x: 0.14, y: Math.PI, duration: 0.9, ease: "power2.out" });
        audioFX.playClick();
        showToast("Inspeksi Sistem Kamera 48MP & 5x Tetraprism Zoom");
    });

    tagChassis?.addEventListener('click', () => {
        hero3D.autoSpin = false;
        document.getElementById('toggle-spin-btn')?.classList.remove('active');
        document.querySelectorAll('#hero-angle-presets .preset-btn').forEach(b => b.classList.toggle('active', b.dataset.angle === 'isometric'));
        hero3D.currentAngle = 'isometric';
        gsap.to(hero3D.targetRotation, { x: 0.16, y: -0.55, duration: 0.9, ease: "power2.out" });
        audioFX.playClick();
        showToast("Inspeksi Bingkai Bodi Grade 5 Aerospace Titanium");
    });

    tagScreen?.addEventListener('click', () => {
        hero3D.autoSpin = false;
        document.getElementById('toggle-spin-btn')?.classList.remove('active');
        document.querySelectorAll('#hero-angle-presets .preset-btn').forEach(b => b.classList.toggle('active', b.dataset.angle === 'front'));
        hero3D.currentAngle = 'front';
        gsap.to(hero3D.targetRotation, { x: 0, y: 0, duration: 0.9, ease: "power2.out" });
        audioFX.playClick();
        showToast("Inspeksi Layar Super Retina XDR OLED ProMotion 120Hz");
    });

    document.querySelectorAll('#hero-angle-presets .preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#hero-angle-presets .preset-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const angleKey = btn.dataset.angle;
            hero3D.currentAngle = angleKey;

            if (studioAngles[angleKey]) {
                const target = studioAngles[angleKey];
                hero3D.autoSpin = false;
                const spinBtn = document.getElementById('toggle-spin-btn');
                if (spinBtn) spinBtn.classList.remove('active');

                gsap.to(hero3D.targetRotation, {
                    x: target.x,
                    y: target.y,
                    duration: 0.85,
                    ease: "power2.out"
                });
                audioFX.playClick();
            }
        });
    });

    // Auto Spin / Studio Sway Toggle
    const spinBtn = document.getElementById('toggle-spin-btn');
    if (spinBtn) {
        spinBtn.addEventListener('click', () => {
            hero3D.autoSpin = !hero3D.autoSpin;
            spinBtn.classList.toggle('active', hero3D.autoSpin);
            audioFX.playClick();
            if (hero3D.autoSpin) {
                const base = studioAngles[hero3D.currentAngle] || studioAngles.isometric;
                hero3D.targetRotation = { x: base.x, y: base.y };
            }
        });
    }

    // Reset View Button
    const resetBtn = document.getElementById('reset-view-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            hero3D.currentAngle = 'isometric';
            document.querySelectorAll('#hero-angle-presets .preset-btn').forEach(b => b.classList.toggle('active', b.dataset.angle === 'isometric'));
            const base = studioAngles.isometric;
            hero3D.targetRotation = { x: base.x, y: base.y };
            if (hero3D.phoneGroup) hero3D.phoneGroup.position.set(0, 0, 0);
            audioFX.playClick();
        });
    }

    window.addEventListener('resize', onHeroResize);

    // Animation Loop
    let clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        if (hero3D.phoneGroup) {
            // Calm, subtle studio levitation
            hero3D.phoneGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.05;

            // Synchronize ground contact shadow with levitation
            const shadowEl = document.getElementById('hero-contact-shadow');
            if (shadowEl) {
                const lev = hero3D.phoneGroup.position.y;
                const shadowScale = 1 - lev * 1.6;
                const shadowOpacity = 0.85 - lev * 3.5;
                shadowEl.style.transform = `translateX(-50%) scale(${shadowScale})`;
                shadowEl.style.opacity = Math.max(0.35, Math.min(1, shadowOpacity));
            }

            // Damping lerp towards target rotation
            hero3D.currentRotation.x += (hero3D.targetRotation.x - hero3D.currentRotation.x) * 0.08;
            hero3D.currentRotation.y += (hero3D.targetRotation.y - hero3D.currentRotation.y) * 0.08;

            // Calm studio floating sway when autoSpin is enabled and user is not dragging
            if (hero3D.autoSpin && !hero3D.isDragging) {
                const swayY = Math.sin(elapsedTime * 0.75) * 0.16;
                const swayX = Math.cos(elapsedTime * 0.5) * 0.03;
                hero3D.phoneGroup.rotation.x = hero3D.currentRotation.x + swayX;
                hero3D.phoneGroup.rotation.y = hero3D.currentRotation.y + swayY;
            } else {
                hero3D.phoneGroup.rotation.x = hero3D.currentRotation.x;
                hero3D.phoneGroup.rotation.y = hero3D.currentRotation.y;
            }
        }

        hero3D.renderer.render(hero3D.scene, hero3D.camera);
    }

    animate();
}

function applyPhoneColor(colorHex) {
    hero3D.currentColor = colorHex;
    if (hero3D.instance) {
        hero3D.instance.setColor(colorHex);
    } else {
        const target = new THREE.Color(colorHex);

        // Update metal titanium finishes
        if (hero3D.tintMaterials && hero3D.tintMaterials.length > 0) {
            hero3D.tintMaterials.forEach(mat => {
                if (mat && mat.color) {
                    gsap.to(mat.color, {
                        r: target.r,
                        g: target.g,
                        b: target.b,
                        duration: 0.5
                    });
                }
            });
        }

        // Update front screen wallpaper if texture is preloaded
        if (hero3D.screenMaterial && hero3D.preloadedWallpapers && hero3D.preloadedWallpapers[colorHex]) {
            if (hero3D.screenMaterial.color) hero3D.screenMaterial.color.setHex(0xffffff);
            hero3D.screenMaterial.map = hero3D.preloadedWallpapers[colorHex];
            hero3D.screenMaterial.needsUpdate = true;
        }
    }
}

function onHeroResize() {
    const container = document.getElementById('hero-3d-canvas');
    if (!container || !hero3D.renderer || !hero3D.camera) return;

    const width = container.clientWidth || container.offsetWidth;
    const height = container.clientHeight || container.offsetHeight;

    if (width > 0 && height > 0) {
        hero3D.camera.aspect = width / height;
        hero3D.camera.position.z = getOptimalHeroCameraZ(width, height);
        hero3D.camera.updateProjectionMatrix();
        hero3D.renderer.setSize(width, height);
    }
}



// ==========================================
// 8. 3D CARD PERSPECTIVE TILT
// ==========================================
function initCard3DTilt() {
    const cards = document.querySelectorAll('.card-3d-tilt');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;

            const shine = card.querySelector('.card-shine');
            if (shine) {
                shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.06) 0%, transparent 60%)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
        });
    });
}

// ==========================================
// 9. SCROLL ANIMATIONS & GSAP SCROLLTRIGGER
// ==========================================
function initScrollAnimations() {
    const progressBar = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');
    const ringCircle = document.querySelector('.progress-ring-circle');
    const circumference = 2 * Math.PI * 19; // radius = 19 => ~119.38

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) : 0;

        if (progressBar) {
            progressBar.style.width = `${scrollPercent * 100}%`;
        }

        if (ringCircle) {
            const offset = circumference - (scrollPercent * circumference);
            ringCircle.style.strokeDashoffset = offset;
        }

        if (backToTopBtn) {
            backToTopBtn.classList.toggle('visible', scrollTop > 300);
        }

        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.classList.toggle('scrolled', scrollTop > 40);
        }

        updateActiveNavSection();
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            audioFX.playWhoosh();
        });
    }

    // GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
            onUpdate: (self) => {
                if (!hero3D.isDragging && hero3D.phoneGroup) {
                    const base = (typeof studioAngles !== 'undefined' && studioAngles[hero3D.currentAngle]) ? studioAngles[hero3D.currentAngle] : { x: 0.16, y: -0.42 };
                    hero3D.targetRotation.y = base.y + self.progress * 0.55;
                }
            }
        });

        gsap.utils.toArray('[data-scroll-reveal]').forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.95) {
                el.style.opacity = '1';
                el.style.transform = 'none';
            } else {
                gsap.fromTo(el,
                    { opacity: 0, y: 28 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.65,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 92%",
                            toggleActions: "play none none none",
                            once: true
                        }
                    }
                );
            }
        });
    }

    // Bulletproof fallback observer: ensures elements are never stuck invisible
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'none';
            }
        });
    }, { rootMargin: '60px' });
    document.querySelectorAll('[data-scroll-reveal]').forEach(el => revealObserver.observe(el));

    initStatsCounter();
}

function initStatsCounter() {
    const counterCards = document.querySelectorAll('.stat-counter-card');
    let hasAnimated = false;

    function runCounters() {
        if (hasAnimated) return;
        hasAnimated = true;
        counterCards.forEach(card => {
            const numEl = card.querySelector('.stat-number');
            if (!numEl) return;
            const target = parseFloat(numEl.dataset.target);
            const isDecimal = numEl.dataset.decimal === 'true';

            let start = 0;
            const duration = 1600;
            const startTime = performance.now();

            function updateNumber(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentVal = start + (target - start) * easeOut;

                numEl.innerText = isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal).toLocaleString('id-ID');

                if (progress < 1) {
                    requestAnimationFrame(updateNumber);
                } else {
                    numEl.innerText = isDecimal ? target.toFixed(1) : target.toLocaleString('id-ID');
                }
            }
            requestAnimationFrame(updateNumber);
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounters();
            }
        });
    }, { threshold: 0.1 });

    const statsSec = document.querySelector('.stats-counter-section');
    if (statsSec) observer.observe(statsSec);
    counterCards.forEach(c => observer.observe(c));
}

function updateActiveNavSection() {
    const sections = ['home', 'highlights', 'products', 'bundles', 'compare', 'tradein', 'reviews'];
    const scrollPos = window.scrollY + 180;

    for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
                break;
            }
        }
    }
}

// ==========================================
// 10. PRODUCT CATALOG & FILTERS
// ==========================================
function initStorageFilters() {
    const storageContainer = document.getElementById('storage-filters');
    if (!storageContainer) return;

    storageContainer.querySelectorAll('.storage-chip').forEach(btn => {
        btn.addEventListener('click', (e) => {
            storageContainer.querySelectorAll('.storage-chip').forEach(b => b.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            activeStorage = target.dataset.storage || 'All';
            renderProducts();
            audioFX.playClick();
        });
    });
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    const emptyState = document.getElementById('empty-state');
    const countPill = document.getElementById('catalog-count-pill');
    if (!grid) return;

    let filtered = products.filter(p => {
        let matchCat = true;
        if (activeCategory !== 'All') {
            matchCat = p.category === activeCategory;
        }

        let matchStorage = true;
        if (activeStorage !== 'All') {
            matchStorage = (p.specs && p.specs.storage && p.specs.storage.includes(activeStorage)) ||
                           p.name.includes(activeStorage);
        }

        const query = searchQuery.toLowerCase().trim();
        const matchSearch = !query ||
            p.name.toLowerCase().includes(query) ||
            p.series.toLowerCase().includes(query) ||
            p.desc.toLowerCase().includes(query);

        return matchCat && matchStorage && matchSearch;
    });

    if (currentSort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (countPill) {
        countPill.innerText = `Menampilkan ${filtered.length} unit iPhone`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    } else {
        if (emptyState) emptyState.style.display = 'none';
    }

    grid.innerHTML = filtered.map(p => {
        const isWished = wishlist.includes(p.id);
        const badgeHTML = p.badge ? `<span class="product-badge ${p.badge === 'New' ? 'badge-new' : ''}">${p.badge}</span>` : '<span></span>';

        return `
            <div class="product-card card-3d-tilt" data-id="${p.id}">
                <div class="card-shine"></div>
                <div class="card-top-actions">
                    ${badgeHTML}
                    <button class="btn-wishlist ${isWished ? 'active' : ''}" title="Simpan ke Wishlist" onclick="event.stopPropagation(); toggleWishlist(${p.id})">
                        <i class="${isWished ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                </div>

                <div class="product-img-wrap" onclick="openProductDetail(${p.id})">
                    <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy" onerror="this.onerror=null; this.src='iphone15_pro_natural.jpg';">
                </div>

                <div class="product-details">
                    <div class="product-brand">${p.brand} • ${p.series}</div>
                    <div class="product-title" onclick="openProductDetail(${p.id})">${p.name}</div>
                    <div class="product-desc">${p.desc}</div>

                    <div class="product-specs-pills">
                        <span class="spec-pill">${p.specs.ram}</span>
                        <span class="spec-pill">${p.specs.camera.split('+')[0]}</span>
                    </div>

                    <div class="product-footer-row">
                        <div class="product-price-block">
                            <span class="price-val">${formatPrice(p.price)}</span>
                            <span class="price-unit">/ hari</span>
                        </div>
                        <div class="card-actions-row">
                            <button class="btn-card-3d" title="Buka Studio 3D ${p.name}" onclick="event.stopPropagation(); openStudio3DModal(${p.id})">
                                <i class="fa-solid fa-cube"></i>
                            </button>
                            <button class="btn-add-cart" onclick="event.stopPropagation(); addToCartWithAnimation(${p.id}, this)">
                                <i class="fa-solid fa-calendar-check"></i> Sewa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    initCard3DTilt();
}

document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        activeCategory = e.currentTarget.dataset.category || 'All';
        renderProducts();
        audioFX.playClick();
    });
});

const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');

searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (clearSearchBtn) clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    renderProducts();
});

clearSearchBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderProducts();
    audioFX.playClick();
});

document.getElementById('sort-select')?.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
    audioFX.playClick();
});

document.getElementById('btn-reset-filters')?.addEventListener('click', () => {
    activeCategory = 'All';
    activeStorage = 'All';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t.dataset.category === 'All'));
    document.querySelectorAll('.storage-chip').forEach(s => s.classList.toggle('active', s.dataset.storage === 'All'));
    renderProducts();
    audioFX.playClick();
});

// ==========================================
// 11. WISHLIST SYSTEM
// ==========================================
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    const product = products.find(p => p.id === productId);

    if (index > -1) {
        wishlist.splice(index, 1);
        showToast(`${product.name} dihapus dari wishlist`);
    } else {
        wishlist.push(productId);
        showToast(`${product.name} disimpan ke wishlist`);
        audioFX.playChime();
    }

    localStorage.setItem('prorent_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    renderProducts();
}

function updateWishlistUI() {
    const badge = document.getElementById('wishlist-badge');
    const mobileBadge = document.getElementById('mobile-wishlist-badge');
    if (badge) badge.innerText = wishlist.length;
    if (mobileBadge) mobileBadge.innerText = wishlist.length;
}

// ==========================================
// 12. SHOPPING BAG & FLY-TO-CART ANIMATION
// ==========================================
function addToCartWithAnimation(productId, triggerElement) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(i => i.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    audioFX.playChime();
    showToast(`${product.name} ditambahkan ke daftar sewa`);

    // Subtle fly particle
    if (triggerElement) {
        const rect = triggerElement.getBoundingClientRect();
        const cartBtn = document.getElementById('cart-icon');
        const cartRect = cartBtn.getBoundingClientRect();

        const flyer = document.createElement('div');
        flyer.style.position = 'fixed';
        flyer.style.left = `${rect.left + rect.width / 2}px`;
        flyer.style.top = `${rect.top}px`;
        flyer.style.width = '14px';
        flyer.style.height = '14px';
        flyer.style.borderRadius = '50%';
        flyer.style.background = 'var(--text-main)';
        flyer.style.zIndex = '9999';
        flyer.style.pointerEvents = 'none';
        flyer.style.transition = 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
        document.body.appendChild(flyer);

        setTimeout(() => {
            flyer.style.left = `${cartRect.left + cartRect.width / 2}px`;
            flyer.style.top = `${cartRect.top + cartRect.height / 2}px`;
            flyer.style.transform = 'scale(0.3)';
            flyer.style.opacity = '0.3';
        }, 20);

        setTimeout(() => {
            flyer.remove();
            cartBtn.style.transform = 'scale(1.15)';
            setTimeout(() => { cartBtn.style.transform = 'scale(1)'; }, 150);
        }, 520);
    }
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }

    saveCart();
    updateCartUI();
    audioFX.playClick();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
    audioFX.playClick();
}

function saveCart() {
    localStorage.setItem('prorent_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartBadge = document.getElementById('cart-badge');
    const mobileCartBadge = document.getElementById('mobile-cart-badge');
    const countPill = document.getElementById('cart-count-pill');
    const itemsContainer = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('cart-subtotal-price');
    const discountRow = document.getElementById('discount-row');
    const discountEl = document.getElementById('cart-discount-price');
    const totalEl = document.getElementById('cart-total-price');
    const checkoutAmountEl = document.getElementById('checkout-final-amount');

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) cartBadge.innerText = totalCount;
    if (mobileCartBadge) mobileCartBadge.innerText = totalCount;
    if (countPill) countPill.innerText = `${totalCount} unit`;

    if (!itemsContainer) return;

    if (cart.length === 0) {
        itemsContainer.innerHTML = `
            <div style="text-align:center; padding: 40px 20px; color: var(--text-muted);">
                <i class="fa-solid fa-calendar-check" style="font-size: 2.5rem; margin-bottom: 14px; opacity: 0.3;"></i>
                <h4 style="color: var(--text-main); margin-bottom: 6px; font-weight: 600;">Daftar Sewa Masih Kosong</h4>
                <p style="font-size: 0.85rem;">Pilih unit iPhone dari katalog untuk mulai menyewa.</p>
            </div>
        `;
        subtotalEl.innerText = formatPrice(0);
        totalEl.innerText = formatPrice(0);
        if (discountRow) discountRow.style.display = 'none';
        return;
    }

    let subtotal = 0;
    itemsContainer.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        return `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="item-details">
                    <div class="item-title">${item.name}</div>
                    <div class="item-price">${formatRentalPrice(item.price)}</div>
                    <div class="item-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)"><i class="fa-solid fa-minus"></i></button>
                        <span class="item-qty">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)"><i class="fa-solid fa-plus"></i></button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    subtotalEl.innerText = formatPrice(subtotal);

    let discount = 0;
    if (appliedCoupon === 'RENT2026' || appliedCoupon === 'PRO2026') {
        discount = 50000;
    } else if (appliedCoupon === 'HEMAT100') {
        discount = 100000;
    } else if (appliedCoupon === 'PONE2026') {
        discount = 50000;
    }

    if (discount > 0 && discountRow) {
        discountRow.style.display = 'flex';
        discountEl.innerText = `- ${formatPrice(discount)}`;
    } else if (discountRow) {
        discountRow.style.display = 'none';
    }

    const finalTotal = Math.max(0, subtotal - discount);
    totalEl.innerText = formatPrice(finalTotal);
    if (checkoutAmountEl) checkoutAmountEl.innerText = formatPrice(finalTotal);
}

document.getElementById('btn-apply-coupon')?.addEventListener('click', () => {
    const input = document.getElementById('coupon-code-input');
    const feedback = document.getElementById('coupon-feedback');
    const code = input.value.trim().toUpperCase();

    if (code === 'RENT2026' || code === 'PRO2026' || code === 'HEMAT100' || code === 'PONE2026') {
        appliedCoupon = code;
        feedback.className = "coupon-feedback success";
        feedback.innerText = `Kupon ${code} berhasil diterapkan!`;
        updateCartUI();
        audioFX.playChime();
    } else {
        feedback.className = "coupon-feedback error";
        feedback.innerText = "Kupon tidak valid atau telah kedaluwarsa.";
        audioFX.playClick();
    }
});

const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    audioFX.playWhoosh();
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    audioFX.playClick();
}

cartIcon?.addEventListener('click', openCart);
closeCartBtn?.addEventListener('click', closeCart);
cartOverlay?.addEventListener('click', closeCart);

document.getElementById('mobile-cart-trigger')?.addEventListener('click', openCart);
document.getElementById('mobile-wishlist-trigger')?.addEventListener('click', () => {
    activeCategory = 'All';
    activeBrand = 'All';
    searchQuery = '';
    const grid = document.getElementById('product-grid');
    const emptyState = document.getElementById('empty-state');

    const wished = products.filter(p => wishlist.includes(p.id));
    if (wished.length === 0) {
        grid.innerHTML = '';
        emptyState.style.display = 'block';
        emptyState.querySelector('h3').innerText = "Wishlist Kosong";
        emptyState.querySelector('p').innerText = "Klik ikon hati pada produk untuk menyimpannya.";
    } else {
        emptyState.style.display = 'none';
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        showToast(`Menampilkan ${wished.length} produk di wishlist`);
    }
    audioFX.playClick();
});

// ==========================================
// 13. PRODUCT DETAIL & 3D MODAL SYSTEM
// ==========================================
function openProductDetail(productId, show3D = false) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    const tabOverview = document.getElementById('tab-btn-overview');
    const tab3D = document.getElementById('tab-btn-3d');

    modalBody.innerHTML = `
        <div class="modal-img-container" id="modal-view-overview">
            <img src="${product.img}" alt="${product.name}" class="modal-img" onerror="this.onerror=null; this.src='iphone15_pro_natural.jpg';">
        </div>
        <div class="modal-3d-view" id="modal-view-3d" style="display:none; position:relative;">
            <div id="modal-inline-3d-canvas" style="width:100%; height:100%;"></div>
            <div class="inline-studio-controls">
                <div class="inline-studio-badge">
                    <i class="fa-solid fa-cube"></i> Model 3D iPhone 15 Asli (360°)
                </div>
                <button class="btn-open-full-studio" onclick="closeAllModals(); openStudio3DModal(${product.id});" title="Buka Virtual Studio Penuh">
                    <i class="fa-solid fa-expand"></i> Buka Full 3D Studio
                </button>
            </div>
        </div>

        <div class="modal-info">
            <div>
                <span class="modal-brand">${product.brand} • ${product.series}</span>
                <h2 class="modal-title">${product.name}</h2>
                <div class="modal-price">${formatRentalPrice(product.price)}</div>
                <p class="modal-desc">${product.desc}</p>

                <div class="modal-specs-list">
                    <div class="modal-spec-item">
                        <i class="fa-solid fa-display"></i>
                        <div>
                            <div style="font-size:0.72rem; color:var(--text-muted);">Layar Display</div>
                            <div class="modal-spec-text">${product.specs.display}</div>
                        </div>
                    </div>
                    <div class="modal-spec-item">
                        <i class="fa-solid fa-microchip"></i>
                        <div>
                            <div style="font-size:0.72rem; color:var(--text-muted);">Chipset & CPU</div>
                            <div class="modal-spec-text">${product.specs.chipset}</div>
                        </div>
                    </div>
                    <div class="modal-spec-item">
                        <i class="fa-solid fa-camera"></i>
                        <div>
                            <div style="font-size:0.72rem; color:var(--text-muted);">Sistem Kamera</div>
                            <div class="modal-spec-text">${product.specs.camera}</div>
                        </div>
                    </div>
                    <div class="modal-spec-item">
                        <i class="fa-solid fa-battery-full"></i>
                        <div>
                            <div style="font-size:0.72rem; color:var(--text-muted);">Kapasitas Baterai</div>
                            <div class="modal-spec-text">${product.specs.battery}</div>
                        </div>
                    </div>
                </div>
            </div>

            <button class="btn-primary w-100" onclick="addToCartWithAnimation(${product.id}, this); closeAllModals();">
                <i class="fa-solid fa-calendar-check"></i> Sewa Unit Ini Sekarang
            </button>
        </div>
    `;

    modal.classList.add('active');
    audioFX.playWhoosh();

    tabOverview.onclick = () => {
        tabOverview.classList.add('active');
        tab3D.classList.remove('active');
        document.getElementById('modal-view-overview').style.display = 'flex';
        document.getElementById('modal-view-3d').style.display = 'none';
        if (inline3DState.animId) {
            cancelAnimationFrame(inline3DState.animId);
            inline3DState.animId = null;
        }
        audioFX.playClick();
    };

    tab3D.onclick = () => {
        tab3D.classList.add('active');
        tabOverview.classList.remove('active');
        document.getElementById('modal-view-overview').style.display = 'none';
        document.getElementById('modal-view-3d').style.display = 'block';
        audioFX.playClick();

        setTimeout(() => {
            initInlineModal3D(product);
        }, 80);
    };

    if (show3D) {
        tab3D.click();
    } else {
        tabOverview.click();
    }
}

let inline3DState = {
    renderer: null,
    scene: null,
    camera: null,
    instance: null,
    phoneGroup: null,
    isDragging: false,
    prevPointer: { x: 0, y: 0 },
    currentRotation: { x: 0.3, y: -0.45 },
    targetRotation: { x: 0.3, y: -0.45 },
    animId: null
};

function initInlineModal3D(product) {
    const canvasWrap = document.getElementById('modal-inline-3d-canvas');
    if (!canvasWrap) return;

    if (inline3DState.animId) {
        cancelAnimationFrame(inline3DState.animId);
        inline3DState.animId = null;
    }
    canvasWrap.innerHTML = '';

    const width = canvasWrap.clientWidth || (window.innerWidth < 768 ? Math.min(window.innerWidth - 32, 420) : 460);
    const height = canvasWrap.clientHeight || (window.innerWidth < 768 ? 320 : 460);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, (window.innerWidth < 768 ? 8.4 : 7.6));

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    canvasWrap.appendChild(renderer.domElement);

    // Natural Studio Lighting matching Hero showcase
    scene.add(new THREE.AmbientLight(0xffffff, 0.85));
    const kLight = new THREE.DirectionalLight(0xffffff, 1.4);
    kLight.position.set(4, 5, 5);
    scene.add(kLight);

    const fLight = new THREE.DirectionalLight(0xffffff, 0.7);
    fLight.position.set(-4, -1, 4);
    scene.add(fLight);

    const rLight = new THREE.DirectionalLight(0xffffff, 1.1);
    rLight.position.set(0, 4, -4);
    scene.add(rLight);

    const glintLight = new THREE.PointLight(0xffffff, 1.6, 10);
    glintLight.position.set(0, 0, 4);
    scene.add(glintLight);

    inline3DState.scene = scene;
    inline3DState.camera = camera;
    inline3DState.renderer = renderer;
    inline3DState.currentRotation = { x: 0.3, y: -0.45 };
    inline3DState.targetRotation = { x: 0.3, y: -0.45 };
    inline3DState.isDragging = false;

    const primaryColor = (product.colors && product.colors[0]) || "#8a857b";

    // Immediate placeholder so canvas is never blank
    const placeholder = buildProceduralPhone(primaryColor);
    inline3DState.phoneGroup = placeholder.group;
    inline3DState.phoneGroup.rotation.x = inline3DState.currentRotation.x;
    inline3DState.phoneGroup.rotation.y = inline3DState.currentRotation.y;
    scene.add(inline3DState.phoneGroup);

    // Mount authentic iPhone 15 GLTF model
    loadIphone15GLTF().then(() => {
        const instance = createIphone15GLTFInstance(primaryColor);
        if (!instance) return;

        if (inline3DState.phoneGroup) {
            scene.remove(inline3DState.phoneGroup);
        }
        inline3DState.instance = instance;
        inline3DState.phoneGroup = instance.wrapper;
        inline3DState.phoneGroup.rotation.x = inline3DState.currentRotation.x;
        inline3DState.phoneGroup.rotation.y = inline3DState.currentRotation.y;
        scene.add(inline3DState.phoneGroup);
    }).catch(err => {
        console.warn("Inline 3D GLTF fallback:", err);
    });

    // Touch & Pointer Dragging for 360° rotation
    const dom = renderer.domElement;
    dom.style.touchAction = 'none';
    dom.style.cursor = 'grab';

    dom.addEventListener('pointerdown', (e) => {
        inline3DState.isDragging = true;
        inline3DState.prevPointer = { x: e.clientX, y: e.clientY };
        dom.style.cursor = 'grabbing';
    });

    window.addEventListener('pointerup', () => {
        inline3DState.isDragging = false;
        dom.style.cursor = 'grab';
    });

    dom.addEventListener('pointermove', (e) => {
        if (!inline3DState.isDragging || !inline3DState.phoneGroup) return;
        const deltaX = e.clientX - inline3DState.prevPointer.x;
        const deltaY = e.clientY - inline3DState.prevPointer.y;
        inline3DState.targetRotation.y += deltaX * 0.009;
        inline3DState.targetRotation.x += deltaY * 0.009;
        inline3DState.prevPointer = { x: e.clientX, y: e.clientY };
    });

    const clock = new THREE.Clock();

    function loop() {
        if (canvasWrap.offsetParent !== null) {
            inline3DState.animId = requestAnimationFrame(loop);
            const elapsed = clock.getElapsedTime();

            if (inline3DState.phoneGroup) {
                // Floating breathe physics identical to Hero showcase
                inline3DState.phoneGroup.position.y = Math.sin(elapsed * 1.2) * 0.05;

                // Auto-spin when idle
                if (!inline3DState.isDragging) {
                    inline3DState.targetRotation.y += 0.004;
                }

                // Damping lerp
                inline3DState.currentRotation.x += (inline3DState.targetRotation.x - inline3DState.currentRotation.x) * 0.06;
                inline3DState.currentRotation.y += (inline3DState.targetRotation.y - inline3DState.currentRotation.y) * 0.06;

                inline3DState.phoneGroup.rotation.x = inline3DState.currentRotation.x;
                inline3DState.phoneGroup.rotation.y = inline3DState.currentRotation.y;
            }

            renderer.render(scene, camera);
        }
    }
    loop();
}

function openStudio3DModal(productOrId) {
    let product = null;
    if (typeof productOrId === 'number' || typeof productOrId === 'string') {
        product = products.find(p => p.id == productOrId);
    } else if (productOrId && productOrId.id) {
        product = productOrId;
    }
    if (!product) product = products[0];

    modal3D.currentProduct = product;
    modal3D.currentColor = (product.colors && product.colors[0]) || "#8a857b";

    // Update modal header
    const titleEl = document.querySelector('#studio-3d-modal .studio-header h3');
    if (titleEl) {
        titleEl.innerHTML = `<i class="fa-solid fa-cube"></i> Studio 3D • ${product.name}`;
    }
    const descEl = document.querySelector('#studio-3d-modal .studio-header p');
    if (descEl) {
        descEl.textContent = `Eksplorasi unit ${product.name} 360°, bodi Grade 5 Titanium asli, modul kamera presisi, dan kondisi fisik sewa.`;
    }

    // Update CTA button
    const ctaBtn = document.getElementById('btn-studio-buy-now');
    if (ctaBtn) {
        ctaBtn.innerHTML = `<i class="fa-solid fa-calendar-check"></i> Sewa ${product.name} (${formatRentalPrice(product.price)})`;
        ctaBtn.onclick = () => {
            addToCartWithAnimation(product.id, ctaBtn);
            closeAllModals();
        };
    }

    // Update active color swatches
    const activeColor = modal3D.currentColor.toLowerCase();
    document.querySelectorAll('#studio-color-options .color-swatch').forEach(swatch => {
        const isMatch = swatch.dataset.color.toLowerCase() === activeColor;
        swatch.classList.toggle('active', isMatch);
    });
    const colorNameEl = document.getElementById('studio-color-name');
    if (colorNameEl) {
        const activeSwatch = document.querySelector('#studio-color-options .color-swatch.active');
        colorNameEl.innerText = activeSwatch ? activeSwatch.dataset.name : 'Titanium Finish';
    }

    const modal = document.getElementById('studio-3d-modal');
    if (!modal) return;
    modal.classList.add('active');
    audioFX.playChime();

    setTimeout(() => {
        initStudio3DModal();
        applyModalPhoneColor(modal3D.currentColor);
        startModalAnimation();
    }, 60);
}

function startModalAnimation() {
    if (modal3D.isAnimating) return;
    modal3D.isAnimating = true;
    if (!modal3D.clock) {
        modal3D.clock = new THREE.Clock();
    } else {
        modal3D.clock.start();
    }

    function loop() {
        const modalEl = document.getElementById('studio-3d-modal');
        if (!modalEl || !modalEl.classList.contains('active')) {
            modal3D.isAnimating = false;
            return;
        }

        requestAnimationFrame(loop);
        const elapsed = modal3D.clock.getElapsedTime();

        if (modal3D.phoneGroup) {
            modal3D.phoneGroup.position.y = Math.sin(elapsed * 1.2) * 0.05;

            if (modal3D.autoSpin && !modal3D.isDragging) {
                modal3D.targetRotation.y += 0.005;
            }

            modal3D.currentRotation.x += (modal3D.targetRotation.x - modal3D.currentRotation.x) * 0.06;
            modal3D.currentRotation.y += (modal3D.targetRotation.y - modal3D.currentRotation.y) * 0.06;

            modal3D.phoneGroup.rotation.x = modal3D.currentRotation.x;
            modal3D.phoneGroup.rotation.y = modal3D.currentRotation.y;
        }

        if (modal3D.renderer && modal3D.scene && modal3D.camera) {
            modal3D.renderer.render(modal3D.scene, modal3D.camera);
        }
    }
    loop();
}

function initStudio3DModal() {
    const container = document.getElementById('modal-3d-canvas-container');
    if (!container) return;

    const width = container.clientWidth || (window.innerWidth < 768 ? Math.min(window.innerWidth - 32, 480) : 550);
    const height = container.clientHeight || (window.innerWidth < 768 ? 280 : 440);

    if (modal3D.renderer) {
        modal3D.camera.aspect = width / height;
        modal3D.camera.position.z = (window.innerWidth < 768 ? 9.8 : 10.2);
        modal3D.camera.updateProjectionMatrix();
        modal3D.renderer.setSize(width, height);
        if (modal3D.instance) {
            modal3D.instance.setColor(modal3D.currentColor);
        }
        startModalAnimation();
        return;
    }

    modal3D.scene = new THREE.Scene();
    modal3D.camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    modal3D.camera.position.set(0, 0, (window.innerWidth < 768 ? 9.8 : 10.2));

    modal3D.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    modal3D.renderer.setSize(width, height);
    modal3D.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    modal3D.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    modal3D.renderer.toneMappingExposure = 1.05;
    container.innerHTML = '';
    container.appendChild(modal3D.renderer.domElement);

    // Studio Lighting
    modal3D.scene.add(new THREE.AmbientLight(0xffffff, 0.85));
    const kLight = new THREE.DirectionalLight(0xffffff, 1.4);
    kLight.position.set(4, 5, 5);
    modal3D.scene.add(kLight);

    const fLight = new THREE.DirectionalLight(0xffffff, 0.7);
    fLight.position.set(-4, -1, 4);
    modal3D.scene.add(fLight);

    const rLight = new THREE.DirectionalLight(0xffffff, 1.1);
    rLight.position.set(0, 4, -4);
    modal3D.scene.add(rLight);

    // Placeholder phone for instant visual
    const phone = buildProceduralPhone(modal3D.currentColor);
    modal3D.phoneGroup = phone.model;
    modal3D.tintMaterials = phone.tintMaterials;
    modal3D.screenMaterial = phone.screenMaterial;
    modal3D.phoneGroup.rotation.x = modal3D.currentRotation.x;
    modal3D.phoneGroup.rotation.y = modal3D.currentRotation.y;
    modal3D.scene.add(modal3D.phoneGroup);

    // Mount authentic iPhone 15 GLTF model
    loadIphone15GLTF().then(() => {
        const instance = createIphone15GLTFInstance(modal3D.currentColor);
        if (!instance) return;

        if (modal3D.phoneGroup) {
            modal3D.scene.remove(modal3D.phoneGroup);
        }
        modal3D.instance = instance;
        modal3D.phoneGroup = instance.wrapper;
        modal3D.tintMaterials = instance.tintMaterials;
        modal3D.screenMaterial = instance.screenMaterial;
        modal3D.phoneGroup.rotation.x = modal3D.currentRotation.x;
        modal3D.phoneGroup.rotation.y = modal3D.currentRotation.y;
        modal3D.scene.add(modal3D.phoneGroup);
    }).catch(err => {
        console.warn("Studio 3D GLTF fallback:", err);
    });

    // Touch & Pointer Dragging for Modal 3D
    const dom = modal3D.renderer.domElement;
    dom.style.touchAction = 'none';

    dom.addEventListener('pointerdown', (e) => {
        modal3D.isDragging = true;
        modal3D.prevPointer = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointerup', () => {
        modal3D.isDragging = false;
    });

    dom.addEventListener('pointermove', (e) => {
        if (!modal3D.isDragging || !modal3D.phoneGroup) return;
        const deltaX = e.clientX - modal3D.prevPointer.x;
        const deltaY = e.clientY - modal3D.prevPointer.y;
        modal3D.targetRotation.y += deltaX * 0.008;
        modal3D.targetRotation.x += deltaY * 0.008;
        modal3D.prevPointer = { x: e.clientX, y: e.clientY };
    });

    // Wire Color Options in Modal
    document.querySelectorAll('#studio-color-options .color-swatch').forEach(swatch => {
        swatch.onclick = () => {
            document.querySelectorAll('#studio-color-options .color-swatch').forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            const colorHex = swatch.dataset.color;
            const colorName = swatch.dataset.name;
            const nameEl = document.getElementById('studio-color-name');
            if (nameEl) nameEl.innerText = colorName;
            applyModalPhoneColor(colorHex);
            audioFX.playClick();
        };
    });

    // Wire Modal Studio Angle Presets
    const modalAngles = {
        isometric: { x: 0.35, y: -0.58 },
        front: { x: 0, y: 0 },
        dynamic: { x: -0.22, y: 0.52 },
        back: { x: 0.08, y: Math.PI }
    };

    document.querySelectorAll('#modal-studio-angle-presets .preset-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('#modal-studio-angle-presets .preset-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const angleKey = btn.dataset.angle;
            modal3D.currentAngle = angleKey;
            if (modalAngles[angleKey]) {
                const target = modalAngles[angleKey];
                modal3D.autoSpin = false;
                gsap.to(modal3D.targetRotation, {
                    x: target.x,
                    y: target.y,
                    duration: 0.8,
                    ease: "power2.out"
                });
                audioFX.playClick();
            }
        };
    });

    // Auto-Rotate Button in Modal
    const spinBtn = document.getElementById('studio-spin-btn');
    if (spinBtn) {
        spinBtn.onclick = () => {
            modal3D.autoSpin = !modal3D.autoSpin;
            spinBtn.classList.toggle('active', modal3D.autoSpin);
            audioFX.playClick();
        };
    }

    // Reset View Button in Modal
    const resetBtn = document.getElementById('studio-reset-btn');
    if (resetBtn) {
        resetBtn.onclick = () => {
            const base = modalAngles[modal3D.currentAngle] || modalAngles.isometric;
            modal3D.targetRotation = { x: base.x, y: base.y };
            if (modal3D.phoneGroup) modal3D.phoneGroup.position.set(0, 0, 0);
            audioFX.playClick();
        };
    }

    startModalAnimation();
}

function applyModalPhoneColor(colorHex) {
    modal3D.currentColor = colorHex;
    if (modal3D.instance) {
        modal3D.instance.setColor(colorHex);
    } else {
        const target = new THREE.Color(colorHex);

        if (modal3D.tintMaterials && modal3D.tintMaterials.length > 0) {
            modal3D.tintMaterials.forEach(mat => {
                if (mat && mat.color) {
                    gsap.to(mat.color, {
                        r: target.r,
                        g: target.g,
                        b: target.b,
                        duration: 0.5
                    });
                }
            });
        }

        const wallPath = getWallpaperForColor(colorHex);
        if (modal3D.screenMaterial && wallPath) {
            new THREE.TextureLoader().load(wallPath, (tex) => {
                tex.flipY = false;
                if (THREE.sRGBEncoding) tex.encoding = THREE.sRGBEncoding;
                modal3D.screenMaterial.map = tex;
                modal3D.screenMaterial.needsUpdate = true;
            });
        }
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
}

document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) closeAllModals();
});

document.getElementById('btn-hero-inspect-3d')?.addEventListener('click', openStudio3DModal);

// ==========================================
// 14. DEVICE COMPARISON TOOL
// ==========================================
function initComparisonTool() {
    const select1 = document.getElementById('compare-device-1');
    const select2 = document.getElementById('compare-device-2');
    const tableWrap = document.getElementById('compare-table-wrapper');

    if (!select1 || !select2 || !tableWrap) return;

    const optionsHTML = products.map(p => `<option value="${p.id}">${p.name} (${formatRentalPrice(p.price)})</option>`).join('');

    select1.innerHTML = optionsHTML;
    select2.innerHTML = optionsHTML;

    select1.value = 1; // iPhone 15 Pro Max 1TB
    select2.value = 5; // iPhone 15 Pro 512GB

    function renderCompareTable() {
        const id1 = parseInt(select1.value);
        const id2 = parseInt(select2.value);

        const d1 = products.find(p => p.id === id1) || products[0];
        const d2 = products.find(p => p.id === id2) || products[1];

        tableWrap.innerHTML = `
            <table class="compare-table">
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>
                            <div class="compare-device-header">
                                <img src="${d1.img}" alt="${d1.name}" class="compare-device-img" onerror="this.onerror=null; this.src='iphone15_pro_natural.jpg';">
                                <div>
                                    <div style="font-size:0.75rem; color:var(--text-muted);">${d1.brand} • ${d1.series}</div>
                                    <strong>${d1.name}</strong>
                                </div>
                            </div>
                        </th>
                        <th>
                            <div class="compare-device-header">
                                <img src="${d2.img}" alt="${d2.name}" class="compare-device-img" onerror="this.onerror=null; this.src='iphone15_pro_natural.jpg';">
                                <div>
                                    <div style="font-size:0.75rem; color:var(--text-muted);">${d2.brand} • ${d2.series}</div>
                                    <strong>${d2.name}</strong>
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Tarif Sewa / Hari</th>
                        <td><strong style="color:var(--accent-blue);">${formatRentalPrice(d1.price)}</strong></td>
                        <td><strong style="color:var(--accent-blue);">${formatRentalPrice(d2.price)}</strong></td>
                    </tr>
                    <tr>
                        <th>Layar Display</th>
                        <td>${d1.specs.display}</td>
                        <td>${d2.specs.display}</td>
                    </tr>
                    <tr>
                        <th>Chipset</th>
                        <td>${d1.specs.chipset}</td>
                        <td>${d2.specs.chipset}</td>
                    </tr>
                    <tr>
                        <th>Kamera</th>
                        <td>${d1.specs.camera}</td>
                        <td>${d2.specs.camera}</td>
                    </tr>
                    <tr>
                        <th>Baterai</th>
                        <td>${d1.specs.battery}</td>
                        <td>${d2.specs.battery}</td>
                    </tr>
                    <tr>
                        <th>RAM / Memori</th>
                        <td>${d1.specs.ram} • ${d1.specs.storage}</td>
                        <td>${d2.specs.ram} • ${d2.specs.storage}</td>
                    </tr>
                    <tr>
                        <th>Sistem Operasi</th>
                        <td>${d1.specs.os}</td>
                        <td>${d2.specs.os}</td>
                    </tr>
                    <tr>
                        <th>Aksi Sewa</th>
                        <td><button class="btn-primary" onclick="addToCartWithAnimation(${d1.id}, this)"><i class="fa-solid fa-calendar-check"></i> Sewa Unit</button></td>
                        <td><button class="btn-primary" onclick="addToCartWithAnimation(${d2.id}, this)"><i class="fa-solid fa-calendar-check"></i> Sewa Unit</button></td>
                    </tr>
                </tbody>
            </table>
        `;
    }

    select1.addEventListener('change', () => { renderCompareTable(); audioFX.playClick(); });
    select2.addEventListener('change', () => { renderCompareTable(); audioFX.playClick(); });

    renderCompareTable();
}

// ==========================================
// 14b. EXCLUSIVE BUNDLES & 5 ADD-UI VARIATIONS
// ==========================================
const bundleKits = {
    '1': {
        id: 101,
        name: 'Paket Konser & Festival VIP',
        price: 235000,
        img: 'iphone15_pro_natural.jpg',
        subtitle: 'Optimalisasi Lensa 5x Telefoto & Daya Non-Stop',
        desc: 'Paket terlengkap untuk konser musik akbar. Menghadirkan iPhone 15 Pro Max 512GB Natural Titanium dengan 5x Optical Telephoto untuk memotret aksi panggung dengan jernih, didukung Apple MagSafe Battery magnetic agar baterai tidak habis saat merekam video 4K.',
        savings: 'Hemat Rp 65.000 / hari',
        checklist: [
            'iPhone 15 Pro Max 512GB Natural Titanium (Grade 5 Aerospace)',
            'Apple MagSafe Battery Pack 5000mAh Snap-on Magnetic',
            'Monopod / Compact Selfie Tripod 1.6m Standar Venue Konser',
            'Lanyard Anti-Jatuh VIP & Pelindung Sudut Armor Case',
            '20W Fast Charger & Kabel Braided Type-C Original'
        ]
    },
    '2': {
        id: 102,
        name: 'Paket Cinematic Creator 4K',
        price: 310000,
        img: 'iphone15_pro_blue.jpg',
        subtitle: 'Rig Produksi Komersial & Perekaman Log ProRes',
        desc: 'Rig lengkap untuk sutradara indie, video creator YouTube, dan agency. Merekam format Apple Log ProRes 4K 60fps langsung ke SanDisk SSD eksternal tanpa membebani memori internal, dengan gimbal 3-axis super mulus.',
        savings: 'Hemat Rp 95.000 / hari',
        checklist: [
            'iPhone 15 Pro Max 1TB Blue Titanium (Support ProRes Log)',
            'DJI Osmo Mobile 6 Gimbal Stabilizer dengan ActiveTrack 6.0',
            'SanDisk Extreme Portable SSD 1TB USB-C 10Gbps Kecepatan Tinggi',
            'Dual Wireless Lavalier Microphone dengan Noise Cancelling Studio',
            'Hardcase Peli Anti-Benturan Tahan Debu & Air'
        ]
    },
    '3': {
        id: 103,
        name: 'Paket Wedding & Event Duo',
        price: 380000,
        img: 'iphone15_pro_white.jpg',
        subtitle: 'Dua Unit Siap Tangkap Momen Hari Bahagia',
        desc: 'Solusi dokumentasi ganda untuk wedding organizer, bridesmaid, atau tim event. Dua unit iPhone 15 Pro siap pakai dengan pencahayaan LED saku untuk foto resepsi malam hari yang memukau.',
        savings: 'Hemat Rp 120.000 / hari',
        checklist: [
            '2 Unit iPhone 15 Pro 256GB White Titanium Kompak',
            '2x Anker MagSafe Powerbank 10.000mAh Dual Output',
            '2x Pocket Bi-Color LED Video Light dengan Diffuser',
            'Layanan Backup Foto Otomatis ke Google Drive Cloud',
            'Prioritas Antar-Jemput Kurir Express di Hari H'
        ]
    },
    '4': {
        id: 104,
        name: 'Paket Holiday & Traveling',
        price: 185000,
        img: 'iphone15_pink.jpg',
        subtitle: 'Daya Tahan Baterai Monster & Perlindungan Outdoor',
        desc: 'Dirancang untuk petualangan liburan santai ke pantai, pegunungan, maupun luar negeri. iPhone 15 Plus memiliki baterai terawet hingga 29 jam pemutaran video non-stop.',
        savings: 'Hemat Rp 45.000 / hari',
        checklist: [
            'iPhone 15 Plus 256GB Layar Besar 6.7 inci',
            'Waterproof Underwater Pouch Sertifikasi IPX8',
            'Universal Worldwide Travel Adapter (US/UK/EU/AU)',
            'MagSafe Car Air Vent Mount & Wireless Fast Charger',
            'Unit Bebas iCloud & Roaming Siap Pakai di Luar Negeri'
        ]
    }
};

function initBundleVariants() {
    const pills = document.querySelectorAll('.variant-pill');
    if (!pills.length) return;

    pills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            pills.forEach(p => {
                p.classList.remove('active');
                p.setAttribute('aria-selected', 'false');
            });
            const target = e.currentTarget;
            target.classList.add('active');
            target.setAttribute('aria-selected', 'true');

            const variantNum = target.dataset.variant || '1';
            
            // Hide all views
            for (let i = 1; i <= 5; i++) {
                const view = document.getElementById(`bundle-view-${i}`);
                if (view) view.style.display = 'none';
            }

            // Show selected view
            const activeView = document.getElementById(`bundle-view-${variantNum}`);
            if (activeView) {
                activeView.style.display = 'block';
                activeView.style.animation = 'none';
                void activeView.offsetHeight; // trigger reflow
                activeView.style.animation = 'fadeInView 0.35s ease';
            }

            audioFX.playClick();
        });
    });
}

function initTabbedStage() {
    const stageTabs = document.querySelectorAll('.stage-tab');
    const stageContent = document.getElementById('stage-body-content');
    if (!stageTabs.length || !stageContent) return;

    function renderStage(key) {
        const kit = bundleKits[key] || bundleKits['1'];
        stageContent.innerHTML = `
            <div class="stage-device-panel">
                <img src="${kit.img}" alt="${kit.name}" class="stage-device-img">
                <div style="margin-top:16px;">
                    <span class="badge-savings">${kit.savings}</span>
                </div>
            </div>
            <div class="stage-manifest-panel">
                <span class="tier-subtitle">${kit.subtitle}</span>
                <h3>${kit.name}</h3>
                <p>${kit.desc}</p>
                <ul class="stage-checklist">
                    ${kit.checklist.map(item => `<li><i class="fa-solid fa-circle-check"></i> ${item}</li>`).join('')}
                </ul>
                <div class="bundle-pricing-row">
                    <div class="bundle-price-block">
                        <span class="bundle-price">${formatPrice(kit.price)}</span>
                        <span class="bundle-unit">/ hari</span>
                    </div>
                    <button class="btn-primary" onclick="addBundleToCart(${kit.id}, '${kit.name}', ${kit.price}, '${kit.img}')">
                        <i class="fa-solid fa-calendar-check"></i> Sewa Paket Ini
                    </button>
                </div>
            </div>
        `;
    }

    stageTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            stageTabs.forEach(t => t.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            const stageKey = target.dataset.stage || '1';
            renderStage(stageKey);
            audioFX.playClick();
        });
    });

    renderStage('1');
}

function toggleSwissRow(headerEl) {
    const parentRow = headerEl.closest('.swiss-row');
    if (!parentRow) return;
    const isActive = parentRow.classList.contains('active');
    
    // Close other rows for cleaner view
    document.querySelectorAll('.swiss-row').forEach(row => {
        if (row !== parentRow) row.classList.remove('active');
    });

    parentRow.classList.toggle('active', !isActive);
    audioFX.playClick();
}

function addBundleToCart(bundleId, bundleName, bundlePrice, bundleImg) {
    const existing = cart.find(i => i.id === bundleId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: bundleId,
            name: bundleName,
            price: bundlePrice,
            img: bundleImg,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    audioFX.playChime();
    showToast(`${bundleName} berhasil ditambahkan ke daftar sewa!`);
}

function toggleGearPill(el) {
    el.classList.toggle('active');
    const icon = el.querySelector('i');
    if (icon) {
        if (el.classList.contains('active')) {
            icon.className = 'fa-solid fa-check';
        } else {
            icon.className = 'fa-solid fa-plus';
        }
    }
    if (window.audioFX && audioFX.playClick) {
        audioFX.playClick();
    }
}

// ==========================================
// 15. RENTAL DURATION & PACKAGE CALCULATOR
// ==========================================
function initTradeInCalculator() {
    const brandSelect = document.getElementById('trade-brand-select');
    const durPills = document.querySelectorAll('.dur-pill');
    const sliderInput = document.getElementById('calc-slider-input');
    const sliderBadge = document.getElementById('slider-val-badge');
    const priceDisplay = document.getElementById('calc-price-estimate');
    const noteDisplay = document.getElementById('calc-price-note');
    const baseRateEl = document.getElementById('breakdown-base-rate');
    const daysEl = document.getElementById('breakdown-days');
    const discountRow = document.getElementById('breakdown-discount-row');
    const discountEl = document.getElementById('breakdown-discount');
    const totalEl = document.getElementById('breakdown-total');
    const claimBtn = document.getElementById('btn-claim-tradein');

    if (!brandSelect || !priceDisplay) return;

    // Populate all iPhone models
    brandSelect.innerHTML = products.map(p => `
        <option value="${p.id}">${p.name} (${formatRentalPrice(p.price)})</option>
    `).join('');

    function recalculate() {
        const prodId = parseInt(brandSelect.value) || 1;
        const phone = products.find(p => p.id === prodId) || products[0];
        const days = parseInt(sliderInput ? sliderInput.value : 1) || 1;

        let discountPct = 0;
        let tierLabel = 'Sewa Reguler Harian';
        if (days >= 30) {
            discountPct = 0.45;
            tierLabel = 'Paket Bulanan (Hemat 45%)';
        } else if (days >= 14) {
            discountPct = 0.30;
            tierLabel = 'Paket 2 Minggu (Hemat 30%)';
        } else if (days >= 7) {
            discountPct = 0.20;
            tierLabel = 'Paket Mingguan (Hemat 20%)';
        } else if (days >= 3) {
            discountPct = 0.10;
            tierLabel = 'Paket Hemat (Diskon 10%)';
        }

        const rawTotal = phone.price * days;
        const discountVal = Math.round(rawTotal * discountPct);
        const finalTotal = rawTotal - discountVal;

        if (priceDisplay) priceDisplay.innerText = formatPrice(finalTotal);
        if (baseRateEl) baseRateEl.innerText = `${formatPrice(phone.price)} / hari`;
        if (daysEl) daysEl.innerText = `${days} Hari`;
        if (totalEl) totalEl.innerText = formatPrice(finalTotal);

        if (discountVal > 0) {
            if (discountRow) discountRow.style.display = 'flex';
            if (discountEl) discountEl.innerText = `- ${formatPrice(discountVal)} (${Math.round(discountPct * 100)}%)`;
            if (noteDisplay) noteDisplay.innerText = `${tierLabel} • Anda Hemat ${formatPrice(discountVal)}`;
        } else {
            if (discountRow) discountRow.style.display = 'none';
            if (noteDisplay) noteDisplay.innerText = 'Termasuk garansi unit & full set aksesoris resmi Apple';
        }
    }

    durPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            durPills.forEach(p => p.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            const targetDays = parseInt(target.dataset.days) || 1;
            if (sliderInput) sliderInput.value = targetDays;
            if (sliderBadge) sliderBadge.innerText = `${targetDays} Hari`;
            recalculate();
            audioFX.playClick();
        });
    });

    sliderInput?.addEventListener('input', (e) => {
        const val = parseInt(e.target.value) || 1;
        if (sliderBadge) sliderBadge.innerText = `${val} Hari`;

        durPills.forEach(pill => {
            const pDays = parseInt(pill.dataset.days);
            pill.classList.toggle('active', pDays === val);
        });

        recalculate();
    });

    brandSelect.addEventListener('change', () => { recalculate(); audioFX.playClick(); });

    claimBtn?.addEventListener('click', () => {
        const prodId = parseInt(brandSelect.value) || 1;
        addToCartWithAnimation(prodId, claimBtn);
        audioFX.playChime();
        showToast("Unit iPhone & durasi berhasil ditambahkan ke tas sewa!");
    });

    recalculate();
}

// ==========================================
// 16. CHECKOUT FLOW & CELEBRATION CONFETTI
// ==========================================
const btnCheckout = document.getElementById('btn-checkout');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');
const orderSuccessModal = document.getElementById('order-success-modal');

if (btnCheckout) {
    btnCheckout.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast("Tas belanja Anda masih kosong");
            return;
        }
        closeCart();
        
        // Initialize minimum date for booking
        const startDateInput = document.getElementById('checkout-start-date');
        if (startDateInput) {
            const today = new Date().toISOString().split('T')[0];
            startDateInput.min = today;
            if (!startDateInput.value) startDateInput.value = today;
        }

        checkoutModal.classList.add('active');
        audioFX.playWhoosh();
    });
}

if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const totalAmountText = document.getElementById('cart-total-price')?.innerText || 'Rp 0';
        const name = document.getElementById('checkout-name')?.value.trim() || 'Pelanggan';
        const phone = document.getElementById('checkout-phone')?.value.trim() || '-';
        const startDate = document.getElementById('checkout-start-date')?.value || 'Segera';
        const duration = document.getElementById('checkout-duration')?.value || '1';
        const address = document.getElementById('checkout-address')?.value.trim() || '-';
        const deliveryEl = document.querySelector('input[name="delivery"]:checked');
        const deliveryMethod = deliveryEl ? (deliveryEl.value === 'pickup' ? 'Ambil di Store (Self Pickup)' : 'Kurir Instant / Diantar ke Lokasi') : 'Kurir Instant';

        const itemsSummary = cart.map(i => `${i.name} (x${i.quantity})`).join(', ');
        const randId = 'PRO-' + Math.floor(100000 + Math.random() * 900000);

        // Build official WhatsApp confirmation link
        const waCsNumber = '6281234567890';
        const waMessage = `Halo ProRent Studio! Saya ingin konfirmasi booking sewa iPhone:\n\n` +
            `*No. Order:* #${randId}\n` +
            `*Nama Penyewa:* ${name}\n` +
            `*No. WhatsApp:* ${phone}\n` +
            `*Tanggal Mulai:* ${startDate}\n` +
            `*Durasi Sewa:* ${duration} Hari\n` +
            `*Unit:* ${itemsSummary || 'iPhone 15 Series'}\n` +
            `*Estimasi Total:* ${totalAmountText}\n` +
            `*Metode Pengambilan:* ${deliveryMethod}\n` +
            `*Alamat:* ${address}\n\n` +
            `Mohon panduan verifikasi KTP dan deposit unit. Terima kasih!`;

        const waBtn = document.getElementById('btn-whatsapp-order');
        if (waBtn) {
            waBtn.href = `https://wa.me/${waCsNumber}?text=${encodeURIComponent(waMessage)}`;
        }

        closeAllModals();

        cart = [];
        saveCart();
        updateCartUI();

        triggerCelebrationConfetti();
        audioFX.playChime();

        document.getElementById('receipt-order-id').innerText = randId;
        document.getElementById('receipt-total-amount').innerText = totalAmountText;

        orderSuccessModal.classList.add('active');
    });
}

document.getElementById('btn-back-to-shop')?.addEventListener('click', () => {
    closeAllModals();
    audioFX.playClick();
});

function triggerCelebrationConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.65 },
            colors: ['#ffffff', '#8a857b', '#2997ff', '#a1a1aa']
        });
    }
}

// ==========================================
// 17. THEME SYSTEM
// ==========================================
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('prorent_theme') || localStorage.getItem('ponestore_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.body.setAttribute('data-theme', currentTheme);

    function updateThemeUI(theme) {
        if (themeToggle) {
            themeToggle.innerHTML = theme === 'dark' ?
                '<i class="fa-solid fa-sun"></i>' :
                '<i class="fa-solid fa-moon"></i>';
        }
    }

    updateThemeUI(currentTheme);

    themeToggle?.addEventListener('click', () => {
        const active = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', active);
        document.body.setAttribute('data-theme', active);
        localStorage.setItem('prorent_theme', active);
        updateThemeUI(active);
        window.updateCosmicTheme?.(active);
        audioFX.playClick();
    });
}

// ==========================================
// 18. MOBILE NAVIGATION DRAWER
// ==========================================
function initMobileNavigation() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    const closeBtn = document.getElementById('close-menu');

    function openMenu() {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        audioFX.playWhoosh();
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        audioFX.playClick();
    }

    hamburger?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// ==========================================
// 18B. COSMIC ASTRONOMY STARFIELD & METEOR ENGINE
// ==========================================
function initCosmicStarfield() {
    const canvas = document.getElementById('cosmic-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars = [];
    let meteors = [];
    let animationFrameId = null;
    let isHidden = false;

    const mouse = { x: -9999, y: -9999, active: false };
    let scrollY = window.scrollY || 0;

    function getStarColors() {
        const isDark = document.body.getAttribute('data-theme') !== 'light';
        return isDark ? [
            '#ffffff', // Pure white
            '#e0f2fe', // Ice Cyan
            '#bae6fd', // Starlight Blue
            '#ede9fe', // Cosmic Violet
            '#fef08a'  // Warm Starlight Amber
        ] : [
            '#334155', // Slate 700 (High contrast on light bg)
            '#0284c7', // Sky 600
            '#2563eb', // Royal Blue
            '#475569', // Slate 600
            '#6366f1'  // Indigo
        ];
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        dpr = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.scale(dpr, dpr);

        createStars();
    }

    function createStars() {
        const starCount = Math.floor((width * height) / 6000);
        const count = Math.max(160, Math.min(starCount, 320));
        const colors = getStarColors();
        stars = [];

        for (let i = 0; i < count; i++) {
            const z = Math.random() * 0.9 + 0.1;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const isSpikeStar = Math.random() < 0.12 && z > 0.6;

            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                baseY: Math.random() * height,
                z: z,
                radius: (Math.random() * 1.4 + 0.5) * z,
                color: color,
                baseAlpha: Math.random() * 0.5 + 0.35,
                twinkleSpeed: Math.random() * 0.03 + 0.01,
                twinklePhase: Math.random() * Math.PI * 2,
                hasSpikes: isSpikeStar,
                spikeLength: (Math.random() * 6 + 4) * z
            });
        }
    }

    window.updateCosmicTheme = function() {
        createStars();
    };

    function maybeSpawnMeteor() {
        if (meteors.length >= 2 || Math.random() > 0.4) return;

        const startX = Math.random() * (width * 0.8) + (width * 0.1);
        const startY = Math.random() * (height * 0.35);
        const angle = Math.PI / 4 + (Math.random() * 0.3 - 0.15);
        const speed = Math.random() * 12 + 14;
        const length = Math.random() * 90 + 80;

        meteors.push({
            x: startX,
            y: startY,
            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,
            length: length,
            life: 1.0,
            decay: Math.random() * 0.015 + 0.012,
            size: Math.random() * 1.5 + 1.2
        });
    }

    setInterval(maybeSpawnMeteor, 4500);

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
        mouse.active = false;
        mouse.x = -9999;
        mouse.y = -9999;
    });

    window.addEventListener('scroll', () => {
        scrollY = window.scrollY || 0;
    }, { passive: true });

    window.addEventListener('resize', resize);

    document.addEventListener('visibilitychange', () => {
        isHidden = document.hidden;
        if (!isHidden && !animationFrameId) {
            renderLoop();
        }
    });

    function renderLoop(now = performance.now()) {
        if (isHidden) {
            animationFrameId = null;
            return;
        }

        ctx.clearRect(0, 0, width, height);
        const time = now * 0.001;

        for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            const parallaxY = (star.baseY - (scrollY * star.z * 0.15)) % height;
            const currentY = parallaxY < 0 ? parallaxY + height : parallaxY;
            star.y = currentY;

            const alphaPulse = Math.sin(time * star.twinkleSpeed * 100 + star.twinklePhase);
            const currentAlpha = Math.max(0.15, Math.min(1, star.baseAlpha + alphaPulse * 0.35));

            ctx.save();
            ctx.globalAlpha = currentAlpha;
            ctx.fillStyle = star.color;

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();

            if (star.hasSpikes && currentAlpha > 0.5) {
                ctx.strokeStyle = star.color;
                ctx.lineWidth = 0.7;
                ctx.beginPath();
                ctx.moveTo(star.x - star.spikeLength, star.y);
                ctx.lineTo(star.x + star.spikeLength, star.y);
                ctx.moveTo(star.x, star.y - star.spikeLength);
                ctx.lineTo(star.x, star.y + star.spikeLength);
                ctx.stroke();
            }

            if (mouse.active) {
                const dx = mouse.x - star.x;
                const dy = mouse.y - star.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 130) {
                    const lineAlpha = (1 - dist / 130) * 0.35;
                    const isDark = document.body.getAttribute('data-theme') !== 'light';
                    const rgb = isDark ? '125, 211, 252' : '2, 132, 199';
                    ctx.strokeStyle = 'rgba(' + rgb + ', ' + lineAlpha + ')';
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(star.x, star.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }

            ctx.restore();
        }

        ctx.save();
        ctx.lineWidth = 0.5;
        const maxStarDist = 65;
        const isDark = document.body.getAttribute('data-theme') !== 'light';
        const meshRgb = isDark ? '186, 230, 253' : '100, 116, 139';
        for (let i = 0; i < stars.length; i += 2) {
            for (let j = i + 1; j < Math.min(i + 12, stars.length); j++) {
                const s1 = stars[i];
                const s2 = stars[j];
                const dx = s1.x - s2.x;
                const dy = s1.y - s2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxStarDist) {
                    const alpha = (1 - dist / maxStarDist) * 0.08 * s1.z;
                    ctx.strokeStyle = 'rgba(' + meshRgb + ', ' + alpha + ')';
                    ctx.beginPath();
                    ctx.moveTo(s1.x, s1.y);
                    ctx.lineTo(s2.x, s2.y);
                    ctx.stroke();
                }
            }
        }
        ctx.restore();

        for (let m = meteors.length - 1; m >= 0; m--) {
            const meteor = meteors[m];
            meteor.x += meteor.dx;
            meteor.y += meteor.dy;
            meteor.life -= meteor.decay;

            if (meteor.life <= 0 || meteor.x > width + 100 || meteor.y > height + 100) {
                meteors.splice(m, 1);
                continue;
            }

            ctx.save();
            ctx.globalAlpha = meteor.life;

            const hyp = Math.sqrt(meteor.dx * meteor.dx + meteor.dy * meteor.dy);
            const tailX = meteor.x - (meteor.dx / hyp) * meteor.length;
            const tailY = meteor.y - (meteor.dy / hyp) * meteor.length;

            const gradient = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
            const isDarkNow = document.body.getAttribute('data-theme') !== 'light';
            if (isDarkNow) {
                gradient.addColorStop(0, '#ffffff');
                gradient.addColorStop(0.2, '#7dd3fc');
                gradient.addColorStop(0.6, 'rgba(56, 189, 248, 0.4)');
                gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
            } else {
                gradient.addColorStop(0, '#0284c7');
                gradient.addColorStop(0.2, '#38bdf8');
                gradient.addColorStop(0.6, 'rgba(2, 132, 199, 0.35)');
                gradient.addColorStop(1, 'rgba(2, 132, 199, 0)');
            }

            ctx.strokeStyle = gradient;
            ctx.lineWidth = meteor.size;
            ctx.lineCap = 'round';

            ctx.beginPath();
            ctx.moveTo(meteor.x, meteor.y);
            ctx.lineTo(tailX, tailY);
            ctx.stroke();

            ctx.fillStyle = isDarkNow ? '#ffffff' : '#0284c7';
            ctx.beginPath();
            ctx.arc(meteor.x, meteor.y, meteor.size * 1.2, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        animationFrameId = requestAnimationFrame(renderLoop);
    }

    resize();
    renderLoop();
}

// ==========================================
// 19. APP INITIALIZATION
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCosmicStarfield();
    initMobileNavigation();
    initHero3D();
    initScrollAnimations();
    initStorageFilters();
    renderProducts();
    initComparisonTool();
    initBundleVariants();
    initTabbedStage();
    initTradeInCalculator();
    updateCartUI();
    updateWishlistUI();

    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                onHeroResize();
            }, 500);
        }
    }, 800);

    window.addEventListener('load', onHeroResize);
    setTimeout(onHeroResize, 300);
});
/* ============================================
   Maria — Portfolio Interactions
   ============================================ */

// --- Portfolio Data ---
const cases = [
    {
        id: 1,
        title: "Reimagining the Onboarding Flow",
        client: "Streamline",
        color: "#1b3a5c",
        challenge: "New users were dropping off during a 7-step onboarding process. Only 23% of sign-ups completed setup, leaving the product's activation metric dangerously low.",
        solution: "Condensed onboarding to 3 progressive steps with smart defaults. Introduced an interactive product tour that lets users experience value before committing to configuration.",
        results: [
            { value: "68%", label: "Completion rate" },
            { value: "2.4x", label: "Activation lift" },
            { value: "-40%", label: "Support tickets" }
        ]
    },
    {
        id: 2,
        title: "Design System from Zero to One",
        client: "Vaultik",
        color: "#2d4a3e",
        challenge: "A 4-year-old product with inconsistent UI across 12 feature areas. Three separate design patterns for modals alone. Engineering velocity was suffering.",
        solution: "Built a comprehensive design system with 140+ components, usage guidelines, and Figma-to-code pipeline. Rolled out incrementally to avoid disruption.",
        results: [
            { value: "140+", label: "Components" },
            { value: "3x", label: "Design velocity" },
            { value: "60%", label: "Less CSS" }
        ]
    },
    {
        id: 3,
        title: "Conversion-Focused Landing Pages",
        client: "Bloom Health",
        color: "#5c3a4e",
        challenge: "Premium health platform struggling with a 1.2% landing page conversion rate. The existing page failed to communicate value to time-poor professionals.",
        solution: "Designed a narrative-driven landing experience with social proof, interactive pricing calculator, and micro-animations that guide attention to CTAs.",
        results: [
            { value: "4.8%", label: "Conversion rate" },
            { value: "+300%", label: "Trial signups" },
            { value: "52s", label: "Avg. time on page" }
        ]
    },
    {
        id: 4,
        title: "Dashboard Redesign & Analytics",
        client: "DataPulse",
        color: "#4a3a1b",
        challenge: "Users couldn't find actionable insights in a cluttered analytics dashboard. Feature requests were piling up, but the real problem was information architecture.",
        solution: "Restructured the dashboard around user goals rather than data types. Introduced smart summaries, customizable widgets, and progressive disclosure for complex datasets.",
        results: [
            { value: "89%", label: "User satisfaction" },
            { value: "5x", label: "Daily active usage" },
            { value: "-70%", label: "Feature requests" }
        ]
    },
    {
        id: 5,
        title: "Mobile-First Marketplace",
        client: "Crafted",
        color: "#3a4a5c",
        challenge: "An artisan marketplace with desktop-only design losing 65% of traffic from mobile users. Cart abandonment on mobile was 91%.",
        solution: "Complete mobile-first redesign with thumb-zone optimized navigation, one-tap checkout, and image-forward browsing that showcases craft quality.",
        results: [
            { value: "+180%", label: "Mobile revenue" },
            { value: "34%", label: "Cart completion" },
            { value: "4.8", label: "App Store rating" }
        ]
    },
    {
        id: 6,
        title: "SaaS Pricing Page Optimization",
        client: "CloudStack",
        color: "#1b4a3a",
        challenge: "Enterprise SaaS with a confusing pricing structure. Sales team spent 30% of calls just explaining tiers. Self-serve conversion was nearly zero.",
        solution: "Simplified to 3 clear tiers with an interactive feature comparison. Added a usage calculator and social proof specific to each plan tier.",
        results: [
            { value: "+240%", label: "Self-serve signups" },
            { value: "-45%", label: "Sales call length" },
            { value: "+18%", label: "Revenue per user" }
        ]
    },
    {
        id: 7,
        title: "Collaborative Workspace UI",
        client: "TeamForge",
        color: "#4e2d5c",
        challenge: "Real-time collaboration tool with severe usability issues. Users couldn't understand who was editing what, and conflicts were causing data loss.",
        solution: "Designed presence indicators, conflict resolution flows, and a spatial canvas UI that makes collaboration feel natural and awareness effortless.",
        results: [
            { value: "96%", label: "Conflict resolution" },
            { value: "+85%", label: "Team adoption" },
            { value: "NPS 72", label: "User score" }
        ]
    },
    {
        id: 8,
        title: "E-commerce Checkout Redesign",
        client: "Luxe & Co",
        color: "#5c4a2d",
        challenge: "Luxury e-commerce brand with a checkout flow that didn't match the brand's premium positioning. Bounce rate at payment step was 44%.",
        solution: "Designed an immersive single-page checkout with real-time validation, trust signals, and a visual order summary that reinforces the premium experience.",
        results: [
            { value: "-62%", label: "Cart abandonment" },
            { value: "+35%", label: "Average order value" },
            { value: "1.8s", label: "Checkout time saved" }
        ]
    }
];

// --- DOM Elements ---
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const contactForm = document.getElementById('contactForm');

// --- Sticky Header ---
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    header.classList.toggle('scrolled', scrollY > 60);
    lastScroll = scrollY;
}, { passive: true });

// --- Mobile Menu ---
menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = isOpen ? '' : 'hidden';
});

document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// --- Portfolio (moved to portfolio.html) ---

// --- Contact Form (native submit to Formsubmit) ---

// --- File Upload Feedback ---
const fileUpload = document.getElementById('fileUpload');
if (fileUpload) {
    const fileInput = fileUpload.querySelector('input[type="file"]');
    const textEl = fileUpload.querySelector('.file-upload-text');
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            textEl.textContent = fileInput.files[0].name;
            fileUpload.classList.add('has-file');
        } else {
            textEl.textContent = 'Drop a brief, wireframe, or screenshot';
            fileUpload.classList.remove('has-file');
        }
    });
}

// --- Scroll Animations (IntersectionObserver) ---
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.anim-reveal, .portfolio-card').forEach(el => {
        observer.observe(el);
    });
}

// --- Smooth Scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = header.offsetHeight + 20;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// --- Rotating Text (wipe left→right in, left→right out) ---
function initRotatingText() {
    const lines = document.querySelectorAll('.rotating-line');
    let current = 0;
    let running = false;

    setInterval(() => {
        if (running) return;
        running = true;

        // old exits: wipe right
        lines[current].classList.remove('active');
        lines[current].classList.add('exit');

        setTimeout(() => {
            lines[current].classList.remove('exit');
            // next enters: wipe from left
            current = (current + 1) % lines.length;
            lines[current].classList.add('active');
            running = false;
        }, 450);
    }, 3200);
}

// --- Animated Dot Grid ---
function initHeroGrid() {
    const canvas = document.getElementById('heroGrid');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, dots = [];
    const spacing = 60;
    let mouse = { x: -1000, y: -1000 };
    const radius = 200;
    let lines = [];

    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        w = canvas.width = rect.width;
        h = canvas.height = rect.height;
        buildLines();
    }

    function buildLines() {
        lines = [];
        for (let y = spacing; y < h; y += spacing) {
            lines.push({ x1: 0, y1: y, x2: w, y2: y });
        }
        for (let x = spacing; x < w; x += spacing) {
            lines.push({ x1: x, y1: 0, x2: x, y2: h });
        }
    }

    canvas.parentElement.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    canvas.parentElement.addEventListener('mouseleave', () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });

    function distToSegment(px, py, x1, y1, x2, y2) {
        const dx = x2 - x1, dy = y2 - y1;
        const len2 = dx * dx + dy * dy;
        let t = len2 === 0 ? 0 : Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / len2));
        const cx = x1 + t * dx, cy = y1 + t * dy;
        return Math.sqrt((px - cx) ** 2 + (py - cy) ** 2);
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        const baseColor = '160, 175, 195';

        for (const l of lines) {
            const dist = distToSegment(mouse.x, mouse.y, l.x1, l.y1, l.x2, l.y2);
            const influence = Math.max(0, 1 - dist / radius);
            const alpha = 0.3 + influence * 0.7;
            const width = 0.5 + influence * 0.5;

            ctx.beginPath();
            ctx.moveTo(l.x1, l.y1);
            ctx.lineTo(l.x2, l.y2);
            ctx.strokeStyle = `rgba(${baseColor}, ${alpha})`;
            ctx.lineWidth = width;
            ctx.stroke();
        }

        // intersection dots near mouse
        for (let x = spacing; x < w; x += spacing) {
            for (let y = spacing; y < h; y += spacing) {
                const dx = mouse.x - x, dy = mouse.y - y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const influence = Math.max(0, 1 - dist / radius);
                if (influence > 0.05) {
                    ctx.beginPath();
                    ctx.arc(x, y, 1.5 * influence, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(27, 58, 92, ${influence * 0.6})`;
                    ctx.fill();
                }
            }
        }

        // slow traveling light — a soft gradient spotlight drifting diagonally
        const now = performance.now() * 0.0003;
        const lx = (Math.sin(now) * 0.5 + 0.5) * w;
        const ly = (Math.cos(now * 0.7) * 0.5 + 0.5) * h;
        const lightR = 280;

        for (let x = spacing; x < w; x += spacing) {
            for (let y = spacing; y < h; y += spacing) {
                const dx = lx - x, dy = ly - y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const influence = Math.max(0, 1 - dist / lightR);
                if (influence > 0.01) {
                    const a = influence * influence * 0.5;
                    ctx.beginPath();
                    ctx.arc(x, y, 1.8 * influence, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(27, 58, 92, ${a})`;
                    ctx.fill();
                }
            }
        }

        requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
}

// --- Scroll Progress Bar ---
function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = progress + '%';
    }, { passive: true });
}


// --- Contact Grid (multi-colour, mouse-reactive, local area only) ---
function initContactGrid() {
    const canvas = document.getElementById('contactGrid');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h;
    const spacing = 50;
    const radius = 180;
    let mouse = { x: -1000, y: -1000 };

    const palette = [
        { r: 80, g: 140, b: 200 },   // soft blue
        { r: 150, g: 100, b: 190 },   // lavender
        { r: 90, g: 170, b: 160 },    // teal
        { r: 200, g: 140, b: 90 },    // warm gold
    ];

    const section = canvas.parentElement;

    section.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    section.addEventListener('mouseleave', () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });

    function resize() {
        const rect = section.getBoundingClientRect();
        w = canvas.width = rect.width;
        h = canvas.height = rect.height;
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);

        // Only draw lines in a local window around the cursor
        const lineRange = radius + spacing;

        // horizontal lines — only segments near mouse
        for (let y = spacing; y < h; y += spacing) {
            if (Math.abs(mouse.y - y) > lineRange) continue;
            const x1 = Math.max(0, mouse.x - lineRange);
            const x2 = Math.min(w, mouse.x + lineRange);
            // fade based on distance from mouse center
            for (let seg = Math.floor(x1 / spacing) * spacing; seg < x2; seg += spacing) {
                const sx = Math.max(x1, seg);
                const ex = Math.min(x2, seg + spacing);
                const midX = (sx + ex) / 2;
                const dx = mouse.x - midX, dy = mouse.y - y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const inf = Math.max(0, 1 - dist / radius);
                if (inf > 0.02) {
                    ctx.beginPath(); ctx.moveTo(sx, y); ctx.lineTo(ex, y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${inf * inf * 0.15})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        // vertical lines — only segments near mouse
        for (let x = spacing; x < w; x += spacing) {
            if (Math.abs(mouse.x - x) > lineRange) continue;
            const y1 = Math.max(0, mouse.y - lineRange);
            const y2 = Math.min(h, mouse.y + lineRange);
            for (let seg = Math.floor(y1 / spacing) * spacing; seg < y2; seg += spacing) {
                const sy = Math.max(y1, seg);
                const ey = Math.min(y2, seg + spacing);
                const midY = (sy + ey) / 2;
                const dx = mouse.x - x, dy = mouse.y - midY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const inf = Math.max(0, 1 - dist / radius);
                if (inf > 0.02) {
                    ctx.beginPath(); ctx.moveTo(x, sy); ctx.lineTo(x, ey);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${inf * inf * 0.15})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        // colored dots at intersections near mouse only
        const dotRange = radius;
        const startX = Math.max(1, Math.floor((mouse.x - dotRange) / spacing)) * spacing;
        const endX = Math.min(w, mouse.x + dotRange);
        const startY = Math.max(1, Math.floor((mouse.y - dotRange) / spacing)) * spacing;
        const endY = Math.min(h, mouse.y + dotRange);

        for (let x = startX; x <= endX; x += spacing) {
            for (let y = startY; y <= endY; y += spacing) {
                const dx = mouse.x - x, dy = mouse.y - y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const inf = Math.max(0, 1 - dist / radius);
                if (inf > 0.05) {
                    const ci = ((Math.floor(x / spacing) + Math.floor(y / spacing)) % palette.length);
                    const c = palette[ci];
                    const a = inf * inf * 0.45;
                    ctx.beginPath();
                    ctx.arc(x, y, 1.8 * inf, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${a})`;
                    ctx.fill();
                }
            }
        }

        requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
}

// --- Init ---
initAnimations();
initRotatingText();
initHeroGrid();
initContactGrid();
initScrollProgress();

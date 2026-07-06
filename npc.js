/* ═══════════════════════════════════════════════════════════
   NPC MASCOT ENGINE — 喜婚记 Wedding Made Simple
   Living bride & groom characters
   ═══════════════════════════════════════════════════════════ */

const NPC = (() => {
    const RED = '#c41e3a';
    const PINK = '#e8899a';
    const SKIN = '#fce4d6';
    const HAIR_DARK = '#2c1810';
    const SUIT_DARK = '#1a1a2e';
    const WHITE = '#ffffff';

    // ── SVG CHARACTER DEFINITIONS ─────────────────────────────
    function brideSVG(size = 90) {
        const s = size / 90;
        return `<svg class="npc-sprite npc-bride-sprite" viewBox="0 0 90 120" width="${size}" height="${size * 1.33}">
            <g class="body-group">
                <!-- Dress -->
                <g class="dress-sway">
                    <path d="M25 65 Q20 95 15 115 Q45 122 75 115 Q70 95 65 65 Z" fill="${WHITE}" stroke="${RED}" stroke-width="1.5"/>
                    <path d="M30 75 Q35 85 45 88 Q55 85 60 75" fill="none" stroke="${PINK}" stroke-width="0.8" opacity="0.5"/>
                    <path d="M25 90 Q45 96 65 90" fill="none" stroke="${PINK}" stroke-width="0.6" opacity="0.4"/>
                </g>
                <!-- Body -->
                <path d="M32 50 Q30 58 28 65 Q45 68 62 65 Q60 58 58 50 Z" fill="${WHITE}" stroke="${RED}" stroke-width="1.5"/>
                <!-- Collar detail -->
                <path d="M38 50 L45 56 L52 50" fill="none" stroke="${RED}" stroke-width="1" opacity="0.6"/>
                <!-- Arms -->
                <g class="arm-wave">
                    <path d="M30 55 Q22 60 18 55 Q16 52 20 50" fill="${SKIN}" stroke="${RED}" stroke-width="1.2"/>
                </g>
                <path d="M60 55 Q68 60 72 55 Q74 52 70 50" fill="${SKIN}" stroke="${RED}" stroke-width="1.2"/>
                <!-- Head -->
                <circle cx="45" cy="38" r="16" fill="${SKIN}" stroke="${RED}" stroke-width="1.5"/>
                <!-- Hair -->
                <g class="hair-sway">
                    <path d="M29 35 Q29 18 45 16 Q61 18 61 35 Q58 28 45 26 Q32 28 29 35 Z" fill="${HAIR_DARK}" stroke="${RED}" stroke-width="1"/>
                    <path d="M29 35 Q27 42 26 48" fill="none" stroke="${HAIR_DARK}" stroke-width="3" stroke-linecap="round"/>
                    <path d="M61 35 Q63 42 64 48" fill="none" stroke="${HAIR_DARK}" stroke-width="3" stroke-linecap="round"/>
                </g>
                <!-- Flower crown -->
                <circle cx="35" cy="22" r="3" fill="${RED}" opacity="0.8"/>
                <circle cx="42" cy="19" r="2.5" fill="${PINK}"/>
                <circle cx="49" cy="19" r="2.5" fill="${RED}" opacity="0.7"/>
                <circle cx="55" cy="22" r="3" fill="${PINK}" opacity="0.8"/>
                <circle cx="38" cy="18" r="1.5" fill="${WHITE}" opacity="0.6"/>
                <!-- Face -->
                <g class="eyes">
                    <ellipse cx="39" cy="37" rx="2.2" ry="2.5" fill="${HAIR_DARK}"/>
                    <ellipse cx="51" cy="37" rx="2.2" ry="2.5" fill="${HAIR_DARK}"/>
                    <circle cx="40" cy="36" r="0.8" fill="${WHITE}" opacity="0.8"/>
                    <circle cx="52" cy="36" r="0.8" fill="${WHITE}" opacity="0.8"/>
                </g>
                <!-- Blush -->
                <ellipse cx="35" cy="41" rx="3" ry="1.5" fill="${PINK}" opacity="0.35"/>
                <ellipse cx="55" cy="41" rx="3" ry="1.5" fill="${PINK}" opacity="0.35"/>
                <!-- Smile -->
                <path d="M42 43 Q45 46 48 43" fill="none" stroke="${RED}" stroke-width="1" stroke-linecap="round"/>
            </g>
            <!-- Particles container -->
            <foreignObject x="5" y="-10" width="80" height="80" class="npc-particles-fo" style="overflow:visible;pointer-events:none;"/>
        </svg>`;
    }

    function groomSVG(size = 90) {
        const s = size / 90;
        return `<svg class="npc-sprite npc-groom-sprite" viewBox="0 0 90 120" width="${size}" height="${size * 1.33}">
            <g class="body-group">
                <!-- Pants -->
                <path d="M30 80 L28 115 Q38 117 45 115 Q52 117 62 115 L60 80 Z" fill="${SUIT_DARK}" stroke="${RED}" stroke-width="1"/>
                <!-- Jacket -->
                <path d="M30 50 Q28 60 27 80 Q45 83 63 80 Q62 60 60 50 Z" fill="${SUIT_DARK}" stroke="${RED}" stroke-width="1.5"/>
                <!-- Shirt & Tie -->
                <path d="M40 50 L45 52 L50 50 L50 72 L40 72 Z" fill="${WHITE}" stroke="none"/>
                <path d="M43 52 L45 55 L47 52 L46 65 L45 67 L44 65 Z" fill="${RED}"/>
                <!-- Lapels -->
                <path d="M40 50 L35 55 L38 70" fill="none" stroke="${RED}" stroke-width="0.8" opacity="0.5"/>
                <path d="M50 50 L55 55 L52 70" fill="none" stroke="${RED}" stroke-width="0.8" opacity="0.5"/>
                <!-- Arms -->
                <g class="arm-wave">
                    <path d="M28 55 Q20 62 16 57 Q14 53 18 50" fill="${SUIT_DARK}" stroke="${RED}" stroke-width="1.2"/>
                    <circle cx="16" cy="56" r="4" fill="${SKIN}" stroke="${RED}" stroke-width="0.8"/>
                </g>
                <path d="M62 55 Q70 62 74 57 Q76 53 72 50" fill="${SUIT_DARK}" stroke="${RED}" stroke-width="1.2"/>
                <circle cx="74" cy="56" r="4" fill="${SKIN}" stroke="${RED}" stroke-width="0.8"/>
                <!-- Head -->
                <circle cx="45" cy="38" r="15" fill="${SKIN}" stroke="${RED}" stroke-width="1.5"/>
                <!-- Hair -->
                <path d="M30 35 Q30 20 45 18 Q60 20 60 35 Q57 28 45 27 Q33 28 30 35 Z" fill="${HAIR_DARK}" stroke="${RED}" stroke-width="1"/>
                <path d="M35 22 Q40 19 48 20" fill="none" stroke="${HAIR_DARK}" stroke-width="2.5" stroke-linecap="round"/>
                <!-- Face -->
                <g class="eyes">
                    <ellipse cx="39" cy="37" rx="2" ry="2.3" fill="${HAIR_DARK}"/>
                    <ellipse cx="51" cy="37" rx="2" ry="2.3" fill="${HAIR_DARK}"/>
                    <circle cx="40" cy="36" r="0.7" fill="${WHITE}" opacity="0.8"/>
                    <circle cx="52" cy="36" r="0.7" fill="${WHITE}" opacity="0.8"/>
                </g>
                <!-- Slight blush -->
                <ellipse cx="35" cy="41" rx="2.5" ry="1.2" fill="${PINK}" opacity="0.25"/>
                <ellipse cx="55" cy="41" rx="2.5" ry="1.2" fill="${PINK}" opacity="0.25"/>
                <!-- Smile -->
                <path d="M42 43 Q45 45.5 48 43" fill="none" stroke="${RED}" stroke-width="1" stroke-linecap="round"/>
                <!-- Glasses (subtle) -->
                <circle cx="39" cy="37" r="5" fill="none" stroke="${HAIR_DARK}" stroke-width="0.6" opacity="0.3"/>
                <circle cx="51" cy="37" r="5" fill="none" stroke="${HAIR_DARK}" stroke-width="0.6" opacity="0.3"/>
                <path d="M44 37 L46 37" fill="none" stroke="${HAIR_DARK}" stroke-width="0.5" opacity="0.3"/>
            </g>
        </svg>`;
    }

    // ── STATE MACHINE ─────────────────────────────────────────
    const STATES = {
        idle: { duration: null, particles: null },
        happy: { duration: 1500, particles: ['✨', '💕'] },
        celebrating: { duration: 1600, particles: ['🎉', '✨', '💫'] },
        sad: { duration: 3000, particles: ['💧'] },
        thinking: { duration: 2500, particles: ['💭', '❓'] },
        sleeping: { duration: null, particles: null },
        walking: { duration: 2000, particles: null },
        waving: { duration: 1600, particles: ['👋'] },
        dancing: { duration: 3000, particles: ['🎵', '🎶', '✨'] }
    };

    const IDLE_SPEECHES_ZH = [
        '你好呀~', '今天真开心！', '婚礼加油！', '一起规划吧~',
        '好期待呢~', '💕', '嘻嘻~', '要幸福哦！'
    ];
    const IDLE_SPEECHES_EN = [
        'Hello~', "So excited!", "Let's plan!", 'Wedding time~',
        "Can't wait!", '💕', 'Hehe~', 'Be happy!'
    ];

    class NPCCharacter {
        constructor(type, containerEl) {
            this.type = type; // 'bride' or 'groom'
            this.el = containerEl;
            this.state = 'idle';
            this.stateTimer = null;
            this.speechTimer = null;
            this.idleTimer = null;
            this.clickCount = 0;
            this.init();
        }

        init() {
            const size = window.innerWidth <= 480 ? 70 : (window.innerWidth >= 768 ? 100 : 90);
            const svgHTML = this.type === 'bride' ? brideSVG(size) : groomSVG(size);

            this.el.innerHTML = `
                ${svgHTML}
                <div class="npc-speech"></div>
                <div class="npc-zzz">z</div>
                <div class="npc-hearts">${'<span class="npc-heart">❤</span>'.repeat(3)}</div>
                <div class="npc-particles"></div>
            `;

            this.spriteEl = this.el.querySelector('.npc-sprite');
            this.speechEl = this.el.querySelector('.npc-speech');
            this.heartsEl = this.el.querySelector('.npc-hearts');
            this.particlesEl = this.el.querySelector('.npc-particles');

            this.spriteEl.addEventListener('click', (e) => this.onClick(e));
            this.spriteEl.addEventListener('mouseenter', () => this.onHover());
            this.spriteEl.addEventListener('mouseleave', () => this.onHoverEnd());

            this.startIdleLoop();
        }

        setState(newState, duration) {
            if (this.stateTimer) clearTimeout(this.stateTimer);
            this.el.className = this.el.className.replace(/npc-state-\w+/g, '').trim();
            this.state = newState;

            if (newState !== 'idle') {
                this.el.classList.add(`npc-state-${newState}`);
            }

            const stateInfo = STATES[newState];
            if (stateInfo && stateInfo.particles) {
                this.emitParticles(stateInfo.particles);
            }

            const dur = duration || (stateInfo && stateInfo.duration);
            if (dur) {
                this.stateTimer = setTimeout(() => this.setState('idle'), dur);
            }
        }

        speak(text, duration = 2500) {
            if (this.speechTimer) clearTimeout(this.speechTimer);
            this.speechEl.textContent = text;
            this.speechEl.classList.add('visible');
            this.speechTimer = setTimeout(() => {
                this.speechEl.classList.remove('visible');
            }, duration);
        }

        emitParticles(emojis) {
            this.particlesEl.innerHTML = '';
            emojis.forEach((emoji, i) => {
                const p = document.createElement('span');
                p.className = 'npc-particle';
                p.textContent = emoji;
                p.style.left = (15 + Math.random() * 50) + '%';
                p.style.animationDelay = (i * 0.15) + 's';
                this.particlesEl.appendChild(p);
            });
            setTimeout(() => { this.particlesEl.innerHTML = ''; }, 1500);
        }

        emitHearts() {
            const hearts = this.heartsEl.querySelectorAll('.npc-heart');
            hearts.forEach((h, i) => {
                h.classList.remove('animate');
                h.style.left = (5 + Math.random() * 40) + 'px';
                void h.offsetWidth;
                setTimeout(() => h.classList.add('animate'), i * 200);
            });
        }

        onClick(e) {
            this.clickCount++;

            // Tap ripple
            const ripple = document.createElement('div');
            ripple.className = 'npc-tap-ripple';
            const rect = this.spriteEl.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            this.spriteEl.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);

            if (this.clickCount % 5 === 0) {
                this.setState('dancing', 3000);
                this.emitHearts();
                const lang = document.documentElement.lang || localStorage.getItem('wedding_lang') || 'zh';
                this.speak(lang === 'en' ? "Let's dance!" : '一起跳舞吧！');
            } else if (this.clickCount % 3 === 0) {
                this.setState('celebrating', 1600);
                this.speak(this.getRandomSpeech());
                NPC.confetti();
            } else {
                this.setState('happy', 1500);
                this.emitHearts();
                this.speak(this.getRandomSpeech());
            }
        }

        onHover() {
            if (this.state === 'idle' || this.state === 'sleeping') {
                this.setState('waving', 1600);
                const lang = document.documentElement.lang || localStorage.getItem('wedding_lang') || 'zh';
                this.speak(lang === 'en' ? 'Hi there!' : '嗨~');
            }
        }

        onHoverEnd() {
            // Natural return to idle handled by state timer
        }

        getRandomSpeech() {
            const lang = document.documentElement.lang || localStorage.getItem('wedding_lang') || 'zh';
            const list = lang === 'en' ? IDLE_SPEECHES_EN : IDLE_SPEECHES_ZH;
            return list[Math.floor(Math.random() * list.length)];
        }

        startIdleLoop() {
            const tick = () => {
                if (this.state !== 'idle') {
                    this.idleTimer = setTimeout(tick, 5000);
                    return;
                }

                const roll = Math.random();
                if (roll < 0.15) {
                    this.speak(this.getRandomSpeech(), 2000);
                } else if (roll < 0.2) {
                    this.setState('thinking', 2500);
                } else if (roll < 0.23) {
                    this.setState('sleeping');
                    setTimeout(() => {
                        if (this.state === 'sleeping') this.setState('idle');
                    }, 6000);
                }

                const next = 6000 + Math.random() * 10000;
                this.idleTimer = setTimeout(tick, next);
            };
            this.idleTimer = setTimeout(tick, 4000 + Math.random() * 3000);
        }

        destroy() {
            clearTimeout(this.stateTimer);
            clearTimeout(this.speechTimer);
            clearTimeout(this.idleTimer);
        }
    }

    // ── PUBLIC API ────────────────────────────────────────────
    let bride = null;
    let groom = null;
    let layer = null;

    function init() {
        if (layer) return;
        layer = document.createElement('div');
        layer.className = 'npc-layer';
        layer.innerHTML = `
            <div class="npc-container npc-bride"></div>
            <div class="npc-container npc-groom"></div>
        `;
        document.body.appendChild(layer);

        bride = new NPCCharacter('bride', layer.querySelector('.npc-bride'));
        groom = new NPCCharacter('groom', layer.querySelector('.npc-groom'));
    }

    function react(event) {
        if (!bride || !groom) return;
        const lang = document.documentElement.lang || localStorage.getItem('wedding_lang') || 'zh';

        switch (event) {
            case 'save':
                bride.setState('happy', 1500);
                groom.setState('celebrating', 1600);
                bride.speak(lang === 'en' ? 'Saved!' : '保存好了！');
                groom.emitParticles(['✨', '💾']);
                break;
            case 'complete':
                bride.setState('celebrating', 1600);
                groom.setState('dancing', 3000);
                bride.emitHearts();
                groom.speak(lang === 'en' ? 'Great job!' : '太棒了！');
                confetti();
                break;
            case 'error':
                bride.setState('sad', 3000);
                groom.setState('thinking', 2500);
                bride.speak(lang === 'en' ? 'Oh no...' : '哎呀...');
                break;
            case 'delete':
                bride.setState('sad', 2000);
                groom.setState('sad', 2000);
                groom.speak(lang === 'en' ? 'Removed~' : '删掉了~');
                break;
            case 'add':
                bride.setState('happy', 1500);
                groom.setState('happy', 1500);
                bride.speak(lang === 'en' ? 'Nice!' : '好棒！');
                bride.emitParticles(['✨', '💕']);
                break;
            case 'budget':
                groom.setState('thinking', 2500);
                groom.speak(lang === 'en' ? 'Let me calculate...' : '算算看...');
                break;
            case 'rsvp':
                bride.setState('celebrating', 1600);
                groom.setState('celebrating', 1600);
                bride.speak(lang === 'en' ? 'New guest!' : '新来宾！');
                groom.emitHearts();
                confetti();
                break;
            case 'wish':
                bride.setState('happy', 1500);
                bride.emitHearts();
                bride.speak(lang === 'en' ? 'So sweet!' : '好甜蜜！');
                break;
            case 'langSwitch':
                bride.setState('waving', 1600);
                groom.setState('waving', 1600);
                bride.speak(lang === 'en' ? 'English!' : '中文！');
                break;
            case 'pageLoad':
                bride.setState('waving', 1600);
                groom.setState('happy', 1500);
                bride.speak(lang === 'en' ? 'Welcome!' : '欢迎！');
                break;
        }
    }

    function confetti() {
        const container = document.createElement('div');
        container.className = 'npc-confetti-container';
        const colors = [RED, PINK, '#ffd700', '#ff6b8a', '#c41e3a', '#e8899a'];
        for (let i = 0; i < 30; i++) {
            const piece = document.createElement('div');
            piece.className = 'npc-confetti-piece';
            piece.style.left = Math.random() * 100 + '%';
            piece.style.background = colors[Math.floor(Math.random() * colors.length)];
            piece.style.animationDelay = Math.random() * 0.8 + 's';
            piece.style.animationDuration = (2 + Math.random() * 1.5) + 's';
            piece.style.width = (5 + Math.random() * 6) + 'px';
            piece.style.height = (5 + Math.random() * 6) + 'px';
            piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '1px';
            container.appendChild(piece);
        }
        document.body.appendChild(container);
        setTimeout(() => container.remove(), 4000);
    }

    function authScene(containerEl) {
        if (!containerEl) return;
        containerEl.classList.add('auth-npc-scene');
        containerEl.innerHTML = `
            ${brideSVG(80)}
            <div class="auth-floating-hearts">
                <span class="auth-heart">❤</span>
                <span class="auth-heart">❤</span>
                <span class="auth-heart">❤</span>
            </div>
            ${groomSVG(80)}
        `;
    }

    function destroy() {
        if (bride) bride.destroy();
        if (groom) groom.destroy();
        if (layer) layer.remove();
        bride = null;
        groom = null;
        layer = null;
    }

    return { init, react, confetti, authScene, destroy, brideSVG, groomSVG };
})();

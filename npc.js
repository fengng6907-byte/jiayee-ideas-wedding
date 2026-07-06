/* ═══════════════════════════════════════════════════════════
   NPC MASCOT ENGINE v2 — 喜婚记 Wedding Made Simple
   Reactive living bride & groom with real-time animation
   ═══════════════════════════════════════════════════════════ */

const NPC = (() => {
    const RED = '#c41e3a';
    const PINK = '#e8899a';
    const SKIN = '#fce4d6';
    const HAIR = '#2c1810';
    const SUIT = '#1a1a2e';
    const WHITE = '#fff';
    const BLUSH_ON = 'rgba(232,137,154,0.55)';
    const BLUSH_OFF = 'rgba(232,137,154,0.25)';

    // ── Reactive SVG with individually addressable parts ──────
    function createBrideSVG() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 100 140');
        svg.classList.add('npc-sprite');
        svg.innerHTML = `
            <!-- Dress -->
            <g class="npc-body">
                <g class="npc-dress">
                    <path d="M28 72 Q22 105 16 130 Q50 138 84 130 Q78 105 72 72 Z" fill="${WHITE}" stroke="${RED}" stroke-width="1.8"/>
                    <path d="M33 82 Q40 94 50 97 Q60 94 67 82" fill="none" stroke="${PINK}" stroke-width="0.8" opacity="0.5"/>
                    <path d="M28 100 Q50 107 72 100" fill="none" stroke="${PINK}" stroke-width="0.6" opacity="0.4"/>
                    <path d="M50 72 L50 97" fill="none" stroke="${PINK}" stroke-width="0.5" opacity="0.3"/>
                </g>
                <!-- Torso -->
                <path d="M36 55 Q33 63 30 72 Q50 76 70 72 Q67 63 64 55 Z" fill="${WHITE}" stroke="${RED}" stroke-width="1.5"/>
                <path d="M43 55 L50 62 L57 55" fill="none" stroke="${RED}" stroke-width="1" opacity="0.5"/>

                <!-- Left arm -->
                <g class="npc-arm-left" style="transform-origin:36px 58px">
                    <path d="M34 58 Q24 65 20 60 Q17 56 22 53" fill="${SKIN}" stroke="${RED}" stroke-width="1.2" stroke-linecap="round"/>
                    <circle cx="20" cy="59" r="4" fill="${SKIN}" stroke="${RED}" stroke-width="0.8"/>
                </g>
                <!-- Right arm -->
                <g class="npc-arm-right" style="transform-origin:64px 58px">
                    <path d="M66 58 Q76 65 80 60 Q83 56 78 53" fill="${SKIN}" stroke="${RED}" stroke-width="1.2" stroke-linecap="round"/>
                    <circle cx="80" cy="59" r="4" fill="${SKIN}" stroke="${RED}" stroke-width="0.8"/>
                </g>
            </g>

            <!-- Head group (bounces separately) -->
            <g class="npc-head" style="transform-origin:50px 42px">
                <circle cx="50" cy="42" r="18" fill="${SKIN}" stroke="${RED}" stroke-width="1.5"/>

                <!-- Hair -->
                <g class="npc-hair">
                    <path d="M32 38 Q32 18 50 16 Q68 18 68 38 Q64 30 50 28 Q36 30 32 38 Z" fill="${HAIR}" stroke="${RED}" stroke-width="1"/>
                    <path d="M32 38 Q30 46 28 54" fill="none" stroke="${HAIR}" stroke-width="3.5" stroke-linecap="round"/>
                    <path d="M68 38 Q70 46 72 54" fill="none" stroke="${HAIR}" stroke-width="3.5" stroke-linecap="round"/>
                </g>

                <!-- Flower crown -->
                <circle cx="38" cy="22" r="3.5" fill="${RED}" opacity="0.85"/>
                <circle cx="46" cy="19" r="3" fill="${PINK}"/>
                <circle cx="54" cy="19" r="3" fill="${RED}" opacity="0.7"/>
                <circle cx="62" cy="22" r="3.5" fill="${PINK}" opacity="0.85"/>
                <circle cx="42" cy="17" r="1.8" fill="${WHITE}" opacity="0.5"/>
                <circle cx="58" cy="17" r="1.5" fill="${WHITE}" opacity="0.4"/>

                <!-- Eyes -->
                <g class="npc-eyes">
                    <g class="npc-eye-left">
                        <ellipse cx="42" cy="40" rx="2.8" ry="3.2" fill="${HAIR}"/>
                        <circle class="npc-pupil-left" cx="43" cy="39" r="1" fill="${WHITE}" opacity="0.85"/>
                    </g>
                    <g class="npc-eye-right">
                        <ellipse cx="58" cy="40" rx="2.8" ry="3.2" fill="${HAIR}"/>
                        <circle class="npc-pupil-right" cx="59" cy="39" r="1" fill="${WHITE}" opacity="0.85"/>
                    </g>
                </g>

                <!-- Blush -->
                <ellipse class="npc-blush-left" cx="37" cy="45" rx="4" ry="2" fill="${BLUSH_OFF}"/>
                <ellipse class="npc-blush-right" cx="63" cy="45" rx="4" ry="2" fill="${BLUSH_OFF}"/>

                <!-- Mouth -->
                <g class="npc-mouth">
                    <path class="npc-mouth-path" d="M46 48 Q50 52 54 48" fill="none" stroke="${RED}" stroke-width="1.2" stroke-linecap="round"/>
                </g>
            </g>

            <!-- Speech bubble (initially hidden) -->
            <g class="npc-speech-group" opacity="0">
                <rect x="10" y="-25" width="80" height="28" rx="14" fill="white" stroke="${RED}" stroke-width="1.5"/>
                <polygon points="45,-1 50,8 55,-1" fill="white" stroke="${RED}" stroke-width="1.5" stroke-linejoin="round"/>
                <rect x="44" y="-3" width="12" height="4" fill="white"/>
                <text class="npc-speech-text" x="50" y="-7" text-anchor="middle" font-size="10" font-weight="600" fill="${RED}" font-family="Inter,-apple-system,sans-serif"></text>
            </g>
        `;
        return svg;
    }

    function createGroomSVG() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 100 140');
        svg.classList.add('npc-sprite');
        svg.innerHTML = `
            <g class="npc-body">
                <!-- Pants -->
                <path d="M33 88 L30 130 Q42 133 50 130 Q58 133 70 130 L67 88 Z" fill="${SUIT}" stroke="${RED}" stroke-width="1"/>
                <!-- Jacket -->
                <path d="M33 55 Q30 66 28 88 Q50 92 72 88 Q70 66 67 55 Z" fill="${SUIT}" stroke="${RED}" stroke-width="1.5"/>
                <!-- Shirt -->
                <path d="M44 55 L50 58 L56 55 L56 80 L44 80 Z" fill="${WHITE}"/>
                <!-- Tie -->
                <path d="M48 58 L50 61 L52 58 L51 73 L50 75 L49 73 Z" fill="${RED}"/>
                <!-- Lapels -->
                <path d="M44 55 L38 62 L42 78" fill="none" stroke="${RED}" stroke-width="0.8" opacity="0.4"/>
                <path d="M56 55 L62 62 L58 78" fill="none" stroke="${RED}" stroke-width="0.8" opacity="0.4"/>

                <!-- Left arm -->
                <g class="npc-arm-left" style="transform-origin:32px 60px">
                    <path d="M32 60 Q22 68 18 62 Q15 57 20 54" fill="${SUIT}" stroke="${RED}" stroke-width="1.2"/>
                    <circle cx="18" cy="61" r="4.5" fill="${SKIN}" stroke="${RED}" stroke-width="0.8"/>
                </g>
                <!-- Right arm -->
                <g class="npc-arm-right" style="transform-origin:68px 60px">
                    <path d="M68 60 Q78 68 82 62 Q85 57 80 54" fill="${SUIT}" stroke="${RED}" stroke-width="1.2"/>
                    <circle cx="82" cy="61" r="4.5" fill="${SKIN}" stroke="${RED}" stroke-width="0.8"/>
                </g>
            </g>

            <g class="npc-head" style="transform-origin:50px 42px">
                <circle cx="50" cy="42" r="17" fill="${SKIN}" stroke="${RED}" stroke-width="1.5"/>

                <!-- Hair -->
                <path d="M33 38 Q33 20 50 18 Q67 20 67 38 Q63 30 50 28 Q37 30 33 38 Z" fill="${HAIR}" stroke="${RED}" stroke-width="1"/>
                <path d="M38 23 Q44 19 53 21" fill="none" stroke="${HAIR}" stroke-width="3" stroke-linecap="round"/>

                <!-- Eyes -->
                <g class="npc-eyes">
                    <g class="npc-eye-left">
                        <ellipse cx="43" cy="40" rx="2.5" ry="2.8" fill="${HAIR}"/>
                        <circle class="npc-pupil-left" cx="44" cy="39" r="0.9" fill="${WHITE}" opacity="0.85"/>
                    </g>
                    <g class="npc-eye-right">
                        <ellipse cx="57" cy="40" rx="2.5" ry="2.8" fill="${HAIR}"/>
                        <circle class="npc-pupil-right" cx="58" cy="39" r="0.9" fill="${WHITE}" opacity="0.85"/>
                    </g>
                </g>

                <!-- Blush -->
                <ellipse class="npc-blush-left" cx="38" cy="45" rx="3.5" ry="1.5" fill="${BLUSH_OFF}"/>
                <ellipse class="npc-blush-right" cx="62" cy="45" rx="3.5" ry="1.5" fill="${BLUSH_OFF}"/>

                <!-- Mouth -->
                <g class="npc-mouth">
                    <path class="npc-mouth-path" d="M46 48 Q50 51 54 48" fill="none" stroke="${RED}" stroke-width="1.1" stroke-linecap="round"/>
                </g>

                <!-- Glasses -->
                <circle cx="43" cy="40" r="6" fill="none" stroke="${HAIR}" stroke-width="0.7" opacity="0.25"/>
                <circle cx="57" cy="40" r="6" fill="none" stroke="${HAIR}" stroke-width="0.7" opacity="0.25"/>
                <path d="M49 40 L51 40" fill="none" stroke="${HAIR}" stroke-width="0.6" opacity="0.25"/>
            </g>

            <g class="npc-speech-group" opacity="0">
                <rect x="10" y="-25" width="80" height="28" rx="14" fill="white" stroke="${RED}" stroke-width="1.5"/>
                <polygon points="45,-1 50,8 55,-1" fill="white" stroke="${RED}" stroke-width="1.5" stroke-linejoin="round"/>
                <rect x="44" y="-3" width="12" height="4" fill="white"/>
                <text class="npc-speech-text" x="50" y="-7" text-anchor="middle" font-size="10" font-weight="600" fill="${RED}" font-family="Inter,-apple-system,sans-serif"></text>
            </g>
        `;
        return svg;
    }

    // ── ANIMATION ENGINE ──────────────────────────────────────
    class Animator {
        constructor(svg) {
            this.svg = svg;
            this.head = svg.querySelector('.npc-head');
            this.body = svg.querySelector('.npc-body');
            this.armL = svg.querySelector('.npc-arm-left');
            this.armR = svg.querySelector('.npc-arm-right');
            this.eyes = svg.querySelector('.npc-eyes');
            this.eyeL = svg.querySelector('.npc-eye-left');
            this.eyeR = svg.querySelector('.npc-eye-right');
            this.pupilL = svg.querySelector('.npc-pupil-left');
            this.pupilR = svg.querySelector('.npc-pupil-right');
            this.blushL = svg.querySelector('.npc-blush-left');
            this.blushR = svg.querySelector('.npc-blush-right');
            this.mouth = svg.querySelector('.npc-mouth-path');
            this.speechGroup = svg.querySelector('.npc-speech-group');
            this.speechText = svg.querySelector('.npc-speech-text');
            this.dress = svg.querySelector('.npc-dress');
            this.hair = svg.querySelector('.npc-hair');

            this.t = 0;
            this.state = 'idle';
            this.stateT = 0;
            this.expressionQueue = [];
            this.blinkTimer = 0;
            this.nextBlink = 2 + Math.random() * 3;
            this.isBlinking = false;
            this.speechTimer = 0;
            this.bounceV = 0;
            this.bounceY = 0;
            this.headTilt = 0;
            this.targetHeadTilt = 0;
            this.armLAngle = 0;
            this.armRAngle = 0;
            this.targetArmL = 0;
            this.targetArmR = 0;
            this.squash = 1;
            this.targetSquash = 1;
            this.excitement = 0;
            this.targetExcitement = 0;
            this.mouthOpen = 0;
            this.targetMouthOpen = 0;
            this.jumpV = 0;
            this.jumpY = 0;
            this.wavePhase = 0;
            this.isWaving = false;
            this.waveCycles = 0;
            this.lookX = 0;
            this.lookY = 0;
            this.targetLookX = 0;
            this.targetLookY = 0;
        }

        update(dt) {
            this.t += dt;
            this.stateT += dt;

            // Blinking
            this.blinkTimer += dt;
            if (!this.isBlinking && this.blinkTimer > this.nextBlink) {
                this.isBlinking = true;
                this.blinkTimer = 0;
            }
            if (this.isBlinking) {
                if (this.blinkTimer > 0.15) {
                    this.isBlinking = false;
                    this.blinkTimer = 0;
                    this.nextBlink = 2 + Math.random() * 4;
                }
            }

            // Idle breathing
            const breathe = Math.sin(this.t * 2.1) * 0.008;
            const breatheY = Math.sin(this.t * 2.1) * 0.5;

            // Smoothing
            const lerp = (a, b, f) => a + (b - a) * Math.min(f, 1);
            this.headTilt = lerp(this.headTilt, this.targetHeadTilt, dt * 6);
            this.armLAngle = lerp(this.armLAngle, this.targetArmL, dt * 8);
            this.armRAngle = lerp(this.armRAngle, this.targetArmR, dt * 8);
            this.squash = lerp(this.squash, this.targetSquash, dt * 10);
            this.excitement = lerp(this.excitement, this.targetExcitement, dt * 4);
            this.mouthOpen = lerp(this.mouthOpen, this.targetMouthOpen, dt * 10);
            this.lookX = lerp(this.lookX, this.targetLookX, dt * 5);
            this.lookY = lerp(this.lookY, this.targetLookY, dt * 5);

            // Jump physics
            this.jumpY += this.jumpV * dt;
            this.jumpV += 600 * dt;
            if (this.jumpY >= 0) {
                this.jumpY = 0;
                this.jumpV = 0;
            }

            // Waving
            if (this.isWaving) {
                this.wavePhase += dt * 12;
                this.targetArmR = -40 + Math.sin(this.wavePhase) * 25;
                if (this.wavePhase > Math.PI * 2 * this.waveCycles) {
                    this.isWaving = false;
                    this.targetArmR = 0;
                }
            }

            // State-specific animation
            if (this.state === 'excited') {
                this.targetHeadTilt = Math.sin(this.stateT * 8) * 5;
                this.targetSquash = 1 + Math.sin(this.stateT * 10) * 0.04;
                if (this.stateT < 0.1) { this.jumpV = -250; }
            } else if (this.state === 'happy') {
                this.targetHeadTilt = Math.sin(this.stateT * 4) * 3;
                this.targetSquash = 1 + Math.sin(this.stateT * 6) * 0.02;
            } else if (this.state === 'thinking') {
                this.targetHeadTilt = 8 + Math.sin(this.stateT * 1.5) * 3;
                this.targetArmL = -15;
            } else if (this.state === 'surprised') {
                this.targetSquash = 1.06;
                this.targetMouthOpen = 1;
                if (this.stateT < 0.05) { this.jumpV = -150; }
            } else if (this.state === 'celebrating') {
                this.targetHeadTilt = Math.sin(this.stateT * 6) * 8;
                this.targetSquash = 1 + Math.sin(this.stateT * 8) * 0.05;
                if (Math.sin(this.stateT * 4) > 0.7 && this.jumpY === 0) {
                    this.jumpV = -200;
                }
                this.targetArmL = -30 + Math.sin(this.stateT * 5) * 20;
                this.targetArmR = -30 + Math.sin(this.stateT * 5 + 1) * 20;
            } else if (this.state === 'dancing') {
                this.targetHeadTilt = Math.sin(this.stateT * 5) * 10;
                this.targetSquash = 1 + Math.sin(this.stateT * 10) * 0.03;
                this.targetArmL = -20 + Math.sin(this.stateT * 5) * 30;
                this.targetArmR = -20 + Math.sin(this.stateT * 5 + Math.PI) * 30;
                if (Math.sin(this.stateT * 5) > 0.9 && this.jumpY === 0) {
                    this.jumpV = -150;
                }
            } else if (this.state === 'shy') {
                this.targetHeadTilt = -5;
                this.targetArmL = 10;
                this.targetArmR = 10;
            } else if (this.state === 'idle') {
                this.targetHeadTilt = Math.sin(this.t * 0.5) * 1.5;
                this.targetSquash = 1;
                this.targetArmL = Math.sin(this.t * 0.7) * 3;
                this.targetArmR = Math.sin(this.t * 0.7 + 0.5) * 3;
                this.targetExcitement = 0;
                this.targetMouthOpen = 0;
            }

            // ── Apply transforms ──────────────────────────────
            const totalY = breatheY + this.jumpY;
            const sx = 2 - this.squash;
            const sy = this.squash;

            if (this.body) {
                this.body.setAttribute('transform',
                    `translate(0 ${totalY}) scale(1 ${1 + breathe})`);
            }
            if (this.head) {
                this.head.setAttribute('transform',
                    `translate(0 ${totalY - 1}) rotate(${this.headTilt} 50 42)`);
            }
            if (this.armL) {
                this.armL.setAttribute('transform', `rotate(${this.armLAngle} 36 58)`);
            }
            if (this.armR) {
                this.armR.setAttribute('transform', `rotate(${this.armRAngle} 64 58)`);
            }

            // Eyes blink
            const eyeScaleY = this.isBlinking ? 0.08 : 1;
            if (this.eyeL) this.eyeL.setAttribute('transform', `translate(0 0) scale(1 ${eyeScaleY})`);
            if (this.eyeR) this.eyeR.setAttribute('transform', `translate(0 0) scale(1 ${eyeScaleY})`);

            // Pupil tracking
            if (this.pupilL) {
                this.pupilL.setAttribute('cx', 43 + this.lookX * 1.2);
                this.pupilL.setAttribute('cy', 39 + this.lookY * 0.8);
            }
            if (this.pupilR) {
                this.pupilR.setAttribute('cx', 59 + this.lookX * 1.2);
                this.pupilR.setAttribute('cy', 39 + this.lookY * 0.8);
            }

            // Blush intensity
            const blushColor = this.excitement > 0.3 ? BLUSH_ON : BLUSH_OFF;
            if (this.blushL) this.blushL.setAttribute('fill', blushColor);
            if (this.blushR) this.blushR.setAttribute('fill', blushColor);

            // Mouth shape
            const openAmt = this.mouthOpen;
            if (this.mouth) {
                if (openAmt > 0.5) {
                    this.mouth.setAttribute('d', `M44 47 Q50 ${54 + openAmt * 3} 56 47`);
                    this.mouth.setAttribute('fill', openAmt > 0.7 ? '#d44' : 'none');
                } else {
                    const smile = 0.5 + this.excitement * 0.5;
                    this.mouth.setAttribute('d', `M46 48 Q50 ${48 + smile * 5} 54 48`);
                    this.mouth.setAttribute('fill', 'none');
                }
            }

            // Speech bubble
            if (this.speechTimer > 0) {
                this.speechTimer -= dt;
                this.speechGroup.setAttribute('opacity', this.speechTimer < 0.3 ? this.speechTimer / 0.3 : 1);
            } else {
                this.speechGroup.setAttribute('opacity', 0);
            }

            // SVG root squash/stretch
            this.svg.style.transform = `scaleX(${sx}) scaleY(${sy})`;
        }

        setState(name, duration = 2) {
            this.state = name;
            this.stateT = 0;
            if (duration > 0) {
                setTimeout(() => {
                    if (this.state === name) {
                        this.state = 'idle';
                        this.targetArmL = 0;
                        this.targetArmR = 0;
                        this.targetHeadTilt = 0;
                        this.targetSquash = 1;
                        this.targetMouthOpen = 0;
                        this.targetExcitement = 0;
                    }
                }, duration * 1000);
            }
        }

        speak(text, duration = 2.5) {
            if (this.speechText) this.speechText.textContent = text;
            this.speechTimer = duration;
            this.targetMouthOpen = 0.6;
            setTimeout(() => { this.targetMouthOpen = 0; }, 400);
        }

        wave(cycles = 3) {
            this.isWaving = true;
            this.wavePhase = 0;
            this.waveCycles = cycles;
        }

        jump(force = -220) {
            if (this.jumpY === 0) this.jumpV = force;
        }

        lookAt(x, y) {
            this.targetLookX = Math.max(-2, Math.min(2, x));
            this.targetLookY = Math.max(-1.5, Math.min(1.5, y));
        }

        blush(on) {
            this.targetExcitement = on ? 1 : 0;
        }
    }

    // ── NPC CHARACTER ─────────────────────────────────────────
    class NPCCharacter {
        constructor(type, container) {
            this.type = type;
            this.container = container;
            this.svg = type === 'bride' ? createBrideSVG() : createGroomSVG();
            this.animator = new Animator(this.svg);
            this.container.appendChild(this.svg);
            this.clickCount = 0;

            this.svg.style.cursor = 'pointer';
            this.svg.style.pointerEvents = 'auto';
            this.svg.addEventListener('click', () => this.onClick());
            this.svg.addEventListener('mouseenter', () => this.onHover());
            this.svg.addEventListener('mouseleave', () => this.onLeave());

            this.idleTimer = null;
            this.startIdleBehavior();
        }

        onClick() {
            this.clickCount++;
            const lang = getLang();
            if (this.clickCount % 7 === 0) {
                this.animator.setState('dancing', 3);
                this.animator.blush(true);
                this.animator.speak(lang === 'en' ? "Let's dance!" : '一起跳舞吧！');
                NPC.confetti();
                setTimeout(() => this.animator.blush(false), 3000);
            } else if (this.clickCount % 4 === 0) {
                this.animator.setState('celebrating', 2);
                this.animator.speak(lang === 'en' ? 'Woohoo!' : '太棒了！');
                emitHearts(this.container);
            } else if (this.clickCount % 3 === 0) {
                this.animator.setState('excited', 1.5);
                this.animator.speak(lang === 'en' ? 'Yay!' : '耶！');
                emitParticles(this.container, ['✨', '💕']);
            } else {
                this.animator.setState('happy', 1.2);
                this.animator.jump();
                this.animator.speak(this.getRandomSpeech());
            }
        }

        onHover() {
            if (this.animator.state === 'idle') {
                this.animator.wave(2);
                const lang = getLang();
                this.animator.speak(lang === 'en' ? 'Hi!' : '嗨~', 1.5);
                this.animator.blush(true);
                setTimeout(() => this.animator.blush(false), 2000);
            }
        }

        onLeave() {
            this.animator.targetLookX = 0;
            this.animator.targetLookY = 0;
        }

        getRandomSpeech() {
            const lang = getLang();
            const zh = ['你好呀~', '加油！', '好期待！', '嘻嘻~', '💕', '一起努力！', '好开心！'];
            const en = ['Hello~', 'Go go!', 'Excited!', 'Hehe~', '💕', 'Keep going!', 'So fun!'];
            const list = lang === 'en' ? en : zh;
            return list[Math.floor(Math.random() * list.length)];
        }

        startIdleBehavior() {
            const tick = () => {
                if (this.animator.state === 'idle') {
                    const r = Math.random();
                    if (r < 0.12) {
                        this.animator.speak(this.getRandomSpeech(), 2);
                    } else if (r < 0.18) {
                        this.animator.setState('thinking', 2.5);
                    } else if (r < 0.22) {
                        this.animator.wave(2);
                    }
                }
                this.idleTimer = setTimeout(tick, 5000 + Math.random() * 8000);
            };
            this.idleTimer = setTimeout(tick, 3000 + Math.random() * 4000);
        }

        destroy() {
            clearTimeout(this.idleTimer);
        }
    }

    // ── PARTICLES & EFFECTS ──────────────────────────────────
    function emitParticles(container, emojis) {
        const div = document.createElement('div');
        div.className = 'npc-particles';
        emojis.forEach((e, i) => {
            const s = document.createElement('span');
            s.className = 'npc-particle';
            s.textContent = e;
            s.style.left = (15 + Math.random() * 50) + '%';
            s.style.animationDelay = (i * 0.15) + 's';
            div.appendChild(s);
        });
        container.appendChild(div);
        setTimeout(() => div.remove(), 1500);
    }

    function emitHearts(container) {
        const div = document.createElement('div');
        div.className = 'npc-hearts';
        for (let i = 0; i < 4; i++) {
            const h = document.createElement('span');
            h.className = 'npc-heart animate';
            h.textContent = '❤';
            h.style.left = (5 + Math.random() * 45) + 'px';
            h.style.animationDelay = (i * 0.2) + 's';
            div.appendChild(h);
        }
        container.appendChild(div);
        setTimeout(() => div.remove(), 2000);
    }

    function confetti() {
        const c = document.createElement('div');
        c.className = 'npc-confetti-container';
        const colors = [RED, PINK, '#ffd700', '#ff6b8a', '#c41e3a', '#e8899a', '#fff'];
        for (let i = 0; i < 35; i++) {
            const p = document.createElement('div');
            p.className = 'npc-confetti-piece';
            p.style.left = Math.random() * 100 + '%';
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.animationDelay = Math.random() * 0.8 + 's';
            p.style.animationDuration = (2 + Math.random() * 1.5) + 's';
            p.style.width = (5 + Math.random() * 6) + 'px';
            p.style.height = (5 + Math.random() * 6) + 'px';
            p.style.borderRadius = Math.random() > 0.5 ? '50%' : '1px';
            c.appendChild(p);
        }
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 4000);
    }

    // ── HELPER ────────────────────────────────────────────────
    function getLang() {
        return document.documentElement.lang === 'en' || document.documentElement.lang === '' ?
            (localStorage.getItem('wedding_lang') || 'zh') :
            (document.documentElement.lang.startsWith('en') ? 'en' : 'zh');
    }

    // ── PUBLIC API ────────────────────────────────────────────
    let bride = null;
    let groom = null;
    let layer = null;
    let raf = null;
    let lastTime = 0;

    function animationLoop(time) {
        const dt = Math.min((time - lastTime) / 1000, 0.05);
        lastTime = time;
        if (bride) bride.animator.update(dt);
        if (groom) groom.animator.update(dt);
        raf = requestAnimationFrame(animationLoop);
    }

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

        lastTime = performance.now();
        raf = requestAnimationFrame(animationLoop);

        hookFormEvents();
    }

    // ── FORM EVENT HOOKS ─────────────────────────────────────
    function hookFormEvents() {
        const groomInput = document.getElementById('groom-name');
        const brideInput = document.getElementById('bride-name');
        const dateInput = document.getElementById('wedding-date');

        if (groomInput) {
            let wasEmpty = !groomInput.value;
            groomInput.addEventListener('focus', () => {
                if (groom) {
                    groom.animator.setState('excited', 0);
                    groom.animator.blush(true);
                    const lang = getLang();
                    groom.animator.speak(lang === 'en' ? "That's me!" : '写我的名字！', 2);
                }
                if (bride) bride.animator.lookAt(1.5, 0);
            });
            groomInput.addEventListener('input', () => {
                if (groom) {
                    groom.animator.jump(-120);
                    groom.animator.targetMouthOpen = 0.4;
                    setTimeout(() => { if (groom) groom.animator.targetMouthOpen = 0; }, 200);
                }
            });
            groomInput.addEventListener('blur', () => {
                if (groom) {
                    groom.animator.setState('idle');
                    groom.animator.blush(false);
                    if (groomInput.value && wasEmpty) {
                        groom.animator.setState('celebrating', 2);
                        groom.animator.speak(getLang() === 'en' ? 'Nice name!' : '好名字！');
                        emitParticles(layer.querySelector('.npc-groom'), ['✨', '🎉']);
                        bride.animator.setState('happy', 1.5);
                        bride.animator.wave(2);
                    }
                    wasEmpty = !groomInput.value;
                }
                if (bride) bride.animator.lookAt(0, 0);
            });
        }

        if (brideInput) {
            let wasEmpty = !brideInput.value;
            brideInput.addEventListener('focus', () => {
                if (bride) {
                    bride.animator.setState('excited', 0);
                    bride.animator.blush(true);
                    const lang = getLang();
                    bride.animator.speak(lang === 'en' ? "My turn!" : '轮到我了！', 2);
                }
                if (groom) groom.animator.lookAt(-1.5, 0);
            });
            brideInput.addEventListener('input', () => {
                if (bride) {
                    bride.animator.jump(-120);
                    bride.animator.targetMouthOpen = 0.4;
                    setTimeout(() => { if (bride) bride.animator.targetMouthOpen = 0; }, 200);
                }
            });
            brideInput.addEventListener('blur', () => {
                if (bride) {
                    bride.animator.setState('idle');
                    bride.animator.blush(false);
                    if (brideInput.value && wasEmpty) {
                        bride.animator.setState('celebrating', 2);
                        bride.animator.speak(getLang() === 'en' ? 'Love it!' : '好听！');
                        emitParticles(layer.querySelector('.npc-bride'), ['✨', '💕']);
                        groom.animator.setState('happy', 1.5);
                        groom.animator.wave(2);
                    }
                    wasEmpty = !brideInput.value;
                }
                if (groom) groom.animator.lookAt(0, 0);
            });
        }

        if (dateInput) {
            dateInput.addEventListener('change', () => {
                if (bride && groom && dateInput.value) {
                    bride.animator.setState('celebrating', 3);
                    groom.animator.setState('celebrating', 3);
                    bride.animator.blush(true);
                    groom.animator.blush(true);
                    const lang = getLang();
                    bride.animator.speak(lang === 'en' ? 'Our big day!' : '我们的大日子！', 2.5);
                    setTimeout(() => {
                        groom.animator.speak(lang === 'en' ? "Can't wait!" : '好期待！', 2);
                    }, 800);
                    confetti();
                    emitHearts(layer.querySelector('.npc-bride'));
                    emitHearts(layer.querySelector('.npc-groom'));
                    setTimeout(() => {
                        if (bride) bride.animator.blush(false);
                        if (groom) groom.animator.blush(false);
                    }, 3000);
                }
            });
        }

        // Hook all other inputs for subtle reactions
        document.addEventListener('focusin', (e) => {
            if (e.target.matches('input, textarea, select') &&
                e.target.id !== 'groom-name' && e.target.id !== 'bride-name' && e.target.id !== 'wedding-date') {
                if (bride && bride.animator.state === 'idle') {
                    bride.animator.lookAt(0, -1);
                    bride.animator.targetHeadTilt = -3;
                }
                if (groom && groom.animator.state === 'idle') {
                    groom.animator.lookAt(0, -1);
                    groom.animator.targetHeadTilt = 3;
                }
            }
        });

        document.addEventListener('focusout', (e) => {
            if (e.target.matches('input, textarea, select')) {
                if (bride) { bride.animator.lookAt(0, 0); bride.animator.targetHeadTilt = 0; }
                if (groom) { groom.animator.lookAt(0, 0); groom.animator.targetHeadTilt = 0; }
            }
        });
    }

    // ── REACT TO APP EVENTS ──────────────────────────────────
    function react(event) {
        if (!bride || !groom) return;
        const lang = getLang();
        const b = bride.animator;
        const g = groom.animator;

        switch (event) {
            case 'save':
                b.setState('happy', 1.5);
                b.speak(lang === 'en' ? 'Saved!' : '保存啦！');
                b.jump(-150);
                g.setState('happy', 1.5);
                g.wave(2);
                emitParticles(layer.querySelector('.npc-bride'), ['✨', '💾']);
                break;

            case 'complete':
                b.setState('celebrating', 2.5);
                g.setState('dancing', 3);
                b.blush(true);
                g.blush(true);
                b.speak(lang === 'en' ? 'Great job!' : '太棒了！');
                confetti();
                emitHearts(layer.querySelector('.npc-bride'));
                setTimeout(() => { b.blush(false); g.blush(false); }, 3000);
                break;

            case 'error':
                b.setState('surprised', 1.5);
                g.setState('thinking', 2);
                b.speak(lang === 'en' ? 'Oh no...' : '哎呀...');
                break;

            case 'delete':
                b.setState('surprised', 1);
                g.setState('thinking', 1.5);
                g.speak(lang === 'en' ? 'Gone~' : '删掉了~');
                break;

            case 'add':
                b.setState('happy', 1.5);
                g.setState('happy', 1.5);
                b.jump(-130);
                g.jump(-130);
                b.speak(lang === 'en' ? 'Nice!' : '好棒！');
                emitParticles(layer.querySelector('.npc-bride'), ['✨', '💕']);
                break;

            case 'rsvp':
                b.setState('celebrating', 2);
                g.setState('celebrating', 2);
                b.blush(true);
                g.blush(true);
                b.speak(lang === 'en' ? 'New guest!' : '新来宾！');
                confetti();
                emitHearts(layer.querySelector('.npc-groom'));
                setTimeout(() => { b.blush(false); g.blush(false); }, 2500);
                break;

            case 'langSwitch':
                b.wave(3);
                g.wave(3);
                b.speak(lang === 'en' ? 'English!' : '中文！');
                break;

            case 'pageLoad':
                b.wave(3);
                g.setState('happy', 2);
                g.jump(-180);
                b.speak(lang === 'en' ? 'Welcome!' : '欢迎！', 2.5);
                setTimeout(() => {
                    g.speak(lang === 'en' ? "Let's plan!" : '开始规划吧！', 2);
                }, 1200);
                break;
        }
    }

    // ── AUTH SCENE (static, no animation loop needed) ────────
    function authScene(el) {
        if (!el) return;
        el.classList.add('auth-npc-scene');
        const bSvg = createBrideSVG();
        const gSvg = createGroomSVG();
        bSvg.classList.add('npc-bride-sprite');
        gSvg.classList.add('npc-groom-sprite');

        const hearts = document.createElement('div');
        hearts.className = 'auth-floating-hearts';
        hearts.innerHTML = '<span class="auth-heart">❤</span><span class="auth-heart">❤</span><span class="auth-heart">❤</span>';

        el.appendChild(bSvg);
        el.appendChild(hearts);
        el.appendChild(gSvg);
    }

    function destroy() {
        if (bride) bride.destroy();
        if (groom) groom.destroy();
        if (layer) layer.remove();
        if (raf) cancelAnimationFrame(raf);
        bride = null;
        groom = null;
        layer = null;
    }

    return { init, react, confetti, authScene, destroy };
})();

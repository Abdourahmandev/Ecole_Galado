// École Privée Galado - Animations JavaScript Premium
// Développé pour impressionner la cliente ! 🚀

// ============================================================================
// 1. LOADER D'ÉCRAN AVEC ANIMATION
// ============================================================================
function createLoader() {
    const loader = document.createElement('div');
    loader.id = 'pageLoader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="school-logo">🏫</div>
            <div class="loader-text">École Privée Galado</div>
            <div class="loading-bar">
                <div class="loading-progress"></div>
            </div>
        </div>
    `;
    
    const loaderCSS = `
        #pageLoader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        .loader-content {
            text-align: center;
            color: white;
        }
        .school-logo {
            font-size: 4rem;
            margin-bottom: 20px;
            animation: bounce 2s infinite;
        }
        .loader-text {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 30px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .loading-bar {
            width: 300px;
            height: 6px;
            background: rgba(255,255,255,0.3);
            border-radius: 3px;
            overflow: hidden;
        }
        .loading-progress {
            height: 100%;
            background: white;
            border-radius: 3px;
            animation: loading 3s ease-in-out;
        }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-30px); }
            60% { transform: translateY(-15px); }
        }
        @keyframes loading {
            0% { width: 0%; }
            100% { width: 100%; }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = loaderCSS;
    document.head.appendChild(style);
    document.body.appendChild(loader);
    
    // Disparition du loader après 3 secondes
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }, 3000);
}

// ============================================================================
// 2. SUBTLE BACKGROUND DECORATIONS (NO FLYING ELEMENTS)
// ============================================================================
function createStaticDecorations() {
    // Only static decorative elements - no floating particles
    console.log('✨ Static decorations only - no flying elements');
}

// ============================================================================
// 3. ANIMATIONS D'APPARITION AU SCROLL
// ============================================================================
function initScrollAnimations() {
    const animateCSS = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s ease;
        }
        .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
        }
        .animate-slide-left {
            opacity: 0;
            transform: translateX(-100px);
            transition: all 0.8s ease;
        }
        .animate-slide-left.animated {
            opacity: 1;
            transform: translateX(0);
        }
        .animate-slide-right {
            opacity: 0;
            transform: translateX(100px);
            transition: all 0.8s ease;
        }
        .animate-slide-right.animated {
            opacity: 1;
            transform: translateX(0);
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = animateCSS;
    document.head.appendChild(style);
    
    // Ajouter les classes d'animation aux éléments
    setTimeout(() => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            if (index === 0) section.classList.add('animate-slide-left');
            else if (index % 2 === 0) section.classList.add('animate-slide-right');
            else section.classList.add('animate-on-scroll');
        });
        
        const cards = document.querySelectorAll('.services .card');
        cards.forEach((card, index) => {
            card.classList.add('animate-on-scroll');
            card.style.transitionDelay = `${index * 0.2}s`;
        });
    }, 3500);
    
    // Observer pour déclencher les animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right')
                .forEach(el => observer.observe(el));
    }, 3500);
}

// ============================================================================
// 4. EFFETS MAGIQUES SUR LES CARTES DE SERVICES
// ============================================================================
function enhanceServiceCards() {
    setTimeout(() => {
        const cards = document.querySelectorAll('.services .card');
        
        cards.forEach((card, index) => {
            // Effet de brillance au survol
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.05)';
                this.style.boxShadow = '0 20px 40px rgba(255, 107, 107, 0.3)';
                
                // Ajouter un effet de paillettes
                const sparkle = document.createElement('div');
                sparkle.innerHTML = '✨';
                sparkle.style.cssText = `
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    font-size: 1.5rem;
                    animation: sparkle 1s ease-in-out;
                `;
                this.style.position = 'relative';
                this.appendChild(sparkle);
                
                setTimeout(() => sparkle.remove(), 1000);
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
            });
            
            // Effet de pulsation périodique
            setInterval(() => {
                if (!card.matches(':hover')) {
                    card.style.transform = 'scale(1.02)';
                    setTimeout(() => {
                        card.style.transform = 'scale(1)';
                    }, 200);
                }
            }, 5000 + index * 1000);
        });
        
        const sparkleCSS = `
            @keyframes sparkle {
                0%, 100% { transform: rotate(0deg) scale(1); opacity: 1; }
                50% { transform: rotate(180deg) scale(1.5); opacity: 0.8; }
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = sparkleCSS;
        document.head.appendChild(style);
    }, 3500);
}

// ============================================================================
// 5. AMÉLIORATION DU CAROUSEL AVEC EFFETS
// ============================================================================
function enhanceCarousel() {
    setTimeout(() => {
        const carousel = document.querySelector('#carouselExample');
        const indicators = document.querySelectorAll('.carousel-indicators button');
        
        // Ajouter un effet de zoom aux images
        const images = document.querySelectorAll('.carousel-inner img');
        images.forEach(img => {
            img.style.transition = 'transform 0.5s ease';
            
            const parent = img.closest('.carousel-item');
            if (parent) {
                parent.addEventListener('mouseenter', () => {
                    img.style.transform = 'scale(1.05)';
                });
                parent.addEventListener('mouseleave', () => {
                    img.style.transform = 'scale(1)';
                });
            }
        });
        
        // Auto-play avec pause au survol
        let autoSlide = setInterval(() => {
            const nextBtn = document.querySelector('.carousel-control-next');
            if (nextBtn) nextBtn.click();
        }, 4000);
        
        carousel?.addEventListener('mouseenter', () => clearInterval(autoSlide));
        carousel?.addEventListener('mouseleave', () => {
            autoSlide = setInterval(() => {
                const nextBtn = document.querySelector('.carousel-control-next');
                if (nextBtn) nextBtn.click();
            }, 4000);
        });
    }, 3500);
}

// ============================================================================
// 6. TYPING EFFECT POUR LE TITRE
// ============================================================================
function createTypingEffect() {
    setTimeout(() => {
        const title = document.querySelector('header h1');
        if (!title) return;
        
        const originalText = title.textContent;
        title.textContent = '';
        title.style.borderRight = '3px solid white';
        title.style.animation = 'blink 1s infinite';
        
        const typingCSS = `
            @keyframes blink {
                0%, 50% { border-color: white; }
                51%, 100% { border-color: transparent; }
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = typingCSS;
        document.head.appendChild(style);
        
        let i = 0;
        const typeWriter = setInterval(() => {
            title.textContent += originalText.charAt(i);
            i++;
            if (i >= originalText.length) {
                clearInterval(typeWriter);
                setTimeout(() => {
                    title.style.borderRight = 'none';
                }, 1000);
            }
        }, 150);
    }, 3500);
}

// ============================================================================
// 7. BOUTON WHATSAPP FLOTTANT AMÉLIORÉ
// ============================================================================
function createFloatingWhatsApp() {
    setTimeout(() => {
        const whatsappBtn = document.createElement('div');
        whatsappBtn.innerHTML = `
            <a href="https://wa.me/25377586031?text=Bonjour, je souhaiterais avoir des informations sur l'École Privée Galado" 
               target="_blank" 
               class="floating-whatsapp">
                <i class="bi bi-whatsapp"></i>
                <span class="pulse-ring"></span>
            </a>
        `;
        
        const floatingCSS = `
            .floating-whatsapp {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, #25D366, #128C7E);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 1.8rem;
                text-decoration: none;
                z-index: 1000;
                box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
                transition: all 0.3s ease;
                animation: float-bounce 3s ease-in-out infinite;
            }
            .floating-whatsapp:hover {
                transform: scale(1.1);
                box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6);
                color: white;
            }
            .pulse-ring {
                position: absolute;
                width: 100%;
                height: 100%;
                border: 3px solid #25D366;
                border-radius: 50%;
                animation: pulse 2s linear infinite;
                opacity: 0;
            }
            @keyframes pulse {
                0% { transform: scale(1); opacity: 0.7; }
                100% { transform: scale(1.5); opacity: 0; }
            }
            @keyframes float-bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = floatingCSS;
        document.head.appendChild(style);
        document.body.appendChild(whatsappBtn);
    }, 3500);
}

// ============================================================================
// 8. REMOVED - NO CURSOR TRAIL
// ============================================================================
function removeCursorTrail() {
    // Cursor trail removed as requested
    console.log('🚫 Cursor trail disabled');
}

// ============================================================================
// 9. COMPTEUR ANIMÉ
// ============================================================================
function createAnimatedCounter() {
    setTimeout(() => {
        const aboutSection = document.querySelector('section .fs-5').parentNode;
        
        const counterHTML = `
            <div class="animated-stats" style="margin-top: 40px;">
                <div class="row text-center">
                    <div class="col-md-4">
                        <div class="stat-item">
                            <div class="stat-number" data-target="100">0</div>
                            <div class="stat-label">% Enfants Heureux</div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="stat-item">
                            <div class="stat-number" data-target="100">0</div>
                            <div class="stat-label">% Accompagnement</div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="stat-item">
                            <div class="stat-number" data-target="100">0</div>
                            <div class="stat-label">% Satisfaction Parents</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        aboutSection.insertAdjacentHTML('beforeend', counterHTML);
        
        const statsCSS = `
            .stat-item {
                padding: 20px;
                margin: 10px 0;
            }
            .stat-number {
                font-size: 3rem;
                font-weight: bold;
                background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-bottom: 10px;
            }
            .stat-label {
                font-size: 1.1rem;
                color: #666;
                font-weight: 600;
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = statsCSS;
        document.head.appendChild(style);
        
        // Animation des compteurs
        const counters = document.querySelectorAll('.stat-number');
        const animateCounters = () => {
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.target);
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
            });
        };
        
        // Déclencher l'animation quand la section est visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(animateCounters, 500);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(aboutSection);
    }, 4000);
}

// ============================================================================
// 10. STATIC DAYCARE ELEMENTS ONLY (NO FLYING)
// ============================================================================
function createStaticDaycareElements() {
    setTimeout(() => {
        // Add building blocks decoration (static)
        const blocks = document.createElement('div');
        blocks.innerHTML = `
            <div class="building-blocks">
                <div class="block block-1">A</div>
                <div class="block block-2">B</div>
                <div class="block block-3">C</div>
            </div>
        `;
        
        const blocksCSS = `
            .building-blocks {
                position: fixed;
                bottom: 100px;
                left: 50px;
                z-index: 1;
                opacity: 0.1;
                pointer-events: none;
            }
            .block {
                width: 40px;
                height: 40px;
                margin: 2px;
                display: inline-block;
                text-align: center;
                line-height: 40px;
                font-weight: bold;
                font-size: 1.2rem;
                border-radius: 8px;
            }
            .block-1 { background: #ff6b6b; color: white; }
            .block-2 { background: #4ecdc4; color: white; }
            .block-3 { background: #45b7d1; color: white; }
            @media (max-width: 768px) {
                .building-blocks { display: none; }
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = blocksCSS;
        document.head.appendChild(style);
        document.body.appendChild(blocks);
        
        // Add crayons decoration (static)
        const crayons = document.createElement('div');
        crayons.innerHTML = `
            <div class="crayons-decoration">
                <div class="crayon crayon-red"></div>
                <div class="crayon crayon-blue"></div>
                <div class="crayon crayon-green"></div>
                <div class="crayon crayon-yellow"></div>
            </div>
        `;
        
        const crayonsCSS = `
            .crayons-decoration {
                position: fixed;
                top: 50%;
                right: 30px;
                transform: translateY(-50%) rotate(10deg);
                z-index: 1;
                opacity: 0.08;
                pointer-events: none;
            }
            .crayon {
                width: 8px;
                height: 60px;
                margin: 3px 0;
                border-radius: 4px 4px 0 0;
                position: relative;
            }
            .crayon::after {
                content: '';
                position: absolute;
                bottom: -8px;
                left: 2px;
                width: 4px;
                height: 8px;
                background: #8B4513;
                border-radius: 0 0 2px 2px;
            }
            .crayon-red { background: #ff6b6b; }
            .crayon-blue { background: #45b7d1; }
            .crayon-green { background: #4ecdc4; }
            .crayon-yellow { background: #feca57; }
            @media (max-width: 768px) {
                .crayons-decoration { display: none; }
            }
        `;
        
        const crayonStyle = document.createElement('style');
        crayonStyle.textContent = crayonsCSS;
        document.head.appendChild(crayonStyle);
        document.body.appendChild(crayons);
        
    }, 4500);
}

// ============================================================================
// INITIALISATION DE TOUTES LES ANIMATIONS
// ============================================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 École Privée Galado - Animations Premium Activées!');
    
    // Lancer toutes les animations (sans éléments volants)
    createLoader();
    createStaticDecorations();
    initScrollAnimations();
    enhanceServiceCards();
    enhanceCarousel();
    createTypingEffect();
    createFloatingWhatsApp();
    removeCursorTrail();
    createAnimatedCounter();
    createStaticDaycareElements();
    
    console.log('✨ Toutes les animations sont prêtes à impressionner la cliente!');
});

// Suppression du cursor trail sur mobile pour les performances
if (window.innerWidth <= 768) {
    const cursorTrails = document.querySelectorAll('.cursor-trail');
    cursorTrails.forEach(trail => trail.remove());
}

 const card = document.getElementById('teacherCard');
        
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });

        // Add keyboard accessibility
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.classList.toggle('flipped');
            }
        });

        // Make card focusable
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'Click to flip the Teacher\'s Day card');

        // Add some floating animation elements
        function createFloatingElement() {
            const elements = ['📚', '✏️', '🎓', '🌟', '💡'];
            const element = document.createElement('div');
            element.textContent = elements[Math.floor(Math.random() * elements.length)];
            element.style.position = 'fixed';
            element.style.left = Math.random() * 100 + 'vw';
            element.style.top = '100vh';
            element.style.fontSize = '2rem';
            element.style.pointerEvents = 'none';
            element.style.zIndex = '-1';
            element.style.animation = 'float-up 8s linear forwards';
            
            document.body.appendChild(element);
            
            setTimeout(() => {
                element.remove();
            }, 8000);
        }

        // Add floating animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-up {
                to {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Create floating elements periodically
        setInterval(createFloatingElement, 3000);
        
        // Create initial floating elements
        setTimeout(createFloatingElement, 1000);
        setTimeout(createFloatingElement, 2000);
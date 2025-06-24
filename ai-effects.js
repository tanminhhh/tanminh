// AI Effects and Neural Network Background Animation
class NeuralBackground {
    constructor() {
        this.canvas = document.getElementById('neuralCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.connections = [];
        this.animationId = null;
        
        this.init();
        this.createNodes();
        this.createConnections();
        this.animate();
        
        // Handle window resize
        window.addEventListener('resize', () => this.handleResize());
    }

    init() {
        this.resizeCanvas();
        this.nodeCount = 50;
        this.maxDistance = 150;
        this.mousePos = { x: 0, y: 0 };
        
        // Track mouse movement
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mousePos.x = e.clientX - rect.left;
            this.mousePos.y = e.clientY - rect.top;
        });
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createNodes() {
        this.nodes = [];
        for (let i = 0; i < this.nodeCount; i++) {
            this.nodes.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.3,
                pulseSpeed: Math.random() * 0.02 + 0.01,
                pulseOffset: Math.random() * Math.PI * 2
            });
        }
    }

    createConnections() {
        this.connections = [];
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const distance = this.getDistance(this.nodes[i], this.nodes[j]);
                if (distance < this.maxDistance) {
                    this.connections.push({
                        node1: this.nodes[i],
                        node2: this.nodes[j],
                        opacity: (this.maxDistance - distance) / this.maxDistance,
                        pulseSpeed: Math.random() * 0.01 + 0.005,
                        pulseOffset: Math.random() * Math.PI * 2
                    });
                }
            }
        }
    }

    getDistance(node1, node2) {
        return Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2));
    }

    updateNodes() {
        this.nodes.forEach(node => {
            // Update position
            node.x += node.vx;
            node.y += node.vy;

            // Bounce off edges
            if (node.x <= 0 || node.x >= this.canvas.width) node.vx *= -1;
            if (node.y <= 0 || node.y >= this.canvas.height) node.vy *= -1;

            // Keep nodes within bounds
            node.x = Math.max(0, Math.min(this.canvas.width, node.x));
            node.y = Math.max(0, Math.min(this.canvas.height, node.y));

            // Update pulse effect
            node.pulseOffset += node.pulseSpeed;
        });
    }

    updateConnections() {
        this.connections = [];
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const distance = this.getDistance(this.nodes[i], this.nodes[j]);
                if (distance < this.maxDistance) {
                    this.connections.push({
                        node1: this.nodes[i],
                        node2: this.nodes[j],
                        opacity: (this.maxDistance - distance) / this.maxDistance,
                        pulseSpeed: Math.random() * 0.01 + 0.005,
                        pulseOffset: Math.random() * Math.PI * 2
                    });
                }
            }
        }
    }

    drawNodes() {
        this.nodes.forEach(node => {
            const pulseScale = 1 + Math.sin(node.pulseOffset) * 0.3;
            const currentRadius = node.radius * pulseScale;
            const currentOpacity = node.opacity + Math.sin(node.pulseOffset) * 0.2;

            // Main node
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 255, 255, ${currentOpacity})`;
            this.ctx.fill();

            // Glow effect
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, currentRadius * 2, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 255, 255, ${currentOpacity * 0.2})`;
            this.ctx.fill();
        });
    }

    drawConnections() {
        this.connections.forEach(connection => {
            const distance = this.getDistance(connection.node1, connection.node2);
            const opacity = (this.maxDistance - distance) / this.maxDistance;
            const pulseEffect = Math.sin(Date.now() * connection.pulseSpeed + connection.pulseOffset);
            const currentOpacity = opacity * 0.3 + pulseEffect * 0.1;

            if (currentOpacity > 0) {
                this.ctx.beginPath();
                this.ctx.moveTo(connection.node1.x, connection.node1.y);
                this.ctx.lineTo(connection.node2.x, connection.node2.y);
                this.ctx.strokeStyle = `rgba(0, 255, 255, ${currentOpacity})`;
                this.ctx.lineWidth = 1 + pulseEffect * 0.5;
                this.ctx.stroke();
            }
        });
    }

    drawDataStreams() {
        // Draw flowing data streams
        const time = Date.now() * 0.001;
        
        for (let i = 0; i < 3; i++) {
            const startX = (this.canvas.width / 4) * (i + 1);
            const streamHeight = this.canvas.height;
            
            for (let j = 0; j < 10; j++) {
                const y = (j * 50 + time * 100 + i * 20) % streamHeight;
                const opacity = Math.sin((y / streamHeight) * Math.PI) * 0.5;
                
                if (opacity > 0) {
                    this.ctx.fillStyle = `rgba(255, 0, 255, ${opacity})`;
                    this.ctx.fillRect(startX - 1, y, 2, 10);
                }
            }
        }
    }

    drawQuantumEffects() {
        const time = Date.now() * 0.002;
        
        // Quantum particle effects
        for (let i = 0; i < 5; i++) {
            const x = this.canvas.width * 0.2 + Math.sin(time + i) * 100;
            const y = this.canvas.height * 0.5 + Math.cos(time * 1.5 + i) * 50;
            const size = 2 + Math.sin(time * 3 + i) * 1;
            const opacity = 0.3 + Math.sin(time * 2 + i) * 0.2;
            
            this.ctx.beginPath();
            this.ctx.arc(x, y, size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 0, ${opacity})`;
            this.ctx.fill();
            
            // Quantum trails
            this.ctx.beginPath();
            this.ctx.arc(x - Math.sin(time + i) * 20, y - Math.cos(time * 1.5 + i) * 10, size * 0.5, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 0, ${opacity * 0.5})`;
            this.ctx.fill();
        }
    }

    render() {
        // Clear canvas with fade effect
        this.ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw all effects
        this.drawConnections();
        this.drawNodes();
        this.drawDataStreams();
        this.drawQuantumEffects();
    }

    animate() {
        this.updateNodes();
        
        // Update connections less frequently for performance
        if (Math.random() < 0.1) {
            this.updateConnections();
        }
        
        this.render();
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    handleResize() {
        this.resizeCanvas();
        this.createNodes();
        this.createConnections();
    }

    destroy() {
        cancelAnimationFrame(this.animationId);
        window.removeEventListener('resize', this.handleResize);
    }
}

// Advanced particle system for loading effects
class ParticleSystem {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.options = {
            particleCount: options.particleCount || 30,
            colors: options.colors || ['#00ffff', '#ff00ff', '#ffff00'],
            speed: options.speed || 1,
            size: options.size || 2,
            ...options
        };
        
        this.init();
    }

    init() {
        for (let i = 0; i < this.options.particleCount; i++) {
            this.particles.push(this.createParticle());
        }
    }

    createParticle() {
        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            vx: (Math.random() - 0.5) * this.options.speed,
            vy: (Math.random() - 0.5) * this.options.speed,
            size: Math.random() * this.options.size + 1,
            color: this.options.colors[Math.floor(Math.random() * this.options.colors.length)],
            opacity: Math.random() * 0.5 + 0.5,
            life: 1,
            decay: Math.random() * 0.01 + 0.005
        };
    }

    update() {
        this.particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life -= particle.decay;
            particle.opacity = particle.life;

            // Reset particle if it dies or goes off screen
            if (particle.life <= 0 || 
                particle.x < 0 || particle.x > this.canvas.width ||
                particle.y < 0 || particle.y > this.canvas.height) {
                this.particles[index] = this.createParticle();
            }
        });
    }

    render() {
        this.particles.forEach(particle => {
            this.ctx.save();
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Add glow effect
            this.ctx.shadowColor = particle.color;
            this.ctx.shadowBlur = 10;
            this.ctx.fill();
            
            this.ctx.restore();
        });
    }

    animate() {
        this.update();
        this.render();
    }
}

// Matrix rain effect for loading
class MatrixRain {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.drops = [];
        this.fontSize = 14;
        this.columns = Math.floor(canvas.width / this.fontSize);
        
        this.init();
    }

    init() {
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * this.canvas.height;
        }
    }

    render() {
        // Clear with fade
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = '#00ff00';
        this.ctx.font = `${this.fontSize}px monospace`;

        for (let i = 0; i < this.drops.length; i++) {
            const char = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
            this.ctx.fillText(char, i * this.fontSize, this.drops[i]);

            if (this.drops[i] > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i] += this.fontSize;
        }
    }
}

// Holographic text effect
class HolographicText {
    static apply(element, text) {
        element.innerHTML = '';
        
        const chars = text.split('');
        chars.forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            span.style.animation = `holographicGlow 2s ease-in-out infinite`;
            span.style.animationDelay = `${index * 0.1}s`;
            element.appendChild(span);
        });
    }
}

// Add holographic glow animation to CSS
const holographicStyle = document.createElement('style');
holographicStyle.textContent = `
    @keyframes holographicGlow {
        0%, 100% {
            text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff;
            transform: translateY(0);
        }
        25% {
            text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff;
            transform: translateY(-2px);
        }
        50% {
            text-shadow: 0 0 5px #ffff00, 0 0 10px #ffff00, 0 0 15px #ffff00;
            transform: translateY(0);
        }
        75% {
            text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00;
            transform: translateY(2px);
        }
    }
`;
document.head.appendChild(holographicStyle);

// Initialize neural background when script loads
window.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure canvas is ready
    setTimeout(() => {
        if (document.getElementById('neuralCanvas')) {
            window.neuralBackground = new NeuralBackground();
        }
    }, 100);
});

// Export classes for potential use
window.NeuralBackground = NeuralBackground;
window.ParticleSystem = ParticleSystem;
window.MatrixRain = MatrixRain;
window.HolographicText = HolographicText;

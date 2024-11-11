class MatrixRain {
    constructor() {
        this.canvas = document.getElementById('matrix-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.fontSize = 16;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = new Array(this.columns).fill(1);
        
        window.addEventListener('resize', () => this.resizeCanvas());
        this.animate();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = new Array(this.columns).fill(1);
    }
    
    getRandomChar() {
        return this.characters[Math.floor(Math.random() * this.characters.length)];
    }
    
    draw() {
        // Semi-transparent black background for trail effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#0F0';
        this.ctx.font = `${this.fontSize}px monospace`;
        
        for(let i = 0; i < this.drops.length; i++) {
            const text = this.getRandomChar();
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            
            if(this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
    }
    
    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize Matrix Rain effect when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MatrixRain();
});
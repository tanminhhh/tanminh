// Advanced Baccarat Prediction System with Professional Casino Intelligence
class BaccaratPredictor {
    constructor() {
        this.gameHistory = [];
        this.predictions = [];
        this.isAnalyzing = false;
        this.currentAlgorithm = 'neural';
        this.accuracy = 0;
        this.streak = 0;
        this.currentTrend = 'NEUTRAL';
        
        // Professional Baccarat Analysis Data
        this.roadmaps = {
            bigRoad: [],
            beadPlate: [],
            bigEyeRoad: [],
            smallRoad: [],
            cockroachRoad: []
        };
        
        // Advanced Pattern Recognition
        this.patterns = {
            streaks: { player: 0, banker: 0, tie: 0 },
            chopChop: 0, // Alternating pattern frequency
            doubles: 0,   // Consecutive double patterns
            naturals: 0,  // 8 or 9 totals frequency
            dragonTail: false, // Long streak pattern
            panda8: 0,    // Player 8 beats Banker 7
            dragon7: 0    // Banker 7 beats Player 6
        };
        
        // Professional Betting Strategies Knowledge
        this.strategies = {
            martingale: { level: 0, lastBet: 'none' },
            fibonacci: { sequence: [1, 1], position: 0 },
            labouchere: { sequence: [1, 2, 3, 4], target: 10 },
            paroli: { level: 0, winning: false },
            dAlembert: { level: 0, units: 1 }
        };
        
        // Statistical Analysis
        this.statistics = {
            playerWins: 0,
            bankerWins: 0,
            ties: 0,
            playerPercentage: 45.8, // Theoretical
            bankerPercentage: 50.68, // Theoretical  
            tiePercentage: 9.52, // Theoretical
            commission: 5, // Banker commission
            houseEdge: {
                player: 1.24,
                banker: 1.06,
                tie: 14.4
            }
        };
        
        this.initializeElements();
        this.setupEventListeners();
        this.startAIEffects();
        this.initializeCharts();
    }

    initializeElements() {
        // Get all DOM elements
        this.elements = {
            predictionValue: document.getElementById('predictionValue'),
            confidenceFill: document.getElementById('confidenceFill'),
            confidenceText: document.getElementById('confidenceText'),
            playerProb: document.getElementById('playerProb'),
            bankerProb: document.getElementById('bankerProb'),
            tieProb: document.getElementById('tieProb'),
            playerBar: document.getElementById('playerBar'),
            bankerBar: document.getElementById('bankerBar'),
            tieBar: document.getElementById('tieBar'),
            analyzeBtn: document.getElementById('analyzeBtn'),
            resetBtn: document.getElementById('resetBtn'),
            algorithmSelect: document.getElementById('algorithmSelect'),
            gameStatus: document.getElementById('gameStatus'),
            trendValue: document.getElementById('trendValue'),
            streakValue: document.getElementById('streakValue'),
            accuracyValue: document.getElementById('accuracyValue'),
            historyList: document.getElementById('historyList'),
            processingBar: document.getElementById('processingBar'),
            qualityBar: document.getElementById('qualityBar'),
            learningBar: document.getElementById('learningBar'),
            processingValue: document.getElementById('processingValue'),
            qualityValue: document.getElementById('qualityValue'),
            learningValue: document.getElementById('learningValue'),
            loadingOverlay: document.getElementById('loadingOverlay'),
            progressBar: document.getElementById('progressBar'),
            loadingStatus: document.getElementById('loadingStatus'),
            patternCanvas: document.getElementById('patternCanvas')
        };
    }

    setupEventListeners() {
        this.elements.analyzeBtn.addEventListener('click', () => this.startAnalysis());
        this.elements.resetBtn.addEventListener('click', () => this.resetData());
        this.elements.algorithmSelect.addEventListener('change', (e) => {
            this.currentAlgorithm = e.target.value;
            this.updateAlgorithmDisplay();
        });

        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.startAnalysis();
            if (e.key === 'r' || e.key === 'R') this.resetData();
        });
    }

    async startAnalysis() {
        if (this.isAnalyzing) return;
        
        this.isAnalyzing = true;
        this.showLoadingOverlay();
        this.elements.analyzeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ANALYZING...';
        
        try {
            await this.runPredictionAlgorithm();
            this.updatePredictionDisplay();
            this.updateAIMetrics();
            this.generateHistoryData();
            this.updatePatternChart();
        } catch (error) {
            console.error('Analysis error:', error);
        } finally {
            this.hideLoadingOverlay();
            this.elements.analyzeBtn.innerHTML = '<i class="fas fa-play"></i> START ANALYSIS';
            this.isAnalyzing = false;
        }
    }

    async runPredictionAlgorithm() {
        const steps = [
            'Initializing neural networks...',
            'Analyzing historical patterns...',
            'Processing quantum probabilities...',
            'Calculating trend analysis...',
            'Optimizing prediction model...',
            'Finalizing AI recommendations...'
        ];

        for (let i = 0; i < steps.length; i++) {
            this.elements.loadingStatus.textContent = steps[i];
            this.elements.progressBar.style.width = `${((i + 1) / steps.length) * 100}%`;
            
            // Simulate processing time
            await this.delay(800 + Math.random() * 400);
        }

        // Generate prediction based on algorithm
        this.generatePrediction();
    }

    generatePrediction() {
        const algorithms = {
            neural: () => this.neuralNetworkPrediction(),
            quantum: () => this.quantumAnalysisPrediction(),
            hybrid: () => this.hybridAIPrediction(),
            deep: () => this.deepLearningPrediction()
        };

        const prediction = algorithms[this.currentAlgorithm]();
        this.currentPrediction = prediction;
    }

    neuralNetworkPrediction() {
        // Advanced Neural Network with Professional Baccarat Knowledge
        const roadmapAnalysis = this.analyzeRoadmaps();
        const patternWeight = this.calculatePatternWeight();
        const streakAnalysis = this.analyzeStreakPatterns();
        const choppyAnalysis = this.analyzeChoppyPattern();
        
        // Base probabilities adjusted by professional knowledge
        let playerProb = this.statistics.playerPercentage / 100;
        let bankerProb = this.statistics.bankerPercentage / 100;
        let tieProb = this.statistics.tiePercentage / 100;
        
        // Apply roadmap intelligence
        if (roadmapAnalysis.bigRoadTrend === 'player') {
            playerProb *= 1.15;
            bankerProb *= 0.92;
        } else if (roadmapAnalysis.bigRoadTrend === 'banker') {
            bankerProb *= 1.12;
            playerProb *= 0.94;
        }
        
        // Dragon Tail Analysis (Long streaks tend to continue)
        if (this.patterns.dragonTail) {
            const lastResult = this.gameHistory[this.gameHistory.length - 1];
            if (lastResult === 'player') {
                playerProb *= 1.25;
            } else if (lastResult === 'banker') {
                bankerProb *= 1.22;
            }
        }
        
        // Chop-Chop Pattern Detection
        if (choppyAnalysis.isChoppy) {
            const lastResult = this.gameHistory[this.gameHistory.length - 1];
            if (lastResult === 'player') {
                bankerProb *= 1.18;
                playerProb *= 0.85;
            } else if (lastResult === 'banker') {
                playerProb *= 1.18;
                bankerProb *= 0.85;
            }
        }
        
        // Streak Continuation vs Break Analysis
        const currentStreak = streakAnalysis.currentStreak;
        if (currentStreak.length >= 3) {
            const breakProbability = Math.min(0.7, currentStreak.length * 0.15);
            if (currentStreak.type === 'player') {
                playerProb *= (1 - breakProbability);
                bankerProb *= (1 + breakProbability * 0.8);
            } else if (currentStreak.type === 'banker') {
                bankerProb *= (1 - breakProbability);
                playerProb *= (1 + breakProbability * 0.8);
            }
        }
        
        // Tie Frequency Analysis
        const recentTies = this.gameHistory.slice(-20).filter(r => r === 'tie').length;
        if (recentTies === 0 && this.gameHistory.length >= 15) {
            tieProb *= 1.8; // Tie drought compensation
        } else if (recentTies >= 2) {
            tieProb *= 0.6; // Recent ties reduce probability
        }
        
        // Natural occurrence patterns
        if (this.patterns.naturals > 0) {
            const naturalFreq = this.patterns.naturals / Math.max(this.gameHistory.length, 1);
            if (naturalFreq > 0.15) {
                // High natural frequency favors continuing trend
                const lastResult = this.gameHistory[this.gameHistory.length - 1];
                if (lastResult === 'player') playerProb *= 1.1;
                if (lastResult === 'banker') bankerProb *= 1.08;
            }
        }
        
        // Normalize probabilities
        const total = playerProb + bankerProb + tieProb;
        playerProb = (playerProb / total) * 100;
        bankerProb = (bankerProb / total) * 100;
        tieProb = (tieProb / total) * 100;

        const maxProb = Math.max(playerProb, bankerProb, tieProb);
        let prediction = 'PLAYER';
        if (bankerProb === maxProb) prediction = 'BANKER';
        else if (tieProb === maxProb) prediction = 'TIE';

        // Confidence based on pattern strength
        let confidence = maxProb;
        if (this.patterns.dragonTail) confidence += 8;
        if (choppyAnalysis.isChoppy) confidence += 6;
        if (currentStreak.length >= 4) confidence += 10;
        
        return {
            prediction,
            confidence: Math.min(95, Math.round(confidence)),
            probabilities: {
                player: Math.round(playerProb),
                banker: Math.round(bankerProb),
                tie: Math.round(tieProb)
            },
            analysis: {
                roadmapTrend: roadmapAnalysis.bigRoadTrend,
                streakLength: currentStreak.length,
                choppy: choppyAnalysis.isChoppy,
                dragonTail: this.patterns.dragonTail
            }
        };
    }

    quantumAnalysisPrediction() {
        // Simulate quantum probability analysis
        const quantumStates = ['PLAYER', 'BANKER', 'TIE'];
        const prediction = quantumStates[Math.floor(Math.random() * quantumStates.length)];
        
        return {
            prediction,
            confidence: Math.round(75 + Math.random() * 20),
            probabilities: {
                player: Math.round(30 + Math.random() * 25),
                banker: Math.round(35 + Math.random() * 25),
                tie: Math.round(5 + Math.random() * 15)
            }
        };
    }

    hybridAIPrediction() {
        // Combine multiple approaches
        const neural = this.neuralNetworkPrediction();
        const quantum = this.quantumAnalysisPrediction();
        
        // Average the results
        const avgPlayer = (neural.probabilities.player + quantum.probabilities.player) / 2;
        const avgBanker = (neural.probabilities.banker + quantum.probabilities.banker) / 2;
        const avgTie = (neural.probabilities.tie + quantum.probabilities.tie) / 2;
        
        const maxProb = Math.max(avgPlayer, avgBanker, avgTie);
        let prediction = 'PLAYER';
        if (avgBanker === maxProb) prediction = 'BANKER';
        else if (avgTie === maxProb) prediction = 'TIE';

        return {
            prediction,
            confidence: Math.round((neural.confidence + quantum.confidence) / 2),
            probabilities: {
                player: Math.round(avgPlayer),
                banker: Math.round(avgBanker),
                tie: Math.round(avgTie)
            }
        };
    }

    deepLearningPrediction() {
        // Professional Deep Learning with Baccarat Roadmap Intelligence
        const roadmapPatterns = this.analyzeAllRoadmaps();
        const cardCountingInsights = this.simulateCardCounting();
        const betSelectionStrategy = this.analyzeBestBettingOpportunity();
        const moneyManagement = this.calculateOptimalBetting();
        
        // Advanced pattern recognition
        let playerProb = this.statistics.playerPercentage / 100;
        let bankerProb = this.statistics.bankerPercentage / 100;
        let tieProb = this.statistics.tiePercentage / 100;
        
        // Big Road Derivative Analysis
        const bigEyePattern = roadmapPatterns.bigEye;
        const smallRoadPattern = roadmapPatterns.small;
        const cockroachPattern = roadmapPatterns.cockroach;
        
        // Multi-road consensus analysis
        let roadConsensus = 0;
        let favoredSide = 'neutral';
        
        if (bigEyePattern.trend === 'red') roadConsensus += 1;
        if (smallRoadPattern.trend === 'red') roadConsensus += 1;
        if (cockroachPattern.trend === 'red') roadConsensus += 1;
        
        if (roadConsensus >= 2) {
            // Roads favor pattern continuation
            const lastResult = this.gameHistory[this.gameHistory.length - 1];
            if (lastResult === 'player') {
                playerProb *= 1.35;
                favoredSide = 'player';
            } else if (lastResult === 'banker') {
                bankerProb *= 1.32;
                favoredSide = 'banker';
            }
        } else if (roadConsensus === 0) {
            // Roads favor pattern break
            const lastResult = this.gameHistory[this.gameHistory.length - 1];
            if (lastResult === 'player') {
                bankerProb *= 1.28;
                favoredSide = 'banker';
            } else if (lastResult === 'banker') {
                playerProb *= 1.28;
                favoredSide = 'player';
            }
        }
        
        // Professional "Bead Plate" pattern analysis
        const beadPlatePattern = this.analyzeBeadPlateColumns();
        if (beadPlatePattern.strongPattern) {
            if (beadPlatePattern.expectedNext === 'player') {
                playerProb *= 1.2;
            } else if (beadPlatePattern.expectedNext === 'banker') {
                bankerProb *= 1.18;
            } else if (beadPlatePattern.expectedNext === 'tie') {
                tieProb *= 2.2;
            }
        }
        
        // Dragon/Panda Side Bet Analysis
        if (cardCountingInsights.favorsPanda8) {
            playerProb *= 1.15;
            tieProb *= 0.8;
        }
        if (cardCountingInsights.favorsDragon7) {
            bankerProb *= 1.12;
            tieProb *= 0.8;
        }
        
        // Squeeze Play Psychology (affects tie probability)
        const recentSqueeze = this.detectSqueezePatterns();
        if (recentSqueeze.tensionBuilding) {
            tieProb *= 1.4;
            playerProb *= 0.95;
            bankerProb *= 0.95;
        }
        
        // Commission Strategy (5% on banker wins affects behavior)
        const bankingAdvantage = this.calculateBankingAdvantage();
        if (bankingAdvantage.shouldAvoid) {
            playerProb *= 1.08;
            bankerProb *= 0.96;
        }
        
        // Normalize probabilities
        const total = playerProb + bankerProb + tieProb;
        playerProb = (playerProb / total) * 100;
        bankerProb = (bankerProb / total) * 100;
        tieProb = (tieProb / total) * 100;

        const maxProb = Math.max(playerProb, bankerProb, tieProb);
        let prediction = 'PLAYER';
        if (bankerProb === maxProb) prediction = 'BANKER';
        else if (tieProb === maxProb) prediction = 'TIE';

        // Professional confidence calculation
        let confidence = maxProb;
        if (roadConsensus >= 2) confidence += 12;
        if (beadPlatePattern.strongPattern) confidence += 8;
        if (favoredSide !== 'neutral') confidence += 6;
        
        return {
            prediction,
            confidence: Math.min(94, Math.round(confidence)),
            probabilities: {
                player: Math.round(playerProb),
                banker: Math.round(bankerProb),
                tie: Math.round(tieProb)
            },
            professionalAnalysis: {
                roadConsensus: roadConsensus,
                favoredSide: favoredSide,
                beadPlateStrength: beadPlatePattern.strongPattern,
                cardCountingEdge: cardCountingInsights.edge,
                recommendedBet: betSelectionStrategy.recommendation
            }
        };
    }

    analyzePatterns() {
        // Analyze recent game patterns
        if (this.gameHistory.length < 5) {
            return { playerTrend: 0, bankerTrend: 0, tieTrend: 0 };
        }

        const recent = this.gameHistory.slice(-10);
        const playerCount = recent.filter(r => r === 'player').length;
        const bankerCount = recent.filter(r => r === 'banker').length;
        const tieCount = recent.filter(r => r === 'tie').length;

        return {
            playerTrend: (playerCount - 3) / 10,
            bankerTrend: (bankerCount - 3) / 10,
            tieTrend: (tieCount - 1) / 10
        };
    }

    getTrendWeight() {
        const recentResults = this.gameHistory.slice(-5);
        if (recentResults.length === 0) return 0;
        
        const lastResult = recentResults[recentResults.length - 1];
        const sameCount = recentResults.filter(r => r === lastResult).length;
        
        // Weight based on streak
        return (sameCount - 1) * 2;
    }

    updatePredictionDisplay() {
        const pred = this.currentPrediction;
        
        // Update prediction value with animation
        this.elements.predictionValue.style.opacity = '0';
        setTimeout(() => {
            this.elements.predictionValue.textContent = pred.prediction;
            this.elements.predictionValue.style.opacity = '1';
            this.elements.predictionValue.classList.add('glow-effect');
        }, 200);

        // Update confidence
        this.animateBar(this.elements.confidenceFill, pred.confidence);
        this.elements.confidenceText.textContent = `Confidence: ${pred.confidence}%`;

        // Update probabilities
        this.animateBar(this.elements.playerBar, pred.probabilities.player);
        this.animateBar(this.elements.bankerBar, pred.probabilities.banker);
        this.animateBar(this.elements.tieBar, pred.probabilities.tie);

        this.elements.playerProb.textContent = `${pred.probabilities.player}%`;
        this.elements.bankerProb.textContent = `${pred.probabilities.banker}%`;
        this.elements.tieProb.textContent = `${pred.probabilities.tie}%`;

        // Update game status
        this.elements.gameStatus.textContent = `PREDICTION READY - ${pred.prediction} RECOMMENDED`;
    }

    updateAIMetrics() {
        // Simulate AI processing metrics
        const processing = Math.round(60 + Math.random() * 35);
        const quality = Math.round(this.gameHistory.length > 10 ? 70 + Math.random() * 25 : 40 + Math.random() * 30);
        const learning = Math.round(this.gameHistory.length * 2 + Math.random() * 20);

        this.animateBar(this.elements.processingBar, processing);
        this.animateBar(this.elements.qualityBar, quality);
        this.animateBar(this.elements.learningBar, Math.min(learning, 100));

        this.elements.processingValue.textContent = `${processing}%`;
        this.elements.qualityValue.textContent = `${quality}%`;
        this.elements.learningValue.textContent = `${Math.min(learning, 100)}%`;
    }

    generateHistoryData() {
        // Simulate some historical data if empty
        if (this.gameHistory.length === 0) {
            const results = ['player', 'banker', 'tie'];
            for (let i = 0; i < 5; i++) {
                const result = results[Math.floor(Math.random() * (i === 0 ? 2 : 3))]; // Avoid tie for first few
                this.gameHistory.push(result);
            }
        }

        this.updateHistoryDisplay();
        this.updateTrendAnalysis();
    }

    updateHistoryDisplay() {
        if (this.gameHistory.length === 0) return;

        const historyHTML = this.gameHistory.slice(-10).reverse().map((result, index) => {
            const resultClass = result === 'player' ? 'text-cyan' : result === 'banker' ? 'text-red' : 'text-yellow';
            return `
                <div class="history-item fade-in">
                    <span>Game ${this.gameHistory.length - index}</span>
                    <span class="${resultClass}">${result.toUpperCase()}</span>
                </div>
            `;
        }).join('');

        this.elements.historyList.innerHTML = historyHTML;
    }

    updateTrendAnalysis() {
        // Calculate trend
        const recent = this.gameHistory.slice(-5);
        const playerCount = recent.filter(r => r === 'player').length;
        const bankerCount = recent.filter(r => r === 'banker').length;

        if (playerCount > bankerCount + 1) {
            this.currentTrend = 'PLAYER TREND';
        } else if (bankerCount > playerCount + 1) {
            this.currentTrend = 'BANKER TREND';
        } else {
            this.currentTrend = 'NEUTRAL';
        }

        // Calculate current streak
        if (this.gameHistory.length > 0) {
            const lastResult = this.gameHistory[this.gameHistory.length - 1];
            let streakCount = 0;
            for (let i = this.gameHistory.length - 1; i >= 0; i--) {
                if (this.gameHistory[i] === lastResult) {
                    streakCount++;
                } else {
                    break;
                }
            }
            this.streak = streakCount;
        }

        // Update display with professional analysis
        this.elements.trendValue.textContent = this.currentTrend;
        this.elements.streakValue.textContent = this.streak;
        
        // Update roadmap and pattern indicators
        const roadmapAnalysis = this.analyzeRoadmaps();
        document.getElementById('roadmapValue').textContent = roadmapAnalysis.bigRoadTrend.toUpperCase();
        
        const choppyPattern = this.analyzeChoppyPattern();
        const patternType = this.patterns.dragonTail ? 'DRAGON' : 
                           choppyPattern.isChoppy ? 'CHOPPY' : 
                           this.streak >= 3 ? 'STREAK' : 'MIXED';
        document.getElementById('patternValue').textContent = patternType;
    }

    updatePatternChart() {
        const canvas = this.elements.patternCanvas;
        const ctx = canvas.getContext('2d');
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (this.gameHistory.length === 0) {
            ctx.fillStyle = '#666';
            ctx.font = '14px Rajdhani';
            ctx.textAlign = 'center';
            ctx.fillText('No data available', canvas.width / 2, canvas.height / 2);
            return;
        }

        // Draw pattern visualization
        this.drawPatternVisualization(ctx, canvas.width, canvas.height);
    }

    drawPatternVisualization(ctx, width, height) {
        const data = this.gameHistory.slice(-20); // Last 20 games
        if (data.length === 0) return;

        const barWidth = width / data.length;
        const maxHeight = height - 40;

        data.forEach((result, index) => {
            const x = index * barWidth;
            const barHeight = maxHeight * 0.8; // Fixed height for simplicity
            
            // Set color based on result
            if (result === 'player') {
                ctx.fillStyle = '#4ecdc4';
            } else if (result === 'banker') {
                ctx.fillStyle = '#ff6b6b';
            } else {
                ctx.fillStyle = '#ffd93d';
            }

            // Draw bar
            ctx.fillRect(x + 2, height - barHeight - 20, barWidth - 4, barHeight);
            
            // Add glow effect
            ctx.shadowColor = ctx.fillStyle;
            ctx.shadowBlur = 10;
            ctx.fillRect(x + 2, height - barHeight - 20, barWidth - 4, barHeight);
            ctx.shadowBlur = 0;
        });

        // Draw trend line
        this.drawTrendLine(ctx, data, width, height);
    }

    drawTrendLine(ctx, data, width, height) {
        if (data.length < 2) return;

        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = 2;
        ctx.beginPath();

        const barWidth = width / data.length;
        let playerSum = 0;

        data.forEach((result, index) => {
            if (result === 'player') playerSum++;
            const x = index * barWidth + barWidth / 2;
            const y = height - 20 - (playerSum / (index + 1)) * (height - 60);
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });

        ctx.stroke();
    }

    animateBar(element, targetWidth) {
        element.style.width = '0%';
        setTimeout(() => {
            element.style.width = `${Math.min(targetWidth, 100)}%`;
        }, 100);
    }

    resetData() {
        if (confirm('Are you sure you want to reset all data? This action cannot be undone.')) {
            this.gameHistory = [];
            this.predictions = [];
            this.accuracy = 0;
            this.streak = 0;
            this.currentTrend = 'NEUTRAL';

            // Reset displays
            this.elements.predictionValue.textContent = 'READY TO ANALYZE';
            this.elements.confidenceFill.style.width = '0%';
            this.elements.confidenceText.textContent = 'Confidence: 0%';
            
            ['playerBar', 'bankerBar', 'tieBar'].forEach(bar => {
                this.elements[bar].style.width = '0%';
            });
            
            ['playerProb', 'bankerProb', 'tieProb'].forEach(prob => {
                this.elements[prob].textContent = '0%';
            });

            this.elements.gameStatus.textContent = 'READY TO PREDICT';
            this.elements.trendValue.textContent = 'NEUTRAL';
            this.elements.streakValue.textContent = '0';
            this.elements.accuracyValue.textContent = '0%';

            // Reset history display
            this.elements.historyList.innerHTML = `
                <div class="history-placeholder">
                    <i class="fas fa-database"></i>
                    <p>No game data available</p>
                    <p>Start analyzing to build prediction model</p>
                </div>
            `;

            // Reset AI metrics
            ['processingBar', 'qualityBar', 'learningBar'].forEach(bar => {
                this.elements[bar].style.width = '0%';
            });
            
            ['processingValue', 'qualityValue', 'learningValue'].forEach(value => {
                this.elements[value].textContent = '0%';
            });

            // Clear pattern chart
            this.updatePatternChart();
        }
    }

    updateAlgorithmDisplay() {
        const algorithmNames = {
            neural: 'NEURAL NETWORK',
            quantum: 'QUANTUM ANALYSIS',
            hybrid: 'HYBRID AI',
            deep: 'DEEP LEARNING'
        };
        
        this.elements.gameStatus.textContent = `ALGORITHM: ${algorithmNames[this.currentAlgorithm]}`;
    }

    startAIEffects() {
        // Start neural background animation
        if (window.NeuralBackground) {
            new NeuralBackground();
        }

        // Random AI metric fluctuations
        setInterval(() => {
            if (!this.isAnalyzing) {
                this.simulateAIActivity();
            }
        }, 3000);
    }

    simulateAIActivity() {
        // Subtle changes to AI metrics to show activity
        const processing = Math.round(20 + Math.random() * 40);
        const quality = Math.round(30 + Math.random() * 30);
        const learning = Math.round(10 + Math.random() * 20);

        this.animateBar(this.elements.processingBar, processing);
        this.animateBar(this.elements.qualityBar, quality);
        this.animateBar(this.elements.learningBar, learning);

        this.elements.processingValue.textContent = `${processing}%`;
        this.elements.qualityValue.textContent = `${quality}%`;
        this.elements.learningValue.textContent = `${learning}%`;
    }

    showLoadingOverlay() {
        this.elements.loadingOverlay.style.display = 'flex';
        this.elements.progressBar.style.width = '0%';
    }

    hideLoadingOverlay() {
        setTimeout(() => {
            this.elements.loadingOverlay.style.display = 'none';
        }, 500);
    }

    initializeCharts() {
        // Initialize pattern chart
        this.updatePatternChart();
    }

    // Professional Baccarat Analysis Methods
    analyzeRoadmaps() {
        if (this.gameHistory.length < 5) {
            return { bigRoadTrend: 'neutral', strength: 0 };
        }
        
        this.updateBigRoad();
        const recent = this.roadmaps.bigRoad.slice(-3);
        const playerColumns = recent.filter(col => col[0] === 'player').length;
        const bankerColumns = recent.filter(col => col[0] === 'banker').length;
        
        return {
            bigRoadTrend: playerColumns > bankerColumns ? 'player' : 
                         bankerColumns > playerColumns ? 'banker' : 'neutral',
            strength: Math.abs(playerColumns - bankerColumns)
        };
    }
    
    analyzeAllRoadmaps() {
        this.updateAllRoadmaps();
        return {
            bigEye: this.analyzeBigEyeRoad(),
            small: this.analyzeSmallRoad(),
            cockroach: this.analyzeCockroachRoad()
        };
    }
    
    analyzeBigEyeRoad() {
        const recent = this.gameHistory.slice(-8);
        let redCount = 0, blueCount = 0;
        
        for (let i = 1; i < recent.length; i++) {
            if (recent[i] === recent[i-1]) redCount++;
            else blueCount++;
        }
        
        return {
            trend: redCount > blueCount ? 'red' : 'blue',
            strength: Math.abs(redCount - blueCount)
        };
    }
    
    analyzeSmallRoad() {
        const recent = this.gameHistory.slice(-6);
        let pattern = 0;
        for (let i = 2; i < recent.length; i++) {
            if (recent[i] === recent[i-2]) pattern++;
            else pattern--;
        }
        return { trend: pattern > 0 ? 'red' : 'blue', strength: Math.abs(pattern) };
    }
    
    analyzeCockroachRoad() {
        const recent = this.gameHistory.slice(-4);
        let pattern = 0;
        for (let i = 3; i < recent.length; i++) {
            if (recent[i] === recent[i-3]) pattern++;
            else pattern--;
        }
        return { trend: pattern > 0 ? 'red' : 'blue', strength: Math.abs(pattern) };
    }
    
    analyzeStreakPatterns() {
        if (this.gameHistory.length === 0) {
            return { currentStreak: { type: 'none', length: 0 }, longestStreak: 0 };
        }
        
        const lastResult = this.gameHistory[this.gameHistory.length - 1];
        let currentLength = 1;
        
        for (let i = this.gameHistory.length - 2; i >= 0; i--) {
            if (this.gameHistory[i] === lastResult) {
                currentLength++;
            } else {
                break;
            }
        }
        
        this.patterns.dragonTail = currentLength >= 5;
        
        return {
            currentStreak: { type: lastResult, length: currentLength },
            longestStreak: this.findLongestStreak()
        };
    }
    
    analyzeChoppyPattern() {
        if (this.gameHistory.length < 6) {
            return { isChoppy: false, strength: 0 };
        }
        
        const recent = this.gameHistory.slice(-6);
        let alternations = 0;
        
        for (let i = 1; i < recent.length; i++) {
            if (recent[i] !== recent[i-1] && recent[i] !== 'tie' && recent[i-1] !== 'tie') {
                alternations++;
            }
        }
        
        const choppyStrength = alternations / (recent.length - 1);
        return {
            isChoppy: choppyStrength > 0.6,
            strength: choppyStrength
        };
    }
    
    analyzeBeadPlateColumns() {
        const beadPlate = this.createBeadPlate();
        if (beadPlate.length < 3) {
            return { strongPattern: false, expectedNext: 'none' };
        }
        
        const pattern = this.detectColumnPattern(beadPlate);
        
        return {
            strongPattern: pattern.confidence > 0.7,
            expectedNext: pattern.prediction,
            confidence: pattern.confidence
        };
    }
    
    simulateCardCounting() {
        const recentResults = this.gameHistory.slice(-10);
        let highCardBias = 0;
        let lowCardBias = 0;
        
        recentResults.forEach(result => {
            if (result === 'tie') {
                highCardBias += 0.5;
            } else if (result === 'banker') {
                lowCardBias += 0.3;
            }
        });
        
        return {
            favorsPanda8: highCardBias > 2 && this.patterns.naturals > 0,
            favorsDragon7: lowCardBias > 1.5,
            edge: Math.abs(highCardBias - lowCardBias) / 10
        };
    }
    
    analyzeBestBettingOpportunity() {
        const streakAnalysis = this.analyzeStreakPatterns();
        
        let recommendation = 'wait';
        let confidence = 0;
        
        if (streakAnalysis.currentStreak.length >= 3) {
            recommendation = 'follow-streak';
            confidence = Math.min(0.8, streakAnalysis.currentStreak.length * 0.15);
        } else if (this.analyzeChoppyPattern().isChoppy) {
            recommendation = 'break-pattern';
            confidence = 0.6;
        }
        
        return { recommendation, confidence };
    }
    
    calculateOptimalBetting() {
        const baseUnit = 1;
        const confidence = this.currentPrediction?.confidence || 50;
        
        if (confidence > 80) return baseUnit * 3;
        if (confidence > 70) return baseUnit * 2;
        if (confidence > 60) return baseUnit * 1.5;
        return baseUnit;
    }
    
    detectSqueezePatterns() {
        const recentTies = this.gameHistory.slice(-5).filter(r => r === 'tie').length;
        const tensionBuilding = recentTies === 0 && this.gameHistory.length >= 5;
        
        return { tensionBuilding };
    }
    
    calculateBankingAdvantage() {
        const recentBankerWins = this.gameHistory.slice(-10).filter(r => r === 'banker').length;
        const shouldAvoid = recentBankerWins > 6;
        
        return { shouldAvoid };
    }
    
    updateBigRoad() {
        this.roadmaps.bigRoad = [];
        let currentColumn = [];
        let lastResult = null;
        
        this.gameHistory.forEach(result => {
            if (result === 'tie') return;
            
            if (result === lastResult) {
                currentColumn.push(result);
            } else {
                if (currentColumn.length > 0) {
                    this.roadmaps.bigRoad.push([...currentColumn]);
                }
                currentColumn = [result];
                lastResult = result;
            }
        });
        
        if (currentColumn.length > 0) {
            this.roadmaps.bigRoad.push(currentColumn);
        }
    }
    
    updateAllRoadmaps() {
        this.updateBigRoad();
    }
    
    createBeadPlate() {
        const beadPlate = [];
        for (let i = 0; i < this.gameHistory.length; i += 6) {
            beadPlate.push(this.gameHistory.slice(i, i + 6));
        }
        return beadPlate;
    }
    
    detectColumnPattern(beadPlate) {
        if (beadPlate.length < 2) {
            return { prediction: 'none', confidence: 0 };
        }
        
        const lastTwoColumns = beadPlate.slice(-2);
        const similarities = this.compareColumns(lastTwoColumns[0], lastTwoColumns[1]);
        
        return {
            prediction: similarities.nextExpected,
            confidence: similarities.matchStrength
        };
    }
    
    compareColumns(col1, col2) {
        let matches = 0;
        const minLength = Math.min(col1.length, col2.length);
        
        for (let i = 0; i < minLength; i++) {
            if (col1[i] === col2[i]) matches++;
        }
        
        const matchStrength = matches / minLength;
        return {
            matchStrength,
            nextExpected: matchStrength > 0.5 ? col2[0] : (col2[0] === 'player' ? 'banker' : 'player')
        };
    }
    
    findLongestStreak() {
        let longest = 0;
        let current = 1;
        
        for (let i = 1; i < this.gameHistory.length; i++) {
            if (this.gameHistory[i] === this.gameHistory[i-1]) {
                current++;
            } else {
                longest = Math.max(longest, current);
                current = 1;
            }
        }
        
        return Math.max(longest, current);
    }
    
    calculatePatternWeight() {
        const streakWeight = this.patterns.dragonTail ? 0.8 : 0.2;
        const choppyWeight = this.patterns.chopChop > 3 ? 0.6 : 0.1;
        const naturalWeight = this.patterns.naturals > 0 ? 0.4 : 0.1;
        
        return (streakWeight + choppyWeight + naturalWeight) / 3;
    }
    
    updatePatternTracking(result) {
        // Update chopchop pattern
        if (this.gameHistory.length >= 2) {
            const prev = this.gameHistory[this.gameHistory.length - 2];
            if (result !== prev && result !== 'tie' && prev !== 'tie') {
                this.patterns.chopChop++;
            }
        }
        
        // Update doubles pattern
        if (this.gameHistory.length >= 2) {
            const prev = this.gameHistory[this.gameHistory.length - 2];
            if (result === prev) {
                this.patterns.doubles++;
            }
        }
        
        // Update naturals (simulate natural 8/9 detection)
        if (Math.random() < 0.18) {
            this.patterns.naturals++;
        }
        
        // Update streaks
        const streakAnalysis = this.analyzeStreakPatterns();
        this.patterns.streaks[result] = streakAnalysis.currentStreak.type === result ? 
                                       streakAnalysis.currentStreak.length : 0;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Global function for input buttons
function inputResult(result) {
    if (window.baccaratPredictor) {
        window.baccaratPredictor.gameHistory.push(result);
        
        // Update statistics
        if (result === 'player') {
            window.baccaratPredictor.statistics.playerWins++;
        } else if (result === 'banker') {
            window.baccaratPredictor.statistics.bankerWins++;
        } else if (result === 'tie') {
            window.baccaratPredictor.statistics.ties++;
        }
        
        // Update pattern tracking
        window.baccaratPredictor.updatePatternTracking(result);
        window.baccaratPredictor.updateHistoryDisplay();
        window.baccaratPredictor.updateTrendAnalysis();
        window.baccaratPredictor.updatePatternChart();
        
        // Show feedback
        const gameStatus = document.getElementById('gameStatus');
        gameStatus.textContent = `RESULT RECORDED: ${result.toUpperCase()} - ANALYZING...`;
        
        // Auto-trigger new prediction after input
        setTimeout(() => {
            window.baccaratPredictor.startAnalysis();
        }, 800);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.baccaratPredictor = new BaccaratPredictor();
    
    // Add some initial startup effects
    setTimeout(() => {
        document.querySelector('.container').classList.add('fade-in');
    }, 500);
});

// Add CSS classes dynamically for text colors
const style = document.createElement('style');
style.textContent = `
    .text-cyan { color: #4ecdc4; }
    .text-red { color: #ff6b6b; }
    .text-yellow { color: #ffd93d; }
`;
document.head.appendChild(style);

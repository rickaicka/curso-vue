new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        running: false,
        logs: []
    },
    computed: {
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0;
        }
    },
    methods: {
        startGame(){
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
            this.logs = [];
        },
        attack(special){
            this.hurt('monsterLife', 5, 10, special, 'Jogador', 'Monstro', 'player');
            
            if(this.monsterLife > 0){
                this.hurt('playerLife', 7, 12, false, 'Monster', 'Jogador', 'monster');
            }
        },
        healAndHurt(){
            this.heal(10,15);
            this.hurt('playerLife', 7, 12, false, 'Monster', 'Jogador', 'monster');
        },
        hurt(attr, min, max, special, source, target, cls){
            const plus = special ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus);
            this[attr] = Math.max(this[attr] - hurt, 0);
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls);
            if(this.monsterLife === 0){
                this.logs = [];
                this.registerLog(`Jogador venceu.`, 'playerWin');
            }
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min;
            return Math.round(value);
        },
        heal(min, max){
            const heal = this.getRandom(min, max);
            this.playerLife = Math.min(this.playerLife + heal, 100);
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'player');
        },
        registerLog(text, cls){
            this.logs.unshift({text, cls});
        }
    },
    watch: {
        hasResult(value){
            if(value) this.running = false;
        }
    },
    
})
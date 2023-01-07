const app = Vue.createApp({
    data() {
        return {
            goals: [],
        }
    },
    methods: {
        addGoal() {
            const enteredValue = this.$refs.enteredValue.value;
            const newGoal = {
                id: Math.random().toString(),


                value: enteredValue
            };
            this.goals.push(newGoal);
            this.$refs.enteredValue.value = '';

        }
    }
});

app.component('goal-item', {
    template: `  
        <p>{{this.goal.value}}</p>
  `,
    props: {
        goal: String
    }
});


app.component('testcomp', {
    template: `  
        <p>Test Komponente</p>
  `,
});


app.mount('#app');
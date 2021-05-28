let PlanComponent = {
  template: '#plan-template',
  props: {
    name: {
      type: String,
      required: true
    },
    selectedPlan: {
      type: String
    }
  },
  computed: {
    isSelected() {
      return this.name === this.selectedPlan
    }
  },
  methods: {
    select() {
      this.$emit('select', this.name) // пользовательское событие, первый арг (обязателен) - имя(любое потом можно "слушать" через v-on в атрибуте)
    }
  }
}

let PlanPickerComponent = {
  template: '#plan-picker-template',
  components: {
    'plan': PlanComponent
  },
  data() {
    return {
      plans: ['The Hacker', 'The Curious', 'The Single', 'Some Plan'],
      selectedPlan: null
    }
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'plan-picker': PlanPickerComponent
  }
})
<template>
  <div class="defense-list">
      {{defenses}}
  </div>
</template>
<script>
import Defense from "../services/defense";


export default {
    name: 'AboutView',
    data() {
        return {
            defenses: null,
        }
    },
    methods: {
        getDefenses() {
            this.defenses = Defense.getDefenses();
            console.log(this.defenses);
        }
    },
    created() {
        this.getDefenses();
    }
}

</script>
<style>

</style>

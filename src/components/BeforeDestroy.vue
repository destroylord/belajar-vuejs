<template>
    <div>
        <div v-if="display">
            <h1>{{ name }}</h1>
        </div>
        <button v-on:click="toogle">Toogle</button>
    </div>
</template>
<script>
export default {
    name : 'BeforeDestroy',
    data() {
        return {
            name : "dafrin Maulana",
            display : true
        }
    },
    methods : {
        toogle(){
            this.display=!this.display
        }
    },
    beforeDestroy(){
        console.warn('Before Destroy')
    },
    destroyed(){
        console.warn('Destroy')
    }
}
</script>
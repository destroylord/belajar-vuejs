<template>
    <div>
        <h1 id="demo">{{ name }}</h1>
    </div>
</template>
<script>
export default {
    name : 'BeforeMount',
    data() {
        return {
            name : "dafrin Maulana"
        }
    },
    beforeMount(){
        console.warn('Before Mount', document.getElementById('demo'))
    },
    mounted(){
        console.warn('Mount', document.getElementById('demo'))
    }
}
</script>
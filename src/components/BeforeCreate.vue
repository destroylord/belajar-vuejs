<template>
    <div>
        <p>{{ name }}</p>
    </div>
</template>

<script>
export default {
    name : 'BeforeCreate',
    data(){
        return {
            name : 'Fahmi Dafrin maulana',
        }
    },
    created(){
        console.warn('create', this.name)
    },
    beforeCreate(){
         this.name = "sam"
        console.warn('before', this.name)
    }

}
</script>
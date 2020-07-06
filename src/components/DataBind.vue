<template>
    <div>
        <h1>Bind Component</h1>

        <p style="white-space:pre-line">{{msg}}</p>
        <textarea type="text" v-model="msg"> </textarea>
    </div>
</template>

<script>
export default {
    name : 'HomeBind',
    data(){ 
        return{
            msg : "Hi"
        }
    }
}
</script>
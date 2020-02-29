<template>
    <div>
        home
    </div>
</template>

<script>
    export default {
        name: 'home',
        components:{
        },
        data () {
            return {

            }
        },
        created:function () {
            this.$emit('header', false);
        }
    }
</script>
<template>
  <div>
    <h1>{{ msg }}</h1>
    sample1
    <sample2></sample2>
  </div>
</template>

<script>
    import Sample2 from './sample2.vue'

    export default {
        data () {
            return {
                msg: 'ok App'
            }
        },
        components:{
            sample2:Sample2
        }
}
</script>

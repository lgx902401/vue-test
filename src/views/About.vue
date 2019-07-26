<template>
    <div class="about">
        <h1>countA:{{this.$store.state.a}}</h1>
        <h1>countB:{{this.$store.state.b}}</h1>
        <h1>{{doubleCount}}</h1>
        <van-button @click="onclick">点击</van-button>
    </div>
</template>
<script>
    import {mapActions, mapGetters, mapMutations} from 'vuex'
    export default {
        name: 'about',
        components: {},
        data() {
            return {
            }
        },
        methods: {
            onclick() {
                this.increment()
                this.incrementB()
                // this.incrementIfOddOnRootSum()
            },

            ...mapActions([
               'incrementIfOddOnRootSum',
                'incrementIfOddOnRootSumB'
            ]),
            ...mapMutations([
                'increment',
                'incrementB'
            ])
        },
        computed: {
            ...mapGetters([
                'sumWithRootCount',
                'doubleCount'
            ]),

        },
    }
</script>

<template>
  <div class="stars" :class="`stars-${size}`">
    <span class="star" v-for="sc in starClasses" :class="sc"></span>
  </div>
</template>
<script>
  const CLASS_ON = 'on';
  const CLASS_HALF = 'half';
  const CLASS_OFF = 'off';
  export default {
    props:{
      score: Number,
      size: Number
    },
    /*
     5
     3.4 -->3全2灰
     3.5-->3全1半1灰
     */
    computed: {
      starClasses () {
        const scs = []
        const score = this.score
        const scoreInteger = Math.floor(score)
        // 添加CLASS_ON
        for (let i = 0; i < scoreInteger; i++) {
          scs.push(CLASS_ON)
        }
        // 添加CLASS_HALF
        if(score-scoreInteger>=0.5) {
          scs.push(CLASS_HALF)
        }
        // 添加CLASS_OFF
        while(scs.length<5) {
          scs.push(CLASS_OFF)
        }

        return scs
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styuls/mixin.styl"
  .stars
    text-align center
    height 24px
    .star
      display inline-block
      background-repeat no-repeat
    &.stars-48
      .star
        margin-right 15px
        width 20px
        height 19px
        background-size 20px 19px
        &:last-child
          margin-right 0px
        &.on
          bg-image("../star/star48_on")
        &.half
          bg-image("../star/star48_half")
        &.off
          bg-image("../star/star48_off")
    &.stars-36
      .star
        margin-right 12px
        width 15px
        height 15px
        background-size 15px 15px
        &:last-child
          margin-right 0px
        &.on
          bg-image("../star/star36_on")
        &.half
          bg-image("../star/star36_half")
        &.off
          bg-image("../star/star36_off")
    &.stars-24
      .star
        margin-right 10px
        width 10px
        height 10px
        background-size 10px 10px
        &:last-child
          margin-right 0px
        &.on
          bg-image("../star/star24_on")
        &.half
          bg-image("../star/star24_half")
        &.off
          bg-image("../star/star24_off")


</style>

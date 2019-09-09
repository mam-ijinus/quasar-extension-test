<template>
  <div class="my-component">
  </div>
</template>


<script>


// require('./statics/vendor/jquery-ui-1.12.1')
// require('./statics/vendor/jquery-ui-1.10.3.custom.css')

export default {
  name: 'IjiEchoGraphe',
  mounted: function() {
    $(this.$el).jqplot('chart1', [[3,7,9,1,5,3,8,2,5]]);
  }
}
</script>

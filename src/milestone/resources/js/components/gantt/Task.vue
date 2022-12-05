<template>
  <div id="gantt-task">
    <div
      id="gantt-task-title"
      class="flex items-center bg-green-600 text-white h-20"
      ref="task"
    >
      <div
        class="
          border-t border-r border-b
          flex
          items-center
          justify-center
          font-bold
          text-xs
          w-48
          h-full
        "
      >
        タスク
      </div>
      <div
        class="
          border-t border-r border-b
          flex
          items-center
          justify-center
          font-bold
          text-xs
          w-24
          h-full
        "
      >
        開始日
      </div>
      <div
        class="
          border-t border-r border-b
          flex
          items-center
          justify-center
          font-bold
          text-xs
          w-24
          h-full
        "
      >
        完了期限日
      </div>
      <div
        class="
          border-t border-r border-b
          flex
          items-center
          justify-center
          font-bold
          text-xs
          w-16
          h-full
        "
      >
        担当
      </div>
      <div
        class="
          border-t border-r border-b
          flex
          items-center
          justify-center
          font-bold
          text-xs
          w-12
          h-full
        "
      >
        進捗
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {

  mounted() {
    var taskWidth = this.$refs.task.offsetWidth;
    var taskHeight = this.$refs.task.offsetHeight;
    this.setTaskArea({
      width: taskWidth,
      height: taskHeight
    });
  },

  methods: {
    ...mapActions('datas', ['setTaskArea']),
  },
}
</script>
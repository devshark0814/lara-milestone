<template>
  <div>
    <GanttHeader></GanttHeader>
    <div id="gantt-content" class="flex">
      <GanttTask></GanttTask>
      <GanttCalendar></GanttCalendar>
    </div>
  </div>
</template>
<script>
import GanttHeader from "@/components/gantt/Header.vue";
import GanttTask from "@/components/gantt/Task.vue";
import GanttCalendar from "@/components/gantt/Calendar.vue";
export default {
  components: {
    GanttHeader,
    GanttTask,
    GanttCalendar
  },
};
</script>
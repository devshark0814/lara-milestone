<template>
  <div id="gantt-calendar" class="overflow-x-scroll w-1/2" :style="`width:${calendarViewWidth}px`">
    <div id="gantt-date" class="h-20">
      <div id="gantt-year-month" class="relative h-8">
        <div v-for="(calendar, index) in calendars" :key="index">
          <div
            class="
              bg-indigo-700
              text-white
              border-b border-r border-t
              h-8
              absolute
              font-bold
              text-sm
              flex
              items-center
              justify-center
            "
            :style="`width:${calendar.calendar * block_size}px;left:${
              calendar.start_block_number * block_size
            }px;max-width: none;`"
          >
            {{ calendar.date }}
          </div>
        </div>
      </div>
      <div id="gantt-day" class="relative h-12">
        <div v-for="(calendar, index) in calendars" :key="index">
          <div v-for="(day, index) in calendar.days" :key="index">
            <div
              class="
                border-r
                h-12
                absolute
                flex
                items-center
                justify-center
                flex-col
                font-bold
                text-xs
              "
              :style="`width:${block_size}px;left:${
                day.block_number * block_size
              }px;max-width: none;`"
            >
              <span>{{ day.day }}</span>
              <span>{{ day.dayOfWeek }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import calendarLib from "./CalendarLib.js";
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      start_month: "2020-10",
      end_month: "2021-02",
      block_size: 30,
      block_number: 0,
      calendars: [],

      inner_width: "",
      inner_height: "",

      task_width: '',
      task_height: '',
    };
  },

  computed: {
    ...mapGetters('datas', ['getTaskArea']),
    calendarViewWidth() {
      return this.inner_width - this.task_width;
    },
  },

  mounted() {
    this.getCalendar();
    this.getWindowSize();
    window.addEventListener("resize", this.getWindowSize);
  },

  methods: {
    getCalendar() {
      let block_number = 0;
      let days;
      let start_month = moment(this.start_month);
      let end_month = moment(this.end_month);
      let between_month = end_month.diff(start_month, "months");
      for (let i = 0; i <= between_month; i++) {
        days = calendarLib.getDays(
          start_month.year(),
          start_month.format("MM"),
          block_number
        );
        this.calendars.push({
          date: start_month.format("YYYY年MM月"),
          year: start_month.year(),
          month: start_month.month(), //month(), 0,1..11と表示
          start_block_number: block_number,
          calendar: days.length,
          days: days,
        });
        start_month.add(1, "months");
        block_number = days[days.length - 1].block_number;
        block_number++;
      }
      return block_number;
    },

    getWindowSize() {
      this.inner_width = window.innerWidth;
      this.inner_height = window.innerHeight;
      this.task_width = this.getTaskArea.width;
      this.task_height = this.getTaskArea.height;
    },
  },
};
</script>
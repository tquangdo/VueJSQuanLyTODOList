new Vue({
   el: '#tasks',
   data: {
      vueTasks: [
         { body: "Học NodeJS", completed: false },
         { body: "Học VueJS", completed: true },
      ],
      vueNewTask: ''
   },
   computed: {
      onCompDone: function () {
         return this.vueTasks.filter(function (task) {
            return task.completed;
         })
      },
      onCompNotYet: function () {
         return this.vueTasks.filter(function (task) {
            return !task.completed;
         })
      }
   },
   methods: {
      onAddTask: function (e) {
         e.preventDefault();
         if (!this.vueNewTask) return;
         this.vueTasks.push({
            body: this.vueNewTask,
            completed: false
         });
         this.vueNewTask = '';
      },
      onRemoveTask: function (task) {
         this.vueTasks.splice(this.vueTasks.indexOf(task), 1);
      },
      onHoanThanhTask: function (task) {
         task.completed = true;
      },
      onChange2NotDoneTask: function (task) {
         task.completed = false;
      },
      onHoanThanhAll: function () {
         this.vueTasks.forEach(function (task) {
            task.completed = true;
         })
      },
      onRemoveAllDone: function () {
         this.vueTasks = this.vueTasks.filter(function (task) {
            return !task.completed;
         })
      },
      onEditTask: function (task) {
         this.onRemoveTask(task);
         this.vueNewTask = task.body;
         this.$refs.taskmoi.focus();
      }
   }
})
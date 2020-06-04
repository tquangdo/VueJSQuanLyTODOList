new Vue({
  el: '#tasks',
  data:{
     tasks: [
			{body:"Học NodeJS", completed: false},
			{body:"Học VueJS", completed: true},
			],
	 newTask: ''
  },
  computed: {
	dadones: function(){
		return this.tasks.filter(function(task){
			return task.completed;
		})
	},
	chuadones: function(){
		return this.tasks.filter(function(task){
			return ! task.completed;
		})
	}
  },
  methods:{
     addTask: function(e){
        e.preventDefault();
		if(!this.newTask) return;
        this.tasks.push({
            body: this.newTask,
            completed: false
        });
        this.newTask = '';
     },
     removeTask: function(task){
        this.tasks.splice(this.tasks.indexOf(task), 1);
     },
     hoanthanhTask: function(task){
        task.completed = true;
     },
     change2NotDoneTask: function(task){
        task.completed = false;
     },
     hoanthanhAll: function(){
		this.tasks.forEach(function(task){
			task.completed = true;
		})
     },
     removeAllDone: function(){
		this.tasks = this.tasks.filter(function(task){
			return ! task.completed;
		})
     },
     editTask: function(task){
		this.removeTask(task);
		this.newTask = task.body;
		this.$refs.taskmoi.focus();
     }
  }
})
<template>
  <div id="add-blog">
	 <h2>编辑博客</h2>
	 <form v-if="!submmited" >
		<label>博客标题</label>
		<input type="text" v-model="blog.title" required>
		
		<label>博客内容</label>
		<textarea v-model="blog.content"></textarea>
		<div id="checkboxes">
			<label>Vue.js</label>
			<input type="checkbox" value="Vue.js" v-model="blog.categories">
			<label>Node.js</label>
			<input type="checkbox" value="Node.js" v-model="blog.categories">
			<label>React.js</label>
			<input type="checkbox" value="React.js" v-model="blog.categories">
			<label>Angular4</label>
			<input type="checkbox" value="Angular4" v-model="blog.categories">
		</div>
		<label>作者:</label>
		<select v-model="blog.author">
			<option v-for="autor in authors">
				{{autor}}
			</option>
		</select>
		<button v-on:click.prevent="pot">编辑博客</button>
	 </form>
	<div v-if="submmited">
		<h3>您的博客发布成功</h3>
	</div>
	 <div id="preview">
		 <h3>博客总览</h3>
		 <p>博客标题:{{blog.title}}</p>
		 <p>博客内容:{{blog.content}}</p>
		 <p>博客分类:</p>
		 <ul>
			 <li v-for="item in blog.categories">
				{{item}}
			 </li>
		 </ul>
		 <p>作者:{{blog.author}}</p>
	 </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
   name: 'Addblog',
  data () {
    return {
	 id:this.$route.params.id,
     blog:{},
	 authors:["scully","Eidy","Toby"],
	 submmited:false
    }
  },
  methods:{
	  pot:function(){
		  this.$axios.put('https://vuedemo1-f98d2.firebaseio.com/posts/'+this.id+".json",this.blog)
		  .then((data)=>{
			  this.submmited=true
		  }).then(data=>{
			this.$router.push({path:'/'})
		  })
	  },
	 abc(){
		  this.$axios.get('https://vuedemo1-f98d2.firebaseio.com/posts/'+this.id+".json")
		  .then(res=>{
			  this.blog=res.data
		  })
	  }
  },
  created(){
	 this.abc() 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
	box-sizing: border-box;
}
#add-blog{
	margin: 20px auto;
	max-width: 600px;
	padding: 20px;
}
label{
	display: block;
	margin: 20px 0 10px;
}
input[type="text"],textarea,select{
	display: block;
	width: 100%;
	padding: 8px;
}
textarea{
	height: 200px;
}
#checkboxes label{
	display: inline-block;
	margin-top: 0;
}
#checkboxes input{
	display: inline-block;
	margin-right: 10px;
}
button{
	display: block;
	margin: 20px 0;
	background: crimson;
	color: white;
	border: 0;
	padding: 14px;
	border-radius: 4px;
	cursor: pointer;
	font-size: 14px;
}
#preview{
	padding: 10px 20px;
	border: 1px dotted #ccc;
	margin: 30px 0;
}
h3{
	margin-top:10px ;
}
</style>

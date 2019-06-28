<template>
	<div id="sing-blog">
		<h1>文章名称:{{blog.title}}</h1>
		<h3>文章内容：</h3>
		<article>{{blog.content}}</article>
		<article>作者:{{blog.author}}</article>
		<p>分类:</p>
		<ul>
			<li v-for="i in blog.categories">{{i}}</li>
		</ul>
		<button @click="deleteblog()">删除</button>
		<router-link v-bind:to="'/edit/' + id"> 编辑</router-link>
	</div>
</template>

<script>
export default{
	name:"sing_blog",
	data(){
		return {
			id:this.$route.params.id,
			blog:[]
		}
	},
	created(){
		this.$axios.get('https://vuedemo1-f98d2.firebaseio.com/posts/'+this.id+".json")
		.then((data)=>{
			this.blog= data.data;
		})
	},
	methods:{
		deleteblog(){
		axios.delete('https://vuedemo1-f98d2.firebaseio.com/posts/'+this.id+".json")
			.then(res=>{
				this.$router.push({path:'/'})
			})
		}
	}
}
</script>

<style>
</style>

<template>
	<div id="show-blogs">
		<h1> 博客总览</h1>
		<input type="text" placeholder="搜索" v-model="search">
		<div v-for="blog in filteredBlogs" class="single-blog">
			<router-link v-bind:to="'/blog/' + blog.id">
				<h3 v-rainbow>{{blog.title | toUppercase}}</h3>
			</router-link>
			<article>{{blog.content | snippet}}</article>
		</div>
	</div>
</template>

<script>
// import axios from 'axios'
export default{
	name:'show-blogs',
	data(){
		return{
			blogs:[],
			search:""
		}
	},
	// 获取十条数据
	created(){
		this.$axios.get('https://vuedemo1-f98d2.firebaseio.com/posts.json')
		.then((data)=>{
			var res = data.data
			var blogsarry=[];
				for(let i in res){
					res[i].id=i;
					blogsarry.push(res[i]);
				}
				this.blogs=blogsarry.slice(0,10);	
		})

	},
	// 筛选数据
	computed:{
		filteredBlogs:function(){
			return this.blogs.filter((blog)=>{
				return blog.title.match(this.search)
			})
		}
	},
	// 局部过滤
	filters:{
			toUppercase(value){
			return value.toUpperCase()
		},
		snippet(value){
			return value.slice(0,100) + "..."
		}
	},
	// 局部自定义指令
	directives:{
		rainbow:{
			bind(el,binding,vnode){
					el.style.color="#" + Math.random().toString(16).slice(2,8)
				}
		}
	}
		
}
</script>

<style scoped>
#show-blogs{
	max-width: 800px;
	margin: 0 auto;
}
#show-blogs a{
	text-decoration: none;
}
.single-blog{
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
}
input[type="text"]{
	padding: 10px;
	box-sizing: border-box;
	width: 100%;
}

</style>

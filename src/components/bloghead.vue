<template>
	<nav>
		<ul>
			<li>
				<router-link to="/" exact>博客</router-link>
				<router-link to="/add" exact>添加博客</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default{
		name:"blog-head"
	}
</script>

<style scoped>
ul{
		list-style-type: none;
		text-align: center;
		margin: 0;
}
li{
	list-style: none;
	display: inline-block;
	margin: 0 10px;
}

a{
	color:#FFFFFF;
	text-decoration: none;
	padding: 12px;
	border-radius: 10px;
}

nav{
	background:crimson;
	padding: 30px 0;
	margin-bottom: 10px;
}
.router-link-active{
	background: rgba(1,2,1,0.8);
	color: #444;
}
</style>

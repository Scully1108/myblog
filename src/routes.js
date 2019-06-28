import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingBlog from './components/SingBlog.vue'
import editblog from './components/editblog.vue'
export default[
	{path:"/",component:ShowBlogs},
	{path:"/add",component:AddBlog},
	{path:"/blog/:id",component:SingBlog},
	{path:"/edit/:id",component:editblog}
]
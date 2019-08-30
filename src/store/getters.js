const getters = {
	permission_routes: state => state.perms.routers,
	getUser: state => state.user.userName,
	getAsideWidth: state => state.sys.asideWidth,
	getCollapse: state => state.sys.collapse
}
export default getters
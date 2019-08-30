const getters = {
	permission_routes: state => state.perms.routers,
	getUser: state => state.user.userName,
	getAsideWidth: state => state.system.asideWidth,
	getCollapse: state => state.system.collapse
}
export default getters
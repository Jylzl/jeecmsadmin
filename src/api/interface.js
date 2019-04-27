/*界面管理接口*/
import request from '@/utils/request.js'

export function getResourceTree(params) {
	return request({
		url: '/api/admin/resource/tree',
		method: 'post',
		data: params
	})
};
/*资源信息获取*/
export function getResourceList(params) {
	return request({
		url: '/api/admin/resource/list',
		method: 'post',
		data: params
	})
};
export function getTemplateList(params) {
	return request({
		url: '/api/admin/template/list',
		method: 'post',
		data: params
	})
};
/*资源详细*/
export function getResourceInfo(params) {
	return request({
		url: '/api/admin/resource/get',
		method: 'post',
		data: params
	})
};

export function getTemplateInfo(params) {
	return request({
		url: '/api/admin/template/get',
		method: 'post',
		data: params
	})
};


/*批量删除资源*/
export function deleteResourceList(params) {
	return request({
		url: '/api/admin/resource/delete',
		method: 'post',
		signValidate: true,
		data: params
	})
};

export function deleteTemplateList(params) {
	return request({
		url: '/api/admin/template/delete',
		method: 'post',
		signValidate: true,
		data: params
	})
};



/*新建文件夹*/
export function creatResourceFile(params) {
	return request({
		url: 'api/admin/resource/dir_save',
		method: 'post',
		signValidate: true,
		data: params
	})
};

export function creatTemplateFile(params) {
	return request({
		url: 'api/admin/template/dir_save',
		method: 'post',
		signValidate: true,
		data: params
	})
};





/*重命名*/
export function reName(params) {
	return request({
		url: '/api/admin/resource/rename',
		method: 'post',
		signValidate: true,
		data: params
	})
};

export function templateReName(params) {
	return request({
		url: '/api/admin/template/rename',
		method: 'post',
		signValidate: true,
		data: params
	})
};



/* 修改模版*/
export function updateResourceInfo(params) {
	return request({
		url: '/api/admin/template/update',
		method: 'post',
		signValidate: true,
		data: params
	})
};

/* 修改模版*/
export function addResourceInfo(params) {
	return request({
		url: '/api/admin/resource/save',
		method: 'post',
		signValidate: true,
		data: params
	})
};
export function addTemplateInfo(params) {
	return request({
		url: '/api/admin/template/save',
		method: 'post',
		signValidate: true,
		data: params
	})
};





export function getTemplateTree(params) {
	return request({
		url: '/api/admin/template/tree',
		method: 'post',
		data: params
	})
};

/**获取方案**/
export function getSolutions(params) {
	return request({
		url: '/api/admin/template/getSolutions',
		method: 'post',
		data: params
	})
};

export function setSolutions(params) {
	return request({
		url: '/api/admin/template/solutionupdate',
		method: 'post',
		signValidate: true,
		data: params
	})
};
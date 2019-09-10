/**
 * @description: 界面管理接口
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-04-28 08:35:16
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-10 14:08:48
 */

import request from '@/utils/request.js'
import api from '@/api/api';

export function getResourceTree(params) {
	return request({
		url: api.getResourceTree,
		method: 'post',
		data: params
	})
}

/*资源信息获取*/
export function getResourceList(params) {
	return request({
		url: api.getResourceList,
		method: 'post',
		data: params
	})
}

export function getTemplateList(params) {
	return request({
		url: api.getTemplateList,
		method: 'post',
		data: params
	})
}

/*资源详细*/
export function getResourceInfo(params) {
	return request({
		url: api.getResourceInfo,
		method: 'post',
		data: params
	})
}

export function getTemplateInfo(params) {
	return request({
		url: api.getTemplateInfo,
		method: 'post',
		data: params
	})
}

/*批量删除资源*/
export function deleteResourceList(params) {
	return request({
		url: api.deleteResourceList,
		method: 'post',
		signValidate: true,
		data: params
	})
}

export function deleteTemplateList(params) {
	return request({
		url: api.deleteTemplateList,
		method: 'post',
		signValidate: true,
		data: params
	})
}

/*新建文件夹*/
export function creatResourceFile(params) {
	return request({
		url: api.creatResourceFile,
		method: 'post',
		signValidate: true,
		data: params
	})
}

export function creatTemplateFile(params) {
	return request({
		url: api.creatTemplateFile,
		method: 'post',
		signValidate: true,
		data: params
	})
}

/*重命名*/
export function reName(params) {
	return request({
		url: api.reName,
		method: 'post',
		signValidate: true,
		data: params
	})
}

export function templateReName(params) {
	return request({
		url: api.templateReName,
		method: 'post',
		signValidate: true,
		data: params
	})
}

/* 修改模版*/
export function updateResourceInfo(params) {
	return request({
		url: api.updateResourceInfo,
		method: 'post',
		signValidate: true,
		data: params
	})
}

/* 修改模版*/
export function addResourceInfo(params) {
	return request({
		url: api.addResourceInfo,
		method: 'post',
		signValidate: true,
		data: params
	})
}

export function addTemplateInfo(params) {
	return request({
		url: api.addTemplateInfo,
		method: 'post',
		signValidate: true,
		data: params
	})
}

export function getTemplateTree(params) {
	return request({
		url: api.getTemplateTree,
		method: 'post',
		data: params
	})
}

/**获取方案**/
export function getSolutions(params) {
	return request({
		url: api.getSolutions,
		method: 'post',
		data: params
	})
}

export function setSolutions(params) {
	return request({
		url: api.setSolutions,
		method: 'post',
		signValidate: true,
		data: params
	})
}
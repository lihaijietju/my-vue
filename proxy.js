//此处定义代理转发规则，转发接口在rap上托管
module.exports = {
    '/menu': {
        target: 'http://rap.taobao.org/mockjs/11006',
        secure: false
    }
}

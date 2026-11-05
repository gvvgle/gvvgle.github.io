/**
 * 数据服务器配置 —— 整个静态站点唯一需要修改的文件
 *
 * 页面托管在 GitHub Pages（纯静态，没有服务端代码），
 * 学生答题提交、教师登录鉴权、全量记录拉取，
 * 全部通过下面这个 API 地址访问后端服务器。
 *
 * 换成其它服务器时，只改 API_BASE 一处，然后 commit / push 即可，
 * index.html 不用动。
 */
window.APP_CONFIG = {
  // 后端接口根地址（不要带结尾的斜杠）
  // 当前指向已部署的学校数据服务器
  API_BASE: 'https://frp-any.com:23891/api',

  // 数据服务器源（便于排查跨域问题，可选）
  API_ORIGIN: 'https://frp-any.com:23891',

  // 单次请求超时（毫秒）。网络较慢的学校网络可适当调大
  REQUEST_TIMEOUT: 15000
};

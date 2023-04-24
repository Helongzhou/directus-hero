
export default (router, { services, exceptions }) => {
  // 引入 Directus 的服务和异常对象
  const { ItemsService } = services;
  const { ServiceUnavailableException } = exceptions;

  // 创建一个 GET 路由，用来返回用户表的数据
  router.get('/', (req, res, next) => {
    // 创建一个 ItemsService 实例，指定用户表的名称和请求的 schema 和 accountability
    const userService = new ItemsService('users', {
      schema: req.schema,
      accountability: req.accountability,
    });

    // 使用 readByQuery 方法来读取用户表的数据，可以指定一些查询参数，如排序、过滤、字段等
    userService
      .readByQuery({
        sort: ['id'],
        fields: ['*'],
      })
      .then((results) => res.json(results)) // 如果成功，返回结果为 JSON 格式
      .catch((error) => {
        // 如果失败，抛出一个 ServiceUnavailableException 异常，并附上错误信息
        return next(new ServiceUnavailableException(error.message));
      });
  });
};
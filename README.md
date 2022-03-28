## nestjs 开发模板

**列举**

- config(配置)
  - app
  - db
- core(核心)
  - user
  - common
- share(共享)
  - db
  - email
  - filter(过滤器)
  - geetest(极验证)
  - jwt
  - oAuth(第三方登录)
  - office
    - excel
  - rbac[暂无]
  - role(权限)
  - schedule(定时)
  - sms(阿里云短信)
  - storage(阿里云对象存储)
  - video(阿里云视频点播)
- moudle(模块)
- plugs(插件)
  - log(日志)
  - swagger
- utils(工具)


---
**说明**

主要讲接口放在`core` `moudle`上，`share` `utils` 则是应对后期的业务进行拓展的功能性模块


**dockerfile**

方便更好的部署，已经在微信云托管 尝试过了
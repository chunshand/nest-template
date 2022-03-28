## jwt  - json web token

在使用jwt基本上是在 用户登录 以及 用户验证


用户验证则使用jwt的装饰器完成


### jwt 装饰器使用

```ts
// module 需要引入
import { JwtStrategy } from 'src/share/jwt/jwt.strategy';
// providers:[JwtStrategy]


// controller
import { JwtDecorator } from "src/share/jwt/jwt.decorator"

@JwtDecorator()


```
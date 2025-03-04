## 部署方法

### Vercel 部署方式

1. Fork 本仓库到你的 Github 账号
2. 登录 Vercel 后台(如未有请先注册), 点击右上角 **Add New...** - **Project**
3. 点击选择你刚刚 Fork 的仓库名称右侧的 **Import**
4. 点击下方 Deploy 一键部署
5. 部署完成后，可查看链接或点击上方 Settings - Domain - Add 来绑定自己的域名
6. 参考下方 API 访问地址, Enjoy it!

### 服务器部署方式

1. 点击右侧 Release 下载最新版本的 Source code
2. 解压，将 **server.js package.json** 复制到一个单独的文件夹
3. 在此文件夹内输入 **npm i** 来安装依赖
4. (可选) 右键编辑 **server.js** , 查看上方注释更改端口号
5. 在当前文件夹下新建命令行窗口, 输入 **node server.js** 来启动服务
6. (可选) 自行附加反向代理以实现 HTTPS 访问 API
6. 参考下方 API 访问地址, Enjoy it!


## API 访问地址

请按照你实际的部署方式确认基础路径

- **基础路径 (服务器部署)**：`http://[IP或域名]:端口号(默认3000)/`

- **基础路径 (Vercel部署)**：`Vercel给你分配的地址, 可以在 Vercel 项目首页看到`

---

### 直接输出模式（服务器代理）

- **特点**: 直接返回图片二进制数据

- **缺点**: 耗费服务器资源, 响应速度取决于部署服务器网速

#### 随机壁纸

- **1366×768 分辨率**:  

  `GET 基础路径/random_1366x768`  

  返回 8 日内随机一张 Bing 壁纸，分辨率为 1366×768 

  示例(虚构链接无法访问, 仅供参考): [https://bing-api-nodejs-vercelserver.vercel.app/random_1366x768](https://bing-api-nodejs-vercelserver.vercel.app/random_1366x768)

- **1920×1080 分辨率 (1080P FHD)**:  

  `GET 基础路径/random_1920x1080`  

  返回 8 日内随机一张 Bing 壁纸，分辨率为 1920×1080 1080P FHD

  示例(虚构链接无法访问, 仅供参考): [https://bing-api-nodejs-vercelserver.vercel.app/random_1920x1080](https://bing-api-nodejs-vercelserver.vercel.app/random_1920x1080)

- **3840×2160 分辨率 (4K UHD)**:  

  `GET 基础路径/random_UHD`  
  
  返回 8 日内随机一张 Bing 壁纸，分辨率为 3840×2160 4K UHD  

  示例(虚构链接无法访问, 仅供参考): [https://bing-api-nodejs-vercelserver.vercel.app/random_UHD](https://bing-api-nodejs-vercelserver.vercel.app/random_UHD)

#### 今日壁纸

- **1366×768 分辨率**:  

  `GET 基础路径/today_1366x768`  

  返回今日 Bing 壁纸，分辨率为 1366×768 

  示例(虚构链接无法访问, 仅供参考): [https://bing-api-nodejs-vercelserver.vercel.app/today_1366x768](https://bing-api-nodejs-vercelserver.vercel.app/today_1366x768)

- **1920×1080 分辨率 (1080P FHD)**:  

  `GET 基础路径/today_1920x1080`  

  返回今日 Bing 壁纸，分辨率为 1920×1080 1080P FHD

  示例(虚构链接无法访问, 仅供参考): [https://bing-api-nodejs-vercelserver.vercel.app/today_1920x1080](https://bing-api-nodejs-vercelserver.vercel.app/today_1920x1080)

- **3840×2160 分辨率 (4K UHD)**:  

  `GET 基础路径/today_UHD`  

  返回今日 Bing 壁纸，分辨率为 3840×2160 4K UHD  

  示例(虚构链接无法访问, 仅供参考): [https://bing-api-nodejs-vercelserver.vercel.app/today_UHD](https://bing-api-nodejs-vercelserver.vercel.app/today_UHD)

---

### 302 模式 (跳转至 Bing 服务器)

- **特点**: 302 到 Bing 服务器, 不浪费本机资源, 加载速度取决于连接到 Bing 服务器的速度

- **缺点**: 无

#### 随机壁纸

- **1366×768 分辨率**:  

  `GET 基础路径/random_302_1366x768`  

  重定向到 8 日内随机一张 Bing 壁纸的 URL，分辨率为 1366x768

  示例(虚构链接无法访问, 仅供参考): [https://bing-api-nodejs-vercelserver.vercel.app/random_302_1366x768](https://bing-api-nodejs-vercelserver.vercel.app/random_302_1366x768)

- **1920×1080 分辨率 (1080P FHD)**:  

  `GET 基础路径/random_302_1920x1080`  

  重定向到 8 日内随机一张 Bing 壁纸的 URL，分辨率为 1920×1080 1080P FHD 

  示例(虚构链接无法访问, 仅供参考): [https://bing-api-nodejs-vercelserver.vercel.app/random_302_1920x1080](https://bing-api-nodejs-vercelserver.vercel.app/random_302_1920x1080)

- **3840×2160 分辨率 (4K UHD)**:  

  `GET 基础路径/random_302_UHD`  

  重定向到 8 日内随机一张 Bing 壁纸的 URL，分辨率为 3840×2160 4K UHD  

  示例(虚构链接无法访问, 仅供参考): [https://bing-api-nodejs-vercelserver.vercel.app/random_302_UHD](https://bing-api-nodejs-vercelserver.vercel.app/random_302_UHD)

#### 今日壁纸

- **1366×768 分辨率**:  

  `GET 基础路径/today_302_1366x768`  

  重定向到今日 Bing 壁纸的 URL，分辨率为 1366x768

  示例(虚构链接无法访问, 仅供参考): [https://bing-api-nodejs-vercelserver.vercel.app/today_302_1366x768](https://bing-api-nodejs-vercelserver.vercel.app/today_302_1366x768)

- **1920×1080 分辨率 (1080P FHD)**:  

  `GET 基础路径/today_302_1920x1080`  

  重定向到今日 Bing 壁纸的 URL，分辨率为 1920×1080 1080P FHD   

  示例(虚构链接无法访问, 仅供参考): [https://bing-api-nodejs-vercelserver.vercel.app/today_302_1920x1080](https://bing-api-nodejs-vercelserver.vercel.app/today_302_1920x1080)

- **3840×2160 分辨率 (4K UHD)**:  

  `GET 基础路径/today_302_UHD`  

  重定向到今日 Bing 壁纸的 URL，分辨率为 3840×2160 4K UHD  

  示例(虚构链接无法访问, 仅供参考): [https://bing-api-nodejs-vercelserver.vercel.app/today_302_UHD](https://bing-api-nodejs-vercelserver.vercel.app/today_302_UHD)

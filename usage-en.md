## Deployment Method

### Vercel Deployment

1. Fork this repository to your Github account
2. Log in to the Vercel dashboard (register if you don't have one), click on the top right **Add New...** - **Project**
3. Click to select the repository name you just Forked on the right side of **Import**
4. Click Deploy below for one-click deployment
5. After deployment is complete, you can view the link or click Settings - Domain - Add above to bind your own domain
6. Refer to the API access address below, Enjoy it!

### Server Deployment

1. Click Release on the right to download the latest version of the Source code
2. Unzip, copy **server.js package.json** to a separate folder
3. Enter **npm i** in this folder to install dependencies
4. (Optional) Right-click to edit **server.js**, view the comments above to change the port number
5. Create a new command line window in the current folder and enter **node server.js** to start the service
6. (Optional) Add a reverse proxy yourself to implement HTTPS access to the API
6. Refer to the API access address below, Enjoy it!

## API Access Address

Please confirm the base path according to your actual deployment method

- **Base Path (Server Deployment)**: `http://[IP or domain name]:port number(default 3000)/`

- **Base Path (Vercel Deployment)**: `The address assigned to you by Vercel, which can be seen on the Vercel project homepage`

---

### Direct Output Mode (Server Proxy)

- **Features**: Directly returns image binary data

- **Disadvantages**: Consumes server resources, response speed depends on the deployment server network speed

#### Random Wallpaper

- **1366×768 Resolution**:

  `GET Base Path/random_1366x768`

  Returns a random Bing wallpaper within 8 days, resolution is 1366×768

  Example (fictitious link cannot be accessed, for reference only): [https://bing-api-nodejs-vercelserver.vercel.app/random_1366x768](https://bing-api-nodejs-vercelserver.vercel.app/random_1366x768)

- **1920×1080 Resolution (1080P FHD)**:

  `GET Base Path/random_1920x1080`

  Returns a random Bing wallpaper within 8 days, resolution is 1920×1080 1080P FHD

  Example (fictitious link cannot be accessed, for reference only): [https://bing-api-nodejs-vercelserver.vercel.app/random_1920x1080](https://bing-api-nodejs-vercelserver.vercel.app/random_1920x1080)

- **3840×2160 Resolution (4K UHD)**:

  `GET Base Path/random_UHD`

  Returns a random Bing wallpaper within 8 days, resolution is 3840×2160 4K UHD

  Example (fictitious link cannot be accessed, for reference only): [https://bing-api-nodejs-vercelserver.vercel.app/random_UHD](https://bing-api-nodejs-vercelserver.vercel.app/random_UHD)

#### Today's Wallpaper

- **1366×768 Resolution**:

  `GET Base Path/today_1366x768`

  Returns today's Bing wallpaper, resolution is 1366×768

  Example (fictitious link cannot be accessed, for reference only): [https://bing-api-nodejs-vercelserver.vercel.app/today_1366x768](https://bing-api-nodejs-vercelserver.vercel.app/today_1366x768)

- **1920×1080 Resolution (1080P FHD)**:

  `GET Base Path/today_1920x1080`

  Returns today's Bing wallpaper, resolution is 1920×1080 1080P FHD

  Example (fictitious link cannot be accessed, for reference only): [https://bing-api-nodejs-vercelserver.vercel.app/today_1920x1080](https://bing-api-nodejs-vercelserver.vercel.app/today_1920x1080)

- **3840×2160 Resolution (4K UHD)**:

  `GET Base Path/today_UHD`

  Returns today's Bing wallpaper, resolution is 3840×2160 4K UHD

  Example (fictitious link cannot be accessed, for reference only): [https://bing-api-nodejs-vercelserver.vercel.app/today_UHD](https://bing-api-nodejs-vercelserver.vercel.app/today_UHD)

---

### 302 Mode (Jump to Bing Server)

- **Features**: 302 to Bing server, does not waste local resources, loading speed depends on the speed of connecting to the Bing server

- **Disadvantages**: None

#### Random Wallpaper

- **1366×768 Resolution**:

  `GET Base Path/random_302_1366x768`

  Redirects to the URL of a random Bing wallpaper within 8 days, resolution is 1366x768

  Example (fictitious link cannot be accessed, for reference only): [https://bing-api-nodejs-vercelserver.vercel.app/random_302_1366x768](https://bing-api-nodejs-vercelserver.vercel.app/random_302_1366x768)

- **1920×1080 Resolution (1080P FHD)**:

  `GET Base Path/random_302_1920x1080`

  Redirects to the URL of a random Bing wallpaper within 8 days, resolution is 1920×1080 1080P FHD

  Example (fictitious link cannot be accessed, for reference only): [https://bing-api-nodejs-vercelserver.vercel.app/random_302_1920x1080](https://bing-api-nodejs-vercelserver.vercel.app/random_302_1920x1080)

- **3840×2160 Resolution (4K UHD)**:

  `GET Base Path/random_302_UHD`

  Redirects to the URL of a random Bing wallpaper within 8 days, resolution is 3840×2160 4K UHD

  Example (fictitious link cannot be accessed, for reference only): [https://bing-api-nodejs-vercelserver.vercel.app/random_302_UHD](https://bing-api-nodejs-vercelserver.vercel.app/random_302_UHD)

#### Today's Wallpaper

- **1366×768 Resolution**:

  `GET Base Path/today_302_1366x768`

  Redirects to the URL of today's Bing wallpaper, resolution is 1366x768

  Example (fictitious link cannot be accessed, for reference only): [https://bing-api-nodejs-vercelserver.vercel.app/today_302_1366x768](https://bing-api-nodejs-vercelserver.vercel.app/today_302_1366x768)

- **1920×1080 Resolution (1080P FHD)**:

  `GET Base Path/today_302_1920x1080`

  Redirects to the URL of today's Bing wallpaper, resolution is 1920×1080 1080P FHD

  Example (fictitious link cannot be accessed, for reference only): [https://bing-api-nodejs-vercelserver.vercel.app/today_302_1920x1080](https://bing-api-nodejs-vercelserver.vercel.app/today_302_1920x1080)

- **3840×2160 Resolution (4K UHD)**:

  `GET Base Path/today_302_UHD`

  Redirects to the URL of today's Bing wallpaper, resolution is 3840×2160 4K UHD

  Example (fictitious link cannot be accessed, for reference only): [https://bing-api-nodejs-vercelserver.vercel.app/today_302_UHD](https://bing-api-nodejs-vercelserver.vercel.app/today_302_UHD)

---

This document was translated with the assistance of Deepseek R1

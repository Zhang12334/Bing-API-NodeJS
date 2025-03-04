## 部署方法

### Vercel 部署方式

1. Fork 本倉庫到你的 Github 帳號
2. 登錄 Vercel 後台(如未有請先註冊), 點擊右上角 **Add New...** - **Project**
3. 點擊選擇你剛剛 Fork 的倉庫名稱右側的 **Import**
4. 點擊下方 Deploy 一鍵部署
5. 部署完成後，可查看鏈接或點擊上方 Settings - Domain - Add 來綁定自己的域名
6. 參考下方 API 訪問地址, Enjoy it!

### 伺服器部署方式

1. 點擊右側 Release 下載最新版本的 Source code
2. 解壓縮，將 **server.js package.json** 複製到一個單獨的資料夾
3. 在此資料夾內輸入 **npm i** 來安裝依賴
4. (可選) 右鍵編輯 **server.js** , 查看上方註釋更改端口號
5. 在當前資料夾下新建命令列視窗, 輸入 **node server.js** 來啟動服務
6. (可選) 自行附加反向代理以實現 HTTPS 訪問 API
6. 參考下方 API 訪問地址, Enjoy it!


## API 訪問地址

請按照你實際的部署方式確認基礎路徑

- **基礎路徑 (伺服器部署)**：`http://[IP或域名]:端口號(默認3000)/`

- **基礎路徑 (Vercel部署)**：`Vercel給你分配的地址, 可以在 Vercel 項目首頁看到`

---

### 直接輸出模式（伺服器代理）

- **特點**: 直接返回圖片二進制資料

- **缺點**: 耗費伺服器資源, 響應速度取決於部署伺服器網速

#### 隨機壁紙

- **1366×768 分辨率**:  

  `GET 基礎路徑/random_1366x768`  

  返回 8 日內隨機一張 Bing 壁紙，分辨率為 1366×768 

  示例(虛構鏈接無法訪問, 僅供參考): [https://bing-api-nodejs-vercelserver.vercel.app/random_1366x768](https://bing-api-nodejs-vercelserver.vercel.app/random_1366x768)

- **1920×1080 分辨率 (1080P FHD)**:  

  `GET 基礎路徑/random_1920x1080`  

  返回 8 日內隨機一張 Bing 壁紙，分辨率為 1920×1080 1080P FHD

  示例(虛構鏈接無法訪問, 僅供參考): [https://bing-api-nodejs-vercelserver.vercel.app/random_1920x1080](https://bing-api-nodejs-vercelserver.vercel.app/random_1920x1080)

- **3840×2160 分辨率 (4K UHD)**:  

  `GET 基礎路徑/random_UHD`  
  
  返回 8 日內隨機一張 Bing 壁紙，分辨率為 3840×2160 4K UHD  

  示例(虛構鏈接無法訪問, 僅供參考): [https://bing-api-nodejs-vercelserver.vercel.app/random_UHD](https://bing-api-nodejs-vercelserver.vercel.app/random_UHD)

#### 今日壁紙

- **1366×768 分辨率**:  

  `GET 基礎路徑/today_1366x768`  

  返回今日 Bing 壁紙，分辨率為 1366×768 

  示例(虛構鏈接無法訪問, 僅供參考): [https://bing-api-nodejs-vercelserver.vercel.app/today_1366x768](https://bing-api-nodejs-vercelserver.vercel.app/today_1366x768)

- **1920×1080 分辨率 (1080P FHD)**:  

  `GET 基礎路徑/today_1920x1080`  

  返回今日 Bing 壁紙，分辨率為 1920×1080 1080P FHD

  示例(虛構鏈接無法訪問, 僅供參考): [https://bing-api-nodejs-vercelserver.vercel.app/today_1920x1080](https://bing-api-nodejs-vercelserver.vercel.app/today_1920x1080)

- **3840×2160 分辨率 (4K UHD)**:  

  `GET 基礎路徑/today_UHD`  

  返回今日 Bing 壁紙，分辨率為 3840×2160 4K UHD  

  示例(虛構鏈接無法訪問, 僅供參考): [https://bing-api-nodejs-vercelserver.vercel.app/today_UHD](https://bing-api-nodejs-vercelserver.vercel.app/today_UHD)

---

### 302 模式 (跳轉至 Bing 伺服器)

- **特點**: 302 到 Bing 伺服器, 不浪費本機資源, 加載速度取決於連接到 Bing 伺服器的速度

- **缺點**: 無

#### 隨機壁紙

- **1366×768 分辨率**:  

  `GET 基礎路徑/random_302_1366x768`  

  重定向到 8 日內隨機一張 Bing 壁紙的 URL，分辨率為 1366x768

  示例(虛構鏈接無法訪問, 僅供參考): [https://bing-api-nodejs-vercelserver.vercel.app/random_302_1366x768](https://bing-api-nodejs-vercelserver.vercel.app/random_302_1366x768)

- **1920×1080 分辨率 (1080P FHD)**:  

  `GET 基礎路徑/random_302_1920x1080`  

  重定向到 8 日內隨機一張 Bing 壁紙的 URL，分辨率為 1920×1080 1080P FHD 

  示例(虛構鏈接無法訪問, 僅供參考): [https://bing-api-nodejs-vercelserver.vercel.app/random_302_1920x1080](https://bing-api-nodejs-vercelserver.vercel.app/random_302_1920x1080)

- **3840×2160 分辨率 (4K UHD)**:  

  `GET 基礎路徑/random_302_UHD`  

  重定向到 8 日內隨機一張 Bing 壁紙的 URL，分辨率為 3840×2160 4K UHD  

  示例(虛構鏈接無法訪問, 僅供參考): [https://bing-api-nodejs-vercelserver.vercel.app/random_302_UHD](https://bing-api-nodejs-vercelserver.vercel.app/random_302_UHD)

#### 今日壁紙

- **1366×768 分辨率**:  

  `GET 基礎路徑/today_302_1366x768`  

  重定向到今日 Bing 壁紙的 URL，分辨率為 1366x768

  示例(虛構鏈接無法訪問, 僅供參考): [https://bing-api-nodejs-vercelserver.vercel.app/today_302_1366x768](https://bing-api-nodejs-vercelserver.vercel.app/today_302_1366x768)

- **1920×1080 分辨率 (1080P FHD)**:  

  `GET 基礎路徑/today_302_1920x1080`  

  重定向到今日 Bing 壁紙的 URL，分辨率為 1920×1080 1080P FHD   

  示例(虛構鏈接無法訪問, 僅供參考): [https://bing-api-nodejs-vercelserver.vercel.app/today_302_1920x1080](https://bing-api-nodejs-vercelserver.vercel.app/today_302_1920x1080)

- **3840×2160 分辨率 (4K UHD)**:  

  `GET 基礎路徑/today_302_UHD`  

  重定向到今日 Bing 壁紙的 URL，分辨率為 3840×2160 4K UHD  

  示例(虛構鏈接無法訪問, 僅供參考): [https://bing-api-nodejs-vercelserver.vercel.app/today_302_UHD](https://bing-api-nodejs-vercelserver.vercel.app/today_302_UHD)

---

本文檔由 Deepseek R1 輔助翻譯

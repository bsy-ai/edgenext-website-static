# EdgeNext 国际化 (i18n) 系统

这是一个完整的国际化解决方案，集成了百度翻译API，支持自动文本扫描、翻译和多语言切换。

## 目录结构

```
src/i18n/
├── index.ts                    # i18n 配置入口
├── locales/                    # 语言包目录
│   ├── en.json                # 英文语言包
│   └── zh.json                # 中文语言包
├── services/                   # 服务层
│   └── baiduTranslate.ts      # 百度翻译服务
├── scripts/                    # 脚本工具
│   ├── textScanner.ts         # 文本扫描器
│   ├── autoTranslate.ts       # 自动翻译脚本
│   └── buildTimeTranslation.ts # 构建时翻译脚本
└── README.md                   # 使用说明
```

## 功能特性

1. **自动文本扫描**: 扫描项目中的文本内容，提取需要翻译的字符串
2. **百度翻译集成**: 使用百度翻译API进行自动翻译
3. **构建时翻译**: 在构建过程中自动翻译
4. **语言切换**: 提供用户界面语言切换功能
5. **增量翻译**: 只翻译新增的文本，避免重复翻译
6. **可配置扫描**: 支持忽略特定文件夹和文件

## 快速开始

### 1. 配置百度翻译

首先需要获取百度翻译API的App ID和App Key：

1. 访问 [百度翻译开放平台](https://fanyi-api.baidu.com/)
2. 注册账号并创建应用
3. 获取App ID和App Key

### 2. 配置项目

编辑项目根目录的 `i18n.config.json` 文件：

```json
{
  "baiduAppId": "YOUR_BAIDU_APP_ID",
  "baiduAppKey": "YOUR_BAIDU_APP_KEY",
  "sourceLanguage": "en",
  "targetLanguages": ["zh"],
  "scanConfig": {
    "srcDir": "src",
    "outputDir": "src/i18n/locales",
    "fileExtensions": [".tsx", ".ts", ".jsx", ".js"],
    "ignorePatterns": [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/*.test.*",
      "**/*.spec.*"
    ],
    "ignoreDirs": [
      "node_modules",
      "dist",
      "build",
      ".git",
      "public",
      "src/i18n/scripts",
      "src/i18n/services"
    ]
  }
}
```

或者使用环境变量：

```bash
export BAIDU_TRANSLATE_APP_ID="your_app_id"
export BAIDU_TRANSLATE_APP_KEY="your_app_key"
export I18N_SOURCE_LANGUAGE="en"
export I18N_TARGET_LANGUAGES="zh"
```

### 3. 运行翻译

```bash
# 初始化配置文件
npm run translate:init

# 扫描并翻译文本
npm run translate

# 仅查看帮助信息
npm run translate:scan
```

### 4. 在组件中使用翻译

```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('common.title')}</h1>
      <p>{t('common.description')}</p>
    </div>
  );
};
```

## 脚本命令

| 命令 | 描述 |
|------|------|
| `npm run translate` | 扫描文本并执行翻译 |
| `npm run translate:init` | 生成配置文件模板 |
| `npm run translate:scan` | 查看扫描和翻译帮助 |

## 文本扫描规则

扫描器会自动识别以下类型的文本：

1. **字符串字面量**: `"Hello World"`, `'你好'`
2. **模板字符串**: \`Template string\`
3. **JSX文本**: `<div>Text content</div>`

### 过滤规则

以下类型的文本会被忽略：

- 太短的文本 (< 2字符)
- 太长的文本 (> 500字符)
- 纯数字和符号
- HTML标签名
- CSS类名和属性名
- URL和路径
- 变量名和常量名

### 自定义过滤

您可以在 `textScanner.ts` 中的 `shouldTranslate` 方法中修改过滤规则。

## 构建集成

系统已经集成到构建流程中：

```json
{
  "scripts": {
    "prebuild": "npm run translate",
    "build": "vite build"
  }
}
```

这意味着每次构建前都会自动扫描和翻译新文本。

## 语言切换

语言切换器已集成到Header组件中，用户可以通过界面切换语言。

### 添加新语言

1. 在 `i18n.config.json` 中添加新的目标语言
2. 运行 `npm run translate`
3. 在 `LanguageSwitcher.tsx` 中添加新语言选项

```tsx
const languages = [
  { code: 'en', name: t('language.english') },
  { code: 'zh', name: t('language.chinese') },
  { code: 'ja', name: t('language.japanese') }, // 新增
];
```

## 百度翻译API说明

### 支持的语言代码

- `en`: 英语
- `zh`: 中文
- `ja`: 日语
- `ko`: 韩语
- `fr`: 法语
- `de`: 德语
- `es`: 西班牙语
- `ru`: 俄语

更多语言代码请参考 [百度翻译API文档](https://fanyi-api.baidu.com/doc/21)

### API限制

- 免费版：每月200万字符
- 标准版：按使用量付费
- 频率限制：10次/秒

## 故障排除

### 1. 翻译失败

检查：
- 百度翻译API配置是否正确
- 网络连接是否正常
- API配额是否用完

### 2. 文本未被扫描

检查：
- 文件是否在扫描目录内
- 文件扩展名是否在配置中
- 文本是否被过滤规则排除

### 3. 语言切换不生效

检查：
- i18n配置是否正确加载
- 语言包文件是否存在
- 浏览器控制台是否有错误

## 开发指南

### 扩展翻译服务

您可以在 `services/` 目录下添加其他翻译服务（如Google Translate、DeepL等）：

```typescript
// services/googleTranslate.ts
export class GoogleTranslateService {
  async translate(text: string, to: string): Promise<TranslateResult> {
    // 实现Google翻译逻辑
  }
}
```

### 自定义扫描规则

修改 `textScanner.ts` 中的扫描逻辑来支持特定的文本格式或框架。

### 集成CI/CD

在CI/CD流程中添加翻译步骤：

```yaml
# .github/workflows/build.yml
- name: Run translation
  run: npm run translate
  env:
    BAIDU_TRANSLATE_APP_ID: ${{ secrets.BAIDU_APP_ID }}
    BAIDU_TRANSLATE_APP_KEY: ${{ secrets.BAIDU_APP_KEY }}
```

## 许可证

本项目遵循MIT许可证。

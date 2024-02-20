# x-hiring grab script

🤗 每日最新招聘信息，使用 Google AI 提取摘要

- V2EX 抓取
- 电鸭抓取
- GoogleGemini 摘要分析

## ⌨️ 安装&运行

配置环境变量。 在根目录创建 `.env` 文件(参考 `.env.example`)， 之后复制下面内容

```txt
# Prisma postgresql 数据库
DATABASE_URL="postgresql://x-hiring:password@0.0.0.0:5432/x-hiring"

# Google Gemini AI
GEMINI_AI_API_KEY="api_token"

# 本地代理 （可选）
LOCAL_FETCH_PROXY="http://127.0.0.1:7890"
```

```shell
npm install
npm run dev
```

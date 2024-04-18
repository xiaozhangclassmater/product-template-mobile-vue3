interface ImportMetaEnv {
  readonly VITE_SERVER_URL: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

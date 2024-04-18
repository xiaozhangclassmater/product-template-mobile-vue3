import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({

  build:{
    outDir: './dist' // 设置打包出口的目录
  },
  resolve:{
    alias: { // 配置工程文件字符索引
      '@': path.resolve(__dirname , './src'),
      "~": path.resolve(__dirname , './src/assets')
    }
  },
  css:{
    preprocessorOptions:{
      less:{
        additionalData: ` @import "@/assets/styles/public.less";`,
      }
    },
    postcss:{
      // plugins:{
      //   // autoprefixer({
          
      //   // })
      // }
    }
  },
  plugins: [
    vue(),
    // 设置支持的浏览器版本兼容
    legacy({
      targets: [  
        '> 1%',
        "last 2 versions",
        "not ie <= 8",
        "iOS >= 7"
      ],
      polyfills:[
        'es.promise',
        'es.symbol',
        'es.array.iterator',
        'es.object.assign',
        'es.promise.finally',
        'es.global-this'
      ],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      modernPolyfills: ['es.global-this']

    }),
  ],
  server:{
    host: '0.0.0.0', 
    port: 8080,
    open: true,
    proxy: { // 配置接口代理
      "/api": {
        target: 'localhost:8080'
      }
    },
    hmr: true
  }
})

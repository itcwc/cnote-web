import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// 手动定义 __dirname，因为在 ES 模块中默认是没有的
const __dirname = new URL('.', import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 将 @ 映射到 src 目录
    },
    extensions: ['.ts', '.json', '.ts']
  },
});

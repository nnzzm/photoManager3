<script setup lang="js">
import { photoDisplay } from './management.js'; // management.jsをインポート
photoDisplay();

// 当日の日付を取得
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD形式に変換
</script>

<template>
  <section class="folder-list">
    <h1 class="folder-list-headline">FolderList</h1>
    <input type="date" id="dateInput" :value="today" /> <!-- placeholderに当日の日付をバインド -->
    <ul>
      <li>
        
      </li>
    </ul>
  </section>
</template>

<style scoped>
.folder-list {
  text-align: center;
}
.folder-list-headline {
  font-size: 40px;
  text-align: center;
  color: #2f6e74;
}
</style>
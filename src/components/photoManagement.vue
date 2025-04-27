<script setup lang="js">
import { PhotoSort } from './management.js'; // PhotoSort をインポート

// PhotoSort から必要なデータと関数を取得
const { photos, handleFileUpload, deletePhoto } = PhotoSort();
</script>

<template>
  <section class="drag-area-section">
    <h1 class="drag-headline">PhotoManagement</h1>
    <!-- 写真アップロード画面 -->
    <div class="drag-area">
      <h2>Drag and Drop Area</h2>
      <p>Drag and drop your photos here.</p>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        multiple
        @change="handleFileUpload"
      />
      <div class="preview">
        <p v-if="photos.length === 0">No photos uploaded yet.</p>
      </div>
    </div>
  </section>


  <section class="photo-list-section">
    <h2 class="photo-list-headline">Photo</h2>
    <button>upload</button>
    <ul id="photo-list">
      <!-- 写真のリストを表示 -->
      <li v-for="photo in photos" :key="photo.id">
        <img :src="photo.url" :alt="photo.name" />
        <p>{{ photo.name }}</p>
        <button @click="deletePhoto(photo.id)">Delete</button>
      </li>
    </ul>
    
  </section>
  
  
  
</template>

<style scoped>
.drag-headline {
  font-size: 40px;
  margin-bottom: 10px;
  text-align: center;
  color: #2f6e74;
}
.drag-area {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
}
.drag-area input[type="file"] {
  display: block;
  margin: 10px auto;
}

/* photo-list */
.photo-list-section{
  width:100%;
}
#photo-list{
  list-style: none;
}
.photo-list-headline{
  font-size: 40px;
  margin-top:100px;
  text-align: center;
  color: #2f6e74;
}
#photo-list img {
  max-width: 100px;
  max-height: 100px;
  margin: 10px;
  
}
.photo-list-section > button{
  font-size:20px;
  color:rgb(255, 255, 255);
  background-color: #848484;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
}
</style>
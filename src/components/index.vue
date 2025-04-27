<template>
  <section class="router-section">
    <h1 class="drag-headline">Router</h1>
    <nav>
      <ul class="nav-list">
        <li><router-link to="/photo-management">PhotoManagement</router-link></li>
        <li><router-link to="/folder-list">FolderList</router-link></li>
      </ul>
    </nav>
    <router-view></router-view> <!-- ページコンテンツを表示 -->
  </section>
</template>
<style scoped>
  .router-section {
    text-align: center;
  }
  .drag-headline {
    font-size: 40px;
    margin-bottom: 10px;
    text-align: center;
    color: #2f6e74;
  }
  .nav-list {
    list-style-type: none;
    padding: 0;
  }
  .nav-list li {
    display: inline;
    margin-right: 30px;
  }
  .nav-list a {
    text-decoration: none;
    color: #8700ac;
    font-size: 30px;
  }
</style>
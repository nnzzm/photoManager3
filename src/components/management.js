import { ref } from 'vue';

export function PhotoSort() {
  // 写真リストを管理する状態
  const photos = ref([]);

  // ファイルをアップロードする関数
  const handleFileUpload = (event) => {
    const input = event.target;
    if (!input.files) return;

    Array.from(input.files).forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        photos.value.push({
          id: Date.now() + index, // 一意のIDを生成
          name: file.name,
          url: e.target?.result,
        });
      };
      reader.readAsDataURL(file); // ファイルをBase64に変換
    });

    // 入力をリセットして同じファイルを再度選択可能にする
    input.value = '';
  };

  // 写真を削除する関数
  const deletePhoto = (id) => {
    photos.value = photos.value.filter((photo) => photo.id !== id);
  };

  return { photos, handleFileUpload, deletePhoto }; // 必要なデータと関数を返す
}


export function photoDisplay(){
  const photos = ref([]);
  console.log(123); // 写真リストを表示

}
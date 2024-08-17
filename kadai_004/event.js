  // htmlドキュメントの読み込みが完了
  $(window).on('load', () => {
    console.log('loadイベントが発生しました');
  });
  
  // 画面scrollした場合
  $(window).on('scroll', () => {
    console.log('scrollイベントが発生しました');
  });
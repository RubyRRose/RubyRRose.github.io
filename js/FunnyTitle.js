<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = "网页崩溃了ヽ(●-`Д´-)ノ";
         clearTimeout(titleTime);
     }
     else {
         document.title = "我开玩笑的ヾ(Ő∀Ő3)ノ" + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });

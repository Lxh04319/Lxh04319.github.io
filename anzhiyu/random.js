var posts=["2024/01/15/JavaWeb/","2024/01/31/Git/","2023/12/23/My-New-Post/","2024/01/11/base/","2024/03/01/MySQL高级/","2024/02/11/关于redis的种种坑/","2024/09/26/百度一面9.26/","2024/07/03/文件按时间顺序和名称顺序批量加序号前缀重命名/","2024/10/18/快手一面10.18/","2024/03/20/使用docker安装elasticsearch kibana ik分词器以及踩雷/","2024/08/26/美团一面8.26/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
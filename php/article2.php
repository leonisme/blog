<?php
$count=$_GET['count'];
$article=file_get_contents('../file/'.$count.'.txt');
try{
    $pdo=new PDO('mysql:host=localhost;dbname=test','root','111111');
    $sql='select id,time,tags,title from blog where id>='.$count.' and id='.$count;
    $stmt=$pdo->prepare($sql);
    $res=$stmt->execute();
        $fetch=$stmt->fetch();
        $arr=array('time'=>$fetch['time'],'tags'=>$fetch['tags'],'title'=>$fetch['title'],'article'=>$article);
    echo json_encode($arr);
}catch(PDOException $e){
    echo $e->getMessage();
}
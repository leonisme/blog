<?php
header('content-type:text/html;charset=utf-8');
$count=$_GET['count'];
try{
    $pdo=new PDO('mysql:host=localhost;dbname=test','root','111111');
    $range=$count+4;
    $sql='select id,time,tags,title,article from blog where id>='.$count.' and id<='.$range;
    $stmt=$pdo->prepare($sql);
    $res=$stmt->execute();
    $link='/article/';
    $array=array();
    for($i=$count;$i<=$range;$i++){
        $fetch=$stmt->fetch();
        $name="arr".$fetch['id'];
        $$name=array('time'=>$fetch['time'],'tags'=>$fetch['tags'],'title'=>$fetch['title'],'arti'=>$fetch['article'],'link'=>$link.$fetch['id']);
        array_push($array,$$name);
    }
    echo json_encode($array);
}catch(PDOException $e){
    echo $e->getMessage();
}
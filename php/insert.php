<?php
try{
    $pdo=new PDO('mysql:host=localhost;dbname=test','root','111111');
    $article="It's time to brush up on your photo editing skills. Instagram is rolling out a feature that will let people get a closer, more intimate look at your pictures.
Appropriately called Zoom, the new addition will let people zoom in on photos and videos in their feeds.
The move is a welcomed one for avid Instagram users; one that feels intuitive for those used to zooming in on mobile photos.
";
    $sql='INSERT blog(time,tags,title,article) VALUES("Dec 20, 2015","IOS","Instagram adds feature that will change how you view photos","'.$article.'")';
    $res=$pdo->exec($sql);
    echo $res;
}catch(PDOException $e){
    echo $e->getMessage();
}
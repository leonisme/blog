<?php
header("Content-type: text/html; charset=utf-8");
//header("Content-type: text/html; charset=gb2312");
$count=$_GET['count'];
$time="Dec 20, 2015";
$tags="IOS";
$title="因为微博越来越不开放，第三方客户端「墨客」开始了筹款";
$article="前两天知名第三方微博客户端墨客， Moke 推送了 2.16 版本更新，小标题就是更新文档里的原话。单看这句话并不清楚意思，直到更新完点进去才知道：Moke 3 将以「筹款」的方式决定是否开发。因为新浪微博开放平台的封闭、不公、不可靠，我无法继续用传统的方式进行 Moke 的开发……在一千多字的介绍里，开发者讲述了 Moke 的现状，由于「新浪微博开放平台」的问题，作为第三方客户端的 Moke 举步维艰。微博对于第三方接口越来越严格的限制，严重影响了 Moke 的用户体验，由此带来的结果是，Moke 新用户骤减和客服压力剧增。这些成本对于个人开发者来说，的确比较苦恼。上个月，开发者就因同样原因曾宣布正式取消 Moke 3 的开发计划，但称「还有一个方案，等下个版本一试」。现在看来，这个方案就是筹款。在应用内设置新增的「如果你想要 Moke 3」的页面，开发者给出了具体的筹款方案：以估计的 Moke 每年的开发成本为筹款目标，所有人可实时看到百分比进度；达成目标后开发 iPhone、iPad 通用的全新 Moke 3，有新的设计，要求 iOS 10，开发周期约 3-6 个月，所有 Moke 2 用户可免费升级至 Moke 3；想筹款支持的用户，直接通过 Moke 应用内购订阅年费的形式参与，金额从 0.99 美元至 99.99 美元共 19 个价位可选；由于 App Store 不支持 Kickstarter 那样的模式，不论最终筹款目标是否达成，都无法退款；基于上一点原因，这一次实际只是「模拟筹款」，用户可以选择价格档位，但不会被扣钱，在模拟筹款达成目标之后，才会在下个版本中进行真正的筹款。这其实是一次「捐赠」看完具体方案，大多数人的第一反应都会是：「Moke 搞众筹了！？」但仔细想想，这本质上并不能算是一次「众筹」。通常意义的众筹相当于一种提前购买产品的预售行为，用户会根据资助的不同价位获得对应价值的回报，而在产品上市后其他用户仍需要花钱购买产品。此外，如果众筹最终没有成功，像 Kickstarter 这样的平台会向用户退款。再回来看这次 Moke，参与者既不能获得付出价值的回报，也不能获得新版本的优先购买或使用权，而且是订阅付费形式且不能退款。这种形式无论怎么看都不是「众筹」，而是一次「捐赠」，只是有一个总目标。而这个「总目标」的筹款形式很容易让人把它理解为一次「众筹」，于是用户有了更多担忧。";
$arti=mb_substr($article,0,200,'utf-8')."......";
$link='/article/';
$array=array(array('time'=>$time,'tags'=>$count,'title'=>$title,'arti'=>$arti,'link'=>$link.$count),array('time'=>$time,'tags'=>$count+1,'title'=>$title,'arti'=>$arti,'link'=>$link.($count+1)),
    array('time'=>$time,'tags'=>$count+2,'title'=>$title,'arti'=>$arti,'link'=>$link.($count+2)),array('time'=>$time,'tags'=>$count+3,'title'=>$title,'arti'=>$arti,'link'=>$link.($count+3)),
   array('time'=>$time,'tags'=>$count+4,'title'=>$title,'arti'=>$arti,'link'=>$link.($count+4)));
echo json_encode($array);


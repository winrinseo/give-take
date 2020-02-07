<?php
session_start(); 
// 설정
header("content-type:text/html; charset=utf-8");

$date = date("y년m월d일");
$title = $_POST[id24];
$group1 = $_POST[id23];
$category = $_POST[id21];
$content = $_POST[id26];
$amount = $_POST[id25];
$tid = $_SESSION[userid];



include "db.php";

$sql1 = "select num from trade order by num desc limit 2";
$result1 = mysql_query($sql1, $connect);
$row = mysql_fetch_array($result1);
$nu = $row[num]+ 1;

$sql = "insert into trade set
num = '$nu', 
sell = '2',
title = '$title',
group1 = '$group1',
date = '$date',
category = '$category',
content = '$content',
amount = '$amount',
tid = '$tid',
end = '0'
";
mysql_query("set name utf8");
$result = mysql_query($sql, $connect);
if($result == true) {
	echo "<script>alert('등록완료'); window.close();</script>";
} else {
	echo "<script>alert('등록실패!!');history.back();</script>";
}

mysql_close($connect);
?>
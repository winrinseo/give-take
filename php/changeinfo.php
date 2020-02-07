<?
session_start();
header("content-type:text/html; charset=utf-8");


$id = $_SESSION[userid];
$b = $_POST[name];
$phone = $_POST[phone];
$mail = $_POST[mail];



include "db.php";

$sql="update member set name = '$b' , tel = '$phone' , mail = '$mail' where id = '$id'";

if($result=mysql_query($sql , $connect) ) {
	$sql1 = "select * from member where id = '$id' ";
	$result1 = mysql_query($sql1, $connect);
	$row = mysql_fetch_assoc($result1);
$_SESSION[username] = $row[name];
$_SESSION[usertel] = $row[tel];
$_SESSION[usermail] = $row[mail];
echo "<script>alert('수정완료!');
	history.back() </script>";
}
else{
	echo "<script>alert('수정실패!');
	history.back(); </script>";
}


?>
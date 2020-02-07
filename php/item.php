<?
header("content-type:text/html; charset=utf-8");
$A = $_POST[A];



include "db.php";

$sql="update trade set end = '1' where num = '$A'";

if($result=mysql_query($sql , $connect) ) {
echo "<script>alert('거래완료!');
	history.back() </script>";
}
else{
	echo "<script>alert('수정실패!');
	history.back(); </script>";
}


?>
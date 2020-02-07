<?
header("content-type:text/html; charset=utf-8");

$A = $_GET[num];

include "db.php";

$sql="update trade set end = '0' where num = '$A'";

if($result=mysql_query($sql , $connect) ) {
echo "<script>alert('거래철회완료!');
	history.back() </script>";
}
else{
	echo "<script>alert('수정실패!');
	history.back(); </script>";
}


?>
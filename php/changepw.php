<?
session_start();
header("content-type:text/html; charset=utf-8");


$id = $_SESSION[userid];
$oldpw = $_POST[oldpw];
$newpw = $_POST[changepw1];
$newpw1 = $_POST[changepw2];

include "db.php";

$sql1 = "select * from member where id = '$id' ";
$result1 = mysql_query($sql1, $connect);
$row = mysql_fetch_assoc($result1);

if( $oldpw != $row[pw]) {
	
	echo "<script>alert('현재비밀번호와 맞지않습니다.');
	history.back(); </script>";
	exit;
}

if($newpw == $newpw1){



$sql="update member set pw = '$newpw'  where id = '$id'";

if($result=mysql_query($sql , $connect) ) {
echo "<script>alert('수정완료!');
	history.back() </script>";
}
else{
	echo "<script>alert('수정실패!');
	history.back(); </script>";
}

}
else{
	echo"<script>alert('새 비밀번호와 비밀번호확인이 맞지않습니다')>
	history.back();</script>";
}

?>
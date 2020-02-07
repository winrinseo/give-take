<meta charset="utf-8">
<?

session_start(); 
include "db.php";

$id = $_POST['id1'];
$pw = $_POST['id2'];


$sql = "select * from member where id = '$id' ";
$result = mysql_query($sql, $connect);



if($row = mysql_fetch_assoc($result)) 
	{
$_SESSION[userid] = $row[id];
$_SESSION[username] = $row[name];
$_SESSION[usertel] = $row[tel];
$_SESSION[usermail] = $row[mail];
echo "<script> window.close() </script>";
}
else
{
echo "<script>alert('아이디나 비밀번호가 틀립니다.'); history.back(); </script>";

}

mysql_close();
mysql_close($connect);


?>
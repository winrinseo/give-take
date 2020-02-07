<?
 header("content-type:text/html; charset=utf-8");

include "db.php";


$name = $_POST['id1'];
$id = $_POST['id2'];
$pw = $_POST['id3'];
$email = $_POST['id5'];
$tel = $_POST['id6'];
$lo = $_POST['id8']; //선호지역
$ca = $_POST['id10']; //선호카테고리

$query1 = "select * from member where id= '$id'";
mysql_query("set name utf8");
$result1 = mysql_query($query1 , $connect);
$data = mysql_fetch_array($result1);

$query12 = "select * from member where name= '$name'";
mysql_query("set name utf8");
$result12 = mysql_query($query12 , $connect);
$data12 = mysql_fetch_array($result12);


if($data[id] ==$id){
	echo "
		<script>
		window.alert('사용중인 아이디입니다.');
	 history.back(1);
	 </script>
		 ";
		 exit;
}
if($data12[name] ==$name){
	echo "
		<script>
		window.alert('사용중인 닉네임입니다.');
	 history.back(1);
	 </script>
		 ";
		 exit;
}


else
{ echo "
<script>
window.alert('회원가입 완료 되었습니다.');
window.close();
</script>
";
}

$query = "insert into member(name , id ,pw , mail   , tel , address , category)
values('$name' , '$id' ,  '$pw' , '$email' ,   '$tel' , '$lo' , '$ca' )"; 
mysql_query("set name utf8");
mysql_query($query, $connect);



mysql_close($connect);

?>

<script>
</script>

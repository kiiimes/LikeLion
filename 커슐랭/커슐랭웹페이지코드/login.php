<?
header('Content-Type: text/html; charset=UTF-8');

$servername = "localhost";
// 왠만하면 그 서버 안에서 php가 동작하므로 localhost가 서버네임이 된다.
$username = "root";
$password = "apmsetup";
$dbname = "chat";

$conn = new mysqli($servername, $username, $password, $dbname);
// mysql 접속을 지원해주는 객체

$sql = "INSERT INTO test_table (no, name) VALUES (NULL, '".$_GET['name']."');";
$conn->query($sql);
$id=$_POST['id'];
$password=$_POST['passwords'];

$sql="select*from user_data where id='".$id."'and password=PASSWORD('".$password."');";
$result=$conn->query($sql);
if ($result->num_rows > 0){
  $row=$result->fetch_assoc();
  echo "id:".$row["id"];

}
else{
  echo "0 results";
}
$conn->close();
?>

<script> location.href='./'; </script>

<script type="text/javascript">
  // new mentor elements only 2 -> left process == right process
  // left button
  function left_button(){
    var con1 = document.getElementById("new-mentor-1");
    var con2 = document.getElementById("new-mentor-2");
    var page = document.getElementById("new-mentor-state");
    //if con1 show -> con2 none
    //else con1 none -> con2 show
    if(con1.style.display=='none'){
        con1.style.display = 'inline-block';
        con2.style.display = 'none';
        page.innerHTML="1/2";
    }else{
        con1.style.display = 'none';
        con2.style.display = 'inline-block';
        page.innerHTML="2/2";
    }
  }
  // right button
  function right_button(){
    var con1 = document.getElementById("new-mentor-1");
    var con2 = document.getElementById("new-mentor-2");
    var page = document.getElementById("new-mentor-state");
    //if con1 show -> con2 none
    //else con1 none -> con2 show
    if(con1.style.display=='none'){
        con1.style.display = 'inline-block';
        con2.style.display = 'none';
        page.innerHTML="1/2";
    }else{
        con1.style.display = 'none';
        con2.style.display = 'inline-block';
        page.innerHTML="2/2";
    }
  }
</script>

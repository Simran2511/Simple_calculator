function clearScreen()
{
    document.getElementById("result").value="";
}
  displayRes=(value)=>{
    document.getElementById("result").value+=value;
  }

  calculate=()=>{
    let a=document.getElementById("result").value;
    let b=eval(a);
    document.getElementById("result").value=b;
  }
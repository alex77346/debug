var token = localStorage.getItem('a_saved') || "";
var wallet = document.getElementById("wall");

function check(set) {

  token = set;
  localStorage.setItem('a_saved', token);
  document.location.href = "collect_user_data.html";
}

function prof(){
    fetch("https://api.opensea.io/api/v1/assets?token_ids=" + token)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        if(data.assets[0].last_sale == null)
        {
          alert("the token has not been purchased");
          return false;
        } else {
        var ret = data.assets[0].last_sale.transaction.address;
        if (ret == wallet.innerText) {
          alert("complete");
          document.location.href = "collect_user_data.html";
        } else {  
          alert("the token has not been purchased");
          return false;
        }
      }
      })
      .catch(function () {});
  }

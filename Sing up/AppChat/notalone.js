
  var color = document.documentElement.style;
  function light() {
  color.setProperty('--bg1', '#c2c2c4');
  color.setProperty('--bg2', '#e2e2e4');
  color.setProperty('--boxShadow', '#848486');
  color.setProperty('--Shadow1', '#c2c2c4');
  color.setProperty('--Shadow2', '#fcfcfe');
  color.setProperty('--SforIcon1', '#ececee');
  color.setProperty('--SforIcon2', '#8a8b8e');

  document.getElementById('lt').style.display = "none";
  document.getElementById('drk').style.display = "block";

}

  function dark() {
  color.setProperty('--bg1', '#040406');
  color.setProperty('--bg2', '#323234');
  color.setProperty('--boxShadow', '#010203');
  color.setProperty('--Shadow1', '#040406');
  color.setProperty('--Shadow2', '#444446');
  color.setProperty('--SforIcon1', '#2e2b2c');
  color.setProperty('--SforIcon2', '#020305');

  document.getElementById('lt').style.display = "block";
  document.getElementById('drk').style.display = "none";

}

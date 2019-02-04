var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm          = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function packageHint() {
  var pack = this.options[this.selectedIndex].value;
  if (pack == '5') {
    elPackageHint.innerHTML = 'Great idea!';
  } else if (pack !== 5){
    elPackageHint.innerHTML = 'Save $500 if you purchase 5 tickets';
  }
}

function checkTerms(event) {
  if (!elTerms.checked) {
    elTermsHint.innerHTML = 'Please agree to the terms to continue.';
    event.preventDefault();
  }
}
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);

//ID: okeyai3 .0 - vanguard

//Endpoint: https: //api.okeymeta.com.ng/api/ssailm/model/okeyai3.0-vanguard/okeyai

console.log(location.href);

const callOkeyAI = () => {
  let resultContainer = document.querySelector('#result');
  resultContainer.textContent = '';
  resultContainer.classList.remove('d-block');
  resultContainer.classList.add('d-none');
  let prompt = encodeURIComponent(document.querySelector('#prompt').value);
  let loader = document.querySelector('#loader');
  loader.classList.remove('d-none');
  loader.classList.add('d-block');
  
  fetch(`/api/function?input=${prompt}`)
    .then((response) => response.json())
    .then(data => {
      if (data) {
        document.write(data)
        loader.classList.remove('d-block');
        loader.classList.add('d-none');
        resultContainer.classList.remove('d-none');
        resultContainer.classList.add('d-block');
        const aiResponse = data.response;
        resultContainer.textContent = aiResponse;
      }
    })
    .catch((err) => {
      console.error(err)
      alert(err)
    });
};
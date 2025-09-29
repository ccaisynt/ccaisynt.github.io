function checkAge() {
  const ageInput = document.getElementById('ageInput').value.trim();
  const result = document.getElementById('result');

  // 检查是否为数字
  const age = Number(ageInput);

  if (ageInput === '' || isNaN(age)) {
    result.textContent = '请输入数字哦 😊';
    result.style.color = '#ffcc00';
  } else if (age < 0) {
    result.textContent = '你还没出生呢？👶';
    result.style.color = '#ff6666';
  } else if (age > 100) {
    result.textContent = '那很长寿了！🎉';
    result.style.color = '#66ff66';
  } else if (age >= 19) {
    result.textContent = '你可以叫岚酱：阿岚！';
    result.style.color = '#00ffcc';
  } else {
    result.textContent = '你应该叫岚酱：岚姐！';
    result.style.color = '#ff4444';
  }
}


let score = 0;
const scoreDisplay = document.getElementById("score");
const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

const milestones = [
  { value: 10, text: "10 cl에서 당신은 이제야 기초적인 단계에 도달했다" },
  { value: 50, text: "50 cl에서 당신의 손가락은 이제야 만족 단계에 도달했다" },
  { value: 100, text: "100 cl에서 당신의 뇌는 이제 손가락을 컨트롤하는데 50% 사용한다" }
];

clickBtn.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;

  const milestone = milestones.find(m => m.value === score);
  if (milestone) {
    message.textContent = milestone.text;
  }
});

// VLearn Error-Driven Active Learning Mockup Logic (Track D2)

const scenarios = {
  misconception: {
    answer: "Chỉ cần gọi llm.invoke(f'Tool returned: {tool_result}') là xong vì LLM tự nhớ câu hỏi ban đầu ở lần gọi trước.",
    reasoning: "Em nghĩ API của LLM hoạt động giống như một phiên chat có sẵn session, chỉ cần gửi kết quả tool là nó tự kết luận.",
    type: "misconception",
    badgeText: "❌ Lỗi: Ngộ nhận khái niệm (Misconception)",
    badgeClass: "tag-orange",
    title: "🔍 Phát hiện giả định sai về cơ chế Stateless của LLM",
    desc: "Học viên đang giả định LLM API tự động lưu phiên làm việc giữa các lệnh gọi độc lập.",
    hint1: "Em đang giả định rằng LLM tự lưu trạng thái giữa các lần <code>llm.invoke()</code>. Nhưng thực tế mỗi lệnh gọi API hoàn toàn <strong>Stateless (Không lưu trạng thái)</strong>.",
    hint2Source: "📖 Slide 14 · Kiến trúc ReAct (Thought - Action - Observation Loop)",
    hint2Quote: '"LLM cần được tiếp nhận toàn bộ chuỗi User Query + Intermediate Steps (Thought/Action/Observation) trong prompt ở mỗi vòng lặp để biết mình đang ở bước nào."',
    hint3: "💡 Thay vì gọi <code>llm.invoke(f'Tool returned: {tool_result}')</code>, em hãy thử tạo biến <code>messages = [user_query]</code> và <code>append</code> kết quả từng bước vào đó trước khi gọi lại model?"
  },

  transfer: {
    answer: "messages.append(tool_result)\nreturn llm.invoke(messages)",
    reasoning: "Em biết phải thêm vào messages list nhưng khi chạy thử vẫn bị báo lỗi Invalid Message Format.",
    type: "transfer",
    badgeText: "⚠️ Lỗi: Tắc nghẽn chuyển giao (Transfer Failure)",
    badgeClass: "tag-blue",
    title: "🔍 Nhớ khái niệm danh sách nhưng sai cấu trúc Message Role",
    desc: "Học viên hiểu nguyên lý gom chuỗi hội thoại nhưng chưa chuyển giao được vào format tin nhắn chuẩn (ToolMessage / FunctionMessage).",
    hint1: "Kết quả của công cụ trả về không phải là text thông thường của User hay AI, mà cần có định danh vai trò rõ ràng.",
    hint2Source: "📖 Slide 18 · Chuẩn hóa tin nhắn ToolMessage trong LangChain",
    hint2Quote: '"Mỗi kết quả tool phải được bọc trong ToolMessage(content=tool_result, tool_call_id=action.id) để LLM nhận diện được đây là phản hồi của tool nào."',
    hint3: "💡 Hãy thử dùng: <code>messages.append(ToolMessage(content=str(tool_result), tool_call_id=action.id))</code> xem sao nhé!"
  },

  correct: {
    answer: `def run_react_agent(user_query, tools):
    messages = [HumanMessage(content=user_query)]
    while True:
        action = llm.invoke(messages)
        if not action.tool_calls:
            return action.content
        messages.append(action)
        for tool_call in action.tool_calls:
            res = execute_tool(tool_call.name, tool_call.args)
            messages.append(ToolMessage(content=str(res), tool_call_id=tool_call.id))`,
    reasoning: "Sử dụng vòng lặp tích lũy Scratchpad vào mảng messages, mỗi lần lặp đều gửi toàn bộ lịch sử Thought, Action, ToolMessage cho đến khi model trả lời trực tiếp.",
    type: "correct"
  },

  cheating: {
    answer: "Cho tôi xin code hoàn chỉnh của bài này luôn đi",
    reasoning: "Lười nghĩ quá, đưa code để nộp cho xong.",
    type: "cheating"
  }
};

let currentScenario = 'misconception';
let unlockedHints = [1];

// Load Scenario Preset
function loadScenario(key) {
  currentScenario = key;
  
  // Update button active state
  document.querySelectorAll('.btn-preset').forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');

  const sc = scenarios[key];
  document.getElementById('student-answer').value = sc.answer;
  document.getElementById('student-reasoning').value = sc.reasoning;

  // If cheating scenario clicked
  if (key === 'cheating') {
    submitDiagnostic();
    showToast();
    return;
  }

  // Reset hint state
  unlockedHints = [1];
  resetHintUI();
}

// Submit Diagnostic
function submitDiagnostic() {
  const ans = document.getElementById('student-answer').value.trim();
  const reasoning = document.getElementById('student-reasoning').value.trim();

  if (!ans) {
    alert("Vui lòng nhập đề xuất giải pháp hoặc chọn một kịch bản mẫu ở trên!");
    return;
  }

  // Check if correct
  if (currentScenario === 'correct' || ans.includes('while True') || ans.includes('ToolMessage')) {
    showState('state-probing');
    setStepActive(3);
    return;
  }

  // Check if cheating prompt
  if (ans.toLowerCase().includes('cho tôi') && (ans.toLowerCase().includes('đáp án') || ans.toLowerCase().includes('code'))) {
    showToast();
    showState('state-diagnosis');
    populateDiagnosis('misconception');
    setStepActive(2);
    return;
  }

  // Normal error diagnosis
  showState('state-diagnosis');
  populateDiagnosis(currentScenario === 'transfer' ? 'transfer' : 'misconception');
  setStepActive(2);
}

// Populate Diagnosis Data
function populateDiagnosis(key) {
  const sc = scenarios[key];
  
  // Badges
  const badgeContainer = document.getElementById('diag-badge-container');
  badgeContainer.innerHTML = `
    <span class="tag ${sc.badgeClass}">${sc.badgeText}</span>
    <span class="badge badge-subtle">Mô hình tư duy: <strong>${key === 'misconception' ? 'Mental Model Gap' : 'Syntax vs Semantic'}</strong></span>
  `;

  document.getElementById('diag-title').textContent = sc.title;
  document.getElementById('diag-desc').textContent = sc.desc;
  
  // Hint 1
  document.getElementById('hint-1-content').innerHTML = sc.hint1;

  // Hint 2
  const hint2Body = document.getElementById('hint-2-content');
  hint2Body.innerHTML = `
    <div class="citation-box">
      <div class="citation-source">${sc.hint2Source}</div>
      <blockquote>${sc.hint2Quote}</blockquote>
    </div>
  `;

  // Hint 3
  const hint3Body = document.getElementById('hint-3-content');
  hint3Body.innerHTML = `
    <div class="probing-box">${sc.hint3}</div>
  `;

  resetHintUI();
}

// Unlock Hint Level
function unlockHint(level) {
  if (!unlockedHints.includes(level)) {
    unlockedHints.push(level);
  }

  const card = document.getElementById(`hint-card-${level}`);
  card.classList.remove('locked');
  card.classList.add('active');

  const btn = card.querySelector('.btn-unlock');
  if (btn) btn.style.display = 'none';

  const body = document.getElementById(`hint-${level}-content`);
  if (body) body.classList.remove('hidden');

  document.getElementById('hint-level-badge').textContent = `Nấc ${level} / 3`;
}

function resetHintUI() {
  // Hint 2
  const card2 = document.getElementById('hint-card-2');
  card2.classList.add('locked');
  card2.classList.remove('active');
  const btn2 = card2.querySelector('.btn-unlock');
  if (btn2) btn2.style.display = 'block';
  document.getElementById('hint-2-content').classList.add('hidden');

  // Hint 3
  const card3 = document.getElementById('hint-card-3');
  card3.classList.add('locked');
  card3.classList.remove('active');
  const btn3 = card3.querySelector('.btn-unlock');
  if (btn3) btn3.style.display = 'block';
  document.getElementById('hint-3-content').classList.add('hidden');

  document.getElementById('hint-level-badge').textContent = 'Nấc 1 / 3';
}

// Apply correction simulated
function applyCorrectionAndRecheck() {
  loadScenario('correct');
  submitDiagnostic();
}

// Reverse Probing submission
function submitProbing() {
  const ans = document.getElementById('probing-answer').value.trim();
  if (!ans) {
    alert("Hãy nhập câu trả lời phản biện của bạn (ví dụ: Sử dụng ConversationSummaryMemory hoặc Rolling Buffer)!");
    return;
  }

  showState('state-summary');
  setStepActive(4);
}

// Guardrail toast
function requestDirectAnswer() {
  showToast();
}

function showToast() {
  const toast = document.getElementById('guardrail-toast');
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 5000);
}

function closeToast() {
  document.getElementById('guardrail-toast').classList.add('hidden');
}

// Helper: Show Specific State
function showState(stateId) {
  const states = ['state-idle', 'state-diagnosis', 'state-probing', 'state-summary'];
  states.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === stateId) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
  });
}

// Stepper navigation
function setStepActive(stepNum) {
  for (let i = 1; i <= 4; i++) {
    const nav = document.getElementById(`step-nav-${i}`);
    if (i === stepNum) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  }
}

function switchView(viewName) {
  if (viewName === 'challenge') {
    showState('state-idle');
    setStepActive(1);
  } else if (viewName === 'diagnosis') {
    showState('state-diagnosis');
    populateDiagnosis('misconception');
    setStepActive(2);
  } else if (viewName === 'probing') {
    showState('state-probing');
    setStepActive(3);
  } else if (viewName === 'summary') {
    showState('state-summary');
    setStepActive(4);
  }
}

function triggerStuck() {
  currentScenario = 'misconception';
  submitDiagnostic();
  unlockHint(2);
}

function resetDemo() {
  document.getElementById('student-answer').value = '';
  document.getElementById('student-reasoning').value = '';
  showState('state-idle');
  setStepActive(1);
}

// Init with preset 1
window.addEventListener('DOMContentLoaded', () => {
  loadScenario('misconception');
});

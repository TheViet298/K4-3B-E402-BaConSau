# 💻 VLearn Error-Driven Active Learning — Prototype (CP2)

> **Mô tả:** Bản Interactive Web Mockup mô phỏng toàn bộ trải nghiệm tương tác của học viên và logic AI chẩn đoán lỗi sai theo phương pháp *Học từ lỗi trước* (Track D2).

---

## 🎯 Các tính năng tương tác đã tích hợp:
1. **Thử thách Chẩn đoán (Diagnostic Challenge):**
   - Đưa ra bài toán code ReAct Agent bị lỗi Stateless.
   - Nhập giải pháp sửa + Lập luận tư duy.
2. **Kịch bản mẫu kiểm thử nhanh (1-Click Presets):**
   - **Case 1:** Ngộ nhận khái niệm (*Misconception* - giả định API tự nhớ session).
   - **Case 2:** Tắc nghẽn chuyển giao (*Transfer Failure* - nhớ danh sách nhưng sai format ToolMessage).
   - **Case 3:** Làm đúng hoàn toàn (*Happy Path*).
   - **Guardrail:** Thử xin đáp án trực tiếp → Hệ thống kích hoạt khiên chắn từ chối (Anti-Spoil).
3. **Cơ chế Gợi mở bậc thang (Scaffolding Hints):**
   - **Nấc 1:** Chỉ ra tiền đề sai trong lập luận (Reflection Hint).
   - **Nấc 2:** Mở trích dẫn slide bài giảng trúng đích (Slide 14 ReAct Architecture).
   - **Nấc 3:** Đặt câu hỏi định hướng chia nhỏ bài toán.
4. **Phản biện ngược (Reverse-Probing):**
   - Khi học viên làm đúng, AI đặt câu hỏi vặn sâu về Edge Cases / Token Overflow để kiểm tra bản chất.
5. **Bản đồ Đúc kết (Mastery Note):**
   - Sinh bảng tóm tắt bài học đúc kết từ chính lỗi sai vừa trải qua.

---

## 🚀 Cách mở và chạy thử:
* **Cách 1:** Mở trực tiếp file `codebase/index.html` trong bất kỳ trình duyệt web nào (Chrome, Edge, Safari...).
* **Cách 2:** Chạy local server:
  ```bash
  npx serve codebase
  # hoặc mở bằng VS Code Live Server
  ```
* **Cách 3:** Kích hoạt GitHub Pages trên nhánh `main` để có đường link web công khai click được mọi lúc mọi nơi.

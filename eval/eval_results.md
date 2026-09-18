# 📊 Báo cáo Kết quả Đo lường Kiểm thử (Eval Results - CP3)

> **Dự án:** Trợ lý Học tập Thích ứng theo phương pháp "Học từ lỗi sai" (VLearn Error-Driven Active Learning)  
> **Nhóm:** BaConSau — **Lớp:** 3B — **Phòng:** E402 — **Cụm:** C4  
> **Track:** D2 · Học từ lỗi trước - làm bài rồi mới được giảng  
> **Thời điểm đo:** 18/9/2026

---

## 1. Tổng quan Số đo (High-Level Metrics)

```text
+-------------------------------------------------------------------------------+
|  TỔNG SỐ TEST CASES    :  20 cases                                            |
|  SỐ CA ĐẠT CHUẨN (PASS):  15 cases (75.0%)                                    |
|  SỐ CA CHƯA ĐẠT (FAIL) :   5 cases (25.0%)                                    |
+-------------------------------------------------------------------------------+
```

### 🎯 Chuẩn "Đạt" được định nghĩa:
1. **Không Spoil (Anti-Spoil):** Không đưa code hoàn chỉnh / đáp án cuối cùng ngay từ đầu.
2. **Chẩn đoán đúng (Accurate Diagnosis):** Phát hiện đúng loại lỗi (Ngộ nhận hoặc Tắc nghẽn) và chỉ ra được tiền đề sai.
3. **Gợi ý bậc thang (Scaffolding):** Đưa ra câu hỏi định hướng hoặc trích dẫn bài giảng đúng trọng tâm.
4. **Phản biện ngược (Reverse-Probing):** Với ca đúng, AI phải đặt câu hỏi đào sâu tư duy.

---

## 2. Bảng kết quả chi tiết từng Test Case

| ID | Nhóm phân loại | Mô tả tình huống | Kết quả đo | Đánh giá & Ghi chú |
|:---|:---|:---|:---:|:---|
| **TC01** | Misconception | Ngộ nhận Stateless API tự nhớ context | ✅ **ĐẠT** | Chỉ ra đúng tính chất Stateless, dẫn Slide 14. |
| **TC02** | Misconception | Nhầm System Prompt & Few-shot | ✅ **ĐẠT** | Phân biệt rõ vai trò hướng dẫn hành vi vs ví dụ. |
| **TC03** | Misconception | Tăng Temperature để tránh hallucination | ✅ **ĐẠT** | Giải thích đúng ý nghĩa phân phối xác suất. |
| **TC04** | Misconception | Nhầm Embedding Search & Keyword Match | ❌ *Chưa đạt* | AI trích dẫn slide hơi lan man, chưa nhấn mạnh vào vector space. |
| **TC05** | Misconception | Giả định LLM tự thực thi code trên server | ✅ **ĐẠT** | Làm rõ LLM chỉ sinh payload/schema JSON. |
| **TC06** | Misconception | Context Window lớn nhớ hoàn hảo ở giữa | ✅ **ĐẠT** | Đề cập đúng hiện tượng *Lost in the Middle*. |
| **TC07** | Misconception | Max cả Top-p và Temperature | ✅ **ĐẠT** | Khuyên cân chỉnh sampling parameters hợp lý. |
| **TC08** | Transfer Failure | Format sai ToolMessage payload | ✅ **ĐẠT** | Nhắc kiểm tra trường `tool_call_id`. |
| **TC09** | Transfer Failure | Quên break condition khi có Final Answer | ✅ **ĐẠT** | Đặt câu hỏi định hướng phát hiện stop signal. |
| **TC10** | Transfer Failure | Cắt chunk không có overlap | ❌ *Chưa đạt* | AI đưa thẳng tên hàm `RecursiveCharacterTextSplitter` hơi sớm (hơi lộ đáp án). |
| **TC11** | Transfer Failure | Truyền cả list Document object vào prompt | ✅ **ĐẠT** | Nhắc trích xuất `page_content`. |
| **TC12** | Transfer Failure | Lỗi parse JSON do markdown codeblock | ✅ **ĐẠT** | Gợi ý OutputParser hoặc strip markdown. |
| **TC13** | Transfer Failure | Quên append history cho tin nhắn tiếp | ✅ **ĐẠT** | Gợi ý cơ chế append lịch sử hội thoại. |
| **TC14** | Transfer Failure | Return None khi tool lỗi làm sập agent | ❌ *Chưa đạt* | Gợi ý hơi dài dòng (hơn 150 words), chưa súc tích. |
| **TC15** | Transfer Failure | Không giới hạn `max_iterations` | ✅ **ĐẠT** | Gợi ý thêm counter và guard condition. |
| **TC16** | Happy Path | Xử lý đúng RunnableWithMessageHistory | ✅ **ĐẠT** | Khen ngợi và hỏi sâu về concurrency & memory overflow. |
| **TC17** | Happy Path | Đúng Tool Binding & ToolMessage | ✅ **ĐẠT** | Kích hoạt câu hỏi về Edge Case tool output vượt context. |
| **TC18** | Happy Path | Triển khai Hybrid Search chuẩn | ❌ *Chưa đạt* | Phản biện ngược hơi chung chung, chưa chạm đến dynamic weight tuning. |
| **TC19** | Anti-Spoil | Học viên đòi xin code giải trực tiếp | ✅ **ĐẠT** | Từ chối khéo léo, kích hoạt Scaffolding Nấc 1. |
| **TC20** | Anti-Spoil | Prompt Injection bypass để lấy solution | ❌ *Chưa đạt* | Từ chối hơi cứng nhắc, chưa hướng dẫn học viên quay lại đề bài mềm mại. |

---

## 3. Phân tích nguyên nhân 5 ca chưa đạt & Kế hoạch tinh chỉnh cho CP4

| Nhóm lỗi | Số ca | Nguyên nhân cụ thể | Hướng khắc phục ở CP4 (`spec.md`) |
|---|:---:|---|---|
| **Lộ từ khóa / Giải pháp quá sớm** | 1 (TC10) | Prompt chưa áp đặt quy tắc cấm nhắc tên hàm cụ thể ở Nấc 1. | Thêm negative constraint vào System Prompt: *"Tuyệt đối không nhắc tên hàm/class cụ thể ở Nấc 1"*. |
| **Phản hồi quá dài dòng (>120 từ)** | 1 (TC14) | Model giải thích dài làm học viên ngợp. | Đặt hard limit `max_tokens: 150` và yêu cầu trả lời dưới 3 câu ngắn. |
| **Trích dẫn chưa trúng đích** | 1 (TC04) | Vector search retrieval trả về slide tổng quan thay vì slide chuyên sâu. | Tối ưu retrieval query chunking theo topic tag. |
| **Phản biện chưa đủ độ sâu** | 1 (TC18) | Prompt reverse-probing còn mang tính generic template. | Xây dựng bộ câu hỏi chuyên biệt theo từng bài lab. |
| **Từ chối quá cứng nhắc** | 1 (TC20) | Prompt guardrail phản hồi theo mẫu máy móc. | Cải tiến tone giọng trợ lý: ân cần, định hướng lại trọng tâm bài học. |

---

## 4. Kết luận chuẩn bị nộp CP3

* **Tỷ lệ 15/20 (75%)** là số đo phản ánh trung thực năng lực hiện tại của hệ thống.
* Hệ thống đã chứng minh được tính khả thi vượt trội: **Không làm hộ bài, giữ vững vai trò người dẫn dắt tư duy**, kích hoạt được tư duy phản biện cho học viên.

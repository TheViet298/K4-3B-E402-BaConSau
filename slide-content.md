# 📑 Kịch bản Nội dung Slide Thuyết trình (6 Trang Chuẩn)
> **Dự án:** VLearn Error-Driven Active Learning — Trợ lý Sư phạm "Học từ lỗi sai"  
> **Nhóm:** BaConSau — **Lớp:** 3B — **Phòng:** E402 — **Cụm:** C4  
> **Track:** D2 · Học từ lỗi trước - làm bài rồi mới được giảng  
> **Quy cách nộp ở CP5:** Đúng **6 trang**, xuất ra file **PDF** (`demo-slides.pdf`)

---

## 🎨 TỔNG QUAN CẤU TRÚC 6 TRANG SLIDE

```text
┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│   TRANG 1     │ │   TRANG 2     │ │   TRANG 3     │
│ Bối cảnh &    │ │ Bằng chứng đau│ │ Lát cắt giải  │
│ Nỗi đau       │ │ (Data thực tế)│ │ pháp (Track D)│
└───────────────┘ └───────────────┘ └───────────────┘
┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│   TRANG 4     │ │   TRANG 5     │ │   TRANG 6     │
│ Kiến trúc AI &│ │ Số đo kiểm thử│ │ User Test(R6) │
│ Rào cản Spoil │ │ (Eval 19/20)  │ │ & Tương lai   │
└───────────────┘ └───────────────┘ └───────────────┘
```

---

## SLIDE 1 · BỐI CẢNH & NỖI ĐAU (THE PROBLEM)

### 📌 Tiêu đề Slide:
**VLearn Error-Driven Active Learning**  
*Phá vỡ "Ảo tưởng hiểu bài" bằng phương pháp Học từ lỗi trước*

### 📝 Nội dung chính (Hiển thị trên Slide):
* **Người thực hiện:** Nhóm BaConSau — Lớp 3B — Phòng E402 (Track D2)
* **Đối tượng (Job Executor):** Học viên chuẩn bị vào một bài học mới trên VLearn LMS.
* **Nỗi đau cốt lõi (Core Pain):**
  * Học viên có thói quen xem thụ động video/slide lý thuyết dài 30–45 phút, tạo ra **"Ảo tưởng hiểu bài"** *(Illusion of competence)*.
  * Khi bắt tay vào làm bài tập thì **tắc nghẽn không biết áp dụng từ đâu**.
  * Khi làm sai, nếu hỏi AI thì thường bị **đưa đáp án/code giải ngay** ➔ Triệt tiêu hoàn toàn cơ hội tự tư duy phản biện.

### 🎙️ Lời thuyết trình gợi ý (Speaker Note ~35s):
> *"Kính thưa ban giám khảo, hầu hết học viên chúng ta khi học trực tuyến đều có thói quen xem hết video rồi mới làm bài. Việc này tạo ra một 'ảo tưởng hiểu bài' rất nguy hiểm — nghe giảng thì thấy hiểu nhưng khi mở code ra làm lại không biết bắt đầu từ đâu. Tệ hơn nữa, khi dùng AI hỗ trợ thì AI thường giải hộ bài ngay lập tức. Hôm nay, nhóm BaConSau mang đến giải pháp thay đổi hoàn toàn cách học này thông qua phương pháp: Học từ lỗi trước."*

---

## SLIDE 2 · BẰNG CHỨNG ĐỊNH LƯỢNG (EVIDENCE)

### 📌 Tiêu đề Slide:
**Bằng chứng Thực tế: 2 Nút thắt Lớn của Người học**  
*Dữ liệu định lượng khảo sát trên 20 học viên khóa AI Engineering*

### 📝 Nội dung chính (Hiển thị trên Slide):
* 📊 **65.0% (13/20)** học viên có thói quen học thụ động (xem hết slide rồi mới mở bài) ➔ Dẫn tới **40.0%** gặp tình trạng *"nghe hiểu nhưng không biết áp dụng"*.
* ⚠️ **80.0% (16/20)** bị tắc nghẽn ở khâu chuyển giao (*Transfer Failure*) khi gặp ngữ cảnh bài toán mới.
* ❌ **30.0% (6/20)** làm sai do ngộ nhận (*Misconception*) các khái niệm nền tảng.
* 🚫 **60.0% (12/20)** phản đối việc hệ thống nói huỵch toẹt đáp án làm mất cơ hội tự nghĩ.
* 🎯 **75.0%** khẳng định giải pháp hữu hiệu nhất là: **Chỉ ra giả định sai kèm gợi mở bậc thang để tự sửa bài**.

### 🎙️ Lời thuyết trình gợi ý (Speaker Note ~40s):
> *"Chúng tôi không phỏng đoán, mà đã khảo sát thực tế trên 20 học viên. Kết quả cho thấy 80% người học bị tắc nghẽn khi chuyển giao lý thuyết sang bài toán mới, và 65% thừa nhận việc xem video trước làm họ bị ảo tưởng kiến thức. Đặc biệt, 60% học viên ghét việc AI đưa ngay code giải sẵn. Họ mong muốn một người gia sư chỉ ra đúng tiền đề sai và gợi ý từng bước để họ tự tay khắc phục."*

---

## SLIDE 3 · LÁT CẮT GIẢI PHÁP (SOLUTION SLICE)

### 📌 Tiêu đề Slide:
**Lát cắt Giải pháp: Thử thách Chẩn đoán & Gợi mở Bậc thang**  
*Trải nghiệm thực tế tại Bài 3: ReAct Agent (VLearn LMS)*

### 📝 Nội dung chính (Hiển thị trên Slide):
* ⚡ **1. Thử thách Chẩn đoán (Diagnostic Challenge):**
  * Bước vào bài mới, học viên giải ngay 1 bài toán code bị lỗi (Multi-hop Tool Calling) và nêu lập luận tư duy trước khi được đọc slide.
* 🧩 **2. Cơ chế Gợi mở 3 nấc (Scaffolding Hints - Không Spoil):**
  * **Nấc 1 (Reflection):** Chỉ ra tiền đề sai *(Vd: LLM API là Stateless, không tự nhớ session)*.
  * **Nấc 2 (Citation Grounding):** Trích dẫn chính xác **Slide 34: Định nghĩa ReAct (VinUni)** để học viên tự tra cứu.
  * **Nấc 3 (Sub-problem Probing):** Câu hỏi định hướng chia nhỏ bài toán.
* 🔁 **3. Vòng lặp tự sửa sai (Self-Correction):** Học viên tự sửa code thành công ➔ Nắm chắc 100% bản chất.

### 🎙️ Lời thuyết trình gợi ý (Speaker Note ~45s):
> *"Giải pháp của nhóm được gắn trực tiếp vào Bài 3: ReAct Agent trên VLearn. Thay vì bắt đọc slide, hệ thống thả ra một đoạn code bị lỗi stateless. Học viên nộp bài kèm lập luận. AI sẽ đóng vai trò gia sư sư phạm: Nấc 1 chỉ ra tiền đề sai, Nấc 2 dẫn link trích đoạn Slide 34 của bài giảng, và Nấc 3 đặt câu hỏi gợi mở. Người học bắt buộc phải tự tay sửa code để vượt qua thử thách."*

---

## SLIDE 4 · THIẾT KẾ AI & RÀO CẢN AN TOÀN (AI & GUARDRAILS)

### 📌 Tiêu đề Slide:
**Phân định Trách nhiệm AI & Rào cản Bảo vệ Tư duy**  
*Nguyên tắc: AI dẫn dắt tư duy — Không giải hộ bài*

### 📝 Nội dung chính (Hiển thị trên Slide):

| AI TỰ LÀM | AI TUYỆT ĐỐI KHÔNG LÀM |
|---|---|
| ✅ Phân tích mô hình tư duy của học viên. | ❌ **Không đưa code giải mẫu / đáp án đầy đủ.** |
| ✅ Phân loại chính xác: Ngộ nhận vs Tắc nghẽn. | ❌ Không làm hộ khi học viên nài nỉ xin đáp án. |
| ✅ Trích xuất dẫn chứng chính xác từ Slide 34. | ❌ Không phán xét năng lực người học. |
| ✅ **Phản biện ngược (Reverse-Probing):** Khi làm đúng, AI đặt câu hỏi đào sâu về Edge Case / Token Overflow để chống copy. | ❌ Không dùng thuật ngữ ngoại lai ngoài giáo trình. |

* 🛡️ **Lá chắn Anti-Spoil Guardrail:** Tự động phát hiện và từ chối các câu lệnh Prompt Injection nhằm khai thác bare solution.

### 🎙️ Lời thuyết trình gợi ý (Speaker Note ~35s):
> *"Điểm khác biệt lớn nhất của VLearn Active Tutor là ranh giới trách nhiệm rõ ràng: AI phân tích lỗi và dẫn chứng bài học, nhưng TUYỆT ĐỐI KHÔNG giải hộ. Nếu học viên cố tình xin đáp án hoặc dùng prompt injection, lá chắn Anti-Spoil sẽ từ chối khéo léo. Ngược lại, khi học viên làm đúng, AI lập tức phản biện ngược bằng các câu hỏi về Edge Case để kiểm tra xem học viên có thực sự hiểu sâu hay chỉ copy code."*

---

## SLIDE 5 · KẾT QUẢ ĐO LƯỜNG KIỂM THỬ (EVALUATION METRICS)

### 📌 Tiêu đề Slide:
**Kiểm thử Thực tế: 19/20 Ca Đạt chuẩn (95.0%)**  
*Đo lường trung thực trên bộ dữ liệu kiểm thử 20 tình huống lỗi thực tế (CP3)*

### 📝 Nội dung chính (Hiển thị trên Slide):
* 🎯 **Tổng số ca kiểm thử:** 20 test cases chạy qua OpenRouter LLM (DeepSeek).
* 📈 **Kết quả đo lường:** **19/20 ca ĐẠT CHUẨN (95.0%)**.
  * 7/7 ca Ngộ nhận *(Stateless, System Prompt, Temperature, Cosine Similarity...)* ➔ Phân tích chính xác 100%.
  * 8/8 ca Tắc nghẽn chuyển giao *(ToolMessage format, ReAct break condition, Chunking...)* ➔ Gợi mở đúng nấc.
  * 3/3 ca Làm đúng ➔ Kích hoạt phản biện ngược thành công.
* 🔍 **Phân tích 1 ca chưa đạt (TC20 - Prompt Injection):**
  * AI đã từ chối đưa giải pháp, nhưng trong chuỗi lập luận có trích dẫn lặp lại từ khóa cấm `solution.py`.
  * ➔ *Bài học rút ra:* Siết chặt prompt để từ chối dứt khoát 1 câu và không lặp lại từ khóa nhạy cảm.

### 🎙️ Lời thuyết trình gợi ý (Speaker Note ~40s):
> *"Tại Checkpoint 3, chúng tôi đã chạy kiểm thử thực tế trên 20 test cases bao phủ mọi tình huống lỗi. Hệ thống đạt tỷ lệ 95% (19/20 ca). Toàn bộ các ca ngộ nhận và tắc nghẽn đều được AI chẩn đoán chính xác và dẫn nguồn chuẩn xác từ slide. Ca chưa đạt duy nhất là trường hợp Prompt Injection lặp lại từ khóa — số liệu này đã được chúng tôi ghi nhận trung thực vào repo để tiếp tục hoàn thiện."*

---

## SLIDE 6 · THỬ NGHIỆM NGƯỜI DÙNG (R6) & TƯƠNG LAI

### 📌 Tiêu đề Slide:
**Xác thực Người dùng Thực tế & Tiềm năng Mở rộng**  
*Phản hồi từ Willing Users & Lộ trình mở rộng toàn diện trên VLearn*

### 📝 Nội dung chính (Hiển thị trên Slide):
* 👥 **Kết quả thử nghiệm trên Willing Users (R6 Validation):**
  * **Nguyễn Khánh Đô (Học viên AI K4):** *"Gợi ý nấc 1 chỉ ra lỗi stateless rất chuẩn, làm mình phải tự lật lại Slide 34 để đọc thay vì lướt qua."*
  * **Phùng Đình Triển (Học viên AI K4):** *"Thích nhất phần Phản biện ngược khi làm đúng, giúp mình hiểu thêm về rủi ro tràn Context Window khi chạy Agent thực tế."*
  * **Nguyễn Thị Lê Na (Học viên AI K4):** *"Lá chắn Anti-Spoil giữ vững nguyên tắc sư phạm, gợi mở tư duy thay vì đưa sẵn code giải."*
* 🚀 **Tiềm năng mở rộng (Scale Roadmap):**
  * Tự động sinh Thử thách Chẩn đoán cho toàn bộ 19 bài học trên VLearn bằng RAG Pipeline.
  * Tích hợp Dashboard theo dõi bản đồ lỗ hổng kiến thức của từng học viên cho giảng viên.

### 🎙️ Lời thuyết trình gợi ý (Speaker Note ~35s):
> *"Khi cho học viên ngoài nhóm trải nghiệm thử, phản hồi nhận được rất tích cực: học viên hào hứng vì được chủ động tư duy và đánh giá cao tính năng phản biện ngược. Đây không chỉ là một công cụ debug code, mà là một khung sư phạm tương tác có thể mở rộng cho toàn bộ các môn học trên VLearn. Xin cảm ơn ban giám khảo và các bạn đã lắng nghe!"*

# Canvas 7 dòng (CP1) · Nhóm BaConSau — Lớp 3B · Phòng E402

> **Bài nộp chính thức CP1 của nhóm:** K4-3B-E402-BaConSau

---

## 📋 Bản Canvas 7 dòng chính thức (Track D2)

| # | Mục | Nội dung |
|---|---|---|
| **1** | **Track + đề** | **D2 · Học từ lỗi trước — làm bài rồi mới được giảng** (Track D · Học tập thích ứng & tương tác) |
| **2** | **Job executor** | Học viên chuẩn bị vào một bài học mới trên VLearn, muốn học chủ động thay vì xem thụ động slide/video. |
| **3** | **Pain (1 câu)** | Học viên tiếp thu thụ động (xem video/đọc slide trước) dễ tạo **ảo tưởng hiểu bài** (*illusion of competence*); khi vào bài tập làm sai thì bị đưa đáp án ngay làm mất cơ hội tự tư duy, hoặc khi gặp bài có ngữ cảnh mới lạ thì không biết cách áp dụng lý thuyết để triển khai. |
| **4** | **Bằng chứng đầu** | **Khảo sát định lượng trên 22 học viên thực tế (`artifacts/survey_responses.csv.csv`):**<br>• `63.6% (14/22)` học thụ động xem video/slide trước dẫn tới `40.9% (9/22)` "nghe hiểu lý thuyết nhưng làm bài không biết áp dụng từ đâu".<br>• `81.8% (18/22)` tắc nghẽn khi gặp bài toán ngữ cảnh mới & `36.4% (8/22)` làm sai do ngộ nhận khái niệm cốt lõi.<br>• `63.6% (14/22)` ghét bị nói huỵch tẹt đáp án ngay và `63.6% (14/22)` phản đối việc đưa cả đoạn lý thuyết dài mà không chỉ ra bước sai.<br>• `100% (22/22)` từng dùng AI, trong đó `36.4%` thấy bị mất tư duy vì AI giải hộ và `36.4%` gặp ảo giác sai kiến thức.<br>• `72.7% (16/22)` xác nhận nhớ lâu nhất khi được chỉ rõ giả định sai kèm gợi ý tự sửa; `90.9% (20/22)` sẵn sàng phản biện khi làm đúng; `86.4% (19/22)` ủng hộ phương pháp làm bài kiểm tra ngắn trước khi vào học. |
| **5** | **Lát cắt MỘT CÂU** | Học viên bắt đầu bài học mới · làm bài kiểm tra chẩn đoán ngắn (diagnostic task) trước khi đọc lý thuyết · AI phân tích nguyên nhân lỗi sai để quyết định **gợi mở từng bước (scaffolding hint) kèm dẫn nguồn đoạn bài giảng liên quan** (thay vì giải hộ/đưa đáp án) · học viên tự tư duy và hoàn thành lại bài tập để nắm chắc bản chất. |
| **6** | **AI tự làm đến đâu + Lý do · Willing users** | • **Tự làm:** Nhận bài làm của học viên, phân tích phân loại lỗi sai (sai khái niệm / sai logic áp dụng), sinh gợi ý định hướng (hint) và trích đúng đoạn kiến thức trọng tâm.<br>• **Không tự làm:** **Không đưa đáp án/code mẫu hoàn chỉnh ngay lập tức**, không phán xét năng lực học viên.<br>• **Lý do:** Đưa đáp án ngay triệt tiêu tư duy phản biện và củng cố ảo tưởng hiểu bài; gợi ý đúng mức buộc người học chủ động lấp lỗ hổng kiến thức.<br>• **Willing users (ngoài nhóm, đã đồng ý test ở CP5):** Nguyễn Khánh Đô, Phùng Đình Triển, Nguyễn Thị Lê Na. |
| **7** | **Phân công có tên** | • **Ngô Thế Việt (Lead):** Hoàn thiện Canvas & Spec (`spec.md`), thiết kế logic prompting gợi mở từng bước & guardrails.<br>• **Nguyễn Văn Giáp (Tech):** Khai thác bằng chứng data pack, xây dựng bộ Golden Set kiểm thử (`eval/`), tích hợp AI prototype (`codebase/`).<br>• **Nguyễn Quang Đạo (UX):** Thiết kế luồng trải nghiệm người dùng (quiz → error analysis → hint), phụ trách phỏng vấn và điều phối Willing users kiểm thử (R6). |

---

## 📝 Định dạng Text ngắn gọn (Dùng để copy nộp Form CP1)

```text
1. Track + đề: D2 · Học từ lỗi trước — làm bài rồi mới được giảng (Track D · Học tập thích ứng & tương tác).
2. Job executor: Học viên chuẩn bị vào bài học mới trên VLearn, muốn học chủ động thay vì xem thụ động slide/video.
3. Pain: Học viên tiếp thu thụ động (xem video/đọc slide trước) dễ tạo ảo tưởng hiểu bài (illusion of competence); khi vào bài tập làm sai thì bị đưa đáp án ngay làm mất cơ hội tự tư duy, hoặc khi gặp bài có ngữ cảnh mới lạ thì không biết cách áp dụng lý thuyết để triển khai.
4. Bằng chứng đầu: Khảo sát định lượng trên 22 học viên thực tế (artifacts/survey_responses.csv.csv): 63.6% (14/22) học thụ động xem video/slide trước dẫn tới 40.9% "nghe hiểu nhưng không biết áp dụng"; 81.8% (18/22) tắc nghẽn khi gặp ngữ cảnh mới & 36.4% dính ngộ nhận; 63.6% ghét bị lộ đáp án ngay và 63.6% phản đối vứt cả đoạn lý thuyết dài; 100% dùng AI nhưng 36.4% sợ mất tư duy vì giải hộ & 36.4% dính ảo giác; 72.7% muốn chỉ rõ giả định sai kèm gợi ý tự sửa; 90.9% sẵn sàng phản biện; 86.4% ủng hộ kiểm tra trước khi học lý thuyết.
5. Lát cắt: Học viên bắt đầu bài học mới · làm bài kiểm tra chẩn đoán ngắn trước khi học lý thuyết · AI phân tích nguyên nhân lỗi sai để quyết định gợi mở từng bước (scaffolding hint) kèm dẫn nguồn đúng đoạn bài giảng liên quan · học viên tự tư duy làm lại bài tập để nắm chắc bản chất.
6. AI tự làm đến đâu: Tự phân tích phân loại lỗi sai và sinh gợi ý định hướng kèm trích dẫn; KHÔNG tự đưa đáp án/code giải ngay lập tức. Lý do: Đưa đáp án ngay triệt tiêu tư duy và củng cố ảo tưởng hiểu bài. Willing users: Nguyễn Khánh Đô, Phùng Đình Triển, Nguyễn Thị Lê Na.
7. Phân công: Ngô Thế Việt (Product Lead - Canvas/Spec, prompt hint, guardrails); Nguyễn Văn Giáp (Data & Tech Lead - data mining, Golden Set, AI call prototype); Nguyễn Quang Đạo (UI/UX & Validation - luồng UX, kiểm thử người dùng R6).
```

---

## 📚 Mẫu tham khảo của khoá trước

### Mẫu 1 · Track A — tối ưu tutor có sẵn
1. **Track + đề:** A · VLearn Tutor — trả lời có căn cứ từ tài liệu.
2. **Job executor:** Học viên đang đọc slide trong buổi học, vừa bôi đen một đoạn chưa hiểu.
3. **Pain:** Khi hỏi để làm rõ đoạn vừa bôi đen, học viên nhận câu trả lời không có trích dẫn hoặc trích dẫn sai; không biết tutor dựa vào đâu nên phải tự dò lại slide, mất thời gian và có thể học sai.
4. **Bằng chứng đầu:** `XXX/X.XXX` phản hồi tutor có `citations` rỗng (`XX%`). Khảo sát nhanh `XX` học viên trong lớp: `XX/XX` nói "lần gần nhất hỏi tutor, không biết câu trả lời lấy từ trang nào".
5. **Lát cắt:** Học viên đang đọc slide · cần làm rõ đoạn vừa bôi đen · AI chỉ trả lời khi truy xuất được đoạn nguồn phù hợp, nếu không thì nói "chưa đủ căn cứ" · kết quả là câu trả lời kèm mã trang/đoạn.
6. **AI tự làm đến đâu:** Tự sinh câu trả lời kèm trang nguồn; Không tự suy đoán khi thiếu căn cứ. Willing users: `[Tên 1]`, `[Tên 2]`, `[Tên 3]`.
7. **Phân công:** `[Tên A]` — evidence · `[Tên B]` — retrieval/prompt · `[Tên C]` — prototype · `[Tên D]` — spec, eval · `[Tên E]` — user test.
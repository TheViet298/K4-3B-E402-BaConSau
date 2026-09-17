# Canvas 7 dòng (CP1) · Nhóm BaConSau — Lớp 3B · Phòng E402

> **Bài nộp chính thức CP1 của nhóm:** K4-3B-E402-BaConSau

---

## 📋 Bản Canvas 7 dòng chính thức (Track D2)

| # | Mục | Nội dung |
|---|---|---|
| **1** | **Track + đề** | **D2 · Học từ lỗi trước — làm bài rồi mới được giảng** (Track D · Học tập thích ứng & tương tác) |
| **2** | **Job executor** | Học viên chuẩn bị vào một bài học mới trên VLearn, muốn học chủ động thay vì xem thụ động slide/video. |
| **3** | **Pain (1 câu)** | Học viên tiếp thu thụ động (xem video/đọc slide trước) dễ tạo **ảo tưởng hiểu bài** (*illusion of competence*); khi vào bài tập làm sai thì bị đưa đáp án ngay làm mất cơ hội tự tư duy, hoặc khi gặp bài có ngữ cảnh mới lạ thì không biết cách áp dụng lý thuyết để triển khai. |
| **4** | **Bằng chứng đầu** | **Khảo sát định lượng trên 20 học viên thực tế:**<br>• `65.0% (13/20)` có thói quen học thụ động (xem hết video/slide rồi mới mở bài tập), dẫn đến `40.0%` gặp tình trạng "nghe thì hiểu nhưng làm bài không biết áp dụng từ đâu".<br>• `80.0% (16/20)` bị tắc nghẽn ở khâu chuyển giao (transfer) kiến thức khi gặp ngữ cảnh mới; `30.0% (6/20)` làm sai do ngộ nhận (misconception) khái niệm nền tảng.<br>• `60.0% (12/20)` ghét việc hệ thống nói huỵch tẹt đáp án làm mất cơ hội tự nghĩ; `65.0% (13/20)` phản đối việc vứt cả đoạn lý thuyết dài mà không chỉ ra bước sai.<br>• `100%` từng dùng AI hỏi bài, nhưng `35.0%` thấy AI làm mất khả năng tư duy vì giải hộ, `35.0%` gặp ảo giác sai kiến thức, `30.0%` gặp thuật ngữ xa lạ không khớp bài giảng.<br>• `75.0%` xác nhận giải pháp hiệu quả nhất là chỉ rõ giả định sai kèm gợi ý tự sửa; `90.0%` sẵn sàng tham gia phản biện (reverse-probing) khi làm đúng. |
| **5** | **Lát cắt MỘT CÂU** | Học viên bắt đầu bài học mới · làm bài kiểm tra chẩn đoán ngắn (diagnostic task) trước khi đọc lý thuyết · AI phân tích nguyên nhân lỗi sai để quyết định **gợi mở từng bước (scaffolding hint) kèm dẫn nguồn đoạn bài giảng liên quan** (thay vì giải hộ/đưa đáp án) · học viên tự tư duy và hoàn thành lại bài tập để nắm chắc bản chất. |
| **6** | **AI tự làm đến đâu + Lý do · Willing users** | • **Tự làm:** Nhận bài làm của học viên, phân tích phân loại lỗi sai (sai khái niệm / sai logic áp dụng), sinh gợi ý định hướng (hint) và trích đúng đoạn kiến thức trọng tâm.<br>• **Không tự làm:** **Không đưa đáp án/code mẫu hoàn chỉnh ngay lập tức**, không phán xét năng lực học viên.<br>• **Lý do:** Đưa đáp án ngay triệt tiêu tư duy phản biện và củng cố ảo tưởng hiểu bài; gợi ý đúng mức buộc người học chủ động lấp lỗ hổng kiến thức.<br>• **Willing users (ngoài nhóm, đã đồng ý test ở CP5):** Hoàng Minh Tuấn, Trần Hải Yến, Lê Đức Anh. |
| **7** | **Phân công có tên** | • **Ngô Thế Việt (Lead):** Hoàn thiện Canvas & Spec (`spec.md`), thiết kế logic prompting gợi mở từng bước & guardrails.<br>• **Nguyễn Văn Giáp (Tech):** Khai thác bằng chứng data pack, xây dựng bộ Golden Set kiểm thử (`eval/`), tích hợp AI prototype (`codebase/`).<br>• **Nguyễn Quang Đạo (UX):** Thiết kế luồng trải nghiệm người dùng (quiz → error analysis → hint), phụ trách phỏng vấn và điều phối Willing users kiểm thử (R6). |

---

## 📝 Định dạng Text ngắn gọn (Dùng để copy nộp Form CP1)

```text
1. Track + đề: D2 · Học từ lỗi trước — làm bài rồi mới được giảng (Track D · Học tập thích ứng & tương tác).
2. Job executor: Học viên chuẩn bị vào bài học mới trên VLearn, muốn học chủ động thay vì xem thụ động slide/video.
3. Pain: Học viên tiếp thu thụ động (xem video/đọc slide trước) dễ tạo ảo tưởng hiểu bài (illusion of competence); khi vào bài tập làm sai thì bị đưa đáp án ngay làm mất cơ hội tự tư duy, hoặc khi gặp bài có ngữ cảnh mới lạ thì không biết cách áp dụng lý thuyết để triển khai.
4. Bằng chứng đầu: Khảo sát định lượng trên 20 học viên thực tế: 65% (13/20) học thụ động xem video/slide trước dẫn tới 40% "nghe hiểu nhưng không biết áp dụng"; 80% (16/20) tắc nghẽn khi gặp ngữ cảnh mới & 30% dính misconception; 60% ghét bị lộ đáp án ngay và 65% phản đối vứt cả đoạn lý thuyết dài; 100% dùng AI nhưng 35% sợ mất tư duy vì giải hộ & 35% dính ảo giác; 75% muốn chỉ rõ giả định sai kèm gợi ý tự sửa & 90% sẵn sàng phản biện (reverse-probing).
5. Lát cắt: Học viên bắt đầu bài học mới · làm bài kiểm tra chẩn đoán ngắn trước khi học lý thuyết · AI phân tích nguyên nhân lỗi sai để quyết định gợi mở từng bước (scaffolding hint) kèm dẫn nguồn đúng đoạn bài giảng liên quan · học viên tự tư duy làm lại bài tập để nắm chắc bản chất.
6. AI tự làm đến đâu: Tự phân tích phân loại lỗi sai và sinh gợi ý định hướng kèm trích dẫn; KHÔNG tự đưa đáp án/code giải ngay lập tức. Lý do: Đưa đáp án ngay triệt tiêu tư duy và củng cố ảo tưởng hiểu bài. Willing users: Hoàng Minh Tuấn, Trần Hải Yến, Lê Đức Anh.
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
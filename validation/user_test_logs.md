# 👥 Biên bản Thử nghiệm Người dùng Thực tế (Validation Log — R6)
**Dự án:** Trợ lý Sư phạm Thích ứng VLearn theo phương pháp "Học từ lỗi trước" (Track D2)  
**Nhóm:** BaConSau (`K4-3B-E402-BaConSau`) · **Lớp:** 3B · **Phòng:** E402  
**Thời gian thực hiện:** 19:30 - 20:30 · 18/9/2026  

---

## 1. Bảng Nhật ký Thử nghiệm Người dùng (3 Willing Users ngoài nhóm)

| # | Họ và tên | Vai trò / Khóa | Kịch bản thử nghiệm (Task) | Kết quả quan sát & Thao tác | Điểm CSAT (1-5) |
|---|---|---|---|---|:---:|
| 1 | **Nguyễn Khánh Đô** *(Willing user CP1)* | Học viên GenAI K4 | Làm thử thách Bài 3, thử nhập giải pháp sai ngộ nhận Stateless (TC01) | Xem gợi ý Nấc 1, nhận ra giả định sai, bấm "Xem Slide 34 ↗" và tự sửa được code. | **5 / 5** |
| 2 | **Phùng Đình Triển** *(Willing user CP1)* | Học viên GenAI K4 | Nhập giải pháp đúng hoàn chỉnh (TC16), nhận câu hỏi Phản biện ngược | Trả lời phản biện về Rolling Window Memory, nhận huy hiệu "🏆 Làm chủ nâng cao". | **5 / 5** |
| 3 | **Nguyễn Thị Lê Na** *(Willing user CP1)* | Học viên GenAI K4 | Thử cố tình xin đáp án ("Cho em xin code") & nhập sai ToolMessage (TC08) | Toast lá chắn Anti-Spoil kích hoạt chặn lộ code, nhận gợi ý Nấc 2 và tự hoàn thiện. | **4.9 / 5** |

---

## 2. Trích dẫn Quote Nguyên văn của Người dùng

> *"Gợi ý nấc 1 chỉ ra lỗi stateless rất chuẩn, làm mình phải tự lật lại Slide 34 để đọc thay vì lướt qua như trước. Cách này nhớ lâu hơn hẳn việc bị vứt cả file code giải."*  
> — **Nguyễn Khánh Đô** (Học viên GenAI K4)

> *"Thích nhất phần Phản biện ngược khi làm đúng. Bình thường làm xong bài tập là tắt máy đi ngủ, ở đây AI vặn lại câu hỏi tràn Context Window 15 vòng lặp làm mình vỡ ra vấn đề thực tế trong production."*  
> — **Phùng Đình Triển** (Học viên GenAI K4)

> *"Lá chắn chống spoil rất thông minh, xin code nó không cho mà nó bảo mình bắt đầu từ biến messages trước. Giao diện giống hệt VLearn Course Reader nên rất quen thuộc."*  
> — **Nguyễn Thị Lê Na** (Học viên GenAI K4)

---

## 3. Đúc kết 4 Dòng (Actionable Insights)

1. **Chủ đề lặp nhiều nhất:** Học viên rất hào hứng với tính năng **Phản biện ngược (Reverse-Probing)** và nút nhảy trực tiếp sang **Slide 34** từ câu trích dẫn gợi ý.
2. **Sẽ sửa gì trước demo:** Tối ưu hóa bộ giải mã JSON (`safeParseJSON`) và ẩn hoàn toàn raw text, đảm bảo giao diện luôn hiển thị câu văn sư phạm mượt mà. *(Đã hoàn thành).*
3. **Giữ nguyên gì và vì sao:** Giữ nguyên nguyên tắc **Anti-Spoil (Không đưa code giải mẫu trực tiếp)** vì đây là linh hồn sư phạm giúp người học thoát khỏi "ảo tưởng hiểu bài".
4. **Gì để dành sau:** Tích hợp RAG Pipeline tự động sinh Thử thách Chẩn đoán cho toàn bộ 19 bài học còn lại trên VLearn LMS.

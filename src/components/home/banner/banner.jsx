import React from 'react';

export const BannerComponent = () => {
	return (
		<>
			<div className="banner">
				<img src="/public/img/banner.png" alt="" />
			</div>

			<div className="dichvu">
				<div className="list">
					<div className="item">
						<div className="img">
							<img
								src="/public/img/vs.png"
								alt
								style={{ marginTop: 10, marginLeft: 12 }}
							/>
						</div>
						<h4>VẬN CHUYỆN TOÀN CẦU</h4>
						<p>
							Chúng tôi miễn phí vận chuyển với tất cả các đơn hàng giá trị đến
							2.000.000Đ
						</p>
					</div>
					<div className="item">
						<div className="img">
							<img src="/public/img/dt.png" alt />
						</div>
						<h4>VẬN CHUYỆN TOÀN CẦU</h4>
						<p>
							Chúng tôi miễn phí vận chuyển với tất cả các đơn hàng giá trị đến
							2.000.000Đ
						</p>
					</div>
					<div className="item">
						<div className="img">
							<img src="/public/img/qua.png" alt />
						</div>
						<h4>QUÀ TẠNG HẤP DẪN</h4>
						<p>
							Chương trình khuyến mãi cực lớn và hấp dẫn vào mỗi chủ nhật hàng
							tuần
						</p>
					</div>
					<div className="item">
						<div className="img">
							<img src="/public/img/doitra.png" alt />
						</div>
						<h4>MIỄN PHÍ ĐỔI TRẢ</h4>
						<p>
							Miễn phí đổi trả trong vòng 15 ngày đầu tiên áp dụng cho tất cả
							các mặt hàng
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

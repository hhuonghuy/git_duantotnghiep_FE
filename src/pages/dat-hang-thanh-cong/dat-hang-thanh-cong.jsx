import { LayoutDefault } from '../../layouts';
import React from 'react';

const DatHangThanhCong = () => {
	return (
		<>
			<div className="title d-flex ps-5 py-3" style={{ background: '#d9d9d9' }}>
				<i className="fa-solid fa-house" />
				<h3>/ Đặt hàng thành công</h3>
			</div>

			<main>
				<div
					className="containe flex-column lh-base"
					style={{ padding: '50px' }}
				>
					<p>
						C L A T E N xin cảm ơn bạn đã đặt hàng. Đơn hàng của bạn sẽ sớm được
						xử lý.
					</p>
					<p>Thông tin đơn hàng</p>
					<p>Mã đơn hàng: #QO231031034345731xn79</p>
					<hr />
					<div>
						<h2 className="pb-2 h2">CHI TIẾT ĐƠN HÀNG</h2>
						<div className="img d-flex align-items-center pe-5 gap-5">
							<div className="image pt-5">
								<img src="/public/img/a5 4.png" alt />
							</div>
							<div className="nd lh-lg">
								<p>
									Áo sơ mi tay cụt BlackWhite <br />
									Pinamalisa dáng rộng no style <br />
									42 - Size L <br />
									Số lượng 1 <br />
									Giá sản phẩm: <span className="price">330.000đ</span>
								</p>
								<p className="price">Tổng: 330.000đ</p>
							</div>
						</div>
					</div>
					<hr />
					<p>Tổng thanh toán: 330.000đ</p>
					<p>Thông tin nhận hàng</p>
					<p>Tên người nhận: Phan Minh Triển Bằng</p>
					<p>Số điện thoại: 0392974878</p>
					<p>Địa chỉ: 416/11 Dương Quãng Hàm, phường 5, Quận Gò Vấp</p>
					<p>Ghi chú: Giao lẹ dùm nha shop</p>
					<img
						src="/public/img/thanksyou 1.png"
						alt
						className="container pb-3"
						style={{ width: 80 }}
					/>
					<p>
						Bạn có thể đăng nhập bằng số điện thoại đặt hàng để quản lý và theo
						dõi tình trạng đơn hàng của bạn. <br />
						YaMe xin cảm ơn bạn đã đặt hàng. Đơn hàng của bạn sẽ sớm được xử lý.
						Hotline hỗ trợ: (028) 7307 1441 <br />* Đơn hàng của bạn sẽ được
						giao trong giờ hành chính, từ thứ 2 đến thứ 7. Các bạn vui lòng chú
						ý điện thoại để nhận hàng nhanh nhất nhé!
					</p>
				</div>
			</main>
		</>
	);
};

export default DatHangThanhCong;

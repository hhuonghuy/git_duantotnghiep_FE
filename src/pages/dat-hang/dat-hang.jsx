import './dat-hang.css';

import { LayoutDefault } from '../../layouts';
import React from 'react';

const DatHangPage = () => {
	return (
		<main className="dat-hang product-detail">
			<div className="ttgiohang ps-5 py-3" style={{ background: '#d9d9d9' }}>
				<h3>/ Thông tin giỏ hàng của bạn</h3>
			</div>
			<div className="container">
				<div>
					<div style={{ borderBottom: '2px solid #d9d9d9', display: 'block' }}>
						<h2 className="pb-2 h2">CHI TIẾT ĐƠN HÀNG</h2>
					</div>
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
				<div>
					<form action>
						<h2 style={{ marginLeft: '-20px' }}>NGƯỜI MUA / NHẬN HÀNG</h2>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Họ và tên
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Họ và tên"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Số điện thoại
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Số điện thoại"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput2" className="form-label">
								Nhận hàng tại nhà / công ty / bưu điện
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput2"
								placeholder="Địa chỉ nhận hàng"
							/>
						</div>
						<div className="mb-3">
							<label
								htmlFor="exampleFormControlTextarea1"
								className="form-label"
							>
								Ghi chú
							</label>
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								rows={5}
								defaultValue={''}
							/>
						</div>
						<div className="div" />
						<hr />
						<button>CHỌN THÊM SẢN PHẨM KHÁC</button>
					</form>
				</div>
			</div>
		</main>
	);
};

export default DatHangPage;

import React from 'react';

export const SanPhamBanChay = () => {
	return (
		<div className="top">
			<div className="sp">TOP SẢN PHẨM BÁN CHẠY</div>
			<div className="dm" />
			<div className="n-ao d-flex justify-content-center gap-5 mt-5">
				<button>Áo thun</button>
				<button>Áo polo</button>
				<button>Áo sơ mi</button>
			</div>
			<div className="list">
				<div className="container text-center">
					<div className="row">
						<div className="col-md-3 col-sm-6 item">
							<img src="/public/img/a4 1.png" alt />
							<div className="name text-center">Whitelow</div>
							<div className="price text-center">5.600.000đ</div>
						</div>
						<div className="col-md-3 col-sm-6 item">
							<img src="/public/img/a5 4.png" alt />
							<div className="name text-center">Whitelow</div>
							<div className="price text-center">5.600.000đ</div>
						</div>
						<div className="col-md-3 col-sm-6 item">
							<img src="/public/img/a2 1.png" alt />
							<div className="name text-center">Whitelow</div>
							<div className="price text-center">5.600.000đ</div>
						</div>
						<div className="col-md-3 col-sm-6 item">
							<img src="/public/img/a1 4.png" alt />
							<div className="name text-center">Whitelow</div>
							<div className="price text-center">5.600.000đ</div>
						</div>
					</div>
					<br />
					<div className="an d-flex gap-5 justify-content-center">
						<span className="active" />
						<span />
					</div>
				</div>
			</div>
		</div>
	);
};

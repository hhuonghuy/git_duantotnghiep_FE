import './homepage.module.css';

import {
	AoNamComponent,
	BannerComponent,
	DanhMucSanPham,
	PhuKienComponent,
	SanPhamBanChay,
	SanPhamKhac,
} from '../../components';

import React from 'react';

const HomePage = () => {
	return (
		<>
			{/* ======================= banner ======================= */}
			<BannerComponent />

			{/* ======================= danh mục sản phẩm ======================= */}
			<DanhMucSanPham />

			{/* ======================= áo nam ======================= */}
			<AoNamComponent />

			{/* ======================= phụ kiện ======================= */}
			<PhuKienComponent />

			{/* ======================= sản phẩm bán chạy ======================= */}
			<SanPhamBanChay />

			{/* ======================= sản phẩm khác ======================= */}
			<SanPhamKhac />
		</>
	);
};

export default HomePage;

import './admin-page.css';

import { LayoutDefault } from '../../layouts';
import { Link } from 'react-router-dom';
import React from 'react';

const AdminPage = () => {
	console.log('first admin');
	return (
		<main className="main-admin">
			<div className="navv">
				<ul>
					<li>
						<Link to={'/'}>
							<img
								src="/public/img/User_cicrle_light.png"
								className="user"
								alt
							/>
							Tên Nhân Viên
						</Link>
					</li>
					<li>
						<Link to={'/'}>
							<img src="/public/img/Rectangle 83.png" alt /> Danh mục
						</Link>
					</li>
					<li>
						<Link to={'/'}>
							<img src="/public/img/Rectangle 81.png" alt /> Sản phẩm
						</Link>
					</li>
					<li>
						<Link to={'/'}>
							<img src="/public/img/Rectangle 80.png" alt />
							Đơn hg
						</Link>
					</li>
					<li>
						<Link to={'/'}>
							<img src="/public/img/Rectangle 84.png" alt />
							Khách hg
						</Link>
					</li>
				</ul>
			</div>
			<div className="table">
				<h2 className="text-center">Thông Tin Chi Tiết - Đơn Hàng</h2>
				<div className="table-responsive px-3">
					<table className="table table-primary">
						<thead>
							<tr>
								<th scope="col">Tên Sản Phẩm</th>
								<th scope="col">Số Lượng</th>
								<th scope="col">Đơn Giá</th>
								<th scope="col">Thành Tiền</th>
							</tr>
						</thead>
						<tbody>
							<tr className>
								<td scope="row">Tên Sản Phẩm</td>
								<td>000000</td>
								<td>000000</td>
								<td>000000</td>
							</tr>
							<tr className>
								<td scope="row">Tên Sản Phẩm</td>
								<td>000000</td>
								<td>000000</td>
								<td>000000</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
};

export default AdminPage;

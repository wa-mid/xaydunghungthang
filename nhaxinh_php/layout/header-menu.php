<div class="onav-sticky"></div>
<div id="oMenu" class="clearfix">
    <ul class="container mgb0 onav" id="menu-main">
        <li class="<?php if(!isset($_GET['page_layout'])){echo "active";}else{echo "no";} ?>">
            <a class="frbtr" href="index.php" title="Trang chủ"><img src="images/menu/010000-trang-chu-sm.png"alt="Trang chủ" />&nbsp;<span>Trang chủ</span></a>
        </li>
        <li class="<?php if(isset($_GET['page_layout']) && $_GET['page_layout']=='thiet-ke'){echo "active";}else{echo "no";} ?>">
            <a class="frbtr" href="index.php?page_layout=thiet-ke" title="Thiết kế"><img src="images/menu/030000-thiet-ke-sm.png"alt="Thiết kế" />&nbsp;<span>Thiết kế</span></a>
        </li>
        <li class="<?php if(isset($_GET['page_layout']) && $_GET['page_layout']=='thi-cong'){echo "active";}else{echo "no";} ?>">
            <a class="frbtr" href="index.php?page_layout=thi-cong" title="Thi Công"><img src="images/menu/040000-thi-cong-sm.png"alt="Thi Công" />&nbsp;<span>Thi công</span></a>
        </li>
        <li class="<?php if(isset($_GET['page_layout']) && $_GET['page_layout']=='bao-gia'){echo "active";}else{echo "no";} ?>">
            <a class="frbtr" href="index.php?page_layout=bao-gia" title="Báo giá"><img src="images/menu/050000-bao-gia-sm.png"alt="Báo giá" />&nbsp;<span>Báo giá</span></a>
        </li>

        <li class="<?php if(isset($_GET['page_layout']) && $_GET['page_layout']=='du-an'){echo "active";}else{echo "no";} ?> has-sub">
            <a class="frbtr" href="index.php?page_layout=du-an" title="Dự án"><img src="images/menu/080000-du-an-sm.png"alt="Dự án" />&nbsp;<span>Dự án</span></a>
            <ul id="ctl00_rptMenuHome_ctl04_lv2">
                <li class="no"><a href="thiet-ke-noi-that.php" title="Thiết kế nội thất">Thiết kế nội thất</a></li>
                <li class="no"><a href="thi-cong-noi-that.php" title="Thi công nội thất">Thi công nội thất</a></li>
                <li class="no"><a href="thiet-ke-kien-truc.php" title="Thiết kế kiến trúc">Thiết kế kiến trúc</a></li>
                <li class="no"><a href="xay-nha-tron-goi.php" title="Xây nhà trọn gói">Xây nhà trọn gói</a></li>
                <li class="no"><a href="cai-tao-sua-chua-nha-o.php" title="Cải tạo sửa chữa nhà ở">Cải tạo sửa chữa nhà ở</a></li>
            </ul>
        </li>

        <li class="<?php if(isset($_GET['page_layout']) && $_GET['page_layout']=='thu-vien'){echo "active";}else{echo "no";} ?> has-sub">
            <a class="frbtr" href="index.php?page_layout=thu-vien" title="Thư viện"><img src="images/menu/210000-thu-vien-sm.png" alt="Thư viện" />&nbsp;<span>Thư viện</span></a>
            <ul id="ctl00_rptMenuHome_ctl05_lv2">
                <li class="no"><a href="mau-van-ban.php" title="Mẫu Văn Bản">Mẫu Văn Bản</a></li>
                <li class="no"><a href="mau-nha-dep.php" title="Mẫu Nhà Đẹp">Mẫu Nhà Đẹp</a></li>
                <li class="no"><a href="phong-thuy-nha-o.php" title="Phong thuỷ nhà ở">Phong thuỷ nhà ở</a></li>
            </ul>
        </li>

        <!-- <li class="boxsearch">
            <form action="https://xaydungnhaxinh.vn/search" method="get" id="search-form" class="pnlSear" novalidate="">
                <input name="q" id="txtKey" type="text" autocomplete="off" class="iptSearch required-entry html-tags" placeholder="Nhập từ khóa..." />
                <button class="btn btnsearch"></button>
            </form>
        </li> -->
    </ul>
</div>
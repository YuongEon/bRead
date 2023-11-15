"use client";

const SubMenu = () => {
  const menuItems = [
    { id: 1, name: "Trang chủ" },
    { id: 2, name: "Đã lưu" },
    { id: 3, name: "Triết học" },
    { id: 4, name: "Self-help" },
    { id: 5, name: "Nấu ăn" },
    { id: 6, name: "Lịch sử" },
    { id: 7, name: "Giáo dục" },
    { id: 8, name: "Văn hoá" },
    { id: 9, name: "Công nghệ" },
    { id: 10, name: "Tài chính" },
    { id: 11, name: "Khoa học" },
  ];

  return (
    <>
      <div id="SubMenu" className="border-b">
        <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
          <ul
            id="SubMenuLeft"
            className="flex items-center text-[13px] text-[#333333] px-2 h-8"
          >
            {menuItems.map((item) => (
              <li key={item.id} className="px-3 hover:underline cursor-pointer">{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SubMenu;

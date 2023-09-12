import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="fixed left-0 bottom-0 rounded-t-lg">
            <NavLink to="/info" className={({isActive}: {isActive : boolean}) => isActive ? "bg-[url('./resources/img/footer/footer_info_img_active_000.png')] inline-block bg-cover w-[40px] h-[40px] text-0" : "bg-[url('./resources/img/footer/footer_info_img_000.png')] hover:bg-[url('./resources/img/footer/footer_info_img_active_000.png')] inline-block bg-cover w-[40px] h-[40px] text-0"}>정보입력</NavLink>
            <NavLink to="/" className={({isActive}: {isActive : boolean}) => isActive ? "bg-[url('./resources/img/footer/footer_info_img_active_001.png')] inline-block bg-cover w-[40px] h-[40px] text-0" : "bg-[url('./resources/img/footer/footer_info_img_001.png')] hover:bg-[url('./resources/img/footer/footer_info_img_active_001.png')] inline-block bg-cover w-[40px] h-[40px] text-0"}>홈</NavLink>
            <NavLink to="/schedule" className={({isActive}: {isActive : boolean}) => isActive ? "bg-[url('./resources/img/footer/footer_info_img_active_002.png')] inline-block bg-cover w-[40px] h-[40px] text-0" : "bg-[url('./resources/img/footer/footer_info_img_002.png')] hover:bg-[url('./resources/img/footer/footer_info_img_active_002.png')] inline-block bg-cover w-[40px] h-[40px] text-0"}>일정</NavLink>
            <NavLink to="/statistics" className={({isActive}: {isActive : boolean}) => isActive ? "bg-[url('./resources/img/footer/footer_info_img_active_003.png')] inline-block bg-cover w-[40px] h-[40px] text-0" : "bg-[url('./resources/img/footer/footer_info_img_003.png')] hover:bg-[url('./resources/img/footer/footer_info_img_active_003.png')] inline-block bg-cover w-[40px] h-[40px] text-0"}>통계</NavLink>
        </footer>
    )
}

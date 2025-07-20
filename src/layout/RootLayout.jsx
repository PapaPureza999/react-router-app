// This component acts as a layout wrapper for all your routes — like a shared page structure that includes navigation, header/footer, etc.

import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <nav style={{display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "2rem" }}>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/user/1"}>User 1</Link>
            </nav>
            <hr />
            <Outlet />
        </>
    )
}
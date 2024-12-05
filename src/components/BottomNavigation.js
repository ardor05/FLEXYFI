import React from "react";
import { useNavigate } from "react-router-dom";

const BottomNavigation = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.navbar}>
            <button onClick={() => navigate("/balance")} style={styles.icon}>🏦</button>
            <button onClick={() => navigate("/qrpay")} style={styles.icon}>📷</button>
            <button onClick={() => navigate("/profile")} style={styles.icon}>👤</button>
        </div>
    );
};

const styles = {
    navbar: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "black",
        padding: "10px 0",
        zIndex: 10,
    },
    icon: {
        fontSize: "24px",
        color: "white",
        border: "none",
        background: "none",
        cursor: "pointer",
    },
};

export default BottomNavigation;

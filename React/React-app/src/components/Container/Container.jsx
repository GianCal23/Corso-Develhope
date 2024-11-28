import { useState } from "react"

const Container = ({ title, children }) => {
    const [collapsed, setCollapsed] = useState(false)
    const handleToggleCollapse = () => {
        setCollapsed(t => !t)
    }
    return (
        <div className="cont">
            <div className="app-title">{title}<button onClick={handleToggleCollapse}>Toggle</button></div>
            {collapsed && <div className="app-content">{children}</div>}
        </div>
    )
}
export default Container
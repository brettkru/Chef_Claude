import chefClaudeLogo from "/src/assets/chef-claude-icon.png"

export default function Header(){
    return (
    <div className="header-container">
        <img className="chef-img" src={chefClaudeLogo} alt="chef-claude-icon" />
        <h1 className="header-text">Chef Claude</h1>
    </div>
    )
}
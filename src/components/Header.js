// Child Component: Header
const Header = ({ onBackClick, showBack }) => {
  return (
    <div className="header">
      {showBack && (
        <button onClick={onBackClick} className="back-button">
          ← Back to Home
        </button>
      )}
      {!showBack && "Updates coming soon..."}
    </div>
  );
};

export default Header;
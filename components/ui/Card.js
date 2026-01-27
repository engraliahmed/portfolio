const Card = ({ children, className = "" }) => {
    return (
        <div
            className={`bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-colors duration-300 ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;

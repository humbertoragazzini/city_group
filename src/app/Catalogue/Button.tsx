export default function ButtonNeum({ children, onClick, className }: any) {
    return (
        <button
            onClick={(e) => { onClick() }}
            className={`bg-[#e0e0e0] text-gray-700 px-6 py-3 rounded-xl shadow-[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff] 
         hover:shadow-[4px_4px_8px_#bebebe,_-4px_-4px_8px_#ffffff] 
         active:shadow-[inset_4px_4px_8px_#bebebe,_inset_-4px_-4px_8px_#ffffff] 
         transition-all duration-200 ${className}`}
        >
            {children}
        </button>
    )
}
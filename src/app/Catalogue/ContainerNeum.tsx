export default function ContainerNeum({ children, className }: any) {
    return (
        <div
            className={`bg-[#e0e0e0] text-gray-700 px-6 py-3 rounded-xl shadow-[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff] 
         transition-all duration-200 ${className}`}
        >
            {children}
        </div>
    )
}
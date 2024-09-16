import { OneListProps } from "./type"

const OneList = ({ label, onClick }: OneListProps) => (
    <li
        onClick={onClick}
        className="w-[90%] h-8 mx-2 my-1 flex-center hover:bg-SYSTEM-OrientalPink hover:text-SYSTEM-white rounded-md transition duration-250 cursor-pointer"
    >
        {label}
    </li>
)
export default OneList

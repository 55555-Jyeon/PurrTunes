"use client"

import { DialogList } from "@/app/_/constants/dialogList"
import { useRouter } from "next/navigation"
import OneList from "./oneList"

const MemberDialog = () => {
    const router = useRouter()

    return (
        <ul className="w-[180px] h-fit absolute top-[100px] right-[60px] border rounded-lg mr-12 py-1 flex-center flex-col bg-SYSTEM-SpringRain z-50">
            {DialogList.map(list => (
                <OneList key={list.label} label={list.label} onClick={() => list.onClick(router)} />
            ))}
        </ul>
    )
}
export default MemberDialog

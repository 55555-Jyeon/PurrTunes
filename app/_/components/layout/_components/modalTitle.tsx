import Image from "next/image"

const ModalTitle = () => (
    <>
        <Image width={249} height={99} src={"/PurrTunes.png"} alt="purrTunes logo" />
        <div className="w-full flex-center flex-row my-8">
            <div className="w-[260px] h-[1px] bg-GREY-70" />
            <p className="text-GREY-70 mx-10">SNS 간편 로그인</p>
            <div className="w-[260px] h-[1px] bg-GREY-70" />
        </div>
    </>
)
export default ModalTitle

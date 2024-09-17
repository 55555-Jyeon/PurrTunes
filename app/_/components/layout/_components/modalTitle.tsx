import Image from "next/image"

const ModalTitle = () => (
    <>
        <div className="relative w-[249px] h-[99px]">
            <Image
                src={"/PurrTunes.png"}
                alt="purrTunes logo"
                priority
                fill
                sizes="249px"
                style={{ objectFit: "contain" }}
            />
        </div>
        <div className="w-full flex-center flex-row my-8">
            <div className="w-[260px] h-[1px] bg-GREY-70" />
            <p className="text-GREY-70 mx-10">SNS 간편 로그인</p>
            <div className="w-[260px] h-[1px] bg-GREY-70" />
        </div>
    </>
)
export default ModalTitle

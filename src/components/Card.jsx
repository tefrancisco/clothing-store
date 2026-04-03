import placeHolderImg from '../assets/moletom.png'

export default function Card({ image, title, price }) {
    return (

        <div className="flex flex-col w-89 h-110 my-10">
            <figure className="w-full h-[80%] flex items-center justify-center">
                <img
                    src={placeHolderImg}
                    alt=""
                    className="w-fit h-fit"
                />
            </figure>
            <div className="grid grid-cols-2 w-full h-[20%]">
                <div className="font-mono">
                    <p className="py-3">MOLETOM</p>
                    <p>$ 25.00 USD</p>
                </div>
                <div className="flex items-center justify-end">
                    <button className="font-mono py-3 px-4 mx-1 border border-stone-800">Add to cart</button>
                </div>
            </div>
        </div>
    )
}
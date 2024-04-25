import Image from "next/image";

export default function Loading() {
    return (
        <div className='flex justify-center mt-16'>
            <Image
                className='h-52'
                src='/spinner.svg'
                alt='Loading...'
                width={100}
                height={100} // Adjust the width and height as needed
            />
        </div>
    );
}

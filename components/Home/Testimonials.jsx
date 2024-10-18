import { TestimonialsData } from "@/config/TestimonialsData";
import Image from "next/image";

export default function Testimonials() {
    return (
        <>
            <div className="pt-14">
                <div className='text-center'>
                    <h2 className='mb-1 text-2xl font-bold'>Stories of Success</h2>
                    <p className="mb-5 text-lg font-normal">Browse Our Happy Client Highlights</p>
                </div>
                <div className='grid place-items-center grid-cols-12 mb-20 gap-5'>
                    {
                        TestimonialsData.map((item, index) => (
                            <div key={index} className="form_bg md:max-w-sm md:h-48 p-6 col-span-12 sm:col-span-6 md:col-span-4 rounded-lg border border-muted">
                                <div className="flex items-start gap-6">
                                    <div className='size-12 border border-black rounded-full p-2'>
                                        <Image width={50} height={50} className="w-full h-full" src="https://blackbirdpackaging.com/assets/images/testimonial/avatar.svg" alt="Profile Picture" loading="lazy" />
                                    </div>
                                    <h4 className="text-lg font-medium">{item.name}</h4>
                                </div>
                                <div className="mt-4">
                                    <p className="text-muted-foreground">
                                        {item.feedback}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
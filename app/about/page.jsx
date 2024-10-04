import React from 'react'
import PageTitle from '@/components/Global/pageTitle'
import Image from 'next/image'
import Testimonials from '@/components/Home/Testimonials'

const About = () => {
  return (
    <>
      <PageTitle currentPageTitle='About PrintPro Packaging' currentPage='About' prevPage='Home' />
      <section className='md:px-[var(--paddingX)] md:pt-20 md:pb-10 px-4 py-20'>

        <div className='text-center'>
          <h4 className='text-2xl font-bold'>About Us</h4>
          <p>Best Custom Printed Packaging Manufacturer</p>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex py-24 md:flex-row flex-col items-center gap-6 text-sm">
            <div className='w-full md:w-[45%]'>
              <Image width={500} height={500} className=" object-cover object-center rounded" alt="hero" src='/images/candle_box_about.jpg' />
            </div>
            <div className='w-full md:w-[55%]'>
              <div>
                <p className='leading-[1.8]'>The PrintPro packaging is one of the best boxes of manufacturing companies in the USA. This packaging company is involved in producing every kind of custom packaging boxes and custom boxes with a logo. The packaging boxes can be available in the highest quality possible with unique and creative logo printed styles. The PrintPro packaging can manufacture the custom boxes wholesale in a series of sizes and designs as per the clients’ requirements, needs, and the clients’ product specifications.</p>
                <br />
                <p className='leading-[1.8]'>The PrintPro packaging company is equipped with talented and hardworking experts of graphic designers who have the skills to develop and craft aesthetic designs. All these experts are able to produce the customized packaging boxes with the logo.
                </p>
              </div>
              <br />
              <div>
                <h1 className='text-xl font-bold mb-2'>Custom Packaging Solutions to Elevate Your Brand</h1>
                <p className='leading-[1.8]'>To get the customer satisfaction and the customers’ loyalty, the PrintPro packaging company does not even charge a bit to clients for any customizations of custom design by the customers themselves. PrintPro packaging is the best packaging solution you can ever find in the whole United States of America. Suppose you need to get the packaging boxes for your business with a definite logo. In that case, the PrintPro packaging company can provide you with any size, shape design, and crafted custom printed boxes sooner than any other packaging competitor in the market.</p>
                <br />
                <p className='leading-[1.8]'>PrintPro packaging team brings your favorite imaginary packaging box to reality as per your requirements. PrintPro can make custom packaging of any shape, size, color, and much more. PrintPro packaging team helps to build personalized boxes that bring out the best picture of your brand and the hearts of valued customers. PrintPro prefers making unique messages that could directly communicate with the buyer on a personal level. The appearance of the boxes influences the sales. The quality of the packaging of any product has a massive effect on the customers’ buying decisions. So PrintPro packaging helps you make this influence as better as possible to make the maximum purchases and increase the business’s growth.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='space-y-6'>
          <div className='text-sm leading-[1.7] py-6 px-8 rounded-lg bg-gray-100 '>
            PrintPro is a USA based packaged company. The PrintPro team is empowering businesses with all-round packaging for their goods and materials. The PrintPro company has a versatile experience in this field. This experience enables them to oversee the projects and finally come up with the packaging solutions appropriate for the respective businesses.
          </div>
          <div className='text-sm leading-[1.7] py-6 px-8 rounded-lg bg-gray-100 '>
            The PrintPro packaging company uses a wide variety of materials for the manufacturing of boxes. The packaging boxes that are produced by the PrintPro company are eco-friendly. The PrintPro packaging has goals to win the customers by offering them the optimum quality of custom box manufacturing services and logo services in the most affordable way possible. This company is 101% optimistic and committed to the profits of loyal customers.
          </div>
          <div className='text-sm leading-[1.7] py-6 px-8 rounded-lg bg-gray-100 '>
            The PrintPro Company is ready to assist potential customers with a series of unique and entrepreneurial designs that will help you achieve success in your business exponentially. Besides, this packaging company provides add-ons and oiling, coatings, embossing, de-bossing, and noticeable windows. The add-ons will surely grasp the attention of the customers towards your product.
          </div>
        </section>

        <section className='my-20 relative w-full form_bg'>
          <div className="absolute top-10 right-10 opacity-10">
            <Image width={600} height={600} src="/images/box_art.webp" alt="" />
          </div>
          <div className='text-sm leading-[1.7] py-6 px-8 rounded-lg border'>

            <div className='py-3 px-5 rounded-lg bg-gray-100'>
              <h1 className='text-xl font-bold text-center'>WHY SHOULD YOU CHOOSE US?</h1>
            </div>
            <br />
            <br />

            <div className="space-y-5">

              <div className=''>
                <h2 className='text-xl font-bold pb-3'>Free Graphic Designing</h2>
                <p>We know that the first impression is by far the most lasting one, and because the design of your custom boxes is the first introduction of your products, we guarantee that we will provide you with free design support to ensure that your boxes stand out with a professional style and design.</p>
              </div>
              <div className=''>
                <h2 className='text-xl font-bold pb-3'>No Minimum Order</h2>
                <p>We Have no minimum order requirements, whether you are holding a house party and need customized cardboard box printing, large printed cargo boxes, or everything in between.</p>
              </div>
              <div className=''>
                <h2 className='text-xl font-bold pb-3'>Best Custom Packaging Variants</h2>
                <p>PrintPro Packaging is the finest answer for all of your Unique Packaging needs since we create custom containers to ensure that your items fit correctly.</p>
              </div>
              <div className=''>
                <h2 className='text-xl font-bold pb-3'>No Die and Plate Charges</h2>
                <p>Our team of specialists deliver box printing without any additional or hidden expenses, making the best custom boxes packaging and printing a delight.</p>
              </div>
              <div className=''>
                <h2 className='text-xl font-bold pb-3'>Swift Turnaround Time</h2>
                <p>We offer the shortest turnaround time for your Short Run Custom Packaging needs, whether you need Custom Shipping Boxes or Mini Box Printing.</p>
              </div>

            </div>

          </div>
        </section>

        <section>
          <div className='text-center'>
            <h1 className='text-xl font-bold'>Specialized Services</h1>
            <p>Browse The Features of Packaging at PrintPro Packaging</p>
          </div>

          <div className='space-y-6 w-full pt-10 h-full'>
            <div className="flex flex-col md:flex-row items-start gap-4 w-full h-full">
              <div className='h-full md:w-[50vw] text-sm leading-[1.7] py-6 px-8 rounded-lg bg-gray-50 '>
                <h2 className='text-3xl font-bold pb-4 secondary_text'>0.1 &ensp; Embossing</h2>
                <p >Embossing is the technique of producing a raised image on a surface. The method of embossing produces a three-dimensional impression of the targeted region. The embossing method often necessitates the use of two dies. The first die is elevated, while the second die is lowered. When paper or other material is squeezed between the two dies, the raised die drives the targeted material into the recessed die. When done correctly, this method produces an embossed imprint without harming or ripping the targeted region.</p>
              </div>
              <div className='h-full md:w-[50vw] text-sm leading-[1.7] py-6 px-8 rounded-lg bg-gray-50 '>
                <h2 className='text-3xl font-bold pb-4 secondary_text'>0.2 &ensp;Spot UV</h2>
                <p >Spot UV is the process of putting a transparent, glossy coating on particular parts of a printed surface. This application stands out from the surrounding surfaces, which are normally coated with a matte laminate or paint. Spot UV is frequently used to emphasise brand logos and other essential visuals. Furthermore, Spot UV treatment is frequently paired with embossing, sometimes known as UV embossing, to produce a vivid and sumptuous impression.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4 w-full h-full">
              <div className='h-full text-sm leading-[1.7] py-6 px-8 rounded-lg bg-gray-50 '>
                <h2 className='text-3xl font-bold pb-4 secondary_text'>0.3 &ensp;Foil Stamping</h2>
                <p >Foil stamping, too known as hot stamping or thwart printing, could be a particular printing innovation that employments warm, weight, and metal passes on to apply foil film to a printed surface. Foil film is often offered in rolls and is available in a wide range of colours, coatings, and optical effects. While metallic foils like gold, silver, or copper are the most common, rich-appearing solid colours like red, green, purple, blue, and black can also be used.</p>
              </div>
              <div className='h-full text-sm leading-[1.7] py-6 px-8 rounded-lg bg-gray-50 '>
                <h2 className='text-3xl font-bold pb-4 secondary_text'>0.4 &ensp;Die Cutting</h2>
                <p >Foil stamping, too known as hot stamping or thwart printing, could be a particular printing innovation that employments warm, weight, and metal passes on to apply foil film to a printed surface. Foil film is often offered in rolls and is available in a wide range of colours, coatings, and optical effects. While metallic foils like gold, silver, or copper are the most common, rich-appearing solid colours like red, green, purple, blue, and black can also be used.</p>
              </div>
            </div>
          </div>

        </section>

        <Testimonials />

      </section>
    </>
  )
}

export default About

export const metadata = {
  title: 'Custom Boxes Wholesale - About Us',
};
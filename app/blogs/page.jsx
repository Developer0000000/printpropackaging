import React from 'react';
import PageTitle from '@/components/Global/pageTitle';
import BlogsCard from '@/components/BlogComponent/BlogsCard';
import BlogsData from '@/config/BlogsData';

const Blogs = () => {

  return (
    <>
      <PageTitle currentPageTitle='Blogs' currentPage='Blogs' prevPage='Home' />

      <section className='md:px-[var(--paddingX)] px-4 py-20'>
        <div className=''>
          {
            <div className='grid lg:grid-cols-3 md:grid-cols-2 text-left grid-cols-1 gap-12 justify-center'>
              {
                BlogsData.map((blog) => <BlogsCard key={blog.id} {...blog} />)
              }
            </div>
          }
        </div>
      </section>
    </>
  )
}

export default Blogs

export const metadata = {
  title: 'Custom Boxes Wholesale - Blogs',
};
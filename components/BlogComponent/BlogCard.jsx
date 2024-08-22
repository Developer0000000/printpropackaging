import React from 'react';
import PageTitle from '../Global/pageTitle';
import Image from 'next/image';

const BlogCard = ({ blogImg, title, author, date, description, id }) => {
    let blogNavigation = 'blogs';

    function calculateWordCount(jsxContent) {
        let wordCount = 0;

        const countWords = (text) => {
            const words = text.split(/\s+/);
            wordCount += words.length;
        };

        const traverseJSX = (element) => {
            if (typeof element === 'string') {
                countWords(element);
            } else if (Array.isArray(element)) {
                element.forEach(traverseJSX);
            } else if (element.props && element.props.children) {
                traverseJSX(element.props.children);
            }
        };

        traverseJSX(jsxContent);

        return wordCount;
    }

    const wordCount = calculateWordCount(description);

    const newTitle = id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <>
            <PageTitle currentPageTitle={newTitle} currentPage={`${blogNavigation} / BlogPost`} prevPage='Home' />
            <section className='md:px-[var(--paddingX)] px-4 mt-16'>
                <article className="prose lg:prose-xl">
                    <Image width={1000} height={500} src={blogImg} alt="Blog Post" className="w-full rounded-lg shadow-lg duration-300 transition-all hover:scale-[1.011]" />
                    <br />

                    <div className={`text-gray-600 flex items-center flex-col lg:flex-row my-4 space-y-1.5 lg:space-y-0 lg:my-2`}>
                        <span className='px-1'><i className="fa-regular fa-clock clock_gradient cursor-pointer"></i> {date} </span> by {author}
                        <span className='flex'>
                            <svg className="mx-2 h-5 w-5 fill-current opacity-75 gradient" viewBox="0 0 576 512">
                                <path d="M540.9 56.77c-45.95-16.66-90.23-24.09-129.1-24.75-60.7.94-102.7 17.45-123.8 27.72-21.1-10.27-64.1-26.8-123.2-27.74-40-.05-84.4 8.35-129.7 24.77C14.18 64.33 0 84.41 0 106.7v302.9c0 14.66 6.875 28.06 18.89 36.8 11.81 8.531 26.64 10.98 40.73 6.781 118.9-36.34 209.3 19.05 214.3 22.19C277.8 477.6 281.2 480 287.1 480c6.52 0 10.12-2.373 14.07-4.578 10.78-6.688 98.3-57.66 214.3-22.27 14.11 4.25 28.86 1.75 40.75-6.812C569.1 437.6 576 424.2 576 409.6V106.7c0-22.28-14.2-42.35-35.1-49.93zM272 438.1c-24.95-12.03-71.01-29.37-130.5-29.37-27.83 0-58.5 3.812-91.19 13.77-4.406 1.344-9 .594-12.69-2.047C34.02 417.8 32 413.1 32 409.6V106.7c0-8.859 5.562-16.83 13.86-19.83C87.66 71.7 127.9 63.95 164.5 64c51.8.81 89.7 15.26 107.5 23.66V438.1zm272-28.5c0 4.375-2.016 8.234-5.594 10.84-3.766 2.703-8.297 3.422-12.69 2.125C424.1 391.6 341.3 420.4 304 438.3V87.66c17.8-8.4 55.7-22.85 107.4-23.66 35.31-.063 76.34 7.484 118.8 22.88 8.2 3 13.8 10.96 13.8 19.82v302.9z"></path></svg>
                            {Math.floor(wordCount * 0.008)} min read
                        </span>
                        {/* <div className='flex justify-center items-center lg:ml-auto'>
                            {subCategory && subCategory.map((item, index) => (
                                <button key={index} type='button' className="for_btns tracking-[1px] text-center mr-2 my-1">{item}</button>
                            ))}
                        </div> */}
                    </div>

                    {/* <div className="flex items-center lg:justify-start justify-center space-x-2 mt-4">
                        <a href={authorImg}>
                            <img src={authorImg} alt={author} className="w-10 h-10 rounded-full transition_link hover:scale-125" />
                        </a>
                        <p>{author}</p>
                    </div> */}

                    <div className="my-20 leading-[2]">{description}</div>
                </article>
            </section>
        </>
    )
}

export default BlogCard

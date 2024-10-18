import Head from 'next/head';

const Meta = ({ title }) => {
    return (
        <Head>
            <title>{title.charAt(0).toUpperCase() + title.slice(1)} - Products</title>
            <meta name="description" content={`Browse products for ${title}`} />
        </Head>
    );
};

export default Meta;

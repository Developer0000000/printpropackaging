// `components` object you'll pass to PortableText
import { PortableTextComponents } from '@portabletext/react';

const styleComponent = {

    block: {
        h1: ({ children }) => <h1 className="text-gray-800 text-4xl">{children}</h1>,
        h2: ({ children }) => <h2 className="text-gray-800 text-3xl">{children}</h2>,
        h3: ({ children }) => <h3 className="text-gray-800 text-2xl">{children}</h3>,
        h4: ({ children }) => <h4 className="text-gray-800 text-xl">{children}</h4>,
        h5: ({ children }) => <h5 className="text-gray-800 text-lg">{children}</h5>,
        h6: ({ children }) => <h6 className="text-gray-800 text-base">{children}</h6>,
    },

    listItem: {
        bullet: ({ children }) => <li className='list-disc list-inside ml-4'>{children}</li>
    },

    mark: {
        strong: ({ children }) => <strong className='font-light'>{children}</strong>,
    }

}

export default styleComponent;

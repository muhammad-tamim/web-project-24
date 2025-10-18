import React from 'react';
import { useLoaderData } from 'react-router';
import placeholderImage from '../../../assets/images/404.jpg'
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Content = () => {
    const blog = useLoaderData()
    const { cover_image, title, description, published_at, id, tags, body_html } = blog || {}
    return (
        <div className='mx-auto transition border-2 p-2  border-black/10   group hover:no-underline focus:no-underline '>
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderImage} />
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
                    {tags.map((tag, index) => <a key={index} className="px-3 py-1 rounded-sm hover:underline  text-gray-900">#{tag}</a>)}

                </div>
            </div>
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            </div>
        </div>
    );
};

export default Content;
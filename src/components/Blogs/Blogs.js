import React from 'react';

const Blogs = () => {
    return (
        <div className="font-bold mt-8">
            <h1 className='text-2xl mt-4'>Question: What is context API?</h1>
            <p>Answer: The context API is a component structure provided by react framework which enables us to share specific form of data across all level of the application. It help us to avoid props drilling</p>


            <h1 className="text-2xl mt-4">Question: What is semantic tag?</h1>
            <p>Answer: Semantic tag clearly describe its meaning to both the browser and developer. Shortly we can say semantic tag clearly define its content. Examples: form, table, article, etc.</p>
        </div>
    );
};

export default Blogs;
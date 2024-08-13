import React from 'react';
import store from '../../public/store.jpg'

function About() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
            <div className='space-y-12'>
                <h2 className='text-4xl font-bold'>Hello, welcome to my {" "}
                        <span className='text-red-500'>First Project</span>
                </h2>

                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consectetur, qui numquam magnam quia perferendis dolorum sequi beatae in veritatis non sint, eaque, voluptatum asperiores sapiente necessitatibus fugit fugiat quas.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati architecto, excepturi hic quis molestias cum quod quidem! Recusandae earum, labore sequi nostrum quae amet fugiat. Similique, fugit omnis, hic, esse ad quo nemo sit corporis natus suscipit temporibus earum deserunt. Laborum error perferendis culpa veritatis suscipit ipsum, distinctio quaerat veniam repellat deleniti adipisci soluta maiores fugit assumenda repudiandae. Tenetur accusantium provident hic excepturi est doloremque sequi accusamus possimus cum? Omnis voluptatem ullam doloremque eius. Nobis voluptatibus voluptate corporis! Nihil fugiat assumenda aliquam cum, sed dolorum autem necessitatibus nam excepturi nesciunt.</p>
                
            </div>
            
        </div>
        <div className='w-full order-1 my-5 md:w-1/2 flex justify-center'>
            <img src={store} className='w-[420px] h-[625px]'/>
        </div>
    </div>
    </>
  );
}

export default About;

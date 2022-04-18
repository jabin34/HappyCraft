import React from 'react';

const About = () => {
    return (
        <div className='container'>
           <div className='d-flex justify-content-between flex-md-row flex-sm-column-reverse flex-column-reverse text-justify'>
               <div className='p-3'>
                 <h1 className='p-4 m-2'>Hi!! I'm Israt Jabin</h1>
                 <div className='row p-4 m-2'>
            <h6>My goal: Become a team lead in the next four years.</h6>
            <p>I will follow a schedule to acheive my goal.Its not a one day thing to become a team lead .Acheiving this i have to learn more,gather more knowledge and work hard.
                Here are some point how i will work hard to acheive my goal.
                <ul>
                   <li> Set a deadline:This means setting a time-bound goal.how much time the goal is going to take to finally achieve it</li>
                   <li> Write down the plan:I believe in systematic plans and then writing them down. A plan is most important step in achieving any goal. With a written plan, you'll know exactly what is to be done.</li>
                   <li> Break the goal into smaller tasks:For exampleto be a software engineer. You can't just read some books and become an engineer. You have steps to follow like pursuing an engineering degree, doing practicals, training, internship, making projects and publishing them and then you become a software engineer.
                 </li>
                 <li>Completing the small tasks:Once you've defined the smaller tasks, the next step is to complete them one by one.</li>
                 <li> Dealing with issues:We can't achieve any goal without facing some problems, because achieving a goal is a practical thing. While doing any practical work, there can be some mistakes or unexpected results.should learn from it.</li>
                 <li>Never skip any task or problem</li>
                 <li>Keep checking the progress</li>
                </ul>
            </p>
            </div>
               </div>
               
               <div className='p-3 mx-auto w-75'> <img  className='rounded-circle border w-100'
               src='https://i.ibb.co/j4t10q5/profile.jpg' alt="profile"/></div>
           </div>
        </div>
    );
};

export default About;
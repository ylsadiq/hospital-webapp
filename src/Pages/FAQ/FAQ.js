import React from 'react';
import { motion } from "framer-motion"
import './FAQ.css'

const FAQ = () => {
    var faq1 = require('../../images/faq-doc.png');
    return (
        <section className='faq-section px-8 py-10'>
          <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          className="faq-heading md:pl-4">
          <h5>FAQ Qusetions</h5>
          <h2>Get Your General Anwser</h2>
          </motion.div>
            <div className="faq-container">
            <motion.div
            initial={{ opacity: 0.8}}
            whileInView={{ opacity: 1, duration: 1 }}
            className="rounded-box w-2/5 mt-4">
            <div className="collapse collapse-plus border-base-300 rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  Get Your General Answer 
  </div>
  <div className="collapse-content"> 
    <p>his is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.</p>
  </div>
</div>
            <div className="collapse collapse-plus border-base-300 rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  Will I always see my own doctor? 
  </div>
  <div className="collapse-content"> 
    <p>This is the second item's accordion body It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body though the transition does limit overflow.</p>
  </div>
</div>
            <div className="collapse collapse-plus border-base-300 rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  What is one Medical’s care?
  </div>
  <div className="collapse-content"> 
    <p>This is the third item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the.</p>
  </div>
</div>
            <div className="collapse collapse-plus border-base-300 rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  What is evidence based medicine? 
  </div>
  <div className="collapse-content"> 
    <p>This is the third item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the.accordion-body, though the transition does limit overflow</p>
  </div>
</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, duration: 0.3 }} className="faq-img w-2/5">
            <img src={faq1} alt="" />
            </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
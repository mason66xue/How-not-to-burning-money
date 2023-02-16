
import React from 'react';
import './LandingPageComponent.css';
import hero from "../../images/Hero-shortened.png";
import jackie from "../../images/jackie-profile-image.jpg";
import zander from "../../images/zander-profile-image.png";
import jake from "../../images/jake-default-profile-picture2.png";
import ruochen from "../../images/ruochen-profile-image.PNG";
import test1 from "../../images/testimonial-profile-image-1.jpeg";
import test2 from "../../images/testimonial-profile-image-2.jpeg";
import test3 from "../../images/testimonial-profile-image-3.jpeg";
import test4 from "../../images/testimonial-profile-image-4.webp";
import test5 from "../../images/testimonial-profile-image-5.jpeg";
import stock2 from "../../images/budget-stock-image-2.webp";
import stock3 from "../../images/budget-stock-image-3.webp";
import stock4 from "../../images/budget-stock-image-4.webp";
import stock5 from "../../images/budget-stock-image-5.webp";
import stock6 from "../../images/budget-stock-image-6.webp";
import stock8 from "../../images/budget-stock-image-8.webp";

function LandingPageComponent() {
    return (

        <div>
            <div className="hero">
                <img src={hero} alt="HeroImage" />
                {/* Hero image is a little bit big, maybe cut the picture smaller. */}
            </div>

            <hr />
            <section id="about-us">
                <div className="about-us">
                    <h2>About Us</h2>
                    <div className="about-us-images about-us-container">
                        <div className="about-us-image">
                            <img src={jackie} alt="jackie" />
                            <div className="image-name-description">
                                <h4>Jackie Zheng</h4>
                                <p>Front End Developer</p>
                            </div>
                        </div>
                        <div className="about-us-image">
                            <img src={zander} alt="zander" />
                            <div className="image-name-description">
                                <h4>Zander Marenberg</h4>
                                <p>Front End Developer</p>
                            </div>
                        </div>
                        <div className="about-us-image">
                            <img src={jake} alt="jake" />
                            <div className="image-name-description">
                                <h4>Jake Nguyen</h4>
                                <p>Back End Developer</p>
                            </div>
                        </div>
                        <div className="about-us-image">
                            <img src={ruochen} alt="ruochen" />
                            <div className="image-name-description">
                                <h4>Ruochen Liu</h4>
                                <p>Back End Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <div class="parallax">
                <div class="parallax-background"></div>
                <div class="parallax-content">
                </div>
            </div>
            <hr />
            <h2>Testimonials</h2>
            <section id="testimonials">
                <div className="testimonials">
                    <div className="testimonial">
                        <div className="testimonial-profile-picture">
                            <img src={test1} alt="Profile Picture 1" />
                        </div>
                        <h4>Jesse Mitchell</h4>
                        <p>
                            “It's easy to understand and lets you create and keep records flawlessly. If you use it with a financial
                            software product, it cannot be beat.”
                        </p>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-profile-picture">
                            <img src={test2} alt="Profile Picture 2" />
                        </div>
                        <h4>Margery Ellsworth</h4>
                        <p>
                            “You can use it to figure out your debt and create a get out of debt plan. You can use it to manage
                            everyday spending and use it to plan for financial goals. I really loved how easy it is to use.”
                        </p>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-profile-picture">
                            <img src={test3} alt="Profile Picture 3" />
                        </div>
                        <h4>Andrew Hardin</h4>
                        <p>
                            “My wife and I have used your application for several years now and have become quite good at controlling
                            our income and expenses using this wonderful application, thanks to you!”
                        </p>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-profile-picture">
                            <img src={test4} alt="Profile Picture 4" />
                        </div>
                        <h4>Christina Hensley</h4>
                        <p>
                            “Overall I am very happy with the application. I got a clearer idea of what I have to spend, so it
                            is easier to say no to temptations instead of relying on savings to cover my spending mistakes.”
                        </p>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-profile-picture">
                            <img src={test5} alt="Profile Picture 5" />
                        </div>
                        <h4>Raj Martin</h4>
                        <p>
                            “I was checking online for application on budgeting and your application came up as a top choice. We felt
                            that we could do better by cutting out a lot of unnecessary expenses.”
                        </p>
                    </div>
                </div>
                <div className="testimonials-navigation">
                    <button className="prev-button">&lt;</button>
                    <button className="next-button">&gt;</button>
                </div>
            </section>
            <hr />
            <div class="parallax">
                <div class="parallax-background"></div>
                <div class="parallax-content">
                </div>
            </div>
            <hr />
            <section id="stock-images">
                <div className="stock-images">
                    <div className="stock-images-container">
                        <div className="stock-image">
                            <img src={stock2} alt="Stock Image 1" />
                        </div>
                        <div className="stock-image">
                            <img src={stock3} alt="Stock Image 2" />
                        </div>
                        <div className="stock-image">
                            <img src={stock4} alt="Stock Image 3" />
                        </div>
                        <div className="stock-image">
                            <img src={stock5} alt="Stock Image 4" />
                        </div>
                        <div className="stock-image">
                            <img src={stock6} alt="Stock Image 5" />
                        </div>
                        <div className="stock-image">
                            <img src={stock8} alt="Stock Image 6" />
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section id="contact">
                <div className="contact">
                    <h2>Contact</h2>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
            <hr />
            <div class="parallax">
                <div class="parallax-background"></div>
                <div class="parallax-content">
                </div>
            </div>
            <hr />
            <footer>Created in 2023 by GROUP 3</footer>


        </div>
    );

}

export default LandingPageComponent;








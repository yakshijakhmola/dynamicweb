import React, { useState } from 'react';
import { FaPhoneVolume, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Breadcrumb from '../component/Breadcrumb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        username: '',
        useremail: '',
        userphone: '',
        usercity: '',
        usermsg: '',
    });

    const ContactJson = [
        {
            id: 1,
            Contact_icon: <FaPhoneVolume />,
            Contact_para: "+64 212815009",
            Contact_link: "tel:+64212815009"
        },
        {
            id: 2,
            Contact_icon: <MdMarkEmailUnread />,
            Contact_para: "Sales@dynamicdisplays.co.nz",
            Contact_link: "mailto: Sales@dynamicdisplays.co.nz"
        },
        {
            id: 3,
            Contact_icon: <IoLocationSharp />,
            Contact_para: "1 lion court, Upper Hutt, Wellington, New Zealand 5018",
            Contact_link: "https://maps.app.goo.gl/rrdTizu2fWce5MMe6"
        },
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const errors = [];
        if (!formData.username.trim()) errors.push('Name is required');
        if (!formData.useremail.trim()) {
            errors.push('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(formData.useremail)) {
            errors.push('Email is invalid');
        }
        if (!formData.userphone.trim()) errors.push('Phone is required');
        if (!formData.usercity.trim()) errors.push('City is required');
        if (!formData.usermsg.trim()) errors.push('Message is required');
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (errors.length === 0) {
            // Form is valid, submit the form
            console.log('Form data:', formData);
            toast.success("Form submitted successfully!");
        } else {
            errors.forEach(error => toast.error(error));
        }
    };

    return (
        <>
            <Breadcrumb PageName={'Contact'} PageLink={'contact'} />
            <div className='section'>
                <div className="container">
                    <div className='grid grid-cols-12 gap-x-5'>
                        <div className='xl:col-span-5 md:col-span-5 col-span-12'  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            <div className='bg-Gray py-20 px-10 rounded-lg shadow-DarkShadow h-full'>
                                <h4 className='mb-3'>Contact Details</h4>
                                <p>We're here to help! If you have any questions or would like to discuss how our Outdoor Signage & Indoor Signage services can benefit your business.</p>
                                <div className='mt-10'>
                                    {ContactJson.map((val) => (
                                        <div className='grid grid-cols-12 my-5' key={val.id}>
                                            <div className='col-span-2 w-10 h-10 bg-Black shadow-LightShadow rounded-full text-center flex items-center justify-center text-White text-xl'>{val.Contact_icon}</div>
                                            <div className='col-span-10'><a href={val.Contact_link}>{val.Contact_para}</a></div>
                                        </div>
                                    ))}
                                    <div className='flex items-center justify-between mt-10'>
                                        <a className='text-xl' href="#" aria-label="Facebook"><FaFacebookF /></a>
                                        <a className='text-xl' href="#" aria-label="Instagram"><FaInstagram /></a>
                                        <a className='text-xl' href="#" aria-label="Twitter"><FaTwitter /></a>
                                        <a className='text-xl' href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                        <a className='text-xl' href="#" aria-label="Google"><FaGoogle /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xl:col-span-7 md:col-span-7 col-span-12'  data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
                            <div className='bg-white shadow-DarkShadow py-10 px-10 rounded-lg mt-3 xl:mt-0'>
                            <h3 className='mb-5'>Get In Touch</h3>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            className='w-full py-4 px-5 border-2 border-solid border-[#ddd] text-[#333] rounded-lg mb-4 bg-gray-50'
                                            placeholder='Name*'
                                            type='text'
                                            name='username'
                                            value={formData.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            className='w-full py-4 px-5 border-2 border-solid border-[#ddd] text-[#333] rounded-lg mb-4 bg-gray-50'
                                            placeholder='Email*'
                                            type='email'
                                            name='useremail'
                                            value={formData.useremail}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            className='w-full py-4 px-5 border-2 border-solid border-[#ddd] text-[#333] rounded-lg mb-4 bg-gray-50'
                                            placeholder='Phone*'
                                            type='text'
                                            name='userphone'
                                            value={formData.userphone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            className='w-full py-4 px-5 border-2 border-solid border-[#ddd] text-[#333] rounded-lg mb-4 bg-gray-50'
                                            placeholder='City*'
                                            type='text'
                                            name='usercity'
                                            value={formData.usercity}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            className='w-full py-4 px-5 border-2 border-solid border-[#ddd] text-[#333] rounded-lg mb-4 resize-none bg-gray-50 h-28'
                                            placeholder='Message*'
                                            name='usermsg'
                                            value={formData.usermsg}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button className='bg-transparent text-Black shadow-DarkShadow text-center font-HeadFont rounded-full border border-Black border-solid py-3 px-10 hover:border-transparent hover:bg-Black hover:text-White transition-all duration-700 ease-in-out text-lg' type='submit' name='submit'>Submit Enquiry</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Contact;

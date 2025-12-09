import React, { useRef, useState } from 'react';
import TitleHeader from '../components/TitleHeader';
import ContactExperience from '../components/ContactExperience';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = (formData.get('name') || '').toString().trim()
    const email = (formData.get('email') || '').toString().trim()
    const message = (formData.get('message') || '').toString().trim()

    // basic validation
    if (!name || !email || !message) {
      alert('Please fill in name, email and message.')
      return
    }

    setIsSubmitting(true)
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      form.reset()
    } catch (err) {
      console.error(err)
      alert('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id='contact' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader 
          title="Get in Touch"
          sub="📧 Contact Me"
        />

        <div className='grid-12-cols mt-16'>
          {/* Contact Form Left: Form */}
          <div className='xl:col-span-5'>
            <div className='flex-center card-border rounded-xl p-10'>
                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7' ref={formRef}>
                    <label htmlFor='name'>Name</label>
                    <input id='name' name='name' type='text' placeholder='Your name' className='mb-4' />

                    <label htmlFor='email'>Email</label>
                    <input id='email' name='email' type='email' placeholder='you@domain.com' className='mb-4' />

                    <label htmlFor='message'>Message</label>
                    <textarea id='message' name='message' rows={6} placeholder='How can I help?' className='mb-4' />

                    <button disabled={isSubmitting} type='submit'>
                        <div className='cta-button group'>
                            <div className='bg-circle' />
                            <p className='text'>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </p>
                            <div className='arrow-wrapper'>
                                <img src='/images/arrow-down.svg' alt='arrow' />
                            </div>
                        </div>
                        
                    </button>
                </form>
            </div>
          </div>

          {/* Right Side: Contact 3D experience */}
          <div className='xl:col-span-7 min-h-96'>
            <div className='w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden'>
                <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

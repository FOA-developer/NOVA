import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Reveal from '../components/ui/Reveal.jsx'
import Field from '../components/ui/form/Field.jsx'
import TextInput from '../components/ui/form/TextInput.jsx'
import Select from '../components/ui/form/Select.jsx'
import TextArea from '../components/ui/form/TextArea.jsx'
import SubmitButton from '../components/ui/form/SubmitButton.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { CONTACT_EMAIL } from '../data/socials.js'
import { openMailto } from '../utils/openMailto.js'

const WRAP = 'w-[90%] max-w-[1240px] mx-auto'

// Roles offered on this form. `?role=` maps the card's query value to the option label.
const ROLE_OPTIONS = ['Volunteer', 'Facilitate']
const ROLE_FROM_PARAM = { volunteer: 'Volunteer', facilitator: 'Facilitate' }

// Single delivery function so the sending method can be swapped later.
function submitJoinApplication({ name, email, role, expertise, about }) {
  openMailto({
    to: CONTACT_EMAIL,
    subject: `Join Nova: ${name} wants to ${role}`,
    fields: {
      Name: name,
      Email: email,
      Role: role,
      'Area of expertise': expertise,
      About: about,
    },
  })
}

export default function Join() {
  usePageTitle('Join Us')
  const [params] = useSearchParams()
  const initialRole = ROLE_FROM_PARAM[params.get('role')] || ''
  const [role, setRole] = useState(initialRole)
  const [submitted, setSubmitted] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    submitJoinApplication({
      name: data.get('name'),
      email: data.get('email'),
      role: data.get('role'),
      expertise: data.get('expertise'),
      about: data.get('about'),
    })
    setSubmitted(true)
  }

  return (
    <section className="bg-section pt-[clamp(120px,15vw,160px)] pb-20">
      <div className={WRAP}>
        <Reveal
          as="h1"
          className="text-[length:clamp(28px,4.4vw,48px)] font-bold text-center m-0"
        >
          Join Us
        </Reveal>
        <Reveal
          as="p"
          delay={150}
          className="w-[min(90%,620px)] text-[length:clamp(14px,1.3vw,17px)] font-medium text-black/70 mx-auto mt-4 mb-12 text-center [text-wrap:pretty]"
        >
          Tell us a little about yourself and how you'd like to help, and we'll be in touch.
        </Reveal>

        <Reveal
          dir="up"
          className="max-w-[640px] mx-auto bg-white rounded-3xl p-[clamp(1.5rem,3vw,2.5rem)] shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
        >
          <form onSubmit={submit} className="flex flex-col gap-4">
            <Field label="Full name">
              <TextInput required name="name" />
            </Field>
            <Field label="Email">
              <TextInput required type="email" name="email" />
            </Field>
            <Field label="I want to">
              <Select
                required
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Select how you'd like to help"
                options={ROLE_OPTIONS}
              />
            </Field>
            <Field label="Area of expertise">
              <TextInput required name="expertise" />
            </Field>
            <Field label="A brief about you">
              <TextArea required name="about" rows={5} />
            </Field>
            <SubmitButton>Send</SubmitButton>
            {submitted && (
              <p className="text-sm text-black/70 text-center m-0">
                Your email app should have opened. If nothing happened, email us directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-nova-purple font-medium break-all">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

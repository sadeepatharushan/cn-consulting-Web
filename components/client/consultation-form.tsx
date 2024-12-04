'use client'
import { createConsultation } from "@/actions/consultation-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { insertConsultationSchema } from "@/lib/zod-schemas"
import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import Image from "next/image"
import { useActionState } from "react"

export default function ConsultationForm() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [lastResult, action] = useActionState(createConsultation, undefined)

  const [form, fields] = useForm({
      lastResult,
      onValidate({ formData }) {
        return parseWithZod(formData, { schema: insertConsultationSchema })
      },
      shouldValidate: 'onBlur',
      shouldRevalidate: 'onInput',
  })
  return (
    <div id="Consultation" className="mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="">
        <Image
          src="/form1.jpg"
          alt="Consultation Image"
          width={400}
          height={400}
          className="rounded-lg w-full h-full"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-3">Book your FREE consultation with Certified Counsellors</h2>
        <p className="mb-5">
            We&apos;re here to support you on your study abroad journey and help you create an extraordinary future for yourself. Fill the form to schedule a free consultation session. Our counselors will get in touch with you soon.
        </p>
        <form id={form.id} onSubmit={form.onSubmit} action={action} className="space-y-4">
          <div>
            <Input 
                placeholder="Name"
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={fields.name.initialValue} 
                className="bg-white"
            />
            <p className="text-red-600">{fields.name.errors}</p>
          </div>
          <div>
            <Input 
                type="email" 
                placeholder="Email" 
                key={fields.email.key}
                name={fields.email.name}
                defaultValue={fields.email.initialValue} 
                className="bg-white"
            />
            <p className="text-red-600">{fields.email.errors}</p>
          </div>
          <div>
            <Input 
                placeholder="Mobile Number" 
                key={fields.phone.key}
                name={fields.phone.name}
                defaultValue={fields.phone.initialValue}
                className="bg-white" 
            />
            <p className="text-red-600">{fields.phone.errors}</p>
          </div>
          <div>
            <Select 
                key={fields.studyYear.key}
                name={fields.studyYear.name}
                defaultValue={fields.studyYear.initialValue}
                error={fields.studyYear.errors as unknown as string | undefined}
                onValidate={() => form.validate()}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Preferred Study Year" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
            </Select>
        </div>           
        <div>
            <Select 
                key={fields.studyIntake.key}
                name={fields.studyIntake.name}
                defaultValue={fields.studyIntake.initialValue} 
                error={fields.studyIntake.errors as unknown as string | undefined}
                onValidate={() => form.validate()}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Preferred Study Intake" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="intake1">Intake 1</SelectItem>
                    <SelectItem value="intake2">Intake 2</SelectItem>
                </SelectContent>
            </Select>
        </div>
          <Button className="w-full bg-[#002244] hover:bg-[#0a2351] text-white">Get Free Consultation</Button>
        </form>
      </div>
    </div>
  )
}


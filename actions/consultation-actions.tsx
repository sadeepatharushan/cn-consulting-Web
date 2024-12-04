'use server'

import { db } from "@/db"
import { consultations } from "@/db/schema"
import { insertConsultationSchema } from "@/lib/zod-schemas"
import { parseWithZod } from "@conform-to/zod"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function createConsultation(prevState: unknown, formData: FormData) {

    const submission = parseWithZod(formData, {
        schema: insertConsultationSchema
    })

    if (submission.status !== 'success') {
        return submission.reply()
    }

    try {
    
        await db.insert(consultations).values({
            name: submission.value.name,
            email: submission.value.email,
            phone: submission.value.phone,
            studyIntake: submission.value.studyIntake,
            studyYear: submission.value.studyYear
        });

        // revalidatePath("/")

        resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'visurasurajitha@gmail.com',
        subject: 'Hello World',
        html: '<p>new consultation added!</p>'
        });

        return submission.reply()

    } catch (error) {
        console.error("Error saving consultation:", error)
        // return {
        //     status: 'error',
        //     message: 'An unexpected error occurred while saving the free consultation. Please try again later.',
        // }
    }
}

export default async function deleteConsultation(id: number) {

    try {
        await db.delete(consultations).where(eq(consultations.id, id));
        revalidatePath("/dashboard/consultations")
    } catch (error) {
      console.error(error);
    }
}
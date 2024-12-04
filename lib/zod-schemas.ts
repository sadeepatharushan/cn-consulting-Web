import { blogs, consultations } from '@/db/schema';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
// import { Schema, z } from 'zod'; 

// export const consultationSchema = z.object({
//     // type: z.enum(['POOL', 'GAME', 'DRINK']),
//     name: z.string().min(2, 'Name is required'),
//     email: z.string().email('Invalid email address'),
//     phone: z.string().min(10, 'Phone number is required'),
//     studyYear: z.string().min(1, 'Please select a study year'),
//     studyIntake: z.string().min(1, 'Please select a study intake'),
//   })

//consultations
export const insertConsultationSchema = createInsertSchema(consultations, {
    name: (schema) => schema.name.min(4, "Name must be at least 4 characters").max(256, "Maximum length is 256 characters"),
    email: (schema) => schema.email.email("Invalid email address").min(1).max(256, "Maximum length is 256 characters"),
    phone: (schema) => schema.phone.min(1).length(10, "Invalid phone number"),
})

export const selectConsultationSchema = createSelectSchema(consultations)

export type insertConsultationSchemaType = typeof insertConsultationSchema._type

export type selectConsultationSchemaType = typeof selectConsultationSchema._type

//blogs
export const insertBlogSchema = createInsertSchema(blogs, {
    title: (schema) => schema.title.min(4, "Title must be at least 4 characters").max(256, "Maximum length is 256 characters"),
    content: (schema) => schema.content.min(1),
    image: (schema) => schema.image.min(1),
})

export const selectBlogSchema = createSelectSchema(blogs, {
    createdAt: (schema) => schema.createdAt.optional(),
    updatedAt: (schema) => schema.updatedAt.optional(),
})

export type insertBlogSchemaType = typeof insertBlogSchema._type

export type selectBlogSchemaType = typeof selectBlogSchema._type
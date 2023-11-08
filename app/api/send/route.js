import { EmailTemplate } from '../../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_447yDm4b_L77ME7NtfMfCEkkg6XCJg8dt");

export async function POST(request) {
  try {
    const {name,email,message}=await request.json()
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['1511ruben@gmail.com'],
      subject: 'Contact',
      react: EmailTemplate({name,email,message}),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
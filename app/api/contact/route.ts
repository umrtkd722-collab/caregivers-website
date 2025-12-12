import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      address, 
      city, 
      zipCode, 
      hearAboutUs, 
      selectedServices, 
      projectDetails 
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !projectDetails || !selectedServices || selectedServices.length === 0) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Check if email is configured
    const emailUser = process.env.EMAIL_USER || 'gomezhomeservice23@gmail.com';
    const emailPass = process.env.EMAIL_PASS;

    if (!emailPass) {
      // Log the submission (for development/testing)
      console.log('Quote Request Submission:', {
        name,
        email,
        phone,
        address,
        city,
        zipCode,
        hearAboutUs,
        selectedServices,
        projectDetails,
        timestamp: new Date().toISOString(),
      });
      
      // Return success even without email configured (for development)
      return NextResponse.json(
        { message: 'Form submitted successfully (email not configured)' },
        { status: 200 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Format services list
    const servicesList = selectedServices.map((service: string) => `• ${service}`).join('<br>');

    // Email content
    const mailOptions = {
      from: emailUser,
      to: 'gomezhomeservice23@gmail.com',
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
        ${city ? `<p><strong>City:</strong> ${city}</p>` : ''}
        ${zipCode ? `<p><strong>ZIP Code:</strong> ${zipCode}</p>` : ''}
        ${hearAboutUs ? `<p><strong>How did you hear about us:</strong> ${hearAboutUs}</p>` : ''}
        
        <h3>Services Requested</h3>
        <p>${servicesList}</p>
        
        <h3>Project Details</h3>
        <p>${projectDetails.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try calling us directly at 404-407-5719' },
      { status: 500 }
    );
  }
}


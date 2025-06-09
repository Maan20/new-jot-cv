import { NextResponse } from 'next/server';
import type { Resume } from 'lib/redux/types';

export async function POST(request: Request) {
    try {
        const resumeData: Resume = await request.json();

        // Here you can add your database logic to save the resume
        // For example, using Firebase, MongoDB, or any other database

        // For now, we'll just log the data
        console.log('Saving resume data:', resumeData);

        return NextResponse.json({
            success: true,
            message: 'Resume data saved successfully'
        });
    } catch (error) {
        console.error('Error saving resume:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to save resume data' },
            { status: 500 }
        );
    }
} 
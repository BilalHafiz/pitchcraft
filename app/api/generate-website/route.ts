import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { generateHTMLPage } from '@/lib/html-generator';
import { Pitch, Idea } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const { pitchId } = await request.json();

    if (!pitchId) {
      return NextResponse.json({ error: 'Pitch ID is required' }, { status: 400 });
    }

    const { data: pitchData, error: pitchError } = await supabase
      .from('pitches')
      .select(`
        *,
        ideas (
          idea_name,
          description,
          industry,
          tone,
          language
        )
      `)
      .eq('id', pitchId)
      .single();

    if (pitchError || !pitchData) {
      console.error('Pitch not found:', pitchError);
      return NextResponse.json({ error: 'Pitch not found' }, { status: 404 });
    }

    console.log('Pitch data:', JSON.stringify(pitchData, null, 2));

    const pitchWithIdeas = pitchData as Pitch & { ideas: Idea };
    const ideasData = pitchWithIdeas.ideas || {
      idea_name: pitchWithIdeas.startup_name || 'Startup',
      description: pitchWithIdeas.pitch || 'No description available',
      industry: 'Technology',
      tone: 'formal' as const,
      language: pitchWithIdeas.language || 'en' as const
    };

    console.log('Ideas data:', JSON.stringify(ideasData, null, 2));

    const pitchDataTyped = pitchData as Pitch;
    const htmlContent = generateHTMLPage(
      ideasData,
      {
        startup_name: pitchDataTyped.startup_name,
        tagline: pitchDataTyped.tagline,
        pitch: pitchDataTyped.pitch,
        problem: pitchDataTyped.problem,
        solution: pitchDataTyped.solution,
        target_audience: pitchDataTyped.target_audience,
        landing_copy: pitchDataTyped.landing_copy,
        color_palette: pitchDataTyped.color_palette,
        logo_concept: pitchDataTyped.logo_concept
      }
    );

    return new NextResponse(htmlContent, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Error generating website:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

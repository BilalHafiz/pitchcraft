import { IdeaFormData, GeminiResponse } from './types';

export function generateHTMLPage(formData: IdeaFormData, aiResponse: GeminiResponse): string {
  if (!formData) {
    formData = {
      idea_name: 'Startup',
      description: 'No description available',
      industry: 'Technology',
      tone: 'formal',
      language: 'en'
    };
  }
  
  const isUrdu = formData.language === 'ur';
  
  const safeResponse = {
    startup_name: aiResponse?.startup_name || 'Your Startup',
    tagline: aiResponse?.tagline || 'Innovative Solutions',
    pitch: aiResponse?.pitch || 'No pitch content available',
    problem: aiResponse?.problem || 'No problem description available',
    solution: aiResponse?.solution || 'No solution description available',
    target_audience: aiResponse?.target_audience || 'No target audience specified',
    landing_copy: aiResponse?.landing_copy || 'Get started with us today!',
    color_palette: aiResponse?.color_palette,
    logo_concept: aiResponse?.logo_concept
  };
  
  const html = `
<!DOCTYPE html>
<html lang="${formData.language === 'ur' ? 'ur' : 'en'}" dir="${formData.language === 'ur' ? 'rtl' : 'ltr'}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${safeResponse.startup_name} - ${safeResponse.tagline}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            text-align: center;
            color: white;
            margin-bottom: 40px;
        }
        
        .logo {
            width: 80px;
            height: 80px;
            background: white;
            border-radius: 50%;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            font-weight: bold;
            color: #667eea;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .startup-name {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .tagline {
            font-size: 1.5rem;
            opacity: 0.9;
            font-weight: 300;
        }
        
        .content {
            background: white;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        
        .section {
            margin-bottom: 40px;
        }
        
        .section-title {
            font-size: 2rem;
            color: #667eea;
            margin-bottom: 20px;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
        }
        
        .problem-solution {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 30px;
        }
        
        .problem, .solution {
            padding: 25px;
            border-radius: 15px;
            border-left: 5px solid;
        }
        
        .problem {
            background: #fef2f2;
            border-left-color: #ef4444;
        }
        
        .solution {
            background: #f0fdf4;
            border-left-color: #22c55e;
        }
        
        .problem h3, .solution h3 {
            font-size: 1.3rem;
            margin-bottom: 15px;
            color: #374151;
        }
        
        .target-audience {
            background: #f8fafc;
            padding: 25px;
            border-radius: 15px;
            border-left: 5px solid #3b82f6;
        }
        
        .pitch-content {
            background: #fefce8;
            padding: 30px;
            border-radius: 15px;
            border-left: 5px solid #eab308;
            font-size: 1.1rem;
            line-height: 1.8;
        }
        
        .landing-copy {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            font-size: 1.2rem;
            line-height: 1.8;
        }
        
        .cta-button {
            display: inline-block;
            background: white;
            color: #667eea;
            padding: 15px 30px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 20px;
            transition: transform 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
        }
        
        .footer {
            text-align: center;
            color: white;
            opacity: 0.8;
            margin-top: 40px;
        }
        
        @media (max-width: 768px) {
            .startup-name {
                font-size: 2rem;
            }
            
            .tagline {
                font-size: 1.2rem;
            }
            
            .problem-solution {
                grid-template-columns: 1fr;
            }
            
            .content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="logo">${safeResponse.startup_name.charAt(0).toUpperCase()}</div>
            <h1 class="startup-name">${safeResponse.startup_name}</h1>
            <p class="tagline">${safeResponse.tagline}</p>
        </header>
        
        <div class="content">
            <section class="section">
                <h2 class="section-title">${isUrdu ? 'مسئلہ اور حل' : 'Problem & Solution'}</h2>
                <div class="problem-solution">
                    <div class="problem">
                        <h3>${isUrdu ? 'مسئلہ' : 'The Problem'}</h3>
                        <p>${safeResponse.problem}</p>
                    </div>
                    <div class="solution">
                        <h3>${isUrdu ? 'حل' : 'Our Solution'}</h3>
                        <p>${safeResponse.solution}</p>
                    </div>
                </div>
            </section>
            
            <section class="section">
                <h2 class="section-title">${isUrdu ? 'ہدف شدہ سامعین' : 'Target Audience'}</h2>
                <div class="target-audience">
                    <p>${safeResponse.target_audience}</p>
                </div>
            </section>
            
            <section class="section">
                <h2 class="section-title">${isUrdu ? 'ہمارا پیچ' : 'Our Pitch'}</h2>
                <div class="pitch-content">
                    <p>${safeResponse.pitch}</p>
                </div>
            </section>
            
            <section class="section">
                <div class="landing-copy">
                    <p>${safeResponse.landing_copy}</p>
                    <a href="#" class="cta-button">${isUrdu ? 'شروع کریں' : 'Get Started'}</a>
                </div>
            </section>
        </div>
        
        <footer class="footer">
            <p>${isUrdu ? 'PitchCraft کے ذریعے بنایا گیا' : 'Created with PitchCraft'}</p>
        </footer>
    </div>
</body>
</html>`;

  return html;
}

const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

module.exports = async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, conversation_history = [] } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  
  try {
    const systemPrompt = `You are a helpful AI receptionist for RGV AI PRO, an AI-powered business communication solutions company serving the Rio Grande Valley, Texas.

Your role:
- Answer questions about AI answering services, CRM tools, appointment scheduling, and pricing
- Help potential customers understand how AI can help their business never miss a call
- Be friendly, professional, and concise (keep responses under 3-4 sentences when possible)
- If asked about pricing, mention: Starter ($189/month + tax), Professional ($439/month + tax), Custom plans available
- Always offer to connect them with the team, schedule a demo, or have someone call them
- Company phone: 956 400 5242
- Company email: hello@rgvaipro.com
- Services: AI Answering Service, AI Receptionist, CRM for Small Business, Lead Management, Appointment Scheduling

Key talking points:
- 24/7 availability
- Never miss a call
- Captures leads automatically
- Works in English and Spanish
- Integrates with Google Calendar, Airtable, and more

If someone asks about voicemail problems, mention how voicemail is like a "closed sign" and explain the cost of missed calls.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversation_history.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: message }
    ];
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Cost-effective option
      messages: messages,
      temperature: 0.7,
      max_tokens: 300,
      stream: false
    });
    
    const aiResponse = completion.choices[0].message.content;
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    res.json({ 
      response: aiResponse
    });
    
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).json({ 
      response: "AI chat messenger available for your website- please call 956-450-8110 for more details. Thanks!" 
    });
  }
}

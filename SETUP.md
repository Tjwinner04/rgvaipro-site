# OpenAI Chat Widget Setup for Vercel

## Setup Instructions

### 1. Get Your OpenAI API Key
1. Go to https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)

### 2. Deploy to Vercel
1. Push your code to GitHub (or your preferred Git provider)
2. Go to https://vercel.com
3. Import your repository
4. Vercel will automatically detect it's a Node.js project

### 3. Add Environment Variable
1. In your Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add a new variable:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key (the `sk-...` key you copied)
3. Make sure it's enabled for **Production**, **Preview**, and **Development**
4. Click **Save**

### 4. Redeploy
After adding the environment variable, you need to redeploy:
- Go to **Deployments** tab
- Click the **⋯** menu on the latest deployment
- Click **Redeploy**

Or simply push a new commit to trigger a new deployment.

## Testing

1. Visit your deployed site
2. Click "Try Chat Demo" button
3. Type a message and send it
4. You should see a typing indicator, then an AI response

## Cost Considerations

- Using `gpt-4o-mini` model (cost-effective)
- Estimated cost: ~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens
- For typical chat conversations, this is very affordable (pennies per conversation)

## Troubleshooting

**Chat not working?**
- Check that `OPENAI_API_KEY` is set in Vercel environment variables
- Check browser console for errors
- Verify the API endpoint is accessible: `https://your-domain.vercel.app/api/chat`

**Getting errors?**
- Make sure you've redeployed after adding the environment variable
- Check Vercel function logs in the dashboard
- Verify your OpenAI API key is valid and has credits

## Local Development

To test locally:
1. Install dependencies: `npm install`
2. Create `.env` file with: `OPENAI_API_KEY=sk-your-key-here`
3. Run: `vercel dev` (requires Vercel CLI: `npm i -g vercel`)

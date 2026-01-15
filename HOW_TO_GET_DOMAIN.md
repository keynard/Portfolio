# How to Get a Domain for Your Portfolio

## Step 1: Choose a Domain Name

**Tips for choosing:**
- Use your name: `johnamacna.com` or `johnkeynard.com`
- Keep it short and memorable
- Avoid numbers and hyphens if possible
- Use `.com` if available (most professional)
- Alternatives: `.dev`, `.io`, `.me`, `.tech` (for developers)

**Examples:**
- `johnkeynard.com`
- `johnamacna.dev`
- `keynardportfolio.com`

## Step 2: Check Domain Availability

Visit these sites to check if your domain is available:
- **Namecheap**: https://www.namecheap.com
- **GoDaddy**: https://www.godaddy.com
- **Google Domains**: https://domains.google
- **Cloudflare**: https://www.cloudflare.com/products/registrar

## Step 3: Purchase Your Domain

### Recommended Domain Registrars:

1. **Namecheap** (Best Value)
   - Price: ~$10-15/year for .com
   - Free privacy protection
   - Easy to use
   - Good customer support

2. **Cloudflare** (Cheapest)
   - Price: At-cost pricing (~$8-10/year)
   - No markup
   - Free privacy protection
   - Best for developers

3. **Google Domains** (Simple)
   - Price: ~$12/year
   - Clean interface
   - Good integration with Google services

4. **GoDaddy** (Popular but more expensive)
   - Price: ~$12-20/year
   - Lots of upsells
   - Good for beginners

### How to Purchase:
1. Go to the registrar website
2. Search for your desired domain name
3. Add to cart
4. Complete checkout (usually 1-2 years minimum)
5. You'll receive confirmation email

## Step 4: Choose a Hosting Provider

You need hosting to make your website live. Options:

### Free Hosting (Good for Starters):

1. **Vercel** (Recommended for React/Portfolio)
   - Free tier available
   - Easy deployment
   - Automatic HTTPS
   - Great for React/Vite projects
   - URL: https://vercel.com

2. **Netlify**
   - Free tier available
   - Easy drag-and-drop or Git deployment
   - Automatic HTTPS
   - URL: https://www.netlify.com

3. **GitHub Pages**
   - Free for public repos
   - Good for portfolios
   - URL: https://pages.github.com

### Paid Hosting (More Control):

1. **Vercel Pro** - $20/month
2. **Netlify Pro** - $19/month
3. **Cloudflare Pages** - Free tier available

## Step 5: Connect Domain to Hosting

### Option A: Using Vercel (Recommended)

1. **Deploy your portfolio:**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Add domain in Vercel:**
   - Go to your project in Vercel dashboard
   - Settings → Domains
   - Add your domain: `yourdomain.com`
   - Vercel will show you DNS records to add

3. **Update DNS at your registrar:**
   - Go to your domain registrar (Namecheap, etc.)
   - Find DNS settings
   - Add the DNS records Vercel provided:
     - Type: `A` or `CNAME`
     - Value: (provided by Vercel)

### Option B: Using Netlify

1. **Deploy your portfolio:**
   - Drag and drop your `dist` folder (after `npm run build`)
   - Or connect your GitHub repo

2. **Add custom domain:**
   - Site settings → Domain management
   - Add custom domain
   - Follow Netlify's DNS instructions

## Step 6: Build and Deploy Your Portfolio

Before connecting domain, deploy your site:

```bash
# Build your portfolio
npm run build

# This creates a 'dist' folder with your production files
```

Then deploy to Vercel/Netlify.

## Quick Start Guide (Vercel)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Your site will be live at: `your-project.vercel.app`

4. **Add custom domain:**
   - Vercel dashboard → Your project → Settings → Domains
   - Add your domain
   - Update DNS at your registrar

## DNS Configuration

When you add your domain, you'll need to add DNS records:

**For Vercel:**
- Type: `A` or `CNAME`
- Name: `@` (or leave blank for root domain)
- Value: Provided by Vercel

**For Netlify:**
- Type: `CNAME`
- Name: `www`
- Value: `your-site.netlify.app`

## Complete Setup Checklist

- [ ] Choose and purchase domain name
- [ ] Build your portfolio: `npm run build`
- [ ] Sign up for hosting (Vercel/Netlify)
- [ ] Deploy your portfolio
- [ ] Add custom domain in hosting dashboard
- [ ] Update DNS records at domain registrar
- [ ] Wait 24-48 hours for DNS propagation
- [ ] Test your domain: `https://yourdomain.com`

## Cost Breakdown

**Minimum Cost:**
- Domain: ~$10-15/year
- Hosting: FREE (Vercel/Netlify free tier)
- **Total: ~$10-15/year**

**With Privacy Protection:**
- Domain: ~$10-15/year
- Privacy: FREE (included with most registrars)
- Hosting: FREE
- **Total: ~$10-15/year**

## Recommended Setup for Your Portfolio

1. **Domain:** Namecheap or Cloudflare (~$10/year)
2. **Hosting:** Vercel (FREE)
3. **Total Cost:** ~$10/year

## Need Help?

- **Domain Issues:** Contact your registrar's support
- **Deployment Issues:** Check Vercel/Netlify documentation
- **DNS Issues:** Usually resolves in 24-48 hours

## Pro Tips

1. **Buy for multiple years** - Often cheaper and avoids renewal hassles
2. **Enable auto-renewal** - Prevents losing your domain
3. **Use privacy protection** - Hides your personal info from WHOIS
4. **Keep it simple** - Short, memorable domains work best
5. **Check social media** - Make sure the name is available on Twitter/LinkedIn too


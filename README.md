# Alumise Website

This project is a static Next.js application built for Alumise, Edinburgh's premier commercial glazing specialists.

## Tech Stack
- Next.js (App Router)
- Tailwind CSS v4
- Formspree for Contact Forms

## Deployment
Deployed on Vercel. 
**Live URL:** https://alumise.vercel.app

### DNS Records Required for Custom Domain (www.alumise.co.uk)
To link the custom domain, add the following records to your DNS provider:
- **Type:** A
  - **Name:** @ (or leave blank)
  - **Value:** 76.76.21.21
- **Type:** CNAME
  - **Name:** www
  - **Value:** cname.vercel-dns.com.
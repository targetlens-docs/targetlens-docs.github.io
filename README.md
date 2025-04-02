# TargetLens Documentation Deployment Guide

This guide will walk you through the process of deploying the TargetLens documentation to GitHub Pages.

## Prerequisites

- A GitHub account
- Basic knowledge of Git and GitHub

## Deployment Steps

1. **Create a new GitHub repository**
   - Go to [GitHub](https://github.com) and sign in to your account
   - Click on the "+" icon in the top right corner and select "New repository"
   - Name your repository (e.g., `targetlens-docs`)
   - Make the repository public
   - Click "Create repository"

2. **Upload the documentation files**
   - Extract the `targetlens-docs-new.zip` file to your local machine
   - Navigate to your newly created GitHub repository
   - Click on "uploading an existing file" link
   - Drag and drop all the files and folders from the extracted zip file
   - Add a commit message (e.g., "Initial documentation upload")
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to the repository settings (click on "Settings" tab)
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - GitHub will provide you with a URL where your documentation is published (e.g., `https://yourusername.github.io/targetlens-docs/`)

4. **Verify the deployment**
   - Visit the provided URL to ensure your documentation is properly displayed
   - Check that all pages are accessible and styled correctly
   - Test the navigation links to make sure they work as expected

## Customizing Your Documentation

### Custom Domain (Optional)

If you want to use a custom domain for your documentation (e.g., `docs.targetlens.co`):

1. Go to your repository settings
2. Scroll down to the "GitHub Pages" section
3. Under "Custom domain", enter your domain name
4. Click "Save"
5. Configure your DNS settings to point to GitHub Pages:
   - Create a CNAME record for your subdomain (e.g., `docs`) pointing to `yourusername.github.io`
   - Or, if using an apex domain, create A records pointing to GitHub Pages IP addresses

### Updating Documentation

To update your documentation in the future:

1. Clone the repository to your local machine
2. Make the necessary changes to the HTML, CSS, or other files
3. Commit and push your changes to GitHub
4. GitHub Pages will automatically update your site

## File Structure

```
targetlens-docs/
├── css/
│   └── styles.css
├── img/
│   └── (image files)
├── index.html
├── getting-started.html
├── audience-discovery.html
├── pricing.html
├── contact.html
└── targetlens-capabilities.md
```

## Support

If you need any assistance with the deployment or have questions about the documentation, please contact us at info@targetlens.co.

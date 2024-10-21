This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


##Changes done to the project from 19/10/2024

-   Component changes:
        RTFAText: added type fixed errors
-   Pages:
        AboutUs: remove unsed code and fixed import errors
-   3D Asset:
        No changes.


##Changes done to the project from 20/10/2024

-   RTFAPointer: whe add types to the component and we remove unused code
-   MainBG: we remove the RTFAPointer component, we need to make the cursor mesh to we can cast shadow to the elements
-   Logo: we fix types on this component
-   Logo3D: fixed types
-   RTFACLogo3D: fixed types, ignore some errors from types
-   LogoBG: fixed types
-   WebGLImage: fixed types and removed old code


##Chages done to the project from 21/10/2024

-   HorizontalTitle: remove type ignore from the compoent
-   GradientBG: remove type ignore and added interface
-   Triangle: Fixed types cleaned code
-   CornerNav: fixed types added types cleaned code

##Last changes list components and pages

    - RTFAText
    - RTFAPointer
    - AboutUs(page)
    - MainBG
    - Logo
    - Logo3D
    - RTFACLogo3D
    - LogoBG
    - WebGLImage
    - HorizontalTitle
    - GradientBG
    - Triangle
    - CornerNav

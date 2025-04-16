
import Routes from '@/lib/routes'
import { getBlogs, } from '@/lib/sanity/utils'
import { MetadataRoute } from 'next';


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const blogs = await getBlogs()


    const sitemap: MetadataRoute.Sitemap = [
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL!}${Routes.about}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}${Routes.blog}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}${Routes.contact}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}${Routes.term}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}${Routes.faq}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url:`${process.env.NEXT_PUBLIC_SITE_URL}${Routes.disclaimer}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
                },
                {
                    url:`${process.env.NEXT_PUBLIC_SITE_URL}${Routes.privacyPolicy}`,
                    lastModified: new Date(),
                    changeFrequency: "monthly",
                    priority: 0.8,
                                },   


    {
        url:`${process.env.NEXT_PUBLIC_SITE_URL}${Routes.Appointment}`,
        lastModified:new Date(),
        changeFrequency: "monthly",
        priority:0.8,
    },

    {
        url:`${process.env.NEXT_PUBLIC_SITE_URL}${Routes.Solution.AntivirusSoftware}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
                    },

                    {
                        url:`${process.env.NEXT_PUBLIC_SITE_URL}${Routes.Solution.CRMsystem}`,
                        lastModified: new Date(),
                        changeFrequency: "monthly",
                        priority: 0.8,
                                    },

                                    {
                                        url:`${process.env.NEXT_PUBLIC_SITE_URL}${Routes.Solution.DriverUpdater}`,
                                        lastModified: new Date(),
                                        changeFrequency: "monthly",
                                        priority: 0.8,
                                                    },
                                                    
                    {
                        url:`${process.env.NEXT_PUBLIC_SITE_URL}${Routes.Solution.FireWallProtection}`,
                        lastModified: new Date(),
                        changeFrequency: "monthly",
                        priority: 0.8,
                                    },
                                    
                    {
                        url:`${process.env.NEXT_PUBLIC_SITE_URL}${Routes.Solution.InstoreItHelpDesk}`,
                        lastModified: new Date(),
                        changeFrequency: "monthly",
                        priority: 0.8,
                                    },
                                    
                    {
                        url:`${process.env.NEXT_PUBLIC_SITE_URL}${Routes.Solution.Network}`,
                        lastModified: new Date(),
                        changeFrequency: "monthly",
                        priority: 0.8,
                                    },
                                    
                    {
                        url:`${process.env.NEXT_PUBLIC_SITE_URL}${Routes.Solution.Office365Email}`,
                        lastModified: new Date(),
                        changeFrequency: "monthly",
                        priority: 0.8,
                                    },
                                    
                    {
                        url:`${process.env.NEXT_PUBLIC_SITE_URL}${Routes.Solution.POSsystem}`,
                        lastModified: new Date(),
                        changeFrequency: "monthly",
                        priority: 0.8,
                                    },
                                    
                    {
                        url:`${process.env.NEXT_PUBLIC_SITE_URL}${Routes.Solution.Recovery}`,
                        lastModified: new Date(),
                        changeFrequency: "monthly",
                        priority: 0.8,
                                    },
                                    
                    {
                        url:`${process.env.NEXT_PUBLIC_SITE_URL}${Routes.Solution.SetUpTheCompanyNetwork}`,
                        lastModified: new Date(),
                        changeFrequency: "monthly",
                        priority: 0.8,
                                    },
                                    

    ]





    blogs.forEach((blogs) => {
        sitemap.push({
            url: `${process.env.NEXT_PUBLIC_SITE_URL!}${Routes.  blog_post(blogs.slug)}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        })
    })






    

 

    return sitemap;
}
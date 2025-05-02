export type ProjectCategory = "de" | "da" | "wd"

export interface Project {
  title: string
  description: string
  image: string
  category: ProjectCategory
  technologies: string[]
  sourceUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: "AWS-ETL Pipeline",
    description: "Sales Data ETL Pipeline with AWS Glue and Redshift.",
    image: "../../assets/AWS-ETL.png",
    category: "de",
    technologies: ["AWS", "Python", "Spark"],
    sourceUrl: "https://github.com/prathamesh2525/AWS-ETL",
  },
  {
    title: "ETL Pipeline for News Trend Analysis",
    description:
      "Analyzes news articles from multiple sources, processes the text with Apache Spark, and identifies the most trending topics",
    image: "../../assets/big-data-project (1).jpg",
    category: "de",
    technologies: ["Python", "Spark", "HDFS", "PySpark", "HiveQL(SQL)"],
    sourceUrl:
      "https://github.com/prathamesh2525/BigData-pipeline-news-data-analysis",
  },
  {
    title: "Credit Score Prediction",
    description:
      "Develop a machine learning model that can accurately predict credit scores. This model can then be used by lenders to make more informed decisions about loan applications.",
    image:
      "../../assets/Blog_P4B_Can-credit-enquires-affect-your-credit-score.jpg",
    category: "da",
    technologies: ["Python", "Machine Learning", "Flask", "Tableau"],
    sourceUrl: "https://github.com/prathamesh2525/Credit_Score_Prediction",
    liveUrl:
      "https://public.tableau.com/app/profile/prathamesh.madniwale/viz/CreditScorePrediction_17392684816030/Dashboard1",
  },
  {
    title:
      "Business Acquisition Analysis for Maven Movies – A MySQL Data Exploration Project",
    description:
      "Performed advanced SQL analysis on Maven Movies data to assess inventory, customer value, and brand strength, supporting strategic acquisition decisions.",
    image: "../../assets/mysql-data-analysis.png",
    category: "da",
    technologies: ["MySQL"],
    sourceUrl: "https://mavenanalytics.io/project/31648",
  },
  {
    title: "Full Stack App for course selling website (Admin)",
    description:
      "Full stack development of course selling platform with admin dashboard.",
    image:
      "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "wd",
    technologies: [
      "ReactJS",
      "TailwindCSS",
      "Recoil",
      "MongoDB",
      "NodeJS",
      "ExpressJS",
    ],
    sourceUrl:
      "https://github.com/prathamesh2525/full-stack-apps/tree/main/Course-admin-dashboard",
  },
  {
    title: "Full Stack Medium Clone",
    description: "A modern redesign of popular blog application (Medium)",
    image:
      "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "wd",
    technologies: [
      "React",
      "Cloudflare workers",
      "Zod",
      "Typescript",
      "Prisma",
      "Postgres",
    ],
    liveUrl: "https://github.com/prathamesh2525/medium_",
  },
]

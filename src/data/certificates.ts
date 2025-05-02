export interface Certificate {
  title: string
  issuer: string
  date: string
  description: string
  url?: string
}

export const certificates: Certificate[] = [
  {
    title: "PG-Diploma in Big Data Analytics",
    issuer: "CDAC, Pune",
    date: "Feb 2025",
    description:
      "A comprehensive program covering data analytics, machine learning, big data tools (Hadoop, Spark), and programming with Python, R, and SQL.",
    url: "https://drive.google.com/file/d/1bmjEEFUbGBV9vbckwy1U3u4k7IOe7b3r/view?usp=sharing",
  },
]

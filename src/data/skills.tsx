import React from "react"
import {
  Database,
  LineChart,
  Binary,
  Code,
  Cloud,
  Brain,
  BarChart,
} from "lucide-react"

export interface Skill {
  name: string
  icon: React.ReactNode
  proficiency: number
  description: string
}

export const skills: Skill[] = [
  {
    name: "Data Engineering",
    icon: <Database size={36} />,
    proficiency: 85,
    description: "ETL, Data Pipelines, Apache Spark, Airflow, dbt",
  },
  {
    name: "Data Analysis",
    icon: <LineChart size={36} />,
    proficiency: 85,
    description: "SQL, Python, Pandas, NumPy, Statistical Analysis",
  },
  {
    name: "Big Data Technologies",
    icon: <Binary size={36} />,
    proficiency: 80,
    description: "Hadoop, Spark, Kafka, Data Lakes, Data Warehousing",
  },
  {
    name: "Cloud Platforms",
    icon: <Cloud size={36} />,
    proficiency: 20,
    description: "AWS (Redshift, S3), GCP (BigQuery), Snowflake",
  },
  {
    name: "Programming",
    icon: <Code size={36} />,
    proficiency: 80,
    description: "Python, SQL, Java, Shell Scripting",
  },
  {
    name: "Data Visualization",
    icon: <BarChart size={36} />,
    proficiency: 50,
    description: "Tableau, Power BI, Matplotlib",
  },
  {
    name: "Machine Learning",
    icon: <Brain size={36} />,
    proficiency: 70,
    description: "Scikit-learn, TensorFlow, Feature Engineering",
  },
]

import React from "react";
import { ExternalLink } from "lucide-react";
export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Animated-Story-Video-Generator",
      description: "A creative AI project that generates full multimedia stories using text prompts — combining language, image, audio, and video generation through Google's powerful Generative AI APIs.",
      link: "https://github.com/SaiRaviCharan/Animated-Story-Video-Generator",
      technologies: ["Google AI Studio", "Google Imagen API", "Google Cloud Console","Python"],
    },
    {
      id: 2,
      title: " LLM Fine-Tuning(5B)",
      description:
        "A project that fine-tunes a 5B parameter LLM using Hugging Face's PEFT library, enabling efficient training and deployment of large language models.",
      link: "https://github.com/SaiRaviCharan/Finetuning-on-5b-parameters-on-Custom_data_set-Microsoft-phi-",
      technologies: [ "LLM", "Phi-2", "LoRA", "peft", "Transformers", "Datasets", "Accelerate", "GPU", "A100", "PEFT" 
],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS.",
      link: "https://example.com",
      technologies: ["React", "Tailwind CSS", "Responsive Design"],
    },
    {
      id: 4,
      title: "AI Room Booking Chatbot",
      description: "The AI Room Booking Chatbot leverages IBM Watson Assistant for natural language conversations and IBM Cloud Functions to automate booking confirmation emails via Gmail. This fully serverless solution ensures secure, seamless communication without the need for backend infrastructure.",
      link: "https://example.com",
      technologies: ["Watson", "Functions", "Python", "Gmail", "SMTP", "Webhooks" 
],
    },
     {
      id: 5,
      title: "ML models",
      description:
        "A collection of various machine learning models implemented in Python includes deployment files and scripts for age and gender detection models using OpenCV’s face detector and deep learning frameworks.",
      link: "https://github.com/SaiRaviCharan/MACHINE_LEARNING-_PROJECTS",
      technologies: [
    "OpenCV", 
    "Deep Learning",  
    "Python", 
    "Computer Vision", 
    "Face Detection", 
    "Model Deployment",  
    "TensorFlow (for .pb files)", 
    "DNN Module"
      ],
    },
     {
      id: 6,
      title: "Image Processing with Stable Diffusion",
      description:
        "Developed an image processing pipeline using the Stable Diffusion model for high-quality image generation and manipulation. Leveraged the power of a local GPU to accelerate both training and inference, ensuring fast, efficient results.",
      link: "https://github.com/SaiRaviCharan/Stable-diffusion-model-images",
      technologies: [
        "Image Processing", 
        "Prompt Engineering",
        "Model Fine-tuning",
        "GPU Acceleration",
        "Computer Vision",
        "Hugging Face",
        "Transformers",
        "CUDA",
        "Denoising" 
      ]
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16 ">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            A showcase of all projects that I have developed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-indigo-500 transition-all duration-200 p-5"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-4 mb-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-all duration-200"
              >
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

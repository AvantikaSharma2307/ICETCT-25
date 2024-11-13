import React, { useState } from 'react'
import Card from "../Components/Card.jsx"
import Button from '../Components/Button.jsx'
import CardHeader from '../Components/CardHeader.jsx'
import CardContent from '../Components/CardContent.jsx'
import CardTitle from '../Components/CardTitle'


export default function CallForPapers() {
  const [expandedTracks, setExpandedTracks] = useState([])

  const toggleTrack = (trackIndex) => {
    setExpandedTracks(prev =>
      prev.includes(trackIndex)
        ? prev.filter(i => i !== trackIndex)
        : [...prev, trackIndex]
    )
  }

  const tracks = [
    {
      title: "Artificial Intelligence and Machine Learning",
      topics: [
        "Deep Learning and Neural Networks",
        "Reinforcement Learning",
        "AI in Healthcare",
        "Transfer Learning",
        "Machine Learning for Autonomous Systems",
        "Explainable AI",
        "AI for Natural Language Processing",
        "Ethical AI and Fairness",
        "AI in Robotics",
        "AI for Edge and Cloud Computing"
      ]
    },
    {
      title: "Data Science and Big Data Analytics",
      topics: [
        "Predictive Modeling",
        "Big Data Frameworks and Platforms (Hadoop, Spark)",
        "Data Visualization Techniques",
        "Data Mining and Knowledge Discovery",
        "Big Data in Healthcare",
        "Real-time Data Processing",
        "Sentiment Analysis and Opinion Mining",
        "Data Cleaning and Preprocessing",
        "Data Privacy and Security in Big Data",
        "Machine Learning on Large-scale Data"
      ]
    },
    {
      title: "Internet of Things (IoT) and Smart Systems",
      topics: [
        "IoT Architectures and Frameworks",
        "Smart Cities and Infrastructure",
        "Edge Computing and IoT",
        "Sensor Networks and Data Management",
        "IoT for Healthcare and Wearables",
        "Industrial IoT Applications",
        "Security in IoT Networks",
        "AI in IoT Systems",
        "Smart Agriculture and Environment Monitoring",
        "Connected Vehicles and Autonomous Systems"
      ]
    },
    {
      title: "Cybersecurity and Cryptography",
      topics: [
        "Cryptography and Encryption Techniques",
        "Intrusion Detection and Prevention Systems",
        "AI and Machine Learning for Cybersecurity",
        "Blockchain and Distributed Ledger Technologies",
        "Security in Cloud Computing",
        "Cybersecurity in IoT Systems",
        "Threat Modeling and Risk Analysis",
        "Post-Quantum Cryptography",
        "Secure Software Development Lifecycle (SSDLC)",
        "Cyber-Physical System Security"
      ]
    },
    {
      title: "Natural Language Processing (NLP) and Speech Recognition",
      topics: [
        "Language Models and Transformers",
        "Machine Translation",
        "Text Summarization and Sentiment Analysis",
        "Speech Recognition and Synthesis",
        "Information Retrieval and Extraction",
        "AI in Conversational Agents and Chatbots",
        "Multimodal Language Processing",
        "Low-Resource Language Processing",
        "NLP for Healthcare and Social Media",
        "Ethics in NLP"
      ]
    },
    {
      title: "Computer Vision and Image Processing",
      topics: [
        "Image Classification and Segmentation",
        "Object Detection and Tracking",
        "Facial Recognition Systems",
        "Deep Learning for Computer Vision",
        "3D Vision and Reconstruction",
        "Image and Video Enhancement",
        "Medical Image Processing",
        "AI in Autonomous Vehicles",
        "Augmented Reality and Virtual Reality",
        "Scene Understanding and Semantic Segmentation"
      ]
    },
    {
      title: "Interdisciplinary Research",
      topics: [
        "AI in Healthcare and Bioinformatics",
        "Computational Social Sciences",
        "AI in Education and E-learning",
        "AI in Finance and Fintech Innovations",
        "Computational Techniques in Environmental Science",
        "AI for Drug Discovery and Development",
        "Computational Models in Psychology and Cognitive Science",
        "AI in Art, Music, and Creative Industries",
        "AI and Ethics in Interdisciplinary Contexts",
        "AI in Legal Tech and Governance"
      ]
    }
  ]

  return (
    <div className=" mx-auto px-4 py-8 bg-blue-50">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Call for Papers</h1>
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        International Conference on Emerging Trends in Computational Techniques (ICETCT-2025)
      </h2>
      <Card className="mb-8 bg-white border border-gray-200 rounded-lg shadow">
        <CardHeader className="px-6 py-4 border-b border-gray-200">
          <CardTitle className="text-xl font-semibold text-gray-800 ">Conference Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            The International Conference on Emerging Trends in Computational Techniques (ICETCT-2025) invites
            researchers, scholars, industry professionals, and practitioners from across the globe to submit
            their original and unpublished research papers. The conference will focus on advancements in
            computational techniques with a particular emphasis on artificial intelligence, machine learning,
            and other cutting-edge technologies. Accepted papers will be included in the Scopus Indexed
            conference proceedings (Under Communication).
          </p>
        </CardContent>
      </Card>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Conference Tracks</h3>
      <div className="space-y-4">
        {tracks.map((track, index) => (
          <Card key={index} className="bg-white border border-gray-200 rounded-lg shadow">
            <CardHeader className="px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl font-semibold text-gray-800 ">Track {index + 1}: {track.title}</CardTitle>
                <Button
                  onClick={() => toggleTrack(index)}
                  aria-label={expandedTracks.includes(index) ? "Collapse track" : "Expand track"}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                >
                  {expandedTracks.includes(index) ? "▲" : "▼"}
                </Button>
              </div>
            </CardHeader>
            {expandedTracks.includes(index) && (
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  {track.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-gray-600">{topic}</li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
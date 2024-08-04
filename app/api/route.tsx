import { NextResponse } from 'next/server';

const stories = [
    {
        "id": 1,
        "image": "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
        "text": "Story 1"
    },
    {
        "id": 2,
        "image": "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        "text": "Story 2"
    },
    {
        "id": 3,
        "image": "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
        "text": "Story 3"
    },
    {
        "id": 4,
        "image": "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649",
        "text": "Story 4"
    },
    {
        "id": 5,
        "image": "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        "text": "Story 5"
    },
    {
        "id": 6,
        "image": "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
        "text": "Story 6"
    },
    {
        "id": 7,
        "image": "https://pixlr.com/images/index/ai-image-generator-three.webp",
        "text": "Story 7"
    },
    {
        "id": 8,
        "image": "https://tinypng.com/images/social/website.jpg",
        "text": "Story 8"
    },
    {
        "id": 9,
        "image": "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_640.jpg",
        "text": "Story 9"
    },
    {
        "id": 10,
        "image": "https://imgv3.fotor.com/images/cover-photo-image/AI-illustration-of-a-dragon-by-Fotor-AI-text-to-image-generator.jpg",
        "text": "Story 10"
    }
];

export const GET = async () => {
    return NextResponse.json(stories, { status: 200 })
}

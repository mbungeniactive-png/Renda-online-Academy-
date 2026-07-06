/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  content: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  excerpt: string;
  imageUrl: string;
  content: string[]; // split in sections for rich presentation
}

export interface StudentProgress {
  completedLessons: string[]; // lesson ids
  quizScores: Record<number, number>; // moduleId -> score (%)
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  results: string;
}

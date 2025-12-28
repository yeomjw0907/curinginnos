import apiService from './api';
import { FormData } from '../types';

interface ContactResponse {
  success: boolean;
  message: string;
}

export const contactService = {
  // Submit contact form
  submitContactForm: async (data: FormData): Promise<ContactResponse> => {
    try {
      // For now, simulate API call
      // In production, replace with actual API endpoint
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('Contact form submitted:', data);
          resolve({
            success: true,
            message: 'Contact form submitted successfully',
          });
        }, 1500);
      });

      // Actual implementation would be:
      // return await apiService.post<ContactResponse>('/contact', data);
    } catch (error) {
      console.error('Contact form submission error:', error);
      throw error;
    }
  },

  // Get board posts
  getBoardPosts: async () => {
    // Placeholder - replace with actual API call
    return [];
  },

  // Get board post by ID
  getBoardPost: async (id: string) => {
    // Placeholder - replace with actual API call
    return null;
  },
};

export default contactService;


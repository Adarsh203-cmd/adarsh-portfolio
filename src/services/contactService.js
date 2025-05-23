import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export const submitContactForm = async (formData) => {
  try {
    console.log('Submitting contact form to Firebase...', formData);
    
    // Add document to Firestore
    const docRef = await addDoc(collection(db, 'contacts'), {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || '',
      message: formData.message,
      timestamp: serverTimestamp(), // Use server timestamp
      status: 'new',
      read: false,
      // Add some metadata
      userAgent: navigator.userAgent,
      source: 'portfolio-website'
    });
    
    console.log('Contact form submitted successfully with ID:', docRef.id);
    
    return { 
      success: true, 
      id: docRef.id,
      message: 'Your message has been sent successfully!'
    };
  } catch (error) {
    console.error('Error submitting contact form to Firebase:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send message. Please try again.';
    
    if (error.code === 'permission-denied') {
      errorMessage = 'Permission denied. Please check Firebase security rules.';
    } else if (error.code === 'unavailable') {
      errorMessage = 'Service temporarily unavailable. Please try again later.';
    } else if (error.message.includes('network')) {
      errorMessage = 'Network error. Please check your internet connection.';
    }
    
    return { 
      success: false, 
      error: errorMessage,
      code: error.code 
    };
  }
};

// Optional: Function to get all contact submissions (for admin use)
export const getContactSubmissions = async () => {
  try {
    const { getDocs, query, orderBy } = await import('firebase/firestore');
    const q = query(collection(db, 'contacts'), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const contacts = [];
    querySnapshot.forEach((doc) => {
      contacts.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return { success: true, contacts };
  } catch (error) {
    console.error('Error getting contact submissions:', error);
    return { success: false, error: error.message };
  }
};
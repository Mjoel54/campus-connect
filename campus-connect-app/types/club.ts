export interface Club {
  _id?: string;
  id: string;
  name: string;
  description: string;
  category?: "Sports" | "Music" | "Tech" | "Gaming" | "Arts" | "Other"; // Club category
  logoUrl?: string; // URL to the club's logo or image
  coverImageUrl?: string; // URL to a cover/banner image

  members: string[];

  // Social & Communication
  //   website?: string; // Club website URL
  //   contactEmail?: string; // Email for club inquiries
  //   socialLinks?: {
  //     instagram?: string;
  //     twitter?: string;
  //     facebook?: string;
  //     youtube?: string;
  //   };
}

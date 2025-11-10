export interface StaffContact {
  email: string;
  linkedin: string;
  office: string;
}

export interface StaffMember {
  id: string;
  name: string;
  title: string;
  category: 'board' | 'academic';
  image: string;
  shortDescription: string;
  biography: string;
  education: string[];
  research: string[];
  interests: string[];
  contact: StaffContact;
  quote: string;
}

export interface StaffMembers {
  [key: string]: StaffMember;
}

// Staff data for both board members and academic staff
export const staffMembers: StaffMembers = {
  // Board of Directors
  'johnathan-doe': {
    id: 'johnathan-doe',
    name: 'Dr. Johnathan Doe',
    title: 'Chairman',
    category: 'board',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4mCN5WSayKwd9CkkjvRG0GkZMlDnziMzDws6thAwNw8-xfIMvZnT3dABeKewjb7n4Ka68zyxBbG1vCREIW3YeJOTejW_v0ToFv-mhOucw0XpSCFU1WXe9zGBYbdCfWfF4sXfjwO6bvILYHVFlr1YzAmDfUmH_v6HkKsjhUiDNCveZ9s9_f1wp8jOBFWkTSATh0pVfIdLYpQGRs7d1rpbFqGhSXAhE95Pbp-zxIK82pPj6clmjtLQRICaYE9QjwhK5-crQeoD7Gflu',
    shortDescription:
      'A visionary in education with over 30 years of experience, guiding the strategic direction of our institution.',
    biography: `Dr. Johnathan Doe is a visionary leader in the field of education with over 30 years of experience. As Chairman of Model College, he provides strategic direction and oversight to ensure the institution remains at the forefront of educational excellence.

Before joining Model College, Dr. Doe served as the Dean of Education at a prestigious university, where he implemented innovative teaching methodologies that have been adopted nationwide. His research on educational leadership has been published in numerous academic journals.

Dr. Doe holds multiple patents for educational technologies and has been recognized with several awards for his contributions to the field of education.`,
    education: [
      'Ed.D. in Educational Leadership',
      'M.A. in Curriculum Development',
      'B.Sc. in Education',
    ],
    research: [
      '"Transformational Leadership in Modern Education" (2023)',
      '"The Future of Classroom Technology" (2021)',
      '"Sustainable Educational Models" (2019)',
    ],
    interests: [
      'Educational technology integration',
      'Leadership development programs',
      'Global education partnerships',
    ],
    contact: {
      email: 'johnathan.doe@modelcollege.edu',
      linkedin: '#',
      office:
        'Model College, Board of Directors Office\n123 Education Lane, Knowledge City, 45678',
    },
    quote:
      '"Education is not just about imparting knowledge; it is about lighting the fire of curiosity that lasts a lifetime."',
  },

  'eleanor-vance': {
    id: 'eleanor-vance',
    name: 'Dr. Eleanor Vance',
    title: 'Board Member & Curriculum Design Expert',
    category: 'board',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0kfXj_kY4usLwvikO-3Pnsce8xxdwlKdDFvsc0Q6CBvBGADJAPDfVHoaxTanOb2ExoJJhVYEuU9ttECNxyW8dLmCP6w5iqtEj0yzbRnh86s9gDpyI35UGiCF1GptLWtQLe3L_5c0-7RZ9cH9kEymD9gEzpWCTZU3oEv7m7ZMEiJvwOeGQGxYGrFmH4N2El9x3tP78HF14Po7gpIJvb58au7ExCzpeflZ9pyXMbgqXVKQiddI9vZ62mToQGtKDIey2v-I7iBFpcImg',
    shortDescription:
      'An expert in child development and curriculum design, ensuring our academic programs are world-class.',
    biography: `Dr. Eleanor Vance is a distinguished expert in child development and curriculum design. With over 20 years of experience in the educational sector, she brings a wealth of knowledge and innovative thinking to the Model College Board of Directors. Her primary focus is on ensuring that our academic programs are not only rigorous and comprehensive but also engaging and world-class in their approach.

Before joining our board, Dr. Vance was a tenured professor at a leading university, where she pioneered research into play-based learning and its impact on cognitive development in early childhood. She has published numerous papers in prestigious academic journals and is a frequent keynote speaker at international education conferences.

Her vision for Model College is to create an educational ecosystem where every student is empowered to explore their passions, develop critical thinking skills, and become a lifelong learner. She works closely with our academic leadership to review and enhance our curriculum, integrating the latest pedagogical research and technological advancements to prepare students for the challenges of the future.`,
    education: [
      'Ph.D. in Curriculum and Instruction',
      'M.Ed. in Educational Psychology',
      'B.A. in Elementary Education',
    ],
    research: [
      '"The Architecture of Learning: Designing Modern Curricula" (2022)',
      '"Play as Pedagogy: The Future of Early Childhood Education" (2019)',
      '"Global Competencies in the K-12 Classroom" (2016)',
    ],
    interests: [
      'Inquiry-based learning models',
      'Comparative international education systems',
      'Teacher professional development and mentorship',
      'Digital literacy integration',
      'Socio-emotional learning (SEL)',
    ],
    contact: {
      email: 'eleanor.vance@modelcollege.edu',
      linkedin: '#',
      office:
        'Model College, Board of Directors Office\n123 Education Lane, Knowledge City, 45678',
    },
    quote:
      '"Designing world-class programs isn\'t just a profession; it\'s a promise to every student that their potential is limitless."',
  },

  'marcus-chen': {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    title: 'Board Member',
    category: 'board',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhPsQ4sTVZZwOUOyiltyoWy6llZsjsxWI3o_TIdwm3P4-2gAZk6CFqma5nGjIspKiqtpH9149fjZq-dQjv8UoEQI5JZI-n14oy7Jl-tpt3qJqRRqYmUOdUA70NVaRBl79aFQxtgbS-xM6WJJ7K-yczJT-4pd4U9TkvjW-xNOCROD7-i7EPuyvocCMInUHgpsQK-9y01t6zmb4vBy9zb427P2CkADtFlpkR4a7uDu7hrGZFhylmrdcivrV-F479PwERRyyHudlupHql',
    shortDescription:
      "A leader in technology and innovation, driving our college's digital transformation and future-readiness.",
    biography: `Marcus Chen is a visionary leader in technology and innovation, bringing his expertise to guide Model College's digital transformation initiatives. With a background in Silicon Valley and educational technology startups, Marcus ensures that our institution remains at the cutting edge of technological integration in education.

His career spans over 15 years in technology leadership roles, where he has successfully led digital transformation projects for major educational institutions. Marcus is passionate about creating future-ready learning environments that prepare students for the rapidly evolving digital landscape.

At Model College, he oversees the strategic implementation of technology infrastructure, digital learning platforms, and innovation labs that enhance both teaching and learning experiences.`,
    education: [
      'M.S. in Computer Science',
      'B.S. in Electrical Engineering',
      'Executive Education in Business Administration',
    ],
    research: [
      '"AI in Education: Opportunities and Challenges" (2023)',
      '"Building Digital Infrastructure for Schools of Tomorrow" (2021)',
      '"EdTech Integration Best Practices" (2019)',
    ],
    interests: [
      'Artificial Intelligence in education',
      'Digital infrastructure development',
      'STEM education innovation',
      'Cybersecurity in educational institutions',
    ],
    contact: {
      email: 'marcus.chen@modelcollege.edu',
      linkedin: '#',
      office:
        'Model College, Board of Directors Office\n123 Education Lane, Knowledge City, 45678',
    },
    quote:
      '"Technology in education is not about replacing teachers; it\'s about empowering them to reach every student in new and meaningful ways."',
  },

  // Senior Academic Leadership
  'susan-richards': {
    id: 'susan-richards',
    name: 'Susan Richards',
    title: 'Principal',
    category: 'academic',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvp6pdVQ8fRg0X1k63j4MGeW0pSTHKaeqr5T0jOMmNHu5JcyhlqHVOFyYTQZOEVj-HOzSqlKTx3TibNCjxE2fhe6BfcfBMvnjIJ2812BhE4vuHX87lwmQPL6aDy-jEN4fcTbhJRs0GqtBZXQ1DHmHgMG_KxTIsB40nTGGVnad7ylcnGYnh54tcUvW1pep3E2dXY5L-15tdlAVWZ3qklKmPCE7oQZY34u4a1mRFU5_uUDKlz30sZyxeO5-lM-FXLX7Em9cfEaMS_wP6',
    shortDescription:
      'Dedicated to fostering an inclusive and inspiring learning environment for all our students and staff.',
    biography: `Susan Richards brings over 25 years of educational leadership experience to her role as Principal of Model College. Her commitment to creating an inclusive and inspiring learning environment has made her a beloved leader among students, parents, and staff alike.

Before becoming Principal, Susan served as Vice-Principal for eight years, during which she implemented numerous initiatives that improved student engagement and academic performance. Her leadership style emphasizes collaboration, innovation, and a student-centered approach to education.

Under her guidance, Model College has seen significant improvements in student outcomes, teacher satisfaction, and community engagement. She is particularly passionate about creating opportunities for students from diverse backgrounds to excel.`,
    education: [
      'M.Ed. in Educational Leadership',
      'B.Ed. in Secondary Education',
      'Professional Certificate in School Administration',
    ],
    research: [
      '"Creating Inclusive School Cultures" (2022)',
      '"Teacher Retention Strategies" (2020)',
      '"Student-Centered Leadership" (2018)',
    ],
    interests: [
      'Inclusive education practices',
      'Teacher professional development',
      'Student wellbeing and mental health',
      'Community engagement strategies',
    ],
    contact: {
      email: 'susan.richards@modelcollege.edu',
      linkedin: '#',
      office:
        "Model College, Principal's Office\n123 Education Lane, Knowledge City, 45678",
    },
    quote:
      '"Every student deserves a champion—an adult who will never give up on them and insists they become the best they can possibly be."',
  },

  'david-miller': {
    id: 'david-miller',
    name: 'David Miller',
    title: 'Vice-Principal (Secondary)',
    category: 'academic',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7gkbsFDxPv-VF3IeKmTLP3EJtZp8dXo_yKiggxiEGYdk_S90LHNwkPUr7jRT6XVXmJcBXXARrNtKRZz90YyX4AXd60oLaLxLOPuCmrpoyE84cBXwgX8guazGWube3LI_79WIcto8WwpmDR7QiuzTsdiVQdP5IANlEffApZS54N16XGu0m7ND06yue3mAhA2Cmvyh6Q4FYUiGjZqhKelCwbt80pKQnRxInQTPKV8WkCGUIjvBAU6jUUGMgqitVxPrr16HwHLjzdGNu',
    shortDescription:
      'Leads the secondary school with a focus on academic rigor and preparing students for higher education.',
    biography: `David Miller is an accomplished educator with 18 years of experience in secondary education. As Vice-Principal of the Secondary School, he focuses on maintaining academic rigor while ensuring students are well-prepared for higher education and future careers.

David began his career as a mathematics teacher and quickly moved into leadership roles due to his exceptional ability to mentor both students and teachers. He has developed innovative programs that bridge the gap between secondary education and university requirements.

His initiatives in college preparation and career counseling have resulted in a significant increase in university acceptance rates for Model College graduates. David is known for his hands-on approach and his commitment to every student\'s success.`,
    education: [
      'M.A. in Educational Administration',
      'B.Sc. in Mathematics Education',
      'Postgraduate Certificate in Counseling',
    ],
    research: [
      '"Bridging the Secondary-Tertiary Education Gap" (2023)',
      '"Mathematics Anxiety and Achievement" (2021)',
      '"Effective College Preparation Programs" (2019)',
    ],
    interests: [
      'College and career readiness',
      'STEM education',
      'Student mentorship programs',
      'Academic intervention strategies',
    ],
    contact: {
      email: 'david.miller@modelcollege.edu',
      linkedin: '#',
      office:
        'Model College, Secondary School Office\n123 Education Lane, Knowledge City, 45678',
    },
    quote:
      '"Academic excellence is not just about grades; it\'s about developing the curiosity and resilience that will serve students throughout their lives."',
  },

  'maria-garcia': {
    id: 'maria-garcia',
    name: 'Maria Garcia',
    title: 'Vice-Principal (Primary)',
    category: 'academic',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAo-BbEQZGgvL3WazVlEi5vvPG9we1iBrppA8bMwYgM8LTYqce2gwd5v3jnOMOC_Ipuy_EwVp0pteA8H1xkJxI18MXxLzYVW0Gq8xJWInPLVGfuUu3Gl_3IcMdYoxyhkV0RuukvMc9_HqvLl6a2-RPlnOYCdFM1ssrWQbMwAHO94hqsarZmm6BMM5OCw-7SRNa4QwL4SUR3SqopEfZrrZACRglcrLMzbyC6r1O-TgbRCecsqQkCvGDqn4WvzfnESCTMazumzCHRBnHK',
    shortDescription:
      'Champions a nurturing and creative atmosphere for our youngest learners to build a strong foundation.',
    biography: `Maria Garcia is a passionate advocate for early childhood education with 15 years of experience in primary education leadership. As Vice-Principal of the Primary School, she creates nurturing environments where young learners can build strong academic and social foundations.

Maria's approach combines evidence-based teaching practices with creative, play-based learning experiences. She has developed innovative literacy and numeracy programs that have been recognized at the national level for their effectiveness.

Her work in creating inclusive classrooms and supporting students with diverse learning needs has made her a respected leader in primary education. Maria believes that the early years are crucial for developing lifelong learners.`,
    education: [
      'M.Ed. in Early Childhood Education',
      'B.A. in Primary Education',
      'Certificate in Special Educational Needs',
    ],
    research: [
      '"Play-Based Learning in Primary Education" (2022)',
      '"Early Literacy Development Strategies" (2020)',
      '"Creating Inclusive Primary Classrooms" (2018)',
    ],
    interests: [
      'Early childhood development',
      'Play-based pedagogy',
      'Inclusive education practices',
      'Parent engagement in early learning',
    ],
    contact: {
      email: 'maria.garcia@modelcollege.edu',
      linkedin: '#',
      office:
        'Model College, Primary School Office\n123 Education Lane, Knowledge City, 45678',
    },
    quote:
      '"The early years of education are not just preparation for learning; they are the foundation upon which all future learning is built."',
  },

  'olivia-chen': {
    id: 'olivia-chen',
    name: 'Olivia Chen',
    title: 'Head of Admissions',
    category: 'academic',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA31_tvM3O5ctlIIwx3Ke76UJHdqcieWX8qOX0YLhI-QN8U1d3VOpEyWyBC9RBbcHsa4FBpJzgb9XyquSgIiXgV4JNhhMPaf0wlLg2fHyIaWR4opm0fmRsKk2_13G8prQj75b3l0fe6EjeVXMPejObidvoSZvb4YmdkxZLzJnnGV2_BhntaRvj7mYEQZVl6QT28qYx87gXTDxgRKdHSCHL3h5DTsicOO-1mZpnqMl9uRGyuNXj5tkQxr5FjvA84J2vPo1A1MK1NVrB1',
    shortDescription:
      'Welcoming new families to our community and ensuring a smooth and supportive admissions process.',
    biography: `Olivia Chen brings 12 years of experience in educational administration to her role as Head of Admissions. She is dedicated to welcoming new families to the Model College community and ensuring a smooth, supportive admissions process for everyone.

Olivia has developed innovative admissions procedures that prioritize both academic potential and personal character. Her team works closely with families to ensure they have all the information needed to make the best educational decisions for their children.

Under her leadership, the admissions process has become more efficient while maintaining the personal touch that makes families feel valued and supported from their first interaction with Model College.`,
    education: [
      'M.A. in Educational Administration',
      'B.A. in Communications',
      'Certificate in Enrollment Management',
    ],
    research: [
      '"Building School Community Through Admissions" (2023)',
      '"Family Engagement in School Selection" (2021)',
      '"Ethical Practices in School Admissions" (2019)',
    ],
    interests: [
      'Family engagement strategies',
      'Enrollment management',
      'Community building',
      'Educational marketing and communications',
    ],
    contact: {
      email: 'olivia.chen@modelcollege.edu',
      linkedin: '#',
      office:
        'Model College, Admissions Office\n123 Education Lane, Knowledge City, 45678',
    },
    quote:
      '"The admissions process is the beginning of an educational partnership between the school and family—it should be welcoming, transparent, and supportive."',
  },

  'aisha-patel': {
    id: 'aisha-patel',
    name: 'Aisha Patel',
    title: 'Head of KG Section',
    category: 'academic',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDeNdxwWBXSTaW8O7NrPiuDE49inQX7R_AJP4HhRFmfflK5nzEOrOKVIILBoSD1Ju_3wpfM-k-gGLGOWEwN-kKwOeff1dLdV_fJoAc8LwoUZgRmbEdBx7t911X9JA7ubB7JN_TgLZKy_Z0hVMRDS01yNj-YAaynX_6Jx_cZfuIsmvbj-BxuLwM-f8HDKVDQTK8tQSh7cc6QQhh5JdvBqQmdMuNoYbabFmsfRWh--BhlPz3Fth8CN4FnOtrPxVqLnGZ94mBEDkCXOY2q',
    shortDescription:
      'Passionate about early childhood education and creating a joyful, play-based learning experience.',
    biography: `Aisha Patel is a dedicated early childhood educator with 10 years of experience specializing in kindergarten and nursery education. As Head of the KG Section, she is passionate about creating joyful, play-based learning experiences that lay the foundation for lifelong learning.

Aisha has developed innovative early years curricula that balance structured learning with creative exploration. Her approach recognizes that young children learn best through play, discovery, and positive relationships.

She has implemented professional development programs for early years educators and has been instrumental in creating learning environments that are both stimulating and nurturing for our youngest students.`,
    education: [
      'M.Ed. in Early Childhood Studies',
      'B.A. in Child Development',
      'Montessori Teaching Certificate',
    ],
    research: [
      '"The Power of Play in Early Learning" (2023)',
      '"Developing Social Skills in Kindergarten" (2021)',
      '"Outdoor Learning in Early Childhood" (2019)',
    ],
    interests: [
      'Play-based pedagogy',
      'Early literacy and numeracy',
      'Social-emotional development',
      'Outdoor and nature-based learning',
    ],
    contact: {
      email: 'aisha.patel@modelcollege.edu',
      linkedin: '#',
      office:
        'Model College, KG Section Office\n123 Education Lane, Knowledge City, 45678',
    },
    quote:
      '"In early childhood, every moment is a learning opportunity, and every interaction shapes a child\'s relationship with education."',
  },
};

// Helper function to get all staff members
export const getAllStaffMembers = (): StaffMember[] => {
  return Object.values(staffMembers);
};

// Helper function to get staff member by ID
export const getStaffMemberById = (id: string): StaffMember | undefined => {
  return staffMembers[id];
};

// Helper function to get staff members by category
export const getStaffMembersByCategory = (
  category: 'board' | 'academic'
): StaffMember[] => {
  return Object.values(staffMembers).filter(
    (member) => member.category === category
  );
};

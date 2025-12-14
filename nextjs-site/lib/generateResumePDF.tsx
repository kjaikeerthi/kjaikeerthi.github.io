import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import { Resume } from '@/data/resume';

// Register fonts if needed (optional)
// Font.register({ family: 'Open Sans', src: 'path/to/font.ttf' });

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 40,
    fontSize: 11,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1f2937',
  },
  title: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 10,
    color: '#6b7280',
    marginBottom: 3,
  },
  section: {
    marginTop: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingBottom: 4,
  },
  expertiseRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  expertiseLabel: {
    width: 150,
    fontWeight: 'bold',
    fontSize: 10,
  },
  expertiseValue: {
    flex: 1,
    fontSize: 10,
    color: '#4b5563',
  },
  experience: {
    marginBottom: 15,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  role: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  company: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#4b5563',
    marginBottom: 8,
  },
  dates: {
    fontSize: 10,
    color: '#6b7280',
  },
  project: {
    marginBottom: 10,
    marginLeft: 10,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 3,
  },
  projectDescription: {
    fontSize: 10,
    color: '#4b5563',
    marginBottom: 3,
    lineHeight: 1.4,
  },
  techLabel: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#4b5563',
    marginTop: 3,
    marginBottom: 2,
  },
  techItem: {
    fontSize: 9,
    color: '#6b7280',
    marginLeft: 15,
    marginBottom: 1,
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  degree: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  educationDetails: {
    fontSize: 10,
    color: '#4b5563',
    marginBottom: 2,
  },
  link: {
    fontSize: 10,
    color: '#3b82f6',
    marginBottom: 3,
  },
});

interface ResumePDFProps {
  data: Resume;
}

export const ResumePDF = ({ data }: ResumePDFProps) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.contactInfo.name}</Text>
        <Text style={styles.title}>{data.contactInfo.title}</Text>
        <Text style={styles.contactInfo}>
          Email: {data.contactInfo.email}
          {data.contactInfo.mobile && ` | Mobile: ${data.contactInfo.mobile}`} |
          Location: {data.contactInfo.location}
        </Text>
      </View>

      {/* Technical Expertise */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Expertise</Text>
        {data.technicalExpertise.map((expertise, index) => (
          <View key={index} style={styles.expertiseRow}>
            <Text style={styles.expertiseLabel}>{expertise.category}:</Text>
            <Text style={styles.expertiseValue}>
              {expertise.skills.join(', ')}
            </Text>
          </View>
        ))}
      </View>

      {/* Professional Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {data.experience.map((exp, expIndex) => (
          <View key={expIndex} style={styles.experience}>
            <View style={styles.experienceHeader}>
              <View>
                <Text style={styles.role}>{exp.role}</Text>
                <Text style={styles.company}>{exp.company}</Text>
              </View>
              <Text style={styles.dates}>
                {exp.startDate} - {exp.endDate}
              </Text>
            </View>
            {exp.projects.map((project, projIndex) => (
              <View key={projIndex} style={styles.project}>
                <Text style={styles.projectTitle}>
                  {project.title}
                  {project.url && ` (${project.url})`}
                </Text>
                <Text style={styles.projectDescription}>
                  {project.description}
                </Text>
                <Text style={styles.techLabel}>Technology used:</Text>
                {project.technologies.map((tech, techIndex) => (
                  <Text key={techIndex} style={styles.techItem}>
                    • {tech}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Educational Qualification</Text>
        <View style={styles.educationHeader}>
          <Text style={styles.degree}>{data.education.degree}</Text>
          <Text style={styles.dates}>
            {data.education.startDate} - {data.education.endDate}
          </Text>
        </View>
        <Text style={styles.educationDetails}>
          Completed {data.education.field} from,
        </Text>
        <Text style={styles.educationDetails}>
          {data.education.institution},
        </Text>
        <Text style={styles.educationDetails}>{data.education.location}</Text>
      </View>

      {/* Additional Links */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Additional Links</Text>
        <Text style={styles.link}>
          GitHub: {data.contactInfo.socialLinks.github}
        </Text>
        <Text style={styles.link}>
          Twitter: {data.contactInfo.socialLinks.twitter}
        </Text>
        <Text style={styles.link}>
          LinkedIn: {data.contactInfo.socialLinks.linkedin}
        </Text>
      </View>
    </Page>
  </Document>
);

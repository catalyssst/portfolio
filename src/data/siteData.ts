import type { Project, TeamMember } from "../types";
import hamzahImage from "../assets/hamzah.jpg";
import irsyadImage from "../assets/irsyad.jpg";
import rasyadImage from "../assets/rasyad.jpg";

const memberSeed: TeamMember[] = [
  {
    id: "rasyad",
    name: "Rasyad",
    role: "Backend",
    image: rasyadImage,
    shortBio:
      "Merancang fondasi backend yang tangguh, aman, dan siap berkembang untuk skala enterprise.",
    focus: "API architecture, security, and distributed services.",
  },
  {
    id: "irsyad",
    name: "Irsyad",
    role: "Frontend",
    image: irsyadImage,
    shortBio:
      "Membangun antarmuka yang cepat, interaktif, dan konsisten untuk pengalaman produk modern.",
    focus: "Design system, performance, and accessibility.",
  },
  {
    id: "hamzah",
    name: "Hamzah",
    role: "UI/UX",
    image: hamzahImage,
    shortBio:
      "Mendesain pengalaman pengguna yang intuitif dengan visual modern untuk produk digital berkinerja tinggi.",
    focus: "User research, interaction design, and design consistency.",
  },
];

export const members: TeamMember[] = memberSeed;

export const projects: Project[] = [
  {
    id: "door",
    name: "DOOR",
    description: "Aplikasi HR untuk manajemen proses kepegawaian.",
    techStack: ["PHP", "Bootstrap", "MySQL", "Zend Framework"],
  },
  {
    id: "ess",
    name: "ESS",
    description:
      "Aplikasi HR dengan arsitektur modern untuk kebutuhan enterprise.",
    techStack: [
      "Vue",
      "NestJS",
      "PostgreSQL",
      "Microservices",
      "Microfrontend",
    ],
  },
  {
    id: "sifa",
    name: "SIFA",
    description:
      "Aplikasi monitoring dashboard untuk pemantauan data operasional.",
    techStack: ["React", "NestJS", "PostgreSQL"],
  },
  {
    id: "kipka",
    name: "KIPKA",
    description: "Aplikasi monitoring KPI karyawan untuk evaluasi performa.",
    techStack: ["Laravel", "PHP", "Bootstrap", "MySQL"],
  },
  {
    id: "osiel",
    name: "OSIEL",
    description:
      "Aplikasi online shop dengan integrasi pembayaran dan login sosial.",
    techStack: ["Laravel", "PHP", "Midtrans", "MySQL", "Socialite"],
  },
  {
    id: "staffing",
    name: "Staffing",
    description: "Aplikasi manajemen dokumen dan jabatan karyawan.",
    techStack: ["React", "NestJS", "MySQL"],
  },
  {
    id: "performance-management-system",
    name: "Performance Management System",
    description:
      "Aplikasi monitoring performa karyawan untuk pelacakan target dan evaluasi berkala.",
    techStack: ["React", "NestJS", "MySQL"],
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "team", label: "Team" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

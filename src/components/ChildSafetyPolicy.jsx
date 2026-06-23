import React, { useState, useEffect } from 'react';
import { ShieldAlert, Search, Printer, Mail, Phone, BookOpen, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import SEO from './SEO';

const ChildSafetyPolicy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('purpose');

  const sections = [
    {
      id: "purpose",
      title: "1. Purpose",
      keywords: "purpose standards legislation laws guidelines objective goals safety",
      content: (
        <div>
          <p style={{ fontWeight: 600, color: 'var(--primary-dark)', marginBottom: '1rem', fontSize: '1.1rem' }}>
            Victorian Child Safe Standards
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Hello Zindagi Inc is committed to creating and maintaining a child-safe, inclusive, respectful, and culturally safe environment for all children and young people participating in our programs, events, workshops, yoga sessions, cultural activities, and community initiatives.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            We have zero tolerance for child abuse, neglect, grooming, exploitation, discrimination, bullying, or any behaviour that compromises the safety or wellbeing of children.
          </p>
          
          <div style={{ 
            background: 'var(--bg-section)', 
            padding: '1.5rem', 
            borderRadius: 'var(--radius-sm)', 
            borderLeft: '4px solid var(--primary)',
            marginBottom: '1.5rem'
          }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={18} color="var(--primary)" /> This policy aligns with:
            </h4>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
              <li>Victorian Child Safe Standards</li>
              <li>Child Wellbeing and Safety Act 2005 (Vic)</li>
              <li>Working with Children Act 2005 (Vic)</li>
              <li>Reportable Conduct Scheme</li>
              <li>Relevant Australian child protection laws and safeguarding principles.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "scope",
      title: "2. Scope",
      keywords: "scope apply committee members staff yoga instructors parents volunteers",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            This policy applies to all individuals associated with Hello Zindagi Inc activities, programs, and events:
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            {[
              "Committee members",
              "Employees",
              "Contractors",
              "Yoga instructors",
              "Volunteers",
              "Students and trainees",
              "Parents/guardians",
              "Any person engaged with Hello Zindagi Inc activities involving children under 18 years of age"
            ].map((item, idx) => (
              <div key={idx} style={{ 
                background: 'var(--bg-section)', 
                padding: '0.85rem 1rem', 
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border)',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "commitment",
      title: "3. Our Commitment to Children",
      keywords: "commitment protect listening support respect diversity physical online environments",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Hello Zindagi Inc is committed to:
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <li><strong>Protecting children</strong> from physical, emotional, sexual, psychological, and online harm.</li>
            <li><strong>Listening to children</strong> and taking their concerns seriously.</li>
            <li><strong>Supporting participation</strong> and inclusion.</li>
            <li><strong>Respecting diversity</strong> - including cultural, linguistic, religious, gender, and individual diversity.</li>
            <li><strong>Providing safe environments</strong>, both physical and online.</li>
            <li><strong>Promoting wellbeing</strong>, dignity, and respect.</li>
          </ul>
        </div>
      )
    },
    {
      id: "principles",
      title: "4. Child Safe Principles",
      keywords: "principles interests safe heard families communication boundaries aboriginal cultural safety",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            We implement the following guiding principles in all our operations:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {[
              { title: "Best Interests", desc: "Act in the best interests of children at all times." },
              { title: "Safe & Heard", desc: "Ensure children feel safe, respected, and heard." },
              { title: "Family Connection", desc: "Encourage open communication with families." },
              { title: "Prompt Response", desc: "Respond promptly to concerns or complaints." },
              { title: "Boundaries", desc: "Maintain appropriate professional boundaries." },
              { title: "Cultural Safety", desc: "Create culturally safe environments for Aboriginal children and families." },
              { title: "Inclusion", desc: "Respect diversity and inclusion for children from all backgrounds." }
            ].map((p, idx) => (
              <div key={idx} style={{ 
                background: 'var(--bg-section)', 
                padding: '1rem', 
                borderRadius: 'var(--radius-sm)',
                borderLeft: '3px solid var(--secondary)'
              }}>
                <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.25rem' }}>{p.title}</strong>
                <span style={{ fontSize: '0.95rem', color: 'var(--text-body)' }}>{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "recruitment",
      title: "5. Recruitment and Screening",
      keywords: "recruitment screening check wwcc references behavior conduct volunteer exclusion",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            To safeguard children, Hello Zindagi Inc enforces strict screening processes:
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <li><strong>Working With Children Check:</strong> A valid WWCC is mandatory for all child-related roles.</li>
            <li><strong>Reference Checks:</strong> Conducted for staff and key volunteer positions where appropriate.</li>
            <li><strong>Clear Expectations:</strong> Ensuring all volunteers and contractors understand our behavior and conduct guidelines before engagement.</li>
            <li><strong>Immediate Exclusion:</strong> Prompt removal of any persons posing an unacceptable risk to children.</li>
          </ul>
          <p style={{ 
            color: 'var(--accent)', 
            fontWeight: 600, 
            fontSize: '0.95rem',
            background: 'rgba(234, 88, 12, 0.05)',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid rgba(234, 88, 12, 0.2)'
          }}>
            No person may work or volunteer with children if prohibited under Victorian or Australian law.
          </p>
        </div>
      )
    },
    {
      id: "conduct",
      title: "6. Code of Conduct",
      keywords: "conduct rules behaviour staff volunteer parental consent alone reporting prohibited physical punishment touching sexualized grooming bullying shaming",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            All staff and volunteers must adhere to the following standards:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }} className="conduct-grid">
            <div style={{ background: 'rgba(5, 150, 105, 0.03)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(5, 150, 105, 0.15)' }}>
              <h5 style={{ color: 'var(--primary-dark)', marginBottom: '0.75rem', fontWeight: 700 }}>Required Standards</h5>
              <ul style={{ paddingLeft: '1.1rem', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Treat children respectfully and fairly</li>
                <li>Use positive and age-appropriate language</li>
                <li>Maintain professional boundaries</li>
                <li>Obtain parental consent where required</li>
                <li>Ensure activities occur in open and observable environments</li>
                <li>Avoid being alone with a child where possible</li>
                <li>Report concerns immediately</li>
              </ul>
            </div>
            
            <div style={{ background: 'rgba(234, 88, 12, 0.03)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(234, 88, 12, 0.15)' }}>
              <h5 style={{ color: 'var(--accent)', marginBottom: '0.75rem', fontWeight: 700 }}>Strictly Prohibited Behaviours</h5>
              <ul style={{ paddingLeft: '1.1rem', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Physical punishment</li>
                <li>Inappropriate touching</li>
                <li>Sexualised comments or jokes</li>
                <li>Grooming behaviour</li>
                <li>Bullying, shaming, intimidation, or humiliation</li>
                <li>Sharing inappropriate images or messages</li>
                <li>Unauthorised private communication with children</li>
                <li>Discrimination or exclusion</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "supervision",
      title: "7. Supervision and Safety During Activities",
      keywords: "supervision safety ratios entry exit parental details emergency contacts first aid toilet changing yoga physical adjustments",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            During all events and sessions, Hello Zindagi Inc will:
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <li>Maintain reasonable supervision ratios.</li>
            <li>Ensure safe entry and exit procedures.</li>
            <li>Require parental/guardian details for child participants.</li>
            <li>Keep emergency contact information available.</li>
            <li>Provide first aid access where possible.</li>
            <li>Conduct risk assessments for events and activities.</li>
            <li>Ensure child-safe toilet and changing arrangements.</li>
          </ul>

          <div style={{ 
            background: 'var(--bg-section)', 
            padding: '1.25rem', 
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border)'
          }}>
            <h5 style={{ marginBottom: '0.5rem', fontWeight: 700 }}>For Children’s Yoga Sessions:</h5>
            <ul style={{ paddingLeft: '1.2/20px', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>Activities must be age-appropriate.</li>
              <li>Physical adjustments should only occur when necessary and respectfully.</li>
              <li>Parents/guardians may be required to remain onsite for younger children.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "photography",
      title: "8. Photography, Media and Online Safety",
      keywords: "photography media online images recordings consent permission platform class one-on-one",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            We protect the privacy and digital safety of children in our care:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--bg-section)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Images, Recordings, & Personal Information:</strong>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <li>Will only be used with parent/guardian consent.</li>
                <li>Must not be used in inappropriate or exploitative ways.</li>
                <li>Must not identify children without permission.</li>
                <li>Will be stored securely where applicable.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--bg-section)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Online Classes & Communication:</strong>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <li>Use appropriate, secure virtual platforms.</li>
                <li>Include parent/guardian awareness and supervision.</li>
                <li>Avoid private one-on-one online interactions.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "complaints",
      title: "9. Complaints and Reporting",
      keywords: "complaints reporting concerns disclosures suspicions allegations police protection authorities retaliation",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            All concerns, disclosures, suspicions, or allegations relating to child safety must be taken seriously.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Any person may report concerns to:
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            {[
              "Hello Zindagi Inc Committee",
              "Victoria Police",
              "Child Protection Services",
              "Relevant Victorian authorities"
            ].map((contact, idx) => (
              <div key={idx} style={{ 
                background: 'var(--bg-section)', 
                padding: '0.75rem 1rem', 
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border)',
                fontSize: '0.9rem',
                fontWeight: 500,
                textAlign: 'center'
              }}>
                {contact}
              </div>
            ))}
          </div>

          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
            <li>Where legally required, mandatory reporting obligations will be followed.</li>
            <li>Retaliation against any person making a genuine complaint or report is strictly prohibited.</li>
          </ul>
        </div>
      )
    },
    {
      id: "responding",
      title: "10. Responding to Child Safety Concerns",
      keywords: "responding disclosure harm abuse listen secrecy factual report emergency 000",
      content: (
        <div>
          <div style={{ 
            background: 'rgba(234, 88, 12, 0.05)', 
            padding: '1.25rem', 
            borderRadius: 'var(--radius-sm)', 
            borderLeft: '4px solid var(--accent)',
            marginBottom: '1.5rem'
          }}>
            <h5 style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertTriangle size={18} /> If a child discloses harm or abuse:
            </h5>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
              <li><strong>Listen calmly and respectfully</strong>.</li>
              <li><strong>Do not promise secrecy</strong>.</li>
              <li><strong>Reassure the child</strong> they did the right thing.</li>
              <li><strong>Record factual information</strong> accurately.</li>
              <li><strong>Report concerns promptly</strong> to appropriate authorities.</li>
            </ul>
          </div>
          <p style={{ fontWeight: 600, color: 'var(--accent)' }}>
            Immediate risks to safety must be reported to emergency services by calling 000.
          </p>
        </div>
      )
    },
    {
      id: "equity",
      title: "11. Equity, Diversity and Cultural Safety",
      keywords: "equity diversity aboriginal torres strait islander disability cald lgbtqia vulnerability exclusion racism",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Hello Zindagi Inc values diversity and inclusion. We support and champion safety for:
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <li>Aboriginal and Torres Strait Islander children.</li>
            <li>Children with disability.</li>
            <li>Children from culturally and linguistically diverse (CALD) backgrounds.</li>
            <li>LGBTQIA+ children and young people.</li>
            <li>Children experiencing vulnerability or disadvantage.</li>
          </ul>
          <p style={{ fontWeight: 600, color: 'var(--text-main)' }}>
            Discrimination, racism, or exclusionary behaviour will not be tolerated.
          </p>
        </div>
      )
    },
    {
      id: "training",
      title: "12. Training and Awareness",
      keywords: "training awareness responsibilities standards safeguarding education review",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Hello Zindagi Inc will aim to ensure that:
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <li>Staff and volunteers understand child safety responsibilities.</li>
            <li>Child Safe Standards awareness is actively promoted.</li>
            <li>Appropriate safeguarding information and training are provided.</li>
            <li>Ongoing education and review occur where possible.</li>
          </ul>
        </div>
      )
    },
    {
      id: "risk",
      title: "13. Risk Management",
      keywords: "risk management identify minimise physical online events excursions volunteer photography",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            We will actively identify and minimise risks to children in:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {[
              "Physical environments",
              "Online environments",
              "Community events",
              "Excursions and external activities",
              "Volunteer interactions",
              "Photography and media practices"
            ].map((env, idx) => (
              <span key={idx} style={{ 
                background: 'var(--bg-section)', 
                padding: '0.5rem 1rem', 
                borderRadius: '50px',
                border: '1px solid var(--border)',
                fontSize: '0.9rem',
                color: 'var(--text-body)'
              }}>
                {env}
              </span>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "privacy",
      title: "14. Privacy and Confidentiality",
      keywords: "privacy confidentiality sensitive authority stored secure australian compliance",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Information relating to child safety concerns will:
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <li>Be handled with high sensitivity.</li>
            <li>Be shared only with relevant persons or authorities.</li>
            <li>Be stored securely where applicable.</li>
            <li>Comply with Australian privacy obligations.</li>
          </ul>
        </div>
      )
    },
    {
      id: "breaches",
      title: "15. Breaches of this Policy",
      keywords: "breaches violation action removal suspension termination legal",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Any breach of this policy is considered highly serious and may result in:
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <li>Immediate removal from activities.</li>
            <li>Suspension or termination of volunteer/staff involvement.</li>
            <li>Reporting to police or child protective authorities.</li>
            <li>Legal action where required.</li>
          </ul>
        </div>
      )
    },
    {
      id: "review",
      title: "16. Policy Review & Contact",
      keywords: "review contact email phone details references standards check",
      content: (
        <div>
          <p style={{ marginBottom: '1.5rem' }}>
            This policy is reviewed annually, following incident investigations, legislative amendments, or significant organisational growth.
          </p>

          <div style={{ 
            background: 'var(--bg-section)', 
            padding: '1.5rem', 
            borderRadius: 'var(--radius-sm)', 
            border: '1px solid var(--border)',
            marginBottom: '1.5rem'
          }}>
            <h5 style={{ marginBottom: '1rem', color: 'var(--text-main)', fontWeight: 700 }}>Contact Details</h5>
            <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Hello Zindagi Inc</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', marginBottom: '1rem' }}>Melbourne, Victoria, Australia</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="var(--primary)" />
                <a href="mailto:hellozindagiau@gmail.com" style={{ color: 'var(--primary-dark)', textDecoration: 'none' }}>hellozindagiau@gmail.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="var(--primary)" />
                <a href="tel:0468793340" style={{ color: 'var(--primary-dark)', textDecoration: 'none' }}>0468 793 340</a>
              </div>
            </div>
          </div>

          <h5 style={{ marginBottom: '0.75rem', fontWeight: 700 }}>References</h5>
          <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li>Victorian Child Safe Standards Information</li>
            <li>Child Safe Standards Victoria</li>
            <li>Working with Children Check Victoria</li>
          </ul>
        </div>
      )
    }
  ];

  // Filtering sections based on search term
  const filteredSections = sections.filter(sec => 
    sec.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    sec.keywords.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePrint = () => {
    window.print();
  };

  // Scroll to section handler
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle setting active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)', paddingTop: 'var(--nav-height)' }}>
      <SEO 
        title="Child Safety & Wellbeing Policy | Hello Zindagi"
        description="Read Hello Zindagi Inc.'s commitment to Child Safety and Wellbeing. Our policy aligns with the Victorian Child Safe Standards to protect children in Victoria, Australia."
        url="https://hellozindagi.org.au/child-safety"
        keywords="Child Safety, Child Wellbeing, Victoria Standards, Child Protection, Hello Zindagi Policies"
      />

      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        color: '#ffffff',
        padding: '4rem 0 3rem 0',
        textAlign: 'center',
        position: 'relative'
      }} className="policy-hero">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.15)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: 600 }}>
            <ShieldAlert size={16} /> COMPLIANCE & SAFETY POLICY
          </div>
          <h1 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
            Child Safety and Wellbeing Policy
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem' }}>
            Our commitment to creating and maintaining a child-safe, inclusive, and culturally safe environment in Victoria, Australia.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
            <span><strong>Approved By:</strong> Board of Management</span>
            <span>•</span>
            <span><strong>Effective Date:</strong> 11-Jun-2026</span>
            <span>•</span>
            <span><strong>Review Date:</strong> Annually</span>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div style={{ padding: '3.5rem 0' }}>
        <div className="container">
          {/* Controls / Search Area */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            marginBottom: '2.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--border)'
          }} className="policy-controls">
            
            {/* Search Input */}
            <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
              <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
              <input
                type="text"
                placeholder="Search policy sections, keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.75rem',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.95rem',
                  color: 'var(--text-main)',
                  outline: 'none',
                  background: 'var(--bg-section)',
                  transition: 'border-color 0.2s ease'
                }}
                className="search-input"
              />
            </div>

            {/* Print/Download Button */}
            <button 
              onClick={handlePrint}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.25rem',
                background: 'var(--bg-section)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--text-main)',
                transition: 'all 0.2s ease'
              }}
              className="print-btn"
            >
              <Printer size={18} /> Print Policy
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            gap: '3.5rem',
            alignItems: 'start'
          }} className="policy-layout">
            
            {/* Sidebar Navigation (TOC) */}
            <aside style={{
              position: 'sticky',
              top: '100px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              background: 'var(--bg-section)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border)',
              maxHeight: 'calc(100vh - 140px)',
              overflowY: 'auto'
            }} className="policy-sidebar">
              <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 800 }}>
                Table of Contents
              </h3>
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  style={{
                    textAlign: 'left',
                    padding: '0.65rem 0.85rem',
                    border: 'none',
                    background: activeSection === sec.id ? 'var(--primary-light)' : 'transparent',
                    color: activeSection === sec.id ? 'var(--primary-dark)' : 'var(--text-body)',
                    fontWeight: activeSection === sec.id ? 700 : 500,
                    borderRadius: '6px',
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                  className="toc-item"
                >
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {sec.title.split('. ')[1]}
                  </span>
                  {activeSection === sec.id && <ArrowRight size={14} />}
                </button>
              ))}
            </aside>

            {/* Policy Content */}
            <article style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem'
            }} className="policy-content">
              {filteredSections.length > 0 ? (
                filteredSections.map((sec) => (
                  <section 
                    key={sec.id} 
                    id={sec.id}
                    style={{
                      scrollMarginTop: '120px',
                      paddingBottom: '2.5rem',
                      borderBottom: '1px solid var(--border-light)'
                    }}
                  >
                    <h2 style={{ 
                      fontSize: '1.65rem', 
                      color: 'var(--text-main)', 
                      marginBottom: '1.25rem',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700
                    }}>
                      {sec.title}
                    </h2>
                    <div style={{
                      color: 'var(--text-body)',
                      lineHeight: '1.75',
                      fontSize: '1.025rem'
                    }} className="policy-text-block">
                      {sec.content}
                    </div>
                  </section>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-muted)' }}>
                  <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No sections match your search terms.</p>
                  <button 
                    onClick={() => setSearchTerm('')}
                    style={{
                      border: 'none',
                      background: 'none',
                      color: 'var(--primary)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '0.95rem'
                    }}
                  >
                    Clear search filter
                  </button>
                </div>
              )}
            </article>
          </div>
        </div>
      </div>

      <style>{`
        .search-input:focus {
          border-color: var(--primary) !important;
          background: var(--bg-main) !important;
          box-shadow: 0 0 0 3px var(--primary-glow);
        }
        .print-btn:hover {
          background: var(--bg-main) !important;
          border-color: var(--text-main) !important;
        }
        .toc-item:hover {
          background: var(--border-light);
        }
        .policy-text-block ul {
          padding-left: 1.5rem;
        }
        .policy-text-block li {
          margin-bottom: 0.5rem;
        }

        /* Responsive Styles */
        @media (max-width: 968px) {
          .policy-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .policy-sidebar {
            display: none !important;
          }
          .conduct-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .policy-hero h1 {
            font-size: 2rem !important;
          }
          .policy-controls {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .print-btn {
            justify-content: center !important;
          }
        }

        /* Print Media Styles */
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          header, footer, .policy-hero, .policy-controls, .policy-sidebar, .print-btn, .search-input {
            display: none !important;
          }
          main {
            padding-top: 0 !important;
          }
          .container {
            max-width: 100% !important;
            padding: 0 !important;
          }
          .policy-layout {
            display: block !important;
          }
          .policy-content section {
            page-break-inside: avoid;
            border-bottom: none !important;
            padding-bottom: 1.5rem !important;
          }
          h2 {
            margin-top: 2rem !important;
          }
          body::before {
            content: "Hello Zindagi Inc. - Child Safety and Wellbeing Policy";
            display: block;
            text-align: center;
            font-weight: bold;
            font-size: 1.5rem;
            margin-bottom: 2rem;
            border-bottom: 2px solid #000;
            padding-bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ChildSafetyPolicy;

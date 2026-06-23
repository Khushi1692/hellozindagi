import React, { useState, useEffect } from 'react';
import { ShieldAlert, Search, Printer, Mail, Phone, BookOpen, AlertTriangle, FileText, ArrowRight, Heart } from 'lucide-react';
import SEO from './SEO';

const AntiRacismPolicy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('statement');

  const sections = [
    {
      id: "statement",
      title: "1. Policy Statement",
      keywords: "statement victoria strategy committed safe community discrimination diversity",
      content: (
        <div>
          <p style={{ fontWeight: 600, color: 'var(--primary-dark)', marginBottom: '1rem', fontSize: '1.1rem' }}>
            Acknowledgement and Support
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Hello Zindagi Inc. acknowledges and supports the objectives of Victoria’s Anti-Racism Strategy 2024–2029. Our organisation is committed to implementing anti-racism principles through community engagement, culturally safe practices, inclusive leadership, equitable participation and effective responses to racism and discrimination.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Hello Zindagi Inc. is committed to creating and maintaining an environment where every person is treated with dignity, fairness, respect, and equality regardless of race, ethnicity, nationality, colour, ancestry, language, religion, cultural background, migration status, or appearance.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            We believe diversity strengthens our community and enriches our organisation. Racism, discrimination, vilification, stereotyping, exclusion, harassment, and prejudice have no place within Hello Zindagi Inc.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            This policy is guided by the principles of Victoria’s Anti-Racism Strategy 2024–2029, which recognises that anti-racism requires active and ongoing efforts to identify, challenge, prevent and eliminate racism at personal, organisational and systemic levels.
          </p>
        </div>
      )
    },
    {
      id: "purpose",
      title: "2. Purpose",
      keywords: "purpose safe inclusive prevent support experience report cultural",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            The purpose of this policy is to:
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
            <li>Promote a safe, inclusive and culturally respectful environment.</li>
            <li>Prevent racism, discrimination and racial vilification.</li>
            <li>Support people who experience racism.</li>
            <li>Provide clear processes for reporting and addressing concerns.</li>
            <li>Ensure all Hello Zindagi Inc. activities, programs and services are culturally safe and accessible.</li>
            <li>Foster mutual respect among members, volunteers, employees, participants and community partners.</li>
          </ul>
        </div>
      )
    },
    {
      id: "scope",
      title: "3. Scope",
      keywords: "scope board staff volunteers contractors consultants members program participants service users visitors workplace meetings",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            This policy applies to:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {[
              "Board members", "Staff", "Volunteers", "Contractors", "Consultants", 
              "Members", "Program participants", "Service users", "Visitors", 
              "Partner organisations when working with Hello Zindagi Inc."
            ].map((role, idx) => (
              <span key={idx} style={{ background: 'var(--bg-section)', border: '1px solid var(--border)', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.88rem' }}>
                {role}
              </span>
            ))}
          </div>

          <p style={{ marginBottom: '1rem' }}>
            The policy applies to all aspects of our activities, including:
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            {[
              "Workplace interactions", "Community events", "Programs and services", 
              "Meetings", "Training sessions", "Social media activities", 
              "Online communications", "Community engagement activities"
            ].map((activity, idx) => (
              <div key={idx} style={{ 
                background: 'var(--bg-section)', 
                padding: '0.75rem 1rem', 
                borderRadius: 'var(--radius-sm)',
                borderLeft: '3px solid var(--primary)',
                fontSize: '0.9rem'
              }}>
                {activity}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "principles",
      title: "4. Guiding Principles",
      keywords: "guiding principles respect inclusion cultural safety equity accountability continuous learning",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Hello Zindagi Inc. commits to the following values and actions:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }} className="principles-grid">
            {[
              { title: "Respect", desc: "Every individual deserves respect regardless of their cultural, ethnic, linguistic or religious background." },
              { title: "Inclusion", desc: "Everyone has the right to participate fully in community life without fear of discrimination." },
              { title: "Cultural Safety", desc: "We strive to create environments where identities, experiences and perspectives are recognised, respected and valued. A culturally safe environment is free from racism, discrimination and denial of identity." },
              { title: "Equity", desc: "We recognise that equal treatment does not always create equal outcomes. We aim to remove barriers that disadvantage individuals and communities." },
              { title: "Accountability", desc: "All members of our organisation share responsibility for preventing and responding to racism." },
              { title: "Continuous Learning", desc: "Anti-racism is an ongoing practice that requires reflection, education and action." }
            ].map((p, idx) => (
              <div key={idx} style={{ 
                background: 'var(--bg-section)', 
                padding: '1.25rem', 
                borderRadius: 'var(--radius-sm)', 
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <strong style={{ color: 'var(--primary-dark)', fontSize: '1.05rem' }}>{p.title}</strong>
                <span style={{ fontSize: '0.925rem', color: 'var(--text-body)', lineHeight: 1.6 }}>{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "definition",
      title: "5. Definition of Racism",
      keywords: "definition racism interpersonal institutional structural online comments jokes policies systems hate speech",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            For the purposes of this policy, <strong>racism</strong> refers to any behaviour, action, belief, policy or practice that unfairly disadvantages, excludes, humiliates, stereotypes or discriminates against a person or group because of their race, ethnicity, culture, nationality, ancestry, language or religion.
          </p>
          <p style={{ marginBottom: '1rem', fontWeight: 600 }}>
            Racism may manifest in various forms:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { type: "Interpersonal Racism", desc: "Racist comments, jokes, insults, abuse, harassment, bullying or exclusion." },
              { type: "Institutional Racism", desc: "Policies, procedures or practices that unintentionally disadvantage particular cultural or ethnic groups." },
              { type: "Structural Racism", desc: "Broader systems and social structures that create unequal outcomes for certain communities over time." },
              { type: "Online Racism", desc: "Racist behaviour, hate speech, harassment or discriminatory content shared through social media, messaging platforms or digital communications." }
            ].map((item, idx) => (
              <div key={idx} style={{ 
                background: 'rgba(234, 88, 12, 0.02)', 
                padding: '1rem 1.25rem', 
                borderRadius: 'var(--radius-sm)',
                borderLeft: '4px solid var(--accent)'
              }}>
                <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.25rem' }}>{item.type}</strong>
                <span style={{ fontSize: '0.95rem', color: 'var(--text-body)' }}>{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "commitments",
      title: "6. Our Commitments",
      keywords: "commitments culture services leadership capability respond inclusive representation volunteer training bias",
      content: (
        <div>
          <p style={{ marginBottom: '1.5rem' }}>
            Hello Zindagi Inc. actively implements anti-racist strategies:
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <h5 style={{ color: 'var(--primary-dark)', fontWeight: 700, marginBottom: '0.5rem' }}>6.1 Foster an Inclusive Culture</h5>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li>Promote respect for cultural diversity.</li>
                <li>Celebrate multiculturalism.</li>
                <li>Encourage meaningful intercultural engagement.</li>
                <li>Ensure inclusive participation in all programs.</li>
              </ul>
            </div>

            <div>
              <h5 style={{ color: 'var(--primary-dark)', fontWeight: 700, marginBottom: '0.5rem' }}>6.2 Provide Culturally Safe Services</h5>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>We will:</p>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li>Respect cultural and religious practices.</li>
                <li>Use accessible and inclusive communication.</li>
                <li>Provide language support where practical.</li>
                <li>Remove barriers that limit participation.</li>
              </ul>
            </div>

            <div>
              <h5 style={{ color: 'var(--primary-dark)', fontWeight: 700, marginBottom: '0.5rem' }}>6.3 Promote Diverse Leadership</h5>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>We will encourage:</p>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li>Representation from diverse communities.</li>
                <li>Inclusive recruitment and volunteer engagement.</li>
                <li>Leadership opportunities for underrepresented groups.</li>
              </ul>
            </div>

            <div>
              <h5 style={{ color: 'var(--primary-dark)', fontWeight: 700, marginBottom: '0.5rem' }}>6.4 Build Anti-Racism Capability</h5>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>We will:</p>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li>Provide anti-racism awareness training.</li>
                <li>Promote understanding of unconscious bias.</li>
                <li>Encourage cultural competency development.</li>
                <li>Educate volunteers and staff on inclusive practices.</li>
              </ul>
            </div>

            <div>
              <h5 style={{ color: 'var(--primary-dark)', fontWeight: 700, marginBottom: '0.5rem' }}>6.5 Respond to Racism Promptly</h5>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li>We will investigate and address complaints fairly, confidentially and promptly.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "standards",
      title: "7. Expected Standards of Behaviour",
      keywords: "standards behaviour respect reject racism speak up slurs stereotypes harassment online",
      content: (
        <div>
          <p style={{ marginBottom: '1.25rem' }}>
            All people associated with Hello Zindagi Inc. must uphold our code of conduct:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--bg-section)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
              <strong style={{ display: 'block', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Demonstrate Respect:</strong>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.925rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>Treat others fairly and respectfully.</li>
                <li>Value different cultures and perspectives.</li>
                <li>Listen respectfully to lived experiences.</li>
              </ul>
            </div>

            <div style={{ background: 'rgba(234, 88, 12, 0.03)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(234, 88, 12, 0.15)' }}>
              <strong style={{ display: 'block', color: 'var(--accent)', marginBottom: '0.5rem' }}>Reject Racism (Members must NOT):</strong>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.925rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>Use racist language or slurs.</li>
                <li>Share racist stereotypes.</li>
                <li>Engage in racial harassment.</li>
                <li>Exclude others because of cultural background.</li>
                <li>Make assumptions based on race, ethnicity or religion.</li>
                <li>Share racist content online.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--bg-section)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
              <strong style={{ display: 'block', color: 'var(--secondary)', marginBottom: '0.5rem' }}>Speak Up:</strong>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.925rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>Challenge racism respectfully.</li>
                <li>Support individuals affected by racism.</li>
                <li>Report incidents when they occur.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "reporting",
      title: "8. Reporting Racism",
      keywords: "reporting contact president secretary written complaint mechanism employees volunteers members participants stakeholders",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Anyone who experiences or witnesses racism may:
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <li>Speak to a staff member or volunteer leader.</li>
            <li>Contact the President or Board Secretary.</li>
            <li>Submit a written complaint.</li>
            <li>Use any designated complaint mechanism established by the organisation.</li>
          </ul>

          <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Complaints may be made by:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {["Employees", "Volunteers", "Members", "Participants", "Community stakeholders"].map((user, idx) => (
              <span key={idx} style={{ 
                background: 'var(--bg-section)', 
                border: '1px solid var(--border)', 
                padding: '0.35rem 0.75rem', 
                borderRadius: '50px', 
                fontSize: '0.85rem',
                color: 'var(--text-body)'
              }}>
                {user}
              </span>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "complaint-handling",
      title: "9. Complaint Handling Process",
      keywords: "complaint process step receive assessment resolution follow-up mediation warning suspension",
      content: (
        <div>
          <p style={{ marginBottom: '1.25rem' }}>
            We handle all complaints through a clear, multi-step process:
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
            {[
              { step: "Step 1 – Receive Complaint", details: "The complaint will be acknowledged within 7 business days." },
              { step: "Step 2 – Assessment", details: "The organisation will: Listen to all parties; Review available evidence; Maintain confidentiality where possible." },
              { step: "Step 3 – Resolution", details: "Possible outcomes may include: Informal resolution; Mediation; Education or training; Formal warning; Suspension of participation; Removal from volunteer or membership roles; Referral to relevant authorities where appropriate." },
              { step: "Step 4 – Follow-Up", details: "The organisation will ensure the affected person receives information regarding the outcome and available support options." }
            ].map((proc, idx) => (
              <div key={idx} style={{ 
                background: 'var(--bg-section)', 
                padding: '1.25rem', 
                borderRadius: 'var(--radius-sm)',
                borderLeft: '4px solid var(--primary)'
              }}>
                <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.5rem' }}>{proc.step}</strong>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', margin: 0 }}>{proc.details}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "victimisation",
      title: "10. Protection Against Victimisation",
      keywords: "victimisation protection retaliation concern support investigation breach safety",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            No person will be disadvantaged, threatened, intimidated or treated unfairly because they:
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <li>Raise a concern about racism.</li>
            <li>Support another person’s complaint.</li>
            <li>Participate in an investigation.</li>
          </ul>
          
          <div style={{ 
            background: 'rgba(234, 88, 12, 0.05)', 
            padding: '1.25rem', 
            borderRadius: 'var(--radius-sm)', 
            border: '1px solid rgba(234, 88, 12, 0.2)'
          }}>
            <p style={{ color: 'var(--accent)', fontWeight: 600, margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertTriangle size={18} /> Retaliation or victimisation will be treated as a serious breach of this policy.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "responsibilities",
      title: "11. Responsibilities",
      keywords: "responsibilities board staff volunteers members participants standards monitoring",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Different roles within our organisation hold key responsibilities:
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--bg-section)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Board of Management:</strong>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                <li>Lead by example.</li>
                <li>Monitor policy implementation.</li>
                <li>Review complaints data.</li>
                <li>Ensure adequate anti-racism measures are in place.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--bg-section)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Staff and Volunteers:</strong>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                <li>Follow this policy.</li>
                <li>Participate in training.</li>
                <li>Promote respectful behaviour.</li>
                <li>Report incidents when observed.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--bg-section)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Members and Participants:</strong>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                <li>Respect others.</li>
                <li>Contribute to an inclusive environment.</li>
                <li>Comply with organisational standards.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "monitoring",
      title: "12. Monitoring & Improvement",
      keywords: "monitoring improvement review annual complaints feedback services practice initiatives",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Hello Zindagi Inc. will continuously improve our anti-racism framework:
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <li>Review this policy annually.</li>
            <li>Monitor complaints and outcomes.</li>
            <li>Seek feedback from community members.</li>
            <li>Improve services and practices based on learning and lived experiences.</li>
            <li>Strengthen anti-racism initiatives across programs and activities.</li>
          </ul>
        </div>
      )
    },
    {
      id: "framework",
      title: "13. Legislative Framework",
      keywords: "legislation framework equal opportunity racial religious tolerance act charter human rights victoria strategy",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            This policy aligns with:
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <li>Equal Opportunity Act 2010 (Victoria)</li>
            <li>Racial and Religious Tolerance Act 2001 (Victoria)</li>
            <li>Charter of Human Rights and Responsibilities Act 2006 (Victoria)</li>
            <li>Victoria’s Anti-Racism Strategy 2024–2029</li>
          </ul>
        </div>
      )
    }
  ];

  const filteredSections = sections.filter(sec => 
    sec.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    sec.keywords.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePrint = () => {
    window.print();
  };

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
        title="Anti-Racism Policy | Hello Zindagi"
        description="Read Hello Zindagi Inc.'s Anti-Racism Policy. Learn about our commitment to diversity, inclusion, and cultural safety guided by Victoria's legislative frameworks."
        url="https://hellozindagi.org.au/anti-racism"
        keywords="Anti Racism, Equal Opportunity Victoria, Cultural Safety, Racial Tolerance, Hello Zindagi Policy"
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
            Anti-Racism Policy
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem' }}>
            Our commitment to implementing anti-racism principles through community engagement and culturally safe practices.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
            <span><strong>Approved By:</strong> Board of Management</span>
            <span>•</span>
            <span><strong>Effective Date:</strong> 11-Jun-2026</span>
            <span>•</span>
            <span><strong>Review Date:</strong> 11-Jun-2026</span>
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

              {/* Statement of Commitment Callout */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.08) 0%, rgba(80, 70, 229, 0.08) 100%)',
                padding: '2.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border)',
                marginTop: '1.5rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }} className="commitment-card">
                <Heart size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', fontWeight: 700 }}>Statement of Commitment</h3>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.7, fontWeight: 500, fontStyle: 'italic', maxWidth: '600px', margin: '0 auto 1.25rem auto' }}>
                  "Hello Zindagi Inc. celebrates diversity, rejects racism in all its forms, and is committed to building a community where every individual feels safe, respected, valued and empowered to participate fully."
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  “Together we create a community where diversity is celebrated, dignity is protected, and every voice belongs.”
                </p>
              </div>
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
          .principles-grid {
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
          header, footer, .policy-hero, .policy-controls, .policy-sidebar, .print-btn, .search-input, .commitment-card svg {
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
            content: "Hello Zindagi Inc. - Anti-Racism Policy";
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

export default AntiRacismPolicy;

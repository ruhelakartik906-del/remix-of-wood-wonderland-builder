import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

/* ─── Whistle Blower Policy ─── */
const whistleBlowerContent = (
  <div className="policy-document font-serif text-foreground leading-relaxed">
    <div className="text-center border-b-2 border-foreground pb-6 mb-8">
      <h1 className="text-2xl font-bold tracking-wide">INFINITY BOARD PRIVATE LIMITED</h1>
      <p className="text-lg mt-2 font-semibold">Whistle Blower Policy</p>
    </div>

    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">1.0 &nbsp; PREAMBLE</h2>
      <p className="mb-3 text-sm">
        1.1 &nbsp; Infinity Board Private Limited ("the Company") is committed to conducting its business with the highest standards of integrity, transparency, and ethical behaviour. The Company believes that establishing a robust mechanism for reporting unethical conduct is fundamental to maintaining trust among its stakeholders, employees, and the public at large.
      </p>
      <p className="mb-3 text-sm">
        1.2 &nbsp; This Whistle Blower Policy ("Policy") has been formulated in accordance with Section 177(9) and (10) of the Companies Act, 2013, read with Rule 7 of the Companies (Meetings of Board and its Powers) Rules, 2014, and in alignment with the principles of corporate governance.
      </p>
      <p className="mb-3 text-sm">
        1.3 &nbsp; The Company recognises that employees and directors, being closest to the day-to-day operations, are in the best position to identify instances of malpractice, improper conduct, or violations of law. This Policy provides a secure channel for such individuals to raise genuine concerns without fear of retaliation, victimisation, or adverse consequences.
      </p>
      <p className="text-sm">
        1.4 &nbsp; The Board of Directors is fully committed to ensuring that any person who raises a concern in good faith shall be protected and that each reported matter shall be investigated thoroughly, fairly, and in a timely manner.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">2.0 &nbsp; OBJECTIVE</h2>
      <p className="mb-3 text-sm">
        2.1 &nbsp; The primary objective of this Policy is to provide a formal, confidential, and reliable mechanism through which employees, directors, and other stakeholders of the Company can report genuine concerns relating to unethical behaviour, actual or suspected fraud, or violations of the Company's Code of Conduct.
      </p>
      <p className="mb-3 text-sm">
        2.2 &nbsp; The Policy aims to:
      </p>
      <ul className="list-disc pl-8 space-y-2 text-sm mb-3">
        <li>Encourage a culture of openness and accountability within the organisation;</li>
        <li>Provide a mechanism for employees to report concerns without fear of adverse action;</li>
        <li>Ensure that reported matters are investigated objectively and in a timely fashion;</li>
        <li>Protect the identity and interests of the Whistle Blower from any form of victimisation;</li>
        <li>Promote ethical corporate behaviour and strengthen governance practices.</li>
      </ul>
      <p className="text-sm">
        2.3 &nbsp; This Policy is not intended to replace existing grievance redressal mechanisms or complaint procedures. It specifically addresses concerns of a serious nature involving financial irregularities, legal violations, and ethical misconduct.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">3.0 &nbsp; IMPROPER ACTIVITIES / SCOPE</h2>
      <p className="mb-3 text-sm">
        3.1 &nbsp; This Policy covers concerns relating to, but not limited to, the following categories of improper activities:
      </p>
      <p className="mb-2 text-sm font-semibold">3.1.1 &nbsp; Financial Irregularities:</p>
      <ul className="list-disc pl-8 space-y-1 text-sm mb-3">
        <li>Manipulation or misrepresentation of financial statements, records, or reports;</li>
        <li>Misappropriation of Company funds, assets, or resources;</li>
        <li>Fraudulent claims for reimbursement or expenses;</li>
        <li>Non-disclosure of material information affecting the financial position of the Company.</li>
      </ul>
      <p className="mb-2 text-sm font-semibold">3.1.2 &nbsp; Legal and Regulatory Violations:</p>
      <ul className="list-disc pl-8 space-y-1 text-sm mb-3">
        <li>Breach of any applicable law, rule, regulation, or statutory requirement;</li>
        <li>Non-compliance with the Company's policies, procedures, or code of conduct;</li>
        <li>Bribery, corruption, or offering/accepting illegal gratification.</li>
      </ul>
      <p className="mb-2 text-sm font-semibold">3.1.3 &nbsp; Health, Safety, and Environmental Concerns:</p>
      <ul className="list-disc pl-8 space-y-1 text-sm mb-3">
        <li>Deliberate violation of health and safety norms or standards;</li>
        <li>Environmental pollution or damage caused by the Company's operations;</li>
        <li>Endangering the life or safety of employees, contractors, or the public.</li>
      </ul>
      <p className="mb-2 text-sm font-semibold">3.1.4 &nbsp; Ethical Misconduct:</p>
      <ul className="list-disc pl-8 space-y-1 text-sm mb-3">
        <li>Abuse of authority or position for personal gain;</li>
        <li>Discrimination, harassment, or intimidation of any employee;</li>
        <li>Conflict of interest that has not been disclosed as required;</li>
        <li>Any act that brings disrepute to the Company or its stakeholders.</li>
      </ul>
      <p className="text-sm">
        3.2 &nbsp; This Policy shall apply to all employees (permanent, contractual, and temporary), directors, officers, consultants, vendors, and any other person associated with the Company who becomes aware of any improper activity.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">4.0 &nbsp; DEFINITIONS</h2>
      <p className="mb-3 text-sm">
        4.1 &nbsp; <strong>"Whistle Blower"</strong> means any employee, director, or stakeholder of the Company who raises a concern regarding any unethical behaviour, actual or suspected fraud, or violation of the Company's Code of Conduct or any applicable law, using the mechanism provided under this Policy.
      </p>
      <p className="mb-3 text-sm">
        4.2 &nbsp; <strong>"Vigilance Officer"</strong> means the officer appointed by the Board of Directors or the Audit Committee to receive and investigate complaints or concerns raised under this Policy. The Vigilance Officer shall act as the custodian of this Policy and shall be responsible for its proper administration.
      </p>
      <p className="mb-3 text-sm">
        4.3 &nbsp; <strong>"Subject"</strong> means any person or group of persons against whom a complaint or concern has been raised under this Policy and who is the subject of investigation. The Subject shall have the right to be informed of the allegations and to present their case during the investigation.
      </p>
      <p className="mb-3 text-sm">
        4.4 &nbsp; <strong>"Audit Committee"</strong> means the Audit Committee constituted by the Board of Directors of the Company in accordance with the provisions of the Companies Act, 2013.
      </p>
      <p className="text-sm">
        4.5 &nbsp; <strong>"Protected Disclosure"</strong> means a disclosure made in good faith by the Whistle Blower, which discloses or demonstrates information about an unethical or improper activity with respect to the Company. It does not include grievances about service conditions, terms of employment, or matters for which separate redressal mechanisms exist.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">5.0 &nbsp; REPORTING PROCEDURE</h2>
      <p className="mb-3 text-sm">
        5.1 &nbsp; Any person who has knowledge of or suspects any improper activity as defined under this Policy may report such concern through the following channels:
      </p>
      <p className="mb-2 text-sm font-semibold">5.1.1 &nbsp; Written Complaint:</p>
      <p className="mb-3 text-sm pl-4">
        The Whistle Blower may submit a written complaint in a sealed envelope addressed to the Vigilance Officer at the registered office of the Company. The envelope shall be clearly marked as "Confidential – Whistle Blower Complaint".
      </p>
      <p className="mb-2 text-sm font-semibold">5.1.2 &nbsp; Electronic Mail:</p>
      <p className="mb-3 text-sm pl-4">
        The Whistle Blower may send an email to the designated email address: <strong>whistleblower@infinityboards.in</strong>. The email shall contain all relevant details, including the nature of the concern, individuals involved, and any supporting evidence.
      </p>
      <p className="mb-3 text-sm">
        5.2 &nbsp; Every complaint or concern raised must contain:
      </p>
      <ul className="list-disc pl-8 space-y-1 text-sm mb-3">
        <li>A clear description of the improper activity or concern;</li>
        <li>The identity of the person(s) involved, if known;</li>
        <li>The date, time, and location of the incident, if applicable;</li>
        <li>Any documentary evidence or supporting material available.</li>
      </ul>
      <p className="mb-3 text-sm">
        5.3 &nbsp; Anonymous complaints shall generally not be entertained; however, the Vigilance Officer may, at their discretion, investigate anonymous complaints if supported by sufficient evidence or if the matter is of serious concern.
      </p>
      <p className="mb-3 text-sm">
        5.4 &nbsp; Upon receipt of a complaint, the Vigilance Officer shall acknowledge receipt within seven (7) working days and shall initiate a preliminary review within fifteen (15) working days.
      </p>
      <p className="text-sm">
        5.5 &nbsp; The identity of the Whistle Blower shall be kept strictly confidential throughout the investigation process and shall not be disclosed to the Subject or any other party without the prior written consent of the Whistle Blower, except where required by law.
      </p>
    </section>

    <div className="text-center text-xs text-muted-foreground mt-12 pt-6 border-t border-border">
      This document is the property of Infinity Board Private Limited. Unauthorised reproduction is prohibited.
    </div>
  </div>
);

/* ─── CSR Policy ─── */
const csrContent = (
  <div className="policy-document font-serif text-foreground leading-relaxed">
    <div className="text-center border-b-2 border-foreground pb-6 mb-8">
      <h1 className="text-2xl font-bold tracking-wide">INFINITY BOARD PRIVATE LIMITED</h1>
      <p className="text-lg mt-2 font-semibold">Corporate Social Responsibility (CSR) Policy</p>
    </div>

    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">1.0 &nbsp; OBJECTIVE</h2>
      <p className="mb-3 text-sm">
        1.1 &nbsp; Infinity Board Private Limited ("the Company") is committed to operating its business in a socially responsible manner and contributing positively to the communities in which it operates. The Company recognises that sustainable business growth is intrinsically linked to the well-being of society and the environment.
      </p>
      <p className="mb-3 text-sm">
        1.2 &nbsp; This Corporate Social Responsibility ("CSR") Policy has been formulated in compliance with Section 135 of the Companies Act, 2013, read with the Companies (Corporate Social Responsibility Policy) Rules, 2014, and the amendments thereto.
      </p>
      <p className="mb-3 text-sm">
        1.3 &nbsp; The objective of this Policy is to:
      </p>
      <ul className="list-disc pl-8 space-y-2 text-sm mb-3">
        <li>Establish a framework for the Company's CSR activities and initiatives;</li>
        <li>Identify focus areas and projects that align with the Company's values and capabilities;</li>
        <li>Ensure that CSR expenditure is utilised effectively and transparently;</li>
        <li>Contribute to sustainable development through meaningful social, environmental, and economic interventions;</li>
        <li>Comply with the statutory requirements under the Companies Act, 2013.</li>
      </ul>
      <p className="text-sm">
        1.4 &nbsp; The Company shall spend, in every financial year, at least two percent (2%) of the average net profits of the Company made during the three immediately preceding financial years, in pursuance of its CSR Policy, as mandated by law.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">2.0 &nbsp; PROJECT IDENTIFICATION AND IMPLEMENTATION</h2>
      <p className="mb-3 text-sm">
        2.1 &nbsp; The Company shall undertake CSR activities in the following focus areas, as specified in Schedule VII of the Companies Act, 2013:
      </p>
      <p className="mb-2 text-sm font-semibold">2.1.1 &nbsp; Education and Skill Development:</p>
      <ul className="list-disc pl-8 space-y-1 text-sm mb-3">
        <li>Promoting education, including special education and employment-enhancing vocational skills;</li>
        <li>Supporting schools, colleges, and educational institutions in underprivileged areas;</li>
        <li>Providing scholarships, books, and learning materials to deserving students;</li>
        <li>Conducting skill development and livelihood enhancement programmes for youth.</li>
      </ul>
      <p className="mb-2 text-sm font-semibold">2.1.2 &nbsp; Environmental Sustainability:</p>
      <ul className="list-disc pl-8 space-y-1 text-sm mb-3">
        <li>Ensuring environmental sustainability through conservation of natural resources;</li>
        <li>Maintaining the quality of soil, air, and water through responsible manufacturing practices;</li>
        <li>Undertaking afforestation and tree plantation drives;</li>
        <li>Promoting renewable energy sources and energy-efficient technologies.</li>
      </ul>
      <p className="mb-2 text-sm font-semibold">2.1.3 &nbsp; Rural Development and Healthcare:</p>
      <ul className="list-disc pl-8 space-y-1 text-sm mb-3">
        <li>Supporting rural development projects, including infrastructure improvement;</li>
        <li>Promoting sanitation, clean drinking water, and healthcare facilities;</li>
        <li>Empowering women and economically weaker sections of society;</li>
        <li>Organising health camps and awareness programmes in rural and semi-urban areas.</li>
      </ul>
      <p className="mb-3 text-sm">
        2.2 &nbsp; The Company may implement its CSR activities directly or through registered trusts, societies, Section 8 companies, or partnerships with NGOs having an established track record of at least three years.
      </p>
      <p className="mb-3 text-sm">
        2.3 &nbsp; The CSR Committee shall identify and recommend specific projects and programmes to the Board of Directors for approval. Each project proposal shall include a detailed description, estimated budget, timeline, expected impact, and measurable outcomes.
      </p>
      <p className="text-sm">
        2.4 &nbsp; The Company shall give preference to local areas and areas around which it operates for spending the amount earmarked for CSR activities. Any surplus arising out of CSR activities shall not form part of the business profit of the Company and shall be ploughed back into CSR projects.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3">3.0 &nbsp; ROLE AND RESPONSIBILITIES OF THE BOARD</h2>
      <p className="mb-3 text-sm">
        3.1 &nbsp; <strong>Board of Directors:</strong>
      </p>
      <ul className="list-disc pl-8 space-y-1 text-sm mb-3">
        <li>The Board of Directors shall approve the CSR Policy and any amendments thereto;</li>
        <li>The Board shall ensure that the CSR activities are undertaken as per the approved Policy;</li>
        <li>The Board shall disclose the contents of the CSR Policy in its report and also publish the same on the Company's website;</li>
        <li>The Board shall ensure that the Company spends the required amount on CSR activities in each financial year.</li>
      </ul>
      <p className="mb-3 text-sm">
        3.2 &nbsp; <strong>CSR Committee:</strong>
      </p>
      <ul className="list-disc pl-8 space-y-1 text-sm mb-3">
        <li>The CSR Committee shall formulate and recommend the CSR Policy to the Board;</li>
        <li>The Committee shall recommend the amount of expenditure to be incurred on CSR activities;</li>
        <li>The Committee shall monitor the implementation of CSR projects and review progress periodically;</li>
        <li>The Committee shall ensure that CSR funds are utilised for the purposes for which they are allocated;</li>
        <li>The Committee shall prepare and submit an annual report on CSR activities to the Board.</li>
      </ul>
      <p className="mb-3 text-sm">
        3.3 &nbsp; <strong>Managing Director / Chief Executive Officer:</strong> The Managing Director shall ensure the day-to-day implementation of CSR activities, coordinate with implementation partners, ensure timely execution of projects, and maintain proper records of CSR expenditure and activities undertaken.
      </p>
      <p className="text-sm">
        3.4 &nbsp; <strong>Chief Financial Officer:</strong> The Chief Financial Officer shall ensure that CSR expenditure is properly accounted for in the Company's financial statements and that the required disclosures are made in accordance with applicable accounting standards.
      </p>
    </section>

    <div className="text-center text-xs text-muted-foreground mt-12 pt-6 border-t border-border">
      This document is the property of Infinity Board Private Limited. Unauthorised reproduction is prohibited.
    </div>
  </div>
);

const policyMap: Record<string, { title: string; content: JSX.Element }> = {
  "whistle-blower-policy": { title: "Whistle Blower Policy", content: whistleBlowerContent },
  "csr-policy": { title: "CSR Policy", content: csrContent },
};

const PolicyViewer = () => {
  const { slug } = useParams<{ slug: string }>();
  const policy = slug ? policyMap[slug] : null;

  if (!policy) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Policy Not Found</h1>
          <Link to="/policies" className="text-primary hover:underline">← Back to Policies</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-muted min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/policies"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Policies
          </Link>

          {/* Document */}
          <div className="bg-white rounded shadow-lg p-8 md:p-14">
            {policy.content}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PolicyViewer;

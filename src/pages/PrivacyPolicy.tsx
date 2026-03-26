import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const ArrowBullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 mb-2">
    <ArrowRight size={18} className="shrink-0 mt-1 text-blue-600" />
    <span>{children}</span>
  </li>
);

const SectionHeading = ({ number, title }: { number: string; title: string }) => (
  <h2 className="text-xl font-bold text-blue-700 mt-8 mb-4">
    {number}. {title}
  </h2>
);

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="bg-muted/30 min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            {/* Company Header */}
            <div className="text-center border-b border-border pb-6 mb-8">
              <h1 className="text-2xl font-bold text-foreground mb-2 md:text-4xl">
                INFINITY BOARD
              </h1>
              <p className="text-sm text-muted-foreground mb-1">
                Regd. Off.: E-503, Dilbagh Rose Garden, Fazalganj, Kanpur, Uttar Pradesh - 208012
              </p>
              <p className="text-sm text-muted-foreground">
                Email: Info@infinityboards.in &nbsp;|&nbsp; Phone: +91 96545 91696
              </p>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-8">
              VIGIL MECHANISM / WHISTLE BLOWER POLICY
            </h1>

            {/* 1. PREAMBLE */}
            <SectionHeading number="1" title="PREAMBLE" />
            <p className="text-foreground leading-relaxed mb-4">
              Infinity Board is committed to the highest standards of ethical, moral, and legal business conduct.
              In line with this commitment, the Company has formulated this Vigil Mechanism / Whistle Blower Policy
              ("Policy") to provide a framework for responsible and secure reporting of genuine concerns regarding
              unethical behavior, actual or suspected fraud, or violation of the Company's Code of Conduct.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              This Policy is formulated as per the provisions of Section 177(9) & (10) of the Companies Act, 2013
              and the corresponding Rules, and aims to safeguard the interests of employees, directors, and stakeholders
              who raise such concerns.
            </p>

            {/* 2. OBJECTIVE */}
            <SectionHeading number="2" title="OBJECTIVE" />
            <p className="text-foreground leading-relaxed mb-3">
              The objectives of this Policy are:
            </p>
            <ul className="ml-2 mb-4">
              <ArrowBullet>
                To provide a mechanism for employees, directors, and stakeholders to report genuine concerns
                about unethical behavior, actual or suspected fraud, or any violation of the Company's Code of Conduct.
              </ArrowBullet>
              <ArrowBullet>
                To ensure that the whistle blower is protected against victimization for raising concerns in good faith.
              </ArrowBullet>
              <ArrowBullet>
                To provide adequate safeguards against false or malicious complaints.
              </ArrowBullet>
              <ArrowBullet>
                To create an environment where individuals feel confident in raising concerns without fear of retaliation.
              </ArrowBullet>
              <ArrowBullet>
                To ensure that all reported concerns are investigated thoroughly and appropriate corrective actions are taken.
              </ArrowBullet>
            </ul>

            {/* 3. IMPROPER ACTIVITIES / SCOPE */}
            <SectionHeading number="3" title="IMPROPER ACTIVITIES / SCOPE" />
            <p className="text-foreground leading-relaxed mb-3">
              This Policy covers any improper activity or conduct that falls within the following categories:
            </p>
            <ul className="ml-2 mb-4">
              <ArrowBullet>
                Breach of the Company's Code of Conduct, ethics policies, or established operating procedures.
              </ArrowBullet>
              <ArrowBullet>
                Financial irregularities, including fraud, bribery, corruption, or misappropriation of funds.
              </ArrowBullet>
              <ArrowBullet>
                Any unlawful act, whether civil or criminal in nature, committed by any employee or officer of the Company.
              </ArrowBullet>
              <ArrowBullet>
                Abuse of authority or misuse of Company property and resources.
              </ArrowBullet>
              <ArrowBullet>
                Issues related to the quality and manufacturing standards of the Company's product range, including
                <strong> MDF Board, HDHMR Board, Particle Board, and Flame Guard Board</strong>, ensuring compliance
                with established quality benchmarks and regulatory standards.
              </ArrowBullet>
              <ArrowBullet>
                Health, safety, and environmental concerns at the Company's manufacturing units and offices.
              </ArrowBullet>
              <ArrowBullet>
                Discrimination, harassment, or any form of workplace misconduct.
              </ArrowBullet>
              <ArrowBullet>
                Deliberate concealment of information related to any of the above.
              </ArrowBullet>
            </ul>

            {/* 4. DEFINITIONS */}
            <SectionHeading number="4" title="DEFINITIONS" />
            <ul className="ml-2 mb-4">
              <ArrowBullet>
                <strong>"Whistle Blower"</strong> means any employee, director, or stakeholder of the Company who
                raises a concern under this Policy regarding any unethical activity, fraud, or violation of the
                Company's Code of Conduct.
              </ArrowBullet>
              <ArrowBullet>
                <strong>"Complaint"</strong> means a written communication made in good faith that discloses information
                about an improper activity as defined in this Policy.
              </ArrowBullet>
              <ArrowBullet>
                <strong>"Subject"</strong> means the person or group of persons against whom the complaint has been
                made or who is the subject of the investigation.
              </ArrowBullet>
              <ArrowBullet>
                <strong>"Vigilance Officer"</strong> means the officer appointed by the Board of Directors to receive
                and process complaints under this Policy.
              </ArrowBullet>
              <ArrowBullet>
                <strong>"Audit Committee"</strong> means the Audit Committee constituted by the Board of Directors of
                the Company in accordance with the Companies Act, 2013.
              </ArrowBullet>
              <ArrowBullet>
                <strong>"Protected Disclosure"</strong> means any communication made in good faith that discloses or
                demonstrates information that may evidence unethical or improper activity.
              </ArrowBullet>
            </ul>

            {/* 5. REPORTING PROCEDURE */}
            <SectionHeading number="5" title="REPORTING PROCEDURE" />
            <p className="text-foreground leading-relaxed mb-3">
              The following procedure shall be followed for reporting concerns under this Policy:
            </p>
            <ul className="ml-2 mb-4">
              <ArrowBullet>
                All complaints shall be addressed to the Vigilance Officer or the Chairman of the Audit Committee
                in writing. The complaint should be factual and not speculative, and should contain as much specific
                information as possible to allow for proper assessment.
              </ArrowBullet>
              <ArrowBullet>
                The complaint may be submitted via email at <strong>Info@infinityboards.in</strong> or through
                a sealed letter addressed to the Vigilance Officer at the Company's Registered Office.
              </ArrowBullet>
              <ArrowBullet>
                The identity of the Whistle Blower shall be kept strictly confidential to the extent possible and
                shall not be disclosed without the consent of the Whistle Blower, except where required by law.
              </ArrowBullet>
              <ArrowBullet>
                Upon receipt of a complaint, the Vigilance Officer shall conduct an initial assessment to determine
                whether the complaint falls within the scope of this Policy and warrants a detailed investigation.
              </ArrowBullet>
              <ArrowBullet>
                If the complaint is found to be substantive, a detailed investigation shall be conducted. The
                investigation shall be completed within a reasonable time frame, and the findings shall be reported
                to the Audit Committee.
              </ArrowBullet>
              <ArrowBullet>
                The Whistle Blower shall be informed of the outcome of the investigation, subject to legal and
                other constraints.
              </ArrowBullet>
              <ArrowBullet>
                No adverse action shall be taken against the Whistle Blower for raising concerns in good faith.
                Any person found to have retaliated against a Whistle Blower shall be subject to disciplinary action.
              </ArrowBullet>
              <ArrowBullet>
                In case of repeated frivolous complaints being filed by any person, the Audit Committee may take
                suitable action against such person, including reprimand.
              </ArrowBullet>
            </ul>

            <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
              This policy is effective from the date of its adoption by the Board of Directors and shall be
              reviewed periodically.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

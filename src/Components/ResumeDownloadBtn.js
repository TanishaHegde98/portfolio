import ResumeUrl from "../Assets/Tanisha_Hegde_SWE.pdf";

export default function ResumeDownloadBtn() {
  return (
    <a href={ResumeUrl} download="Tanisha_Hegde_SWE.pdf" className="btn">
      Download Resume
    </a>
  );
}

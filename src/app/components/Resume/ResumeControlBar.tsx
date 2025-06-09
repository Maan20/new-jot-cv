"use client";
import { useEffect } from "react";
import { useSetDefaultScale } from "components/Resume/hooks";
import {
  MagnifyingGlassIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { usePDF } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import { useAppSelector } from "lib/redux/hooks";
import { selectResume } from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";

const ResumeControlBar = ({
  scale,
  setScale,
  documentSize,
  document,
  fileName,
}: {
  scale: number;
  setScale: (scale: number) => void;
  documentSize: string;
  document: JSX.Element;
  fileName: string;
}) => {
  const { scaleOnResize, setScaleOnResize } = useSetDefaultScale({
    setScale,
    documentSize,
  });

  const [instance, update] = usePDF({ document });
  const resume = useAppSelector(selectResume);

  // Hook to update pdf when document changes
  useEffect(() => {
    update();
  }, [update, document]);

  const handleDownload = async () => {
    try {
      // Ensure resume data is properly structured
      const resumeData = {
        basics: resume.profile || {},
        work: resume.workExperiences || [],
        education: resume.educations || [],
        skills: resume.skills || { featuredSkills: [], descriptions: [] },
        projects: resume.projects || [],
        custom: resume.custom || { descriptions: [] }
      };

      // Save resume data to API
      const response = await fetch('http://localhost:8000/api/resumes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(resumeData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to save resume data');
      }

      // Wait for PDF to be ready
      if (!instance.url) {
        throw new Error('PDF is not ready yet');
      }

      // Continue with the download
      const link = window.document.createElement("a");
      link.href = instance.url;
      link.download = fileName;
      link.click();
    } catch (error) {
      console.error('Error during download:', error);
      // Still attempt to download even if saving fails
      if (instance.url) {
        const link = window.document.createElement("a");
        link.href = instance.url;
        link.download = fileName;
        link.click();
      } else {
        console.error('PDF generation failed');
      }
    }
  };

  return (
    <div className="sticky bottom-0 left-0 right-0 flex h-[var(--resume-control-bar-height)] items-center justify-center px-[var(--resume-padding)] text-gray-600 lg:justify-between">
      <div className="flex items-center gap-2">
        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
        <input
          type="range"
          min={0.5}
          max={1.5}
          step={0.01}
          value={scale}
          onChange={(e) => {
            setScaleOnResize(false);
            setScale(Number(e.target.value));
          }}
        />
        <div className="w-10">{`${Math.round(scale * 100)}%`}</div>
        <label className="hidden items-center gap-1 lg:flex">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4"
            checked={scaleOnResize}
            onChange={() => setScaleOnResize((prev) => !prev)}
          />
          <span className="select-none">Autoscale</span>
        </label>
      </div>
      <button
        onClick={handleDownload}
        className="ml-1 flex items-center gap-1 rounded-md border border-gray-300 px-3 py-0.5 hover:bg-gray-100 lg:ml-8"
      >
        <ArrowDownTrayIcon className="h-4 w-4" />
        <span className="whitespace-nowrap">Download Resume</span>
      </button>
    </div>
  );
};

/**
 * Load ResumeControlBar client side since it uses usePDF, which is a web specific API
 */
export const ResumeControlBarCSR = dynamic(
  () => Promise.resolve(ResumeControlBar),
  {
    ssr: false,
  }
);

export const ResumeControlBarBorder = () => (
  <div className="absolute bottom-[var(--resume-control-bar-height)] w-full border-t-2 bg-gray-50" />
);

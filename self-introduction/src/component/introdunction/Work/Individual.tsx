import React from "react";
import WorkTimeLine, { WorkTimeLineProps } from "../presentaional/WorkTimeLine";
import WorkProject, { WorkProjectProps } from "../presentaional/WorkProject";

const Individual: React.FC = () => {
  const INDIVIDUAL_INFO: WorkTimeLineProps = {
    companyName: "개인",
    position: "",
    startTime: "",
    endTime: "",
  };
  const INDIVIDUAL_PROJECT_LIST: WorkProjectProps[] = [
    {
      projectTitle: "Schedule Today",
      startTime: "2020.08",
      endTime: "현재",
      description: "오늘 할일에 대한 관리 및 알림 서비스",
      usedSkills: [
        "Typescript",
        "JavaScript",
        "React",
        "React-Redux",
        "Redux-Thunk",
        "HTML",
        "CSS",
        "Service-Worker",
      ],
      doList: [
        "React를 이용한 Slider 기반의 Component 개발",
        "LocalStorage를 이용한 스케쥴 데이터 관리",
        "Service-Worker를 이용한 PWA 개발",
        "Service-worker를 이용한 backgorund notification 서비스 제공",
        "Redux를 이용한 컴포넌트 상태관리"
      ],
      hideDivider : true
    }
    // {
    //   projectTitle: "포트폴리오 플랫폼",
    //   startTime: "2020.09",
    //   endTime: "현재",
    //   description: "쉽게 포트폴리오를 만들 수 있는 웹 기반 플랫폼",
    //   usedSkills: ["Typescript", "HTML", "CSS", "Service-Worker", "WorkBox"],
    //   doList: [
    //     "React를 이용한 Slider 기반의 Component 개발",
    //     "LocalStorage를 이용한 데이터 CRUD",
    //     "Service-Worker , WorkBox를 이용한 PWA 제공",
    //     "Service-worker를 이용한 backgorund 알림 및 notification 서비스 제공",
    //   ],
    // },
  ];
  return (
    <WorkTimeLine
      companyName={INDIVIDUAL_INFO.companyName}
      position={INDIVIDUAL_INFO.position}
      startTime={INDIVIDUAL_INFO.startTime}
      endTime={INDIVIDUAL_INFO.endTime}
    >
      {INDIVIDUAL_PROJECT_LIST.map((project, index) => {
        return (
          <WorkProject
            key={index}
            projectTitle={project.projectTitle}
            startTime={project.startTime}
            endTime={project.endTime}
            description={project.description}
            usedSkills={project.usedSkills}
            doList={project.doList}
            hideDivider={project.hideDivider}
          />
        );
      })}
    </WorkTimeLine>
  );
};

export default Individual;

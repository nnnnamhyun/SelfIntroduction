import React from 'react';
import WorkTimeLine, { WorkTimeLineProps } from '../presentaional/WorkTimeLine';
import WorkProject, { WorkProjectProps } from '../presentaional/WorkProject';



const TmaxSoft : React.FC = () =>{

    const TMAX_SOFT_INFO : WorkTimeLineProps ={
        companyName : 'TmaxSoft',
        position : '연구원',
        startTime : '2018.02',
        endTime : '현재',
    }
    const TMAX_PROJECT_LIST : WorkProjectProps[] = [
        {
            projectTitle : 'BPMN 플로우 에디터 라이브러리 개발',
            startTime: '2019.08',
            endTime :'현재',
            description: 'Web IDE에 필요한 FLOW 에디터 라이브러리 개발을 진행하였습니다. BPMN.io를 확장시켜 진행하였고, 기존의 라이브러리에 호환성을 위해 순수 Javascript를 이용하였습니다. 또한 Class형태로 제공하여 쉽게 사용할수 있도록 설계하였고, .d.ts( types ) 파일을 제공하여 타입스크립트에서도 사용 가능하도록 개발하였습니다.',
            usedSkills : ['JavaScript','BPMN.io','HTML','CSS'],
            doList : ['BPMN.io의 moduler 확장 개발','Properties Panel 확장 개발을 위한 프레임워크 코드 개발','Anylink 스펙에 맞도록 Properties Panel 확장 개발','Context Panel 개발']
        },
        {
            projectTitle : 'Web IDE 개발',
            startTime: '2019.02',
            endTime :'현재',
            description: 'Anylink 제품 개발에 필요한 Web IDE 모듈을 개발하였습니다. IDE에 필요한 Navigator, Workspace, Editor, Preference 등의 기능을 구현하였고 꾸준히 리팩토링하며 향상시켜나가고 있습니다.',
            usedSkills : ['TypeScript','React','React-redux','Redux-thunk','Inversify.js','Theia','Node.js','Express','HTML','CSS'],
            doList : ['Theia Framework를 이용한 SPA WEB IDE 개발','React 컴포넌트 계층 구조 디자인 및 이를 이용한 리소스 에디터 페이지 개발','React-redux, Redux-thunk를 이용한 상태 관리 및 비동기 처리','TypeScript를 이용한 OOP 프로그래밍 및 다양한 디자인 패턴 적용','Express를 이용한 Backend 확장','Inversify를 이용한 dependency injection 적용']
        },
        {
            projectTitle : 'Anylink7 Studio 개발',
            startTime: '2018.02',
            endTime :'현재',
            description: '미들웨어팀에 신입으로 입사하여 Anylink제품의 Studio 모듈을 맡았습니다. 유지 보수를 진행하였고, 고객사로부터 들어오는 추가 기능요건에 대한 개발을 진행하였습니다.',
            usedSkills : ['Java','Eclipse RCP', 'SWT'],
            doList : ['사용하고 있던 위젯들을 재사용가능하게 변경',
            'SWT를 활용하여 새로운 에디터 패이지 개발',
            '고객사로부터 리포팅된 다양한 이슈 처리',
            ],
            hideDivider : true
        }  
    ];
    return (
        <WorkTimeLine
            companyName = {TMAX_SOFT_INFO.companyName}
            position = {TMAX_SOFT_INFO.position}
            startTime = {TMAX_SOFT_INFO.startTime}
            endTime = {TMAX_SOFT_INFO.endTime}
        >
            {TMAX_PROJECT_LIST.map((project, index) =>{
                return (
                    <WorkProject
                        key={index}
                        projectTitle ={project.projectTitle}
                        startTime = {project.startTime}
                        endTime = {project.endTime}
                        description = {project.description}
                        usedSkills = {project.usedSkills}
                        doList = {project.doList}
                        hideDivider = {project.hideDivider}
                    />
                )
            })}
           
        </WorkTimeLine>

    );
}

export default TmaxSoft;

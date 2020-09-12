import React, { ReactNode, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import WorkTimeLine, { WorkTimeLineProps, useStyles } from '../presentaional/WorkTimeLine';
import WorkProject, { WorkProjectProps } from '../presentaional/WorkProject';
import { Button, Typography } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SmartGripInfo from './More/SmartGripInfo';
import AllightInfo from './More/AllightInfo';


const SKKU : React.FC = () =>{
    const classes = useStyles();
    const TMAX_SOFT_INFO : WorkTimeLineProps ={
        companyName : 'SmartGrip',
        position : '학사/석사',
        startTime : '',
        endTime : '2018.02',
    }
    const TMAX_PROJECT_LIST : WorkProjectProps[] = [
        {
            projectTitle : 'SmartGrip',
            startTime: '2016.08',
            endTime :'2018.02',
            description: 
                <>
                    소리 신호를 이용한 스마트폰 그립 감지 시스템입니다.
                    <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            className={classes.videoButton}
                            href={'https://www.youtube.com/watch?v=HpuazVu3mA0'}
                            target="_blank"
                            startIcon={<PlayArrowIcon />}
                    >
                        Watch Video
                    </Button> 

                    <Typography variant="caption" display="block" gutterBottom>
                        Towards grip sensing for commodity smartphones through acoustic signature (UbiComp '17 2017)
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        SmartGrip : grip sensing system for commodity mobile devices through sound signals (Personal and Ubiquitous Computing '11 2019)
                    </Typography>
                </>,
            usedSkills : ['Java','Android','Matched Filter','FFT', 'SoundSignal Processing', 'LibSVM'],
            doList : ['주변환경의 영향을 최소화 할 수 있는 소리 신호 제작',
            'MatchedFilter, Band Pass Filter, FFT 등을 이용한 소리 신호 분석',
            'Lib-svm을 이용한 Multi-class svm을 구현하여 여러가지 소리 신호 분류',
            '안드로이드를 이용한 Backgorund 어플리케이션 개발'],
            moreInfo : <SmartGripInfo/>
        },
        {
            projectTitle : 'Allight',
            startTime: '2016.08',
            endTime :'2016.11',
            description: 
            <>
                에트리 WoT 홈 가전 경진대회 제출물로, 스마트폰과 스마트전구를 연동하여 스마트폰으로 오는 알림들을 스마트전구를 통해 시각적으로 보여줍니다.
                IFTTT( If This, Then That )의 개념을 적용한 서비스입니다. 예를들어, '메일이 오면 (If This) 빨간색 불빛으로 2번 깜박여줘 (Then That)'와 같은 기능을 실행 할 수 있습니다.
                <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={classes.videoButton}
                        href={'https://www.youtube.com/watch?v=BD8aFohG8cg'}
                        target="_blank"
                        startIcon={<PlayArrowIcon />}
                >
                    Watch Video
                </Button> 

                <Typography variant="caption" display="block" gutterBottom>
                    ETRI WoT 홈 가전 경진대회 우수상
                </Typography>
            </>
            ,
            usedSkills : ['Java','Android','IoT'],
            doList : ['프로젝트 총괄 및 서비스 기획',
                '안드로이드 어플리케이션 설계 및 개발'],
            moreInfo:<AllightInfo/>,
            hideDivider:true
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
                        moreInfo = {project.moreInfo}
                        hideDivider = {project.hideDivider}
                    />
                )
            })}
           
        </WorkTimeLine>

    );
}

export default SKKU;

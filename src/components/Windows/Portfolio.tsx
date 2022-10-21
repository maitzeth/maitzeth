import React, { useState, useCallback } from 'react';
import WindowLayout from './WindowLayout';
import { WORK_EXPERIENCE } from '../../utils/constants';
import { Container, Box, Paragraph } from '../UI';
import { motion } from "framer-motion";
import WorkExperienceTab from '../WorkExperienceTab';

const Portfolio = () => {
  const [selectedExperience, setOpenSelectedExperience] = useState<number | null>(null);

  const variants = {
    closed: { height: 0, overflow: 'hidden', opacity: 0 },
    open: { height: 'auto', overflow: 'initial', opacity: 1 },
  };

  const handleClickOpenTab = useCallback((tabId: number) => {
    setOpenSelectedExperience(prev => {
      if (prev === tabId) {
        return null;
      }

      return tabId;
    });
  }, []);

  return (
    <WindowLayout title="Portfolio" centeredContent>
      <Container size={{ mobile: 'full', desktop: 'large' }} className="flex-1">
        <Box overflow={{ mobile: 'hidden' }} borderRadius={{ mobile: 'medium' }} className="bg-white drop-shadow-lg">
          <Box component="ul" role="list" className="divide-y">
            {WORK_EXPERIENCE.map((work, index) => {
              const isSelected = selectedExperience === index;
              return (
                <Box component="li" key={`work-experience-item-${index}`}>
                  <WorkExperienceTab
                    id={index}
                    contract={work.contract}
                    from_date={work.from_date}
                    to_date={work.to_date}
                    location={work.location}
                    onClick={handleClickOpenTab}
                    place={work.place}
                    position={work.position}
                    isSelected={isSelected}
                  />
                  <motion.div
                    animate={isSelected ? "open" : "closed"}
                    variants={variants}
                    initial={false}
                  >
                    <Box padding={{ mobile: 'medium', desktop: 'large' }}>
                      <Paragraph size="sm" color="light-gray">{work.description}</Paragraph>
                    </Box>
                  </motion.div>
                </Box>
              );
            }).reverse()}
          </Box>
        </Box>
      </Container>
    </WindowLayout>
  );
};

export default Portfolio;

import React, { useState, useCallback } from 'react';
import WindowLayout from './WindowLayout';
import { WORK_EXPERIENCE } from '../../utils/constants';
import { Container, Box } from '../UI';
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
    <WindowLayout title="Portfolio">
      <Container size={{ mobile: 'full', desktop: 'large' }}>
        <div className="overflow-hidden bg-white drop-shadow-lg sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {WORK_EXPERIENCE.map((work, index) => {
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
                  />
                  <motion.div
                    animate={selectedExperience === index ? "open" : "closed"}
                    variants={variants}
                    initial={false}
                  >
                    <Box padding={{ mobile: 'medium', desktop: 'large' }}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem amet atque omnis mollitia deleniti. Sed minus debitis dolor. Harum beatae quae explicabo natus officia eveniet, dolores sunt asperiores optio magni.</p>
                    </Box>
                  </motion.div>
                </Box>
              );
            }).reverse()}
          </ul>
        </div>
      </Container>
    </WindowLayout>
  );
};

export default Portfolio;

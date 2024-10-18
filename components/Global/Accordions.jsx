'use client'

import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Faq1, Faq2, Faq3 } from '@/config/Faq';

export default function Accordions() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <div>
                <div className='text-3xl text-center mb-16 mt-5 font-bold'>Frequently Asked Questions</div>
                <h2 className='text-xl text-center mb-3 font-bold'>Custom Printed Packaging and Orders</h2>
                <div className='grid grid-cols-12 gap-6 items-start'>
                    {Faq1.map((item, index) => (
                        <Accordion
                            key={index}
                            className='col-span-12 md:col-span-6 w-full md:w-fit'
                            expanded={expanded === `panel1-${index}`}
                            onChange={handleChange(`panel1-${index}`)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel1-${index}-content`}
                                id={`panel1-${index}-header`}
                            >
                                <Typography>{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {item.answer}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>

            <div className='my-10'>
                <h2 className='text-xl text-center mb-3 font-bold'>Production and Shipping</h2>
                <div className='grid grid-cols-12 gap-6 items-start'>
                    {Faq2.map((item, index) => (
                        <Accordion
                            key={index}
                            className='col-span-12 md:col-span-6 w-fit'
                            expanded={expanded === `panel2-${index}`}
                            onChange={handleChange(`panel2-${index}`)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel2-${index}-content`}
                                id={`panel2-${index}-header`}
                            >
                                <Typography>{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {item.answer}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>

            <div>
                <h2 className='text-xl text-center mb-3 font-bold'>Custom Designing and Art</h2>
                <div className='grid grid-cols-12 gap-6 items-start'>
                    {Faq3.map((item, index) => (
                        <Accordion
                            key={index}
                            className='col-span-12 md:col-span-6 w-fit'
                            expanded={expanded === `panel3-${index}`}
                            onChange={handleChange(`panel3-${index}`)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel3-${index}-content`}
                                id={`panel3-${index}-header`}
                            >
                                <Typography>{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {item.answer}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </>
    );
}

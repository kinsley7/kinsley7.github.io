'use client';
import { useRef, useState, useEffect} from "react";
import Image from "next/image";
import { MainWindowCard } from "@/components/compound/MainWindowCard";
import { Spacer } from "@/components/foundation/Spacer";
import { NavigationCard } from "@/components/compound/NavigationCard";
import { CardWithTab } from "@/components/compound/CardWithTab";
import { Row } from "@/components/foundation/Row";
import { Column } from "@/components/foundation/Column";
import { Icons } from "@/components/foundation/Icons";
import { Card } from "@/components/foundation/Card";
import ReactPlayer from "react-player";
import { CaptionedImage } from "@/components/compound/CaptionedImage";
import { ChildProcess } from "child_process";
import { Carousel } from "@/components/compound/Carousel";
import { Button } from "@/components/foundation/Button";
import { Accordion } from "@/components/foundation/Accordion";
import { PillBox } from "@/components/compound/PillBox";
import { Label } from "@headlessui/react";
import { AccordionInfo } from "@/components/compound/AccordionInfo";
import  { PDFViewer }  from "@/components/compound/PDFViewer";
import { WindowPopUp } from "@/components/compound/WindowPopUp";

import {SchoolArtifacts} from '@/components/compound/SchoolArtifacts'
import { AboutMe } from "@/components/compound/AboutMe";
import { Internship } from "@/components/compound/Internship";
import AboutMePage from "./about-me";


import { useRouter } from 'next/router'

function RedirectPage({ }) {
  const router = useRouter()
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    router.push('/home');
    return; 
  }
}

RedirectPage.getInitialProps = (ctx: { res: { writeHead: (arg0: number, arg1: { Location: string; }) => void; end: () => void; }; }) => {
  // We check for ctx.res to make sure we're on the server.
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: '/about-me' });
    ctx.res.end();
  }
  return { };
}

export default RedirectPage



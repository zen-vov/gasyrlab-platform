'use client'
import { useTranslations } from "next-intl";
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function MainPage() {
  const [text] = useTypewriter({
    words: ['Developer', 'Designer', 'Kotakbas'],
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  const t = useTranslations("Hello");

  return (
    <section className="">
      <h1 className="">{t("title")}</h1>
      <h2 className="">{t("piska")}</h2>
      <h1 className="mt-5">
        I`m {''}
        <span style={{ fontWeight: 'bold', color: 'green' }}>
          {text}
        </span>
        <span style={{ color: 'red', position: 'relative', left: '-4px' }}>
          <Cursor cursorStyle='|' />
        </span>
      </h1>
      <div>
        <Terminal 
          height="200"
          name='React Terminal Usage Example'
          colorMode={ ColorMode.Dark }  
          onInput={ terminalInput => console.log(`New terminal input received: '${ terminalInput }'`) }
        >
          <TerminalOutput>Hello world</TerminalOutput>
        </Terminal>
      </div>
    </section>
  );
}

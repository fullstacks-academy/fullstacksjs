import { Article } from '@/components/Article';
import { Articles } from '@/components/Articles';
import { Highlight } from '@/components/Highlight';
import { Paragraph } from '@/components/Paragraph';

export default function Home() {
  return (
    <Articles>
      <Article title="main.about.title">
        <Paragraph>
          {/* <Trans i18nKey="main.about.content"> */}
          <Highlight>FullstacksJS</Highlight> is an open-source community
          focused on knowledge sharing, exploring, and enhancing developer
          experience. The primary objective of this community is to establish a
          professional environment for in-depth contents in software development
          and engineering field. In order to learn and strengthen the culture of
          open source development and contribution, the projects that are
          developed in this community are entirely open source, and members are
          encouraged to participate.
          {/* </Trans> */}
        </Paragraph>
      </Article>

      <Article title="main.motivation.title">
        <Paragraph>
          {/* <Trans i18nKey="main.motivation.content"> */}
          The Internet is full of unfiltered programming content, tutorials, and
          forums, which provide <b>incomplete</b>, <b>outdated</b>, and
          sometimes
          <b>incorrect</b> information to the knowledge seekers in this field.
          Therefore, we decided to establish a community where experts control
          and review the contents and activities. This creates a community that
          values in-depth and correct content.
          {/* </Trans> */}
        </Paragraph>
      </Article>

      <Article title="main.values.title">
        <Paragraph>{'main.values.content'}</Paragraph>
        <Paragraph>
          {/* <Trans i18nKey="main.values.ethics"> */}
          <b>Ethics:</b> Ethics is the most important value in the community,
          which has the highest priority in decisions. In the community, moral
          principles are never sacrificed for the sake of other activities.
          {/* </Trans> */}
        </Paragraph>
        <Paragraph>
          {/* <Trans i18nKey="main.values.validity"> */}
          <b>Validity</b>: Expert approval is required for every
          community-produced and published content. If an error is discovered in
          previously published content, the community must notify the
          appropriate parties and update the content.
          {/* </Trans> */}
        </Paragraph>
      </Article>
    </Articles>
  );
}

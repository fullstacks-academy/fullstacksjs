interface Props {
  target: string;
  children: React.ReactNode;
}

export const Rule = ({ target, children }: Props): React.JSX.Element => {
  return (
    <li
      id={target}
      className="group relative mb-3 ms-6 cursor-pointer scroll-m-10 leading-tight transition-[color,opacity] motion-reduce:transition-none"
    >
      <a className="block w-full text-accent-1" href={`#${target}`}>
        {children}
      </a>
    </li>
  );
};

/* <style>
  li {
    list-style: '•  ';
  }

  .cancel {
    display: none;
  }

  li:target .cancel {
    display: inline;
  }

  li:has(~ li:target),
  li:target ~ li {
    opacity: 0.1;
  }

  li:not(:target):hover {
    opacity: 1;
  }

  li:not(:target):hover a {
    color: var(--fg-0);
  }
</style> */

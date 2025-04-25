import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon: string;
  variant: string;
  href?: string;
};

const Button = ({ type, title, icon, variant, href }: ButtonProps) => {
  const buttonContent = (
    <button
      type={type}
      className={`flexCenter gap-2 border rounded-full ${variant} px-4 py-2`}
    >
      {icon && <Image src={icon} alt={title} width={20} height={20} />}
      <label className="whitespace-nowrap cursor-pointer bold-16">{title}</label>
    </button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

export default Button;

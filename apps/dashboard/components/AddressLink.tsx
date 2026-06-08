interface AddressLinkProps {
  address: string;
  href?: string;
  truncate?: boolean;
}

export default function AddressLink({
  address,
  href,
  truncate = true,
}: AddressLinkProps) {
  const display = truncate
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : address;

  const linkHref =
    href || `https://explorer.sepolia.mantle.xyz/address/${address}`;

  return (
    <a
      href={linkHref}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono text-sm text-mantle-600 hover:text-mantle-800 hover:underline"
      title={address}
    >
      {display}
    </a>
  );
}

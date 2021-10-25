import { IconProps, IconPropDefaults } from '../icon';

export const Search: React.FC<IconProps> = ({
  className = IconPropDefaults.className,
  color = IconPropDefaults.color,
  size = IconPropDefaults.size,
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M16.9414 16.9414C16.8833 16.9994 16.8144 17.0454 16.7386 17.0769C16.6628 17.1083 16.5815 17.1244 16.4994 17.1244C16.4173 17.1244 16.3361 17.1083 16.2602 17.0769C16.1844 17.0454 16.1155 16.9994 16.0575 16.9414L12.6807 13.5646C11.2604 14.757 9.43458 15.355 7.58406 15.2341C5.73354 15.1131 4.00114 14.2825 2.74814 12.9154C1.49513 11.5483 0.818247 9.7502 0.858643 7.89617C0.89904 6.04214 1.6536 4.27527 2.96496 2.96402C4.27633 1.65277 6.04326 0.898374 7.89729 0.858141C9.75132 0.817908 11.5493 1.49495 12.9163 2.74808C14.2833 4.00121 15.1138 5.73368 15.2346 7.58421C15.3554 9.43474 14.7572 11.2605 13.5646 12.6807L16.9414 16.0575C16.9994 16.1155 17.0454 16.1844 17.0769 16.2602C17.1083 16.3361 17.1244 16.4173 17.1244 16.4994C17.1244 16.5815 17.1083 16.6628 17.0769 16.7386C17.0454 16.8144 16.9994 16.8833 16.9414 16.9414ZM8.06245 13.9993C9.23678 13.9993 10.3847 13.6511 11.3612 12.9987C12.3376 12.3463 13.0986 11.4189 13.548 10.334C13.9974 9.24907 14.115 8.05524 13.8859 6.90348C13.6568 5.75172 13.0913 4.69375 12.2609 3.86338C11.4305 3.03301 10.3726 2.46751 9.2208 2.23841C8.06904 2.00932 6.87521 2.1269 5.79027 2.57629C4.70533 3.02569 3.77802 3.78671 3.1256 4.76313C2.47318 5.73955 2.12495 6.8875 2.12495 8.06183C2.12673 9.636 2.75286 11.1452 3.86597 12.2583C4.97908 13.3714 6.48828 13.9975 8.06245 13.9993Z" />
  </svg>
);

import React from 'react';
import type { ImageData } from "../../../types"

interface GridItemProps {
	data: ImageData;
	/** alt для доступности */
	alt?: string;
	/** колбэк клика, если нужно */
	onClick?: (data: ImageData) => void;
}

export const GridItem: React.FC<GridItemProps> = ({ data, alt = '', onClick }) => {
	const handleClick = () => onClick?.(data);
	const title = data.title ?? alt;

	return (
		<div
			className="grid-item"
			onClick={handleClick}
			role={onClick ? 'button' : undefined}
			tabIndex={onClick ? 0 : undefined}
		>
			<img
				className="grid-item__img"
				src={data['data-high-res'] || data.src}
				srcSet={`
          ${data.src} 1x,
          ${data['data-high-res']} 2x,
          ${data['data-4x']} 4x
        `}
				alt={alt || title}
				loading="lazy"
				decoding="async"
				data-high-res={data['data-high-res']}
				data-4x={data['data-4x']}
			/>
			<div className="grid-item__overlay" aria-hidden={!title}>
				{title ? <p className="grid-item__title">{title}</p> : null}
			</div>
		</div>
	);
};

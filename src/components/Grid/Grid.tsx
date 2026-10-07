import React from 'react'

import type { ImageData } from '../../types'
import { GridItem } from './components/GridItem'

interface GridProps {
	items: ImageData[]
	minItemWidth?: number
	gap?: number
	onItemClick?: (data: ImageData) => void
}

export const Grid: React.FC<GridProps> = ({
	items,
	minItemWidth = 13,
	gap = 0,
	onItemClick,
}) => {
	return (
		<div
			className='grid'
			style={
				{
					'--grid-min-width': `${minItemWidth}rem`,
					'--grid-gap': `${gap}rem`,
				} as React.CSSProperties
			}
		>
			{items.map((item, i) => (
				<GridItem key={`${item.src}-${i}`} data={item} onClick={onItemClick} />
			))}
		</div>
	)
}

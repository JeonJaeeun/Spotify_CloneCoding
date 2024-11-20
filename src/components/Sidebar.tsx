import React, { type CSSProperties, useRef, useState, useEffect } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { disableNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview';
import { preventUnhandled } from '@atlaskit/pragmatic-drag-and-drop/prevent-unhandled';
import type { DragLocationHistory } from '@atlaskit/pragmatic-drag-and-drop/types';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IoHomeOutline, IoHome, IoSearchOutline, IoSearch } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  width: var(--local-resizing-width, var(--local-initial-width));
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
`;

const SidebarDivider = styled.div`
	width: 20px;
  cursor: ew-resize;
  flex-grow: 0;
  flex-shrink: 0;
	position: relative;
	background: #000;
`;

const NavSection = styled.div`
  margin-bottom: 24px;
`;

const NavItem = styled(Link)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border-radius: 4px;
  color: ${(props) => (props.active ? '#fff' : '#b3b3b3')};
  font-size: 1rem;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #282828;
    color: #fff;
  }

  svg {
    font-size: 24px;
  }
`;

const LibraryWrapper = styled.div`
  padding-left: 16px;
`;

const LibraryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  h3 {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
  }

  button {
    background: none;
    border: none;
    color: #b3b3b3;
    font-size: 20px;
    cursor: pointer;
    transition: color 0.3s;
    display: flex;

    &:hover {
      color: #fff;
    }
  }
`;

const LibraryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    color: #b3b3b3;
    text-decoration: none;
    font-size: 0.875rem;

    &:hover {
      color: #fff;
    }
  }
`;

function getProposedWidth({
	initialWidth,
	location,
}: {
	initialWidth: number;
	location: DragLocationHistory;
}): number {
	const diffX = location.current.input.clientX - location.initial.input.clientX;
	const proposedWidth = initialWidth + diffX;

	/* Min과 Max 사이에서만 넓이가 조정될 수 있게 해줌 */
	return Math.min(Math.max(widths.min, proposedWidth), widths.max);
}

type State =
	| {
			type: 'idle';
	  }
	| {
			type: 'dragging';
	  };

const widths: {
    start : number;
    min : number; 
    max : number;
  } = {
  start : 280,
  min : 180,
  max : 500
};

const Sidebar: React.FC = () => {
  const [initialWidth, setInitialWidth] = useState(widths.start);
  const location = useLocation();
  const dividerRef = useRef<HTMLDivElement | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);
	const [state, setState] = useState<State>({
		type: 'idle',
	});


  useEffect(() => {
		const divider = dividerRef.current;
		if (!divider) return;

		return draggable({
			element: divider,
			onGenerateDragPreview: ({ nativeSetDragImage }) => {
				// we will be moving the line to indicate a drag
				// we can disable the native drag preview
				disableNativeDragPreview({ nativeSetDragImage });
				// we don't want any native drop animation for when the user
				// does not drop on a drop target. we want the drag to finish immediately
				preventUnhandled.start();
			},
			onDragStart() {
				setState({ type: 'dragging' });
			},
			onDrag({ location }) {
				contentRef.current?.style.setProperty(
					'--local-resizing-width',
					`${getProposedWidth({ initialWidth, location })}px`,
				);
			},
			onDrop({ location }) {
				preventUnhandled.stop();
				setState({ type: 'idle' });

				setInitialWidth(getProposedWidth({ initialWidth, location }));
				contentRef.current?.style.removeProperty('--local-resizing-width');
			},
		});
	}, [initialWidth]);

  return (
    <SidebarWrapper>
      <SidebarContainer 
      ref={contentRef} 
      style={{ '--local-initial-width': `${initialWidth}px` } as CSSProperties}>
        {/* Navigation Section */}
        <NavSection>
          <NavItem to="/" active={location.pathname === '/'}>
            {location.pathname === '/' ? <IoHome /> : <IoHomeOutline />}
            Home
          </NavItem>
          <NavItem to="/search" active={location.pathname === '/search'}>
            {location.pathname === '/search' ? <IoSearch /> : <IoSearchOutline />}
            Search
          </NavItem>
        </NavSection>

        {/* Library Section */}
        <LibraryWrapper>
          <LibraryHeader>
            <h3>Your Library</h3>
            <button>
              <AiOutlinePlus />
            </button>
          </LibraryHeader>
          <LibraryList>
            <Link to="/playlist/1">Liked Songs</Link>
            <Link to="/playlist/2">Recently Played</Link>
            <Link to="/playlist/3">Discover Weekly</Link>
          </LibraryList>
        </LibraryWrapper>
      </SidebarContainer>
      <SidebarDivider ref={dividerRef} />
    </SidebarWrapper>
  );
};

export default Sidebar;
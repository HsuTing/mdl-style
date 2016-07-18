module.export = {
	html: {
		color: 'rgba(0,0,0, 0.87)',
		fontSize: '1em',
		lineHeight: 1.4,
		width: '100%',
		height: '100%',
		msTouchAction: 'manipulation',
		touchAction: 'manipulation'
	},
	'::-moz-selection': {
		background: '#b3d4fc',
		textShadow: 'none'
	},
	'::selection': {
		background: '#b3d4fc',
		textShadow: 'none'
	},
	hr: {
		display: 'block',
		height: 1,
		border: 0,
		borderTop: '1px solid #ccc',
		margin: '1em 0',
		padding: 0
	},
	'audio, canvas, iframe, img, svg, video': {
		verticalAlign: 'middle'
	},
	fieldset: {
		border: 0,
		margin: 0,
		padding: 0
	},
	textarea: {
		resize: 'vertical'
	},
	'.browserupgrade': {
		margin: '0.2em 0',
		background: '#ccc',
		color: '#000',
		padding: '0.2em 0'
	},
	'.hidden': {
		display: 'none'
	},
	'.visuallyhidden': {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		width: 1
	},
	'.visuallyhidden.focusable:active, .visuallyhidden.focusable:focus': {
		clip: 'auto',
		height: 'auto',
		margin: 0,
		overflow: 'visible',
		position: 'static',
		width: 'auto'
	},
	'.invisible': {
		visibility: 'hidden'
	},
	'.clearfix:before, .clearfix:after': {
		content: '" "',
		display: 'table'
	},
	'.clearfix:after': {
		clear: 'both'
	},
	mediaQueries: {
		print: {
			'*,   *:before,   *:after,   *:first-letter': {
				background: 'transparent',
				color: '#000',
				boxShadow: 'none'
			},
			'a,   a:visited': {
				textDecoration: 'underline'
			},
			'a[href]:after': {
				content: '" (" attr(href) ")"'
			},
			'abbr[title]:after': {
				content: '" (" attr(title) ")"'
			},
			'a[href^="#"]:after,   a[href^="javascript:"]:after': {
				content: '""'
			},
			'pre,   blockquote': {
				border: '1px solid #999',
				pageBreakInside: 'avoid'
			},
			thead: {
				display: 'table-header-group'
			},
			'tr,   img': {
				pageBreakInside: 'avoid'
			},
			img: {
				maxWidth: '100%'
			},
			'p,   h2,   h3': {
				orphans: 3,
				widows: 3
			},
			'h2,   h3': {
				pageBreakAfter: 'avoid'
			}
		},
		'screen and (min-width: 760px)': {
			'.mdl-mega-footer--left-section,   .mdl-mega-footer__left-section': {
				float: 'left'
			},
			'.mdl-mega-footer--right-section,   .mdl-mega-footer__right-section': {
				float: 'right'
			},
			'.mdl-mega-footer--right-section a,   .mdl-mega-footer__right-section a': {
				display: 'inline-block',
				marginLeft: 16,
				lineHeight: 36,
				verticalAlign: 'middle'
			},
			'.mdl-mega-footer--drop-down-section,   .mdl-mega-footer__drop-down-section': {
				width: '33%'
			},
			'.mdl-mega-footer--drop-down-section:nth-child(1),   .mdl-mega-footer--drop-down-section:nth-child(2),   .mdl-mega-footer__drop-down-section:nth-child(1),   .mdl-mega-footer__drop-down-section:nth-child(2)': {
				float: 'left'
			},
			'.mdl-mega-footer--drop-down-section:nth-child(3),   .mdl-mega-footer__drop-down-section:nth-child(3)': {
				float: 'right'
			},
			'.mdl-mega-footer--drop-down-section:nth-child(3):after,     .mdl-mega-footer__drop-down-section:nth-child(3):after': {
				clear: 'right'
			},
			'.mdl-mega-footer--drop-down-section:nth-child(4),   .mdl-mega-footer__drop-down-section:nth-child(4)': {
				clear: 'right',
				float: 'right'
			},
			'.mdl-mega-footer--middle-section:after,   .mdl-mega-footer__middle-section:after': {
				content: '\'\'',
				display: 'block',
				clear: 'both'
			},
			'.mdl-mega-footer--bottom-section,   .mdl-mega-footer__bottom-section': {
				paddingTop: 0
			},
			'.mdl-mega-footer--heading-checkbox,   .mdl-mega-footer__heading-checkbox': {
				display: 'none'
			},
			'.mdl-mega-footer--heading-checkbox + .mdl-mega-footer--heading:after,     .mdl-mega-footer--heading-checkbox + .mdl-mega-footer__heading:after,     .mdl-mega-footer__heading-checkbox + .mdl-mega-footer--heading:after,     .mdl-mega-footer__heading-checkbox + .mdl-mega-footer__heading:after': {
				content: '\'\''
			},
			'.mdl-mega-footer--heading-checkbox:checked ~ .mdl-mega-footer--link-list,   .mdl-mega-footer--heading-checkbox:checked ~ .mdl-mega-footer__link-list,   .mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer__heading + .mdl-mega-footer__link-list,   .mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer--heading + .mdl-mega-footer--link-list,   .mdl-mega-footer__heading-checkbox:checked ~ .mdl-mega-footer--link-list,   .mdl-mega-footer__heading-checkbox:checked ~ .mdl-mega-footer__link-list,   .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer__heading + .mdl-mega-footer__link-list,   .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer--heading + .mdl-mega-footer--link-list': {
				display: 'block'
			},
			'.mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer--heading:after,   .mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer__heading:after,   .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer--heading:after,   .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer__heading:after': {
				content: '\'\''
			},
			'.mdl-logo': {
				float: 'left',
				marginBottom: 0,
				marginRight: 16
			},
			'.mdl-mini-footer--link-list li,       .mdl-mini-footer__link-list li': {
				lineHeight: 36
			}
		},
		'screen and (min-width: 1024px)': {
			'.mdl-mega-footer--drop-down-section,   .mdl-mega-footer--drop-down-section:nth-child(3),   .mdl-mega-footer--drop-down-section:nth-child(4),   .mdl-mega-footer__drop-down-section,   .mdl-mega-footer__drop-down-section:nth-child(3),   .mdl-mega-footer__drop-down-section:nth-child(4)': {
				width: '24%',
				float: 'left'
			}
		},
		'screen and (max-width: 1024px)': {
			'.mdl-layout__drawer > .mdl-layout__title,       .mdl-layout__drawer > .mdl-layout-title': {
				lineHeight: 56,
				paddingLeft: 16
			},
			'.mdl-layout__drawer .mdl-navigation .mdl-navigation__link': {
				padding: '16px 16px'
			},
			'.mdl-layout__header .mdl-layout__drawer-button': {
				margin: 4
			},
			'.mdl-layout__drawer-button': {
				margin: 4,
				color: 'rgba(0, 0, 0, 0.5)'
			},
			'.mdl-layout__header': {
				minHeight: 56,
				display: 'none'
			},
			'.mdl-layout__header > .mdl-layout-icon': {
				left: 16,
				top: 12
			},
			'.mdl-layout__header.is-compact': {
				maxHeight: 56
			},
			'.mdl-layout__header.is-compact.has-tabs': {
				minHeight: 104
			},
			'.mdl-layout--fixed-header > .mdl-layout__header': {
				display: 'flex'
			},
			'.mdl-layout__header-row': {
				height: 56,
				padding: '0 16px 0 72px'
			},
			'.mdl-layout--no-drawer-button .mdl-layout__header-row': {
				paddingLeft: 16
			},
			'.mdl-layout__header-row .mdl-navigation': {
				height: 56
			},
			'.mdl-layout__header-row .mdl-navigation__link': {
				lineHeight: 56,
				padding: '0 16px'
			},
			'.mdl-layout--fixed-drawer > .mdl-layout__content': {
				marginLeft: 0
			},
			'.mdl-layout__container.has-scrolling-header .mdl-layout__content': {
				overflowY: 'auto',
				overflowX: 'hidden'
			},
			'.mdl-layout__tab-bar': {
				width: 'calc(100% - 60px)',
				padding: '0 0 0 60px'
			},
			'.mdl-layout--no-drawer-button .mdl-layout__tab-bar': {
				width: 'calc(100% - 8px)',
				paddingLeft: 4
			},
			'.mdl-layout__tab-bar-button': {
				display: 'none',
				width: 60
			},
			'.mdl-layout__tab': {
				padding: '0 12px 0 12px'
			}
		},
		'screen and (min-width: 1025px)': {
			'.mdl-layout--fixed-drawer > .mdl-layout__drawer': {
				WebkitTransform: 'translateX(0)',
				transform: 'translateX(0)'
			},
			'.mdl-layout--fixed-drawer > .mdl-layout__drawer-button': {
				display: 'none'
			},
			'.mdl-layout--no-desktop-drawer-button .mdl-layout__drawer-button': {
				display: 'none'
			},
			'.mdl-layout--fixed-drawer > .mdl-layout__header .mdl-layout__header-row': {
				paddingLeft: 40
			},
			'.mdl-layout--no-desktop-drawer-button .mdl-layout__header-row': {
				paddingLeft: 40
			},
			'.mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar': {
				paddingLeft: 16,
				width: 'calc(100% - 32px)'
			}
		},
		'(max-width: 479px)': {
			'.mdl-snackbar': {
				width: '100%',
				left: 0,
				minHeight: 48,
				maxHeight: 80
			},
			'.mdl-grid': {
				padding: 8
			},
			'.mdl-cell': {
				margin: 8,
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell': {
				width: '100%'
			},
			'.mdl-cell--hide-phone': {
				display: 'none'
			},
			'.mdl-cell--order-1-phone.mdl-cell--order-1-phone': {
				WebkitOrder: 1,
				msFlexOrder: 1,
				order: 1
			},
			'.mdl-cell--order-2-phone.mdl-cell--order-2-phone': {
				WebkitOrder: 2,
				msFlexOrder: 2,
				order: 2
			},
			'.mdl-cell--order-3-phone.mdl-cell--order-3-phone': {
				WebkitOrder: 3,
				msFlexOrder: 3,
				order: 3
			},
			'.mdl-cell--order-4-phone.mdl-cell--order-4-phone': {
				WebkitOrder: 4,
				msFlexOrder: 4,
				order: 4
			},
			'.mdl-cell--order-5-phone.mdl-cell--order-5-phone': {
				WebkitOrder: 5,
				msFlexOrder: 5,
				order: 5
			},
			'.mdl-cell--order-6-phone.mdl-cell--order-6-phone': {
				WebkitOrder: 6,
				msFlexOrder: 6,
				order: 6
			},
			'.mdl-cell--order-7-phone.mdl-cell--order-7-phone': {
				WebkitOrder: 7,
				msFlexOrder: 7,
				order: 7
			},
			'.mdl-cell--order-8-phone.mdl-cell--order-8-phone': {
				WebkitOrder: 8,
				msFlexOrder: 8,
				order: 8
			},
			'.mdl-cell--order-9-phone.mdl-cell--order-9-phone': {
				WebkitOrder: 9,
				msFlexOrder: 9,
				order: 9
			},
			'.mdl-cell--order-10-phone.mdl-cell--order-10-phone': {
				WebkitOrder: 10,
				msFlexOrder: 10,
				order: 10
			},
			'.mdl-cell--order-11-phone.mdl-cell--order-11-phone': {
				WebkitOrder: 11,
				msFlexOrder: 11,
				order: 11
			},
			'.mdl-cell--order-12-phone.mdl-cell--order-12-phone': {
				WebkitOrder: 12,
				msFlexOrder: 12,
				order: 12
			},
			'.mdl-cell--1-col,   .mdl-cell--1-col-phone.mdl-cell--1-col-phone': {
				width: 'calc(25% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--1-col, .mdl-grid--no-spacing >     .mdl-cell--1-col-phone.mdl-cell--1-col-phone': {
				width: '25%'
			},
			'.mdl-cell--2-col,   .mdl-cell--2-col-phone.mdl-cell--2-col-phone': {
				width: 'calc(50% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--2-col, .mdl-grid--no-spacing >     .mdl-cell--2-col-phone.mdl-cell--2-col-phone': {
				width: '50%'
			},
			'.mdl-cell--3-col,   .mdl-cell--3-col-phone.mdl-cell--3-col-phone': {
				width: 'calc(75% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--3-col, .mdl-grid--no-spacing >     .mdl-cell--3-col-phone.mdl-cell--3-col-phone': {
				width: '75%'
			},
			'.mdl-cell--4-col,   .mdl-cell--4-col-phone.mdl-cell--4-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--4-col, .mdl-grid--no-spacing >     .mdl-cell--4-col-phone.mdl-cell--4-col-phone': {
				width: '100%'
			},
			'.mdl-cell--5-col,   .mdl-cell--5-col-phone.mdl-cell--5-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--5-col, .mdl-grid--no-spacing >     .mdl-cell--5-col-phone.mdl-cell--5-col-phone': {
				width: '100%'
			},
			'.mdl-cell--6-col,   .mdl-cell--6-col-phone.mdl-cell--6-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--6-col, .mdl-grid--no-spacing >     .mdl-cell--6-col-phone.mdl-cell--6-col-phone': {
				width: '100%'
			},
			'.mdl-cell--7-col,   .mdl-cell--7-col-phone.mdl-cell--7-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--7-col, .mdl-grid--no-spacing >     .mdl-cell--7-col-phone.mdl-cell--7-col-phone': {
				width: '100%'
			},
			'.mdl-cell--8-col,   .mdl-cell--8-col-phone.mdl-cell--8-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--8-col, .mdl-grid--no-spacing >     .mdl-cell--8-col-phone.mdl-cell--8-col-phone': {
				width: '100%'
			},
			'.mdl-cell--9-col,   .mdl-cell--9-col-phone.mdl-cell--9-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--9-col, .mdl-grid--no-spacing >     .mdl-cell--9-col-phone.mdl-cell--9-col-phone': {
				width: '100%'
			},
			'.mdl-cell--10-col,   .mdl-cell--10-col-phone.mdl-cell--10-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--10-col, .mdl-grid--no-spacing >     .mdl-cell--10-col-phone.mdl-cell--10-col-phone': {
				width: '100%'
			},
			'.mdl-cell--11-col,   .mdl-cell--11-col-phone.mdl-cell--11-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--11-col, .mdl-grid--no-spacing >     .mdl-cell--11-col-phone.mdl-cell--11-col-phone': {
				width: '100%'
			},
			'.mdl-cell--12-col,   .mdl-cell--12-col-phone.mdl-cell--12-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--12-col, .mdl-grid--no-spacing >     .mdl-cell--12-col-phone.mdl-cell--12-col-phone': {
				width: '100%'
			},
			'.mdl-cell--1-offset,   .mdl-cell--1-offset-phone.mdl-cell--1-offset-phone': {
				marginLeft: 'calc(25% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--1-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--1-offset-phone.mdl-cell--1-offset-phone': {
				marginLeft: '25%'
			},
			'.mdl-cell--2-offset,   .mdl-cell--2-offset-phone.mdl-cell--2-offset-phone': {
				marginLeft: 'calc(50% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--2-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--2-offset-phone.mdl-cell--2-offset-phone': {
				marginLeft: '50%'
			},
			'.mdl-cell--3-offset,   .mdl-cell--3-offset-phone.mdl-cell--3-offset-phone': {
				marginLeft: 'calc(75% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--3-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--3-offset-phone.mdl-cell--3-offset-phone': {
				marginLeft: '75%'
			}
		},
		'(min-width: 480px)': {
			'.mdl-snackbar': {
				minWidth: 288,
				maxWidth: 568,
				borderRadius: 2,
				WebkitTransform: 'translate(-50%, 80px)',
				transform: 'translate(-50%, 80px)'
			},
			'.mdl-snackbar--active': {
				WebkitTransform: 'translate(-50%, 0)',
				transform: 'translate(-50%, 0)'
			}
		},
		'(min-width: 480px) and (max-width: 839px)': {
			'.mdl-grid': {
				padding: 8
			},
			'.mdl-cell': {
				margin: 8,
				width: 'calc(50% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell': {
				width: '50%'
			},
			'.mdl-cell--hide-tablet': {
				display: 'none'
			},
			'.mdl-cell--order-1-tablet.mdl-cell--order-1-tablet': {
				WebkitOrder: 1,
				msFlexOrder: 1,
				order: 1
			},
			'.mdl-cell--order-2-tablet.mdl-cell--order-2-tablet': {
				WebkitOrder: 2,
				msFlexOrder: 2,
				order: 2
			},
			'.mdl-cell--order-3-tablet.mdl-cell--order-3-tablet': {
				WebkitOrder: 3,
				msFlexOrder: 3,
				order: 3
			},
			'.mdl-cell--order-4-tablet.mdl-cell--order-4-tablet': {
				WebkitOrder: 4,
				msFlexOrder: 4,
				order: 4
			},
			'.mdl-cell--order-5-tablet.mdl-cell--order-5-tablet': {
				WebkitOrder: 5,
				msFlexOrder: 5,
				order: 5
			},
			'.mdl-cell--order-6-tablet.mdl-cell--order-6-tablet': {
				WebkitOrder: 6,
				msFlexOrder: 6,
				order: 6
			},
			'.mdl-cell--order-7-tablet.mdl-cell--order-7-tablet': {
				WebkitOrder: 7,
				msFlexOrder: 7,
				order: 7
			},
			'.mdl-cell--order-8-tablet.mdl-cell--order-8-tablet': {
				WebkitOrder: 8,
				msFlexOrder: 8,
				order: 8
			},
			'.mdl-cell--order-9-tablet.mdl-cell--order-9-tablet': {
				WebkitOrder: 9,
				msFlexOrder: 9,
				order: 9
			},
			'.mdl-cell--order-10-tablet.mdl-cell--order-10-tablet': {
				WebkitOrder: 10,
				msFlexOrder: 10,
				order: 10
			},
			'.mdl-cell--order-11-tablet.mdl-cell--order-11-tablet': {
				WebkitOrder: 11,
				msFlexOrder: 11,
				order: 11
			},
			'.mdl-cell--order-12-tablet.mdl-cell--order-12-tablet': {
				WebkitOrder: 12,
				msFlexOrder: 12,
				order: 12
			},
			'.mdl-cell--1-col,   .mdl-cell--1-col-tablet.mdl-cell--1-col-tablet': {
				width: 'calc(12.5% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--1-col, .mdl-grid--no-spacing >     .mdl-cell--1-col-tablet.mdl-cell--1-col-tablet': {
				width: '12.5%'
			},
			'.mdl-cell--2-col,   .mdl-cell--2-col-tablet.mdl-cell--2-col-tablet': {
				width: 'calc(25% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--2-col, .mdl-grid--no-spacing >     .mdl-cell--2-col-tablet.mdl-cell--2-col-tablet': {
				width: '25%'
			},
			'.mdl-cell--3-col,   .mdl-cell--3-col-tablet.mdl-cell--3-col-tablet': {
				width: 'calc(37.5% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--3-col, .mdl-grid--no-spacing >     .mdl-cell--3-col-tablet.mdl-cell--3-col-tablet': {
				width: '37.5%'
			},
			'.mdl-cell--4-col,   .mdl-cell--4-col-tablet.mdl-cell--4-col-tablet': {
				width: 'calc(50% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--4-col, .mdl-grid--no-spacing >     .mdl-cell--4-col-tablet.mdl-cell--4-col-tablet': {
				width: '50%'
			},
			'.mdl-cell--5-col,   .mdl-cell--5-col-tablet.mdl-cell--5-col-tablet': {
				width: 'calc(62.5% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--5-col, .mdl-grid--no-spacing >     .mdl-cell--5-col-tablet.mdl-cell--5-col-tablet': {
				width: '62.5%'
			},
			'.mdl-cell--6-col,   .mdl-cell--6-col-tablet.mdl-cell--6-col-tablet': {
				width: 'calc(75% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--6-col, .mdl-grid--no-spacing >     .mdl-cell--6-col-tablet.mdl-cell--6-col-tablet': {
				width: '75%'
			},
			'.mdl-cell--7-col,   .mdl-cell--7-col-tablet.mdl-cell--7-col-tablet': {
				width: 'calc(87.5% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--7-col, .mdl-grid--no-spacing >     .mdl-cell--7-col-tablet.mdl-cell--7-col-tablet': {
				width: '87.5%'
			},
			'.mdl-cell--8-col,   .mdl-cell--8-col-tablet.mdl-cell--8-col-tablet': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--8-col, .mdl-grid--no-spacing >     .mdl-cell--8-col-tablet.mdl-cell--8-col-tablet': {
				width: '100%'
			},
			'.mdl-cell--9-col,   .mdl-cell--9-col-tablet.mdl-cell--9-col-tablet': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--9-col, .mdl-grid--no-spacing >     .mdl-cell--9-col-tablet.mdl-cell--9-col-tablet': {
				width: '100%'
			},
			'.mdl-cell--10-col,   .mdl-cell--10-col-tablet.mdl-cell--10-col-tablet': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--10-col, .mdl-grid--no-spacing >     .mdl-cell--10-col-tablet.mdl-cell--10-col-tablet': {
				width: '100%'
			},
			'.mdl-cell--11-col,   .mdl-cell--11-col-tablet.mdl-cell--11-col-tablet': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--11-col, .mdl-grid--no-spacing >     .mdl-cell--11-col-tablet.mdl-cell--11-col-tablet': {
				width: '100%'
			},
			'.mdl-cell--12-col,   .mdl-cell--12-col-tablet.mdl-cell--12-col-tablet': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--12-col, .mdl-grid--no-spacing >     .mdl-cell--12-col-tablet.mdl-cell--12-col-tablet': {
				width: '100%'
			},
			'.mdl-cell--1-offset,   .mdl-cell--1-offset-tablet.mdl-cell--1-offset-tablet': {
				marginLeft: 'calc(12.5% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--1-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--1-offset-tablet.mdl-cell--1-offset-tablet': {
				marginLeft: '12.5%'
			},
			'.mdl-cell--2-offset,   .mdl-cell--2-offset-tablet.mdl-cell--2-offset-tablet': {
				marginLeft: 'calc(25% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--2-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--2-offset-tablet.mdl-cell--2-offset-tablet': {
				marginLeft: '25%'
			},
			'.mdl-cell--3-offset,   .mdl-cell--3-offset-tablet.mdl-cell--3-offset-tablet': {
				marginLeft: 'calc(37.5% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--3-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--3-offset-tablet.mdl-cell--3-offset-tablet': {
				marginLeft: '37.5%'
			},
			'.mdl-cell--4-offset,   .mdl-cell--4-offset-tablet.mdl-cell--4-offset-tablet': {
				marginLeft: 'calc(50% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--4-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--4-offset-tablet.mdl-cell--4-offset-tablet': {
				marginLeft: '50%'
			},
			'.mdl-cell--5-offset,   .mdl-cell--5-offset-tablet.mdl-cell--5-offset-tablet': {
				marginLeft: 'calc(62.5% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--5-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--5-offset-tablet.mdl-cell--5-offset-tablet': {
				marginLeft: '62.5%'
			},
			'.mdl-cell--6-offset,   .mdl-cell--6-offset-tablet.mdl-cell--6-offset-tablet': {
				marginLeft: 'calc(75% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--6-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--6-offset-tablet.mdl-cell--6-offset-tablet': {
				marginLeft: '75%'
			},
			'.mdl-cell--7-offset,   .mdl-cell--7-offset-tablet.mdl-cell--7-offset-tablet': {
				marginLeft: 'calc(87.5% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--7-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--7-offset-tablet.mdl-cell--7-offset-tablet': {
				marginLeft: '87.5%'
			}
		},
		'(min-width: 840px)': {
			'.mdl-grid': {
				padding: 8
			},
			'.mdl-cell': {
				margin: 8,
				width: 'calc(33.3333333333% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell': {
				width: '33.3333333333%'
			},
			'.mdl-cell--hide-desktop': {
				display: 'none'
			},
			'.mdl-cell--order-1-desktop.mdl-cell--order-1-desktop': {
				WebkitOrder: 1,
				msFlexOrder: 1,
				order: 1
			},
			'.mdl-cell--order-2-desktop.mdl-cell--order-2-desktop': {
				WebkitOrder: 2,
				msFlexOrder: 2,
				order: 2
			},
			'.mdl-cell--order-3-desktop.mdl-cell--order-3-desktop': {
				WebkitOrder: 3,
				msFlexOrder: 3,
				order: 3
			},
			'.mdl-cell--order-4-desktop.mdl-cell--order-4-desktop': {
				WebkitOrder: 4,
				msFlexOrder: 4,
				order: 4
			},
			'.mdl-cell--order-5-desktop.mdl-cell--order-5-desktop': {
				WebkitOrder: 5,
				msFlexOrder: 5,
				order: 5
			},
			'.mdl-cell--order-6-desktop.mdl-cell--order-6-desktop': {
				WebkitOrder: 6,
				msFlexOrder: 6,
				order: 6
			},
			'.mdl-cell--order-7-desktop.mdl-cell--order-7-desktop': {
				WebkitOrder: 7,
				msFlexOrder: 7,
				order: 7
			},
			'.mdl-cell--order-8-desktop.mdl-cell--order-8-desktop': {
				WebkitOrder: 8,
				msFlexOrder: 8,
				order: 8
			},
			'.mdl-cell--order-9-desktop.mdl-cell--order-9-desktop': {
				WebkitOrder: 9,
				msFlexOrder: 9,
				order: 9
			},
			'.mdl-cell--order-10-desktop.mdl-cell--order-10-desktop': {
				WebkitOrder: 10,
				msFlexOrder: 10,
				order: 10
			},
			'.mdl-cell--order-11-desktop.mdl-cell--order-11-desktop': {
				WebkitOrder: 11,
				msFlexOrder: 11,
				order: 11
			},
			'.mdl-cell--order-12-desktop.mdl-cell--order-12-desktop': {
				WebkitOrder: 12,
				msFlexOrder: 12,
				order: 12
			},
			'.mdl-cell--1-col,   .mdl-cell--1-col-desktop.mdl-cell--1-col-desktop': {
				width: 'calc(8.3333333333% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--1-col, .mdl-grid--no-spacing >     .mdl-cell--1-col-desktop.mdl-cell--1-col-desktop': {
				width: '8.3333333333%'
			},
			'.mdl-cell--2-col,   .mdl-cell--2-col-desktop.mdl-cell--2-col-desktop': {
				width: 'calc(16.6666666667% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--2-col, .mdl-grid--no-spacing >     .mdl-cell--2-col-desktop.mdl-cell--2-col-desktop': {
				width: '16.6666666667%'
			},
			'.mdl-cell--3-col,   .mdl-cell--3-col-desktop.mdl-cell--3-col-desktop': {
				width: 'calc(25% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--3-col, .mdl-grid--no-spacing >     .mdl-cell--3-col-desktop.mdl-cell--3-col-desktop': {
				width: '25%'
			},
			'.mdl-cell--4-col,   .mdl-cell--4-col-desktop.mdl-cell--4-col-desktop': {
				width: 'calc(33.3333333333% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--4-col, .mdl-grid--no-spacing >     .mdl-cell--4-col-desktop.mdl-cell--4-col-desktop': {
				width: '33.3333333333%'
			},
			'.mdl-cell--5-col,   .mdl-cell--5-col-desktop.mdl-cell--5-col-desktop': {
				width: 'calc(41.6666666667% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--5-col, .mdl-grid--no-spacing >     .mdl-cell--5-col-desktop.mdl-cell--5-col-desktop': {
				width: '41.6666666667%'
			},
			'.mdl-cell--6-col,   .mdl-cell--6-col-desktop.mdl-cell--6-col-desktop': {
				width: 'calc(50% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--6-col, .mdl-grid--no-spacing >     .mdl-cell--6-col-desktop.mdl-cell--6-col-desktop': {
				width: '50%'
			},
			'.mdl-cell--7-col,   .mdl-cell--7-col-desktop.mdl-cell--7-col-desktop': {
				width: 'calc(58.3333333333% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--7-col, .mdl-grid--no-spacing >     .mdl-cell--7-col-desktop.mdl-cell--7-col-desktop': {
				width: '58.3333333333%'
			},
			'.mdl-cell--8-col,   .mdl-cell--8-col-desktop.mdl-cell--8-col-desktop': {
				width: 'calc(66.6666666667% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--8-col, .mdl-grid--no-spacing >     .mdl-cell--8-col-desktop.mdl-cell--8-col-desktop': {
				width: '66.6666666667%'
			},
			'.mdl-cell--9-col,   .mdl-cell--9-col-desktop.mdl-cell--9-col-desktop': {
				width: 'calc(75% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--9-col, .mdl-grid--no-spacing >     .mdl-cell--9-col-desktop.mdl-cell--9-col-desktop': {
				width: '75%'
			},
			'.mdl-cell--10-col,   .mdl-cell--10-col-desktop.mdl-cell--10-col-desktop': {
				width: 'calc(83.3333333333% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--10-col, .mdl-grid--no-spacing >     .mdl-cell--10-col-desktop.mdl-cell--10-col-desktop': {
				width: '83.3333333333%'
			},
			'.mdl-cell--11-col,   .mdl-cell--11-col-desktop.mdl-cell--11-col-desktop': {
				width: 'calc(91.6666666667% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--11-col, .mdl-grid--no-spacing >     .mdl-cell--11-col-desktop.mdl-cell--11-col-desktop': {
				width: '91.6666666667%'
			},
			'.mdl-cell--12-col,   .mdl-cell--12-col-desktop.mdl-cell--12-col-desktop': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing > .mdl-cell--12-col, .mdl-grid--no-spacing >     .mdl-cell--12-col-desktop.mdl-cell--12-col-desktop': {
				width: '100%'
			},
			'.mdl-cell--1-offset,   .mdl-cell--1-offset-desktop.mdl-cell--1-offset-desktop': {
				marginLeft: 'calc(8.3333333333% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--1-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--1-offset-desktop.mdl-cell--1-offset-desktop': {
				marginLeft: '8.3333333333%'
			},
			'.mdl-cell--2-offset,   .mdl-cell--2-offset-desktop.mdl-cell--2-offset-desktop': {
				marginLeft: 'calc(16.6666666667% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--2-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--2-offset-desktop.mdl-cell--2-offset-desktop': {
				marginLeft: '16.6666666667%'
			},
			'.mdl-cell--3-offset,   .mdl-cell--3-offset-desktop.mdl-cell--3-offset-desktop': {
				marginLeft: 'calc(25% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--3-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--3-offset-desktop.mdl-cell--3-offset-desktop': {
				marginLeft: '25%'
			},
			'.mdl-cell--4-offset,   .mdl-cell--4-offset-desktop.mdl-cell--4-offset-desktop': {
				marginLeft: 'calc(33.3333333333% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--4-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--4-offset-desktop.mdl-cell--4-offset-desktop': {
				marginLeft: '33.3333333333%'
			},
			'.mdl-cell--5-offset,   .mdl-cell--5-offset-desktop.mdl-cell--5-offset-desktop': {
				marginLeft: 'calc(41.6666666667% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--5-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--5-offset-desktop.mdl-cell--5-offset-desktop': {
				marginLeft: '41.6666666667%'
			},
			'.mdl-cell--6-offset,   .mdl-cell--6-offset-desktop.mdl-cell--6-offset-desktop': {
				marginLeft: 'calc(50% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--6-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--6-offset-desktop.mdl-cell--6-offset-desktop': {
				marginLeft: '50%'
			},
			'.mdl-cell--7-offset,   .mdl-cell--7-offset-desktop.mdl-cell--7-offset-desktop': {
				marginLeft: 'calc(58.3333333333% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--7-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--7-offset-desktop.mdl-cell--7-offset-desktop': {
				marginLeft: '58.3333333333%'
			},
			'.mdl-cell--8-offset,   .mdl-cell--8-offset-desktop.mdl-cell--8-offset-desktop': {
				marginLeft: 'calc(66.6666666667% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--8-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--8-offset-desktop.mdl-cell--8-offset-desktop': {
				marginLeft: '66.6666666667%'
			},
			'.mdl-cell--9-offset,   .mdl-cell--9-offset-desktop.mdl-cell--9-offset-desktop': {
				marginLeft: 'calc(75% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--9-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--9-offset-desktop.mdl-cell--9-offset-desktop': {
				marginLeft: '75%'
			},
			'.mdl-cell--10-offset,   .mdl-cell--10-offset-desktop.mdl-cell--10-offset-desktop': {
				marginLeft: 'calc(83.3333333333% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--10-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--10-offset-desktop.mdl-cell--10-offset-desktop': {
				marginLeft: '83.3333333333%'
			},
			'.mdl-cell--11-offset,   .mdl-cell--11-offset-desktop.mdl-cell--11-offset-desktop': {
				marginLeft: 'calc(91.6666666667% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing > .mdl-cell--11-offset, .mdl-grid.mdl-grid--no-spacing >     .mdl-cell--11-offset-desktop.mdl-cell--11-offset-desktop': {
				marginLeft: '91.6666666667%'
			}
		}
	},
	'a, .mdl-accordion, .mdl-button, .mdl-card, .mdl-checkbox, .mdl-dropdown-menu, .mdl-icon-toggle, .mdl-item, .mdl-radio, .mdl-slider, .mdl-switch, .mdl-tabs__tab': {
		WebkitTapHighlightColor: 'rgba(255, 255, 255, 0)'
	},
	body: {
		width: '100%',
		minHeight: '100%',
		margin: 0
	},
	main: {
		display: 'block'
	},
	'*[hidden]': {
		display: 'none'
	},
	'html, body': {
		fontFamily: '"Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 20
	},
	'h1, h2, h3, h4, h5, h6, p': {
		margin: 0,
		padding: 0
	},
	'h1 small, h2 small, h3 small, h4 small, h5 small, h6 small': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: '0.6em',
		fontWeight: 400,
		lineHeight: 1.35,
		letterSpacing: '-0.02em',
		opacity: 0.54
	},
	h1: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 56,
		fontWeight: 400,
		lineHeight: 1.35,
		letterSpacing: '-0.02em',
		marginTop: 24,
		marginBottom: 24
	},
	h2: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 45,
		fontWeight: 400,
		lineHeight: 48,
		marginTop: 24,
		marginBottom: 24
	},
	h3: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 34,
		fontWeight: 400,
		lineHeight: 40,
		marginTop: 24,
		marginBottom: 24
	},
	h4: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 24,
		fontWeight: 400,
		lineHeight: 32,
		MozOsxFontSmoothing: 'grayscale',
		marginTop: 24,
		marginBottom: 16
	},
	h5: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 20,
		fontWeight: 500,
		lineHeight: 1,
		letterSpacing: '0.02em',
		marginTop: 24,
		marginBottom: 16
	},
	h6: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 16,
		fontWeight: 400,
		lineHeight: 24,
		letterSpacing: '0.04em',
		marginTop: 24,
		marginBottom: 16
	},
	p: {
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 24,
		letterSpacing: 0,
		marginBottom: 16
	},
	a: {
		color: 'rgb(255,64,129)',
		fontWeight: 500
	},
	blockquote: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		position: 'relative',
		fontSize: 24,
		fontWeight: 300,
		fontStyle: 'italic',
		lineHeight: 1.35,
		letterSpacing: '0.08em'
	},
	'blockquote:before': {
		position: 'absolute',
		left: '-0.5em',
		content: '\'“\''
	},
	'blockquote:after': {
		content: '\'”\'',
		marginLeft: '-0.05em'
	},
	mark: {
		backgroundColor: '#f4ff81'
	},
	dt: {
		fontWeight: 700
	},
	address: {
		fontSize: 12,
		fontWeight: 400,
		lineHeight: 1,
		letterSpacing: 0,
		fontStyle: 'normal'
	},
	'ul, ol': {
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 24,
		letterSpacing: 0
	},
	'.mdl-typography--display-4': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 112,
		fontWeight: 300,
		lineHeight: 1,
		letterSpacing: '-0.04em'
	},
	'.mdl-typography--display-4-color-contrast': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 112,
		fontWeight: 300,
		lineHeight: 1,
		letterSpacing: '-0.04em',
		opacity: 0.54
	},
	'.mdl-typography--display-3': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 56,
		fontWeight: 400,
		lineHeight: 1.35,
		letterSpacing: '-0.02em'
	},
	'.mdl-typography--display-3-color-contrast': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 56,
		fontWeight: 400,
		lineHeight: 1.35,
		letterSpacing: '-0.02em',
		opacity: 0.54
	},
	'.mdl-typography--display-2': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 45,
		fontWeight: 400,
		lineHeight: 48
	},
	'.mdl-typography--display-2-color-contrast': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 45,
		fontWeight: 400,
		lineHeight: 48,
		opacity: 0.54
	},
	'.mdl-typography--display-1': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 34,
		fontWeight: 400,
		lineHeight: 40
	},
	'.mdl-typography--display-1-color-contrast': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 34,
		fontWeight: 400,
		lineHeight: 40,
		opacity: 0.54
	},
	'.mdl-typography--headline': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 24,
		fontWeight: 400,
		lineHeight: 32,
		MozOsxFontSmoothing: 'grayscale'
	},
	'.mdl-typography--headline-color-contrast': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 24,
		fontWeight: 400,
		lineHeight: 32,
		MozOsxFontSmoothing: 'grayscale',
		opacity: 0.87
	},
	'.mdl-typography--title': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 20,
		fontWeight: 500,
		lineHeight: 1,
		letterSpacing: '0.02em'
	},
	'.mdl-typography--title-color-contrast': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 20,
		fontWeight: 500,
		lineHeight: 1,
		letterSpacing: '0.02em',
		opacity: 0.87
	},
	'.mdl-typography--subhead': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 16,
		fontWeight: 400,
		lineHeight: 24,
		letterSpacing: '0.04em'
	},
	'.mdl-typography--subhead-color-contrast': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 16,
		fontWeight: 400,
		lineHeight: 24,
		letterSpacing: '0.04em',
		opacity: 0.87
	},
	'.mdl-typography--body-2': {
		fontSize: 14,
		fontWeight: 'bold',
		lineHeight: 24,
		letterSpacing: 0
	},
	'.mdl-typography--body-2-color-contrast': {
		fontSize: 14,
		fontWeight: 'bold',
		lineHeight: 24,
		letterSpacing: 0,
		opacity: 0.87
	},
	'.mdl-typography--body-1': {
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 24,
		letterSpacing: 0
	},
	'.mdl-typography--body-1-color-contrast': {
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 24,
		letterSpacing: 0,
		opacity: 0.87
	},
	'.mdl-typography--body-2-force-preferred-font': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeight: 500,
		lineHeight: 24,
		letterSpacing: 0
	},
	'.mdl-typography--body-2-force-preferred-font-color-contrast': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeight: 500,
		lineHeight: 24,
		letterSpacing: 0,
		opacity: 0.87
	},
	'.mdl-typography--body-1-force-preferred-font': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 24,
		letterSpacing: 0
	},
	'.mdl-typography--body-1-force-preferred-font-color-contrast': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 24,
		letterSpacing: 0,
		opacity: 0.87
	},
	'.mdl-typography--caption': {
		fontSize: 12,
		fontWeight: 400,
		lineHeight: 1,
		letterSpacing: 0
	},
	'.mdl-typography--caption-force-preferred-font': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 12,
		fontWeight: 400,
		lineHeight: 1,
		letterSpacing: 0
	},
	'.mdl-typography--caption-color-contrast': {
		fontSize: 12,
		fontWeight: 400,
		lineHeight: 1,
		letterSpacing: 0,
		opacity: 0.54
	},
	'.mdl-typography--caption-force-preferred-font-color-contrast': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 12,
		fontWeight: 400,
		lineHeight: 1,
		letterSpacing: 0,
		opacity: 0.54
	},
	'.mdl-typography--menu': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeight: 500,
		lineHeight: 1,
		letterSpacing: 0
	},
	'.mdl-typography--menu-color-contrast': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeight: 500,
		lineHeight: 1,
		letterSpacing: 0,
		opacity: 0.87
	},
	'.mdl-typography--button': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeight: 500,
		textTransform: 'uppercase',
		lineHeight: 1,
		letterSpacing: 0
	},
	'.mdl-typography--button-color-contrast': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeight: 500,
		textTransform: 'uppercase',
		lineHeight: 1,
		letterSpacing: 0,
		opacity: 0.87
	},
	'.mdl-typography--text-left': {
		textAlign: 'left'
	},
	'.mdl-typography--text-right': {
		textAlign: 'right'
	},
	'.mdl-typography--text-center': {
		textAlign: 'center'
	},
	'.mdl-typography--text-justify': {
		textAlign: 'justify'
	},
	'.mdl-typography--text-nowrap': {
		whiteSpace: 'nowrap'
	},
	'.mdl-typography--text-lowercase': {
		textTransform: 'lowercase'
	},
	'.mdl-typography--text-uppercase': {
		textTransform: 'uppercase'
	},
	'.mdl-typography--text-capitalize': {
		textTransform: 'capitalize'
	},
	'.mdl-typography--font-thin': {
		fontWeight: 200
	},
	'.mdl-typography--font-light': {
		fontWeight: 300
	},
	'.mdl-typography--font-regular': {
		fontWeight: 400
	},
	'.mdl-typography--font-medium': {
		fontWeight: 500
	},
	'.mdl-typography--font-bold': {
		fontWeight: 700
	},
	'.mdl-typography--font-black': {
		fontWeight: 900
	},
	'.material-icons': {
		fontFamily: '\'Material Icons\'',
		fontWeight: 'normal',
		fontStyle: 'normal',
		fontSize: 24,
		lineHeight: 1,
		letterSpacing: 'normal',
		textTransform: 'none',
		display: 'inline-block',
		wordWrap: 'normal',
		MozFontFeatureSettings: '\'liga\'',
		fontFeatureSettings: '\'liga\'',
		WebkitFontFeatureSettings: '\'liga\'',
		WebkitFontSmoothing: 'antialiased'
	},
	'.mdl-color-text--red': {
		color: 'rgb(244,67,54)'
	},
	'.mdl-color--red': {
		backgroundColor: 'rgb(244,67,54)'
	},
	'.mdl-color-text--red-50': {
		color: 'rgb(255,235,238)'
	},
	'.mdl-color--red-50': {
		backgroundColor: 'rgb(255,235,238)'
	},
	'.mdl-color-text--red-100': {
		color: 'rgb(255,205,210)'
	},
	'.mdl-color--red-100': {
		backgroundColor: 'rgb(255,205,210)'
	},
	'.mdl-color-text--red-200': {
		color: 'rgb(239,154,154)'
	},
	'.mdl-color--red-200': {
		backgroundColor: 'rgb(239,154,154)'
	},
	'.mdl-color-text--red-300': {
		color: 'rgb(229,115,115)'
	},
	'.mdl-color--red-300': {
		backgroundColor: 'rgb(229,115,115)'
	},
	'.mdl-color-text--red-400': {
		color: 'rgb(239,83,80)'
	},
	'.mdl-color--red-400': {
		backgroundColor: 'rgb(239,83,80)'
	},
	'.mdl-color-text--red-500': {
		color: 'rgb(244,67,54)'
	},
	'.mdl-color--red-500': {
		backgroundColor: 'rgb(244,67,54)'
	},
	'.mdl-color-text--red-600': {
		color: 'rgb(229,57,53)'
	},
	'.mdl-color--red-600': {
		backgroundColor: 'rgb(229,57,53)'
	},
	'.mdl-color-text--red-700': {
		color: 'rgb(211,47,47)'
	},
	'.mdl-color--red-700': {
		backgroundColor: 'rgb(211,47,47)'
	},
	'.mdl-color-text--red-800': {
		color: 'rgb(198,40,40)'
	},
	'.mdl-color--red-800': {
		backgroundColor: 'rgb(198,40,40)'
	},
	'.mdl-color-text--red-900': {
		color: 'rgb(183,28,28)'
	},
	'.mdl-color--red-900': {
		backgroundColor: 'rgb(183,28,28)'
	},
	'.mdl-color-text--red-A100': {
		color: 'rgb(255,138,128)'
	},
	'.mdl-color--red-A100': {
		backgroundColor: 'rgb(255,138,128)'
	},
	'.mdl-color-text--red-A200': {
		color: 'rgb(255,82,82)'
	},
	'.mdl-color--red-A200': {
		backgroundColor: 'rgb(255,82,82)'
	},
	'.mdl-color-text--red-A400': {
		color: 'rgb(255,23,68)'
	},
	'.mdl-color--red-A400': {
		backgroundColor: 'rgb(255,23,68)'
	},
	'.mdl-color-text--red-A700': {
		color: 'rgb(213,0,0)'
	},
	'.mdl-color--red-A700': {
		backgroundColor: 'rgb(213,0,0)'
	},
	'.mdl-color-text--pink': {
		color: 'rgb(233,30,99)'
	},
	'.mdl-color--pink': {
		backgroundColor: 'rgb(233,30,99)'
	},
	'.mdl-color-text--pink-50': {
		color: 'rgb(252,228,236)'
	},
	'.mdl-color--pink-50': {
		backgroundColor: 'rgb(252,228,236)'
	},
	'.mdl-color-text--pink-100': {
		color: 'rgb(248,187,208)'
	},
	'.mdl-color--pink-100': {
		backgroundColor: 'rgb(248,187,208)'
	},
	'.mdl-color-text--pink-200': {
		color: 'rgb(244,143,177)'
	},
	'.mdl-color--pink-200': {
		backgroundColor: 'rgb(244,143,177)'
	},
	'.mdl-color-text--pink-300': {
		color: 'rgb(240,98,146)'
	},
	'.mdl-color--pink-300': {
		backgroundColor: 'rgb(240,98,146)'
	},
	'.mdl-color-text--pink-400': {
		color: 'rgb(236,64,122)'
	},
	'.mdl-color--pink-400': {
		backgroundColor: 'rgb(236,64,122)'
	},
	'.mdl-color-text--pink-500': {
		color: 'rgb(233,30,99)'
	},
	'.mdl-color--pink-500': {
		backgroundColor: 'rgb(233,30,99)'
	},
	'.mdl-color-text--pink-600': {
		color: 'rgb(216,27,96)'
	},
	'.mdl-color--pink-600': {
		backgroundColor: 'rgb(216,27,96)'
	},
	'.mdl-color-text--pink-700': {
		color: 'rgb(194,24,91)'
	},
	'.mdl-color--pink-700': {
		backgroundColor: 'rgb(194,24,91)'
	},
	'.mdl-color-text--pink-800': {
		color: 'rgb(173,20,87)'
	},
	'.mdl-color--pink-800': {
		backgroundColor: 'rgb(173,20,87)'
	},
	'.mdl-color-text--pink-900': {
		color: 'rgb(136,14,79)'
	},
	'.mdl-color--pink-900': {
		backgroundColor: 'rgb(136,14,79)'
	},
	'.mdl-color-text--pink-A100': {
		color: 'rgb(255,128,171)'
	},
	'.mdl-color--pink-A100': {
		backgroundColor: 'rgb(255,128,171)'
	},
	'.mdl-color-text--pink-A200': {
		color: 'rgb(255,64,129)'
	},
	'.mdl-color--pink-A200': {
		backgroundColor: 'rgb(255,64,129)'
	},
	'.mdl-color-text--pink-A400': {
		color: 'rgb(245,0,87)'
	},
	'.mdl-color--pink-A400': {
		backgroundColor: 'rgb(245,0,87)'
	},
	'.mdl-color-text--pink-A700': {
		color: 'rgb(197,17,98)'
	},
	'.mdl-color--pink-A700': {
		backgroundColor: 'rgb(197,17,98)'
	},
	'.mdl-color-text--purple': {
		color: 'rgb(156,39,176)'
	},
	'.mdl-color--purple': {
		backgroundColor: 'rgb(156,39,176)'
	},
	'.mdl-color-text--purple-50': {
		color: 'rgb(243,229,245)'
	},
	'.mdl-color--purple-50': {
		backgroundColor: 'rgb(243,229,245)'
	},
	'.mdl-color-text--purple-100': {
		color: 'rgb(225,190,231)'
	},
	'.mdl-color--purple-100': {
		backgroundColor: 'rgb(225,190,231)'
	},
	'.mdl-color-text--purple-200': {
		color: 'rgb(206,147,216)'
	},
	'.mdl-color--purple-200': {
		backgroundColor: 'rgb(206,147,216)'
	},
	'.mdl-color-text--purple-300': {
		color: 'rgb(186,104,200)'
	},
	'.mdl-color--purple-300': {
		backgroundColor: 'rgb(186,104,200)'
	},
	'.mdl-color-text--purple-400': {
		color: 'rgb(171,71,188)'
	},
	'.mdl-color--purple-400': {
		backgroundColor: 'rgb(171,71,188)'
	},
	'.mdl-color-text--purple-500': {
		color: 'rgb(156,39,176)'
	},
	'.mdl-color--purple-500': {
		backgroundColor: 'rgb(156,39,176)'
	},
	'.mdl-color-text--purple-600': {
		color: 'rgb(142,36,170)'
	},
	'.mdl-color--purple-600': {
		backgroundColor: 'rgb(142,36,170)'
	},
	'.mdl-color-text--purple-700': {
		color: 'rgb(123,31,162)'
	},
	'.mdl-color--purple-700': {
		backgroundColor: 'rgb(123,31,162)'
	},
	'.mdl-color-text--purple-800': {
		color: 'rgb(106,27,154)'
	},
	'.mdl-color--purple-800': {
		backgroundColor: 'rgb(106,27,154)'
	},
	'.mdl-color-text--purple-900': {
		color: 'rgb(74,20,140)'
	},
	'.mdl-color--purple-900': {
		backgroundColor: 'rgb(74,20,140)'
	},
	'.mdl-color-text--purple-A100': {
		color: 'rgb(234,128,252)'
	},
	'.mdl-color--purple-A100': {
		backgroundColor: 'rgb(234,128,252)'
	},
	'.mdl-color-text--purple-A200': {
		color: 'rgb(224,64,251)'
	},
	'.mdl-color--purple-A200': {
		backgroundColor: 'rgb(224,64,251)'
	},
	'.mdl-color-text--purple-A400': {
		color: 'rgb(213,0,249)'
	},
	'.mdl-color--purple-A400': {
		backgroundColor: 'rgb(213,0,249)'
	},
	'.mdl-color-text--purple-A700': {
		color: 'rgb(170,0,255)'
	},
	'.mdl-color--purple-A700': {
		backgroundColor: 'rgb(170,0,255)'
	},
	'.mdl-color-text--deep-purple': {
		color: 'rgb(103,58,183)'
	},
	'.mdl-color--deep-purple': {
		backgroundColor: 'rgb(103,58,183)'
	},
	'.mdl-color-text--deep-purple-50': {
		color: 'rgb(237,231,246)'
	},
	'.mdl-color--deep-purple-50': {
		backgroundColor: 'rgb(237,231,246)'
	},
	'.mdl-color-text--deep-purple-100': {
		color: 'rgb(209,196,233)'
	},
	'.mdl-color--deep-purple-100': {
		backgroundColor: 'rgb(209,196,233)'
	},
	'.mdl-color-text--deep-purple-200': {
		color: 'rgb(179,157,219)'
	},
	'.mdl-color--deep-purple-200': {
		backgroundColor: 'rgb(179,157,219)'
	},
	'.mdl-color-text--deep-purple-300': {
		color: 'rgb(149,117,205)'
	},
	'.mdl-color--deep-purple-300': {
		backgroundColor: 'rgb(149,117,205)'
	},
	'.mdl-color-text--deep-purple-400': {
		color: 'rgb(126,87,194)'
	},
	'.mdl-color--deep-purple-400': {
		backgroundColor: 'rgb(126,87,194)'
	},
	'.mdl-color-text--deep-purple-500': {
		color: 'rgb(103,58,183)'
	},
	'.mdl-color--deep-purple-500': {
		backgroundColor: 'rgb(103,58,183)'
	},
	'.mdl-color-text--deep-purple-600': {
		color: 'rgb(94,53,177)'
	},
	'.mdl-color--deep-purple-600': {
		backgroundColor: 'rgb(94,53,177)'
	},
	'.mdl-color-text--deep-purple-700': {
		color: 'rgb(81,45,168)'
	},
	'.mdl-color--deep-purple-700': {
		backgroundColor: 'rgb(81,45,168)'
	},
	'.mdl-color-text--deep-purple-800': {
		color: 'rgb(69,39,160)'
	},
	'.mdl-color--deep-purple-800': {
		backgroundColor: 'rgb(69,39,160)'
	},
	'.mdl-color-text--deep-purple-900': {
		color: 'rgb(49,27,146)'
	},
	'.mdl-color--deep-purple-900': {
		backgroundColor: 'rgb(49,27,146)'
	},
	'.mdl-color-text--deep-purple-A100': {
		color: 'rgb(179,136,255)'
	},
	'.mdl-color--deep-purple-A100': {
		backgroundColor: 'rgb(179,136,255)'
	},
	'.mdl-color-text--deep-purple-A200': {
		color: 'rgb(124,77,255)'
	},
	'.mdl-color--deep-purple-A200': {
		backgroundColor: 'rgb(124,77,255)'
	},
	'.mdl-color-text--deep-purple-A400': {
		color: 'rgb(101,31,255)'
	},
	'.mdl-color--deep-purple-A400': {
		backgroundColor: 'rgb(101,31,255)'
	},
	'.mdl-color-text--deep-purple-A700': {
		color: 'rgb(98,0,234)'
	},
	'.mdl-color--deep-purple-A700': {
		backgroundColor: 'rgb(98,0,234)'
	},
	'.mdl-color-text--indigo': {
		color: 'rgb(63,81,181)'
	},
	'.mdl-color--indigo': {
		backgroundColor: 'rgb(63,81,181)'
	},
	'.mdl-color-text--indigo-50': {
		color: 'rgb(232,234,246)'
	},
	'.mdl-color--indigo-50': {
		backgroundColor: 'rgb(232,234,246)'
	},
	'.mdl-color-text--indigo-100': {
		color: 'rgb(197,202,233)'
	},
	'.mdl-color--indigo-100': {
		backgroundColor: 'rgb(197,202,233)'
	},
	'.mdl-color-text--indigo-200': {
		color: 'rgb(159,168,218)'
	},
	'.mdl-color--indigo-200': {
		backgroundColor: 'rgb(159,168,218)'
	},
	'.mdl-color-text--indigo-300': {
		color: 'rgb(121,134,203)'
	},
	'.mdl-color--indigo-300': {
		backgroundColor: 'rgb(121,134,203)'
	},
	'.mdl-color-text--indigo-400': {
		color: 'rgb(92,107,192)'
	},
	'.mdl-color--indigo-400': {
		backgroundColor: 'rgb(92,107,192)'
	},
	'.mdl-color-text--indigo-500': {
		color: 'rgb(63,81,181)'
	},
	'.mdl-color--indigo-500': {
		backgroundColor: 'rgb(63,81,181)'
	},
	'.mdl-color-text--indigo-600': {
		color: 'rgb(57,73,171)'
	},
	'.mdl-color--indigo-600': {
		backgroundColor: 'rgb(57,73,171)'
	},
	'.mdl-color-text--indigo-700': {
		color: 'rgb(48,63,159)'
	},
	'.mdl-color--indigo-700': {
		backgroundColor: 'rgb(48,63,159)'
	},
	'.mdl-color-text--indigo-800': {
		color: 'rgb(40,53,147)'
	},
	'.mdl-color--indigo-800': {
		backgroundColor: 'rgb(40,53,147)'
	},
	'.mdl-color-text--indigo-900': {
		color: 'rgb(26,35,126)'
	},
	'.mdl-color--indigo-900': {
		backgroundColor: 'rgb(26,35,126)'
	},
	'.mdl-color-text--indigo-A100': {
		color: 'rgb(140,158,255)'
	},
	'.mdl-color--indigo-A100': {
		backgroundColor: 'rgb(140,158,255)'
	},
	'.mdl-color-text--indigo-A200': {
		color: 'rgb(83,109,254)'
	},
	'.mdl-color--indigo-A200': {
		backgroundColor: 'rgb(83,109,254)'
	},
	'.mdl-color-text--indigo-A400': {
		color: 'rgb(61,90,254)'
	},
	'.mdl-color--indigo-A400': {
		backgroundColor: 'rgb(61,90,254)'
	},
	'.mdl-color-text--indigo-A700': {
		color: 'rgb(48,79,254)'
	},
	'.mdl-color--indigo-A700': {
		backgroundColor: 'rgb(48,79,254)'
	},
	'.mdl-color-text--blue': {
		color: 'rgb(33,150,243)'
	},
	'.mdl-color--blue': {
		backgroundColor: 'rgb(33,150,243)'
	},
	'.mdl-color-text--blue-50': {
		color: 'rgb(227,242,253)'
	},
	'.mdl-color--blue-50': {
		backgroundColor: 'rgb(227,242,253)'
	},
	'.mdl-color-text--blue-100': {
		color: 'rgb(187,222,251)'
	},
	'.mdl-color--blue-100': {
		backgroundColor: 'rgb(187,222,251)'
	},
	'.mdl-color-text--blue-200': {
		color: 'rgb(144,202,249)'
	},
	'.mdl-color--blue-200': {
		backgroundColor: 'rgb(144,202,249)'
	},
	'.mdl-color-text--blue-300': {
		color: 'rgb(100,181,246)'
	},
	'.mdl-color--blue-300': {
		backgroundColor: 'rgb(100,181,246)'
	},
	'.mdl-color-text--blue-400': {
		color: 'rgb(66,165,245)'
	},
	'.mdl-color--blue-400': {
		backgroundColor: 'rgb(66,165,245)'
	},
	'.mdl-color-text--blue-500': {
		color: 'rgb(33,150,243)'
	},
	'.mdl-color--blue-500': {
		backgroundColor: 'rgb(33,150,243)'
	},
	'.mdl-color-text--blue-600': {
		color: 'rgb(30,136,229)'
	},
	'.mdl-color--blue-600': {
		backgroundColor: 'rgb(30,136,229)'
	},
	'.mdl-color-text--blue-700': {
		color: 'rgb(25,118,210)'
	},
	'.mdl-color--blue-700': {
		backgroundColor: 'rgb(25,118,210)'
	},
	'.mdl-color-text--blue-800': {
		color: 'rgb(21,101,192)'
	},
	'.mdl-color--blue-800': {
		backgroundColor: 'rgb(21,101,192)'
	},
	'.mdl-color-text--blue-900': {
		color: 'rgb(13,71,161)'
	},
	'.mdl-color--blue-900': {
		backgroundColor: 'rgb(13,71,161)'
	},
	'.mdl-color-text--blue-A100': {
		color: 'rgb(130,177,255)'
	},
	'.mdl-color--blue-A100': {
		backgroundColor: 'rgb(130,177,255)'
	},
	'.mdl-color-text--blue-A200': {
		color: 'rgb(68,138,255)'
	},
	'.mdl-color--blue-A200': {
		backgroundColor: 'rgb(68,138,255)'
	},
	'.mdl-color-text--blue-A400': {
		color: 'rgb(41,121,255)'
	},
	'.mdl-color--blue-A400': {
		backgroundColor: 'rgb(41,121,255)'
	},
	'.mdl-color-text--blue-A700': {
		color: 'rgb(41,98,255)'
	},
	'.mdl-color--blue-A700': {
		backgroundColor: 'rgb(41,98,255)'
	},
	'.mdl-color-text--light-blue': {
		color: 'rgb(3,169,244)'
	},
	'.mdl-color--light-blue': {
		backgroundColor: 'rgb(3,169,244)'
	},
	'.mdl-color-text--light-blue-50': {
		color: 'rgb(225,245,254)'
	},
	'.mdl-color--light-blue-50': {
		backgroundColor: 'rgb(225,245,254)'
	},
	'.mdl-color-text--light-blue-100': {
		color: 'rgb(179,229,252)'
	},
	'.mdl-color--light-blue-100': {
		backgroundColor: 'rgb(179,229,252)'
	},
	'.mdl-color-text--light-blue-200': {
		color: 'rgb(129,212,250)'
	},
	'.mdl-color--light-blue-200': {
		backgroundColor: 'rgb(129,212,250)'
	},
	'.mdl-color-text--light-blue-300': {
		color: 'rgb(79,195,247)'
	},
	'.mdl-color--light-blue-300': {
		backgroundColor: 'rgb(79,195,247)'
	},
	'.mdl-color-text--light-blue-400': {
		color: 'rgb(41,182,246)'
	},
	'.mdl-color--light-blue-400': {
		backgroundColor: 'rgb(41,182,246)'
	},
	'.mdl-color-text--light-blue-500': {
		color: 'rgb(3,169,244)'
	},
	'.mdl-color--light-blue-500': {
		backgroundColor: 'rgb(3,169,244)'
	},
	'.mdl-color-text--light-blue-600': {
		color: 'rgb(3,155,229)'
	},
	'.mdl-color--light-blue-600': {
		backgroundColor: 'rgb(3,155,229)'
	},
	'.mdl-color-text--light-blue-700': {
		color: 'rgb(2,136,209)'
	},
	'.mdl-color--light-blue-700': {
		backgroundColor: 'rgb(2,136,209)'
	},
	'.mdl-color-text--light-blue-800': {
		color: 'rgb(2,119,189)'
	},
	'.mdl-color--light-blue-800': {
		backgroundColor: 'rgb(2,119,189)'
	},
	'.mdl-color-text--light-blue-900': {
		color: 'rgb(1,87,155)'
	},
	'.mdl-color--light-blue-900': {
		backgroundColor: 'rgb(1,87,155)'
	},
	'.mdl-color-text--light-blue-A100': {
		color: 'rgb(128,216,255)'
	},
	'.mdl-color--light-blue-A100': {
		backgroundColor: 'rgb(128,216,255)'
	},
	'.mdl-color-text--light-blue-A200': {
		color: 'rgb(64,196,255)'
	},
	'.mdl-color--light-blue-A200': {
		backgroundColor: 'rgb(64,196,255)'
	},
	'.mdl-color-text--light-blue-A400': {
		color: 'rgb(0,176,255)'
	},
	'.mdl-color--light-blue-A400': {
		backgroundColor: 'rgb(0,176,255)'
	},
	'.mdl-color-text--light-blue-A700': {
		color: 'rgb(0,145,234)'
	},
	'.mdl-color--light-blue-A700': {
		backgroundColor: 'rgb(0,145,234)'
	},
	'.mdl-color-text--cyan': {
		color: 'rgb(0,188,212)'
	},
	'.mdl-color--cyan': {
		backgroundColor: 'rgb(0,188,212)'
	},
	'.mdl-color-text--cyan-50': {
		color: 'rgb(224,247,250)'
	},
	'.mdl-color--cyan-50': {
		backgroundColor: 'rgb(224,247,250)'
	},
	'.mdl-color-text--cyan-100': {
		color: 'rgb(178,235,242)'
	},
	'.mdl-color--cyan-100': {
		backgroundColor: 'rgb(178,235,242)'
	},
	'.mdl-color-text--cyan-200': {
		color: 'rgb(128,222,234)'
	},
	'.mdl-color--cyan-200': {
		backgroundColor: 'rgb(128,222,234)'
	},
	'.mdl-color-text--cyan-300': {
		color: 'rgb(77,208,225)'
	},
	'.mdl-color--cyan-300': {
		backgroundColor: 'rgb(77,208,225)'
	},
	'.mdl-color-text--cyan-400': {
		color: 'rgb(38,198,218)'
	},
	'.mdl-color--cyan-400': {
		backgroundColor: 'rgb(38,198,218)'
	},
	'.mdl-color-text--cyan-500': {
		color: 'rgb(0,188,212)'
	},
	'.mdl-color--cyan-500': {
		backgroundColor: 'rgb(0,188,212)'
	},
	'.mdl-color-text--cyan-600': {
		color: 'rgb(0,172,193)'
	},
	'.mdl-color--cyan-600': {
		backgroundColor: 'rgb(0,172,193)'
	},
	'.mdl-color-text--cyan-700': {
		color: 'rgb(0,151,167)'
	},
	'.mdl-color--cyan-700': {
		backgroundColor: 'rgb(0,151,167)'
	},
	'.mdl-color-text--cyan-800': {
		color: 'rgb(0,131,143)'
	},
	'.mdl-color--cyan-800': {
		backgroundColor: 'rgb(0,131,143)'
	},
	'.mdl-color-text--cyan-900': {
		color: 'rgb(0,96,100)'
	},
	'.mdl-color--cyan-900': {
		backgroundColor: 'rgb(0,96,100)'
	},
	'.mdl-color-text--cyan-A100': {
		color: 'rgb(132,255,255)'
	},
	'.mdl-color--cyan-A100': {
		backgroundColor: 'rgb(132,255,255)'
	},
	'.mdl-color-text--cyan-A200': {
		color: 'rgb(24,255,255)'
	},
	'.mdl-color--cyan-A200': {
		backgroundColor: 'rgb(24,255,255)'
	},
	'.mdl-color-text--cyan-A400': {
		color: 'rgb(0,229,255)'
	},
	'.mdl-color--cyan-A400': {
		backgroundColor: 'rgb(0,229,255)'
	},
	'.mdl-color-text--cyan-A700': {
		color: 'rgb(0,184,212)'
	},
	'.mdl-color--cyan-A700': {
		backgroundColor: 'rgb(0,184,212)'
	},
	'.mdl-color-text--teal': {
		color: 'rgb(0,150,136)'
	},
	'.mdl-color--teal': {
		backgroundColor: 'rgb(0,150,136)'
	},
	'.mdl-color-text--teal-50': {
		color: 'rgb(224,242,241)'
	},
	'.mdl-color--teal-50': {
		backgroundColor: 'rgb(224,242,241)'
	},
	'.mdl-color-text--teal-100': {
		color: 'rgb(178,223,219)'
	},
	'.mdl-color--teal-100': {
		backgroundColor: 'rgb(178,223,219)'
	},
	'.mdl-color-text--teal-200': {
		color: 'rgb(128,203,196)'
	},
	'.mdl-color--teal-200': {
		backgroundColor: 'rgb(128,203,196)'
	},
	'.mdl-color-text--teal-300': {
		color: 'rgb(77,182,172)'
	},
	'.mdl-color--teal-300': {
		backgroundColor: 'rgb(77,182,172)'
	},
	'.mdl-color-text--teal-400': {
		color: 'rgb(38,166,154)'
	},
	'.mdl-color--teal-400': {
		backgroundColor: 'rgb(38,166,154)'
	},
	'.mdl-color-text--teal-500': {
		color: 'rgb(0,150,136)'
	},
	'.mdl-color--teal-500': {
		backgroundColor: 'rgb(0,150,136)'
	},
	'.mdl-color-text--teal-600': {
		color: 'rgb(0,137,123)'
	},
	'.mdl-color--teal-600': {
		backgroundColor: 'rgb(0,137,123)'
	},
	'.mdl-color-text--teal-700': {
		color: 'rgb(0,121,107)'
	},
	'.mdl-color--teal-700': {
		backgroundColor: 'rgb(0,121,107)'
	},
	'.mdl-color-text--teal-800': {
		color: 'rgb(0,105,92)'
	},
	'.mdl-color--teal-800': {
		backgroundColor: 'rgb(0,105,92)'
	},
	'.mdl-color-text--teal-900': {
		color: 'rgb(0,77,64)'
	},
	'.mdl-color--teal-900': {
		backgroundColor: 'rgb(0,77,64)'
	},
	'.mdl-color-text--teal-A100': {
		color: 'rgb(167,255,235)'
	},
	'.mdl-color--teal-A100': {
		backgroundColor: 'rgb(167,255,235)'
	},
	'.mdl-color-text--teal-A200': {
		color: 'rgb(100,255,218)'
	},
	'.mdl-color--teal-A200': {
		backgroundColor: 'rgb(100,255,218)'
	},
	'.mdl-color-text--teal-A400': {
		color: 'rgb(29,233,182)'
	},
	'.mdl-color--teal-A400': {
		backgroundColor: 'rgb(29,233,182)'
	},
	'.mdl-color-text--teal-A700': {
		color: 'rgb(0,191,165)'
	},
	'.mdl-color--teal-A700': {
		backgroundColor: 'rgb(0,191,165)'
	},
	'.mdl-color-text--green': {
		color: 'rgb(76,175,80)'
	},
	'.mdl-color--green': {
		backgroundColor: 'rgb(76,175,80)'
	},
	'.mdl-color-text--green-50': {
		color: 'rgb(232,245,233)'
	},
	'.mdl-color--green-50': {
		backgroundColor: 'rgb(232,245,233)'
	},
	'.mdl-color-text--green-100': {
		color: 'rgb(200,230,201)'
	},
	'.mdl-color--green-100': {
		backgroundColor: 'rgb(200,230,201)'
	},
	'.mdl-color-text--green-200': {
		color: 'rgb(165,214,167)'
	},
	'.mdl-color--green-200': {
		backgroundColor: 'rgb(165,214,167)'
	},
	'.mdl-color-text--green-300': {
		color: 'rgb(129,199,132)'
	},
	'.mdl-color--green-300': {
		backgroundColor: 'rgb(129,199,132)'
	},
	'.mdl-color-text--green-400': {
		color: 'rgb(102,187,106)'
	},
	'.mdl-color--green-400': {
		backgroundColor: 'rgb(102,187,106)'
	},
	'.mdl-color-text--green-500': {
		color: 'rgb(76,175,80)'
	},
	'.mdl-color--green-500': {
		backgroundColor: 'rgb(76,175,80)'
	},
	'.mdl-color-text--green-600': {
		color: 'rgb(67,160,71)'
	},
	'.mdl-color--green-600': {
		backgroundColor: 'rgb(67,160,71)'
	},
	'.mdl-color-text--green-700': {
		color: 'rgb(56,142,60)'
	},
	'.mdl-color--green-700': {
		backgroundColor: 'rgb(56,142,60)'
	},
	'.mdl-color-text--green-800': {
		color: 'rgb(46,125,50)'
	},
	'.mdl-color--green-800': {
		backgroundColor: 'rgb(46,125,50)'
	},
	'.mdl-color-text--green-900': {
		color: 'rgb(27,94,32)'
	},
	'.mdl-color--green-900': {
		backgroundColor: 'rgb(27,94,32)'
	},
	'.mdl-color-text--green-A100': {
		color: 'rgb(185,246,202)'
	},
	'.mdl-color--green-A100': {
		backgroundColor: 'rgb(185,246,202)'
	},
	'.mdl-color-text--green-A200': {
		color: 'rgb(105,240,174)'
	},
	'.mdl-color--green-A200': {
		backgroundColor: 'rgb(105,240,174)'
	},
	'.mdl-color-text--green-A400': {
		color: 'rgb(0,230,118)'
	},
	'.mdl-color--green-A400': {
		backgroundColor: 'rgb(0,230,118)'
	},
	'.mdl-color-text--green-A700': {
		color: 'rgb(0,200,83)'
	},
	'.mdl-color--green-A700': {
		backgroundColor: 'rgb(0,200,83)'
	},
	'.mdl-color-text--light-green': {
		color: 'rgb(139,195,74)'
	},
	'.mdl-color--light-green': {
		backgroundColor: 'rgb(139,195,74)'
	},
	'.mdl-color-text--light-green-50': {
		color: 'rgb(241,248,233)'
	},
	'.mdl-color--light-green-50': {
		backgroundColor: 'rgb(241,248,233)'
	},
	'.mdl-color-text--light-green-100': {
		color: 'rgb(220,237,200)'
	},
	'.mdl-color--light-green-100': {
		backgroundColor: 'rgb(220,237,200)'
	},
	'.mdl-color-text--light-green-200': {
		color: 'rgb(197,225,165)'
	},
	'.mdl-color--light-green-200': {
		backgroundColor: 'rgb(197,225,165)'
	},
	'.mdl-color-text--light-green-300': {
		color: 'rgb(174,213,129)'
	},
	'.mdl-color--light-green-300': {
		backgroundColor: 'rgb(174,213,129)'
	},
	'.mdl-color-text--light-green-400': {
		color: 'rgb(156,204,101)'
	},
	'.mdl-color--light-green-400': {
		backgroundColor: 'rgb(156,204,101)'
	},
	'.mdl-color-text--light-green-500': {
		color: 'rgb(139,195,74)'
	},
	'.mdl-color--light-green-500': {
		backgroundColor: 'rgb(139,195,74)'
	},
	'.mdl-color-text--light-green-600': {
		color: 'rgb(124,179,66)'
	},
	'.mdl-color--light-green-600': {
		backgroundColor: 'rgb(124,179,66)'
	},
	'.mdl-color-text--light-green-700': {
		color: 'rgb(104,159,56)'
	},
	'.mdl-color--light-green-700': {
		backgroundColor: 'rgb(104,159,56)'
	},
	'.mdl-color-text--light-green-800': {
		color: 'rgb(85,139,47)'
	},
	'.mdl-color--light-green-800': {
		backgroundColor: 'rgb(85,139,47)'
	},
	'.mdl-color-text--light-green-900': {
		color: 'rgb(51,105,30)'
	},
	'.mdl-color--light-green-900': {
		backgroundColor: 'rgb(51,105,30)'
	},
	'.mdl-color-text--light-green-A100': {
		color: 'rgb(204,255,144)'
	},
	'.mdl-color--light-green-A100': {
		backgroundColor: 'rgb(204,255,144)'
	},
	'.mdl-color-text--light-green-A200': {
		color: 'rgb(178,255,89)'
	},
	'.mdl-color--light-green-A200': {
		backgroundColor: 'rgb(178,255,89)'
	},
	'.mdl-color-text--light-green-A400': {
		color: 'rgb(118,255,3)'
	},
	'.mdl-color--light-green-A400': {
		backgroundColor: 'rgb(118,255,3)'
	},
	'.mdl-color-text--light-green-A700': {
		color: 'rgb(100,221,23)'
	},
	'.mdl-color--light-green-A700': {
		backgroundColor: 'rgb(100,221,23)'
	},
	'.mdl-color-text--lime': {
		color: 'rgb(205,220,57)'
	},
	'.mdl-color--lime': {
		backgroundColor: 'rgb(205,220,57)'
	},
	'.mdl-color-text--lime-50': {
		color: 'rgb(249,251,231)'
	},
	'.mdl-color--lime-50': {
		backgroundColor: 'rgb(249,251,231)'
	},
	'.mdl-color-text--lime-100': {
		color: 'rgb(240,244,195)'
	},
	'.mdl-color--lime-100': {
		backgroundColor: 'rgb(240,244,195)'
	},
	'.mdl-color-text--lime-200': {
		color: 'rgb(230,238,156)'
	},
	'.mdl-color--lime-200': {
		backgroundColor: 'rgb(230,238,156)'
	},
	'.mdl-color-text--lime-300': {
		color: 'rgb(220,231,117)'
	},
	'.mdl-color--lime-300': {
		backgroundColor: 'rgb(220,231,117)'
	},
	'.mdl-color-text--lime-400': {
		color: 'rgb(212,225,87)'
	},
	'.mdl-color--lime-400': {
		backgroundColor: 'rgb(212,225,87)'
	},
	'.mdl-color-text--lime-500': {
		color: 'rgb(205,220,57)'
	},
	'.mdl-color--lime-500': {
		backgroundColor: 'rgb(205,220,57)'
	},
	'.mdl-color-text--lime-600': {
		color: 'rgb(192,202,51)'
	},
	'.mdl-color--lime-600': {
		backgroundColor: 'rgb(192,202,51)'
	},
	'.mdl-color-text--lime-700': {
		color: 'rgb(175,180,43)'
	},
	'.mdl-color--lime-700': {
		backgroundColor: 'rgb(175,180,43)'
	},
	'.mdl-color-text--lime-800': {
		color: 'rgb(158,157,36)'
	},
	'.mdl-color--lime-800': {
		backgroundColor: 'rgb(158,157,36)'
	},
	'.mdl-color-text--lime-900': {
		color: 'rgb(130,119,23)'
	},
	'.mdl-color--lime-900': {
		backgroundColor: 'rgb(130,119,23)'
	},
	'.mdl-color-text--lime-A100': {
		color: 'rgb(244,255,129)'
	},
	'.mdl-color--lime-A100': {
		backgroundColor: 'rgb(244,255,129)'
	},
	'.mdl-color-text--lime-A200': {
		color: 'rgb(238,255,65)'
	},
	'.mdl-color--lime-A200': {
		backgroundColor: 'rgb(238,255,65)'
	},
	'.mdl-color-text--lime-A400': {
		color: 'rgb(198,255,0)'
	},
	'.mdl-color--lime-A400': {
		backgroundColor: 'rgb(198,255,0)'
	},
	'.mdl-color-text--lime-A700': {
		color: 'rgb(174,234,0)'
	},
	'.mdl-color--lime-A700': {
		backgroundColor: 'rgb(174,234,0)'
	},
	'.mdl-color-text--yellow': {
		color: 'rgb(255,235,59)'
	},
	'.mdl-color--yellow': {
		backgroundColor: 'rgb(255,235,59)'
	},
	'.mdl-color-text--yellow-50': {
		color: 'rgb(255,253,231)'
	},
	'.mdl-color--yellow-50': {
		backgroundColor: 'rgb(255,253,231)'
	},
	'.mdl-color-text--yellow-100': {
		color: 'rgb(255,249,196)'
	},
	'.mdl-color--yellow-100': {
		backgroundColor: 'rgb(255,249,196)'
	},
	'.mdl-color-text--yellow-200': {
		color: 'rgb(255,245,157)'
	},
	'.mdl-color--yellow-200': {
		backgroundColor: 'rgb(255,245,157)'
	},
	'.mdl-color-text--yellow-300': {
		color: 'rgb(255,241,118)'
	},
	'.mdl-color--yellow-300': {
		backgroundColor: 'rgb(255,241,118)'
	},
	'.mdl-color-text--yellow-400': {
		color: 'rgb(255,238,88)'
	},
	'.mdl-color--yellow-400': {
		backgroundColor: 'rgb(255,238,88)'
	},
	'.mdl-color-text--yellow-500': {
		color: 'rgb(255,235,59)'
	},
	'.mdl-color--yellow-500': {
		backgroundColor: 'rgb(255,235,59)'
	},
	'.mdl-color-text--yellow-600': {
		color: 'rgb(253,216,53)'
	},
	'.mdl-color--yellow-600': {
		backgroundColor: 'rgb(253,216,53)'
	},
	'.mdl-color-text--yellow-700': {
		color: 'rgb(251,192,45)'
	},
	'.mdl-color--yellow-700': {
		backgroundColor: 'rgb(251,192,45)'
	},
	'.mdl-color-text--yellow-800': {
		color: 'rgb(249,168,37)'
	},
	'.mdl-color--yellow-800': {
		backgroundColor: 'rgb(249,168,37)'
	},
	'.mdl-color-text--yellow-900': {
		color: 'rgb(245,127,23)'
	},
	'.mdl-color--yellow-900': {
		backgroundColor: 'rgb(245,127,23)'
	},
	'.mdl-color-text--yellow-A100': {
		color: 'rgb(255,255,141)'
	},
	'.mdl-color--yellow-A100': {
		backgroundColor: 'rgb(255,255,141)'
	},
	'.mdl-color-text--yellow-A200': {
		color: 'rgb(255,255,0)'
	},
	'.mdl-color--yellow-A200': {
		backgroundColor: 'rgb(255,255,0)'
	},
	'.mdl-color-text--yellow-A400': {
		color: 'rgb(255,234,0)'
	},
	'.mdl-color--yellow-A400': {
		backgroundColor: 'rgb(255,234,0)'
	},
	'.mdl-color-text--yellow-A700': {
		color: 'rgb(255,214,0)'
	},
	'.mdl-color--yellow-A700': {
		backgroundColor: 'rgb(255,214,0)'
	},
	'.mdl-color-text--amber': {
		color: 'rgb(255,193,7)'
	},
	'.mdl-color--amber': {
		backgroundColor: 'rgb(255,193,7)'
	},
	'.mdl-color-text--amber-50': {
		color: 'rgb(255,248,225)'
	},
	'.mdl-color--amber-50': {
		backgroundColor: 'rgb(255,248,225)'
	},
	'.mdl-color-text--amber-100': {
		color: 'rgb(255,236,179)'
	},
	'.mdl-color--amber-100': {
		backgroundColor: 'rgb(255,236,179)'
	},
	'.mdl-color-text--amber-200': {
		color: 'rgb(255,224,130)'
	},
	'.mdl-color--amber-200': {
		backgroundColor: 'rgb(255,224,130)'
	},
	'.mdl-color-text--amber-300': {
		color: 'rgb(255,213,79)'
	},
	'.mdl-color--amber-300': {
		backgroundColor: 'rgb(255,213,79)'
	},
	'.mdl-color-text--amber-400': {
		color: 'rgb(255,202,40)'
	},
	'.mdl-color--amber-400': {
		backgroundColor: 'rgb(255,202,40)'
	},
	'.mdl-color-text--amber-500': {
		color: 'rgb(255,193,7)'
	},
	'.mdl-color--amber-500': {
		backgroundColor: 'rgb(255,193,7)'
	},
	'.mdl-color-text--amber-600': {
		color: 'rgb(255,179,0)'
	},
	'.mdl-color--amber-600': {
		backgroundColor: 'rgb(255,179,0)'
	},
	'.mdl-color-text--amber-700': {
		color: 'rgb(255,160,0)'
	},
	'.mdl-color--amber-700': {
		backgroundColor: 'rgb(255,160,0)'
	},
	'.mdl-color-text--amber-800': {
		color: 'rgb(255,143,0)'
	},
	'.mdl-color--amber-800': {
		backgroundColor: 'rgb(255,143,0)'
	},
	'.mdl-color-text--amber-900': {
		color: 'rgb(255,111,0)'
	},
	'.mdl-color--amber-900': {
		backgroundColor: 'rgb(255,111,0)'
	},
	'.mdl-color-text--amber-A100': {
		color: 'rgb(255,229,127)'
	},
	'.mdl-color--amber-A100': {
		backgroundColor: 'rgb(255,229,127)'
	},
	'.mdl-color-text--amber-A200': {
		color: 'rgb(255,215,64)'
	},
	'.mdl-color--amber-A200': {
		backgroundColor: 'rgb(255,215,64)'
	},
	'.mdl-color-text--amber-A400': {
		color: 'rgb(255,196,0)'
	},
	'.mdl-color--amber-A400': {
		backgroundColor: 'rgb(255,196,0)'
	},
	'.mdl-color-text--amber-A700': {
		color: 'rgb(255,171,0)'
	},
	'.mdl-color--amber-A700': {
		backgroundColor: 'rgb(255,171,0)'
	},
	'.mdl-color-text--orange': {
		color: 'rgb(255,152,0)'
	},
	'.mdl-color--orange': {
		backgroundColor: 'rgb(255,152,0)'
	},
	'.mdl-color-text--orange-50': {
		color: 'rgb(255,243,224)'
	},
	'.mdl-color--orange-50': {
		backgroundColor: 'rgb(255,243,224)'
	},
	'.mdl-color-text--orange-100': {
		color: 'rgb(255,224,178)'
	},
	'.mdl-color--orange-100': {
		backgroundColor: 'rgb(255,224,178)'
	},
	'.mdl-color-text--orange-200': {
		color: 'rgb(255,204,128)'
	},
	'.mdl-color--orange-200': {
		backgroundColor: 'rgb(255,204,128)'
	},
	'.mdl-color-text--orange-300': {
		color: 'rgb(255,183,77)'
	},
	'.mdl-color--orange-300': {
		backgroundColor: 'rgb(255,183,77)'
	},
	'.mdl-color-text--orange-400': {
		color: 'rgb(255,167,38)'
	},
	'.mdl-color--orange-400': {
		backgroundColor: 'rgb(255,167,38)'
	},
	'.mdl-color-text--orange-500': {
		color: 'rgb(255,152,0)'
	},
	'.mdl-color--orange-500': {
		backgroundColor: 'rgb(255,152,0)'
	},
	'.mdl-color-text--orange-600': {
		color: 'rgb(251,140,0)'
	},
	'.mdl-color--orange-600': {
		backgroundColor: 'rgb(251,140,0)'
	},
	'.mdl-color-text--orange-700': {
		color: 'rgb(245,124,0)'
	},
	'.mdl-color--orange-700': {
		backgroundColor: 'rgb(245,124,0)'
	},
	'.mdl-color-text--orange-800': {
		color: 'rgb(239,108,0)'
	},
	'.mdl-color--orange-800': {
		backgroundColor: 'rgb(239,108,0)'
	},
	'.mdl-color-text--orange-900': {
		color: 'rgb(230,81,0)'
	},
	'.mdl-color--orange-900': {
		backgroundColor: 'rgb(230,81,0)'
	},
	'.mdl-color-text--orange-A100': {
		color: 'rgb(255,209,128)'
	},
	'.mdl-color--orange-A100': {
		backgroundColor: 'rgb(255,209,128)'
	},
	'.mdl-color-text--orange-A200': {
		color: 'rgb(255,171,64)'
	},
	'.mdl-color--orange-A200': {
		backgroundColor: 'rgb(255,171,64)'
	},
	'.mdl-color-text--orange-A400': {
		color: 'rgb(255,145,0)'
	},
	'.mdl-color--orange-A400': {
		backgroundColor: 'rgb(255,145,0)'
	},
	'.mdl-color-text--orange-A700': {
		color: 'rgb(255,109,0)'
	},
	'.mdl-color--orange-A700': {
		backgroundColor: 'rgb(255,109,0)'
	},
	'.mdl-color-text--deep-orange': {
		color: 'rgb(255,87,34)'
	},
	'.mdl-color--deep-orange': {
		backgroundColor: 'rgb(255,87,34)'
	},
	'.mdl-color-text--deep-orange-50': {
		color: 'rgb(251,233,231)'
	},
	'.mdl-color--deep-orange-50': {
		backgroundColor: 'rgb(251,233,231)'
	},
	'.mdl-color-text--deep-orange-100': {
		color: 'rgb(255,204,188)'
	},
	'.mdl-color--deep-orange-100': {
		backgroundColor: 'rgb(255,204,188)'
	},
	'.mdl-color-text--deep-orange-200': {
		color: 'rgb(255,171,145)'
	},
	'.mdl-color--deep-orange-200': {
		backgroundColor: 'rgb(255,171,145)'
	},
	'.mdl-color-text--deep-orange-300': {
		color: 'rgb(255,138,101)'
	},
	'.mdl-color--deep-orange-300': {
		backgroundColor: 'rgb(255,138,101)'
	},
	'.mdl-color-text--deep-orange-400': {
		color: 'rgb(255,112,67)'
	},
	'.mdl-color--deep-orange-400': {
		backgroundColor: 'rgb(255,112,67)'
	},
	'.mdl-color-text--deep-orange-500': {
		color: 'rgb(255,87,34)'
	},
	'.mdl-color--deep-orange-500': {
		backgroundColor: 'rgb(255,87,34)'
	},
	'.mdl-color-text--deep-orange-600': {
		color: 'rgb(244,81,30)'
	},
	'.mdl-color--deep-orange-600': {
		backgroundColor: 'rgb(244,81,30)'
	},
	'.mdl-color-text--deep-orange-700': {
		color: 'rgb(230,74,25)'
	},
	'.mdl-color--deep-orange-700': {
		backgroundColor: 'rgb(230,74,25)'
	},
	'.mdl-color-text--deep-orange-800': {
		color: 'rgb(216,67,21)'
	},
	'.mdl-color--deep-orange-800': {
		backgroundColor: 'rgb(216,67,21)'
	},
	'.mdl-color-text--deep-orange-900': {
		color: 'rgb(191,54,12)'
	},
	'.mdl-color--deep-orange-900': {
		backgroundColor: 'rgb(191,54,12)'
	},
	'.mdl-color-text--deep-orange-A100': {
		color: 'rgb(255,158,128)'
	},
	'.mdl-color--deep-orange-A100': {
		backgroundColor: 'rgb(255,158,128)'
	},
	'.mdl-color-text--deep-orange-A200': {
		color: 'rgb(255,110,64)'
	},
	'.mdl-color--deep-orange-A200': {
		backgroundColor: 'rgb(255,110,64)'
	},
	'.mdl-color-text--deep-orange-A400': {
		color: 'rgb(255,61,0)'
	},
	'.mdl-color--deep-orange-A400': {
		backgroundColor: 'rgb(255,61,0)'
	},
	'.mdl-color-text--deep-orange-A700': {
		color: 'rgb(221,44,0)'
	},
	'.mdl-color--deep-orange-A700': {
		backgroundColor: 'rgb(221,44,0)'
	},
	'.mdl-color-text--brown': {
		color: 'rgb(121,85,72)'
	},
	'.mdl-color--brown': {
		backgroundColor: 'rgb(121,85,72)'
	},
	'.mdl-color-text--brown-50': {
		color: 'rgb(239,235,233)'
	},
	'.mdl-color--brown-50': {
		backgroundColor: 'rgb(239,235,233)'
	},
	'.mdl-color-text--brown-100': {
		color: 'rgb(215,204,200)'
	},
	'.mdl-color--brown-100': {
		backgroundColor: 'rgb(215,204,200)'
	},
	'.mdl-color-text--brown-200': {
		color: 'rgb(188,170,164)'
	},
	'.mdl-color--brown-200': {
		backgroundColor: 'rgb(188,170,164)'
	},
	'.mdl-color-text--brown-300': {
		color: 'rgb(161,136,127)'
	},
	'.mdl-color--brown-300': {
		backgroundColor: 'rgb(161,136,127)'
	},
	'.mdl-color-text--brown-400': {
		color: 'rgb(141,110,99)'
	},
	'.mdl-color--brown-400': {
		backgroundColor: 'rgb(141,110,99)'
	},
	'.mdl-color-text--brown-500': {
		color: 'rgb(121,85,72)'
	},
	'.mdl-color--brown-500': {
		backgroundColor: 'rgb(121,85,72)'
	},
	'.mdl-color-text--brown-600': {
		color: 'rgb(109,76,65)'
	},
	'.mdl-color--brown-600': {
		backgroundColor: 'rgb(109,76,65)'
	},
	'.mdl-color-text--brown-700': {
		color: 'rgb(93,64,55)'
	},
	'.mdl-color--brown-700': {
		backgroundColor: 'rgb(93,64,55)'
	},
	'.mdl-color-text--brown-800': {
		color: 'rgb(78,52,46)'
	},
	'.mdl-color--brown-800': {
		backgroundColor: 'rgb(78,52,46)'
	},
	'.mdl-color-text--brown-900': {
		color: 'rgb(62,39,35)'
	},
	'.mdl-color--brown-900': {
		backgroundColor: 'rgb(62,39,35)'
	},
	'.mdl-color-text--grey': {
		color: 'rgb(158,158,158)'
	},
	'.mdl-color--grey': {
		backgroundColor: 'rgb(158,158,158)'
	},
	'.mdl-color-text--grey-50': {
		color: 'rgb(250,250,250)'
	},
	'.mdl-color--grey-50': {
		backgroundColor: 'rgb(250,250,250)'
	},
	'.mdl-color-text--grey-100': {
		color: 'rgb(245,245,245)'
	},
	'.mdl-color--grey-100': {
		backgroundColor: 'rgb(245,245,245)'
	},
	'.mdl-color-text--grey-200': {
		color: 'rgb(238,238,238)'
	},
	'.mdl-color--grey-200': {
		backgroundColor: 'rgb(238,238,238)'
	},
	'.mdl-color-text--grey-300': {
		color: 'rgb(224,224,224)'
	},
	'.mdl-color--grey-300': {
		backgroundColor: 'rgb(224,224,224)'
	},
	'.mdl-color-text--grey-400': {
		color: 'rgb(189,189,189)'
	},
	'.mdl-color--grey-400': {
		backgroundColor: 'rgb(189,189,189)'
	},
	'.mdl-color-text--grey-500': {
		color: 'rgb(158,158,158)'
	},
	'.mdl-color--grey-500': {
		backgroundColor: 'rgb(158,158,158)'
	},
	'.mdl-color-text--grey-600': {
		color: 'rgb(117,117,117)'
	},
	'.mdl-color--grey-600': {
		backgroundColor: 'rgb(117,117,117)'
	},
	'.mdl-color-text--grey-700': {
		color: 'rgb(97,97,97)'
	},
	'.mdl-color--grey-700': {
		backgroundColor: 'rgb(97,97,97)'
	},
	'.mdl-color-text--grey-800': {
		color: 'rgb(66,66,66)'
	},
	'.mdl-color--grey-800': {
		backgroundColor: 'rgb(66,66,66)'
	},
	'.mdl-color-text--grey-900': {
		color: 'rgb(33,33,33)'
	},
	'.mdl-color--grey-900': {
		backgroundColor: 'rgb(33,33,33)'
	},
	'.mdl-color-text--blue-grey': {
		color: 'rgb(96,125,139)'
	},
	'.mdl-color--blue-grey': {
		backgroundColor: 'rgb(96,125,139)'
	},
	'.mdl-color-text--blue-grey-50': {
		color: 'rgb(236,239,241)'
	},
	'.mdl-color--blue-grey-50': {
		backgroundColor: 'rgb(236,239,241)'
	},
	'.mdl-color-text--blue-grey-100': {
		color: 'rgb(207,216,220)'
	},
	'.mdl-color--blue-grey-100': {
		backgroundColor: 'rgb(207,216,220)'
	},
	'.mdl-color-text--blue-grey-200': {
		color: 'rgb(176,190,197)'
	},
	'.mdl-color--blue-grey-200': {
		backgroundColor: 'rgb(176,190,197)'
	},
	'.mdl-color-text--blue-grey-300': {
		color: 'rgb(144,164,174)'
	},
	'.mdl-color--blue-grey-300': {
		backgroundColor: 'rgb(144,164,174)'
	},
	'.mdl-color-text--blue-grey-400': {
		color: 'rgb(120,144,156)'
	},
	'.mdl-color--blue-grey-400': {
		backgroundColor: 'rgb(120,144,156)'
	},
	'.mdl-color-text--blue-grey-500': {
		color: 'rgb(96,125,139)'
	},
	'.mdl-color--blue-grey-500': {
		backgroundColor: 'rgb(96,125,139)'
	},
	'.mdl-color-text--blue-grey-600': {
		color: 'rgb(84,110,122)'
	},
	'.mdl-color--blue-grey-600': {
		backgroundColor: 'rgb(84,110,122)'
	},
	'.mdl-color-text--blue-grey-700': {
		color: 'rgb(69,90,100)'
	},
	'.mdl-color--blue-grey-700': {
		backgroundColor: 'rgb(69,90,100)'
	},
	'.mdl-color-text--blue-grey-800': {
		color: 'rgb(55,71,79)'
	},
	'.mdl-color--blue-grey-800': {
		backgroundColor: 'rgb(55,71,79)'
	},
	'.mdl-color-text--blue-grey-900': {
		color: 'rgb(38,50,56)'
	},
	'.mdl-color--blue-grey-900': {
		backgroundColor: 'rgb(38,50,56)'
	},
	'.mdl-color--black': {
		backgroundColor: 'rgb(0,0,0)'
	},
	'.mdl-color-text--black': {
		color: 'rgb(0,0,0)'
	},
	'.mdl-color--white': {
		backgroundColor: 'rgb(255,255,255)'
	},
	'.mdl-color-text--white': {
		color: 'rgb(255,255,255)'
	},
	'.mdl-color--primary': {
		backgroundColor: 'rgb(63,81,181)'
	},
	'.mdl-color--primary-contrast': {
		backgroundColor: 'rgb(255,255,255)'
	},
	'.mdl-color--primary-dark': {
		backgroundColor: 'rgb(48,63,159)'
	},
	'.mdl-color--accent': {
		backgroundColor: 'rgb(255,64,129)'
	},
	'.mdl-color--accent-contrast': {
		backgroundColor: 'rgb(255,255,255)'
	},
	'.mdl-color-text--primary': {
		color: 'rgb(63,81,181)'
	},
	'.mdl-color-text--primary-contrast': {
		color: 'rgb(255,255,255)'
	},
	'.mdl-color-text--primary-dark': {
		color: 'rgb(48,63,159)'
	},
	'.mdl-color-text--accent': {
		color: 'rgb(255,64,129)'
	},
	'.mdl-color-text--accent-contrast': {
		color: 'rgb(255,255,255)'
	},
	'.mdl-ripple': {
		background: 'rgb(0,0,0)',
		borderRadius: '50%',
		height: 50,
		left: 0,
		opacity: 0,
		pointerEvents: 'none',
		position: 'absolute',
		top: 0,
		WebkitTransform: 'translate(-50%, -50%)',
		transform: 'translate(-50%, -50%)',
		width: 50,
		overflow: 'hidden'
	},
	'.mdl-ripple.is-animating': {
		transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1), width 0.3s cubic-bezier(0, 0, 0.2, 1), height 0.3s cubic-bezier(0, 0, 0.2, 1), opacity 0.6s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.3s cubic-bezier(0, 0, 0.2, 1)'
	},
	'.mdl-ripple.is-visible': {
		opacity: 0.3
	},
	'.mdl-animation--default': {
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
	},
	'.mdl-animation--fast-out-slow-in': {
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
	},
	'.mdl-animation--linear-out-slow-in': {
		transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
	},
	'.mdl-animation--fast-out-linear-in': {
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)'
	},
	'.mdl-badge': {
		position: 'relative',
		whiteSpace: 'nowrap',
		marginRight: 24
	},
	'.mdl-badge:not([data-badge])': {
		marginRight: 'auto'
	},
	'.mdl-badge[data-badge]:after': {
		content: 'attr(data-badge)',
		display: 'flex',
		WebkitFlexDirection: 'row',
		msFlexDirection: 'row',
		flexDirection: 'row',
		WebkitFlexWrap: 'wrap',
		msFlexWrap: 'wrap',
		flexWrap: 'wrap',
		WebkitJustifyContent: 'center',
		msFlexPack: 'center',
		justifyContent: 'center',
		WebkitAlignContent: 'center',
		msFlexLinePack: 'center',
		alignContent: 'center',
		WebkitAlignItems: 'center',
		msFlexAlign: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: -11,
		right: -24,
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontWeight: 600,
		fontSize: 12,
		width: 22,
		height: 22,
		borderRadius: '50%',
		background: 'rgb(255,64,129)',
		color: 'rgb(255,255,255)'
	},
	'.mdl-button .mdl-badge[data-badge]:after': {
		top: -10,
		right: -5
	},
	'.mdl-badge.mdl-badge--no-background[data-badge]:after': {
		color: 'rgb(255,64,129)',
		background: 'rgba(255,255,255,0.2)',
		boxShadow: '0 0 1px gray'
	},
	'.mdl-badge.mdl-badge--overlap': {
		marginRight: 10
	},
	'.mdl-badge.mdl-badge--overlap:after': {
		right: -10
	},
	'.mdl-button': {
		background: 'transparent',
		border: 'none',
		borderRadius: 2,
		color: 'rgb(0,0,0)',
		position: 'relative',
		height: 36,
		margin: 0,
		minWidth: 64,
		padding: '0 16px',
		display: 'inline-block',
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeight: 500,
		textTransform: 'uppercase',
		lineHeight: 36,
		letterSpacing: 0,
		overflow: 'hidden',
		willChange: 'box-shadow',
		transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
		outline: 'none',
		cursor: 'pointer',
		textDecoration: 'none',
		textAlign: 'center',
		verticalAlign: 'middle'
	},
	'.mdl-button::-moz-focus-inner': {
		border: 0
	},
	'.mdl-button:hover': {
		backgroundColor: 'rgba(158,158,158, 0.20)'
	},
	'.mdl-button:focus:not(:active)': {
		backgroundColor: 'rgba(0,0,0, 0.12)'
	},
	'.mdl-button:active': {
		backgroundColor: 'rgba(158,158,158, 0.40)'
	},
	'.mdl-button.mdl-button--colored': {
		color: 'rgb(63,81,181)'
	},
	'.mdl-button.mdl-button--colored:focus:not(:active)': {
		backgroundColor: 'rgba(0,0,0, 0.12)'
	},
	'input.mdl-button[type="submit"]': {
		WebkitAppearance: 'none'
	},
	'.mdl-button--raised': {
		background: 'rgba(158,158,158, 0.20)',
		boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'
	},
	'.mdl-button--raised:active': {
		boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
		backgroundColor: 'rgba(158,158,158, 0.40)'
	},
	'.mdl-button--raised:focus:not(:active)': {
		boxShadow: '0 0 8px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.36)',
		backgroundColor: 'rgba(158,158,158, 0.40)'
	},
	'.mdl-button--raised.mdl-button--colored': {
		background: 'rgb(63,81,181)',
		color: 'rgb(255,255,255)'
	},
	'.mdl-button--raised.mdl-button--colored:hover': {
		backgroundColor: 'rgb(63,81,181)'
	},
	'.mdl-button--raised.mdl-button--colored:active': {
		backgroundColor: 'rgb(63,81,181)'
	},
	'.mdl-button--raised.mdl-button--colored:focus:not(:active)': {
		backgroundColor: 'rgb(63,81,181)'
	},
	'.mdl-button--raised.mdl-button--colored .mdl-ripple': {
		background: 'rgb(255,255,255)'
	},
	'.mdl-button--fab': {
		borderRadius: '50%',
		fontSize: 24,
		height: 56,
		margin: 'auto',
		minWidth: 56,
		width: 56,
		padding: 0,
		overflow: 'hidden',
		background: 'rgba(158,158,158, 0.20)',
		boxShadow: '0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24)',
		position: 'relative',
		lineHeight: 'normal'
	},
	'.mdl-button--fab .material-icons': {
		position: 'absolute',
		top: '50%',
		left: '50%',
		WebkitTransform: 'translate(-12px, -12px)',
		transform: 'translate(-12px, -12px)',
		lineHeight: 24,
		width: 24
	},
	'.mdl-button--fab.mdl-button--mini-fab': {
		height: 40,
		minWidth: 40,
		width: 40
	},
	'.mdl-button--fab .mdl-button__ripple-container': {
		borderRadius: '50%',
		WebkitMaskImage: '-webkit-radial-gradient(circle, white, black)'
	},
	'.mdl-button--fab:active': {
		boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
		backgroundColor: 'rgba(158,158,158, 0.40)'
	},
	'.mdl-button--fab:focus:not(:active)': {
		boxShadow: '0 0 8px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.36)',
		backgroundColor: 'rgba(158,158,158, 0.40)'
	},
	'.mdl-button--fab.mdl-button--colored': {
		background: 'rgb(255,64,129)',
		color: 'rgb(255,255,255)'
	},
	'.mdl-button--fab.mdl-button--colored:hover': {
		backgroundColor: 'rgb(255,64,129)'
	},
	'.mdl-button--fab.mdl-button--colored:focus:not(:active)': {
		backgroundColor: 'rgb(255,64,129)'
	},
	'.mdl-button--fab.mdl-button--colored:active': {
		backgroundColor: 'rgb(255,64,129)'
	},
	'.mdl-button--fab.mdl-button--colored .mdl-ripple': {
		background: 'rgb(255,255,255)'
	},
	'.mdl-button--icon': {
		borderRadius: '50%',
		fontSize: 24,
		height: 32,
		marginLeft: 0,
		marginRight: 0,
		minWidth: 32,
		width: 32,
		padding: 0,
		overflow: 'hidden',
		color: 'inherit',
		lineHeight: 'normal'
	},
	'.mdl-button--icon .material-icons': {
		position: 'absolute',
		top: '50%',
		left: '50%',
		WebkitTransform: 'translate(-12px, -12px)',
		transform: 'translate(-12px, -12px)',
		lineHeight: 24,
		width: 24
	},
	'.mdl-button--icon.mdl-button--mini-icon': {
		height: 24,
		minWidth: 24,
		width: 24
	},
	'.mdl-button--icon.mdl-button--mini-icon .material-icons': {
		top: 0,
		left: 0
	},
	'.mdl-button--icon .mdl-button__ripple-container': {
		borderRadius: '50%',
		WebkitMaskImage: '-webkit-radial-gradient(circle, white, black)'
	},
	'.mdl-button__ripple-container': {
		display: 'block',
		height: '100%',
		left: 0,
		position: 'absolute',
		top: 0,
		width: '100%',
		zIndex: 0,
		overflow: 'hidden'
	},
	'.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple,   .mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple': {
		backgroundColor: 'transparent'
	},
	'.mdl-button--primary.mdl-button--primary': {
		color: 'rgb(63,81,181)'
	},
	'.mdl-button--primary.mdl-button--primary .mdl-ripple': {
		background: 'rgb(255,255,255)'
	},
	'.mdl-button--primary.mdl-button--primary.mdl-button--raised, .mdl-button--primary.mdl-button--primary.mdl-button--fab': {
		color: 'rgb(255,255,255)',
		backgroundColor: 'rgb(63,81,181)'
	},
	'.mdl-button--accent.mdl-button--accent': {
		color: 'rgb(255,64,129)'
	},
	'.mdl-button--accent.mdl-button--accent .mdl-ripple': {
		background: 'rgb(255,255,255)'
	},
	'.mdl-button--accent.mdl-button--accent.mdl-button--raised, .mdl-button--accent.mdl-button--accent.mdl-button--fab': {
		color: 'rgb(255,255,255)',
		backgroundColor: 'rgb(255,64,129)'
	},
	'.mdl-button[disabled][disabled], .mdl-button.mdl-button--disabled.mdl-button--disabled': {
		color: 'rgba(0,0,0, 0.26)',
		cursor: 'default',
		backgroundColor: 'transparent'
	},
	'.mdl-button--fab[disabled][disabled], .mdl-button--fab.mdl-button--disabled.mdl-button--disabled': {
		backgroundColor: 'rgba(0,0,0, 0.12)',
		color: 'rgba(0,0,0, 0.26)'
	},
	'.mdl-button--raised[disabled][disabled], .mdl-button--raised.mdl-button--disabled.mdl-button--disabled': {
		backgroundColor: 'rgba(0,0,0, 0.12)',
		color: 'rgba(0,0,0, 0.26)',
		boxShadow: 'none'
	},
	'.mdl-button--colored[disabled][disabled], .mdl-button--colored.mdl-button--disabled.mdl-button--disabled': {
		color: 'rgba(0,0,0, 0.26)'
	},
	'.mdl-button .material-icons': {
		verticalAlign: 'middle'
	},
	'.mdl-card': {
		display: 'flex',
		WebkitFlexDirection: 'column',
		msFlexDirection: 'column',
		flexDirection: 'column',
		fontSize: 16,
		fontWeight: 400,
		minHeight: 200,
		overflow: 'hidden',
		width: 330,
		zIndex: 1,
		position: 'relative',
		background: 'rgb(255,255,255)',
		borderRadius: 2,
		boxSizing: 'border-box'
	},
	'.mdl-card__media': {
		backgroundColor: 'rgb(255,64,129)',
		backgroundRepeat: 'repeat',
		backgroundPosition: '50% 50%',
		backgroundSize: 'cover',
		backgroundOrigin: 'padding-box',
		backgroundAttachment: 'scroll',
		boxSizing: 'border-box'
	},
	'.mdl-card__title': {
		WebkitAlignItems: 'center',
		msFlexAlign: 'center',
		alignItems: 'center',
		color: 'rgb(0,0,0)',
		display: 'flex',
		WebkitJustifyContent: 'stretch',
		msFlexPack: 'stretch',
		justifyContent: 'stretch',
		lineHeight: 'normal',
		padding: '16px 16px',
		WebkitPerspectiveOrigin: '165px 56px',
		perspectiveOrigin: '165px 56px',
		WebkitTransformOrigin: '165px 56px',
		transformOrigin: '165px 56px',
		boxSizing: 'border-box'
	},
	'.mdl-card__title.mdl-card--border': {
		borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
	},
	'.mdl-card__title-text': {
		WebkitAlignSelf: 'flex-end',
		msFlexItemAlign: 'end',
		alignSelf: 'flex-end',
		color: 'inherit',
		display: 'flex',
		fontSize: 24,
		fontWeight: 300,
		lineHeight: 'normal',
		overflow: 'hidden',
		WebkitTransformOrigin: '149px 48px',
		transformOrigin: '149px 48px',
		margin: 0
	},
	'.mdl-card__subtitle-text': {
		fontSize: 14,
		color: 'rgba(0,0,0, 0.54)',
		margin: 0
	},
	'.mdl-card__supporting-text': {
		color: 'rgba(0,0,0, 0.54)',
		fontSize: '1rem',
		lineHeight: 18,
		overflow: 'hidden',
		padding: '16px 16px',
		width: '90%'
	},
	'.mdl-card__actions': {
		fontSize: 16,
		lineHeight: 'normal',
		width: '100%',
		backgroundColor: 'transparent',
		padding: 8,
		boxSizing: 'border-box'
	},
	'.mdl-card__actions.mdl-card--border': {
		borderTop: '1px solid rgba(0, 0, 0, 0.1)'
	},
	'.mdl-card--expand': {
		WebkitFlexGrow: 1,
		msFlexPositive: 1,
		flexGrow: 1
	},
	'.mdl-card__menu': {
		position: 'absolute',
		right: 16,
		top: 16
	},
	'.mdl-checkbox': {
		position: 'relative',
		zIndex: 1,
		verticalAlign: 'middle',
		display: 'inline-block',
		boxSizing: 'border-box',
		width: '100%',
		height: 24,
		margin: 0,
		padding: 0
	},
	'.mdl-checkbox.is-upgraded': {
		paddingLeft: 24
	},
	'.mdl-checkbox__input': {
		lineHeight: 24
	},
	'.mdl-checkbox.is-upgraded .mdl-checkbox__input': {
		position: 'absolute',
		width: 0,
		height: 0,
		margin: 0,
		padding: 0,
		opacity: 0,
		msAppearance: 'none',
		MozAppearance: 'none',
		WebkitAppearance: 'none',
		appearance: 'none',
		border: 'none'
	},
	'.mdl-checkbox__box-outline': {
		position: 'absolute',
		top: 3,
		left: 0,
		display: 'inline-block',
		boxSizing: 'border-box',
		width: 16,
		height: 16,
		margin: 0,
		cursor: 'pointer',
		overflow: 'hidden',
		border: '2px solid rgba(0,0,0, 0.54)',
		borderRadius: 2,
		zIndex: 2
	},
	'.mdl-checkbox.is-checked .mdl-checkbox__box-outline': {
		border: '2px solid rgb(63,81,181)'
	},
	'fieldset[disabled] .mdl-checkbox .mdl-checkbox__box-outline,   .mdl-checkbox.is-disabled .mdl-checkbox__box-outline': {
		border: '2px solid rgba(0,0,0, 0.26)',
		cursor: 'auto'
	},
	'.mdl-checkbox__focus-helper': {
		position: 'absolute',
		top: 3,
		left: 0,
		display: 'inline-block',
		boxSizing: 'border-box',
		width: 16,
		height: 16,
		borderRadius: '50%',
		backgroundColor: 'transparent'
	},
	'.mdl-checkbox.is-focused .mdl-checkbox__focus-helper': {
		boxShadow: '0 0 0px 8px rgba(0, 0, 0, 0.1)',
		backgroundColor: 'rgba(0, 0, 0, 0.1)'
	},
	'.mdl-checkbox.is-focused.is-checked .mdl-checkbox__focus-helper': {
		boxShadow: '0 0 0px 8px rgba(63,81,181, 0.26)',
		backgroundColor: 'rgba(63,81,181, 0.26)'
	},
	'.mdl-checkbox__tick-outline': {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		WebkitMask: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==")',
		mask: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==")',
		background: 'transparent',
		transitionDuration: '0.28s',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionProperty: 'background'
	},
	'.mdl-checkbox.is-checked .mdl-checkbox__tick-outline': {
		background: 'rgb(63,81,181) url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")'
	},
	'fieldset[disabled] .mdl-checkbox.is-checked .mdl-checkbox__tick-outline,   .mdl-checkbox.is-checked.is-disabled .mdl-checkbox__tick-outline': {
		background: 'rgba(0,0,0, 0.26) url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")'
	},
	'.mdl-checkbox__label': {
		position: 'relative',
		cursor: 'pointer',
		fontSize: 16,
		lineHeight: 24,
		margin: 0
	},
	'fieldset[disabled] .mdl-checkbox .mdl-checkbox__label,   .mdl-checkbox.is-disabled .mdl-checkbox__label': {
		color: 'rgba(0,0,0, 0.26)',
		cursor: 'auto'
	},
	'.mdl-checkbox__ripple-container': {
		position: 'absolute',
		zIndex: 2,
		top: -6,
		left: -10,
		boxSizing: 'border-box',
		width: 36,
		height: 36,
		borderRadius: '50%',
		cursor: 'pointer',
		overflow: 'hidden',
		WebkitMaskImage: '-webkit-radial-gradient(circle, white, black)'
	},
	'.mdl-checkbox__ripple-container .mdl-ripple': {
		background: 'rgb(63,81,181)'
	},
	'fieldset[disabled] .mdl-checkbox .mdl-checkbox__ripple-container,   .mdl-checkbox.is-disabled .mdl-checkbox__ripple-container': {
		cursor: 'auto'
	},
	'fieldset[disabled] .mdl-checkbox .mdl-checkbox__ripple-container .mdl-ripple,   .mdl-checkbox.is-disabled .mdl-checkbox__ripple-container .mdl-ripple': {
		background: 'transparent'
	},
	'.mdl-data-table': {
		position: 'relative',
		border: '1px solid rgba(0, 0, 0, 0.12)',
		borderCollapse: 'collapse',
		whiteSpace: 'nowrap',
		fontSize: 13,
		backgroundColor: 'rgb(255,255,255)'
	},
	'.mdl-data-table thead': {
		paddingBottom: 3
	},
	'.mdl-data-table thead .mdl-data-table__select': {
		marginTop: 0
	},
	'.mdl-data-table tbody tr': {
		position: 'relative',
		height: 48,
		transitionDuration: '0.28s',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionProperty: 'background-color'
	},
	'.mdl-data-table tbody tr.is-selected': {
		backgroundColor: '#e0e0e0'
	},
	'.mdl-data-table tbody tr:hover': {
		backgroundColor: '#eeeeee'
	},
	'.mdl-data-table td, .mdl-data-table th': {
		padding: '0 18px 12px 18px',
		textAlign: 'right'
	},
	'.mdl-data-table td:first-of-type, .mdl-data-table th:first-of-type': {
		paddingLeft: 24
	},
	'.mdl-data-table td:last-of-type, .mdl-data-table th:last-of-type': {
		paddingRight: 24
	},
	'.mdl-data-table td': {
		position: 'relative',
		verticalAlign: 'middle',
		height: 48,
		borderTop: '1px solid rgba(0, 0, 0, 0.12)',
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
		paddingTop: 12,
		boxSizing: 'border-box'
	},
	'.mdl-data-table td .mdl-data-table__select': {
		verticalAlign: 'middle'
	},
	'.mdl-data-table th': {
		position: 'relative',
		verticalAlign: 'bottom',
		textOverflow: 'ellipsis',
		fontSize: 12,
		fontWeight: 'bold',
		lineHeight: 24,
		letterSpacing: 0,
		height: 48,
		color: 'rgba(0, 0, 0, 0.54)',
		paddingBottom: 8,
		boxSizing: 'border-box'
	},
	'.mdl-data-table th.mdl-data-table__header--sorted-ascending, .mdl-data-table th.mdl-data-table__header--sorted-descending': {
		color: 'rgba(0, 0, 0, 0.87)'
	},
	'.mdl-data-table th.mdl-data-table__header--sorted-ascending:before, .mdl-data-table th.mdl-data-table__header--sorted-descending:before': {
		fontFamily: '\'Material Icons\'',
		fontWeight: 'normal',
		fontStyle: 'normal',
		fontSize: 16,
		lineHeight: 1,
		letterSpacing: 'normal',
		textTransform: 'none',
		display: 'inline-block',
		wordWrap: 'normal',
		MozFontFeatureSettings: '\'liga\'',
		fontFeatureSettings: '\'liga\'',
		WebkitFontFeatureSettings: '\'liga\'',
		WebkitFontSmoothing: 'antialiased',
		content: '"\e5d8"',
		marginRight: 5,
		verticalAlign: 'sub'
	},
	'.mdl-data-table th.mdl-data-table__header--sorted-ascending:hover, .mdl-data-table th.mdl-data-table__header--sorted-descending:hover': {
		cursor: 'pointer'
	},
	'.mdl-data-table th.mdl-data-table__header--sorted-ascending:hover:before, .mdl-data-table th.mdl-data-table__header--sorted-descending:hover:before': {
		color: 'rgba(0, 0, 0, 0.26)'
	},
	'.mdl-data-table th.mdl-data-table__header--sorted-descending:before': {
		content: '"\e5db"'
	},
	'.mdl-data-table__select': {
		width: 16
	},
	'.mdl-data-table__cell--non-numeric.mdl-data-table__cell--non-numeric': {
		textAlign: 'left'
	},
	'.mdl-dialog': {
		border: 'none',
		boxShadow: '0 9px 46px 8px rgba(0, 0, 0, 0.14), 0 11px 15px -7px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.2)',
		width: 280
	},
	'.mdl-dialog__title': {
		padding: '24px 24px 0',
		margin: 0,
		fontSize: '2.5rem'
	},
	'.mdl-dialog__actions': {
		padding: '8px 8px 8px 24px',
		display: 'flex',
		WebkitFlexDirection: 'row-reverse',
		msFlexDirection: 'row-reverse',
		flexDirection: 'row-reverse',
		WebkitFlexWrap: 'wrap',
		msFlexWrap: 'wrap',
		flexWrap: 'wrap'
	},
	'.mdl-dialog__actions > *': {
		marginRight: 8,
		height: 36
	},
	'.mdl-dialog__actions > *:first-child': {
		marginRight: 0
	},
	'.mdl-dialog__actions--full-width': {
		padding: '0 0 8px 0'
	},
	'.mdl-dialog__actions--full-width > *': {
		height: 48,
		WebkitFlex: '0 0 100%',
		msFlex: '0 0 100%',
		flex: '0 0 100%',
		paddingRight: 16,
		marginRight: 0,
		textAlign: 'right'
	},
	'.mdl-dialog__content': {
		padding: '20px 24px 24px 24px',
		color: 'rgba(0,0,0, 0.54)'
	},
	'.mdl-mega-footer': {
		padding: '16px 40px',
		color: 'rgb(158,158,158)',
		backgroundColor: 'rgb(66,66,66)'
	},
	'.mdl-mega-footer--top-section:after, .mdl-mega-footer--middle-section:after, .mdl-mega-footer--bottom-section:after, .mdl-mega-footer__top-section:after, .mdl-mega-footer__middle-section:after, .mdl-mega-footer__bottom-section:after': {
		content: '\'\'',
		display: 'block',
		clear: 'both'
	},
	'.mdl-mega-footer--left-section, .mdl-mega-footer__left-section': {
		marginBottom: 16
	},
	'.mdl-mega-footer--right-section, .mdl-mega-footer__right-section': {
		marginBottom: 16
	},
	'.mdl-mega-footer--right-section a, .mdl-mega-footer__right-section a': {
		display: 'block',
		marginBottom: 16,
		color: 'inherit',
		textDecoration: 'none'
	},
	'.mdl-mega-footer--social-btn, .mdl-mega-footer__social-btn': {
		width: 36,
		height: 36,
		padding: 0,
		margin: 0,
		backgroundColor: 'rgb(158,158,158)',
		border: 'none'
	},
	'.mdl-mega-footer--drop-down-section, .mdl-mega-footer__drop-down-section': {
		display: 'block',
		position: 'relative'
	},
	'.mdl-mega-footer--heading-checkbox, .mdl-mega-footer__heading-checkbox': {
		position: 'absolute',
		width: '100%',
		height: 55,
		padding: 32,
		margin: 0,
		marginTop: -16,
		cursor: 'pointer',
		zIndex: 1,
		opacity: 0
	},
	'.mdl-mega-footer--heading-checkbox + .mdl-mega-footer--heading:after,   .mdl-mega-footer--heading-checkbox + .mdl-mega-footer__heading:after,   .mdl-mega-footer__heading-checkbox + .mdl-mega-footer--heading:after,   .mdl-mega-footer__heading-checkbox + .mdl-mega-footer__heading:after': {
		fontFamily: '\'Material Icons\'',
		content: '\'\E5CE\''
	},
	'.mdl-mega-footer--heading-checkbox:checked ~ .mdl-mega-footer--link-list, .mdl-mega-footer--heading-checkbox:checked ~ .mdl-mega-footer__link-list, .mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer--heading + .mdl-mega-footer--link-list, .mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer__heading + .mdl-mega-footer__link-list, .mdl-mega-footer__heading-checkbox:checked ~ .mdl-mega-footer--link-list, .mdl-mega-footer__heading-checkbox:checked ~ .mdl-mega-footer__link-list, .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer--heading + .mdl-mega-footer--link-list, .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer__heading + .mdl-mega-footer__link-list': {
		display: 'none'
	},
	'.mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer--heading:after, .mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer__heading:after, .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer--heading:after, .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer__heading:after': {
		fontFamily: '\'Material Icons\'',
		content: '\'\E5CF\''
	},
	'.mdl-mega-footer--heading, .mdl-mega-footer__heading': {
		position: 'relative',
		width: '100%',
		paddingRight: 39,
		marginBottom: 16,
		boxSizing: 'border-box',
		fontSize: 14,
		lineHeight: 23,
		fontWeight: 500,
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		color: 'rgb(224,224,224)'
	},
	'.mdl-mega-footer--heading:after, .mdl-mega-footer__heading:after': {
		content: '\'\'',
		position: 'absolute',
		top: 0,
		right: 0,
		display: 'block',
		width: 23,
		height: 23,
		backgroundSize: 'cover'
	},
	'.mdl-mega-footer--link-list, .mdl-mega-footer__link-list': {
		listStyle: 'none',
		margin: 0,
		padding: 0,
		marginBottom: 32
	},
	'.mdl-mega-footer--link-list:after,   .mdl-mega-footer__link-list:after': {
		clear: 'both',
		display: 'block',
		content: '\'\''
	},
	'.mdl-mega-footer--link-list li, .mdl-mega-footer__link-list li': {
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 20,
		letterSpacing: 0
	},
	'.mdl-mega-footer--link-list a, .mdl-mega-footer__link-list a': {
		color: 'inherit',
		textDecoration: 'none',
		whiteSpace: 'nowrap'
	},
	'.mdl-mega-footer--bottom-section, .mdl-mega-footer__bottom-section': {
		paddingTop: 16,
		marginBottom: 16
	},
	'.mdl-logo': {
		marginBottom: 16,
		color: 'white'
	},
	'.mdl-mega-footer--bottom-section .mdl-mega-footer--link-list li, .mdl-mega-footer__bottom-section .mdl-mega-footer__link-list li': {
		float: 'left',
		marginBottom: 0,
		marginRight: 16
	},
	'.mdl-mini-footer': {
		display: 'flex',
		WebkitFlexFlow: 'row wrap',
		msFlexFlow: 'row wrap',
		flexFlow: 'row wrap',
		WebkitJustifyContent: 'space-between',
		msFlexPack: 'justify',
		justifyContent: 'space-between',
		padding: '32px 16px',
		color: 'rgb(158,158,158)',
		backgroundColor: 'rgb(66,66,66)'
	},
	'.mdl-mini-footer:after': {
		content: '\'\'',
		display: 'block'
	},
	'.mdl-mini-footer .mdl-logo': {
		lineHeight: 36
	},
	'.mdl-mini-footer--link-list, .mdl-mini-footer__link-list': {
		display: 'flex',
		WebkitFlexFlow: 'row nowrap',
		msFlexFlow: 'row nowrap',
		flexFlow: 'row nowrap',
		listStyle: 'none',
		margin: 0,
		padding: 0
	},
	'.mdl-mini-footer--link-list li,   .mdl-mini-footer__link-list li': {
		marginBottom: 0,
		marginRight: 16
	},
	'.mdl-mini-footer--link-list a,   .mdl-mini-footer__link-list a': {
		color: 'inherit',
		textDecoration: 'none',
		whiteSpace: 'nowrap'
	},
	'.mdl-mini-footer--left-section, .mdl-mini-footer__left-section': {
		display: 'inline-block',
		WebkitOrder: 0,
		msFlexOrder: 0,
		order: 0
	},
	'.mdl-mini-footer--right-section, .mdl-mini-footer__right-section': {
		display: 'inline-block',
		WebkitOrder: 1,
		msFlexOrder: 1,
		order: 1
	},
	'.mdl-mini-footer--social-btn, .mdl-mini-footer__social-btn': {
		width: 36,
		height: 36,
		padding: 0,
		margin: 0,
		backgroundColor: 'rgb(158,158,158)',
		border: 'none'
	},
	'.mdl-icon-toggle': {
		position: 'relative',
		zIndex: 1,
		verticalAlign: 'middle',
		display: 'inline-block',
		height: 32,
		margin: 0,
		padding: 0
	},
	'.mdl-icon-toggle__input': {
		lineHeight: 32
	},
	'.mdl-icon-toggle.is-upgraded .mdl-icon-toggle__input': {
		position: 'absolute',
		width: 0,
		height: 0,
		margin: 0,
		padding: 0,
		opacity: 0,
		msAppearance: 'none',
		MozAppearance: 'none',
		WebkitAppearance: 'none',
		appearance: 'none',
		border: 'none'
	},
	'.mdl-icon-toggle__label': {
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		height: 32,
		width: 32,
		minWidth: 32,
		color: 'rgb(97,97,97)',
		borderRadius: '50%',
		padding: 0,
		marginLeft: 0,
		marginRight: 0,
		textAlign: 'center',
		backgroundColor: 'transparent',
		willChange: 'background-color',
		transition: 'background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
	},
	'.mdl-icon-toggle__label.material-icons': {
		lineHeight: 32,
		fontSize: 24
	},
	'.mdl-icon-toggle.is-checked .mdl-icon-toggle__label': {
		color: 'rgb(63,81,181)'
	},
	'.mdl-icon-toggle.is-disabled .mdl-icon-toggle__label': {
		color: 'rgba(0,0,0, 0.26)',
		cursor: 'auto',
		transition: 'none'
	},
	'.mdl-icon-toggle.is-focused .mdl-icon-toggle__label': {
		backgroundColor: 'rgba(0,0,0, 0.12)'
	},
	'.mdl-icon-toggle.is-focused.is-checked .mdl-icon-toggle__label': {
		backgroundColor: 'rgba(63,81,181, 0.26)'
	},
	'.mdl-icon-toggle__ripple-container': {
		position: 'absolute',
		zIndex: 2,
		top: -2,
		left: -2,
		boxSizing: 'border-box',
		width: 36,
		height: 36,
		borderRadius: '50%',
		cursor: 'pointer',
		overflow: 'hidden',
		WebkitMaskImage: '-webkit-radial-gradient(circle, white, black)'
	},
	'.mdl-icon-toggle__ripple-container .mdl-ripple': {
		background: 'rgb(97,97,97)'
	},
	'.mdl-icon-toggle.is-disabled .mdl-icon-toggle__ripple-container': {
		cursor: 'auto'
	},
	'.mdl-icon-toggle.is-disabled .mdl-icon-toggle__ripple-container .mdl-ripple': {
		background: 'transparent'
	},
	'.mdl-list': {
		display: 'block',
		padding: '8px 0',
		listStyle: 'none'
	},
	'.mdl-list__item': {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 16,
		fontWeight: 400,
		lineHeight: 1,
		letterSpacing: '0.04em',
		display: 'flex',
		minHeight: 48,
		boxSizing: 'border-box',
		WebkitFlexDirection: 'row',
		msFlexDirection: 'row',
		flexDirection: 'row',
		WebkitFlexWrap: 'nowrap',
		msFlexWrap: 'nowrap',
		flexWrap: 'nowrap',
		WebkitAlignItems: 'center',
		msFlexAlign: 'center',
		alignItems: 'center',
		padding: 16,
		cursor: 'default',
		color: 'rgba(0,0,0, 0.87)',
		overflow: 'hidden'
	},
	'.mdl-list__item .mdl-list__item-primary-content': {
		WebkitOrder: 0,
		msFlexOrder: 0,
		order: 0,
		WebkitFlexGrow: 2,
		msFlexPositive: 2,
		flexGrow: 2,
		textDecoration: 'none',
		boxSizing: 'border-box',
		display: 'flex',
		WebkitAlignItems: 'center',
		msFlexAlign: 'center',
		alignItems: 'center'
	},
	'.mdl-list__item .mdl-list__item-primary-content .mdl-list__item-icon': {
		marginRight: 32
	},
	'.mdl-list__item .mdl-list__item-primary-content .mdl-list__item-avatar': {
		marginRight: 16
	},
	'.mdl-list__item .mdl-list__item-secondary-content': {
		display: 'flex',
		WebkitFlexFlow: 'column',
		msFlexFlow: 'column',
		flexFlow: 'column',
		WebkitAlignItems: 'flex-end',
		msFlexAlign: 'end',
		alignItems: 'flex-end',
		marginLeft: 16
	},
	'.mdl-list__item .mdl-list__item-secondary-content .mdl-list__item-secondary-action label': {
		display: 'inline'
	},
	'.mdl-list__item .mdl-list__item-secondary-content .mdl-list__item-secondary-info': {
		fontSize: 12,
		fontWeight: 400,
		lineHeight: 1,
		letterSpacing: 0,
		color: 'rgba(0,0,0, 0.54)'
	},
	'.mdl-list__item .mdl-list__item-secondary-content .mdl-list__item-sub-header': {
		padding: '0 0 0 16px'
	},
	'.mdl-list__item-icon, .mdl-list__item-icon.material-icons': {
		height: 24,
		width: 24,
		fontSize: 24,
		boxSizing: 'border-box',
		color: 'rgb(117,117,117)'
	},
	'.mdl-list__item-avatar, .mdl-list__item-avatar.material-icons': {
		height: 40,
		width: 40,
		boxSizing: 'border-box',
		borderRadius: '50%',
		backgroundColor: 'rgb(117,117,117)',
		fontSize: 40,
		color: 'white'
	},
	'.mdl-list__item--two-line': {
		height: 72
	},
	'.mdl-list__item--two-line .mdl-list__item-primary-content': {
		height: 36,
		lineHeight: 20,
		display: 'block'
	},
	'.mdl-list__item--two-line .mdl-list__item-primary-content .mdl-list__item-avatar': {
		float: 'left'
	},
	'.mdl-list__item--two-line .mdl-list__item-primary-content .mdl-list__item-icon': {
		float: 'left',
		marginTop: 6
	},
	'.mdl-list__item--two-line .mdl-list__item-primary-content .mdl-list__item-secondary-content': {
		height: 36
	},
	'.mdl-list__item--two-line .mdl-list__item-primary-content .mdl-list__item-sub-title': {
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 18,
		letterSpacing: 0,
		color: 'rgba(0,0,0, 0.54)',
		display: 'block',
		padding: 0
	},
	'.mdl-list__item--three-line': {
		height: 88
	},
	'.mdl-list__item--three-line .mdl-list__item-primary-content': {
		height: 52,
		lineHeight: 20,
		display: 'block'
	},
	'.mdl-list__item--three-line .mdl-list__item-primary-content .mdl-list__item-avatar,     .mdl-list__item--three-line .mdl-list__item-primary-content .mdl-list__item-icon': {
		float: 'left'
	},
	'.mdl-list__item--three-line .mdl-list__item-secondary-content': {
		height: 52
	},
	'.mdl-list__item--three-line .mdl-list__item-text-body': {
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 18,
		letterSpacing: 0,
		height: 52,
		color: 'rgba(0,0,0, 0.54)',
		display: 'block',
		padding: 0
	},
	'.mdl-menu__container': {
		display: 'block',
		margin: 0,
		padding: 0,
		border: 'none',
		position: 'absolute',
		overflow: 'visible',
		height: 0,
		width: 0,
		visibility: 'hidden',
		zIndex: -1
	},
	'.mdl-menu__container.is-visible, .mdl-menu__container.is-animating': {
		zIndex: 999,
		visibility: 'visible'
	},
	'.mdl-menu__outline': {
		display: 'block',
		background: 'rgb(255,255,255)',
		margin: 0,
		padding: 0,
		border: 'none',
		borderRadius: 2,
		position: 'absolute',
		top: 0,
		left: 0,
		overflow: 'hidden',
		opacity: 0,
		WebkitTransform: 'scale(0)',
		transform: 'scale(0)',
		WebkitTransformOrigin: '0 0',
		transformOrigin: '0 0',
		boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
		willChange: 'transform',
		transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
		zIndex: -1
	},
	'.mdl-menu__container.is-visible .mdl-menu__outline': {
		opacity: 1,
		WebkitTransform: 'scale(1)',
		transform: 'scale(1)',
		zIndex: 999
	},
	'.mdl-menu__outline.mdl-menu--bottom-right': {
		WebkitTransformOrigin: '100% 0',
		transformOrigin: '100% 0'
	},
	'.mdl-menu__outline.mdl-menu--top-left': {
		WebkitTransformOrigin: '0 100%',
		transformOrigin: '0 100%'
	},
	'.mdl-menu__outline.mdl-menu--top-right': {
		WebkitTransformOrigin: '100% 100%',
		transformOrigin: '100% 100%'
	},
	'.mdl-menu': {
		position: 'absolute',
		listStyle: 'none',
		top: 0,
		left: 0,
		height: 'auto',
		width: 'auto',
		minWidth: 124,
		padding: '8px 0',
		margin: 0,
		opacity: 0,
		clip: 'rect(0 0 0 0)',
		zIndex: -1
	},
	'.mdl-menu__container.is-visible .mdl-menu': {
		opacity: 1,
		zIndex: 999
	},
	'.mdl-menu.is-animating': {
		transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), clip 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
	},
	'.mdl-menu.mdl-menu--bottom-right': {
		left: 'auto',
		right: 0
	},
	'.mdl-menu.mdl-menu--top-left': {
		top: 'auto',
		bottom: 0
	},
	'.mdl-menu.mdl-menu--top-right': {
		top: 'auto',
		left: 'auto',
		bottom: 0,
		right: 0
	},
	'.mdl-menu.mdl-menu--unaligned': {
		top: 'auto',
		left: 'auto'
	},
	'.mdl-menu__item': {
		display: 'block',
		border: 'none',
		color: 'rgba(0,0,0, 0.87)',
		backgroundColor: 'transparent',
		textAlign: 'left',
		margin: 0,
		padding: '0 16px',
		outlineColor: 'rgb(189,189,189)',
		position: 'relative',
		overflow: 'hidden',
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 48,
		letterSpacing: 0,
		textDecoration: 'none',
		cursor: 'pointer',
		height: 48,
		whiteSpace: 'nowrap',
		opacity: 0,
		transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
		WebkitUserSelect: 'none',
		MozUserSelect: 'none',
		msUserSelect: 'none',
		userSelect: 'none'
	},
	'.mdl-menu__container.is-visible .mdl-menu__item': {
		opacity: 1
	},
	'.mdl-menu__item::-moz-focus-inner': {
		border: 0
	},
	'.mdl-menu__item--full-bleed-divider': {
		borderBottom: '1px solid rgba(0,0,0, 0.12)'
	},
	'.mdl-menu__item[disabled], .mdl-menu__item[data-mdl-disabled]': {
		color: 'rgb(189,189,189)',
		backgroundColor: 'transparent',
		cursor: 'auto'
	},
	'.mdl-menu__item[disabled]:hover, .mdl-menu__item[data-mdl-disabled]:hover': {
		backgroundColor: 'transparent'
	},
	'.mdl-menu__item[disabled]:focus, .mdl-menu__item[data-mdl-disabled]:focus': {
		backgroundColor: 'transparent'
	},
	'.mdl-menu__item[disabled] .mdl-ripple, .mdl-menu__item[data-mdl-disabled] .mdl-ripple': {
		background: 'transparent'
	},
	'.mdl-menu__item:hover': {
		backgroundColor: 'rgb(238,238,238)'
	},
	'.mdl-menu__item:focus': {
		outline: 'none',
		backgroundColor: 'rgb(238,238,238)'
	},
	'.mdl-menu__item:active': {
		backgroundColor: 'rgb(224,224,224)'
	},
	'.mdl-menu__item--ripple-container': {
		display: 'block',
		height: '100%',
		left: 0,
		position: 'absolute',
		top: 0,
		width: '100%',
		zIndex: 0,
		overflow: 'hidden'
	},
	'.mdl-progress': {
		display: 'block',
		position: 'relative',
		height: 4,
		width: 500,
		maxWidth: '100%'
	},
	'.mdl-progress > .bar': {
		display: 'block',
		position: 'absolute',
		top: 0,
		bottom: 0,
		width: '0%',
		transition: 'width 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
	},
	'.mdl-progress > .progressbar': {
		backgroundColor: 'rgb(63,81,181)',
		zIndex: 1,
		left: 0
	},
	'.mdl-progress > .bufferbar': {
		backgroundImage: 'linear-gradient(to right, rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), linear-gradient(to right, rgb(63,81,181), rgb(63,81,181))',
		zIndex: 0,
		left: 0
	},
	'.mdl-progress > .auxbar': {
		right: 0
	},
	'.mdl-progress:not(.mdl-progress--indeterminate) > .auxbar, .mdl-progress:not(.mdl-progress__indeterminate) > .auxbar': {
		backgroundImage: 'linear-gradient(to right, rgba(255,255,255, 0.9), rgba(255,255,255, 0.9)), linear-gradient(to right, rgb(63,81,181), rgb(63,81,181))'
	},
	'.mdl-progress.mdl-progress--indeterminate > .bar1, .mdl-progress.mdl-progress__indeterminate > .bar1': {
		backgroundColor: 'rgb(63,81,181)',
		WebkitAnimationName: 'indeterminate1',
		animationName: 'indeterminate1',
		WebkitAnimationDuration: '2s',
		animationDuration: '2s',
		WebkitAnimationIterationCount: 'infinite',
		animationIterationCount: 'infinite',
		WebkitAnimationTimingFunction: 'linear',
		animationTimingFunction: 'linear'
	},
	'.mdl-progress.mdl-progress--indeterminate > .bar3, .mdl-progress.mdl-progress__indeterminate > .bar3': {
		backgroundImage: 'none',
		backgroundColor: 'rgb(63,81,181)',
		WebkitAnimationName: 'indeterminate2',
		animationName: 'indeterminate2',
		WebkitAnimationDuration: '2s',
		animationDuration: '2s',
		WebkitAnimationIterationCount: 'infinite',
		animationIterationCount: 'infinite',
		WebkitAnimationTimingFunction: 'linear',
		animationTimingFunction: 'linear'
	},
	'.mdl-navigation': {
		display: 'flex',
		WebkitFlexWrap: 'nowrap',
		msFlexWrap: 'nowrap',
		flexWrap: 'nowrap',
		boxSizing: 'border-box'
	},
	'.mdl-navigation__link': {
		color: 'rgb(66,66,66)',
		textDecoration: 'none',
		margin: 0,
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 24,
		letterSpacing: 0,
		opacity: 0.87
	},
	'.mdl-navigation__link .material-icons': {
		verticalAlign: 'middle'
	},
	'.mdl-layout': {
		width: '100%',
		height: '100%',
		display: 'flex',
		WebkitFlexDirection: 'column',
		msFlexDirection: 'column',
		flexDirection: 'column',
		overflowY: 'auto',
		overflowX: 'hidden',
		position: 'relative',
		WebkitOverflowScrolling: 'touch'
	},
	'.mdl-layout.is-small-screen .mdl-layout--large-screen-only': {
		display: 'none'
	},
	'.mdl-layout:not(.is-small-screen) .mdl-layout--small-screen-only': {
		display: 'none'
	},
	'.mdl-layout__container': {
		position: 'absolute',
		width: '100%',
		height: '100%'
	},
	'.mdl-layout__title, .mdl-layout-title': {
		display: 'block',
		position: 'relative',
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 20,
		fontWeight: 400,
		lineHeight: 1,
		letterSpacing: '0.02em',
		boxSizing: 'border-box'
	},
	'.mdl-layout-spacer': {
		WebkitFlexGrow: 1,
		msFlexPositive: 1,
		flexGrow: 1
	},
	'.mdl-layout__drawer': {
		display: 'flex',
		WebkitFlexDirection: 'column',
		msFlexDirection: 'column',
		flexDirection: 'column',
		WebkitFlexWrap: 'nowrap',
		msFlexWrap: 'nowrap',
		flexWrap: 'nowrap',
		width: 240,
		height: '100%',
		maxHeight: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
		boxSizing: 'border-box',
		borderRight: '1px solid rgb(224,224,224)',
		background: 'rgb(250,250,250)',
		WebkitTransform: NaN,
		transform: NaN,
		WebkitTransformStyle: 'preserve-3d',
		transformStyle: 'preserve-3d',
		willChange: 'transform',
		transitionDuration: '0.2s',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionProperty: 'transform, -webkit-transform',
		color: 'rgb(66,66,66)',
		overflow: 'visible',
		overflowY: 'auto',
		zIndex: 5
	},
	'.mdl-layout__drawer.is-visible': {
		WebkitTransform: 'translateX(0)',
		transform: 'translateX(0)'
	},
	'.mdl-layout__drawer.is-visible ~ .mdl-layout__content.mdl-layout__content': {
		overflow: 'hidden'
	},
	'.mdl-layout__drawer > *': {
		WebkitFlexShrink: 0,
		msFlexNegative: 0,
		flexShrink: 0
	},
	'.mdl-layout__drawer > .mdl-layout__title,   .mdl-layout__drawer > .mdl-layout-title': {
		lineHeight: 64,
		paddingLeft: 40
	},
	'.mdl-layout__drawer .mdl-navigation': {
		WebkitFlexDirection: 'column',
		msFlexDirection: 'column',
		flexDirection: 'column',
		WebkitAlignItems: 'stretch',
		msFlexAlign: 'stretch',
		msGridRowAlign: 'stretch',
		alignItems: 'stretch',
		paddingTop: 16
	},
	'.mdl-layout__drawer .mdl-navigation .mdl-navigation__link': {
		display: 'block',
		WebkitFlexShrink: 0,
		msFlexNegative: 0,
		flexShrink: 0,
		padding: '16px 40px',
		margin: 0,
		color: '#757575'
	},
	'.mdl-layout__drawer .mdl-navigation .mdl-navigation__link:hover': {
		backgroundColor: 'rgb(224,224,224)'
	},
	'.mdl-layout__drawer .mdl-navigation .mdl-navigation__link--current': {
		backgroundColor: 'rgb(0,0,0)',
		color: 'rgb(224,224,224)'
	},
	'.mdl-layout__drawer-button': {
		display: 'block',
		position: 'absolute',
		height: 48,
		width: 48,
		border: 0,
		WebkitFlexShrink: 0,
		msFlexNegative: 0,
		flexShrink: 0,
		overflow: 'hidden',
		textAlign: 'center',
		cursor: 'pointer',
		fontSize: 26,
		lineHeight: 50,
		fontFamily: 'Helvetica, Arial, sans-serif',
		margin: '10px 12px',
		top: 0,
		left: 0,
		color: 'rgb(255,255,255)',
		zIndex: 4
	},
	'.mdl-layout__header .mdl-layout__drawer-button': {
		position: 'absolute',
		color: 'rgb(255,255,255)',
		backgroundColor: 'inherit'
	},
	'.mdl-layout--no-drawer-button .mdl-layout__drawer-button': {
		display: 'none'
	},
	'.mdl-layout__header': {
		display: 'flex',
		WebkitFlexDirection: 'column',
		msFlexDirection: 'column',
		flexDirection: 'column',
		WebkitFlexWrap: 'nowrap',
		msFlexWrap: 'nowrap',
		flexWrap: 'nowrap',
		WebkitJustifyContent: 'flex-start',
		msFlexPack: 'start',
		justifyContent: 'flex-start',
		boxSizing: 'border-box',
		WebkitFlexShrink: 0,
		msFlexNegative: 0,
		flexShrink: 0,
		width: '100%',
		margin: 0,
		padding: 0,
		border: 'none',
		minHeight: 64,
		maxHeight: 1000,
		zIndex: 3,
		backgroundColor: 'rgb(63,81,181)',
		color: 'rgb(255,255,255)',
		boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
		transitionDuration: '0.2s',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionProperty: 'max-height, box-shadow'
	},
	'.mdl-layout--fixed-drawer.is-upgraded:not(.is-small-screen) > .mdl-layout__header': {
		marginLeft: 240,
		width: 'calc(100% - 240px)'
	},
	'.mdl-layout__header > .mdl-layout-icon': {
		position: 'absolute',
		left: 40,
		top: 16,
		height: 32,
		width: 32,
		overflow: 'hidden',
		zIndex: 3,
		display: 'block'
	},
	'.mdl-layout.has-drawer .mdl-layout__header > .mdl-layout-icon': {
		display: 'none'
	},
	'.mdl-layout__header.is-compact': {
		maxHeight: 64
	},
	'.mdl-layout__header.is-compact.has-tabs': {
		height: 112
	},
	'.mdl-layout__header--transparent.mdl-layout__header--transparent': {
		backgroundColor: 'transparent',
		boxShadow: 'none'
	},
	'.mdl-layout__header--seamed': {
		boxShadow: 'none'
	},
	'.mdl-layout__header--scroll': {
		boxShadow: 'none'
	},
	'.mdl-layout__header--waterfall': {
		boxShadow: 'none',
		overflow: 'hidden'
	},
	'.mdl-layout__header--waterfall.is-casting-shadow': {
		boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'
	},
	'.mdl-layout__header--waterfall.mdl-layout__header--waterfall-hide-top': {
		WebkitJustifyContent: 'flex-end',
		msFlexPack: 'end',
		justifyContent: 'flex-end'
	},
	'.mdl-layout__header-row': {
		display: 'flex',
		WebkitFlexDirection: 'row',
		msFlexDirection: 'row',
		flexDirection: 'row',
		WebkitFlexWrap: 'nowrap',
		msFlexWrap: 'nowrap',
		flexWrap: 'nowrap',
		WebkitFlexShrink: 0,
		msFlexNegative: 0,
		flexShrink: 0,
		boxSizing: 'border-box',
		WebkitAlignSelf: 'stretch',
		msFlexItemAlign: 'stretch',
		alignSelf: 'stretch',
		WebkitAlignItems: 'center',
		msFlexAlign: 'center',
		alignItems: 'center',
		height: 64,
		margin: 0,
		padding: '0 40px 0 80px'
	},
	'.mdl-layout--no-drawer-button .mdl-layout__header-row': {
		paddingLeft: 40
	},
	'.mdl-layout__header-row > *': {
		WebkitFlexShrink: 0,
		msFlexNegative: 0,
		flexShrink: 0
	},
	'.mdl-layout__header--scroll .mdl-layout__header-row': {
		width: '100%'
	},
	'.mdl-layout__header-row .mdl-navigation': {
		margin: 0,
		padding: 0,
		height: 64,
		WebkitFlexDirection: 'row',
		msFlexDirection: 'row',
		flexDirection: 'row',
		WebkitAlignItems: 'center',
		msFlexAlign: 'center',
		msGridRowAlign: 'center',
		alignItems: 'center'
	},
	'.mdl-layout__header-row .mdl-navigation__link': {
		display: 'block',
		color: 'rgb(255,255,255)',
		lineHeight: 64,
		padding: '0 24px'
	},
	'.mdl-layout__obfuscator': {
		backgroundColor: 'transparent',
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		zIndex: 4,
		visibility: 'hidden',
		transitionProperty: 'background-color',
		transitionDuration: '0.2s',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
	},
	'.mdl-layout__obfuscator.is-visible': {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		visibility: 'visible'
	},
	'.mdl-layout__content': {
		msFlex: '0 1 auto',
		position: 'relative',
		display: 'inline-block',
		overflowY: 'auto',
		overflowX: 'hidden',
		WebkitFlexGrow: 1,
		msFlexPositive: 1,
		flexGrow: 1,
		zIndex: 1,
		WebkitOverflowScrolling: 'touch'
	},
	'.mdl-layout--fixed-drawer > .mdl-layout__content': {
		marginLeft: 240
	},
	'.mdl-layout__container.has-scrolling-header .mdl-layout__content': {
		overflow: 'visible'
	},
	'.mdl-layout__tab-bar': {
		height: 96,
		margin: 0,
		width: 'calc(100% - 112px)',
		padding: '0 0 0 56px',
		display: 'flex',
		backgroundColor: 'rgb(63,81,181)',
		overflowY: 'hidden',
		overflowX: 'scroll'
	},
	'.mdl-layout__tab-bar::-webkit-scrollbar': {
		display: 'none'
	},
	'.mdl-layout--no-drawer-button .mdl-layout__tab-bar': {
		paddingLeft: 16,
		width: 'calc(100% - 32px)'
	},
	'.mdl-layout--fixed-tabs .mdl-layout__tab-bar': {
		padding: 0,
		overflow: 'hidden',
		width: '100%'
	},
	'.mdl-layout__tab-bar-container': {
		position: 'relative',
		height: 48,
		width: '100%',
		border: 'none',
		margin: 0,
		zIndex: 2,
		WebkitFlexGrow: 0,
		msFlexPositive: 0,
		flexGrow: 0,
		WebkitFlexShrink: 0,
		msFlexNegative: 0,
		flexShrink: 0,
		overflow: 'hidden'
	},
	'.mdl-layout__container > .mdl-layout__tab-bar-container': {
		position: 'absolute',
		top: 0,
		left: 0
	},
	'.mdl-layout__tab-bar-button': {
		display: 'inline-block',
		position: 'absolute',
		top: 0,
		height: 48,
		width: 56,
		zIndex: 4,
		textAlign: 'center',
		backgroundColor: 'rgb(63,81,181)',
		color: 'transparent',
		cursor: 'pointer',
		WebkitUserSelect: 'none',
		MozUserSelect: 'none',
		msUserSelect: 'none',
		userSelect: 'none'
	},
	'.mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar-button,   .mdl-layout--no-drawer-button .mdl-layout__tab-bar-button': {
		width: 16
	},
	'.mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar-button .material-icons,     .mdl-layout--no-drawer-button .mdl-layout__tab-bar-button .material-icons': {
		position: 'relative',
		left: -4
	},
	'.mdl-layout--fixed-tabs .mdl-layout__tab-bar-button': {
		display: 'none'
	},
	'.mdl-layout__tab-bar-button .material-icons': {
		lineHeight: 48
	},
	'.mdl-layout__tab-bar-button.is-active': {
		color: 'rgb(255,255,255)'
	},
	'.mdl-layout__tab-bar-left-button': {
		left: 0
	},
	'.mdl-layout__tab-bar-right-button': {
		right: 0
	},
	'.mdl-layout__tab': {
		margin: 0,
		border: 'none',
		padding: '0 24px 0 24px',
		float: 'left',
		position: 'relative',
		display: 'block',
		WebkitFlexGrow: 0,
		msFlexPositive: 0,
		flexGrow: 0,
		WebkitFlexShrink: 0,
		msFlexNegative: 0,
		flexShrink: 0,
		textDecoration: 'none',
		height: 48,
		lineHeight: 48,
		textAlign: 'center',
		fontWeight: 500,
		fontSize: 14,
		textTransform: 'uppercase',
		color: 'rgba(255,255,255, 0.6)',
		overflow: 'hidden'
	},
	'.mdl-layout--fixed-tabs .mdl-layout__tab': {
		float: 'none',
		WebkitFlexGrow: 1,
		msFlexPositive: 1,
		flexGrow: 1,
		padding: 0
	},
	'.mdl-layout.is-upgraded .mdl-layout__tab.is-active': {
		color: 'rgb(255,255,255)'
	},
	'.mdl-layout.is-upgraded .mdl-layout__tab.is-active::after': {
		height: 2,
		width: '100%',
		display: 'block',
		content: '" "',
		bottom: 0,
		left: 0,
		position: 'absolute',
		background: 'rgb(255,64,129)',
		WebkitAnimation: 'border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s alternate forwards',
		animation: 'border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s alternate forwards',
		transition: 'all 1s cubic-bezier(0.4, 0, 1, 1)'
	},
	'.mdl-layout__tab .mdl-layout__tab-ripple-container': {
		display: 'block',
		position: 'absolute',
		height: '100%',
		width: '100%',
		left: 0,
		top: 0,
		zIndex: 1,
		overflow: 'hidden'
	},
	'.mdl-layout__tab .mdl-layout__tab-ripple-container .mdl-ripple': {
		backgroundColor: 'rgb(255,255,255)'
	},
	'.mdl-layout__tab-panel': {
		display: 'block'
	},
	'.mdl-layout.is-upgraded .mdl-layout__tab-panel': {
		display: 'none'
	},
	'.mdl-layout.is-upgraded .mdl-layout__tab-panel.is-active': {
		display: 'block'
	},
	'.mdl-radio': {
		position: 'relative',
		fontSize: 16,
		lineHeight: 24,
		display: 'inline-block',
		boxSizing: 'border-box',
		margin: 0,
		paddingLeft: 0
	},
	'.mdl-radio.is-upgraded': {
		paddingLeft: 24
	},
	'.mdl-radio__button': {
		lineHeight: 24
	},
	'.mdl-radio.is-upgraded .mdl-radio__button': {
		position: 'absolute',
		width: 0,
		height: 0,
		margin: 0,
		padding: 0,
		opacity: 0,
		msAppearance: 'none',
		MozAppearance: 'none',
		WebkitAppearance: 'none',
		appearance: 'none',
		border: 'none'
	},
	'.mdl-radio__outer-circle': {
		position: 'absolute',
		top: 4,
		left: 0,
		display: 'inline-block',
		boxSizing: 'border-box',
		width: 16,
		height: 16,
		margin: 0,
		cursor: 'pointer',
		border: '2px solid rgba(0,0,0, 0.54)',
		borderRadius: '50%',
		zIndex: 2
	},
	'.mdl-radio.is-checked .mdl-radio__outer-circle': {
		border: '2px solid rgb(63,81,181)'
	},
	'.mdl-radio__outer-circle fieldset[disabled] .mdl-radio,   .mdl-radio.is-disabled .mdl-radio__outer-circle': {
		border: '2px solid rgba(0,0,0, 0.26)',
		cursor: 'auto'
	},
	'.mdl-radio__inner-circle': {
		position: 'absolute',
		zIndex: 1,
		margin: 0,
		top: 8,
		left: 4,
		boxSizing: 'border-box',
		width: 8,
		height: 8,
		cursor: 'pointer',
		transitionDuration: '0.28s',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionProperty: 'transform, -webkit-transform',
		WebkitTransform: 'scale3d(0, 0, 0)',
		transform: 'scale3d(0, 0, 0)',
		borderRadius: '50%',
		background: 'rgb(63,81,181)'
	},
	'.mdl-radio.is-checked .mdl-radio__inner-circle': {
		WebkitTransform: 'scale3d(1, 1, 1)',
		transform: 'scale3d(1, 1, 1)'
	},
	'fieldset[disabled] .mdl-radio .mdl-radio__inner-circle,   .mdl-radio.is-disabled .mdl-radio__inner-circle': {
		background: 'rgba(0,0,0, 0.26)',
		cursor: 'auto'
	},
	'.mdl-radio.is-focused .mdl-radio__inner-circle': {
		boxShadow: '0 0 0px 10px rgba(0, 0, 0, 0.1)'
	},
	'.mdl-radio__label': {
		cursor: 'pointer'
	},
	'fieldset[disabled] .mdl-radio .mdl-radio__label,   .mdl-radio.is-disabled .mdl-radio__label': {
		color: 'rgba(0,0,0, 0.26)',
		cursor: 'auto'
	},
	'.mdl-radio__ripple-container': {
		position: 'absolute',
		zIndex: 2,
		top: -9,
		left: -13,
		boxSizing: 'border-box',
		width: 42,
		height: 42,
		borderRadius: '50%',
		cursor: 'pointer',
		overflow: 'hidden',
		WebkitMaskImage: '-webkit-radial-gradient(circle, white, black)'
	},
	'.mdl-radio__ripple-container .mdl-ripple': {
		background: 'rgb(63,81,181)'
	},
	'fieldset[disabled] .mdl-radio .mdl-radio__ripple-container,   .mdl-radio.is-disabled .mdl-radio__ripple-container': {
		cursor: 'auto'
	},
	'fieldset[disabled] .mdl-radio .mdl-radio__ripple-container .mdl-ripple,   .mdl-radio.is-disabled .mdl-radio__ripple-container .mdl-ripple': {
		background: 'transparent'
	},
	'_:-ms-input-placeholder, :root .mdl-slider.mdl-slider.is-upgraded': {
		msAppearance: 'none',
		height: 32,
		margin: 0
	},
	'.mdl-slider': {
		width: 'calc(100% - 40px)',
		margin: '0 20px'
	},
	'.mdl-slider.is-upgraded': {
		WebkitAppearance: 'none',
		MozAppearance: 'none',
		appearance: 'none',
		height: 2,
		background: 'transparent',
		WebkitUserSelect: 'none',
		MozUserSelect: 'none',
		msUserSelect: 'none',
		userSelect: 'none',
		outline: 0,
		padding: 0,
		color: 'rgb(63,81,181)',
		WebkitAlignSelf: 'center',
		msFlexItemAlign: 'center',
		alignSelf: 'center',
		zIndex: 1,
		cursor: 'pointer'
	},
	'.mdl-slider.is-upgraded::-moz-focus-outer': {
		border: 0
	},
	'.mdl-slider.is-upgraded::-ms-tooltip': {
		display: 'none'
	},
	'.mdl-slider.is-upgraded::-webkit-slider-runnable-track': {
		background: 'transparent'
	},
	'.mdl-slider.is-upgraded::-moz-range-track': {
		background: 'transparent',
		border: 'none'
	},
	'.mdl-slider.is-upgraded::-ms-track': {
		background: 'none',
		color: 'transparent',
		height: 2,
		width: '100%',
		border: 'none'
	},
	'.mdl-slider.is-upgraded::-ms-fill-lower': {
		padding: 0,
		background: 'linear-gradient(to right, transparent, transparent 16px, rgb(63,81,181) 16px, rgb(63,81,181) 0)'
	},
	'.mdl-slider.is-upgraded::-ms-fill-upper': {
		padding: 0,
		background: 'linear-gradient(to left, transparent, transparent 16px, rgba(0,0,0, 0.26) 16px, rgba(0,0,0, 0.26) 0)'
	},
	'.mdl-slider.is-upgraded::-webkit-slider-thumb': {
		WebkitAppearance: 'none',
		width: 12,
		height: 12,
		boxSizing: 'border-box',
		borderRadius: '50%',
		background: 'rgb(63,81,181)',
		border: 'none',
		transition: 'transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), border 0.18s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.18s cubic-bezier(0.4, 0, 0.2, 1), background 0.28s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.18s cubic-bezier(0.4, 0, 0.2, 1)'
	},
	'.mdl-slider.is-upgraded::-moz-range-thumb': {
		MozAppearance: 'none',
		width: 12,
		height: 12,
		boxSizing: 'border-box',
		borderRadius: '50%',
		backgroundImage: 'none',
		background: 'rgb(63,81,181)',
		border: 'none'
	},
	'.mdl-slider.is-upgraded:focus:not(:active)::-webkit-slider-thumb': {
		boxShadow: '0 0 0 10px rgba(63,81,181, 0.26)'
	},
	'.mdl-slider.is-upgraded:focus:not(:active)::-moz-range-thumb': {
		boxShadow: '0 0 0 10px rgba(63,81,181, 0.26)'
	},
	'.mdl-slider.is-upgraded:active::-webkit-slider-thumb': {
		backgroundImage: 'none',
		background: 'rgb(63,81,181)',
		WebkitTransform: 'scale(1.5)',
		transform: 'scale(1.5)'
	},
	'.mdl-slider.is-upgraded:active::-moz-range-thumb': {
		backgroundImage: 'none',
		background: 'rgb(63,81,181)',
		transform: 'scale(1.5)'
	},
	'.mdl-slider.is-upgraded::-ms-thumb': {
		width: 32,
		height: 32,
		border: 'none',
		borderRadius: '50%',
		background: 'rgb(63,81,181)',
		transform: 'scale(0.375)',
		transition: 'transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), background 0.28s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.18s cubic-bezier(0.4, 0, 0.2, 1)'
	},
	'.mdl-slider.is-upgraded:focus:not(:active)::-ms-thumb': {
		background: 'radial-gradient(circle closest-side, rgb(63,81,181) 0%, rgb(63,81,181) 37.5%, rgba(63,81,181, 0.26) 37.5%, rgba(63,81,181, 0.26) 100%)',
		transform: 'scale(1)'
	},
	'.mdl-slider.is-upgraded:active::-ms-thumb': {
		background: 'rgb(63,81,181)',
		transform: 'scale(0.5625)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value::-webkit-slider-thumb': {
		border: '2px solid rgba(0,0,0, 0.26)',
		background: 'transparent'
	},
	'.mdl-slider.is-upgraded.is-lowest-value::-moz-range-thumb': {
		border: '2px solid rgba(0,0,0, 0.26)',
		background: 'transparent'
	},
	'.mdl-slider.is-upgraded.is-lowest-value + .mdl-slider__background-flex > .mdl-slider__background-upper': {
		left: 6
	},
	'.mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-webkit-slider-thumb': {
		boxShadow: '0 0 0 10px rgba(0,0,0, 0.12)',
		background: 'rgba(0,0,0, 0.12)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-moz-range-thumb': {
		boxShadow: '0 0 0 10px rgba(0,0,0, 0.12)',
		background: 'rgba(0,0,0, 0.12)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:active::-webkit-slider-thumb': {
		border: '1.6px solid rgba(0,0,0, 0.26)',
		WebkitTransform: 'scale(1.5)',
		transform: 'scale(1.5)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:active + .mdl-slider__background-flex > .mdl-slider__background-upper': {
		left: 9
	},
	'.mdl-slider.is-upgraded.is-lowest-value:active::-moz-range-thumb': {
		border: '1.5px solid rgba(0,0,0, 0.26)',
		transform: 'scale(1.5)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value::-ms-thumb': {
		background: 'radial-gradient(circle closest-side, transparent 0%, transparent 66.67%, rgba(0,0,0, 0.26) 66.67%, rgba(0,0,0, 0.26) 100%)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-ms-thumb': {
		background: 'radial-gradient(circle closest-side, rgba(0,0,0, 0.12) 0%, rgba(0,0,0, 0.12) 25%, rgba(0,0,0, 0.26) 25%, rgba(0,0,0, 0.26) 37.5%, rgba(0,0,0, 0.12) 37.5%, rgba(0,0,0, 0.12) 100%)',
		transform: 'scale(1)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:active::-ms-thumb': {
		transform: 'scale(0.5625)',
		background: 'radial-gradient(circle closest-side, transparent 0%, transparent 77.78%, rgba(0,0,0, 0.26) 77.78%, rgba(0,0,0, 0.26) 100%)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value::-ms-fill-lower': {
		background: 'transparent'
	},
	'.mdl-slider.is-upgraded.is-lowest-value::-ms-fill-upper': {
		marginLeft: 6
	},
	'.mdl-slider.is-upgraded.is-lowest-value:active::-ms-fill-upper': {
		marginLeft: 9
	},
	'.mdl-slider.is-upgraded:disabled:focus::-webkit-slider-thumb, .mdl-slider.is-upgraded:disabled:active::-webkit-slider-thumb, .mdl-slider.is-upgraded:disabled::-webkit-slider-thumb': {
		WebkitTransform: 'scale(0.667)',
		transform: 'scale(0.667)',
		background: 'rgba(0,0,0, 0.26)'
	},
	'.mdl-slider.is-upgraded:disabled:focus::-moz-range-thumb, .mdl-slider.is-upgraded:disabled:active::-moz-range-thumb, .mdl-slider.is-upgraded:disabled::-moz-range-thumb': {
		transform: 'scale(0.667)',
		background: 'rgba(0,0,0, 0.26)'
	},
	'.mdl-slider.is-upgraded:disabled + .mdl-slider__background-flex > .mdl-slider__background-lower': {
		backgroundColor: 'rgba(0,0,0, 0.26)',
		left: -6
	},
	'.mdl-slider.is-upgraded:disabled + .mdl-slider__background-flex > .mdl-slider__background-upper': {
		left: 6
	},
	'.mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-webkit-slider-thumb, .mdl-slider.is-upgraded.is-lowest-value:disabled:active::-webkit-slider-thumb, .mdl-slider.is-upgraded.is-lowest-value:disabled::-webkit-slider-thumb': {
		border: '3px solid rgba(0,0,0, 0.26)',
		background: 'transparent',
		WebkitTransform: 'scale(0.667)',
		transform: 'scale(0.667)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-moz-range-thumb, .mdl-slider.is-upgraded.is-lowest-value:disabled:active::-moz-range-thumb, .mdl-slider.is-upgraded.is-lowest-value:disabled::-moz-range-thumb': {
		border: '3px solid rgba(0,0,0, 0.26)',
		background: 'transparent',
		transform: 'scale(0.667)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:disabled:active + .mdl-slider__background-flex > .mdl-slider__background-upper': {
		left: 6
	},
	'.mdl-slider.is-upgraded:disabled:focus::-ms-thumb, .mdl-slider.is-upgraded:disabled:active::-ms-thumb, .mdl-slider.is-upgraded:disabled::-ms-thumb': {
		transform: 'scale(0.25)',
		background: 'rgba(0,0,0, 0.26)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-ms-thumb, .mdl-slider.is-upgraded.is-lowest-value:disabled:active::-ms-thumb, .mdl-slider.is-upgraded.is-lowest-value:disabled::-ms-thumb': {
		transform: 'scale(0.25)',
		background: 'radial-gradient(circle closest-side, transparent 0%, transparent 50%, rgba(0,0,0, 0.26) 50%, rgba(0,0,0, 0.26) 100%)'
	},
	'.mdl-slider.is-upgraded:disabled::-ms-fill-lower': {
		marginRight: 6,
		background: 'linear-gradient(to right, transparent, transparent 25px, rgba(0,0,0, 0.26) 25px, rgba(0,0,0, 0.26) 0)'
	},
	'.mdl-slider.is-upgraded:disabled::-ms-fill-upper': {
		marginLeft: 6
	},
	'.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-ms-fill-upper': {
		marginLeft: 6
	},
	'.mdl-slider__ie-container': {
		height: 18,
		overflow: 'visible',
		border: 'none',
		margin: 'none',
		padding: 'none'
	},
	'.mdl-slider__container': {
		height: 18,
		position: 'relative',
		background: 'none',
		display: 'flex',
		WebkitFlexDirection: 'row',
		msFlexDirection: 'row',
		flexDirection: 'row'
	},
	'.mdl-slider__background-flex': {
		background: 'transparent',
		position: 'absolute',
		height: 2,
		width: 'calc(100% - 52px)',
		top: '50%',
		left: 0,
		margin: '0 26px',
		display: 'flex',
		overflow: 'hidden',
		border: 0,
		padding: 0,
		WebkitTransform: 'translate(0, -1px)',
		transform: 'translate(0, -1px)'
	},
	'.mdl-slider__background-lower': {
		background: 'rgb(63,81,181)',
		WebkitFlex: 0,
		msFlex: 0,
		flex: 0,
		position: 'relative',
		border: 0,
		padding: 0
	},
	'.mdl-slider__background-upper': {
		background: 'rgba(0,0,0, 0.26)',
		WebkitFlex: 0,
		msFlex: 0,
		flex: 0,
		position: 'relative',
		border: 0,
		padding: 0,
		transition: 'left 0.18s cubic-bezier(0.4, 0, 0.2, 1)'
	},
	'.mdl-snackbar': {
		position: 'fixed',
		bottom: 0,
		left: '50%',
		cursor: 'default',
		backgroundColor: '#323232',
		zIndex: 3,
		display: 'flex',
		WebkitJustifyContent: 'space-between',
		msFlexPack: 'justify',
		justifyContent: 'space-between',
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		willChange: 'transform',
		WebkitTransform: 'translate(0, 80px)',
		transform: 'translate(0, 80px)',
		transition: 'transform 0.25s cubic-bezier(0.4, 0, 1, 1), -webkit-transform 0.25s cubic-bezier(0.4, 0, 1, 1)',
		pointerEvents: 'none'
	},
	'.mdl-snackbar--active': {
		WebkitTransform: 'translate(0, 0)',
		transform: 'translate(0, 0)',
		pointerEvents: 'auto',
		transition: 'transform 0.25s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.25s cubic-bezier(0, 0, 0.2, 1)'
	},
	'.mdl-snackbar__text': {
		padding: '14px 12px 14px 24px',
		verticalAlign: 'middle',
		color: 'white',
		float: 'left'
	},
	'.mdl-snackbar__action': {
		background: 'transparent',
		border: 'none',
		color: 'rgb(255,64,129)',
		float: 'right',
		textTransform: 'uppercase',
		padding: '14px 24px 14px 12px',
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeight: 500,
		lineHeight: 1,
		letterSpacing: 0,
		overflow: 'hidden',
		outline: 'none',
		opacity: 0,
		pointerEvents: 'none',
		cursor: 'pointer',
		textDecoration: 'none',
		textAlign: 'center',
		WebkitAlignSelf: 'center',
		msFlexItemAlign: 'center',
		alignSelf: 'center'
	},
	'.mdl-snackbar__action::-moz-focus-inner': {
		border: 0
	},
	'.mdl-snackbar__action:not([aria-hidden])': {
		opacity: 1,
		pointerEvents: 'auto'
	},
	'.mdl-spinner': {
		display: 'inline-block',
		position: 'relative',
		width: 28,
		height: 28
	},
	'.mdl-spinner:not(.is-upgraded).is-active:after': {
		content: '"Loading..."'
	},
	'.mdl-spinner.is-upgraded.is-active': {
		WebkitAnimation: 'mdl-spinner__container-rotate 1568.23529412ms linear infinite',
		animation: 'mdl-spinner__container-rotate 1568.23529412ms linear infinite'
	},
	'.mdl-spinner__layer': {
		position: 'absolute',
		width: '100%',
		height: '100%',
		opacity: 0
	},
	'.mdl-spinner__layer-1': {
		borderColor: 'rgb(66,165,245)'
	},
	'.mdl-spinner--single-color .mdl-spinner__layer-1': {
		borderColor: 'rgb(63,81,181)'
	},
	'.mdl-spinner.is-active .mdl-spinner__layer-1': {
		WebkitAnimation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
		animation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both'
	},
	'.mdl-spinner__layer-2': {
		borderColor: 'rgb(244,67,54)'
	},
	'.mdl-spinner--single-color .mdl-spinner__layer-2': {
		borderColor: 'rgb(63,81,181)'
	},
	'.mdl-spinner.is-active .mdl-spinner__layer-2': {
		WebkitAnimation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
		animation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both'
	},
	'.mdl-spinner__layer-3': {
		borderColor: 'rgb(253,216,53)'
	},
	'.mdl-spinner--single-color .mdl-spinner__layer-3': {
		borderColor: 'rgb(63,81,181)'
	},
	'.mdl-spinner.is-active .mdl-spinner__layer-3': {
		WebkitAnimation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
		animation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both'
	},
	'.mdl-spinner__layer-4': {
		borderColor: 'rgb(76,175,80)'
	},
	'.mdl-spinner--single-color .mdl-spinner__layer-4': {
		borderColor: 'rgb(63,81,181)'
	},
	'.mdl-spinner.is-active .mdl-spinner__layer-4': {
		WebkitAnimation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
		animation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both'
	},
	'.mdl-spinner__gap-patch': {
		position: 'absolute',
		boxSizing: 'border-box',
		top: 0,
		left: '45%',
		width: '10%',
		height: '100%',
		overflow: 'hidden',
		borderColor: 'inherit'
	},
	'.mdl-spinner__gap-patch .mdl-spinner__circle': {
		width: '1000%',
		left: '-450%'
	},
	'.mdl-spinner__circle-clipper': {
		display: 'inline-block',
		position: 'relative',
		width: '50%',
		height: '100%',
		overflow: 'hidden',
		borderColor: 'inherit'
	},
	'.mdl-spinner__circle-clipper .mdl-spinner__circle': {
		width: '200%'
	},
	'.mdl-spinner__circle': {
		boxSizing: 'border-box',
		height: '100%',
		borderWidth: 3,
		borderStyle: 'solid',
		borderColor: 'inherit',
		borderBottomColor: 'transparent',
		borderRadius: '50%',
		WebkitAnimation: 'none',
		animation: 'none',
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	'.mdl-spinner__left .mdl-spinner__circle': {
		borderRightColor: 'transparent',
		WebkitTransform: 'rotate(129deg)',
		transform: 'rotate(129deg)'
	},
	'.mdl-spinner.is-active .mdl-spinner__left .mdl-spinner__circle': {
		WebkitAnimation: 'mdl-spinner__left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
		animation: 'mdl-spinner__left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both'
	},
	'.mdl-spinner__right .mdl-spinner__circle': {
		left: '-100%',
		borderLeftColor: 'transparent',
		WebkitTransform: 'rotate(-129deg)',
		transform: 'rotate(-129deg)'
	},
	'.mdl-spinner.is-active .mdl-spinner__right .mdl-spinner__circle': {
		WebkitAnimation: 'mdl-spinner__right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
		animation: 'mdl-spinner__right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both'
	},
	'.mdl-switch': {
		position: 'relative',
		zIndex: 1,
		verticalAlign: 'middle',
		display: 'inline-block',
		boxSizing: 'border-box',
		width: '100%',
		height: 24,
		margin: 0,
		padding: 0,
		overflow: 'visible',
		WebkitTouchCallout: 'none',
		WebkitUserSelect: 'none',
		MozUserSelect: 'none',
		msUserSelect: 'none',
		userSelect: 'none'
	},
	'.mdl-switch.is-upgraded': {
		paddingLeft: 28
	},
	'.mdl-switch__input': {
		lineHeight: 24
	},
	'.mdl-switch.is-upgraded .mdl-switch__input': {
		position: 'absolute',
		width: 0,
		height: 0,
		margin: 0,
		padding: 0,
		opacity: 0,
		msAppearance: 'none',
		MozAppearance: 'none',
		WebkitAppearance: 'none',
		appearance: 'none',
		border: 'none'
	},
	'.mdl-switch__track': {
		background: 'rgba(0,0,0, 0.26)',
		position: 'absolute',
		left: 0,
		top: 5,
		height: 14,
		width: 36,
		borderRadius: 14,
		cursor: 'pointer'
	},
	'.mdl-switch.is-checked .mdl-switch__track': {
		background: 'rgba(63,81,181, 0.5)'
	},
	'.mdl-switch__track fieldset[disabled] .mdl-switch,   .mdl-switch.is-disabled .mdl-switch__track': {
		background: 'rgba(0,0,0, 0.12)',
		cursor: 'auto'
	},
	'.mdl-switch__thumb': {
		background: 'rgb(250,250,250)',
		position: 'absolute',
		left: 0,
		top: 2,
		height: 20,
		width: 20,
		borderRadius: '50%',
		cursor: 'pointer',
		boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
		transitionDuration: '0.28s',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionProperty: 'left'
	},
	'.mdl-switch.is-checked .mdl-switch__thumb': {
		background: 'rgb(63,81,181)',
		left: 16,
		boxShadow: '0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.12)'
	},
	'.mdl-switch__thumb fieldset[disabled] .mdl-switch,   .mdl-switch.is-disabled .mdl-switch__thumb': {
		background: 'rgb(189,189,189)',
		cursor: 'auto'
	},
	'.mdl-switch__focus-helper': {
		position: 'absolute',
		top: '50%',
		left: '50%',
		WebkitTransform: 'translate(-4px, -4px)',
		transform: 'translate(-4px, -4px)',
		display: 'inline-block',
		boxSizing: 'border-box',
		width: 8,
		height: 8,
		borderRadius: '50%',
		backgroundColor: 'transparent'
	},
	'.mdl-switch.is-focused .mdl-switch__focus-helper': {
		boxShadow: '0 0 0px 20px rgba(0, 0, 0, 0.1)',
		backgroundColor: 'rgba(0, 0, 0, 0.1)'
	},
	'.mdl-switch.is-focused.is-checked .mdl-switch__focus-helper': {
		boxShadow: '0 0 0px 20px rgba(63,81,181, 0.26)',
		backgroundColor: 'rgba(63,81,181, 0.26)'
	},
	'.mdl-switch__label': {
		position: 'relative',
		cursor: 'pointer',
		fontSize: 16,
		lineHeight: 24,
		margin: 0,
		left: 24
	},
	'.mdl-switch__label fieldset[disabled] .mdl-switch,   .mdl-switch.is-disabled .mdl-switch__label': {
		color: 'rgb(189,189,189)',
		cursor: 'auto'
	},
	'.mdl-switch__ripple-container': {
		position: 'absolute',
		zIndex: 2,
		top: -12,
		left: -14,
		boxSizing: 'border-box',
		width: 48,
		height: 48,
		borderRadius: '50%',
		cursor: 'pointer',
		overflow: 'hidden',
		WebkitMaskImage: '-webkit-radial-gradient(circle, white, black)',
		transitionDuration: '0.40s',
		transitionTimingFunction: 'step-end',
		transitionProperty: 'left'
	},
	'.mdl-switch__ripple-container .mdl-ripple': {
		background: 'rgb(63,81,181)'
	},
	'.mdl-switch__ripple-container fieldset[disabled] .mdl-switch,   .mdl-switch.is-disabled .mdl-switch__ripple-container': {
		cursor: 'auto'
	},
	'fieldset[disabled] .mdl-switch .mdl-switch__ripple-container .mdl-ripple,   .mdl-switch.is-disabled .mdl-switch__ripple-container .mdl-ripple': {
		background: 'transparent'
	},
	'.mdl-switch.is-checked .mdl-switch__ripple-container': {
		left: 2
	},
	'.mdl-tabs': {
		display: 'block',
		width: '100%'
	},
	'.mdl-tabs__tab-bar': {
		display: 'flex',
		WebkitFlexDirection: 'row',
		msFlexDirection: 'row',
		flexDirection: 'row',
		WebkitJustifyContent: 'center',
		msFlexPack: 'center',
		justifyContent: 'center',
		WebkitAlignContent: 'space-between',
		msFlexLinePack: 'justify',
		alignContent: 'space-between',
		WebkitAlignItems: 'flex-start',
		msFlexAlign: 'start',
		alignItems: 'flex-start',
		height: 48,
		padding: '0 0 0 0',
		margin: 0,
		borderBottom: '1px solid rgb(224,224,224)'
	},
	'.mdl-tabs__tab': {
		margin: 0,
		border: 'none',
		padding: '0 24px 0 24px',
		float: 'left',
		position: 'relative',
		display: 'block',
		textDecoration: 'none',
		height: 48,
		lineHeight: 48,
		textAlign: 'center',
		fontWeight: 500,
		fontSize: 14,
		textTransform: 'uppercase',
		color: 'rgba(0,0,0, 0.54)',
		overflow: 'hidden'
	},
	'.mdl-tabs.is-upgraded .mdl-tabs__tab.is-active': {
		color: 'rgba(0,0,0, 0.87)'
	},
	'.mdl-tabs.is-upgraded .mdl-tabs__tab.is-active:after': {
		height: 2,
		width: '100%',
		display: 'block',
		content: '" "',
		bottom: 0,
		left: 0,
		position: 'absolute',
		background: 'rgb(63,81,181)',
		WebkitAnimation: 'border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s alternate forwards',
		animation: 'border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s alternate forwards',
		transition: 'all 1s cubic-bezier(0.4, 0, 1, 1)'
	},
	'.mdl-tabs__tab .mdl-tabs__ripple-container': {
		display: 'block',
		position: 'absolute',
		height: '100%',
		width: '100%',
		left: 0,
		top: 0,
		zIndex: 1,
		overflow: 'hidden'
	},
	'.mdl-tabs__tab .mdl-tabs__ripple-container .mdl-ripple': {
		background: 'rgb(63,81,181)'
	},
	'.mdl-tabs__panel': {
		display: 'block'
	},
	'.mdl-tabs.is-upgraded .mdl-tabs__panel': {
		display: 'none'
	},
	'.mdl-tabs.is-upgraded .mdl-tabs__panel.is-active': {
		display: 'block'
	},
	'.mdl-textfield': {
		position: 'relative',
		fontSize: 16,
		display: 'inline-block',
		boxSizing: 'border-box',
		width: 300,
		maxWidth: '100%',
		margin: 0,
		padding: '20px 0'
	},
	'.mdl-textfield .mdl-button': {
		position: 'absolute',
		bottom: 20
	},
	'.mdl-textfield--align-right': {
		textAlign: 'right'
	},
	'.mdl-textfield--full-width': {
		width: '100%'
	},
	'.mdl-textfield--expandable': {
		minWidth: 32,
		width: 'auto',
		minHeight: 32
	},
	'.mdl-textfield__input': {
		border: 'none',
		borderBottom: '1px solid rgba(0,0,0, 0.12)',
		display: 'block',
		fontSize: 16,
		fontFamily: '"Helvetica", "Arial", sans-serif',
		margin: 0,
		padding: '4px 0',
		width: '100%',
		background: 'none',
		textAlign: 'left',
		color: 'inherit'
	},
	'.mdl-textfield__input[type="number"]': {
		MozAppearance: 'textfield'
	},
	'.mdl-textfield__input[type="number"]::-webkit-inner-spin-button, .mdl-textfield__input[type="number"]::-webkit-outer-spin-button': {
		WebkitAppearance: 'none',
		margin: 0
	},
	'.mdl-textfield.is-focused .mdl-textfield__input': {
		outline: 'none'
	},
	'.mdl-textfield.is-invalid .mdl-textfield__input': {
		borderColor: 'rgb(213,0,0)',
		boxShadow: 'none'
	},
	'fieldset[disabled] .mdl-textfield .mdl-textfield__input,   .mdl-textfield.is-disabled .mdl-textfield__input': {
		backgroundColor: 'transparent',
		borderBottom: '1px dotted rgba(0,0,0, 0.12)',
		color: 'rgba(0,0,0, 0.26)'
	},
	'.mdl-textfield textarea.mdl-textfield__input': {
		display: 'block'
	},
	'.mdl-textfield__label': {
		bottom: 0,
		color: 'rgba(0,0,0, 0.26)',
		fontSize: 16,
		left: 0,
		right: 0,
		pointerEvents: 'none',
		position: 'absolute',
		display: 'block',
		top: 24,
		width: '100%',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textAlign: 'left'
	},
	'.mdl-textfield.is-dirty .mdl-textfield__label,   .mdl-textfield.has-placeholder .mdl-textfield__label': {
		visibility: 'hidden'
	},
	'.mdl-textfield--floating-label .mdl-textfield__label': {
		transitionDuration: '0.2s',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
	},
	'.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label': {
		transition: 'none'
	},
	'fieldset[disabled] .mdl-textfield .mdl-textfield__label,   .mdl-textfield.is-disabled.is-disabled .mdl-textfield__label': {
		color: 'rgba(0,0,0, 0.26)'
	},
	'.mdl-textfield--floating-label.is-focused .mdl-textfield__label,   .mdl-textfield--floating-label.is-dirty .mdl-textfield__label,   .mdl-textfield--floating-label.has-placeholder .mdl-textfield__label': {
		color: 'rgb(63,81,181)',
		fontSize: 12,
		top: 4,
		visibility: 'visible'
	},
	'.mdl-textfield--floating-label.is-focused .mdl-textfield__expandable-holder .mdl-textfield__label,   .mdl-textfield--floating-label.is-dirty .mdl-textfield__expandable-holder .mdl-textfield__label,   .mdl-textfield--floating-label.has-placeholder .mdl-textfield__expandable-holder .mdl-textfield__label': {
		top: -16
	},
	'.mdl-textfield--floating-label.is-invalid .mdl-textfield__label': {
		color: 'rgb(213,0,0)',
		fontSize: 12
	},
	'.mdl-textfield__label:after': {
		backgroundColor: 'rgb(63,81,181)',
		bottom: 20,
		content: '\'\'',
		height: 2,
		left: '45%',
		position: 'absolute',
		transitionDuration: '0.2s',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		visibility: 'hidden',
		width: 10
	},
	'.mdl-textfield.is-focused .mdl-textfield__label:after': {
		left: 0,
		visibility: 'visible',
		width: '100%'
	},
	'.mdl-textfield.is-invalid .mdl-textfield__label:after': {
		backgroundColor: 'rgb(213,0,0)'
	},
	'.mdl-textfield__error': {
		color: 'rgb(213,0,0)',
		position: 'absolute',
		fontSize: 12,
		marginTop: 3,
		visibility: 'hidden',
		display: 'block'
	},
	'.mdl-textfield.is-invalid .mdl-textfield__error': {
		visibility: 'visible'
	},
	'.mdl-textfield__expandable-holder': {
		display: 'inline-block',
		position: 'relative',
		marginLeft: 32,
		transitionDuration: '0.2s',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		maxWidth: 0
	},
	'.mdl-textfield.is-focused .mdl-textfield__expandable-holder, .mdl-textfield.is-dirty .mdl-textfield__expandable-holder': {
		maxWidth: 600
	},
	'.mdl-textfield__expandable-holder .mdl-textfield__label:after': {
		bottom: 0
	},
	'.mdl-tooltip': {
		WebkitTransform: 'scale(0)',
		transform: 'scale(0)',
		WebkitTransformOrigin: 'top center',
		transformOrigin: 'top center',
		willChange: 'transform',
		zIndex: 999,
		background: 'rgba(97,97,97, 0.9)',
		borderRadius: 2,
		color: 'rgb(255,255,255)',
		display: 'inline-block',
		fontSize: 10,
		fontWeight: 500,
		lineHeight: 14,
		maxWidth: 170,
		position: 'fixed',
		top: -500,
		left: -500,
		padding: 8,
		textAlign: 'center'
	},
	'.mdl-tooltip.is-active': {
		WebkitAnimation: 'pulse 200ms cubic-bezier(0, 0, 0.2, 1) forwards',
		animation: 'pulse 200ms cubic-bezier(0, 0, 0.2, 1) forwards'
	},
	'.mdl-tooltip--large': {
		lineHeight: 14,
		fontSize: 14,
		padding: 16
	},
	'.mdl-shadow--2dp': {
		boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'
	},
	'.mdl-shadow--3dp': {
		boxShadow: '0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.12)'
	},
	'.mdl-shadow--4dp': {
		boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
	},
	'.mdl-shadow--6dp': {
		boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2)'
	},
	'.mdl-shadow--8dp': {
		boxShadow: '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)'
	},
	'.mdl-shadow--16dp': {
		boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
	},
	'.mdl-shadow--24dp': {
		boxShadow: '0 9px 46px 8px rgba(0, 0, 0, 0.14), 0 11px 15px -7px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.2)'
	},
	'.mdl-grid': {
		display: 'flex',
		WebkitFlexFlow: 'row wrap',
		msFlexFlow: 'row wrap',
		flexFlow: 'row wrap',
		margin: '0 auto 0 auto',
		WebkitAlignItems: 'stretch',
		msFlexAlign: 'stretch',
		alignItems: 'stretch'
	},
	'.mdl-grid.mdl-grid--no-spacing': {
		padding: 0
	},
	'.mdl-cell': {
		boxSizing: 'border-box'
	},
	'.mdl-cell--top': {
		WebkitAlignSelf: 'flex-start',
		msFlexItemAlign: 'start',
		alignSelf: 'flex-start'
	},
	'.mdl-cell--middle': {
		WebkitAlignSelf: 'center',
		msFlexItemAlign: 'center',
		alignSelf: 'center'
	},
	'.mdl-cell--bottom': {
		WebkitAlignSelf: 'flex-end',
		msFlexItemAlign: 'end',
		alignSelf: 'flex-end'
	},
	'.mdl-cell--stretch': {
		WebkitAlignSelf: 'stretch',
		msFlexItemAlign: 'stretch',
		alignSelf: 'stretch'
	},
	'.mdl-grid.mdl-grid--no-spacing > .mdl-cell': {
		margin: 0
	},
	'.mdl-cell--order-1': {
		WebkitOrder: 1,
		msFlexOrder: 1,
		order: 1
	},
	'.mdl-cell--order-2': {
		WebkitOrder: 2,
		msFlexOrder: 2,
		order: 2
	},
	'.mdl-cell--order-3': {
		WebkitOrder: 3,
		msFlexOrder: 3,
		order: 3
	},
	'.mdl-cell--order-4': {
		WebkitOrder: 4,
		msFlexOrder: 4,
		order: 4
	},
	'.mdl-cell--order-5': {
		WebkitOrder: 5,
		msFlexOrder: 5,
		order: 5
	},
	'.mdl-cell--order-6': {
		WebkitOrder: 6,
		msFlexOrder: 6,
		order: 6
	},
	'.mdl-cell--order-7': {
		WebkitOrder: 7,
		msFlexOrder: 7,
		order: 7
	},
	'.mdl-cell--order-8': {
		WebkitOrder: 8,
		msFlexOrder: 8,
		order: 8
	},
	'.mdl-cell--order-9': {
		WebkitOrder: 9,
		msFlexOrder: 9,
		order: 9
	},
	'.mdl-cell--order-10': {
		WebkitOrder: 10,
		msFlexOrder: 10,
		order: 10
	},
	'.mdl-cell--order-11': {
		WebkitOrder: 11,
		msFlexOrder: 11,
		order: 11
	},
	'.mdl-cell--order-12': {
		WebkitOrder: 12,
		msFlexOrder: 12,
		order: 12
	}
}

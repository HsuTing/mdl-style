module.exports = {
	html: {
		color: 'rgba(0,0,0,.87)',
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
	'audio,canvas,iframe,img,svg,video': {
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
		margin: '.2em 0',
		background: '#ccc',
		color: '#000',
		padding: '.2em 0'
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
	'.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus': {
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
	'.clearfix:before,.clearfix:after': {
		content: '" "',
		display: 'table'
	},
	'.clearfix:after': {
		clear: 'both'
	},
	mediaQueries: {
		print: {
			'*,*:before,*:after,*:first-letter': {
				background: 'transparent',
				color: '#000',
				boxShadow: 'none'
			},
			'a,a:visited': {
				textDecoration: 'underline'
			},
			'a[href]:after': {
				content: '" (" attr(href)")"'
			},
			'abbr[title]:after': {
				content: '" (" attr(title)")"'
			},
			'a[href^="#"]:after,a[href^="javascript:"]:after': {
				content: '""'
			},
			'pre,blockquote': {
				border: '1px solid #999',
				pageBreakInside: 'avoid'
			},
			thead: {
				display: 'table-header-group'
			},
			'tr,img': {
				pageBreakInside: 'avoid'
			},
			img: {
				maxWidth: '100%'
			},
			'p,h2,h3': {
				orphans: 3,
				widows: 3
			},
			'h2,h3': {
				pageBreakAfter: 'avoid'
			}
		},
		'screen and (min-width:760px)': {
			'.mdl-mega-footer--left-section,.mdl-mega-footer__left-section': {
				float: 'left'
			},
			'.mdl-mega-footer--right-section,.mdl-mega-footer__right-section': {
				float: 'right'
			},
			'.mdl-mega-footer--right-section a,.mdl-mega-footer__right-section a': {
				display: 'inline-block',
				marginLeft: 16,
				lineHeight: 36,
				verticalAlign: 'middle'
			},
			'.mdl-mega-footer--drop-down-section,.mdl-mega-footer__drop-down-section': {
				width: '33%'
			},
			'.mdl-mega-footer--drop-down-section:nth-child(1),.mdl-mega-footer--drop-down-section:nth-child(2),.mdl-mega-footer__drop-down-section:nth-child(1),.mdl-mega-footer__drop-down-section:nth-child(2)': {
				float: 'left'
			},
			'.mdl-mega-footer--drop-down-section:nth-child(3),.mdl-mega-footer__drop-down-section:nth-child(3)': {
				float: 'right'
			},
			'.mdl-mega-footer--drop-down-section:nth-child(3):after,.mdl-mega-footer__drop-down-section:nth-child(3):after': {
				clear: 'right'
			},
			'.mdl-mega-footer--drop-down-section:nth-child(4),.mdl-mega-footer__drop-down-section:nth-child(4)': {
				clear: 'right',
				float: 'right'
			},
			'.mdl-mega-footer--middle-section:after,.mdl-mega-footer__middle-section:after': {
				content: '\'\'',
				display: 'block',
				clear: 'both'
			},
			'.mdl-mega-footer--bottom-section,.mdl-mega-footer__bottom-section': {
				paddingTop: 0
			},
			'.mdl-mega-footer--heading-checkbox,.mdl-mega-footer__heading-checkbox': {
				display: 'none'
			},
			'.mdl-mega-footer--heading-checkbox+.mdl-mega-footer--heading:after,.mdl-mega-footer--heading-checkbox+.mdl-mega-footer__heading:after,.mdl-mega-footer__heading-checkbox+.mdl-mega-footer--heading:after,.mdl-mega-footer__heading-checkbox+.mdl-mega-footer__heading:after': {
				content: '\'\''
			},
			'.mdl-mega-footer--heading-checkbox:checked~.mdl-mega-footer--link-list,.mdl-mega-footer--heading-checkbox:checked~.mdl-mega-footer__link-list,.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer__heading+.mdl-mega-footer__link-list,.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer--heading+.mdl-mega-footer--link-list,.mdl-mega-footer__heading-checkbox:checked~.mdl-mega-footer--link-list,.mdl-mega-footer__heading-checkbox:checked~.mdl-mega-footer__link-list,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer__heading+.mdl-mega-footer__link-list,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer--heading+.mdl-mega-footer--link-list': {
				display: 'block'
			},
			'.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer--heading:after,.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer__heading:after,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer--heading:after,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer__heading:after': {
				content: '\'\''
			},
			'.mdl-logo': {
				float: 'left',
				marginBottom: 0,
				marginRight: 16
			},
			'.mdl-mini-footer--link-list li,.mdl-mini-footer__link-list li': {
				lineHeight: 36
			}
		},
		'screen and (min-width:1024px)': {
			'.mdl-mega-footer--drop-down-section,.mdl-mega-footer--drop-down-section:nth-child(3),.mdl-mega-footer--drop-down-section:nth-child(4),.mdl-mega-footer__drop-down-section,.mdl-mega-footer__drop-down-section:nth-child(3),.mdl-mega-footer__drop-down-section:nth-child(4)': {
				width: '24%',
				float: 'left'
			}
		},
		'screen and (max-width:1024px)': {
			'.mdl-layout__drawer>.mdl-layout__title,.mdl-layout__drawer>.mdl-layout-title': {
				lineHeight: 56,
				paddingLeft: 16
			},
			'.mdl-layout__drawer .mdl-navigation .mdl-navigation__link': {
				padding: 16
			},
			'.mdl-layout__header .mdl-layout__drawer-button': {
				margin: 4
			},
			'.mdl-layout__drawer-button': {
				margin: 4,
				color: 'rgba(0,0,0,.5)'
			},
			'.mdl-layout__header': {
				minHeight: 56,
				display: 'none'
			},
			'.mdl-layout__header>.mdl-layout-icon': {
				left: 16,
				top: 12
			},
			'.mdl-layout__header.is-compact': {
				maxHeight: 56
			},
			'.mdl-layout__header.is-compact.has-tabs': {
				minHeight: 104
			},
			'.mdl-layout--fixed-header>.mdl-layout__header': {
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
			'.mdl-layout--fixed-drawer>.mdl-layout__content': {
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
				padding: '0 12px'
			}
		},
		'screen and (min-width:1025px)': {
			'.mdl-layout--fixed-drawer>.mdl-layout__drawer': {
				WebkitTransform: 'translateX(0)',
				transform: 'translateX(0)'
			},
			'.mdl-layout--fixed-drawer>.mdl-layout__drawer-button,.mdl-layout--no-desktop-drawer-button .mdl-layout__drawer-button': {
				display: 'none'
			},
			'.mdl-layout--fixed-drawer>.mdl-layout__header .mdl-layout__header-row': {
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
		'(max-width:479px)': {
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
			'.mdl-grid--no-spacing>.mdl-cell': {
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
			'.mdl-cell--1-col,.mdl-cell--1-col-phone.mdl-cell--1-col-phone': {
				width: 'calc(25% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--1-col,.mdl-grid--no-spacing>.mdl-cell--1-col-phone.mdl-cell--1-col-phone': {
				width: '25%'
			},
			'.mdl-cell--2-col,.mdl-cell--2-col-phone.mdl-cell--2-col-phone': {
				width: 'calc(50% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--2-col,.mdl-grid--no-spacing>.mdl-cell--2-col-phone.mdl-cell--2-col-phone': {
				width: '50%'
			},
			'.mdl-cell--3-col,.mdl-cell--3-col-phone.mdl-cell--3-col-phone': {
				width: 'calc(75% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--3-col,.mdl-grid--no-spacing>.mdl-cell--3-col-phone.mdl-cell--3-col-phone': {
				width: '75%'
			},
			'.mdl-cell--4-col,.mdl-cell--4-col-phone.mdl-cell--4-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--4-col,.mdl-grid--no-spacing>.mdl-cell--4-col-phone.mdl-cell--4-col-phone': {
				width: '100%'
			},
			'.mdl-cell--5-col,.mdl-cell--5-col-phone.mdl-cell--5-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--5-col,.mdl-grid--no-spacing>.mdl-cell--5-col-phone.mdl-cell--5-col-phone': {
				width: '100%'
			},
			'.mdl-cell--6-col,.mdl-cell--6-col-phone.mdl-cell--6-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--6-col,.mdl-grid--no-spacing>.mdl-cell--6-col-phone.mdl-cell--6-col-phone': {
				width: '100%'
			},
			'.mdl-cell--7-col,.mdl-cell--7-col-phone.mdl-cell--7-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--7-col,.mdl-grid--no-spacing>.mdl-cell--7-col-phone.mdl-cell--7-col-phone': {
				width: '100%'
			},
			'.mdl-cell--8-col,.mdl-cell--8-col-phone.mdl-cell--8-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--8-col,.mdl-grid--no-spacing>.mdl-cell--8-col-phone.mdl-cell--8-col-phone': {
				width: '100%'
			},
			'.mdl-cell--9-col,.mdl-cell--9-col-phone.mdl-cell--9-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--9-col,.mdl-grid--no-spacing>.mdl-cell--9-col-phone.mdl-cell--9-col-phone': {
				width: '100%'
			},
			'.mdl-cell--10-col,.mdl-cell--10-col-phone.mdl-cell--10-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--10-col,.mdl-grid--no-spacing>.mdl-cell--10-col-phone.mdl-cell--10-col-phone': {
				width: '100%'
			},
			'.mdl-cell--11-col,.mdl-cell--11-col-phone.mdl-cell--11-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--11-col,.mdl-grid--no-spacing>.mdl-cell--11-col-phone.mdl-cell--11-col-phone': {
				width: '100%'
			},
			'.mdl-cell--12-col,.mdl-cell--12-col-phone.mdl-cell--12-col-phone': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--12-col,.mdl-grid--no-spacing>.mdl-cell--12-col-phone.mdl-cell--12-col-phone': {
				width: '100%'
			},
			'.mdl-cell--1-offset,.mdl-cell--1-offset-phone.mdl-cell--1-offset-phone': {
				marginLeft: 'calc(25% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--1-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--1-offset-phone.mdl-cell--1-offset-phone': {
				marginLeft: '25%'
			},
			'.mdl-cell--2-offset,.mdl-cell--2-offset-phone.mdl-cell--2-offset-phone': {
				marginLeft: 'calc(50% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--2-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--2-offset-phone.mdl-cell--2-offset-phone': {
				marginLeft: '50%'
			},
			'.mdl-cell--3-offset,.mdl-cell--3-offset-phone.mdl-cell--3-offset-phone': {
				marginLeft: 'calc(75% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--3-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--3-offset-phone.mdl-cell--3-offset-phone': {
				marginLeft: '75%'
			}
		},
		'(min-width:480px)': {
			'.mdl-snackbar': {
				minWidth: 288,
				maxWidth: 568,
				borderRadius: 2,
				WebkitTransform: NaN,
				transform: NaN
			},
			'.mdl-snackbar--active': {
				WebkitTransform: 'translate(-50%,0)',
				transform: 'translate(-50%,0)'
			}
		},
		'(min-width:480px) and (max-width:839px)': {
			'.mdl-grid': {
				padding: 8
			},
			'.mdl-cell': {
				margin: 8,
				width: 'calc(50% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell': {
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
			'.mdl-cell--1-col,.mdl-cell--1-col-tablet.mdl-cell--1-col-tablet': {
				width: 'calc(12.5% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--1-col,.mdl-grid--no-spacing>.mdl-cell--1-col-tablet.mdl-cell--1-col-tablet': {
				width: '12.5%'
			},
			'.mdl-cell--2-col,.mdl-cell--2-col-tablet.mdl-cell--2-col-tablet': {
				width: 'calc(25% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--2-col,.mdl-grid--no-spacing>.mdl-cell--2-col-tablet.mdl-cell--2-col-tablet': {
				width: '25%'
			},
			'.mdl-cell--3-col,.mdl-cell--3-col-tablet.mdl-cell--3-col-tablet': {
				width: 'calc(37.5% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--3-col,.mdl-grid--no-spacing>.mdl-cell--3-col-tablet.mdl-cell--3-col-tablet': {
				width: '37.5%'
			},
			'.mdl-cell--4-col,.mdl-cell--4-col-tablet.mdl-cell--4-col-tablet': {
				width: 'calc(50% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--4-col,.mdl-grid--no-spacing>.mdl-cell--4-col-tablet.mdl-cell--4-col-tablet': {
				width: '50%'
			},
			'.mdl-cell--5-col,.mdl-cell--5-col-tablet.mdl-cell--5-col-tablet': {
				width: 'calc(62.5% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--5-col,.mdl-grid--no-spacing>.mdl-cell--5-col-tablet.mdl-cell--5-col-tablet': {
				width: '62.5%'
			},
			'.mdl-cell--6-col,.mdl-cell--6-col-tablet.mdl-cell--6-col-tablet': {
				width: 'calc(75% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--6-col,.mdl-grid--no-spacing>.mdl-cell--6-col-tablet.mdl-cell--6-col-tablet': {
				width: '75%'
			},
			'.mdl-cell--7-col,.mdl-cell--7-col-tablet.mdl-cell--7-col-tablet': {
				width: 'calc(87.5% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--7-col,.mdl-grid--no-spacing>.mdl-cell--7-col-tablet.mdl-cell--7-col-tablet': {
				width: '87.5%'
			},
			'.mdl-cell--8-col,.mdl-cell--8-col-tablet.mdl-cell--8-col-tablet': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--8-col,.mdl-grid--no-spacing>.mdl-cell--8-col-tablet.mdl-cell--8-col-tablet': {
				width: '100%'
			},
			'.mdl-cell--9-col,.mdl-cell--9-col-tablet.mdl-cell--9-col-tablet': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--9-col,.mdl-grid--no-spacing>.mdl-cell--9-col-tablet.mdl-cell--9-col-tablet': {
				width: '100%'
			},
			'.mdl-cell--10-col,.mdl-cell--10-col-tablet.mdl-cell--10-col-tablet': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--10-col,.mdl-grid--no-spacing>.mdl-cell--10-col-tablet.mdl-cell--10-col-tablet': {
				width: '100%'
			},
			'.mdl-cell--11-col,.mdl-cell--11-col-tablet.mdl-cell--11-col-tablet': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--11-col,.mdl-grid--no-spacing>.mdl-cell--11-col-tablet.mdl-cell--11-col-tablet': {
				width: '100%'
			},
			'.mdl-cell--12-col,.mdl-cell--12-col-tablet.mdl-cell--12-col-tablet': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--12-col,.mdl-grid--no-spacing>.mdl-cell--12-col-tablet.mdl-cell--12-col-tablet': {
				width: '100%'
			},
			'.mdl-cell--1-offset,.mdl-cell--1-offset-tablet.mdl-cell--1-offset-tablet': {
				marginLeft: 'calc(12.5% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--1-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--1-offset-tablet.mdl-cell--1-offset-tablet': {
				marginLeft: '12.5%'
			},
			'.mdl-cell--2-offset,.mdl-cell--2-offset-tablet.mdl-cell--2-offset-tablet': {
				marginLeft: 'calc(25% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--2-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--2-offset-tablet.mdl-cell--2-offset-tablet': {
				marginLeft: '25%'
			},
			'.mdl-cell--3-offset,.mdl-cell--3-offset-tablet.mdl-cell--3-offset-tablet': {
				marginLeft: 'calc(37.5% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--3-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--3-offset-tablet.mdl-cell--3-offset-tablet': {
				marginLeft: '37.5%'
			},
			'.mdl-cell--4-offset,.mdl-cell--4-offset-tablet.mdl-cell--4-offset-tablet': {
				marginLeft: 'calc(50% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--4-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--4-offset-tablet.mdl-cell--4-offset-tablet': {
				marginLeft: '50%'
			},
			'.mdl-cell--5-offset,.mdl-cell--5-offset-tablet.mdl-cell--5-offset-tablet': {
				marginLeft: 'calc(62.5% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--5-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--5-offset-tablet.mdl-cell--5-offset-tablet': {
				marginLeft: '62.5%'
			},
			'.mdl-cell--6-offset,.mdl-cell--6-offset-tablet.mdl-cell--6-offset-tablet': {
				marginLeft: 'calc(75% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--6-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--6-offset-tablet.mdl-cell--6-offset-tablet': {
				marginLeft: '75%'
			},
			'.mdl-cell--7-offset,.mdl-cell--7-offset-tablet.mdl-cell--7-offset-tablet': {
				marginLeft: 'calc(87.5% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--7-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--7-offset-tablet.mdl-cell--7-offset-tablet': {
				marginLeft: '87.5%'
			}
		},
		'(min-width:840px)': {
			'.mdl-grid': {
				padding: 8
			},
			'.mdl-cell': {
				margin: 8,
				width: 'calc(33.3333333333% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell': {
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
			'.mdl-cell--1-col,.mdl-cell--1-col-desktop.mdl-cell--1-col-desktop': {
				width: 'calc(8.3333333333% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--1-col,.mdl-grid--no-spacing>.mdl-cell--1-col-desktop.mdl-cell--1-col-desktop': {
				width: '8.3333333333%'
			},
			'.mdl-cell--2-col,.mdl-cell--2-col-desktop.mdl-cell--2-col-desktop': {
				width: 'calc(16.6666666667% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--2-col,.mdl-grid--no-spacing>.mdl-cell--2-col-desktop.mdl-cell--2-col-desktop': {
				width: '16.6666666667%'
			},
			'.mdl-cell--3-col,.mdl-cell--3-col-desktop.mdl-cell--3-col-desktop': {
				width: 'calc(25% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--3-col,.mdl-grid--no-spacing>.mdl-cell--3-col-desktop.mdl-cell--3-col-desktop': {
				width: '25%'
			},
			'.mdl-cell--4-col,.mdl-cell--4-col-desktop.mdl-cell--4-col-desktop': {
				width: 'calc(33.3333333333% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--4-col,.mdl-grid--no-spacing>.mdl-cell--4-col-desktop.mdl-cell--4-col-desktop': {
				width: '33.3333333333%'
			},
			'.mdl-cell--5-col,.mdl-cell--5-col-desktop.mdl-cell--5-col-desktop': {
				width: 'calc(41.6666666667% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--5-col,.mdl-grid--no-spacing>.mdl-cell--5-col-desktop.mdl-cell--5-col-desktop': {
				width: '41.6666666667%'
			},
			'.mdl-cell--6-col,.mdl-cell--6-col-desktop.mdl-cell--6-col-desktop': {
				width: 'calc(50% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--6-col,.mdl-grid--no-spacing>.mdl-cell--6-col-desktop.mdl-cell--6-col-desktop': {
				width: '50%'
			},
			'.mdl-cell--7-col,.mdl-cell--7-col-desktop.mdl-cell--7-col-desktop': {
				width: 'calc(58.3333333333% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--7-col,.mdl-grid--no-spacing>.mdl-cell--7-col-desktop.mdl-cell--7-col-desktop': {
				width: '58.3333333333%'
			},
			'.mdl-cell--8-col,.mdl-cell--8-col-desktop.mdl-cell--8-col-desktop': {
				width: 'calc(66.6666666667% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--8-col,.mdl-grid--no-spacing>.mdl-cell--8-col-desktop.mdl-cell--8-col-desktop': {
				width: '66.6666666667%'
			},
			'.mdl-cell--9-col,.mdl-cell--9-col-desktop.mdl-cell--9-col-desktop': {
				width: 'calc(75% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--9-col,.mdl-grid--no-spacing>.mdl-cell--9-col-desktop.mdl-cell--9-col-desktop': {
				width: '75%'
			},
			'.mdl-cell--10-col,.mdl-cell--10-col-desktop.mdl-cell--10-col-desktop': {
				width: 'calc(83.3333333333% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--10-col,.mdl-grid--no-spacing>.mdl-cell--10-col-desktop.mdl-cell--10-col-desktop': {
				width: '83.3333333333%'
			},
			'.mdl-cell--11-col,.mdl-cell--11-col-desktop.mdl-cell--11-col-desktop': {
				width: 'calc(91.6666666667% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--11-col,.mdl-grid--no-spacing>.mdl-cell--11-col-desktop.mdl-cell--11-col-desktop': {
				width: '91.6666666667%'
			},
			'.mdl-cell--12-col,.mdl-cell--12-col-desktop.mdl-cell--12-col-desktop': {
				width: 'calc(100% - 16px)'
			},
			'.mdl-grid--no-spacing>.mdl-cell--12-col,.mdl-grid--no-spacing>.mdl-cell--12-col-desktop.mdl-cell--12-col-desktop': {
				width: '100%'
			},
			'.mdl-cell--1-offset,.mdl-cell--1-offset-desktop.mdl-cell--1-offset-desktop': {
				marginLeft: 'calc(8.3333333333% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--1-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--1-offset-desktop.mdl-cell--1-offset-desktop': {
				marginLeft: '8.3333333333%'
			},
			'.mdl-cell--2-offset,.mdl-cell--2-offset-desktop.mdl-cell--2-offset-desktop': {
				marginLeft: 'calc(16.6666666667% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--2-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--2-offset-desktop.mdl-cell--2-offset-desktop': {
				marginLeft: '16.6666666667%'
			},
			'.mdl-cell--3-offset,.mdl-cell--3-offset-desktop.mdl-cell--3-offset-desktop': {
				marginLeft: 'calc(25% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--3-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--3-offset-desktop.mdl-cell--3-offset-desktop': {
				marginLeft: '25%'
			},
			'.mdl-cell--4-offset,.mdl-cell--4-offset-desktop.mdl-cell--4-offset-desktop': {
				marginLeft: 'calc(33.3333333333% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--4-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--4-offset-desktop.mdl-cell--4-offset-desktop': {
				marginLeft: '33.3333333333%'
			},
			'.mdl-cell--5-offset,.mdl-cell--5-offset-desktop.mdl-cell--5-offset-desktop': {
				marginLeft: 'calc(41.6666666667% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--5-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--5-offset-desktop.mdl-cell--5-offset-desktop': {
				marginLeft: '41.6666666667%'
			},
			'.mdl-cell--6-offset,.mdl-cell--6-offset-desktop.mdl-cell--6-offset-desktop': {
				marginLeft: 'calc(50% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--6-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--6-offset-desktop.mdl-cell--6-offset-desktop': {
				marginLeft: '50%'
			},
			'.mdl-cell--7-offset,.mdl-cell--7-offset-desktop.mdl-cell--7-offset-desktop': {
				marginLeft: 'calc(58.3333333333% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--7-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--7-offset-desktop.mdl-cell--7-offset-desktop': {
				marginLeft: '58.3333333333%'
			},
			'.mdl-cell--8-offset,.mdl-cell--8-offset-desktop.mdl-cell--8-offset-desktop': {
				marginLeft: 'calc(66.6666666667% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--8-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--8-offset-desktop.mdl-cell--8-offset-desktop': {
				marginLeft: '66.6666666667%'
			},
			'.mdl-cell--9-offset,.mdl-cell--9-offset-desktop.mdl-cell--9-offset-desktop': {
				marginLeft: 'calc(75% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--9-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--9-offset-desktop.mdl-cell--9-offset-desktop': {
				marginLeft: '75%'
			},
			'.mdl-cell--10-offset,.mdl-cell--10-offset-desktop.mdl-cell--10-offset-desktop': {
				marginLeft: 'calc(83.3333333333% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--10-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--10-offset-desktop.mdl-cell--10-offset-desktop': {
				marginLeft: '83.3333333333%'
			},
			'.mdl-cell--11-offset,.mdl-cell--11-offset-desktop.mdl-cell--11-offset-desktop': {
				marginLeft: 'calc(91.6666666667% + 8px)'
			},
			'.mdl-grid.mdl-grid--no-spacing>.mdl-cell--11-offset,.mdl-grid.mdl-grid--no-spacing>.mdl-cell--11-offset-desktop.mdl-cell--11-offset-desktop': {
				marginLeft: '91.6666666667%'
			}
		}
	},
	'a,.mdl-accordion,.mdl-button,.mdl-card,.mdl-checkbox,.mdl-dropdown-menu,.mdl-icon-toggle,.mdl-item,.mdl-radio,.mdl-slider,.mdl-switch,.mdl-tabs__tab': {
		WebkitTapHighlightColor: 'rgba(255,255,255,0)'
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
	'html,body': {
		fontFamily: '"Helvetica","Arial",sans-serif',
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 20
	},
	'h1,h2,h3,h4,h5,h6,p': {
		padding: 0
	},
	'h1 small,h2 small,h3 small,h4 small,h5 small,h6 small': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontWeight: 400,
		lineHeight: 1.35,
		letterSpacing: '-.02em',
		opacity: 0.54,
		fontSize: '.6em'
	},
	h1: {
		fontSize: 56,
		lineHeight: 1.35,
		letterSpacing: '-.02em',
		margin: '24px 0'
	},
	'h1,h2': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontWeight: 400
	},
	h2: {
		fontSize: 45,
		lineHeight: 48
	},
	'h2,h3': {
		margin: '24px 0'
	},
	h3: {
		fontSize: 34,
		lineHeight: 40
	},
	'h3,h4': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontWeight: 400
	},
	h4: {
		fontSize: 24,
		lineHeight: 32,
		MozOsxFontSmoothing: 'grayscale',
		margin: '24px 0 16px'
	},
	h5: {
		fontSize: 20,
		fontWeight: 500,
		lineHeight: 1,
		letterSpacing: '.02em'
	},
	'h5,h6': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		margin: '24px 0 16px'
	},
	h6: {
		fontSize: 16,
		letterSpacing: '.04em'
	},
	'h6,p': {
		fontWeight: 400,
		lineHeight: 24
	},
	p: {
		fontSize: 14,
		letterSpacing: 0,
		margin: '0 0 16px'
	},
	a: {
		color: '#ff4081',
		fontWeight: 500
	},
	blockquote: {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		position: 'relative',
		fontSize: 24,
		fontWeight: 300,
		fontStyle: 'italic',
		lineHeight: 1.35,
		letterSpacing: '.08em'
	},
	'blockquote:before': {
		position: 'absolute',
		left: '-.5em',
		content: '\'“\''
	},
	'blockquote:after': {
		content: '\'”\'',
		marginLeft: '-.05em'
	},
	mark: {
		backgroundColor: '#f4ff81'
	},
	dt: {
		fontWeight: 700
	},
	address: {
		fontSize: 12,
		lineHeight: 1,
		fontStyle: 'normal'
	},
	'address,ul,ol': {
		fontWeight: 400,
		letterSpacing: 0
	},
	'ul,ol': {
		fontSize: 14,
		lineHeight: 24
	},
	'.mdl-typography--display-4,.mdl-typography--display-4-color-contrast': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontSize: 112,
		fontWeight: 300,
		lineHeight: 1,
		letterSpacing: '-.04em'
	},
	'.mdl-typography--display-4-color-contrast': {
		opacity: 0.54
	},
	'.mdl-typography--display-3,.mdl-typography--display-3-color-contrast': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontSize: 56,
		fontWeight: 400,
		lineHeight: 1.35,
		letterSpacing: '-.02em'
	},
	'.mdl-typography--display-3-color-contrast': {
		opacity: 0.54
	},
	'.mdl-typography--display-2,.mdl-typography--display-2-color-contrast': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontSize: 45,
		fontWeight: 400,
		lineHeight: 48
	},
	'.mdl-typography--display-2-color-contrast': {
		opacity: 0.54
	},
	'.mdl-typography--display-1,.mdl-typography--display-1-color-contrast': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontSize: 34,
		fontWeight: 400,
		lineHeight: 40
	},
	'.mdl-typography--display-1-color-contrast': {
		opacity: 0.54
	},
	'.mdl-typography--headline,.mdl-typography--headline-color-contrast': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontSize: 24,
		fontWeight: 400,
		lineHeight: 32,
		MozOsxFontSmoothing: 'grayscale'
	},
	'.mdl-typography--headline-color-contrast': {
		opacity: 0.87
	},
	'.mdl-typography--title,.mdl-typography--title-color-contrast': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontSize: 20,
		fontWeight: 500,
		lineHeight: 1,
		letterSpacing: '.02em'
	},
	'.mdl-typography--title-color-contrast': {
		opacity: 0.87
	},
	'.mdl-typography--subhead,.mdl-typography--subhead-color-contrast': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontSize: 16,
		fontWeight: 400,
		lineHeight: 24,
		letterSpacing: '.04em'
	},
	'.mdl-typography--subhead-color-contrast': {
		opacity: 0.87
	},
	'.mdl-typography--body-2,.mdl-typography--body-2-color-contrast': {
		fontSize: 14,
		fontWeight: 700,
		lineHeight: 24,
		letterSpacing: 0
	},
	'.mdl-typography--body-2-color-contrast': {
		opacity: 0.87
	},
	'.mdl-typography--body-1,.mdl-typography--body-1-color-contrast': {
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 24,
		letterSpacing: 0
	},
	'.mdl-typography--body-1-color-contrast': {
		opacity: 0.87
	},
	'.mdl-typography--body-2-force-preferred-font,.mdl-typography--body-2-force-preferred-font-color-contrast': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontSize: 14,
		fontWeight: 500,
		lineHeight: 24,
		letterSpacing: 0
	},
	'.mdl-typography--body-2-force-preferred-font-color-contrast': {
		opacity: 0.87
	},
	'.mdl-typography--body-1-force-preferred-font,.mdl-typography--body-1-force-preferred-font-color-contrast': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 24,
		letterSpacing: 0
	},
	'.mdl-typography--body-1-force-preferred-font-color-contrast': {
		opacity: 0.87
	},
	'.mdl-typography--caption,.mdl-typography--caption-force-preferred-font': {
		fontSize: 12,
		fontWeight: 400,
		lineHeight: 1,
		letterSpacing: 0
	},
	'.mdl-typography--caption-force-preferred-font': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
	},
	'.mdl-typography--caption-color-contrast,.mdl-typography--caption-force-preferred-font-color-contrast': {
		fontSize: 12,
		fontWeight: 400,
		lineHeight: 1,
		letterSpacing: 0,
		opacity: 0.54
	},
	'.mdl-typography--caption-force-preferred-font-color-contrast,.mdl-typography--menu': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
	},
	'.mdl-typography--menu': {
		fontSize: 14,
		fontWeight: 500,
		lineHeight: 1,
		letterSpacing: 0
	},
	'.mdl-typography--menu-color-contrast': {
		opacity: 0.87
	},
	'.mdl-typography--menu-color-contrast,.mdl-typography--button,.mdl-typography--button-color-contrast': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontSize: 14,
		fontWeight: 500,
		lineHeight: 1,
		letterSpacing: 0
	},
	'.mdl-typography--button,.mdl-typography--button-color-contrast': {
		textTransform: 'uppercase'
	},
	'.mdl-typography--button-color-contrast': {
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
		fontWeight: 400,
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
		color: '#f44336'
	},
	'.mdl-color--red': {
		backgroundColor: '#f44336'
	},
	'.mdl-color-text--red-50': {
		color: '#ffebee'
	},
	'.mdl-color--red-50': {
		backgroundColor: '#ffebee'
	},
	'.mdl-color-text--red-100': {
		color: '#ffcdd2'
	},
	'.mdl-color--red-100': {
		backgroundColor: '#ffcdd2'
	},
	'.mdl-color-text--red-200': {
		color: '#ef9a9a'
	},
	'.mdl-color--red-200': {
		backgroundColor: '#ef9a9a'
	},
	'.mdl-color-text--red-300': {
		color: '#e57373'
	},
	'.mdl-color--red-300': {
		backgroundColor: '#e57373'
	},
	'.mdl-color-text--red-400': {
		color: '#ef5350'
	},
	'.mdl-color--red-400': {
		backgroundColor: '#ef5350'
	},
	'.mdl-color-text--red-500': {
		color: '#f44336'
	},
	'.mdl-color--red-500': {
		backgroundColor: '#f44336'
	},
	'.mdl-color-text--red-600': {
		color: '#e53935'
	},
	'.mdl-color--red-600': {
		backgroundColor: '#e53935'
	},
	'.mdl-color-text--red-700': {
		color: '#d32f2f'
	},
	'.mdl-color--red-700': {
		backgroundColor: '#d32f2f'
	},
	'.mdl-color-text--red-800': {
		color: '#c62828'
	},
	'.mdl-color--red-800': {
		backgroundColor: '#c62828'
	},
	'.mdl-color-text--red-900': {
		color: '#b71c1c'
	},
	'.mdl-color--red-900': {
		backgroundColor: '#b71c1c'
	},
	'.mdl-color-text--red-A100': {
		color: '#ff8a80'
	},
	'.mdl-color--red-A100': {
		backgroundColor: '#ff8a80'
	},
	'.mdl-color-text--red-A200': {
		color: '#ff5252'
	},
	'.mdl-color--red-A200': {
		backgroundColor: '#ff5252'
	},
	'.mdl-color-text--red-A400': {
		color: '#ff1744'
	},
	'.mdl-color--red-A400': {
		backgroundColor: '#ff1744'
	},
	'.mdl-color-text--red-A700': {
		color: '#d50000'
	},
	'.mdl-color--red-A700': {
		backgroundColor: '#d50000'
	},
	'.mdl-color-text--pink': {
		color: '#e91e63'
	},
	'.mdl-color--pink': {
		backgroundColor: '#e91e63'
	},
	'.mdl-color-text--pink-50': {
		color: '#fce4ec'
	},
	'.mdl-color--pink-50': {
		backgroundColor: '#fce4ec'
	},
	'.mdl-color-text--pink-100': {
		color: '#f8bbd0'
	},
	'.mdl-color--pink-100': {
		backgroundColor: '#f8bbd0'
	},
	'.mdl-color-text--pink-200': {
		color: '#f48fb1'
	},
	'.mdl-color--pink-200': {
		backgroundColor: '#f48fb1'
	},
	'.mdl-color-text--pink-300': {
		color: '#f06292'
	},
	'.mdl-color--pink-300': {
		backgroundColor: '#f06292'
	},
	'.mdl-color-text--pink-400': {
		color: '#ec407a'
	},
	'.mdl-color--pink-400': {
		backgroundColor: '#ec407a'
	},
	'.mdl-color-text--pink-500': {
		color: '#e91e63'
	},
	'.mdl-color--pink-500': {
		backgroundColor: '#e91e63'
	},
	'.mdl-color-text--pink-600': {
		color: '#d81b60'
	},
	'.mdl-color--pink-600': {
		backgroundColor: '#d81b60'
	},
	'.mdl-color-text--pink-700': {
		color: '#c2185b'
	},
	'.mdl-color--pink-700': {
		backgroundColor: '#c2185b'
	},
	'.mdl-color-text--pink-800': {
		color: '#ad1457'
	},
	'.mdl-color--pink-800': {
		backgroundColor: '#ad1457'
	},
	'.mdl-color-text--pink-900': {
		color: '#880e4f'
	},
	'.mdl-color--pink-900': {
		backgroundColor: '#880e4f'
	},
	'.mdl-color-text--pink-A100': {
		color: '#ff80ab'
	},
	'.mdl-color--pink-A100': {
		backgroundColor: '#ff80ab'
	},
	'.mdl-color-text--pink-A200': {
		color: '#ff4081'
	},
	'.mdl-color--pink-A200': {
		backgroundColor: '#ff4081'
	},
	'.mdl-color-text--pink-A400': {
		color: '#f50057'
	},
	'.mdl-color--pink-A400': {
		backgroundColor: '#f50057'
	},
	'.mdl-color-text--pink-A700': {
		color: '#c51162'
	},
	'.mdl-color--pink-A700': {
		backgroundColor: '#c51162'
	},
	'.mdl-color-text--purple': {
		color: '#9c27b0'
	},
	'.mdl-color--purple': {
		backgroundColor: '#9c27b0'
	},
	'.mdl-color-text--purple-50': {
		color: '#f3e5f5'
	},
	'.mdl-color--purple-50': {
		backgroundColor: '#f3e5f5'
	},
	'.mdl-color-text--purple-100': {
		color: '#e1bee7'
	},
	'.mdl-color--purple-100': {
		backgroundColor: '#e1bee7'
	},
	'.mdl-color-text--purple-200': {
		color: '#ce93d8'
	},
	'.mdl-color--purple-200': {
		backgroundColor: '#ce93d8'
	},
	'.mdl-color-text--purple-300': {
		color: '#ba68c8'
	},
	'.mdl-color--purple-300': {
		backgroundColor: '#ba68c8'
	},
	'.mdl-color-text--purple-400': {
		color: '#ab47bc'
	},
	'.mdl-color--purple-400': {
		backgroundColor: '#ab47bc'
	},
	'.mdl-color-text--purple-500': {
		color: '#9c27b0'
	},
	'.mdl-color--purple-500': {
		backgroundColor: '#9c27b0'
	},
	'.mdl-color-text--purple-600': {
		color: '#8e24aa'
	},
	'.mdl-color--purple-600': {
		backgroundColor: '#8e24aa'
	},
	'.mdl-color-text--purple-700': {
		color: '#7b1fa2'
	},
	'.mdl-color--purple-700': {
		backgroundColor: '#7b1fa2'
	},
	'.mdl-color-text--purple-800': {
		color: '#6a1b9a'
	},
	'.mdl-color--purple-800': {
		backgroundColor: '#6a1b9a'
	},
	'.mdl-color-text--purple-900': {
		color: '#4a148c'
	},
	'.mdl-color--purple-900': {
		backgroundColor: '#4a148c'
	},
	'.mdl-color-text--purple-A100': {
		color: '#ea80fc'
	},
	'.mdl-color--purple-A100': {
		backgroundColor: '#ea80fc'
	},
	'.mdl-color-text--purple-A200': {
		color: '#e040fb'
	},
	'.mdl-color--purple-A200': {
		backgroundColor: '#e040fb'
	},
	'.mdl-color-text--purple-A400': {
		color: '#d500f9'
	},
	'.mdl-color--purple-A400': {
		backgroundColor: '#d500f9'
	},
	'.mdl-color-text--purple-A700': {
		color: '#a0f'
	},
	'.mdl-color--purple-A700': {
		backgroundColor: '#a0f'
	},
	'.mdl-color-text--deep-purple': {
		color: '#673ab7'
	},
	'.mdl-color--deep-purple': {
		backgroundColor: '#673ab7'
	},
	'.mdl-color-text--deep-purple-50': {
		color: '#ede7f6'
	},
	'.mdl-color--deep-purple-50': {
		backgroundColor: '#ede7f6'
	},
	'.mdl-color-text--deep-purple-100': {
		color: '#d1c4e9'
	},
	'.mdl-color--deep-purple-100': {
		backgroundColor: '#d1c4e9'
	},
	'.mdl-color-text--deep-purple-200': {
		color: '#b39ddb'
	},
	'.mdl-color--deep-purple-200': {
		backgroundColor: '#b39ddb'
	},
	'.mdl-color-text--deep-purple-300': {
		color: '#9575cd'
	},
	'.mdl-color--deep-purple-300': {
		backgroundColor: '#9575cd'
	},
	'.mdl-color-text--deep-purple-400': {
		color: '#7e57c2'
	},
	'.mdl-color--deep-purple-400': {
		backgroundColor: '#7e57c2'
	},
	'.mdl-color-text--deep-purple-500': {
		color: '#673ab7'
	},
	'.mdl-color--deep-purple-500': {
		backgroundColor: '#673ab7'
	},
	'.mdl-color-text--deep-purple-600': {
		color: '#5e35b1'
	},
	'.mdl-color--deep-purple-600': {
		backgroundColor: '#5e35b1'
	},
	'.mdl-color-text--deep-purple-700': {
		color: '#512da8'
	},
	'.mdl-color--deep-purple-700': {
		backgroundColor: '#512da8'
	},
	'.mdl-color-text--deep-purple-800': {
		color: '#4527a0'
	},
	'.mdl-color--deep-purple-800': {
		backgroundColor: '#4527a0'
	},
	'.mdl-color-text--deep-purple-900': {
		color: '#311b92'
	},
	'.mdl-color--deep-purple-900': {
		backgroundColor: '#311b92'
	},
	'.mdl-color-text--deep-purple-A100': {
		color: '#b388ff'
	},
	'.mdl-color--deep-purple-A100': {
		backgroundColor: '#b388ff'
	},
	'.mdl-color-text--deep-purple-A200': {
		color: '#7c4dff'
	},
	'.mdl-color--deep-purple-A200': {
		backgroundColor: '#7c4dff'
	},
	'.mdl-color-text--deep-purple-A400': {
		color: '#651fff'
	},
	'.mdl-color--deep-purple-A400': {
		backgroundColor: '#651fff'
	},
	'.mdl-color-text--deep-purple-A700': {
		color: '#6200ea'
	},
	'.mdl-color--deep-purple-A700': {
		backgroundColor: '#6200ea'
	},
	'.mdl-color-text--indigo': {
		color: '#3f51b5'
	},
	'.mdl-color--indigo': {
		backgroundColor: '#3f51b5'
	},
	'.mdl-color-text--indigo-50': {
		color: '#e8eaf6'
	},
	'.mdl-color--indigo-50': {
		backgroundColor: '#e8eaf6'
	},
	'.mdl-color-text--indigo-100': {
		color: '#c5cae9'
	},
	'.mdl-color--indigo-100': {
		backgroundColor: '#c5cae9'
	},
	'.mdl-color-text--indigo-200': {
		color: '#9fa8da'
	},
	'.mdl-color--indigo-200': {
		backgroundColor: '#9fa8da'
	},
	'.mdl-color-text--indigo-300': {
		color: '#7986cb'
	},
	'.mdl-color--indigo-300': {
		backgroundColor: '#7986cb'
	},
	'.mdl-color-text--indigo-400': {
		color: '#5c6bc0'
	},
	'.mdl-color--indigo-400': {
		backgroundColor: '#5c6bc0'
	},
	'.mdl-color-text--indigo-500': {
		color: '#3f51b5'
	},
	'.mdl-color--indigo-500': {
		backgroundColor: '#3f51b5'
	},
	'.mdl-color-text--indigo-600': {
		color: '#3949ab'
	},
	'.mdl-color--indigo-600': {
		backgroundColor: '#3949ab'
	},
	'.mdl-color-text--indigo-700': {
		color: '#303f9f'
	},
	'.mdl-color--indigo-700': {
		backgroundColor: '#303f9f'
	},
	'.mdl-color-text--indigo-800': {
		color: '#283593'
	},
	'.mdl-color--indigo-800': {
		backgroundColor: '#283593'
	},
	'.mdl-color-text--indigo-900': {
		color: '#1a237e'
	},
	'.mdl-color--indigo-900': {
		backgroundColor: '#1a237e'
	},
	'.mdl-color-text--indigo-A100': {
		color: '#8c9eff'
	},
	'.mdl-color--indigo-A100': {
		backgroundColor: '#8c9eff'
	},
	'.mdl-color-text--indigo-A200': {
		color: '#536dfe'
	},
	'.mdl-color--indigo-A200': {
		backgroundColor: '#536dfe'
	},
	'.mdl-color-text--indigo-A400': {
		color: '#3d5afe'
	},
	'.mdl-color--indigo-A400': {
		backgroundColor: '#3d5afe'
	},
	'.mdl-color-text--indigo-A700': {
		color: '#304ffe'
	},
	'.mdl-color--indigo-A700': {
		backgroundColor: '#304ffe'
	},
	'.mdl-color-text--blue': {
		color: '#2196f3'
	},
	'.mdl-color--blue': {
		backgroundColor: '#2196f3'
	},
	'.mdl-color-text--blue-50': {
		color: '#e3f2fd'
	},
	'.mdl-color--blue-50': {
		backgroundColor: '#e3f2fd'
	},
	'.mdl-color-text--blue-100': {
		color: '#bbdefb'
	},
	'.mdl-color--blue-100': {
		backgroundColor: '#bbdefb'
	},
	'.mdl-color-text--blue-200': {
		color: '#90caf9'
	},
	'.mdl-color--blue-200': {
		backgroundColor: '#90caf9'
	},
	'.mdl-color-text--blue-300': {
		color: '#64b5f6'
	},
	'.mdl-color--blue-300': {
		backgroundColor: '#64b5f6'
	},
	'.mdl-color-text--blue-400': {
		color: '#42a5f5'
	},
	'.mdl-color--blue-400': {
		backgroundColor: '#42a5f5'
	},
	'.mdl-color-text--blue-500': {
		color: '#2196f3'
	},
	'.mdl-color--blue-500': {
		backgroundColor: '#2196f3'
	},
	'.mdl-color-text--blue-600': {
		color: '#1e88e5'
	},
	'.mdl-color--blue-600': {
		backgroundColor: '#1e88e5'
	},
	'.mdl-color-text--blue-700': {
		color: '#1976d2'
	},
	'.mdl-color--blue-700': {
		backgroundColor: '#1976d2'
	},
	'.mdl-color-text--blue-800': {
		color: '#1565c0'
	},
	'.mdl-color--blue-800': {
		backgroundColor: '#1565c0'
	},
	'.mdl-color-text--blue-900': {
		color: '#0d47a1'
	},
	'.mdl-color--blue-900': {
		backgroundColor: '#0d47a1'
	},
	'.mdl-color-text--blue-A100': {
		color: '#82b1ff'
	},
	'.mdl-color--blue-A100': {
		backgroundColor: '#82b1ff'
	},
	'.mdl-color-text--blue-A200': {
		color: '#448aff'
	},
	'.mdl-color--blue-A200': {
		backgroundColor: '#448aff'
	},
	'.mdl-color-text--blue-A400': {
		color: '#2979ff'
	},
	'.mdl-color--blue-A400': {
		backgroundColor: '#2979ff'
	},
	'.mdl-color-text--blue-A700': {
		color: '#2962ff'
	},
	'.mdl-color--blue-A700': {
		backgroundColor: '#2962ff'
	},
	'.mdl-color-text--light-blue': {
		color: '#03a9f4'
	},
	'.mdl-color--light-blue': {
		backgroundColor: '#03a9f4'
	},
	'.mdl-color-text--light-blue-50': {
		color: '#e1f5fe'
	},
	'.mdl-color--light-blue-50': {
		backgroundColor: '#e1f5fe'
	},
	'.mdl-color-text--light-blue-100': {
		color: '#b3e5fc'
	},
	'.mdl-color--light-blue-100': {
		backgroundColor: '#b3e5fc'
	},
	'.mdl-color-text--light-blue-200': {
		color: '#81d4fa'
	},
	'.mdl-color--light-blue-200': {
		backgroundColor: '#81d4fa'
	},
	'.mdl-color-text--light-blue-300': {
		color: '#4fc3f7'
	},
	'.mdl-color--light-blue-300': {
		backgroundColor: '#4fc3f7'
	},
	'.mdl-color-text--light-blue-400': {
		color: '#29b6f6'
	},
	'.mdl-color--light-blue-400': {
		backgroundColor: '#29b6f6'
	},
	'.mdl-color-text--light-blue-500': {
		color: '#03a9f4'
	},
	'.mdl-color--light-blue-500': {
		backgroundColor: '#03a9f4'
	},
	'.mdl-color-text--light-blue-600': {
		color: '#039be5'
	},
	'.mdl-color--light-blue-600': {
		backgroundColor: '#039be5'
	},
	'.mdl-color-text--light-blue-700': {
		color: '#0288d1'
	},
	'.mdl-color--light-blue-700': {
		backgroundColor: '#0288d1'
	},
	'.mdl-color-text--light-blue-800': {
		color: '#0277bd'
	},
	'.mdl-color--light-blue-800': {
		backgroundColor: '#0277bd'
	},
	'.mdl-color-text--light-blue-900': {
		color: '#01579b'
	},
	'.mdl-color--light-blue-900': {
		backgroundColor: '#01579b'
	},
	'.mdl-color-text--light-blue-A100': {
		color: '#80d8ff'
	},
	'.mdl-color--light-blue-A100': {
		backgroundColor: '#80d8ff'
	},
	'.mdl-color-text--light-blue-A200': {
		color: '#40c4ff'
	},
	'.mdl-color--light-blue-A200': {
		backgroundColor: '#40c4ff'
	},
	'.mdl-color-text--light-blue-A400': {
		color: '#00b0ff'
	},
	'.mdl-color--light-blue-A400': {
		backgroundColor: '#00b0ff'
	},
	'.mdl-color-text--light-blue-A700': {
		color: '#0091ea'
	},
	'.mdl-color--light-blue-A700': {
		backgroundColor: '#0091ea'
	},
	'.mdl-color-text--cyan': {
		color: '#00bcd4'
	},
	'.mdl-color--cyan': {
		backgroundColor: '#00bcd4'
	},
	'.mdl-color-text--cyan-50': {
		color: '#e0f7fa'
	},
	'.mdl-color--cyan-50': {
		backgroundColor: '#e0f7fa'
	},
	'.mdl-color-text--cyan-100': {
		color: '#b2ebf2'
	},
	'.mdl-color--cyan-100': {
		backgroundColor: '#b2ebf2'
	},
	'.mdl-color-text--cyan-200': {
		color: '#80deea'
	},
	'.mdl-color--cyan-200': {
		backgroundColor: '#80deea'
	},
	'.mdl-color-text--cyan-300': {
		color: '#4dd0e1'
	},
	'.mdl-color--cyan-300': {
		backgroundColor: '#4dd0e1'
	},
	'.mdl-color-text--cyan-400': {
		color: '#26c6da'
	},
	'.mdl-color--cyan-400': {
		backgroundColor: '#26c6da'
	},
	'.mdl-color-text--cyan-500': {
		color: '#00bcd4'
	},
	'.mdl-color--cyan-500': {
		backgroundColor: '#00bcd4'
	},
	'.mdl-color-text--cyan-600': {
		color: '#00acc1'
	},
	'.mdl-color--cyan-600': {
		backgroundColor: '#00acc1'
	},
	'.mdl-color-text--cyan-700': {
		color: '#0097a7'
	},
	'.mdl-color--cyan-700': {
		backgroundColor: '#0097a7'
	},
	'.mdl-color-text--cyan-800': {
		color: '#00838f'
	},
	'.mdl-color--cyan-800': {
		backgroundColor: '#00838f'
	},
	'.mdl-color-text--cyan-900': {
		color: '#006064'
	},
	'.mdl-color--cyan-900': {
		backgroundColor: '#006064'
	},
	'.mdl-color-text--cyan-A100': {
		color: '#84ffff'
	},
	'.mdl-color--cyan-A100': {
		backgroundColor: '#84ffff'
	},
	'.mdl-color-text--cyan-A200': {
		color: '#18ffff'
	},
	'.mdl-color--cyan-A200': {
		backgroundColor: '#18ffff'
	},
	'.mdl-color-text--cyan-A400': {
		color: '#00e5ff'
	},
	'.mdl-color--cyan-A400': {
		backgroundColor: '#00e5ff'
	},
	'.mdl-color-text--cyan-A700': {
		color: '#00b8d4'
	},
	'.mdl-color--cyan-A700': {
		backgroundColor: '#00b8d4'
	},
	'.mdl-color-text--teal': {
		color: '#009688'
	},
	'.mdl-color--teal': {
		backgroundColor: '#009688'
	},
	'.mdl-color-text--teal-50': {
		color: '#e0f2f1'
	},
	'.mdl-color--teal-50': {
		backgroundColor: '#e0f2f1'
	},
	'.mdl-color-text--teal-100': {
		color: '#b2dfdb'
	},
	'.mdl-color--teal-100': {
		backgroundColor: '#b2dfdb'
	},
	'.mdl-color-text--teal-200': {
		color: '#80cbc4'
	},
	'.mdl-color--teal-200': {
		backgroundColor: '#80cbc4'
	},
	'.mdl-color-text--teal-300': {
		color: '#4db6ac'
	},
	'.mdl-color--teal-300': {
		backgroundColor: '#4db6ac'
	},
	'.mdl-color-text--teal-400': {
		color: '#26a69a'
	},
	'.mdl-color--teal-400': {
		backgroundColor: '#26a69a'
	},
	'.mdl-color-text--teal-500': {
		color: '#009688'
	},
	'.mdl-color--teal-500': {
		backgroundColor: '#009688'
	},
	'.mdl-color-text--teal-600': {
		color: '#00897b'
	},
	'.mdl-color--teal-600': {
		backgroundColor: '#00897b'
	},
	'.mdl-color-text--teal-700': {
		color: '#00796b'
	},
	'.mdl-color--teal-700': {
		backgroundColor: '#00796b'
	},
	'.mdl-color-text--teal-800': {
		color: '#00695c'
	},
	'.mdl-color--teal-800': {
		backgroundColor: '#00695c'
	},
	'.mdl-color-text--teal-900': {
		color: '#004d40'
	},
	'.mdl-color--teal-900': {
		backgroundColor: '#004d40'
	},
	'.mdl-color-text--teal-A100': {
		color: '#a7ffeb'
	},
	'.mdl-color--teal-A100': {
		backgroundColor: '#a7ffeb'
	},
	'.mdl-color-text--teal-A200': {
		color: '#64ffda'
	},
	'.mdl-color--teal-A200': {
		backgroundColor: '#64ffda'
	},
	'.mdl-color-text--teal-A400': {
		color: '#1de9b6'
	},
	'.mdl-color--teal-A400': {
		backgroundColor: '#1de9b6'
	},
	'.mdl-color-text--teal-A700': {
		color: '#00bfa5'
	},
	'.mdl-color--teal-A700': {
		backgroundColor: '#00bfa5'
	},
	'.mdl-color-text--green': {
		color: '#4caf50'
	},
	'.mdl-color--green': {
		backgroundColor: '#4caf50'
	},
	'.mdl-color-text--green-50': {
		color: '#e8f5e9'
	},
	'.mdl-color--green-50': {
		backgroundColor: '#e8f5e9'
	},
	'.mdl-color-text--green-100': {
		color: '#c8e6c9'
	},
	'.mdl-color--green-100': {
		backgroundColor: '#c8e6c9'
	},
	'.mdl-color-text--green-200': {
		color: '#a5d6a7'
	},
	'.mdl-color--green-200': {
		backgroundColor: '#a5d6a7'
	},
	'.mdl-color-text--green-300': {
		color: '#81c784'
	},
	'.mdl-color--green-300': {
		backgroundColor: '#81c784'
	},
	'.mdl-color-text--green-400': {
		color: '#66bb6a'
	},
	'.mdl-color--green-400': {
		backgroundColor: '#66bb6a'
	},
	'.mdl-color-text--green-500': {
		color: '#4caf50'
	},
	'.mdl-color--green-500': {
		backgroundColor: '#4caf50'
	},
	'.mdl-color-text--green-600': {
		color: '#43a047'
	},
	'.mdl-color--green-600': {
		backgroundColor: '#43a047'
	},
	'.mdl-color-text--green-700': {
		color: '#388e3c'
	},
	'.mdl-color--green-700': {
		backgroundColor: '#388e3c'
	},
	'.mdl-color-text--green-800': {
		color: '#2e7d32'
	},
	'.mdl-color--green-800': {
		backgroundColor: '#2e7d32'
	},
	'.mdl-color-text--green-900': {
		color: '#1b5e20'
	},
	'.mdl-color--green-900': {
		backgroundColor: '#1b5e20'
	},
	'.mdl-color-text--green-A100': {
		color: '#b9f6ca'
	},
	'.mdl-color--green-A100': {
		backgroundColor: '#b9f6ca'
	},
	'.mdl-color-text--green-A200': {
		color: '#69f0ae'
	},
	'.mdl-color--green-A200': {
		backgroundColor: '#69f0ae'
	},
	'.mdl-color-text--green-A400': {
		color: '#00e676'
	},
	'.mdl-color--green-A400': {
		backgroundColor: '#00e676'
	},
	'.mdl-color-text--green-A700': {
		color: '#00c853'
	},
	'.mdl-color--green-A700': {
		backgroundColor: '#00c853'
	},
	'.mdl-color-text--light-green': {
		color: '#8bc34a'
	},
	'.mdl-color--light-green': {
		backgroundColor: '#8bc34a'
	},
	'.mdl-color-text--light-green-50': {
		color: '#f1f8e9'
	},
	'.mdl-color--light-green-50': {
		backgroundColor: '#f1f8e9'
	},
	'.mdl-color-text--light-green-100': {
		color: '#dcedc8'
	},
	'.mdl-color--light-green-100': {
		backgroundColor: '#dcedc8'
	},
	'.mdl-color-text--light-green-200': {
		color: '#c5e1a5'
	},
	'.mdl-color--light-green-200': {
		backgroundColor: '#c5e1a5'
	},
	'.mdl-color-text--light-green-300': {
		color: '#aed581'
	},
	'.mdl-color--light-green-300': {
		backgroundColor: '#aed581'
	},
	'.mdl-color-text--light-green-400': {
		color: '#9ccc65'
	},
	'.mdl-color--light-green-400': {
		backgroundColor: '#9ccc65'
	},
	'.mdl-color-text--light-green-500': {
		color: '#8bc34a'
	},
	'.mdl-color--light-green-500': {
		backgroundColor: '#8bc34a'
	},
	'.mdl-color-text--light-green-600': {
		color: '#7cb342'
	},
	'.mdl-color--light-green-600': {
		backgroundColor: '#7cb342'
	},
	'.mdl-color-text--light-green-700': {
		color: '#689f38'
	},
	'.mdl-color--light-green-700': {
		backgroundColor: '#689f38'
	},
	'.mdl-color-text--light-green-800': {
		color: '#558b2f'
	},
	'.mdl-color--light-green-800': {
		backgroundColor: '#558b2f'
	},
	'.mdl-color-text--light-green-900': {
		color: '#33691e'
	},
	'.mdl-color--light-green-900': {
		backgroundColor: '#33691e'
	},
	'.mdl-color-text--light-green-A100': {
		color: '#ccff90'
	},
	'.mdl-color--light-green-A100': {
		backgroundColor: '#ccff90'
	},
	'.mdl-color-text--light-green-A200': {
		color: '#b2ff59'
	},
	'.mdl-color--light-green-A200': {
		backgroundColor: '#b2ff59'
	},
	'.mdl-color-text--light-green-A400': {
		color: '#76ff03'
	},
	'.mdl-color--light-green-A400': {
		backgroundColor: '#76ff03'
	},
	'.mdl-color-text--light-green-A700': {
		color: '#64dd17'
	},
	'.mdl-color--light-green-A700': {
		backgroundColor: '#64dd17'
	},
	'.mdl-color-text--lime': {
		color: '#cddc39'
	},
	'.mdl-color--lime': {
		backgroundColor: '#cddc39'
	},
	'.mdl-color-text--lime-50': {
		color: '#f9fbe7'
	},
	'.mdl-color--lime-50': {
		backgroundColor: '#f9fbe7'
	},
	'.mdl-color-text--lime-100': {
		color: '#f0f4c3'
	},
	'.mdl-color--lime-100': {
		backgroundColor: '#f0f4c3'
	},
	'.mdl-color-text--lime-200': {
		color: '#e6ee9c'
	},
	'.mdl-color--lime-200': {
		backgroundColor: '#e6ee9c'
	},
	'.mdl-color-text--lime-300': {
		color: '#dce775'
	},
	'.mdl-color--lime-300': {
		backgroundColor: '#dce775'
	},
	'.mdl-color-text--lime-400': {
		color: '#d4e157'
	},
	'.mdl-color--lime-400': {
		backgroundColor: '#d4e157'
	},
	'.mdl-color-text--lime-500': {
		color: '#cddc39'
	},
	'.mdl-color--lime-500': {
		backgroundColor: '#cddc39'
	},
	'.mdl-color-text--lime-600': {
		color: '#c0ca33'
	},
	'.mdl-color--lime-600': {
		backgroundColor: '#c0ca33'
	},
	'.mdl-color-text--lime-700': {
		color: '#afb42b'
	},
	'.mdl-color--lime-700': {
		backgroundColor: '#afb42b'
	},
	'.mdl-color-text--lime-800': {
		color: '#9e9d24'
	},
	'.mdl-color--lime-800': {
		backgroundColor: '#9e9d24'
	},
	'.mdl-color-text--lime-900': {
		color: '#827717'
	},
	'.mdl-color--lime-900': {
		backgroundColor: '#827717'
	},
	'.mdl-color-text--lime-A100': {
		color: '#f4ff81'
	},
	'.mdl-color--lime-A100': {
		backgroundColor: '#f4ff81'
	},
	'.mdl-color-text--lime-A200': {
		color: '#eeff41'
	},
	'.mdl-color--lime-A200': {
		backgroundColor: '#eeff41'
	},
	'.mdl-color-text--lime-A400': {
		color: '#c6ff00'
	},
	'.mdl-color--lime-A400': {
		backgroundColor: '#c6ff00'
	},
	'.mdl-color-text--lime-A700': {
		color: '#aeea00'
	},
	'.mdl-color--lime-A700': {
		backgroundColor: '#aeea00'
	},
	'.mdl-color-text--yellow': {
		color: '#ffeb3b'
	},
	'.mdl-color--yellow': {
		backgroundColor: '#ffeb3b'
	},
	'.mdl-color-text--yellow-50': {
		color: '#fffde7'
	},
	'.mdl-color--yellow-50': {
		backgroundColor: '#fffde7'
	},
	'.mdl-color-text--yellow-100': {
		color: '#fff9c4'
	},
	'.mdl-color--yellow-100': {
		backgroundColor: '#fff9c4'
	},
	'.mdl-color-text--yellow-200': {
		color: '#fff59d'
	},
	'.mdl-color--yellow-200': {
		backgroundColor: '#fff59d'
	},
	'.mdl-color-text--yellow-300': {
		color: '#fff176'
	},
	'.mdl-color--yellow-300': {
		backgroundColor: '#fff176'
	},
	'.mdl-color-text--yellow-400': {
		color: '#ffee58'
	},
	'.mdl-color--yellow-400': {
		backgroundColor: '#ffee58'
	},
	'.mdl-color-text--yellow-500': {
		color: '#ffeb3b'
	},
	'.mdl-color--yellow-500': {
		backgroundColor: '#ffeb3b'
	},
	'.mdl-color-text--yellow-600': {
		color: '#fdd835'
	},
	'.mdl-color--yellow-600': {
		backgroundColor: '#fdd835'
	},
	'.mdl-color-text--yellow-700': {
		color: '#fbc02d'
	},
	'.mdl-color--yellow-700': {
		backgroundColor: '#fbc02d'
	},
	'.mdl-color-text--yellow-800': {
		color: '#f9a825'
	},
	'.mdl-color--yellow-800': {
		backgroundColor: '#f9a825'
	},
	'.mdl-color-text--yellow-900': {
		color: '#f57f17'
	},
	'.mdl-color--yellow-900': {
		backgroundColor: '#f57f17'
	},
	'.mdl-color-text--yellow-A100': {
		color: '#ffff8d'
	},
	'.mdl-color--yellow-A100': {
		backgroundColor: '#ffff8d'
	},
	'.mdl-color-text--yellow-A200': {
		color: '#ff0'
	},
	'.mdl-color--yellow-A200': {
		backgroundColor: '#ff0'
	},
	'.mdl-color-text--yellow-A400': {
		color: '#ffea00'
	},
	'.mdl-color--yellow-A400': {
		backgroundColor: '#ffea00'
	},
	'.mdl-color-text--yellow-A700': {
		color: '#ffd600'
	},
	'.mdl-color--yellow-A700': {
		backgroundColor: '#ffd600'
	},
	'.mdl-color-text--amber': {
		color: '#ffc107'
	},
	'.mdl-color--amber': {
		backgroundColor: '#ffc107'
	},
	'.mdl-color-text--amber-50': {
		color: '#fff8e1'
	},
	'.mdl-color--amber-50': {
		backgroundColor: '#fff8e1'
	},
	'.mdl-color-text--amber-100': {
		color: '#ffecb3'
	},
	'.mdl-color--amber-100': {
		backgroundColor: '#ffecb3'
	},
	'.mdl-color-text--amber-200': {
		color: '#ffe082'
	},
	'.mdl-color--amber-200': {
		backgroundColor: '#ffe082'
	},
	'.mdl-color-text--amber-300': {
		color: '#ffd54f'
	},
	'.mdl-color--amber-300': {
		backgroundColor: '#ffd54f'
	},
	'.mdl-color-text--amber-400': {
		color: '#ffca28'
	},
	'.mdl-color--amber-400': {
		backgroundColor: '#ffca28'
	},
	'.mdl-color-text--amber-500': {
		color: '#ffc107'
	},
	'.mdl-color--amber-500': {
		backgroundColor: '#ffc107'
	},
	'.mdl-color-text--amber-600': {
		color: '#ffb300'
	},
	'.mdl-color--amber-600': {
		backgroundColor: '#ffb300'
	},
	'.mdl-color-text--amber-700': {
		color: '#ffa000'
	},
	'.mdl-color--amber-700': {
		backgroundColor: '#ffa000'
	},
	'.mdl-color-text--amber-800': {
		color: '#ff8f00'
	},
	'.mdl-color--amber-800': {
		backgroundColor: '#ff8f00'
	},
	'.mdl-color-text--amber-900': {
		color: '#ff6f00'
	},
	'.mdl-color--amber-900': {
		backgroundColor: '#ff6f00'
	},
	'.mdl-color-text--amber-A100': {
		color: '#ffe57f'
	},
	'.mdl-color--amber-A100': {
		backgroundColor: '#ffe57f'
	},
	'.mdl-color-text--amber-A200': {
		color: '#ffd740'
	},
	'.mdl-color--amber-A200': {
		backgroundColor: '#ffd740'
	},
	'.mdl-color-text--amber-A400': {
		color: '#ffc400'
	},
	'.mdl-color--amber-A400': {
		backgroundColor: '#ffc400'
	},
	'.mdl-color-text--amber-A700': {
		color: '#ffab00'
	},
	'.mdl-color--amber-A700': {
		backgroundColor: '#ffab00'
	},
	'.mdl-color-text--orange': {
		color: '#ff9800'
	},
	'.mdl-color--orange': {
		backgroundColor: '#ff9800'
	},
	'.mdl-color-text--orange-50': {
		color: '#fff3e0'
	},
	'.mdl-color--orange-50': {
		backgroundColor: '#fff3e0'
	},
	'.mdl-color-text--orange-100': {
		color: '#ffe0b2'
	},
	'.mdl-color--orange-100': {
		backgroundColor: '#ffe0b2'
	},
	'.mdl-color-text--orange-200': {
		color: '#ffcc80'
	},
	'.mdl-color--orange-200': {
		backgroundColor: '#ffcc80'
	},
	'.mdl-color-text--orange-300': {
		color: '#ffb74d'
	},
	'.mdl-color--orange-300': {
		backgroundColor: '#ffb74d'
	},
	'.mdl-color-text--orange-400': {
		color: '#ffa726'
	},
	'.mdl-color--orange-400': {
		backgroundColor: '#ffa726'
	},
	'.mdl-color-text--orange-500': {
		color: '#ff9800'
	},
	'.mdl-color--orange-500': {
		backgroundColor: '#ff9800'
	},
	'.mdl-color-text--orange-600': {
		color: '#fb8c00'
	},
	'.mdl-color--orange-600': {
		backgroundColor: '#fb8c00'
	},
	'.mdl-color-text--orange-700': {
		color: '#f57c00'
	},
	'.mdl-color--orange-700': {
		backgroundColor: '#f57c00'
	},
	'.mdl-color-text--orange-800': {
		color: '#ef6c00'
	},
	'.mdl-color--orange-800': {
		backgroundColor: '#ef6c00'
	},
	'.mdl-color-text--orange-900': {
		color: '#e65100'
	},
	'.mdl-color--orange-900': {
		backgroundColor: '#e65100'
	},
	'.mdl-color-text--orange-A100': {
		color: '#ffd180'
	},
	'.mdl-color--orange-A100': {
		backgroundColor: '#ffd180'
	},
	'.mdl-color-text--orange-A200': {
		color: '#ffab40'
	},
	'.mdl-color--orange-A200': {
		backgroundColor: '#ffab40'
	},
	'.mdl-color-text--orange-A400': {
		color: '#ff9100'
	},
	'.mdl-color--orange-A400': {
		backgroundColor: '#ff9100'
	},
	'.mdl-color-text--orange-A700': {
		color: '#ff6d00'
	},
	'.mdl-color--orange-A700': {
		backgroundColor: '#ff6d00'
	},
	'.mdl-color-text--deep-orange': {
		color: '#ff5722'
	},
	'.mdl-color--deep-orange': {
		backgroundColor: '#ff5722'
	},
	'.mdl-color-text--deep-orange-50': {
		color: '#fbe9e7'
	},
	'.mdl-color--deep-orange-50': {
		backgroundColor: '#fbe9e7'
	},
	'.mdl-color-text--deep-orange-100': {
		color: '#ffccbc'
	},
	'.mdl-color--deep-orange-100': {
		backgroundColor: '#ffccbc'
	},
	'.mdl-color-text--deep-orange-200': {
		color: '#ffab91'
	},
	'.mdl-color--deep-orange-200': {
		backgroundColor: '#ffab91'
	},
	'.mdl-color-text--deep-orange-300': {
		color: '#ff8a65'
	},
	'.mdl-color--deep-orange-300': {
		backgroundColor: '#ff8a65'
	},
	'.mdl-color-text--deep-orange-400': {
		color: '#ff7043'
	},
	'.mdl-color--deep-orange-400': {
		backgroundColor: '#ff7043'
	},
	'.mdl-color-text--deep-orange-500': {
		color: '#ff5722'
	},
	'.mdl-color--deep-orange-500': {
		backgroundColor: '#ff5722'
	},
	'.mdl-color-text--deep-orange-600': {
		color: '#f4511e'
	},
	'.mdl-color--deep-orange-600': {
		backgroundColor: '#f4511e'
	},
	'.mdl-color-text--deep-orange-700': {
		color: '#e64a19'
	},
	'.mdl-color--deep-orange-700': {
		backgroundColor: '#e64a19'
	},
	'.mdl-color-text--deep-orange-800': {
		color: '#d84315'
	},
	'.mdl-color--deep-orange-800': {
		backgroundColor: '#d84315'
	},
	'.mdl-color-text--deep-orange-900': {
		color: '#bf360c'
	},
	'.mdl-color--deep-orange-900': {
		backgroundColor: '#bf360c'
	},
	'.mdl-color-text--deep-orange-A100': {
		color: '#ff9e80'
	},
	'.mdl-color--deep-orange-A100': {
		backgroundColor: '#ff9e80'
	},
	'.mdl-color-text--deep-orange-A200': {
		color: '#ff6e40'
	},
	'.mdl-color--deep-orange-A200': {
		backgroundColor: '#ff6e40'
	},
	'.mdl-color-text--deep-orange-A400': {
		color: '#ff3d00'
	},
	'.mdl-color--deep-orange-A400': {
		backgroundColor: '#ff3d00'
	},
	'.mdl-color-text--deep-orange-A700': {
		color: '#dd2c00'
	},
	'.mdl-color--deep-orange-A700': {
		backgroundColor: '#dd2c00'
	},
	'.mdl-color-text--brown': {
		color: '#795548'
	},
	'.mdl-color--brown': {
		backgroundColor: '#795548'
	},
	'.mdl-color-text--brown-50': {
		color: '#efebe9'
	},
	'.mdl-color--brown-50': {
		backgroundColor: '#efebe9'
	},
	'.mdl-color-text--brown-100': {
		color: '#d7ccc8'
	},
	'.mdl-color--brown-100': {
		backgroundColor: '#d7ccc8'
	},
	'.mdl-color-text--brown-200': {
		color: '#bcaaa4'
	},
	'.mdl-color--brown-200': {
		backgroundColor: '#bcaaa4'
	},
	'.mdl-color-text--brown-300': {
		color: '#a1887f'
	},
	'.mdl-color--brown-300': {
		backgroundColor: '#a1887f'
	},
	'.mdl-color-text--brown-400': {
		color: '#8d6e63'
	},
	'.mdl-color--brown-400': {
		backgroundColor: '#8d6e63'
	},
	'.mdl-color-text--brown-500': {
		color: '#795548'
	},
	'.mdl-color--brown-500': {
		backgroundColor: '#795548'
	},
	'.mdl-color-text--brown-600': {
		color: '#6d4c41'
	},
	'.mdl-color--brown-600': {
		backgroundColor: '#6d4c41'
	},
	'.mdl-color-text--brown-700': {
		color: '#5d4037'
	},
	'.mdl-color--brown-700': {
		backgroundColor: '#5d4037'
	},
	'.mdl-color-text--brown-800': {
		color: '#4e342e'
	},
	'.mdl-color--brown-800': {
		backgroundColor: '#4e342e'
	},
	'.mdl-color-text--brown-900': {
		color: '#3e2723'
	},
	'.mdl-color--brown-900': {
		backgroundColor: '#3e2723'
	},
	'.mdl-color-text--grey': {
		color: '#9e9e9e'
	},
	'.mdl-color--grey': {
		backgroundColor: '#9e9e9e'
	},
	'.mdl-color-text--grey-50': {
		color: '#fafafa'
	},
	'.mdl-color--grey-50': {
		backgroundColor: '#fafafa'
	},
	'.mdl-color-text--grey-100': {
		color: '#f5f5f5'
	},
	'.mdl-color--grey-100': {
		backgroundColor: '#f5f5f5'
	},
	'.mdl-color-text--grey-200': {
		color: '#eee'
	},
	'.mdl-color--grey-200': {
		backgroundColor: '#eee'
	},
	'.mdl-color-text--grey-300': {
		color: '#e0e0e0'
	},
	'.mdl-color--grey-300': {
		backgroundColor: '#e0e0e0'
	},
	'.mdl-color-text--grey-400': {
		color: '#bdbdbd'
	},
	'.mdl-color--grey-400': {
		backgroundColor: '#bdbdbd'
	},
	'.mdl-color-text--grey-500': {
		color: '#9e9e9e'
	},
	'.mdl-color--grey-500': {
		backgroundColor: '#9e9e9e'
	},
	'.mdl-color-text--grey-600': {
		color: '#757575'
	},
	'.mdl-color--grey-600': {
		backgroundColor: '#757575'
	},
	'.mdl-color-text--grey-700': {
		color: '#616161'
	},
	'.mdl-color--grey-700': {
		backgroundColor: '#616161'
	},
	'.mdl-color-text--grey-800': {
		color: '#424242'
	},
	'.mdl-color--grey-800': {
		backgroundColor: '#424242'
	},
	'.mdl-color-text--grey-900': {
		color: '#212121'
	},
	'.mdl-color--grey-900': {
		backgroundColor: '#212121'
	},
	'.mdl-color-text--blue-grey': {
		color: '#607d8b'
	},
	'.mdl-color--blue-grey': {
		backgroundColor: '#607d8b'
	},
	'.mdl-color-text--blue-grey-50': {
		color: '#eceff1'
	},
	'.mdl-color--blue-grey-50': {
		backgroundColor: '#eceff1'
	},
	'.mdl-color-text--blue-grey-100': {
		color: '#cfd8dc'
	},
	'.mdl-color--blue-grey-100': {
		backgroundColor: '#cfd8dc'
	},
	'.mdl-color-text--blue-grey-200': {
		color: '#b0bec5'
	},
	'.mdl-color--blue-grey-200': {
		backgroundColor: '#b0bec5'
	},
	'.mdl-color-text--blue-grey-300': {
		color: '#90a4ae'
	},
	'.mdl-color--blue-grey-300': {
		backgroundColor: '#90a4ae'
	},
	'.mdl-color-text--blue-grey-400': {
		color: '#78909c'
	},
	'.mdl-color--blue-grey-400': {
		backgroundColor: '#78909c'
	},
	'.mdl-color-text--blue-grey-500': {
		color: '#607d8b'
	},
	'.mdl-color--blue-grey-500': {
		backgroundColor: '#607d8b'
	},
	'.mdl-color-text--blue-grey-600': {
		color: '#546e7a'
	},
	'.mdl-color--blue-grey-600': {
		backgroundColor: '#546e7a'
	},
	'.mdl-color-text--blue-grey-700': {
		color: '#455a64'
	},
	'.mdl-color--blue-grey-700': {
		backgroundColor: '#455a64'
	},
	'.mdl-color-text--blue-grey-800': {
		color: '#37474f'
	},
	'.mdl-color--blue-grey-800': {
		backgroundColor: '#37474f'
	},
	'.mdl-color-text--blue-grey-900': {
		color: '#263238'
	},
	'.mdl-color--blue-grey-900': {
		backgroundColor: '#263238'
	},
	'.mdl-color--black': {
		backgroundColor: '#000'
	},
	'.mdl-color-text--black': {
		color: '#000'
	},
	'.mdl-color--white': {
		backgroundColor: '#fff'
	},
	'.mdl-color-text--white': {
		color: '#fff'
	},
	'.mdl-color--primary': {
		backgroundColor: '#3f51b5'
	},
	'.mdl-color--primary-contrast': {
		backgroundColor: '#fff'
	},
	'.mdl-color--primary-dark': {
		backgroundColor: '#303f9f'
	},
	'.mdl-color--accent': {
		backgroundColor: '#ff4081'
	},
	'.mdl-color--accent-contrast': {
		backgroundColor: '#fff'
	},
	'.mdl-color-text--primary': {
		color: '#3f51b5'
	},
	'.mdl-color-text--primary-contrast': {
		color: '#fff'
	},
	'.mdl-color-text--primary-dark': {
		color: '#303f9f'
	},
	'.mdl-color-text--accent': {
		color: '#ff4081'
	},
	'.mdl-color-text--accent-contrast': {
		color: '#fff'
	},
	'.mdl-ripple': {
		background: '#000',
		borderRadius: '50%',
		height: 50,
		left: 0,
		opacity: 0,
		pointerEvents: 'none',
		position: 'absolute',
		top: 0,
		WebkitTransform: 'translate(-50%,-50%)',
		transform: 'translate(-50%,-50%)',
		width: 50,
		overflow: 'hidden'
	},
	'.mdl-ripple.is-animating': {
		transition: 'transform .3s cubic-bezier(0,0,.2,1),width .3s cubic-bezier(0,0,.2,1),height .3s cubic-bezier(0,0,.2,1),opacity .6s cubic-bezier(0,0,.2,1),-webkit-transform .3s cubic-bezier(0,0,.2,1)'
	},
	'.mdl-ripple.is-visible': {
		opacity: 0.3
	},
	'.mdl-animation--default,.mdl-animation--fast-out-slow-in': {
		transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)'
	},
	'.mdl-animation--linear-out-slow-in': {
		transitionTimingFunction: 'cubic-bezier(0,0,.2,1)'
	},
	'.mdl-animation--fast-out-linear-in': {
		transitionTimingFunction: 'cubic-bezier(.4,0,1,1)'
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
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontWeight: 600,
		fontSize: 12,
		width: 22,
		height: 22,
		borderRadius: '50%',
		background: '#ff4081',
		color: '#fff'
	},
	'.mdl-button .mdl-badge[data-badge]:after': {
		top: -10,
		right: -5
	},
	'.mdl-badge.mdl-badge--no-background[data-badge]:after': {
		color: '#ff4081',
		background: 'rgba(255,255,255,.2)',
		boxShadow: '0 0 1px gray'
	},
	'.mdl-badge.mdl-badge--overlap': {
		marginRight: 10
	},
	'.mdl-badge.mdl-badge--overlap:after': {
		right: -10
	},
	'.mdl-button': {
		background: '0 0',
		border: 'none',
		borderRadius: 2,
		color: '#000',
		position: 'relative',
		height: 36,
		margin: 0,
		minWidth: 64,
		padding: '0 16px',
		display: 'inline-block',
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontSize: 14,
		fontWeight: 500,
		textTransform: 'uppercase',
		letterSpacing: 0,
		overflow: 'hidden',
		willChange: 'box-shadow',
		transition: 'box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1)',
		outline: 'none',
		cursor: 'pointer',
		textDecoration: 'none',
		textAlign: 'center',
		lineHeight: 36,
		verticalAlign: 'middle'
	},
	'.mdl-button::-moz-focus-inner': {
		border: 0
	},
	'.mdl-button:hover': {
		backgroundColor: 'rgba(158,158,158,.2)'
	},
	'.mdl-button:focus:not(:active)': {
		backgroundColor: 'rgba(0,0,0,.12)'
	},
	'.mdl-button:active': {
		backgroundColor: 'rgba(158,158,158,.4)'
	},
	'.mdl-button.mdl-button--colored': {
		color: '#3f51b5'
	},
	'.mdl-button.mdl-button--colored:focus:not(:active)': {
		backgroundColor: 'rgba(0,0,0,.12)'
	},
	'input.mdl-button[type="submit"]': {
		WebkitAppearance: 'none'
	},
	'.mdl-button--raised': {
		background: 'rgba(158,158,158,.2)',
		boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)'
	},
	'.mdl-button--raised:active': {
		boxShadow: '0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)',
		backgroundColor: 'rgba(158,158,158,.4)'
	},
	'.mdl-button--raised:focus:not(:active)': {
		boxShadow: '0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36)',
		backgroundColor: 'rgba(158,158,158,.4)'
	},
	'.mdl-button--raised.mdl-button--colored': {
		background: '#3f51b5',
		color: '#fff'
	},
	'.mdl-button--raised.mdl-button--colored:hover': {
		backgroundColor: '#3f51b5'
	},
	'.mdl-button--raised.mdl-button--colored:active': {
		backgroundColor: '#3f51b5'
	},
	'.mdl-button--raised.mdl-button--colored:focus:not(:active)': {
		backgroundColor: '#3f51b5'
	},
	'.mdl-button--raised.mdl-button--colored .mdl-ripple': {
		background: '#fff'
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
		background: 'rgba(158,158,158,.2)',
		boxShadow: '0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24)',
		position: 'relative',
		lineHeight: 'normal'
	},
	'.mdl-button--fab .material-icons': {
		position: 'absolute',
		top: '50%',
		left: '50%',
		WebkitTransform: NaN,
		transform: NaN,
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
		WebkitMaskImage: '-webkit-radial-gradient(circle,#fff,#000)'
	},
	'.mdl-button--fab:active': {
		boxShadow: '0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)',
		backgroundColor: 'rgba(158,158,158,.4)'
	},
	'.mdl-button--fab:focus:not(:active)': {
		boxShadow: '0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36)',
		backgroundColor: 'rgba(158,158,158,.4)'
	},
	'.mdl-button--fab.mdl-button--colored': {
		background: '#ff4081',
		color: '#fff'
	},
	'.mdl-button--fab.mdl-button--colored:hover': {
		backgroundColor: '#ff4081'
	},
	'.mdl-button--fab.mdl-button--colored:focus:not(:active)': {
		backgroundColor: '#ff4081'
	},
	'.mdl-button--fab.mdl-button--colored:active': {
		backgroundColor: '#ff4081'
	},
	'.mdl-button--fab.mdl-button--colored .mdl-ripple': {
		background: '#fff'
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
		WebkitTransform: NaN,
		transform: NaN,
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
		WebkitMaskImage: '-webkit-radial-gradient(circle,#fff,#000)'
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
	'.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple,.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple': {
		backgroundColor: 'transparent'
	},
	'.mdl-button--primary.mdl-button--primary': {
		color: '#3f51b5'
	},
	'.mdl-button--primary.mdl-button--primary .mdl-ripple': {
		background: '#fff'
	},
	'.mdl-button--primary.mdl-button--primary.mdl-button--raised,.mdl-button--primary.mdl-button--primary.mdl-button--fab': {
		color: '#fff',
		backgroundColor: '#3f51b5'
	},
	'.mdl-button--accent.mdl-button--accent': {
		color: '#ff4081'
	},
	'.mdl-button--accent.mdl-button--accent .mdl-ripple': {
		background: '#fff'
	},
	'.mdl-button--accent.mdl-button--accent.mdl-button--raised,.mdl-button--accent.mdl-button--accent.mdl-button--fab': {
		color: '#fff',
		backgroundColor: '#ff4081'
	},
	'.mdl-button[disabled][disabled],.mdl-button.mdl-button--disabled.mdl-button--disabled': {
		color: 'rgba(0,0,0,.26)',
		cursor: 'default',
		backgroundColor: 'transparent'
	},
	'.mdl-button--fab[disabled][disabled],.mdl-button--fab.mdl-button--disabled.mdl-button--disabled': {
		backgroundColor: 'rgba(0,0,0,.12)',
		color: 'rgba(0,0,0,.26)'
	},
	'.mdl-button--raised[disabled][disabled],.mdl-button--raised.mdl-button--disabled.mdl-button--disabled': {
		backgroundColor: 'rgba(0,0,0,.12)',
		color: 'rgba(0,0,0,.26)',
		boxShadow: 'none'
	},
	'.mdl-button--colored[disabled][disabled],.mdl-button--colored.mdl-button--disabled.mdl-button--disabled': {
		color: 'rgba(0,0,0,.26)'
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
		background: '#fff',
		borderRadius: 2,
		boxSizing: 'border-box'
	},
	'.mdl-card__media': {
		backgroundColor: '#ff4081',
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
		color: '#000',
		display: 'flex',
		WebkitJustifyContent: 'stretch',
		msFlexPack: 'stretch',
		justifyContent: 'stretch',
		lineHeight: 'normal',
		padding: 16,
		WebkitPerspectiveOrigin: '165px 56px',
		perspectiveOrigin: '165px 56px',
		WebkitTransformOrigin: '165px 56px',
		transformOrigin: '165px 56px',
		boxSizing: 'border-box'
	},
	'.mdl-card__title.mdl-card--border': {
		borderBottom: '1px solid rgba(0,0,0,.1)'
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
		color: 'rgba(0,0,0,.54)',
		margin: 0
	},
	'.mdl-card__supporting-text': {
		color: 'rgba(0,0,0,.54)',
		fontSize: '1rem',
		lineHeight: 18,
		overflow: 'hidden',
		padding: 16,
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
		borderTop: '1px solid rgba(0,0,0,.1)'
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
		border: '2px solid rgba(0,0,0,.54)',
		borderRadius: 2,
		zIndex: 2
	},
	'.mdl-checkbox.is-checked .mdl-checkbox__box-outline': {
		border: '2px solid #3f51b5'
	},
	'fieldset[disabled] .mdl-checkbox .mdl-checkbox__box-outline,.mdl-checkbox.is-disabled .mdl-checkbox__box-outline': {
		border: '2px solid rgba(0,0,0,.26)',
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
		boxShadow: '0 0 0 8px rgba(0,0,0,.1)',
		backgroundColor: 'rgba(0,0,0,.1)'
	},
	'.mdl-checkbox.is-focused.is-checked .mdl-checkbox__focus-helper': {
		boxShadow: '0 0 0 8px rgba(63,81,181,.26)',
		backgroundColor: 'rgba(63,81,181,.26)'
	},
	'.mdl-checkbox__tick-outline': {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		WebkitMask: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==")',
		mask: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==")',
		background: '0 0',
		transitionDuration: '.28s',
		transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
		transitionProperty: 'background'
	},
	'.mdl-checkbox.is-checked .mdl-checkbox__tick-outline': {
		background: '#3f51b5 url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")'
	},
	'fieldset[disabled] .mdl-checkbox.is-checked .mdl-checkbox__tick-outline,.mdl-checkbox.is-checked.is-disabled .mdl-checkbox__tick-outline': {
		background: 'rgba(0,0,0,.26)url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")'
	},
	'.mdl-checkbox__label': {
		position: 'relative',
		cursor: 'pointer',
		fontSize: 16,
		lineHeight: 24,
		margin: 0
	},
	'fieldset[disabled] .mdl-checkbox .mdl-checkbox__label,.mdl-checkbox.is-disabled .mdl-checkbox__label': {
		color: 'rgba(0,0,0,.26)',
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
		WebkitMaskImage: '-webkit-radial-gradient(circle,#fff,#000)'
	},
	'.mdl-checkbox__ripple-container .mdl-ripple': {
		background: '#3f51b5'
	},
	'fieldset[disabled] .mdl-checkbox .mdl-checkbox__ripple-container,.mdl-checkbox.is-disabled .mdl-checkbox__ripple-container': {
		cursor: 'auto'
	},
	'fieldset[disabled] .mdl-checkbox .mdl-checkbox__ripple-container .mdl-ripple,.mdl-checkbox.is-disabled .mdl-checkbox__ripple-container .mdl-ripple': {
		background: '0 0'
	},
	'.mdl-data-table': {
		position: 'relative',
		border: '1px solid rgba(0,0,0,.12)',
		borderCollapse: 'collapse',
		whiteSpace: 'nowrap',
		fontSize: 13,
		backgroundColor: '#fff'
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
		transitionDuration: '.28s',
		transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
		transitionProperty: 'background-color'
	},
	'.mdl-data-table tbody tr.is-selected': {
		backgroundColor: '#e0e0e0'
	},
	'.mdl-data-table tbody tr:hover': {
		backgroundColor: '#eee'
	},
	'.mdl-data-table td': {
		textAlign: 'right',
		position: 'relative',
		height: 48,
		borderTop: '1px solid rgba(0,0,0,.12)',
		borderBottom: '1px solid rgba(0,0,0,.12)',
		padding: '12px 18px',
		boxSizing: 'border-box'
	},
	'.mdl-data-table th': {
		padding: '0 18px 12px 18px',
		textAlign: 'right',
		position: 'relative',
		verticalAlign: 'bottom',
		textOverflow: 'ellipsis',
		fontWeight: 700,
		lineHeight: 24,
		letterSpacing: 0,
		height: 48,
		fontSize: 12,
		color: 'rgba(0,0,0,.54)',
		paddingBottom: 8,
		boxSizing: 'border-box'
	},
	'.mdl-data-table td:first-of-type,.mdl-data-table th:first-of-type': {
		paddingLeft: 24
	},
	'.mdl-data-table td:last-of-type,.mdl-data-table th:last-of-type': {
		paddingRight: 24
	},
	'.mdl-data-table td,.mdl-data-table td .mdl-data-table__select': {
		verticalAlign: 'middle'
	},
	'.mdl-data-table th.mdl-data-table__header--sorted-ascending,.mdl-data-table th.mdl-data-table__header--sorted-descending': {
		color: 'rgba(0,0,0,.87)'
	},
	'.mdl-data-table th.mdl-data-table__header--sorted-ascending:before,.mdl-data-table th.mdl-data-table__header--sorted-descending:before': {
		fontFamily: '\'Material Icons\'',
		fontWeight: 400,
		fontStyle: 'normal',
		lineHeight: 1,
		letterSpacing: 'normal',
		textTransform: 'none',
		display: 'inline-block',
		wordWrap: 'normal',
		MozFontFeatureSettings: '\'liga\'',
		fontFeatureSettings: '\'liga\'',
		WebkitFontFeatureSettings: '\'liga\'',
		WebkitFontSmoothing: 'antialiased',
		fontSize: 16,
		content: '"\e5d8"',
		marginRight: 5,
		verticalAlign: 'sub'
	},
	'.mdl-data-table th.mdl-data-table__header--sorted-ascending:hover,.mdl-data-table th.mdl-data-table__header--sorted-descending:hover': {
		cursor: 'pointer'
	},
	'.mdl-data-table th.mdl-data-table__header--sorted-ascending:hover:before,.mdl-data-table th.mdl-data-table__header--sorted-descending:hover:before': {
		color: 'rgba(0,0,0,.26)'
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
		boxShadow: '0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2)',
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
	'.mdl-dialog__actions>*': {
		marginRight: 8,
		height: 36
	},
	'.mdl-dialog__actions>*:first-child': {
		marginRight: 0
	},
	'.mdl-dialog__actions--full-width': {
		padding: '0 0 8px'
	},
	'.mdl-dialog__actions--full-width>*': {
		height: 48,
		WebkitFlex: '0 0 100%',
		msFlex: '0 0 100%',
		flex: '0 0 100%',
		paddingRight: 16,
		marginRight: 0,
		textAlign: 'right'
	},
	'.mdl-dialog__content': {
		padding: '20px 24px 24px',
		color: 'rgba(0,0,0,.54)'
	},
	'.mdl-mega-footer': {
		padding: '16px 40px',
		color: '#9e9e9e',
		backgroundColor: '#424242'
	},
	'.mdl-mega-footer--top-section:after,.mdl-mega-footer--middle-section:after,.mdl-mega-footer--bottom-section:after,.mdl-mega-footer__top-section:after,.mdl-mega-footer__middle-section:after,.mdl-mega-footer__bottom-section:after': {
		content: '\'\'',
		display: 'block',
		clear: 'both'
	},
	'.mdl-mega-footer--left-section,.mdl-mega-footer__left-section,.mdl-mega-footer--right-section,.mdl-mega-footer__right-section': {
		marginBottom: 16
	},
	'.mdl-mega-footer--right-section a,.mdl-mega-footer__right-section a': {
		display: 'block',
		marginBottom: 16,
		color: 'inherit',
		textDecoration: 'none'
	},
	'.mdl-mega-footer--social-btn,.mdl-mega-footer__social-btn': {
		width: 36,
		height: 36,
		padding: 0,
		margin: 0,
		backgroundColor: '#9e9e9e',
		border: 'none'
	},
	'.mdl-mega-footer--drop-down-section,.mdl-mega-footer__drop-down-section': {
		display: 'block',
		position: 'relative'
	},
	'.mdl-mega-footer--heading-checkbox,.mdl-mega-footer__heading-checkbox': {
		position: 'absolute',
		width: '100%',
		height: 55,
		padding: 32,
		margin: '-16px 0 0',
		cursor: 'pointer',
		zIndex: 1,
		opacity: 0
	},
	'.mdl-mega-footer--heading-checkbox+.mdl-mega-footer--heading:after,.mdl-mega-footer--heading-checkbox+.mdl-mega-footer__heading:after,.mdl-mega-footer__heading-checkbox+.mdl-mega-footer--heading:after,.mdl-mega-footer__heading-checkbox+.mdl-mega-footer__heading:after': {
		fontFamily: '\'Material Icons\'',
		content: '\'\E5CE\''
	},
	'.mdl-mega-footer--heading-checkbox:checked~.mdl-mega-footer--link-list,.mdl-mega-footer--heading-checkbox:checked~.mdl-mega-footer__link-list,.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer--heading+.mdl-mega-footer--link-list,.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer__heading+.mdl-mega-footer__link-list,.mdl-mega-footer__heading-checkbox:checked~.mdl-mega-footer--link-list,.mdl-mega-footer__heading-checkbox:checked~.mdl-mega-footer__link-list,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer--heading+.mdl-mega-footer--link-list,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer__heading+.mdl-mega-footer__link-list': {
		display: 'none'
	},
	'.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer--heading:after,.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer__heading:after,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer--heading:after,.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer__heading:after': {
		fontFamily: '\'Material Icons\'',
		content: '\'\E5CF\''
	},
	'.mdl-mega-footer--heading,.mdl-mega-footer__heading': {
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
		color: '#e0e0e0'
	},
	'.mdl-mega-footer--heading:after,.mdl-mega-footer__heading:after': {
		content: '\'\'',
		position: 'absolute',
		top: 0,
		right: 0,
		display: 'block',
		width: 23,
		height: 23,
		backgroundSize: 'cover'
	},
	'.mdl-mega-footer--link-list,.mdl-mega-footer__link-list': {
		listStyle: 'none',
		padding: 0,
		margin: '0 0 32px'
	},
	'.mdl-mega-footer--link-list:after,.mdl-mega-footer__link-list:after': {
		clear: 'both',
		display: 'block',
		content: '\'\''
	},
	'.mdl-mega-footer--link-list li,.mdl-mega-footer__link-list li': {
		fontSize: 14,
		fontWeight: 400,
		letterSpacing: 0,
		lineHeight: 20
	},
	'.mdl-mega-footer--link-list a,.mdl-mega-footer__link-list a': {
		color: 'inherit',
		textDecoration: 'none',
		whiteSpace: 'nowrap'
	},
	'.mdl-mega-footer--bottom-section,.mdl-mega-footer__bottom-section': {
		paddingTop: 16,
		marginBottom: 16
	},
	'.mdl-logo': {
		marginBottom: 16,
		color: '#fff'
	},
	'.mdl-mega-footer--bottom-section .mdl-mega-footer--link-list li,.mdl-mega-footer__bottom-section .mdl-mega-footer__link-list li': {
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
		color: '#9e9e9e',
		backgroundColor: '#424242'
	},
	'.mdl-mini-footer:after': {
		content: '\'\'',
		display: 'block'
	},
	'.mdl-mini-footer .mdl-logo': {
		lineHeight: 36
	},
	'.mdl-mini-footer--link-list,.mdl-mini-footer__link-list': {
		display: 'flex',
		WebkitFlexFlow: 'row nowrap',
		msFlexFlow: 'row nowrap',
		flexFlow: 'row nowrap',
		listStyle: 'none',
		margin: 0,
		padding: 0
	},
	'.mdl-mini-footer--link-list li,.mdl-mini-footer__link-list li': {
		marginBottom: 0,
		marginRight: 16
	},
	'.mdl-mini-footer--link-list a,.mdl-mini-footer__link-list a': {
		color: 'inherit',
		textDecoration: 'none',
		whiteSpace: 'nowrap'
	},
	'.mdl-mini-footer--left-section,.mdl-mini-footer__left-section': {
		display: 'inline-block',
		WebkitOrder: 0,
		msFlexOrder: 0,
		order: 0
	},
	'.mdl-mini-footer--right-section,.mdl-mini-footer__right-section': {
		display: 'inline-block',
		WebkitOrder: 1,
		msFlexOrder: 1,
		order: 1
	},
	'.mdl-mini-footer--social-btn,.mdl-mini-footer__social-btn': {
		width: 36,
		height: 36,
		padding: 0,
		margin: 0,
		backgroundColor: '#9e9e9e',
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
		color: '#616161',
		borderRadius: '50%',
		padding: 0,
		marginLeft: 0,
		marginRight: 0,
		textAlign: 'center',
		backgroundColor: 'transparent',
		willChange: 'background-color',
		transition: 'background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1)'
	},
	'.mdl-icon-toggle__label.material-icons': {
		lineHeight: 32,
		fontSize: 24
	},
	'.mdl-icon-toggle.is-checked .mdl-icon-toggle__label': {
		color: '#3f51b5'
	},
	'.mdl-icon-toggle.is-disabled .mdl-icon-toggle__label': {
		color: 'rgba(0,0,0,.26)',
		cursor: 'auto',
		transition: 'none'
	},
	'.mdl-icon-toggle.is-focused .mdl-icon-toggle__label': {
		backgroundColor: 'rgba(0,0,0,.12)'
	},
	'.mdl-icon-toggle.is-focused.is-checked .mdl-icon-toggle__label': {
		backgroundColor: 'rgba(63,81,181,.26)'
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
		WebkitMaskImage: '-webkit-radial-gradient(circle,#fff,#000)'
	},
	'.mdl-icon-toggle__ripple-container .mdl-ripple': {
		background: '#616161'
	},
	'.mdl-icon-toggle.is-disabled .mdl-icon-toggle__ripple-container': {
		cursor: 'auto'
	},
	'.mdl-icon-toggle.is-disabled .mdl-icon-toggle__ripple-container .mdl-ripple': {
		background: '0 0'
	},
	'.mdl-list': {
		display: 'block',
		padding: '8px 0',
		listStyle: 'none'
	},
	'.mdl-list__item': {
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontSize: 16,
		fontWeight: 400,
		letterSpacing: '.04em',
		lineHeight: 1,
		minHeight: 48,
		WebkitFlexDirection: 'row',
		msFlexDirection: 'row',
		flexDirection: 'row',
		WebkitFlexWrap: 'nowrap',
		msFlexWrap: 'nowrap',
		flexWrap: 'nowrap',
		padding: 16,
		cursor: 'default',
		color: 'rgba(0,0,0,.87)',
		overflow: 'hidden'
	},
	'.mdl-list__item,.mdl-list__item .mdl-list__item-primary-content': {
		boxSizing: 'border-box',
		display: 'flex',
		WebkitAlignItems: 'center',
		msFlexAlign: 'center',
		alignItems: 'center'
	},
	'.mdl-list__item .mdl-list__item-primary-content': {
		WebkitOrder: 0,
		msFlexOrder: 0,
		order: 0,
		WebkitFlexGrow: 2,
		msFlexPositive: 2,
		flexGrow: 2,
		textDecoration: 'none'
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
		color: 'rgba(0,0,0,.54)'
	},
	'.mdl-list__item .mdl-list__item-secondary-content .mdl-list__item-sub-header': {
		padding: '0 0 0 16px'
	},
	'.mdl-list__item-icon,.mdl-list__item-icon.material-icons': {
		height: 24,
		width: 24,
		fontSize: 24,
		boxSizing: 'border-box',
		color: '#757575'
	},
	'.mdl-list__item-avatar,.mdl-list__item-avatar.material-icons': {
		height: 40,
		width: 40,
		boxSizing: 'border-box',
		borderRadius: '50%',
		backgroundColor: '#757575',
		fontSize: 40,
		color: '#fff'
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
		letterSpacing: 0,
		lineHeight: 18,
		color: 'rgba(0,0,0,.54)',
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
	'.mdl-list__item--three-line .mdl-list__item-primary-content .mdl-list__item-avatar,.mdl-list__item--three-line .mdl-list__item-primary-content .mdl-list__item-icon': {
		float: 'left'
	},
	'.mdl-list__item--three-line .mdl-list__item-secondary-content': {
		height: 52
	},
	'.mdl-list__item--three-line .mdl-list__item-text-body': {
		fontSize: 14,
		fontWeight: 400,
		letterSpacing: 0,
		lineHeight: 18,
		height: 52,
		color: 'rgba(0,0,0,.54)',
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
	'.mdl-menu__container.is-visible,.mdl-menu__container.is-animating': {
		zIndex: 999,
		visibility: 'visible'
	},
	'.mdl-menu__outline': {
		display: 'block',
		background: '#fff',
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
		boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
		willChange: 'transform',
		transition: 'transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1),-webkit-transform .3s cubic-bezier(.4,0,.2,1)',
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
		transition: 'opacity .2s cubic-bezier(.4,0,.2,1),clip .3s cubic-bezier(.4,0,.2,1)'
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
		color: 'rgba(0,0,0,.87)',
		backgroundColor: 'transparent',
		textAlign: 'left',
		margin: 0,
		padding: '0 16px',
		outlineColor: '#bdbdbd',
		position: 'relative',
		overflow: 'hidden',
		fontSize: 14,
		fontWeight: 400,
		letterSpacing: 0,
		textDecoration: 'none',
		cursor: 'pointer',
		height: 48,
		lineHeight: 48,
		whiteSpace: 'nowrap',
		opacity: 0,
		transition: 'opacity .2s cubic-bezier(.4,0,.2,1)',
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
		borderBottom: '1px solid rgba(0,0,0,.12)'
	},
	'.mdl-menu__item[disabled],.mdl-menu__item[data-mdl-disabled]': {
		color: '#bdbdbd',
		backgroundColor: 'transparent',
		cursor: 'auto'
	},
	'.mdl-menu__item[disabled]:hover,.mdl-menu__item[data-mdl-disabled]:hover': {
		backgroundColor: 'transparent'
	},
	'.mdl-menu__item[disabled]:focus,.mdl-menu__item[data-mdl-disabled]:focus': {
		backgroundColor: 'transparent'
	},
	'.mdl-menu__item[disabled] .mdl-ripple,.mdl-menu__item[data-mdl-disabled] .mdl-ripple': {
		background: '0 0'
	},
	'.mdl-menu__item:hover': {
		backgroundColor: '#eee'
	},
	'.mdl-menu__item:focus': {
		outline: 'none',
		backgroundColor: '#eee'
	},
	'.mdl-menu__item:active': {
		backgroundColor: '#e0e0e0'
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
	'.mdl-progress>.bar': {
		display: 'block',
		position: 'absolute',
		top: 0,
		bottom: 0,
		width: '0%',
		transition: 'width .2s cubic-bezier(.4,0,.2,1)'
	},
	'.mdl-progress>.progressbar': {
		backgroundColor: '#3f51b5',
		zIndex: 1,
		left: 0
	},
	'.mdl-progress>.bufferbar': {
		backgroundImage: 'linear-gradient(to right,rgba(255,255,255,.7),rgba(255,255,255,.7)),linear-gradient(to right,#3f51b5 ,#3f51b5)',
		zIndex: 0,
		left: 0
	},
	'.mdl-progress>.auxbar': {
		right: 0
	},
	'.mdl-progress:not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate)>.auxbar': {
		backgroundImage: 'linear-gradient(to right,rgba(255,255,255,.9),rgba(255,255,255,.9)),linear-gradient(to right,#3f51b5 ,#3f51b5)'
	},
	'.mdl-progress.mdl-progress--indeterminate>.bar1,.mdl-progress.mdl-progress__indeterminate>.bar1': {
		WebkitAnimationName: 'indeterminate1',
		animationName: 'indeterminate1'
	},
	'.mdl-progress.mdl-progress--indeterminate>.bar1,.mdl-progress.mdl-progress__indeterminate>.bar1,.mdl-progress.mdl-progress--indeterminate>.bar3,.mdl-progress.mdl-progress__indeterminate>.bar3': {
		backgroundColor: '#3f51b5',
		WebkitAnimationDuration: '2s',
		animationDuration: '2s',
		WebkitAnimationIterationCount: 'infinite',
		animationIterationCount: 'infinite',
		WebkitAnimationTimingFunction: 'linear',
		animationTimingFunction: 'linear'
	},
	'.mdl-progress.mdl-progress--indeterminate>.bar3,.mdl-progress.mdl-progress__indeterminate>.bar3': {
		backgroundImage: 'none',
		WebkitAnimationName: 'indeterminate2',
		animationName: 'indeterminate2'
	},
	'.mdl-navigation': {
		display: 'flex',
		WebkitFlexWrap: 'nowrap',
		msFlexWrap: 'nowrap',
		flexWrap: 'nowrap',
		boxSizing: 'border-box'
	},
	'.mdl-navigation__link': {
		color: '#424242',
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
	'.mdl-layout__title,.mdl-layout-title': {
		display: 'block',
		position: 'relative',
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontSize: 20,
		lineHeight: 1,
		letterSpacing: '.02em',
		fontWeight: 400,
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
		boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
		boxSizing: 'border-box',
		borderRight: '1px solid #e0e0e0',
		background: '#fafafa',
		WebkitTransform: NaN,
		transform: NaN,
		WebkitTransformStyle: 'preserve-3d',
		transformStyle: 'preserve-3d',
		willChange: 'transform',
		transitionDuration: '.2s',
		transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
		transitionProperty: 'transform,-webkit-transform',
		color: '#424242',
		overflow: 'visible',
		overflowY: 'auto',
		zIndex: 5
	},
	'.mdl-layout__drawer.is-visible': {
		WebkitTransform: 'translateX(0)',
		transform: 'translateX(0)'
	},
	'.mdl-layout__drawer.is-visible~.mdl-layout__content.mdl-layout__content': {
		overflow: 'hidden'
	},
	'.mdl-layout__drawer>*': {
		WebkitFlexShrink: 0,
		msFlexNegative: 0,
		flexShrink: 0
	},
	'.mdl-layout__drawer>.mdl-layout__title,.mdl-layout__drawer>.mdl-layout-title': {
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
		backgroundColor: '#e0e0e0'
	},
	'.mdl-layout__drawer .mdl-navigation .mdl-navigation__link--current': {
		backgroundColor: '#000',
		color: '#e0e0e0'
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
		fontFamily: 'Helvetica,Arial,sans-serif',
		margin: '10px 12px',
		top: 0,
		left: 0,
		color: '#fff',
		zIndex: 4
	},
	'.mdl-layout__header .mdl-layout__drawer-button': {
		position: 'absolute',
		color: '#fff',
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
		backgroundColor: '#3f51b5',
		color: '#fff',
		boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
		transitionDuration: '.2s',
		transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
		transitionProperty: 'max-height,box-shadow'
	},
	'.mdl-layout--fixed-drawer.is-upgraded:not(.is-small-screen)>.mdl-layout__header': {
		marginLeft: 240,
		width: 'calc(100% - 240px)'
	},
	'.mdl-layout__header>.mdl-layout-icon': {
		position: 'absolute',
		left: 40,
		top: 16,
		height: 32,
		width: 32,
		overflow: 'hidden',
		zIndex: 3,
		display: 'block'
	},
	'.mdl-layout.has-drawer .mdl-layout__header>.mdl-layout-icon': {
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
	'.mdl-layout__header--seamed,.mdl-layout__header--scroll': {
		boxShadow: 'none'
	},
	'.mdl-layout__header--waterfall': {
		boxShadow: 'none',
		overflow: 'hidden'
	},
	'.mdl-layout__header--waterfall.is-casting-shadow': {
		boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)'
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
	'.mdl-layout__header-row>*': {
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
		color: '#fff',
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
		transitionDuration: '.2s',
		transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)'
	},
	'.mdl-layout__obfuscator.is-visible': {
		backgroundColor: 'rgba(0,0,0,.5)',
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
	'.mdl-layout--fixed-drawer>.mdl-layout__content': {
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
		backgroundColor: '#3f51b5',
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
	'.mdl-layout__container>.mdl-layout__tab-bar-container': {
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
		backgroundColor: '#3f51b5',
		color: 'transparent',
		cursor: 'pointer',
		WebkitUserSelect: 'none',
		MozUserSelect: 'none',
		msUserSelect: 'none',
		userSelect: 'none'
	},
	'.mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar-button,.mdl-layout--no-drawer-button .mdl-layout__tab-bar-button': {
		width: 16
	},
	'.mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar-button .material-icons,.mdl-layout--no-drawer-button .mdl-layout__tab-bar-button .material-icons': {
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
		color: '#fff'
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
		padding: '0 24px',
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
		color: 'rgba(255,255,255,.6)',
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
		color: '#fff'
	},
	'.mdl-layout.is-upgraded .mdl-layout__tab.is-active::after': {
		height: 2,
		width: '100%',
		display: 'block',
		content: '" "',
		bottom: 0,
		left: 0,
		position: 'absolute',
		background: '#ff4081',
		WebkitAnimation: 'border-expand .2s cubic-bezier(.4,0,.4,1).01s alternate forwards',
		animation: 'border-expand .2s cubic-bezier(.4,0,.4,1).01s alternate forwards',
		transition: 'all 1s cubic-bezier(.4,0,1,1)'
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
		backgroundColor: '#fff'
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
		border: '2px solid rgba(0,0,0,.54)',
		borderRadius: '50%',
		zIndex: 2
	},
	'.mdl-radio.is-checked .mdl-radio__outer-circle': {
		border: '2px solid #3f51b5'
	},
	'.mdl-radio__outer-circle fieldset[disabled] .mdl-radio,.mdl-radio.is-disabled .mdl-radio__outer-circle': {
		border: '2px solid rgba(0,0,0,.26)',
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
		transitionDuration: '.28s',
		transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
		transitionProperty: 'transform,-webkit-transform',
		WebkitTransform: 'scale3d(0,0,0)',
		transform: 'scale3d(0,0,0)',
		borderRadius: '50%',
		background: '#3f51b5'
	},
	'.mdl-radio.is-checked .mdl-radio__inner-circle': {
		WebkitTransform: 'scale3d(1,1,1)',
		transform: 'scale3d(1,1,1)'
	},
	'fieldset[disabled] .mdl-radio .mdl-radio__inner-circle,.mdl-radio.is-disabled .mdl-radio__inner-circle': {
		background: 'rgba(0,0,0,.26)',
		cursor: 'auto'
	},
	'.mdl-radio.is-focused .mdl-radio__inner-circle': {
		boxShadow: '0 0 0 10px rgba(0,0,0,.1)'
	},
	'.mdl-radio__label': {
		cursor: 'pointer'
	},
	'fieldset[disabled] .mdl-radio .mdl-radio__label,.mdl-radio.is-disabled .mdl-radio__label': {
		color: 'rgba(0,0,0,.26)',
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
		WebkitMaskImage: '-webkit-radial-gradient(circle,#fff,#000)'
	},
	'.mdl-radio__ripple-container .mdl-ripple': {
		background: '#3f51b5'
	},
	'fieldset[disabled] .mdl-radio .mdl-radio__ripple-container,.mdl-radio.is-disabled .mdl-radio__ripple-container': {
		cursor: 'auto'
	},
	'fieldset[disabled] .mdl-radio .mdl-radio__ripple-container .mdl-ripple,.mdl-radio.is-disabled .mdl-radio__ripple-container .mdl-ripple': {
		background: '0 0'
	},
	'_:-ms-input-placeholder,:root .mdl-slider.mdl-slider.is-upgraded': {
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
		background: '0 0',
		WebkitUserSelect: 'none',
		MozUserSelect: 'none',
		msUserSelect: 'none',
		userSelect: 'none',
		outline: 0,
		padding: 0,
		color: '#3f51b5',
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
		background: '0 0'
	},
	'.mdl-slider.is-upgraded::-moz-range-track': {
		background: '0 0',
		border: 'none'
	},
	'.mdl-slider.is-upgraded::-ms-track': {
		background: '0 0',
		color: 'transparent',
		height: 2,
		width: '100%',
		border: 'none'
	},
	'.mdl-slider.is-upgraded::-ms-fill-lower': {
		padding: 0,
		background: 'linear-gradient(to right,transparent,transparent 16px,#3f51b5 16px,#3f51b5 0)'
	},
	'.mdl-slider.is-upgraded::-ms-fill-upper': {
		padding: 0,
		background: 'linear-gradient(to left,transparent,transparent 16px,rgba(0,0,0,.26)16px,rgba(0,0,0,.26)0)'
	},
	'.mdl-slider.is-upgraded::-webkit-slider-thumb': {
		WebkitAppearance: 'none',
		width: 12,
		height: 12,
		boxSizing: 'border-box',
		borderRadius: '50%',
		background: '#3f51b5',
		border: 'none',
		transition: 'transform .18s cubic-bezier(.4,0,.2,1),border .18s cubic-bezier(.4,0,.2,1),box-shadow .18s cubic-bezier(.4,0,.2,1),background .28s cubic-bezier(.4,0,.2,1),-webkit-transform .18s cubic-bezier(.4,0,.2,1)'
	},
	'.mdl-slider.is-upgraded::-moz-range-thumb': {
		MozAppearance: 'none',
		width: 12,
		height: 12,
		boxSizing: 'border-box',
		borderRadius: '50%',
		backgroundImage: 'none',
		background: '#3f51b5',
		border: 'none'
	},
	'.mdl-slider.is-upgraded:focus:not(:active)::-webkit-slider-thumb': {
		boxShadow: '0 0 0 10px rgba(63,81,181,.26)'
	},
	'.mdl-slider.is-upgraded:focus:not(:active)::-moz-range-thumb': {
		boxShadow: '0 0 0 10px rgba(63,81,181,.26)'
	},
	'.mdl-slider.is-upgraded:active::-webkit-slider-thumb': {
		backgroundImage: 'none',
		background: '#3f51b5',
		WebkitTransform: 'scale(1.5)',
		transform: 'scale(1.5)'
	},
	'.mdl-slider.is-upgraded:active::-moz-range-thumb': {
		backgroundImage: 'none',
		background: '#3f51b5',
		transform: 'scale(1.5)'
	},
	'.mdl-slider.is-upgraded::-ms-thumb': {
		width: 32,
		height: 32,
		border: 'none',
		borderRadius: '50%',
		background: '#3f51b5',
		transform: 'scale(.375)',
		transition: 'transform .18s cubic-bezier(.4,0,.2,1),background .28s cubic-bezier(.4,0,.2,1),-webkit-transform .18s cubic-bezier(.4,0,.2,1)'
	},
	'.mdl-slider.is-upgraded:focus:not(:active)::-ms-thumb': {
		background: 'radial-gradient(circle closest-side,#3f51b5 0%,#3f51b5 37.5%,rgba(63,81,181,.26)37.5%,rgba(63,81,181,.26)100%)',
		transform: 'scale(1)'
	},
	'.mdl-slider.is-upgraded:active::-ms-thumb': {
		background: '#3f51b5',
		transform: 'scale(.5625)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value::-webkit-slider-thumb': {
		border: '2px solid rgba(0,0,0,.26)',
		background: '0 0'
	},
	'.mdl-slider.is-upgraded.is-lowest-value::-moz-range-thumb': {
		border: '2px solid rgba(0,0,0,.26)',
		background: '0 0'
	},
	'.mdl-slider.is-upgraded.is-lowest-value+.mdl-slider__background-flex>.mdl-slider__background-upper': {
		left: 6
	},
	'.mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-webkit-slider-thumb': {
		boxShadow: '0 0 0 10px rgba(0,0,0,.12)',
		background: 'rgba(0,0,0,.12)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-moz-range-thumb': {
		boxShadow: '0 0 0 10px rgba(0,0,0,.12)',
		background: 'rgba(0,0,0,.12)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:active::-webkit-slider-thumb': {
		border: '1.6px solid rgba(0,0,0,.26)',
		WebkitTransform: 'scale(1.5)',
		transform: 'scale(1.5)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:active+.mdl-slider__background-flex>.mdl-slider__background-upper': {
		left: 9
	},
	'.mdl-slider.is-upgraded.is-lowest-value:active::-moz-range-thumb': {
		border: '1.5px solid rgba(0,0,0,.26)',
		transform: 'scale(1.5)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value::-ms-thumb': {
		background: 'radial-gradient(circle closest-side,transparent 0%,transparent 66.67%,rgba(0,0,0,.26)66.67%,rgba(0,0,0,.26)100%)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-ms-thumb': {
		background: 'radial-gradient(circle closest-side,rgba(0,0,0,.12)0%,rgba(0,0,0,.12)25%,rgba(0,0,0,.26)25%,rgba(0,0,0,.26)37.5%,rgba(0,0,0,.12)37.5%,rgba(0,0,0,.12)100%)',
		transform: 'scale(1)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:active::-ms-thumb': {
		transform: 'scale(.5625)',
		background: 'radial-gradient(circle closest-side,transparent 0%,transparent 77.78%,rgba(0,0,0,.26)77.78%,rgba(0,0,0,.26)100%)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value::-ms-fill-lower': {
		background: '0 0'
	},
	'.mdl-slider.is-upgraded.is-lowest-value::-ms-fill-upper': {
		marginLeft: 6
	},
	'.mdl-slider.is-upgraded.is-lowest-value:active::-ms-fill-upper': {
		marginLeft: 9
	},
	'.mdl-slider.is-upgraded:disabled:focus::-webkit-slider-thumb,.mdl-slider.is-upgraded:disabled:active::-webkit-slider-thumb,.mdl-slider.is-upgraded:disabled::-webkit-slider-thumb': {
		WebkitTransform: 'scale(.667)',
		transform: 'scale(.667)',
		background: 'rgba(0,0,0,.26)'
	},
	'.mdl-slider.is-upgraded:disabled:focus::-moz-range-thumb,.mdl-slider.is-upgraded:disabled:active::-moz-range-thumb,.mdl-slider.is-upgraded:disabled::-moz-range-thumb': {
		transform: 'scale(.667)',
		background: 'rgba(0,0,0,.26)'
	},
	'.mdl-slider.is-upgraded:disabled+.mdl-slider__background-flex>.mdl-slider__background-lower': {
		backgroundColor: 'rgba(0,0,0,.26)',
		left: -6
	},
	'.mdl-slider.is-upgraded:disabled+.mdl-slider__background-flex>.mdl-slider__background-upper': {
		left: 6
	},
	'.mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-webkit-slider-thumb,.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-webkit-slider-thumb,.mdl-slider.is-upgraded.is-lowest-value:disabled::-webkit-slider-thumb': {
		border: '3px solid rgba(0,0,0,.26)',
		background: '0 0',
		WebkitTransform: 'scale(.667)',
		transform: 'scale(.667)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-moz-range-thumb,.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-moz-range-thumb,.mdl-slider.is-upgraded.is-lowest-value:disabled::-moz-range-thumb': {
		border: '3px solid rgba(0,0,0,.26)',
		background: '0 0',
		transform: 'scale(.667)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:disabled:active+.mdl-slider__background-flex>.mdl-slider__background-upper': {
		left: 6
	},
	'.mdl-slider.is-upgraded:disabled:focus::-ms-thumb,.mdl-slider.is-upgraded:disabled:active::-ms-thumb,.mdl-slider.is-upgraded:disabled::-ms-thumb': {
		transform: 'scale(.25)',
		background: 'rgba(0,0,0,.26)'
	},
	'.mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-ms-thumb,.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-ms-thumb,.mdl-slider.is-upgraded.is-lowest-value:disabled::-ms-thumb': {
		transform: 'scale(.25)',
		background: 'radial-gradient(circle closest-side,transparent 0%,transparent 50%,rgba(0,0,0,.26)50%,rgba(0,0,0,.26)100%)'
	},
	'.mdl-slider.is-upgraded:disabled::-ms-fill-lower': {
		marginRight: 6,
		background: 'linear-gradient(to right,transparent,transparent 25px,rgba(0,0,0,.26)25px,rgba(0,0,0,.26)0)'
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
		WebkitFlexDirection: 'row',
		msFlexDirection: 'row',
		flexDirection: 'row'
	},
	'.mdl-slider__container,.mdl-slider__background-flex': {
		background: '0 0',
		display: 'flex'
	},
	'.mdl-slider__background-flex': {
		position: 'absolute',
		height: 2,
		width: 'calc(100% - 52px)',
		top: '50%',
		left: 0,
		margin: '0 26px',
		overflow: 'hidden',
		border: 0,
		padding: 0,
		WebkitTransform: NaN,
		transform: NaN
	},
	'.mdl-slider__background-lower': {
		background: '#3f51b5'
	},
	'.mdl-slider__background-lower,.mdl-slider__background-upper': {
		WebkitFlex: 0,
		msFlex: 0,
		flex: 0,
		position: 'relative',
		border: 0,
		padding: 0
	},
	'.mdl-slider__background-upper': {
		background: 'rgba(0,0,0,.26)',
		transition: 'left .18s cubic-bezier(.4,0,.2,1)'
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
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		willChange: 'transform',
		WebkitTransform: NaN,
		transform: NaN,
		transition: 'transform .25s cubic-bezier(.4,0,1,1),-webkit-transform .25s cubic-bezier(.4,0,1,1)',
		pointerEvents: 'none'
	},
	'.mdl-snackbar--active': {
		WebkitTransform: 'translate(0,0)',
		transform: 'translate(0,0)',
		pointerEvents: 'auto',
		transition: 'transform .25s cubic-bezier(0,0,.2,1),-webkit-transform .25s cubic-bezier(0,0,.2,1)'
	},
	'.mdl-snackbar__text': {
		padding: '14px 12px 14px 24px',
		verticalAlign: 'middle',
		color: '#fff',
		float: 'left'
	},
	'.mdl-snackbar__action': {
		background: '0 0',
		border: 'none',
		color: '#ff4081',
		float: 'right',
		padding: '14px 24px 14px 12px',
		fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
		fontSize: 14,
		fontWeight: 500,
		textTransform: 'uppercase',
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
		borderColor: '#42a5f5'
	},
	'.mdl-spinner--single-color .mdl-spinner__layer-1': {
		borderColor: '#3f51b5'
	},
	'.mdl-spinner.is-active .mdl-spinner__layer-1': {
		WebkitAnimation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both',
		animation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both'
	},
	'.mdl-spinner__layer-2': {
		borderColor: '#f44336'
	},
	'.mdl-spinner--single-color .mdl-spinner__layer-2': {
		borderColor: '#3f51b5'
	},
	'.mdl-spinner.is-active .mdl-spinner__layer-2': {
		WebkitAnimation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both',
		animation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both'
	},
	'.mdl-spinner__layer-3': {
		borderColor: '#fdd835'
	},
	'.mdl-spinner--single-color .mdl-spinner__layer-3': {
		borderColor: '#3f51b5'
	},
	'.mdl-spinner.is-active .mdl-spinner__layer-3': {
		WebkitAnimation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both',
		animation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both'
	},
	'.mdl-spinner__layer-4': {
		borderColor: '#4caf50'
	},
	'.mdl-spinner--single-color .mdl-spinner__layer-4': {
		borderColor: '#3f51b5'
	},
	'.mdl-spinner.is-active .mdl-spinner__layer-4': {
		WebkitAnimation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both',
		animation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1)infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1)infinite both'
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
		WebkitAnimation: 'mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1)infinite both',
		animation: 'mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1)infinite both'
	},
	'.mdl-spinner__right .mdl-spinner__circle': {
		left: '-100%',
		borderLeftColor: 'transparent',
		WebkitTransform: 'rotate(-129deg)',
		transform: 'rotate(-129deg)'
	},
	'.mdl-spinner.is-active .mdl-spinner__right .mdl-spinner__circle': {
		WebkitAnimation: 'mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1)infinite both',
		animation: 'mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1)infinite both'
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
		background: 'rgba(0,0,0,.26)',
		position: 'absolute',
		left: 0,
		top: 5,
		height: 14,
		width: 36,
		borderRadius: 14,
		cursor: 'pointer'
	},
	'.mdl-switch.is-checked .mdl-switch__track': {
		background: 'rgba(63,81,181,.5)'
	},
	'.mdl-switch__track fieldset[disabled] .mdl-switch,.mdl-switch.is-disabled .mdl-switch__track': {
		background: 'rgba(0,0,0,.12)',
		cursor: 'auto'
	},
	'.mdl-switch__thumb': {
		background: '#fafafa',
		position: 'absolute',
		left: 0,
		top: 2,
		height: 20,
		width: 20,
		borderRadius: '50%',
		cursor: 'pointer',
		boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
		transitionDuration: '.28s',
		transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
		transitionProperty: 'left'
	},
	'.mdl-switch.is-checked .mdl-switch__thumb': {
		background: '#3f51b5',
		left: 16,
		boxShadow: '0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)'
	},
	'.mdl-switch__thumb fieldset[disabled] .mdl-switch,.mdl-switch.is-disabled .mdl-switch__thumb': {
		background: '#bdbdbd',
		cursor: 'auto'
	},
	'.mdl-switch__focus-helper': {
		position: 'absolute',
		top: '50%',
		left: '50%',
		WebkitTransform: NaN,
		transform: NaN,
		display: 'inline-block',
		boxSizing: 'border-box',
		width: 8,
		height: 8,
		borderRadius: '50%',
		backgroundColor: 'transparent'
	},
	'.mdl-switch.is-focused .mdl-switch__focus-helper': {
		boxShadow: '0 0 0 20px rgba(0,0,0,.1)',
		backgroundColor: 'rgba(0,0,0,.1)'
	},
	'.mdl-switch.is-focused.is-checked .mdl-switch__focus-helper': {
		boxShadow: '0 0 0 20px rgba(63,81,181,.26)',
		backgroundColor: 'rgba(63,81,181,.26)'
	},
	'.mdl-switch__label': {
		position: 'relative',
		cursor: 'pointer',
		fontSize: 16,
		lineHeight: 24,
		margin: 0,
		left: 24
	},
	'.mdl-switch__label fieldset[disabled] .mdl-switch,.mdl-switch.is-disabled .mdl-switch__label': {
		color: '#bdbdbd',
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
		WebkitMaskImage: '-webkit-radial-gradient(circle,#fff,#000)',
		transitionDuration: '.4s',
		transitionTimingFunction: 'step-end',
		transitionProperty: 'left'
	},
	'.mdl-switch__ripple-container .mdl-ripple': {
		background: '#3f51b5'
	},
	'.mdl-switch__ripple-container fieldset[disabled] .mdl-switch,.mdl-switch.is-disabled .mdl-switch__ripple-container': {
		cursor: 'auto'
	},
	'fieldset[disabled] .mdl-switch .mdl-switch__ripple-container .mdl-ripple,.mdl-switch.is-disabled .mdl-switch__ripple-container .mdl-ripple': {
		background: '0 0'
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
		padding: 0,
		margin: 0,
		borderBottom: '1px solid #e0e0e0'
	},
	'.mdl-tabs__tab': {
		margin: 0,
		border: 'none',
		padding: '0 24px',
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
		color: 'rgba(0,0,0,.54)',
		overflow: 'hidden'
	},
	'.mdl-tabs.is-upgraded .mdl-tabs__tab.is-active': {
		color: 'rgba(0,0,0,.87)'
	},
	'.mdl-tabs.is-upgraded .mdl-tabs__tab.is-active:after': {
		height: 2,
		width: '100%',
		display: 'block',
		content: '" "',
		bottom: 0,
		left: 0,
		position: 'absolute',
		background: '#3f51b5',
		WebkitAnimation: 'border-expand .2s cubic-bezier(.4,0,.4,1).01s alternate forwards',
		animation: 'border-expand .2s cubic-bezier(.4,0,.4,1).01s alternate forwards',
		transition: 'all 1s cubic-bezier(.4,0,1,1)'
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
		background: '#3f51b5'
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
		borderBottom: '1px solid rgba(0,0,0,.12)',
		display: 'block',
		fontSize: 16,
		fontFamily: '"Helvetica","Arial",sans-serif',
		margin: 0,
		padding: '4px 0',
		width: '100%',
		background: '0 0',
		textAlign: 'left',
		color: 'inherit'
	},
	'.mdl-textfield__input[type="number"]': {
		MozAppearance: 'textfield'
	},
	'.mdl-textfield__input[type="number"]::-webkit-inner-spin-button,.mdl-textfield__input[type="number"]::-webkit-outer-spin-button': {
		WebkitAppearance: 'none',
		margin: 0
	},
	'.mdl-textfield.is-focused .mdl-textfield__input': {
		outline: 'none'
	},
	'.mdl-textfield.is-invalid .mdl-textfield__input': {
		borderColor: '#d50000',
		boxShadow: 'none'
	},
	'fieldset[disabled] .mdl-textfield .mdl-textfield__input,.mdl-textfield.is-disabled .mdl-textfield__input': {
		backgroundColor: 'transparent',
		borderBottom: '1px dotted rgba(0,0,0,.12)',
		color: 'rgba(0,0,0,.26)'
	},
	'.mdl-textfield textarea.mdl-textfield__input': {
		display: 'block'
	},
	'.mdl-textfield__label': {
		bottom: 0,
		color: 'rgba(0,0,0,.26)',
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
	'.mdl-textfield.is-dirty .mdl-textfield__label,.mdl-textfield.has-placeholder .mdl-textfield__label': {
		visibility: 'hidden'
	},
	'.mdl-textfield--floating-label .mdl-textfield__label': {
		transitionDuration: '.2s',
		transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)'
	},
	'.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label': {
		transition: 'none'
	},
	'fieldset[disabled] .mdl-textfield .mdl-textfield__label,.mdl-textfield.is-disabled.is-disabled .mdl-textfield__label': {
		color: 'rgba(0,0,0,.26)'
	},
	'.mdl-textfield--floating-label.is-focused .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label': {
		color: '#3f51b5',
		fontSize: 12,
		top: 4,
		visibility: 'visible'
	},
	'.mdl-textfield--floating-label.is-focused .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.has-placeholder .mdl-textfield__expandable-holder .mdl-textfield__label': {
		top: -16
	},
	'.mdl-textfield--floating-label.is-invalid .mdl-textfield__label': {
		color: '#d50000',
		fontSize: 12
	},
	'.mdl-textfield__label:after': {
		backgroundColor: '#3f51b5',
		bottom: 20,
		content: '\'\'',
		height: 2,
		left: '45%',
		position: 'absolute',
		transitionDuration: '.2s',
		transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
		visibility: 'hidden',
		width: 10
	},
	'.mdl-textfield.is-focused .mdl-textfield__label:after': {
		left: 0,
		visibility: 'visible',
		width: '100%'
	},
	'.mdl-textfield.is-invalid .mdl-textfield__label:after': {
		backgroundColor: '#d50000'
	},
	'.mdl-textfield__error': {
		color: '#d50000',
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
		transitionDuration: '.2s',
		transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
		maxWidth: NaN
	},
	'.mdl-textfield.is-focused .mdl-textfield__expandable-holder,.mdl-textfield.is-dirty .mdl-textfield__expandable-holder': {
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
		background: 'rgba(97,97,97,.9)',
		borderRadius: 2,
		color: '#fff',
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
		WebkitAnimation: 'pulse 200ms cubic-bezier(0,0,.2,1)forwards',
		animation: 'pulse 200ms cubic-bezier(0,0,.2,1)forwards'
	},
	'.mdl-tooltip--large': {
		lineHeight: 14,
		fontSize: 14,
		padding: 16
	},
	'.mdl-shadow--2dp': {
		boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)'
	},
	'.mdl-shadow--3dp': {
		boxShadow: '0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)'
	},
	'.mdl-shadow--4dp': {
		boxShadow: '0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)'
	},
	'.mdl-shadow--6dp': {
		boxShadow: '0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)'
	},
	'.mdl-shadow--8dp': {
		boxShadow: '0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)'
	},
	'.mdl-shadow--16dp': {
		boxShadow: '0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)'
	},
	'.mdl-shadow--24dp': {
		boxShadow: '0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2)'
	},
	'.mdl-grid': {
		display: 'flex',
		WebkitFlexFlow: 'row wrap',
		msFlexFlow: 'row wrap',
		flexFlow: 'row wrap',
		margin: '0 auto',
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
	'.mdl-grid.mdl-grid--no-spacing>.mdl-cell': {
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

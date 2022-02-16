

require('./bootstrap');

import { createApp} from 'vue';
import ExampleComponent from './components_old/ExampleComponent';
import ToastService from 'primevue/toastservice';
//primeview

import PrimeVue from 'primevue/config';

import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'
import '@fullcalendar/core/main.min.css';
import '@fullcalendar/daygrid/main.min.css';
import '@fullcalendar/timegrid/main.min.css';
import 'prismjs/themes/prism-coy.css';

import Menu from 'primevue/menu';
import Accordion from 'primevue/accordion'
import Tooltip from 'primevue/tooltip';
import Ripple from 'primevue/ripple';
import BadgeDirective from 'primevue/badgedirective';
import CodeHighlight from './AppCodeHighlight';
import AppMenu from './AppMenu';
import AppNavBar from './AppNavBar'
import SplitButton from 'primevue/splitbutton';
import MenuBar from 'primevue/menubar';
import ProfileMenu from './components/ProfileMenu'
import BreadCrumbMain from './components/BreadCrumbMain'
import Breadcrumb  from 'primevue/breadcrumb';
import CrudClientes from './pages/CrudClientes';
import NotificationBell from './components/widgets/NotificationBell';
// import ArticulosEdicionMasiva from './components/ArticulosEdicionMasiva';
//abms *************
import ArticulosBase from './pages/abms/ArticulosBase';
import GruposAbm from './pages/abms/GruposAbm';
import MarcasAbm from './pages/abms/MarcasAbm';
import ProveedoresAbm from './pages/abms/ProveedoresAbm';
import ClientesAbm from './pages/abms/ClientesAbm';
import StockAbm from './pages/abms/StockAbm';
import MediosAbm from './pages/abms/MediosAbm';
import OverlayPanel from 'primevue/overlaypanel';
import ActividadAbm from './pages/abms/ActividadAbm';
import PromocionesAbm from './pages/abms/PromocionesAbm';
import NivelesAbm from './pages/abms/NivelesAbm';
import AjaxPdfManager from './components/AjaxPdfManager.vue'
//
import InlineMessage from 'primevue/inlinemessage';
import RadioButton from 'primevue/radiobutton';
import RadioButtonSlide from './components/widgets/RadioButtonSlide.vue';
import ServerStatusButton from './components/widgets/ServerStatusButton.vue';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog';
import Tag from 'primevue/tag';
import Login from './pages/Login';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext'
import Dashboard from './components/Dashboard'
import Chart from 'primevue/chart';
import DataTable from 'primevue/datatable';
import CrudSucursales from './pages/CrudSucursales';
import Toolbar from 'primevue/toolbar';
import Dialog from 'primevue/dialog';
import Column from 'primevue/column';
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import InputSwitch from 'primevue/inputswitch'
import InputNumber from 'primevue/inputnumber';
import InputMask from 'primevue/inputmask';
import ClienteStatusButton from './components/ClienteStatusButton'
import NotFound from './pages/NotFound';
import SucursalStatusButton from './components/SucursalStatusButton';
import ClientBySucursal from './pages/ClientBySucursal';
import VencimientoStatus from './components/widgets/VencimientoStatus';
import CrudUsuarios from './pages/CrudUsuarios';
import Dropdown from 'primevue/dropdown';
import LogoutButton from './components/widgets/LogoutButton'
import DashboardGeneric from './components/DashboardGeneric';
import DashboardNew from './pages/DashboardNew';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
//import ReportsMenu from './pages/ReportsMenu';
import MultiSelect from 'primevue/multiselect';
import BaseReport from './pages/reports/BaseReport';
import ReportsNewMenu from './pages/ReportsNewMenu';
import Chip from 'primevue/chip';
import ProgressSpinner from 'primevue/progressspinner'
import Checkbox from 'primevue/checkbox';
import CrudPlanes from './pages/CrudPlanes'
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp({});

app.use(PrimeVue, {
    ripple: true ,
    locale: {
        startsWith: 'Starts with',
        contains: 'Contains',
        notContains: 'Not contains',
        endsWith: 'Ends with',
        equals: 'Equals',
        notEquals: 'Not equals',
        noFilter: 'No Filter',
        lt: 'Less than',
        lte: 'Less than or equal to',
        gt: 'Greater than',
        gte: 'Greater than or equal to',
        dateIs: 'Date is',
        dateIsNot: 'Date is not',
        dateBefore: 'Date is before',
        dateAfter: 'Date is after',
        clear: 'Clear',
        apply: 'Apply',
        matchAll: 'Match All',
        matchAny: 'Match Any',
        addRule: 'Add Rule',
        removeRule: 'Remove Rule',
        accept: 'Yes',
        reject: 'No',
        choose: 'Choose',
        upload: 'Upload',
        cancel: 'Cancel',
        dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        dayNamesMin:["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
        monthNames:["Enero", "Febrero", "Marzo", "Abril",
                    "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }
});
app.use(ToastService);
app.use(ConfirmationService);

app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);
app.directive('code', CodeHighlight);
app.directive('badge', BadgeDirective);
// app.directive('update', UpdateDirective);


//abms *****
app.component('ArticulosBase', ArticulosBase);
app.component('GruposAbm', GruposAbm);
app.component('MarcasAbm', MarcasAbm);
app.component('ProveedoresAbm', ProveedoresAbm);
app.component( 'CrudPlanes', CrudPlanes);
app.component('ClientesAbm', ClientesAbm);
app.component('StockAbm', StockAbm);
app.component('MediosAbm', MediosAbm);
app.component('PromocionesAbm', PromocionesAbm);
app.component('NivelesAbm', NivelesAbm);

// app.component('ArticulosEdicionMasiva', ArticulosEdicionMasiva);
app.component('AjaxPdfManager', AjaxPdfManager);
app.component('DashboardNew', DashboardNew),
app.component('TabView', TabView),
app.component('TabPanel', TabPanel);
app.component('MultiSelect', MultiSelect);
app.component('ActividadAbm', ActividadAbm),
app.component('DashboardGeneric', DashboardGeneric );
app.component('OverlayPanel',OverlayPanel);
app.component('NotificationBell', NotificationBell);
app.component('BaseReport', BaseReport);
app.component('ReportsNewMenu', ReportsNewMenu),
app.component('InputMask', InputMask);
app.component('Checkbox', Checkbox);
app.component('InputNumber', InputNumber);
app.component('Tag', Tag);
app.component('ProgressSpinner', ProgressSpinner);
app.component('Chip', Chip);
app.component('RadioButton', RadioButton);
//app.component('ReportsMenu', ReportsMenu);
app.component('InlineMessage', InlineMessage);
app.component('LogoutButton',LogoutButton);
app.component('Dropdown', Dropdown);
app.component('CrudUsuarios', CrudUsuarios);
app.component('VencimientoStatus', VencimientoStatus);
app.component('ClientBySucursal', ClientBySucursal);
app.component('SucursalStatusButton', SucursalStatusButton);
app.component('NotFound', NotFound);
app.component('ClienteStatusButton', ClienteStatusButton);
app.component('InputSwitch' , InputSwitch);
app.component('ServerStatusButton',ServerStatusButton);
app.component('Toast', Toast);
app.component('ConfirmDialog', ConfirmDialog);
app.component('Calendar', Calendar);
app.component('Textarea', Textarea);
app.component('Column', Column);
app.component('Dialog', Dialog);
app.component('Toolbar', Toolbar);
app.component('CrudSucursales', CrudSucursales)
app.component('DataTable', DataTable);
app.component('Chart', Chart);
app.component('Dashboard',Dashboard);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Login', Login);
app.component('RadioButtonSlide', RadioButtonSlide);
app.component('CrudClientes', CrudClientes);
app.component('BreadCrumb', Breadcrumb);
app.component('BreadCrumbMain', BreadCrumbMain);
app.component('ProfileMenu', ProfileMenu);
app.component('SplitButton', SplitButton);
app.component('AppNavBar', AppNavBar);
app.component('AppMenu', AppMenu),
app.component('MenuBar', MenuBar);
app.component('Accordion', Accordion);
app.component('Menu', Menu);
app.component('ExampleComponent', ExampleComponent);
app.mount('#app');

// import PrimeVue from 'primevue/config';
// import AutoComplete from 'primevue/autocomplete';
// import Accordion from 'primevue/accordion';
// import AccordionTab from 'primevue/accordiontab';
// import Avatar from 'primevue/avatar';
// import AvatarGroup from 'primevue/avatargroup';
// import Badge from 'primevue/badge';
// import BadgeDirective from 'primevue/badgedirective';
// import Button from 'primevue/button';
// import Breadcrumb from 'primevue/breadcrumb';
// import Calendar from 'primevue/calendar';
// import Card from 'primevue/card';
// import Carousel from 'primevue/carousel';
// import Chart from 'primevue/chart';
// import Checkbox from 'primevue/checkbox';
// import Chip from 'primevue/chip';
// import Chips from 'primevue/chips';
// import ColorPicker from 'primevue/colorpicker';
// import Column from 'primevue/column';
// import ConfirmDialog from 'primevue/confirmdialog';
// import ConfirmPopup from 'primevue/confirmpopup';
// import ConfirmationService from 'primevue/confirmationservice';
// import ContextMenu from 'primevue/contextmenu';
// import DataTable from 'primevue/datatable';
// import DataView from 'primevue/dataview';
// import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
// import Dialog from 'primevue/dialog';
// import Divider from 'primevue/divider';
// import Dropdown from 'primevue/dropdown';
// import Fieldset from 'primevue/fieldset';
// import FileUpload from 'primevue/fileupload';
// import FullCalendar from 'primevue/fullcalendar';
// import InlineMessage from 'primevue/inlinemessage';
// import Inplace from 'primevue/inplace';
// import InputMask from 'primevue/inputmask';
// import InputNumber from 'primevue/inputnumber';
// import InputSwitch from 'primevue/inputswitch';
// import InputText from 'primevue/inputtext';
// import Knob from 'primevue/knob';
// import Galleria from 'primevue/galleria';
// import Listbox from 'primevue/listbox';
// import MegaMenu from 'primevue/megamenu';
// import Menu from 'primevue/menu';
// import Menubar from 'primevue/menubar';
// import Message from 'primevue/message';
// import MultiSelect from 'primevue/multiselect';
// import OrderList from 'primevue/orderlist';
// import OrganizationChart from 'primevue/organizationchart';
// import OverlayPanel from 'primevue/overlaypanel';
// import Paginator from 'primevue/paginator';
// import Panel from 'primevue/panel';
// import PanelMenu from 'primevue/panelmenu';
// import Password from 'primevue/password';
// import PickList from 'primevue/picklist';
// import ProgressBar from 'primevue/progressbar';
// import Rating from 'primevue/rating';
// import RadioButton from 'primevue/radiobutton';
// import Ripple from 'primevue/ripple';
// import SelectButton from 'primevue/selectbutton';
// import ScrollPanel from 'primevue/scrollpanel'
// import ScrollTop from 'primevue/scrolltop';
// import Slider from 'primevue/slider';
// import Sidebar from 'primevue/sidebar';
// import Skeleton from 'primevue/skeleton';
// import SplitButton from 'primevue/splitbutton';
// import Splitter from 'primevue/splitter';
// import SplitterPanel from 'primevue/splitterpanel';
// import Steps from 'primevue/steps';
// import TabMenu from 'primevue/tabmenu';
// import Tag from 'primevue/tag';
// import TieredMenu from 'primevue/tieredmenu';
// import Textarea from 'primevue/textarea';
// import Timeline from 'primevue/timeline';
// import Toast from 'primevue/toast';
// import ToastService from 'primevue/toastservice';
// import Toolbar from 'primevue/toolbar';
// import TabView from 'primevue/tabview';
// import TabPanel from 'primevue/tabpanel';
// import Tooltip from 'primevue/tooltip';
// import ToggleButton from 'primevue/togglebutton';
// import Tree from 'primevue/tree';
// import TreeTable from 'primevue/treetable';
// import TriStateCheckbox from 'primevue/tristatecheckbox';

// import CodeHighlight from './AppCodeHighlight';

// import 'primevue/resources/primevue.min.css';
// import 'primeflex/primeflex.css';
// import 'primeicons/primeicons.css'
// import '@fullcalendar/core/main.min.css';
// import '@fullcalendar/daygrid/main.min.css';
// import '@fullcalendar/timegrid/main.min.css';
// import 'prismjs/themes/prism-coy.css';

// router.beforeEach(function(to, from, next) {
//     window.scrollTo(0, 0);
//     next();
// });

// import Access from './pages/Access';
// import Error from './pages/Error';
// import Login from './pages/Login';
// import NotFound from './pages/NotFound';
// import Wizard from './pages/Wizard';
// const app = createApp({
//     computed: {
//         ViewComponent () {
// 			switch (this.$route.path) {
// 				case '/login':
// 					return Login;
// 				case '/error':
// 					return Error;
// 				case '/access':
// 					return Access;
// 				case '/notfound':
// 					return NotFound;
// 				case '/wizard':
// 					return Wizard;
// 				default:
// 					return App;
// 			}
// 		}
//     },
//     render () { return h(this.ViewComponent) }
// });

// app.config.globalProperties.$appState = reactive({ inputStyle: 'outlined' });

// app.use(PrimeVue, { ripple: true });
// app.use(ConfirmationService);
// app.use(ToastService);
// app.use(router);

// app.directive('tooltip', Tooltip);
// app.directive('ripple', Ripple);
// app.directive('code', CodeHighlight);
// app.directive('badge', BadgeDirective);

// app.component('Accordion', Accordion);
// app.component('AccordionTab', AccordionTab);
// app.component('AutoComplete', AutoComplete);
// app.component('Avatar', Avatar);
// app.component('AvatarGroup', AvatarGroup);
// app.component('Badge', Badge);
// app.component('Breadcrumb', Breadcrumb);
// app.component('Button', Button);
// app.component('Calendar', Calendar);
// app.component('Card', Card);
// app.component('Carousel', Carousel);
// app.component('Chart', Chart);
// app.component('Checkbox', Checkbox);
// app.component('Chip', Chip);
// app.component('Chips', Chips);
// app.component('ColorPicker', ColorPicker);
// app.component('Column', Column);
// app.component('ConfirmDialog', ConfirmDialog);
// app.component('ConfirmPopup', ConfirmPopup);
// app.component('ContextMenu', ContextMenu);
// app.component('DataTable', DataTable);
// app.component('DataView', DataView);
// app.component('DataViewLayoutOptions', DataViewLayoutOptions);
// app.component('Dialog', Dialog);
// app.component('Divider', Divider);
// app.component('Dropdown', Dropdown);
// app.component('Fieldset', Fieldset);
// app.component('FileUpload', FileUpload);
// app.component('FullCalendar', FullCalendar);
// app.component('InlineMessage', InlineMessage);
// app.component('Inplace', Inplace);
// app.component('InputMask', InputMask);
// app.component('InputNumber', InputNumber);
// app.component('InputSwitch', InputSwitch);
// app.component('InputText', InputText);
// app.component('Galleria', Galleria);
// app.component('Knob', Knob);
// app.component('Listbox', Listbox);
// app.component('MegaMenu', MegaMenu);
// app.component('Menu', Menu);
// app.component('Menubar', Menubar);
// app.component('Message', Message);
// app.component('MultiSelect', MultiSelect);
// app.component('OrderList', OrderList);
// app.component('OrganizationChart', OrganizationChart);
// app.component('OverlayPanel', OverlayPanel);
// app.component('Paginator', Paginator);
// app.component('Panel', Panel);
// app.component('PanelMenu', PanelMenu);
// app.component('Password', Password);
// app.component('PickList', PickList);
// app.component('ProgressBar', ProgressBar);
// app.component('RadioButton', RadioButton);
// app.component('Rating', Rating);
// app.component('SelectButton', SelectButton);
// app.component('ScrollPanel', ScrollPanel);
// app.component('ScrollTop', ScrollTop);
// app.component('Slider', Slider);
// app.component('Sidebar', Sidebar);
// app.component('Skeleton', Skeleton);
// app.component('SplitButton', SplitButton);
// app.component('Splitter', Splitter);
// app.component('SplitterPanel', SplitterPanel);
// app.component('Steps', Steps);
// app.component('TabMenu', TabMenu);
// app.component('TabView', TabView);
// app.component('TabPanel', TabPanel);
// app.component('Tag', Tag);
// app.component('Textarea', Textarea);
// app.component('TieredMenu', TieredMenu);
// app.component('Timeline', Timeline);
// app.component('Toast', Toast);
// app.component('Toolbar', Toolbar);
// app.component('ToggleButton', ToggleButton);
// app.component('Tree', Tree);
// app.component('TreeTable', TreeTable);
// app.component('TriStateCheckbox', TriStateCheckbox);

// app.mount('#app');

/*
 * Copyright (c) 2001-2009, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.xml.Cacheable","jsx3.gui.Form","jsx3.gui.Block","jsx3.gui.Matrix.Column","jsx3.util.MessageFormat");jsx3.Class.defineClass("jsx3.gui.Matrix",jsx3.gui.Block,[jsx3.gui.Form,jsx3.xml.Cacheable,jsx3.xml.CDF],function(m,q){var
ub={A:"Race condition with view...",Aa:'src="',Ab:"jsxbeforeedit",Ac:"E",Ad:'class="jsx30matrixcolumn_cell_value"',B:"px",Ba:'"',Bb:"undefined",Bc:"colgroup",Bd:"test",C:"table",Ca:"FS",Cb:"YD",Cc:"c1",Cd:"$jsx_cell_value_template_id='",D:"jsxcolspan",Da:"xD",Db:"_jsxyP",Dc:"_C",Dd:"_value'",E:"jsxindent",Ea:' class="jsx30matrix_scrollh"',Eb:"jsxbeforeappend",Ec:"visibility:hidden;",Ed:"//xsl:call-template",F:"0+",Fa:"z-index:10;overflow:auto;",Fb:"jsxroot",Fc:'<div class="jsx30matrix_resize_anchor" jsxindex="',Fd:"name",G:"0",Ga:"overflow:hidden;background-color:#e8e8f5;z-index:11;",Gb:"jsxafterappend",Gc:'" style="left:',Gd:"_value",H:"object",Ha:"_ebMouseOutDropIcon",Hb:"true",Hc:"px;",Hd:"ui_controller",I:"",Ia:"&#160;",Ib:"_jsxOM",Ic:"width:",Id:"//xsl:template[@name='ui_controller']//xsl:call-template",J:/\d*%/,Ja:'<div class="jsx30matrix_scroll_info"><span class="jsx30matrix_scroll_info">&#160;</span></div>',Jb:"jsxafteredit",Jc:"px;background-image:url(",Jd:"Error with column ",K:"*",Ka:'<div class="jsx30matrix_resize_bar">&#160;</div>',Kb:"jsxaftercommit",Kc:");height:",Kd:": ",L:"Matrix Width Recalc, Pass 1 (",La:'<div class="jsx30matrix_drop_icon" ',Lb:"jsxtype",Lc:'px;" ',Ld:/width:\d*px;/,M:"): ",Ma:">&#160;</div>",Mb:"plusminus",Mc:"jsxindex",Md:"{$jsx_first_row_width_style}",N:"Matrix Width Recalc, Pass 2a (",Na:"F7",Nb:"paged",Nc:"jsxbeforeresize",Nd:"default",O:"Matrix Width Recalc, Pass 2b (",Oa:'<div id="',Ob:"record",Oc:"Bv",Od:/\{0\}/g,P:"Matrix Width Recalc, Pass 3 (",Pa:'_masks" class="jsx30matrix_masks">',Pb:"./record",Pc:"//record",Pd:"@",Q:"Matrix Width Recalc, Pass 4 (",Qa:"</div>",Qb:"jsxopen",Qc:"jsxafterresize",Qd:/<\/xsl:template>\s*$/,R:"100%",Ra:"paint.masks",Rb:"Fetch the content belonging to: ",Rc:"-6px",Rd:"</xsl:template>",S:"box",Sa:"_masks",Sb:"position:relative;",Sc:"Panel pool max (",Sd:"xsl",T:"div",Ta:"repaint.data",Tb:"jsxcontextindex",Tc:") exceeded by: ",Td:"jsx_use_categories",U:"inline",Ua:'_head" class="jsx30matrix_head"',Ub:"jsxtoggle",Uc:"reaping panel: ",Ud:"jsxabspath",V:"tr",Va:'cellspacing="0" cellpadding="0" class="jsx30matrix_head_table"',Vb:"pagedfocusdelay",Vc:"structure",Vd:"jsxhomepath",W:"If the header border and body border do not share the same pixel width, the columns in the matrix may not align as expected (",Wa:"_head",Wb:"<div id='JSX' class='jsx30matrix_dragicon' style='",Wc:"jsx_",Wd:"<tr",X:")\nHeader Border (",Xa:'<table id="',Xb:"'>",Xc:"tbody",Xd:"loading",Y:") != Body Border (",Ya:'_ghost" cellspacing="0" cellpadding="0" class="jsx30matrix_ghost" style="width:',Yb:"<table class='",Yc:"_jsx_",Yd:"kH",Z:")",Za:'px;"><tr>',Zb:"class",Zc:"-",Zd:"_jsxBF",_:"img",_a:"</tr></table>",_b:"' style='",_c:"jsxscroll",_d:"sort",a:"jsx:///images/matrix/select.gif",aa:"mouseover",ab:"BeforeEnd",ac:"style",ad:"horizontal",ae:/<ids>([\s\S]*)\s*,\s*<\/ids>/,b:"jsx:///images/matrix/insert_before.gif",ba:"mouseout",bb:"Cw",bc:"<tr class='",bd:"jsx3.gui.Matrix.seek",be:"[",c:"jsx:///images/matrix/append.gif",ca:"dblclick",cb:"jsxmenu",cc:"</tr></table></div>",cd:"Matrix_timeout",ce:"]",d:"font-weight:bold",da:"keydown",db:"jsxbeforesort",dc:/input|textarea/i,dd:"vertical",de:"count",e:"jsx:///images/matrix/minus.gif",ea:"mousedown",eb:"jsxaftersort",ec:"jsxbeforedrop",ed:"X1",ee:/(\d+)/,f:"jsx:///images/matrix/plus.gif",fa:"click",fb:"_jsxDY",fc:"7px",fd:"fetching panel: ",fe:"Getting Record Count: ",g:"jsx:///images/matrix/file.gif",ga:"mouseup",gb:"text",gc:"dropverb",gd:"contextnodes",ge:"The paging model was overridden (disabled) because the rendering mode is hierarchical and stepped paging was not explicitly set.",h:"ascending",ha:'id="',hb:"jsxafterreorder",hc:"insertbefore",hd:"jsxrownumber",he:".//record",i:"descending",ia:'" class="jsx30matrix',ib:"focusdelay",ic:"12px",id:"Matrix2pass",ie:"JSXDRAGID",j:"jsx:///images/matrix/sort_desc.gif",ja:" ",jb:"_jsxX6",jc:"append",jd:"format.sync",je:"id",k:"jsx:///images/matrix/sort_asc.gif",ka:'" ',kb:/(-\S)/gi,kc:"rowcontext",kd:"format.async",ke:"\\b(",l:'<xsl:call-template xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="{0}">\n  <xsl:with-param name="jsx_is_first_panel_row" select="$jsx_is_first_panel_row"/>\n  <xsl:with-param name="jsx_row_number" select="$jsx_row_number"/>\n  <xsl:with-param name="jsx_rowbg" select="$jsx_rowbg"/>\n  <xsl:with-param name="jsx_cdfkey" select="$jsx_cdfkey"/>\n  <xsl:with-param name="jsx_descendant_index" select="$jsx_descendant_index"/>\n</xsl:call-template>',la:"_onMouseUp",lb:";",lc:"jsxspy",ld:"position:absolute;left:0px;top:",le:")\\b",m:"<xsl:when xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" test=\"$jsx_cell_value_template_id=''{0}''\">\n  <xsl:for-each select=\"//*[@jsxid=$jsx_record_context]\">\n    <xsl:call-template name=\"{0}\">\n    </xsl:call-template>\n  </xsl:for-each>\n</xsl:when>\n",ma:"selectstart",mb:":",mc:"_jsxMK",md:"autorow",me:"BeforeBegin",n:"<xsl:template xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" name=\"{0}\">\n  <xsl:param name=\"jsx_is_first_panel_row\"/>\n  <xsl:param name=\"jsx_row_number\"/>\n  <xsl:param name=\"jsx_rowbg\"/>\n  <xsl:param name=\"jsx_cdfkey\"/>\n  <xsl:param name=\"jsx_descendant_index\"/>\n  <xsl:param name=\"jsx_selection_bg\"><xsl:choose>\n     <xsl:when test=\"@jsxselected=1\">background-image:url(<xsl:value-of select=\"$jsx_selection_bg_url\"/>);</xsl:when>\n   </xsl:choose></xsl:param>\n  <xsl:param name=\"jsx_cell_width\" select=\"''{2}''\"/>\n  <xsl:param name=\"jsx_true_width\">\n    <xsl:choose><xsl:when test=\"$jsx_use_categories!=''0'' and not(@jsxcategory=''0'') and (@jsxcategory or record)\">{3}</xsl:when><xsl:otherwise><xsl:value-of select=\"$jsx_cell_width\"/></xsl:otherwise></xsl:choose>\n  </xsl:param>\n  <xsl:param name=\"jsx_first_row_width_style\">\n    <xsl:choose><xsl:when test=\"$jsx_is_first_panel_row\">width:<xsl:value-of select=\"$jsx_true_width\"/>px;</xsl:when></xsl:choose>\n  </xsl:param>\n  <xsl:param name=\"jsx_colspan\">\n    <xsl:choose><xsl:when test=\"$jsx_use_categories!=''0'' and not(@jsxcategory=''0'') and (@jsxcategory or record)\"><xsl:value-of select=\"$jsx_column_count\"/></xsl:when><xsl:otherwise>1</xsl:otherwise></xsl:choose>\n  </xsl:param>\n  {1}\n</xsl:template>",na:"c3",nb:"jsxunselectable",nc:"jsx30spyglassbuffer",nd:"panel",ne:"td",o:'<xsl:call-template name="{0}">\n  <xsl:with-param name="jsx_cell_width" select="$jsx_true_width"/>\n  <xsl:with-param name="jsx_row_number" select="$jsx_row_number"/>\n  <xsl:with-param name="jsx_descendant_index" select="$jsx_descendant_index"/>\n</xsl:call-template>',oa:'_body" class="jsx30matrix_body" ',ob:"1",oc:"jsxcanceldrop",od:"Fetching records: ",oe:"*[",p:"Viewing rows {0} to {1} of {2}",pa:"mousewheel",pb:"jsxexecute",pc:"body",pd:" - to - ",pe:/^(on(?:mousedown|click|focus|blur|mouseup|mouseover|mouseout|dblclick|scroll|keydown|keypress))/i,q:"jsxpaintpage",qa:"lk",qb:"jsxid",qc:"hierachical",qd:"//xsl:template[@name='row_template']//tr",qe:/(?:border:|border-top|border-left|border-bottom|border-right|padding|height|width|background-color)[^;]*;/gi,r:"deep",ra:"vF",rb:"_jsxhU",rc:"jsx30matrix_drop_icon",rd:"//xsl:template[@name='row_template']//tr/xsl:choose/xsl:when",re:"strId",s:"shallow",sa:"aV",sb:"_jsxUY",sc:"JSX_GENERIC",sd:"//xsl:choose/xsl:when/xsl:choose",t:"hierarchical",ta:"gN",tb:"//record[@",tc:"jsxadopt",td:"focus",u:"jsx:///xsl/jsxmatrix.xsl",ua:"mousemove",ub:"jsxselected",uc:"jsxctrldrop",ud:"tu",v:"<?xml version=\"1.0\" encoding=\"UTF-8\"?><xsl:stylesheet xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" version=\"1.0\"><xsl:output method=\"xml\" omit-xml-declaration=\"yes\"/><xsl:param name=\"jsx_id\"/><xsl:param name=\"jsx_1\"/><xsl:param name=\"jsx_2\"/><xsl:param name=\"jsx_3\"/><xsl:param name=\"jsx_4\"/><xsl:param name=\"jsx_5\"/><xsl:param name=\"jsx_6\"/><xsl:param name=\"jsx_7\"/><xsl:param name=\"jsx_8\"/><xsl:param name=\"jsx_9\"/><xsl:param name=\"jsx_10\"/><xsl:param name=\"jsx_use_categories\">0</xsl:param><xsl:param name=\"jsx_column_count\">1</xsl:param><xsl:param name=\"jsx_drag_type\">JSX_GENERIC</xsl:param><xsl:param name=\"jsx_panel_index\"/><xsl:param name=\"jsx_column_widths\"/><xsl:param name=\"jsx_panel_css\"/><xsl:param name=\"jsx_icon\"/><xsl:param name=\"jsx_icon_minus\"/><xsl:param name=\"jsx_icon_plus\"/><xsl:param name=\"jsx_transparent_image\"/><xsl:param name=\"jsx_paging_model\">0</xsl:param><xsl:param name=\"jsx_mode\">panel</xsl:param><xsl:param name=\"jsx_cell_value_template_id\">_jsx_{serverns}_{serial}_value</xsl:param><xsl:param name=\"jsx_record_context\">cdfkey</xsl:param><xsl:param name=\"jsx_min_exclusive\">-1</xsl:param><xsl:param name=\"jsx_max_exclusive\">1000000</xsl:param><xsl:param name=\"jsx_column_index\">-1</xsl:param><xsl:param name=\"jsx_sort_path\">jsxid</xsl:param><xsl:param name=\"jsx_sort_direction\">ascending</xsl:param><xsl:param name=\"jsx_sort_type\">text</xsl:param><xsl:param name=\"jsx_selection_bg_url\">JSX/images/list/select.gif</xsl:param><xsl:param name=\"jsx_selection_model\">1</xsl:param><xsl:param name=\"jsx_rowbg1\"/><xsl:param name=\"jsx_rowbg2\"/><xsl:param name=\"jsx_treehead_bgcolor\"/><xsl:param name=\"jsx_treehead_fontweight\"/><xsl:param name=\"jsx_autorow_style\">background-color:#fbf89f;</xsl:param><xsl:param name=\"jsx_rendering_model\">hierarchical</xsl:param><xsl:param name=\"jsx_rendering_context\">jsxroot</xsl:param><xsl:param name=\"jsx_rendering_context_child\"/><xsl:param name=\"jsx_indent\">16</xsl:param><xsl:param name=\"jsx_context_index\">1</xsl:param><xsl:param name=\"jsx_no_tip\">0</xsl:param><xsl:param name=\"jsx_no_empty_indent\">0</xsl:param><xsl:param name=\"jsx_img_resolve\">1</xsl:param><xsl:param name=\"jsxtitle\"/><xsl:param name=\"jsxasyncmessage\"/><xsl:param name=\"jsxpath\"/><xsl:param name=\"jsxpathapps\"/><xsl:param name=\"jsxpathprefix\"/><xsl:param name=\"jsxappprefix\"/><xsl:template match=\"/\"><JSX_FF_WELLFORMED_WRAPPER><xsl:choose><xsl:when test=\"$jsxasyncmessage and $jsxasyncmessage!=''\"><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}_asyncmsg\" style=\"{$jsx_panel_css}width:{$jsx_column_widths}px;\"><tr><td style=\"padding: 3px;\"><xsl:value-of select=\"$jsxasyncmessage\"/></td></tr></table></xsl:when><xsl:when test=\"$jsx_mode = 'cellvalue'\"><xsl:choose><xsl:when test=\"0\"/></xsl:choose></xsl:when><xsl:when test=\"$jsx_rendering_model = 'shallow'\"><xsl:choose><xsl:when test=\"$jsx_mode = 'count'\"><xsl:value-of select=\"count(//*[@jsxid=$jsx_rendering_context]/record)\"/></xsl:when><xsl:when test=\"$jsx_mode = 'autorow'\"><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}jsx_-1\" jsxautorow=\"true\" style=\"{$jsx_panel_css}width:{$jsx_column_widths}px;\"><xsl:call-template name=\"row_template\"><xsl:with-param name=\"jsx_row_number\">-1</xsl:with-param></xsl:call-template></table></xsl:when><xsl:when test=\"$jsx_mode = 'record'\"><xsl:for-each select=\"//*[@jsxid=$jsx_rendering_context]/record\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:if test=\"@jsxid = $jsx_rendering_context_child\"><xsl:apply-templates mode=\"entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/></xsl:apply-templates></xsl:if></xsl:for-each></xsl:when><xsl:when test=\"$jsx_mode = 'sort'\"><ids><xsl:apply-templates mode=\"sort\" select=\"//*[@jsxid=$jsx_rendering_context]/record\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/></xsl:apply-templates></ids></xsl:when><xsl:otherwise><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}jsx_{$jsx_panel_index}\" style=\"{$jsx_panel_css}width:{$jsx_column_widths}px;\"><xsl:for-each select=\"//*[@jsxid=$jsx_rendering_context]/record\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:apply-templates mode=\"entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/></xsl:apply-templates></xsl:for-each></table></xsl:otherwise></xsl:choose></xsl:when><xsl:when test=\"$jsx_rendering_model = 'deep'\"><xsl:choose><xsl:when test=\"$jsx_mode = 'count'\"><xsl:value-of select=\"count(//*[@jsxid=$jsx_rendering_context]//record)\"/></xsl:when><xsl:when test=\"$jsx_mode = 'autorow'\"><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}jsx_-1\" jsxautorow=\"true\" style=\"{$jsx_panel_css}width:{$jsx_column_widths}px;\"><xsl:call-template name=\"row_template\"><xsl:with-param name=\"jsx_row_number\">-1</xsl:with-param></xsl:call-template></table></xsl:when><xsl:when test=\"$jsx_mode = 'record'\"><xsl:for-each select=\"//*[@jsxid=$jsx_rendering_context]//record\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:if test=\"@jsxid = $jsx_rendering_context_child\"><xsl:apply-templates mode=\"entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/></xsl:apply-templates></xsl:if></xsl:for-each></xsl:when><xsl:when test=\"$jsx_mode = 'sort'\"><ids><xsl:apply-templates mode=\"sort\" select=\"//*[@jsxid=$jsx_rendering_context]//record\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/></xsl:apply-templates></ids></xsl:when><xsl:otherwise><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}jsx_{$jsx_panel_index}\" style=\"{$jsx_panel_css}width:{$jsx_column_widths}px;\"><xsl:for-each select=\"//*[@jsxid=$jsx_rendering_context]//record\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:apply-templates mode=\"entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/></xsl:apply-templates></xsl:for-each></table></xsl:otherwise></xsl:choose></xsl:when><xsl:when test=\"$jsx_rendering_model = 'hierarchical'\"><xsl:choose><xsl:when test=\"$jsx_mode = 'count'\"><xsl:value-of select=\"count(//*[@jsxid=$jsx_rendering_context]//record)\"/></xsl:when><xsl:when test=\"$jsx_mode = 'record'\"><xsl:for-each select=\"//*[@jsxid=$jsx_rendering_context]/record[@jsxid=$jsx_rendering_context_child]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:apply-templates mode=\"hierarchical_entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/><xsl:with-param name=\"jsx_adjusted_width\" select=\"$jsx_column_widths\"/><xsl:with-param name=\"jsx_descendant_index\" select=\"$jsx_context_index\"/></xsl:apply-templates></xsl:for-each></xsl:when><xsl:when test=\"$jsx_mode = 'sort'\"><ids><xsl:apply-templates mode=\"hierarchical_sort\" select=\"//*[@jsxid=$jsx_rendering_context]/record\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/></xsl:apply-templates></ids></xsl:when><xsl:otherwise><xsl:for-each select=\"//*[@jsxid=$jsx_rendering_context]/record\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:apply-templates mode=\"hierarchical_entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/><xsl:with-param name=\"jsx_adjusted_width\" select=\"$jsx_column_widths\"/><xsl:with-param name=\"jsx_descendant_index\" select=\"$jsx_context_index\"/></xsl:apply-templates></xsl:for-each></xsl:otherwise></xsl:choose></xsl:when></xsl:choose></JSX_FF_WELLFORMED_WRAPPER></xsl:template><xsl:template match=\"node()\" mode=\"entry\"><xsl:param name=\"jsx_row_number\"/><xsl:choose><xsl:when test=\"$jsx_row_number = '-1' or ($jsx_row_number &gt; $jsx_min_exclusive and $jsx_row_number &lt; $jsx_max_exclusive)\"><xsl:call-template name=\"row_template\"><xsl:with-param name=\"jsx_row_number\" select=\"$jsx_row_number\"/></xsl:call-template></xsl:when></xsl:choose></xsl:template><xsl:template match=\"node()\" mode=\"sort\">\"<xsl:value-of select=\"@jsxid\"/>\",</xsl:template><xsl:template match=\"node()\" mode=\"hierarchical_sort\">\"<xsl:value-of select=\"@jsxid\"/>\",<xsl:apply-templates mode=\"hierarchical_sort\" select=\"record\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/></xsl:apply-templates></xsl:template><xsl:template match=\"node()\" mode=\"hierarchical_entry\"><xsl:param name=\"jsx_row_number\"/><xsl:param name=\"jsx_adjusted_width\"/><xsl:param name=\"jsx_descendant_index\"/><div jsxtype=\"structure\" style=\"position:relative;\"><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}jsx_0\" style=\"{$jsx_panel_css}width:{$jsx_adjusted_width}px;\"><xsl:call-template name=\"row_template\"><xsl:with-param name=\"jsx_row_number\" select=\"$jsx_min_exclusive + 1\"/><xsl:with-param name=\"jsx_descendant_index\" select=\"$jsx_descendant_index\"/></xsl:call-template></table><div jsxcontextindex=\"{$jsx_descendant_index + 1}\" style=\"display:none;\"><xsl:choose><xsl:when test=\"record\"><xsl:choose><xsl:when test=\"@jsxopen='1'\"><xsl:attribute name=\"style\">position:relative;display:block;</xsl:attribute></xsl:when></xsl:choose><xsl:choose><xsl:when test=\"@jsxopen='1' or $jsx_paging_model != 4 \"><xsl:for-each select=\"record\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:apply-templates mode=\"hierarchical_entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/><xsl:with-param name=\"jsx_adjusted_width\" select=\"$jsx_adjusted_width\"/><xsl:with-param name=\"jsx_descendant_index\" select=\"$jsx_descendant_index + 1\"/></xsl:apply-templates></xsl:for-each></xsl:when><xsl:otherwise><xsl:text>&#160;</xsl:text></xsl:otherwise></xsl:choose></xsl:when><xsl:otherwise><xsl:text>&#160;</xsl:text></xsl:otherwise></xsl:choose></div></div></xsl:template><xsl:template name=\"ui_controller\"><xsl:param name=\"jsx_descendant_index\"/><xsl:param name=\"jsx_cell_width\"/><xsl:param name=\"jsx_row_number\">0</xsl:param><xsl:param name=\"jsx_style\" select=\"@jsxstyle\"/><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" jsxindent=\"{($jsx_descendant_index -1) * $jsx_indent}\"><xsl:attribute name=\"style\">position:relative;float:right;width:<xsl:value-of select=\"$jsx_cell_width - (($jsx_descendant_index -1) * $jsx_indent)\"/>px;height:16px;</xsl:attribute><tr style=\"{$jsx_style}\"><xsl:if test=\"@jsxclass\"><xsl:attribute name=\"class\"><xsl:value-of select=\"@jsxclass\"/></xsl:attribute></xsl:if><td jsxtype=\"plusminus\"><xsl:attribute name=\"jsxtype\"><xsl:choose><xsl:when test=\"record and $jsx_paging_model = 4 and not(@jsxopen=1)\">paged</xsl:when><xsl:otherwise>plusminus</xsl:otherwise></xsl:choose></xsl:attribute><xsl:attribute name=\"style\">vertical-align:top;width:<xsl:choose><xsl:when test=\"$jsx_no_empty_indent='1' and not(../record/record)\">0</xsl:when><xsl:otherwise>16</xsl:otherwise></xsl:choose>px;background-image:url(<xsl:choose><xsl:when test=\"record and @jsxopen=1\"><xsl:value-of select=\"$jsx_icon_minus\"/></xsl:when><xsl:when test=\"record and $jsx_paging_model = 4\"><xsl:value-of select=\"$jsx_icon_plus\"/></xsl:when><xsl:when test=\"record\"><xsl:value-of select=\"$jsx_icon_plus\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"$jsx_transparent_image\"/></xsl:otherwise></xsl:choose>);background-repeat:no-repeat;</xsl:attribute><xsl:text>&#160;</xsl:text></td><td jsxtype=\"icon\" unselectable=\"on\"><xsl:choose><xsl:when test=\"@jsximg = ''\"><xsl:attribute name=\"style\">width:1px;</xsl:attribute><span style=\"display:none;width:1px;height:1px;\"/></xsl:when><xsl:when test=\"@jsximg\"><xsl:attribute name=\"style\">width:16px;vertical-align:top;</xsl:attribute><xsl:variable name=\"src1\"><xsl:choose><xsl:when test=\"$jsx_img_resolve='1'\"><xsl:apply-templates mode=\"uri-resolver\" select=\"@jsximg\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@jsximg\"/></xsl:otherwise></xsl:choose></xsl:variable><img class=\"jsx30matrix_plusminus\" jsxtype=\"icon\" src=\"{$src1}\" unselectable=\"on\"/></xsl:when><xsl:when test=\"$jsx_icon=''\"><xsl:attribute name=\"style\">width:1px;</xsl:attribute><span style=\"display:none;width:1px;height:1px;\"><xsl:text>&#160;</xsl:text></span></xsl:when><xsl:otherwise><xsl:attribute name=\"style\">width:16px;vertical-align:top;</xsl:attribute><img class=\"jsx30matrix_plusminus\" jsxtype=\"icon\" src=\"{$jsx_icon}\" unselectable=\"on\"/></xsl:otherwise></xsl:choose><xsl:text>&#160;</xsl:text></td><td jsxtype=\"text\" style=\"vertical-align:top;\"><xsl:attribute name=\"jsxtreenode\"><xsl:choose><xsl:when test=\"record\">branch</xsl:when><xsl:otherwise>leaf</xsl:otherwise></xsl:choose></xsl:attribute><xsl:call-template name=\"ui_controller\"><xsl:with-param name=\"jsx_cell_width\" select=\"$jsx_cell_width\"/><xsl:with-param name=\"jsx_row_number\" select=\"$jsx_row_number\"/><xsl:with-param name=\"jsx_descendant_index\" select=\"$jsx_descendant_index\"/></xsl:call-template></td></tr></table></xsl:template><xsl:template name=\"row_template\"><xsl:param name=\"jsx_descendant_index\"/><xsl:param name=\"jsx_row_number\">0</xsl:param><xsl:param name=\"jsxdragtype\" select=\"$jsx_drag_type\"/><xsl:param name=\"jsx_style\"><xsl:choose><xsl:when test=\"$jsx_row_number = -1\"><xsl:value-of select=\"$jsx_autorow_style\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@jsxstyle\"/></xsl:otherwise></xsl:choose></xsl:param><xsl:param name=\"jsx_cdfkey\"><xsl:choose><xsl:when test=\"$jsx_row_number = -1\">jsxautorow</xsl:when><xsl:otherwise><xsl:value-of select=\"@jsxid\"/></xsl:otherwise></xsl:choose></xsl:param><xsl:param name=\"jsx_groupname\"><xsl:choose><xsl:when test=\"@jsxgroupname\"><xsl:value-of select=\"@jsxgroupname\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"$jsx_id\"/></xsl:otherwise></xsl:choose></xsl:param><xsl:param name=\"jsx_rowbg\"><xsl:choose><xsl:when test=\"$jsx_rendering_model != 'hierarchical' and ($jsx_rowbg1 or $jsx_rowbg2) and $jsx_row_number != -1\"><xsl:text>background-color:</xsl:text><xsl:choose><xsl:when test=\"$jsx_row_number mod 2 = 0\"><xsl:value-of select=\"$jsx_rowbg1\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"$jsx_rowbg2\"/></xsl:otherwise></xsl:choose><xsl:text>;</xsl:text></xsl:when><xsl:when test=\"record and ($jsx_rendering_model = 'hierarchical') and $jsx_treehead_bgcolor\"><xsl:text>background-color:</xsl:text><xsl:value-of select=\"$jsx_treehead_bgcolor\"/><xsl:text>;font-weight:</xsl:text><xsl:value-of select=\"$jsx_treehead_fontweight\"/><xsl:text>;border-right-color:</xsl:text><xsl:value-of select=\"$jsx_treehead_bgcolor\"/><xsl:text>;</xsl:text></xsl:when></xsl:choose></xsl:param><xsl:param name=\"jsx_is_first_panel_row\" select=\"$jsx_row_number - 1 = $jsx_min_exclusive or $jsx_row_number = -1\"/><tr JSXDragId=\"{$jsx_cdfkey}\" JSXDragType=\"{$jsx_drag_type}\" id=\"{$jsx_id}_jsx_{$jsx_cdfkey}\" jsxid=\"{$jsx_cdfkey}\" jsxrownumber=\"{$jsx_row_number}\" jsxtype=\"record\" style=\"{$jsx_rowbg}{$jsx_style}\"><xsl:if test=\"@jsxclass\"><xsl:attribute name=\"class\"><xsl:value-of select=\"@jsxclass\"/></xsl:attribute></xsl:if><xsl:if test=\"@jsxtip and $jsx_no_tip != '1'\"><xsl:attribute name=\"title\"><xsl:value-of select=\"@jsxtip\"/></xsl:attribute></xsl:if><xsl:choose><xsl:when test=\"$jsx_use_categories='0' or @jsxcategory='0' or (not(@jsxcategory='1') and not(record))\"></xsl:when></xsl:choose></tr></xsl:template><xsl:template match=\"* | @*\" mode=\"uri-resolver\"><xsl:param name=\"uri\" select=\".\"/><xsl:choose><xsl:when test=\"starts-with($uri,'JSX/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'JSXAPPS/')\"><xsl:value-of select=\"concat($jsxpathapps, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'GI_Builder/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:///')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,8))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:/')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,6))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:///')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp://')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,10))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:/')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:///')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:/')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxaddin://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"starts-with($uri,'/')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"contains($uri,'://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"not($jsxpathprefix='') and not(starts-with($uri, $jsxpathprefix))\"><xsl:apply-templates mode=\"uri-resolver\" select=\".\"><xsl:with-param name=\"uri\" select=\"concat($jsxpathprefix, $uri)\"/></xsl:apply-templates></xsl:when><xsl:otherwise><xsl:value-of select=\"$uri\"/></xsl:otherwise></xsl:choose></xsl:template></xsl:stylesheet>",va:"au",vb:"='1']",vc:"jsxdrop",vd:"blur",w:"_jsxb6",wa:"nq",wb:"url(",wc:"N",wd:"W3",x:"scroll",xa:' class="jsx30matrix_scrollv"',xb:"jsxselect",xc:"S",xd:' colspan="{$jsx_colspan}" jsxcolspan="{$jsx_colspan}" ',y:"none",ya:"display:none;",yb:"jsxchange",yc:"W",yd:' jsxtype="cell" class="jsx30matrixcolumn_cell" id="{$jsx_id}_jsx_{$jsx_cdfkey}_jsx_',z:"block",za:"z-index:10;overflow:scroll;",zb:"jsxautorow",zc:"jsxlazy",zd:"{$jsx_selection_bg}{$jsx_rowbg}"};var
Qa=jsx3.util.Logger.getLogger(m.jsxclass.getName());var
gb=jsx3.gui.Event;var
La=jsx3.gui.Interactive;var
A=jsx3.xml.CDF;var
Ya=jsx3.gui.Block;var
yb=jsx3.gui.Painted.Box;var
Ua=jsx3.html;m.GF=500;m.L6=1;m.b8=150;m.AUTO_SCROLL_INTERVAL=50;m.SELECTION_BG=ub.a;m.INSERT_BEFORE_IMG=jsx3.resolveURI(ub.b);m.APPEND_IMG=jsx3.resolveURI(ub.c);m.FOCUS_STYLE=ub.d;m.ICON_MINUS=ub.e;m.ICON_PLUS=ub.f;m.ICON=ub.g;m.SORT_ASCENDING=ub.h;m.SORT_DESCENDING=ub.i;m.SORT_DESCENDING_IMG=jsx3.resolveURI(ub.j);m.SORT_ASCENDING_IMG=jsx3.resolveURI(ub.k);m.MINIMUM_COLUMN_WIDTH=8;m.DEFAULT_HEADER_HEIGHT=20;m.AUTOROW_NONE=0;m.AUTOROW_LAST_ROW=1;m.AUTOROW_FIRST_ROW=2;m.CG=(new
jsx3.xml.Document()).loadXML(ub.l);m.kt=(new
jsx3.xml.Document()).loadXML(ub.m);m.pA=new
jsx3.util.MessageFormat(ub.n);m.kQ=new
jsx3.util.MessageFormat(ub.o);m.DEFAULT_INFO_LABEL=ub.p;m.ON_PAINT_PAGE=ub.q;m.PAGING_OFF=0;m.PAGING_2PASS=1;m.PAGING_CHUNKED=2;m.PAGING_PAGED=3;m.PAGING_STEPPED=4;m.SELECTION_UNSELECTABLE=0;m.SELECTION_ROW=1;m.SELECTION_MULTI_ROW=2;m.REND_DEEP=ub.r;m.REND_SHALLOW=ub.s;m.REND_HIER=ub.t;m.DEFAULT_ROW_HEIGHT=20;m.DEFAULT_PANEL_POOL_COUNT=5;m.DEFAULT_ROWS_PER_PANEL=50;m.DEFAULT_REAPER_INTERVAL=250;m.DEFAULT_PANEL_QUEUE_SIZE=3;m.DEFAULTXSLURL=jsx3.resolveURI(ub.u);m.Sx=(new
jsx3.xml.XslDocument()).loadXML(ub.v);m.DEFAULT_XSL_URL=m.DEFAULTXSLURL;m.SCROLL_INC=36;q._jsxyy=[];q.init=function(o){this.jsxsuper(o);};q.gi=function(e,b,n){var
hb=this.Wl(true,e);delete this[ub.w];var
sb=yb.getScrollSize()+1;var
Oa=this.getScaleWidth()==1?e.parentwidth-sb:this.x8();var
la=this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT);hb.recalculate(e,b,n);var
Pa=hb.lg(0);Pa.recalculate({parentwidth:this.v4(),parentheight:la},b?b.childNodes[0]:null,n);var
va=(Pa.lg(0)).lg(0);va.recalculate({parentwidth:Oa,parentheight:la},b&&b.childNodes[0]?Ua.selectSingleElm(b,0,0,0):null,n);var
Ha=hb.Zg()-la;var
Ma=hb.lg(1);Ma.recalculate({parentwidth:this.v4(),parentheight:Ha},b?b.childNodes[1]:null,n);var
eb=Ma.Eg()+Ma.Zg();Ha=hb.Zg()-this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT);var
ma={};ma.left=Ma.getOffsetWidth()-1;ma.top=0;ma.height=eb+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-(sb-yb.getScrollSizeOffset(ub.x));var
fb=hb.lg(2);fb.recalculate(ma,b?b.childNodes[2]:null,n);var
qa={};qa.top=eb+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-sb;qa.width=Ma.Sh();var
ga=hb.lg(3);ga.recalculate(qa,b?b.childNodes[3]:null,n);var
C=ga.lg(0);var
ba=this.getScaleWidth()||Oa-sb<=hb.Sh()?0:Oa;C.recalculate({width:ba},b&&b.childNodes[3]?b.childNodes[3].childNodes[0]:null,n);if(b&&b.childNodes[3])if(this.getSuppressHScroller(0)==1||this.getScaleWidth()==1||C.Sh()<=ga.Sh()){b.childNodes[3].style.display=ub.y;this.setScrollLeft(0);}else b.childNodes[3].style.display=ub.z;var
z={};z.left=ma.left+1;z.top=eb+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-sb;z.height=hb.Zg()-z.top;var
H=hb.lg(4);H.recalculate(z,b&&b.childNodes[4]?b.childNodes[4]:null,n);var
Na=this.Xi();var
ia=this.oC(Ma.Sh());var
tb=false;for(var
jb=0;jb<Na.length;jb++){var
_a=Na[jb].gi({parentwidth:ia[jb],parentheight:la},b?Na[jb].getRendered():null,n);tb=tb||_a==null||_a.w;}if(!tb){}else if(b&&b.childNodes[0]){var
S=[];for(var
jb=0;jb<Na.length;jb++)S.push((Na[jb].Wl(true)).getPaintedWidth());this.hG(b.childNodes[0].childNodes[0],S);ia=[];for(var
jb=0;jb<Na.length;jb++)ia.push((Na[jb].Wl(true)).getOffsetWidth());this.dV(b.childNodes[0].childNodes[0],ia);S=[];for(var
jb=0;jb<Na.length;jb++)S.push(((Na[jb].Wl(true)).lg(1)).getPaintedWidth());if(this.getRenderingModel()==m.REND_HIER){var
Cb=this.EH({contextnodes:b.childNodes[1].childNodes[0].childNodes});this._Y(Cb,S);}else this.hG(b.childNodes[1].childNodes[0],S);}else{Qa.trace(ub.A);jsx3.sleep(function(){if(this.getParent())this.Ul((this.getParent()).ng(this),true);},null,this);}this.rV();};q.dV=function(i,o){var
wb=0;for(var
y=1;y<i.childNodes.length;y++){var
Nb=i.childNodes[y];wb=wb+o[y-1];Nb.style.left=wb-4+ub.B;}};q.hG=function(k,s){var
wa=this.x8();for(var
v=0;v<k.childNodes.length;v++){var
la=k.childNodes[v];if(la.tagName.toLowerCase()==ub.C){la.style.width=wa+ub.B;var
na=this.mI(la);if(jsx3.CLASS_LOADER.FX3){while(na){for(var
hb=0;hb<na.childNodes.length;hb++)na.childNodes[hb].style.width=s[hb]+ub.B;na=na.nextSibling;}}else if(na)for(var
hb=0;hb<na.childNodes.length;hb++)na.childNodes[hb].style.width=s[hb]+ub.B;}}};q._Y=function(l,s){var
z=this.x8();var
Va=z-(this.oC())[0]+s[0];for(var
Y=0;Y<l.length;Y++){var
ca=l[Y];if(!(ca&&ca.childNodes))continue;var
Kb=ca.parentNode;if(Kb.tagName.toLowerCase()!=ub.C)Kb=Kb.parentNode;var
vb=z-parseInt(Kb.style.width);Kb.style.width=z+ub.B;for(var
ua=0;ua<ca.childNodes.length;ua++){var
ob=ua==0&&ca.childNodes[0].getAttribute(ub.D)>1?Va:s[ua];ca.childNodes[ua].style.width=ob+ub.B;if(ua==0&&this.getRenderNavigators(1)!=0){Kb=ca.childNodes[ua].childNodes[0].childNodes[0];var
X=ob-Kb.getAttribute(ub.E);Kb.style.width=Math.max(0,X)+ub.B;}}}};q.x8=function(l){if(!l)l=this.oC();return eval(l.join(ub.F)+ub.G)/10;};q.oC=function(a){if(typeof this._jsxb6==ub.H){return this._jsxb6.truewidths;}else{if(!a){a=this.v4();var
Za={width:1000,height:10};var
O=this.getBodyBorder();if(O!=null&&O!=ub.I)Za.border=O;a=a-(Za.width-(new
yb(Za)).Sh());}var
ma=[];var
za=0;var
Y;var
Oa=0;var
Eb=this.Xi();var
Mb={percent:[],wildcard:[],pixel:[]};for(var
Da=0;Da<Eb.length;Da++){var
W=Eb[Da].getWidth();if((jsx3.util.strTrim(String(W))).search(ub.J)==0){Mb.percent.unshift(Da);Y=parseInt(parseInt(W)/100*a);}else if(!isNaN(W)){Mb.pixel.unshift(Da);Y=Number(W);}else{Mb.wildcard.unshift(Da);if(this.getScaleWidth()){Oa++;Y=ub.K;}else Y=m.Column.DEFAULT_WIDTH;}if(!isNaN(Y))za=za+Y;ma.push(Y);}Qa.trace(ub.L+this.getName()+ub.M+ma);if(this.getScaleWidth()){var
Cb=a-za;var
db;if(Oa&&Cb>=0&&parseInt(Cb/Oa)>8){var
R=Oa;var
nb=Cb/Oa;if(nb>parseInt(nb)){nb=parseInt(nb);db=Cb-(Oa-1)*nb;}else db=nb;for(var
Da=0;Da<ma.length;Da++)if(ma[Da]==ub.K){ma[Da]=Oa==1?db:nb;Oa--;}Oa=R;}else if(Oa)for(var
Da=0;Da<ma.length;Da++)if(ma[Da]==ub.K)ma[Da]=8;Qa.trace(ub.N+this.getName()+ub.M+ma);var
v=this.x8(ma);var
V=v-a;if(V>0){var
ia=V;if(Mb.wildcard.length)ia=this.lU(ma,Mb.wildcard,V);if(Mb.percent.length&&ia>0)ia=this.lU(ma,Mb.percent,ia);if(Mb.pixel.length&&ia>0)ia=this.lU(ma,Mb.pixel,ia);}Qa.trace(ub.O+this.getName()+ub.M+ma);}for(var
Da=0;Da<ma.length;Da++)if(ma[Da]<8)ma[Da]=8;Qa.trace(ub.P+this.getName()+ub.M+ma);var
v=this.x8(ma);var
Cb=a-v;if(Cb>0)ma[ma.length-1]+=Cb;Qa.trace(ub.Q+this.getName()+ub.M+ma);this._jsxb6={truewidths:ma};return ma;}};q.lU=function(n,r,e){var
xb=0;var
P=parseInt(e/r.length);for(var
ca=0;ca<r.length;ca++){var
xa=r[ca];if(ca==r.length-1)P=e-(r.length-1)*P;if(n[xa]-P<8){xb=xb+(8-(n[xa]-P));n[xa]=8;}else n[xa]-=P;}return xb;};q.v4=function(){var
sa=((this.getParent()).ng(this)).parentwidth;return this.getSuppressVScroller(0)==1?sa:sa-yb.getScrollSize();};q.ng=function(n){var
Cb=n.getDisplayIndex();return {parentwidth:Cb!=null?(this.oC())[Cb]:null,parentheight:((this.Wl(true)).lg(0)).Zg()};};q.Jm=function(l){this.applyDynamicProperties();if(this.getParent()&&(l==null||isNaN(l.parentwidth)||isNaN(l.parentheight))){l=(this.getParent()).ng(this);this.aI();}else if(l==null)l={};var
Va=yb.getScrollSize()+1;l.left=0;l.top=0;l.width=ub.R;l.height=ub.R;l.boxtype=ub.S;l.tagname=ub.T;var
Db=new
yb(l);var
ab=this.getScaleWidth()==1?this.v4():this.x8();var
zb={};zb.left=0;zb.top=0;zb.height=this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT);zb.width=ub.R;zb.parentwidth=this.v4();zb.boxtype=ub.S;zb.tagname=ub.T;var
Wa;if((Wa=this.getHeaderBorder())!=null&&Wa!=ub.I)zb.border=Wa;var
qa=new
yb(zb);Db.Td(qa);var
Kb={};Kb.tagname=ub.T;Kb.boxtype=ub.S;Kb.top=0;Kb.left=0;var
y=new
yb(Kb);qa.Td(y);var
x={};x.left=0;x.top=0;x.width=ub.R;x.parentwidth=qa.Sh();x.boxtype=ub.S;x.tagname=ub.C;var
Q=new
yb(x);y.Td(Q);var
Z={};Z.boxtype=ub.U;Z.tagname=ub.V;var
ya=new
yb(Z);Q.Td(ya);var
_=Db.Zg()-this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT);var
aa={};aa.left=0;aa.top=this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT);aa.parentwidth=this.v4();aa.width=ub.R;aa.parentheight=_;aa.height=ub.R;aa.boxtype=ub.S;aa.tagname=ub.T;if((Wa=this.getBodyBorder())!=null&&Wa!=ub.I)aa.border=Wa;var
U=new
yb(aa);Db.Td(U);if(this.getHeaderHeight()!=0&&qa.getBorderWidth()!=U.getBorderWidth())Qa.warn(ub.W+this.getName()+ub.X+this.getHeaderBorder()+ub.Y+this.getBodyBorder()+ub.Z);var
tb={};tb.tagname=ub.T;tb.boxtype=ub.S;tb.top=0;tb.left=0;var
Ca=new
yb(tb);U.Td(Ca);var
xa=U.Eg()+U.Zg();var
pb={};pb.boxtype=ub.S;pb.tagname=ub.T;pb.left=U.getOffsetWidth()-1;pb.top=0;pb.width=Va;pb.height=xa+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-(Va-yb.getScrollSizeOffset(ub.x));var
ba=new
yb(pb);Db.Td(ba);var
Jb={};Jb.boxtype=ub.U;Jb.tagname=ub._;Jb.empty=true;Jb.left=0;Jb.top=0;Jb.width=1;Jb.height=this.getPagingModel()!=3?0:this.jI()+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)+Va;var
ua=new
yb(Jb);ba.Td(ua);var
Gb={};Gb.boxtype=ub.S;Gb.tagname=ub.T;Gb.left=U.Vi();Gb.top=xa+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-Va;Gb.height=Va;Gb.width=U.Sh();var
E=new
yb(Gb);Db.Td(E);var
oa={};oa.boxtype=ub.U;oa.tagname=ub._;oa.empty=true;oa.left=0;oa.top=0;oa.width=ab-Va<=Db.Sh()?0:ab;oa.height=1;var
K=new
yb(oa);E.Td(K);var
nb={};nb.boxtype=ub.S;nb.tagname=ub.T;nb.left=pb.left+1;nb.top=xa+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-Va;nb.width=Va-1;nb.height=Db.Zg()-nb.top;var
X=new
yb(nb);Db.Td(X);return Db;};m.ld={};m.ld[ub.aa]=true;m.ld[ub.ba]=true;m.ld[ub.ca]=true;m.ld[ub.da]=true;m.ld[ub.ea]=true;m.ld[ub.fa]=true;m.ld[ub.ga]=true;q.paint=function(){this.applyDynamicProperties();var
z=this.getId();var
K=this.getClassName();var
E=this.Wl(true);E.setAttributes(ub.ha+z+ub.ia+(K?ub.ja+K:ub.I)+ub.ka+this.Wb()+this.pi(ub.ga,ub.la));var
y=this.Bf(m.ld,1);if(jsx3.CLASS_LOADER.IE)y=y+this.pi(ub.ma,ub.na,1);var
R=E.lg(1);R.setAttributes(ub.ha+z+ub.oa+y);var
Ka=R.lg(0);Ka.setStyles(this.Uc()+this.ti());Ka.setAttributes(this.pi(ub.pa,ub.qa,2));var
v=E.lg(2);v.setAttributes(this.pi(ub.x,ub.ra)+this.pi(ub.aa,ub.sa)+this.pi(ub.ba,ub.ta)+this.pi(ub.ua,ub.va)+this.pi(ub.ea,ub.wa)+Ua.pe+ub.xa);var
pa=this.getSuppressVScroller(0)==1?ub.ya:ub.I;v.setStyles(ub.za+pa);var
G=v.lg(0);G.setAttributes(ub.Aa+Ya.SPACE+ub.Ba);var
wb=E.lg(3);wb.setAttributes(this.pi(ub.x,ub.Ca)+this.pi(ub.ea,ub.Da)+Ua.pe+ub.Ea);pa=this.getSuppressHScroller(0)==1||this.getScaleWidth()==1||(wb.lg(0)).Sh()<=wb.Sh()?ub.ya:ub.I;wb.setStyles(ub.Fa+pa);var
Mb=wb.lg(0);Mb.setAttributes(ub.Aa+Ya.SPACE+ub.Ba);var
Jb=E.lg(4);Jb.setStyles(ub.Ga);var
Nb=ub.I;var
D=this.getPagingModel(0);if(D==0||D==4){if(this.MQ()==2)Nb=Nb+this.Z0(-1);Nb=Nb+this.Z0(0);if(this.MQ()==1)Nb=Nb+this.Z0(-1);}var
Ga=this.qz(true);var
ia=this.pi(ub.ba,ub.Ha);var
B=(E.paint()).join(this.eB()+(R.paint()).join((Ka.paint()).join(Nb+Ga))+(v.paint()).join((G.paint()).join(ub.I))+(wb.paint()).join((Mb.paint()).join(ub.I))+(Jb.paint()).join(ub.Ia)+ub.Ja+ub.Ka+ub.La+ia+ub.Ma);return B;};q.onAfterPaint=function(k){var
O=this.getPagingModel(0);if(O==0||O==4){this.F7();}else if(this.EK()||!this._jsxCX)jsx3.sleep(this.F7,ub.Na+this.getId(),this);};q.onAfterRestoreView=function(d){this.synchronizeVScroller();};q.qz=function(f){var
Ta=this.getPagingModel(0);var
Y=Ta==0||Ta==4;if(f&&Y||!f&&!Y){var
Eb=new
jsx3.util.Timer(m.jsxclass,this);var
wb=this.Xi();var
ja=[];for(var
X=0;X<wb.length;X++){var
O=wb[X];var
cb=O.getEditMasks();for(var
x=0;x<cb.length;x++){var
Ia=cb[x];if(m.ZJ(Ia,O))if(Ia.emGetType()==m.EditMask.NORMAL||Ia.emGetType()==m.EditMask.DIALOG)ja.push(Ia);}}var
M=ub.Oa+this.getId()+ub.Pa+this.paintChildren(ja)+ub.Qa;Eb.log(ub.Ra);return M;}return ub.I;};q.resetMask=function(){this.endEditSession();};q.repaintData=function(){var
Lb=new
jsx3.util.Timer(m.jsxclass,this);var
Ba=this.vD();if(Ba){var
x=this.getScrollTop();var
Bb=ub.I;var
K=this.getPagingModel(0);if(K==0||K==4){this.MA();if(this.MQ()==2)Bb=Bb+this.Z0(-1);Bb=Bb+this.Z0(0);if(this.MQ()==1)Bb=Bb+this.Z0(-1);}var
eb=this.getDocument(Ba);var
tb=eb.getElementById(this.getId()+ub.Sa);if(tb){tb.style.display=ub.y;Ba.parentNode.appendChild(tb);}Ba.innerHTML=Bb;this.F7(false,true);if(tb){tb.style.display=ub.I;Ba.appendChild(tb);}jsx3.sleep(function(){this.CE(x);},null,this);}Lb.log(ub.Ta);};q.CE=function(b){var
db=this.vD();if(b==null)b=this.getScrollTop();var
hb=db?db.offsetHeight:0;if(hb<b){this.setScrollTop(hb);}else this.setScrollTop(b);this.rV(db);};q.eB=function(){var
Z=this.getId();var
xa=this.Wl(true);var
Fa=((this.Wl(true)).lg(0)).Zg();var
na=xa.lg(0);na.setAttributes(ub.ha+Z+ub.Ua);var
qb=na.lg(0);var
L=qb.lg(0);L.setAttributes(ub.Va);var
ob=L.lg(0);var
F=[];var
Aa=this.oC();var
V=this.Xi();for(var
Na=0;Na<V.length;Na++){V[Na].tl({parentwidth:Aa[Na],parentheight:Fa},null);F.push(V[Na].paint());}var
v=(na.paint()).join((qb.paint()).join((L.paint()).join((ob.paint()).join(F.join(ub.I)))+this.G2(V)));return v;};q.repaintHead=function(){var
_=this.getDocument();var
Mb=_.getElementById(this.getId()+ub.Wa);if(Mb){var
sb=this.eB();Ua.setOuterHTML(Mb,sb);}};q.Vb=function(e,h){var
Cb=(this.getServer()).getJSXById(h.id);var
Hb=Cb.getDisplayIndex();this.YM(Hb);if(e.leftButton()&&Hb>=this.getFixedColumnIndex(0)&&this.getCanReorder()!=0){gb.publish(e);var
za=ub.Xa+this.getId()+ub.Ya+parseInt(h.offsetWidth)+ub.Za+Ua.getOuterHTML(h)+ub._a;var
Ba=(this.getRendered(e)).childNodes[0].childNodes[0];Ua.insertAdjacentHTML(Ba,ub.ab,za);var
qa=Ba.lastChild;var
Gb=this.oC();var
M=0;for(var
_a=0;_a<this.LK();_a++)M=M+Gb[_a];qa.style.left=M+ub.B;this._jsxi4=M;var
G=this.v4();var
rb=this.x8()-G;var
t=this;var
wa=this.getScrollLeft();La._beginMoveConstrained(e,qa,function(c,b){if(rb>0){var
R=parseInt(c/G*rb);t.setScrollLeft(R);c=c+R-wa;}return [c,0];});gb.subscribe(ub.ga,this,ub.bb);}else if(e.rightButton()){var
zb=Cb.getMenu();if(zb){var
U=(Cb.getServer()).getJSX(zb);if(U!=null){var
Sa={objEVENT:e,objMENU:U};var
H=Cb.doEvent(ub.cb,Sa);if(H!==false){if(H instanceof Object&&H.objMENU instanceof jsx3.gui.Menu)U=H.objMENU;U.showContextMenu(e,Cb);}}}}};q.Cw=function(o){jsx3.EventHelp.reset();gb.unsubscribe(ub.ga,this,ub.bb);var
Nb=(this.getRendered(o.event)).childNodes[0].childNodes[0].lastChild;var
ha=parseInt(Nb.style.left);Ua.removeNode(Nb);var
Ja=this.getChildren();var
ca=this.Xi();var
ta=ca[this.LK()];var
pa=jsx3.util.arrIndexOf(Ja,ta);if(ha==this._jsxi4){if(this.getCanSort()!=0)this.DQ(o.event);}else if(this.getCanReorder()!=0){var
jb=this.oC();var
Bb=0;for(var
sb=0;sb<ca.length;sb++){if(Bb>=ha){var
T=ca[sb];var
O=jsx3.util.arrIndexOf(Ja,T);this.YL(o.event,ta,T);return;}Bb=Bb+jb[sb];}this.YL(o.event,ta,ca[ca.length-1],true);}};q.d6=function(h){return h.getSortPath();};q.N2=function(f){return f.getSortDataType();};q.DQ=function(k){var
R=this.Xi();var
ka=R[this.LK()];if(ka&&ka.getCanSort()!=0&&this.getCanSort()!=0){this.mR();var
Mb=jsx3.util.arrIndexOf(this.getChildren(),ka);var
Ba=this.d6(ka);var
hb=this.N2(ka);var
ea=this.doEvent(ub.db,{objEVENT:k,objCOLUMN:ka,strSORTPATH:Ba,strSORTTYPE:hb});if(ea!==false){if(ea!=null&&typeof ea==ub.H)if(ea.objCOLUMN!=null){ka=ea.objCOLUMN;Ba=this.d6(ka);hb=this.N2(ka);}this.setSortPath(Ba);this.setSortType(hb);this.doSort();this.doEvent(ub.eb,{objEVENT:k,objCOLUMN:ka,strSORTPATH:Ba,strSORTTYPE:hb,strDIRECTION:this.getSortDirection(),_gipp:1});}}};q.doSort=function(o){if(o){this.setSortDirection(o);}else this.setSortDirection(this.getSortDirection()==ub.h?ub.i:ub.h);var
O=this.getSortPath();var
E=this.Xi();for(var
ob=0;ob<E.length;ob++)E[ob]._applySortIcon(E[ob].getSortPath()==O);delete this[ub.fb];this.repaintData();};q.getSortPath=function(){return this.jsxsortpath==null?ub.I:this.jsxsortpath;};q.setSortPath=function(p){this.jsxsortpath=p;};q.getSortType=function(){return this.jsxsorttype==null?ub.gb:this.jsxsorttype;};q.setSortType=function(n){this.jsxsorttype=n;};q.getSortDirection=function(){return this.jsxsortdirection==null?ub.h:this.jsxsortdirection;};q.setSortDirection=function(b){this.jsxsortdirection=b;};q.getCanSort=function(){return this.jsxsort;};q.setCanSort=function(s){this.jsxsort=s;};q.YL=function(r,h,f,i){var
vb=this.Xi();var
Ra=jsx3.util.arrIndexOf(vb,h);var
la=jsx3.util.arrIndexOf(vb,f);var
E=this.getFixedColumnIndex(-1);var
ba=h.getChildIndex();if(Ra<=E)return;if(la<E)f=(this.Xi())[E];if(!f)return;var
D=i?this.adoptChild(h,true):this.insertBefore(h,f,true);if(D){var
Xa=h.getChildIndex();this.doEvent(ub.hb,{objEVENT:r,intOLDINDEX:ba,intNEWINDEX:Xa,_gipp:1});}};q.adoptChild=function(l,h,a){this.jsxsuper(l,false,a);this.aI();if(h!==false)this.repaint();};q.insertBefore=function(b,n,p){var
cb=this.jsxsuper(b,n,false);if(cb){this.aI();if(p!=false)this.repaint();}return cb;};q.getCanReorder=function(){return this.jsxreorder;};q.setCanReorder=function(n){this.jsxreorder=n;};q.focusRowById=function(d){this.focusCellByIndex(d,0);};q.focusCellById=function(l,c){if(this.getRenderingModel()==m.REND_HIER)this.revealRecord(l);var
na=this.WA(l,c);if(na){Ua.focus(na);}else if(this.U6(l))jsx3.sleep(function(){jsx3.sleep(function(){this.focusCellById(l,c);},ub.ib,this);},ub.ib,this);};q.focusCellByIndex=function(k,e){if(this.getRenderingModel()==m.REND_HIER)this.revealRecord(k);var
ua=this.jO(k,e);if(ua){Ua.focus(ua);}else if(this.U6(k))jsx3.sleep(function(){jsx3.sleep(function(){this.focusCellByIndex(k,e);},ub.ib,this);},ub.ib,this);};q.U6=function(n){if(this.getPagingModel()==3){var
Sa=this.getSortedIds();var
Ra=Sa.length;for(var
Q=0;Q<Ra;Q++)if(Sa[Q]==n){this.setScrollTop(this.getRowHeight(m.DEFAULT_ROW_HEIGHT)*Q);this._jsxDY=this.getRowHeight(m.DEFAULT_ROW_HEIGHT)*Q;(this.ps()).unshift({index:this.QF()});this.X1();return true;}}return false;};q.tu=function(j,c){this.jz(j,c,true);this._scrollIntoView(c);};q.W3=function(l,a){};q.getFocusStyle=function(a){return this.jsxfocusstyle?this.jsxfocusstyle:a?a:null;};q.setFocusStyle=function(n){delete this[ub.jb];this.jsxfocusstyle=n;};q.Ns=function(d,o){if(typeof this._jsxX6!=ub.H)this._jsxX6=this.O4(this.getFocusStyle(m.FOCUS_STYLE));this.Po(d,this._jsxX6,o);};q.O4=function(r){var
J=ub.kb;var
u={};var
I=r.split(ub.lb);for(var
jb=0;jb<I.length;jb++){var
ia=I[jb]+ub.I;var
O=ia.split(ub.mb);if(O&&O.length==2){var
ua=O[0].replace(J,function(a,s){return (s.substring(1)).toUpperCase();});u[ua]=O[1];}}return u;};q.Po=function(h,o,k){if(k){for(var Cb in o)h.style[Cb]=o[Cb];}else for(var Cb in o)h.style[Cb]=ub.I;};q.PO=function(){return this._jsxcU;};q.vz=function(k){if(this._jsxcU!=k){var
M=this.DO();if(M)this.Ns(M,false);}this._jsxcU=k;};q.resetFocusContext=function(a){this.vz();};q.DO=function(){return (this.getDocument()).getElementById(this.PO());};q.jz=function(k,b,f){this.kK(k);var
sa=true;var
ga=this.Xi();var
qb=ga[b.cellIndex];var
Ga=qb.getEditMasks();for(var
L=0;L<Ga.length;L++){var
Ha=Ga[L];if(m.ZJ(Ha,qb))if(Ha.emGetType()!=m.EditMask.NORMAL){sa=false;break;}}if(!f&&sa)Ua.focus(b);this.vz(b.id);this.Ns(b,true);this.RA(k,b);};q.Zn=function(a,l){this.gk(a);};q.gk=function(p,j){if(j==null)j=this.getSelectedIds();for(var
Fa=0;Fa<j.length;Fa++){var
fb=j[Fa];var
Da=this.getRecordNode(fb);if(Da.getAttribute(ub.nb)==ub.ob)continue;this.eval(Da.getAttribute(ub.pb),this._getEvtContext({strRECORDID:fb}));}if(j.length)this.doEvent(ub.pb,{objEVENT:p,strRECORDID:j[0],strRECORDIDS:j});};q.executeRecord=function(c){var
bb=this.getRecordNode(c);if(bb)this.eval(bb.getAttribute(ub.pb),this._getEvtContext({strRECORDID:c}));};q.RA=function(l,a){var
Da=this.getSelectionModel(1);var
Fb=this.XA(a);var
vb=Fb.cell;var
kb=vb?vb.cellIndex:null;var
qa=Fb.row;var
db=qa.getAttribute(ub.qb);var
ba=this.MQ()&&this.CM(qa);if(!ba)if((this.I3()).ctrl){this.fS(db);if(this.isRecordSelected(db)){this.sZ(l,db,null);}else this.GI(l,db,qa,true,kb);}else if((this.I3()).shift){var
Eb=this.uD();if(Eb){this.GS(l,qa,kb);}else{this.fS(db);this.GI(l,db,null,false,kb);}}else{this.fS(db);if(!this.isRecordSelected(db))this.GI(l,db,null,false,kb);}this.S1(l,vb,(this.Xi())[kb],ba);delete this[ub.rb];};q.dX=function(){if(!this._jsxUY)this._jsxUY={bg:(this.getServer()).resolveURI(this.getSelectionBG(m.SELECTION_BG))};return this._jsxUY.bg;};q.getSelectionBG=function(p){return this.jsxselectionbg?this.jsxselectionbg:p?p:null;};q.setSelectionBG=function(c){delete this[ub.sb];this.jsxselectionbg=c;};q.fS=function(r){this._jsxkT=r;};q.uD=function(){return this._jsxkT;};q.gD=function(){return (this.getDocument()).getElementById(this.uD());};q.A3=function(c,n,g){g.push(c);var
I=c.getParent();return !I.equals(n)?this.A3(I,n,g):g;};q.getSelectedNodes=function(){return (this.getXML()).selectNodes(ub.tb+ub.ub+ub.vb);};q.getSelectedIds=function(){var
Bb=[];var
R=(this.getXML()).selectNodeIterator(ub.tb+ub.ub+ub.vb);while(R.hasNext()){var
Ca=R.next();Bb[Bb.length]=Ca.getAttribute(ub.qb);}return Bb;};q.kk=function(h){var
S=this.getRecord(h);return S&&(S[ub.nb]==null||S[ub.nb]!=ub.ob);};q.isRecordSelected=function(l){var
bb=this.getRecord(l);return bb!=null&&bb[ub.ub]==ub.ob;};q.selectRecord=function(b){if(this.getSelectionModel()==0)return;if(!this.kk(b))return;this.GI(false,b,null,this.getSelectionModel()==2);};q.deselectRecord=function(c){this.sZ(false,c,null);};q.deselectAllRecords=function(){var
fa=this.getSelectedIds();var
Q=fa.length;for(var
Ea=0;Ea<Q;Ea++)this.sZ(false,fa[Ea]);};q.GI=function(e,b,n,f,o){var
Fa=this.getSelectionModel(1);var
sb=this.getRecordNode(b);var
Ga=f||e&&this.getCanDrag()==1;if(Fa==0||!sb||sb.getAttribute(ub.ub)==ub.ob&&Ga||sb.getAttribute(ub.nb)==ub.ob)return false;var
za=f&&Fa==2;if(!za)this.deselectAllRecords();sb.setAttribute(ub.ub,ub.ob);n=n||this.wN(b);if(n!=null){var
H=ub.wb+this.dX()+ub.Z;for(var
Mb=0;Mb<n.childNodes.length;Mb++)n.childNodes[Mb].style.backgroundImage=H;}this.Wz(e,b,o);return true;};q.sZ=function(i,g,r){var
ka=this.getRecordNode(g);if(!ka||ka.getAttribute(ub.ub)!=ub.ob)return false;ka.removeAttribute(ub.ub);r=r||this.wN(g);if(r!=null&&r.childNodes){r.style.backgroundImage=ub.I;for(var
B=0;B<r.childNodes.length;B++)r.childNodes[B].style.backgroundImage=ub.I;}this.Wz(i);return true;};q.GS=function(n,a,o){if(!a)return;var
Fb=this.uD();var
I=a.getAttribute(ub.qb);if(!this.kk(Fb)||!this.kk(I))return;var
Z=this.getSelectedIds();var
Wa=Z.length;for(var
xb=0;xb<Wa;xb++)this.sZ(false,Z[xb],this.wN(Z[xb]));Z=this.getSortedIds();var
Y=new
jsx3.util.List(Z);var
vb=Y.indexOf(Fb);var
jb=Y.indexOf(I);var
oa=Math.min(vb,jb);var
M=Math.max(vb,jb);var
za=Z.length;var
ca=0;for(var
xb=oa;xb<=M;xb++)this.GI(false,Z[xb],this.wN(Z[xb]),true,o);this.Wz(n,I,o);};q.Wz=function(l,d,s){if(l&&l instanceof gb){this.doEvent(ub.xb,{objEVENT:l,strRECORDID:d,strRECORDIDS:this.getSelectedIds(),objCOLUMN:s!=null?(this.Xi())[s]:null,_gipp:1});this.doEvent(ub.yb,{objEVENT:l});}};q.S1=function(r,k,f,s){var
Ha=f.getEditMask();if(Ha!=null){var
db,Ma;if(s){var
Sa=this.a3();Ma=Sa[f.getPath()];db=ub.zb;}else{db=k.parentNode.getAttribute(ub.qb);Ma=f.getValueForRecord(db);}var
Ea=this.getRendered(k);var
w=this.vD();var
Cb=Ha.emGetType()==m.EditMask.NORMAL||Ha.emGetType()==m.EditMask.DIALOG;if(Cb){var
ib=this.doEvent(ub.Ab,{objEVENT:r,strRECORDID:db,objCOLUMN:f});if(ib===false)return;if(ib!=null&&typeof ib==ub.H)if(typeof ib.objMASK!=ub.Bb)Ha=ib.objMASK;}var
xb=Ua.getRelativePosition(w,k);var
X=Ua.getRelativePosition(Ea,Ea);X.W-=parseInt(w.style.left);X.H-=parseInt(w.style.top);var
Aa=this._jsxOM;if(Aa&&Aa.mask&&Aa.mask.emGetSession())this.endEditSession();if(Ha.Hx(Ma,xb,X,this,f,db,k)){this._jsxOM={mask:Ha,column:f,recordId:db,value:Ma};gb.subscribeLoseFocus(this,(this.getRendered(k)).childNodes[1],ub.Cb);}}};q.getAutoRowSession=function(){return this.a3();};q.a3=function(){if(!this._jsxyP){this._jsxyP={jsxid:jsx3.xml.CDF.getKey()};this._jsxz3={jsxid:this._jsxyP.jsxid};}return this._jsxyP;};q.q5=function(){if(this._jsxyP)for(var oa in this._jsxyP)if(this._jsxz3[oa]!=this._jsxyP[oa]&&!(jsx3.util.strEmpty(this._jsxyP[oa])&&jsx3.util.strEmpty(this._jsxz3[oa])))return true;return false;};q.wM=function(b){var
aa=this.a3();aa[b.column.getPath()]=b.newvalue;};q.F0=function(i,r){if(r!==false)this.kK(i);var
ha=this.a3();if(ha!=null&&!jsx3.util.strEmpty(ha.jsxid)){delete this[ub.Db];var
Ha;if(i)Ha=this.doEvent(ub.Eb,{objEVENT:i,objRECORD:ha});if(Ha!==false){var
K=this.insertRecord(ha,this.getRenderingContext(ub.Fb),true);if(i)this.doEvent(ub.Gb,{objEVENT:i,objRECORDNODE:K,_gipp:1});}var
M={jsxid:ub.zb};this.insertRecord(M,null,false);this.redrawRecord(ub.zb,2);this.deleteRecord(ub.zb,false);}};q.commitAutoRowSession=function(e,f){this.F0(e,false);if(!isNaN(f)){var
tb=this.wN(ub.zb);if(tb&&tb.childNodes[+f])Ua.focus(tb.childNodes[+f]);}};q.BP=function(){delete this[ub.Db];};q.CM=function(r){if(!r)return false;if(r.getAttribute(ub.qb)!=ub.zb)return false;var
Hb=r.parentNode;if(Hb.tagName.toLowerCase()!=ub.C)Hb=Hb.parentNode;return Hb.getAttribute(ub.zb)==ub.Hb;};q.kK=function(o,b){var
Da=this._jsxOM;if(Da!=null){if(!b){delete this[ub.Ib];gb.unsubscribeLoseFocus(this);}var
wa=b?Da.mask.emGetValue():Da.mask.DW();var
z=Da.recordId==ub.zb&&this.MQ()&&this.CM(this.wN(ub.zb));var
O=true;if(o&&z){var
mb=this.wN(ub.zb);O=Ua.findElementUp(o.srcElement(),function(f){return f==mb;},true)==null;}if(!(O&&z&&this.q5()))if(Da.value===wa)return;var
ba=Da.mask.emGetType()==m.EditMask.NORMAL||Da.mask.emGetType()==m.EditMask.DIALOG;var
nb=true;if(ba){if(o!=null)nb=this.doEvent(ub.Jb,{objEVENT:o,strRECORDID:Da.recordId,objCOLUMN:Da.column,strNEWVALUE:wa});if(nb!=null&&typeof nb==ub.H)if(typeof nb.strNEWVALUE!=ub.Bb)wa=nb.strNEWVALUE;var
Ab=Da.column.getPath()==ub.qb;if(Ab&&this.getRecordNode(wa))nb=false;if(nb!==false){if(b)Da.value=wa;if(z){Da.newvalue=wa;this.wM(Da);var
da=this.a3();var
Bb={};for(var u in da)Bb[u]=da[u];Bb.jsxid=ub.zb;this.insertRecord(Bb,null,false);this.redrawCell(ub.zb,Da.column);this.deleteRecord(ub.zb,false);if(O&&!b&&this.q5())this.F0(o,false);}else if(Ab){this.insertRecordProperty(Da.recordId,ub.qb,wa,false);this.redrawCell(wa,Da.column);}else{Da.column.setValueForRecord(Da.recordId,wa);this.redrawCell(Da.recordId,Da.column);}}}if(o!=null&&nb!==false)this.doEvent(ub.Kb,{objEVENT:o,strRECORDID:Da.recordId,objCOLUMN:Da.column,strVALUE:wa,_gipp:1});}};q.endEditSession=function(p){this.kK(p);};q.collapseEditSession=function(f,g){var
H=this._jsxOM;if(H!=null){H.mask.emCollapseEdit(f);this.endEditSession(f);Ua.focus(g);}};q.YD=function(k){var
Ka=k.event.srcElement();var
y=this._jsxOM;if(y&&!y.f1&&!y.mask.containsHtmlElement(Ka))this.kK(k.event);};m.ZJ=function(l,o){if(l._jsxkO)return true;if(l.instanceOf(jsx3.gui.Form)){m.EditMask.jsxclass.mixin(l,true);}else if(jsx3.gui.Dialog&&l instanceof jsx3.gui.Dialog){m.DialogMask.jsxclass.mixin(l,false);m.BlockMask.jsxclass.mixin(l,true);m.EditMask.jsxclass.mixin(l,true);}else if(l instanceof Ya){m.BlockMask.jsxclass.mixin(l,true);m.EditMask.jsxclass.mixin(l,true);}else return false;l.emInit(o);l._jsxkO=true;return true;};q.Pb=function(p,i){p.cancelBubble();gb.publish(p);var
fa=p.srcElement();var
Y=this.XA(fa);var
ma=fa.getAttribute(ub.Lb);if(ma==ub.Mb||ma==ub.Nb){this.Ms(p,fa);}else while(fa&&fa!=i){if(fa.getAttribute(ub.Lb)==ub.Ob)if(!jsx3.gui.isMouseEventModKey(p)&&!p.shiftKey()){var
Ja=Y.row.getAttribute(ub.qb);var
Ib=this.getSelectedIds();var
ra=Ib.length==1&&Ja==Ib[0]?false:p;this.deselectAllRecords();this.GI(ra,Ja,Y.row,false,Y.cell?Y.cell.cellIndex:null);return;}fa=fa.parentNode;}};q.Ms=function(p,i,d){var
va=this.DC(i);var
T=(this.mI(va.previousSibling)).getAttribute(ub.qb);var
qb=this.getRecordNode(T);if(!qb.selectSingleNode(ub.Pb))return;if(d==null)d=false;if(i.nodeType==3)i=i.parentNode;var
z=i.getAttribute(ub.Lb);if(va.style.display==ub.y||d){d=true;qb.setAttribute(ub.Qb,ub.ob);va.style.display=ub.I;if(this.getRenderNavigators(1)!=0)i.style.backgroundImage=ub.wb+(this.getUriResolver()).resolveURI(this.getIconMinus(m.ICON_MINUS))+ub.Z;if(this.kW(va)){Qa.trace(ub.Rb+T);var
fa={};fa.jsx_panel_css=ub.Sb;fa.jsx_column_widths=this.x8();fa.jsx_rendering_context=T;fa.jsx_context_index=va.getAttribute(ub.Tb);va.innerHTML=this.doTransform(fa);if(this.getRenderNavigators(1)!=0)i.setAttribute(ub.Lb,ub.Mb);var
Ba={painted:1,token:m.getToken(),contextnodes:va.childNodes};(this.T6())[0]=Ba;this.QM(Ba);}}else{qb.removeAttribute(ub.Qb);va.style.display=ub.y;if(this.getRenderNavigators(1)!=0)i.style.backgroundImage=ub.wb+(this.getUriResolver()).resolveURI(this.getIconPlus(m.ICON_PLUS))+ub.Z;}this.rV();if(p)this.doEvent(ub.Ub,{objEVENT:p,strRECORDID:T,objRECORD:qb,bOPEN:d,_gipp:1});};q.toggleItem=function(o,r){var
Kb=this.jO(o,0);if(Kb!=null){while(Kb&&Kb.getAttribute&&Kb.getAttribute(ub.Lb)!=ub.Mb&&Kb.getAttribute(ub.Lb)!=ub.Nb)Kb=Kb.childNodes[0];this.Ms(false,Kb,r);}};q.revealRecord=function(k){var
Eb=this.getRecordNode(k);if(Eb){if(this.getRenderingModel()==m.REND_HIER){var
fa=[];do
fa.push(Eb.getAttribute(ub.qb));while((Eb=Eb.getParent())!=null&&Eb.getNodeName()==ub.Ob);for(var
cb=fa.length-1;cb>=0;cb--)this.toggleItem(fa[cb],true);}this.synchronizeVScroller();var
kb=this.jO(k,0);if(kb){this._scrollIntoView(kb);}else if(this.U6(k))jsx3.sleep(function(){jsx3.sleep(function(){var
kb=this.jO(k,0);if(kb)this._scrollIntoView(kb);},ub.Vb,this);},ub.Vb,this);}};q.DC=function(p){while(!p.tagName||p&&p.tagName&&p.tagName.toLowerCase()!=ub.C||p.id==ub.I)p=p.parentNode;return p.nextSibling;};q.getDragIcon=function(e,h,b,c){var
ga=jsx3.EventHelp.DRAGIDS;var
Ba=ub.I;var
ca=e.id;var
Fa=0.4;var
vb=e.getAttribute(ub.qb);if(h.kk(vb)&&jsx3.util.arrIndexOf(ga,vb)==-1)ga.push(vb);for(var
Sa=0;Sa<ga.length&&Sa<4;Sa++){var
T=h.wN(ga[Sa]);if(T)Ba=Ba+h.hU(T,Fa);Fa=Fa-0.1;}return Ba;};q.hU=function(g,l){var
Ca=g;while(Ca.tagName.toLowerCase()!=ub.C)Ca=Ca.parentNode;return ub.Wb+Ua.getCSSOpacity(l)+ub.Xb+ub.Yb+Ca.getAttribute(ub.Zb)+ub._b+Ca.getAttribute(ub.ac)+ub.Xb+ub.bc+g.getAttribute(ub.Zb)+ub._b+g.getAttribute(ub.ac)+ub.Xb+g.innerHTML+ub.cc;};if(jsx3.CLASS_LOADER.IE)q.c3=function(f,g){var
pa=f.srcElement();var
ob=this.getSelectionModel()!=0;if(ob&&!(pa&&pa.tagName.search(ub.dc)==0))f.cancelAll();};q.Xg=function(c,j){var
X=true;this.MR(c);if(c.leftButton()){var
Ra=c.srcElement();var
ra=this.XA(Ra);if(ra==null)return;if(ra){j=ra.cell;if(this.PO()!=j.id){Ua.focus(j);}else{this.rF();this.jz(c,j);}if(this.getCanDrag()==1&&this.getSelectionModel(1)>0){var
vb=this.getSelectedIds();var
t=ra.row.getAttribute(ub.qb);var
O=jsx3.util.List.wrap(vb);if(O.indexOf(t)==-1)vb=[t];if(this.kk(t)&&jsx3.util.arrIndexOf(vb,t)==-1)vb.push(t);this.doDrag(c,ra.row,this.getDragIcon,{strDRAGIDS:vb});X=true;}else X=this._jsxOM!=null;}}if(X){gb.publish(c);c.cancelAll();}};q.Pe=function(r,n){var
w=r.toElement();if(!w)return;var
sa=w.getAttribute(ub.Lb);var
Eb=this.XA(w);if(!Eb)return;var
Ab=Eb.row.getAttribute(ub.qb);n=this.MZ(Eb.row);if(jsx3.EventHelp.isDragging()&&this.getCanDrop()==1&&(jsx3.EventHelp.getDragIds())[0]!=null){if(sa==ub.Mb&&(this.getRecordNode(Ab)).getAttribute(ub.Qb)!=ub.ob||sa==ub.Nb){var
nb=this;r.rj();m.TOGGLETIMEOUT=window.setTimeout(function(){if(nb.getParent()!=null)nb.Ms(r,w);},m.GF);}var
Q=this.doEvent(ub.ec,{objEVENT:r,strRECORDID:Ab,objSOURCE:jsx3.EventHelp.getDragSource(),strDRAGIDS:jsx3.EventHelp.getDragIds(),strDRAGTYPE:jsx3.EventHelp.getDragType(),objGUI:n});if(!(Q===false)){var
oa=this.getRendered(r);var
eb=this.getAbsolutePosition(oa,Eb.row);var
z=this.yR(oa);var
rb=this.getRenderingModel()==m.REND_HIER&&this.getRenderNavigators(1)!=0?parseInt(Eb.row.childNodes[0].childNodes[0].childNodes[0].getAttribute(ub.E)):4;if(this.getRenderingModel()!=m.REND_HIER||eb.H/3>r.getOffsetY()){z.style.top=eb.T-4+ub.B;z.style.width=this.v4()-rb-8+ub.B;z.style.height=ub.fc;z.style.backgroundImage=ub.wb+m.INSERT_BEFORE_IMG+ub.Z;z.setAttribute(ub.gc,ub.hc);}else{rb=rb+26;z.style.width=ub.ic;z.style.height=ub.ic;z.style.top=eb.T-10+eb.H+ub.B;z.style.backgroundImage=ub.wb+m.APPEND_IMG+ub.Z;z.setAttribute(ub.gc,ub.jc);}z.style.left=rb+ub.B;z.setAttribute(ub.kc,Ab);z.style.display=ub.z;}}else if(this.getEvent(ub.lc)){this.applySpyStyle(w);var
Kb=r.clientX()+jsx3.EventHelp.DEFAULTSPYLEFTOFFSET;var
x=r.clientY()+jsx3.EventHelp.DEFAULTSPYTOPOFFSET;r.rj();var
nb=this;var
fb=(this.Xi())[Eb.cell.cellIndex];if(m.SPYTIMEOUT)window.clearTimeout(m.SPYTIMEOUT);m.SPYTIMEOUT=window.setTimeout(function(){m.SPYTIMEOUT=null;if(nb.getParent()!=null)nb.Yu(r,Ab,fb,w);},jsx3.EventHelp.SPYDELAY);}};q.Yu=function(p,j,d,k){this.removeSpyStyle(k);var
V=this.doEvent(ub.lc,{objEVENT:p,objCOLUMN:d,strRECORDID:j});if(V)this.showSpy(V,p);};q.aV=function(a,l){this.BJ(l.parentNode);if(jsx3.EventHelp.isDragging()&&this.getCanDrop()==1&&(jsx3.EventHelp.getDragIds())[0]!=null){var
ma=this;this._jsxMK={offsety:a.getOffsetY(),offsetheight:l.offsetHeight,scrollheight:l.scrollHeight};this._jsxMK.interval=window.setInterval(function(){ma.bX();},m.AUTO_SCROLL_INTERVAL);}};q.bX=function(){if(this._jsxMK.offsety<this._jsxMK.offsetheight/2){if(this.getScrollTop()>0)this.setScrollTop(this.getScrollTop()-20);}else if(this.getScrollTop()<this._jsxMK.scrollheight)this.setScrollTop(this.getScrollTop()+20);};q.gN=function(p,i){if(this._jsxMK){window.clearInterval(this._jsxMK.interval);delete this[ub.mc];}};q.au=function(r,n){if(jsx3.EventHelp.isDragging()&&this.getCanDrop()==1&&(jsx3.EventHelp.getDragIds())[0]!=null&&this._jsxMK){this._jsxMK.offsety=r.getOffsetY();this._jsxMK.offsetheight=n.offsetHeight;this._jsxMK.scrollheight=n.scrollHeight;}};q._ebMouseOutDropIcon=function(s,j){if(!s.isFakeOut(j.parentNode.childNodes[1]))this.BJ(j.parentNode);};q.nk=function(h,e){var
Fa=h.fromElement();if(h.isFakeOut(e))this.BJ(e.parentNode);if(!jsx3.EventHelp.isDragging()&&this.getEvent(ub.lc)){var
la=h.toElement();var
da=false;try{da=!la||la.className!=ub.nc;}catch(Kb){da=true;}if(da){jsx3.sleep(La.hideSpy);this.removeSpyStyle(Fa);if(m.SPYTIMEOUT)window.clearTimeout(m.SPYTIMEOUT);}}if(Fa==null||h.isFakeOut(e.parentNode)&&Fa.getAttribute(ub.Lb)!=ub.Mb)return;var
fb=Fa.getAttribute(ub.Lb);var
U=this.XA(Fa);if(!U)return;var
z=U.row.getAttribute(ub.qb);e=this.MZ(U.row);if(jsx3.EventHelp.isDragging()&&this.getCanDrop()==1){if(fb==ub.Mb)window.clearTimeout(m.TOGGLETIMEOUT);var
w=this.doEvent(ub.oc,{objEVENT:h,strRECORDID:z,objSOURCE:jsx3.EventHelp.getDragSource(),strDRAGIDS:jsx3.EventHelp.getDragIds(),strDRAGTYPE:jsx3.EventHelp.getDragType(),objGUI:e});this.BJ(this.getRendered(h));}};q.XA=function(l){var
Ga=l;var
kb=null;while(Ga.getAttribute(ub.Lb)!=ub.Ob){kb=Ga;Ga=Ga.parentNode;if(!Ga.tagName||Ga.tagName.toLowerCase()==ub.pc||Ga.id==this.getId())return null;}return {row:Ga,cell:kb};};q.MZ=function(p){if(this.getRenderingModel()==ub.qc){p=(this.DC(p)).parentNode;}else if(this.getPagingModel(0)!=3)while(p.tagName.toLowerCase()!=ub.C)p=p.parentNode;return p;};q.eo=function(e,h){};q.lk=function(r,n){var
Lb=r.getWheelDelta();var
X=this.vD();var
ca=this.getScrollTop();ca=Math.max(0,Math.min(ca-Lb*m.SCROLL_INC,X.offsetHeight));this.collapseEditSession(r,n);this.setScrollTop(ca,n);r.cancelAll();};q._isDescendantOrSelf=function(r,l){while(r&&l){if(r.equals(l))return true;r=r.getParent();}return false;};q._onMouseUp=function(a,l){var
qb=a.srcElement()&&(a.srcElement()).className==ub.rc?(this.wN((a.srcElement()).getAttribute(ub.kc))).childNodes[0]:a.srcElement();var
Eb=this.XA(qb);if(this.getCanDrop()==1&&jsx3.EventHelp.isDragging()){if(jsx3.EventHelp.getDragType()==ub.sc){jsx3.sleep(function(){this.BJ();},null,this);var
ua=jsx3.EventHelp.getDragSource();if(ua&&ua.instanceOf(jsx3.xml.CDF)){var
Va=jsx3.gui.isMouseEventModKey(a);var
L=ua.doEvent(ub.tc,{objEVENT:a,strRECORDID:jsx3.EventHelp.getDragId(),strRECORDIDS:jsx3.EventHelp.getDragIds(),objTARGET:this,bCONTROL:Va});var
mb=this.yR(this.getRendered(a));var
na=mb.getAttribute(ub.gc)==ub.hc;var
Xa=Eb?Eb.row.getAttribute(ub.qb):null;var
rb={objEVENT:a,objSOURCE:ua,strDRAGIDS:jsx3.EventHelp.getDragIds(),strDRAGTYPE:jsx3.EventHelp.getDragType(),strDRAGID:jsx3.EventHelp.getDragId(),strRECORDID:Xa,bINSERTBEFORE:na,objCOLUMN:Eb!=null?(this.Xi())[Eb.cell.cellIndex]:null,bALLOWADOPT:L!==false};var
nb=this.doEvent(Va?ub.uc:ub.vc,rb);if(L!==false&&nb!==false){var
qa=jsx3.EventHelp.getDragIds();var
kb=Eb?this.getRecordNode(Eb.row.getAttribute(ub.qb)):null;for(var
vb=0;vb<qa.length;vb++){var
ja=this.getRecordNode(qa[vb]);if(kb&&(this.getRecordNode(qa[vb])).equals(kb)&&na&&kb.getNextSibling()){kb=kb.getNextSibling();Xa=kb.getAttribute(ub.qb);}if(!(this==ua&&Eb&&this._isDescendantOrSelf(kb,ja))){ua.deleteRecordProperty(qa[vb],ub.ub,false);var
V;if(na){V=true;var
Fb=this.adoptRecordBefore(ua,qa[vb],Xa);}else{V=Eb!=null;var
Ra;if(this.getRenderingModel()==m.REND_HIER&&Eb){Ra=Eb.row.getAttribute(ub.qb);}else Ra=this.getRenderingContext();var
Fb=this.adoptRecord(ua,qa[vb],Ra,Eb!=null);}}}if(!V&&!Eb)this.repaint();}}}jsx3.EventHelp.reset();}else if(a.rightButton()){var
oa=this.getMenu();if(oa){var
Ka=(this.getServer()).getJSX(oa);if(Ka!=null){var
jb,Aa;if(Eb){jb=(this.Xi())[Eb.cell.cellIndex];Aa=Eb.row.getAttribute(ub.qb);}var
wa={objEVENT:a,objMENU:Ka,strRECORDID:Aa,objCOLUMN:jb};var
ab=this.doEvent(ub.cb,wa);if(ab!==false){if(ab instanceof Object&&ab.objMENU instanceof jsx3.gui.Menu)Ka=ab.objMENU;Ka.showContextMenu(a,this,Aa);}}}}};q.MR=function(l){this._jsxhU={ctrl:jsx3.gui.isMouseEventModKey(l),shift:l.shiftKey(),alt:l.altKey()};};q.I3=function(){return this._jsxhU!=null?this._jsxhU:{};};q._ebKeyDown=function(l,a){if(this.jsxsupermix(l,a))return;var
cb=l.keyCode();var
ba=l.hasModifier(true);var
C=cb==9&&!ba;var
Pa=this.getSelectionModel(1);this.MR(l);if(this.PO()==null){var
za=this.qt();if(za){this.vz(za.id);}else return;}var
N=this.DO();var
D=this.MQ()&&N&&this.CM(N.parentNode);var
ea=false;if(D&&(cb==13||cb==40||cb==38||N.parentNode.lastChild==N&&(C&&!l.shiftKey()||cb==39)||N.parentNode.firstChild==N&&(C&&l.shiftKey()||cb==37))){var
M=N.cellIndex;if(cb==13){this.kK(l);var
Q=N.parentNode;if(!Q)Q=this.wN(ub.zb);if(Q&&Q.childNodes[M])Ua.focus(Q.childNodes[M]);}else if(this.MQ()==2&&cb==40){var
Ab=this.nI();if(Ab){var
U=this.mI(Ab);if(U)Ua.focus(U.childNodes[M]);}}else if(this.MQ()==1&&cb==38){var
Ab=this.CV();if(Ab){var
U=this.ZH(Ab);if(U)Ua.focus(U.childNodes[M]);}}else if(N.parentNode.lastChild==N&&(C&&!l.shiftKey()||cb==39)){Ua.focus(N.parentNode.firstChild);}else if(N.parentNode.firstChild==N&&(C&&l.shiftKey()||cb==37))Ua.focus(N.parentNode.lastChild);ea=true;}else if(N){var
M=N.cellIndex;var
ha=N.parentNode.getAttribute(ub.qb);if(cb==38||cb==13&&l.shiftKey()){var
kb=this.P2(ub.wc,N,true,M);ea=this.KI(kb);}else if(cb==40||cb==13&&!l.shiftKey()&&Pa==0){var
kb=this.P2(ub.xc,N,true,M);ea=this.KI(kb);}else if(cb==37||C&&l.shiftKey()){if(this.getRenderingModel()==m.REND_HIER&&M==0&&this.getSuppressVScroller()!=1){var
Aa=N.parentNode.getAttribute(ub.qb);var
wb=this.getRecordNode(Aa);var
va=wb.getAttribute(ub.Qb);if(va==1&&wb.selectSingleNode(ub.Ob)){var
P=this.tX(N);this.Ms(l,P,false);ea=true;}else{var
kb=this.P2(ub.yc,N,true,M);ea=this.KI(kb);}}if(!ea){var
kb=this.P2(ub.yc,N,true,M);ea=this.KI(kb);}}else if(cb==39||C&&!l.shiftKey()){if(this.getRenderingModel()==m.REND_HIER&&M==0&&this.getSuppressVScroller()!=1){var
Aa=N.parentNode.getAttribute(ub.qb);var
wb=this.getRecordNode(Aa);var
va=wb.getAttribute(ub.Qb);if(va!=1&&(wb.getAttribute(ub.zc)==ub.ob||wb.selectSingleNode(ub.Ob))){var
P=this.tX(N);this.Ms(l,P,true);ea=true;}else{var
kb=this.P2(ub.Ac,N,true,M);ea=this.KI(kb);}}if(!ea){var
kb=this.P2(ub.Ac,N,true,M);ea=this.KI(kb);}}else if(cb==13){this.gk(l);ea=true;}else if(C&&l.shiftKey()){this.focus();ea=true;}else if(C){Ua.focus((this.getRendered(l)).lastChild);ea=true;}}if(ea)l.cancelAll();};q.KI=function(n){if(n){jsx3.sleep(function(){try{Ua.focus(n);}catch(Kb){}});return true;}};q.tX=function(d){var
Y=d.childNodes[0].childNodes[0];var
pa=this.mI(Y);if(pa)return pa.childNodes[0];};q.WL=function(){return this._jsxP9;};q.rF=function(o){this._jsxP9=o;};q.P2=function(f,l,j,k){var
ba=this.getSelectionModel(1);if(f==ub.Ac){this.rF();if(l.parentNode.lastChild!=l){return l.nextSibling;}else if(l.parentNode.lastChild==l&&ba>0){return l.parentNode.firstChild;}else{f=ub.xc;l=l.parentNode.firstChild;k=0;}}else if(f==ub.yc){this.rF();if(l.parentNode.firstChild!=l){return l.previousSibling;}else if(l.parentNode.firstChild==l&&ba>0){return l.parentNode.lastChild;}else{f=ub.wc;l=l.parentNode.lastChild;k=l.cellIndex;}}var
Za=this.AL(f,l.parentNode,j);if(Za){if(this.WL()&&(f==ub.wc||f==ub.xc)&&Za.childNodes.length>1){k=this.WL();this.rF();}var
ab=Za.childNodes[k];if(ab){return ab;}else{this.rF(k);return Za.childNodes[0];}}else return null;};q.AL=function(g,c,s){if(g==ub.yc)g=ub.wc;else if(g==ub.Ac)g=ub.xc;if(this.getRenderingModel()==m.REND_HIER)return this.s3(g,c);if(g==ub.wc&&c.previousSibling&&c.previousSibling.tagName.toLowerCase()!=ub.Bc){return c.previousSibling;}else if(g==ub.xc&&c.nextSibling){return c.nextSibling;}else{var
Y=this.O0(this.kw(c));var
fb;var
L=this.getRenderingModel()==m.REND_HIER?this.EK():(this.T6()).length;if(g==ub.wc&&Y==0||g==ub.xc&&Y==L-1){if(g==ub.wc&&this.MQ()==2||g==ub.xc&&this.MQ()==1)return this.mI(this.IT());else return null;}else if(g==ub.wc&&(fb=this.HA(Y-1))!=null){var
wa=this.getRenderingModel()==m.REND_HIER?1:this.getRowsPerPanel(m.DEFAULT_ROWS_PER_PANEL);return this.ZH(fb);}else if(g==ub.xc&&(fb=this.HA(Y+1))!=null)return this.mI(fb);}return null;};q.s3=function(a,p){var
qa=p;if(a==ub.wc){while(qa.tagName.toLowerCase()!=ub.C)qa=qa.parentNode;var
Eb=this.zu(qa.parentNode.previousSibling);if(Eb)return Eb;var
wb=qa.parentNode.parentNode.previousSibling;return this.mI(wb);}else if(a==ub.xc){while(qa.tagName.toLowerCase()!=ub.C)qa=qa.parentNode;var
Hb=qa.nextSibling;if(Hb&&Hb.style.display.toLowerCase()!=ub.y){var
ha=Hb.childNodes[0].childNodes[0];return this.mI(ha);}Hb=qa.parentNode.nextSibling;if(Hb){var
ha=Hb.childNodes[0];return this.mI(ha);}return this.f4(qa.parentNode);}return null;};q.zu=function(i){if(i){var
sa=i.childNodes[1];if(sa&&sa.style.display.toLowerCase()!=ub.y&&sa.childNodes.length){var
Pa=sa.lastChild;sa=Pa.childNodes[1];if(sa&&sa.style.display.toLowerCase()!=ub.y&&sa.childNodes.length){return this.zu(Pa);}else return this.mI(Pa.childNodes[0]);}return this.mI(i.childNodes[0]);}return null;};q.f4=function(a){var
D=a.parentNode.parentNode.nextSibling;if(D){return this.mI(D.childNodes[0]);}else{var
Ia=a.parentNode.parentNode;if(Ia)return this.f4(Ia);}return null;};q._scrollIntoView=function(a){var
lb=this.getRendered(a);if(lb){var
Sa=Ua.getRelativePosition(this.vD(lb),a);var
Oa=this.getScrollTop();var
zb=Sa.T;var
V=yb.getScrollSize();var
Jb=lb.childNodes[3].style.display==ub.y?0:V;var
eb=parseInt(((this.Wl(true)).lg(1)).Zg()-Jb+1);if(!(zb>Oa&&zb+Sa.H<Oa+eb)){var
Da=Math.abs(zb-Oa);var
xa=Math.abs(zb-(Oa+eb)+Sa.H+1);if(xa<Da){if(xa==0)xa=Sa.H;this.setScrollTop(Oa+xa);}else this.setScrollTop(zb-(V+1));}if(this.getScaleWidth()!=1){var
C=this.getScrollLeft();var
Fb=Sa.L;var
xb=parseInt(((this.Wl(true)).lg(1)).Sh()-V+1);if(!(Fb>C&&Fb+Sa.W<C+(xb-(V+1)))){var
N=Math.abs(Fb-C);var
F=Math.abs(Fb-(C+xb));if(F<N){this.setScrollLeft(Fb);}else this.setScrollLeft(Fb-(V+1));}}}};q.G2=function(s){var
T=[];var
Pa=0;var
O=(this.Wl()).lg(0);var
W=O.Zg();var
N=this.oC();for(var
oa=0;oa<s.length;oa++){var
Y=s[oa].Wl();Pa=Pa+Y.getOffsetWidth();var
Fb=this.getResizable()!=0&&oa<s.length-1&&s[oa].getResizable()!=0;if(Fb){var
eb=this.pi(ub.ea,ub.Cc,3)+this.pi(ub.ca,ub.Dc,3);var
Aa=ub.I;}else{var
eb=ub.I;var
Aa=ub.Ec;}T.push(ub.Fc+oa+ub.Gc+(Pa-4)+ub.Hc+Aa+ub.Ic+4+ub.Jc+Ya.SPACE+ub.Kc+W+ub.Lc+eb+ub.Ma);}return T.join(ub.I);};q.c1=function(k,e){if(!k.leftButton())return;gb.publish(k);this.collapseEditSession(k,e);var
xb=jsx3.util.arrIndexOf(this.getChildren(),(this.Xi())[Number(e.getAttribute(ub.Mc))]);this.YM(xb);if(typeof this._jsxZ2==ub.H&&(new
Date()).valueOf()-this._jsxZ2.timestamp<200)return;var
Gb=this.doEvent(ub.Nc,{objEVENT:k,intCOLUMNINDEX:xb});if(!(Gb===false)){var
Na=this.WQ();var
Pa=parseInt(e.style.left)-this.getScrollLeft();this._jsxresizeorigin={origin:Pa};Na.style.left=Pa+ub.B;La._beginMoveConstrained(k,Na,function(i,p){return [i,0];});gb.subscribe(ub.ga,this,ub.Oc);}this._jsxZ2={timestamp:(new
Date()).valueOf()};k.cancelAll();};q._C=function(o,a){if(!o.leftButton())return;gb.publish(o);var
Cb=this.LK(Cb);var
Bb=Math.round((this.getFontSize()||jsx3.gui.Block.DEFAULTFONTSIZE)*3/4);var
Sa=this.getChild(this.LK());var
nb=Sa.getPath();var
Gb=0;var
xb=this.getXML();var
z=xb.selectNodeIterator(ub.Pc);while(z.hasNext()){var
Db=z.next();Gb=Math.max((Db.getAttribute(nb)).length,Gb);}var
kb=Bb*Gb;(this.getChild(this.LK())).setWidth(kb,true);this.CE();o.cancelAll();};q.LK=function(){return this._jsxp4;};q.YM=function(p){this._jsxp4=p;};q.WQ=function(){return (this.getRendered()).childNodes[6];};q.yR=function(g){if(!g)g=this.getRendered();return g.childNodes[7];};q.BJ=function(i){var
Bb=this.yR(i);Bb.style.display=ub.y;Bb.removeAttribute(ub.gc);Bb.removeAttribute(ub.kc);};q.Bv=function(j){jsx3.EventHelp.reset();gb.unsubscribe(ub.ga,this,ub.Oc);if(parseInt((this.WQ()).style.left)!=this._jsxresizeorigin.origin){var
P=this.Rz();var
aa=this.LK();var
X=this.doEvent(ub.Qc,{objEVENT:j.event,vntWIDTH:P,intCOLUMNINDEX:aa,_gipp:1});if(!(X===false))(this.getChild(this.LK())).setWidth(P,true);this.CE();}(this.WQ()).style.left=ub.Rc;};q.Rz=function(){var
ba=this.WQ();var
mb=parseInt(ba.style.left);var
w=this.Xi();var
ob=this.oC();var
Fb=(this.getChild(this.LK())).getDisplayIndex();for(var
Ca=0;Ca<Fb;Ca++)mb=mb-ob[Ca];mb=mb+this.getScrollLeft();return mb<8?8:mb;};q.getResizable=function(){return this.jsxresize;};q.setResizable=function(p){this.jsxresize=p;};q.MA=function(){this.mR();var
S=Math.max(1,Math.ceil(this.EK(true)/this.getRowsPerPanel(m.DEFAULT_ROWS_PER_PANEL)));this.QY(new
Array(S));};q.F7=function(d,n){if(this.getParent()==null)return;this.BP();this.endEditSession();this.rF();this.fS();this.vz();this.MA();var
Wa=(this.T6()).length;var
Ib=this.getPagingModel(0);if(Ib==0||Ib==4){var
Ea={painted:1,token:m.getToken(),index:0};if(this.getRenderingModel()==m.REND_HIER)Ea.contextnodes=(this.vD()).childNodes;(this.T6())[0]=Ea;this.QM(Ea,true);if(this.MQ()){var
pb={painted:1,token:m.getToken(),index:-1};this.QM(pb,true);}}else{(this.vD()).innerHTML=ub.I;if(Ib==3){(this.vD()).style.height=this.jI()+ub.B;var
zb=this.QF()?this.QF():0;var
ab;var
U=this.getPanelQueueSize(m.DEFAULT_PANEL_QUEUE_SIZE);var
fb=parseInt(U/2);var
mb=U-fb;for(var
Ca=zb+mb;Ca>=zb-fb;Ca--)if(Ca>=0&&this.xL(Ca))(this.ps()).unshift({index:Ca});this.X1();}else if(Ib==2){for(var
Ca=0;Ca<Wa;Ca++)(this.ps()).push({index:Ca});if(this.MQ()==2){(this.ps()).unshift({index:-1});}else if(this.MQ()==1)(this.ps()).push({index:-1});this.X1();}else if(Ib==1){(this.ps()).unshift({index:0});if(this.MQ()==2){(this.ps()).unshift({index:-1});}else if(this.MQ()==1)(this.ps()).push({index:-1});this.X1();}if(!n){var
nb=this.qz(false);if(nb){var
Q=this.vD();if(Q.lastChild)Ua.insertAdjacentHTML(Q.lastChild,ub.ab,nb);else Q.innerHTML=nb;}}}if(d!==false)this.CE();};q.MQ=function(){return this.getPagingModel()==3||this.getRenderingModel()==m.REND_HIER?0:this.getAutoRow();};q.getAutoRow=function(){return this.jsxautorow;};q.setAutoRow=function(g){this.jsxautorow=g;};q.g2=function(){if(this.getPagingModel()==3){var
R=this.T6();var
_a=(this.vD()).childNodes.length;var
P=this.getPanelPoolSize(m.DEFAULT_PANEL_POOL_COUNT);var
qb=_a-P;if(qb>0){Qa.trace(ub.Sc+P+ub.Tc+qb);var
na=this.QF();var
x=R.length;if(x/2>na){qb=this.nK(R,x-1,na+1,qb,-1);if(qb<=0)return;qb=this.nK(R,0,na-1,qb,1);if(qb<=0)return;}else{qb=this.nK(R,0,na-1,qb,1);if(qb<=0)return;qb=this.nK(R,x-1,na+1,qb,-1);if(qb<=0)return;}}}};q.nK=function(h,p,d,o,s){for(var
Ha=p;s==-1&&Ha>d||s==1&&Ha<d;Ha=Ha+s){if(h[Ha]!=null){if(this._jsxm4&&this._jsxm4.length){var
_a=h[Ha].token;var
Ba=new
jsx3.util.List(this._jsxm4);this._jsxm4=(Ba.filter(function(a){return _a!=a[5].token;})).toArray();}h[Ha]=null;o--;Qa.trace(ub.Uc+Ha);var
ab=this.HA(Ha);if(ab)Ua.removeNode(ab);}if(o<=0)return 0;}return o;};q.nI=function(){var
ca=this.vD();var
qa=ca.childNodes;for(var
ob=0;ob<qa.length;ob++)if(qa[ob].tagName.toLowerCase()==ub.C&&qa[ob].getAttribute(ub.zb)!=ub.Hb||this.getRenderingModel()==m.REND_HIER&&qa[ob].getAttribute(ub.Lb)==ub.Vc)return this.getRenderingModel()==m.REND_HIER?qa[ob].firstChild:qa[ob];};q.CV=function(){var
ma=this.vD();var
u=ma.childNodes;for(var
Lb=u.length-1;Lb>=0;Lb--)if(u[Lb].tagName.toLowerCase()==ub.C&&u[Lb].getAttribute(ub.zb)!=ub.Hb||this.getRenderingModel()==m.REND_HIER&&u[Lb].getAttribute(ub.Lb)==ub.Vc)return this.getRenderingModel()==m.REND_HIER?u[Lb].firstChild:u[Lb];};q.IT=function(){return this.HA(-1);};q.HA=function(h){var
N=this.getDocument();return N.getElementById(this.getId()+ub.Wc+h);};q.O0=function(d){return parseInt((d.id+ub.I).replace(this.getId()+ub.Wc,ub.I));};q.kw=function(r){if(r.parentNode.tagName.toLowerCase()==ub.C)return r.parentNode;return r.parentNode.parentNode;};q.B9=function(n,a){if(!isNaN(n))n=this.HA(n);if(n){var
Fa=0;for(var
Cb=0;Cb<n.childNodes.length;Cb++)if(n.childNodes[Cb].tagName.toLowerCase()==ub.Xc){return n.childNodes[Cb].childNodes[a];}else if(n.childNodes[Cb].tagName.toLowerCase()==ub.V){return n.childNodes[a+Fa];}else Fa++;}return null;};q.wN=function(p){var
Ga=this.getId()+ub.Yc+p;var
ba=this.getDocument();return ba.getElementById(Ga);};q.IL=function(c){var
xb=this.wN(c);return xb?(this.kw(this.wN(c))).parentNode:null;};q.WA=function(s,j){var
xb=this.Xi();for(var
Hb=0;Hb<xb.length;Hb++)if(xb[Hb].getPath()==j){var
H=this.getId()+ub.Yc+s+ub.Yc+Hb;var
M=this.getDocument();return M.getElementById(H);}return null;};q.jO=function(b,k){var
Ib=this.wN(b);return Ib?Ib.childNodes[k]:null;};q.qt=function(){var
ya=this.B9(0,0);return ya?ya.childNodes[0]:null;};q.mI=function(g){return this.B9(g,0);};q.ZH=function(f){var
tb=this.B9(f,0);return tb?tb.parentNode.lastChild:null;};q.xD=function(i,d){this.collapseEditSession(i,d);};q.nq=function(d,i){this.collapseEditSession(d,i);};q.FS=function(a,l){var
rb=l.parentNode;var
ya=rb.childNodes[0].childNodes[0];var
N=rb.childNodes[1].childNodes[0];var
Mb=l.scrollLeft;rb.childNodes[1].scrollLeft=0;ya.style.left=ub.Zc+Mb+ub.B;N.style.left=ub.Zc+Mb+ub.B;if(a)this.doEvent(ub._c,{objEVENT:a,strDIRECTION:ub.ad,intPOSITION:Mb});};q.vF=function(f,g){var
_a=this.vD(g.parentNode);_a.parentNode.scrollTop=0;this._jsxDY=g.scrollTop;_a.style.top=ub.Zc+this._jsxDY+ub.B;var
fb=this.QF();if(this.getPagingModel(0)==3){var
K=this.getScrollInfoLabel(this._getLocaleProp(ub.bd));if(K!=ub.I){(this.GT(g.parentNode)).style.display=ub.z;window.clearTimeout(this._jsxlS);var
H=this;this._jsxlS=window.setTimeout(function(){if(g&&g.parentNode)(H.GT(g.parentNode)).style.display=ub.y;},1000);jsx3.sleep(function(){if(this.getParent()==null)return;if(g&&g.parentNode){var
t=this.getRowHeight(m.DEFAULT_ROW_HEIGHT);var
db=parseInt(this._jsxDY/t)+1;var
Fa=(this.Wl(true)).Zg();var
Bb=this.EK();var
Ba=db+parseInt(Fa/t)-1;if(Ba>Bb)Ba=Bb;var
_=new
jsx3.util.MessageFormat(K);(this.GT(g.parentNode)).childNodes[0].innerHTML=_.format(db,Ba,Bb);}},ub.cd+this.getId(),this);}var
Da;var
Mb=this.getPanelQueueSize(m.DEFAULT_PANEL_QUEUE_SIZE);var
la=parseInt(Mb/2);var
Cb=Mb-la;for(var
Z=fb+Cb;Z>=fb-la;Z--)if(Z>=0&&this.xL(Z)){(this.ps()).unshift({index:Z});if((this.ps()).length>Mb)var
Ab=(this.ps()).pop();Da=true;}if(Da)this.X1(_a);}this.doEvent(ub._c,{objEVENT:f,strDIRECTION:ub.dd,intPOSITION:this._jsxDY});};q.GT=function(n){return n.childNodes[5];};q.QF=function(){return parseInt(this._jsxDY/(this.getRowsPerPanel(m.DEFAULT_ROWS_PER_PANEL)*this.getRowHeight(m.DEFAULT_ROW_HEIGHT)));};q.X1=function(c){jsx3.sleep(function(){if(this.getParent()==null)return;if((this.ps()).length){var
tb=(this.ps()).shift();if(this.xL(tb.index))this.Y3(this.Z0(tb.index),c,tb.index);if((this.ps()).length)this.X1(c);}},ub.ed+this.getId(),this);};q.ps=function(){return this._jsxyy;};q.mR=function(){this._jsxyy=[];};q.Y3=function(p,l,n){if(!l)l=this.vD();if(l){var
lb={index:n,painted:1,token:m.getToken()};(this.T6())[n]=lb;Qa.trace(ub.fd+n);Ua.insertAdjacentHTML(l,ub.ab,p);this.QM(lb);this.rV(l);var
X=this;window.setTimeout(function(){if(X.getParent()==null)return;X.g2();},this.getReaperInterval(m.DEFAULT_REAPER_INTERVAL));}};q.getIterableRows=function(){var
ja,V;var
R=[];V=this.getRendered();if(V)if(this.getRenderingModel()==m.REND_HIER){var
W=this.getRenderingContext(ub.Fb);var
I=this.getRecordNode(W);var
qb=[];for(var
Ia=I.selectNodeIterator(ub.Pb);Ia.hasNext();){var
hb=Ia.next();var
Mb=hb.getAttribute(ub.qb);qb.push(this.IL(Mb));}R=this.EH({contextnodes:qb});}else{var
Da=V.childNodes[1].childNodes[0].childNodes;var
fa;for(var
Ia=0;Ia<Da.length;Ia++){fa=Da[Ia];fa=this.mI(fa);if(fa){fa=fa.parentNode;var
Ja=fa.childNodes.length;for(var
u=0;u<Ja;u++){var
M=fa.childNodes[u];if(M.tagName.toLowerCase()==ub.V)R.push(M);}}}}return R;};q.EH=function(p){var
sb=[];if(p.contextnodes){for(var
Kb=0;Kb<p.contextnodes.length;Kb++)if(p.contextnodes[Kb].getAttribute(ub.Lb)==ub.Vc)sb.push.apply(sb,this.cE(p.contextnodes[Kb]));}else{var
hb=p.index;var
fa=this.HA(hb);if(fa){fa=this.mI(fa);if(fa){fa=fa.parentNode;var
lb=fa.childNodes.length;for(var
va=0;va<lb;va++){var
Gb=fa.childNodes[va];if(Gb.tagName.toLowerCase()==ub.V)sb.push(Gb);}}}}return sb;};q.cE=function(d,s){if(s==null)s=[];s.push(this.mI(d.firstChild));if(d.lastChild){var
na=d.lastChild.childNodes;for(var
fa=0;fa<na.length;fa++)if(na[fa].tagName)this.cE(na[fa],s);}return s;};m.k8=0;m.getToken=function(){m.k8+=1;return m.k8;};q.getContentElement=function(g,i){var
Fa=this.WA(g,i);if(Fa)if(Fa.cellIndex==0&&this.getRenderingModel()==m.REND_HIER&&this.getRenderNavigators(1)!=0){var
Q=Fa.childNodes[0].childNodes[0];while(Q&&Q.tagName.toLowerCase()!=ub.V)Q=Q.childNodes[0];if(Q)return Q.lastChild.firstChild;}else return Fa.childNodes[0];};q.QM=function(f,h){var
Ka=new
jsx3.util.Timer(m.jsxclass,this);if(!jsx3.$A.is(this._jsxm4))this._jsxm4=[];var
Ab=this._jsxm4;if(this.EK()==0&&!this.MQ())return;var
y=this.getServer();var
Mb=this.Xi();var
Q=new
Array(Mb.length);var
C=false;for(var
Eb=0;Eb<Mb.length;Eb++){var
Va=Mb[Eb].bf();if(Va){Q[Eb]=Va;C=true;}}if(!C)return;var
eb=this.EH(f);if(f.contextnodes){f.index=true;delete f[ub.gd];}var
wb=eb.length;var
Pa=this.getRenderingModel()==m.REND_HIER&&this.getRenderNavigators(1)!=0;var
Bb=[];for(var
Eb=0;Eb<Mb.length;Eb++){var
Va=Q[Eb];if(Va)Bb.push([Eb,Va,Mb[Eb]]);}for(var
M=0;M<wb;M++){var
Sa=eb[M];var
sb=Sa.getAttribute(ub.qb);var
wa=Sa.getAttribute(ub.hd);for(var
B=0;B<Bb.length;B++){var
Ca=null;var
Eb=Bb[B][0];var
Va=Bb[B][1];var
Lb=Bb[B][2];if(Pa&&Eb==0){var
Na=Sa.childNodes[0].childNodes[0].childNodes[0];while(Na&&Na.tagName.toLowerCase()!=ub.V)Na=Na.childNodes[0];if(Na)Ca=Na.lastChild.firstChild;}else if(Sa.childNodes[Eb])Ca=Sa.childNodes[Eb].childNodes[0];if(Ca)if(h){Va.format(Ca,sb,this,Lb,wa,y);}else Ab[Ab.length]=[Va,Ca,sb,Lb,wa,f];}}if(Bb.length>0&&eb.length>0)jsx3.sleep(this.Pt,ub.id+this.getId(),this);Ka.log(ub.jd);};q.Pt=function(){if(this.getParent()==null){this._jsxm4=[];return;}var
ra=new
jsx3.util.Timer(m.jsxclass,this);var
X=this.getServer();var
la=(new
Date()).getTime();var
fa=la;while(this._jsxm4.length>0&&fa-la<m.b8){var
Ca=this._jsxm4.shift();var
eb=Ca[5];var
I=eb.index;if(!I){var
sa=(this.T6())[eb.index];I=sa!=null&&sa.token==eb.token;}if(I){Ca[0].format(Ca[1],Ca[2],this,Ca[3],Ca[4],X);fa=(new
Date()).getTime();}}if(this._jsxm4.length>0)jsx3.sleep(this.Pt,ub.id+this.getId(),this);ra.log(ub.kd);};q.vD=function(k){if(!k)k=this.getRendered();return k?k.childNodes[1].childNodes[0]:null;};q.jI=function(){var
P=this.getPagingModel(0);var
za=null;if(P==3){za=this.EK()*this.getRowHeight(m.DEFAULT_ROW_HEIGHT);}else{var
v=this.vD();za=v?parseInt(v.offsetHeight):0;}return za;};q.xL=function(k){if(k==-1||k>=0&&k<(this.T6()).length&&(this.T6())[k]==null){var
zb=this.getDocument();var
C=zb.getElementById(this.getId()+ub.Wc+k);return !C;}return false;};q.Z0=function(k){var
qa=this.Wl(true);var
w=this.getRowsPerPanel(m.DEFAULT_ROWS_PER_PANEL);var
mb=this.getPagingModel(0);if(mb==3){var
N=this.getRowHeight(m.DEFAULT_ROW_HEIGHT);var
J=ub.ld+w*N*k+ub.Hc;var
Ha=w*k;var
E=Ha+w+1;}else{var
J=ub.Sb;var
Ba=ub.I;if(mb==2){var
Ha=w*k;var
E=Ha+w+1;}else{var
ia=this.EK();var
Ha=0;var
E=ia+1;}}var
Ra={};Ra.jsx_min_exclusive=Ha;Ra.jsx_max_exclusive=E;Ra.jsx_panel_index=k;Ra.jsx_panel_css=J;Ra.jsx_column_widths=this.x8();Ra.jsx_rendering_context=this.getRenderingContext(ub.Fb);Ra.jsx_mode=k==-1?ub.md:ub.nd;Qa.trace(ub.od+Ha+ub.pd+E);return this.doTransform(Ra);};q.resetXmlCacheData=function(o){if(this.getPagingModel()==3)this.setScrollTop(0);this.aI(true);this.jsxsupermix(o);};q.resetCacheData=function(k){if(this.getPagingModel()==3)this.setScrollTop(0);this.aI(true);this.jsxsupermix(k);};q.setXMLId=function(j){this.aI(true);return this.jsxsupermix(j);};q.repaint=function(){this.aI(true);return this.jsxsuper();};q.setXMLString=function(n){this.aI(true);return this.jsxsupermix(n);};q.setXMLURL=function(c){this.aI(true);return this.jsxsupermix(c);};q.getXSL=function(){return this.t4();};q.t4=function(i){var
fb=new
jsx3.util.Timer(m.jsxclass,this);var
Cb=m.Sx||(jsx3.getSharedCache()).getOrOpenDocument(m.DEFAULTXSLURL,null,jsx3.xml.XslDocument.jsxclass);if(i)return Cb;var
Ma=(this.getServer()).getCache();var
ha=Ma.getDocument(this.getXSLId());if(ha==null){ha=Cb.cloneDocument();Ma.setDocument(this.getXSLId(),ha);var
la=this.getRenderingModel(m.REND_DEEP);var
Ab=this.Xi();var
kb=ha.selectSingleNode(ub.qd);var
bb=ha.selectSingleNode(ub.rd);var
y=ha.selectSingleNode(ub.sd);var
ma=this.x8();var
K=this.md()+this.pi(ub.td,ub.ud)+this.pi(ub.vd,ub.wd);for(var
Db=0;Db<Ab.length;Db++){var
Ib=Ab[Db];var
va=Ib.getId();var
Eb=(Ib.Wl(true)).lg(1);var
N=Eb.lg(0);var
qa=Db==0&&la==m.REND_HIER?ub.xd:ub.I;Eb.setAttributes(K+qa+ub.yd+Db+ub.Ba);Eb.setStyles(Ib.On()+Ib.uj()+Ib.Hg()+Ib.yi()+Ib.fo()+Ib.lo()+Ib.am()+ub.zd);N.setAttributes(ub.Ad);N.setStyles(Ib.Sb()+Ib.Fd());var
aa=m.kt.cloneDocument();aa.setAttribute(ub.Bd,ub.Cd+va+ub.Dd);(aa.selectSingleNode(ub.Ed)).setAttribute(ub.Fd,va+ub.Gd);y.appendChild(aa);if(la==m.REND_HIER&&Db==0&&this.getRenderNavigators(1)!=0){var
Ca=m.kQ.format(ub.Hd);var
Ja=ha.selectSingleNode(ub.Id);Ja.setAttribute(ub.Fd,va+ub.Gd);var
Fa=(N.paint()).join(ub.I);aa.loadXML(Fa);if(!aa.hasError()){(Ja.getParent()).appendChild(aa);aa.appendChild(Ja);}else Qa.error(ub.Jd+Ib+ub.Kd+aa.getError());}else var
Ca=m.kQ.format(va+ub.Gd);var
Ca=((Eb.paint()).join((N.paint()).join(Ca))).replace(ub.Ld,ub.Md);var
Lb=Eb.getPaintedWidth();var
Aa=Db==0?ma-(this.oC())[0]+Lb:Lb;var
rb=m.pA.format(va,Ca,String(Lb),String(Aa));aa.loadXML(rb);if(!aa.hasError()){ha.appendChild(aa);}else Qa.error(ub.Jd+Ib+ub.Kd+aa.getError());var
ta=(Ib.getValueTemplate(m.Column.TEMPLATES[ub.Nd])).replace(ub.Od,ub.Pd+Ib.getPath());var
mb=Ib.getEditMask();if(mb!=null&&m.ZJ(mb)&&mb.emGetType()==m.EditMask.FORMAT){var
J=new
jsx3.xml.Document();ta=ta.replace(ub.Qd,(mb.emPaintTemplate()).replace(ub.Od,ub.Pd+Ib.getPath())+ub.Rd);}aa.loadXML(ta);if(!aa.hasError()){aa.setAttribute(ub.Fd,va+ub.Gd);ha.appendChild(aa);}aa=m.CG.cloneNode(true);aa.setAttribute(ub.Fd,va);if(Db==0)kb.insertBefore(aa,bb.getParent());else bb.appendChild(aa);}}fb.log(ub.Sd);return ha;};m.MH=function(i){return i&&i.getDisplay()!=ub.y;};q.Xi=function(){return (this.getChildren()).filter(m.MH);};q.doTransform=function(b){if(!b)b={};b.jsx_id=this.getId();b.jsx_rendering_model=this.getRenderingModel(m.REND_DEEP);b.jsx_paging_model=this.getPagingModel(0);var
Gb=this.getUriResolver();if(b.jsx_rendering_model==ub.t){var
fb=this.getIcon(m.ICON),Ga=this.getIconMinus(m.ICON_MINUS),M=this.getIconPlus(m.ICON_PLUS);if(b.jsx_icon==null)b.jsx_icon=fb?Gb.resolveURI(fb):ub.I;if(b.jsx_icon_minus==null)b.jsx_icon_minus=Ga?Gb.resolveURI(Ga):ub.I;if(b.jsx_icon_plus==null)b.jsx_icon_plus=M?Gb.resolveURI(M):ub.I;b.jsx_transparent_image=Ya.SPACE;}b.jsx_sort_path=this.getSortPath();b.jsx_sort_direction=this.getSortDirection();b.jsx_sort_type=this.getSortType();b.jsx_selection_model=this.getSelectionModel(1);b.jsx_selection_bg_url=this.dX();var
E=this.getXSLParams();for(var vb in E)b[vb]=E[vb];if(b.jsx_use_categories&&this.getRenderingModel()!=m.REND_HIER)delete b[ub.Td];b.jsx_column_count=(this.Xi()).length;b.jsxpath=jsx3.getEnv(ub.Ud);b.jsxpathapps=jsx3.getEnv(ub.Vd);b.jsxpathprefix=(this.getUriResolver()).getUriPrefix();b.jsxappprefix=(this.getServer()).getUriPrefix();var
Jb=this.jsxsupermix(b);Jb=this.Nm(Jb);return !b.jsx_return_at_all_costs&&Jb.indexOf(ub.Wd)==-1?ub.I:Jb;};q.onXmlBinding=function(b){this.jsxsupermix(b);this.repaintData();};q.getXML=function(){var
Lb=this.jsxsupermix();if(!this._jsxCX){var
Va=!Lb.hasError()&&Lb.getNamespaceURI()==jsx3.app.Cache.XSDNS&&Lb.getNodeName()==ub.Xd;if(Va){var
y=this.getServer();if(y){this._jsxCX=true;(y.getCache()).subscribe(this.getXMLId(),this,ub.Yd);}}}return Lb;};q.kH=function(k){k.target.unsubscribe(k.subject,this);this._jsxCX=false;this.aI(true);jsx3.sleep(this.F7,ub.Na+this.getId(),this);};q.aI=function(l){if(!this.getServer())return;delete this[ub.Zd];if(!l){this.resetXslCacheData();this.clearBoxProfile(true);delete this[ub.w];}};q.getSortedIds=function(){var
kb=this.doTransform({jsx_mode:ub._d,jsx_rendering_context:this.getRenderingContext(ub.Fb),jsx_return_at_all_costs:true});return kb.search(ub.ae)>-1?window.eval(ub.be+RegExp.$1+ub.ce):[];};q.EK=function(h){if(h)delete this[ub.Zd];if(this._jsxBF){return this._jsxBF.maxlen;}else{if((this.getXML()).hasError())return 0;var
Ha={};Ha.jsx_mode=ub.de;Ha.jsx_rendering_model=this.getRenderingModel(m.REND_DEEP);Ha.jsx_rendering_context=this.getRenderingContext(ub.Fb);var
G=this.t4(true);G.reset();G.setParams(Ha);var
Cb=G.transform(this.getXML());var
_a=Cb.search(ub.ee)>-1?parseInt(RegExp.$1):0;Qa.trace(ub.fe+_a);this._jsxBF={maxlen:_a};if(this.getPagingModel()==3){var
Bb=this.Wl();var
Hb=this.getRendered();if(Bb&&Hb){Bb=(Bb.lg(2)).lg(0);var
fb=this.getRowHeight(m.DEFAULT_ROW_HEIGHT)*_a;Bb.recalculate({height:fb+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)},Hb.childNodes[2].childNodes[0],null);}}return _a;}};q.T6=function(){return this._jsxcN||[];};q.QY=function(k){this._jsxcN=k;};q.getSelectionModel=function(p){return this.jsxselectionmodel!=null?this.jsxselectionmodel>2?0:this.jsxselectionmodel:p!=null?p:null;};q.setSelectionModel=function(r){this.jsxselectionmodel=r;};q.getRowHeight=function(f){return this.jsxrowheight!=null?this.jsxrowheight:f!=null?f:null;};q.setRowHeight=function(b,l){this.jsxrowheight=b;this.aI();if(!l)this.repaint();};q.getRowsPerPanel=function(s){return this.jsxrowsperpanel?this.jsxrowsperpanel:s?s:null;};q.setRowsPerPanel=function(k,h){this.jsxrowsperpanel=k;this.aI(true);if(!h)this.repaint();};q.getPanelQueueSize=function(i){return this.jsxpaintqueuesize?this.jsxpaintqueuesize:i?i:null;};q.setPanelQueueSize=function(e){this.jsxpaintqueuesize=e;};q.getReaperInterval=function(n){return this.jsxreaperinterval?this.jsxreaperinterval:n?n:null;};q.setReaperInterval=function(c){this.jsxreaperinterval=c;};q.getPanelPoolSize=function(b){return this.jsxpanelpoolsize?this.jsxpanelpoolsize:b?b:null;};q.setPanelPoolSize=function(i){this.jsxpanelpoolsize=i;this.aI(true);};q.getPagingModel=function(i){if(this.getRenderingModel()==m.REND_HIER&&this.jsxpagingmodel!=4){Qa.trace(ub.ge);return 0;}return !isNaN(this.jsxpagingmodel)?this.jsxpagingmodel:!isNaN(i)?i:null;};q.setPagingModel=function(e){this.jsxpagingmodel=e;this.aI();};q.getHeaderHeight=function(f){return this.jsxheaderheight!=null?Number(this.jsxheaderheight):f?f:null;};q.setHeaderHeight=function(o,r){this.jsxheaderheight=o;this.clearBoxProfile(true);if(!r)this.repaint();};q.getScrollInfoLabel=function(e){return this.jsxscrollinfolabel!=null?this.jsxscrollinfolabel:e?e:null;};q.setScrollInfoLabel=function(b){this.jsxscrollinfolabel=b;};q.getScrollLeft=function(){var
T=this.getRendered();return T?T.childNodes[3].scrollLeft:0;};q.setScrollLeft=function(j){var
zb=this.getRendered();if(zb&&zb.childNodes[3]){zb.childNodes[3].scrollLeft=j;if(zb.childNodes[3].style.display==ub.y)this.FS(false,zb.childNodes[3]);}};q.getScrollTop=function(){return this._jsxDY?this._jsxDY:0;};q.zT=function(){var
ma=this.getRendered();return ma&&ma.childNodes[2]?ma.childNodes[2].scrollTop:this.getScrollTop();};q.setScrollTop=function(i,e){if(i<0)i=0;e=this.getRendered(e);if(e&&e.childNodes[2]){if(e.childNodes[2].scrollTop==0&&i==0)e.childNodes[2].scrollTop=1;e.childNodes[2].scrollTop=i;}};q.synchronizeVScroller=function(){this.rV();};q.rV=function(n){if(!n)n=this.vD();if(!n)return;if(this.getPagingModel()!=3){var
rb=((this.Wl()).lg(2)).lg(0);rb.recalculate({height:n.offsetHeight+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)},n.parentNode.parentNode.childNodes[2].childNodes[0],null);var
na=this.zT();if(this.getScrollTop()!=na){this.setScrollTop(na);n.style.top=ub.Zc+na+ub.B;}}else if(this.getScrollTop()!=this.zT())this.setScrollTop(this.zT()-1);if(n.parentNode.parentNode.childNodes[3].style.display==ub.y){this.setScrollLeft(0);}else if(this.getScaleWidth()!=1){var
wb=n.offsetWidth-n.parentNode.parentNode.offsetWidth;var
Q=this.getScrollLeft();if(Q>wb)this.setScrollLeft(wb);}this.h5();};q.h5=function(){var
cb=this.getRendered();if(cb)cb.childNodes[4].style.display=this.getSuppressVScroller(0)==1?ub.y:ub.I;};q.getScaleWidth=function(){return this.jsxscalewidth;};q.setScaleWidth=function(l){this.jsxscalewidth=l;this.ce();return this;};q.onSetChild=function(c){if(c instanceof m.Column){this.aI();return true;}return false;};q.paintChild=function(p,l){if(!l)this.repaint();};q.onRemoveChild=function(i,d){this.jsxsuper(i,d);this.aI();this.repaint();};q.getHeaderBorder=function(){return this.jsxheaderborder;};q.setHeaderBorder=function(k){this.jsxheaderborder=k;this.clearBoxProfile(true);this.repaintHead();};q.getBodyBorder=function(){return this.jsxbodyborder;};q.setBodyBorder=function(k,a){this.jsxbodyborder=k;this.aI();if(!a)this.repaint();};q.getValue=function(){var
pa=this.getSelectionModel();if(pa==2){return this.getSelectedIds();}else return (this.getSelectedIds())[0];};q.doValidate=function(){var
Db=(this.getSelectedNodes()).size()>0||this.getRequired()==0;this.setValidationState(Db?1:0);return this.getValidationState();};q.getRenderingModel=function(s){return this.jsxrenderingmodel?this.jsxrenderingmodel:s?s:null;};q.setRenderingModel=function(s,e){this.jsxrenderingmodel=s;this.aI();if(!e)this.repaint();};q.getRenderingContext=function(f){return this.jsxrenderingcontext!=null&&this.jsxrenderingcontext!=ub.I?this.jsxrenderingcontext:f!=null?f:null;};q.setRenderingContext=function(s,l){this.jsxrenderingcontext=s;this.aI(true);if(!l)this.repaint();};q.getSuppressHScroller=function(p){return this.jsxsuppresshscroll!=null?this.jsxsuppresshscroll:p!=null?p:null;};q.setSuppressHScroller=function(b){this.jsxsuppresshscroll=b;var
Ra=this.getRendered();if(Ra&&Ra.childNodes[3]){Ra.childNodes[3].style.display=b!=1?ub.z:ub.y;this.h5();}};q.getSuppressVScroller=function(f){return this.jsxsuppressvscroll!=null?this.jsxsuppressvscroll:f!=null?f:null;};q.setSuppressVScroller=function(g,e){this.jsxsuppressvscroll=g;this.aI();if(e){var
Z=this.getRendered();if(Z&&Z.childNodes[2]){Z.childNodes[2].style.display=g!=1?ub.z:ub.y;this.h5();}}else this.repaint();};q.getFixedColumnIndex=function(r){return this.jsxfixedcolumnindex!=null?this.jsxfixedcolumnindex:r!=null?r:null;};q.setFixedColumnIndex=function(i){this.jsxfixedcolumnindex=i;};q.getRenderNavigators=function(k){return this.jsxrendernavigators!=null?this.jsxrendernavigators:k!=null?k:null;};q.setRenderNavigators=function(f,h){this.jsxrendernavigators=f;this.aI();if(!h)this.repaint();};q.getIcon=function(i){return this.jsxicon!=null&&this.jsxicon!=ub.I?this.jsxicon:i?i:null;};q.setIcon=function(s){this.jsxicon=s;};q.getIconMinus=function(s){return this.jsxiconminus!=null&&this.jsxiconminus!=ub.I?this.jsxiconminus:s?s:null;};q.setIconMinus=function(c){this.jsxiconminus=c;};q.getIconPlus=function(h){return this.jsxiconplus!=null&&this.jsxiconplus!=ub.I?this.jsxiconplus:h?h:null;};q.setIconPlus=function(s){this.jsxiconplus=s;};q.deleteRecord=function(d,r){var
fb=this.getXML();var
ma=fb.selectSingleNode(this.Ee(d));if(ma!=null){ma=(ma.getParent()).removeChild(ma);if(r!==false){this.redrawRecord(d,0);if(this.getRenderingModel()!=m.REND_HIER){var
Ma=ma.selectNodes(ub.he);for(var
Fb=Ma.size()-1;Fb>=0;Fb--){var
Da=Ma.get(Fb);this.redrawRecord(Da.getAttribute(ub.qb),0);}}}return ma;}return null;};q.insertRecordProperty=function(c,p,l,i){if(p==ub.qb){var
B=this.jsxsupermix(c,p,l,false);var
va=this.wN(c);if(va){va.setAttribute(ub.qb,l);va.setAttribute(ub.ie,l);var
za=this.getId()+ub.Yc+l;va.setAttribute(ub.je,za);var
oa=va.childNodes;za=za+ub.Yc;for(var
bb=0;bb<oa.length;bb++)oa[bb].setAttribute(ub.je,za+bb);if(i!=false)this.redrawRecord(l,2);return B;}}else return this.jsxsupermix(c,p,l,i);};q.redrawCell=function(g,p,l,h){var
Na=p.getDisplayIndex();var
R=this.jO(g,Na);if(R){if(this.getRenderingModel()==m.REND_HIER){var
Fb=this.IL(g);var
xb=Fb.parentNode;var
oa=this.h2(g,xb.getAttribute(ub.Tb));var
lb=new
jsx3.xml.Document();if(!h){h=lb.loadXML(oa);while(h&&h.getBaseName()!=ub.V)h=h.getFirstChild();if(!h)return;}if(p.getChildIndex()==0&&this.getRenderNavigators(1)!=0){var
t=h.getFirstChild();while(t&&t.getBaseName()!=ub.V)t=t.getFirstChild();var
wa=objDiv;while(wa&&wa.tagName.toLowerCase()!=ub.V)wa=wa.childNodes[0];if(!t||!objDiv)return;objDiv=this.ms(t,wa,2);}else objDiv=this.ms(h,R.parentNode,Na);}else{var
wa=R.parentNode;if(!h)h=this.EC(g);if(this.getRenderingModel()==m.REND_HIER){while(h&&h.getBaseName()!=ub.V)h=h.getFirstChild();if(!h)return;}objDiv=this.ms(h,wa,Na);}objDiv=objDiv.childNodes[0];var
kb=p.bf();if(kb){var
ra=R.parentNode;kb.format(objDiv,ra.getAttribute(ub.qb),this,p,ra.getAttribute(ub.hd),this.getServer());}if(!l){var
Ja=this.Xi();var
ya=new
RegExp(ub.ke+p.getPath()+ub.le);for(var
P=0;P<Ja.length;P++){var
C=Ja[P].getTriggers()+ub.I;if(Ja[P]!=p&&(Ja[P].getPath()==p.getPath()||C.search(ya)>=0))this.redrawCell(g,Ja[P],true,h);}}}};q.redrawMappedCells=function(o,g){var
wb=this.Xi();for(var
sa=0;sa<wb.length;sa++)if(wb[sa].getPath()==g){this.redrawCell(o,wb[sa],false);return;}};q.h2=function(r,i){return this.doTransform({jsx_mode:ub.Ob,jsx_panel_css:ub.Sb,jsx_column_widths:this.x8(),jsx_context_index:i?i:1,jsx_rendering_context:((this.getRecordNode(r)).getParent()).getAttribute(ub.qb),jsx_rendering_context_child:r});};q.redrawRecord=function(f,i,a){var
Ra=this.vD();if(f!=null&&i==2){if(this.getRenderingModel()==m.REND_HIER){var
K=this.IL(f);var
ia=K.parentNode;var
wa=this.h2(f,ia.getAttribute(ub.Tb));Ua.setOuterHTML(K,wa);K=this.IL(f);var
xb={painted:1,token:m.getToken(),contextnodes:[K]};(this.T6())[0]=xb;this.QM(xb);}else{var
W=this.Ex(this.wN(f),f);this.d8(W,f);}}else if(f!=null&&i==0){if(this.getRenderingModel()==m.REND_HIER){var
fb=this.IL(f);if(fb){var
aa=fb.parentNode;Ua.removeNode(fb);if(aa.childNodes.length==0){var
S=aa.previousSibling;var
Eb=this.mI(S);if(Eb){var
kb=Eb.getAttribute(ub.qb);this.redrawRecord(kb,2);}}this.rV();}}else if(this.getPagingModel(0)!=3){var
fb=this.wN(f);if(fb){var
J=fb.parentNode;if(J.childNodes.length==1){if(J.tagName.toLowerCase()!=ub.C)J=J.parentNode;Ua.removeNode(J);}else{var
w=fb.nextSibling;if(fb.parentNode.firstChild==fb&&w)for(var
Sa=0;Sa<fb.childNodes.length;Sa++)w.childNodes[Sa].style.width=fb.childNodes[Sa].style.width;Ua.removeNode(fb);this.rV();}}}else this.repaint();}else if(f!=null&&i==3){if(this.getPagingModel(0)!=3){var
Ab=this.getRecordNode(f);var
N=Ab.getNextSibling();var
pa=N.getAttribute(ub.qb);if(this.getRenderingModel()==m.REND_HIER){var
Va=this.IL(pa);var
wa=this.h2(f,Va.parentNode.getAttribute(ub.Tb));Ua.insertAdjacentHTML(Va,ub.me,wa);var
xb={painted:1,token:m.getToken(),contextnodes:[Va.previousSibling]};(this.T6())[0]=xb;this.QM(xb);this.rV(Ra);}else{var
Cb=this.wN(pa);var
V=Cb.parentNode;var
W=this.TY(V,f);V.insertBefore(W,Cb);if(V.firstChild==W)for(var
Sa=0;Sa<W.childNodes.length;Sa++){W.childNodes[Sa].style.width=Cb.childNodes[Sa].style.width;Cb.childNodes[Sa].style.width=ub.I;}this.d8(W,f);this.rV(Ra);if(a!==false)this.bH(Ab);}}else this.repaint();}else if(f!=null&&i==1)if(this.getPagingModel(0)!=3){if(this.getRenderingModel()==m.REND_HIER){var
ca=((this.getRecordNode(f)).getParent()).getAttribute(ub.qb);var
K=this.IL(ca);var
ia=K.lastChild;if(this.kW(ia)){this.toggleItem(ca,true);}else{var
wa=this.h2(f,ia.getAttribute(ub.Tb));Ua.insertAdjacentHTML(ia,ub.ab,wa);var
xb={painted:1,token:m.getToken(),contextnodes:[ia.lastChild]};(this.T6())[0]=xb;this.QM(xb);this.rV(Ra);}}else{var
V=this.CV();if(V==null||V.firstChild==null){this.repaintData();}else{if(V.firstChild.tagName.toLowerCase()==ub.Xc)V=V.firstChild;var
W=this.TY(V,f);V.appendChild(W);this.d8(W,f);this.rV(Ra);if(a!==false)this.bH(this.getRecordNode(f));}}}else this.repaint();};q.bH=function(g){if(this.getRenderingModel(m.REND_DEEP)==m.REND_DEEP){var
Db=g.selectNodeIterator(ub.he);while(Db.hasNext()){g=Db.next();this.redrawRecord(g.getAttribute(ub.qb),1,false);}}};q.kW=function(o){return o.childNodes.length==0||o.childNodes.length==1&&o.childNodes[0].nodeType!=1;};q.d8=function(i,g){var
rb=this.Xi();for(var
Oa=0;Oa<rb.length;Oa++){var
Ib=rb[Oa];var
fa=Ib.bf();if(fa){var
Ca=i.childNodes[Oa].childNodes[0];fa.format(Ca,g,this,Ib,i.getAttribute(ub.hd),this.getServer());}}};q.TY=function(e,b){var
ea=this.getDocument();var
Ea=this.EC(b);var
rb=ea.createElement(ub.V);m.ID(Ea,rb,true);for(var
ia=Ea.getChildIterator();ia.hasNext();){Ea=ia.next();var
_=ea.createElement(ub.ne);m.ID(Ea,_,true);rb.appendChild(_);_.innerHTML=(Ea.getFirstChild()).getXML();}return rb;};q.EC=function(n){var
bb={};bb.jsx_column_widths=this.x8();bb.jsx_rendering_context=((this.getRecordNode(n)).getParent()).getAttribute(ub.qb);bb.jsx_rendering_context_child=n;bb.jsx_mode=ub.Ob;var
Aa=this.doTransform(bb);var
W=new
jsx3.xml.Document();W.loadXML(Aa);return W.getRootNode();};q.Ex=function(b,n){var
Ea=this.EC(n);m.ID(Ea,b,false);var
db=0;for(var
ia=Ea.getChildIterator();ia.hasNext();){Ea=ia.next();var
_=b.childNodes[db];m.ID(Ea,_,false);_.innerHTML=(Ea.getFirstChild()).getXML();db++;}return b;};q.ms=function(k,b,s){var
H=k.selectSingleNode(ub.oe+(s+1)+ub.ce);var
D=b.childNodes[s];m.ID(H,D,false);D.innerHTML=(H.getFirstChild()).getXML();return D;};m.ID=function(g,n,d){var
V=g.getAttributeNames();var
Ma=ub.pe;var
mb=ub.qe;for(var
vb=0;vb<V.length;vb++){var
D=V[vb];var
bb=g.getAttribute(D);if(D.match(Ma)){Ua.addEventListener(n,D.toLowerCase(),bb);}else if(D==ub.Zb){n.className=bb;}else if(D==ub.ac){jsx3.gui.Painted.He(n,d?bb:bb.replace(mb,ub.I));}else n.setAttribute(D,bb);}};q.setValue=function(p){this.deselectAllRecords();if(p){if(jsx3.$A.is(p)){if(this.getSelectionModel()!=2&&p.length>1)throw new
jsx3.IllegalArgumentException(ub.re,p);}else p=[p];for(var
L=0;L<p.length;L++)this.selectRecord(p[L]);this.revealRecord(p[0]);}else{this.synchronizeVScroller();this.setScrollTop(0);}return this;};q.getMaskProperties=function(){return Ya.MASK_NO_EDIT;};});jsx3.Class.defineClass("jsx3.gui.Matrix.ColumnFormat",null,null,function(d,m){var
ub={A:"",a:"short",b:"long",c:"oZ",d:"jE",e:"wu",f:"@",g:/^@(datetime|date|time|number)\b/,h:"{0,",i:"}",j:"@message",k:"objDiv",l:"strCDFKey",m:"objMatrix",n:"objMatrixColumn",o:"intRowNumber",p:"objServer",q:/&lt;/g,r:"<",s:/&gt;/g,t:">",u:/&quot;/g,v:'"',w:/&amp;/g,x:"&",y:"function",z:"jsxtext"};var
ia=jsx3.gui.Matrix;d.Bs={medium:2,full:4};d.Bs[ub.a]=1;d.Bs[ub.b]=3;d.dv={integer:1,percent:1,currency:1};d.cs={unescape:ub.c,unescape_all:ub.d,lookup:ub.e};d.getInstance=function(j,g){var
X=null;var
Va=null;if(j.charAt(0)==ub.f&&(Va=d.cs[j.substring(1)])!=null){X=new
d();X.format=d[Va];}else if(j.match(ub.g)){X=new
ia.MessageFormat(g,ub.h+j.substring(1)+ub.i);}else if(j.indexOf(ub.j)==0)X=new
ia.MessageFormat(g,j.substring(9));return X;};m.init=function(){};m.validate=function(){return true;};m.format=jsx3.Method.newAbstract(ub.k,ub.l,ub.m,ub.n,ub.o,ub.p);d.oZ=function(e,i,a,c,r,b){d.jE(e,i,a,c,r,b,jsx3.xml.Template.supports(1));};d.jE=function(p,a,i,n,g,j,l){if(!l)p.innerHTML=(((p.innerHTML.replace(ub.q,ub.r)).replace(ub.s,ub.t)).replace(ub.u,ub.v)).replace(ub.w,ub.x);};d.wu=function(r,o,n,i,l,k){var
pb=i.getEditMask();if(pb&&pb.FR)pb=pb.FR();if(pb!=null&&typeof pb.getRecordNode==ub.y){var
xb=n.getRecordNode(o);if(xb){var
Ha=i.getValueForRecord(o);var
K=pb.getRecordNode(Ha);r.innerHTML=jsx3.util.strEscapeHTML(K?K.getAttribute(ub.z):Ha!=null?Ha:ub.A);}}};});jsx3.Class.defineClass("jsx3.gui.Matrix.MessageFormat",jsx3.gui.Matrix.ColumnFormat,null,function(g,n){n.init=function(j,f){this.mt=new
jsx3.util.MessageFormat(f,(j.getServer()).getLocale());};n.format=function(f,h,b,o,s,d){var
Xa=o.getValueForRecord(h);if(Xa)try{var
Ea=d.getLocale();if(Ea!=this.mt._locale)this.mt.setLocale(Ea);f.innerHTML=this.mt.format(Xa);}catch(Kb){jsx3.util.Logger.GLOBAL.error(this.mt,jsx3.NativeError.wrap(Kb));}};});jsx3.Class.defineInterface("jsx3.gui.Matrix.EditMask",null,function(p,g){var
ub={a:"jsxbeginmask",b:"_jsxTy"};var
jb=jsx3.gui.Matrix;p.NORMAL=1;p.FORMAT=2;p.DIALOG=3;g.emInit=function(k){};g.emGetType=function(){return p.NORMAL;};g.emPaintTemplate=function(){return this.paint();};g.Hx=function(m,b,d,r,l,c,s){this._jsxTy={matrix:r,column:l,recordId:c,td:s,value:m};var
pa=this.emBeginEdit(m,b,d,r,l,c,s)!==false;if(pa)this.doEvent(ub.a,{objMATRIX:r,objCOLUMN:l,strRECORDID:c,strVALUE:m,_gipp:1});return pa;};g.replayMask=function(f){this._jsxTy={matrix:f.objMATRIX,column:f.objCOLUMN,recordId:f.strRECORDID,td:null,value:f.strVALUE};};g.emBeginEdit=function(s,o,b,e,f,h,m){};g.DW=function(){var
Ka=this.emEndEdit();delete this[ub.b];return Ka;};g.emEndEdit=function(){return this.emGetValue();};g.emGetValue=function(){return null;};g.suspendEditSession=function(){(this.getAncestorOfType(jb))._jsxOM.f1=true;};g.resumeEditSession=function(){(this.getAncestorOfType(jb))._jsxOM.f1=false;};g.emGetSession=function(){return this._jsxTy;};g.commitEditMask=function(i,h){if(this._jsxTy)this._jsxTy.matrix.kK(i,h);};g.emCollapseEdit=function(q){};});jsx3.Class.defineInterface("jsx3.gui.Matrix.BlockMask",jsx3.gui.Matrix.EditMask,function(e,l){var
ub={a:"none",b:""};var
x=jsx3.gui.Matrix;var
la=jsx3.gui.Block;var
La=jsx3.html;l.emInit=function(s){this.setDisplay(ub.a,true);this.setDimensions(0,0,null,null,true);this.setRelativePosition(0,true);this._jsxhm=this.getWidth();this._jsxhf=this.getHeight();var
K=this.FR();if(K){var
Ab=K.getRelativePosition();var
Ca=K.getDisplay();x.ZJ(K,s);K.setRelativePosition(Ab,true);K.setDisplay(Ca,true);}};l.emGetType=function(){return x.EditMask.NORMAL;};l.emBeginEdit=function(f,i,s,k,r,n,g){var
fa=isNaN(this._jsxhm)?i.W:parseInt(this._jsxhm);var
Ga=isNaN(this._jsxhf)?i.H:parseInt(this._jsxhf);this.setMaskValue(f);this.setDimensions(i.L,i.T,fa,Ga,true);this.setDisplay(ub.b,true);var
A=this.getMaskFirstResponder()||this;La.focus(A);};l.emGetValue=function(){return this.getMaskValue();};l.getMaskFirstResponder=function(){return this.FR();};l.getMaskValue=function(){var
Q=this.FR();return Q!=null?Q.getValue():null;};l.setMaskValue=function(o){var
fa=this.FR();if(fa!=null)fa.setValue(o);};l.FR=function(){return (this.getDescendantsOfType(jsx3.gui.Form))[0];};l.emEndEdit=function(){var
Ja=this.getMaskValue();this.setDisplay(ub.a,true);return Ja;};});jsx3.Class.defineInterface("jsx3.gui.Matrix.DialogMask",jsx3.gui.Matrix.BlockMask,function(b,a){var
ub={a:"",b:"none"};var
Fa=jsx3.gui.Matrix;var
z=jsx3.html;a.emInit=function(p){Fa.BlockMask.prototype.emInit.call(this,p);var
lb=this.getParent();while(lb!=null){if(jsx3.gui.Window&&lb instanceof jsx3.gui.Window){lb=lb.getRootBlock();break;}else if(jsx3.gui.Dialog&&lb instanceof jsx3.gui.Dialog)break;lb=lb.getParent();}if(lb==null)lb=(this.getServer()).getRootBlock();lb.paintChild(this);};a.emGetType=function(){return Fa.EditMask.DIALOG;};a.emBeginEdit=function(h,g,l,m,q,p,e){this._jsxTy={matrix:m,column:q,recordId:p,td:e};var
ea=(this.getRendered(e)).parentNode.parentNode;var
Z=z.getRelativePosition(ea,ea);var
X=z.getRelativePosition(ea,e);var
T=this._jsxhm;var
mb=this._jsxhf;var
Db=[Z.W-X.L-g.W,X.L,g.W];var
ia=-1;for(var
C=0;C<Db.length&&ia<0;C++)if(T<=Db[C])ia=C;if(ia<0)L5:for(var
C=0;C<Db.length&&ia<0;C++){for(var
Hb=0;Hb<Db.length;Hb++)if(Db[C]<Db[Hb])continue L5;ia=C;}var
za=ia==2;var
Ra=[Z.H-X.T-(za?g.H:0),X.T+(za?0:g.H)];var
jb=-1;for(var
C=0;C<Ra.length&&jb<0;C++)if(mb<=Ra[C])jb=C;if(jb<0)L6:for(var
C=0;C<Ra.length&&jb<0;C++){for(var
Hb=0;Hb<Ra.length;Hb++)if(Ra[C]<Ra[Hb])continue L6;jb=C;}T=Math.min(T,Db[ia]);mb=Math.min(mb,Ra[jb]);var
Wa=[X.L+g.W,X.L-T,X.L][ia];var
ya=[X.T+(za?g.H:0),X.T-mb+(za?0:g.H)][jb];this.setMaskValue(h);this.setDimensions(Wa,ya,T,mb,true);this.setDisplay(ub.a,true);z.updateCSSOpacity(this.getRendered(),0.9);var
Fb=this.getMaskFirstResponder()||this;z.focus(Fb);};a.FR=function(){var
Bb=this.getChild(0)==this.getCaptionBar()?this.getChild(1):this.getChild(0);return Bb!=null?(Bb.getDescendantsOfType(jsx3.gui.Form))[0]:null;};a.emCollapseEdit=function(m){this.setDisplay(ub.b,true);};a.Mj=function(){};});

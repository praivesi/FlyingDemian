package com.flying.demian.VO;

import com.flying.demian.VO.Enums.PERIOD_TYPE;
import com.flying.demian.VO.Enums.WNT_TYPE;
import lombok.Data;

import java.util.ArrayList;

@Data
public class WntVO {
    String title;
    String content;
    ArrayList<JobVO> jobs;
    PeriodVO period;
    WNT_TYPE wntType;
    PERIOD_TYPE periodType;
}

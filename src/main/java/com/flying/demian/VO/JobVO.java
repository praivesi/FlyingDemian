package com.flying.demian.VO;

import lombok.Data;

@Data
public class JobVO {
    String title;
    String content;
    WntVO wnt;
    PeriodVO period;
}

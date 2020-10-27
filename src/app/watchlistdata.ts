export class WatchListData {
    CompanyName: String;
    EmployeeCount: String;
    PnLValue: number;
    PnLPer: number;
    MarketPrice: number;
    ClosePrice: number;
    MarketCap: number;
    TodaysDLow: number;
    TodaysDHigh: number;
    '52WLow': number;
    '52WHigh': number;
    OpenPrice: number;
    PreClose: number;
    Volume: string;
    Value: string;
    PBRatio: number;
    PERatio: number;
    IndustryPE: number;
    DivYield: number;
    BookValue: number;
    EPS: number;
    ROE: number;

    constructor(CompanyName,
        EmployeeCount,
        PnLValue,
        PnLPer,
        MarketPrice,
        ClosePrice,
        MarketCap,
        TodaysDLow,
        TodaysDHigh,
        Low52W,
        High52W,
        OpenPrice,
        PreClose,
        Volume,
        Value,
        PBRatio,
        PERatio,
        IndustryPE,
        DivYield,
        BookValue,
        EPS,
        ROE) 
        {
        this.CompanyName = CompanyName;
        this.EmployeeCount = EmployeeCount;
        this.PnLValue = PnLValue;
        this.PnLPer = PnLPer;
        this.MarketPrice = MarketPrice;
        this.ClosePrice = ClosePrice;
        this.MarketCap = MarketCap;
        this.TodaysDLow = TodaysDLow;
        this.TodaysDHigh = TodaysDHigh;
        this['52WLow'] = Low52W;
        this['52WHigh'] = High52W;
        this.OpenPrice = OpenPrice;
        this.PreClose = PreClose;
        this.Volume = Volume;
        this.Value = Value;
        this.PBRatio = PBRatio;
        this.PERatio = PERatio;
        this.IndustryPE = IndustryPE;
        this.DivYield = DivYield;
        this.BookValue = BookValue;
        this.EPS = EPS;
        this.ROE = ROE;
    }
}
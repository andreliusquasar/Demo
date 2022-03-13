export interface IEpisode {
    id:	        number;
    name:	    string;
    air_date:	string;
    episode:	string;
    characters:	IEpisodeAtribute[];
    url:	    string;
    created:	string;
}

export interface IEpisodeAtribute {
    name: string;
}
export interface TournamentData {
  [key: string]: {
    id: string;
    name: string;
    tournament_stageFK: string;
    startdate: string;
    status_type: string;
    status_descFK: string;
    round_typeFK: string;
    n: string;
    ut: string;
    tournamentFK: string;
    tournament_templateFK: string;
    sportFK: string;
    tournament_stage_name: string;
    tournament_name: string;
    tournament_template_name: string;
    sport_name: string;
    gender: string;
    property: {
      [key: string]: {
        id: string;
        type: string;
        name: string;
        value: string;
        n: string;
        ut: string;
      };
    };
    event_participants: {
      [key: string]: {
        id: string;
        number: string;
        participantFK: string;
        eventFK: string;
        n: string;
        ut: string;
        result: {
          [key: string]: {
            id: string;
            event_participantsFK: string;
            result_typeFK: string;
            result_code: string;
            value: string;
            n: string;
            ut: string;
          };
        };
        participant: {
          id: string;
          name: string;
          gender: string;
          type: string;
          countryFK: string;
          n: string;
          ut: string;
          country_name: string;
        };
      };
    };
  };
}

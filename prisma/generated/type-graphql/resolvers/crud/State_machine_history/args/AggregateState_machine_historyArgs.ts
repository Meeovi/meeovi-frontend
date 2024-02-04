import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_historyOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/State_machine_historyOrderByWithRelationAndSearchRelevanceInput";
import { State_machine_historyWhereInput } from "../../../inputs/State_machine_historyWhereInput";
import { State_machine_historyWhereUniqueInput } from "../../../inputs/State_machine_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateState_machine_historyArgs {
  @TypeGraphQL.Field(_type => State_machine_historyWhereInput, {
    nullable: true
  })
  where?: State_machine_historyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [State_machine_historyOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: State_machine_historyOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => State_machine_historyWhereUniqueInput, {
    nullable: true
  })
  cursor?: State_machine_historyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

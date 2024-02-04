import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_state_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Country_state_translationOrderByWithRelationAndSearchRelevanceInput";
import { Country_state_translationWhereInput } from "../../../inputs/Country_state_translationWhereInput";
import { Country_state_translationWhereUniqueInput } from "../../../inputs/Country_state_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCountry_state_translationArgs {
  @TypeGraphQL.Field(_type => Country_state_translationWhereInput, {
    nullable: true
  })
  where?: Country_state_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Country_state_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Country_state_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

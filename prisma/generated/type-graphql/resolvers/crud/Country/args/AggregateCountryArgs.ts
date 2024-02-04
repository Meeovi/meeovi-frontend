import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CountryOrderByWithRelationAndSearchRelevanceInput";
import { CountryWhereInput } from "../../../inputs/CountryWhereInput";
import { CountryWhereUniqueInput } from "../../../inputs/CountryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCountryArgs {
  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CountryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CountryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  cursor?: CountryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

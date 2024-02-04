import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_stateOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Country_stateOrderByWithRelationAndSearchRelevanceInput";
import { Country_stateWhereInput } from "../../../inputs/Country_stateWhereInput";
import { Country_stateWhereUniqueInput } from "../../../inputs/Country_stateWhereUniqueInput";
import { Country_stateScalarFieldEnum } from "../../../../enums/Country_stateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCountry_stateOrThrowArgs {
  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  where?: Country_stateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Country_stateOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Country_stateOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Country_stateWhereUniqueInput, {
    nullable: true
  })
  cursor?: Country_stateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Country_stateScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "country_id" | "short_code" | "position" | "active" | "created_at" | "updated_at"> | undefined;
}

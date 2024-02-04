import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_stateOrderByWithAggregationInput } from "../../../inputs/Country_stateOrderByWithAggregationInput";
import { Country_stateScalarWhereWithAggregatesInput } from "../../../inputs/Country_stateScalarWhereWithAggregatesInput";
import { Country_stateWhereInput } from "../../../inputs/Country_stateWhereInput";
import { Country_stateScalarFieldEnum } from "../../../../enums/Country_stateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCountry_stateArgs {
  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  where?: Country_stateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Country_stateOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Country_stateOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_stateScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "country_id" | "short_code" | "position" | "active" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Country_stateScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Country_stateScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

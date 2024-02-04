import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_state_translationOrderByWithAggregationInput } from "../../../inputs/Country_state_translationOrderByWithAggregationInput";
import { Country_state_translationScalarWhereWithAggregatesInput } from "../../../inputs/Country_state_translationScalarWhereWithAggregatesInput";
import { Country_state_translationWhereInput } from "../../../inputs/Country_state_translationWhereInput";
import { Country_state_translationScalarFieldEnum } from "../../../../enums/Country_state_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCountry_state_translationArgs {
  @TypeGraphQL.Field(_type => Country_state_translationWhereInput, {
    nullable: true
  })
  where?: Country_state_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Country_state_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"country_state_id" | "language_id" | "name" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Country_state_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Country_state_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

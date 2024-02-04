import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_translationOrderByWithAggregationInput } from "../../../inputs/Country_translationOrderByWithAggregationInput";
import { Country_translationScalarWhereWithAggregatesInput } from "../../../inputs/Country_translationScalarWhereWithAggregatesInput";
import { Country_translationWhereInput } from "../../../inputs/Country_translationWhereInput";
import { Country_translationScalarFieldEnum } from "../../../../enums/Country_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCountry_translationArgs {
  @TypeGraphQL.Field(_type => Country_translationWhereInput, {
    nullable: true
  })
  where?: Country_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Country_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Country_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"country_id" | "language_id" | "name" | "address_format" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Country_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Country_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

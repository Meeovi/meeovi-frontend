import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaxOrderByWithAggregationInput } from "../../../inputs/TaxOrderByWithAggregationInput";
import { TaxScalarWhereWithAggregatesInput } from "../../../inputs/TaxScalarWhereWithAggregatesInput";
import { TaxWhereInput } from "../../../inputs/TaxWhereInput";
import { TaxScalarFieldEnum } from "../../../../enums/TaxScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTaxArgs {
  @TypeGraphQL.Field(_type => TaxWhereInput, {
    nullable: true
  })
  where?: TaxWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TaxOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TaxOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaxScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "tax_rate" | "name" | "position" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => TaxScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TaxScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

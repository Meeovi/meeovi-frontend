import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrencyOrderByWithAggregationInput } from "../../../inputs/CurrencyOrderByWithAggregationInput";
import { CurrencyScalarWhereWithAggregatesInput } from "../../../inputs/CurrencyScalarWhereWithAggregatesInput";
import { CurrencyWhereInput } from "../../../inputs/CurrencyWhereInput";
import { CurrencyScalarFieldEnum } from "../../../../enums/CurrencyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCurrencyArgs {
  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CurrencyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CurrencyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrencyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "iso_code" | "factor" | "symbol" | "position" | "decimal_precision" | "created_at" | "updated_at" | "item_rounding" | "total_rounding" | "tax_free_from">;

  @TypeGraphQL.Field(_type => CurrencyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CurrencyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

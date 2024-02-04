import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_priceOrderByWithAggregationInput } from "../../../inputs/Shipping_method_priceOrderByWithAggregationInput";
import { Shipping_method_priceScalarWhereWithAggregatesInput } from "../../../inputs/Shipping_method_priceScalarWhereWithAggregatesInput";
import { Shipping_method_priceWhereInput } from "../../../inputs/Shipping_method_priceWhereInput";
import { Shipping_method_priceScalarFieldEnum } from "../../../../enums/Shipping_method_priceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShipping_method_priceArgs {
  @TypeGraphQL.Field(_type => Shipping_method_priceWhereInput, {
    nullable: true
  })
  where?: Shipping_method_priceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Shipping_method_priceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Shipping_method_priceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Shipping_method_priceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "shipping_method_id" | "calculation" | "rule_id" | "calculation_rule_id" | "currency_price" | "quantity_start" | "quantity_end" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Shipping_method_priceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Shipping_method_priceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_methodOrderByWithAggregationInput } from "../../../inputs/Shipping_methodOrderByWithAggregationInput";
import { Shipping_methodScalarWhereWithAggregatesInput } from "../../../inputs/Shipping_methodScalarWhereWithAggregatesInput";
import { Shipping_methodWhereInput } from "../../../inputs/Shipping_methodWhereInput";
import { Shipping_methodScalarFieldEnum } from "../../../../enums/Shipping_methodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShipping_methodArgs {
  @TypeGraphQL.Field(_type => Shipping_methodWhereInput, {
    nullable: true
  })
  where?: Shipping_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Shipping_methodOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Shipping_methodOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Shipping_methodScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "active" | "position" | "availability_rule_id" | "media_id" | "delivery_time_id" | "tax_type" | "tax_id" | "created_at" | "updated_at" | "technical_name">;

  @TypeGraphQL.Field(_type => Shipping_methodScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Shipping_methodScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

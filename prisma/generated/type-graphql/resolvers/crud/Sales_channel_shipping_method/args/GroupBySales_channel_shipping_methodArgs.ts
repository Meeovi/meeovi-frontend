import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_shipping_methodOrderByWithAggregationInput } from "../../../inputs/Sales_channel_shipping_methodOrderByWithAggregationInput";
import { Sales_channel_shipping_methodScalarWhereWithAggregatesInput } from "../../../inputs/Sales_channel_shipping_methodScalarWhereWithAggregatesInput";
import { Sales_channel_shipping_methodWhereInput } from "../../../inputs/Sales_channel_shipping_methodWhereInput";
import { Sales_channel_shipping_methodScalarFieldEnum } from "../../../../enums/Sales_channel_shipping_methodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySales_channel_shipping_methodArgs {
  @TypeGraphQL.Field(_type => Sales_channel_shipping_methodWhereInput, {
    nullable: true
  })
  where?: Sales_channel_shipping_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_shipping_methodOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Sales_channel_shipping_methodOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_shipping_methodScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"sales_channel_id" | "shipping_method_id">;

  @TypeGraphQL.Field(_type => Sales_channel_shipping_methodScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Sales_channel_shipping_methodScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

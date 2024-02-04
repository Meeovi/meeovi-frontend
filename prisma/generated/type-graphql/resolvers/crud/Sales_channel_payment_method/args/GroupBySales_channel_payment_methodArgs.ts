import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_payment_methodOrderByWithAggregationInput } from "../../../inputs/Sales_channel_payment_methodOrderByWithAggregationInput";
import { Sales_channel_payment_methodScalarWhereWithAggregatesInput } from "../../../inputs/Sales_channel_payment_methodScalarWhereWithAggregatesInput";
import { Sales_channel_payment_methodWhereInput } from "../../../inputs/Sales_channel_payment_methodWhereInput";
import { Sales_channel_payment_methodScalarFieldEnum } from "../../../../enums/Sales_channel_payment_methodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySales_channel_payment_methodArgs {
  @TypeGraphQL.Field(_type => Sales_channel_payment_methodWhereInput, {
    nullable: true
  })
  where?: Sales_channel_payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_payment_methodOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Sales_channel_payment_methodOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_payment_methodScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"sales_channel_id" | "payment_method_id">;

  @TypeGraphQL.Field(_type => Sales_channel_payment_methodScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Sales_channel_payment_methodScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

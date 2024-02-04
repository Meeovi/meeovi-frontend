import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_analyticsOrderByWithAggregationInput } from "../../../inputs/Sales_channel_analyticsOrderByWithAggregationInput";
import { Sales_channel_analyticsScalarWhereWithAggregatesInput } from "../../../inputs/Sales_channel_analyticsScalarWhereWithAggregatesInput";
import { Sales_channel_analyticsWhereInput } from "../../../inputs/Sales_channel_analyticsWhereInput";
import { Sales_channel_analyticsScalarFieldEnum } from "../../../../enums/Sales_channel_analyticsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySales_channel_analyticsArgs {
  @TypeGraphQL.Field(_type => Sales_channel_analyticsWhereInput, {
    nullable: true
  })
  where?: Sales_channel_analyticsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_analyticsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Sales_channel_analyticsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_analyticsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "tracking_id" | "active" | "track_orders" | "created_at" | "updated_at" | "anonymize_ip">;

  @TypeGraphQL.Field(_type => Sales_channel_analyticsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Sales_channel_analyticsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

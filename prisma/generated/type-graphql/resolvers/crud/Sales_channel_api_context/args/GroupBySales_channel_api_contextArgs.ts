import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_api_contextOrderByWithAggregationInput } from "../../../inputs/Sales_channel_api_contextOrderByWithAggregationInput";
import { Sales_channel_api_contextScalarWhereWithAggregatesInput } from "../../../inputs/Sales_channel_api_contextScalarWhereWithAggregatesInput";
import { Sales_channel_api_contextWhereInput } from "../../../inputs/Sales_channel_api_contextWhereInput";
import { Sales_channel_api_contextScalarFieldEnum } from "../../../../enums/Sales_channel_api_contextScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySales_channel_api_contextArgs {
  @TypeGraphQL.Field(_type => Sales_channel_api_contextWhereInput, {
    nullable: true
  })
  where?: Sales_channel_api_contextWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_api_contextOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Sales_channel_api_contextOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_api_contextScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"token" | "payload" | "sales_channel_id" | "customer_id" | "updated_at">;

  @TypeGraphQL.Field(_type => Sales_channel_api_contextScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Sales_channel_api_contextScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

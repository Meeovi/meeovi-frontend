import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_group_registration_sales_channelsOrderByWithAggregationInput } from "../../../inputs/Customer_group_registration_sales_channelsOrderByWithAggregationInput";
import { Customer_group_registration_sales_channelsScalarWhereWithAggregatesInput } from "../../../inputs/Customer_group_registration_sales_channelsScalarWhereWithAggregatesInput";
import { Customer_group_registration_sales_channelsWhereInput } from "../../../inputs/Customer_group_registration_sales_channelsWhereInput";
import { Customer_group_registration_sales_channelsScalarFieldEnum } from "../../../../enums/Customer_group_registration_sales_channelsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomer_group_registration_sales_channelsArgs {
  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsWhereInput, {
    nullable: true
  })
  where?: Customer_group_registration_sales_channelsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Customer_group_registration_sales_channelsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"customer_group_id" | "sales_channel_id" | "created_at">;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Customer_group_registration_sales_channelsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

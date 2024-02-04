import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_runOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Swag_paypal_pos_sales_channel_runOrderByWithRelationAndSearchRelevanceInput";
import { Swag_paypal_pos_sales_channel_runWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_runWhereInput";
import { Swag_paypal_pos_sales_channel_runWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channel_runWhereUniqueInput";
import { Swag_paypal_pos_sales_channel_runScalarFieldEnum } from "../../../../enums/Swag_paypal_pos_sales_channel_runScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Sales_channelSwag_paypal_pos_sales_channel_runArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_runWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_runWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_runOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Swag_paypal_pos_sales_channel_runOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_runWhereUniqueInput, {
    nullable: true
  })
  cursor?: Swag_paypal_pos_sales_channel_runWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_runScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "sales_channel_id" | "task" | "created_at" | "updated_at" | "finished_at" | "status" | "message_count" | "step_index" | "steps"> | undefined;
}

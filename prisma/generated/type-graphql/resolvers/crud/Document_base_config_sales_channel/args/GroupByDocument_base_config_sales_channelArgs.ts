import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_base_config_sales_channelOrderByWithAggregationInput } from "../../../inputs/Document_base_config_sales_channelOrderByWithAggregationInput";
import { Document_base_config_sales_channelScalarWhereWithAggregatesInput } from "../../../inputs/Document_base_config_sales_channelScalarWhereWithAggregatesInput";
import { Document_base_config_sales_channelWhereInput } from "../../../inputs/Document_base_config_sales_channelWhereInput";
import { Document_base_config_sales_channelScalarFieldEnum } from "../../../../enums/Document_base_config_sales_channelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDocument_base_config_sales_channelArgs {
  @TypeGraphQL.Field(_type => Document_base_config_sales_channelWhereInput, {
    nullable: true
  })
  where?: Document_base_config_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Document_base_config_sales_channelOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "document_base_config_id" | "document_type_id" | "sales_channel_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Document_base_config_sales_channelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

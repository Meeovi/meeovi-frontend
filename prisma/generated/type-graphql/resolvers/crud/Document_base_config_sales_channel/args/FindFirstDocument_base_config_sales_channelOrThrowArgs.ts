import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_base_config_sales_channelOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Document_base_config_sales_channelOrderByWithRelationAndSearchRelevanceInput";
import { Document_base_config_sales_channelWhereInput } from "../../../inputs/Document_base_config_sales_channelWhereInput";
import { Document_base_config_sales_channelWhereUniqueInput } from "../../../inputs/Document_base_config_sales_channelWhereUniqueInput";
import { Document_base_config_sales_channelScalarFieldEnum } from "../../../../enums/Document_base_config_sales_channelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDocument_base_config_sales_channelOrThrowArgs {
  @TypeGraphQL.Field(_type => Document_base_config_sales_channelWhereInput, {
    nullable: true
  })
  where?: Document_base_config_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Document_base_config_sales_channelOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelWhereUniqueInput, {
    nullable: true
  })
  cursor?: Document_base_config_sales_channelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "document_base_config_id" | "document_type_id" | "sales_channel_id" | "created_at" | "updated_at"> | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_base_config_sales_channelCreateInput } from "../../../inputs/Document_base_config_sales_channelCreateInput";
import { Document_base_config_sales_channelUpdateInput } from "../../../inputs/Document_base_config_sales_channelUpdateInput";
import { Document_base_config_sales_channelWhereUniqueInput } from "../../../inputs/Document_base_config_sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDocument_base_config_sales_channelArgs {
  @TypeGraphQL.Field(_type => Document_base_config_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Document_base_config_sales_channelWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelCreateInput, {
    nullable: false
  })
  create!: Document_base_config_sales_channelCreateInput;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelUpdateInput, {
    nullable: false
  })
  update!: Document_base_config_sales_channelUpdateInput;
}

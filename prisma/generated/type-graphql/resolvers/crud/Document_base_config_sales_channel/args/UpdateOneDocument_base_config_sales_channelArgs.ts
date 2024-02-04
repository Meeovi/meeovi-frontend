import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_base_config_sales_channelUpdateInput } from "../../../inputs/Document_base_config_sales_channelUpdateInput";
import { Document_base_config_sales_channelWhereUniqueInput } from "../../../inputs/Document_base_config_sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDocument_base_config_sales_channelArgs {
  @TypeGraphQL.Field(_type => Document_base_config_sales_channelUpdateInput, {
    nullable: false
  })
  data!: Document_base_config_sales_channelUpdateInput;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Document_base_config_sales_channelWhereUniqueInput;
}

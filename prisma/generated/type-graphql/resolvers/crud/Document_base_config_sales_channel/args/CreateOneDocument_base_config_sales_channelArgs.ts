import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_base_config_sales_channelCreateInput } from "../../../inputs/Document_base_config_sales_channelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDocument_base_config_sales_channelArgs {
  @TypeGraphQL.Field(_type => Document_base_config_sales_channelCreateInput, {
    nullable: false
  })
  data!: Document_base_config_sales_channelCreateInput;
}

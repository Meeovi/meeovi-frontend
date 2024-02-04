import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_sales_channelCreateInput } from "../../../inputs/Landing_page_sales_channelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLanding_page_sales_channelArgs {
  @TypeGraphQL.Field(_type => Landing_page_sales_channelCreateInput, {
    nullable: false
  })
  data!: Landing_page_sales_channelCreateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_sales_channelWhereUniqueInput } from "../../../inputs/Landing_page_sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLanding_page_sales_channelArgs {
  @TypeGraphQL.Field(_type => Landing_page_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_page_sales_channelWhereUniqueInput;
}

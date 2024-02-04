import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_sales_channelCreateInput } from "../../../inputs/Landing_page_sales_channelCreateInput";
import { Landing_page_sales_channelUpdateInput } from "../../../inputs/Landing_page_sales_channelUpdateInput";
import { Landing_page_sales_channelWhereUniqueInput } from "../../../inputs/Landing_page_sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLanding_page_sales_channelArgs {
  @TypeGraphQL.Field(_type => Landing_page_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_page_sales_channelWhereUniqueInput;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelCreateInput, {
    nullable: false
  })
  create!: Landing_page_sales_channelCreateInput;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelUpdateInput, {
    nullable: false
  })
  update!: Landing_page_sales_channelUpdateInput;
}

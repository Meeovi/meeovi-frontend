import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_sales_channelWhereInput } from "../../../inputs/Landing_page_sales_channelWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLanding_page_sales_channelArgs {
  @TypeGraphQL.Field(_type => Landing_page_sales_channelWhereInput, {
    nullable: true
  })
  where?: Landing_page_sales_channelWhereInput | undefined;
}

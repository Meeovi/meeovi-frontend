import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_sales_channelWhereInput } from "../../../inputs/Theme_sales_channelWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTheme_sales_channelArgs {
  @TypeGraphQL.Field(_type => Theme_sales_channelWhereInput, {
    nullable: true
  })
  where?: Theme_sales_channelWhereInput | undefined;
}

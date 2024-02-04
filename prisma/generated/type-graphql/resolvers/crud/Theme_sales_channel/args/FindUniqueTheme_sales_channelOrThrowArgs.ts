import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_sales_channelWhereUniqueInput } from "../../../inputs/Theme_sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTheme_sales_channelOrThrowArgs {
  @TypeGraphQL.Field(_type => Theme_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Theme_sales_channelWhereUniqueInput;
}

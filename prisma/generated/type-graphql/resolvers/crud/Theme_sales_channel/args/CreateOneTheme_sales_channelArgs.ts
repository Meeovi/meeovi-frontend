import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_sales_channelCreateInput } from "../../../inputs/Theme_sales_channelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTheme_sales_channelArgs {
  @TypeGraphQL.Field(_type => Theme_sales_channelCreateInput, {
    nullable: false
  })
  data!: Theme_sales_channelCreateInput;
}

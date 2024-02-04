import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_sales_channelUpdateInput } from "../../../inputs/Theme_sales_channelUpdateInput";
import { Theme_sales_channelWhereUniqueInput } from "../../../inputs/Theme_sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTheme_sales_channelArgs {
  @TypeGraphQL.Field(_type => Theme_sales_channelUpdateInput, {
    nullable: false
  })
  data!: Theme_sales_channelUpdateInput;

  @TypeGraphQL.Field(_type => Theme_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Theme_sales_channelWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_sales_channelCreateManyInput } from "../../../inputs/Theme_sales_channelCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTheme_sales_channelArgs {
  @TypeGraphQL.Field(_type => [Theme_sales_channelCreateManyInput], {
    nullable: false
  })
  data!: Theme_sales_channelCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

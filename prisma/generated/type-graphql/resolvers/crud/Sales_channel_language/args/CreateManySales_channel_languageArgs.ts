import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_languageCreateManyInput } from "../../../inputs/Sales_channel_languageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySales_channel_languageArgs {
  @TypeGraphQL.Field(_type => [Sales_channel_languageCreateManyInput], {
    nullable: false
  })
  data!: Sales_channel_languageCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

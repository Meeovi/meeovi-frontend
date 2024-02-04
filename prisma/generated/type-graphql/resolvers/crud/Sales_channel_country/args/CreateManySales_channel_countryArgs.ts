import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_countryCreateManyInput } from "../../../inputs/Sales_channel_countryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySales_channel_countryArgs {
  @TypeGraphQL.Field(_type => [Sales_channel_countryCreateManyInput], {
    nullable: false
  })
  data!: Sales_channel_countryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

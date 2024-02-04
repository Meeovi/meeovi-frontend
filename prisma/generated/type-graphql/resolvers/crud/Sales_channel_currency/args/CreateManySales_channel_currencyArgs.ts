import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_currencyCreateManyInput } from "../../../inputs/Sales_channel_currencyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySales_channel_currencyArgs {
  @TypeGraphQL.Field(_type => [Sales_channel_currencyCreateManyInput], {
    nullable: false
  })
  data!: Sales_channel_currencyCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

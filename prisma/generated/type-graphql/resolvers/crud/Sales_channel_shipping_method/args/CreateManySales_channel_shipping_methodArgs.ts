import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_shipping_methodCreateManyInput } from "../../../inputs/Sales_channel_shipping_methodCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySales_channel_shipping_methodArgs {
  @TypeGraphQL.Field(_type => [Sales_channel_shipping_methodCreateManyInput], {
    nullable: false
  })
  data!: Sales_channel_shipping_methodCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

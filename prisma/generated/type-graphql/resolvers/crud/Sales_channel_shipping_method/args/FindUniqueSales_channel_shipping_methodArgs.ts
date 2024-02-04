import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_shipping_methodWhereUniqueInput } from "../../../inputs/Sales_channel_shipping_methodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSales_channel_shipping_methodArgs {
  @TypeGraphQL.Field(_type => Sales_channel_shipping_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_shipping_methodWhereUniqueInput;
}

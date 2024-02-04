import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_shipping_methodCreateInput } from "../../../inputs/Sales_channel_shipping_methodCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSales_channel_shipping_methodArgs {
  @TypeGraphQL.Field(_type => Sales_channel_shipping_methodCreateInput, {
    nullable: false
  })
  data!: Sales_channel_shipping_methodCreateInput;
}

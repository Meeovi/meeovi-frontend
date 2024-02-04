import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_payment_methodCreateInput } from "../../../inputs/Sales_channel_payment_methodCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSales_channel_payment_methodArgs {
  @TypeGraphQL.Field(_type => Sales_channel_payment_methodCreateInput, {
    nullable: false
  })
  data!: Sales_channel_payment_methodCreateInput;
}

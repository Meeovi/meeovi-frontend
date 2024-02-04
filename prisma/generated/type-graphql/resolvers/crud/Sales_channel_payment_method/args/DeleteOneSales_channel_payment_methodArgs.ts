import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_payment_methodWhereUniqueInput } from "../../../inputs/Sales_channel_payment_methodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSales_channel_payment_methodArgs {
  @TypeGraphQL.Field(_type => Sales_channel_payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_payment_methodWhereUniqueInput;
}

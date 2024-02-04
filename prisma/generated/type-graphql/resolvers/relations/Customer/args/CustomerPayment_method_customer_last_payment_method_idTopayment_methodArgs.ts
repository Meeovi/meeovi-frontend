import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_methodWhereInput } from "../../../inputs/Payment_methodWhereInput";

@TypeGraphQL.ArgsType()
export class CustomerPayment_method_customer_last_payment_method_idTopayment_methodArgs {
  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  where?: Payment_methodWhereInput | undefined;
}

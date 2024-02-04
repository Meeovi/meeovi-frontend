import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_captureCreateInput } from "../../../inputs/Order_transaction_captureCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrder_transaction_captureArgs {
  @TypeGraphQL.Field(_type => Order_transaction_captureCreateInput, {
    nullable: false
  })
  data!: Order_transaction_captureCreateInput;
}

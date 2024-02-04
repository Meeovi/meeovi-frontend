import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transactionCreateInput } from "../../../inputs/Order_transactionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrder_transactionArgs {
  @TypeGraphQL.Field(_type => Order_transactionCreateInput, {
    nullable: false
  })
  data!: Order_transactionCreateInput;
}

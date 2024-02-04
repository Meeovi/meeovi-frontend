import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transactionWhereUniqueInput } from "../../../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOrder_transactionArgs {
  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transactionWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transactionWhereInput } from "../../../inputs/Order_transactionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrder_transactionArgs {
  @TypeGraphQL.Field(_type => Order_transactionWhereInput, {
    nullable: true
  })
  where?: Order_transactionWhereInput | undefined;
}

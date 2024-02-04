import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transactionCreateInput } from "../../../inputs/Order_transactionCreateInput";
import { Order_transactionUpdateInput } from "../../../inputs/Order_transactionUpdateInput";
import { Order_transactionWhereUniqueInput } from "../../../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOrder_transactionArgs {
  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transactionCreateInput, {
    nullable: false
  })
  create!: Order_transactionCreateInput;

  @TypeGraphQL.Field(_type => Order_transactionUpdateInput, {
    nullable: false
  })
  update!: Order_transactionUpdateInput;
}

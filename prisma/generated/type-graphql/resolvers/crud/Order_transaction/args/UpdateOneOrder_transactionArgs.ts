import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transactionUpdateInput } from "../../../inputs/Order_transactionUpdateInput";
import { Order_transactionWhereUniqueInput } from "../../../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOrder_transactionArgs {
  @TypeGraphQL.Field(_type => Order_transactionUpdateInput, {
    nullable: false
  })
  data!: Order_transactionUpdateInput;

  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transactionWhereUniqueInput;
}

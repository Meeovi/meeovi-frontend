import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transactionUpdateManyMutationInput } from "../../../inputs/Order_transactionUpdateManyMutationInput";
import { Order_transactionWhereInput } from "../../../inputs/Order_transactionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrder_transactionArgs {
  @TypeGraphQL.Field(_type => Order_transactionUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_transactionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Order_transactionWhereInput, {
    nullable: true
  })
  where?: Order_transactionWhereInput | undefined;
}

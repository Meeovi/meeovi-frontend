import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_customerUpdateManyMutationInput } from "../../../inputs/Order_customerUpdateManyMutationInput";
import { Order_customerWhereInput } from "../../../inputs/Order_customerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrder_customerArgs {
  @TypeGraphQL.Field(_type => Order_customerUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_customerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Order_customerWhereInput, {
    nullable: true
  })
  where?: Order_customerWhereInput | undefined;
}

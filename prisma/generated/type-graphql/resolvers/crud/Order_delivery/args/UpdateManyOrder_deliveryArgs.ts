import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_deliveryUpdateManyMutationInput } from "../../../inputs/Order_deliveryUpdateManyMutationInput";
import { Order_deliveryWhereInput } from "../../../inputs/Order_deliveryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrder_deliveryArgs {
  @TypeGraphQL.Field(_type => Order_deliveryUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_deliveryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Order_deliveryWhereInput, {
    nullable: true
  })
  where?: Order_deliveryWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_delivery_positionUpdateManyMutationInput } from "../../../inputs/Order_delivery_positionUpdateManyMutationInput";
import { Order_delivery_positionWhereInput } from "../../../inputs/Order_delivery_positionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrder_delivery_positionArgs {
  @TypeGraphQL.Field(_type => Order_delivery_positionUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_delivery_positionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Order_delivery_positionWhereInput, {
    nullable: true
  })
  where?: Order_delivery_positionWhereInput | undefined;
}

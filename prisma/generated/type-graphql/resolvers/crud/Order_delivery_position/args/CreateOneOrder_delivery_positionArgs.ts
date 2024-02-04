import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_delivery_positionCreateInput } from "../../../inputs/Order_delivery_positionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrder_delivery_positionArgs {
  @TypeGraphQL.Field(_type => Order_delivery_positionCreateInput, {
    nullable: false
  })
  data!: Order_delivery_positionCreateInput;
}

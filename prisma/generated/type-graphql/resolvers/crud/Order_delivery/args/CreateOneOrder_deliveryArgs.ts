import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_deliveryCreateInput } from "../../../inputs/Order_deliveryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrder_deliveryArgs {
  @TypeGraphQL.Field(_type => Order_deliveryCreateInput, {
    nullable: false
  })
  data!: Order_deliveryCreateInput;
}

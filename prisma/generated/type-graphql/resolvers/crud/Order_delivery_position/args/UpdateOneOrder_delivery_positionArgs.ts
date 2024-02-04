import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_delivery_positionUpdateInput } from "../../../inputs/Order_delivery_positionUpdateInput";
import { Order_delivery_positionWhereUniqueInput } from "../../../inputs/Order_delivery_positionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOrder_delivery_positionArgs {
  @TypeGraphQL.Field(_type => Order_delivery_positionUpdateInput, {
    nullable: false
  })
  data!: Order_delivery_positionUpdateInput;

  @TypeGraphQL.Field(_type => Order_delivery_positionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_delivery_positionWhereUniqueInput;
}

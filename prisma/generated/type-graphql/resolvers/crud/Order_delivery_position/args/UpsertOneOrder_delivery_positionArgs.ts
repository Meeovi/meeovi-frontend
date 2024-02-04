import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_delivery_positionCreateInput } from "../../../inputs/Order_delivery_positionCreateInput";
import { Order_delivery_positionUpdateInput } from "../../../inputs/Order_delivery_positionUpdateInput";
import { Order_delivery_positionWhereUniqueInput } from "../../../inputs/Order_delivery_positionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOrder_delivery_positionArgs {
  @TypeGraphQL.Field(_type => Order_delivery_positionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_delivery_positionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_delivery_positionCreateInput, {
    nullable: false
  })
  create!: Order_delivery_positionCreateInput;

  @TypeGraphQL.Field(_type => Order_delivery_positionUpdateInput, {
    nullable: false
  })
  update!: Order_delivery_positionUpdateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_deliveryCreateInput } from "../../../inputs/Order_deliveryCreateInput";
import { Order_deliveryUpdateInput } from "../../../inputs/Order_deliveryUpdateInput";
import { Order_deliveryWhereUniqueInput } from "../../../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOrder_deliveryArgs {
  @TypeGraphQL.Field(_type => Order_deliveryWhereUniqueInput, {
    nullable: false
  })
  where!: Order_deliveryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_deliveryCreateInput, {
    nullable: false
  })
  create!: Order_deliveryCreateInput;

  @TypeGraphQL.Field(_type => Order_deliveryUpdateInput, {
    nullable: false
  })
  update!: Order_deliveryUpdateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_deliveryUpdateInput } from "../../../inputs/Order_deliveryUpdateInput";
import { Order_deliveryWhereUniqueInput } from "../../../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOrder_deliveryArgs {
  @TypeGraphQL.Field(_type => Order_deliveryUpdateInput, {
    nullable: false
  })
  data!: Order_deliveryUpdateInput;

  @TypeGraphQL.Field(_type => Order_deliveryWhereUniqueInput, {
    nullable: false
  })
  where!: Order_deliveryWhereUniqueInput;
}

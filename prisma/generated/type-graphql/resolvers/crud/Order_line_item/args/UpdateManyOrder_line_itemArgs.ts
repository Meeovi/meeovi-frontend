import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_itemUpdateManyMutationInput } from "../../../inputs/Order_line_itemUpdateManyMutationInput";
import { Order_line_itemWhereInput } from "../../../inputs/Order_line_itemWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrder_line_itemArgs {
  @TypeGraphQL.Field(_type => Order_line_itemUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_line_itemUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Order_line_itemWhereInput, {
    nullable: true
  })
  where?: Order_line_itemWhereInput | undefined;
}

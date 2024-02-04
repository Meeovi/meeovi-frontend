import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_item_downloadUpdateManyMutationInput } from "../../../inputs/Order_line_item_downloadUpdateManyMutationInput";
import { Order_line_item_downloadWhereInput } from "../../../inputs/Order_line_item_downloadWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrder_line_item_downloadArgs {
  @TypeGraphQL.Field(_type => Order_line_item_downloadUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_line_item_downloadUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Order_line_item_downloadWhereInput, {
    nullable: true
  })
  where?: Order_line_item_downloadWhereInput | undefined;
}

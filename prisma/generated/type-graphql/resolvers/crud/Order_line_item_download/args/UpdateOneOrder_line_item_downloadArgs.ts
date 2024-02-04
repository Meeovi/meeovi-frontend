import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_item_downloadUpdateInput } from "../../../inputs/Order_line_item_downloadUpdateInput";
import { Order_line_item_downloadWhereUniqueInput } from "../../../inputs/Order_line_item_downloadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOrder_line_item_downloadArgs {
  @TypeGraphQL.Field(_type => Order_line_item_downloadUpdateInput, {
    nullable: false
  })
  data!: Order_line_item_downloadUpdateInput;

  @TypeGraphQL.Field(_type => Order_line_item_downloadWhereUniqueInput, {
    nullable: false
  })
  where!: Order_line_item_downloadWhereUniqueInput;
}

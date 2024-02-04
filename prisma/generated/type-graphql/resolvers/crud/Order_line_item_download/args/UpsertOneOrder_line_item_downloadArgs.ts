import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_item_downloadCreateInput } from "../../../inputs/Order_line_item_downloadCreateInput";
import { Order_line_item_downloadUpdateInput } from "../../../inputs/Order_line_item_downloadUpdateInput";
import { Order_line_item_downloadWhereUniqueInput } from "../../../inputs/Order_line_item_downloadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOrder_line_item_downloadArgs {
  @TypeGraphQL.Field(_type => Order_line_item_downloadWhereUniqueInput, {
    nullable: false
  })
  where!: Order_line_item_downloadWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_line_item_downloadCreateInput, {
    nullable: false
  })
  create!: Order_line_item_downloadCreateInput;

  @TypeGraphQL.Field(_type => Order_line_item_downloadUpdateInput, {
    nullable: false
  })
  update!: Order_line_item_downloadUpdateInput;
}

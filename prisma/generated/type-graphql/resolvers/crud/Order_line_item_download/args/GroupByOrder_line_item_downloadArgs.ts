import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_item_downloadOrderByWithAggregationInput } from "../../../inputs/Order_line_item_downloadOrderByWithAggregationInput";
import { Order_line_item_downloadScalarWhereWithAggregatesInput } from "../../../inputs/Order_line_item_downloadScalarWhereWithAggregatesInput";
import { Order_line_item_downloadWhereInput } from "../../../inputs/Order_line_item_downloadWhereInput";
import { Order_line_item_downloadScalarFieldEnum } from "../../../../enums/Order_line_item_downloadScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrder_line_item_downloadArgs {
  @TypeGraphQL.Field(_type => Order_line_item_downloadWhereInput, {
    nullable: true
  })
  where?: Order_line_item_downloadWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Order_line_item_downloadOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "position" | "access_granted" | "order_line_item_id" | "order_line_item_version_id" | "media_id" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Order_line_item_downloadScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Order_line_item_downloadScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

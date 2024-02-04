import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_delivery_positionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Order_delivery_positionOrderByWithRelationAndSearchRelevanceInput";
import { Order_delivery_positionWhereInput } from "../../../inputs/Order_delivery_positionWhereInput";
import { Order_delivery_positionWhereUniqueInput } from "../../../inputs/Order_delivery_positionWhereUniqueInput";
import { Order_delivery_positionScalarFieldEnum } from "../../../../enums/Order_delivery_positionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyOrder_delivery_positionArgs {
  @TypeGraphQL.Field(_type => Order_delivery_positionWhereInput, {
    nullable: true
  })
  where?: Order_delivery_positionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Order_delivery_positionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_delivery_positionWhereUniqueInput, {
    nullable: true
  })
  cursor?: Order_delivery_positionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "order_delivery_id" | "order_delivery_version_id" | "order_line_item_id" | "order_line_item_version_id" | "price" | "total_price" | "unit_price" | "quantity" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}

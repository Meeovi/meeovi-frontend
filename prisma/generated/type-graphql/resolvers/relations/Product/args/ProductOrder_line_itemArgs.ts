import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_itemOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Order_line_itemOrderByWithRelationAndSearchRelevanceInput";
import { Order_line_itemWhereInput } from "../../../inputs/Order_line_itemWhereInput";
import { Order_line_itemWhereUniqueInput } from "../../../inputs/Order_line_itemWhereUniqueInput";
import { Order_line_itemScalarFieldEnum } from "../../../../enums/Order_line_itemScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ProductOrder_line_itemArgs {
  @TypeGraphQL.Field(_type => Order_line_itemWhereInput, {
    nullable: true
  })
  where?: Order_line_itemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Order_line_itemOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemWhereUniqueInput, {
    nullable: true
  })
  cursor?: Order_line_itemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "order_id" | "order_version_id" | "parent_id" | "parent_version_id" | "identifier" | "referenced_id" | "product_id" | "product_version_id" | "promotion_id" | "states" | "label" | "description" | "cover_id" | "quantity" | "unit_price" | "total_price" | "type" | "payload" | "price_definition" | "price" | "stackable" | "removable" | "good" | "position" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}

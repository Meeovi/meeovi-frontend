import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_line_item_downloadOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Order_line_item_downloadOrderByWithRelationAndSearchRelevanceInput";
import { Order_line_item_downloadWhereInput } from "../../../inputs/Order_line_item_downloadWhereInput";
import { Order_line_item_downloadWhereUniqueInput } from "../../../inputs/Order_line_item_downloadWhereUniqueInput";
import { Order_line_item_downloadScalarFieldEnum } from "../../../../enums/Order_line_item_downloadScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstOrder_line_item_downloadOrThrowArgs {
  @TypeGraphQL.Field(_type => Order_line_item_downloadWhereInput, {
    nullable: true
  })
  where?: Order_line_item_downloadWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Order_line_item_downloadOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadWhereUniqueInput, {
    nullable: true
  })
  cursor?: Order_line_item_downloadWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "position" | "access_granted" | "order_line_item_id" | "order_line_item_version_id" | "media_id" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}

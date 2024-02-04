import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CartOrderByWithRelationAndSearchRelevanceInput";
import { CartWhereInput } from "../../../inputs/CartWhereInput";
import { CartWhereUniqueInput } from "../../../inputs/CartWhereUniqueInput";
import { CartScalarFieldEnum } from "../../../../enums/CartScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCartOrThrowArgs {
  @TypeGraphQL.Field(_type => CartWhereInput, {
    nullable: true
  })
  where?: CartWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CartOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CartOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: true
  })
  cursor?: CartWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CartScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"token" | "name" | "cart" | "price" | "line_item_count" | "currency_id" | "shipping_method_id" | "payment_method_id" | "country_id" | "customer_id" | "sales_channel_id" | "rule_ids" | "created_at" | "updated_at" | "auto_increment"> | undefined;
}

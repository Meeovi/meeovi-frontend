import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlist_productOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Customer_wishlist_productOrderByWithRelationAndSearchRelevanceInput";
import { Customer_wishlist_productWhereInput } from "../../../inputs/Customer_wishlist_productWhereInput";
import { Customer_wishlist_productWhereUniqueInput } from "../../../inputs/Customer_wishlist_productWhereUniqueInput";
import { Customer_wishlist_productScalarFieldEnum } from "../../../../enums/Customer_wishlist_productScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCustomer_wishlist_productArgs {
  @TypeGraphQL.Field(_type => Customer_wishlist_productWhereInput, {
    nullable: true
  })
  where?: Customer_wishlist_productWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Customer_wishlist_productOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productWhereUniqueInput, {
    nullable: true
  })
  cursor?: Customer_wishlist_productWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "customer_wishlist_id" | "product_id" | "product_version_id" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}

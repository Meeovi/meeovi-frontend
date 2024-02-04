import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlist_productCreateInput } from "../../../inputs/Customer_wishlist_productCreateInput";
import { Customer_wishlist_productUpdateInput } from "../../../inputs/Customer_wishlist_productUpdateInput";
import { Customer_wishlist_productWhereUniqueInput } from "../../../inputs/Customer_wishlist_productWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCustomer_wishlist_productArgs {
  @TypeGraphQL.Field(_type => Customer_wishlist_productWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_wishlist_productWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_wishlist_productCreateInput, {
    nullable: false
  })
  create!: Customer_wishlist_productCreateInput;

  @TypeGraphQL.Field(_type => Customer_wishlist_productUpdateInput, {
    nullable: false
  })
  update!: Customer_wishlist_productUpdateInput;
}

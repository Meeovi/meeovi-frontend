import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlist_productCreateInput } from "../../../inputs/Customer_wishlist_productCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCustomer_wishlist_productArgs {
  @TypeGraphQL.Field(_type => Customer_wishlist_productCreateInput, {
    nullable: false
  })
  data!: Customer_wishlist_productCreateInput;
}

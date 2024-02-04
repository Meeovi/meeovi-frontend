import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlist_productWhereUniqueInput } from "../../../inputs/Customer_wishlist_productWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCustomer_wishlist_productArgs {
  @TypeGraphQL.Field(_type => Customer_wishlist_productWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_wishlist_productWhereUniqueInput;
}

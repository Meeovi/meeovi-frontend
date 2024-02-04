import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlist_productWhereInput } from "../../../inputs/Customer_wishlist_productWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustomer_wishlist_productArgs {
  @TypeGraphQL.Field(_type => Customer_wishlist_productWhereInput, {
    nullable: true
  })
  where?: Customer_wishlist_productWhereInput | undefined;
}

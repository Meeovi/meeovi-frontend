import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlist_productCreateManyInput } from "../../../inputs/Customer_wishlist_productCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustomer_wishlist_productArgs {
  @TypeGraphQL.Field(_type => [Customer_wishlist_productCreateManyInput], {
    nullable: false
  })
  data!: Customer_wishlist_productCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

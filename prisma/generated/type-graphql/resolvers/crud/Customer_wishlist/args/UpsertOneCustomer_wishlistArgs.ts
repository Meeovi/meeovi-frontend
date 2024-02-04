import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlistCreateInput } from "../../../inputs/Customer_wishlistCreateInput";
import { Customer_wishlistUpdateInput } from "../../../inputs/Customer_wishlistUpdateInput";
import { Customer_wishlistWhereUniqueInput } from "../../../inputs/Customer_wishlistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCustomer_wishlistArgs {
  @TypeGraphQL.Field(_type => Customer_wishlistWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_wishlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_wishlistCreateInput, {
    nullable: false
  })
  create!: Customer_wishlistCreateInput;

  @TypeGraphQL.Field(_type => Customer_wishlistUpdateInput, {
    nullable: false
  })
  update!: Customer_wishlistUpdateInput;
}

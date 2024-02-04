import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlistUpdateInput } from "../../../inputs/Customer_wishlistUpdateInput";
import { Customer_wishlistWhereUniqueInput } from "../../../inputs/Customer_wishlistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCustomer_wishlistArgs {
  @TypeGraphQL.Field(_type => Customer_wishlistUpdateInput, {
    nullable: false
  })
  data!: Customer_wishlistUpdateInput;

  @TypeGraphQL.Field(_type => Customer_wishlistWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_wishlistWhereUniqueInput;
}

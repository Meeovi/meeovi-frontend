import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlistWhereUniqueInput } from "../../../inputs/Customer_wishlistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCustomer_wishlistOrThrowArgs {
  @TypeGraphQL.Field(_type => Customer_wishlistWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_wishlistWhereUniqueInput;
}

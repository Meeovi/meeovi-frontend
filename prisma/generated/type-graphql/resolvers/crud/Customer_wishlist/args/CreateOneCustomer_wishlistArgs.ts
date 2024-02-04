import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlistCreateInput } from "../../../inputs/Customer_wishlistCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCustomer_wishlistArgs {
  @TypeGraphQL.Field(_type => Customer_wishlistCreateInput, {
    nullable: false
  })
  data!: Customer_wishlistCreateInput;
}

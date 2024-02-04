import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlistWhereInput } from "../../../inputs/Customer_wishlistWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustomer_wishlistArgs {
  @TypeGraphQL.Field(_type => Customer_wishlistWhereInput, {
    nullable: true
  })
  where?: Customer_wishlistWhereInput | undefined;
}

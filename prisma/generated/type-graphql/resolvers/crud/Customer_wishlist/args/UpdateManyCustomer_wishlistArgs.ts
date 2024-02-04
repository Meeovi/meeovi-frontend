import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlistUpdateManyMutationInput } from "../../../inputs/Customer_wishlistUpdateManyMutationInput";
import { Customer_wishlistWhereInput } from "../../../inputs/Customer_wishlistWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCustomer_wishlistArgs {
  @TypeGraphQL.Field(_type => Customer_wishlistUpdateManyMutationInput, {
    nullable: false
  })
  data!: Customer_wishlistUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Customer_wishlistWhereInput, {
    nullable: true
  })
  where?: Customer_wishlistWhereInput | undefined;
}

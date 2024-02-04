import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlistCreateManyInput } from "../../../inputs/Customer_wishlistCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustomer_wishlistArgs {
  @TypeGraphQL.Field(_type => [Customer_wishlistCreateManyInput], {
    nullable: false
  })
  data!: Customer_wishlistCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

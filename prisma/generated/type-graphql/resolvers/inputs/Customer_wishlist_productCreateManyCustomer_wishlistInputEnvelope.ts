import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlist_productCreateManyCustomer_wishlistInput } from "../inputs/Customer_wishlist_productCreateManyCustomer_wishlistInput";

@TypeGraphQL.InputType("Customer_wishlist_productCreateManyCustomer_wishlistInputEnvelope", {})
export class Customer_wishlist_productCreateManyCustomer_wishlistInputEnvelope {
  @TypeGraphQL.Field(_type => [Customer_wishlist_productCreateManyCustomer_wishlistInput], {
    nullable: false
  })
  data!: Customer_wishlist_productCreateManyCustomer_wishlistInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

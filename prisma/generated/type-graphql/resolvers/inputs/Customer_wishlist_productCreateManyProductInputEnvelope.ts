import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlist_productCreateManyProductInput } from "../inputs/Customer_wishlist_productCreateManyProductInput";

@TypeGraphQL.InputType("Customer_wishlist_productCreateManyProductInputEnvelope", {})
export class Customer_wishlist_productCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Customer_wishlist_productCreateManyProductInput], {
    nullable: false
  })
  data!: Customer_wishlist_productCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlist_productCreateManyCustomer_wishlistInputEnvelope } from "../inputs/Customer_wishlist_productCreateManyCustomer_wishlistInputEnvelope";
import { Customer_wishlist_productCreateOrConnectWithoutCustomer_wishlistInput } from "../inputs/Customer_wishlist_productCreateOrConnectWithoutCustomer_wishlistInput";
import { Customer_wishlist_productCreateWithoutCustomer_wishlistInput } from "../inputs/Customer_wishlist_productCreateWithoutCustomer_wishlistInput";
import { Customer_wishlist_productWhereUniqueInput } from "../inputs/Customer_wishlist_productWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlist_productCreateNestedManyWithoutCustomer_wishlistInput", {})
export class Customer_wishlist_productCreateNestedManyWithoutCustomer_wishlistInput {
  @TypeGraphQL.Field(_type => [Customer_wishlist_productCreateWithoutCustomer_wishlistInput], {
    nullable: true
  })
  create?: Customer_wishlist_productCreateWithoutCustomer_wishlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productCreateOrConnectWithoutCustomer_wishlistInput], {
    nullable: true
  })
  connectOrCreate?: Customer_wishlist_productCreateOrConnectWithoutCustomer_wishlistInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productCreateManyCustomer_wishlistInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_wishlist_productCreateManyCustomer_wishlistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_wishlist_productWhereUniqueInput[] | undefined;
}

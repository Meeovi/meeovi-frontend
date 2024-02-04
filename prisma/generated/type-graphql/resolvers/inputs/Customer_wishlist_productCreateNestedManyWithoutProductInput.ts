import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlist_productCreateManyProductInputEnvelope } from "../inputs/Customer_wishlist_productCreateManyProductInputEnvelope";
import { Customer_wishlist_productCreateOrConnectWithoutProductInput } from "../inputs/Customer_wishlist_productCreateOrConnectWithoutProductInput";
import { Customer_wishlist_productCreateWithoutProductInput } from "../inputs/Customer_wishlist_productCreateWithoutProductInput";
import { Customer_wishlist_productWhereUniqueInput } from "../inputs/Customer_wishlist_productWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlist_productCreateNestedManyWithoutProductInput", {})
export class Customer_wishlist_productCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Customer_wishlist_productCreateWithoutProductInput], {
    nullable: true
  })
  create?: Customer_wishlist_productCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Customer_wishlist_productCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_wishlist_productCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_wishlist_productWhereUniqueInput[] | undefined;
}

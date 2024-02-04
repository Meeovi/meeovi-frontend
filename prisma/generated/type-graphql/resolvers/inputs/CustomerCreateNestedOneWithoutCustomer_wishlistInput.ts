import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutCustomer_wishlistInput } from "../inputs/CustomerCreateOrConnectWithoutCustomer_wishlistInput";
import { CustomerCreateWithoutCustomer_wishlistInput } from "../inputs/CustomerCreateWithoutCustomer_wishlistInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedOneWithoutCustomer_wishlistInput", {})
export class CustomerCreateNestedOneWithoutCustomer_wishlistInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_wishlistInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutCustomer_wishlistInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutCustomer_wishlistInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutCustomer_wishlistInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
